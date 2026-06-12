# EzyHelpers.com — Performance, SEO & AEO Audit (June 2026)

Full-codebase review covering build/runtime performance, React architecture, SEO, and AEO (answer-engine optimization). Findings are verified against the actual code, not assumed. Items marked **✅ DONE** were implemented during this audit; the rest are recommendations in priority order.

## What was implemented in this audit (✅ DONE)

**Service schema on all 25 service pages.** The `ServiceSchema` component existed in `components/schema/` but was used by zero pages — every `/services/*` page had FAQPage JSON-LD at most, with no Service markup telling Google/AI engines what the page sells, where, and by whom. `<ServiceSchema>` (with name, description, type, canonical URL) is now injected on all 25 service pages, deriving values from each page's existing metadata.

**LocalBusiness schema on 9 city hub pages.** Only Delhi had `LocalBusinessSchema`; Bangalore, Mumbai, Hyderabad, Noida, Lucknow, Kanpur, Meerut, Nagpur, and Bareilly did not. All now emit LocalBusiness JSON-LD with city, state, postal code, and geo coordinates — the single highest-leverage local SEO fix available.

**AI-crawler directives in robots (AEO).** `app/robots.ts` now explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, CCBot and others. Also removed the duplicate `public/robots.txt`, which shadowed `app/robots.ts` — the site was effectively serving the static file and ignoring the typed one.

**Deleted dead `.babelrc.js`.** The config referenced `next/babel` and a `transform-remove-console` plugin that isn't even installed; `next.config.js` already sets `forceSwcTransforms: true` and `compiler.removeConsole`, so the file was inert but misleading (and would break the build if `forceSwcTransforms` were ever removed). SWC remains the compiler.

**Fixed dependency placement.** `@playwright/test` (~60MB) and `@types/puppeteer` moved from `dependencies` to `devDependencies` — they were inflating production installs. Note: `puppeteer` itself must stay in `dependencies` because `app/api/generate-pdf/route.ts` uses it at runtime (see P2 below for the better long-term fix).

Verification: `tsc --noEmit` passes with zero errors after all changes.

## Round 2 — remaining recommendations implemented (✅ DONE)

**P1 — Landing pages server-rendered.** All four `/Lp/*` pages and `/case-studies` had page-level `'use client'` but zero hooks or event handlers — pure static JSX. Directives removed; pages now prerender as static HTML. Interactive children (`AdLeadForm`, `FAQAccordion`) keep their own `'use client'`.

**P3 — HeroSection split.** Form state/logic extracted to `components/sections/HeroLeadForm.tsx` (client); `HeroSection.tsx` is now a server component, so the homepage hero (the LCP element) renders entirely in initial HTML and only the form ships JS.

**S5 — FAQ answers now crawlable.** `FAQAccordion` used Headless UI `DisclosurePanel`, which unmounts closed panels — FAQ answers were invisible to crawlers/answer engines. Added `unmount={false}` so answers stay in the DOM (hidden when closed). This one change covers 67+ care-services pages plus the Lp pages. (`FAQWithTracking` already used CSS collapse and was fine.)

**P2 — Puppeteer replaced.** `app/api/generate-pdf/route.ts` migrated to `puppeteer-core` + `@sparticuz/chromium` (serverless-correct, ~200MB smaller installs; 33 packages removed). Local dev uses `PUPPETEER_EXECUTABLE_PATH` (documented in `.env.example`); on Vercel/Lambda the trimmed Chromium is used automatically. **Note: test the PDF endpoint after the next deploy.**

