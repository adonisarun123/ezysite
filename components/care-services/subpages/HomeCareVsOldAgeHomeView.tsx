import {
  CheckIcon,
  XMarkIcon,
  HomeIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'

const PATH = '/care-services/home-care-vs-old-age-home'

const FACTORS = [
  {
    factor: 'Familiarity & emotional comfort',
    home: 'Highest, own bed, own home, family rhythm intact',
    facility: 'Lower, adjustment period of weeks to months',
    winner: 'home',
  },
  {
    factor: 'Cost (per month)',
    home: '₹18,000–₹35,000 (caretaker live-in)',
    facility: '₹35,000–₹1,20,000 (Bangalore mid-to-premium)',
    winner: 'home',
  },
  {
    factor: 'Round-the-clock supervision',
    home: 'Yes, with live-in caregiver',
    facility: 'Yes, by design',
    winner: 'tie',
  },
  {
    factor: 'Medical emergency response',
    home: 'Caregiver + ambulance to nearby hospital',
    facility: 'On-site nurse or doctor',
    winner: 'facility',
  },
  {
    factor: 'Social interaction with peers',
    home: 'Limited, depends on family & neighbours',
    facility: 'Higher, built-in peer community',
    winner: 'facility',
  },
  {
    factor: 'Family involvement',
    home: 'High, family is part of daily life',
    facility: 'Visit-based, varies by frequency',
    winner: 'home',
  },
  {
    factor: 'Dietary preferences (vegetarian, religious)',
    home: 'Exact, household-level customisation',
    facility: 'Standard menus, some flexibility',
    winner: 'home',
  },
  {
    factor: 'Suitability for advanced dementia',
    home: 'Possible with experienced caregivers',
    facility: 'Memory-care facilities are well-equipped',
    winner: 'facility',
  },
  {
    factor: 'Continuity if caregiver leaves',
    home: 'Replacement placement (1–7 days)',
    facility: 'Built-in continuity by staff rotation',
    winner: 'facility',
  },
  {
    factor: 'NRI family suitability',
    home: 'High, daily updates, family in charge',
    facility: 'High, independent operation',
    winner: 'tie',
  },
]

const HOME_PROS = [
  'Familiar surroundings, proven to slow dementia decline and reduce hospital readmissions',
  'Family stays meaningfully involved',
  'Customised diet, routine, and language',
  'Significantly more affordable',
  'Caregiver matched to patient, not assigned',
  'No adjustment trauma',
] as const

const HOME_CONS = [
  'Limited peer social interaction (without effort)',
  'Family must coordinate emergencies',
  'Caregiver continuity needs management',
  'Less suitable for very advanced dementia with severe wandering',
  'Family-arranged off-day cover',
] as const

const FACILITY_PROS = [
  'Built-in peer community',
  'On-site nursing or doctor (in better facilities)',
  'No caregiver-management burden on family',
  'Specialist memory-care environments',
  'Continuous staff coverage',
] as const

const FACILITY_CONS = [
  'Significantly higher cost (often 2–3× home care)',
  'Adjustment trauma, especially in first 8–12 weeks',
  'Loss of familiar surroundings',
  'Standardised diet and routine',
  'Family becomes visitor rather than co-carer',
  'Regulatory variability in Indian assisted living',
] as const

const FAQS = [
  {
    question: 'Honestly, which is better?',
    answer:
      'For most Indian families: home care is better when (a) the patient can be safely cared for at home, (b) someone is willing to be the family lead, and (c) the patient prefers home. A facility is better when (a) the patient has very advanced dementia with severe wandering or aggression, (b) no family member is reachable in emergencies, or (c) the patient genuinely prefers community living. We don’t have a stake in either answer.',
  },
  {
    question: 'How much more does an old age home cost?',
    answer:
      'In Bangalore, decent assisted-living facilities run ₹35,000–₹60,000/month for shared rooms, ₹70,000–₹1,20,000+ for private rooms. Memory-care units cost more. Home care with a live-in caretaker is ₹18,000–₹30,000/month. The difference is significant, often ₹3,00,000–₹6,00,000/year.',
  },
  {
    question: 'What about hybrid options, home care with day-care visits to a senior centre?',
    answer:
      'These work well in Bangalore, especially for early-to-mid stage dementia. Live-in or day-shift caregiver at home + 2–3 visits a week to a senior day-centre for peer interaction, activities, and respite. Combines the strengths of both.',
  },
  {
    question: 'Will my parent feel like a burden if we choose home care?',
    answer:
      'Sometimes, and that feeling deserves to be addressed, not dismissed. It usually softens when the caregiver builds a real relationship and the family adjusts to the rhythm. The opposite, a parent feeling abandoned in a facility they didn’t choose, is harder to repair.',
  },
  {
    question: 'How do we know if the patient is too advanced for home care?',
    answer:
      'Two signs: (1) the patient is wandering with intent to leave the home regularly despite locked doors and supervision, or (2) the family is no longer coping despite a trained attendant. Either is a valid reason to consider a facility, but most cases are manageable at home with the right caregiver.',
  },
  {
    question: 'Can EzyHelpers help us evaluate facilities too?',
    answer:
      'We don’t place patients in facilities, that’s outside our service. But we can have an honest conversation about whether home care is realistic in your situation, and we’ll tell you when we think a facility is the better choice.',
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

export default function HomeCareVsOldAgeHomeView() {
  return (
    <CareSubpageShell
      currentLabel="Home Care vs Old Age Home"
      eyebrow="Bangalore · Honest comparison"
      headlineLead="Home care or"
      headlineAccent="old age home?"
      lede="An honest comparison from people who do home care and aren’t pretending otherwise. Sometimes a facility is the right answer. Most of the time it isn’t."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-care-50 p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            Home care is right for <em className="italic text-care-500">most Indian families</em>, it’s
            cheaper, it preserves familiar surroundings, and it keeps family meaningfully involved. An old
            age home is right when the patient has very advanced dementia, no family is reachable in
            emergencies, or the family genuinely cannot cope despite trained help. We do home care, and
            we’ll tell you honestly when we think the other option is better.
          </p>
        </div>
      </section>

      {/* Two-card overview */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Side by side"
            titleLead="Two options,"
            titleMuted="ten honest comparisons."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <article className="flex h-full flex-col rounded-[28px] border border-care-500/30 bg-care-50 p-7 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-care-500 ring-1 ring-care-500/15">
                <HomeIcon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-careSerif text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                Home care
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                Caregiver lives at the patient’s home, providing personalised care matched to the family’s
                routine.
              </p>

              <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#1F8A4C]">Strengths</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {HOME_PROS.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-neutral-800">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#1F8A4C]" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>

              <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-care-500">Limitations</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {HOME_CONS.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-neutral-800">
                    <XMarkIcon className="mt-0.5 h-4 w-4 shrink-0 text-care-500" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </article>

            <article className="flex h-full flex-col rounded-[28px] border border-neutral-200 bg-white p-7 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2F7FB] text-care-500 ring-1 ring-care-500/15">
                <BuildingOffice2Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-careSerif text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                Old age home / assisted living
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                Patient moves to a residential facility with on-site staff, meals, peer community, and
                medical access.
              </p>

              <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#1F8A4C]">Strengths</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {FACILITY_PROS.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-neutral-800">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#1F8A4C]" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>

              <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-care-500">Limitations</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {FACILITY_CONS.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-neutral-800">
                    <XMarkIcon className="mt-0.5 h-4 w-4 shrink-0 text-care-500" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Factor-by-factor */}
      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="The honest table"
            titleLead="Ten factors,"
            titleMuted="who wins each."
            lede="Home care doesn’t win everything. We’re showing the full picture."
          />
          <div className="mt-12 overflow-hidden rounded-[24px] border border-neutral-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F7F7F2] text-xs uppercase tracking-[0.18em] text-neutral-600">
                <tr>
                  <th className="px-5 py-4 font-semibold">Factor</th>
                  <th className="px-5 py-4 font-semibold">Home care</th>
                  <th className="px-5 py-4 font-semibold">Old age home</th>
                  <th className="px-5 py-4 font-semibold">Better</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-800">
                {FACTORS.map((f) => (
                  <tr key={f.factor}>
                    <td className="px-5 py-4 font-semibold text-neutral-950">{f.factor}</td>
                    <td className="px-5 py-4 text-sm">{f.home}</td>
                    <td className="px-5 py-4 text-sm">{f.facility}</td>
                    <td className="px-5 py-4">
                      {f.winner === 'home' ? (
                        <span className="rounded-full bg-care-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-care-500">
                          Home
                        </span>
                      ) : f.winner === 'facility' ? (
                        <span className="rounded-full bg-care-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-care-500">
                          Facility
                        </span>
                      ) : (
                        <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-neutral-700">
                          Tie
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="The honest questions, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="A 5-minute call"
        headlineAccent="decides this clearly."
        body="Tell us your situation. We’ll be honest, even if home care isn’t the right answer for you."
        enquirySource={PATH}
        related={[
          { label: 'Elderly Care Services', href: '/care-services/elderly-care-services-bangalore' },
          { label: 'Dementia Care', href: '/care-services/dementia-alzheimers-care-bangalore' },
          { label: 'Cost guide', href: '/care-services/home-nursing-cost-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
