'use client'

import { CheckIcon } from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import ConditionInfoSection, { type ConditionInfo } from '../ConditionInfoSection'
import CareNeedsCovered, { type CareNeeds } from '../CareNeedsCovered'
import CaregiverScopeSection from '../CaregiverScopeSection'
import { getNestedService } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

const SERVICE = getNestedService('post-stroke-speech-rehab-at-home-bangalore')!
const PATH = `/care-services/${SERVICE.slug}`

const CARE_NEEDS: CareNeeds = {
  conditionsCovered: ['Aphasia', 'Slurred speech', 'Swallowing difficulty', 'Communication loss'],
  careNeeds: [
    'Structured speech and language exercises',
    'Swallow-safe mealtime support',
    'Daily home practice between sessions',
    'Family coaching for communication',
    'Progress tracking and review',
    'Coordination with neuro physiotherapy',
  ],
}

const CONDITION_INFO: ConditionInfo = {
  conditionName: 'Post-stroke aphasia & dysphagia',
  vitalStats: [
    {
      stat: '~1.8 million',
      detail: 'India sees an estimated 1.8 million strokes a year, and speech or swallowing problems follow a large share of them.',
    },
    {
      stat: '~1 in 3',
      detail: 'Roughly a third of stroke survivors experience aphasia, difficulty speaking, understanding, reading or writing.',
    },
    {
      stat: 'Up to half',
      detail: 'Swallowing difficulty (dysphagia) affects an estimated half of stroke patients early on, and raises aspiration-pneumonia risk if unmanaged.',
    },
  ],
  causes: [
    'Stroke damage to the brain’s language areas, usually the left side (aphasia)',
    'Weakness of the lips, tongue and speech muscles after stroke (dysarthria)',
    'Disrupted coordination of the swallowing reflex (dysphagia)',
    'Larger strokes and delayed treatment, which increase the extent of damage',
    'Repeat strokes adding new deficits on top of old ones',
    'Reduced practice, speech that isn’t used and exercised recovers more slowly',
  ],
  symptoms: [
    'Knowing what they want to say but unable to find the words',
    'Speech that comes out slurred, slow or hard to understand',
    'Using the wrong word, “chair” for “table”, without noticing',
    'Trouble following conversations, TV or written text',
    'Coughing, throat-clearing or a wet, gurgly voice during meals',
    'Holding food in the mouth, or meals taking far longer than before',
    'Avoiding phone calls and visitors out of frustration or embarrassment',
    'Weight loss or chest infections that may trace back to unsafe swallowing',
  ],
  whenYouNeedCare: [
    'The hospital SLP has discharged them with exercises, but no one at home can run the daily practice',
    'Coughing or choking at meals is making the family afraid of every lunch and dinner',
    'A chest infection after meals raised the question of silent aspiration',
    'Frustration at not being understood is turning into withdrawal or anger',
    'Therapy sessions exist, but the gains fade because nothing is practised between them',
    'Family members are far away and want structured rehab, and progress reports, at home',
  ],
}

/* hero stats, INVENTED / ILLUSTRATIVE figures for layout & marketing only.
 * Confirm against real operational data before launch. */
const HERO_STATS = [
  { value: 'Early months', label: 'matter most, the golden window for speech recovery' },
  { value: 'At home', label: 'where practice is comfortable, frequent and consistent' },
  { value: 'Family-coached', label: 'so progress continues between every session' },
] as const

const SECTIONS = [
  {
    eyebrow: 'Aphasia & language',
    titleLead: 'Finding the words',
    titleMuted: 'again, step by step.',
    lede:
      'A stroke can take away words, names and sentences, aphasia. Structured language exercises at home rebuild communication patiently, one win at a time.',
    bullets: [
      'Word-finding, naming and sentence-building exercises',
      'Comprehension practice with everyday objects and routines',
      'Reading and writing recovery where these are affected',
      'Progress measured session to session, and shared with family',
    ],
  },
  {
    eyebrow: 'Speech clarity',
    titleLead: 'Slurred speech worked',
    titleMuted: 'back towards clarity.',
    lede:
      'When the stroke weakens the muscles of speech, dysarthria, words come out slurred or slow. Targeted oral-motor and articulation practice rebuilds clarity.',
    bullets: [
      'Oral-motor exercises for lips, tongue and breath control',
      'Articulation drills paced to the patient’s stamina',
      'Volume and pacing strategies for clearer everyday speech',
      'Practice using the patient’s own daily phrases, Kannada, Hindi, English or mixed',
    ],
  },
  {
    eyebrow: 'Swallowing safety',
    titleLead: 'Every meal made',
    titleMuted: 'safer to swallow.',
    lede:
      'Swallowing difficulty, dysphagia, is one of the most dangerous after-effects of stroke. Assessment-informed mealtime routines reduce choking and aspiration risk.',
    bullets: [
      'Mealtime routines informed by the clinical swallowing assessment',
      'Safe posture, pacing and food-consistency guidance',
      'Swallowing exercises to rebuild strength and coordination',
      'Caregivers and family briefed on choking warning signs',
    ],
  },
  {
    eyebrow: 'Home practice & family',
    titleLead: 'Recovery that continues',
    titleMuted: 'between the sessions.',
    lede:
      'The therapist visits a few times a week; recovery happens every day. Structured home practice and family coaching turn the whole household into part of the rehab.',
    bullets: [
      'Structured daily practice plans between therapy sessions',
      'Family coached on how to talk with, not over, the patient',
      'Coordination with the neuro physiotherapist for whole-person recovery',
      'Early start encouraged, the first months after stroke matter most',
    ],
  },
] as const

