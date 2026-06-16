'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import { trackCareCTAClick, trackCarePhoneClick } from '@/lib/analytics'
import {
  PhoneIcon,
  ArrowRightIcon,
  CheckIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  HeartIcon,
  BeakerIcon,
  HomeModernIcon,
  ArrowTrendingUpIcon,
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline'
import CareHeroQuickForm from '../CareHeroQuickForm'
import type { ComponentType, SVGProps } from 'react'
import { getPillar } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

/* ───────────────────────────────────────────────────────────────────────────
 * Pillar: Critical Care at Home (ICU) — Bangalore
 * Tone: serious, competent, calm. ICU-level care without alarmism.
 * Colours: Tailwind tokens only (primary-* / accent-* / neutral-* / white).
 * ─────────────────────────────────────────────────────────────────────────── */

const PHONE_DISPLAY = '080-31411776'
const PHONE_HREF = 'tel:+918031411776'
const PATH = '/care-services/critical-care-at-home-bangalore'
const ENQUIRY_HREF = `/care-services/enquiry?source=${encodeURIComponent(PATH)}`

const PILLAR = getPillar('critical-care-at-home-bangalore')

/* Map each nested service icon name to a Heroicon component. */
const NESTED_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  BeakerIcon,
  HomeModernIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  HeartIcon,
}

const TRUST_RIBBON = [
  { icon: AcademicCapIcon, title: 'Critical-care nurses', sub: 'ICU-trained, BLS/ACLS aware' },
  { icon: ClipboardDocumentCheckIcon, title: 'Hospital-grade equipment', sub: 'Ventilators, monitors, suction' },
  { icon: ShieldCheckIcon, title: 'Doctor-supervised', sub: 'Intensivist-guided protocols' },
  { icon: ClockIcon, title: '24/7 monitoring', sub: 'Round-the-clock cover' },
] as const

const COMPARISON = [
  {
    label: 'Cost',
    home: 'Typically lower than a prolonged hospital ICU stay, you pay for care and equipment, not bed, admission and ancillary hospital charges.',
    hospital: 'High daily ICU bed charges, plus consumables, admission and incidental costs that accumulate quickly over long stays.',
    advantage: 'home',
  },
  {
    label: 'Comfort & familiarity',
    home: 'The patient recovers in their own bed, in familiar surroundings, with a calmer routine and better sleep.',
    hospital: 'Unfamiliar environment, constant noise and lighting, disrupted sleep and limited personal space.',
    advantage: 'home',
  },
  {
    label: 'Infection risk',
    home: 'Reduced exposure to hospital-acquired infections, with a controlled single-patient environment.',
    hospital: 'Shared clinical spaces carry a higher risk of hospital-acquired (nosocomial) infections.',
    advantage: 'home',
  },
  {
    label: 'Family presence',
    home: 'Family can stay close, participate in care decisions and provide emotional support without visiting-hour limits.',
    hospital: 'Restricted ICU visiting hours limit how much time families can spend with the patient.',
    advantage: 'home',
  },
  {
    label: 'Emergency escalation',
    home: 'Stable, planned cases are ideal; our team coordinates a clear escalation pathway to a partner hospital if needed.',
    hospital: 'On-site access to surgery, imaging and specialists for the most unstable, acute emergencies.',
    advantage: 'hospital',
  },
] as const

const INCLUDED_EQUIPMENT = [
  'ICU-grade electric hospital bed with side rails',
  'Ventilator (invasive / non-invasive) where prescribed',
  'Multi-parameter monitor (ECG, SpO₂, BP, heart rate)',
  'Oxygen concentrator or cylinder supply',
  'Suction machine and airway management kit',
  'Infusion pumps and feeding-tube support',
] as const

const INCLUDED_STAFFING = [
  'Critical-care trained nurses on rotating shifts',
  'Doctor / intensivist supervision of the care plan',
  'Daily clinical logging and vitals charting',
  'Coordination with your treating consultant',
  'Family briefings and condition updates',
  'Defined emergency escalation pathway',
] as const

