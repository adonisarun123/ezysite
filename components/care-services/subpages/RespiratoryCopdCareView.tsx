'use client'

import { CheckIcon } from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import ConditionInfoSection, { type ConditionInfo } from '../ConditionInfoSection'
import CareNeedsCovered, { type CareNeeds } from '../CareNeedsCovered'
import CaregiverScopeSection from '../CaregiverScopeSection'
import { getNestedService } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

const SERVICE = getNestedService('respiratory-copd-care-at-home-bangalore')!
const PATH = `/care-services/${SERVICE.slug}`

const CONDITION_INFO: ConditionInfo = {
  conditionName: 'COPD & chronic breathlessness',
  vitalStats: [
    {
      stat: 'Top cause',
      detail:
        'Chronic respiratory disease is among India’s leading causes of death and disability; COPD is the largest contributor.',
    },
    {
      stat: '~30 million',
      detail:
        'An estimated 30+ million Indians live with COPD, many undiagnosed until breathlessness limits daily life.',
    },
    {
      stat: '2× risk',
      detail:
        'Winter months and Bangalore air-quality dips roughly double exacerbation risk for seniors with COPD.',
    },
  ],
  causes: [
    'Long-term smoking, the most common cause',
    'Indoor smoke exposure from years of chulha/biomass cooking',
    'Occupational dust and fumes',
    'Poorly controlled asthma progressing with age',
    'Recurrent chest infections',
    'Air pollution exposure',
  ],
  symptoms: [
    'Breathlessness on mild activity, even walking to the bathroom',
    'Persistent cough with phlegm',
    'Wheezing or chest tightness',
    'Fatigue after small tasks',
    'Frequent winter chest infections',
    'Waking at night breathless',
    'Anxiety about being alone during an episode',
  ],
  whenYouNeedCare: [
    'A recent exacerbation or hospitalisation',
    'An oxygen concentrator or nebuliser is now used at home',
    'Bathing or walking triggers severe breathlessness',
    'Night-time episodes worry the family',
    'The medicine or inhaler routine is being missed',
    'Family lives away and can’t respond to an episode',
  ],
}

const CARE_NEEDS: CareNeeds = {
  conditionsCovered: ['COPD', 'Breathlessness', 'Oxygen support at home', 'Chronic cough', 'Winter exacerbations'],
  careNeeds: [
    'Restroom and walking support, paced to breath',
    'Positioning support for easier breathing',
    'Medicine and inhaler reminders',
    'Nebulisation support only if trained and instructed',
    'Monitoring breathlessness, cough and fatigue',
    'Oxygen-saturation observation if the family provides an oximeter',
  ],
}

/* hero stats, INVENTED / ILLUSTRATIVE figures for layout & marketing only.
 * Confirm against real operational data before launch. */
const HERO_STATS = [
  { value: 'Breath-paced', label: 'walking and bathroom support, never hurried' },
  { value: 'On-time', label: 'inhaler and medicine reminders, every dose' },
  { value: 'Early-alert', label: 'monitoring of breathlessness, cough and fatigue' },
] as const

const SECTIONS = [
  {
    eyebrow: 'Breathless-aware daily support',
    titleLead: 'Every task paced',
    titleMuted: 'to the breath.',
    lede:
      'For a senior with COPD, the walk to the bathroom can be the hardest part of the day. Caregivers pace every activity to breathing capacity, support, pause, recover, continue.',
    bullets: [
      'Paced walking support with planned rest stops',
      'Restroom and bathing support without breathless hurry',
      'Positioning support, propped sitting and sleeping postures that ease breathing',
      'Energy-conserving daily routines so good hours aren’t spent on chores',
    ],
  },
  {
    eyebrow: 'Medicines, inhalers & nebulisation',
    titleLead: 'The routine that keeps',
    titleMuted: 'the lungs out of hospital.',
    lede:
      'COPD stays stable when inhalers and medicines are taken exactly on schedule. Caregivers keep the routine unmissable, with nebulisation support only where trained and instructed by the family or doctor.',
    bullets: [
      'On-time reminders for every inhaler and oral medicine',
      'Inhaler-technique prompts as the doctor has demonstrated',
      'Nebulisation support only if trained and instructed by the family or doctor',
      'Medicine stocks and expiry tracked so refills never lapse',
    ],
  },
  {
    eyebrow: 'Monitoring & early warning',
    titleLead: 'Exacerbations caught',
    titleMuted: 'before they escalate.',
    lede:
      'COPD emergencies rarely come without warning, more cough, more fatigue, harder breathing. A trained observer at home spots the change a day early and alerts the people who can act.',
    bullets: [
      'Daily observation of breathlessness, cough changes and fatigue',
      'SpO₂ observation with a family-provided oximeter, observation only, never a diagnosis',
      'Changes reported to family and doctor the same day',
      'Agreed escalation plan followed calmly during an episode',
    ],
  },
  {
    eyebrow: 'Equipment-aware care & coordination',
    titleLead: 'Comfortable around oxygen,',
    titleMuted: 'connected to the family.',
    lede:
      'Caregivers work confidently alongside oxygen concentrators and home respiratory equipment, which we also rent and service, while keeping the family in the loop daily.',
    bullets: [
      'Works alongside oxygen concentrators, nebulisers and home equipment',
      'Equipment rental available through our medical-equipment service',
      'Daily WhatsApp updates on breathing, sleep, appetite and mood',
      'Doctor visit accompaniment with observation notes kept ready',
    ],
  },
] as const

