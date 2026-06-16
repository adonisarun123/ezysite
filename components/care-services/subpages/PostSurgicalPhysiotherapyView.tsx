import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'post-surgical-physiotherapy-bangalore'
const PATH = `/care-services/${SLUG}`
const nested = getNestedService(SLUG)

const SECTIONS = [
  {
    eyebrow: 'Conditions treated',
    title: 'Surgeries we support recovery from',
    intro:
      'Post-surgical physiotherapy restores strength, movement and confidence after an operation, guided rehab that makes recovery at home safer and faster.',
    bullets: [
      'Knee replacement (TKR) and hip replacement (THR)',
      'Ligament reconstruction (ACL) and arthroscopy',
      'Spine and disc surgery rehabilitation',
      'Fracture fixation and orthopaedic surgery recovery',
      'Shoulder and rotator-cuff surgery',
      'Post-operative mobility and deconditioning',
    ],
  },
  {
    eyebrow: 'Techniques used',
    title: 'How post-surgical physiotherapy works',
    intro:
      'Your programme respects the limits set by your surgeon, progressing carefully from gentle movement to full strength.',
    bullets: [
      'Early, gentle range-of-motion to prevent stiffness',
      'Progressive strengthening as healing allows',
      'Swelling and pain management techniques',
      'Scar mobilisation and tissue work where appropriate',
      'Gait and walking retraining, with aids if needed',
      'Safe-movement coaching for everyday tasks at home',
    ],
  },
  {
    eyebrow: 'What a session looks like',
    title: 'Your typical post-surgical session',
    intro:
      'Every visit is structured around safe, steady progress, never rushing the healing tissue.',
    bullets: [
      'A check of swelling, pain, wound status and range of motion',
      'Gentle, guided movement to restore mobility',
      'Strengthening exercises matched to your stage of healing',
      'Walking and transfer practice as you regain stability',
      'A short home-exercise set to keep progress going',
    ],
  },
  {
    eyebrow: 'Recovery timeline',
    title: 'What recovery usually looks like',
    intro:
      'Timelines depend on the surgery and your healing, but consistent rehab is the key to a strong outcome.',
    bullets: [
      'Gentle movement often begins in the first days after surgery (once cleared)',
      'Knee/hip replacement rehab typically spans several weeks',
      'Strength and full function build progressively over weeks to months',
      'Milestones are reviewed regularly so recovery stays on track',
      'A maintenance plan helps protect your result long-term',
    ],
  },
] as const

const HERO_STATS = [
  { value: 'Same-week', label: 'First home visit after discharge, where possible' },
  { value: '1-on-1', label: 'Fully dedicated, surgeon-aligned sessions' },
  { value: '24–48 hr', label: 'Typical wait for your first home assessment' },
] as const

const FAQS = [
  {
    question: 'How soon after surgery should physiotherapy start?',
    answer:
      'For many procedures, gentle physiotherapy begins within the first few days once your surgeon clears it, early movement helps prevent stiffness and complications. Our physiotherapists work strictly within your surgeon’s guidelines. This is general information and not a substitute for your doctor’s advice.',
  },
  {
    question: 'Is home physiotherapy safe right after a major surgery?',
    answer:
      'Yes, when delivered by a qualified physiotherapist following your surgeon’s protocol. Home sessions are actually safer for many patients, there’s no travel strain on healing tissue, and exercises are practised in your real environment with full one-on-one supervision.',
  },
  {
    question: 'How long is rehabilitation after a knee or hip replacement?',
    answer:
      'Rehabilitation after a joint replacement typically runs across several weeks, with mobility improving early and strength building over time. Your physiotherapist gives a personalised timeline after the first assessment and reviews it at each milestone.',
  },
  {
    question: 'Will physiotherapy reduce my recovery time?',
    answer:
      'Structured physiotherapy is one of the biggest factors in a faster, fuller recovery. It restores movement, rebuilds strength safely, and helps you return to daily activities with confidence rather than guesswork.',
  },
  {
    question: 'Can you coordinate with my surgeon’s instructions?',
    answer:
      'Yes. Your physiotherapist follows the protocol and precautions provided by your surgeon, and can document each session for your medical records. Sharing your discharge notes at the first visit helps us tailor the plan precisely.',
  },
  {
    question: 'Are your post-surgical physiotherapists qualified?',
    answer:
      'Every physiotherapist is BPT or MPT qualified with verified credentials, and we match you with one experienced in post-operative rehabilitation for your specific surgery.',
  },
] as const

const RELATED = [
  { label: 'Orthopaedic Physiotherapy', href: '/care-services/orthopedic-physiotherapy-at-home-bangalore' },
  { label: 'Geriatric Physiotherapy', href: '/care-services/geriatric-physiotherapy-bangalore' },
  { label: 'Physiotherapy at Home', href: '/care-services/physiotherapy-at-home-bangalore' },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers, Post-Surgical Physiotherapy at Home, Bangalore',
    medicalSpecialty: ['PhysicalTherapy', 'Rehabilitation'],
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

export default function PostSurgicalPhysiotherapyView() {
  return (
    <CareSubpageShell
      currentLabel="Post-Surgical Physiotherapy"
      eyebrow="Bangalore · Post-operative recovery at home"
      headlineLead="Post-surgical physiotherapy,"
      headlineAccent="at home in Bangalore."
      lede={nested?.title ?? 'Knee and hip replacement, ligament and post-operative rehab with guided exercise programmes, delivered safely at home.'}
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
          <SectionHeader eyebrow="Frequently asked" titleLead="Post-surgical physiotherapy, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Recover stronger, recover safely."
        headlineAccent="At home, after surgery."
        body="Share your discharge notes and recovery goals. We respond within the hour and match you with a physiotherapist experienced in post-operative rehab who comes to you."
        enquirySource={PATH}
        primaryCtaLabel="Book a physio assessment"
        related={RELATED as unknown as { label: string; href: string }[]}
      />
    </CareSubpageShell>
  )
}
