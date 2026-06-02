# Lakshitography — PRD

## Problem Statement (original)
Premium, dark-themed photography portfolio "Lakshitography" with cinematic 2x2 auto-rotating hero grid, sections "What I Do", "What I Don't Do", "My Approach", final emotional CTA, Services page with ₹ pricing cards, categorized Gallery + lightbox, public booking form + WhatsApp deep-link, and an admin login + dashboard to manage bookings.

## User Personas
- **Visitor / Potential client** — couples, small families, hosts of intimate gatherings. Wants to feel the photographer's tone, see real prices, and book without friction.
- **Lakshita (admin)** — reviews and manages incoming bookings, updates statuses, deletes spam.

## Architecture
- **Backend**: FastAPI + Motor (MongoDB). JWT (bearer) auth. bcrypt password hashing. Admin seeded idempotently on startup.
- **Frontend**: React 19 + react-router 7 + framer-motion + Tailwind + Shadcn (sonner). AuthContext, axios client with Bearer interceptor.

## Implementation Log
**2026-06-02**
- Built backend: `/api/auth/login`, `/api/auth/me`, `/api/bookings` (public POST, admin GET/PATCH/DELETE), `/api/admin/stats`, `/api/health`. Admin seeded from env. MongoDB indexes on users.email, bookings.created_at.
- Built frontend pages: Home (HeroGrid auto-rotation, What I Do, What I Don't Do, My Approach timeline, Final CTA), Services (5 cards with ₹ pricing), Gallery (filter + lightbox), Contact (form + WhatsApp deep-link), Admin Login, Admin Dashboard (stats, status filter, status update, delete, refresh, logout).
- Theme: deep blacks, muted gold, warm beige, peach. Cormorant Garamond + Outfit fonts.
- Tested: 14/14 backend pytest pass; full Playwright UI flows pass.

## Core Requirements (static)
- Premium cinematic dark theme, no AI-slop generic violet gradients.
- 2x2 hero with auto-rotation every 3.5s.
- 5 services (Couple Lifestyle, Family Portraits, Kids' Birthday, Anniversary, Kitty Gathering).
- Public can submit a booking; only admin can view/update/delete.
- WhatsApp + email + phone CTAs visible.

## Backlog / Next Tasks
- **P1**: Replace dummy WhatsApp number `919876543210` with Lakshita's real number; replace placeholder email/phone in Footer & Contact.
- **P1**: Real gallery images (Unsplash stock currently — swap for Lakshita's actual portfolio).
- **P2**: Email notification on new booking (Resend integration).
- **P2**: Calendar availability check (block already-confirmed dates).
- **P2**: Public testimonials / Instagram embed section.
- **P3**: PWA install prompt, SEO meta tags + OpenGraph, sitemap.
- **P3**: Brute-force lockout on admin login.

## Test Credentials
See `/app/memory/test_credentials.md`. Admin: admin@lakshitography.com / Lakshita@2025.
