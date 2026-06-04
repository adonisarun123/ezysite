'use client'

import { CheckIcon } from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import ConditionInfoSection, { type ConditionInfo } from '../ConditionInfoSection'
import CaregiverScopeSection from '../CaregiverScopeSection'
import { getNestedService } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

const SERVICE = getNestedService('post-fall-mobility-care-bangalore')!
const PATH = `/care-services/${SERVICE.slug}`

const CONDITION_INFO: ConditionInfo = {
  conditionName: 'Falls in seniors',
  vitalStats: [
    {
      stat: '1 in 3',
      detail: 'Roughly one in three adults over 65 falls each year — and having fallen once doubles the chance of falling again.',
    },
    {
      stat: 'Leading cause',
      detail: 'Falls are among the leading causes of injury and injury-related hospitalisation in Indians aged 60 and above.',
    },
    {
      stat: 'Most at home',
      detail: 'Most senior falls happen at home — bathrooms, stairs and night-time walks to the toilet are the highest-risk spots.',
    },
  ],
  causes: [
    'Muscle weakness and poor balance from reduced activity',
    'Slippery bathrooms, loose rugs, poor lighting and trailing wires at home',
    'Medicines that cause drowsiness or sudden drops in blood pressure',
    'Failing eyesight and inner-ear (balance) problems',
    'Conditions like Parkinson’s, stroke, arthritis and neuropathy affecting gait',
    'Rushing at night to the toilet, often without switching the light on',
  ],
  symptoms: [
    'Holding furniture or walls while walking around the house',
    'A recent stumble, trip or “near-fall” they brushed off',
    'Taking visibly slower, shorter or shuffling steps',
    'Struggling to rise from a chair without pushing off with both arms',
    'Dizziness or unsteadiness when standing up',
    'New reluctance to bathe alone, use stairs or step outside',
    'Unexplained bruises they can’t — or won’t — explain',
    'Fear of falling that is quietly shrinking their daily activity',
  ],
  whenYouNeedCare: [
    'They have already fallen once — the next fall risks a hip fracture and surgery',
    'Recovery after a fall or fracture needs safe daily transfers and walking support',
    'Fear of falling is making them stop moving — which only weakens them further',
    'Night-time toilet trips are happening alone, in the dark, on unsteady legs',
    'The family can’t be present through the day to supervise walking and bathing',
    'Doctors have advised supervised mobility, and no trained person is at home to provide it',
  ],
}

/* hero stats — INVENTED / ILLUSTRATIVE figures for layout & marketing only.
 * Confirm against real operational data before launch. */
const HERO_STATS = [
  { value: 'Fall-aware', label: 'caregivers trained in safe transfers' },
  { value: 'Confidence', label: 'rebuilt step by step at home' },
  { value: 'Prevention', label: 'home-safety guidance to avoid the next fall' },
] as const

const SECTIONS = [
  {
    eyebrow: 'Safe recovery',
    titleLead: 'Recovering from a fall,',
    titleMuted: 'safely and steadily.',
    lede:
      'A fall often shakes a senior’s confidence as much as their body. Our caregivers help them recover physically while rebuilding the courage to move again.',
    bullets: [
      'Safe assistance with standing, walking and transfers',
      'Support with daily activities during recovery',
      'Gentle, gradual mobility rebuilding at the right pace',
      'Coordination with physiotherapists where prescribed',
    ],
  },
  {
    eyebrow: 'Fall prevention',
    titleLead: 'Stopping the next fall',
    titleMuted: 'before it happens.',
    lede:
      'Most falls are preventable. We help make the home safer and the senior steadier.',
    bullets: [
      'Home-hazard guidance — rugs, lighting, bathroom safety',
      'Encouraging strength and balance within safe limits',
      'Proper use of walkers, canes and grab supports',
      'Watchfulness for dizziness, weakness or medication effects',
    ],
  },
  {
    eyebrow: 'Rebuilding confidence',
    titleLead: 'Confidence comes back',
    titleMuted: 'with the right support.',
    lede:
      'Fear of falling again can keep a senior immobile, which worsens their health. Patient encouragement breaks that cycle.',
    bullets: [
      'Reassurance and steady physical support while moving',
      'Small, achievable mobility goals each week',
      'Encouragement to stay active rather than bed-bound',
      'Emotional support through a frightening, frustrating time',
    ],
  },
  {
    eyebrow: 'Watchful daily care',
    titleLead: 'Care that watches',
    titleMuted: 'for warning signs.',
    lede:
      'During recovery, small problems can escalate quickly. A trained caregiver catches them early.',
    bullets: [
      'Monitoring of pain, swelling and mobility changes',
      'Medication reminders during recovery',
      'Prompt escalation to family and doctor when needed',
      'Daily updates so families stay informed and reassured',
    ],
  },
] as const

