'use client'

import { CheckIcon } from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'

const SERVICE = getNestedService('bedridden-patient-care-at-home-bangalore')!
const PATH = `/care-services/${SERVICE.slug}`

/* hero stats — INVENTED / ILLUSTRATIVE figures for layout & marketing only.
 * Confirm against real operational data before launch. */
const HERO_STATS = [
  { value: '2-hourly', label: 'repositioning to prevent pressure sores' },
  { value: '24/7', label: 'live-in attendant cover available' },
  { value: 'Trained', label: 'in safe transfers & high-dependency care' },
] as const

const SECTIONS = [
  {
    eyebrow: 'Pressure-sore prevention',
    titleLead: 'Bedsores are preventable.',
    titleMuted: 'We treat them that way.',
    lede:
      'For a bedridden senior, pressure-sore prevention is the single most important daily discipline — and our attendants are trained to deliver it consistently.',
    bullets: [
      'Scheduled 2-hourly repositioning, day and night',
      'Air-mattress and cushion guidance for at-risk pressure points',
      'Skin inspection at every turn to catch redness early',
      'Clean, dry, well-aligned bedding to reduce friction and shear',
    ],
  },
  {
    eyebrow: 'Safe handling & transfers',
    titleLead: 'Safe handling',
    titleMuted: 'protects everyone.',
    lede:
      'Lifting and moving a bedridden patient incorrectly risks injury to both the senior and the family. Our trained attendants do it safely.',
    bullets: [
      'Correct techniques for bed-to-wheelchair and bed-to-commode transfers',
      'Use of draw sheets, transfer boards and mobility aids',
      'Gentle limb movement to maintain circulation and joint health',
      'Fall-free positioning for feeding, bathing and dressing',
    ],
  },
  {
    eyebrow: 'Hygiene & daily care',
    titleLead: 'Dignified hygiene,',
    titleMuted: 'every single day.',
    lede:
      'Daily personal care done with patience and respect keeps a bedridden senior comfortable, clean and free of infection.',
    bullets: [
      'Sponge baths, oral care and grooming in bed',
      'Incontinence and catheter-hygiene support',
      'Assisted or tube feeding with safe positioning',
      'Bowel and bladder routine management',
    ],
  },
  {
    eyebrow: 'Watchful monitoring',
    titleLead: 'Small changes,',
    titleMuted: 'caught early.',
    lede:
      'A trained attendant notices the early signs — a new sore, a fever, reduced intake — before they become emergencies.',
    bullets: [
      'Daily observation of skin, intake, output and comfort',
      'Vitals tracking and prompt escalation to family or doctor',
      'Coordination with home nurses for clinical tasks',
      'Daily WhatsApp updates for distant and NRI families',
    ],
  },
] as const

const FAQS = [
  {
    question: 'How do you prevent bedsores in a bedridden patient?',
    answer:
      'Our attendants follow a strict 2-hourly repositioning schedule, inspect the skin at every turn, use air mattresses and cushions for at-risk areas, and keep bedding clean, dry and wrinkle-free. Early detection of redness lets us act before a sore develops.',
  },
  {
    question: 'What is the difference between a general attendant and a trained attendant for bedridden care?',
    answer:
      'A general attendant manages basic daily support. Bedridden care needs a trained attendant skilled in safe transfers, pressure-sore prevention, catheter and feeding-tube comfort, and the patience that high-dependency care requires. We match you with this level of skill.',
  },
  {
    question: 'What does bedridden patient care cost in Bangalore?',
    answer:
      'Cost depends on the intensity of care needed — bedridden care requires trained attendants skilled in safe handling, repositioning and pressure-sore prevention, so it costs more than general caretaking. A free consultation gives you a precise, transparent estimate based on the patient’s needs.',
  },
  {
    question: 'Can the attendant manage catheter and feeding tubes?',
    answer:
      'Trained attendants manage day-to-day catheter hygiene, comfort and feeding-tube positioning. For clinical procedures such as catheter changes or tube insertion, we coordinate a qualified home nurse so every task is handled by the right person.',
  },
  {
    question: 'Do you provide 24-hour live-in care for bedridden seniors?',
    answer:
      'Yes. Most families with a bedridden senior choose live-in cover so repositioning, hygiene and monitoring continue through the night. We can also arrange 12-hour day or night shifts if that suits your home better.',
  },
  {
    question: 'How quickly can you arrange a bedridden caregiver in Bangalore?',
    answer:
      'When a suitable trained attendant is available, we attempt same-day placement — especially for hospital discharge. Across the Bangalore localities we serve, most matches are completed within 24–48 hours.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Bedridden Patient Care at Home, Bangalore',
    medicalSpecialty: ['Geriatrics'],
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

export default function BedriddenPatientCareView() {
  return (
    <CareSubpageShell
      currentLabel={SERVICE.label}
      eyebrow="Bangalore · High-dependency care at home"
      headlineLead="Bedridden care, done safely."
      headlineAccent="And with real dignity."
      lede={SERVICE.tagline + ' Trained attendants for repositioning, pressure-sore prevention, hygiene, feeding and safe transfers — so your loved one stays comfortable and complication-free at home.'}
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director' }}
      lastUpdated="May 2026"
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
          <SectionHeader eyebrow="Frequently asked" titleLead="Bedridden care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="A safe pair of hands,"
        headlineAccent="ready when you are."
        body="Tell us about your loved one’s needs. We respond within the hour, recommend a trained attendant, and start matching today."
        enquirySource={PATH}
        related={[
          { label: 'Dementia Care', href: '/care-services/dementia-care-at-home-bangalore' },
          { label: 'Post-Fall & Mobility Care', href: '/care-services/post-fall-mobility-care-bangalore' },
          { label: 'Parkinson’s Care', href: '/care-services/parkinsons-care-at-home-bangalore-elder' },
          { label: 'Elder Care at Home', href: '/care-services/elder-care-at-home-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
