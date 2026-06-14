-- chatbot_faqs: reviewable FAQ knowledge for the website assistant ("Asha").
-- Run in the Supabase SQL editor of the SAME project NEXT_PUBLIC_SUPABASE_URL points to.
--
-- HOW THE LOOP WORKS
--  1. When the bot can't answer a visitor's question, the route auto-inserts the
--     question here as status='pending' (deduped on a normalized question hash).
--  2. A human reviews pending rows in the Supabase Table Editor: write a clear
--     `answer`, optionally tune `keywords`, then set status='approved'.
--  3. On future chats, the route matches the visitor's message against APPROVED
--     rows (keyword/text match) and injects them into the model's context, so the
--     bot answers in its own voice — no redeploy needed.
--  Set status='rejected' to suppress a question (e.g. spam / out-of-scope) so it
--  stops re-queuing.
--
-- The service-role key (server-only) reads/writes this table; RLS-on with no
-- policies keeps the public anon key out.

create table if not exists public.chatbot_faqs (
  id            uuid primary key default gen_random_uuid(),
  -- Normalized question used for dedupe (lowercased, collapsed whitespace).
  question_key  text unique not null,
  -- The visitor-facing question (original phrasing of the first asker).
  question      text not null,
  -- The approved answer the bot may use. NULL until a human writes it.
  answer        text,
  -- Space/comma-separated match terms. Seeded from the question; editable.
  keywords      text,
  -- 'pending' (needs an answer), 'approved' (bot may use), 'rejected' (ignore).
  status        text not null default 'pending'
                  check (status in ('pending','approved','rejected')),
  -- Where it came from: 'chatbot' (auto-logged) or 'manual' (added by a human).
  source        text not null default 'chatbot',
  -- How many times visitors have asked this (bumped on each dedupe hit).
  ask_count     integer not null default 1,
  -- Free-text page or context where it was first asked (helps triage).
  first_page    text,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  last_asked_at timestamptz not null default now()
);

-- Fast lookups: approved rows by recency, and the pending review queue.
create index if not exists chatbot_faqs_status_idx
  on public.chatbot_faqs (status, last_asked_at desc);

-- keep updated_at fresh on any change
create or replace function public.touch_chatbot_faqs_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists trg_chatbot_faqs_updated_at on public.chatbot_faqs;
create trigger trg_chatbot_faqs_updated_at
  before update on public.chatbot_faqs
  for each row execute function public.touch_chatbot_faqs_updated_at();

alter table public.chatbot_faqs enable row level security;
-- No policies = anon key blocked; service-role bypasses RLS (intended).

-- ── REVIEW QUEUE (run this any time to see what needs answering) ──
-- select question, ask_count, first_page, last_asked_at
-- from public.chatbot_faqs
-- where status = 'pending'
-- order by ask_count desc, last_asked_at desc;
