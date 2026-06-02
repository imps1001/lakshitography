from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

import os
import uuid
import logging
import bcrypt
import jwt
from datetime import datetime, timezone, timedelta
from typing import List, Optional

from fastapi import FastAPI, APIRouter, HTTPException, Depends, Request
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, ConfigDict, EmailStr


# ---------- DB ----------
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# ---------- App ----------
app = FastAPI(title="Lakshitography API")
api_router = APIRouter(prefix="/api")
security = HTTPBearer(auto_error=False)

JWT_ALGORITHM = "HS256"


# ---------- Helpers ----------
def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")


def verify_password(plain: str, hashed: str) -> bool:
    try:
        return bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("utf-8"))
    except Exception:
        return False


def create_access_token(user_id: str, email: str, role: str) -> str:
    payload = {
        "sub": user_id,
        "email": email,
        "role": role,
        "exp": datetime.now(timezone.utc) + timedelta(hours=12),
        "type": "access",
    }
    return jwt.encode(payload, os.environ["JWT_SECRET"], algorithm=JWT_ALGORITHM)


async def get_current_admin(creds: Optional[HTTPAuthorizationCredentials] = Depends(security)) -> dict:
    if not creds or not creds.credentials:
        raise HTTPException(status_code=401, detail="Not authenticated")
    token = creds.credentials
    try:
        payload = jwt.decode(token, os.environ["JWT_SECRET"], algorithms=[JWT_ALGORITHM])
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")
    user = await db.users.find_one({"id": payload.get("sub")}, {"_id": 0, "password_hash": 0})
    if not user or user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Admin access required")
    return user


# ---------- Models ----------
class LoginIn(BaseModel):
    email: EmailStr
    password: str


class UserOut(BaseModel):
    id: str
    email: EmailStr
    name: str
    role: str


class LoginOut(BaseModel):
    access_token: str
    user: UserOut


class BookingCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    phone: str = Field(min_length=5, max_length=30)
    service: str
    preferred_date: Optional[str] = None
    people_count: Optional[str] = None
    location: Optional[str] = None
    message: Optional[str] = ""


class Booking(BaseModel):
    id: str
    name: str
    email: EmailStr
    phone: str
    service: str
    preferred_date: Optional[str] = None
    people_count: Optional[str] = None
    location: Optional[str] = None
    message: Optional[str] = ""
    status: str = "new"
    created_at: str


class BookingStatusUpdate(BaseModel):
    status: str  # new | contacted | confirmed | completed | cancelled


# ---------- Public Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Lakshitography API"}


@api_router.get("/health")
async def health():
    return {"status": "ok", "time": datetime.now(timezone.utc).isoformat()}


# ---------- Auth ----------
@api_router.post("/auth/login", response_model=LoginOut)
async def login(payload: LoginIn):
    email = payload.email.lower().strip()
    user = await db.users.find_one({"email": email})
    if not user or not verify_password(payload.password, user.get("password_hash", "")):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    token = create_access_token(user["id"], user["email"], user.get("role", "admin"))
    return LoginOut(
        access_token=token,
        user=UserOut(id=user["id"], email=user["email"], name=user["name"], role=user["role"]),
    )


@api_router.get("/auth/me", response_model=UserOut)
async def me(admin: dict = Depends(get_current_admin)):
    return UserOut(id=admin["id"], email=admin["email"], name=admin["name"], role=admin["role"])


# ---------- Bookings ----------
@api_router.post("/bookings", response_model=Booking)
async def create_booking(payload: BookingCreate):
    doc = {
        "id": str(uuid.uuid4()),
        "name": payload.name.strip(),
        "email": payload.email.lower().strip(),
        "phone": payload.phone.strip(),
        "service": payload.service,
        "preferred_date": payload.preferred_date or None,
        "people_count": payload.people_count or None,
        "location": payload.location or None,
        "message": (payload.message or "").strip(),
        "status": "new",
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.bookings.insert_one(doc)
    doc.pop("_id", None)
    return Booking(**doc)


@api_router.get("/bookings", response_model=List[Booking])
async def list_bookings(admin: dict = Depends(get_current_admin)):
    items = await db.bookings.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return [Booking(**i) for i in items]


@api_router.patch("/bookings/{booking_id}", response_model=Booking)
async def update_booking_status(
    booking_id: str, payload: BookingStatusUpdate, admin: dict = Depends(get_current_admin)
):
    allowed = {"new", "contacted", "confirmed", "completed", "cancelled"}
    if payload.status not in allowed:
        raise HTTPException(status_code=400, detail=f"Invalid status. Must be one of {sorted(allowed)}")
    result = await db.bookings.find_one_and_update(
        {"id": booking_id},
        {"$set": {"status": payload.status}},
        return_document=True,
        projection={"_id": 0},
    )
    if not result:
        raise HTTPException(status_code=404, detail="Booking not found")
    return Booking(**result)


@api_router.delete("/bookings/{booking_id}")
async def delete_booking(booking_id: str, admin: dict = Depends(get_current_admin)):
    res = await db.bookings.delete_one({"id": booking_id})
    if res.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Booking not found")
    return {"ok": True}


@api_router.get("/admin/stats")
async def admin_stats(admin: dict = Depends(get_current_admin)):
    total = await db.bookings.count_documents({})
    new_count = await db.bookings.count_documents({"status": "new"})
    confirmed = await db.bookings.count_documents({"status": "confirmed"})
    completed = await db.bookings.count_documents({"status": "completed"})
    return {"total": total, "new": new_count, "confirmed": confirmed, "completed": completed}


# ---------- App wiring ----------
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("startup")
async def on_startup():
    await db.users.create_index("email", unique=True)
    await db.bookings.create_index("created_at")

    admin_email = os.environ.get("ADMIN_EMAIL", "admin@lakshitography.com").lower().strip()
    admin_password = os.environ.get("ADMIN_PASSWORD", "Lakshita@2025")
    existing = await db.users.find_one({"email": admin_email})
    if existing is None:
        await db.users.insert_one({
            "id": str(uuid.uuid4()),
            "email": admin_email,
            "password_hash": hash_password(admin_password),
            "name": "Lakshita",
            "role": "admin",
            "created_at": datetime.now(timezone.utc).isoformat(),
        })
        logger.info("Seeded admin user: %s", admin_email)
    elif not verify_password(admin_password, existing.get("password_hash", "")):
        await db.users.update_one(
            {"email": admin_email},
            {"$set": {"password_hash": hash_password(admin_password)}},
        )
        logger.info("Updated admin password for: %s", admin_email)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
