'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import { trackCareCTAClick, trackCarePhoneClick } from '@/lib/analytics'
import {
  PhoneIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  HeartIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  HomeModernIcon,
  ArrowDownIcon,
  MapPinIcon,
  ClipboardDocumentCheckIcon,
  TruckIcon,
  ArrowTrendingUpIcon,
  PlusCircleIcon,
  BeakerIcon,
  AdjustmentsHorizontalIcon,
  StarIcon,
  ArrowPathRoundedSquareIcon,
} from '@heroicons/react/24/outline'
import type { ComponentType, SVGProps } from 'react'
import {
  CARE_PILLARS,
  CARE_PILLAR_ORDER,
  NEW_CARE_ENQUIRY_HREF,
  type CarePillar,
} from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

/* ───────────────────────────────────────────────────────────────────────────
 * /care-services — NEW Bangalore care landing (6 pillars)
 *
 * Centrepiece: the six care pillars (read from CARE_PILLARS via
 * CARE_PILLAR_ORDER), each surfacing its nested sub-services + live pricing.
 *
 * COLOUR RULE: only Tailwind tokens — primary (Ocean Blue), accent (Sunrise
 * Orange), neutral and white. NO hardcoded hex. Hero has a SOLID background
 * (no gradient). Other sections may use subtle gradients.
 * Fonts: font-careSerif (display) + font-careUi (body).
 * ─────────────────────────────────────────────────────────────────────────── */

const CARE_PHONE_DISPLAY = '080-31411776'
const CARE_PHONE_HREF = 'tel:+918031411776'

type Heroicon = ComponentType<SVGProps<SVGSVGElement>>

/* Map the `icon` string stored in the data layer → the imported heroicon. */
const ICON_MAP: Record<string, Heroicon> = {
  HeartIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  HomeModernIcon,
  MapPinIcon,
  ClipboardDocumentCheckIcon,
  TruckIcon,
  ArrowTrendingUpIcon,
  PlusCircleIcon,
  BeakerIcon,
  AdjustmentsHorizontalIcon,
}

function iconFor(name: string): Heroicon {
  return ICON_MAP[name] ?? HeartIcon
}

/* Each pillar maps to a primary or warm-accent tone (kept on-token). */
type PillarTone = CarePillar['tone']

const PILLAR_TONE: Record<
  PillarTone,
  {
    iconWrap: string
    eyebrow: string
    chip: string
    cta: string
    halo: string
  }
> = {
  primary: {
    iconWrap: 'bg-primary-50 text-primary-600 ring-1 ring-primary-500/15',
    eyebrow: 'text-primary-600',
    chip: 'border-primary-100 bg-primary-50/60 text-primary-700 hover:border-primary-500 hover:bg-primary-50',
    cta: 'bg-primary-600 text-white hover:bg-primary-700',
    halo: 'bg-primary-500/10',
  },
  accentWarm: {
    iconWrap: 'bg-accent-50 text-accent-600 ring-1 ring-accent-600/15',
    eyebrow: 'text-accent-600',
    chip: 'border-accent-100 bg-accent-50/60 text-accent-700 hover:border-accent-600 hover:bg-accent-50',
    cta: 'bg-accent-600 text-white hover:bg-accent-700',
    halo: 'bg-accent-500/10',
  },
}

/* ───────── Static content (reused from previous build) ───────── */

const TRUST_METRICS = [
  { num: '10,000+', label: 'Families served across India' },
  { num: '16+', label: 'Bangalore localities covered' },
  { num: '24–48 hr', label: 'Typical placement window' },
  { num: '100%', label: 'Verified, screened, briefed' },
] as const

const HERO_PROOF = [
  { icon: ShieldCheckIcon, title: 'Aadhaar-verified', sub: 'background-checked' },
  { icon: AcademicCapIcon, title: 'Credentialled', sub: 'GNM / B.Sc / certified' },
  { icon: ClockIcon, title: 'Same-day attempts', sub: 'when discharge can’t wait' },
  { icon: ArrowPathRoundedSquareIcon, title: 'Free replacement', sub: 'if the match isn’t right' },
] as const

