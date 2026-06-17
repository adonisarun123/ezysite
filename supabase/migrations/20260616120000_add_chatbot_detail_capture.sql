-- Chatbot detail capture (June 2026): support the 3-phase Asha flow.
-- Phase 2 collects ~15 optional "deep" requirement fields and phase 3 captures
-- a priority registration payment + transaction id. To avoid a column-per-field
-- explosion, all phase-2 detail is stored in a single JSONB `details` column.
-- Payment is two small scalar columns so the team can filter paid leads fast.
--
-- Safe to re-run: every statement is ADD COLUMN IF NOT EXISTS.
-- Run in the Supabase SQL editor of the project NEXT_PUBLIC_SUPABASE_URL points to.

-- ── leads table (system of record the website forms + chatbot write to) ──
alter table if exists public.leads
  add column if not exists details            jsonb,
  add column if not exists registration_paid  boolean,
  add column if not exists txn_id             text;

comment on column public.leads.details is
  'Phase-2 chatbot requirement detail, or expanded job-seeker fields (first_name/last_name/languages/locality/experience). Free-form JSON; keys may be absent.';
comment on column public.leads.registration_paid is
  'Phase-3: visitor opted into priority service and reported paying the registration fee.';
comment on column public.leads.txn_id is
  'Phase-3: payment transaction/reference id the visitor pasted in chat (unverified — team confirms).';

-- ── chatbot_sessions table (analytics / drop-off / FAQ-gap dataset) ──
alter table if exists public.chatbot_sessions
  add column if not exists details            jsonb,
  add column if not exists registration_paid  boolean,
  add column if not exists txn_id             text,
  add column if not exists phase              smallint;

comment on column public.chatbot_sessions.details is
  'Phase-2 requirement detail / job-seeker fields captured during the session (mirrors leads.details).';
comment on column public.chatbot_sessions.registration_paid is
  'True once the visitor reported paying the priority registration fee.';
comment on column public.chatbot_sessions.txn_id is
  'Payment transaction id reported by the visitor (unverified).';
comment on column public.chatbot_sessions.phase is
  'Furthest detail-collection phase reached: 1 = core fields, 2 = deep details, 3 = priority payment.';

-- Helpful for filtering paid / high-intent leads.
create index if not exists leads_registration_paid_idx
  on public.leads (registration_paid)
  where registration_paid = true;
