import {
  CheckIcon,
  ClockIcon,
  HandRaisedIcon,
  HeartIcon,
  ShieldCheckIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import ConditionInfoSection, { type ConditionInfo } from '../ConditionInfoSection'
import CareNeedsCovered, { type CareNeeds } from '../CareNeedsCovered'
import CaregiverScopeSection from '../CaregiverScopeSection'

const PATH = '/care-services/parkinsons-care-at-home-bangalore'

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
      stat: '2nd',
      detail: 'Parkinson’s is the second most common neurodegenerative disorder worldwide, after Alzheimer’s disease.',
    },
    {
      stat: '~7+ per lakh',
      detail: 'Indian studies estimate a prevalence of roughly 7 or more per 100,000 people, rising sharply after age 60.',
    },
    {
      stat: '30–40%',
      detail: 'An estimated 30–40% of people with Parkinson’s eventually develop Parkinson’s-related dementia, adding cognitive care needs.',
    },
  ],
  causes: [
    'Loss of dopamine-producing nerve cells in the brain — the core mechanism',
    'Advancing age, with most diagnoses after 60',
    'Genetic factors and family history in a minority of cases',
    'Long-term exposure to certain pesticides and industrial chemicals',
    'Repeated head injuries over a lifetime',
    'Male sex — men are somewhat more likely to develop Parkinson’s',
  ],
  symptoms: [
    'A slight tremor in one hand, finger or thumb at rest',
    'Handwriting becoming smaller and more cramped (micrographia)',
    'Movements slowing down — taking far longer to dress or walk',
    'Stiffness in the arms, legs or trunk that doesn’t loosen with movement',
    'A softer, flatter voice that family keep asking to repeat',
    'Reduced facial expression — the “mask-like” look',
    'Stooped posture, shuffling steps or arms that no longer swing',
    'Loss of smell, constipation and disturbed sleep — often early clues',
  ],
  whenYouNeedCare: [
    'Medication timing is slipping — missed or late doses are causing “off” episodes',
    'A fall, or repeated near-falls, during transfers and turns at home',
    'Freezing of gait in doorways or narrow spaces with no one to assist',
    'Bathing, dressing and meals now take hands-on help the family can’t sustain',
    'Coughing or choking at meals suggests swallowing is becoming unsafe',
    'The spouse managing care is elderly themselves, or children live far away',
  ],
}

const PRINCIPLES = [
  {
    icon: ClockIcon,
    title: 'Medication, exactly on time',
    body:
      'Parkinson’s medication windows are tight — even a 30-minute delay causes “off” episodes. Caregivers maintain a precise schedule, no exceptions.',
  },
  {
    icon: HandRaisedIcon,
    title: 'Fall prevention everywhere',
    body:
      'Most falls happen during transitions — bed-to-stand, turning, doorways. Caregivers are trained to anticipate and assist without taking over.',
  },
  {
    icon: HeartIcon,
    title: 'Patience with “freezing”',
    body:
      'Freezing of gait is involuntary. Pulling, rushing, or scolding makes it worse. Caregivers use cueing techniques — counting, marching, visual targets.',
  },
  {
    icon: BeakerIcon,
    title: 'Constipation watch',
    body:
      'Parkinson’s causes severe constipation. Hydration, fibre, gentle activity, and tracking — the unromantic work that prevents emergencies.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Swallow safety',
    body:
      'As the disease progresses, swallowing becomes harder. Caregivers position upright for meals, watch for coughing, and modify food textures as needed.',
  },
  {
    icon: CheckIcon,
    title: 'Exercise & routine',
    body:
      'Daily gentle exercise slows progression. Caregivers support the prescribed exercise plan, encourage walks, and keep the routine intact on hard days.',
  },
] as const

const STAGES = [
  {
    n: 'Early',
    title: 'Tremor & subtle slowness',
    body: 'Mostly independent. Need help with medication discipline, exercise routine, and managing the emotional weight of diagnosis.',
  },
  {
    n: 'Mid-stage',
    title: 'Mobility decline & “off” periods',
    body: 'Falls become a real risk. Live-in or 12-hour cover. Help with bathing, dressing, kitchen safety. Increased medication complexity.',
  },
  {
    n: 'Advanced',
    title: 'High dependence',
    body: 'Trained attendant rather than caretaker. Significant mobility support, swallow safety, dementia overlap (PD-dementia is common), 24×7 cover.',
  },
] as const

