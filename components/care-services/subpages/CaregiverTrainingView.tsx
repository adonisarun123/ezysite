import {
  AcademicCapIcon,
  CheckIcon,
  ClockIcon,
  ShieldCheckIcon,
  HeartIcon,
  HandRaisedIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'

const PATH = '/care-services/caregiver-training'

const CORE_MODULES = [
  {
    n: '01',
    title: 'Hygiene & infection control',
    hours: '8 hrs',
    body:
      'Hand hygiene, PPE basics, safe disposal, prevention of communicable infection, sterile technique for wounds and catheters.',
  },
  {
    n: '02',
    title: 'Safe handling & transfers',
    hours: '12 hrs',
    body:
      'Bed-to-chair, chair-to-toilet, change of position, two-person lifts, fall-prevention, body mechanics for the caregiver.',
  },
  {
    n: '03',
    title: 'Vital signs & escalation',
    hours: '6 hrs',
    body:
      'BP, SpO₂, pulse, glucose, temperature — measurement, recording, recognising emergencies, when to call the family vs. an ambulance.',
  },
  {
    n: '04',
    title: 'Medication & adherence',
    hours: '6 hrs',
    body:
      'Reading prescriptions, dosage timing, identifying side effects, the difference between a reminder and an administration (only nurses administer).',
  },
  {
    n: '05',
    title: 'Nutrition & feeding',
    hours: '6 hrs',
    body:
      'Texture-modified diets, swallow safety, hydration tracking, NG/PEG feeding observation, signs of aspiration.',
  },
  {
    n: '06',
    title: 'Communication & dignity',
    hours: '8 hrs',
    body:
      'Family-centred communication, validation techniques, cultural sensitivity, end-of-life conversations, language as care.',
  },
] as const

const SPECIALISATIONS = [
  {
    icon: HeartIcon,
    title: 'Dementia & Alzheimer’s',
    hours: '24 hrs',
    body:
      'Stage-based care, sundowning, wandering, bathing resistance, validation therapy, behavioural escalation management.',
  },
  {
    icon: HandRaisedIcon,
    title: 'Post-stroke recovery',
    hours: '20 hrs',
    body:
      'Hemiplegic transfers, swallow assessment, speech support, range-of-motion drills, recurrence warning signs.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Bedridden patient care',
    hours: '20 hrs',
    body:
      'Pressure-sore prevention protocol, repositioning schedule, incontinence care with dignity, feeding-tube comfort, contracture prevention.',
  },
  {
    icon: BeakerIcon,
    title: 'Post-surgical recovery',
    hours: '16 hrs',
    body:
      'Wound observation (not dressing — that’s nursing), drain care, mobilisation timing, pain assessment, complication watch.',
  },
] as const

const ASSESSMENT = [
  {
    title: 'Written assessment',
    body: 'A 60-question multiple-choice paper covering all core modules. Pass mark 75%.',
  },
  {
    title: 'Practical demonstration',
    body: 'On-site demonstration of safe transfer, hygiene technique, and vitals measurement. Two senior nurses observe and grade.',
  },
  {
    title: 'Scenario interview',
    body: '“What would you do if…” — five real-world scenarios. We’re looking for calm, judgement, and willingness to escalate.',
  },
  {
    title: 'Probationary placement',
    body: 'First placement is shadowed remotely with daily check-ins. Performance feedback informs whether the caregiver is cleared for independent placements.',
  },
] as const

const FAQS = [
  {
    question: 'Is your training accredited or certified?',
    answer:
      'Our internal curriculum is reviewed by our Care Director (B.Sc Nursing). Many caregivers also hold external certifications from registered nursing schools or attendant training programmes. We list both internal and external training in the caregiver profile shared with families.',
  },
  {
    question: 'How long is the full training programme?',
    answer:
      'Core modules total 46 hours. Specialisations add 16–24 hours each. Most caregivers complete one specialisation; trained attendants and dementia-specialist caregivers complete two.',
  },
  {
    question: 'Do you train caregivers on cultural and dietary sensitivities?',
    answer:
      'Yes. Indian families have specific dietary, religious and routine preferences. Module 06 (Communication & Dignity) covers vegetarian/Jain dietary norms, fasting practices, festival routines, and prayer-time accommodation. We don’t treat these as optional.',
  },
  {
    question: 'Is training ongoing or one-time?',
    answer:
      'Ongoing. Active caregivers attend a 4-hour refresher every quarter. Anytime our protocols change — for example if dementia evidence updates or we add a new condition specialisation — affected caregivers are recalled for the relevant module.',
  },
  {
    question: 'Can a family request additional training for a specific case?',
    answer:
      'Yes. For high-complexity cases (rare conditions, advanced equipment, very specific routines), we run case-specific orientation with the caregiver before placement begins. We coordinate with the family doctor where helpful.',
  },
  {
    question: 'What languages is training delivered in?',
    answer:
      'Hindi and Kannada primarily, with English available for caregivers who prefer it. Materials are bilingual to ensure caregivers from any region can be trained to the same standard.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'EzyHelpers Caregiver Training Programme',
    provider: { '@type': 'Organization', name: 'EzyHelpers' },
    educationalCredentialAwarded: 'Internal certification + specialisation badges',
    url: `https://www.ezyhelpers.com${PATH}`,
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

export default function CaregiverTrainingView() {
  return (
    <CareSubpageShell
      currentLabel="Caregiver Training"
      eyebrow="Curriculum · Bangalore"
      headlineLead="What our caregivers learn"
      headlineAccent="before they enter your home."
      lede="Forty-six core hours, four specialisations, four assessments, and a probationary placement before independent work. The curriculum, not just the slogan."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      {/* Direct answer */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-[#F1F6F0] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1F8A4C]">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            Every EzyHelpers caregiver completes <em className="italic text-[#1F8A4C]">46 hours</em> of core
            training (hygiene, safe transfers, vitals, medication, nutrition, communication) plus at least
            one specialisation (dementia, post-stroke, bedridden, or post-surgical) before they’re cleared
            for independent placement. Training is reviewed quarterly and signed off by our Care Director.
          </p>
        </div>
      </section>

      {/* Core modules */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Core curriculum"
            titleLead="Six modules,"
            titleMuted="forty-six hours."
            lede="The non-negotiable foundation. Every caregiver completes all six before any placement."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_MODULES.map((m) => (
              <article
                key={m.n}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-careSerif text-3xl font-medium text-[#FF385C]">{m.n}</span>
                  <span className="rounded-full bg-neutral-900/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-700">
                    {m.hours}
                  </span>
                </div>
                <h3 className="mt-5 font-careSerif text-lg font-bold tracking-tight text-neutral-950 sm:text-xl">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Specialisations */}
      <section className="bg-[#FBF3F1] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Specialisations"
            titleLead="Above the foundation,"
            titleMuted="condition-specific depth."
            lede="Caregivers placed on specialised cases complete the relevant specialisation. We don’t place a generalist caregiver on a stroke or dementia case."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {SPECIALISATIONS.map(({ icon: Icon, title, hours, body }) => (
              <div
                key={title}
                className="flex items-start gap-5 rounded-[24px] border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF0EA] text-[#FF385C] ring-1 ring-[#FF385C]/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-careSerif text-lg font-bold tracking-tight text-neutral-950">{title}</h3>
                    <span className="rounded-full bg-[#FF385C]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#FF385C]">
                      {hours}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Assessment"
            titleLead="Four checks"
            titleMuted="before independent placement."
            lede="Training without assessment is theatre. Every caregiver clears all four — and is held back if they don’t."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ASSESSMENT.map((a, i) => (
              <div
                key={a.title}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-[#F7F7F2] p-6"
              >
                <span className="font-careSerif text-3xl font-medium text-[#1F8A4C]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-careSerif text-lg font-bold tracking-tight text-neutral-950">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuing education */}
      <section className="bg-[#F2F7FB] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Continuing education"
            titleLead="Training doesn’t stop"
            titleMuted="when training stops."
            lede="Quarterly refreshers. Protocol updates as evidence shifts. Module recalls when something improves. The bar moves up, never down."
            align="center"
          />
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              'Quarterly 4-hour refresher (mandatory)',
              'Annual re-assessment & re-certification',
              'Protocol updates within 30 days',
              'Specialisation upgrades for active caregivers',
              'Mentor pairing for first 3 placements',
              'Anonymised case-study reviews',
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5"
              >
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#0074C8]" aria-hidden />
                <span className="text-sm leading-snug text-neutral-800">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Training, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Trained for the moments"
        headlineAccent="that actually matter."
        body="Tell us what you need. We’ll match you with a caregiver whose training matches the case — not just the calendar."
        enquirySource={PATH}
        related={[
          { label: 'Verification Process', href: '/care-services/caregiver-verification-process' },
          { label: 'Care Leadership', href: '/care-services/care-leadership' },
          { label: 'All Care Services', href: '/care-services' },
        ]}
      />
    </CareSubpageShell>
  )
}
