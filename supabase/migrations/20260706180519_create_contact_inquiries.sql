/*
# Create contact_inquiries table (single-tenant, no auth)

1. New Tables
- `contact_inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — the person submitting the inquiry
  - `email` (text, not null) — contact email
  - `phone` (text) — optional phone number
  - `service` (text) — which cleaning service they're interested in
  - `message` (text, not null) — the inquiry message
  - `status` (text, default 'new') — tracking status: new, contacted, closed
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_inquiries`.
- Allow anon + authenticated INSERT so the public contact form can submit.
- Allow anon + authenticated SELECT so the site can display inquiries if needed.
- No UPDATE or DELETE from the anon key (inquiries are immutable once submitted).

3. Notes
- This is a no-auth public contact form, so policies use `TO anon, authenticated`.
- Only INSERT and SELECT are exposed; UPDATE/DELETE are intentionally omitted.
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON contact_inquiries;
CREATE POLICY "anon_insert_inquiries" ON contact_inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_inquiries" ON contact_inquiries;
CREATE POLICY "anon_select_inquiries" ON contact_inquiries FOR SELECT
  TO anon, authenticated USING (true);
