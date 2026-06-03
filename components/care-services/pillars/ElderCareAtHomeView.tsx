'use client'

import type { ComponentType, SVGProps } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import { trackCareCTAClick, trackCarePhoneClick } from '@/lib/analytics'
import {
  PhoneIcon,
  ArrowRightIcon,
  ArrowLongRightIcon,
  ArrowDownIcon,
  HeartIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  HomeModernIcon,
  ArrowTrendingUpIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import { getPillar } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

/* ───────────────────────────────────────────────────────────────────────────
 * Pillar page — "Elder Care at Home in Bangalore"
 * slug: elder-care-at-home-bangalore
 *
 * Premium, conversion-focused pillar view. Renders the pillar's 6 nested
 * services as cards (each linking to /care-services/<nested.slug>), a
 * specialised-care rationale, a 4-step process, illustrative testimonials,
 * conditions handled and SEO/AEO FAQs. Colours use ONLY primary-* / accent-* /
 * neutral-* / white Tailwind tokens.
 * ─────────────────────────────────────────────────────────────────────────── */

const PILLAR = getPillar('elder-care-at-home-bangalore')
const PATH = `/care-services/${PILLAR.slug}`

const PHONE_DISPLAY = '080-31411776'
const PHONE_HREF = 'tel:+918031411776'
const ENQUIRY_HREF = `/care-services/enquiry?source=${encodeURIComponent(PATH)}`

/* Map each nested service icon name → a heroicon component. */
const NESTED_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  SparklesIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  HeartIcon,
}

const TRUST_RIBBON = [
  { icon: ShieldCheckIcon, title: 'Aadhaar-verified', sub: 'background-checked caregivers' },
  { icon: AcademicCapIcon, title: 'Trained for seniors', sub: 'dementia, Parkinson’s, mobility' },
  { icon: ClockIcon, title: 'Same-day attempts', sub: 'when discharge can’t wait' },
  { icon: HeartIcon, title: 'Free replacement', sub: 'if the match isn’t right' },
] as const

const WHY_SPECIALISED = [
  {
    icon: HeartIcon,
    title: 'Ageing is not one condition',
    body:
      'A senior recovering from a fall needs something completely different from one living with dementia. Our caregivers are matched to the specific need — not handed a generic “elderly care” brief.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Safety is the silent skill',
    body:
      'Safe transfers, fall-prevention, pressure-sore awareness and medication timing prevent the hospital visits that quietly drain Bangalore families. Trained caregivers catch problems early.',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Dignity over supervision',
    body:
      'Good elder care preserves identity, routine and pride. We screen for warmth and patience as hard as we screen for skill — because how care feels matters as much as what it does.',
  },
  {
    icon: UserGroupIcon,
    title: 'The family is part of the plan',
    body:
      'Daily WhatsApp updates, doctor-visit coordination and respite hours mean the spouse and adult children — including NRI families — can rest, work and stay genuinely connected.',
  },
] as const

const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Free consultation',
    body: 'A 15-minute call to understand your parent’s health, daily routine, mobility and what matters most to your family.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    n: '02',
    title: 'Curated shortlist',
    body: 'Two or three caregivers matched to the exact need — dementia, bedridden, companionship — not whoever is free nearest.',
    icon: UserGroupIcon,
  },
  {
    n: '03',
    title: 'Interview & match',
    body: 'You meet shortlisted caregivers before confirming. We keep searching if none feel right for your loved one.',
    icon: SparklesIcon,
  },
  {
    n: '04',
    title: 'Onboard & support',
    body: 'We brief the caregiver, follow up in week one, and stay reachable for adjustments, escalations or a free replacement.',
    icon: HomeModernIcon,
  },
] as const

const CONDITIONS = [
  'Dementia & Alzheimer’s',
  'Parkinson’s disease',
  'Post-stroke recovery',
  'Bedridden & immobile seniors',
  'Post-fall recovery',
  'Arthritis & joint pain',
  'Diabetes daily management',
  'Hypertension & cardiac care',
  'Post-surgery convalescence',
  'Incontinence care',
  'Depression & loneliness',
  'Memory loss & confusion',
] as const