const FAQS = [
  {
    question: 'Can the caregiver operate the nebuliser or oxygen concentrator?',
    answer:
      'Caregivers provide nebulisation and equipment support only if trained and instructed by the family or doctor. Clinical decisions, oxygen flow titration, dose changes, always stay with a nurse or doctor. Where clinical respiratory care is needed, we arrange home nursing alongside the caregiver, all under one roof.',
  },
  {
    question: 'What happens during a breathless episode?',
    answer:
      'The caregiver helps the senior into the easiest breathing position, keeps them calm, and follows the escalation plan agreed with the family, calling the family, doctor or ambulance as per that plan. Having a trained, calm person present is exactly what prevents panic from making an episode worse.',
  },
  {
    question: 'What does respiratory care at home cost in Bangalore?',
    answer:
      `Respiratory and COPD support care at home in Bangalore starts from around ₹22,000/month (${formatPriceWithNote(SERVICE.priceKey)}), depending on hours of cover and whether nurse visits or equipment rental are needed. A free consultation gives you a precise estimate.`,
  },
  {
    question: 'Do caregivers monitor oxygen saturation (SpO₂)?',
    answer:
      'Yes, as observation only. If the family provides a pulse oximeter, the caregiver records readings at agreed times and alerts the family and doctor when readings drop below the agreed level. Caregivers never interpret readings as a diagnosis or change oxygen settings on their own.',
  },
  {
    question: 'Can they help with daily walks?',
    answer:
      'Yes. Gentle, doctor-approved walking is one of the best things for COPD. Caregivers pace walks to breathing capacity, plan rest stops, and stop the moment breathlessness rises, keeping movement going safely, day after day.',
  },
  {
    question: 'Is live-in care available for night-time episodes?',
    answer:
      'Yes. Night-time breathlessness is one of the most common reasons families choose live-in respiratory care, someone trained is present and awake-able for every episode, instead of an elder facing it alone. Day-shift and visiting options are also available.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers, Respiratory & COPD Care at Home, Bangalore',
    medicalSpecialty: ['Geriatrics', 'Pulmonology'],
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

export default function RespiratoryCopdCareView() {
  return (
    <CareSubpageShell
      currentLabel={SERVICE.label}
      eyebrow="Bangalore · Respiratory & COPD care at home"
      headlineLead="COPD support that makes"
      headlineAccent="every breath easier."
      lede={SERVICE.tagline + ' Breath-paced daily support, on-time inhaler routines and early-warning monitoring, comfortable around oxygen equipment at home.'}
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
          <SectionHeader eyebrow="Frequently asked" titleLead="Respiratory care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Easier breathing at home,"
        headlineAccent="arranged with one call."
        body="Tell us about your loved one’s breathing routine and equipment at home. We respond within the hour, recommend the right cover, and start matching today."
        enquirySource={PATH}
        related={[
          { label: 'Medical Equipment Rental', href: '/care-services/medical-equipment-rental-bangalore' },
          { label: 'Oxygen Concentrator Rental', href: '/care-services/oxygen-concentrator-rental-bangalore' },
          { label: 'Home Nursing Care', href: '/care-services/home-nursing-care-bangalore' },
          { label: 'Cardio-Respiratory Physiotherapy', href: '/care-services/cardio-respiratory-physiotherapy-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
