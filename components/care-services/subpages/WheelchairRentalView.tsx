import {
  CheckIcon,
  AdjustmentsHorizontalIcon,
  UserGroupIcon,
  TruckIcon,
  SparklesIcon,
  CurrencyRupeeIcon,
} from '@heroicons/react/24/outline'
import type { ComponentType, SVGProps } from 'react'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'wheelchair-rental-bangalore'
const PATH = `/care-services/${SLUG}`
const nested = getNestedService(SLUG)!

const HERO_STATS: { num: string; label: string }[] = [
  { num: '4 types', label: 'Standard, commode, reclining & lightweight' },
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
    icon: AdjustmentsHorizontalIcon,
    title: 'Types & models available',
    body: 'From everyday mobility to specialised needs, we have the right wheelchair for the patient.',
    bullets: [
      'Standard folding wheelchairs for daily use',
      'Commode wheelchairs for toilet assistance',
      'Reclining / high-back wheelchairs for limited sitting tolerance',
      'Lightweight and transit wheelchairs for easy handling',
    ],
  },
  {
    icon: UserGroupIcon,
    title: 'Who needs a wheelchair',
    body: 'A well-matched wheelchair restores independence and makes caregiving far easier.',
    bullets: [
      'Post-surgery and post-fracture recovery',
      'Seniors with reduced mobility or balance',
      'Stroke, paralysis and neurological conditions',
      'Patients who cannot sit upright for long (reclining models)',
    ],
  },
  {
    icon: CurrencyRupeeIcon,
    title: 'Rent vs buy',
    body: 'Rent for temporary recovery; buy for ongoing or permanent mobility needs.',
    bullets: [
      'Rent for short-term post-operative recovery',
      'Buy (new or certified pre-owned) for long-term use',
      'Low refundable deposit on rentals',
      'Free pickup when the rental ends',
    ],
  },
  {
    icon: TruckIcon,
    title: 'Delivery & setup',
    body: 'We deliver, adjust and demonstrate the wheelchair so it’s safe and comfortable from day one.',
    bullets: [
      'Same-day doorstep delivery',
      'Footrest and armrest adjusted to the patient',
      'Family shown safe transfer and braking',
      'Delivery across 16+ Bangalore localities',
    ],
  },
  {
    icon: SparklesIcon,
    title: 'Hygiene & servicing',
    body: 'Each wheelchair is sanitised before delivery and maintained throughout the rental.',
    bullets: [
      'Hospital-grade sanitisation before dispatch',
      'Brakes, wheels and seat checked before delivery',
      'Free repair or replacement on breakdown',
      'Clean, disinfected seat and cushioning',
    ],
  },
]

const FAQS = [
  {
    question: 'What deposit is needed to rent a wheelchair in Bangalore?',
    answer:
      'Wheelchairs carry a low, fully refundable security deposit that varies slightly by model. It is returned when the wheelchair is collected in working condition at the end of the rental.',
  },
  {
    question: 'How quickly can a wheelchair be delivered?',
    answer:
      'We offer same-day doorstep delivery across Bangalore, including for urgent hospital-discharge cases.',
  },
  {
    question: 'Which type of wheelchair should I choose?',
    answer:
      'A standard folding wheelchair suits everyday mobility, a commode wheelchair helps with toileting, and a reclining wheelchair is best for patients who cannot sit upright for long. Tell us the patient’s condition and we will recommend the right one.',
  },
  {
    question: 'Is the wheelchair sanitised and serviced?',
    answer:
      'Yes. Every wheelchair is sanitised to hospital-grade standards and its brakes and wheels checked before delivery. Free repair or replacement is included during the rental.',
  },
  {
    question: 'Can I buy a wheelchair instead of renting?',
    answer:
      'Yes. We offer new and certified pre-owned wheelchairs for purchase, which is more economical for long-term or permanent mobility needs.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Wheelchair Rental, Bangalore — EzyHelpers',
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

export default function WheelchairRentalView() {
  return (
    <CareSubpageShell
      currentLabel={nested.label}
      eyebrow="Bangalore · Medical equipment rental"
      headlineLead="Wheelchair rental,"
      headlineAccent="delivered to your door."
      lede={nested.description}
      primaryCtaLabel="Get a wheelchair today"
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
            titleMuted="to wheelchair rental."
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
          <SectionHeader eyebrow="Frequently asked" titleLead="Wheelchair rental, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Mobility back,"
        headlineAccent="independence restored."
        body="Tell us the patient’s needs and we’ll recommend the right wheelchair — sanitised, adjusted and delivered the same day across Bangalore."
        enquirySource={PATH}
        primaryCtaLabel="Get a wheelchair today"
        related={[
          { label: 'Mobility Aids Rental', href: '/care-services/mobility-aids-rental-bangalore' },
          { label: 'Hospital Bed Rental', href: '/care-services/hospital-bed-rental-bangalore' },
          { label: 'All medical equipment', href: '/care-services/medical-equipment-rental-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
