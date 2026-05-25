import {
  CheckIcon,
  HeartIcon,
  ShieldCheckIcon,
  BeakerIcon,
  ClockIcon,
  HandRaisedIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'

const PATH = '/care-services/cancer-care-at-home-bangalore'

const PHASES = [
  {
    n: 'Active treatment',
    title: 'During chemotherapy / radiation',
    body:
      'Symptom watch, hydration, nutrition through nausea, port and PICC line oversight (with visiting nurse), infection prevention, fatigue management, transport to and from cycles.',
  },
  {
    n: 'Recovery',
    title: 'Between cycles & post-treatment',
    body:
      'Energy rebuild, gentle activity, nutrition support, mood watch, follow-up coordination. Patients often need more help here than they expect.',
  },
  {
    n: 'Maintenance',
    title: 'Long-term remission',
    body:
      'Ongoing routine, energy management, follow-up scan support, return-to-work transition. Some families step care down; others maintain part-time companionship for years.',
  },
  {
    n: 'Palliative',
    title: 'Comfort-focused care',
    body:
      'When the focus shifts to comfort and dignity, our trained attendants and palliative-experienced caregivers provide patient-centred care with sensitivity for the patient and family.',
  },
] as const

const SUPPORT = [
  {
    icon: BeakerIcon,
    title: 'Nutrition through treatment',
    body:
      'Texture-modified meals during mucositis, hydration discipline, small frequent feeds, food-safety strict during low-counts periods.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Infection prevention',
    body:
      'Strict hand hygiene, masks during low immunity, careful food prep, daily temperature monitoring. Fever > 100.4°F is an emergency.',
  },
  {
    icon: ClockIcon,
    title: 'Cycle scheduling',
    body:
      'Driving to and from chemo cycles, transport coordination, accompaniment for blood tests and scans, helping the family track the calendar.',
  },
  {
    icon: HeartIcon,
    title: 'Fatigue management',
    body:
      'Cancer fatigue is profound and often under-treated. Caregivers help structure rest, gentle activity, and the small dignities that matter on bad days.',
  },
  {
    icon: HandRaisedIcon,
    title: 'Port & PICC line support',
    body:
      'Daily observation for redness or discharge, dressing care between nurse visits, escalation if anything looks wrong — minor complications caught early.',
  },
  {
    icon: SparklesIcon,
    title: 'Mood & companionship',
    body:
      'Cancer is isolating. A caregiver who reads, sits, listens, and is gently present makes the months between scans feel less heavy.',
  },
] as const

const FAQS = [
  {
    question: 'What kind of caregiver is right for cancer patients?',
    answer:
      'Most cancer patients need a caretaker for daily living plus a visiting nurse for port care, blood draws, or specific procedures. Advanced palliative care may need a trained attendant. We don’t place generalist caretakers without verified oncology experience.',
  },
  {
    question: 'Can the caregiver give chemo at home?',
    answer:
      'No — home chemotherapy administration requires a registered oncology nurse and physician oversight. We coordinate with home-chemo providers (where prescribed) but don’t provide chemo administration ourselves. Our caregivers handle everything around it.',
  },
  {
    question: 'How do you protect immunocompromised patients during treatment?',
    answer:
      'Strict hygiene, mask use during low-counts periods, careful food preparation (no raw meat, washed-only fruit), avoiding crowds, daily temperature monitoring, and the caregiver themselves staying home if they have any symptoms.',
  },
  {
    question: 'Is palliative care included?',
    answer:
      'Yes. We place trained attendants experienced in palliative and end-of-life care — calm, patient, dignity-first. Coordinated with the palliative care team where one is engaged.',
  },
  {
    question: 'What does cancer home care cost in Bangalore?',
    answer:
      'A live-in caretaker with oncology familiarity runs ₹22,000–₹30,000/month. Add 2–4 nurse visits weekly (₹600–₹1,200 each) for port care or treatment-day support. Palliative cases with trained attendants run higher: ₹26,000–₹38,000/month.',
  },
  {
    question: 'Can the caregiver accompany my parent to chemo cycles?',
    answer:
      'Yes. Hospital escort is standard. The caregiver accompanies the patient to the day-care chemotherapy unit, waits during the cycle, and brings them home safely. Many of our oncology placements involve weekly cycle days.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Cancer & Oncology Home Care, Bangalore',
    medicalSpecialty: ['Oncology', 'Palliative care'],
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

export default function CancerCareView() {
  return (
    <CareSubpageShell
      currentLabel="Cancer & Oncology Home Care"
      eyebrow="Bangalore · Oncology home care"
      headlineLead="Cancer care, at home."
      headlineAccent="Through every cycle."
      lede="Caregivers experienced in oncology — through chemo, between cycles, and the long months in between. Compassion, not just competence."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-[#F4F1FB] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B4FBE]">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            Cancer home care in Bangalore needs caregivers familiar with{' '}
            <em className="italic text-[#6B4FBE]">treatment cycles</em>, fatigue, infection risk, and the
            emotional weight families carry. We place oncology-experienced caretakers (₹22,000–₹30,000/month)
            and coordinate visiting nurses for port care. Chemotherapy itself is administered only by
            licensed oncology nurses or in hospital.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Phases of care"
            titleLead="Care that adapts"
            titleMuted="to where you are in treatment."
            lede="Active treatment, recovery between cycles, long-term maintenance, and palliative — different needs, different placements."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {PHASES.map((p) => (
              <article
                key={p.n}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <span className="inline-flex w-fit rounded-full bg-[#6B4FBE]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#6B4FBE]">
                  {p.n}
                </span>
                <h3 className="mt-4 font-careSerif text-xl font-bold tracking-tight text-neutral-950 sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F1FB] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="What we cover"
            titleLead="Six layers"
            titleMuted="of oncology home support."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SUPPORT.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE6FA] text-[#6B4FBE] ring-1 ring-[#6B4FBE]/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-careSerif text-lg font-bold tracking-tight text-neutral-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Hospital coordination"
            titleLead="We coordinate with"
            titleMuted="every major Bangalore oncology centre."
            align="center"
          />
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              'HCG Cancer Centre',
              'Manipal Comprehensive Cancer Centre',
              'Apollo Speciality Hospital',
              'Cytecare Cancer Hospital',
              'Narayana Health Cancer Centre',
              'Mazumdar Shaw Medical Centre',
              'Fortis Cancer Institute',
              'St John’s Cancer Care',
            ].map((h) => (
              <li
                key={h}
                className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-[#F7F7F2] px-4 py-3"
              >
                <CheckIcon className="h-4 w-4 shrink-0 text-[#6B4FBE]" aria-hidden />
                <span className="text-sm font-medium text-neutral-900">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Cancer care at home, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Compassion, through every cycle."
        headlineAccent="Through every scan."
        body="Tell us where you are in treatment. We’ll match a caregiver who has walked alongside families through this before."
        enquirySource={PATH}
        related={[
          { label: 'Patient Care Services', href: '/care-services/patient-care-services-bangalore' },
          { label: 'Home Nursing', href: '/care-services/home-nursing-services-bangalore' },
          { label: 'Cost guide', href: '/care-services/home-nursing-cost-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