const SETUP_STEPS = [
  {
    n: '01',
    title: 'Clinical assessment',
    body: 'A critical-care nurse and doctor review the case, the home, and discharge notes to scope the exact equipment and staffing required.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    n: '02',
    title: 'Install & equip',
    body: 'Hospital-grade equipment is delivered, installed and tested at home, bed, ventilator, monitor, suction and oxygen, to clinical standards.',
    icon: HomeModernIcon,
  },
  {
    n: '03',
    title: 'Staff & handover',
    body: 'Critical-care nurses are placed on shifts with a structured handover from the hospital team and the supervising doctor.',
    icon: UserGroupIcon,
  },
  {
    n: '04',
    title: 'Monitor & review',
    body: 'Vitals are monitored 24/7 with daily logs, doctor reviews and family updates, with a clear plan for any escalation.',
    icon: CheckCircleIcon,
  },
] as const

/* Illustrative testimonials, flagged as representative examples, not verified reviews. */
const TESTIMONIALS = [
  {
    quote:
      'After three weeks in hospital ICU, bringing my father home with a ventilator felt frightening. The nurses set everything up calmly, explained every machine, and someone was always watching his vitals. He slept properly for the first time in a month.',
    name: 'Ramesh K.',
    place: 'Whitefield, Bangalore',
  },
  {
    quote:
      'My mother needed continuous cardiac monitoring after her event. Having an ICU setup at home meant we could be with her around the clock, and the doctor reviewed her charts daily. It was hospital-level care without the hospital walls.',
    name: 'Anita D.',
    place: 'Jayanagar, Bangalore',
  },
  {
    quote:
      'The tracheostomy care was the part we feared most. The team trained us, handled the suctioning and stoma care, and kept a steady, professional presence. We never felt alone with it.',
    name: 'Suresh N.',
    place: 'HSR Layout, Bangalore',
  },
] as const

