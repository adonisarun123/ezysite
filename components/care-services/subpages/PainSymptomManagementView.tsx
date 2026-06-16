import {
  CheckIcon,
  HeartIcon,
  PlusCircleIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'pain-symptom-management-at-home-bangalore'
const PATH = `/care-services/${SLUG}`
const SERVICE = getNestedService(SLUG)

const HERO_STATS = [
  { value: 'Gentle relief', label: 'Comfort care for pain, breathlessness and discomfort' },
  { value: 'Doctor-guided', label: 'Symptom support coordinated with your medical team' },
  { value: 'Around the clock', label: 'Attentive care arranged for difficult days and nights' },
] as const

const SECTIONS = [
  {
    icon: PlusCircleIcon,
    title: 'What symptom management at home involves',
    body:
      'When a serious illness brings pain or distressing symptoms, our caregivers provide attentive comfort care, helping keep your loved one as settled and comfortable as possible, and alerting your medical team when symptoms need their attention.',
    bullets: [
      'Comfort care for pain and discomfort',
      'Support for breathlessness and restlessness',
      'Help easing nausea, dry mouth and fatigue',
      'Coordination with your treating doctor',
    ],
  },
  {
    icon: SparklesIcon,
    title: 'Relief from common distressing symptoms',
    body:
      'Serious illness can bring many uncomfortable symptoms at once. We offer calm, practical support for each, gentle positioning, soothing routines and watchful monitoring, so your loved one’s days feel more comfortable.',
    bullets: [
      'Gentle positioning for comfort and breathing',
      'Soothing routines for rest and sleep',
      'Watchful monitoring and gentle reporting',
      'Help with feeding, hydration and hygiene',
    ],
  },
  {
    icon: HeartIcon,
    title: 'Emotional comfort alongside physical relief',
    body:
      'Pain and discomfort are easier to bear with reassurance nearby. Our caregivers bring a steady, calming presence, and we connect families with counselling support when it would help.',
    bullets: [
      'A reassuring presence through hard moments',
      'Calm support that eases anxiety',
      'Respect for personal and spiritual wishes',
      'Counselling support when wanted',
    ],
  },
  {
    icon: UserGroupIcon,
    title: 'Support for the family',
    body:
      'Watching a loved one in discomfort is hard. We share the load with respite, gentle guidance and clear updates, so families can rest and stay present.',
    bullets: [
      'Respite hours so carers can rest',
      'Gentle guidance on what to expect',
      'Clear, kind daily updates',
      'Compassionate support across Bangalore',
    ],
  },
] as const

const FAQS = [
  {
    question: 'What is pain and symptom management at home?',
    answer:
      'It is comfort-focused care that helps ease pain and other distressing symptoms of a serious illness, in the comfort of home. Our caregivers provide attentive support and keep your medical team informed, so your loved one stays as comfortable as possible.',
  },
  {
    question: 'Will the caregiver give pain medication?',
    answer:
      'Our caregivers support comfort and help with symptoms under the guidance of your treating doctor, and they alert your medical team when something needs attention. Prescribing and adjusting pain medication always remains with your doctor. This page is for information and is not medical advice.',
  },
  {
    question: 'What kinds of symptoms can be supported at home?',
    answer:
      'Common symptoms we help with include pain, breathlessness, nausea, fatigue, restlessness and difficulty sleeping. We provide gentle, practical comfort care for each and report changes to your medical team.',
  },
  {
    question: 'Can symptom management be combined with ongoing treatment?',
    answer:
      'Yes. Comfort-focused symptom support can be provided alongside ongoing medical treatment at any stage of a serious illness, helping make each day more bearable.',
  },
  {
    question: 'Is this service available across Bangalore?',
    answer:
      'Yes. We arrange compassionate pain and symptom support at home across Bangalore. A gentle call with a care advisor will confirm coverage for your area.',
  },
  {
    question: 'How do we begin?',
    answer:
      'Start with a calm, no-pressure conversation. We listen, explain how comfort care at home could help, and move at the pace that feels right for your family.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers, Pain & Symptom Management at Home, Bangalore',
    medicalSpecialty: ['PalliativeCare', 'PainMedicine'],
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

export default function PainSymptomManagementView() {
  return (
    <CareSubpageShell
      currentLabel="Pain & Symptom Management"
      eyebrow="Bangalore · Comfort care at home"
      headlineLead="Gentle relief from pain"
      headlineAccent="and discomfort, at home."
      lede={
        SERVICE?.tagline ??
        'Attentive comfort care that helps ease pain, breathlessness and discomfort, keeping your loved one as settled as possible, in coordination with your medical team.'
      }
      primaryCtaLabel="Talk to a care advisor"
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
    >
      <section className="bg-white px-4 pb-4 pt-2 sm:px-6">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {HERO_STATS.map((s) => (
            <div
              key={s.value}
              className="rounded-2xl border border-neutral-200 bg-care-50 px-5 py-5 text-center"
            >
              <p className="font-careSerif text-xl font-medium text-accent-600">{s.value}</p>
              <p className="mt-1 text-sm leading-snug text-neutral-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="How we help"
            titleLead="Comfort care for"
            titleMuted="body and heart."
            lede="Calm, practical support for the symptoms that make serious illness hard, always coordinated with your treating doctor."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {SECTIONS.map(({ icon: Icon, title, body, bullets }) => (
              <article
                key={title}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-accent-600/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-careSerif text-xl font-bold tracking-tight text-neutral-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
                <ul className="mt-5 space-y-2 text-sm text-neutral-700">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" aria-hidden />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Questions families ask" titleLead="Answered gently." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
          <p className="mt-8 text-sm leading-relaxed text-neutral-500">
            This page is for general information and is not medical advice. Decisions about treatment and
            medication always rest with your treating doctor.
          </p>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Whenever you are ready,"
        headlineAccent="we are here for your family."
        body="Reach out for a calm, compassionate conversation about easing your loved one’s discomfort at home, with no pressure at all."
        enquirySource={PATH}
        primaryCtaLabel="Request a compassionate consultation"
        related={[
          { label: 'Cancer / Oncology Palliative Care', href: '/care-services/cancer-palliative-care-at-home-bangalore' },
          { label: 'End-of-Life Care', href: '/care-services/end-of-life-care-at-home-bangalore' },
          { label: 'Hospice Care at Home', href: '/care-services/hospice-care-at-home-bangalore' },
          { label: 'Palliative Care at Home', href: '/care-services/palliative-care-at-home-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
