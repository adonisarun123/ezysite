import Link from 'next/link'
import { CheckIcon, XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'

const PATH = '/care-services/live-in-vs-day-shift-caregiver'

type Tri = 'yes' | 'partial' | 'no'

const ROWS: { capability: string; liveIn: Tri; day: Tri; night: Tri }[] = [
  { capability: 'Daytime supervision (8am–8pm)', liveIn: 'yes', day: 'yes', night: 'no' },
  { capability: 'Overnight presence', liveIn: 'yes', day: 'no', night: 'yes' },
  { capability: 'Continuity of routine', liveIn: 'yes', day: 'partial', night: 'partial' },
  { capability: 'Family privacy at night', liveIn: 'partial', day: 'yes', night: 'partial' },
  { capability: 'Lower monthly cost', liveIn: 'no', day: 'yes', night: 'yes' },
  { capability: 'Quick response to emergencies', liveIn: 'yes', day: 'partial', night: 'partial' },
  { capability: 'Suitable for working couples', liveIn: 'yes', day: 'yes', night: 'no' },
  { capability: 'Suitable for elderly parents alone', liveIn: 'yes', day: 'no', night: 'no' },
  { capability: 'Family caregiver respite', liveIn: 'yes', day: 'partial', night: 'yes' },
]

function Mark({ value }: { value: Tri }) {
  if (value === 'yes')
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1F8A4C]/12 text-[#1F8A4C]">
        <CheckIcon className="h-4 w-4" aria-hidden />
      </span>
    )
  if (value === 'no')
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
        <XMarkIcon className="h-4 w-4" aria-hidden />
      </span>
    )
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-[#B97A1F]/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#B97A1F]">
      Partial
    </span>
  )
}

const SCENARIOS = [
  {
    setup: 'Mother lives alone in Bangalore. Children abroad. Mild dementia.',
    answer: 'Live-in',
    why: 'Overnight presence is non-negotiable when there’s no one else in the home. Day-shift wouldn’t cover the highest-risk hours.',
  },
  {
    setup: 'Working couple. Father at home recovering from fracture. Wife works from home most days.',
    answer: 'Day shift (12 hours)',
    why: 'Wife provides nights and weekend cover. Day shift fills the working hours and is significantly cheaper.',
  },
  {
    setup: 'Bedridden patient. Family at home. Need overnight rest.',
    answer: 'Night shift + family days',
    why: 'Night shift covers the hardest hours so the family caregiver can sleep. Days are managed by the spouse or adult children.',
  },
  {
    setup: 'Recent post-stroke discharge. First two weeks of recovery.',
    answer: 'Live-in',
    why: 'Highest-risk period for falls, missed medication, and complications. Continuous presence matters most here.',
  },
] as const

const FAQS = [
  {
    question: 'How much cheaper is day shift than live-in?',
    answer:
      'A 12-hour day shift typically costs ₹22,000–₹32,000/month, vs ₹18,000–₹26,000/month for live-in. Live-in is often cheaper because the caregiver lives at the home (no daily commute, no overtime). Day shift becomes cheaper only when family members can cover the other hours, otherwise you’re paying for two shifts.',
  },
  {
    question: 'Can I switch from live-in to day shift later?',
    answer:
      'Yes. Many families start with live-in during recovery or crisis, then step down to day shift as the patient stabilises. We adjust the placement; the caregiver may continue or change depending on what fits.',
  },
  {
    question: 'What does "live-in" actually mean for the caregiver?',
    answer:
      'Live-in caregivers stay at the home with one weekly off-day (typically Sunday) and one daily rest period of 2 hours (typically afternoon). Family provides meals, a bed, and basic toiletries. They’re present 24×7 but not awake 24×7, sleep is part of the arrangement.',
  },
  {
    question: 'Can a live-in caregiver wake up at night for the patient?',
    answer:
      'Yes, for medication, toileting, or emergencies. Live-in caregivers are expected to respond to night-time needs. For patients who genuinely need active care every 1–2 hours all night (advanced dementia, bedridden with frequent repositioning), two caregivers in alternating 12-hour shifts is more sustainable.',
  },
  {
    question: 'Is night shift available alone?',
    answer:
      'Yes. Some families need only night cover, when the patient sleeps poorly, has dementia-driven night agitation, or when the family caregiver needs to sleep. Night shifts run ₹1,000–₹1,400/day in Bangalore.',
  },
  {
    question: 'How do live-in caregivers get their off-day?',
    answer:
      'One full day off per week, typically Sunday. The family arranges cover during this time, either through us (substitute caregiver), a family member, or a nearby relative. We can include the off-day cover in the placement plan if needed.',
  },
] as const

const JSONLD = [
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

export default function LiveInVsDayShiftView() {
  return (
    <CareSubpageShell
      currentLabel="Live-in vs Day-Shift"
      eyebrow="Bangalore · Decision guide"
      headlineLead="Live-in or day shift?"
      headlineAccent="Cost, coverage, comfort."
      lede="Both arrangements are common. The right one depends less on the patient and more on who else is in the home."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-[#F2F7FB] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            <em className="italic text-care-500">Live-in</em> is the right choice when the patient cannot
            be alone, alone-living seniors, recent post-discharge, advanced dementia, or bedridden care.{' '}
            <em className="italic text-care-500">Day shift</em> is right when family is available the rest
            of the time, working couples sharing care, a spouse covering nights, or recovery from a minor
            surgery.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Side by side"
            titleLead="What each arrangement"
            titleMuted="actually delivers."
          />
          <div className="mt-12 overflow-hidden rounded-[24px] border border-neutral-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F7F7F2] text-xs uppercase tracking-[0.18em] text-neutral-600">
                <tr>
                  <th className="px-5 py-4 font-semibold">Capability</th>
                  <th className="px-5 py-4 text-center font-semibold">Live-in</th>
                  <th className="px-5 py-4 text-center font-semibold">Day shift</th>
                  <th className="px-5 py-4 text-center font-semibold">Night shift</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-800">
                {ROWS.map((r) => (
                  <tr key={r.capability}>
                    <td className="px-5 py-4 font-semibold text-neutral-950">{r.capability}</td>
                    <td className="px-5 py-4 text-center">
                      <Mark value={r.liveIn} />
                    </td>
                    <td className="px-5 py-4 text-center">
                      <Mark value={r.day} />
                    </td>
                    <td className="px-5 py-4 text-center">
                      <Mark value={r.night} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Real situations"
            titleLead="Four families,"
            titleMuted="four right answers."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {SCENARIOS.map((s) => (
              <article
                key={s.setup}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-care-500">Situation</p>
                <p className="mt-2 font-careSerif text-lg leading-snug text-neutral-900 sm:text-xl">
                  {s.setup}
                </p>
                <div className="mt-5 border-t border-neutral-200 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Recommended
                  </p>
                  <p className="mt-2 font-careSerif text-xl font-bold text-neutral-950 sm:text-2xl">
                    {s.answer}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">{s.why}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Cover questions, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Right cover, right cost."
        headlineAccent="Decided in a single call."
        body="Tell us who else is at home and what hours need covering. We’ll recommend the right arrangement and a precise cost."
        enquirySource={PATH}
        related={[
          { label: 'Cost guide', href: '/care-services/home-nursing-cost-bangalore' },
          { label: 'Nurse vs Caretaker', href: '/care-services/home-nurse-vs-caretaker' },
          { label: 'Cost calculator', href: '/care-services/cost-calculator' },
        ]}
      />
    </CareSubpageShell>
  )
}
