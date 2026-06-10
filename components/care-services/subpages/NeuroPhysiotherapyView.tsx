import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'neuro-physiotherapy-at-home-bangalore'
const PATH = `/care-services/${SLUG}`
const nested = getNestedService(SLUG)

const SECTIONS = [
  {
    eyebrow: 'Conditions treated',
    title: 'What neurological physiotherapy at home covers',
    intro:
      'Neuro physiotherapy supports recovery and function for conditions affecting the brain, spinal cord and nerves — care that benefits hugely from being delivered patiently at home.',
    bullets: [
      'Stroke recovery and one-sided weakness (hemiplegia)',
      'Parkinson’s disease — mobility, balance and rigidity',
      'Paralysis and partial paralysis rehabilitation',
      'Spinal cord injury function and mobility',
      'Multiple sclerosis and other progressive conditions',
      'Post-brain-injury movement retraining',
    ],
  },
  {
    eyebrow: 'Techniques used',
    title: 'How neuro physiotherapy rebuilds movement',
    intro:
      'Recovery focuses on retraining the nervous system and the muscles together, through consistent, repetition-based therapy.',
    bullets: [
      'Neuro-rehabilitation exercises to retrain movement patterns',
      'Balance and coordination training to reduce fall risk',
      'Gait (walking) training, with aids where needed',
      'Strengthening of weakened muscles on the affected side',
      'Spasticity and stiffness management techniques',
      'Functional task practice — standing, transfers, dressing',
    ],
  },
  {
    eyebrow: 'What a session looks like',
    title: 'Your typical neuro physiotherapy session',
    intro:
      'Sessions are calm, patient and goal-focused — small, repeated wins build toward bigger function over time.',
    bullets: [
      'A review of movement, strength and any changes since last visit',
      'Hands-on facilitation to guide correct movement',
      'Repetition-based exercises that retrain the brain and body',
      'Balance, posture and walking practice as ability allows',
      'Family coaching on safe assistance between sessions',
    ],
  },
  {
    eyebrow: 'Recovery timeline',
    title: 'What recovery usually looks like',
    intro:
      'Neurological recovery is gradual and varies widely between people, but consistency is the strongest predictor of progress.',
    bullets: [
      'Early, regular therapy often gives the best long-term outcomes',
      'Stroke recovery typically continues over many weeks and months',
      'Parkinson’s care focuses on maintaining mobility and independence',
      'Goals are set in small, measurable steps to keep motivation high',
      'Plans are adjusted continually as function improves',
    ],
  },
] as const

const HERO_STATS = [
  { value: '3–5×', label: 'Weekly sessions often advised early in recovery' },
  { value: '1-on-1', label: 'Fully dedicated, patient home sessions' },
  { value: '24–48 hr', label: 'Typical wait for your first home assessment' },
] as const

const FAQS = [
  {
    question: 'Can neuro physiotherapy be done at home after a stroke?',
    answer:
      'Yes, and home is often ideal. Familiar surroundings reduce stress, family can stay involved, and there’s no exhausting commute for a patient with limited mobility. Our physiotherapists bring stroke-rehabilitation expertise directly to your home in Bangalore.',
  },
  {
    question: 'How soon after a stroke should physiotherapy start?',
    answer:
      'Generally, the earlier rehabilitation begins after medical stabilisation, the better the long-term outcomes — but timing must be guided by your treating doctor. Once cleared, our therapists begin gentle, structured work and progress carefully. This is general information, not medical advice.',
  },
  {
    question: 'How long does neurological recovery take?',
    answer:
      'It varies greatly. Some patients make rapid early gains, while others progress more gradually over many months. Consistency is the strongest factor. Your physiotherapist sets small, measurable goals so you can see steady progress along the way.',
  },
  {
    question: 'Does neuro physiotherapy help with Parkinson’s disease?',
    answer:
      'Yes. While physiotherapy cannot cure Parkinson’s, it helps maintain mobility, balance and independence, and reduces fall risk. Regular at-home sessions focused on movement, posture and walking can meaningfully improve day-to-day function.',
  },
  {
    question: 'Will the family need to help between sessions?',
    answer:
      'Often, yes — and we coach you on how. Your physiotherapist shows family members safe assistance and simple exercises to practise between visits, which significantly improves outcomes in neurological recovery.',
  },
  {
    question: 'Are your neuro physiotherapists specially trained?',
    answer:
      'Yes. We match you with a BPT or MPT qualified physiotherapist experienced specifically in neurological rehabilitation, with verified credentials — not a general therapist assigned by proximity.',
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
    name: 'EzyHelpers — Neurological Physiotherapy at Home, Bangalore',
    medicalSpecialty: ['PhysicalTherapy', 'Neurology'],
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

export default function NeuroPhysiotherapyView() {
  return (
    <CareSubpageShell
      currentLabel="Neurological Physiotherapy"
      eyebrow="Bangalore · Stroke & neuro recovery at home"
      headlineLead="Neurological physiotherapy,"
      headlineAccent="at home in Bangalore."
      lede={nested?.title ?? 'Stroke rehabilitation, Parkinson’s, paralysis and spinal-injury recovery by specialist physiotherapists who come to you.'}
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
          <SectionHeader eyebrow="Frequently asked" titleLead="Neuro physiotherapy, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Rebuild movement, step by step."
        headlineAccent="At home, with expert hands."
        body="Tell us about the diagnosis and recovery goals. We respond within the hour and match you with a specialist neuro physiotherapist who comes to you."
        enquirySource={PATH}
        primaryCtaLabel="Book a physio assessment"
        related={RELATED as unknown as { label: string; href: string }[]}
      />
    </CareSubpageShell>
  )
}
