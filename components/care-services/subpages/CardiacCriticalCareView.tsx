import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { CheckIcon } from '@heroicons/react/24/outline'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'cardiac-critical-care-at-home-bangalore'
const PATH = `/care-services/${SLUG}`
const NESTED = getNestedService(SLUG)!

const SECTIONS: { title: string; lede?: string; bullets: string[] }[] = [
  {
    title: 'What cardiac critical care involves',
    lede: 'Continuous cardiac monitoring and post-event support, delivered at home under doctor supervision.',
    bullets: [
      'Continuous ECG, heart-rate, blood-pressure and SpO₂ monitoring',
      'Cardiac medication management and timing',
      'Watch for warning signs and early deterioration',
      'Fluid, oxygen and symptom support as prescribed',
      'Daily clinical logs shared with your cardiologist',
    ],
  },
  {
    title: 'Who needs cardiac critical care at home',
    bullets: [
      'Patients recovering after a heart attack or cardiac event',
      'Post-cardiac-surgery patients in the monitoring window',
      'Heart-failure patients needing close observation',
      'Families wanting continuous monitoring without a long hospital stay',
    ],
  },
  {
    title: 'Equipment and staffing',
    bullets: [
      'Multi-parameter cardiac monitor and emergency support equipment',
      'Oxygen supply and infusion support where required',
      'Critical-care nurses experienced in cardiac monitoring',
      'Doctor / cardiologist oversight of the care plan and medication',
      'Coordination with your treating cardiology team',
    ],
  },
  {
    title: 'Safety and oversight',
    lede: 'Cardiac events can change quickly, so rapid recognition and escalation are built in.',
    bullets: [
      'Agreed escalation thresholds and a nurse-to-doctor protocol',
      'A defined emergency pathway to a partner hospital with ambulance',
      'Medication-safety checks and adherence monitoring',
      'Family briefed on cardiac warning signs and when to call',
    ],
  },
]

const FAQS = [
  {
    question: 'Can cardiac patients be monitored safely at home?',
    answer:
      'Yes, for clinically stable patients, continuous cardiac monitoring at home is delivered by critical-care nurses under cardiologist supervision, with a clear escalation pathway. Suitability is always confirmed by your treating doctor. This is general information, not medical advice.',
  },
  {
    question: 'What kind of monitoring is provided?',
    answer:
      'A multi-parameter monitor tracks ECG, heart rate, blood pressure and oxygen saturation continuously. The nurse logs readings, watches for warning signs and escalates to the doctor when readings cross agreed thresholds.',
  },
  {
    question: 'Is a doctor involved in cardiac critical care at home?',
    answer:
      'Yes. A supervising doctor / cardiologist guides the care plan, reviews the daily logs and adjusts medication in coordination with your treating cardiology team. Nurses provide round-the-clock bedside care.',
  },
  {
    question: 'What happens if there is a cardiac emergency?',
    answer:
      'Every setup has a defined emergency pathway with agreed thresholds, a nurse-to-doctor protocol and a coordinated route to a partner hospital with ambulance support. Home cardiac care suits stable cases; acute emergencies need a hospital.',
  },
  {
    question: 'How much does cardiac critical care at home cost in Bangalore?',
    answer:
      'It depends on the monitoring level, staffing and duration. We provide a precise quote after a clinical assessment of the patient’s condition.',
  },
  {
    question: 'Do you serve my area in Bangalore?',
    answer:
      'We provide cardiac critical care across Bangalore, including Whitefield, HSR Layout, Koramangala, Indiranagar and Jayanagar. Call us to confirm coverage for your location.',
  },
]

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers, Cardiac Critical Care at Home, Bangalore',
    medicalSpecialty: ['Critical Care', 'Cardiology'],
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
]

export default function CardiacCriticalCareView() {
  return (
    <CareSubpageShell
      currentLabel="Cardiac Critical Care"
      eyebrow="Bangalore · Critical care at home"
      headlineLead="Cardiac critical care,"
      headlineAccent="watched around the clock."
      lede="Continuous cardiac monitoring, medication management and post-cardiac-event support at home, by critical-care nurses under cardiologist supervision, with a clear plan for any emergency."
      enquirySource={PATH}
      jsonLd={JSONLD}
    >
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-care-50 p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-600">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            {NESTED.description}
          </p>
        </div>
      </section>

      {SECTIONS.map((s, i) => (
        <section key={s.title} className={`px-4 py-16 sm:px-6 sm:py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}>
          <div className="mx-auto max-w-4xl">
            <SectionHeader eyebrow="What to expect" titleLead={s.title} lede={s.lede} />
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {s.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-sm leading-snug text-neutral-800"
                >
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-care-600" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Cardiac critical care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS} tone="default" />
          </div>
          <p className="mt-8 text-xs leading-relaxed text-neutral-400">
            For information only and not medical advice. The cardiac care plan is set with your treating doctor.
          </p>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Cardiac patient coming home?"
        headlineAccent="We’ll keep close watch."
        body="Speak to a critical-care advisor. We set up continuous cardiac monitoring, place experienced nurses and coordinate with your cardiology team."
        enquirySource={PATH}
        primaryCtaLabel="Speak to a critical-care advisor"
        related={[
          { label: 'Post-ICU Recovery Care', href: '/care-services/post-icu-recovery-care-bangalore' },
          { label: 'ICU Setup at Home', href: '/care-services/icu-setup-at-home-bangalore' },
          { label: 'Critical Care at Home (ICU)', href: '/care-services/critical-care-at-home-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
