# Lakshitography 📸

A modern, premium photography portfolio website with a Luxury Dark Theme. Includes a public site (Home, Services, Gallery, Contact/Booking) and an Admin dashboard to manage booking inquiries.

**Tech stack:** Next.js (App Router) + Tailwind CSS + framer-motion (frontend) · FastAPI + Motor (backend) · MongoDB (database) · JWT auth.
**Package manager:** npm (frontend) · pip (backend).

---

## 📁 Project Structure

```
/app
├── backend
│   ├── .env                    # MONGO_URL, DB_NAME, JWT_SECRET, ADMIN_*
│   ├── requirements.txt
│   └── server.py               # FastAPI app: auth + booking CRUD + admin seed
├── frontend
│   ├── .env                    # NEXT_PUBLIC_BACKEND_URL
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── package.json            # npm scripts & dependencies
│   └── src
│       ├── app                 # Next.js App Router
│       │   ├── layout.jsx          # root layout (html/body)
│       │   ├── providers.jsx       # React Query + Auth + Toaster (client)
│       │   ├── globals.css         # theme + Tailwind + custom utilities
│       │   ├── (site)/             # public pages (share Navbar + Footer)
│       │   │   ├── layout.jsx
│       │   │   ├── page.jsx            → "/"        (Home)
│       │   │   ├── services/page.jsx   → "/services"
│       │   │   ├── gallery/page.jsx    → "/gallery"
│       │   │   └── contact/            → "/contact" (page + ContactForm)
│       │   └── admin/
│       │       ├── login/page.jsx      → "/admin/login"
│       │       └── page.jsx            → "/admin"  (dashboard)
│       ├── components/         # Navbar, Footer, HeroGrid
│       ├── context/            # AuthContext
│       ├── data/content.js     # ⭐ All gallery/services/hero images + site data
│       └── lib/api.js          # axios client (reads NEXT_PUBLIC_BACKEND_URL)
└── README.md
```

---

## 🚀 Setup & Run

### Prerequisites
- Node.js 18.18+ (Node 20+ recommended for Next.js)
- Python 3.10+
- MongoDB running locally (or a connection string)

### 1. Backend (FastAPI)

```bash
cd /app/backend

# Install dependencies
pip install -r requirements.txt

# backend/.env must contain:
#   MONGO_URL=mongodb://localhost:27017
#   DB_NAME=test_database
#   JWT_SECRET=<a-long-random-secret>
#   ADMIN_EMAIL=admin@lakshitography.com
#   ADMIN_PASSWORD=Lakshita@2025
#   CORS_ORIGINS=*

# Run the API (port 8001, all routes prefixed with /api)
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

> On first start the backend **auto-seeds an admin user** using `ADMIN_EMAIL` / `ADMIN_PASSWORD` from `.env` (see `on_startup` in `server.py`). No separate seed command is needed.

### 2. Frontend (Next.js)

```bash
cd /app/frontend

# Install dependencies (npm)
npm install

# frontend/.env must contain the backend URL:
#   NEXT_PUBLIC_BACKEND_URL=http://localhost:8001

# Development (hot reload) — http://localhost:3000
npm run dev

# Production build & serve
npm run build
npm run start:prod
```

| Script              | What it does                                   |
|---------------------|------------------------------------------------|
| `npm run dev`       | Next.js dev server with hot reload (port 3000) |
| `npm run build`     | Production build                               |
| `npm run start:prod`| Serve the production build (port 3000)         |
| `npm start`         | Alias of `dev` (used by the hosted preview)    |

> **Env var note:** Next.js only exposes variables prefixed with `NEXT_PUBLIC_` to the browser. The frontend reads `process.env.NEXT_PUBLIC_BACKEND_URL` in `src/lib/api.js`. Update this to point at your backend (e.g. `http://localhost:8001` locally, or your server's public URL in production).

### 3. Open the app
- Public site: `http://localhost:3000`
- Admin dashboard: `http://localhost:3000/admin/login`

---

## 🔑 Admin Access

| Field    | Value                              |
|----------|------------------------------------|
| URL      | `/admin/login`                     |
| Email    | `ADMIN_EMAIL` from backend/.env (`admin@lakshitography.com`) |
| Password | `ADMIN_PASSWORD` from backend/.env (`Lakshita@2025`)         |

From the dashboard you can view, filter, update status, and delete booking inquiries.

---

## 🖼️ How to Update Images in the Gallery

All images for the site live in **one file**:

```
/app/frontend/src/data/content.js
```

You do **not** need to touch any component code — just edit this file. In dev (`npm run dev`) the page hot-reloads automatically.

### Step 1 — Get your image URLs
Each image must be a publicly reachable URL (an uploaded asset URL, a CDN link, or a hosted file). Add your new image links to the `REAL` object at the top of the file so they're easy to reuse:

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
