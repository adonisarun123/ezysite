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
  CheckIcon,
  HeartIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  HomeModernIcon,
  BeakerIcon,
  ClipboardDocumentCheckIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'
import CareHeroQuickForm from '../CareHeroQuickForm'
import { getPillar } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

/* ───────────────────────────────────────────────────────────────────────────
 * /care-services/physiotherapy-at-home-bangalore — PILLAR PAGE
 * Premium Apple-DNA layout (Fraunces serif, generous whitespace, #0074C8
 * primary accent) tied to the EzyHelpers care palette. Drives discovery of the
 * six nested physiotherapy services.
 * ─────────────────────────────────────────────────────────────────────────── */

const PILLAR_SLUG = 'physiotherapy-at-home-bangalore'
const PATH = `/care-services/${PILLAR_SLUG}`
const PHONE_DISPLAY = '080-31411776'
const PHONE_HREF = 'tel:+918031411776'
const ENQUIRY_HREF = '/care-services/enquiry'

/* Heroicon lookup for nested-service card icons (icon stored as string in registry) */
const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  ShieldCheckIcon,
  SparklesIcon,
  HomeModernIcon,
  HeartIcon,
  BeakerIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  ClipboardDocumentCheckIcon,
}

const TRUST_RIBBON = [
  { icon: AcademicCapIcon, title: 'Certified physiotherapists', sub: 'BPT / MPT qualified & verified' },
  { icon: ClipboardDocumentCheckIcon, title: 'Personalised plans', sub: 'Built around your diagnosis & goals' },
  { icon: BeakerIcon, title: 'Equipment-equipped', sub: 'Therapists arrive with the tools needed' },
  { icon: ChartBarIcon, title: 'Progress tracking', sub: 'Measured gains, session by session' },
] as const

const WHY_HOME = [
  {
    icon: HomeModernIcon,
    title: 'Recovery in familiar surroundings',
    body: 'Patients heal faster and stay more motivated at home — no stressful commutes, no waiting rooms, and exercises practised in the very space where daily life happens.',
  },
  {
    icon: UserGroupIcon,
    title: 'One-on-one, undivided attention',
    body: 'Unlike busy clinics, every home session is fully dedicated to one patient. The physiotherapist watches every movement and corrects form in real time.',
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'Plans built for your home setup',
    body: 'Exercises are adapted to the stairs, furniture and space you actually use, so the recovery plan fits your real environment rather than a clinic gym.',
  },
  {
    icon: ClockIcon,
    title: 'Flexible, time-saving scheduling',
    body: 'Sessions are booked around work, caregiving and family routines — especially valuable for seniors, post-surgical patients and anyone with limited mobility.',
  },
  {
    icon: HeartIcon,
    title: 'Family stays involved',
    body: 'Relatives can observe and learn safe assistance techniques, so progress continues between visits with confidence rather than guesswork.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Lower infection risk',
    body: 'For immunocompromised, elderly and post-operative patients, staying home reduces exposure to clinic and hospital-borne infections.',
  },
] as const

const PHYSIO_TYPES_ORDER = [
  'orthopedic-physiotherapy-at-home-bangalore',
  'neuro-physiotherapy-at-home-bangalore',
  'post-surgical-physiotherapy-bangalore',
  'geriatric-physiotherapy-bangalore',
  'cardio-respiratory-physiotherapy-bangalore',
  'paediatric-physiotherapy-bangalore',
] as const

const HOW_IT_WORKS = [
  {
    n: '01',
    title: 'Home assessment',
    body: 'The physiotherapist visits, reviews your reports, examines mobility, pain and strength, and understands your daily routine and recovery goals.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    n: '02',
    title: 'Personalised plan',
    body: 'A tailored treatment programme is built around your diagnosis — exercises, manual therapy and milestones, explained clearly to you and your family.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    n: '03',
    title: 'Guided sessions',
    body: 'Regular at-home sessions with hands-on therapy and supervised exercise, with the plan adjusted as you grow stronger and more mobile.',
    icon: UserGroupIcon,
  },
  {
    n: '04',
    title: 'Progress review',
    body: 'Your recovery is measured against goals at each milestone, with a clear discharge or maintenance plan once you reach independence.',
    icon: ChartBarIcon,
  },
] as const

