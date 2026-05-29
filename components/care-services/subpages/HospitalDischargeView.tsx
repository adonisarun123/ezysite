import {
  CheckIcon,
  ClockIcon,
  HomeIcon,
  ShieldCheckIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'

const PATH = '/care-services/hospital-discharge-care-bangalore'

const TIMELINE = [
  { when: 'Day -2', title: 'Discharge confirmed', body: 'Doctor confirms discharge date. Family calls EzyHelpers to start matching.' },
  { when: 'Day -1', title: 'Shortlist & briefing', body: 'Caregiver shortlist sent. Family selects. Caregiver briefed on discharge plan and medications.' },
  { when: 'Day 0', title: 'Arrival & placement', body: 'Caregiver arrives at the home before the patient does. Bed setup, equipment, supplies confirmed.' },
  { when: 'Day +1', title: 'First night', body: 'Caregiver covers the first night. Family rests. Daily WhatsApp update starts.' },
  { when: 'Week 1', title: 'Settled rhythm', body: 'Care plan is steady. Nurse visits scheduled. First-week review with family.' },
] as const

const HOSPITALS = [
  'Manipal Hospitals (HAL, Whitefield, Jayanagar, Old Airport Road)',
  'Apollo Hospitals (Bannerghatta, Sheshadripuram)',
  'Fortis Hospitals (Bannerghatta, Cunningham Road)',
  'Narayana Health (Health City, Multispeciality units)',
  'Sakra World Hospital, Whitefield',
  'Aster CMI, Hebbal',
  'BGS Gleneagles Global, Kengeri',
  'Columbia Asia (Whitefield, Hebbal, Yeshwanthpur)',
  'Vikram Hospital, Millers Road',
  'St John’s Medical College, Koramangala',
  'Ramaiah Memorial Hospital, MS Ramaiah Nagar',
  'Hosmat, Magrath Road',
] as const

const CHECKLIST = [
  'Discharge summary with prescription',
  'Wound or surgical site description',
  'Medication chart with timings',
  'Follow-up appointment date and consultant',
  'Equipment recommended (hospital bed, oxygen, suction)',
  'Diet and activity restrictions',
  'Warning signs the family should watch for',
  'Emergency contact and ambulance number',
] as const

const FAQS = [
  {
    question: 'Can you really place a caregiver on the day of discharge?',
    answer:
      'For most situations, yes — provided we have at least 24 hours’ notice. Discharge dates often shift; we plan for two scenarios (morning vs afternoon discharge) and the caregiver is briefed and on standby.',
  },
  {
    question: 'What if discharge is sudden — same day notice?',
    answer:
      'We try. Same-day placement is harder but not impossible — Bangalore’s caregiver density is good. If we can’t place that day, we typically place by next morning. The caregiver doing a "second night" while you wait is rare.',
  },
  {
    question: 'Should I arrange a nurse, a caretaker, or both?',
    answer:
      'Depends on the discharge. Cardiac, neuro, complex GI surgery, or any discharge with active drains/IV usually needs a nurse for at least week one, plus a caretaker. Orthopaedic, abdominal, or stable post-op typically needs a trained caretaker only with a visit nurse for occasional dressing.',
  },
  {
    question: 'Do you coordinate with the hospital social worker / discharge planner?',
    answer:
      'Yes — most major Bangalore hospitals have discharge coordinators we work with regularly. We can speak directly to the discharge nurse or social worker if helpful, and they often refer families to us.',
  },
  {
    question: 'Will my insurance cover this?',
    answer:
      'Skilled nursing for medically necessary post-discharge care is often covered under "domiciliary hospitalisation" clauses. Caretaker services typically aren’t. See our insurance guide for plan-specific notes — and we’ll provide the documentation needed for claims.',
  },
  {
    question: 'How much does discharge home care typically cost?',
    answer:
      'A live-in caretaker for the first month is ₹18,000–₹26,000. Add 4–8 nurse visits in week one (₹600–₹1,200 each) for clinical needs. Complex cases requiring a live-in nurse run ₹35,000–₹55,000/month. Cost calculator can give a closer estimate.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Hospital Discharge Home Care, Bangalore',
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

export default function HospitalDischargeView() {
  return (
    <CareSubpageShell
      currentLabel="Hospital Discharge Home Care"
      eyebrow="Bangalore · Same-day placement"
      headlineLead="Care, on the day"
      headlineAccent="of discharge."
      lede="The first 48 hours after a hospital discharge are the highest-risk window. We try to place a caregiver before your loved one leaves the ward."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-[#F2F7FB] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0074C8]">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            Discharge home care should be set up <em className="italic text-[#0074C8]">before discharge</em>,
            not after. With 24 hours’ notice, we shortlist, brief and place a caregiver who arrives at the
            home before the patient does. Across Manipal, Apollo, Fortis, Sakra, Narayana, Aster, and the
            other major Bangalore hospitals.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="The discharge timeline"
            titleLead="From confirmed discharge"
            titleMuted="to settled at home."
            lede="An ideal sequence. We adapt for sudden discharges and complications."
          />
          <ol className="mt-12 space-y-4">
            {TIMELINE.map((t) => (
              <li
                key={t.when}
                className="flex items-start gap-5 rounded-2xl border border-neutral-200 bg-[#F7F7F2] px-6 py-5"
              >
                <span className="font-careSerif text-lg font-medium text-[#FF385C] sm:text-xl min-w-[4.5rem]">
                  {t.when}
                </span>
                <div>
                  <h3 className="font-careSerif text-lg font-bold tracking-tight text-neutral-950">{t.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600 sm:text-base">{t.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Bangalore hospitals"
            titleLead="We coordinate with"
            titleMuted="every major hospital in the city."
            lede="Caregivers know the layouts, discharge processes, and consultant teams. Coordination with hospital social workers is routine."
          />
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {HOSPITALS.map((h) => (
              <div key={h} className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-4">
                <BuildingOffice2Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#0074C8]" aria-hidden />
                <span className="text-sm font-medium text-neutral-900">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="What we’ll need from you"
            titleLead="Eight things"
            titleMuted="from the discharge summary."
            lede="The faster you can share these, the faster we can match the right caregiver. Most are on the discharge summary — your hospital social worker can help if anything is missing."
            align="center"
          />
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {CHECKLIST.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-[#F7F7F2] px-4 py-3.5"
              >
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#0074C8]" aria-hidden />
                <span className="text-sm leading-snug text-neutral-800">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Discharge care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Care, before the discharge papers."
        headlineAccent="Not the day after."
        body="Tell us your hospital and discharge plan. We respond within the hour and start matching today."
        enquirySource={PATH}
        primaryCtaLabel="Set up discharge care"
        related={[
          { label: 'Post-Surgery Recovery', href: '/care-services/post-surgery-recovery-bangalore' },
          { label: 'Insurance & Home Care', href: '/care-services/insurance-and-home-care-bangalore' },
          { label: 'Cost guide', href: '/care-services/home-nursing-cost-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
