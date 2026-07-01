'use client'

import { CheckIcon } from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import ConditionInfoSection, { type ConditionInfo } from '../ConditionInfoSection'
import CareNeedsCovered, { type CareNeeds } from '../CareNeedsCovered'
import CaregiverScopeSection from '../CaregiverScopeSection'
import { getNestedService } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

const SERVICE = getNestedService('arthritis-joint-pain-care-at-home-bangalore')!
const PATH = `/care-services/${SERVICE.slug}`

const CONDITION_INFO: ConditionInfo = {
  conditionName: 'Arthritis & osteoporosis',
  vitalStats: [
    {
      stat: 'Most common',
      detail:
        'Osteoarthritis is among the most common joint conditions in Indians over 60, and a leading cause of mobility loss (WHO lists it among common conditions of older age).',
    },
    {
      stat: '1 in 3',
      detail:
        'Roughly 1 in 3 seniors with severe joint pain reduces daily activity, accelerating muscle loss and fall risk.',
    },
    {
      stat: 'Higher in women',
      detail:
        'Osteoporosis risk rises sharply in post-menopausal women, making fracture-aware support essential.',
    },
  ],
  causes: [
    'Age-related cartilage wear (osteoarthritis)',
    'Rheumatoid arthritis, an autoimmune condition',
    'Post-menopausal bone-density loss (osteoporosis)',
    'Old joint injuries and fractures',
    'Obesity placing load on knees and hips',
    'Prolonged inactivity stiffening joints',
  ],
  symptoms: [
    'Knee, hip or back pain that worsens on movement',
    'Morning stiffness that eases through the day',
    'Difficulty climbing stairs or rising from chairs',
    'Swollen or tender joints',
    'Reduced grip strength',
    'Fear of walking without support',
    'Visible stooping or height loss (osteoporosis)',
  ],
  whenYouNeedCare: [
    'Bathing or dressing is now painful without help',
    'A recent fall or near-fall on stairs or in the bathroom',
    'Daily walks have stopped due to pain or fear',
    'Family can’t be present for high-risk moments, bathing, stairs, night',
    'The pain medication routine needs steady reminders',
    'The doctor has advised assisted gentle movement',
  ],
}

const CARE_NEEDS: CareNeeds = {
  conditionsCovered: ['Knee pain', 'Hip pain', 'Osteoporosis', 'Morning stiffness', 'Stairs difficulty'],
  careNeeds: [
    'Bathing and dressing assistance at a pain-sensitive pace',
    'Walking support',
    'Pain-aware movement and transfer help',
    'Help with stairs',
    'Toileting assistance',
    'Warm-routine support as advised by family or doctor',
  ],
}

/* hero stats, INVENTED / ILLUSTRATIVE figures for layout & marketing only.
 * Confirm against real operational data before launch. */
const HERO_STATS = [
  { value: 'Pain-paced', label: 'bathing and dressing support, never rushed' },
  { value: 'Fall-aware', label: 'help on stairs, transfers and bathroom moments' },
  { value: 'On-time', label: 'pain-medication reminders, exactly as prescribed' },
] as const

const SECTIONS = [
  {
    eyebrow: 'Pain-sensitive personal care',
    titleLead: 'Daily care, paced to',
    titleMuted: 'painful joints.',
    lede:
      'Arthritic joints punish hurry. Our caregivers handle bathing, dressing and grooming at the senior’s own pace, supporting the painful side, never pulling or rushing.',
    bullets: [
      'Bathing assistance with stable seating and grab support',
      'Dressing help that works around stiff shoulders, knees and hips',
      'Grooming and toileting support with dignity',
      'Morning routines timed for after stiffness eases',
    ],
  },
  {
    eyebrow: 'Walking, stairs & transfers',
    titleLead: 'Every step supported,',
    titleMuted: 'every fall prevented.',
    lede:
      'Stairs, bathrooms and bed-to-chair transfers are where arthritic seniors fall. A trained pair of hands at those moments changes everything.',
    bullets: [
      'Steady walking support indoors and on doctor-approved outdoor walks',
      'Help on stairs, one step at a time, with rails and patience',
      'Safe bed, chair and toilet transfers without joint strain',
      'Walker, stick and commode-chair support where used',
    ],
  },
  {
    eyebrow: 'Routine, warmth & medicines',
    titleLead: 'A steady routine that',
    titleMuted: 'keeps joints moving.',
    lede:
      'Good arthritis days are built on routine, gentle movement, warm-support routines as advised by the family or doctor, and pain medication taken on time.',
    bullets: [
      'Gentle assisted movement as the doctor or physiotherapist advises',
      'Warm-support routines (hot-water bag, warm compress) as instructed by family or doctor',
      'On-time pain medication and supplement reminders',
      'Meals, hydration and rest kept on a consistent schedule',
    ],
  },
  {
    eyebrow: 'Family & physio coordination',
    titleLead: 'Everyone on the',
    titleMuted: 'same care plan.',
    lede:
      'Caregivers keep the family informed daily and work alongside the physiotherapists we arrange, so movement advice actually gets practised between sessions.',
    bullets: [
      'Daily WhatsApp updates on pain, mobility and mood',
      'Coordination with certified physiotherapists we arrange at home',
      'Pain flare-ups and new swelling reported to family and doctor',
      'Doctor visit accompaniment with notes kept ready',
    ],
  },
] as const