const FAQS = [
  {
    question: 'Is ICU care at home actually safe?',
    answer:
      'For stable, planned cases it can be very safe. We use hospital-grade equipment, critical-care trained nurses and doctor-supervised protocols, with 24/7 monitoring and a defined escalation pathway to a partner hospital. The first step is always a clinical assessment to confirm the case is suitable for home care. This is informational guidance, not medical advice, the final decision is made with your treating doctor.',
  },
  {
    question: 'Is there doctor oversight, or only nurses?',
    answer:
      'Both. Critical-care nurses provide round-the-clock bedside care, and a supervising doctor / intensivist guides the care plan, reviews the daily clinical logs and adjusts treatment in coordination with your treating consultant. The nurses escalate to the doctor immediately when readings move outside the agreed thresholds.',
  },
  {
    question: 'What does ICU care at home cost in Bangalore?',
    answer:
      `Pricing depends on the equipment, the level of staffing and the duration of care. Our critical-care plans start ${formatPriceWithNote('critical-care')}, with a precise quote scoped after the clinical assessment. In many cases it works out lower than a prolonged hospital ICU stay because you are not paying daily ICU bed and admission charges.`,
  },
  {
    question: 'What happens in an emergency?',
    answer:
      'Every setup has a defined emergency pathway agreed up front: thresholds for escalation, the nurse-to-doctor protocol, and a coordinated route to a partner hospital with an ambulance if the patient needs to be moved. Home ICU is best suited to stable cases, for highly unstable, acute emergencies, a hospital ICU remains the right place.',
  },
  {
    question: 'How quickly can you set up an ICU at home?',
    answer:
      'For planned hospital discharges we aim to have the assessment, equipment and staffing ready before the patient leaves the hospital. Where the situation is urgent, we attempt same-day setup across Bangalore once the clinical assessment confirms the case is suitable. Call us and we will prioritise.',
  },
  {
    question: 'Who is critical care at home suitable for?',
    answer:
      'It suits patients who need ongoing intensive monitoring or support but are clinically stable, for example ventilator-dependent patients, post-ICU step-down recovery, tracheostomy care, and continuous cardiac monitoring after a cardiac event. Suitability is always confirmed by the assessing doctor in coordination with your treating team.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers, Critical Care (ICU) at Home, Bangalore',
    medicalSpecialty: ['Intensive Care', 'Critical Care'],
    areaServed: { '@type': 'City', name: 'Bangalore' },
    url: `https://www.ezyhelpers.com${PATH}`,
    telephone: '+91-80-31411776',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ezyhelpers.com/' },
      { '@type': 'ListItem', position: 2, name: 'Care Services', item: 'https://www.ezyhelpers.com/care-services' },
      { '@type': 'ListItem', position: 3, name: 'Critical Care at Home', item: `https://www.ezyhelpers.com${PATH}` },
    ],
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

export default function CriticalCareAtHomeView() {
  return (
    <div className="min-h-screen bg-white font-careUi text-neutral-900 antialiased">
      <Navbar />

      {/* ─────────────────── Hero ─────────────────── */}
      <header className="relative overflow-hidden bg-neutral-950">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-care-500/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-44 -left-40 h-[32rem] w-[32rem] rounded-full bg-accent-600/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 sm:pb-24 sm:pt-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-left">
            <ol className="flex flex-wrap items-center gap-x-1 text-sm text-white/55">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li className="select-none px-2 text-white/30" aria-hidden="true">
                ›
              </li>
              <li>
                <Link href="/care-services" className="transition-colors hover:text-white">
                  Care Services
                </Link>
              </li>
              <li className="select-none px-2 text-white/30" aria-hidden="true">
                ›
              </li>
              <li>
                <span className="font-medium text-white">Critical Care at Home</span>
              </li>
            </ol>
          </nav>

          <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-14">
            <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-care-400" aria-hidden />
              Bangalore · ICU-level care at home
            </p>

            <h1 className="mt-7 font-careSerif text-[clamp(2.4rem,6vw,4.75rem)] font-medium leading-[1.04] tracking-[-0.03em] text-white">
              {PILLAR.title}
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-white/75 sm:text-xl lg:mx-0">
              {PILLAR.tagline} {PILLAR.blurb}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link
                href={ENQUIRY_HREF}
                onClick={() => trackCareCTAClick('Speak to a critical-care advisor', `${PATH}#hero`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-neutral-950 shadow-[0_2px_10px_rgba(0,0,0,0.25)] transition hover:bg-neutral-100 active:scale-[0.98]"
              >
                Speak to a critical-care advisor
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={PHONE_HREF}
                onClick={() => trackCarePhoneClick(PHONE_DISPLAY, `${PATH}#hero`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-white/25 bg-transparent px-7 py-4 text-[15px] font-semibold text-white transition hover:bg-white/10"
              >
                <PhoneIcon className="h-4 w-4" aria-hidden />
                {PHONE_DISPLAY}
              </a>
            </div>

            <p className="mt-5 text-sm font-medium text-care-300">
              Same-day setup possible · {formatPriceWithNote(PILLAR.priceKey)}
            </p>
            </div>

            {/* In-hero quick lead form */}
            <div className="mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
              <CareHeroQuickForm enquirySource={PATH} />
            </div>
          </div>
        </div>
      </header>

      {/* ─────────────────── Trust ribbon ─────────────────── */}
      <section aria-label="Why families trust our home ICU" className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-neutral-200 lg:grid-cols-4">
          {TRUST_RIBBON.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-start gap-3 bg-white px-5 py-6 sm:px-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-care-50 text-care-600 ring-1 ring-care-500/15">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <strong className="block text-sm font-bold text-neutral-950">{title}</strong>
                <span className="text-xs text-neutral-500">{sub}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <main>
        {/* ─────────────────── Intro ─────────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-care-50 p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-600">In one paragraph</p>
            <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
              Critical care at home in Bangalore brings the equipment, staffing and protocols of a hospital ICU
              into the patient&rsquo;s own room. EzyHelpers installs{' '}
              <em className="italic text-care-600">hospital-grade equipment</em>, places{' '}
              <em className="italic text-care-600">critical-care trained nurses</em> on round-the-clock shifts,
              and runs everything under <em className="italic text-care-600">doctor supervision</em>, with a
              clear escalation plan. It is designed for clinically stable patients who need intensive support, so
              recovery happens in a calmer, more familiar place, with family close by.
            </p>
          </div>
        </section>

        {/* ─────────────────── Nested services grid ─────────────────── */}
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-600">Critical-care services</p>
              <h2 className="mt-3 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                Five intensive services,{' '}
                <span className="text-neutral-400">delivered at home.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
                Each is staffed by critical-care nurses, supervised by a doctor, and scoped to the patient after a
                clinical assessment.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PILLAR.nested.map((n) => {
                const Icon = NESTED_ICONS[n.icon] ?? ShieldCheckIcon
                return (
                  <Link
                    key={n.slug}
                    href={`/care-services/${n.slug}`}
                    className="group flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] outline-none transition hover:-translate-y-1 hover:border-neutral-900 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] focus-visible:ring-2 focus-visible:ring-care-500 focus-visible:ring-offset-2"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-care-50 text-care-600 ring-1 ring-care-500/15">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-careSerif text-lg font-bold tracking-tight text-neutral-950 sm:text-xl">
                      {n.label}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{n.tagline}</p>
                    <p className="mt-4 text-sm font-semibold text-neutral-900">{formatPriceWithNote(n.priceKey)}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-care-600 transition group-hover:gap-2">
                      Learn more
                      <ArrowLongRightIcon className="h-4 w-4" aria-hidden />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─────────────────── ICU at home vs hospital ICU ─────────────────── */}
        <section className="bg-neutral-50 px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-600">A measured comparison</p>
              <h2 className="mt-3 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                ICU at home vs hospital ICU.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
                Home ICU is not a replacement for every situation. For stable patients it offers real advantages;
                for the most acute emergencies, a hospital remains the right place. Here is an honest side-by-side.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-[24px] border border-neutral-200 bg-white">
              {/* header row */}
              <div className="hidden grid-cols-[1fr_1.4fr_1.4fr] gap-px bg-neutral-200 lg:grid">
                <div className="bg-neutral-900 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white">Factor</div>
                <div className="bg-care-600 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white">
                  ICU at home
                </div>
                <div className="bg-neutral-700 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white">
                  Hospital ICU
                </div>
              </div>
              <div className="divide-y divide-neutral-200">
                {COMPARISON.map((row) => (
                  <div key={row.label} className="grid grid-cols-1 gap-px bg-neutral-100 lg:grid-cols-[1fr_1.4fr_1.4fr]">
                    <div className="bg-white px-6 py-5 font-careSerif text-base font-bold text-neutral-950">
                      {row.label}
                    </div>
                    <div
                      className={`px-6 py-5 text-sm leading-relaxed ${
                        row.advantage === 'home' ? 'bg-care-50 text-neutral-800' : 'bg-white text-neutral-700'
                      }`}
                    >
                      <span className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-care-600 lg:hidden">
                        ICU at home
                      </span>
                      <span className="flex items-start gap-2">
                        {row.advantage === 'home' ? (
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-care-600" aria-hidden />
                        ) : null}
                        <span>{row.home}</span>
                      </span>
                    </div>
                    <div
                      className={`px-6 py-5 text-sm leading-relaxed ${
                        row.advantage === 'hospital' ? 'bg-neutral-100 text-neutral-800' : 'bg-white text-neutral-700'
                      }`}
                    >
                      <span className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-neutral-500 lg:hidden">
                        Hospital ICU
                      </span>
                      <span className="flex items-start gap-2">
                        {row.advantage === 'hospital' ? (
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                        ) : null}
                        <span>{row.hospital}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────── What's included ─────────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-600">What&rsquo;s included</p>
              <h2 className="mt-3 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                Equipment and staffing,{' '}
                <span className="text-neutral-400">handled end to end.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
                A complete home ICU is a system, the right machines, the right people, and the protocols that tie
                them together. We provide all three.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-8 sm:p-10">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-care-600 ring-1 ring-care-500/15">
                  <ClipboardDocumentCheckIcon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-careSerif text-xl font-bold tracking-tight text-neutral-950">Equipment</h3>
                <ul className="mt-6 space-y-3">
                  {INCLUDED_EQUIPMENT.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm leading-snug text-neutral-700">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-care-600" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-8 sm:p-10">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-care-600 ring-1 ring-care-500/15">
                  <UserGroupIcon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-careSerif text-xl font-bold tracking-tight text-neutral-950">Staffing & oversight</h3>
                <ul className="mt-6 space-y-3">
                  {INCLUDED_STAFFING.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm leading-snug text-neutral-700">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-care-600" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────── How setup works ─────────────────── */}
        <section className="bg-neutral-50 px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-600">How setup works</p>
              <h2 className="mt-3 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                Four careful steps to a working home ICU.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
                From the first call to round-the-clock monitoring, the process is structured, clinical and calm.
              </p>
            </div>

            <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SETUP_STEPS.map(({ n, title, body, icon: Icon }) => (
                <li
                  key={n}
                  className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-careSerif text-3xl font-medium text-care-600">{n}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-700">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <h3 className="mt-5 font-careSerif text-lg font-bold tracking-tight text-neutral-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─────────────────── Testimonials ─────────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-600">From Bangalore families</p>
              <h2 className="mt-3 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                Care that steadies the whole family.
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="flex h-full flex-col justify-between rounded-[24px] border border-neutral-200 bg-neutral-50 p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                >
                  <div>
                    <span aria-hidden className="font-careSerif text-5xl leading-none text-care-500/40">
                      &ldquo;
                    </span>
                    <blockquote className="mt-2 font-careSerif text-lg leading-snug text-neutral-900">
                      {t.quote}
                    </blockquote>
                  </div>
                  <figcaption className="mt-6 border-t border-neutral-200 pt-5 text-sm">
                    <span className="block font-semibold text-neutral-950">{t.name}</span>
                    <span className="block text-neutral-500">{t.place}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-8 text-xs text-neutral-400">
              Illustrative examples representative of the care we provide. Details have been changed to protect
              patient privacy.
            </p>
          </div>
        </section>

        {/* ─────────────────── FAQ ─────────────────── */}
        <section className="bg-neutral-50 px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-600">Frequently asked</p>
            <h2 className="mt-3 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
              Critical care at home, answered.
            </h2>
            <div className="mt-10">
              <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
            </div>
            <p className="mt-8 text-xs leading-relaxed text-neutral-400">
              This page is for information only and is not medical advice. Suitability for home critical care is
              always confirmed with your treating doctor.
            </p>
          </div>
        </section>

        {/* ─────────────────── Final CTA ─────────────────── */}
        <section className="relative overflow-hidden bg-neutral-950 px-4 py-24 sm:px-6 sm:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-care-500/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-accent-600/15 blur-3xl"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              <ClockIcon className="h-3.5 w-3.5 text-care-300" aria-hidden />
              Same-day setup possible
            </p>
            <h2 className="mt-7 font-careSerif text-[clamp(2rem,5.5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.025em] text-white">
              When discharge can&rsquo;t wait,{' '}
              <em className="font-careSerif font-normal italic text-care-300">we move fast.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Speak to a critical-care advisor now. We assess the case, scope the equipment and staffing, and aim
              to have your home ICU ready before the patient leaves the hospital.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={ENQUIRY_HREF}
                onClick={() => trackCareCTAClick('Speak to a critical-care advisor', `${PATH}#footer-cta`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-neutral-950 shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition hover:bg-neutral-100 active:scale-[0.98]"
              >
                Speak to a critical-care advisor
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={PHONE_HREF}
                onClick={() => trackCarePhoneClick(PHONE_DISPLAY, `${PATH}#footer-cta`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-white/25 bg-transparent px-7 py-4 text-[15px] font-semibold text-white transition hover:bg-white/10"
              >
                <PhoneIcon className="h-4 w-4" aria-hidden />
                {PHONE_DISPLAY}
              </a>
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/50">
              Doctor-supervised · Critical-care nurses · 24/7 monitoring
            </p>
          </div>
        </section>
      </main>

      <Footer />

      {JSONLD.map((blob, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blob) }}
        />
      ))}
    </div>
  )
}
