# Project memory

## Product intent & audience

- Starter project using Vite + React (frontend) with a Supabase/PostgreSQL backend.
- Domain includes job applications and certificates (Portuguese: "certificados").
- Audience appears to include both anonymous and authenticated users.

## Brand personality & voice

- No brand guidelines inferred yet.

## Visual design & UX direction

- Uses Tailwind CSS for styling and Lucide React for icons (per `.bolt/prompt`).
- No additional UI/theme/icon packages should be installed unless explicitly requested.
- Lucide React icons are the preferred choice for logos.
- No further aesthetic or layout details inferred yet.

## Decisions, constraints & rationale

- Backend: Supabase/PostgreSQL with RLS (Row Level Security) enabled on `public` schema.
- Known tables: `job_applications`, `certificados`.
- Current RLS policies are permissive placeholders (qual/with_check set to `true`):
  - `certificados`: all CRUD operations open to `anon` + `authenticated`.
  - `job_applications`: INSERT open to `anon` + `authenticated`; SELECT/UPDATE/DELETE restricted to `authenticated`.
- Policy naming convention: `{role}_{cmd}_{tablename}` (e.g., `anon_select_certificados`).
- Portuguese is used in database object naming and some user requests; responses should match the user's language.

## Open questions & assumptions

- RLS policies are currently open (`true`) — likely intended to be tightened with proper ownership or tenant checks later.
- No auth provider details or frontend auth flow inferred yet.
- No component library or design system inferred beyond Tailwind + Lucide.
- Schema details (columns, relationships) for the tables are not yet known.