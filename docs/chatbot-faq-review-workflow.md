# Chatbot Reviewable FAQ — How It Works

Lets the website assistant ("Asha") learn new answers **between** prompt edits,
with a human approving every fact. No model retraining, no redeploy to add an
answer.

## The loop

1. **Bot can't answer** a visitor's question → it gives the usual graceful
   fallback and captures the lead, AND the question is auto-queued into the
   `chatbot_faqs` table as `status = 'pending'` (deduped; repeats bump
   `ask_count`).
2. **You review** pending rows in the Supabase **Table Editor**: write a clear
   `answer`, optionally tune `keywords`, then set `status = 'approved'`.
3. **Next time** a visitor asks something similar, the route matches their
   message against approved FAQs (keyword/text match) and injects them into the
   model's context — so the bot answers in its own warm voice, immediately.

Set `status = 'rejected'` for spam / out-of-scope questions so they stop
re-queuing.

## One-time setup

Run `supabase/chatbot_faqs.sql` in the Supabase SQL editor of the project that
`NEXT_PUBLIC_SUPABASE_URL` points to. Requires the service-role key in the
server env (`SUPABASE_SERVICE_ROLE_KEY`) — already used by the rest of the bot.

## Reviewing the queue

In the SQL editor:

```sql
select question, ask_count, first_page, last_asked_at
from public.chatbot_faqs
where status = 'pending'
order by ask_count desc, last_asked_at desc;
```

To approve one (Table Editor is easier, but in SQL):

```sql
update public.chatbot_faqs
set answer = 'Yes — our cooks can prepare Jain meals; just let our team know on the call.',
    keywords = 'jain food cooking diet vegetarian cook meal',
    status = 'approved'
where question_key = '<the normalized question>';
```

You can also add FAQs proactively (no visitor needed): insert a row with
`status = 'approved'`, `source = 'manual'`, a unique `question_key`, the
`question`, `answer`, and `keywords`.

## Writing good answers

- Keep them factual and short — the bot rephrases them in its own voice.
- They EXTEND the knowledge base; they don't override safety rules. The bot still
  won't give medical/legal advice, invent prices, or break character.
- Don't put anything in an FAQ you wouldn't want the public bot to say verbatim.

## Where it lives in code

- Table: `supabase/chatbot_faqs.sql`
- Matching + logging: `lib/faqStore.ts` (`matchApprovedFaqs`, `logPendingFaq`)
- Wiring: `app/api/assistant/route.ts` — approved FAQs injected into the per-request
  system context before the model call; unanswered questions logged after the reply.

## Relation to the rest

- The static knowledge still lives in the `SYSTEM` prompt (the source of truth).
  Use the FAQ table for the long tail and fast iteration; promote a recurring,
  important FAQ into `SYSTEM` when it deserves to be core.
- The weekly gap digest (`npm run chatbot:gap-digest`) and the FAQ pending queue
  overlap by design — the digest shows themes; the queue gives you exact
  questions ready to answer.
