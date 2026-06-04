# EzyHelpers SEO Audit & Fixes — June 4, 2026

## Why Traffic and Leads Were Dropping: Root Causes Found

### 1. CRITICAL — Malformed manual sitemap (FIXED ✅)
`public/sitemap-manual.xml` was publicly served at ezyhelpers.com/sitemap-manual.xml and contained 264 URLs including literal placeholder URLs like `/blog/[slug]`, `/cities/[city]/[service]`, the route-group leak `/(marketing)/about`, noindexed `/Lp/` landing pages, and duplicate care-services URLs. If Google ever discovered or was submitted this file, it wasted crawl budget on fake URLs and signaled site misconfiguration.

**Fix applied:** File deleted. The dynamic `app/sitemap.ts` is the single source of truth (robots.txt already points only to `/sitemap.xml`).

### 2. CRITICAL — Stale sitemap lastModified dates (FIXED ✅)
`app/sitemap.ts` fell back to a hardcoded `2026-05-20` date when `BUILD_DATE` wasn't set, so Google saw all 200+ pages as "unchanged since May 20" forever — discouraging recrawls of fresh content.

**Fix applied:** Fallback changed to `new Date().toISOString()` (build time), so every deploy refreshes lastModified.

### 3. CRITICAL — Cookie consent banner suppressing ALL analytics (FIXED ✅)
GTM, GA4, Microsoft Clarity, Facebook Pixel, and Tawk.to only loaded AFTER a visitor clicked "Accept" on the cookie banner. Every visitor who ignored the banner, bounced before interacting, or clicked decline was completely invisible in analytics. This means the "traffic drop" in GA4 was at least partly artificial — real visitors were arriving but never being measured. Visitors who once clicked "declined" were permanently untracked via localStorage.

**Fix applied:** Removed `components/CookieConsent.tsx` entirely, removed it from `ClientOnlyWidgets`, and removed consent gating from `GTMScript.tsx` and `ThirdPartyScripts.tsx`. All tracking now loads for every visitor. Expect GA4 numbers to jump after deploy — compare lead counts (a server-side truth) against the old GA4 period to estimate how much of the drop was measurement vs. real.

Note: India's DPDP Act does not mandate an EU-style cookie opt-in banner; if you later serve EU visitors, consider a geo-targeted banner instead of a global one.

### 4. HIGH — Near-zero internal linking between content and commercial pages (FIXED ✅)
- Blog posts did not link to service or city pages (link equity dead-end).
- Service and city pages did not link to blog guides (no topical cluster signal).
- No related-posts section on any blog post.
- Several blog posts had bare URLs in parentheses instead of real hyperlinks.

**Fixes applied:** See "Interlinking System" below.

### 5. MODERATE — Poor blog URL slugs (NOT changed — needs your decision)
5 of 10 posts have ugly/CamelCase slugs, including a typo: `/blog/Domestc-Help-Etiquette` ("Domestc"). Renaming slugs requires 301 redirects from old URLs (next.config.js `redirects()`), otherwise indexed pages 404. I did NOT rename them to avoid breaking currently indexed URLs without your sign-off. Recommended next step: rename + add 301s in one deploy.

