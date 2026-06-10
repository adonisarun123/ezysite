import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { CheckIcon } from '@heroicons/react/24/outline'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'ventilator-care-at-home-bangalore'
const PATH = `/care-services/${SLUG}`
const NESTED = getNestedService(SLUG)!

const SECTIONS: { title: string; lede?: string; bullets: string[] }[] = [
  {
    title: 'What ventilator care at home involves',
    lede: 'A complete home ventilation setup, run safely by critical-care nurses under doctor supervision.',
    bullets: [
      'Invasive and non-invasive ventilation, set up and managed at home',
      'Ventilator settings checked and adjusted per the doctor’s prescription',
      'Continuous monitoring of oxygen saturation, breathing and vitals',
      'Airway suctioning, humidification and circuit hygiene',
      'Daily clinical logging shared with your treating consultant',
    ],
  },
  {
    title: 'Who needs ventilator care at home',
    bullets: [
      'Patients weaning off a hospital ventilator who are clinically stable',
      'Long-term ventilator-dependent patients (neuromuscular, COPD, spinal)',
      'Tracheostomy patients requiring ventilatory support',
      'Families wanting a calmer recovery environment than a prolonged ICU stay',
    ],
  },
  {
    title: 'Equipment and staffing',
    bullets: [
      'Home ventilator (invasive / non-invasive) with backup support',
      'Multi-parameter monitor, suction machine and oxygen supply',
      'Critical-care trained nurses on rotating round-the-clock shifts',
      'Doctor / intensivist oversight of ventilator settings and the care plan',
      'Coordination for equipment servicing and consumables',
    ],
  },
  {
    title: 'Safety and oversight',
    lede: 'Ventilation is high-stakes care, so the safety framework is built in from day one.',
    bullets: [
      'Suitability confirmed by a doctor before home ventilation begins',
      'Agreed escalation thresholds and a clear nurse-to-doctor protocol',
      'A defined pathway to a partner hospital with ambulance support',
      'Family training on alarms and when to call for help',
    ],
  },
]

const FAQS = [
  {
    question: 'Is home ventilator care safe?',
    answer:
      'For clinically stable patients it can be very safe. Care is delivered by critical-care trained nurses, supervised by a doctor, with continuous monitoring and a defined escalation pathway. Suitability is always confirmed by your treating doctor first. This is general information, not medical advice.',
  },
  {
    question: 'Can you manage both invasive and non-invasive ventilation?',
    answer:
      'Yes. We manage invasive ventilation (via tracheostomy or endotracheal route) and non-invasive ventilation (BiPAP / CPAP-style support), with the ventilator settings managed strictly per the doctor’s prescription.',
  },
  {
    question: 'What happens if the ventilator alarms or there is a power cut?',
    answer:
      'The nurse is trained to respond to every alarm immediately and follows an agreed protocol. We set up backup support and brief the family on power-failure steps, and there is a clear route to escalate to a partner hospital if the patient needs to be moved.',
  },
  {
    question: 'How much does ventilator care at home cost in Bangalore?',
    answer:
      'It depends on the type of ventilation, equipment and shift pattern. We provide a precise quote after a clinical assessment, and in many cases it works out lower than a prolonged hospital ICU stay.',
  },
  {
    question: 'Do you serve my area in Bangalore?',
    answer:
      'We provide ventilator care across Bangalore, including areas such as Whitefield, HSR Layout, Koramangala, Indiranagar and Jayanagar. Call us to confirm coverage and timelines for your location.',
  },
  {
    question: 'How quickly can ventilator care be arranged?',
    answer:
      'For planned hospital discharges we aim to be ready before the patient leaves. Where it is urgent, we attempt same-day setup once the clinical assessment confirms the case is suitable.',
  },
]

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Ventilator Care at Home, Bangalore',
    medicalSpecialty: ['Critical Care', 'Pulmonology'],
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

export default function VentilatorCareView() {
  return (
    <CareSubpageShell
      currentLabel="Ventilator Care"
      eyebrow="Bangalore · Critical care at home"
      headlineLead="Ventilator care at home,"
      headlineAccent="managed by experts."
      lede="Invasive and non-invasive ventilation, set up safely in your home and run round the clock by critical-care nurses under doctor supervision — with continuous monitoring and a clear escalation plan."
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
          <SectionHeader eyebrow="Frequently asked" titleLead="Ventilator care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS} tone="default" />
          </div>
          <p className="mt-8 text-xs leading-relaxed text-neutral-400">
            For information only and not medical advice. Suitability for home ventilation is confirmed with your
            treating doctor.
          </p>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Bringing a ventilator patient home?"
        headlineAccent="Let’s set it up safely."
        body="Speak to a critical-care advisor. We assess the case, scope the equipment and staffing, and aim to have everything ready before discharge."
        enquirySource={PATH}
        primaryCtaLabel="Speak to a critical-care advisor"
        related={[
          { label: 'ICU Setup at Home', href: '/care-services/icu-setup-at-home-bangalore' },
          { label: 'Tracheostomy Critical Care', href: '/care-services/tracheostomy-critical-care-bangalore' },
          { label: 'Critical Care at Home (ICU)', href: '/care-services/critical-care-at-home-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