const CONDITIONS = [
  'Knee & hip osteoarthritis',
  'Post knee/hip replacement',
  'Frozen shoulder',
  'Lower back & neck pain',
  'Sciatica',
  'Stroke & paralysis',
  'Parkinson’s disease',
  'Fracture rehabilitation',
  'Sports & ligament injuries',
  'Cervical spondylosis',
  'Balance & fall recovery',
  'Post-cardiac rehabilitation',
  'COPD & breathing difficulty',
  'Cerebral palsy (children)',
  'Spinal cord injury',
  'General mobility decline',
] as const

const TESTIMONIALS = [
  {
    quote:
      'After my mother’s knee replacement, travelling to a clinic was impossible. The physiotherapist came home three times a week and within six weeks she was walking unaided in the house.',
    name: 'Deepa Krishnan',
    place: 'Jayanagar, Bangalore',
  },
  {
    quote:
      'My father had a stroke and lost movement on his right side. The neuro-physio plan was patient and structured — we saw small wins every single week, and the daily updates kept us hopeful.',
    name: 'Rahul Menon',
    place: 'Whitefield, Bangalore',
  },
  {
    quote:
      'I had chronic lower back pain from desk work. Having a therapist correct my exercises at home, in my own chair and setup, made a difference no clinic ever did. Pain-free in two months.',
    name: 'Sneha Agarwal',
    place: 'HSR Layout, Bangalore',
  },
] as const

