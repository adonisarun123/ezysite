import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'orthopedic-physiotherapy-at-home-bangalore'
const PATH = `/care-services/${SLUG}`
const nested = getNestedService(SLUG)

const SECTIONS = [
  {
    eyebrow: 'Conditions treated',
    title: 'What orthopaedic physiotherapy at home covers',
    intro:
      'Orthopaedic physiotherapy targets the bones, joints, muscles and ligaments, the most common reasons Bangalore families seek home rehabilitation.',
    bullets: [
      'Knee and hip osteoarthritis pain and stiffness',
      'Frozen shoulder and rotator-cuff problems',
      'Lower back, neck pain and cervical spondylosis',
      'Sciatica and disc-related nerve pain',
      'Post-fracture stiffness and weakness',
      'Sports, ligament and tendon injuries',
    ],
  },
  {
    eyebrow: 'Techniques used',
    title: 'How your physiotherapist treats orthopaedic pain',
    intro:
      'Your programme blends hands-on therapy with guided exercise, all tailored to your joint, your pain level and your home environment.',
    bullets: [
      'Manual therapy and joint mobilisation to ease stiffness',
      'Progressive strengthening for supporting muscles',
      'Stretching and range-of-motion work to restore movement',
      'Posture correction and ergonomic guidance for daily tasks',
      'Pain-relief modalities such as heat, ice and TENS where helpful',
      'Home-exercise coaching so progress continues between visits',
    ],
  },
  {
    eyebrow: 'What a session looks like',
    title: 'Your typical home physiotherapy session',
    intro:
      'Every visit is one-on-one and structured, so you always know what is happening and why.',
    bullets: [
      'A quick check of pain, swelling and mobility since the last visit',
      'Hands-on manual therapy to loosen stiff joints and muscles',
      'Supervised, gradually progressing exercises with form correction',
      'Practical advice on sitting, standing and lifting safely at home',
      'A short set of exercises to practise before the next session',
    ],
  },
  {
    eyebrow: 'Recovery timeline',
    title: 'What recovery usually looks like',
    intro:
      'Timelines vary by condition and consistency, but most patients see steady, measurable improvement.',
    bullets: [
      'Mild joint or back pain often eases within 6–8 sessions',
      'Frozen shoulder and arthritis typically need several weeks of regular work',
      'Post-fracture rehab progresses as healing and strength allow',
      'Goals are reviewed at each milestone so you can track real gains',
      'A maintenance plan keeps you strong once independence is reached',
    ],
  },
] as const

const HERO_STATS = [
  { value: '6–8', label: 'Sessions for many common joint & back issues' },
  { value: '1-on-1', label: 'Fully dedicated home sessions, every visit' },
  { value: '24–48 hr', label: 'Typical wait for your first home assessment' },
] as const

const FAQS = [
  {
    question: 'Can orthopaedic physiotherapy really be done effectively at home?',
    answer:
      'Yes. For most joint, back and post-fracture conditions, home physiotherapy is highly effective. Sessions are one-on-one, exercises are tailored to your actual living space, and there’s no travel fatigue, which matters a great deal when a joint is painful or you’re recovering from a fracture in Bangalore.',
  },
  {
    question: 'How many sessions will I need for knee or back pain?',
    answer:
      'Mild knee or back pain often improves within 6–8 sessions, while arthritis or frozen shoulder may need several weeks of regular work. Your physiotherapist gives a realistic estimate after the first home assessment and reviews progress at each milestone.',
  },
  {
    question: 'Do I need any equipment for orthopaedic physiotherapy at home?',
    answer:
      'Usually not. Our physiotherapists arrive with the therapy bands and tools most orthopaedic sessions require. If your plan benefits from a specific item like a TENS unit, we’ll advise you in advance, and many such items can be rented.',
  },
  {
    question: 'Is physiotherapy safe after a fracture or joint replacement?',
    answer:
      'When guided by a qualified physiotherapist, yes, it’s an essential part of recovery. Your therapist works within the limits set by your surgeon, progressing exercises only as your healing and strength allow. This is general information and not a substitute for your doctor’s advice.',
  },
  {
    question: 'Will physiotherapy help me avoid surgery?',
    answer:
      'For many joint and back conditions, structured physiotherapy can reduce pain and improve function enough to delay or avoid surgery. Outcomes depend on your specific diagnosis, your physiotherapist and doctor can advise what’s realistic for you.',
  },
  {
    question: 'Are your orthopaedic physiotherapists qualified?',
    answer:
      'Every physiotherapist is BPT or MPT qualified with verified credentials, and we match you with one experienced in orthopaedic rehabilitation specifically, not whoever is nearest.',
  },
] as const

const RELATED = [
  { label: 'Post-Surgical Physiotherapy', href: '/care-services/post-surgical-physiotherapy-bangalore' },
  { label: 'Geriatric Physiotherapy', href: '/care-services/geriatric-physiotherapy-bangalore' },
  { label: 'Physiotherapy at Home', href: '/care-services/physiotherapy-at-home-bangalore' },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers, Orthopaedic Physiotherapy at Home, Bangalore',
    medicalSpecialty: ['PhysicalTherapy', 'Orthopedic'],
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

export default function OrthopedicPhysiotherapyView() {
  return (
    <CareSubpageShell
      currentLabel="Orthopaedic Physiotherapy"
      eyebrow="Bangalore · Joint & back rehabilitation at home"
      headlineLead="Orthopaedic physiotherapy,"
      headlineAccent="at home in Bangalore."
      lede={nested?.title ?? 'Knee, back, shoulder, arthritis and post-fracture rehabilitation with certified physiotherapists who come to you.'}
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
          <SectionHeader eyebrow="Frequently asked" titleLead="Orthopaedic physiotherapy, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Move with less pain."
        headlineAccent="Start at home."
        body="Tell us about your joint or back pain and your goals. We respond within the hour and match you with a certified orthopaedic physiotherapist who comes to you."
        enquirySource={PATH}
        primaryCtaLabel="Book a physio assessment"
        related={RELATED as unknown as { label: string; href: string }[]}
      />
    </CareSubpageShell>
  )
}