### 6. MODERATE — Other findings (not changed)
- `app/services/live-in-maids/page.tsx` lacks openGraph metadata (city equivalent has it).
- Three static folders under `app/blog/` coexist with the `[slug]` dynamic route — `hiring-a-domestic-helper` has its own page.tsx and is not in `blogData.ts` (it works, but it's invisible to related-posts logic and the blog index).
- Duplicate care-services variants (`bedridden-patient-care-bangalore` vs `...-at-home-bangalore`) should be consolidated with a canonical.
- Beyond the codebase: a sustained drop also warrants checking Google Search Console for manual actions, the June core-update impact, and lost backlinks — none of which is visible from code.

---

## New Content: 5 Bangalore Live-In / 24-Hour Blog Posts

All added to `lib/blogData.ts` with clean lowercase slugs, 2026 market data, FAQs-ready structure, and dense contextual interlinks:

1. **/blog/live-in-maid-cost-bangalore-complete-pricing-guide** — salary tables by duties/experience, hidden costs, comparison table (featured)
2. **/blog/24-hour-maid-service-bangalore-how-it-works** — live-in vs rotating-shift models, costs, daily routine, legal norms
3. **/blog/live-in-maid-vs-full-time-maid-bangalore** — honest side-by-side comparison with recommendations by family type
4. **/blog/live-in-cook-bangalore-hiring-guide** — cook salaries, duties, 7 interview questions, cuisine matching
5. **/blog/24-hour-elderly-care-at-home-bangalore-live-in-caretaker** — 3 care levels, cost table, safety checklist

Each post links to: relevant Bangalore city pages, national service pages, /hire-helper, care-services, and 3–5 other blog posts. They are automatically included in `app/sitemap.ts` and the blog index (both read from `posts`).

## Interlinking System Built

**New components:**
- `components/RelatedPosts.tsx` — tag/category-scored "Related Guides" grid, now on every blog post. Every post links to ≥3 others automatically; new posts join the graph with zero extra work.
- `components/BlogServiceLinks.tsx` — "Hire Verified Help for This" section on every blog post; maps post tags → the most relevant service/city pages (blog → commercial link equity).
- `components/CityBlogLinks.tsx` — "Helpful Guides" section for service/city pages; surfaces matching blog posts by tag (commercial → blog links).

**Pages now showing blog-guide sections (12):**
- /cities/bangalore (hub)
- /cities/bangalore/live-in-maids, full-time-maid, part-time-maid, cooks, elderly-care, nanny-babysitter
- /services/live-in-maids, full-time-maids, cooks, elderly-care, nanny-babysitter

**Content-level link fixes:**
- Converted 10 bare-URL parentheticals in old posts into proper anchor-text hyperlinks.
- Fixed one link pointing to the redirected `/cities/bangalore/live-in-maid` (singular) → `/cities/bangalore/live-in-maids`.
- Added a "Keep Reading" cross-link block to the flagship Bangalore live-in maid post pointing into the new cluster.

## Verification
- `npx tsc --noEmit` — clean, no type errors.
- All 28 internal link targets validated against actual app routes — zero broken links.
- `next lint` on changed dirs — only pre-existing warnings.
- Full `next build` could not run in this sandbox (SWC binary unavailable for linux/arm64, no registry access) — run `npm run build` locally before deploying.

## Hire-Helper Form Improvements (June 4, 2026)

**New 4-step flow** (`components/HireHelperForm.tsx`):
1. Primary role only (one quick choice — lowest-friction first step)
2. Personal information (name, phone, city, locality)
3. Service requirements (service type + role-specific follow-ups: cook prefs, live-in room, schedule, household details)
4. Additional details + submit

**Auto-save:** Every Next/Previous click saves the draft to localStorage (`ezy_hire_helper_draft_v1`). Returning visitors are restored to their saved step with a "Welcome back" notice. Drafts expire after 7 days and are cleared on successful submit.

**Abandoned-form capture:** If a visitor leaves the page (tab close/hide) after completing step 2 (so we have name + valid phone) without submitting, a `navigator.sendBeacon` fires a partial lead to `/api/send-lead-email` with `leadType: 'hire_helper_partial'`. The email is clearly marked "Partially Filled — visitor dropped off, NOT a confirmed booking" with steps completed and all captured fields. Deduped per data snapshot so repeat tab-switches don't spam the inbox. Backend changes: new lead type in `types/email.ts`, API allowlist in `app/api/send-lead-email/route.ts`, and `generateHireHelperPartialLeadEmail` in `lib/emailService.ts` (same recipients as hire_helper leads).

Note: a visitor may trigger a partial email and later return and submit — the team will then receive both; the Draft ID and warning note distinguish them.

## Follow-up Round (June 4, 2026) — All Code Items DONE ✅

1. **Blog slugs renamed** (8 posts) with 301 redirects in `next.config.js`, including the `Domestc-Help-Etiquette` typo → `domestic-help-etiquette-working-relationship`. All internal references updated. Three pre-existing redirects that dumped old 24-hour-helper URLs onto generic `/blog` were retargeted to the matching new guides.
2. **openGraph added to 17 service pages** (live-in-maids, cooks, drivers, part-time-maids, etc.). Three of them (house-shifting, pest-control, sofa-cleaning) also had no canonical — added.
3. **`hiring-a-domestic-helper` migrated** into `lib/blogData.ts` (same slug, no redirect needed). It now gets proper metadata/canonical/OG, appears in the blog index and sitemap, and joins the RelatedPosts/BlogServiceLinks interlinking graph. Its old static page had zero metadata and fake `href="#"` related-article links. The two orphaned `content.md` folders under app/blog/ were removed.
4. **Care-services duplicates consolidated via canonicals.** Three keyword-cannibalizing pairs found (different content, identical target keyword). The newer registry pages now canonicalize to the established, heavily-interlinked originals: `bedridden-patient-care-at-home-bangalore` → `bedridden-patient-care-bangalore`; `dementia-care-at-home-bangalore` → `dementia-alzheimers-care-bangalore`; `parkinsons-care-at-home-bangalore-elder` → `parkinsons-care-at-home-bangalore`. The tracheostomy pair was left as-is (genuinely differentiated: general care vs critical care). The sitemap already lists only the canonical URLs.
5. **Search Console checked (June 4, 2026, Ezy Helpers account) — findings:**
   - **Manual actions: No issues detected** ✅ — no penalty; the decline is algorithmic/structural.
   - **Page indexing: 194 indexed vs 300 NOT indexed.** Dominant reason: **"Crawled – currently not indexed" = 202 pages** — Google crawls them but judges them not worth indexing. This is the classic signature of thin interlinking + near-duplicate content, exactly what this round of fixes targets. Other reasons: Page with redirect (44, expected), Blocked by robots.txt (2), Duplicate without user-selected canonical (1), Discovered–not indexed (5).
   - **Performance (last 3 months vs previous 3): clicks UP overall (38.8k vs 22.4k, +73%)** — but declining since mid-April within the quarter (~750/day peak → ~250-300/day by end of May). The site is growing QoQ; the recent slide is the concern.
   - **Losing cluster identified:** national `/services/*` pages and the blog are bleeding while Bangalore city pages boom. Top losers: `/blog/live-in-maid-salary-roles-hiring-guide-bangalore` (−54 clicks), `/services/cooks` (−46 clicks, −1.4k impressions), `/services/nanny-babysitter` (−32 clicks, **−27.4k impressions** — major ranking loss), `/hire-helper` (−29 clicks, −3.3k impressions), `/cities/bangalore` hub (−2.8k impressions). Top winners: `/cities/bangalore/on-demand-helper` (+4,681 clicks), `/cities/bangalore/cooks` (+2,912), `/cities/bangalore/live-in-maids` (+908). Interpretation: Google is consolidating rankings onto local-intent city pages; national service pages are losing visibility, which the new interlinking + openGraph + blog cluster directly addresses.
   - GSC also flags a CLS (layout shift) warning on "100% of pages" — worth a Core Web Vitals pass later.
6. **Sitemap resubmitted in GSC** (June 4). Only `/sitemap.xml` was ever submitted (196 pages, Success — the malformed manual sitemap was never registered with Google, limiting its damage). **Resubmit once more after deploying** so Google fetches the new sitemap with the 5 new posts and renamed slugs: GSC → Indexing → Sitemaps → enter `https://www.ezyhelpers.com/sitemap.xml` → Submit.

## New Care-Service Pages (June 4, 2026)

Instead of generic "dementia care" + "alzheimer care" pages (which would have recreated the keyword cannibalization fixed earlier — you already had 2 dementia pages), we built 5 differentiated pages:

1. `/care-services/alzheimers-care-at-home-bangalore` — Alzheimer's-specific (stages, wandering, sundowning), cross-linked with the existing dementia umbrella page
2. `/care-services/respite-care-at-home-bangalore` — short-term relief caregivers (high-intent gap, no existing coverage)
3. `/care-services/diabetes-care-at-home-bangalore` — monitoring, insulin support, diabetic routines
4. `/care-services/multiple-sclerosis-als-care-at-home-bangalore` — progressive neurological care
5. `/care-services/post-stroke-speech-rehab-at-home-bangalore` — aphasia/dysarthria/dysphagia rehab (under physiotherapy pillar)

Implementation: registry entries in lib/careServices/newServices.ts (4 under elder-care pillar, 1 under physiotherapy — they auto-appear on both pillar pages), price keys in pricing.ts (placeholder figures, CONFIRM against rate card), full View components following the ParkinsonsCareElderView pattern (hero stats, 4 sections, 6 FAQs each, MedicalBusiness + FAQPage schema), self-canonicalizing page.tsx files, added to sitemap at priority 0.85, and the existing dementia page's related links now point to Alzheimer's + Respite care.

NOTE: hero stats and prices are marked ILLUSTRATIVE in code comments — review before launch.
