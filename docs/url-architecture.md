# EzyHelpers — Complete URL Architecture

`www.ezyhelpers.com` · Next.js App Router (`app/` directory)

**Totals:** 288 page routes · 18 API routes · 59 legacy redirects · `app/sitemap.ts` + `app/robots.ts` generated dynamically.

---

## 1. Top-level / core pages

| URL | Purpose |
|-----|---------|
| `/` | Homepage |
| `/about` | About (in `(marketing)` route group — URL has no `/marketing` prefix) |
| `/contact` | Contact |
| `/faqs` | FAQs |
| `/how-it-works` | How hiring works |
| `/book-now` | Booking entry |
| `/hire-helper` | Hire a helper landing |
| `/requirement` | Post a requirement |
| `/customer-requirements` | Customer requirement form |
| `/service-request` | Service request |
| `/thank-you` | Generic thank-you |
| `/hin` | Hindi homepage variant |

## 2. Helper-side (job seekers)

| URL | Purpose |
|-----|---------|
| `/for-helpers` | Helpers landing |
| `/join-as-helper` | Join as helper |
| `/helper-registration` | Helper registration form |
| `/helper-success` | Helper registration success |
| `/helper-interview` | Interview scheduling |
| `/helper-leads` | Helper leads (internal) |
| `/nduw` | NDUW registration |

## 3. Agent-side

| URL | Purpose |
|-----|---------|
| `/agent-registration` | Agent registration |
| `/agent-success` | Agent registration success |

## 4. Services (`/services/...`) — 27 pages

Hub: `/services`

Dynamic route `/services/[service]` exists but is **disabled** (empty `generateStaticParams` + `dynamicParams = false`) — only the explicit pages below resolve; any other slug 404s.

Domestic help: `/services/full-time-maids`, `/services/part-time-maids`, `/services/live-in-maids`, `/services/cooks`, `/services/professional-chef-for-home`, `/services/nanny-babysitter`, `/services/japa-nanny-services`, `/services/elderly-care`, `/services/special-needs-caregiver`, `/services/dog-pet-sitters`, `/services/drivers`, `/services/premium-chauffeur-service`, `/services/patient-care-services-at-home`, `/services/on-demand-helpers`

Skilled trades / cleaning: `/services/electricians`, `/services/plumbers`, `/services/carpenters`, `/services/painters`, `/services/ac-repair`, `/services/appliance-repair`, `/services/deep-cleaning`, `/services/sofa-cleaning`, `/services/pest-control`, `/services/gardener`, `/services/house-shifting`

## 5. Care services (`/care-services/...`) — 87 pages

Hub: `/care-services`

The largest section — Bangalore home-healthcare. Grouped by theme:

**Elder care:** `/care-services/elder-care-at-home-bangalore`, `elderly-care-services-bangalore`, `24-hour-elderly-care-at-home-bangalore`, `elderly-companionship-care-bangalore`, `dementia-care-at-home-bangalore`, `dementia-alzheimers-care-bangalore`, `alzheimers-care-at-home-bangalore`, `parkinsons-care-at-home-bangalore`, `parkinsons-care-at-home-bangalore-elder`, `diabetes-care-at-home-bangalore`, `arthritis-joint-pain-care-at-home-bangalore`, `respiratory-copd-care-at-home-bangalore`, `post-fall-mobility-care-bangalore`, `respite-care-at-home-bangalore`, `senior-mental-health-counselling-bangalore`

**Elder care by locality:** `/care-services/elderly-care-{hsr-layout,koramangala,indiranagar,jayanagar,whitefield,marathahalli,sarjapur-road,electronic-city,bannerghatta-road}-bangalore`

**Nursing:** `home-nursing-care-bangalore`, `home-nursing-services-bangalore`, `wound-care-dressing-at-home-bangalore`, `iv-therapy-at-home-bangalore`, `catheter-care-at-home-bangalore`, `injections-vitals-monitoring-bangalore`, `post-surgical-nursing-care-bangalore`, `tracheostomy-care-at-home-bangalore`

