'use client'

import { CheckIcon } from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import ConditionInfoSection, { type ConditionInfo } from '../ConditionInfoSection'
import CareNeedsCovered, { type CareNeeds } from '../CareNeedsCovered'
import CaregiverScopeSection from '../CaregiverScopeSection'
import { getNestedService } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

const SERVICE = getNestedService('alzheimers-care-at-home-bangalore')!
const PATH = `/care-services/${SERVICE.slug}`

const CARE_NEEDS: CareNeeds = {
  conditionsCovered: ['Memory loss', 'Confusion', 'Wandering', 'Behavioural changes', 'Sundowning', 'Sleep disturbance'],
  careNeeds: [
    'Memory support and gentle orientation',
    'Supervision to prevent wandering',
    'Help with bathing, dressing, meals and medicines',
    'Calm handling of confusion, repetition, anger or fear',
    'Safety monitoring at home',
    'Emotional companionship through the day',
  ],
}

const CONDITION_INFO: ConditionInfo = {
  conditionName: 'Alzheimer’s disease',
  vitalStats: [
    {
      stat: '60–70%',
      detail: 'Alzheimer’s disease is the most common cause of dementia, accounting for an estimated 60–70% of cases worldwide (WHO).',
    },
    {
      stat: '~8.8 million',
      detail: 'An estimated 8.8 million Indians aged 60+ live with dementia, Alzheimer’s being the largest share (LASI-DAD study).',
    },
    {
      stat: '8–10 yrs',
      detail: 'After diagnosis, families typically live with the disease for many years, often 8–10 or more, making sustainable home care essential.',
    },
  ],
  causes: [
    'Abnormal protein build-up (amyloid plaques and tau tangles) in the brain',
    'Advancing age, the single biggest risk factor, especially after 65',
    'Family history and genetic factors (such as the APOE-e4 gene)',
    'Long-standing high blood pressure, diabetes and heart disease',
    'Untreated hearing loss, social isolation and physical inactivity',
    'Smoking and prolonged heavy alcohol use',
  ],
  symptoms: [
    'Memory loss that disrupts daily life, especially recently learned information',
    'Asking the same question again within minutes',
    'Trouble following familiar recipes, accounts or monthly bills',
    'Confusion about time of day, dates or seasons',
    'Getting lost on routes they have used for decades',
    'Trouble finding the right word, or calling objects by the wrong name',
    'Poor judgement, unusual gifts of money, falling for telemarketing schemes',
    'Personality change, anxiety, suspicion or withdrawal from family',
  ],
  whenYouNeedCare: [
    'They have wandered out of the house or got lost in a familiar area',
    'Sundowning, agitation or restlessness most evenings the family can’t settle',
    'Medicines, gas stoves or door locks are no longer managed safely',
    'Bathing and dressing now meet resistance the family can’t handle alone',
    'The primary family caregiver is burning out or has health issues of their own',
    'Adult children are in another city or abroad and need eyes and hands at home',
  ],
}

/* hero stats, INVENTED / ILLUSTRATIVE figures for layout & marketing only.
 * Confirm against real operational data before launch. */
const HERO_STATS = [
  { value: 'Stage-aware', label: 'care plans for early, middle and late Alzheimer’s' },
  { value: 'Wander-safe', label: 'home routines with door safety and constant watchfulness' },
  { value: '24/7', label: 'live-in cover for sundowning and night-time confusion' },
] as const

