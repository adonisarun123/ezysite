'use client'

import { CheckIcon } from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

const SERVICE = getNestedService('diabetes-care-at-home-bangalore')!
const PATH = `/care-services/${SERVICE.slug}`

/* hero stats — INVENTED / ILLUSTRATIVE figures for layout & marketing only.
 * Confirm against real operational data before launch. */
const HERO_STATS = [
  { value: 'Daily', label: 'blood-sugar checks, logged and shared with the family' },
  { value: 'On-time', label: 'insulin reminders — injections by qualified nurses where needed' },
  { value: 'Foot-care', label: 'vigilance to catch wounds and infections early' },
] as const

const SECTIONS = [
  {
    eyebrow: 'Monitoring & logging',
    titleLead: 'Sugar levels checked,',
    titleMuted: 'logged, never guessed.',
    lede:
      'Good diabetes care lives and dies by consistent monitoring. Our caregivers check and record blood sugar daily, so the doctor and family always have a clear picture.',
    bullets: [
      'Daily glucometer checks at the times the doctor prescribes',
      'Readings logged and shared with family on WhatsApp',
      'Trends flagged early — creeping highs or repeated lows',
      'Readings on hand for every doctor consultation',
    ],
  },
  {
    eyebrow: 'Insulin & medication',
    titleLead: 'Insulin support,',
    titleMuted: 'done the safe way.',
    lede:
      'Caregivers keep insulin and oral medication strictly on time. Where injections are clinically required, qualified nurses administer them — we arrange both under one roof.',
    bullets: [
      'On-time reminders for insulin doses and oral medication',
      'Assistance with self-injection routines and supplies',
      'Qualified nurses arranged for administering injections where required',
      'Insulin storage and expiry checks at home',
    ],
  },
  {
    eyebrow: 'Diet & activity',
    titleLead: 'Diabetic meals and',
    titleMuted: 'movement, every day.',
    lede:
      'Sugar control happens in the kitchen and on the morning walk as much as in the medicine box. Caregivers keep both on track.',
    bullets: [
      'Diabetic-friendly meal planning and portion awareness',
      'Consistent meal timings to match medication schedules',
      'Gentle daily activity — walks and doctor-approved exercise',
      'Polite vigilance on sweets, festival foods and skipped meals',
    ],
  },
  {
    eyebrow: 'Vigilance & emergencies',
    titleLead: 'Warning signs caught',
    titleMuted: 'before they become crises.',
    lede:
      'Hypoglycemia, hyperglycemia and diabetic foot wounds are the emergencies that put elderly diabetics in hospital. Trained eyes at home catch them early.',
    bullets: [
      'Alert to hypo signs — sweating, shakiness, confusion — with quick response',
      'Watchful for hyperglycemia symptoms like excessive thirst and fatigue',
      'Daily foot checks for cuts, blisters and slow-healing wounds',
      'Doctor and family alerted immediately when something looks off',
    ],
  },
] as const

const FAQS = [
  {
    question: 'Can caregivers give insulin injections?',
    answer:
      'Caregivers remind, assist with self-injection routines and manage supplies, but injections themselves are administered by qualified nurses where clinically required. We arrange both — a daily caregiver plus nurse visits for injections — so the family doesn’t have to coordinate two agencies.',
  },
  {
    question: 'How often is blood sugar monitored?',
    answer:
      'As often as the doctor prescribes — typically once or twice daily for stable diabetics, and more frequently where control is poor or insulin doses are being adjusted. Every reading is logged and shared with the family on WhatsApp.',
  },
  {
    question: 'Do caregivers help with a diabetic diet?',
    answer:
      'Yes. They plan and prepare diabetic-friendly meals, keep portions and meal timings consistent with the medication schedule, and keep a polite but firm eye on sweets and festival foods. The diet follows whatever the doctor or dietician has advised.',
  },
  {
    question: 'What does diabetes care at home cost in Bangalore?',
    answer:
      `Diabetes care at home in Bangalore starts from around ₹18,000/month (${formatPriceWithNote(SERVICE.priceKey)}), depending on hours of cover and whether nurse visits for injections are needed. A free consultation gives you a precise estimate.`,
  },
  {
    question: 'What happens in a sugar emergency?',
    answer:
      'Caregivers are trained to recognise hypo and hyperglycemia warning signs early, respond immediately — for example, giving fast-acting sugar for a hypo as per the care plan — and alert the family and doctor at once. For serious episodes, they help get your loved one to hospital without delay.',
  },
  {
    question: 'Do you coordinate with our doctor?',
    answer:
      'Yes. The care plan follows your doctor’s prescription, sugar logs are kept ready for every consultation, and we update the routine whenever the doctor changes medication or diet. Caregivers never alter doses on their own.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Diabetes Care at Home, Bangalore',
    medicalSpecialty: ['Geriatrics', 'Endocrinology'],
    areaServed: { '@type': 'City', name: 'Bangalore' },
    url: `https://www.ezyhelpers.com${PATH}`,
    telephone: '+91-80-31411776',
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

export default function DiabetesCareView() {
  return (
    <CareSubpageShell
      currentLabel={SERVICE.label}
      eyebrow="Bangalore · Diabetes care at home"
      headlineLead="Diabetes care that keeps"
      headlineAccent="every reading in range."
      lede={SERVICE.tagline + ' Daily monitoring, on-time insulin support and foot-care vigilance — with qualified nurses for anything clinical.'}
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director' }}
      lastUpdated="June 2026"
    >
      <section className="bg-white px-4 pt-4 sm:px-6">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="rounded-[24px] border border-neutral-200 bg-care-50 p-6 text-center">
              <div className="font-careSerif text-3xl font-medium tracking-tight text-care-500">{s.value}</div>
              <div className="mt-2 text-sm leading-snug text-neutral-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {SECTIONS.map((sec, idx) => (
        <section
          key={sec.eyebrow}
          className={`px-4 py-20 sm:px-6 sm:py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-care-50'}`}
        >
          <div className="mx-auto max-w-5xl">
            <SectionHeader eyebrow={sec.eyebrow} titleLead={sec.titleLead} titleMuted={sec.titleMuted} lede={sec.lede} />
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {sec.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-care-500" aria-hidden />
                  <span className="text-sm leading-snug text-neutral-800">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Diabetes care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Steady sugar control,"
        headlineAccent="arranged with one call."
        body="Tell us about your loved one’s diabetes routine. We respond within the hour, recommend the right caregiver and nurse cover, and start matching today."
        enquirySource={PATH}
        related={[
          { label: 'Home Nursing Care', href: '/care-services/home-nursing-care-bangalore' },
          { label: 'Injections & Vitals Monitoring', href: '/care-services/injections-vitals-monitoring-bangalore' },
          { label: 'Elder Care at Home', href: '/care-services/elder-care-at-home-bangalore' },
          { label: 'Wound Care & Dressing', href: '/care-services/wound-care-dressing-at-home-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
