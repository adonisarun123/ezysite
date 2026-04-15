# Location-centric Services Pages: Bangalore and Bareilly

## Objectives
- Create/update SEO-optimized city landing pages and service subpages for Bangalore and Bareilly using provided markdown content.
- Keep implementation aligned with current routing and component patterns in the codebase.
- Make future content updates repeatable and low-friction.

## Current State Findings
- __Existing City Pages__: `app/cities/bangalore/page.tsx`, `app/cities/bareilly/page.tsx` already exist and follow a component-based, sectioned layout.
- __Existing City Service Pages__:
  - Bangalore: `app/cities/bangalore/live-in-maids/page.tsx` (present). Additional service pages may be added per need.
  - Bareilly: Multiple service pages already exist under `app/cities/bareilly/` (e.g., `full-time-maid`, `appliance-repair`, `electrician`, etc.).
- __Global Services__: Central pages exist under `app/services/*` (e.g., `full-time-maids`, `appliance-repair`, etc.) used in city pages via links.
- __Markdown Usage__: Blog uses `react-markdown` + `remark-gfm` (`app/blog/[slug]/page.tsx`). No global gray-matter/MDX pipeline currently configured for general content.
- __Content Sources__:
  - Bangalore landing and services:
    - `docs/New docs/Bangalore Content (Markdown Files)/Bangalore Landing Page.md`
    - `docs/New docs/Bangalore Content (Markdown Files)/Main Services/*.md`
    - `docs/New docs/Bangalore Content (Markdown Files)/Home Maintenanace Services/*.md`
  - Bareilly landing and services:
    - `docs/New docs/Bareilly Content (Revised)/Landing Page.md`
    - `docs/New docs/Bareilly Content (Revised)/Primary Services/*.md`
    - `docs/New docs/Bareilly Content (Revised)/Home Repairs & Maintenance Services/*.md`

## Routing Plan
- __Landing Pages__ (already present):
  - Bangalore: `/cities/bangalore` → `app/cities/bangalore/page.tsx`
  - Bareilly: `/cities/bareilly` → `app/cities/bareilly/page.tsx`
- __Service Subpages__ (per city):
  - Pattern: `/cities/[city]/[service]/page.tsx`
  - Slug mapping examples:
    - "Full-Time Maid" → `full-time-maid`
    - "Part-Time Maid" → `part-time-maid`
    - "Live-In Maid" → `live-in-maid`
    - "On-Demand Maid/Helper" → `on-demand-helper`
    - "Babysitter" → `babysitter`
    - "Elderly Care" → `elderly-care`
    - Maintenance: `appliance-repair`, `electrician`, `plumber`, `carpenter`, `painter`, `home-cleaning|deep-cleaning`, `gardener`, `sofa-cleaning`, `ac-repair`, `pest-control`, `drivers|driver`
- __Dynamic Templates__ (optional):
  - `app/cities/[city]/page.tsx` and `app/cities/[city]/[service]/page.tsx` already exist; ensure content for Bangalore and Bareilly leverages these patterns for consistency.

## Content Mapping Strategy
- __Approach A (Recommended, Low-Risk)__: Map each markdown section into structured props/arrays rendered by existing section components.
  - Extract from markdown:
    - Meta Title, Meta Description → Next `metadata` in the page file
    - H1/H2s → Section headings
    - Bulleted lists → `features`, `trustIndicators`, `areas`, `steps`
    - CTAs → Link labels for `/hire-helper` and tel links
  - Benefit: No new markdown parsing pipeline required; consistent UI/UX.
- __Approach B (Optional)__: Inline render parts of the markdown using `react-markdown` where free-form text blocks are long.
  - Import `ReactMarkdown` and `remark-gfm` (already used in blog). Keep headings and lists mapped to components for consistent visuals.

## Implementation Steps
1. __Prepare Slug Map__
   - Define a shared slug helper in `lib/slug.ts` (e.g., "Full-Time Maid" → `full-time-maid`).
2. __Create City Content Module__
   - New file: `lib/cityContent.ts` to hold structured content objects for Bangalore and Bareilly:
     - Landing content: title, description, trustIndicators, areas, steps, CTAs.
     - Service cards (primary and maintenance) for the landing page.
     - Optional: per-service detailed content for each city subpage.