**Critical / ICU:** `critical-care-at-home-bangalore`, `icu-setup-at-home-bangalore`, `ventilator-care-at-home-bangalore`, `post-icu-recovery-care-bangalore`, `tracheostomy-critical-care-bangalore`, `cardiac-critical-care-at-home-bangalore`

**Palliative:** `palliative-care-at-home-bangalore`, `cancer-care-at-home-bangalore`, `cancer-palliative-care-at-home-bangalore`, `pain-symptom-management-at-home-bangalore`, `end-of-life-care-at-home-bangalore`, `hospice-care-at-home-bangalore`

**Physiotherapy:** `physiotherapy-at-home-bangalore`, `orthopedic-physiotherapy-at-home-bangalore`, `neuro-physiotherapy-at-home-bangalore`, `post-surgical-physiotherapy-bangalore`, `geriatric-physiotherapy-bangalore`, `cardio-respiratory-physiotherapy-bangalore`, `paediatric-physiotherapy-bangalore`, `post-stroke-speech-rehab-at-home-bangalore`

**Patient / discharge:** `patient-care-services-bangalore`, `bedridden-patient-care-at-home-bangalore`, `bedridden-patient-care-bangalore`, `post-surgery-recovery-bangalore`, `hospital-discharge-care-bangalore`, `stroke-care-at-home-bangalore`, `multiple-sclerosis-als-care-at-home-bangalore`

**Equipment rental:** `medical-equipment-rental-bangalore`, `hospital-bed-rental-bangalore`, `oxygen-concentrator-rental-bangalore`, `wheelchair-rental-bangalore`, `patient-monitor-rental-bangalore`, `bipap-cpap-rental-bangalore`, `mobility-aids-rental-bangalore`

**Attendants:** `home-attendant-services-bangalore`, `trained-attendant-services-bangalore`, `caretaker-services-bangalore`

**Overview / info hubs:** `home-care-services-bangalore`, `home-healthcare-services-bangalore`, `nri-family-home-care-bangalore`, `insurance-and-home-care-bangalore`, `home-nursing-cost-bangalore`

**Comparison / guide content:** `home-care-vs-old-age-home`, `home-nurse-vs-caretaker`, `live-in-vs-day-shift-caregiver`, `signs-elderly-parent-needs-care-bangalore`

**Care tools & meta:** `/care-services/cost-calculator`, `care-quiz`, `care-glossary`, `care-leadership`, `caregiver-training`, `caregiver-verification-process`, `apply`, `enquiry`

## 6. Cities (`/cities/...`) — 50 pages

Hub pattern: `/cities/[city]` and `/cities/[city]/[service]` dynamic routes both **disabled** — only explicit folders resolve.

**City hubs:** `/cities/bangalore`, `/cities/bareilly`, `/cities/delhi`, `/cities/hyderabad`, `/cities/mumbai`, `/cities/noida`, `/cities/lucknow`, `/cities/kanpur`, `/cities/meerut`, `/cities/nagpur`

**Bangalore services** (`/cities/bangalore/...`): `full-time-maid`, `part-time-maid`, `live-in-maids`, `cooks`, `home-chef`, `drivers`, `chauffeur-service`, `nanny-babysitter`, `educated-babysitter`, `travel-nanny`, `elderly-care`, `on-demand-helper`, `home-deep-cleaning`, `electrician`, `plumber`, `carpenter`, `painter`, `appliance-repair`, `gardener`

**Bareilly services** (`/cities/bareilly/...`): `full-time-maid`, `part-time-maid`, `live-in-maid`, `cooks`, `drivers`, `babysitter`, `elderly-care`, `japa`, `on-demand-helper`, `home-deep-cleaning`, `sofa-cleaning`, `electrician`, `plumber`, `carpenter`, `painting`, `ac-repair`, `appliance-repair`, `pest-control`, `house-shifting`

