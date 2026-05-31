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
  CheckIcon,
  HeartIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  HomeModernIcon,
  ClipboardDocumentCheckIcon,
  PlusCircleIcon,
  BeakerIcon,
  AdjustmentsHorizontalIcon,
  DocumentCheckIcon,
  IdentificationIcon,
} from '@heroicons/react/24/outline'
import { getPillar } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

/* ───────────────────────────────────────────────────────────────────────────
 * Pillar page — Home Nursing Care in Bangalore
 * Premium, Apple-clean layout consistent with the /care-services hub:
 * Fraunces serif headings, Plus Jakarta UI, primary-* (Ocean Blue) accent.
 * Pulls its title + nested services + pricing from the central registry so
 * copy/price changes propagate automatically.
 * ─────────────────────────────────────────────────────────────────────────── */

const PILLAR_SLUG = 'home-nursing-care-bangalore' as const
const PATH = `/care-services/${PILLAR_SLUG}`
const PHONE_DISPLAY = '080-31411776'
const PHONE_HREF = 'tel:+918031411776'
const ENQUIRY_HREF = '/care-services/enquiry'

const pillar = getPillar(PILLAR_SLUG)

/* Map registry icon names → imported Heroicons (outline) for the service grid. */
const NESTED_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  PlusCircleIcon,
  BeakerIcon,
  AdjustmentsHorizontalIcon,
  HomeModernIcon,
  HeartIcon,
  ShieldCheckIcon,
}

const TRUST_RIBBON = [
  { icon: AcademicCapIcon, title: 'GNM / B.Sc verified', sub: 'qualifications checked' },
  { icon: IdentificationIcon, title: 'Aadhaar-verified', sub: 'background screened' },
  { icon: DocumentCheckIcon, title: 'Daily clinical logs', sub: 'shared with your doctor' },
  { icon: ClockIcon, title: 'Visits or 12-hr shifts', sub: 'flexible cover' },
] as const

const WHY_PROFESSIONAL = [
  {
    icon: ShieldCheckIcon,
    title: 'Procedures done safely, the first time',
    body:
      'Wound dressing, IV cannulation, catheterisation and injections carry real infection and dosing risks when done by untrained hands. A credentialled nurse follows sterile technique and clinical protocol every single visit.',
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'Fewer hospital readmissions',
    body:
      'Disciplined post-discharge monitoring — vitals, wound healing, medication timing — catches complications early, which is exactly when they are cheapest and safest to treat.',
  },
  {
    icon: DocumentCheckIcon,
    title: 'A clinical record your doctor can use',
    body:
      'Every nursing visit produces a dated log of vitals, observations and tasks completed. Your treating doctor reviews a real record instead of guessing what happened at home.',
  },
  {
    icon: HomeModernIcon,
    title: 'Hospital-grade care, at home in Bangalore',
    body:
      'Recover in your own bed, on your own routine, near family — with the same clinical rigour you would expect on a hospital ward, delivered across all serviced Bangalore localities.',
  },
] as const

const CREDENTIALS = [
  'GNM or B.Sc Nursing qualification verified against the original certificate',
  'Aadhaar authentication and government-ID validation',
  'In-person interview and reference checks before placement',
  'Demonstrated hands-on competence in the specific procedure required',
  'Sterile-technique and infection-control refresher briefing',
  'Daily clinical log: vitals, medication, wound status, observations',
] as const

const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Share the prescription',
    body: 'Tell us the doctor’s orders — wound type, IV schedule, catheter plan or post-op needs. A 15-minute call is all it takes.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    n: '02',
    title: 'Matched to a qualified nurse',
    body: 'We shortlist nurses whose verified skills match your exact procedure — not whoever is free nearest.',
    icon: UserGroupIcon,
  },
  {
    n: '03',
    title: 'Care begins with logging',
    body: 'The nurse performs the procedure to protocol and records vitals, observations and tasks in a daily clinical log.',
    icon: SparklesIcon,
  },
  {
    n: '04',
    title: 'Monitored & supported',
    body: 'We follow up in the first week, share logs with your doctor on request, and arrange replacements or extra cover anytime.',
    icon: HomeModernIcon,
  },
] as const

