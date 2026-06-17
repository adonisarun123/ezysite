# EzyHelpers — SEO Cannibalization & URL Architecture Audit

Codebase audit of all 288 routes (titles, canonicals, H1s, hreflang, internal structure). June 2026.

**Method & limits:** This analyzes on-page targeting from the source — where cannibalization originates. It does **not** include live Google ranking data (needs Search Console). Treat priorities below as "fix the structural cause"; confirm impact in GSC afterward.

---

## TL;DR — verdict

The architecture is **mostly healthy**. The `/services/*` (national) vs `/cities/{bangalore,bareilly}/*` (city) split is deliberate intent separation and, in most cases, the titles are correctly differentiated — that is NOT cannibalization. The problems are narrow and fixable:

1. **4 national `/services/*` pages wear Bareilly-only titles** — true duplicates of their Bareilly twins. (High priority, clear bug.)
2. **A broken title template** leaking `${nested.title}` on 6 equipment-rental pages. (High — visible defect.)
3. **`/Lp/*` landing pages share one generic title** ("100% Background-Verified Profiles") and have no canonical. (Medium.)
4. **Helper-jobs: same job-type repeated across 3-4 source states, all targeting "…Bangalore"** — genuine cross-state self-competition. (Medium.)
5. **Canonical coverage gaps** on landing/utility pages. (Low-Medium.)

No emergency, but items 1-2 should be fixed this week.

---

> **STATUS UPDATE — all findings actioned (June 2026):**
> - **Finding 1 — ✅ FIXED.** Four `/services/*` pages given geo-neutral titles/descriptions/keywords/OG; `/services/ac-repair` canonical added.
> - **Finding 2 — ❌ FALSE POSITIVE.** Rental-page titles resolve correctly per slug via `getNestedService()`. No change.
> - **Finding 3 — ✅ FIXED.** The 4 `/Lp/*` ad landing pages (no internal links, not in sitemap, use `AdLeadForm`) now export `robots: noindex,follow` + a clean title + a canonical pointing at the real organic page. They keep working for ads but no longer compete organically.
> - **Finding 4 — ✅ FIXED (hygiene, no consolidation).** State helper-job pages confirmed substantially DIFFERENT (485–980 lines, per-state titles) — deliberately kept. Fixed the real gap: 13 English pages had a `/hin` sibling but no hreflang back-reference; all now declare `alternates.languages` (en↔hi). 37/37 English pages with a Hindi sibling now pair correctly.
> - **Finding 5 — ✅ FIXED (scope corrected).** Most flagged "missing canonical" pages were false positives: care-services pages build canonicals via `carePageMetadata()`, and `for-helpers`/`helper-registration` (client components) carry canonicals in their `layout.tsx`. The only genuine gaps — `case-studies` and `market-overview` — now have self-canonicals.
>
> Net code changes: 4 `/services` pages (F1), 4 `/Lp` pages (F3), 13 helper-jobs pages (F4), 2 pages (F5). All typecheck clean.

## Finding 1 — National service pages with Bareilly-specific titles (HIGH) — ✅ FIXED

These live at national `/services/*` URLs but their `<title>` is identical to the Bareilly city page — so two URLs compete for the exact same Bareilly query, and the national page sends a confusing geo signal.

| National page | Its title | Duplicate of |
|---|---|---|
| `/services/sofa-cleaning` | "Sofa Cleaning Services in **Bareilly** - Stain & Odour Removal" | `/cities/bareilly/sofa-cleaning` |
| `/services/pest-control` | "Pest Control for Home in **Bareilly** - Safe & Effective" | `/cities/bareilly/pest-control` |
| `/services/house-shifting` | "Household Shifting in **Bareilly** – Expert Packers" | `/cities/bareilly/house-shifting` |
| `/services/ac-repair` | "Air Conditioner Repair in **Bareilly** - Cooling Experts" | `/cities/bareilly/ac-repair` |

**Fix:** rewrite the four `/services/*` titles, H1s and meta to be **city-neutral / national** (e.g. "Sofa Cleaning Services — Stain & Odour Removal | EzyHelpers"). Let the `/cities/bareilly/*` page own the "in Bareilly" query. Also: `/services/ac-repair` is **missing a canonical** — add `https://www.ezyhelpers.com/services/ac-repair`.

---

## Finding 2 — Equipment-rental title template — ❌ FALSE POSITIVE (no fix needed)

