import Link from 'next/link'
import {
  CheckIcon,
  HeartIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

const SLUG = 'injections-vitals-monitoring-bangalore'
const PATH = `/care-services/${SLUG}`
const service = getNestedService(SLUG)!

/* heroStats — INVENTED illustrative figures for layout/AEO. Confirm before launch. */
const HERO_STATS = [
  { value: '12,000+', label: 'Home visits completed' },
  { value: 'From ₹400', label: 'Per visit, transparently priced' },
  { value: 'Same-day', label: 'Attempts for urgent needs' },
] as const

const SERVICES_LIST = [
  {
    icon: HeartIcon,
    title: 'Insulin & diabetic injections',
    body:
      'Regular insulin administration for diabetic patients who cannot self-inject — with correct dosing, rotation of sites and blood-sugar checks, all by a qualified nurse.',
  },
  {
    icon: SparklesIcon,
    title: 'Prescribed injections',
    body:
      'Intramuscular and subcutaneous injections exactly as your doctor has prescribed — pain-relief, blood thinners, hormone and other medications, given safely with sterile technique.',
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'BP, blood-sugar & SpO₂ monitoring',
    body:
      'Routine monitoring of blood pressure, blood glucose and oxygen saturation — tracked over time so trends are visible and your doctor can adjust treatment with real data.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Health checks & reporting',
    body:
      'Temperature, pulse, weight and general observation, all recorded in a clinical log. Ideal for elderly parents, chronic-illness patients and NRI families who want regular updates.',
  },
] as const

const INCLUDED = [
  'Verification of the prescription before any injection',
  'Sterile, single-use needles and correct injection technique',
  'Accurate dosing with site rotation where needed',
  'BP, blood-sugar and SpO₂ readings with trend tracking',
  'Safe sharps disposal after every visit',
  'A clinical log shared with you and your doctor on request',
] as const

const WHO = [
  'Diabetic patients needing regular insulin who cannot self-inject',
  'Elderly parents on prescribed injectable medication',
  'Patients on blood thinners or hormone injections',
  'Chronic-illness patients needing regular vitals tracking',
  'NRI families wanting documented health monitoring for parents',
  'Anyone avoiding repeated clinic trips for a quick injection',
] as const

const FAQS = [
  {
    question: 'Can a nurse give injections at home in Bangalore?',
    answer:
      'Yes. A qualified GNM/B.Sc-verified nurse can administer prescribed injections at home — insulin, intramuscular and subcutaneous medications, blood thinners and more — using sterile, single-use needles and correct technique. We administer only what your doctor has prescribed.',
  },
  {
    question: 'What vitals can be monitored at home?',
    answer:
      'Our nurses monitor blood pressure, blood glucose, oxygen saturation (SpO₂), temperature, pulse and weight. Readings are recorded over time so trends are visible, which helps your doctor adjust treatment based on real data rather than a single snapshot.',
  },
  {
    question: 'How much do home injections and vitals monitoring cost in Bangalore?',
    answer:
      `Injections and vitals monitoring at home in Bangalore start at ${formatPriceWithNote('injections-vitals').toLowerCase()}. Recurring visits for ongoing monitoring can be planned at a predictable cost — a consultation gives you the exact figure for your needs.`,
  },
  {
    question: 'Do you need a prescription for injections?',
    answer:
      'Yes. Injections are administered only on a valid doctor’s prescription specifying the medication and dose. This keeps the patient safe and the treatment clinically appropriate.',
  },
  {
    question: 'Can you set up a regular monitoring schedule for an elderly parent?',
    answer:
      'Absolutely. Many families — including NRI families with parents in Bangalore — set up recurring visits for insulin, injections and vitals monitoring, with a clinical log shared after each visit. It is a reliable way to keep an eye on a parent’s health from anywhere.',
  },
  {
    question: 'Are the needles and equipment safe and single-use?',
    answer:
      'Always. We use sterile, single-use needles and syringes for every injection and dispose of sharps safely after each visit, following infection-control protocol.',
  },
] as const

const RELATED = [
  { label: 'IV Therapy & Infusion', href: '/care-services/iv-therapy-at-home-bangalore' },
  { label: 'Wound Care & Dressing', href: '/care-services/wound-care-dressing-at-home-bangalore' },
  { label: 'Post-Surgical Nursing', href: '/care-services/post-surgical-nursing-care-bangalore' },
  { label: 'Home Nursing Care', href: '/care-services/home-nursing-care-bangalore' },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Injections & Vitals Monitoring at Home, Bangalore',
    medicalSpecialty: 'Nursing',
    areaServed: { '@type': 'City', name: 'Bangalore' },
    url: `https://www.ezyhelpers.com${PATH}`,
    telephone: '+918031411776',
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

export default function InjectionsVitalsView() {
  return (
    <CareSubpageShell
      currentLabel={service.label}
      eyebrow="Bangalore · Injections & vitals at home"
      headlineLead="Injections and checks,"
      headlineAccent="brought to your door."
      lede="At-home injections and vitals monitoring in Bangalore — insulin, prescribed injections, BP, blood sugar and SpO₂ checks by qualified nurses. No more clinic queues for a five-minute procedure."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      <section className="bg-white px-4 pt-4 sm:px-6">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="rounded-[20px] border border-neutral-200 bg-care-50 px-6 py-5 text-center">
              <p className="font-careSerif text-2xl font-medium text-care-500 sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-neutral-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-care-50 p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            Injections and vitals monitoring at home in Bangalore bring a qualified nurse to you for{' '}
            <em className="italic text-care-500">insulin, prescribed injections and routine checks</em>{' '}
            of BP, blood sugar and oxygen — saving elderly and chronic-illness patients repeated,
            tiring clinic trips while keeping a clear health record.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="What we provide" titleLead="Quick procedures," titleMuted="properly done." lede="Small clinical tasks still need a trained nurse and sterile technique. Here is what we bring to your home." />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {SERVICES_LIST.map(({ icon: Icon, title, body }) => (
              <article key={title} className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
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

      <section className="bg-neutral-50 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow="What every visit includes" titleLead="Sterile, accurate," titleMuted="and recorded." lede="Even a quick injection visit is done to clinical standard. Here is what the nurse delivers." />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {INCLUDED.map((b) => (
                  <li key={b} className="flex items-start gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-care-500" aria-hidden />
                    <span className="text-sm leading-snug text-neutral-800">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow="Who it’s for" titleLead="Made for families" titleMuted="who can’t keep visiting clinics." lede="If a quick procedure means a long, tiring trip, home visits change everything." />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {WHO.map((w) => (
                  <li key={w} className="flex items-start gap-2 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3.5">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-care-500" aria-hidden />
                    <span className="text-sm leading-snug text-neutral-800">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="Related nursing services" titleLead="Often needed together." />
          <div className="mt-8 flex flex-wrap gap-3">
            {RELATED.map((r) => (
              <Link key={r.href} href={r.href} className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-800 transition hover:border-neutral-900 hover:text-neutral-950">
                {r.label}
                <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Injections & monitoring, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="The injection comes"
        headlineAccent="to you now."
        body="Tell us what is prescribed. We respond within the hour, match a qualified nurse, and arrange a visit — single or recurring, with a clear health log."
        enquirySource={PATH}
        related={RELATED as unknown as { label: string; href: string }[]}
      />
    </CareSubpageShell>
  )
}