const SECTIONS = [
  {
    eyebrow: 'Stage-aware care',
    titleLead: 'Care matched to',
    titleMuted: 'the stage, not a script.',
    lede:
      'Alzheimer’s changes over years. Early-stage care looks nothing like late-stage care, so our caregivers are briefed and matched to where your loved one is today.',
    bullets: [
      'Early stage: gentle prompts, routine-keeping and independence support',
      'Middle stage: hands-on help with dressing, meals and hygiene',
      'Late stage: full personal care, feeding support and comfort focus',
      'Care plan re-assessed and adjusted as the condition progresses',
    ],
  },
  {
    eyebrow: 'Wandering & safety',
    titleLead: 'Wandering managed',
    titleMuted: 'before it becomes a crisis.',
    lede:
      'Wandering is one of the biggest fears for Alzheimer’s families in Bangalore’s busy neighbourhoods. Our caregivers keep a constant, calm watch.',
    bullets: [
      'Door and gate safety awareness, with family-agreed protocols',
      'Constant supervision during high-risk restless periods',
      'Redirection techniques instead of confrontation when they want to “go home”',
      'Safe accompanied walks so movement needs are met, not suppressed',
    ],
  },
  {
    eyebrow: 'Sundowning & routine',
    titleLead: 'Calmer evenings,',
    titleMuted: 'anchored by familiar routine.',
    lede:
      'Late-afternoon agitation, sundowning, is common in Alzheimer’s. A steady, memory-anchored daily routine in a familiar environment keeps evenings calmer.',
    bullets: [
      'Predictable daily rhythm for meals, rest, activity and lighting',
      'Calming techniques for evening agitation and restlessness',
      'Familiar objects, music and photos used as memory anchors',
      'Reduced evening stimulation to ease the transition to night',
    ],
  },
  {
    eyebrow: 'Communication & family',
    titleLead: 'Patient communication,',
    titleMuted: 'and rest for the family.',
    lede:
      'Repetition, confusion and lost words call for a special way of communicating. And the family caring alongside us needs rest too.',
    bullets: [
      'Trained responses to repeated questions, patience, never correction',
      'Simple, one-step communication that reduces frustration',
      'Daily WhatsApp updates so family and NRI children stay informed',
      'Respite cover so primary family caregivers can rest and recharge',
    ],
  },
] as const

const FAQS = [
  {
    question: 'How is Alzheimer’s care different from general dementia care?',
    answer:
      'Alzheimer’s is the most common cause of dementia, and it follows a fairly predictable stage-wise progression, which means care can be planned ahead. Our Alzheimer’s caregivers focus on stage-specific needs like wandering prevention, sundowning management and memory-anchored routines, rather than a one-size-fits-all dementia approach.',
  },
  {
    question: 'How do caregivers handle wandering?',
    answer:
      'They maintain constant, calm supervision, follow family-agreed door and gate safety protocols, and use gentle redirection when your loved one insists on “going home”. They also take safe, accompanied walks so the urge to move is met safely rather than suppressed.',
  },
  {
    question: 'What is sundowning and how do you manage it?',
    answer:
      'Sundowning is the late-afternoon and evening agitation, confusion or restlessness common in Alzheimer’s. Our caregivers manage it with a predictable daily routine, calming techniques, familiar anchors like music and photos, and reduced stimulation in the evening so nights are easier for everyone.',
  },
  {
    question: 'What does Alzheimer’s care at home cost in Bangalore?',
    answer:
      `Live-in Alzheimer’s care in Bangalore typically starts from around ₹24,000/month (${formatPriceWithNote(SERVICE.priceKey)}) and varies with the stage and level of supervision required. A free consultation gives you a precise estimate for your situation.`,
  },
  {
    question: 'Will the same caregiver continue as the stages progress?',
    answer:
      'Wherever the caregiver has the experience for the next stage, we keep them, continuity and a familiar face matter enormously in Alzheimer’s. If late-stage needs require a trained attendant or nursing support, we manage a gradual, well-briefed handover so care never lapses.',
  },
  {
    question: 'Do you provide live-in Alzheimer’s care in Bangalore?',
    answer:
      'Yes. Most families choose live-in cover once wandering, sundowning or night-time confusion begins, because round-the-clock watchfulness is what keeps their loved one safe. We also offer 12-hour day or night shifts if that fits your home better.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers, Alzheimer’s Care at Home, Bangalore',
    medicalSpecialty: ['Geriatrics', 'Neurology'],
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

export default function AlzheimersCareView() {
  return (
    <CareSubpageShell
      currentLabel={SERVICE.label}
      eyebrow="Bangalore · Alzheimer’s care at home"
      headlineLead="Alzheimer’s care that keeps"
      headlineAccent="the familiar world safe."
      lede={SERVICE.tagline + ' Caregivers trained in wandering prevention, sundowning management and memory-anchored routines, in the home your loved one knows best.'}
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

      <CaregiverScopeSection />

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Alzheimer’s care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Stage-aware Alzheimer’s care,"
        headlineAccent="arranged with one call."
        body="Tell us about your loved one’s Alzheimer’s. We respond within the hour, recommend the right caregiver, and start matching today."
        enquirySource={PATH}
        related={[
          { label: 'Dementia Care', href: '/care-services/dementia-alzheimers-care-bangalore' },
          { label: 'Elderly Companionship', href: '/care-services/elderly-companionship-care-bangalore' },
          { label: 'Respite Care', href: '/care-services/respite-care-at-home-bangalore' },
          { label: 'Elder Care at Home', href: '/care-services/elder-care-at-home-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
