import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { CheckIcon } from '@heroicons/react/24/outline'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'tracheostomy-critical-care-bangalore'
const PATH = `/care-services/${SLUG}`
const NESTED = getNestedService(SLUG)!

const SECTIONS: { title: string; lede?: string; bullets: string[] }[] = [
  {
    title: 'What tracheostomy critical care involves',
    lede: 'Advanced airway management delivered safely at home by critical-care nurses under doctor supervision.',
    bullets: [
      'Sterile tracheostomy suctioning to keep the airway clear',
      'Stoma site cleaning, dressing and infection prevention',
      'Inner cannula care and scheduled tube changes',
      'Respiratory monitoring, humidification and oxygen support',
      'Ventilatory support where the patient also needs ventilation',
    ],
  },
  {
    title: 'Who needs tracheostomy critical care',
    bullets: [
      'Patients discharged with a tracheostomy who are clinically stable',
      'Long-term tracheostomy patients (neuromuscular, post-trauma, head & neck)',
      'Ventilator-dependent patients with a tracheostomy',
      'Families needing expert airway care and training at home',
    ],
  },
  {
    title: 'Equipment and staffing',
    bullets: [
      'Suction machine, sterile suction catheters and tracheostomy kit',
      'Humidifier, oxygen supply and monitoring equipment',
      'Critical-care trained nurses experienced in airway management',
      'Doctor oversight of the airway care plan and tube changes',
      'Family training on emergency suctioning and tube safety',
    ],
  },
  {
    title: 'Safety and oversight',
    lede: 'A blocked or displaced airway is an emergency, so the safety framework is central to this care.',
    bullets: [
      'Strict sterile technique to reduce infection and blockage risk',
      'Agreed escalation thresholds and a nurse-to-doctor protocol',
      'A defined emergency pathway to a partner hospital',
      'Family briefed on warning signs and emergency steps',
    ],
  },
]

const FAQS = [
  {
    question: 'Can tracheostomy care be done safely at home?',
    answer:
      'Yes, for clinically stable patients, tracheostomy care is routinely delivered at home by critical-care trained nurses using sterile technique, under doctor supervision, with family training and a clear emergency plan. This is general information, not medical advice; suitability is confirmed by your treating doctor.',
  },
  {
    question: 'How often does the tracheostomy tube need suctioning or changing?',
    answer:
      'Suctioning frequency depends on the patient’s secretions and is done whenever needed to keep the airway clear. Tube and inner-cannula changes follow the schedule set by your doctor. The nurse manages both as part of the care plan.',
  },
  {
    question: 'What happens if the tube blocks or comes out?',
    answer:
      'This is treated as an emergency. Our nurses are trained in emergency suctioning and tube management, the family is briefed on first steps, and there is a defined escalation pathway to a partner hospital with ambulance support.',
  },
  {
    question: 'Do you combine tracheostomy care with ventilator support?',
    answer:
      'Yes. For ventilator-dependent tracheostomy patients we manage both the airway and the ventilation together, with settings managed per the doctor’s prescription.',
  },
  {
    question: 'How much does tracheostomy critical care cost in Bangalore?',
    answer:
      'It depends on the level of care, equipment and shift pattern. We provide a precise quote after a clinical assessment of the patient’s needs.',
  },
  {
    question: 'Do you serve my area in Bangalore?',
    answer:
      'We provide tracheostomy critical care across Bangalore, including Whitefield, HSR Layout, Koramangala, Indiranagar and Jayanagar. Call us to confirm coverage for your location.',
  },
]

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers, Tracheostomy Critical Care at Home, Bangalore',
    medicalSpecialty: ['Critical Care', 'Otolaryngology'],
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

export default function TracheostomyCriticalCareView() {
  return (
    <CareSubpageShell
      currentLabel="Tracheostomy Critical Care"
      eyebrow="Bangalore · Critical care at home"
      headlineLead="Tracheostomy care,"
      headlineAccent="with a steady, expert hand."
      lede="Advanced airway management at home, sterile suctioning, stoma care, tube changes and respiratory monitoring by critical-care nurses, under doctor supervision, with the family trained and supported."
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
          <SectionHeader eyebrow="Frequently asked" titleLead="Tracheostomy care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS} tone="default" />
          </div>
          <p className="mt-8 text-xs leading-relaxed text-neutral-400">
            For information only and not medical advice. The airway care plan is set with your treating doctor.
          </p>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Tracheostomy care at home?"
        headlineAccent="We’ll manage it safely."
        body="Speak to a critical-care advisor. We assess the airway needs, place experienced nurses and train your family, with a clear emergency plan in place."
        enquirySource={PATH}
        primaryCtaLabel="Speak to a critical-care advisor"
        related={[
          { label: 'Ventilator Care at Home', href: '/care-services/ventilator-care-at-home-bangalore' },
          { label: 'ICU Setup at Home', href: '/care-services/icu-setup-at-home-bangalore' },
          { label: 'Critical Care at Home (ICU)', href: '/care-services/critical-care-at-home-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
