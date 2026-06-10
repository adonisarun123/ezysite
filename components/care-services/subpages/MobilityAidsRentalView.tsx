import {
  CheckIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  TruckIcon,
  SparklesIcon,
  CurrencyRupeeIcon,
} from '@heroicons/react/24/outline'
import type { ComponentType, SVGProps } from 'react'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'mobility-aids-rental-bangalore'
const PATH = `/care-services/${SLUG}`
const nested = getNestedService(SLUG)!

const HERO_STATS: { num: string; label: string }[] = [
  { num: 'Wide range', label: 'Walkers, commodes, air mattresses & more' },
  { num: 'Same-day', label: 'Doorstep delivery across Bangalore' },
  { num: 'Low deposit', label: 'Affordable, fully refundable security' },
]

const SECTIONS: {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  body: string
  bullets: string[]
}[] = [
  {
    icon: ArrowTrendingUpIcon,
    title: 'Aids & equipment available',
    body: 'A complete range of daily-living and mobility aids to make home care safer and easier.',
    bullets: [
      'Walkers, rollators and walking sticks',
      'Commode chairs and bedside commodes',
      'Anti-bedsore air mattresses with pumps',
      'Suction machines, nebulisers and bedpans',
    ],
  },
  {
    icon: UserGroupIcon,
    title: 'Who needs mobility aids',
    body: 'The right aid restores independence, prevents falls and protects against bedsores.',
    bullets: [
      'Seniors with reduced balance or strength',
      'Post-surgery and post-fracture recovery',
      'Bedridden patients (air mattress, commode)',
      'Patients needing respiratory aids (suction, nebuliser)',
    ],
  },
  {
    icon: CurrencyRupeeIcon,
    title: 'Rent vs buy',
    body: 'Rent for short recoveries; buy small aids you’ll use long-term.',
    bullets: [
      'Rent air mattresses and commodes for recovery periods',
      'Buy walkers and sticks for ongoing daily use',
      'Low refundable deposit on rentals',
      'Free pickup when the rental ends',
    ],
  },
  {
    icon: TruckIcon,
    title: 'Delivery & setup',
    body: 'We deliver, assemble and demonstrate each aid so it’s used safely from day one.',
    bullets: [
      'Same-day doorstep delivery',
      'Air-mattress pump set up and tested',
      'Walker height adjusted to the patient',
      'Delivery across 16+ Bangalore localities',
    ],
  },
  {
    icon: SparklesIcon,
    title: 'Hygiene & servicing',
    body: 'Every aid is sanitised before delivery and maintained throughout the rental.',
    bullets: [
      'Hospital-grade sanitisation before dispatch',
      'Air-mattress motors and aids function-checked',
      'Free repair or replacement on breakdown',
      'Clean, disinfected surfaces and fittings',
    ],
  },
]

const FAQS = [
  {
    question: 'What deposit is needed to rent mobility aids in Bangalore?',
    answer:
      'Most mobility aids carry a low, fully refundable security deposit that varies by item — for example, an air mattress carries a higher deposit than a walker. It is returned when the aid is collected in working condition.',
  },
  {
    question: 'How quickly can mobility aids be delivered?',
    answer:
      'We offer same-day doorstep delivery across Bangalore, including for urgent hospital-discharge cases.',
  },
  {
    question: 'Do you provide anti-bedsore air mattresses?',
    answer:
      'Yes. We rent and sell alternating-pressure air mattresses with pumps, which help prevent and manage pressure sores in bedridden patients. We set up and test the pump at delivery.',
  },
  {
    question: 'Are the aids sanitised and serviced?',
    answer:
      'Yes. Every aid is sanitised to hospital-grade standards and function-checked before delivery, and we provide free repair or replacement during the rental.',
  },
  {
    question: 'Can I buy mobility aids instead of renting?',
    answer:
      'Yes. We offer new and certified pre-owned aids for purchase. Buying is usually more economical for small aids like walkers and sticks that you will use long-term.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Mobility Aids Rental, Bangalore — EzyHelpers',
    description: nested.description,
    brand: { '@type': 'Brand', name: 'EzyHelpers' },
    areaServed: { '@type': 'City', name: 'Bangalore' },
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

export default function MobilityAidsRentalView() {
  return (
    <CareSubpageShell
      currentLabel={nested.label}
      eyebrow="Bangalore · Medical equipment rental"
      headlineLead="Mobility aids on rent,"
      headlineAccent="for safer days at home."
      lede={nested.description}
      primaryCtaLabel="Get mobility aids today"
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
    >
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="rounded-[24px] border border-accent-200 bg-accent-50 p-7 text-center">
              <p className="font-careSerif text-3xl font-medium text-accent-600">{s.num}</p>
              <p className="mt-2 text-sm leading-snug text-neutral-700">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 pb-8 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Everything you need to know"
            titleLead="The complete guide"
            titleMuted="to mobility aids rental."
          />
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl space-y-5">
          {SECTIONS.map(({ icon: Icon, title, body, bullets }) => (
            <article
              key={title}
              className="rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-accent-200">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-careSerif text-xl font-bold tracking-tight text-neutral-950">{title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">{body}</p>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden />
                    <span className="leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Mobility aids rental, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="The right aid,"
        headlineAccent="delivered the same day."
        body="Tell us what the patient needs — walker, commode, air mattress or more. We sanitise, deliver and set it up across Bangalore."
        enquirySource={PATH}
        primaryCtaLabel="Get mobility aids today"
        related={[
          { label: 'Wheelchair Rental', href: '/care-services/wheelchair-rental-bangalore' },
          { label: 'Hospital Bed Rental', href: '/care-services/hospital-bed-rental-bangalore' },
          { label: 'All medical equipment', href: '/care-services/medical-equipment-rental-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
