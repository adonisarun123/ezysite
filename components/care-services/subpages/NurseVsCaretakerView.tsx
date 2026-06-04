import Link from 'next/link'
import {
  CheckIcon,
  XMarkIcon,
  AcademicCapIcon,
  HeartIcon,
  HandRaisedIcon,
  BeakerIcon,
  HomeIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'

const PATH = '/care-services/home-nurse-vs-caretaker'

/* ───── data ───── */

type Row = {
  capability: string
  nurse: 'yes' | 'no' | 'sometimes'
  caretaker: 'yes' | 'no' | 'sometimes'
  attendant: 'yes' | 'no' | 'sometimes'
  detail?: string
}

const ROWS: Row[] = [
  { capability: 'Wound dressing & IV care', nurse: 'yes', caretaker: 'no', attendant: 'no' },
  { capability: 'Catheter, NG/PEG tube management', nurse: 'yes', caretaker: 'no', attendant: 'sometimes' },
  { capability: 'Vitals monitoring (BP, SpO₂, glucose)', nurse: 'yes', caretaker: 'sometimes', attendant: 'sometimes' },
  { capability: 'Medication administration & oversight', nurse: 'yes', caretaker: 'sometimes', attendant: 'sometimes' },
  { capability: 'Doctor handoffs & clinical log', nurse: 'yes', caretaker: 'no', attendant: 'no' },
  { capability: 'Bathing, hygiene & grooming', nurse: 'sometimes', caretaker: 'yes', attendant: 'yes' },
  { capability: 'Feeding, meal prep, swallow safety', nurse: 'sometimes', caretaker: 'yes', attendant: 'yes' },
  { capability: 'Mobility, walking, light exercise', nurse: 'sometimes', caretaker: 'yes', attendant: 'yes' },
  { capability: 'Companionship & emotional support', nurse: 'sometimes', caretaker: 'yes', attendant: 'yes' },
  { capability: 'Safe transfers (bed–chair, chair–toilet)', nurse: 'sometimes', caretaker: 'sometimes', attendant: 'yes' },
  { capability: 'Repositioning & pressure-sore prevention', nurse: 'sometimes', caretaker: 'sometimes', attendant: 'yes' },
  { capability: 'Bedridden patient handling', nurse: 'sometimes', caretaker: 'no', attendant: 'yes' },
]

type Accent = 'rose' | 'sky' | 'sand' | 'sage' | 'lilac'

type Scenario = {
  setup: string
  answer: string
  why: string
  href: string
  accent: Accent
  highlight?: boolean
}

const SCENARIOS: Scenario[] = [
  {
    setup: 'Mother, 72, type-2 diabetes and mild forgetfulness. Lives alone.',
    answer: 'Caretaker (live-in)',
    why: 'No active medical procedures. Daily companionship, meals, medication reminders, and safety supervision matter most.',
    href: '/care-services/caretaker-services-bangalore',
    accent: 'rose',
  },
  {
    setup: 'Father, 67, post-bypass surgery. Discharged today with chest tube and prescriptions.',
    answer: 'Nurse + caretaker (combined)',
    why: 'A nurse for wound care and chest-tube monitoring; a caretaker for meals, mobility, and hygiene. Two roles, one coordinated team.',
    href: '/care-services/home-healthcare-services-bangalore',
    accent: 'sky',
    highlight: true,
  },
  {
    setup: 'Aunt, 78, bedridden after stroke, has a feeding tube.',
    answer: 'Trained attendant (live-in)',
    why: 'Skilled physical handling — repositioning, feeding tube, transfers. A general caretaker isn’t equipped; a nurse is rarely needed daily.',
    href: '/care-services/trained-attendant-services-bangalore',
    accent: 'sand',
  },
  {
    setup: 'Husband recovering from a fracture, mobile but slow.',
    answer: 'Caretaker (12-hour day shift)',
    why: 'Daytime companionship, mobility help, light cooking. No clinical needs. Wife or family covers nights.',
    href: '/care-services/caretaker-services-bangalore',
    accent: 'sage',
  },
  {
    setup: 'Mother undergoing chemotherapy, with weekly IV port flush.',
    answer: 'Caretaker daily + nurse weekly',
    why: 'A caretaker manages day-to-day; a visiting nurse handles the port and flags fever or low counts.',
    href: '/care-services/patient-care-services-bangalore',
    accent: 'lilac',
  },
  {
    setup: 'Parent with advanced dementia, occasional aggression.',
    answer: 'Trained attendant or specialist caretaker',
    why: 'Behavioural management is the main work. Choose a caretaker with verified dementia experience, not a clinical nurse.',
    href: '/care-services/dementia-alzheimers-care-bangalore',
    accent: 'rose',
  },
]

const ACCENT_CLASS: Record<Accent, string> = {
  rose: 'border-care-500/30 bg-care-50',
  sky: 'border-care-500/30 bg-[#F2F7FB]',
  sand: 'border-[#B97A1F]/30 bg-[#FAF6EE]',
  sage: 'border-[#1F8A4C]/30 bg-[#F1F6F0]',
  lilac: 'border-[#6B4FBE]/30 bg-[#F4F1FB]',
}

const ACCENT_TEXT: Record<Accent, string> = {
  rose: 'text-care-500',
  sky: 'text-care-500',
  sand: 'text-[#B97A1F]',
  sage: 'text-[#1F8A4C]',
  lilac: 'text-[#6B4FBE]',
}

const COSTS = [
  { label: 'Live-in caretaker', value: '₹18,000–₹26,000', unit: '/ mo' },
  { label: 'Live-in trained attendant', value: '₹24,000–₹34,000', unit: '/ mo' },
  { label: 'Live-in nurse', value: '₹35,000–₹55,000', unit: '/ mo' },
  { label: 'Visit nurse (per visit)', value: '₹600–₹1,200', unit: '/ visit' },
] as const

const FAQS = [
  {
    question: 'In one sentence — what’s the difference?',
    answer:
      'A nurse handles medical procedures, a caretaker handles daily living, and a trained attendant handles physical patient handling. Most families need a caretaker; a smaller number need a nurse; a few need both.',
  },
  {
    question: 'How do I know which one I actually need?',
    answer:
      'Use this rule: if the doctor’s discharge summary mentions wounds, IV, catheter, tube feed, or chest tube — you need a nurse, at least for visits. If the patient is mostly stable but needs daily help — you need a caretaker. If the patient is bedridden or post-stroke with significant physical handling needs — you need a trained attendant.',
  },
  {
    question: 'Can a caretaker give injections or change a wound dressing?',
    answer:
      'No. In India, both clinical procedures legally require a registered nurse. A caretaker can remind about medications and observe a wound for signs of infection, but cannot perform clinical procedures. We don’t place caretakers on cases that require them.',
  },
  {
    question: 'Is a nurse always more qualified than a caretaker?',
    answer:
      'For medical procedures, yes — a nurse is trained and licensed. For daily living, mobility, swallow safety, dementia handling, and emotional companionship, an experienced caretaker is often better. Different work, different skills.',
  },
  {
    question: 'Can I save money with a caretaker plus weekly nurse visits?',
    answer:
      'Often, yes — and it’s our most common arrangement. A live-in caretaker (~₹22,000/mo) plus three nurse visits a week (~₹2,400–₹3,600/week) can deliver excellent care for ~30–40% less than a live-in nurse.',
  },
  {
    question: 'What if my parent’s needs change midway?',
    answer:
      'They almost always do. We adjust placements as the situation evolves — adding nurse visits, swapping a caretaker for a trained attendant, or stepping down to a day shift as recovery progresses. There’s no penalty for changing.',
  },
  {
    question: 'Do you guarantee the right match the first time?',
    answer:
      'We do our best, but care is human work — sometimes the chemistry isn’t right, or the situation reveals new needs. If the placement isn’t working, we offer a free replacement, no questions asked, and most families settle within the first or second placement.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Home Nurse vs Caretaker — Which Do I Need?',
    author: { '@type': 'Organization', name: 'EzyHelpers' },
    publisher: { '@type': 'Organization', name: 'EzyHelpers' },
    mainEntityOfPage: `https://www.ezyhelpers.com${PATH}`,
    about: ['Home nursing', 'Home caretaker', 'Home care decision'],
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

/* ─── presentational helpers ─── */
function Mark({ value }: { value: 'yes' | 'no' | 'sometimes' }) {
  if (value === 'yes')
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1F8A4C]/12 text-[#1F8A4C]">
        <CheckIcon className="h-4 w-4" aria-hidden />
      </span>
    )
  if (value === 'no')
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
        <XMarkIcon className="h-4 w-4" aria-hidden />
      </span>
    )
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-[#B97A1F]/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#B97A1F]">
      Limited
    </span>
  )
}

export default function NurseVsCaretakerView() {
  return (
    <CareSubpageShell
      currentLabel="Home Nurse vs Caretaker"
      eyebrow="Bangalore · Decision guide"
      headlineLead="Nurse, caretaker, or both?"
      headlineAccent="A 3-minute answer."
      lede="Most families overspend or underspend in the first two weeks because nobody explains the difference. This is the difference — clearly, honestly, with examples."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      {/* Direct rule */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-[#F2F7FB] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">The rule, in one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            Hire a <em className="italic text-care-500">nurse</em> when there are clinical procedures —
            wounds, IV, catheters, tube feeds, chest tubes, vitals you can’t miss. Hire a{' '}
            <em className="italic text-care-500">caretaker</em> when daily living needs help — hygiene,
            meals, mobility, medication reminders, companionship. Hire a{' '}
            <em className="italic text-care-500">trained attendant</em> when there’s skilled physical
            handling — bedridden, post-stroke, repositioning. Many families need a combination, and that’s
            usually the most cost-effective answer.
          </p>
        </div>
      </section>

      {/* Three roles, side by side */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="The three roles"
            titleLead="Different jobs,"
            titleMuted="different people."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {[
              {
                role: 'Home nurse',
                tag: 'Medical',
                desc: 'Licensed nurse (GNM / B.Sc Nursing) trained for procedural medical work and clinical observation.',
                bullets: [
                  'Wound dressing, IV, catheter',
                  'Vital monitoring & escalation',
                  'Medication administration',
                  'Doctor handoff & clinical log',
                ],
                price: '₹35,000–₹55,000 / mo (live-in)',
                accent: 'sky',
                href: '/care-services/home-nursing-services-bangalore',
                icon: AcademicCapIcon,
              },
              {
                role: 'Caretaker',
                tag: 'Daily living',
                desc: 'Experienced caregiver focused on hygiene, feeding, mobility, medication reminders, and companionship.',
                bullets: [
                  'Hygiene · meals · mobility',
                  'Medication reminders',
                  'Day, night, or live-in shifts',
                  'Companionship & supervision',
                ],
                price: '₹18,000–₹26,000 / mo (live-in)',
                accent: 'rose',
                href: '/care-services/caretaker-services-bangalore',
                icon: HeartIcon,
                highlight: true,
              },
              {
                role: 'Trained attendant',
                tag: 'Physical handling',
                desc: 'Skilled in safe transfers, repositioning, pressure-sore prevention — the work bedridden and post-stroke patients need.',
                bullets: [
                  'Bedridden patient management',
                  'Pressure-sore prevention',
                  'Safe transfers & repositioning',
                  'Tube-feed & catheter comfort',
                ],
                price: '₹24,000–₹34,000 / mo (live-in)',
                accent: 'sand',
                href: '/care-services/trained-attendant-services-bangalore',
                icon: HandRaisedIcon,
              },
            ].map((c) => (
              <article
                key={c.role}
                className={`flex h-full flex-col rounded-[28px] border bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] ${
                  c.highlight ? 'border-care-500/40' : 'border-neutral-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${
                      c.accent === 'sky'
                        ? 'bg-[#E6F1FA] text-care-500 ring-care-500/15'
                        : c.accent === 'rose'
                          ? 'bg-care-50 text-care-500 ring-care-500/15'
                          : 'bg-[#FAF1E2] text-[#B97A1F] ring-[#B97A1F]/15'
                    }`}
                  >
                    <c.icon className="h-5 w-5" aria-hidden />
                  </span>
                  {c.highlight ? (
                    <span className="rounded-full bg-care-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-care-500">
                      Most common
                    </span>
                  ) : (
                    <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-neutral-700">
                      {c.tag}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-careSerif text-2xl font-bold tracking-tight text-neutral-950">
                  {c.role}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{c.desc}</p>
                <ul className="mt-5 space-y-2 text-sm text-neutral-700">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-care-500" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-neutral-200 pt-5">
                  <span className="block font-careSerif text-lg font-medium text-neutral-950">
                    {c.price}
                  </span>
                  <Link
                    href={c.href}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 hover:text-care-500"
                  >
                    Learn more
                    <ArrowRightIcon className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Capability comparison"
            titleLead="What each role"
            titleMuted="can and cannot do."
            lede="The honest version of the table — including where roles overlap, and where they don’t."
          />
          <div className="mt-12 overflow-hidden rounded-[24px] border border-neutral-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-white text-xs uppercase tracking-[0.18em] text-neutral-600">
                <tr className="border-b border-neutral-200">
                  <th className="px-5 py-4 font-semibold">Capability</th>
                  <th className="px-5 py-4 text-center font-semibold">Nurse</th>
                  <th className="px-5 py-4 text-center font-semibold">Caretaker</th>
                  <th className="px-5 py-4 text-center font-semibold">Trained Attendant</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-800">
                {ROWS.map((r) => (
                  <tr key={r.capability}>
                    <td className="px-5 py-4 font-semibold text-neutral-950">{r.capability}</td>
                    <td className="px-5 py-4 text-center">
                      <Mark value={r.nurse} />
                    </td>
                    <td className="px-5 py-4 text-center">
                      <Mark value={r.caretaker} />
                    </td>
                    <td className="px-5 py-4 text-center">
                      <Mark value={r.attendant} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Real situations"
            titleLead="Six scenarios,"
            titleMuted="six clear answers."
            lede="If your situation looks like one of these, you’re probably looking at the right answer next to it. If it doesn’t — call us. We’ll work it through with you."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {SCENARIOS.map((s) => (
              <article
                key={s.setup}
                className={`flex h-full flex-col rounded-[24px] border p-7 transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] ${ACCENT_CLASS[s.accent]} ${
                  s.highlight ? 'ring-2 ring-care-500/30' : ''
                }`}
              >
                <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${ACCENT_TEXT[s.accent]}`}>
                  Situation
                </p>
                <p className="mt-2 font-careSerif text-lg leading-snug text-neutral-900 sm:text-xl">
                  {s.setup}
                </p>
                <div className="mt-5 border-t border-white/50 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Recommended
                  </p>
                  <p className="mt-2 font-careSerif text-xl font-bold text-neutral-950 sm:text-2xl">
                    {s.answer}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">{s.why}</p>
                  <Link
                    href={s.href}
                    className={`mt-5 inline-flex items-center gap-1 text-sm font-semibold ${ACCENT_TEXT[s.accent]} hover:underline underline-offset-4`}
                  >
                    Explore this service
                    <ArrowRightIcon className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cost comparison */}
      <section className="bg-[#F2F7FB] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Cost at a glance"
            titleLead="What each role"
            titleMuted="actually costs."
            lede="A quick reference. Final pricing depends on the patient’s complexity and the caregiver’s experience level."
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {COSTS.map((c) => (
              <div
                key={c.label}
                className="rounded-[20px] border border-neutral-200 bg-white px-4 py-6 text-center"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">{c.label}</p>
                <p className="mt-3 font-careSerif text-xl font-medium text-neutral-950 sm:text-2xl">
                  {c.value}
                </p>
                <p className="mt-1 text-xs text-neutral-500">{c.unit}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-neutral-500">
            See the full breakdown on the{' '}
            <Link
              href="/care-services/home-nursing-cost-bangalore"
              className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
            >
              home nursing cost guide
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Decision questions, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Still not sure?"
        headlineAccent="A 5-minute call decides it."
        body="Tell us the situation. We’ll recommend the right role — nurse, caretaker, attendant, or a combination — and start the matching process the same day."
        enquirySource={PATH}
        primaryCtaLabel="Talk to a care advisor"
        related={[
          { label: 'Home Nursing', href: '/care-services/home-nursing-services-bangalore' },
          { label: 'Caretaker', href: '/care-services/caretaker-services-bangalore' },
          { label: 'Trained Attendant', href: '/care-services/trained-attendant-services-bangalore' },
          { label: 'Cost guide', href: '/care-services/home-nursing-cost-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
