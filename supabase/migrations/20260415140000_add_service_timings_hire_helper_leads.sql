-- Hire-helper: daily timings for non–live-in services (full-time, part-time, etc.)
alter table if exists public.hire_helper_leads
  add column if not exists service_timings text;

comment on column public.hire_helper_leads.service_timings is 'Preferred hours / days when helper is needed (non–live-in services)';
