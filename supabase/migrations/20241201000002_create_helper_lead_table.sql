-- ===============================================
-- Supabase migration: create schema + helper_lead
-- ===============================================

-- Ensure UUID generator is available in the standard Supabase location
create extension if not exists pgcrypto with schema extensions;

-- 1) New schema
create schema if not exists ezyhelpers;

-- Keep statements scoped (explicit qualifiers still used below)
set search_path = ezyhelpers, public;

-- 2) Enum (checkbox job roles)
do $$
begin
  create type ezyhelpers.job_role_enum as enum
    ('COOK','HOUSEKEEPING','BABY_CARE','ELDER_CARE','DRIVER','SECURITY','CARPENTER','PLUMBER','OTHER');
exception when duplicate_object then null;
end $$;

-- 3) Table
create table if not exists ezyhelpers.helper_lead (
  id uuid primary key default extensions.gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  -- Required fields
  helper_name text not null check (char_length(trim(helper_name)) >= 2),

  -- Indian mobile: exactly 10 digits, starting 6–9
  mobile text not null check (mobile ~ '^[6-9][0-9]{9}$'),

  -- Checkbox selections (multi-select)
  job_roles ezyhelpers.job_role_enum[] not null default '{}',
  job_role_other text,

  -- Auto location detection (populate from client/IP service)
  ip inet,
  detected_city text,
  detected_region text,
  detected_country text,
  lat double precision,
  lng double precision,
  raw_geo jsonb not null default '{}'::jsonb,

  -- Notes
  remarks text,

  -- Constraints
  constraint chk_job_roles_not_empty
    check (cardinality(job_roles) >= 1),
  constraint chk_other_role_text
    check (
      case
        when 'OTHER' = any(job_roles)
          then coalesce(nullif(trim(job_role_other), ''), '') <> ''
        else true
      end
    )
);

-- 4) Indexes
create unique index if not exists helper_lead_mobile_unique
  on ezyhelpers.helper_lead (mobile);

create index if not exists helper_lead_created_at_idx
  on ezyhelpers.helper_lead (created_at desc);

create index if not exists helper_lead_geo_idx
  on ezyhelpers.helper_lead (lat, lng);

-- 5) updated_at trigger
create or replace function ezyhelpers.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists set_updated_at_helper_lead on ezyhelpers.helper_lead;
create trigger set_updated_at_helper_lead
before update on ezyhelpers.helper_lead
for each row execute function ezyhelpers.set_updated_at();

-- 6) RLS & policies
alter table ezyhelpers.helper_lead enable row level security;

-- Allow inserts from public web form (anon) and logged-in users
drop policy if exists "helper_lead_insert_anyone" on ezyhelpers.helper_lead;
create policy "helper_lead_insert_anyone"
on ezyhelpers.helper_lead
for insert
to anon, authenticated
with check (true);

-- Allow authenticated users to read rows (dashboard/backoffice)
drop policy if exists "helper_lead_select_authenticated" on ezyhelpers.helper_lead;
create policy "helper_lead_select_authenticated"
on ezyhelpers.helper_lead
for select
to authenticated
using (true);

-- 7) Grants so PostgREST roles can reach the new schema/table
grant usage on schema ezyhelpers to anon, authenticated;
grant insert, select on ezyhelpers.helper_lead to anon, authenticated;
