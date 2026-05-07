# INTAKA

Money, off-grid. The fintech sister of [P4X](https://p4x.io) — part of the Paracord product sphere.

## Status

**v0.1.0** — Pre-launch marketing site. Waitlist + Coming Soon pages for Card / Wallet / Transfers.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with custom Intaka design tokens
- **Framer Motion** for animations
- **Supabase** (auth + waitlist DB)
- **Vercel** (deploy target)

Mirrors the P4X stack 1:1 so the team works in one paradigm.

## Setup

```bash
# Install deps
npm install

# Copy env file and fill in Supabase credentials
cp .env.local.example .env.local

# Set up Supabase
# 1. Create a new project at supabase.com
# 2. Run /supabase/migrations/001_waitlist.sql in the SQL editor
# 3. Copy URL and anon key to .env.local

# Run dev
npm run dev
```

## Deploy

```bash
# Push to GitHub
git remote add origin git@github.com:maddiehuxley/intaka.git
git push -u origin main

# Connect Vercel
# - Add Vercel project pointing at this repo
# - Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in env vars
#   (Production + Preview)
# - Deploy
```

## Structure

```
app/
  page.tsx              — Landing (Hero + Manifesto + Sphere + Waitlist)
  card/page.tsx         — Card product (Coming Soon)
  wallet/page.tsx       — Wallet product (Coming Soon)
  transfers/page.tsx    — Transfers product (Coming Soon)
  auth/login/page.tsx   — Login
  auth/signup/page.tsx  — Signup
  layout.tsx            — Root shell (Header + Footer)
  globals.css           — Design tokens + base styles

components/
  Header.tsx            — Top nav, includes P4X sister-link
  Footer.tsx            — Footer with Paracord sphere links
  Hero.tsx              — Landing hero with 3D card mockup
  Manifesto.tsx         — Values block (4 principles)
  ProductSphere.tsx     — Paracord ecosystem visual
  Waitlist.tsx          — Email capture (Supabase)
  ComingSoon.tsx        — Reusable product page template
  AuthShell.tsx         — Login/signup layout wrapper

lib/
  supabase.ts           — Supabase client factory

supabase/
  migrations/           — DB schema (run in SQL editor)

public/
  logos/                — Drop INTAKA logos here (icon, wordmark, backdrop)
```

## Design system

Colors are defined as Tailwind tokens in `tailwind.config.ts`:

- `intaka-red` — `#FF1F2E` (primary accent, matches card)
- `intaka-red-deep` — `#C8121F` (hover/active)
- `intaka-red-glow` — `#FF4A56` (highlights)
- `intaka-dark` — `#0A0204` (base background)
- `intaka-panel` — `#140509` (raised surface)
- `intaka-line` — `#2A1018` (borders)
- `intaka-ink` — `#F5E8EB` (primary text)

Typography:
- Display: **Rajdhani** (geometric, matches P4X)
- Body: **DM Sans**
- Mono: **JetBrains Mono**

Voice rules (from Paracord brand):
- **Affirmative on values** — describe what we do, not what others don't.
- **Edgy on positioning** — we can be sharp about the category ("megacorp drag", "1996 banking") without naming specific competitors.
- **No "bank" / "banka" / "banking"** anywhere customer-facing. "Fintech", "money", "accounts", "wallet" instead.
- Sentence case, never Title Case.

## Roadmap

- v0.1 — Marketing site + waitlist (this) ✓
- v0.2 — User dashboard (read-only, post-BaaS-partner agreement)
- v0.3 — Card management (lock/unlock, virtual cards)
- v0.4 — P4X integration (deep link auth + crypto rewards)

## Notes

- Card visuals match the gradient + wave-line aesthetic from the physical card design.
- All sphere products (P4X, Paragram, Commerce) are linked as external; replace URLs in `Footer.tsx` and `ProductSphere.tsx` once domains are confirmed.
- Auth currently doubles as waitlist signup. When Intaka actually launches, swap the success messaging in `signup/page.tsx`.

---

© Paracord Commerce s.r.o.
