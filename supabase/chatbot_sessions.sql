-- chatbot_sessions: canonical definition (June 2026).
-- Matches every column written by app/api/assistant/route.ts (logChatTurn/logChatClose).
-- Run in the Supabase SQL editor of the SAME project the website's
-- NEXT_PUBLIC_SUPABASE_URL points to.
--
-- The table in the dashboard was missing columns the code writes (causing 400s
-- on upsert). Since it's empty, drop and recreate cleanly:

drop table if exists public.chatbot_sessions;

create table public.chatbot_sessions (
  session_id      text primary key,            -- upsert conflict target (must be unique)
  started_at      timestamptz default now(),
  last_message_at timestamptz,
  closed_at       timestamptz,
  page            text,
  messages        jsonb,
  message_count   integer,
  lead            jsonb,
  lead_type       text,
  name            text,
  phone           text,
  area            text,
  job_role        text,
  job_type        text,
  lead_complete   boolean,
  area_served     boolean,
  sentiment       text,
  unanswered      text,
  lead_emailed    boolean,
  feedback        text
);

-- Service-role key bypasses RLS; enabling RLS with no policies blocks the
-- public anon key from reading chat data. Exactly what we want.
alter table public.chatbot_sessions enable row level security;
