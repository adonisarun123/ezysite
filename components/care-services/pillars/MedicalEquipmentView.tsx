'use client'

import type { ComponentType, SVGProps } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import {
  PhoneIcon,
  ArrowRightIcon,
  CheckIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon,
  MapPinIcon,
  HomeModernIcon,
  BeakerIcon,
  AdjustmentsHorizontalIcon,
  ClipboardDocumentCheckIcon,
  ArrowTrendingUpIcon,
  ChevronRightIcon,
  CurrencyRupeeIcon,
  CheckCircleIcon,
  StarIcon,
} from '@heroicons/react/24/outline'
import CareHeroQuickForm from '../CareHeroQuickForm'
import { getPillar } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'
import { trackCareCTAClick, trackCarePhoneClick } from '@/lib/analytics'

/**
 * Pillar page — Medical Equipment Rental & Buy (Bangalore).
 *
 * PRODUCT / RENTAL oriented (not caregiver oriented). Leans warm via accent-*
 * while keeping primary dominant. All colours use Tailwind tokens only.
 */

const PHONE_DISPLAY = '080-31411776'
const PHONE_HREF = 'tel:+918031411776'
const ENQUIRY_HREF = '/care-services/enquiry'
const PATH = '/care-services/medical-equipment-rental-bangalore'

const pillar = getPillar('medical-equipment-rental-bangalore')

/* Heroicon lookup so nested-card icons stay data-driven. */
const NESTED_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  HomeModernIcon,
  BeakerIcon,
  AdjustmentsHorizontalIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
}

/* ── Trust ribbon ── */
const TRUST_RIBBON: { icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; sub: string }[] = [
  { icon: TruckIcon, title: 'Delivered & installed', sub: 'Same-day across Bangalore' },
  { icon: SparklesIcon, title: 'Sanitised before delivery', sub: 'Hospital-grade cleaning' },
  { icon: WrenchScrewdriverIcon, title: 'Serviced & maintained', sub: 'Free breakdown support' },
  { icon: ClockIcon, title: '24/7 support', sub: 'Round-the-clock helpline' },
]

/* ── Rent vs Buy comparison ── */
const RENT_POINTS = [
  'Lower upfront cost — ideal for short recovery periods',
  'No long-term storage or resale headache afterwards',
  'Free servicing, breakdown replacement and pickup included',
  'Upgrade or swap models as the patient’s needs change',
  'Best for post-surgery, temporary or uncertain-duration use',
] as const

const BUY_POINTS = [
  'Most cost-effective for long-term or permanent needs',
  'Equipment is yours — available any time, no return date',
  'Brand-new and certified pre-owned options available',
  'Warranty plus optional annual maintenance contracts',
  'Best for chronic conditions and indefinite home-care setups',
] as const

/* ── How delivery & installation works ── */
const STEPS: { mark: string; title: string; body: string }[] = [
  {
    mark: '01',
    title: 'Tell us what you need',
    body: 'Call or enquire with the equipment, model and how long you need it. Our advisors confirm availability and the best rent-or-buy option for your situation.',
  },
  {
    mark: '02',
    title: 'Sanitised & dispatched',
    body: 'Your equipment is inspected, sanitised to hospital standards and dispatched — often the same day — to your address anywhere in Bangalore.',
  },
  {
    mark: '03',
    title: 'Installed & demonstrated',
    body: 'Our technician sets up the equipment at home, checks it works safely and shows the family exactly how to operate it with confidence.',
  },
  {
    mark: '04',
    title: 'Serviced till pickup',
    body: 'We handle maintenance, breakdown replacement and free pickup at the end of your rental. Buyers get warranty and optional service contracts.',
  },
]

/* ── Why choose us ── */
const WHY: { icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; body: string }[] = [
  {
    icon: SparklesIcon,
    title: 'Hospital-grade sanitisation',
    body: 'Every machine, bed and aid is deep-cleaned and disinfected before it reaches your home — the same hygiene standards a hospital would expect.',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Serviced, not just supplied',
    body: 'If anything stops working, we repair or replace it free during your rental. No scrambling for a technician when you need the equipment most.',
  },
  {
    icon: MapPinIcon,
    title: 'Delivery across 16+ localities',
    body: 'From Whitefield and Indiranagar to Jayanagar, HSR, Electronic City and beyond — fast doorstep delivery across Bangalore neighbourhoods.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Genuine, certified equipment',
    body: 'Only quality-checked, hospital-grade devices from trusted brands — no worn-out or uncertified machines, whether you rent or buy.',
  },
  {
    icon: CurrencyRupeeIcon,
    title: 'Transparent, fair pricing',
    body: 'Clear rental rates, refundable deposits and honest buy prices. No hidden charges, no inflated emergency surcharges.',
  },
  {
    icon: ClockIcon,
    title: 'Round-the-clock support',
    body: 'A 24/7 helpline for setup questions, breakdowns and urgent replacements — because medical needs don’t wait for office hours.',
  },
]

