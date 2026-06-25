# Lakshitography 📸

A modern, premium photography portfolio website with a Luxury Dark Theme. Includes a public site (Home, Services, Gallery, Contact/Booking) and an Admin dashboard to manage booking inquiries.

**Tech stack:** React + Tailwind + Shadcn UI (frontend) · FastAPI + Motor (backend) · MongoDB (database) · JWT auth.

---

## 📁 Project Structure

```
/app
├── backend
│   ├── .env                  # MONGO_URL, DB_NAME, JWT_SECRET, ADMIN_*
│   ├── requirements.txt
│   └── server.py             # FastAPI app: auth + booking CRUD + admin seed
├── frontend
│   ├── .env                  # REACT_APP_BACKEND_URL
│   └── src
│       ├── data/content.js   # ⭐ All gallery/services/hero images + site data
│       ├── components/       # Navbar, Footer, HeroGrid
│       └── pages/            # Home, Services, Gallery, Contact, Admin*
└── README.md
```

---

## 🚀 Setup & Run

### Prerequisites
- Node.js 18+ and **yarn**
- Python 3.10+
- MongoDB running locally (or a connection string)

### 1. Backend (FastAPI)

```bash
cd /app/backend

# Install dependencies
pip install -r requirements.txt

# Make sure backend/.env contains:
#   MONGO_URL=mongodb://localhost:27017
#   DB_NAME=lakshitography
#   JWT_SECRET=<a-long-random-secret>
#   ADMIN_EMAIL=admin@lakshitography.com
#   ADMIN_PASSWORD=admin123
```

The backend runs on `0.0.0.0:8001` and is managed by **supervisor**. All routes are prefixed with `/api`.

```bash
# Restart after .env or dependency changes
sudo supervisorctl restart backend

# Check logs
tail -n 100 /var/log/supervisor/backend.*.log
```

> The first time the backend starts, it **auto-seeds an admin user** using `ADMIN_EMAIL` / `ADMIN_PASSWORD` from `.env` (see `on_startup` in `server.py`). No separate seed command is needed.

### 2. Frontend (React)

```bash
cd /app/frontend

# Install dependencies (use yarn, not npm)
yarn install

# frontend/.env must contain the backend URL:
#   REACT_APP_BACKEND_URL=https://<your-app>.preview.emergentagent.com
```

The frontend runs on port `3000` (supervisor-managed).

```bash
# Restart after .env or dependency changes
sudo supervisorctl restart frontend
```

### 3. Open the app
- Public site: the `REACT_APP_BACKEND_URL` host (port 3000 via ingress)
- Admin dashboard: `/admin/login` → log in with the seeded admin credentials

---

## 🔑 Admin Access

| Field    | Value                          |
|----------|--------------------------------|
| URL      | `/admin/login`                 |
| Email    | `ADMIN_EMAIL` from backend/.env |
| Password | `ADMIN_PASSWORD` from backend/.env |

From the dashboard you can view, filter, update status, and delete booking inquiries.

---

## 🖼️ How to Update Images in the Gallery

All images for the site live in **one file**:

```
/app/frontend/src/data/content.js
```

You do **not** need to touch any component code — just edit this file. After saving, the frontend hot-reloads automatically.

### Step 1 — Get your image URLs
Each image must be a publicly reachable URL (e.g. an uploaded asset URL, a CDN link, or a hosted file). Add your new image links to the `REAL` object at the top of the file so they're easy to reuse:

```js
const REAL = {
  wedding_bride: "https://.../DSC03405.jpg",
  kids_two_girls: "https://.../DSC00237.jpg",
  // 👇 add your new images here
  my_new_photo:  "https://.../my-photo.jpg",
};
```

### Step 2 — Add the photo to the GALLERY grid
Find the `GALLERY` array and add an entry. `category` controls which filter tab the photo shows under, `url` is the image:

```js
export const GALLERY = [
  { category: "Anniversary", url: REAL.wedding_bride },
  { category: "Kids",        url: REAL.kid_pink_tutu },
  // 👇 your new photo
  { category: "Couples",     url: REAL.my_new_photo },
];
```

> **Allowed categories** are defined in the `CATEGORIES` array:
> `["All", "Couples", "Families", "Kids", "Anniversary", "Gatherings"]`
> Use one of these exactly (case-sensitive). To add a brand-new category, add it to `CATEGORIES` first, then use it in `GALLERY`.

### Step 3 (optional) — Update other places images appear
The same file also controls images elsewhere:

- **Hero grid (2×2 on the homepage):** edit `HERO_IMAGES` (the 4 shown) and `HERO_POOL` (the rotation pool).
- **Service cards:** each entry in the `SERVICES` array has an `image:` field — point it at any `REAL.*` or `STOCK.*` key.

### Step 4 — Save & verify
Save the file. The site hot-reloads — open the Gallery page and confirm your new photos appear under the right category and aren't broken. If an image doesn't load, double-check the URL is public and correct.

> 💡 Tip: The `STOCK` object holds temporary stock filler images for categories without real work yet. Replace those keys with `REAL` images as more photos become available.

---

## 🌐 API Endpoints

| Method | Endpoint                  | Auth   | Description                  |
|--------|---------------------------|--------|------------------------------|
| POST   | `/api/auth/login`         | —      | Admin login → JWT            |
| GET    | `/api/auth/me`            | Admin  | Current admin profile        |
| POST   | `/api/bookings`           | —      | Create a booking (public)    |
| GET    | `/api/bookings`           | Admin  | List all bookings            |
| PATCH  | `/api/bookings/{id}`      | Admin  | Update booking status        |
| DELETE | `/api/bookings/{id}`      | Admin  | Delete a booking             |
| GET    | `/api/admin/stats`        | Admin  | Dashboard counts             |
| GET    | `/api/health`             | —      | Health check                 |

---

## 🗄️ Data Models

```
users:    { id, email, password_hash, name, role }
bookings: { id, name, email, phone, service, preferred_date,
            people_count, location, message, status, created_at }
```

Booking `status` is one of: `new | contacted | confirmed | completed | cancelled`.