const FAQS = [
  {
    question: 'How many physiotherapy sessions will I need at home?',
    answer:
      'It depends entirely on your condition and goals. Simple issues like mild back pain may resolve in 6–8 sessions, while post-surgical or neurological rehabilitation often runs across several weeks or months. After the first home assessment, your physiotherapist gives you a realistic estimate and reviews progress at each milestone, so you always know where you stand.',
  },
  {
    question: 'Do I need to buy any equipment for home physiotherapy in Bangalore?',
    answer:
      'No. Our physiotherapists arrive equipped with the tools most sessions require — therapy bands, mobilisation aids and assessment instruments. If your specific plan benefits from a particular item (for example a TENS unit or specialised mobility aid), we’ll advise you in advance, and many such items can be rented rather than purchased.',
  },
  {
    question: 'Is home physiotherapy as effective as visiting a clinic?',
    answer:
      'For most conditions, yes — and often more so. Home sessions are fully one-on-one, exercises are tailored to your actual living space, and there is no fatigue or stress from travel. For patients who are post-surgical, elderly or have limited mobility, recovering at home is frequently the safer and faster route.',
  },
  {
    question: 'Will physiotherapy at home be covered by my health insurance?',
    answer:
      'Coverage varies by insurer and policy. Some plans reimburse prescribed home physiotherapy, particularly post-surgery or post-hospitalisation, while others do not. We can provide proper session documentation and receipts to support your claim — please confirm the specifics directly with your insurance provider before starting.',
  },
  {
    question: 'Are your physiotherapists qualified and verified?',
    answer:
      'Every physiotherapist is BPT or MPT qualified, with their credentials and identity verified before placement. We match you with a therapist experienced in your specific condition — orthopaedic, neurological, post-surgical, geriatric, cardio-respiratory or paediatric — rather than assigning whoever is nearest.',
  },
  {
    question: 'How soon can a physiotherapist start home visits in Bangalore?',
    answer:
      'In most Bangalore localities we can arrange the first home assessment within 24–48 hours. For urgent post-discharge recovery we prioritise faster scheduling. Call us on 080-31411776 and we’ll confirm availability in your area.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Physiotherapy at Home, Bangalore',
    medicalSpecialty: ['PhysicalTherapy', 'Rehabilitation'],
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
      { '@type': 'ListItem', position: 3, name: 'Physiotherapy at Home', item: `https://www.ezyhelpers.com${PATH}` },
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

export default function PhysiotherapyAtHomeView() {
  const pillar = getPillar(PILLAR_SLUG)
  const enquiryHref = `${ENQUIRY_HREF}?source=${encodeURIComponent(PATH)}`
  const types = PHYSIO_TYPES_ORDER.map((slug) => pillar.nested.find((n) => n.slug === slug)).filter(
    (n): n is NonNullable<typeof n> => Boolean(n)
  )

  return (
    <div className="min-h-screen bg-white font-careUi text-neutral-900 antialiased">
      <Navbar />

      {/* ─────────────────── Hero ─────────────────── */}
      <header className="relative overflow-hidden bg-care-50">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-care-500/10 blur-3xl"
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
                <span className="font-medium text-neutral-900">Physiotherapy at Home</span>
              </li>
            </ol>
          </nav>

          <div className="mt-10 max-w-3xl sm:mt-14">
            <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-care-500" aria-hidden />
              Bangalore · Certified home rehabilitation
            </p>

            <h1 className="mt-7 font-careSerif text-[clamp(2.5rem,6.5vw,5rem)] font-medium leading-[1.03] tracking-[-0.03em] text-neutral-950">
              {pillar.title}.
              <br />
              <em className="font-careSerif font-normal italic text-care-500">Recovery, delivered to your door.</em>
            </h1>

            <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-600 sm:text-xl">
              {pillar.blurb} No commutes, no waiting rooms — just expert, one-on-one therapy in the comfort of
              your own home, with measurable progress at every step.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href={enquiryHref}
                onClick={() => trackCareCTAClick('Book a physio assessment', `${PATH}#hero`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-neutral-900 px-7 py-4 text-[15px] font-semibold text-white shadow-[0_2px_10px_rgba(0,0,0,0.18)] transition hover:bg-black hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] active:scale-[0.98]"
              >
                Book a physio assessment
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

            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-neutral-500">
              {formatPriceWithNote(pillar.priceKey)} · Same-week first visit across Bangalore
            </p>

            {/* In-hero quick lead form */}
            <CareHeroQuickForm enquirySource={PATH} />
          </div>
        </div>
      </header>

      <main>
        {/* ─────────────── Trust ribbon ─────────────── */}
        <section aria-labelledby="trust-ribbon" className="border-y border-neutral-200 bg-white">
          <h2 id="trust-ribbon" className="sr-only">
            Why families trust our home physiotherapy
          </h2>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-neutral-200 lg:grid-cols-4">
            {TRUST_RIBBON.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-start gap-3 bg-white px-5 py-7 sm:px-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-care-50 text-care-500 ring-1 ring-care-500/15">
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

        {/* ─────────────── Intro ─────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">
              Physiotherapy that comes to you
            </p>
            <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.06] tracking-[-0.025em] text-neutral-950">
              Expert rehabilitation, without leaving the house.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              Whether you are recovering from surgery, managing a neurological condition, or rebuilding strength
              and balance in later life, our certified physiotherapists bring the full rehabilitation experience
              home. Each programme is personalised to your diagnosis, practised in your real living space, and
              measured against clear goals — so every session moves you closer to independence.
            </p>
          </div>
        </section>

        {/* ─────────────── Six nested physio types ─────────────── */}
        <section id="services" className="scroll-mt-28 border-y border-neutral-200 bg-neutral-50 px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">
                Six specialised programmes
              </p>
              <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                Find the right kind of physiotherapy.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
                From joint and back pain to stroke recovery and children’s development, choose the programme
                matched to your condition — each delivered at home by a therapist experienced in it.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {types.map((n) => {
                const Icon = ICONS[n.icon] ?? SparklesIcon
                return (
                  <Link
                    key={n.slug}
                    href={`/care-services/${n.slug}`}
                    className="group flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] outline-none transition hover:-translate-y-1 hover:border-neutral-900 hover:shadow-[0_12px_32px_rgba(0,0,0,0.10)] focus-visible:ring-2 focus-visible:ring-care-500 focus-visible:ring-offset-2"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-care-50 text-care-500 ring-1 ring-care-500/15">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-careSerif text-xl font-bold tracking-tight text-neutral-950">
                      {n.label}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{n.tagline}</p>
                    <p className="mt-5 text-sm font-semibold text-neutral-900">
                      {formatPriceWithNote(n.priceKey)}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-care-500 transition group-hover:gap-2">
                      Explore programme
                      <ArrowRightIcon className="h-4 w-4" aria-hidden />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─────────────── Why home physiotherapy works ─────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">
                Why home physiotherapy works
              </p>
              <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                The home advantage in recovery.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
                Rehabilitation works best when it fits into real life. Here is why so many Bangalore families
                choose physiotherapy at home over repeated clinic visits.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_HOME.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-care-50 text-care-500 ring-1 ring-care-500/15">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-careSerif text-lg font-bold tracking-tight text-neutral-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── How it works ─────────────── */}
        <section className="bg-neutral-50 px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">How it works</p>
              <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                Four steps, from assessment to independence.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                A clear, measurable process — so you always understand where your recovery is heading.
              </p>
            </div>

            <ol className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {HOW_IT_WORKS.map(({ n, title, body, icon: Icon }) => (
                <li
                  key={n}
                  className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-careSerif text-3xl font-medium text-care-500">{n}</span>
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

        {/* ─────────────── Conditions treated ─────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">
                  Conditions we treat
                </p>
                <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                  Rehabilitation for a wide range of needs.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
                  Our physiotherapists are matched to your specific condition. If yours isn’t listed, call us —
                  we’ll assess what your recovery actually needs.
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
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {CONDITIONS.map((c) => (
                    <div
                      key={c}
                      className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-800 shadow-sm"
                    >
                      <CheckCircleIcon className="h-4 w-4 shrink-0 text-care-500" aria-hidden />
                      <span className="leading-snug">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────── Testimonials (illustrative) ─────────────── */}
        <section className="border-y border-neutral-200 bg-accent-50 px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">
                Recovery stories
              </p>
              <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                Progress, one session at a time.
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="flex h-full flex-col justify-between rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
                >
                  <div>
                    <span aria-hidden className="font-careSerif text-5xl leading-none text-care-500/40">
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
              Illustrative stories representative of typical patient outcomes.
            </p>
          </div>
        </section>

        {/* ─────────────── FAQ ─────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">Frequently asked</p>
            <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
              Home physiotherapy, answered.
            </h2>
            <div className="mt-10">
              <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
            </div>
          </div>
        </section>

        {/* ─────────────── Final CTA ─────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-care-50 via-care-100 to-care-200 px-4 py-24 sm:px-6 sm:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-care-500/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-care-400/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-careSerif text-[clamp(2rem,5.5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
              Start your recovery at home.
              <br />
              <em className="font-careSerif font-normal italic text-care-500">Book a physio assessment today.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              Tell us about the condition and your goals. We respond within the hour, match you with a certified
              physiotherapist experienced in your needs, and schedule the first home assessment.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={enquiryHref}
                onClick={() => trackCareCTAClick('Book a physio assessment', `${PATH}#footer-cta`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-neutral-900 px-7 py-4 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition hover:bg-black active:scale-[0.98]"
              >
                Book a physio assessment
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={PHONE_HREF}
                onClick={() => trackCarePhoneClick(PHONE_DISPLAY, `${PATH}#footer-cta`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-neutral-900/20 bg-white/80 px-7 py-4 text-[15px] font-semibold text-neutral-900 backdrop-blur transition hover:bg-white"
              >
                <PhoneIcon className="h-4 w-4" aria-hidden />
                Call {PHONE_DISPLAY}
              </a>
            </div>

            <ul className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-2">
              {types.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/care-services/${n.slug}`}
                    className="inline-flex items-center rounded-full border border-neutral-900/15 bg-white/70 px-4 py-2 text-xs font-semibold text-neutral-800 backdrop-blur transition hover:border-neutral-900/40 hover:bg-white hover:text-neutral-950"
                  >
                    {n.label}
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
