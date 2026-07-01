import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'cardio-respiratory-physiotherapy-bangalore'
const PATH = `/care-services/${SLUG}`
const nested = getNestedService(SLUG)

const SECTIONS = [
  {
    eyebrow: 'Conditions treated',
    title: 'What cardiac & respiratory physiotherapy covers',
    intro:
      'This specialised physiotherapy supports the heart and lungs, improving breathing, stamina and recovery for conditions that affect how you breathe and move.',
    bullets: [
      'COPD, asthma and chronic breathlessness',
      'Post-cardiac (bypass, angioplasty) rehabilitation',
      'Pneumonia and chest-infection recovery',
      'Post-COVID lung and stamina rehabilitation',
      'Reduced exercise tolerance and fatigue',
      'Chest congestion and difficulty clearing secretions',
    ],
  },
  {
    eyebrow: 'Techniques used',
    title: 'How cardio-respiratory physiotherapy helps you breathe easier',
    intro:
      'Therapy combines breathing techniques with carefully graded activity to rebuild lung function and cardiovascular fitness.',
    bullets: [
      'Breathing exercises to improve lung capacity',
      'Chest physiotherapy to help clear secretions',
      'Graded, supervised exercise to rebuild stamina',
      'Energy-conservation techniques for daily tasks',
      'Posture work to support easier breathing',
      'Monitoring of effort and recovery during activity',
    ],
  },
  {
    eyebrow: 'What a session looks like',
    title: 'Your typical home session',
    intro:
      'Sessions are paced carefully and monitored, so activity always stays within a safe and comfortable range.',
    bullets: [
      'A check of breathing, energy levels and any symptoms',
      'Guided breathing and chest-clearance techniques',
      'Gentle, gradually progressing exercise with monitoring',
      'Advice on pacing daily activities to save energy',
      'Simple breathing exercises to continue between visits',
    ],
  },
  {
    eyebrow: 'Recovery timeline',
    title: 'What progress usually looks like',
    intro:
      'Improvements in breathing and stamina build gradually with consistent, supervised work.',
    bullets: [
      'Breathing techniques can ease symptoms quite early',
      'Stamina and exercise tolerance improve over several weeks',
      'Post-cardiac rehab is structured in careful, monitored stages',
      'Goals focus on daily activities, stairs, walking, chores',
      'A maintenance routine helps protect long-term lung health',
    ],
  },
] as const

const HERO_STATS = [
  { value: 'Monitored', label: 'Effort tracked through every session' },
  { value: 'At home', label: 'Lower infection risk for vulnerable lungs' },
  { value: '24–48 hr', label: 'Typical wait for your first home assessment' },
] as const

const FAQS = [
  {
    question: 'Can cardiac and respiratory physiotherapy be done safely at home?',
    answer:
      'Yes. Home is often ideal for patients with breathing or heart conditions, it reduces exposure to clinic infections and removes travel strain. Sessions are carefully paced and monitored, and your physiotherapist works within the limits set by your doctor. This is general information, not medical advice.',
  },
  {
    question: 'How does physiotherapy help with COPD or breathlessness?',
    answer:
      'Breathing exercises, chest-clearance techniques and graded activity help improve lung capacity, clear secretions and build stamina. Over time, many patients manage daily tasks like climbing stairs or walking with less breathlessness.',
  },
  {
    question: 'Is physiotherapy safe after a heart procedure?',
    answer:
      'Cardiac rehabilitation is an important part of recovery after procedures like bypass or angioplasty, but it must follow your cardiologist’s guidance. Our physiotherapists deliver carefully monitored, staged exercise within those limits. Always follow your doctor’s clearance and advice.',
  },
  {
    question: 'Can physiotherapy help with post-COVID recovery?',
    answer:
      'Yes. Many people experience lingering breathlessness and fatigue after COVID. Targeted breathing exercises and graded activity can help rebuild lung function and stamina gradually, restoring everyday endurance.',
  },
  {
    question: 'Do you monitor the patient during exercise?',
    answer:
      'Yes. Your physiotherapist watches effort and recovery throughout each session and adjusts activity to keep it within a safe, comfortable range, especially important for heart and lung conditions.',
  },
  {
    question: 'Are your cardio-respiratory physiotherapists qualified?',
    answer:
      'Every physiotherapist is BPT or MPT qualified with verified credentials, and we match you with one experienced in cardiac and respiratory rehabilitation specifically.',
  },
] as const

const RELATED = [
  { label: 'Geriatric Physiotherapy', href: '/care-services/geriatric-physiotherapy-bangalore' },
  { label: 'Post-Surgical Physiotherapy', href: '/care-services/post-surgical-physiotherapy-bangalore' },
  { label: 'Physiotherapy at Home', href: '/care-services/physiotherapy-at-home-bangalore' },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers, Cardiac & Respiratory Physiotherapy at Home, Bangalore',
    medicalSpecialty: ['PhysicalTherapy', 'PulmonaryMedicine'],
    areaServed: { '@type': 'City', name: 'Bangalore' },
    url: `https://www.ezyhelpers.com${PATH}`,
    telephone: '+918031411776',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'HSR Layout',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560102',
      addressCountry: 'IN',
    },
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

export default function CardioRespiratoryPhysiotherapyView() {
  return (
    <CareSubpageShell
      currentLabel="Cardiac & Respiratory Physiotherapy"
      eyebrow="Bangalore · Heart & lung rehabilitation at home"
      headlineLead="Cardiac & respiratory physio,"
      headlineAccent="at home in Bangalore."
      lede={nested?.title ?? 'Chest physiotherapy, breathing exercises and post-cardiac and COPD rehabilitation, delivered safely at home.'}
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
          <SectionHeader eyebrow="Frequently asked" titleLead="Cardiac & respiratory physio, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Breathe easier, move further."
        headlineAccent="At home, at your pace."
        body="Tell us about the heart or lung condition and recovery goals. We respond within the hour and match you with a specialist cardio-respiratory physiotherapist who comes to you."
        enquirySource={PATH}
        primaryCtaLabel="Book a physio assessment"
        related={RELATED as unknown as { label: string; href: string }[]}
      />
    </CareSubpageShell>
  )
}