const FAQS = [
  {
    question: 'What does post-fall recovery care at home involve?',
    answer:
      'It combines safe physical support — standing, walking and transfers — with fall-prevention, confidence-building and watchful monitoring during recovery. Caregivers also coordinate with physiotherapists when mobility rehab is prescribed, and help make the home safer.',
  },
  {
    question: 'How do you help an elderly person walk again after a fall?',
    answer:
      'We rebuild mobility gradually and safely — assisting with transfers and short walks, setting small weekly goals, ensuring correct use of walkers or canes, and offering steady reassurance to overcome the fear of falling again. Pace is set by the senior’s recovery, never rushed.',
  },
  {
    question: 'How can falls be prevented at home for seniors?',
    answer:
      'We guide families on common home hazards — loose rugs, poor lighting, slippery bathrooms — recommend grab supports and proper mobility aids, encourage safe strength and balance activity, and stay alert to dizziness, weakness or medication side-effects that increase fall risk.',
  },
  {
    question: 'What does post-fall mobility care cost in Bangalore?',
    answer:
      `Post-fall and mobility care in Bangalore typically starts from around ₹18,000/month (${formatPriceWithNote(SERVICE.priceKey)}), with flexible day-shift and live-in options. A free consultation gives you a precise estimate for the recovery needed.`,
  },
  {
    question: 'Do you work alongside a physiotherapist?',
    answer:
      'Yes. When a physiotherapist has prescribed a recovery programme, our caregivers reinforce the prescribed exercises and safe-movement routines between sessions, helping the senior recover faster and more safely.',
  },
  {
    question: 'How quickly can you arrange post-fall care in Bangalore?',
    answer:
      'When a suitable caregiver is available, we attempt same-day placement — especially after a hospital discharge following a fall. Across the Bangalore localities we serve, most matches are completed within 24–48 hours.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Post-Fall Recovery & Mobility Care at Home, Bangalore',
    medicalSpecialty: ['Geriatrics', 'PhysicalTherapy'],
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

export default function PostFallMobilityCareView() {
  return (
    <CareSubpageShell
      currentLabel={SERVICE.label}
      eyebrow="Bangalore · Recovery & mobility at home"
      headlineLead="Back on their feet,"
      headlineAccent="safely and with confidence."
      lede={SERVICE.tagline + ' Caregivers trained in safe transfers, fall-prevention and gentle mobility rebuilding — so your parent recovers without fear, and without the next fall.'}
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director' }}
      lastUpdated="May 2026"
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
          <SectionHeader eyebrow="Frequently asked" titleLead="Post-fall care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Steady support for the road"
        headlineAccent="back to walking."
        body="Tell us about the fall and the recovery ahead. We respond within the hour, recommend the right caregiver, and start matching today."
        enquirySource={PATH}
        related={[
          { label: 'Bedridden Patient Care', href: '/care-services/bedridden-patient-care-at-home-bangalore' },
          { label: 'Parkinson’s Care', href: '/care-services/parkinsons-care-at-home-bangalore-elder' },
          { label: 'Companionship Care', href: '/care-services/elderly-companionship-care-bangalore' },
          { label: 'Elder Care at Home', href: '/care-services/elder-care-at-home-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
