import {
  CheckIcon,
  HomeModernIcon,
  UserGroupIcon,
  TruckIcon,
  SparklesIcon,
  CurrencyRupeeIcon,
} from '@heroicons/react/24/outline'
import type { ComponentType, SVGProps } from 'react'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'hospital-bed-rental-bangalore'
const PATH = `/care-services/${SLUG}`
const nested = getNestedService(SLUG)!

const HERO_STATS: { num: string; label: string }[] = [
  { num: 'Same-day', label: 'Delivery & installation across Bangalore' },
  { num: '2 types', label: 'Manual & fully electric ICU-grade beds' },
  { num: '24/7', label: 'Breakdown support & free servicing' },
]

const SECTIONS: {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  body: string
  bullets: string[]
}[] = [
  {
    icon: HomeModernIcon,
    title: 'Types & models available',
    body: 'We stock hospital beds for every level of need, from basic recovery to ICU-grade care.',
    bullets: [
      'Manual (2-function / 3-function) beds with crank adjustment',
      'Fully electric beds with remote height, head and knee control',
      'ICU-grade beds with backrest, leg-rest and Trendelenburg positions',
      'Side rails, IV pole and a medical mattress included',
    ],
  },
  {
    icon: UserGroupIcon,
    title: 'Who needs a hospital bed',
    body: 'A height-adjustable, position-adjustable bed prevents complications and protects caregivers’ backs.',
    bullets: [
      'Bedridden, post-surgery or post-stroke patients',
      'Seniors at risk of bedsores who need regular repositioning',
      'Patients needing elevated sitting for feeding or breathing',
      'Home-ICU and palliative-care setups',
    ],
  },
  {
    icon: CurrencyRupeeIcon,
    title: 'Rent vs buy',
    body: 'Renting suits short recoveries; buying makes sense for long-term or permanent bedridden care.',
    bullets: [
      'Rent for post-surgical or temporary recovery periods',
      'Buy (new or certified pre-owned) for chronic, long-term needs',
      'Refundable security deposit on all rentals',
      'Free pickup when your rental ends',
    ],
  },
  {
    icon: TruckIcon,
    title: 'Delivery & setup',
    body: 'Our technicians deliver, assemble and demonstrate the bed safely at your home.',
    bullets: [
      'Same-day delivery for urgent hospital discharges',
      'In-home assembly and safety check',
      'Family shown how to operate controls and rails',
      'Delivery across 16+ Bangalore localities',
    ],
  },
  {
    icon: SparklesIcon,
    title: 'Hygiene & servicing',
    body: 'Every bed is sanitised before delivery and maintained throughout your rental.',
    bullets: [
      'Hospital-grade sanitisation before dispatch',
      'Free repair or replacement if anything malfunctions',
      'Periodic maintenance checks during long rentals',
      'Fresh, disinfected mattress with every bed',
    ],
  },
]

const FAQS = [
  {
    question: 'What is the deposit for renting a hospital bed in Bangalore?',
    answer:
      'Hospital bed rentals carry a refundable security deposit based on whether the bed is manual or electric. The full deposit is returned when the bed is collected in good working condition at the end of your rental.',
  },
  {
    question: 'How quickly can a hospital bed be delivered?',
    answer:
      'We offer same-day delivery and installation across Bangalore, and we prioritise urgent hospital-discharge cases so the bed is ready before the patient reaches home.',
  },
  {
    question: 'What is the difference between a manual and electric hospital bed?',
    answer:
      'A manual bed uses cranks to adjust the height and backrest, while an electric bed adjusts at the touch of a remote, easier for the patient and caregiver, and better for frequent repositioning. ICU-grade electric beds add advanced positions like Trendelenburg.',
  },
  {
    question: 'Is the bed sanitised and serviced?',
    answer:
      'Yes. Every bed and mattress is sanitised to hospital-grade standards before delivery, and we provide free servicing and breakdown replacement throughout the rental period.',
  },
  {
    question: 'Can I buy a hospital bed instead of renting?',
    answer:
      'Absolutely. We offer both new and certified pre-owned hospital beds for purchase, which is more economical for long-term or permanent bedridden care. Our advisors will help you compare rent versus buy for your situation.',
  },
  {
    question: 'Does the rental include a mattress and side rails?',
    answer:
      'Yes. A disinfected medical mattress and side rails are included with every hospital bed rental, along with an IV pole where required.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Hospital Bed Rental, Bangalore, EzyHelpers',
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

export default function HospitalBedRentalView() {
  return (
    <CareSubpageShell
      currentLabel={nested.label}
      eyebrow="Bangalore · Medical equipment rental"
      headlineLead="Hospital bed rental,"
      headlineAccent="delivered and installed today."
      lede={nested.description}
      primaryCtaLabel="Get a hospital bed today"
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
    >
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {HERO_STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-[24px] border border-accent-200 bg-accent-50 p-7 text-center"
            >
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
            titleMuted="to renting a hospital bed."
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
                <h3 className="font-careSerif text-xl font-bold tracking-tight text-neutral-950">
                  {title}
                </h3>
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
          <SectionHeader eyebrow="Frequently asked" titleLead="Hospital bed rental, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="A bed at home,"
        headlineAccent="before the patient arrives."
        body="Tell us the type of bed and how long you need it. We sanitise, deliver and install across Bangalore, often the same day."
        enquirySource={PATH}
        primaryCtaLabel="Get a hospital bed today"
        related={[
          { label: 'Oxygen Concentrator Rental', href: '/care-services/oxygen-concentrator-rental-bangalore' },
          { label: 'Patient Monitor Rental', href: '/care-services/patient-monitor-rental-bangalore' },
          { label: 'Mobility Aids Rental', href: '/care-services/mobility-aids-rental-bangalore' },
          { label: 'All medical equipment', href: '/care-services/medical-equipment-rental-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
