'use client'

import { CheckIcon } from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import ConditionInfoSection, { type ConditionInfo } from '../ConditionInfoSection'
import CareNeedsCovered, { type CareNeeds } from '../CareNeedsCovered'
import CaregiverScopeSection from '../CaregiverScopeSection'
import { getNestedService } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

const SERVICE = getNestedService('parkinsons-care-at-home-bangalore-elder')!
const PATH = `/care-services/${SERVICE.slug}`

const CARE_NEEDS: CareNeeds = {
  conditionsCovered: ['Tremors', 'Stiffness', 'Walking difficulty', 'Balance issues', 'Freezing episodes'],
  careNeeds: [
    'Walking support and fall prevention',
    'Assistance during tremors or stiffness',
    'Meal and medicine timing support',
    'Help with bathing, dressing and toileting',
    'Monitoring freezing episodes and sudden imbalance',
    'Daily routine that keeps good days steady',
  ],
}

const CONDITION_INFO: ConditionInfo = {
  conditionName: 'Parkinson’s disease',
  vitalStats: [
    {
      stat: '2nd most common',
      detail: 'Among neurodegenerative disorders, Parkinson’s is second only to Alzheimer’s disease worldwide.',
    },
    {
      stat: '~7 per 100,000',
      detail: 'Prevalence in India is estimated at about 7 or more per 100,000, and it rises steeply in seniors past 60.',
    },
    {
      stat: '60+',
      detail: 'Most diagnoses come after the age of 60, which is why Parkinson’s care is so often elder care first.',
    },
  ],
  causes: [
    'Gradual loss of dopamine-producing cells in the brain',
    'Age, the strongest known risk factor, especially beyond 60',
    'Family history and genetics, in a smaller share of cases',
    'Long-term pesticide or chemical exposure in some occupations',
    'A history of repeated head injuries',
    'Being male, which carries a somewhat higher risk',
  ],
  symptoms: [
    'A resting tremor in one hand that quietens when the hand is in use',
    'Noticeably slower walking, dressing and eating',
    'Smaller, more cramped handwriting than before',
    'Limb stiffness, aches and reduced arm swing while walking',
    'A quieter voice and a flatter facial expression',
    'Stooping posture and short, shuffling steps',
    'New constipation, poor sleep or loss of smell',
    'Hesitation or “sticking” when starting to walk or turning',
  ],
  whenYouNeedCare: [
    'Tablet times are slipping, and stiffness or tremor is worse on missed-dose days',
    'A recent fall, or near-misses while getting up from bed or the toilet',
    'Freezing at doorways or while turning, with no one nearby to help',
    'Meals, bathing and dressing now need daily hands-on assistance',
    'Coughing during meals or trouble swallowing tablets and water',
    'The family carer is elderly or far away, and nights feel unsafe',
  ],
}

/* hero stats, INVENTED / ILLUSTRATIVE figures for layout & marketing only.
 * Confirm against real operational data before launch. */
const HERO_STATS = [
  { value: 'On-time', label: 'medication timing, which is critical in Parkinson’s' },
  { value: 'Tremor-aware', label: 'assistance with meals, dressing and mobility' },
  { value: '24/7', label: 'live-in cover available as the condition advances' },
] as const

const SECTIONS = [
  {
    eyebrow: 'Medication timing',
    titleLead: 'In Parkinson’s,',
    titleMuted: 'timing is everything.',
    lede:
      'Parkinson’s medication works in narrow windows. A caregiver who keeps doses precisely on time keeps symptoms steadier through the day.',
    bullets: [
      'Strict, on-time medication reminders and tracking',
      'Awareness of “on” and “off” periods through the day',
      'Coordination with family and doctor on dosing changes',
      'Watchfulness for side-effects and symptom shifts',
    ],
  },
  {
    eyebrow: 'Mobility & tremor support',
    titleLead: 'Steady help with',
    titleMuted: 'movement and tremor.',
    lede:
      'Rigidity, slowness and tremor make everyday movement harder. Our caregivers provide patient, tremor-aware support.',
    bullets: [
      'Safe assistance with walking, transfers and balance',
      'Fall-prevention awareness for freezing and unsteady gait',
      'Patient help with eating, dressing and grooming during tremor',
      'Encouraging gentle, prescribed movement to stay mobile',
    ],
  },
  {
    eyebrow: 'Daily routine',
    titleLead: 'Routine that keeps',
    titleMuted: 'good days steady.',
    lede:
      'A predictable daily routine reduces stress and helps manage Parkinson’s symptoms more smoothly.',
    bullets: [
      'Consistent daily structure for meals, rest and activity',
      'Support with speech and swallowing difficulties at mealtimes',
      'Help maintaining independence wherever possible',
      'Companionship to counter the isolation Parkinson’s can bring',
    ],
  },
  {
    eyebrow: 'Family & continuity',
    titleLead: 'Care that adapts',
    titleMuted: 'as the condition changes.',
    lede:
      'Parkinson’s is progressive. Our care plan evolves with it, and the family stays informed at every step.',
    bullets: [
      'Re-assessment and re-matching as needs increase',
      'Smooth handover to live-in or trained-attendant care if required',
      'Daily WhatsApp updates for distant and NRI families',
      'Free replacement if the caregiver isn’t the right fit',
    ],
  },
] as const

