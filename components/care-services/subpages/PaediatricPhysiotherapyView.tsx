import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'paediatric-physiotherapy-bangalore'
const PATH = `/care-services/${SLUG}`
const nested = getNestedService(SLUG)

const SECTIONS = [
  {
    eyebrow: 'Conditions treated',
    title: 'What paediatric physiotherapy at home covers',
    intro:
      'Paediatric physiotherapy supports a child’s movement, strength and development — play-based therapy that works best in the comfort of a familiar home.',
    bullets: [
      'Developmental delays in sitting, crawling or walking',
      'Cerebral palsy and related movement difficulties',
      'Low muscle tone (hypotonia) and weakness',
      'Coordination and balance challenges',
      'Post-injury or post-surgery recovery in children',
      'Special-needs mobility and posture support',
    ],
  },
  {
    eyebrow: 'Techniques used',
    title: 'How paediatric physiotherapy helps children grow stronger',
    intro:
      'Therapy is gentle, encouraging and play-led — children learn through movement, games and fun rather than rigid exercise.',
    bullets: [
      'Play-based exercises that build strength and coordination',
      'Developmental activities to encourage milestones',
      'Balance and posture training appropriate to age',
      'Gentle stretching and movement for stiff or weak muscles',
      'Parent coaching to continue therapy through daily play',
      'Goals set with the family around the child’s needs',
    ],
  },
  {
    eyebrow: 'What a session looks like',
    title: 'Your child’s typical home session',
    intro:
      'Sessions feel like guided play — keeping children engaged, comfortable and motivated in their own space.',
    bullets: [
      'A friendly check on movement, strength and progress',
      'Play-based activities that double as therapeutic exercise',
      'Encouragement of age-appropriate developmental skills',
      'Parents involved and shown how to help at home',
      'Simple play ideas to continue between visits',
    ],
  },
  {
    eyebrow: 'Recovery timeline',
    title: 'What progress usually looks like',
    intro:
      'Every child develops at their own pace; therapy supports steady, encouraging progress toward each milestone.',
    bullets: [
      'Early intervention generally supports the best outcomes',
      'Progress is measured in developmental milestones, not weeks',
      'Consistency and home play strongly influence results',
      'Goals are reviewed regularly with the family',
      'Plans adapt as the child grows and develops',
    ],
  },
] as const

const HERO_STATS = [
  { value: 'Play-led', label: 'Therapy that feels like fun for children' },
  { value: 'At home', label: 'Comfortable, familiar surroundings for kids' },
  { value: '24–48 hr', label: 'Typical wait for your first home assessment' },
] as const

const FAQS = [
  {
    question: 'At what age can a child start physiotherapy?',
    answer:
      'Children can benefit from physiotherapy from infancy onwards. Early intervention for developmental delays or conditions like cerebral palsy is often associated with the best outcomes. Your physiotherapist tailors everything to the child’s age and stage. This is general information, not medical advice.',
  },
  {
    question: 'Why is home physiotherapy good for children?',
    answer:
      'Children are most relaxed and cooperative in familiar surroundings. Home sessions reduce anxiety, let therapy blend naturally into play, and allow parents to learn techniques they can continue every day — which makes a real difference to progress.',
  },
  {
    question: 'What conditions does paediatric physiotherapy help with?',
    answer:
      'It supports developmental delays, cerebral palsy, low muscle tone, coordination and balance difficulties, and recovery after injury or surgery. We match you with a physiotherapist experienced in your child’s specific needs.',
  },
  {
    question: 'Will my child find the sessions stressful?',
    answer:
      'No — sessions are designed to be playful and engaging. Our paediatric physiotherapists use games and fun activities so that therapy feels like play, keeping children motivated and comfortable throughout.',
  },
  {
    question: 'How involved will I need to be as a parent?',
    answer:
      'Quite involved, and that’s a good thing. Your physiotherapist coaches you on simple activities to weave into daily play between visits. Consistent home practice is one of the biggest factors in a child’s progress.',
  },
  {
    question: 'Are your paediatric physiotherapists qualified?',
    answer:
      'Yes. We match you with a BPT or MPT qualified physiotherapist experienced specifically in paediatric care, with verified credentials and a gentle, child-friendly approach.',
  },
] as const

const RELATED = [
  { label: 'Neurological Physiotherapy', href: '/care-services/neuro-physiotherapy-at-home-bangalore' },
  { label: 'Orthopaedic Physiotherapy', href: '/care-services/orthopedic-physiotherapy-at-home-bangalore' },
  { label: 'Physiotherapy at Home', href: '/care-services/physiotherapy-at-home-bangalore' },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Paediatric Physiotherapy at Home, Bangalore',
    medicalSpecialty: ['PhysicalTherapy', 'Pediatric'],
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

export default function PaediatricPhysiotherapyView() {
  return (
    <CareSubpageShell
      currentLabel="Paediatric Physiotherapy"
      eyebrow="Bangalore · Children’s physiotherapy at home"
      headlineLead="Paediatric physiotherapy,"
      headlineAccent="at home in Bangalore."
      lede={nested?.title ?? 'Developmental delays, cerebral palsy and special-needs rehabilitation for children, delivered through gentle play-based therapy at home.'}
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      lastUpdated="May 2026"
    >
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="rounded-[24px] border border-neutral-200 bg-primary-50 p-7 text-center">
                <p className="font-careSerif text-3xl font-medium text-primary-500 sm:text-4xl">{s.value}</p>
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
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Paediatric physiotherapy, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Help your child move and grow."
        headlineAccent="Through play, at home."
        body="Tell us about your child’s needs and milestones. We respond within the hour and match you with a gentle, experienced paediatric physiotherapist who comes to you."
        enquirySource={PATH}
        primaryCtaLabel="Book a physio assessment"
        related={RELATED as unknown as { label: string; href: string }[]}
      />
    </CareSubpageShell>
  )
}