/* ── Illustrative testimonials (FLAGGED: invented examples for layout) ── */
const TESTIMONIALS: { quote: string; name: string; meta: string }[] = [
  {
    quote:
      'We needed a hospital bed and oxygen concentrator the same evening my father was discharged. Both arrived within hours, fully sanitised and set up before we even unpacked.',
    name: 'Priya R.',
    meta: 'Whitefield · Hospital bed + oxygen rental',
  },
  {
    quote:
      'The wheelchair we rented developed a wheel issue. One call and they swapped it the next morning at no cost. That kind of service is rare.',
    name: 'Mohan K.',
    meta: 'Jayanagar · Wheelchair rental',
  },
  {
    quote:
      'They helped us decide to buy a BiPAP machine instead of renting since it was long-term. Honest advice saved us money over the year.',
    name: 'Anitha S.',
    meta: 'HSR Layout · BiPAP purchase',
  },
]

const FAQS = [
  {
    question: 'Do I need to pay a deposit to rent medical equipment in Bangalore?',
    answer:
      'Yes, most rentals carry a refundable security deposit that depends on the equipment value — for example, beds and concentrators carry a higher deposit than walkers or commodes. The deposit is fully refunded when you return the equipment in working condition at the end of your rental.',
  },
  {
    question: 'How fast can you deliver equipment to my home?',
    answer:
      'For most items we offer same-day delivery across Bangalore, and urgent hospital-discharge cases are often delivered within a few hours. Delivery, installation and a usage demonstration are included so the family can operate the equipment safely from day one.',
  },
  {
    question: 'Is the equipment sanitised and serviced before delivery?',
    answer:
      'Always. Every piece of equipment is inspected and disinfected to hospital-grade hygiene standards before dispatch. During the rental period we also handle maintenance, and if anything malfunctions we repair or replace it free of charge.',
  },
  {
    question: 'Can I buy the equipment instead of renting it?',
    answer:
      'Yes. We offer both rental and purchase across our full range. Renting suits short-term or uncertain-duration needs, while buying is more economical for long-term or permanent use. Our advisors will recommend the option that costs you less for your specific situation.',
  },
  {
    question: 'What happens if the equipment breaks down during my rental?',
    answer:
      'Call our 24/7 helpline and we will repair or replace the unit at no extra cost, usually the same or next day. Free breakdown support and replacement are included in every rental so your loved one is never left without working equipment.',
  },
  {
    question: 'Which areas of Bangalore do you deliver to?',
    answer:
      'We deliver and install across 16+ Bangalore localities including Whitefield, Indiranagar, Koramangala, HSR Layout, Jayanagar, JP Nagar, Marathahalli, Electronic City, Bannerghatta Road, Hebbal, Yelahanka and more. Call us to confirm delivery to your specific area.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Medical Equipment Rental & Purchase, Bangalore',
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
      { '@type': 'ListItem', position: 3, name: pillar.label, item: `https://www.ezyhelpers.com${PATH}` },
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

export default function MedicalEquipmentView() {
  const enquiryHref = `${ENQUIRY_HREF}?source=${encodeURIComponent(PATH)}`

  return (
    <div className="min-h-screen bg-white font-careUi text-neutral-900 antialiased">
      <Navbar />

      {/* ─────────────────── Hero ─────────────────── */}
      <header className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-50 via-white to-care-50"
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
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
                <span className="font-medium text-neutral-900">{pillar.label}</span>
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700 shadow-sm">
                <TruckIcon className="h-3.5 w-3.5 text-accent-500" aria-hidden />
                Rent or buy · Bangalore-wide
              </p>
              <h1 className="mt-6 font-careSerif text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.05] tracking-[-0.03em] text-neutral-950">
                {pillar.title.replace(' in Bangalore', '')}{' '}
                <em className="font-careSerif font-normal italic text-accent-600">in Bangalore</em>
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-neutral-600 sm:text-xl">
                {pillar.tagline} Rent or buy hospital beds, oxygen concentrators, wheelchairs,
                monitors and respiratory machines — sanitised, set up and serviced at home.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={enquiryHref}
                  onClick={() => trackCareCTAClick('Get equipment today', `${PATH}#hero`)}
                  className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-accent-600 px-7 py-4 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition hover:bg-accent-700 active:scale-[0.98]"
                >
                  Get equipment today
                  <ArrowRightIcon className="h-4 w-4" aria-hidden />
                </Link>
                <a
                  href={PHONE_HREF}
                  onClick={() => trackCarePhoneClick(PHONE_DISPLAY, `${PATH}#hero`)}
                  className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-4 text-[15px] font-semibold text-neutral-900 shadow-sm transition hover:border-neutral-900 hover:bg-neutral-50"
                >
                  <PhoneIcon className="h-4 w-4" aria-hidden />
                  Call for availability
                </a>
              </div>

              <p className="mt-5 text-sm font-semibold text-accent-700">
                {formatPriceWithNote(pillar.priceKey)} · refundable deposit · free pickup
              </p>
            </div>

            {/* Hero side card */}
            <div className="lg:col-span-5">
              <div className="rounded-[28px] border border-accent-200 bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                  Included with every order
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    'Same-day doorstep delivery',
                    'Home installation & demo',
                    'Hospital-grade sanitisation',
                    'Free servicing & breakdown cover',
                    '24/7 support helpline',
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-neutral-800 sm:text-base">
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* In-hero quick lead form */}
            <div className="mx-auto mt-10 flex w-full max-w-md justify-center">
              <CareHeroQuickForm enquirySource={PATH} />
            </div>
          </div>
        </div>
      </header>

      {/* ─────────────────── Trust ribbon ─────────────────── */}
      <section aria-label="Why families trust our medical equipment service" className="border-y border-neutral-200 bg-neutral-900 px-4 py-10 text-white sm:px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {TRUST_RIBBON.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300 ring-1 ring-accent-400/30">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-bold leading-tight text-white">{title}</p>
                <p className="mt-0.5 text-xs text-white/65">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <main>
        {/* ─────────────────── Intro ─────────────────── */}
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              Equipment, made effortless
            </p>
            <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.08] tracking-[-0.025em] text-neutral-950">
              Hospital-grade equipment,{' '}
              <span className="text-neutral-400">without the hospital.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              When a loved one comes home from hospital, the last thing a family should worry about is
              sourcing equipment. EzyHelpers delivers, installs, sanitises and services the full range of
              home medical equipment across Bangalore — so you can focus on recovery, not logistics.
              Choose rental for short-term needs or purchase for the long term.
            </p>
          </div>
        </section>

        {/* ─────────────────── Equipment categories grid ─────────────────── */}
        <section id="equipment" className="scroll-mt-28 bg-accent-50 px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                What you can rent or buy
              </p>
              <h2 className="mt-3 font-careSerif text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-tight tracking-tight text-neutral-950">
                Six categories of{' '}
                <em className="font-careSerif font-normal italic text-accent-600">home medical equipment.</em>
              </h2>
              <p className="mt-4 text-base text-neutral-600 sm:text-lg">
                Tap any category for models, specs, pricing and how delivery and setup work.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pillar.nested.map((n) => {
                const Icon = NESTED_ICONS[n.icon] ?? HomeModernIcon
                return (
                  <Link
                    key={n.slug}
                    href={`/care-services/${n.slug}`}
                    className="group flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] outline-none transition hover:-translate-y-1 hover:border-accent-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 ring-1 ring-accent-200">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-careSerif text-xl font-bold tracking-tight text-neutral-950">
                      {n.label}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{n.tagline}</p>
                    <p className="mt-4 text-sm font-semibold text-accent-700">
                      {formatPriceWithNote(n.priceKey)}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 transition group-hover:text-accent-700">
                      View details
                      <ChevronRightIcon className="h-4 w-4" aria-hidden />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─────────────────── Rent vs Buy ─────────────────── */}
        <section id="rent-vs-buy" className="scroll-mt-28 bg-white px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                Should you rent or buy?
              </p>
              <h2 className="mt-3 font-careSerif text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-tight tracking-tight text-neutral-950">
                Rent for now, <span className="text-neutral-400">or buy for the long run.</span>
              </h2>
              <p className="mt-4 text-base text-neutral-600 sm:text-lg">
                There’s no single right answer — it depends on how long you need the equipment. Here’s the
                honest breakdown our advisors use.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {/* Rent */}
              <article className="flex flex-col rounded-[28px] border border-accent-200 bg-accent-50 p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-accent-600 ring-1 ring-accent-200">
                    <TruckIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-careSerif text-2xl font-bold text-neutral-950">Rent it</h3>
                    <p className="text-sm font-semibold text-accent-700">Short-term & flexible</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {RENT_POINTS.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-neutral-800 sm:text-base">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden />
                      <span className="leading-snug">{p}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Buy */}
              <article className="flex flex-col rounded-[28px] border border-care-200 bg-care-50 p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-care-600 ring-1 ring-care-200">
                    <ShieldCheckIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-careSerif text-2xl font-bold text-neutral-950">Buy it</h3>
                    <p className="text-sm font-semibold text-care-600">Long-term & permanent</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {BUY_POINTS.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-neutral-800 sm:text-base">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-care-500" aria-hidden />
                      <span className="leading-snug">{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-neutral-500">
              Not sure which is cheaper for your situation? Call us — we’ll do the maths with you and
              recommend whichever costs less.
            </p>
          </div>
        </section>

        {/* ─────────────────── How it works ─────────────────── */}
        <section id="how-it-works" className="scroll-mt-28 bg-care-50 px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-600">
              Delivery & installation
            </p>
            <h2 className="mt-3 max-w-3xl font-careSerif text-[clamp(1.75rem,4vw,2.65rem)] font-medium leading-tight tracking-tight text-neutral-950">
              From your call to a fully set-up home — in four steps.
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <div
                  key={s.mark}
                  className="flex flex-col rounded-3xl border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
                >
                  <span className="font-careSerif text-3xl font-medium text-care-500">{s.mark}</span>
                  <h3 className="mt-3 font-careSerif text-lg font-bold tracking-tight text-neutral-950">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────── Why choose us ─────────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                Why families choose EzyHelpers
              </p>
              <h2 className="mt-3 font-careSerif text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-tight tracking-tight text-neutral-950">
                Equipment you can <em className="font-careSerif font-normal italic text-accent-600">trust</em>,
                service you can rely on.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:border-accent-300 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-accent-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-careSerif text-lg font-bold tracking-tight text-neutral-950">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────── Testimonials (illustrative) ─────────────────── */}
        <section className="bg-accent-50 px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                What families say
              </p>
              <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-neutral-400 ring-1 ring-neutral-200">
                Illustrative
              </span>
            </div>
            <h2 className="mt-3 max-w-2xl font-careSerif text-[clamp(1.75rem,4vw,2.5rem)] font-medium leading-tight tracking-tight text-neutral-950">
              Delivered fast, set up right.
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex gap-0.5 text-accent-500" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 fill-current" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-neutral-700">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-neutral-100 pt-4">
                    <p className="text-sm font-bold text-neutral-900">{t.name}</p>
                    <p className="mt-0.5 text-xs text-neutral-500">{t.meta}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────── FAQ ─────────────────── */}
        <section id="faq" className="bg-white px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">Questions</p>
            <h2 className="mt-3 font-careSerif text-[clamp(1.75rem,4vw,2.5rem)] font-medium tracking-tight text-neutral-950">
              Renting & buying, <span className="text-neutral-400">answered.</span>
            </h2>
            <div className="mt-10">
              <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
            </div>
          </div>
        </section>

        {/* ─────────────────── Closing CTA ─────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-accent-100 via-accent-50 to-care-50 px-4 py-24 sm:px-6 sm:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-accent-300/30 blur-3xl"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700 ring-1 ring-accent-200">
              <TruckIcon className="h-3.5 w-3.5" aria-hidden />
              Same-day delivery available
            </span>
            <h2 className="mt-6 font-careSerif text-[clamp(2rem,5.5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
              Need equipment today?{' '}
              <em className="font-careSerif font-normal italic text-accent-600">We can deliver it today.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              Tell us the equipment and how long you need it. We’ll confirm availability, recommend rent or
              buy, and have it sanitised, delivered and installed at your Bangalore home.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={enquiryHref}
                onClick={() => trackCareCTAClick('Get equipment today', `${PATH}#footer-cta`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-accent-600 px-8 py-4 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition hover:bg-accent-700 active:scale-[0.98]"
              >
                Get equipment today
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={PHONE_HREF}
                onClick={() => trackCarePhoneClick(PHONE_DISPLAY, `${PATH}#footer-cta`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-neutral-900/20 bg-white px-8 py-4 text-[15px] font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50"
              >
                <PhoneIcon className="h-4 w-4" aria-hidden />
                Call for availability · {PHONE_DISPLAY}
              </a>
            </div>

            <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-2">
              {pillar.nested.slice(0, 4).map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/care-services/${n.slug}`}
                    className="inline-flex items-center gap-1 rounded-full border border-neutral-900/15 bg-white/80 px-4 py-2 text-xs font-semibold text-neutral-800 backdrop-blur transition hover:border-neutral-900/40 hover:bg-white"
                  >
                    {n.label}
                    <ChevronRightIcon className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/care-services"
                  className="inline-flex items-center gap-1 rounded-full border border-neutral-900/15 bg-white/80 px-4 py-2 text-xs font-semibold text-neutral-800 backdrop-blur transition hover:border-neutral-900/40 hover:bg-white"
                >
                  All care services
                  <ChevronRightIcon className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </li>
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