## 7. Helper jobs (`/helper-jobs/...`) — 81 pages

Hub: `/helper-jobs` · Hindi hub: `/helper-jobs/hin`

Organized by **source state** (where helpers come from), each with a `/hin` Hindi variant and job-type sub-pages. States: `andhrapradesh`, `assam`, `bihar`, `chhattisgarh`, `jharkhand`, `kolkata`, `madhyapradesh`, `odisha`, `tamilnadu`, `telangana`, `uttarpradesh`, `uttarakhand`.

Job-type sub-pages (vary by state), e.g. under `/helper-jobs/assam/`: `home-cook-jobs-bangalore`, `housekeeping-job-bangalore`, `nanny-jobs-bangalore`, `elderly-care-jobs-bangalore`, `japa-maid-job-bangalore`, `patient-care-job-bangalore`, `live-in-apartment-caretaker-jobs-bangalore`, `live-in-couple-housekeeping-jobs-bangalore`, `husband-wife-farmhouse-job-bangalore` — most with a `/hin` variant.

Cross-state job pages: `/helper-jobs/home-cooks-job-bangalore`, `/helper-jobs/nanny-job-bangalore` (each with `/hin`).

## 8. Content sections

**Blog:** `/blog` (hub) · `/blog/[slug]` (static-generated from a posts list)
**Case studies:** `/case-studies` (hub) · `/case-studies/[slug]`
**Careers:** `/careers` (hub) · `/careers/[slug]` (generated from job openings) · dedicated page `/careers/chief-of-staff-intern`

## 9. On-demand help (Bangalore pilot)

| URL | Purpose |
|-----|---------|
| `/on-demand-help` | Pilot landing / booking |
| `/on-demand-help/thank-you` | Booking confirmation |

## 10. Network / investor / misc

`/our-network/families`, `/our-network/helpers`, `/nest`, `/executive-summary`, `/market-overview`

## 11. Landing pages (`/Lp/...`)

Note the capital **L**: `/Lp/full-time-maid-bangalore`, `/Lp/full-time-maid-bareilly`, `/Lp/live-in-maid-bangalore`, `/Lp/live-in-maid-bareilly`

## 12. Legal

`/privacy-policy`, `/terms-of-service`, `/terms-and-policies`, `/refund-policy`

---

## API routes (`/api/...`) — 18

**Chatbot & leads:** `/api/assistant` (Asha chatbot — GET health check now reports `payment_link_configured`), `/api/lead-digest`, `/api/customer-requirements`, `/api/send-lead-email`, `/api/send-nest-lead-email`, `/api/send-booking-email`, `/api/webhook-forward`

**Helpers & agents:** `/api/helpers`, `/api/agents`, `/api/helper-interview`, `/api/candidate-application`

**On-demand help:** `/api/on-demand-help/book`, `/api/on-demand-help/occupancy`

**Careers:** `/api/careers-apm`, `/api/careers-chief-of-staff`, `/api/careers-role-application`, `/api/careers-sales-executive`

**Misc:** `/api/generate-pdf`

---

## Routing behavior notes

- **Disabled dynamic routes:** `/services/[service]`, `/cities/[city]`, `/cities/[city]/[service]` all use empty `generateStaticParams()` + `dynamicParams = false` + `notFound()`. They exist as scaffolding but only the explicit static folders resolve; unknown slugs return 404.
- **Active dynamic routes:** `/blog/[slug]`, `/careers/[slug]`, `/case-studies/[slug]` generate from data lists.
- **Route group:** `app/(marketing)/about` → served at `/about` (the `(marketing)` group adds no URL segment).
- **Redirects:** 59 permanent (301) redirects in `next.config.js` map legacy URLs (old blog slugs, `/home`, `/services/elderlycare`, `/product/*`, `/terms`, etc.) to current paths.
- **SEO:** `app/sitemap.ts` and `app/robots.ts` generate the sitemap and robots.txt dynamically at build/request time.