const DIFFERENTIATORS = [
  {
    icon: SparklesIcon,
    title: 'Matched, not assigned',
    body: 'Every placement starts with the patient’s condition, routine and language — not whoever lives nearest. You get a curated shortlist, not a random allocation.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Verified & credentialled',
    body: 'Aadhaar authentication, government-ID checks and in-person interviews. Nurses’ GNM/B.Sc qualifications and physiotherapists’ certifications are verified before placement.',
  },
  {
    icon: ClockIcon,
    title: 'Same-day placement',
    body: 'Hospital discharge tomorrow morning? Where a suitable professional is free, we attempt placement the same day, across 16+ Bangalore localities.',
  },
  {
    icon: ArrowPathRoundedSquareIcon,
    title: 'Free replacement guarantee',
    body: 'If the caregiver isn’t the right fit — comfort, communication or care approach — we begin finding a better match at no cost. No justification needed.',
  },
] as const

const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Free consultation',
    body: 'A 15-minute call to understand the patient, the condition and what matters most to your family.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    n: '02',
    title: 'Curated shortlist',
    body: 'Two or three caregivers matched to your specific situation — not whoever is free nearest.',
    icon: UserGroupIcon,
  },
  {
    n: '03',
    title: 'Interview & match',
    body: 'You meet shortlisted caregivers before confirming. Keep searching if none feel right.',
    icon: SparklesIcon,
  },
  {
    n: '04',
    title: 'Onboard & support',
    body: 'We brief the caregiver, follow up in week one, and stay reachable for adjustments or replacements.',
    icon: HomeModernIcon,
  },
] as const

const LOCALITIES = [
  'Whitefield',
  'HSR Layout',
  'Koramangala',
  'Indiranagar',
  'Jayanagar',
  'JP Nagar',
  'Banashankari',
  'Electronic City',
  'Hebbal',
  'Yelahanka',
  'Marathahalli',
  'Sarjapur Road',
  'Bannerghatta Road',
  'Rajajinagar',
  'Malleswaram',
  'RT Nagar',
] as const

const TESTIMONIALS = [
  {
    quote:
      'My mother has Type 2 diabetes with early-stage kidney disease. The home care professional EzyHelpers placed had worked with diabetic-kidney patients before. In eight months: zero hospital readmissions.',
    name: 'Kiran Reddy',
    place: 'Electronic City, Bangalore',
  },
  {
    quote:
      'We are an NRI family in Canada. The caregiver sends a detailed update every evening, handles all doctor appointments, and has built a genuine relationship with both our parents. Peace of mind from 12,000 km away.',
    name: 'Arun Sharma',
    place: 'Parents in Koramangala',
  },
  {
    quote:
      'My husband had bypass surgery. EzyHelpers matched us with a caregiver who had worked specifically in post-cardiac recovery. She was a calm, steady presence through a frightening period.',
    name: 'Sunita Narayanan',
    place: 'Indiranagar, Bangalore',
  },
] as const

const FAQ_ITEMS = [
  {
    question: 'What home care services does EzyHelpers offer in Bangalore?',
    answer:
      'EzyHelpers offers six core care services at home in Bangalore: Elder Care at Home, Home Nursing Care, Medical Equipment Rental & Purchase, Physiotherapy at Home, Critical Care (ICU) at Home, and Palliative Care at Home. Each covers specialised sub-services — for example, dementia care, wound dressing, oxygen concentrator rental, neuro physiotherapy, ventilator care and pain management.',
  },
  {
    question: 'How quickly can you arrange a nurse or caregiver in Bangalore?',
    answer:
      'For most Bangalore localities we attempt same-day placement when a suitable professional is available. For urgent situations such as a hospital discharge, we prioritise your request. When precise matching takes longer, we keep you informed and typically place within 24–48 hours across the 16+ areas we serve.',
  },
  {
    question: 'Are your nurses and caregivers verified and qualified?',
    answer:
      'Yes. Every professional is verified through Aadhaar authentication, government-ID validation, an in-person interview and background checks. Nurses’ GNM/B.Sc nursing qualifications are verified, physiotherapists’ certifications are confirmed, and critical-care staff are checked for hands-on ICU experience before placement.',
  },
  {
    question: 'Can I rent medical equipment like a hospital bed or oxygen concentrator at home?',
    answer:
      'Yes. We rent and sell hospital-grade equipment in Bangalore — including hospital beds, oxygen concentrators, wheelchairs, patient monitors, BiPAP/CPAP machines and mobility aids. Everything is delivered, installed and serviced at home, and can be paired with nursing or critical-care staff for a complete ICU-at-home setup.',
  },
  {
    question: 'Do you provide ICU and ventilator care at home in Bangalore?',
    answer:
      'Yes. Our Critical Care at Home service sets up a complete ICU at home — hospital beds, multi-parameter monitors, ventilators and suction — staffed by trained critical-care nurses. We handle invasive and non-invasive ventilation, tracheostomy care, post-ICU step-down recovery and cardiac monitoring under hospital-grade protocols.',
  },
  {
    question: 'What if the caregiver isn’t the right fit for my family?',
    answer:
      'We offer a free replacement guarantee. If the caregiver isn’t right for any reason — comfort, communication or care approach — simply let us know and we begin finding a better match at no additional cost. There’s no requirement to justify the request.',
  },
] as const

