import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'geriatric-physiotherapy-bangalore'
const PATH = `/care-services/${SLUG}`
const nested = getNestedService(SLUG)

const SECTIONS = [
  {
    eyebrow: 'Conditions treated',
    title: 'What geriatric physiotherapy at home covers',
    intro:
      'Geriatric physiotherapy helps older adults stay strong, steady and independent — addressing the age-related changes that most affect daily life.',
    bullets: [
      'Balance problems and a history of falls',
      'General weakness and loss of muscle strength',
      'Arthritis and joint stiffness',
      'Post-fall recovery and confidence rebuilding',
      'Mobility decline and difficulty walking',
      'Recovery after illness or prolonged bed rest',
    ],
  },
  {
    eyebrow: 'Techniques used',
    title: 'How geriatric physiotherapy keeps seniors independent',
    intro:
      'Programmes are gentle, encouraging and built around safety — restoring confidence as much as physical strength.',
    bullets: [
      'Balance and stability training to reduce fall risk',
      'Gentle strengthening for legs, core and posture',
      'Walking and gait training, with safe use of aids',
      'Flexibility work to ease stiff joints',
      'Home safety guidance to prevent falls',
      'Confidence-building, paced to the individual',
    ],
  },
  {
    eyebrow: 'What a session looks like',
    title: 'Your parent’s typical home session',
    intro:
      'Sessions are calm, patient and never rushed — designed for comfort and steady, encouraging progress.',
    bullets: [
      'A friendly check of mobility, balance and any concerns',
      'Gentle warm-up and supervised strengthening exercises',
      'Balance and walking practice in safe, familiar surroundings',
      'Practical fall-prevention tips for the home',
      'A simple set of exercises for between visits',
    ],
  },
  {
    eyebrow: 'Recovery timeline',
    title: 'What progress usually looks like',
    intro:
      'For seniors, the goal is steady, sustainable improvement — and maintaining independence for as long as possible.',
    bullets: [
      'Many older adults feel steadier within a few weeks of regular work',
      'Strength and balance build gradually with consistency',
      'Fall risk reduces as stability and confidence improve',
      'Goals focus on daily independence, not just numbers',
      'An ongoing maintenance plan helps protect mobility long-term',
    ],
  },
] as const

const HERO_STATS = [
  { value: '2–3×', label: 'Weekly sessions often recommended for seniors' },
  { value: 'At home', label: 'No stressful travel for elderly patients' },
  { value: '24–48 hr', label: 'Typical wait for your first home assessment' },
] as const

const FAQS = [
  {
    question: 'How does geriatric physiotherapy help prevent falls?',
    answer:
      'Falls are often caused by weak muscles, poor balance and unsteady walking. Geriatric physiotherapy targets all three with balance training, gentle strengthening and gait practice, plus practical home-safety advice — significantly lowering the risk of a fall at home in Bangalore.',
  },
  {
    question: 'Is physiotherapy safe for very elderly or frail patients?',
    answer:
      'Yes. Programmes are gentle and carefully paced to each person’s ability and any medical conditions. Your physiotherapist progresses exercises slowly and safely. For frail patients, this individualised, supervised approach is far safer than unguided activity.',
  },
  {
    question: 'My parent is reluctant to exercise. Can physiotherapy still help?',
    answer:
      'Often, yes. Our physiotherapists are experienced with hesitant seniors and build trust gradually, starting with very gentle, achievable movements. Small early wins usually improve motivation, and recovering in familiar home surroundings makes a big difference.',
  },
  {
    question: 'How often should an elderly person have physiotherapy?',
    answer:
      'Two to three sessions a week is common at the start, adjusted based on progress and the individual’s stamina. Your physiotherapist recommends a realistic schedule after the first home assessment.',
  },
  {
    question: 'Can geriatric physiotherapy help after a hospital stay?',
    answer:
      'Yes. Older adults often lose strength and mobility after illness or prolonged bed rest. Home physiotherapy helps rebuild that strength safely and restore independence, without the strain of travelling to a clinic.',
  },
  {
    question: 'Are your physiotherapists experienced with elderly patients?',
    answer:
      'Yes. We match you with a BPT or MPT qualified physiotherapist experienced specifically in geriatric care, with verified credentials and the patience that working with seniors requires.',
  },
] as const

const RELATED = [
  { label: 'Orthopaedic Physiotherapy', href: '/care-services/orthopedic-physiotherapy-at-home-bangalore' },
  { label: 'Neurological Physiotherapy', href: '/care-services/neuro-physiotherapy-at-home-bangalore' },
  { label: 'Physiotherapy at Home', href: '/care-services/physiotherapy-at-home-bangalore' },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Geriatric Physiotherapy at Home, Bangalore',
    medicalSpecialty: ['PhysicalTherapy', 'Geriatric'],
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

export default function GeriatricPhysiotherapyView() {
  return (
    <CareSubpageShell
      currentLabel="Geriatric Physiotherapy"
      eyebrow="Bangalore · Senior strength & balance at home"
      headlineLead="Geriatric physiotherapy,"
      headlineAccent="at home in Bangalore."
      lede={nested?.title ?? 'Balance training, strength building and fall-prevention programmes designed for older adults, delivered gently at home.'}
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      lastUpdated="May 2026"
    >
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="rounded-[24px] border border-neutral-200 bg-care-50 p-7 text-center">
                <p className="font-careSerif text-3xl font-medium text-care-500 sm:text-4xl">{s.value}</p>
                <p className="mt-2 text-sm leading-snug text-neutral-700">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-neutral-400">
            Indicative figures; your physiotherapist confirms a plan after assessment.
          </p>
        </div>
      </section>

      {SECTIONS.map((section, idx) => (
        <section
          key={section.title}
          className={`px-4 py-16 sm:px-6 sm:py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F7F7F2]'}`}
        >
          <div className="mx-auto max-w-5xl">
            <SectionHeader eyebrow={section.eyebrow} titleLead={section.title} lede={section.intro} />
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {section.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-sm leading-snug text-neutral-800"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-care-500" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Geriatric physiotherapy, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Keep your parents steady."
        headlineAccent="And independent, at home."
        body="Tell us about their mobility and any falls. We respond within the hour and match you with a patient, experienced geriatric physiotherapist who comes to them."
        enquirySource={PATH}
        primaryCtaLabel="Book a physio assessment"
        related={RELATED as unknown as { label: string; href: string }[]}
      />
    </CareSubpageShell>
  )
}