const CONDITIONS = [
  'Diabetic foot & non-healing wounds',
  'Bedsores / pressure ulcers',
  'Post-surgical incision care',
  'IV antibiotic courses',
  'Dehydration & electrolyte infusions',
  'Urinary catheter management',
  'Ryles / PEG feeding-tube care',
  'Insulin & prescribed injections',
  'BP, blood-sugar & SpO₂ monitoring',
  'Tracheostomy & suctioning',
  'Post-discharge recovery',
  'Chronic-illness daily nursing',
] as const

/* ───── Illustrative testimonials — flagged as illustrative, not real clients ───── */
// NOTE: ILLUSTRATIVE testimonials for layout/SEO. Replace with verified
// client quotes (with consent) before launch. Names/places are invented.
const TESTIMONIALS = [
  {
    quote:
      'My father came home after bypass surgery with an incision that needed daily dressing. The nurse EzyHelpers sent kept a written log of his vitals every day — our cardiologist said it was the cleanest recovery record he had seen.',
    name: 'Deepa Krishnan',
    place: 'Jayanagar, Bangalore',
  },
  {
    quote:
      'My mother is diabetic with a stubborn foot wound. Weekly dressing visits at home meant no more painful hospital trips, and the wound finally started healing. The nurse explained every step to us.',
    name: 'Rakesh Menon',
    place: 'Whitefield, Bangalore',
  },
  {
    quote:
      'We needed a two-week IV antibiotic course for my husband. Having a credentialled nurse administer it at home — on schedule, with proper hygiene — saved us a hospital stay we couldn’t afford.',
    name: 'Anita Bhat',
    place: 'HSR Layout, Bangalore',
  },
] as const

const FAQ_ITEMS = [
  {
    question: 'What is home nursing care, and how is it different from a caretaker?',
    answer:
      'Home nursing care is clinical care delivered at home by a qualified nurse — wound dressing, IV therapy, catheter management, injections, vitals monitoring and post-surgical recovery. A caretaker handles daily personal support like hygiene, feeding and companionship but is not trained for medical procedures. Many families in Bangalore use both: a nurse for procedures and a caretaker for daily care.',
  },
  {
    question: 'Are EzyHelpers home nurses qualified and verified?',
    answer:
      'Yes. Every home nurse holds a verified GNM or B.Sc Nursing qualification checked against the original certificate. We additionally complete Aadhaar authentication, government-ID validation, an in-person interview, reference checks, and confirm hands-on competence in the specific procedure you need before placement.',
  },
  {
    question: 'How much does home nursing care cost in Bangalore?',
    answer:
      `Home nursing in Bangalore starts at ${formatPriceWithNote('nursing-care').toLowerCase()} for single-procedure visits such as a wound dressing or injection. Longer post-surgical care is available as 12-hour shifts. Exact pricing depends on the procedure, frequency and duration — a free consultation gives you a precise estimate for your situation.`,
  },
  {
    question: 'Can a nurse visit just once, or do I need to commit long-term?',
    answer:
      'Both are available. You can book a single nursing visit — for example a one-off injection or dressing change — or arrange recurring visits and 12-hour shifts for ongoing post-surgical or chronic-condition care. There is no requirement to commit to a long-term plan.',
  },
  {
    question: 'Will the nurse coordinate with our treating doctor?',
    answer:
      'Yes. Our nurses follow your doctor’s prescription and orders, and maintain a daily clinical log of vitals, medication, wound status and observations. On request, these logs are shared with your treating doctor so the medical record stays continuous between hospital and home.',
  },
  {
    question: 'How quickly can a home nurse be arranged in Bangalore?',
    answer:
      'For most Bangalore localities we attempt same-day or next-day placement when a suitably qualified nurse is available — we prioritise urgent situations such as hospital discharge. Where precise matching takes longer, we keep you informed and typically place within 24 to 48 hours.',
  },
] as const

