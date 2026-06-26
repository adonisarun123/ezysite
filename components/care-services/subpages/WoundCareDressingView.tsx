import Link from 'next/link'
import {
  CheckIcon,
  ShieldCheckIcon,
  ClockIcon,
  SparklesIcon,
  PlusCircleIcon,
  HeartIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

const SLUG = 'wound-care-dressing-at-home-bangalore'
const PATH = `/care-services/${SLUG}`
const service = getNestedService(SLUG)!

/* heroStats, INVENTED illustrative figures for layout/AEO. Confirm before launch. */
const HERO_STATS = [
  { value: '7,000+', label: 'Dressings done at home' },
  { value: '< 24 hr', label: 'Typical first-visit window' },
  { value: 'Sterile', label: 'Single-use kit, every visit' },
] as const

const WOUND_TYPES = [
  {
    icon: PlusCircleIcon,
    title: 'Diabetic foot wounds & ulcers',
    body:
      'Diabetic wounds heal slowly and infect easily. Our nurses use sterile dressing, monitor for early infection signs, and follow the wound-care plan your doctor or podiatrist has set, a discipline that keeps small wounds from becoming hospital admissions.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Bedsores & pressure ulcers',
    body:
      'Pressure injuries in bedridden patients need staged, sterile dressing plus repositioning advice. We dress the wound correctly and flag deterioration early, working alongside any attendant managing the patient’s position.',
  },
  {
    icon: SparklesIcon,
    title: 'Post-surgical & incision wounds',
    body:
      'After surgery, the incision is the most common point of complication. Regular professional dressing, suture-line checks and clean technique support the smooth healing your surgeon intended.',
  },
  {
    icon: HeartIcon,
    title: 'Ostomy & drain-site care',
    body:
      'Colostomy, ileostomy and surgical drain sites need careful, hygienic management. Our nurses handle pouch changes, skin protection and stoma observation with dignity and discretion at home.',
  },
] as const

const INCLUDED = [
  'Assessment of wound size, stage and healing progress at every visit',
  'Sterile cleaning and dressing with single-use, sealed kits',
  'Early detection of infection, redness, discharge, odour, fever',
  'Dressing schedule aligned to your doctor’s wound-care plan',
  'Clear advice on nutrition, hygiene and what to watch between visits',
  'Daily clinical log of wound status, shared with your doctor on request',
] as const

const WHY = [
  'Wrong dressing technique is a leading cause of avoidable wound infection, sterile technique matters.',
  'Professional dressing at home avoids repeated, painful trips to a clinic for elderly or bedridden patients.',
  'Early infection detection at the bedside is what keeps a manageable wound from becoming a hospital stay.',
  'A documented healing record helps your treating doctor adjust the plan without guesswork.',
] as const

const FAQS = [
  {
    question: 'What types of wounds can be dressed at home in Bangalore?',
    answer:
      'Our home nurses manage diabetic foot wounds and ulcers, bedsores and pressure ulcers, post-surgical incisions, ostomy and drain sites, and most chronic non-healing wounds. For very complex or deep wounds, we coordinate with your treating doctor and will tell you honestly if a clinic visit is safer.',
  },
  {
    question: 'How much does wound dressing at home cost in Bangalore?',
    answer:
      `Wound care and dressing at home in Bangalore starts at ${formatPriceWithNote('wound-care').toLowerCase()}. The exact cost depends on the wound type, dressing materials and how often visits are needed, a quick consultation gives you a precise estimate.`,
  },
  {
    question: 'How often will the nurse need to visit?',
    answer:
      'Frequency follows your doctor’s plan and the wound itself, some wounds need daily dressing, others every two or three days. The nurse reassesses healing at each visit and adjusts the schedule with you so you are never paying for more visits than the wound needs.',
  },
  {
    question: 'Do you bring the dressing materials, or do we?',
    answer:
      'We can arrange sterile, single-use dressing kits, or use the specific materials your doctor has prescribed if you already have them. We confirm exactly what is needed during the consultation so there are no surprises.',
  },
  {
    question: 'Are the nurses trained specifically in wound care?',
    answer:
      'Yes. Every nurse holds a verified GNM or B.Sc Nursing qualification and is matched only when they have demonstrated competence in the specific type of wound you need managed, including sterile dressing technique and infection control.',
  },
  {
    question: 'Can wound dressing be combined with other home nursing?',
    answer:
      'Absolutely. Wound dressing is often combined with injections, vitals monitoring or post-surgical nursing. We coordinate a single nurse or a care plan that covers everything your recovery requires.',
  },
] as const

const RELATED = [
  { label: 'Post-Surgical Nursing', href: '/care-services/post-surgical-nursing-care-bangalore' },
  { label: 'Injections & Vitals Monitoring', href: '/care-services/injections-vitals-monitoring-bangalore' },
  { label: 'Diabetes Care', href: '/care-services/diabetes-care-at-home-bangalore' },
  { label: 'Catheter & Tube Care', href: '/care-services/catheter-care-at-home-bangalore' },
  { label: 'Home Nursing Care', href: '/care-services/home-nursing-care-bangalore' },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers, Wound Care & Dressing at Home, Bangalore',
    medicalSpecialty: 'Nursing',
    areaServed: { '@type': 'City', name: 'Bangalore' },
    url: `https://www.ezyhelpers.com${PATH}`,
    telephone: '+918031411776',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'HSR Layout',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560102',
      addressCountry: 'IN',
    },
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

export default function WoundCareDressingView() {
  return (
    <CareSubpageShell
      currentLabel={service.label}
      eyebrow="Bangalore · Wound care at home"
      headlineLead="Wounds that heal,"
      headlineAccent="dressed the right way."
      lede="Sterile, professional wound dressing at home in Bangalore, for diabetic wounds, bedsores, surgical incisions and ostomy care. Performed by GNM/B.Sc-verified nurses who catch infection early and log every visit."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      {/* Hero stats */}
      <section className="bg-white px-4 pt-4 sm:px-6">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {HERO_STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-[20px] border border-neutral-200 bg-care-50 px-6 py-5 text-center"
            >
              <p className="font-careSerif text-2xl font-medium text-care-500 sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-neutral-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Direct answer */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-care-50 p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            Wound care at home in Bangalore means a qualified nurse coming to you for{' '}
            <em className="italic text-care-500">sterile dressing</em>, infection monitoring and
            healing assessment, for diabetic wounds, bedsores, surgical incisions and ostomy sites.
            The goal is simple: faster healing, fewer infections, and no painful clinic trips.
          </p>
        </div>
      </section>

      {/* Wound types */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="What we dress"
            titleLead="Every wound type,"
            titleMuted="handled with sterile care."
            lede="Different wounds need different techniques. We match a nurse experienced in your specific wound and follow your doctor’s plan precisely."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {WOUND_TYPES.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-care-50 text-care-500 ring-1 ring-care-500/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-careSerif text-lg font-bold tracking-tight text-neutral-950 sm:text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-neutral-50 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="What every visit includes"
                titleLead="Sterile, documented,"
                titleMuted="and never rushed."
                lede="A wound dressing visit is more than changing a bandage. Here is what a professional home nurse delivers each time."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {INCLUDED.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5"
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-care-500" aria-hidden />
                    <span className="text-sm leading-snug text-neutral-800">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why professional */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Why a professional"
            titleLead="The case for"
            titleMuted="proper wound dressing."
            align="center"
          />
          <ol className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {WHY.map((p, i) => (
              <li
                key={p}
                className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4"
              >
                <span className="font-careSerif text-2xl font-medium text-care-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm leading-snug text-neutral-800 sm:text-base">{p}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Related links inline */}
      <section className="bg-neutral-50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="Related nursing services" titleLead="Often needed together." />
          <div className="mt-8 flex flex-wrap gap-3">
            {RELATED.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-800 transition hover:border-neutral-900 hover:text-neutral-950"
              >
                {r.label}
                <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Wound care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="A clean dressing,"
        headlineAccent="by tomorrow."
        body="Tell us about the wound. We respond within the hour, match a nurse experienced in your wound type, and arrange the first visit, sterile kit included."
        enquirySource={PATH}
        related={RELATED as unknown as { label: string; href: string }[]}
      />
    </CareSubpageShell>
  )
}