/* TESTIMONIALS — ILLUSTRATIVE. These are realistic, representative scenarios
 * written for layout/marketing and are NOT verbatim quotes from named clients.
 * Replace with consented, attributable reviews before launch. */
const TESTIMONIALS = [
  {
    quote:
      'Amma was getting confused in the evenings and we were exhausted. EzyHelpers placed a caregiver who had handled dementia before — within two weeks the agitation settled and our evenings became calm again.',
    name: 'Lakshmi R.',
    place: 'Jayanagar, Bangalore',
  },
  {
    quote:
      'After my father’s fall, we needed someone who knew safe transfers and fall-prevention. The attendant rebuilt his confidence to walk and sent us a daily update — we live in the US, so that meant everything.',
    name: 'Praveen K.',
    place: 'Parents in Whitefield',
  },
  {
    quote:
      'My mother just needed company and someone to share meals and walks with. The companion they matched has become like family. Her mood and her appetite have both come back.',
    name: 'Sandhya M.',
    place: 'HSR Layout, Bangalore',
  },
] as const

const FAQS = [
  {
    question: 'What does elder care at home in Bangalore cost?',
    answer:
      'Cost depends on the level of care — companionship and day-shift arrangements are the most affordable, while live-in, dementia, Parkinson’s or bedridden care cost more because they need specialised, round-the-clock support. Rather than quote a misleading flat rate, we give you a precise, transparent price after a free consultation that matches the plan to your parent’s actual needs.',
  },
  {
    question: 'What is the difference between a general caretaker and specialised elder care?',
    answer:
      'A general caretaker can manage basic daily support. Specialised elder care means the caregiver has demonstrated experience in your parent’s specific need — dementia behaviour management, Parkinson’s medication timing, safe handling of a bedridden senior, or post-fall mobility rebuilding. We match on that specialisation so you are not relying on improvisation.',
  },
  {
    question: 'Can I get a live-in caregiver, or only day shifts?',
    answer:
      'Both. Many Bangalore families choose live-in placements for 24-hour presence, especially for dementia, Parkinson’s or bedridden seniors. Others prefer 12-hour day shifts or companionship hours. We arrange the pattern that fits your home and budget, and can change it as your parent’s needs evolve.',
  },
  {
    question: 'How quickly can you place an elder caregiver in Bangalore?',
    answer:
      'When a suitable caregiver is available, we attempt same-day placement — particularly for hospital discharge or an urgent situation. Across the Bangalore localities we serve, most precise matches are completed within 24–48 hours so we never compromise on fit just to be fast.',
  },
  {
    question: 'Are your elder care caregivers verified and trained?',
    answer:
      'Yes. Every caregiver is verified through Aadhaar authentication, government ID checks, in-person interviews and background screening. For senior care, we additionally confirm hands-on experience with the relevant condition — dementia, Parkinson’s, mobility support or bedridden handling.',
  },
  {
    question: 'Which areas of Bangalore do you cover for elder care?',
    answer:
      'We serve seniors across Bangalore, including Whitefield, HSR Layout, Koramangala, Indiranagar, Jayanagar, JP Nagar, Hebbal, Sarjapur Road, Electronic City and surrounding areas. Call us to confirm coverage in your specific locality — we are expanding every month.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ezyhelpers.com/' },
      { '@type': 'ListItem', position: 2, name: 'Care Services', item: 'https://www.ezyhelpers.com/care-services' },
      { '@type': 'ListItem', position: 3, name: 'Elder Care at Home', item: `https://www.ezyhelpers.com${PATH}` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Elder Care at Home, Bangalore',
    medicalSpecialty: ['Geriatrics'],
    areaServed: { '@type': 'City', name: 'Bangalore' },
    url: `https://www.ezyhelpers.com${PATH}`,
    telephone: '+91-80-31411776',
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

export default function ElderCareAtHomeView() {
  return (
    <div className="min-h-screen bg-white font-careUi text-neutral-900 antialiased">
      <Navbar />

      {/* ─────────────────── Hero ─────────────────── */}
      <header className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl"
        />
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
                <Link href="/care-services" className="transition-colors hover:text-neutral-900">
                  Care Services
                </Link>
              </li>
              <li className="select-none px-2 text-neutral-300" aria-hidden="true">
                ›
              </li>
              <li>
                <span className="font-medium text-neutral-900">Elder Care at Home</span>
              </li>
            </ol>
          </nav>

          <div className="mt-10 text-center sm:mt-14 lg:mt-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-neutral-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <MapPinIcon className="h-3.5 w-3.5 text-primary-500" aria-hidden />
              Now serving Bangalore
            </p>

            <h1 className="mx-auto mt-7 max-w-4xl font-careSerif text-[clamp(2.4rem,6.5vw,5rem)] font-medium leading-[1.03] tracking-[-0.035em] text-neutral-950">
              {PILLAR.title}.
              <br />
              <em className="font-careSerif font-normal italic text-primary-500">With dignity, at home.</em>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-600 sm:text-xl">
              {PILLAR.tagline} Verified, trained caregivers for dementia, Parkinson’s, bedridden seniors,
              companionship and mobility — matched to your family, not assigned.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={ENQUIRY_HREF}
                onClick={() => trackCareCTAClick('Find the right caregiver', `${PATH}#hero`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-neutral-900 px-7 py-4 text-[15px] font-semibold text-white shadow-[0_2px_10px_rgba(0,0,0,0.18)] transition hover:bg-black hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] active:scale-[0.98]"
              >
                Find the right caregiver
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={PHONE_HREF}
                onClick={() => trackCarePhoneClick(PHONE_DISPLAY, `${PATH}#hero`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-4 text-[15px] font-semibold text-neutral-900 shadow-sm transition hover:border-neutral-900 hover:bg-neutral-50"
              >
                <PhoneIcon className="h-4 w-4" aria-hidden />
                {PHONE_DISPLAY}
              </a>
            </div>

            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 transition hover:text-neutral-900"
            >
              Explore the six elder-care services
              <ArrowDownIcon className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ─────────────── Trust ribbon ─────────────── */}
        <section aria-labelledby="trust-ribbon" className="border-y border-neutral-200 bg-white">
          <h2 id="trust-ribbon" className="sr-only">
            Why families trust our elder care
          </h2>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-neutral-200 sm:grid-cols-4">
            {TRUST_RIBBON.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex flex-col items-center gap-2 bg-white px-4 py-7 text-center sm:py-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-500 ring-1 ring-primary-500/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <strong className="text-sm font-bold text-neutral-950">{title}</strong>
                <span className="text-xs text-neutral-500">{sub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────── Intro ─────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
              Care for ageing parents
            </p>
            <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.08] tracking-[-0.025em] text-neutral-950">
              The people who raised you deserve
              <br className="hidden sm:block" />{' '}
              <span className="text-neutral-400">more than a stranger filling a shift.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
              {PILLAR.blurb} Whether your parent needs a calm companion for the afternoons or round-the-clock
              support through advanced dementia, we match a caregiver with the right experience — and stay
              involved long after placement to make sure the care keeps working.
            </p>
          </div>
        </section>

        {/* ─────────────── Nested services grid ─────────────── */}
        <section id="services" className="scroll-mt-28 border-y border-neutral-200 bg-primary-50 px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
                Six elder-care services
              </p>
              <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                Specialised care for every stage of ageing.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                From gentle companionship to advanced dementia and bedridden care — choose the service that
                fits, and we’ll match a caregiver experienced in exactly that.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PILLAR.nested.map((service) => {
                const Icon = NESTED_ICONS[service.icon] ?? HeartIcon
                const href = `/care-services/${service.slug}`
                return (
                  <Link
                    key={service.slug}
                    href={href}
                    aria-label={`${service.title} — learn more`}
                    className="group flex h-full flex-col rounded-[28px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] outline-none transition hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-500 ring-1 ring-primary-500/15">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-careSerif text-xl font-bold tracking-tight text-neutral-950">
                      {service.label}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{service.tagline}</p>
                    <p className="mt-5 text-sm font-semibold text-neutral-900">
                      {formatPriceWithNote(service.priceKey)}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-500 transition group-hover:text-primary-600">
                      Learn more
                      <ArrowLongRightIcon
                        className="h-4 w-4 transition group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─────────────── Why specialised elder care ─────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
                Why specialised elder care
              </p>
              <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                Most services place whoever is free.
                <br />
                <em className="font-careSerif font-normal italic text-primary-500">We place whoever is right.</em>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                Senior care done well is the difference between a parent who declines quietly and one who keeps
                their routine, dignity and good days. Here’s what specialised elder care actually changes.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {WHY_SPECIALISED.map(({ icon: Icon, title, body }) => (
                <article
                  key={title}
                  className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-500 ring-1 ring-primary-500/15">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-careSerif text-xl font-bold tracking-tight text-neutral-950">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── How it works ─────────────── */}
        <section className="bg-primary-50 px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">How it works</p>
              <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                Four steps. One careful match.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                The same disciplined process whether you need a companion for a few hours or a live-in
                caregiver for advanced dementia.
              </p>
            </div>

            <ol className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map(({ n, title, body, icon: Icon }) => (
                <li
                  key={n}
                  className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-careSerif text-3xl font-medium text-primary-500">{n}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-700">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <h3 className="mt-5 font-careSerif text-xl font-bold tracking-tight text-neutral-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─────────────── Conditions handled ─────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
                  Conditions we handle
                </p>
                <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                  Experience, not improvisation.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
                  Elder caregivers are matched only when they have managed your parent’s specific condition
                  before. If yours isn’t listed, call us — we’ll assess what the care actually requires.
                </p>
                <a
                  href={PHONE_HREF}
                  onClick={() => trackCarePhoneClick(PHONE_DISPLAY, `${PATH}#conditions`)}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
                >
                  <PhoneIcon className="h-4 w-4" aria-hidden />
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="lg:col-span-7">
                <div className="flex flex-wrap gap-2.5">
                  {CONDITIONS.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" aria-hidden />
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────── Testimonials ─────────────── */}
        <section className="border-y border-neutral-200 bg-primary-50 px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">Real families</p>
              <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
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
                    <span aria-hidden className="font-careSerif text-5xl leading-none text-primary-500/40">
                      &ldquo;
                    </span>
                    <blockquote className="mt-2 font-careSerif text-lg leading-snug text-neutral-900 sm:text-xl">
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

        {/* ─────────────── FAQ ─────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">Frequently asked</p>
            <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
              Elder care in Bangalore, answered.
            </h2>
            <div className="mt-10">
              <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
            </div>
          </div>
        </section>

        {/* ─────────────── Final CTA ─────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 px-4 py-24 sm:px-6 sm:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-primary-500/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-primary-400/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="font-careSerif text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.025em] text-neutral-950">
              Care for your parents,
              <br />
              <em className="font-careSerif font-normal italic text-primary-500">arranged in a single call.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              Tell us about your loved one. Our team responds within the hour, recommends the right elder-care
              service, and starts the matching process — at no cost.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={ENQUIRY_HREF}
                onClick={() => trackCareCTAClick('Get matched today', `${PATH}#footer-cta`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-neutral-900 px-7 py-4 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition hover:bg-black hover:shadow-[0_8px_22px_rgba(0,0,0,0.25)] active:scale-[0.98]"
              >
                Get matched today
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={PHONE_HREF}
                onClick={() => trackCarePhoneClick(PHONE_DISPLAY, `${PATH}#footer-cta`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-neutral-900/20 bg-white/80 px-7 py-4 text-[15px] font-semibold text-neutral-900 backdrop-blur transition hover:bg-white"
              >
                <PhoneIcon className="h-4 w-4" aria-hidden />
                {PHONE_DISPLAY}
              </a>
            </div>

            {/* Quick links to the 6 nested services for SEO + UX */}
            <ul className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-2">
              {PILLAR.nested.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/care-services/${service.slug}`}
                    className="inline-flex items-center rounded-full border border-neutral-900/15 bg-white/70 px-4 py-2 text-xs font-semibold text-neutral-800 backdrop-blur transition hover:border-neutral-900/40 hover:bg-white hover:text-neutral-950"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
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
