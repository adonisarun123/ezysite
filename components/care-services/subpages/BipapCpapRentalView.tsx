import {
  CheckIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  TruckIcon,
  SparklesIcon,
  CurrencyRupeeIcon,
} from '@heroicons/react/24/outline'
import type { ComponentType, SVGProps } from 'react'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'bipap-cpap-rental-bangalore'
const PATH = `/care-services/${SLUG}`
const nested = getNestedService(SLUG)!

const HERO_STATS: { num: string; label: string }[] = [
  { num: 'BiPAP & CPAP', label: 'Both respiratory support devices available' },
  { num: 'Masks + setup', label: 'Mask, humidifier and home installation' },
  { num: 'Same-day', label: 'Delivery and training across Bangalore' },
]

const SECTIONS: {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  body: string
  bullets: string[]
}[] = [
  {
    icon: ShieldCheckIcon,
    title: 'Types & models available',
    body: 'We rent and sell both CPAP and BiPAP machines, fitted with the right mask for the patient.',
    bullets: [
      'CPAP machines for obstructive sleep apnoea',
      'BiPAP machines for COPD and respiratory failure',
      'Auto-titrating (APAP) options on request',
      'Includes mask, humidifier and tubing',
    ],
  },
  {
    icon: UserGroupIcon,
    title: 'Who needs BiPAP / CPAP',
    body: 'These machines support breathing for sleep apnoea, COPD and respiratory-weakness patients.',
    bullets: [
      'Diagnosed obstructive sleep apnoea (CPAP)',
      'COPD and chronic respiratory failure (BiPAP)',
      'Post-hospital respiratory support',
      'Neuromuscular conditions affecting breathing',
    ],
  },
  {
    icon: CurrencyRupeeIcon,
    title: 'Rent vs buy',
    body: 'Rent to trial therapy or for short-term needs; buy for confirmed long-term use.',
    bullets: [
      'Rent to trial a machine before committing',
      'Buy (new or certified pre-owned) for long-term therapy',
      'Refundable security deposit on rentals',
      'Free pickup when the rental ends',
    ],
  },
  {
    icon: TruckIcon,
    title: 'Delivery & setup',
    body: 'We deliver, set the prescribed pressure and fit the mask so therapy works from night one.',
    bullets: [
      'Same-day delivery across Bangalore',
      'Pressure set to the doctor’s prescription',
      'Mask fitted for comfort and a proper seal',
      'Family trained on cleaning and use',
    ],
  },
  {
    icon: SparklesIcon,
    title: 'Hygiene & servicing',
    body: 'Machines are sanitised and fitted with a fresh mask before delivery, and serviced throughout.',
    bullets: [
      'Hospital-grade sanitisation before dispatch',
      'New / disinfected mask and tubing supplied',
      'Filters checked and replaced as needed',
      'Free repair or replacement on breakdown',
    ],
  },
]

const FAQS = [
  {
    question: 'What deposit is needed to rent a BiPAP or CPAP machine in Bangalore?',
    answer:
      'A refundable security deposit applies, set according to the machine type and value. It is returned in full when the device is collected in working condition at the end of the rental.',
  },
  {
    question: 'How quickly can a BiPAP / CPAP machine be delivered?',
    answer:
      'We offer same-day delivery, pressure setup and mask fitting across Bangalore, including urgent post-discharge respiratory cases.',
  },
  {
    question: 'What is the difference between CPAP and BiPAP?',
    answer:
      'A CPAP machine delivers a single continuous pressure and is mainly used for obstructive sleep apnoea. A BiPAP delivers two pressures, higher on inhale, lower on exhale, and is used for COPD and respiratory failure. Share your prescription and we will supply the right one.',
  },
  {
    question: 'Is the machine and mask sanitised and serviced?',
    answer:
      'Yes. Each machine is sanitised to hospital-grade standards, supplied with a new or disinfected mask and tubing, and serviced throughout the rental with free breakdown replacement.',
  },
  {
    question: 'Can I buy a BiPAP / CPAP machine instead of renting?',
    answer:
      'Yes. We offer new and certified pre-owned machines for purchase, which is more economical for confirmed long-term therapy. We can also let you trial via rental first.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'BiPAP & CPAP Machine Rental, Bangalore, EzyHelpers',
    name: 'BiPAP & CPAP Machine Rental, Bangalore, EzyHelpers',
    ...(nested.description ? { description: nested.description } : {}),
    provider: {
      '@type': 'LocalBusiness',
      name: 'EzyHelpers',
      url: 'https://www.ezyhelpers.com/',
      telephone: '+918031411776',
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
    areaServed: { '@type': 'City', name: 'Bangalore' },
    url: `https://www.ezyhelpers.com${PATH}`,
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

export default function BipapCpapRentalView() {
  return (
    <CareSubpageShell
      currentLabel={nested.label}
      eyebrow="Bangalore · Medical equipment rental"
      headlineLead="BiPAP & CPAP rental,"
      headlineAccent="fitted and ready tonight."
      lede={nested.description}
      primaryCtaLabel="Get a BiPAP / CPAP today"
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
            titleMuted="to BiPAP & CPAP rental."
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
          <SectionHeader eyebrow="Frequently asked" titleLead="BiPAP & CPAP rental, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Easier breathing,"
        headlineAccent="starting tonight."
        body="Share your prescription. We sanitise, deliver, set the pressure and fit the mask the same day across Bangalore."
        enquirySource={PATH}
        primaryCtaLabel="Get a BiPAP / CPAP today"
        related={[
          { label: 'Respiratory & COPD Care', href: '/care-services/respiratory-copd-care-at-home-bangalore' },
          { label: 'Oxygen Concentrator Rental', href: '/care-services/oxygen-concentrator-rental-bangalore' },
          { label: 'Patient Monitor Rental', href: '/care-services/patient-monitor-rental-bangalore' },
          { label: 'Hospital Bed Rental', href: '/care-services/hospital-bed-rental-bangalore' },
          { label: 'All medical equipment', href: '/care-services/medical-equipment-rental-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
