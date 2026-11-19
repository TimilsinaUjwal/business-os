# Business OS

Centralized multi-business management platform — one parent portfolio, dynamically scalable businesses (13 → 500+ with no code change), per-business integrations hub with a free-first provider registry.

Built for **Supabase** (PostgreSQL + RLS) and **Netlify** (static hosting). No build step, no dependencies to install.

## Deploy to Netlify

1. Push this repo to GitHub (or use "Import from Git" in Netlify).
2. In Netlify: **Add new site → Import an existing project → GitHub → pick this repo**.
3. Settings: build command *(leave empty)*, publish directory `.` — or just accept the included `netlify.toml`.
4. Deploy. Done.

No environment variables needed — `config.js` ships with the project URL and the publishable anon key (safe for browsers; all writes are protected by row-level security on the Supabase side).

## Stack

| Layer | Tech |
| --- | --- |
| Frontend | Single-page vanilla JS + HTML (zero build) |
| Database | Supabase PostgreSQL (`hsfueyrenmmdpdelmrgz`) |
| Client SDK | `@supabase/supabase-js` via CDN |
| Hosting | Netlify (static) |

## Data model (11 tables)

- `businesses` — one row per business; add a row = provisioned (the app auto-inserts standard modules + owner access)
- `users`, `user_business_access` — hybrid access model (owner/admin/member/viewer per business)
- `module_catalog`, `business_modules` — standard modules enabled per business
- `kpi_definitions`, `kpi_actuals` — business-specific KPIs with targets and logged actuals
- `integration_providers` — flexible registry: add a provider = insert a row, never a schema change
- `external_accounts` — multiple accounts per provider per business; independent connect/disconnect
- `integration_sync_log`, `provider_id_mappings` — sync history and external↔internal ID mapping

## Roadmap (v0.2+)

- Supabase Auth (magic-link login) + real per-business RLS policies
- Realtime dashboards
- Real provider connections (GA4, Zoho, Stripe, Resend…) via Edge Functions