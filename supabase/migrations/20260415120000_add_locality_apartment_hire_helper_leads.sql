-- Hire-helper form: area within city and apartment / society details
alter table if exists public.hire_helper_leads
  add column if not exists locality text,
  add column if not exists apartment text;

comment on column public.hire_helper_leads.locality is 'Neighborhood or area within the selected city';
comment on column public.hire_helper_leads.apartment is 'Apartment, flat, or society / building name';