const FAQS = [
  {
    question: 'Why is medication timing so important in Parkinson’s care?',
    answer:
      'Parkinson’s medication works within narrow time windows, and even small delays can cause symptoms to worsen, more tremor, stiffness and “off” periods. Our caregivers keep doses strictly on time and track them, which keeps symptoms steadier throughout the day.',
  },
  {
    question: 'How do caregivers help with tremors and mobility?',
    answer:
      'They provide patient, tremor-aware assistance with walking, transfers and balance, stay alert to freezing and unsteady gait to prevent falls, and help with eating, dressing and grooming when tremor makes these difficult, always at the senior’s pace.',
  },
  {
    question: 'What does Parkinson’s care at home cost in Bangalore?',
    answer:
      `Live-in Parkinson’s care in Bangalore typically starts from around ₹22,000/month (${formatPriceWithNote(SERVICE.priceKey)}) and varies with the stage and level of support required. A free consultation gives you a precise estimate.`,
  },
  {
    question: 'Can the caregiver support speech and swallowing difficulties?',
    answer:
      'Yes. Our caregivers are aware of the speech and swallowing changes common in Parkinson’s and provide safe, patient mealtime support. For specialist therapy, we coordinate with the appropriate professionals.',
  },
  {
    question: 'Will the same caregiver continue as Parkinson’s progresses?',
    answer:
      'Where the caregiver has the experience for the next stage, we keep them for continuity. If advancing needs require live-in or trained-attendant care, we manage a smooth, well-briefed handover so care never lapses.',
  },
  {
    question: 'Do you provide live-in Parkinson’s care in Bangalore?',
    answer:
      'Yes. Many families choose live-in cover for round-the-clock medication timing, mobility support and night-time safety. We also offer day or night shifts if that fits your home better, and adjust as the condition changes.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers, Parkinson’s Care at Home, Bangalore',
    medicalSpecialty: ['Geriatrics', 'Neurology'],
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

export default function ParkinsonsCareElderView() {
  return (
    <CareSubpageShell
      currentLabel={SERVICE.label}
      eyebrow="Bangalore · Parkinson’s care at home"
      headlineLead="Parkinson’s care that keeps"
      headlineAccent="every good day steady."
      lede={SERVICE.tagline + ' Caregivers trained in on-time medication, tremor-aware assistance and daily routine, so your loved one stays as independent and comfortable as possible.'}
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

      <ConditionInfoSection info={CONDITION_INFO} />

      <CareNeedsCovered needs={CARE_NEEDS} />

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

      <CaregiverScopeSection />

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Parkinson’s care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="On-time, tremor-aware care,"
        headlineAccent="arranged with one call."
        body="Tell us about your loved one’s Parkinson’s. We respond within the hour, recommend the right caregiver, and start matching today."
        enquirySource={PATH}
        related={[
          { label: 'Dementia Care', href: '/care-services/dementia-care-at-home-bangalore' },
          { label: 'Post-Fall & Mobility Care', href: '/care-services/post-fall-mobility-care-bangalore' },
          { label: 'Bedridden Patient Care', href: '/care-services/bedridden-patient-care-at-home-bangalore' },
          { label: 'Elder Care at Home', href: '/care-services/elder-care-at-home-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