My static scan flagged six rental pages as sharing the title `${nested.title} | ezyhelpers`. On inspection this is **not a bug**: the pages use `title: \`${nested.title} | EzyHelpers\`` where `nested = getNestedService(SLUG)`, and `getNestedService` returns the correct, unique title per slug at runtime (verified in `lib/careServices/newServices.ts` — e.g. `bipap-cpap-rental-bangalore` → "BiPAP & CPAP Machine Rental in Bangalore"). The regex simply couldn't resolve a template literal. Each page renders a correct, unique title. **No change required.**

Affected (all confirmed working): `/care-services/{bipap-cpap-rental, hospital-bed-rental, mobility-aids-rental, oxygen-concentrator-rental, patient-monitor-rental, wheelchair-rental}-bangalore`

---

## Finding 3 — `/Lp/*` landing pages share one title, no canonical (MEDIUM)

All four paid/landing pages share the title "100% Background-Verified Profiles" and have **no canonical**:

`/Lp/full-time-maid-bangalore`, `/Lp/full-time-maid-bareilly`, `/Lp/live-in-maid-bangalore`, `/Lp/live-in-maid-bareilly`

These overlap with the real `/services/*` and `/cities/*/*` maid pages. If they're **ad landing pages** (not meant to rank), the cleanest fix is to add `<meta name="robots" content="noindex,follow">` so they never compete organically. If they ARE meant to rank, give each a unique geo+service title and a self-canonical. Pick one — don't leave them indexable with duplicate titles.

---

## Finding 4 — Helper-jobs: same job-type across multiple states (MEDIUM)

The helper-jobs tree is organized by source state, but several job-type pages repeat the same target across states and all aim at "…Bangalore":

| Job type | States with a near-identical page |
|---|---|
| `housekeeping-job-bangalore` | assam, bihar, jharkhand, odisha (4) |
| `japa-maid-job-bangalore` | assam, jharkhand, odisha (3) |
| `patient-care-job-bangalore` | assam, jharkhand, odisha (3) |

For a job seeker searching "housekeeping job in Bangalore", four of your own pages compete. The state dimension only helps if the content is genuinely state-specific (language, travel, community). **Fix options:** (a) make each page substantively state-specific (testimonials/recruiters/travel info per state) so intent differs, or (b) consolidate to one canonical "housekeeping jobs in Bangalore" page and convert state pages into thin filters that canonical to it. Recommend (a) if the state targeting drives real applicant traffic, else (b).

**Note (not a problem):** Hindi `/hin` variants self-canonical correctly and should stay that way — they need **hreflang** pairing (`hi` ↔ `en`), not canonicalization. Verify each `/hin` page and its English parent reference each other in `alternates.languages`. 161 pages already declare hreflang alternates — confirm the job-type pages are among them.

---

## Finding 5 — Canonical coverage gaps (LOW-MEDIUM)

~65 routes have no explicit canonical (some are utility pages that don't need one — `/agent-success`, `/helper-leads`, the disabled `[city]` scaffolds). Worth adding canonicals to any **indexable, content** page lacking one — notably the `/Lp/*` set and `/services/ac-repair` flagged above.

**False-positive caveat:** my scan flagged ~41 "missing titles", but many `/care-services/*` pages build their title from a `PILLAR.title` constant my regex didn't capture — those DO have titles. The real missing-title cases are mostly non-SEO utility pages. Don't bulk-edit on the 41 number; the verified issues are Findings 1-4.

---

## What is NOT cannibalization (leave alone)

- **`/services/elderly-care` vs `/care-services/elderly-care-services-bangalore` vs `/cities/bangalore/elderly-care`** — these have distinct titles and intents: national service overview vs Bangalore medical home-care vs Bangalore senior support. Healthy. Just make sure internal links use consistent anchor text so you're not sending "elderly care bangalore" anchors to all three.
- **14 elderly-care pages** — mostly locality pages (HSR, Koramangala, Whitefield…) targeting distinct geo queries. Correct long-tail strategy, not cannibalization.
- **Most `/services` vs `/cities` service pairs** (full-time-maid, cook, driver, plumber, etc.) — titles are differentiated national-vs-city. Healthy.

---

## Recommended action order

1. **This week:** Fix Finding 2 (broken `${nested.title}` on 6 rental pages) and Finding 1 (4 Bareilly-titled national service pages + missing canonical on `/services/ac-repair`).
2. **Next:** Decide `/Lp/*` intent → noindex or unique-title+canonical (Finding 3).
3. **Then:** Resolve helper-jobs cross-state strategy (Finding 4) — differentiate or consolidate.
4. **Hygiene:** Backfill canonicals on indexable pages; confirm hreflang pairing on all `/hin` ↔ English pairs.
5. **Validate:** After deploy, check Search Console → Performance → filter by these query clusters to confirm a single page now owns each query.
