"""Backend API tests for Lakshitography."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://luxury-photo-demo.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"

ADMIN_EMAIL = "lakshitography@gmail.com"
ADMIN_PASSWORD = "Ivar@3193"


@pytest.fixture(scope="session")
def admin_token():
    r = requests.post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD}, timeout=20)
    assert r.status_code == 200, f"Login failed: {r.status_code} {r.text}"
    data = r.json()
    assert "access_token" in data and data["user"]["role"] == "admin"
    return data["access_token"]


@pytest.fixture
def auth_headers(admin_token):
    return {"Authorization": f"Bearer {admin_token}"}


# ---------- Health ----------
def test_health():
    r = requests.get(f"{API}/health", timeout=10)
    assert r.status_code == 200
    assert r.json().get("status") == "ok"


# ---------- Auth ----------
def test_login_invalid():
    r = requests.post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": "wrong"}, timeout=10)
    assert r.status_code == 401


def test_auth_me(auth_headers):
    r = requests.get(f"{API}/auth/me", headers=auth_headers, timeout=10)
    assert r.status_code == 200
    assert r.json()["email"] == ADMIN_EMAIL


def test_auth_me_no_token():
    r = requests.get(f"{API}/auth/me", timeout=10)
    assert r.status_code in (401, 403)


# ---------- Bookings (public create) ----------
def test_create_booking_public_no_auth():
    payload = {
        "name": "TEST_Tester",
        "email": "test_user@example.com",
        "phone": "+919999999999",
        "service": "couple-lifestyle",
        "preferred_date": "2026-02-15",
        "people_count": "2",
        "location": "Bangalore",
        "message": "TEST booking",
    }
    r = requests.post(f"{API}/bookings", json=payload, timeout=15)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["id"] and data["status"] == "new"
    assert data["name"] == "TEST_Tester"
    assert data["service"] == "couple-lifestyle"
    pytest.booking_id = data["id"]


# ---------- Bookings list / auth ----------
def test_list_bookings_no_auth():
    r = requests.get(f"{API}/bookings", timeout=10)
    assert r.status_code in (401, 403)


def test_list_bookings_with_auth(auth_headers):
    r = requests.get(f"{API}/bookings", headers=auth_headers, timeout=10)
    assert r.status_code == 200
    items = r.json()
    assert isinstance(items, list)
    assert any(b["id"] == pytest.booking_id for b in items)


# ---------- Patch status ----------
def test_patch_invalid_status(auth_headers):
    r = requests.patch(f"{API}/bookings/{pytest.booking_id}",
                       json={"status": "foobar"}, headers=auth_headers, timeout=10)
    assert r.status_code == 400


def test_patch_confirmed_and_persist(auth_headers):
    r = requests.patch(f"{API}/bookings/{pytest.booking_id}",
                       json={"status": "confirmed"}, headers=auth_headers, timeout=10)
    assert r.status_code == 200
    assert r.json()["status"] == "confirmed"
    # verify persistence
    r2 = requests.get(f"{API}/bookings", headers=auth_headers, timeout=10)
    b = next((x for x in r2.json() if x["id"] == pytest.booking_id), None)
    assert b and b["status"] == "confirmed"


def test_patch_no_auth():
    r = requests.patch(f"{API}/bookings/{pytest.booking_id}", json={"status": "confirmed"}, timeout=10)
    assert r.status_code in (401, 403)


# ---------- Admin stats ----------
def test_admin_stats_auth(auth_headers):
    r = requests.get(f"{API}/admin/stats", headers=auth_headers, timeout=10)
    assert r.status_code == 200
    data = r.json()
    for k in ("total", "new", "confirmed", "completed"):
        assert k in data and isinstance(data[k], int)


def test_admin_stats_no_auth():
    r = requests.get(f"{API}/admin/stats", timeout=10)
    assert r.status_code in (401, 403)


# ---------- Delete ----------
def test_delete_no_auth():
    r = requests.delete(f"{API}/bookings/{pytest.booking_id}", timeout=10)
    assert r.status_code in (401, 403)


def test_delete_and_verify(auth_headers):
    r = requests.delete(f"{API}/bookings/{pytest.booking_id}", headers=auth_headers, timeout=10)
    assert r.status_code == 200
    # verify gone
    r2 = requests.get(f"{API}/bookings", headers=auth_headers, timeout=10)
    assert not any(b["id"] == pytest.booking_id for b in r2.json())
    # patch should now 404
    r3 = requests.patch(f"{API}/bookings/{pytest.booking_id}", json={"status": "new"},
                        headers=auth_headers, timeout=10)
    assert r3.status_code == 404