3. __Update Landing Pages__
   - `app/cities/bangalore/page.tsx`: replace hardcoded strings with imports from `lib/cityContent.ts` (Bangalore section).
   - `app/cities/bareilly/page.tsx`: same for Bareilly (pull Meta Title/Description from markdown).
4. __Create/Update Service Subpages__
   - For each `.md` under city folders, ensure a matching route exists under `app/cities/[city]/[service]/page.tsx`.
   - If a page already exists, update content via `lib/cityContent.ts` objects.
   - If missing, create new page files reusing a simple `CityServiceTemplate` component.
5. __Add a Reusable Template__
   - New component: `components/city/CityServiceTemplate.tsx` that accepts props like: `title`, `intro`, `features[]`, `faqs[]`, `ctaLabels`, and renders consistent sections.
6. __SEO & Schema__
   - Use Next `export const metadata` per page populated from markdown-derived fields.
   - Add `BreadcrumbSchema` and `FAQSchema` where applicable with canonical URLs like `https://ezyhelpers.com/cities/[city]/[service]`.
7. __Content QA & Links__
   - Verify internal links from city pages point to either city-scoped service routes or global `/services/*` routes as desired.
   - Ensure CTAs point to `/hire-helper` and `tel:+919972571005`.

## Files To Add / Edit
- __Add__
  - `lib/slug.ts` (helper to normalize slugs)
  - `lib/cityContent.ts` (structured content store for Bangalore and Bareilly)
  - `components/city/CityServiceTemplate.tsx` (shared city service view)
  - New service pages as needed, e.g.:
    - `app/cities/bangalore/full-time-maid/page.tsx`
    - `app/cities/bangalore/part-time-maid/page.tsx`
    - `app/cities/bangalore/appliance-repair/page.tsx`
    - `app/cities/bareilly/[missing-service]/page.tsx` (only for services present in docs but missing in codebase)
- __Edit__
  - `app/cities/bangalore/page.tsx` (wire to `lib/cityContent.ts`)
  - `app/cities/bareilly/page.tsx` (wire to `lib/cityContent.ts`)
  - Existing Bareilly service pages to standardize props-driven content (optional, for consistency)

## How To Update Content (Step-by-Step)
1. __Collect Markdown__ for the city (Landing + Services) in `docs/New docs/...`.
2. __Extract Structured Fields__ from each markdown file:
   - Meta Title, Meta Description
   - H1/H2s
   - Bulleted Feature Lists
   - Trust Indicators
   - Service Areas
   - Booking Steps
   - CTA labels
3. __Update `lib/cityContent.ts`__
   - Add/modify the city object (e.g., `cityContent.bangalore`) with extracted fields.
   - For each service, add a structured object containing `title`, `description`, `features[]`, `faqs[]` (if available), and optional `seo` fields.
4. __Ensure Routes Exist__
   - For each service defined in content, confirm a corresponding page exists under `app/cities/[city]/[service]/page.tsx`.
   - If it doesn’t, copy `components/city/CityServiceTemplate.tsx` usage into a new page and pass the right props from `lib/cityContent.ts`.
5. __Set SEO Metadata__
   - In each page, export `metadata` using the city/service `seo` fields from `lib/cityContent.ts`.
6. __Run & Verify__
   - Start the dev server.
   - Manually QA: headings, sections, lists, CTAs, internal links, and schema components.
   - Check Lighthouse/SEO meta and canonical URLs.

## SEO & Structured Data
- Per page: set `title`, `description`, and `keywords` including city and service terms.
- Add `BreadcrumbSchema` with `Home` → `Cities` → `City` → `Service` (where applicable).
- Add `FAQSchema` to pages with Q&A (if present in content). If not, keep consistent global FAQs.
- Canonicals: `https://ezyhelpers.com/cities/[city]` and `https://ezyhelpers.com/cities/[city]/[service]`.

## QA Checklist
- __Content__: Matches markdown intent and terminology (city names, locality lists, features).
- __Routing__: All linked services exist; no 404s.
- __CTAs__: `/hire-helper` and `tel:+919972571005` work.
- __Design__: Consistent with existing city pages.
- __SEO__: Metadata present; canonical correct; schema validates.
- __Accessibility__: Headings logical; link text descriptive.

## Notes
- Keeping parsing manual/structured avoids introducing loaders for raw `.md`. If needed later, we can add a filesystem-based markdown ingest (using `gray-matter` + `react-markdown`) within server components, but the current plan favors reliability and speed using structured content in `lib/cityContent.ts`.