/* ─────────────────────────── view ─────────────────────────── */
export default function CareServicesHomeView() {
  const enquiryHref = `${NEW_CARE_ENQUIRY_HREF}?source=${encodeURIComponent('/care-services')}`
  const pillars = CARE_PILLAR_ORDER.map((slug) => CARE_PILLARS[slug])

  return (
    <div className="min-h-screen bg-white font-careUi text-neutral-900 antialiased">
      <Navbar />

      {/* ─────────────────── Hero (SOLID background — no gradient) ─────────────────── */}
      <header className="relative overflow-hidden bg-primary-50">
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 sm:pb-28 sm:pt-8 lg:pb-32">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-left">
            <ol className="flex flex-wrap items-center gap-x-1 text-sm text-neutral-500">
              <li>
                <Link href="/" className="transition-colors hover:text-neutral-900">
                  Home
                </Link>
              </li>
              <li className="select-none px-2 text-neutral-300" aria-hidden="true">
                ›
              </li>
              <li>
                <span className="font-medium text-neutral-900">Care Services</span>
              </li>
            </ol>
          </nav>

          <div className="mt-10 text-center sm:mt-14 lg:mt-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-neutral-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <MapPinIcon className="h-3.5 w-3.5 text-primary-500" aria-hidden />
              Now serving Bangalore
            </p>

            <h1 className="mx-auto mt-7 max-w-5xl font-careSerif text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[1.04] tracking-[-0.035em] text-neutral-950">
              Complete care at home,
              <br />
              <em className="font-careSerif font-normal italic text-primary-600">
                for the people you love.
              </em>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-600 sm:text-xl">
              Bangalore’s trusted home-care platform — verified caregivers, credentialled nurses,
              physiotherapists, ICU setups and medical equipment, all matched to your family.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={enquiryHref}
                onClick={() => trackCareCTAClick('Find the right care', '/care-services#hero')}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-primary-600 px-7 py-4 text-[15px] font-semibold text-white shadow-[0_2px_10px_rgba(0,0,0,0.18)] transition hover:bg-primary-700 hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] active:scale-[0.98]"
              >
                Find the right care
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={CARE_PHONE_HREF}
                onClick={() => trackCarePhoneClick(CARE_PHONE_DISPLAY, '/care-services#hero')}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-4 text-[15px] font-semibold text-neutral-900 shadow-sm transition hover:border-neutral-900 hover:bg-neutral-50"
              >
                <PhoneIcon className="h-4 w-4 text-primary-600" aria-hidden />
                {CARE_PHONE_DISPLAY}
              </a>
            </div>

            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 transition hover:text-neutral-900"
            >
              Explore the six services
              <ArrowDownIcon className="h-3.5 w-3.5" aria-hidden />
            </a>

            {/* Trust ribbon */}
            <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-4">
              {HERO_PROOF.map(({ icon: Icon, title, sub }) => (
                <li
                  key={title}
                  className="flex flex-col items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-5 text-left shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-accent-600/15">
                    <Icon className="h-[18px] w-[18px]" aria-hidden />
                  </span>
                  <div>
                    <strong className="block text-sm font-bold text-neutral-950">{title}</strong>
                    <span className="text-xs text-neutral-500">{sub}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <main>
        {/* ─────────────── Trust metrics strip ─────────────── */}
        <section aria-labelledby="trust-metrics" className="border-y border-neutral-200 bg-white">
          <h2 id="trust-metrics" className="sr-only">
            EzyHelpers care services by the numbers
          </h2>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-neutral-200 sm:grid-cols-4">
            {TRUST_METRICS.map((m) => (
              <div key={m.label} className="bg-white px-6 py-8 text-center sm:py-10">
                <div className="font-careSerif text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                  {m.num}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-neutral-500">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────── 6 pillars (CENTREPIECE) ─────────────── */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
                Six services. One standard.
              </p>
              <h2
                id="services-heading"
                className="mt-4 font-careSerif text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950"
              >
                Which care does your family need?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
                From ageing parents to post-surgical recovery and ICU-at-home, choose the right kind
                of care in Bangalore — then we match the right professional to it.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((p) => {
                const Icon = iconFor(p.icon)
                const tone = PILLAR_TONE[p.tone]
                const pillarHref = `/care-services/${p.slug}`
                const nestedTop = p.nested.slice(0, 4)
                return (
                  <article
                    key={p.slug}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-neutral-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_14px_34px_rgba(0,0,0,0.09)] focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 sm:p-7"
                  >
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-2xl ${tone.halo}`}
                    />

                    <div className="relative flex items-start justify-between gap-3">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tone.iconWrap}`}
                      >
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] font-semibold text-neutral-700">
                        {formatPriceWithNote(p.priceKey)}
                      </span>
                    </div>

                    <h3 className="relative mt-5 font-careSerif text-xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-2xl">
                      <Link
                        href={pillarHref}
                        className="outline-none after:absolute after:inset-0 after:content-['']"
                      >
                        {p.label}
                      </Link>
                    </h3>
                    <p className={`relative mt-2 text-sm font-medium ${tone.eyebrow}`}>{p.tagline}</p>
                    <p className="relative mt-3 text-sm leading-relaxed text-neutral-600">{p.blurb}</p>

                    {/* Nested sub-service chips */}
                    <div className="relative z-10 mt-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                        Includes
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {nestedTop.map((n) => (
                          <li key={n.slug}>
                            <Link
                              href={`/care-services/${n.slug}`}
                              className={`inline-flex min-h-[36px] items-center rounded-full border px-3 py-2 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1 ${tone.chip}`}
                            >
                              {n.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative z-10 mt-6 flex items-center justify-between border-t border-neutral-100 pt-5">
                      <Link
                        href={pillarHref}
                        onClick={() =>
                          trackCareCTAClick(`Explore ${p.label}`, '/care-services#services')
                        }
                        className={`inline-flex min-h-[44px] items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition active:scale-[0.98] ${tone.cta}`}
                      >
                        Explore {p.label}
                        <ArrowRightIcon className="h-4 w-4" aria-hidden />
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─────────────── Why EzyHelpers / differentiators ─────────────── */}
        <section
          aria-labelledby="why-heading"
          className="bg-gradient-to-b from-white to-primary-50/60 px-4 py-20 sm:px-6 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
                Why families choose EzyHelpers
              </p>
              <h2
                id="why-heading"
                className="mt-4 font-careSerif text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950"
              >
                Most services place whoever is free.
                <br />
                <span className="text-neutral-400">We place whoever is right.</span>
              </h2>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {DIFFERENTIATORS.map(({ icon: Icon, title, body }) => (
                <article
                  key={title}
                  className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 ring-1 ring-primary-500/15">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-careSerif text-lg font-bold tracking-tight text-neutral-950">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href={enquiryHref}
                onClick={() => trackCareCTAClick('Talk to a care advisor', '/care-services#why')}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-700 active:scale-[0.98]"
              >
                Talk to a care advisor
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={CARE_PHONE_HREF}
                onClick={() => trackCarePhoneClick(CARE_PHONE_DISPLAY, '/care-services#why')}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-900 hover:bg-neutral-50"
              >
                <PhoneIcon className="h-4 w-4 text-primary-600" aria-hidden />
                {CARE_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        {/* ─────────────── How it works ─────────────── */}
        <section aria-labelledby="how-heading" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
                How it works
              </p>
              <h2
                id="how-heading"
                className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950"
              >
                Four steps. One careful match.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                The same disciplined process whether you need a nurse for two weeks, a
                physiotherapist for a recovery programme or a live-in caregiver for two years.
              </p>
            </div>

            <ol className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map(({ n, title, body, icon: Icon }) => (
                <li
                  key={n}
                  className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-careSerif text-3xl font-medium text-primary-600">{n}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-700">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <h3 className="mt-5 font-careSerif text-xl font-bold tracking-tight text-neutral-950">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─────────────── Testimonials ─────────────── */}
        <section
          aria-labelledby="testimonials-heading"
          className="border-y border-neutral-200 bg-gradient-to-b from-accent-50/50 to-white px-4 py-20 sm:px-6 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                Real families
              </p>
              <h2
                id="testimonials-heading"
                className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950"
              >
                Stories from Bangalore homes.
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="flex h-full flex-col justify-between rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
                >
                  <div>
                    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                          key={i}
                          className="h-4 w-4 fill-accent-500 text-accent-500"
                          aria-hidden
                        />
                      ))}
                    </div>
                    <blockquote className="mt-4 font-careSerif text-lg leading-snug text-neutral-900 sm:text-xl">
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
            <p className="mt-8 text-center text-xs text-neutral-400">
              Illustrative stories representative of typical family experiences.
            </p>
          </div>
        </section>

        {/* ─────────────── Localities served ─────────────── */}
        <section aria-labelledby="coverage-heading" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
                Now serving Bangalore
              </p>
              <h2
                id="coverage-heading"
                className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950"
              >
                16+ localities. One careful standard.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
                Caregivers, nurses and physiotherapists are distributed across the city for fast,
                reliable placement. Don’t see your area? Call us — coverage is expanding every month.
              </p>
            </div>
            <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {LOCALITIES.map((l) => (
                <li
                  key={l}
                  className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-sm font-medium text-neutral-800"
                >
                  <MapPinIcon className="h-4 w-4 shrink-0 text-primary-500" aria-hidden />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─────────────── FAQ ─────────────── */}
        <section
          aria-labelledby="faq-heading"
          className="bg-gradient-to-b from-primary-50/60 to-white px-4 py-20 sm:px-6 sm:py-28"
        >
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
              Frequently asked
            </p>
            <h2
              id="faq-heading"
              className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950"
            >
              Answers, before you even call.
            </h2>
            <div className="mt-10">
              <FAQAccordion
                faqs={FAQ_ITEMS as unknown as { question: string; answer: string }[]}
                tone="default"
              />
            </div>
          </div>
        </section>

        {/* ─────────────── Final CTA band (subtle primary gradient) ─────────────── */}
        <section
          aria-labelledby="cta-heading"
          className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 px-4 py-24 sm:px-6 sm:py-32"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-primary-500/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-accent-500/15 blur-3xl"
          />
          <div className="relative mx-auto max-w-4xl text-center">
            <h2
              id="cta-heading"
              className="font-careSerif text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.025em] text-neutral-950"
            >
              Care, beautifully arranged.
              <br />
              <em className="font-careSerif font-normal italic text-primary-600">In a single call.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              Tell us your situation. Our team responds quickly, recommends the right service, and
              starts the matching process — at no cost.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={enquiryHref}
                onClick={() => trackCareCTAClick('Get matched today', '/care-services#footer-cta')}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-primary-600 px-7 py-4 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition hover:bg-primary-700 hover:shadow-[0_8px_22px_rgba(0,0,0,0.25)] active:scale-[0.98]"
              >
                Get matched today
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={CARE_PHONE_HREF}
                onClick={() => trackCarePhoneClick(CARE_PHONE_DISPLAY, '/care-services#footer-cta')}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-neutral-900/20 bg-white/80 px-7 py-4 text-[15px] font-semibold text-neutral-900 backdrop-blur transition hover:bg-white"
              >
                <PhoneIcon className="h-4 w-4 text-primary-600" aria-hidden />
                {CARE_PHONE_DISPLAY}
              </a>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-600">
              <CheckCircleIcon className="h-4 w-4 text-primary-600" aria-hidden />
              Free consultation · No obligation · Verified professionals
            </p>

            {/* Quick links to all 6 pillars (SEO + UX) */}
            <ul className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-2">
              {pillars.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/care-services/${p.slug}`}
                    className="inline-flex items-center rounded-full border border-neutral-900/15 bg-white/70 px-4 py-2 text-xs font-semibold text-neutral-800 backdrop-blur transition hover:border-neutral-900/40 hover:bg-white hover:text-neutral-950"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />

      {/* ─────────── Hub-level JSON-LD ─────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ezyhelpers.com/' },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Care Services',
                item: 'https://www.ezyhelpers.com/care-services',
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Home Care Services in Bangalore',
            serviceType: 'Home Care',
            url: 'https://www.ezyhelpers.com/care-services',
            description:
              'Complete home care in Bangalore — elder care, home nursing, medical equipment rental, physiotherapy, ICU-at-home and palliative care, matched to your family.',
            areaServed: { '@type': 'City', name: 'Bangalore' },
            provider: {
              '@type': 'LocalBusiness',
              name: 'EzyHelpers',
              url: 'https://www.ezyhelpers.com/',
              telephone: '+918031411776',
              email: 'contact@ezyhelpers.com',
              image: 'https://www.ezyhelpers.com/ezyhelper_logo_new.png',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'HSR Layout',
                addressLocality: 'Bangalore',
                addressRegion: 'Karnataka',
                postalCode: '560102',
                addressCountry: 'IN',
              },
            },
            offers: pillars.map((p) => ({
              '@type': 'Offer',
              name: p.label,
              description: p.tagline,
              url: `https://www.ezyhelpers.com/care-services/${p.slug}`,
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />
    </div>
  )
}
