/*
# Create job_applications table (single-tenant, no auth)

1. New Tables
- `job_applications`
  - `id` (uuid, primary key)
  - `name` (text, not null) — applicant's full name
  - `email` (text, not null) — applicant's email
  - `phone` (text) — applicant's phone number
  - `position` (text) — position/role the applicant is interested in
  - `message` (text) — cover letter / message from applicant
  - `resume_url` (text) — link to resume file (Google Drive, etc.)
  - `status` (text, default 'pending') — application status
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `job_applications`.
- Allow anon + authenticated INSERT only (public can submit applications).
- No SELECT/UPDATE/DELETE for anon — only authenticated (admin) can read/manage.
*/

CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  position text,
  message text,
  resume_url text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to submit an application
DROP POLICY IF EXISTS "anon_insert_job_applications" ON job_applications;
CREATE POLICY "anon_insert_job_applications" ON job_applications FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Only authenticated users (admins) can view applications
DROP POLICY IF EXISTS "auth_select_job_applications" ON job_applications;
CREATE POLICY "auth_select_job_applications" ON job_applications FOR SELECT
  TO authenticated USING (true);

-- Only authenticated users (admins) can update application status
DROP POLICY IF EXISTS "auth_update_job_applications" ON job_applications;
CREATE POLICY "auth_update_job_applications" ON job_applications FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- Only authenticated users (admins) can delete applications
DROP POLICY IF EXISTS "auth_delete_job_applications" ON job_applications;
CREATE POLICY "auth_delete_job_applications" ON job_applications FOR DELETE
  TO authenticated USING (true);