const FAQS = [
  {
    question: 'When should speech therapy start after a stroke?',
    answer:
      'As early as the treating doctor clears it, often within days to weeks of the stroke. The early months are the golden window when the brain is most able to rewire, so starting structured speech and swallowing work early gives the best chance of recovery.',
  },
  {
    question: 'How many sessions per week are needed?',
    answer:
      'Most stroke patients in Bangalore start with 3–5 sessions a week in the early months, tapering as progress stabilises. The therapist sets the exact frequency after an initial assessment, and structured home practice between sessions multiplies the benefit.',
  },
  {
    question: 'What does post-stroke speech therapy at home cost in Bangalore?',
    answer:
      `Home speech therapy sessions in Bangalore start from around ₹900 per session (${formatPriceWithNote(SERVICE.priceKey)}), with package pricing for the multi-week programmes most stroke recovery needs. A free consultation gives you a precise estimate.`,
  },
  {
    question: 'How long does speech recovery after stroke take?',
    answer:
      'Honestly, it varies, with the size and location of the stroke, how early therapy starts, and how consistently practice happens. Many patients see meaningful gains within weeks, but solid recovery usually takes months of consistent work, and some improvement can continue for a year or more.',
  },
  {
    question: 'Do you coordinate with the neuro physiotherapist?',
    answer:
      'Yes. Stroke recovery works best when speech and physical rehab move together, so our therapists share progress and align schedules with the physiotherapist, whether that is our own neuro physiotherapy team or one you already have.',
  },
  {
    question: 'What can the family do between sessions?',
    answer:
      'A great deal, and we coach you on it. The therapist leaves a structured daily practice plan, shows family members how to run short exercises, and teaches communication habits like giving extra time, asking yes/no questions and never finishing the patient’s sentences for them.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers, Post-Stroke Speech Therapy & Rehab at Home, Bangalore',
    medicalSpecialty: ['Speech-Language Pathology', 'Neurology'],
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

export default function PostStrokeSpeechRehabView() {
  return (
    <CareSubpageShell
      currentLabel={SERVICE.label}
      eyebrow="Bangalore · Post-stroke speech rehab at home"
      headlineLead="After a stroke, every word"
      headlineAccent="won back counts."
      lede={SERVICE.tagline + ' Structured aphasia, speech-clarity and swallowing rehab at home, started early, practised daily, with the family coached at every step.'}
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

      <CaregiverScopeSection
        workerLabel="the therapist and caregiver team"
        dos={[
          'Structured speech and language exercises, set and progressed by the therapist',
          'Swallowing-safe mealtime support, posture, pacing and food-consistency guidance',
          'Daily home practice plans between therapy sessions',
          'Family coaching on how to communicate with, not over, the patient',
          'Session-by-session progress tracking shared with the family',
          'Coordination with the neuro physiotherapist for whole-person recovery',
        ]}
        donts={[
          'Medical diagnosis, assessment and diagnosis remain with your doctor and hospital team',
          'Prescribing or changing medication',
          'Invasive swallowing procedures, these belong with the hospital SLP and treating doctor',
          'Guaranteeing recovery timelines, progress is real but varies person to person',
        ]}
      />

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Post-stroke speech rehab, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Start the recovery early,"
        headlineAccent="arranged with one call."
        body="Tell us about the stroke and where speech stands today. We respond within the hour, recommend the right therapist, and can usually start within days."
        enquirySource={PATH}
        related={[
          { label: 'Neuro Physiotherapy', href: '/care-services/neuro-physiotherapy-at-home-bangalore' },
          { label: 'Stroke Care at Home', href: '/care-services/stroke-care-at-home-bangalore' },
          { label: 'Physiotherapy at Home', href: '/care-services/physiotherapy-at-home-bangalore' },
          { label: 'Home Nursing Care', href: '/care-services/home-nursing-care-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
