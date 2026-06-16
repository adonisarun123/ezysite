import Link from 'next/link'
import {
  CheckIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ClockIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  HomeIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'

const PATH = '/care-services/home-nursing-cost-bangalore'

/* ─────────── data ─────────── */

const PRICE_TABLE = [
  {
    arrangement: 'Single nurse visit',
    bestFor: 'Wound dressing · IV · injections · catheter change',
    range: '₹600 – ₹1,200',
    unit: 'per visit',
  },
  {
    arrangement: '12-hour shift',
    bestFor: 'Daytime monitoring, post-surgery recovery, oxygen support',
    range: '₹1,200 – ₹1,800',
    unit: 'per shift',
  },
  {
    arrangement: '24-hour shift cover',
    bestFor: 'Critical recovery requiring continuous nursing',
    range: '₹2,200 – ₹3,000',
    unit: 'per day',
  },
  {
    arrangement: 'Live-in nurse (monthly)',
    bestFor: 'Long-term medical-grade care at home',
    range: '₹35,000 – ₹55,000',
    unit: 'per month',
  },
  {
    arrangement: 'ICU-grade nurse (live-in)',
    bestFor: 'Tracheostomy, ventilator, post-stroke complex care',
    range: '₹55,000 – ₹85,000',
    unit: 'per month',
  },
] as const

const CARETAKER_TABLE = [
  {
    arrangement: 'Caretaker visit (4 hours)',
    range: '₹400 – ₹700',
    unit: 'per visit',
  },
  {
    arrangement: '12-hour shift caretaker',
    range: '₹800 – ₹1,200',
    unit: 'per day',
  },
  {
    arrangement: 'Live-in caretaker (monthly)',
    range: '₹18,000 – ₹26,000',
    unit: 'per month',
  },
  {
    arrangement: 'Trained attendant (live-in)',
    range: '₹24,000 – ₹34,000',
    unit: 'per month',
  },
] as const

const PUSHES_UP = [
  {
    icon: AcademicCapIcon,
    title: 'Specialised credentials',
    body: 'ICU-trained, ventilator-certified or tracheostomy-experienced nurses cost meaningfully more than general home nurses.',
  },
  {
    icon: ClockIcon,
    title: 'Night & 24-hour cover',
    body: 'Continuous overnight shifts always carry a premium because of staffing rotation and rest requirements.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'High-complexity protocols',
    body: 'Wound vacs, dialysis support, oncology infusions, or unstable vitals require senior nursing experience.',
  },
  {
    icon: HomeIcon,
    title: 'Locality and reachability',
    body: 'Outer Bangalore and gated communities far from caregiver-dense areas see modest premiums for travel and continuity.',
  },
] as const

const PUSHES_DOWN = [
  {
    icon: ArrowTrendingDownIcon,
    title: 'Long-term commitment',
    body: 'Placements over 6 months typically have lower monthly rates than 1–2 month placements. Caregivers prefer stability.',
  },
  {
    icon: HeartIcon,
    title: 'Caretaker + visit nurse mix',
    body: 'For most stable patients, a live-in caretaker plus 2–3 weekly nurse visits costs 30–40% less than a live-in nurse.',
  },
  {
    icon: CheckIcon,
    title: 'Family member co-coverage',
    body: 'A spouse or adult child sharing nights or weekends reduces the shift burden and the monthly bill.',
  },
  {
    icon: ArrowTrendingDownIcon,
    title: 'Day shifts vs 24-hour cover',
    body: 'If the patient is stable overnight, a 12-hour day shift saves 30–45% over a 24-hour arrangement.',
  },
] as const

const HIDDEN_VS_NOT = {
  included: [
    'Caregiver placement & matching',
    'Aadhaar + ID verification',
    'Background and reference checks',
    'Initial briefing and orientation',
    'Free replacement if the match isn’t working',
    'Ongoing family support and follow-ups',
  ],
  notIncluded: [
    'Caregiver salary (paid directly per the arrangement)',
    'Medical consumables (gloves, dressings, syringes)',
    'Prescription medications and IV fluids',
    'Equipment (oxygen, hospital bed, suction)',
    'Hospital visits and ambulance services',
    'Festival or annual bonus (when applicable)',
  ],
} as const

type HospitalRow = {
  label: string
  cost: string
  unit: string
  note: string
  highlight?: boolean
}

const HOSPITAL_COMPARE: HospitalRow[] = [
  {
    label: 'Private room (mid-tier hospital)',
    cost: '₹8,000 – ₹15,000',
    unit: 'per day',
    note: 'Excludes nursing, food, medication',
  },
  {
    label: 'ICU bed',
    cost: '₹15,000 – ₹35,000',
    unit: 'per day',
    note: 'Plus consumables, often 3–5× higher',
  },
  {
    label: 'Live-in home nurse',
    cost: '₹1,150 – ₹1,800',
    unit: 'per day',
    note: 'Familiar surroundings, family present',
    highlight: true,
  },
  {
    label: 'Live-in caretaker + 3 visits/week',
    cost: '₹650 – ₹1,000',
    unit: 'per day',
    note: 'For stable patients with weekly clinical needs',
    highlight: true,
  },
]

const FAQS = [
  {
    question: 'Why does home nursing cost vary so much in Bangalore?',
    answer:
      'The biggest variables are: (1) credentials, ICU or ventilator-trained nurses cost roughly 60–100% more than general home nurses, (2) shift type, 24-hour cover is more than 2× a 12-hour shift, (3) duration, long placements (6+ months) get better rates, and (4) complexity, tracheostomy, dialysis support, or oncology require senior nurses at the higher end of the band.',
  },
  {
    question: 'Is home nursing cheaper than staying in a hospital?',
    answer:
      'Almost always, and significantly so. A live-in home nurse runs ₹1,150–₹1,800/day. A private hospital room is typically ₹8,000–₹15,000/day before adding nursing, food, medication and tests. For stable patients, home care can cost 80–90% less per day than continued hospitalisation.',
  },
  {
    question: 'What’s the cheapest way to get clinical care at home?',
    answer:
      'For patients who only need procedural care a few times a week (wound dressing, injections, IV), nurse visits at ₹600–₹1,200 each are far cheaper than a full-time placement. For stable patients needing more daily support, a live-in caretaker plus weekly nurse visits typically costs 30–40% less than a live-in nurse.',
  },
  {
    question: 'Are there any hidden charges?',
    answer:
      'No. The placement fee and the monthly arrangement are both explained clearly during consultation. What varies on top of the base rate is medical consumables (dressings, gloves), medication, and equipment, these are passed through at cost and never marked up. We don’t charge cancellation fees if a placement isn’t working.',
  },
  {
    question: 'What does a "live-in" arrangement actually mean for cost?',
    answer:
      'A live-in caregiver lives in the home, typically getting one weekly off-day and one daily rest period of 2 hours. The monthly rate covers room and board provided by the family, meals, a bed, basic toiletries. If the family covers travel for the off-day, the rate may be slightly lower.',
  },
  {
    question: 'How does cost compare to other Indian cities?',
    answer:
      'Bangalore home nursing is broadly similar to Mumbai and Delhi (within 10%), modestly higher than Hyderabad and Pune, and 20–30% higher than Tier-2 cities like Bhopal or Indore. Within Bangalore, prices are uniform across localities, caregivers are matched citywide.',
  },
  {
    question: 'Can I pay weekly instead of monthly?',
    answer:
      'Yes. Weekly arrangements work well for short-term post-surgery care or trial placements. Long-term arrangements are typically billed monthly and tend to carry slightly better rates because the caregiver values stability.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Home Nursing Services in Bangalore',
    areaServed: { '@type': 'City', name: 'Bangalore' },
    provider: {
      '@type': 'Organization',
      name: 'EzyHelpers',
    },
    offers: PRICE_TABLE.map((row) => ({
      '@type': 'Offer',
      name: row.arrangement,
      description: row.bestFor,
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'INR',
        price: row.range,
        unitText: row.unit,
      },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  },
] as const

export default function HomeNursingCostView() {
  return (
    <CareSubpageShell
      currentLabel="Home Nursing Cost"
      eyebrow="Bangalore · Pricing transparency"
      headlineLead="Home nursing in Bangalore."
      headlineAccent="What it actually costs."
      lede="Transparent ranges for every common arrangement, visits, shifts, 24-hour cover, and live-in placements. What changes the price, what doesn’t, and how to spend wisely without underpaying for care."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      {/* Direct answer card */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-[#F2F7FB] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            Home nursing in Bangalore typically costs <em className="italic text-care-500">₹600–₹1,200</em>{' '}
            per nurse visit, <em className="italic text-care-500">₹1,200–₹1,800</em> for a 12-hour shift,
            and <em className="italic text-care-500">₹35,000–₹55,000/month</em> for a live-in nurse.
            Specialist (ICU, ventilator) care runs higher; a live-in caretaker plus weekly nurse visits is
            often 30–40% cheaper for stable patients.
          </p>
        </div>
      </section>

      {/* Main pricing table */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Nursing arrangements"
            titleLead="Pricing for nurses,"
            titleMuted="by arrangement."
            lede="These are the indicative ranges across Bangalore. Final pricing depends on the patient’s clinical complexity and the experience level the case requires."
          />
          <div className="mt-12 overflow-hidden rounded-[24px] border border-neutral-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F7F7F2] text-xs uppercase tracking-[0.18em] text-neutral-600">
                <tr>
                  <th className="px-5 py-4 font-semibold">Arrangement</th>
                  <th className="px-5 py-4 font-semibold">Best for</th>
                  <th className="px-5 py-4 font-semibold">Indicative range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-800">
                {PRICE_TABLE.map((row) => (
                  <tr key={row.arrangement}>
                    <td className="px-5 py-5 font-semibold text-neutral-950">{row.arrangement}</td>
                    <td className="px-5 py-5 text-neutral-700">{row.bestFor}</td>
                    <td className="px-5 py-5 font-semibold text-neutral-950">
                      {row.range}
                      <span className="ml-1 text-xs font-medium uppercase tracking-wide text-neutral-500">
                        {row.unit}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Caretaker comparison table */}
      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Often a better fit"
            titleLead="Caretaker pricing,"
            titleMuted="for non-clinical needs."
            lede="If the patient doesn’t need procedural medical care, a caretaker is the right choice, significantly more affordable, and equally capable for hygiene, feeding, mobility, and companionship."
          />
          <div className="mt-12 overflow-hidden rounded-[24px] border border-neutral-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-white text-xs uppercase tracking-[0.18em] text-neutral-600">
                <tr>
                  <th className="px-5 py-4 font-semibold">Arrangement</th>
                  <th className="px-5 py-4 font-semibold">Indicative range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-800">
                {CARETAKER_TABLE.map((row) => (
                  <tr key={row.arrangement}>
                    <td className="px-5 py-5 font-semibold text-neutral-950">{row.arrangement}</td>
                    <td className="px-5 py-5 font-semibold text-neutral-950">
                      {row.range}
                      <span className="ml-1 text-xs font-medium uppercase tracking-wide text-neutral-500">
                        {row.unit}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-neutral-500">
            Not sure which you need? Read{' '}
            <Link
              href="/care-services/home-nurse-vs-caretaker"
              className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
            >
              home nurse vs caretaker
            </Link>{' '}
, a 3-minute decision guide.
          </p>
        </div>
      </section>

      {/* Drivers of cost */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">Pushes price up</p>
              <h3 className="mt-4 font-careSerif text-2xl font-medium leading-tight tracking-tight text-neutral-950 sm:text-3xl">
                What costs more, and why.
              </h3>
              <ul className="mt-8 space-y-4">
                {PUSHES_UP.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-care-50 text-care-500 ring-1 ring-care-500/15">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <strong className="block text-base font-bold text-neutral-950">{title}</strong>
                      <span className="block text-sm leading-relaxed text-neutral-600">{body}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1F8A4C]">Pushes price down</p>
              <h3 className="mt-4 font-careSerif text-2xl font-medium leading-tight tracking-tight text-neutral-950 sm:text-3xl">
                Where families spend less without compromising care.
              </h3>
              <ul className="mt-8 space-y-4">
                {PUSHES_DOWN.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F4EC] text-[#1F8A4C] ring-1 ring-[#1F8A4C]/15">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <strong className="block text-base font-bold text-neutral-950">{title}</strong>
                      <span className="block text-sm leading-relaxed text-neutral-600">{body}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital comparison */}
      <section className="bg-[#F2F7FB] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="The economics"
            titleLead="Home care vs"
            titleMuted="extended hospital stay."
            lede="For most stable patients, continuing recovery at home is dramatically less expensive than staying in hospital, and far better for psychological recovery."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {HOSPITAL_COMPARE.map((row) => (
              <div
                key={row.label}
                className={`rounded-[24px] border p-6 ${
                  row.highlight
                    ? 'border-care-500/40 bg-white shadow-[0_2px_10px_rgba(0,116,200,0.08)]'
                    : 'border-neutral-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <strong className="font-careSerif text-lg font-bold text-neutral-950">{row.label}</strong>
                  {row.highlight ? (
                    <span className="rounded-full bg-care-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-care-500">
                      Home care
                    </span>
                  ) : null}
                </div>
                <div className="mt-3 font-careSerif text-2xl font-medium text-neutral-950 sm:text-3xl">
                  {row.cost}
                  <span className="ml-1 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    {row.unit}
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-500">{row.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included / what's not */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="No hidden charges"
            titleLead="What’s included"
            titleMuted="and what’s passed through."
            lede="The placement fee and arrangement covers the matching, verification, and ongoing support. Medical consumables, equipment, and medication are real costs we don’t add a margin on."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[24px] border border-neutral-200 bg-[#F1F6F0] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1F8A4C]">Included</p>
              <h3 className="mt-3 font-careSerif text-xl font-bold text-neutral-950 sm:text-2xl">
                In your arrangement
              </h3>
              <ul className="mt-5 space-y-2.5">
                {HIDDEN_VS_NOT.included.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-neutral-800">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#1F8A4C]" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] border border-neutral-200 bg-care-50 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">Not included</p>
              <h3 className="mt-3 font-careSerif text-xl font-bold text-neutral-950 sm:text-2xl">
                Passed through at cost
              </h3>
              <ul className="mt-5 space-y-2.5">
                {HIDDEN_VS_NOT.notIncluded.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-neutral-800">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-care-500" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Cost questions, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Get an exact quote in 15 minutes."
        headlineAccent="No commitment."
        body="Tell us what you need. We respond within the hour with a precise quote, the right arrangement type, and a shortlist of caregivers."
        enquirySource={PATH}
        primaryCtaLabel="Get an exact quote"
        related={[
          { label: 'Home Nursing Services', href: '/care-services/home-nursing-services-bangalore' },
          { label: 'Caretaker Services', href: '/care-services/caretaker-services-bangalore' },
          { label: 'Nurse vs Caretaker', href: '/care-services/home-nurse-vs-caretaker' },
          { label: 'All Care Services', href: '/care-services' },
        ]}
      />
    </CareSubpageShell>
  )
}