**P6 — ESLint re-enabled at build.** Lint shows 0 errors (466 warnings, which don't fail builds), so `eslint.ignoreDuringBuilds` is now `false`.

**S3 — openGraph added to all 10 city pages** (title/description/url/siteName/locale derived from each page's existing metadata).

**Corrections to the original audit** (claims that didn't survive verification): S1 was already done — `app/blog/[slug]/page.tsx` emits full BlogPosting JSON-LD with author/dates/publisher. P4 was wrong — `UrgencyProvider` is consumed by `Navbar`/`Breadcrumb`/`MainContent` on every page, root placement is correct, and a client provider does not force server children to client-render. `libphonenumber-js` is only imported in a server API route, so it never affects client bundles.

Verification: full production build passes (exit 0, ~38s) with lint enabled; all Lp/service/city pages prerender as static; shared first-load JS 102 kB.

## Round 3 — final items implemented (✅ DONE)

**A1 — Answer-first paragraphs on all 35 service + city pages.** New `components/QuickAnswer.tsx` (server component) renders a question + concise factual answer directly below the hero on every service and city page. Copy is hand-written per page and limited to claims already made on the site (verification, 24–72h placement, replacement guarantee) — no invented pricing.

**S2 — Dynamic OG images.** New `app/og/route.tsx` generates branded 1200×630 Open Graph images on the edge (`/og?title=...`), with long-lived cache headers. All 35 service/city pages now reference per-page OG images in their metadata. The route deliberately lives at `/og`, not `/api/og`, because robots.txt disallows `/api/` and would have blocked crawlers from fetching the images.

**A4 — Speakable schema.** The blog `BlogPosting` JSON-LD now includes a `SpeakableSpecification` (h1 + first paragraph) for voice/AI assistants.

**P5 — correction, no action.** `CareClusterHeroScenes` and its parent landing view are server components; the inline SVGs ship zero client JS. The audit claim was a false positive.

**A2 — llms.txt completed.** The file was care-services-heavy: the 25 general service pages had no URLs at all and only 2 of 10 cities were listed. All service pages and all 10 city pages now have cited URLs, so AI engines can link directly to the relevant landing page.

Verification: `tsc --noEmit` clean; full production build passes (exit 0, 335 static pages).

### Still open (requires data/decisions outside the code)

GA4 + GTM double-tracking: `ThirdPartyScripts.tsx` deliberately loads GA4 standalone alongside GTM. To fix, add the GA4 config tag inside the GTM-PGM9V53 container, verify events flow, then delete the GA4 `<Script>` blocks. A3 pricing/comparison content needs real pricing decisions — the blog already has comparison guides; adding concrete ₹ figures is a business call. S4 AggregateRating: deliberately not implemented — Google ignores self-serving review markup on LocalBusiness/Organization (2019 policy), so star snippets require pulling genuine third-party reviews (e.g., Trustpilot API) rather than marking up the site's own 4.8/5 claim.

---

## Remaining recommendations — Performance

### P1. Server-render the landing pages (highest impact)
Six pages — the `/Lp/*` routes and case-studies — are marked `'use client'` at the page level, meaning their entire content is client-rendered. This hurts LCP, ships the whole page as JS, and gives crawlers a weaker initial HTML payload. Refactor so the page shell is a server component and only the interactive widgets (forms, accordions) are client components.

### P2. Replace full Puppeteer in the PDF route
`app/api/generate-pdf/route.ts` uses full `puppeteer` (~200MB with bundled Chromium). On Vercel serverless this is fragile and bloats the deployment. Switch to `puppeteer-core` + `@sparticuz/chromium` (purpose-built for serverless, ~50MB), or offload PDF generation to a service like Browserless. This also lets you drop the 200MB dependency.

### P3. Split the HeroSection
`HeroSection` (~393 lines) is a client component rendered above the fold, bundling its lead form into the critical JS path. Split into a server-rendered static hero (heading, copy, image — what LCP measures) plus a client-only form component, optionally loaded via `next/dynamic`.

### P4. Scope UrgencyProvider
A context provider in the root layout wraps the entire app, pulling the whole tree toward client rendering. Move it to wrap only the routes/components that actually consume urgency state.

### P5. Extract inline SVG scenes
`CareClusterHeroScenes` (~515 lines) ships large illustrations as React components (~15–20KB of JS per care page). Export them to `/public/svg/*.svg` and render via `next/image` — same visual, zero JS cost.

### P6. Smaller items
Re-enable ESLint at build (`eslint.ignoreDuringBuilds: true` is a standing TODO in `next.config.js`). Audit dual GA4 + GTM tracking — fire GA4 through GTM only, halving analytics script weight. Career pages import `react-hook-form` on 4 routes; consider native form handling or lazy-loading. If `libphonenumber-js` is imported from its root anywhere, switch to `libphonenumber-js/min`.

What's already good: AVIF/WebP image config with 1-year cache, `next/font` with selective preload, dynamic imports for modals/chat/floating widgets, content-hashed asset caching, comprehensive security headers, 35+ SEO-preserving 301s, ISR (`revalidate = 3600`) on key pages.

---

## Remaining recommendations — SEO

### S1. Article/BlogPosting schema on blog posts
~40+ blog posts render without Article schema (only `app/blog/[slug]/page.tsx` has some JSON-LD). Add BlogPosting markup with `headline`, `author`, `datePublished`, `dateModified`, and `image` — this is what earns rich results and gives AI engines attribution metadata. One change in the blog template covers all posts.

### S2. Per-page OpenGraph images
Most pages share one default OG image. Add `opengraph-image.tsx` (Next can generate these at build time) for service and city pages — improves CTR from social shares and is increasingly used by AI search UIs as the visual citation.

### S3. OpenGraph on city pages
City hub pages (e.g., Bangalore) define title/description/canonical but no `openGraph` block, unlike service pages. Add it for consistency.

### S4. Review/AggregateRating schema
No Review or AggregateRating markup anywhere. If you have genuine ratings (Google reviews, Trustpilot — the widget is already embedded), surface AggregateRating on LocalBusiness/Service schema for star snippets. Only use real, verifiable review data.

### S5. FAQ content rendering
FAQ sections on several templates are client-side accordions. Verify answers exist in the server-rendered HTML (not injected post-hydration) — if hidden via CSS that's fine; if rendered only on click, answer engines never see them. Blog FAQ accordions are the main suspect.

---

## Remaining recommendations — AEO

### A1. Answer-first paragraphs
Pages open with marketing copy and feature grids. AI engines extract and cite concise, factual, self-contained answers. Add a 40–60-word direct answer below the H1 of each service/city page ("EzyHelpers provides background-verified live-in maids in Bangalore starting at ₹X/month, with placement in 24–72 hours and a free replacement guarantee."). This is the single biggest AEO content lever.

### A2. Keep llms.txt current
`public/llms.txt` already exists (excellent). Add a step to the content workflow so new services/cities/posts get added; consider generating it from the same data as the sitemap.

### A3. Comparison and pricing content
Answer engines heavily cite pages that state concrete prices, timelines, and comparisons ("live-in vs full-time maid cost in Bangalore"). The blog redirects show this content direction has started — lean into structured comparison tables with real numbers.

### A4. Speakable + HowTo schema (optional)
For top blog guides ("how to hire a maid in Bangalore"), HowTo schema matches voice/AI query patterns. Lower priority than A1/S1.

---

## Suggested order of execution

1. ~~Schema gaps (Service, LocalBusiness), robots/AEO directives, dead config, dep placement~~ — **done in this audit**
2. S1 blog Article schema + A1 answer-first paragraphs (highest remaining SEO/AEO ROI, content-level)
3. P1 server-render landing pages + P3 hero split (highest Core Web Vitals ROI)
4. P2 puppeteer-core migration
5. S2/S3 OG improvements, P4–P6, A3–A4

After deploying, validate schema with Google's Rich Results Test on one service page, one city page, and one blog post, and resubmit the sitemap in Search Console.