const FAQS = [
  {
    question: 'Why does medication timing matter so much?',
    answer:
      'Levodopa and most Parkinson’s medications work in narrow windows. A 30-minute delay can trigger an "off" episode — sudden stiffness, freezing, severe tremor — that can last hours. Caregivers are trained to set alarms, give medications precisely on schedule, and never improvise.',
  },
  {
    question: 'My parent freezes when walking. How is that handled?',
    answer:
      'Freezing of gait is involuntary — patients want to move and can’t. The caregiver uses cueing: counting aloud, asking the patient to march, placing a foot in front to step over, or using a laser cane if prescribed. Pulling on the arm makes freezing worse.',
  },
  {
    question: 'Is a regular caretaker enough or do we need a trained attendant?',
    answer:
      'Early to mid-stage: an experienced caretaker with verified Parkinson’s experience is usually sufficient. Advanced stage with significant mobility decline, swallow difficulty, or PD-dementia: a trained attendant is the right choice.',
  },
  {
    question: 'Can the caregiver coordinate with the neurologist?',
    answer:
      'Yes. We brief the caregiver on the medication schedule, off-period patterns, and warning signs the neurologist wants flagged. The daily caregiver log is shared with the family and can be reviewed at consultations.',
  },
  {
    question: 'What does Parkinson’s care at home cost in Bangalore?',
    answer:
      'Live-in caretaker for early-to-mid stage: ₹22,000–₹30,000/month. Trained attendant for advanced stage: ₹26,000–₹36,000/month. Day-shift options exist for early-stage patients with active spouses sharing care.',
  },
  {
    question: 'Does Parkinson’s lead to dementia, and can your caregivers handle both?',
    answer:
      'Roughly 30–40% of Parkinson’s patients develop dementia (PD-dementia). When this happens, we re-match to a caregiver with both Parkinson’s and dementia experience — the combination of motor and cognitive challenges is its own work.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Parkinson’s Disease Home Care, Bangalore',
    medicalSpecialty: ['Neurology', 'Geriatrics'],
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

export default function ParkinsonsCareView() {
  return (
    <CareSubpageShell
      currentLabel="Parkinson’s Care at Home"
      eyebrow="Bangalore · Movement disorder care"
      headlineLead="Parkinson’s care, at home."
      headlineAccent="On time. Every time."
      lede="Caregivers experienced in Parkinson’s — strict medication timing, fall-prevention discipline, freezing management, and the steady patience this disease requires."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-[#F1F6F0] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1F8A4C]">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            Parkinson’s home care lives or dies by{' '}
            <em className="italic text-[#1F8A4C]">medication timing</em>. Caregivers we place set alarms,
            log every dose, and don’t improvise the schedule. Add fall prevention, freezing-of-gait
            techniques, swallow safety, and steady patience — and the disease becomes manageable at home,
            often for many years.
          </p>
        </div>
      </section>

      <ConditionInfoSection info={CONDITION_INFO} />

      <CareNeedsCovered needs={CARE_NEEDS} />

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Six principles"
            titleLead="The disciplines"
            titleMuted="of Parkinson’s care."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F4EC] text-[#1F8A4C] ring-1 ring-[#1F8A4C]/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-careSerif text-lg font-bold tracking-tight text-neutral-950 sm:text-xl">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F1F6F0] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Stage-based care"
            titleLead="Different stages,"
            titleMuted="different placements."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {STAGES.map((s) => (
              <article
                key={s.n}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7"
              >
                <span className="inline-flex w-fit rounded-full bg-[#1F8A4C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#1F8A4C]">
                  {s.n} stage
                </span>
                <h3 className="mt-5 font-careSerif text-xl font-bold tracking-tight text-neutral-950 sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

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
        headlineLead="Care, on the dose schedule."
        headlineAccent="Not on the caregiver’s convenience."
        body="Tell us your medication schedule and the stage. We’ll match a caregiver who has done this before."
        enquirySource={PATH}
        related={[
          { label: 'Elderly Care Services', href: '/care-services/elderly-care-services-bangalore' },
          { label: 'Dementia Care', href: '/care-services/dementia-alzheimers-care-bangalore' },
          { label: 'Trained Attendant', href: '/care-services/trained-attendant-services-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
