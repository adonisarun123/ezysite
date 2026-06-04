import {
  CheckIcon,
  ClockIcon,
  HeartIcon,
  ShieldCheckIcon,
  HandRaisedIcon,
  BeakerIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import ConditionInfoSection, { type ConditionInfo } from '../ConditionInfoSection'
import CaregiverScopeSection from '../CaregiverScopeSection'

const PATH = '/care-services/bedridden-patient-care-bangalore'

const CONDITION_INFO: ConditionInfo = {
  conditionName: 'Long-term immobility',
  vitalStats: [
    {
      stat: 'Up to 1 in 3',
      detail: 'Pressure ulcers can develop in up to a third of immobile patients when regular repositioning is not maintained — and most are preventable.',
    },
    {
      stat: '2 hours',
      detail: 'The internationally accepted repositioning standard for bedridden patients is every 2 hours, day and night.',
    },
    {
      stat: 'Days, not weeks',
      detail: 'Muscle loss, stiff joints and skin breakdown can begin within days of becoming bedbound — early protocol matters.',
    },
  ],
  causes: [
    'Stroke with severe one-sided weakness or paralysis',
    'Advanced dementia, Parkinson’s or other neurodegenerative disease',
    'Hip fracture or major surgery with prolonged recovery',
    'Late-stage heart, lung or kidney disease causing severe weakness',
    'Spinal cord injury or advanced arthritis limiting movement',
    'Terminal illness in its final phase',
  ],
  symptoms: [
    'Redness over heels, hips, sacrum or elbows that doesn’t fade within 30 minutes',
    'Skin that feels warm, boggy or broken at pressure points',
    'Joints becoming stiff and harder to straighten (early contractures)',
    'Eating and drinking less, with gradual weight loss',
    'Coughing or gurgling during meals — a swallowing-safety warning',
    'Fewer wet diapers or dark urine, suggesting dehydration',
    'New drowsiness, confusion or low-grade fever',
    'Low mood, silence or saying they feel like a burden',
  ],
  whenYouNeedCare: [
    'Night-time turning isn’t happening — no family member can sustain a 2-hour schedule',
    'A red or broken patch of skin has already appeared at a pressure point',
    'Lifting and transferring the patient is straining (or injuring) family members',
    'Incontinence care is needed several times a day and dignity is suffering',
    'Feeding, hydration and medicines need tracking the family can’t keep consistent',
    'The household has been running on adrenaline for weeks and needs trained relief',
  ],
}

const PROTOCOL = [
  {
    icon: ClockIcon,
    title: 'Repositioning every 2 hours',
    body:
      'A simple discipline that prevents most pressure sores. Caregivers maintain a written turning schedule — no clock-skipping, even at 3am.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Skin inspection twice daily',
    body:
      'Bony prominences (heels, sacrum, hips, elbows) are checked morning and night. Any redness that doesn’t fade in 30 minutes is photographed and reported.',
  },
  {
    icon: HeartIcon,
    title: 'Dignified incontinence care',
    body:
      'Prompt change of incontinence pads, gentle cleansing, barrier cream, and posture-aware bedding. Done quietly. Never rushed. Never visible.',
  },
  {
    icon: BeakerIcon,
    title: 'Hydration & nutrition tracking',
    body:
      'Bedridden patients eat and drink less. Caregivers track intake, encourage small frequent feeds, and watch for swallow safety, especially with thin liquids.',
  },
  {
    icon: HandRaisedIcon,
    title: 'Range-of-motion exercises',
    body:
      'Passive joint mobilisation 2–3 times daily prevents contractures and preserves mobility for when recovery is possible. Done as a routine, not when remembered.',
  },
  {
    icon: HomeModernIcon,
    title: 'Bed setup & equipment',
    body:
      'Pressure-relief mattress where indicated, side rails for safety, raised head-end for breathing, towels and dressings within reach. Caregivers help families set this up.',
  },
] as const

const RED_FLAGS = [
  'Pressure sore deeper than skin (bleeding, weeping, dark)',
  'New fever > 100.4°F / 38°C',
  'Sudden change in alertness',
  'Reduced urine output (less than half normal)',
  'New shortness of breath at rest',
  'Persistent vomiting',
  'New unexplained pain',
  'Patient asking to be allowed to refuse care',
] as const

const FAQS = [
  {
    question: 'A general caretaker vs a trained attendant — which is right for bedridden care?',
    answer:
      'Almost always a trained attendant. Bedridden care requires safe physical handling — repositioning, transfers, pressure-sore protocol — that general caretakers aren’t trained for. The cost difference is small (₹4,000–₹6,000/month) and the safety difference is significant.',
  },
  {
    question: 'How often should the patient be turned?',
    answer:
      'Every 2 hours, day and night. Even with a pressure-relief mattress. The international standard is 2-hour turning; we don’t deviate. Some patients with active sores need 90-minute turning.',
  },
  {
    question: 'Can two caregivers work together for a heavier patient?',
    answer:
      'Yes. For patients above 80kg or with very limited mobility, a two-person handling protocol reduces injury risk for both patient and caregiver. We can place a primary trained attendant with a second caregiver for transfer-only support.',
  },
  {
    question: 'What if a pressure sore develops despite protocol?',
    answer:
      'It happens — bedridden skin is fragile. Stage 1 sores are managed by the trained attendant. Stage 2+ sores require a nurse for dressing. We arrange nurse visits as needed and notify the family doctor for any wound that isn’t improving in 5–7 days.',
  },
  {
    question: 'Is hospital-grade equipment needed at home?',
    answer:
      'For most bedridden patients, a basic hospital bed (adjustable head, side rails) and an alternating-pressure mattress are recommended. Suction or oxygen are case-specific. We can recommend trusted Bangalore equipment vendors and help with setup.',
  },
  {
    question: 'How do you handle the emotional difficulty of bedridden care?',
    answer:
      'Bedridden patients often feel like a burden. The caregiver’s tone, presence, and patience matter as much as the protocol. We screen for calmness and warmth in addition to skill — and we share family communication updates to keep distant relatives connected.',
  },
  {
    question: 'What does live-in care for a bedridden patient cost in Bangalore?',
    answer:
      'A live-in trained attendant typically runs ₹24,000–₹34,000/month. Where two caregivers are needed (alternating 12-hour shifts) the combined cost is roughly ₹40,000–₹52,000/month. Nurse visits for wounds or IV are extra.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Bedridden Patient Care, Bangalore',
    medicalSpecialty: ['Geriatrics', 'Palliative care'],
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

export default function BedriddenCareView() {
  return (
    <CareSubpageShell
      currentLabel="Bedridden Patient Care"
      eyebrow="Bangalore · High-dependency care"
      headlineLead="Bedridden, but not"
      headlineAccent="held back."
      lede="Trained attendants for bedridden patients in Bangalore — pressure-sore prevention, dignified incontinence care, safe transfers, and the calm patience this work demands."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      {/* Direct answer */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-care-50 p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            Bedridden patient care should be done by a <em className="italic text-care-500">trained attendant</em>,
            not a general caretaker. The work — repositioning every two hours, twice-daily skin
            inspection, dignified incontinence care, and safe transfers — is unforgiving of inexperience.
            EzyHelpers places trained attendants live-in for ₹24,000–₹34,000/month.
          </p>
        </div>
      </section>

      <ConditionInfoSection info={CONDITION_INFO} />

      {/* Protocol */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="The bedridden care protocol"
            titleLead="Six disciplines,"
            titleMuted="every day, all day."
            lede="None of these are dramatic. All of them prevent the things that go wrong if no one is paying attention."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROTOCOL.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-care-50 text-care-500 ring-1 ring-care-500/15">
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

      {/* Red flags */}
      <section className="bg-care-50 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="When to escalate"
                titleLead="Eight signs"
                titleMuted="that need a doctor — today."
                lede="Bedridden patients deteriorate quietly. The trained attendants we place are taught to recognise these signs and act."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {RED_FLAGS.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2 rounded-2xl border border-care-500/20 bg-white px-4 py-3.5"
                  >
                    <span
                      aria-hidden
                      className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-care-500"
                    />
                    <span className="text-sm leading-snug text-neutral-800">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's covered */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="What’s covered"
            titleLead="A trained attendant"
            titleMuted="for bedridden care does:"
            align="center"
          />
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              'Two-hourly repositioning, day & night',
              'Twice-daily skin inspection (with photos)',
              'Bed-bath, hair and oral care',
              'Dignified incontinence and toilet care',
              'NG/PEG tube feeding observation',
              'Range-of-motion exercises 2–3× daily',
              'Hydration and nutrition tracking',
              'Safe transfers (with second caregiver if needed)',
              'Pressure-mattress & equipment maintenance',
              'Family WhatsApp updates daily',
              'Coordination with visit nurses for dressings',
              'Doctor escort and pharmacy runs',
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-[#F7F7F2] px-4 py-3.5"
              >
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-care-500" aria-hidden />
                <span className="text-sm leading-snug text-neutral-800">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CaregiverScopeSection />

      {/* FAQs */}
      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Bedridden care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Bedridden care, done well."
        headlineAccent="Quietly, day and night."
        body="Tell us about your situation. We respond within the hour and place a trained attendant before things drift."
        enquirySource={PATH}
        related={[
          { label: 'Trained Attendant', href: '/care-services/trained-attendant-services-bangalore' },
          { label: 'Stroke Care', href: '/care-services/stroke-care-at-home-bangalore' },
          { label: 'Cost guide', href: '/care-services/home-nursing-cost-bangalore' },
          { label: 'All Care Services', href: '/care-services' },
        ]}
      />
    </CareSubpageShell>
  )
}
