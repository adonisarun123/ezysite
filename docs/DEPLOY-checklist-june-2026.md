# Deploy & verification checklist (June 2026 work)

Everything from this round of work is committed in the working tree and passes `tsc` and a full production build (346 pages). Nothing is live until it is deployed. Work through this list in order.

## 1. Before deploy

- [ ] Run `npm install` once so the lockfile matches the new dependencies (`maplibre-gl`, `puppeteer-core`, `@sparticuz/chromium`).
- [ ] Review the changed copy if you want: 6 new care blog posts, 2 new care landing pages, humanized blog and care content. All builds pass.
- [ ] Confirm the local build works on your machine: `npm run build` should finish with "Generating static pages (346/346)".

## 2. Vercel environment variables (these gate real behaviour)

Set these in Vercel → Project → Settings → Environment Variables. Several features silently no-op without them.

- [ ] `SUPABASE_SERVICE_ROLE_KEY` — the service_role key from the CORRECT project (`avyqnryaqgfzxgqtlsxp`, not the chap-production one). Without it: chatbot leads are not stored, chat sessions are not logged, and the lead digest cannot run.
- [ ] `NEXT_PUBLIC_SUPABASE_URL` — confirm it points to `avyqnryaqgfzxgqtlsxp`.
- [ ] `CRON_SECRET` — any long random string. Vercel Cron sends it automatically; without it the 5 AM digest cron gets 401s. Generate one with: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`.
- [ ] `ANTHROPIC_API_KEY` — already set (powers Asha). Also now powers lead-email triage and the digest AI insight.
- [ ] Optional: `LEAD_DIGEST_RECIPIENTS` if you want a different list than the default five (contact@, priyanka@, arun@, suraj@, ankit@).

## 3. Supabase setup

- [ ] Run `supabase/chatbot_sessions.sql` in the SQL editor of project `avyqnryaqgfzxgqtlsxp` (the chat-session logging table). It was previously created in the wrong project.
- [ ] Confirm the `leads` table exists in that same project (the website forms and the chatbot booking tool both write to it).

## 4. Deploy

- [ ] Commit, push, let Vercel build and deploy. The cron (`/api/lead-digest` at 23:30 UTC = 5:00 AM IST) registers automatically from `vercel.json`.

## 5. Post-deploy verification

Lead capture and chatbot:
- [ ] Submit one test enquiry through a contact/hire form. Confirm the email arrives with the AI triage banner ([HOT]/[WARM] tag + summary), and a row lands in the `leads` table.
- [ ] Open the website chatbot. Say "I need a live-in maid in Whitefield", give a name and a valid 10-digit number, agree to book. Confirm: Asha returns a booking reference (EZY-XXXXXX), a [BOOKED] email arrives, and a row appears in `leads`. Also confirm a row appears in `chatbot_sessions`.
- [ ] Test a deliberately fake number (9999999999) mid-chat. Asha should ask you to re-check it in context, not restart the conversation.

Lead digest:
- [ ] Trigger it once manually: `curl -H "x-api-key: <your API_SECRET_KEY value>" https://www.ezyhelpers.com/api/lead-digest`. It returns counts as JSON and emails the five recipients. Sanity-check the numbers against the table.

SEO / new content:
- [ ] Run Google's Rich Results Test on one service page, one city page, and one new blog post. Confirm Service / LocalBusiness / BlogPosting / FAQPage schema is detected.
- [ ] Check `https://www.ezyhelpers.com/og?title=Test` renders a branded image.
- [ ] Resubmit the sitemap in Search Console (8 new URLs: 6 blog posts, 2 care pages).
- [ ] Spot-check the two network map pages (`/our-network/helpers`, `/our-network/families`) load and the globe renders.

PDF endpoint:
- [ ] Test whatever feature uses `/api/generate-pdf`. It migrated to puppeteer-core + @sparticuz/chromium; this is the one runtime change that cannot be verified locally.

## 6. Still requires your input (cannot be done in code)

- [ ] GA4 + GTM double-tracking: add the GA4 config tag inside the GTM-PGM9V53 container, verify events flow, then tell me to remove the standalone GA4 block in `ThirdPartyScripts.tsx`.
- [ ] Pricing content (blog A3) and star ratings (S4): need real figures and genuine third-party review data (e.g. Trustpilot API). Self-serving review markup is ignored by Google.
- [ ] Refresh the review-analysis figures each quarter; the numbers live in 4 places (3 page badges + Asha's social-proof prompt section) and are a 5-minute update.

## Reference: what this work delivered

Performance and build: server-rendered landing pages and hero, lean bundles, lint re-enabled, puppeteer-core migration, AI-crawler robots directives.

SEO/AEO: Service + LocalBusiness schema on 34 pages, answer-first paragraphs, speakable schema, per-page OG images, llms.txt completed, 6 care blog posts, 2 care landing pages.

Operations: AI lead-email triage on every customer email, agentic Asha booking (area check + real bookings), email routing to the core team, daily 5 AM lead digest with week/month trends and chatbot stats.

Content: full humanizer pass across blog posts, care markdown, care components, and shared chrome (no prose em dashes, AI vocab, curly quotes, or emoji bullets; numeric ranges and testimonial attributions preserved).

Maps: two satellite-globe network pages plotting 1,202 helper and 116 customer pincodes, validated to India/Nepal.
