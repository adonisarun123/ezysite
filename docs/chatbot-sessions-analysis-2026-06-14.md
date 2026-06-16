# Chatbot ("Asha") Session Analysis — 14 June 2026

Source: `chatbot_sessions` export (78 sessions, 12–14 June 2026).
Companion to the knowledge-base update made the same day in `app/api/assistant/route.ts`.

## Headline numbers

| Metric | Value |
|---|---|
| Total sessions | 78 |
| Customers / job seekers | 71 / 7 |
| Complete leads captured | 30 (38%) |
| Leads emailed to team | 31 |
| Bounced in ≤2 messages | 26 (33%) |
| Opened with only 1 message | 20 |
| Median messages / session | 4 |
| Negative / neutral sentiment | 1 / 2 (rest blank) |

A 38% complete-lead rate is healthy for a public widget. The biggest leak is the
**33% who bounce in one or two messages** — most after a single question.

## 1. Unanswered questions & knowledge gaps

Only 2 sessions were explicitly flagged `unanswered`, both the **same gap**:

- "Garden care service availability"
- "Looking for gardener — outside our service scope"

The bot did not know gardener was a real service, even though `/services/gardener`
exists. Bounced sessions confirm a broader gap — users asked the bot about
services it had no knowledge of:

- `/cities/bangalore/gardener` → "garden care", "Gardener who can speak kannada"
- `/cities/bangalore/appliance-repair` → "Repair"
- `/hire-helper` → "Looking for gardener"

**Root cause:** the bot's knowledge base only covered maids, cooks, nannies,
elderly-care, drivers and japa. The site has since added home-healthcare /
medical care (~85 pages) and on-demand trades (electricians, plumbers,
carpenters, painters, AC/appliance repair, deep cleaning, pest control,
gardener, house shifting).

**Fixed (14 Jun):** added both new categories to the `SYSTEM` knowledge base,
expanded the lead-capture `job_role` guidance, and corrected the out-of-scope
rule so care/repair enquiries are handled instead of declined (while still
refusing clinical/medical advice). Care pricing is deliberately NOT quoted —
the site hides care prices (`SHOW_PRICES = false`) and gives quotes after a
free consultation, so the bot now mirrors that.

## 2. Lead quality & drop-off

- **Price questions kill conversion.** 7 sessions opened with "What are your
  charges?" — only 1 converted. The bot's price answer is accurate (₹1,500
  registration + ₹25,000 + 18% GST ≈ ₹29,500). This is sticker shock, not a bot
  defect; the number is correct. *Recommendation: lead with value before the
  number, and steer to a callback for an exact, plan-specific quote.*
- **Out-of-area demand is significant.** 16 sessions hit an "we don't serve that
  area yet" response — Yelahanka, Banashankari, Kammanhalli, RR/Rajarajeshwari
  Nagar, Arekere, Mahalakshmipuram, plus other-city requests (Chennai, Bhopal,
  Meerut, Srinagar). The bot correctly still collects details. *These are a
  ready-made expansion signal — many are within Bangalore but outside the
  part-time/full-time locality list.*
- **One-message bounces** are usually a single FAQ ("How does hiring work?",
  "What if the helper doesn't work out?", "How soon can a helper start?") with
  no follow-up — the user got their answer and left without leaving details.

## 3. Bot-quality issue: markdown leakage

25 assistant replies contained markdown (`**bold**`, bullets, numbered lists)
despite the explicit "never use markdown" rule — most often bolding the booking
reference (`**EZY-SVJBZP**`), which renders as raw asterisks in the chat widget.

**Fixed (14 Jun), two layers:**
1. Strengthened the FORMATTING rule, calling out the booking-reference case.
2. Added a server-side markdown strip after the `<lead>` tag is removed, so even
   if the model leaks markdown the visitor sees clean plain text.

## 4. Other observations

- **Job-seeker handling works well**, including Hindi mid-conversation (the
  "Sagar Sharma" session). The bot mirrored Hindi and captured the lead. Minor:
  it mis-gendered ("kar rahi ho") before the user corrected — cosmetic.
- **"Cancel my request" → enquiry** (Raksha session): bot handled the ambiguous
  intent gracefully, clarified existing-customer vs new, and recovered to a
  normal enquiry. Good behaviour.
- **Top pages for chat:** `/cities/bangalore/on-demand-helper` (18) and
  `/hire-helper` (17) — the on-demand surface drives the most chats, reinforcing
  the value of the new on-demand knowledge.

## Recommended next steps

1. ~~Soften the price reply~~ — DONE (14 Jun). `SYSTEM` now instructs the bot to
   lead with value (verified + guaranteed placement) before the number and end
   every price answer with a tailored callback-quote offer.
2. ~~Review the served-area list~~ — DONE (14 Jun). Added Yelahanka,
   Rajarajeshwari/RR Nagar, Banashankari, Arekere, Kammanhalli, Mahalakshmipuram
   to `SERVED_AREAS` (lib/assistantHelpers.ts) and both area lists in `SYSTEM`,
   per owner confirmation that these are now served.
3. **Re-pull sessions in ~2 weeks** to confirm the gardener/care/on-demand gap
   has closed, markdown leakage is gone, and price/area conversion improved.