export default function HomeNursingCareView() {
  const enquiryHref = `${ENQUIRY_HREF}?source=${encodeURIComponent(PATH)}`

  return (
    <div className="min-h-screen bg-white font-careUi text-neutral-900 antialiased">
      <Navbar />

      {/* ─────────────────── Hero ─────────────────── */}
      <header className="relative overflow-hidden bg-primary-50">
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 sm:pb-28 sm:pt-8 lg:pb-32">
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
                <span className="font-medium text-neutral-900">Home Nursing Care</span>
              </li>
            </ol>
          </nav>

          <div className="mt-10 text-center sm:mt-14 lg:mt-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" aria-hidden />
              Bangalore · Clinical care at home
            </p>

            <h1 className="mx-auto mt-7 max-w-4xl font-careSerif text-[clamp(2.4rem,6vw,4.75rem)] font-medium leading-[1.04] tracking-[-0.03em] text-neutral-950">
              {pillar.title}.
              <br />
              <em className="font-careSerif font-normal italic text-primary-500">
                Performed with discipline.
              </em>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-600 sm:text-xl">
              {pillar.tagline} GNM and B.Sc-verified nurses for wound care, IV therapy, catheter
              management, injections and post-surgical recovery — with daily clinical logs your doctor
              can actually use.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={enquiryHref}
                onClick={() => trackCareCTAClick('Book a home nurse', `${PATH}#hero`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-neutral-900 px-7 py-4 text-[15px] font-semibold text-white shadow-[0_2px_10px_rgba(0,0,0,0.18)] transition hover:bg-black hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] active:scale-[0.98]"
              >
                Book a home nurse
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

            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-neutral-500">
              {formatPriceWithNote(pillar.priceKey)}
            </p>
          </div>
        </div>
      </header>

      <main>
        {/* ─────────────── Trust ribbon ─────────────── */}
        <section aria-labelledby="trust-ribbon" className="border-y border-neutral-200 bg-white">
          <h2 id="trust-ribbon" className="sr-only">
            Why families trust EzyHelpers home nursing
          </h2>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-neutral-200 lg:grid-cols-4">
            {TRUST_RIBBON.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-3 bg-white px-5 py-6 sm:px-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500 ring-1 ring-primary-500/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0 text-left">
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
              Clinical care, kept at home
            </p>
            <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.06] tracking-[-0.025em] text-neutral-950">
              The procedures a hospital does.
              <br />
              <span className="text-neutral-400">In the comfort of your own home.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              {pillar.description} Whether it is a single dressing change or weeks of post-surgical
              monitoring, every visit is performed by a credential-checked nurse who follows sterile
              technique, respects your doctor’s orders, and writes it all down. That discipline is what
              keeps recovery on track and families out of the emergency room.
            </p>
          </div>
        </section>

        {/* ─────────────── Nested services grid ─────────────── */}
        <section
          id="services"
          className="scroll-mt-28 border-y border-neutral-200 bg-neutral-50 px-4 py-20 sm:px-6 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
                Six nursing services
              </p>
              <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                Choose the clinical care you need.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
                Each service is delivered by a nurse verified for that specific procedure. Tap a card to
                see exactly what is covered, who delivers it, and what it costs.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pillar.nested.map((n) => {
                const Icon = NESTED_ICONS[n.icon] ?? ClipboardDocumentCheckIcon
                return (
                  <Link
                    key={n.slug}
                    href={`/care-services/${n.slug}`}
                    aria-label={`${n.title} — learn more`}
                    className="group flex h-full flex-col rounded-[28px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] outline-none transition hover:-translate-y-1 hover:border-neutral-900 hover:shadow-[0_12px_32px_rgba(0,0,0,0.10)] focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-500 ring-1 ring-primary-500/15">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-careSerif text-xl font-bold tracking-tight text-neutral-950">
                      {n.label}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{n.tagline}</p>
                    <p className="mt-5 text-sm font-semibold text-neutral-900">
                      {formatPriceWithNote(n.priceKey)}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary-500 transition group-hover:text-primary-600">
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

        {/* ─────────────── Why professional home nursing ─────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
                Why professional nursing
              </p>
              <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                The difference a qualified nurse makes.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
                Clinical procedures at home are not a place to improvise. Here is what professional home
                nursing protects against — and why it matters for recovery.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {WHY_PROFESSIONAL.map(({ icon: Icon, title, body }) => (
                <article
                  key={title}
                  className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-500 ring-1 ring-primary-500/15">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-careSerif text-lg font-bold tracking-tight text-neutral-950 sm:text-xl">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── Credentials & verification emphasis ─────────────── */}
        <section className="bg-neutral-900 px-4 py-20 text-white sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">
                  Credentials & verification
                </p>
                <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-white">
                  GNM / B.Sc verified.
                  <br />
                  <span className="text-white/50">Logged, every single day.</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
                  We do not place a nurse in your home until their qualification is verified and their
                  competence in your specific procedure is confirmed. Then, every visit is documented in
                  a clinical log you and your doctor can rely on.
                </p>
                <a
                  href={PHONE_HREF}
                  onClick={() => trackCarePhoneClick(PHONE_DISPLAY, `${PATH}#credentials`)}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
                >
                  <PhoneIcon className="h-4 w-4" aria-hidden />
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {CREDENTIALS.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4"
                    >
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden />
                      <span className="text-sm leading-snug text-white/85">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────── How it works ─────────────── */}
        <section className="bg-neutral-50 px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
                How it works
              </p>
              <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                From prescription to recovery. Four steps.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                The same disciplined process whether you need a single injection or weeks of
                post-surgical nursing.
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
                  <h3 className="mt-5 font-careSerif text-lg font-bold tracking-tight text-neutral-950 sm:text-xl">
                    {title}
                  </h3>
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
                  Our home nurses are matched to procedures they have performed before. If your situation
                  is not listed, call us — we will assess what the care actually requires.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="flex flex-wrap gap-2.5">
                  {CONDITIONS.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────── Testimonials (illustrative) ─────────────── */}
        <section className="border-y border-neutral-200 bg-neutral-50 px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
                Bangalore families
              </p>
              <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                Recoveries that stayed on track.
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
            <p className="mt-8 text-center text-xs text-neutral-400">
              Illustrative stories representative of typical patient recoveries.
            </p>
          </div>
        </section>

        {/* ─────────────── FAQ ─────────────── */}
        <section id="faq" className="scroll-mt-28 bg-neutral-50 px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
              Frequently asked
            </p>
            <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
              Home nursing, answered.
            </h2>
            <div className="mt-10">
              <FAQAccordion
                faqs={FAQ_ITEMS as unknown as { question: string; answer: string }[]}
                tone="default"
              />
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
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-careSerif text-[clamp(2rem,5.5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
              A qualified nurse, at home.
              <br />
              <em className="font-careSerif font-normal italic text-primary-500">In a single call.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              Share the prescription. We respond within the hour, match a verified nurse to your exact
              procedure, and begin care — with daily logs from day one.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={enquiryHref}
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

            {/* Interlink: nested services + hub */}
            <ul className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-2">
              {pillar.nested.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/care-services/${n.slug}`}
                    className="inline-flex items-center rounded-full border border-neutral-900/15 bg-white/70 px-4 py-2 text-xs font-semibold text-neutral-800 backdrop-blur transition hover:border-neutral-900/40 hover:bg-white hover:text-neutral-950"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/care-services"
                  className="inline-flex items-center rounded-full border border-neutral-900/15 bg-white/70 px-4 py-2 text-xs font-semibold text-neutral-800 backdrop-blur transition hover:border-neutral-900/40 hover:bg-white hover:text-neutral-950"
                >
                  All care services
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />

      {/* ─────────── JSON-LD ─────────── */}
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
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Home Nursing Care',
                item: `https://www.ezyhelpers.com${PATH}`,
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
            '@type': 'MedicalBusiness',
            name: 'EzyHelpers — Home Nursing Care, Bangalore',
            medicalSpecialty: 'Nursing',
            areaServed: { '@type': 'City', name: 'Bangalore' },
            url: `https://www.ezyhelpers.com${PATH}`,
            telephone: '+918031411776',
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
