import Link from 'next/link'
import {
  CheckIcon,
  ShieldCheckIcon,
  BeakerIcon,
  SparklesIcon,
  HeartIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

const SLUG = 'iv-therapy-at-home-bangalore'
const PATH = `/care-services/${SLUG}`
const service = getNestedService(SLUG)!

/* heroStats, INVENTED illustrative figures for layout/AEO. Confirm before launch. */
const HERO_STATS = [
  { value: '5,000+', label: 'Infusions given at home' },
  { value: 'Doctor-led', label: 'Only on valid prescription' },
  { value: 'Sterile', label: 'Aseptic cannulation, every time' },
] as const

const INFUSIONS = [
  {
    icon: BeakerIcon,
    title: 'IV fluids & rehydration',
    body:
      'For dehydration from infection, heat or poor intake, prescribed IV fluids and electrolytes restore balance safely at home, avoiding an unnecessary hospital trip for weak or elderly patients.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'IV antibiotics',
    body:
      'Long antibiotic courses no longer mean long hospital stays. A credentialled nurse administers prescribed IV antibiotics on schedule, with sterile technique and watch for any reaction.',
  },
  {
    icon: SparklesIcon,
    title: 'Electrolyte & vitamin infusions',
    body:
      'Doctor-prescribed electrolyte correction, iron infusions and vitamin therapy delivered with proper rate control and monitoring, never self-administered, always supervised by a nurse.',
  },
  {
    icon: HeartIcon,
    title: 'Supportive & recovery infusions',
    body:
      'Post-illness and post-surgical recovery often needs prescribed supportive infusions. We administer exactly what your doctor has ordered, at the correct rate, with continuous observation.',
  },
] as const

const INCLUDED = [
  'Verification of the doctor’s prescription before any infusion',
  'Sterile, aseptic IV cannulation by a qualified nurse',
  'Correct infusion rate and dose, monitored throughout',
  'Watch for adverse reactions, with a clear escalation plan',
  'Safe disposal of sharps and used materials',
  'Vitals and infusion details recorded in a daily clinical log',
] as const

const SAFETY = [
  'IV therapy carries real risks, wrong rate, infiltration or reaction, that need a trained nurse, not a layperson.',
  'Aseptic cannulation technique is the single biggest factor in preventing IV-line infections.',
  'Home infusion frees hospital beds and lets patients recover in comfort, without losing clinical safety.',
  'Continuous observation during the infusion catches reactions in the first minutes, when they matter most.',
] as const

const FAQS = [
  {
    question: 'Is IV therapy safe to do at home in Bangalore?',
    answer:
      'Yes, when it is doctor-prescribed and administered by a qualified nurse. Our GNM/B.Sc-verified nurses use sterile cannulation, control the infusion rate, monitor for reactions throughout, and follow a clear escalation plan. We only administer IV therapy on a valid prescription; we do not offer drips on request without a doctor’s order.',
  },
  {
    question: 'What kinds of IV infusions can be given at home?',
    answer:
      'Prescribed IV fluids and rehydration, IV antibiotics, electrolyte correction, iron and vitamin infusions, and supportive recovery infusions. The specific infusion, dose and rate are always set by your treating doctor, we administer exactly what is prescribed.',
  },
  {
    question: 'How much does IV therapy at home cost in Bangalore?',
    answer:
      `IV therapy and infusion at home in Bangalore starts at ${formatPriceWithNote('iv-therapy').toLowerCase()}. The total depends on the infusion type, number of sessions and duration, a consultation gives you an exact estimate.`,
  },
  {
    question: 'Do I need a prescription for IV therapy at home?',
    answer:
      'Yes, always. IV therapy is a medical procedure and we administer it only on a valid doctor’s prescription specifying the infusion, dose and rate. This protects the patient and ensures the therapy is clinically appropriate.',
  },
  {
    question: 'Who administers the IV, a nurse or a technician?',
    answer:
      'Always a qualified nurse with a verified GNM or B.Sc Nursing qualification and demonstrated competence in IV cannulation and infusion. They remain present to monitor the infusion and respond to any reaction.',
  },
  {
    question: 'Can a course of IV antibiotics be completed entirely at home?',
    answer:
      'In most cases, yes. Once your doctor has prescribed the course, a nurse can administer each dose at home on schedule with sterile technique, sparing you a prolonged hospital stay. We coordinate timing and keep a log your doctor can review.',
  },
] as const

const RELATED = [
  { label: 'Injections & Vitals Monitoring', href: '/care-services/injections-vitals-monitoring-bangalore' },
  { label: 'Post-Surgical Nursing', href: '/care-services/post-surgical-nursing-care-bangalore' },
  { label: 'Wound Care & Dressing', href: '/care-services/wound-care-dressing-at-home-bangalore' },
  { label: 'Home Nursing Care', href: '/care-services/home-nursing-care-bangalore' },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers, IV Therapy & Infusion at Home, Bangalore',
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

export default function IvTherapyView() {
  return (
    <CareSubpageShell
      currentLabel={service.label}
      eyebrow="Bangalore · IV therapy at home"
      headlineLead="Doctor-prescribed infusions,"
      headlineAccent="given safely at home."
      lede="IV fluids, antibiotics, electrolytes and prescribed infusions administered at home in Bangalore by credentialled nurses, sterile cannulation, controlled rate, and continuous monitoring throughout."
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
            IV therapy at home in Bangalore lets a qualified nurse administer{' '}
            <em className="italic text-care-500">doctor-prescribed</em> fluids, antibiotics and
            infusions in your own home, with sterile technique, controlled rate and continuous
            monitoring. It is the comfort of home with the safety of a hospital ward.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="What we administer"
            titleLead="Prescribed infusions,"
            titleMuted="delivered with discipline."
            lede="Every infusion is set by your doctor and administered by a nurse trained in IV care. We never offer drips without a valid prescription."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {INFUSIONS.map(({ icon: Icon, title, body }) => (
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
              <SectionHeader eyebrow="What every infusion includes" titleLead="Sterile, monitored," titleMuted="and logged." lede="An IV infusion at home is a clinical procedure from start to finish. Here is what a professional nurse delivers." />
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
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="Safety first" titleLead="Why IV therapy" titleMuted="needs a trained nurse." align="center" />
          <ol className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {SAFETY.map((p, i) => (
              <li key={p} className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4">
                <span className="font-careSerif text-2xl font-medium text-care-500">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm leading-snug text-neutral-800 sm:text-base">{p}</span>
              </li>
            ))}
          </ol>
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
          <SectionHeader eyebrow="Frequently asked" titleLead="IV therapy, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Your prescribed infusion,"
        headlineAccent="without the hospital stay."
        body="Share the prescription. We respond within the hour, match a nurse trained in IV care, and schedule the infusion at home, sterile and monitored throughout."
        enquirySource={PATH}
        related={RELATED as unknown as { label: string; href: string }[]}
      />
    </CareSubpageShell>
  )
}
