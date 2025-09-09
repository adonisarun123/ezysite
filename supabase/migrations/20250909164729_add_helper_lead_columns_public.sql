-- ===============================================
-- Supabase migration: add extra helper_lead columns (public schema)
-- Adds area_of_residence, languages, field_officer_name to public.helper_lead
-- Created on: 2025-09-09 16:47:29 IST
-- ===============================================

set search_path = public;

-- Add columns if they don't already exist on public.helper_lead
alter table if exists public.helper_lead
  add column if not exists area_of_residence text,
  add column if not exists languages text[] default '{}'::text[],
  add column if not exists field_officer_name text;

-- Optional: comments for documentation
comment on column public.helper_lead.area_of_residence is 'Neighborhood or locality provided by the helper';
comment on column public.helper_lead.languages is 'Languages known by the helper (text[])';
comment on column public.helper_lead.field_officer_name is 'Name of the field officer submitting the form (if applicable)';
