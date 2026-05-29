# Marketing route group — incremental migration guide

A new route group `app/(marketing)/` was introduced. Its `layout.tsx` mounts the
shared chrome (`<Navbar />`, `<NestCTA />`, `<Footer />`) once. Pages migrated
into the group no longer need to import or render those components themselves.

The group segment does NOT affect URLs — `app/(marketing)/about/page.tsx` still
serves `/about`.

## Why migrate

- Each marketing page currently repeats `import Navbar from ...`,
  `import Footer from ...`, `<Navbar />`, `<Footer />`, and often `<NestCTA />`.
  339+ occurrences across the repo.
- Removing the duplication saves ~600 lines of imports + JSX and prevents the
  inconsistent footer placements that crept in over time.
- Adding a new global section (banner, announcement, breadcrumb wrapper) now
  touches one file instead of 150+.

## The migration recipe (per page)

```bash
# 1. Move the route into the group (use git mv to preserve history)
git mv app/<route> app/(marketing)/<route>

# 2. In the moved page.tsx:
#    a) delete the imports for Navbar / Footer / NestCTA
#    b) delete the corresponding JSX (<Navbar />, <Footer />, <NestCTA />)
#    c) convert any relative '../../components/...' imports to '@/components/...'
```

After editing, `npx tsc --noEmit` should pass.

## Proof migration

`app/about` has already been migrated as a working example. Diff vs git history
shows the import + JSX deletions and the relative-to-alias path swap.

## Candidate routes — recommended migration order

These are stable marketing pages with the shared chrome and minimal layout
complexity. Migrate top-down; verify each batch with `tsc --noEmit` and a
visual smoke check.

### Batch 1 — top-level core (low risk, high traffic)
- `app/contact` → `app/(marketing)/contact`
- `app/how-it-works` → `app/(marketing)/how-it-works`
- `app/faqs` → `app/(marketing)/faqs`
- `app/hire-helper` → `app/(marketing)/hire-helper`
- `app/book-now` → `app/(marketing)/book-now`
- `app/for-helpers` → `app/(marketing)/for-helpers`
- `app/terms-of-service`, `app/privacy-policy`, `app/refund-policy`, `app/terms-and-policies`

### Batch 2 — services cluster
- `app/services/*` (each leaf service directory)

### Batch 3 — cities cluster
- `app/cities/bangalore`, `app/cities/bareilly` and their sub-routes
- Thin city placeholders (`delhi`, `mumbai`, …) — migrate or noindex first

### Batch 4 — blog + careers + helper-jobs
- `app/blog/page.tsx` (index)
- `app/careers/*`
- `app/helper-jobs/*` (state hubs and leaf pages)

### Batch 5 — care-services
- `app/care-services/*`

### Batch 6 — auxiliary
- `app/case-studies/*`
- `app/executive-summary`, `app/market-overview`, `app/nduw`, `app/nest`

## DO NOT migrate

- `app/api/*` — API routes
- `app/manifest.ts`, `app/robots.ts`, `app/sitemap.ts`, `app/layout.tsx`,
  `app/globals.css`
- `app/not-found.tsx` (root 404; has its own chrome)
- `app/Lp/*` — paid-traffic landing pages with their own noindex layout.tsx and
  often custom chrome. Inspect each before migrating.
- `app/agent-success`, `app/helper-success` — redirected (302) to `/thank-you`;
  reachable only via direct navigation. Their own layouts handle metadata.
- `app/thank-you` — usually has its own chrome and no NestCTA. Inspect.
- `app/on-demand-help/thank-you` — same.
- `app/customer-requirements`, `app/helper-leads`, `app/helper-interview`,
  `app/helper-registration`, `app/agent-registration`, `app/service-request` —
  form pages with their own layout.tsx (already noindexed). Migrate only if the
  layout has no extra logic beyond `{children}`.
- `app/hin` — currently `redirect('/')`.
- Any page that intentionally OMITS the Navbar/Footer for its UX.

## Mechanical safety checks

After each batch:

1. `npx tsc --noEmit` — must remain clean
2. `grep -rln "<Navbar />" app/(marketing)` — should return zero matches in migrated pages
3. `grep -rln "<Footer />" app/(marketing)` — same
4. Visit the page in dev (`npm run dev`) and confirm the navbar and footer still appear from the layout
5. Confirm the URL didn't change (the route group is path-invisible)

## Estimated savings

| Metric | Before | After (full migration) |
|---|---|---|
| Per-page Navbar/Footer imports | ~150 × 4 lines | 0 |
| Per-page chrome JSX | ~150 × 3 lines | 0 |
| Risk of inconsistent footer placement | Real (one page had Footer outside main) | None |
| Updating chrome globally | Touch 150+ files | Touch 1 file |
