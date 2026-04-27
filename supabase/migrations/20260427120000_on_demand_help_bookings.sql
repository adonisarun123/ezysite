-- Serialized on-demand-help visits: at most one active booking interval at a time (global).
-- Requires btree_gist for exclusion constraint on tstzrange.

create extension if not exists btree_gist;

create table if not exists public.on_demand_help_bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  visit_start_at timestamptz not null,
  visit_end_at timestamptz not null,
  duration_hours smallint not null check (duration_hours in (2, 4, 6, 8)),
  phone text not null check (length(trim(phone)) >= 10),
  customer_name text not null,
  area text not null,
  apartment_or_society text not null,
  flat_unit_details text not null,
  constraint chk_visit_end_after_start check (visit_end_at > visit_start_at),
  constraint booking_no_overlap exclude using gist (
    tstzrange(visit_start_at, visit_end_at, '[)') with &&
  )
);

create index if not exists on_demand_help_bookings_visit_start_idx
  on public.on_demand_help_bookings (visit_start_at);

comment on table public.on_demand_help_bookings is 'Reserved time windows for /on-demand-help; exclusion prevents overlapping visits globally.';

alter table public.on_demand_help_bookings enable row level security;
