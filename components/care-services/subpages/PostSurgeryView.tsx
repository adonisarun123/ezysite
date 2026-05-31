import {
  CheckIcon,
  ClockIcon,
  HeartIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  HandRaisedIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'

const PATH = '/care-services/post-surgery-recovery-bangalore'

const PHASES = [
  {
    n: '01',
    title: 'Day of discharge — Day 3',
    body:
      'Wound and drain monitoring, pain management discipline, careful first-mobilisation, anti-coagulation oversight where prescribed, hydration. The window for early complications is here.',
  },
  {
    n: '02',
    title: 'Week 1 — 2',
    body:
      'Mobilisation expands. Diet broadens. Constipation watch (a real post-op problem most caregivers miss). First post-op review with the surgeon. Wound dressing changes if needed.',
  },
  {
    n: '03',
    title: 'Week 3 — 6',
    body:
      'Activity gradually returns. Physiotherapy if prescribed. Watch for late infection, deep vein thrombosis warning signs, and slow-healing wounds (especially in diabetic patients).',
  },
  {
    n: '04',
    title: 'Week 6+',
    body:
      'Most patients return to baseline. Care steps down to part-time or weekly check-ins. Continued monitoring for slow-recovery cases (orthopaedic, cardiac, abdominal).',
  },
] as const

const SURGERY_TYPES = [
  { name: 'Knee / hip replacement', care: 'Trained attendant + physiotherapy support' },
  { name: 'Cardiac bypass / valve', care: 'Nurse + caretaker, doctor-aligned' },
  { name: 'Abdominal / GI surgery', care: 'Caretaker + visiting nurse' },
  { name: 'Spinal surgery', care: 'Trained attendant — careful handling' },
  { name: 'Orthopaedic fracture fixation', care: 'Caretaker, physiotherapy follow-through' },
  { name: 'Neurosurgery', care: 'Specialist trained attendant + nurse' },
  { name: 'Bariatric / weight-loss', care: 'Caretaker, dietary continuity' },
  { name: 'Day-care / minor surgery', care: 'Visit nurse + family' },
] as const

const RED_FLAGS = [
  'Fever > 101°F (38.3°C)',
  'New or worsening wound pain or redness',
  'Pus or unusual discharge from wound',
  'Sudden swelling or pain in calf',
  'Sudden chest pain or shortness of breath',
  'Vomiting that won’t stop',
  'No urine output for 8+ hours',
  'New confusion or extreme drowsiness',
] as const

const FAQS = [
  {
    question: 'When should home care start after surgery?',
    answer:
      'On the day of discharge, ideally. The first 72 hours are the highest-risk window for falls, missed medication, and missed early complications. We attempt same-day placement when discharge dates are confirmed in advance.',
  },
  {
    question: 'Do I need a nurse, a caretaker, or both?',
    answer:
      'It depends on the surgery. Cardiac, vascular, neuro, or any surgery with drains and IV typically needs a nurse for at least the first week, plus a caretaker. Orthopaedic and abdominal surgeries usually need a trained caretaker only, with a visit nurse for occasional dressing.',
  },
  {
    question: 'How long is post-surgery home care needed?',
    answer:
      'Highly variable. Knee replacements: 6–12 weeks of full-time care. Cardiac bypass: 4–8 weeks. Abdominal: 2–6 weeks. Most plans step down: full-time live-in for 2 weeks, day-shift for 2 weeks, then weekly check-ins.',
  },
  {
    question: 'Can the caregiver coordinate with my surgeon?',
    answer:
      'Yes. We brief the caregiver on the surgical plan and post-op instructions before placement begins. They maintain a daily log shared with the family and can attend follow-up appointments.',
  },
  {
    question: 'What does post-surgery home care cost in Bangalore?',
    answer:
      'For most patients: a live-in caretaker (₹18,000–₹26,000/month) plus 4–6 nurse visits in week one (₹600–₹1,200 each). Cardiac and high-complexity surgeries may need a live-in nurse (₹35,000–₹55,000/month) for the first 2 weeks before stepping down.',
  },
  {
    question: 'Is it cheaper than staying in hospital?',
    answer:
      'Almost always. A private hospital room is ₹8,000–₹15,000/day before nursing, food, or medication. A live-in caretaker plus nurse visits at home runs ₹650–₹1,000/day all-in. For most stable post-op patients, home recovery costs 80–90% less per day.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Post-Surgery Recovery Care, Bangalore',
    medicalSpecialty: ['Surgery', 'Rehabilitation'],
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

export default function PostSurgeryView() {
  return (
    <CareSubpageShell
      currentLabel="Post-Surgery Recovery Care"
      eyebrow="Bangalore · Post-operative home care"
      headlineLead="Recovery, brought home."
      headlineAccent="On the day of discharge."
      lede="Home care matched to your surgery — wound oversight, mobilisation discipline, pain management support, and the steady daily rhythm patients need to heal well."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-[#F2F7FB] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            Post-surgery home care should start on the <em className="italic text-primary-500">day of discharge</em>.
            For most surgeries, a trained caretaker plus 4–6 nurse visits in week one is enough. Cardiac,
            neuro, and complex cases need a live-in nurse for the first two weeks. Care steps down as
            recovery progresses.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="The recovery curve"
            titleLead="Care that matches"
            titleMuted="how recovery actually goes."
            lede="Post-op recovery isn’t flat. We change the placement plan as the curve does."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {PHASES.map((p) => (
              <article
                key={p.n}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-[#F7F7F2] p-7"
              >
                <span className="font-careSerif text-3xl font-medium text-primary-500">{p.n}</span>
                <h3 className="mt-3 font-careSerif text-xl font-bold tracking-tight text-neutral-950 sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="By surgery type"
            titleLead="What kind of care"
            titleMuted="for which surgery."
            lede="A representative match. We refine to your specific case during consultation."
          />
          <div className="mt-12 overflow-hidden rounded-[24px] border border-neutral-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-white text-xs uppercase tracking-[0.18em] text-neutral-600">
                <tr className="border-b border-neutral-200">
                  <th className="px-5 py-4 font-semibold">Surgery</th>
                  <th className="px-5 py-4 font-semibold">Recommended care arrangement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-800">
                {SURGERY_TYPES.map((s) => (
                  <tr key={s.name}>
                    <td className="px-5 py-4 font-semibold text-neutral-950">{s.name}</td>
                    <td className="px-5 py-4">{s.care}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="When to call the doctor"
                titleLead="Eight signs"
                titleMuted="that need attention — today."
                lede="Post-op complications often catch families off guard. Caregivers we place are taught to escalate without waiting."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {RED_FLAGS.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2 rounded-2xl border border-primary-500/20 bg-primary-50 px-4 py-3.5"
                  >
                    <span aria-hidden className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                    <span className="text-sm leading-snug text-neutral-800">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Post-surgery care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="On your gate before the discharge papers."
        headlineAccent="Not after."
        body="Tell us your discharge plan. We respond within the hour and try to place a caregiver before you bring your loved one home."
        enquirySource={PATH}
        related={[
          { label: 'Hospital Discharge Care', href: '/care-services/hospital-discharge-care-bangalore' },
          { label: 'Home Healthcare', href: '/care-services/home-healthcare-services-bangalore' },
          { label: 'Cost guide', href: '/care-services/home-nursing-cost-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