const FAQS = [
  {
    question: 'Does the caregiver do massage or physiotherapy?',
    answer:
      'No. Caregivers provide gentle assisted movement and warm-support routines only as advised by the family or doctor, they don’t perform massage or physiotherapy. Where physiotherapy is needed, we arrange certified physiotherapists for home sessions, and the caregiver helps practise the advised movements between visits.',
  },
  {
    question: 'What does arthritis care at home cost in Bangalore?',
    answer:
      `Arthritis and joint pain support care at home in Bangalore starts from around ₹18,000/month (${formatPriceWithNote(SERVICE.priceKey)}), depending on hours of cover and the level of mobility support needed. A free consultation gives you a precise estimate.`,
  },
  {
    question: 'How do you keep bathing safe for someone with joint pain?',
    answer:
      'Bathing is the highest-risk moment of the day. Caregivers use stable seating, support the painful side, keep the floor dry and non-slip, and move entirely at the senior’s pace. Nothing is rushed, and the senior is never left alone mid-bath.',
  },
  {
    question: 'Can the caregiver help with stairs and outdoor walks?',
    answer:
      'Yes. Caregivers support stairs one step at a time with rail support, and accompany doctor-approved outdoor walks at a comfortable pace, keeping gentle daily movement going, which is one of the best things for arthritic joints.',
  },
  {
    question: 'My mother has osteoporosis, how is that handled?',
    answer:
      'With fracture awareness at every moment. Caregivers avoid any pulling or sudden support of the arms, use safe transfer techniques, keep walkways clear, and treat every near-fall as a reportable event. Even minor falls are flagged to family and doctor immediately, since osteoporotic bones fracture easily.',
  },
  {
    question: 'Should we choose live-in or day-shift care?',
    answer:
      'If night-time bathroom trips, stairs at night or early-morning stiffness are the risk moments, live-in care is safer. If help is mainly needed for bathing, walks and daytime routine, a day shift works well. We’ll recommend the right cover in the free consultation, and you can change it later.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers, Arthritis & Joint Pain Care at Home, Bangalore',
    medicalSpecialty: ['Geriatrics', 'Rheumatology'],
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

export default function ArthritisJointPainCareView() {
  return (
    <CareSubpageShell
      currentLabel={SERVICE.label}
      eyebrow="Bangalore · Arthritis & joint pain care at home"
      headlineLead="Joint-pain support that"
      headlineAccent="keeps every day moving."
      lede={SERVICE.tagline + ' Bathing, dressing, walking and stairs handled at a pain-sensitive pace, with fall prevention built into every moment.'}
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director' }}
      lastUpdated="June 2026"
    >
      <section className="bg-white px-4 pt-4 sm:px-6">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="rounded-[24px] border border-neutral-200 bg-care-50 p-6 text-center">
              <div className="font-careSerif text-3xl font-medium tracking-tight text-care-500">{s.value}</div>
              <div className="mt-2 text-sm leading-snug text-neutral-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <ConditionInfoSection info={CONDITION_INFO} />

      <CareNeedsCovered needs={CARE_NEEDS} />

      {SECTIONS.map((sec, idx) => (
        <section
          key={sec.eyebrow}
          className={`px-4 py-20 sm:px-6 sm:py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-care-50'}`}
        >
          <div className="mx-auto max-w-5xl">
            <SectionHeader eyebrow={sec.eyebrow} titleLead={sec.titleLead} titleMuted={sec.titleMuted} lede={sec.lede} />
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {sec.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-care-500" aria-hidden />
                  <span className="text-sm leading-snug text-neutral-800">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <CaregiverScopeSection />

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Arthritis care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Pain-sensitive support,"
        headlineAccent="arranged with one call."
        body="Tell us about your loved one’s joint pain and daily routine. We respond within the hour, recommend the right caregiver cover, and start matching today."
        enquirySource={PATH}
        related={[
          { label: 'Post-Fall & Mobility Care', href: '/care-services/post-fall-mobility-care-bangalore' },
          { label: 'Orthopedic Physiotherapy at Home', href: '/care-services/orthopedic-physiotherapy-at-home-bangalore' },
          { label: 'Elder Care at Home', href: '/care-services/elder-care-at-home-bangalore' },
          { label: 'Companionship Care', href: '/care-services/elderly-companionship-care-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
