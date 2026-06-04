import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { CheckIcon } from '@heroicons/react/24/outline'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'post-icu-recovery-care-bangalore'
const PATH = `/care-services/${SLUG}`
const NESTED = getNestedService(SLUG)!

const SECTIONS: { title: string; lede?: string; bullets: string[] }[] = [
  {
    title: 'What post-ICU recovery care involves',
    lede: 'Safe step-down care that bridges the gap between a hospital ICU and full recovery at home.',
    bullets: [
      'Continued monitoring of vitals as intensity steps down',
      'Medication management and wound / line care after discharge',
      'Early mobilisation, chest physiotherapy and nutrition support',
      'Watch for post-ICU complications and re-admission risks',
      'Daily clinical logs shared with your treating consultant',
    ],
  },
  {
    title: 'Who needs post-ICU recovery care',
    bullets: [
      'Patients recently discharged from a hospital ICU',
      'Those at risk of post-intensive-care syndrome (weakness, confusion)',
      'Post-surgical and post-cardiac patients in the recovery window',
      'Families who want to reduce the risk of ICU re-admission',
    ],
  },
  {
    title: 'Equipment and staffing',
    bullets: [
      'Vitals monitoring equipment and oxygen support as needed',
      'Hospital bed and mobility aids for safe early movement',
      'Critical-care or skilled nurses matched to the recovery stage',
      'Doctor oversight of the step-down plan and medication',
      'Physiotherapy coordination for strength and breathing recovery',
    ],
  },
  {
    title: 'Safety and oversight',
    lede: 'The first weeks after ICU are when complications and re-admissions are most likely — so vigilance matters.',
    bullets: [
      'Clear escalation thresholds and a nurse-to-doctor protocol',
      'A defined pathway back to hospital if the patient deteriorates',
      'Infection-control and line / wound care to prevent setbacks',
      'Family briefings on warning signs to watch for',
    ],
  },
]

const FAQS = [
  {
    question: 'Why is post-ICU care important?',
    answer:
      'The weeks after ICU discharge carry a real risk of complications, weakness and re-admission. Structured step-down care — monitoring, medication management, early mobilisation and nutrition — helps recovery stay on track. This is general information, not medical advice.',
  },
  {
    question: 'What is post-intensive-care syndrome?',
    answer:
      'It refers to physical weakness, cognitive changes (such as confusion or memory issues) and emotional effects that can follow a critical illness. Our care plan includes early mobilisation, physiotherapy coordination and gentle routine to support recovery.',
  },
  {
    question: 'Do you provide nurses or attendants for post-ICU care?',
    answer:
      'We match the staffing to the recovery stage — critical-care or skilled nurses where monitoring and clinical tasks are needed, stepping down to trained attendants as the patient stabilises, all under doctor oversight.',
  },
  {
    question: 'How much does post-ICU recovery care cost in Bangalore?',
    answer:
      'It depends on the monitoring level, staffing and duration. We provide a precise quote after assessing the discharge summary and the patient’s current condition.',
  },
  {
    question: 'Do you serve my area in Bangalore?',
    answer:
      'We provide post-ICU recovery care across Bangalore, including Whitefield, HSR Layout, Koramangala, Indiranagar and Jayanagar. Call us to confirm coverage for your location.',
  },
  {
    question: 'Can you start care right at hospital discharge?',
    answer:
      'Yes. For planned discharges we coordinate with the hospital so the home setup, monitoring and nursing are ready when the patient arrives home.',
  },
]

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Post-ICU Recovery Care at Home, Bangalore',
    medicalSpecialty: ['Critical Care', 'Rehabilitation'],
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

export default function PostIcuRecoveryView() {
  return (
    <CareSubpageShell
      currentLabel="Post-ICU Recovery Care"
      eyebrow="Bangalore · Critical care at home"
      headlineLead="Post-ICU recovery,"
      headlineAccent="safely stepped down."
      lede="The move from ICU to home is a vulnerable window. We provide step-down monitoring, rehabilitation and complication watch after intensive-care discharge — to keep recovery on track and reduce re-admission."
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
          <SectionHeader eyebrow="Frequently asked" titleLead="Post-ICU recovery, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS} tone="default" />
          </div>
          <p className="mt-8 text-xs leading-relaxed text-neutral-400">
            For information only and not medical advice. The recovery plan is set with your treating doctor.
          </p>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Coming home from the ICU?"
        headlineAccent="Let’s make it smooth."
        body="Speak to a critical-care advisor. We build a step-down plan around the discharge summary and have monitoring and nursing ready for the day they come home."
        enquirySource={PATH}
        primaryCtaLabel="Speak to a critical-care advisor"
        related={[
          { label: 'ICU Setup at Home', href: '/care-services/icu-setup-at-home-bangalore' },
          { label: 'Cardiac Critical Care', href: '/care-services/cardiac-critical-care-at-home-bangalore' },
          { label: 'Critical Care at Home (ICU)', href: '/care-services/critical-care-at-home-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
