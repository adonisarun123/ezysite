import Link from 'next/link'
import {
  CheckIcon,
  ClockIcon,
  HeartIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  HandRaisedIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import ConditionInfoSection, { type ConditionInfo } from '../ConditionInfoSection'
import CareNeedsCovered, { type CareNeeds } from '../CareNeedsCovered'
import CaregiverScopeSection from '../CaregiverScopeSection'

const PATH = '/care-services/stroke-care-at-home-bangalore'

const CARE_NEEDS: CareNeeds = {
  conditionsCovered: ['One-side weakness', 'Speech difficulty', 'Swallowing changes', 'Post-stroke recovery', 'Paralysis'],
  careNeeds: [
    'Bed-to-chair transfer support',
    'Assisted walking',
    'Feeding support with swallowing awareness',
    'Bathing and toileting assistance',
    'Physiotherapy coordination',
    'Monitoring speech, swallowing, weakness and mood changes',
  ],
}

const CONDITION_INFO: ConditionInfo = {
  conditionName: 'Stroke',
  vitalStats: [
    {
      stat: '~1.8 million',
      detail: 'India sees an estimated 1.8 million strokes every year — among the country’s leading causes of death and disability.',
    },
    {
      stat: '~25%',
      detail: 'A stroke survivor has roughly a 1-in-4 chance of another stroke within five years — which is why home care includes recurrence vigilance.',
    },
    {
      stat: '1 in 3',
      detail: 'Around a third of stroke survivors experience post-stroke depression — often missed unless someone is watching daily.',
    },
  ],
  causes: [
    'High blood pressure — the single biggest modifiable risk factor',
    'Diabetes and high cholesterol damaging blood vessels over time',
    'Atrial fibrillation and other heart-rhythm problems that send clots to the brain',
    'Smoking and heavy alcohol use',
    'Obesity, inactivity and chronic kidney disease',
    'A previous stroke or TIA (mini-stroke) — the strongest warning of the next one',
  ],
  symptoms: [
    'Sudden weakness or numbness of the face, arm or leg — usually one side',
    'Facial drooping — an uneven smile is the classic sign',
    'Slurred speech or trouble finding words',
    'Sudden confusion or difficulty understanding what others say',
    'Sudden loss or blurring of vision in one or both eyes',
    'Sudden dizziness, loss of balance or trouble walking',
    'A sudden, severe headache with no known cause',
    'Remember B.E.F.A.S.T — Balance, Eyes, Face, Arm, Speech, Time to call an ambulance',
  ],
  whenYouNeedCare: [
    'Discharge is approaching and no one at home can manage transfers, feeding and medicines',
    'One-sided weakness means bathing, toileting and repositioning need trained hands',
    'Swallowing difficulty makes every meal an aspiration risk without supervision',
    'BP, sugar and blood-thinner schedules are too complex for the family to track reliably',
    'The patient is showing withdrawal or low mood, and recovery exercises are being skipped',
    'Family members work or live in another city, and recovery needs daily consistency',
  ],
}

const PHASES = [
  {
    n: '01',
    title: 'Acute discharge (week 1–2)',
    body:
      'The first 14 days after hospital discharge carry the highest risk of complications and falls. Care focuses on safe transfers, swallow assessment, medication adherence, BP and glucose monitoring, and consistent positioning to prevent pressure sores.',
    tone: 'rose',
  },
  {
    n: '02',
    title: 'Active recovery (week 3–12)',
    body:
      'Most measurable neurological recovery happens here. Care extends to physiotherapy support, range-of-motion exercises between sessions, speech and swallow practice, and gradual reintroduction of activities of daily living.',
    tone: 'sand',
  },
  {
    n: '03',
    title: 'Sub-acute (month 4–6)',
    body:
      'Strength and confidence-building. Caregivers help maintain therapy gains, expand mobility, and watch for late-onset depression — which affects nearly a third of stroke survivors and is often missed.',
    tone: 'sage',
  },
  {
    n: '04',
    title: 'Long-term maintenance (6 months +)',
    body:
      'A live-in or 12-hour caretaker focused on lifestyle, BP control, fall prevention, and dignity. The goal shifts from recovery to a stable, well-managed life at home.',
    tone: 'pearl',
  },
] as const

const TONE_BG: Record<(typeof PHASES)[number]['tone'], string> = {
  rose: 'bg-care-50',
  sand: 'bg-[#FAF6EE]',
  sage: 'bg-[#F1F6F0]',
  pearl: 'bg-[#F2F7FB]',
}

const TONE_NUM: Record<(typeof PHASES)[number]['tone'], string> = {
  rose: 'text-care-500',
  sand: 'text-[#B97A1F]',
  sage: 'text-[#1F8A4C]',
  pearl: 'text-care-500',
}

const DAILY_CARE = [
  { icon: HandRaisedIcon, t: 'Safe transfers & repositioning', d: 'Bed-to-chair, chair-to-toilet, change of position every 2 hours to prevent pressure sores.' },
  { icon: BeakerIcon, t: 'Swallow & feeding support', d: 'Texture-modified diet, upright positioning during meals, watching for aspiration signs.' },
  { icon: ChatBubbleLeftRightIcon, t: 'Speech & cognition practice', d: 'Daily conversation, naming exercises, supporting therapist-prescribed routines.' },
  { icon: ArrowTrendingUpIcon, t: 'Therapy continuity', d: 'Range-of-motion drills between physio visits, encouragement on harder days.' },
  { icon: ShieldCheckIcon, t: 'BP, glucose & medication', d: 'Strict timing, stroke-recurrence vigilance, and a written daily log for the family.' },
  { icon: HeartIcon, t: 'Mood & depression watch', d: 'Spotting withdrawal, sleep changes, or apathy early and flagging to the family.' },
] as const

const SIGNS_TO_ESCALATE = [
  'Sudden weakness on one side',
  'Slurred or new speech difficulty',
  'Severe headache, especially with vomiting',
  'New facial drooping',
  'Sudden vision change',
  'Confusion or unusual drowsiness',
  'Difficulty swallowing fluids',
  'BP > 180/110 or < 90/60',
] as const

const EXPERIENCE_SIGNALS = [
  'Has handled a post-stroke discharge in the last 12 months',
  'Comfortable with hemiplegic transfers and positioning',
  'Speaks the patient’s primary language fluently',
  'Trained in pressure-sore prevention protocol',
  'Comfortable supporting NG-tube or PEG feeding when prescribed',
  'Calm under sudden BP or seizure events',
] as const

const FAQS = [
  {
    question: 'How soon after discharge should home care start?',
    answer:
      'Ideally on the day of discharge — the first 48 hours carry the highest risk of falls, missed medication, and aspiration. We attempt same-day placement when discharge dates are confirmed in advance, and within 24 hours otherwise.',
  },
  {
    question: 'Is a nurse or a caretaker the right fit for stroke recovery?',
    answer:
      'It depends on the medical complexity. A trained caretaker handles repositioning, feeding, mobility, speech practice and routine BP/glucose checks — adequate for most uncomplicated recoveries. A nurse is needed if there are tracheostomy care, IV antibiotics, complex wound care, or unstable vitals. Many families combine: a caretaker live-in plus weekly nurse visits.',
  },
  {
    question: 'What does a typical stroke caregiver do in a day?',
    answer:
      'A consistent schedule — morning hygiene with safe transfers, breakfast in upright position, prescribed exercises and physiotherapy support, BP/glucose log, light activities to engage cognition, lunch, rest, evening walk if mobility allows, dinner, medication, and night-time positioning. The day is built around the recovery plan, not the caregiver’s convenience.',
  },
  {
    question: 'Do you provide caregivers trained in stroke-specific protocols?',
    answer:
      'Yes. We match caregivers who have managed a hemiplegic patient in the last 12 months and can demonstrate safe transfer technique. For higher-complexity cases — bedridden, tube-fed, or with significant aphasia — we place a Trained Attendant rather than a general caretaker.',
  },
  {
    question: 'How long do families typically need stroke home care?',
    answer:
      'Most families need full-day or live-in care for 3–6 months, transitioning to part-time after that. Stroke recovery is non-linear; we build in flexibility to scale care up or down based on how recovery is progressing.',
  },
  {
    question: 'What does stroke care at home cost in Bangalore?',
    answer:
      'A trained caretaker for stroke recovery typically costs ₹22,000–₹30,000/month for a live-in placement, ₹900–₹1,200/day for a 12-hour shift. A nurse for daily visits is ₹600–₹1,200 per visit. Final pricing depends on the care plan and the caregiver’s level of stroke-specific experience. A consultation gives you a precise number.',
  },
  {
    question: 'Can the same caregiver continue once recovery stabilises?',
    answer:
      'Yes — and continuity matters in stroke recovery. The caregiver who learns the patient’s routine, communication patterns, and warning signs in month one is far more effective in month four. We strongly encourage continuity placements.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Stroke Care at Home, Bangalore',
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

export default function StrokeCareView() {
  return (
    <CareSubpageShell
      currentLabel="Stroke Care at Home"
      eyebrow="Bangalore · Post-stroke recovery"
      headlineLead="Stroke recovery, brought home."
      headlineAccent="Day by day. Step by step."
      lede="Recovery from a stroke is a season, not a single event. We place caregivers who have walked alongside families through it before — matched to the recovery stage, not just the diagnosis."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      {/* Direct answer block (LLM-friendly) */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-[#F7F7F2] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            Stroke care at home in Bangalore should be matched to the recovery <em className="italic text-care-500">stage</em>.
            The first two weeks are about safety and complications. The next ten are when most recovery
            actually happens. After that, care is about continuity, mood, and preventing recurrence.
            EzyHelpers places caregivers with stage-appropriate experience — and adjusts the plan as the
            patient progresses.
          </p>
        </div>
      </section>

      <ConditionInfoSection info={CONDITION_INFO} />

      <CareNeedsCovered needs={CARE_NEEDS} />

      {/* Phases of stroke care */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Stages of recovery"
            titleLead="Care that adapts"
            titleMuted="as recovery progresses."
            lede="A stroke caregiver in week one is doing very different work from a caregiver in month six. We change the placement plan to match — and often the caregiver level itself."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {PHASES.map((p) => (
              <article
                key={p.n}
                className={`flex h-full flex-col rounded-[24px] border border-neutral-200 ${TONE_BG[p.tone]} p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]`}
              >
                <span className={`font-careSerif text-3xl font-medium ${TONE_NUM[p.tone]}`}>{p.n}</span>
                <h3 className="mt-3 font-careSerif text-xl font-bold tracking-tight text-neutral-950 sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Daily care included */}
      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="What’s included"
            titleLead="The day-to-day"
            titleMuted="of post-stroke care."
            lede="A trained stroke caregiver covers the daily fundamentals — and watches, quietly, for the things that go wrong if no one is paying attention."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DAILY_CARE.map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-care-50 text-care-500 ring-1 ring-care-500/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-careSerif text-lg font-bold tracking-tight text-neutral-950">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Stroke recurrence"
                titleLead="Eight signs"
                titleMuted="that need a hospital — now."
                lede="A stroke survivor has roughly a 25% chance of a recurrence within five years. Caregivers we place are taught to recognise these signs and call emergency services without waiting."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {SIGNS_TO_ESCALATE.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2 rounded-2xl border border-care-500/20 bg-care-50 px-4 py-3.5"
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

      {/* Caregiver experience signals */}
      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Why matching matters"
            titleLead="What a stroke-experienced caregiver"
            titleMuted="actually looks like."
            lede="Stroke recovery work is unforgiving of inexperience. We don’t place general caretakers on stroke cases — these are the things we verify before we shortlist."
            align="center"
          />
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {EXPERIENCE_SIGNALS.map((s) => (
              <li key={s} className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-care-500/10 text-care-500">
                  <CheckIcon className="h-3.5 w-3.5" aria-hidden />
                </span>
                <span className="text-sm leading-snug text-neutral-800">{s}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center text-sm text-neutral-500">
            For high-complexity cases (tracheostomy, NG/PEG-fed, severe aphasia) we place{' '}
            <Link
              href="/care-services/trained-attendant-services-bangalore"
              className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
            >
              Trained Attendants
            </Link>{' '}
            instead of general caretakers.
          </p>
        </div>
      </section>

      {/* Cost band */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Indicative cost in Bangalore"
            titleLead="What stroke care costs"
            titleMuted="(roughly)."
            lede="Final pricing depends on the recovery stage, complexity, hours of cover, and the caregiver’s experience. The ranges below are typical."
          />
          <div className="mt-10 overflow-hidden rounded-[24px] border border-neutral-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F7F7F2] text-xs uppercase tracking-[0.18em] text-neutral-600">
                <tr>
                  <th className="px-5 py-4 font-semibold">Arrangement</th>
                  <th className="px-5 py-4 font-semibold">Best for</th>
                  <th className="px-5 py-4 font-semibold">Typical range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-800">
                <tr>
                  <td className="px-5 py-4 font-semibold">Live-in caretaker</td>
                  <td className="px-5 py-4">Months 1–6 of recovery</td>
                  <td className="px-5 py-4 font-semibold text-neutral-950">₹22,000 – ₹30,000 / mo</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold">12-hour shift</td>
                  <td className="px-5 py-4">Active daytime recovery</td>
                  <td className="px-5 py-4 font-semibold text-neutral-950">₹900 – ₹1,200 / day</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold">Trained attendant (live-in)</td>
                  <td className="px-5 py-4">Bedridden / tube-fed</td>
                  <td className="px-5 py-4 font-semibold text-neutral-950">₹26,000 – ₹34,000 / mo</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold">Nurse visits</td>
                  <td className="px-5 py-4">Wound, IV, tracheostomy</td>
                  <td className="px-5 py-4 font-semibold text-neutral-950">₹600 – ₹1,200 / visit</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-neutral-500">
            See the full breakdown on our{' '}
            <Link
              href="/care-services/home-nursing-cost-bangalore"
              className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
            >
              home nursing cost guide
            </Link>
            .
          </p>
        </div>
      </section>

      <CaregiverScopeSection />

      {/* FAQs */}
      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Stroke care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Care, on the day of discharge."
        headlineAccent="Not the week after."
        body="Tell us your discharge plan. We respond within the hour, recommend the right level of care, and try to place a caregiver before you bring your loved one home."
        enquirySource={PATH}
        related={[
          { label: 'Home Nursing Services', href: '/care-services/home-nursing-services-bangalore' },
          { label: 'Trained Attendant', href: '/care-services/trained-attendant-services-bangalore' },
          { label: 'Patient Care', href: '/care-services/patient-care-services-bangalore' },
          { label: 'Cost guide', href: '/care-services/home-nursing-cost-bangalore' },
          { label: 'Care glossary', href: '/care-services/care-glossary' },
        ]}
      />
    </CareSubpageShell>
  )
}
