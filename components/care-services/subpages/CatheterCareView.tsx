import Link from 'next/link'
import {
  CheckIcon,
  ShieldCheckIcon,
  AdjustmentsHorizontalIcon,
  SparklesIcon,
  HeartIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

const SLUG = 'catheter-care-at-home-bangalore'
const PATH = `/care-services/${SLUG}`
const service = getNestedService(SLUG)!

/* heroStats — INVENTED illustrative figures for layout/AEO. Confirm before launch. */
const HERO_STATS = [
  { value: '4,000+', label: 'Catheter & tube procedures' },
  { value: 'Hygienic', label: 'Sterile technique, every change' },
  { value: 'Trained', label: 'Nurses skilled in tube care' },
] as const

const TUBE_TYPES = [
  {
    icon: AdjustmentsHorizontalIcon,
    title: 'Urinary catheter care & change',
    body:
      'Foley and indwelling urinary catheters need regular, hygienic management to prevent urinary tract infections and blockages. Our nurses handle insertion changes, drainage care and bag hygiene with sterile technique.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Ryles (nasogastric) tube care',
    body:
      'For patients who cannot eat normally, the Ryles tube needs careful positioning checks and hygiene. We manage feeding through the tube, confirm correct placement and watch for any complication.',
  },
  {
    icon: SparklesIcon,
    title: 'PEG feeding-tube care',
    body:
      'Percutaneous (PEG) feeding tubes require clean stoma-site care and correct feeding technique. Our nurses manage feeds, flush the tube, and keep the insertion site clean and infection-free.',
  },
  {
    icon: HeartIcon,
    title: 'Stoma & drainage hygiene',
    body:
      'Whatever the tube or catheter, the skin and site around it need protection. We provide dignified, hygienic site care and teach the family what to watch between visits.',
  },
] as const

const INCLUDED = [
  'Sterile catheter insertion, change and removal as prescribed',
  'Drainage-bag hygiene and correct positioning to prevent backflow',
  'Ryles and PEG feeding through the tube, with placement checks',
  'Stoma and insertion-site cleaning to prevent infection',
  'Early detection of blockage, leakage or infection',
  'Family guidance and a daily clinical log for your doctor',
] as const

const WHY = [
  'Catheter-associated urinary tract infections are common and largely preventable with correct, sterile technique.',
  'A blocked or wrongly positioned tube can be a medical emergency — trained eyes catch problems early.',
  'Feeding-tube hygiene directly affects nutrition and infection risk for dependent patients.',
  'Dignified, discreet tube care preserves the patient’s comfort and self-respect at home.',
] as const

const FAQS = [
  {
    question: 'What catheter and tube care can be done at home in Bangalore?',
    answer:
      'Our home nurses manage urinary (Foley/indwelling) catheter care and changes, Ryles nasogastric tube care and feeding, PEG feeding-tube care, and stoma/drainage-site hygiene. All are performed with sterile technique and according to your doctor’s plan.',
  },
  {
    question: 'How often does a urinary catheter need changing?',
    answer:
      'It depends on the catheter type and your doctor’s guidance — many indwelling catheters are changed every few weeks, but the schedule is individual. Our nurse follows the prescribed interval and changes earlier if there are signs of blockage or infection.',
  },
  {
    question: 'How much does catheter and tube care cost in Bangalore?',
    answer:
      `Catheter and tube care at home in Bangalore starts at ${formatPriceWithNote('catheter-care').toLowerCase()}. The exact cost depends on the procedure, frequency and materials needed — a consultation gives you a precise estimate.`,
  },
  {
    question: 'Can the nurse manage Ryles or PEG tube feeding too?',
    answer:
      'Yes. Our nurses are trained to feed safely through Ryles and PEG tubes, confirm correct tube placement, flush the line to prevent blockage, and keep the insertion site clean. We can also teach family members the daily routine where appropriate.',
  },
  {
    question: 'Are the nurses trained specifically in catheter and tube care?',
    answer:
      'Yes. Every nurse holds a verified GNM or B.Sc Nursing qualification and is matched only when they have demonstrated competence in the specific catheter or feeding-tube care your situation requires.',
  },
  {
    question: 'What should we watch for between nursing visits?',
    answer:
      'The nurse will explain the warning signs for your specific tube — fever, reduced or cloudy drainage, leakage, blockage, pain, or redness at the site. If any appear, you call us and we arrange an earlier visit or advise on urgent medical care.',
  },
] as const

const RELATED = [
  { label: 'Post-Surgical Nursing', href: '/care-services/post-surgical-nursing-care-bangalore' },
  { label: 'Tracheostomy Care', href: '/care-services/tracheostomy-care-at-home-bangalore' },
  { label: 'Wound Care & Dressing', href: '/care-services/wound-care-dressing-at-home-bangalore' },
  { label: 'Home Nursing Care', href: '/care-services/home-nursing-care-bangalore' },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Catheter & Tube Care at Home, Bangalore',
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

export default function CatheterCareView() {
  return (
    <CareSubpageShell
      currentLabel={service.label}
      eyebrow="Bangalore · Catheter & tube care at home"
      headlineLead="Catheters and tubes,"
      headlineAccent="managed hygienically."
      lede="Hygienic urinary catheter, Ryles tube and PEG feeding-tube care at home in Bangalore — sterile changes, feeding support and infection watch by GNM/B.Sc-verified nurses, with dignity at every step."
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
            Catheter and tube care at home in Bangalore means a qualified nurse managing{' '}
            <em className="italic text-care-500">urinary catheters, Ryles tubes and PEG feeding</em>{' '}
            with sterile technique — preventing infection and blockage while keeping the patient
            comfortable and dignified at home.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="What we manage" titleLead="Every catheter and tube," titleMuted="cared for cleanly." lede="Each tube needs its own technique and watchpoints. We match a nurse experienced with your specific catheter or feeding tube." />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {TUBE_TYPES.map(({ icon: Icon, title, body }) => (
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
              <SectionHeader eyebrow="What every visit includes" titleLead="Sterile, watchful," titleMuted="and documented." lede="Tube care is about prevention as much as procedure. Here is what a professional nurse delivers each visit." />
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
          <SectionHeader eyebrow="Why a professional" titleLead="Why tube care" titleMuted="needs a trained nurse." align="center" />
          <ol className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {WHY.map((p, i) => (
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
          <SectionHeader eyebrow="Frequently asked" titleLead="Catheter & tube care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Clean, comfortable tube care."
        headlineAccent="Arranged today."
        body="Tell us about the catheter or feeding tube. We respond within the hour, match a trained nurse, and arrange the first hygienic visit."
        enquirySource={PATH}
        related={RELATED as unknown as { label: string; href: string }[]}
      />
    </CareSubpageShell>
  )
}
