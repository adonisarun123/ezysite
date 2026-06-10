import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { CheckIcon } from '@heroicons/react/24/outline'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'icu-setup-at-home-bangalore'
const PATH = `/care-services/${SLUG}`
const NESTED = getNestedService(SLUG)!

const SECTIONS: { title: string; lede?: string; bullets: string[] }[] = [
  {
    title: 'What a home ICU setup involves',
    lede: 'A complete intensive-care environment, installed and run to hospital protocols inside your home.',
    bullets: [
      'ICU-grade electric hospital bed with side rails and mattress',
      'Ventilator, multi-parameter monitor, suction and oxygen supply',
      'Infusion pumps and feeding-tube support where required',
      'Critical-care nurses on round-the-clock rotating shifts',
      'Doctor-supervised protocols, daily logs and family briefings',
    ],
  },
  {
    title: 'Who needs an ICU setup at home',
    bullets: [
      'Patients discharged from hospital ICU who still need intensive monitoring',
      'Ventilator-dependent or tracheostomy patients who are stable',
      'Long-term critical-care cases where a prolonged hospital stay is impractical',
      'Families seeking a calmer, familiar recovery environment',
    ],
  },
  {
    title: 'Equipment and staffing',
    bullets: [
      'Hospital-grade equipment delivered, installed and tested at home',
      'Critical-care trained nurses with handover from the hospital team',
      'Doctor / intensivist oversight of the overall care plan',
      'Ongoing servicing, consumables and equipment support',
      'Coordination with your treating consultant throughout',
    ],
  },
  {
    title: 'Safety and oversight',
    lede: 'A home ICU only works when the safety framework is as strong as the equipment.',
    bullets: [
      'Clinical assessment of the patient and the home before setup',
      'Agreed escalation thresholds and a nurse-to-doctor protocol',
      'A defined pathway to a partner hospital with ambulance support',
      'Infection-control practices for a controlled single-patient space',
    ],
  },
]

const FAQS = [
  {
    question: 'Can a real ICU be set up at home?',
    answer:
      'Yes — for clinically stable patients, a home ICU replicates the equipment, staffing and protocols of a hospital ICU. We install hospital-grade machines, place critical-care nurses on 24/7 shifts and run everything under doctor supervision. Suitability is confirmed by your doctor first. This is general information, not medical advice.',
  },
  {
    question: 'What equipment is included in a home ICU?',
    answer:
      'A typical setup includes an ICU-grade bed, ventilator (where prescribed), multi-parameter monitor, suction machine, oxygen supply, and infusion pumps. The exact list is scoped to the patient after the clinical assessment.',
  },
  {
    question: 'Is there a doctor involved, or only nurses?',
    answer:
      'Both. Critical-care nurses provide bedside care round the clock, while a supervising doctor / intensivist guides the care plan, reviews daily logs and coordinates with your treating consultant.',
  },
  {
    question: 'How much does an ICU setup at home cost in Bangalore?',
    answer:
      'It depends on the equipment, staffing level and duration. We give a precise quote after the assessment, and it is often lower than a prolonged hospital ICU stay because there are no daily ICU bed or admission charges.',
  },
  {
    question: 'How fast can you set up an ICU at home in Bangalore?',
    answer:
      'For planned discharges we aim to be ready before the patient leaves hospital. Where it is urgent, we attempt same-day setup across Bangalore once the assessment confirms suitability.',
  },
  {
    question: 'What happens in an emergency?',
    answer:
      'Every setup has an agreed emergency pathway: escalation thresholds, the nurse-to-doctor protocol, and a coordinated route to a partner hospital. Home ICU suits stable cases; for highly unstable emergencies a hospital ICU remains appropriate.',
  },
]

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — ICU Setup at Home, Bangalore',
    medicalSpecialty: ['Intensive Care', 'Critical Care'],
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

export default function IcuSetupAtHomeView() {
  return (
    <CareSubpageShell
      currentLabel="ICU Setup at Home"
      eyebrow="Bangalore · Critical care at home"
      headlineLead="A complete ICU,"
      headlineAccent="installed in your home."
      lede="Beds, monitors, ventilators, suction and trained staff — installed and managed to hospital protocols. A full intensive-care environment at home, supervised by a doctor and staffed by critical-care nurses."
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
          <SectionHeader eyebrow="Frequently asked" titleLead="ICU setup at home, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS} tone="default" />
          </div>
          <p className="mt-8 text-xs leading-relaxed text-neutral-400">
            For information only and not medical advice. Suitability is confirmed with your treating doctor.
          </p>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Need an ICU at home, fast?"
        headlineAccent="We’ll have it ready."
        body="Speak to a critical-care advisor. We assess the case, install hospital-grade equipment and place critical-care nurses — often before discharge."
        enquirySource={PATH}
        primaryCtaLabel="Speak to a critical-care advisor"
        related={[
          { label: 'Ventilator Care at Home', href: '/care-services/ventilator-care-at-home-bangalore' },
          { label: 'Post-ICU Recovery Care', href: '/care-services/post-icu-recovery-care-bangalore' },
          { label: 'Critical Care at Home (ICU)', href: '/care-services/critical-care-at-home-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
