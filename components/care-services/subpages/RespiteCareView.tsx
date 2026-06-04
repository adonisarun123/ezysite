'use client'

import { CheckIcon } from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

const SERVICE = getNestedService('respite-care-at-home-bangalore')!
const PATH = `/care-services/${SERVICE.slug}`

/* hero stats — INVENTED / ILLUSTRATIVE figures for layout & marketing only.
 * Confirm against real operational data before launch. */
const HERO_STATS = [
  { value: '1 day – 1 month', label: 'flexible cover for exactly as long as you need' },
  { value: '24–48 hrs', label: 'typical time to place a respite caregiver' },
  { value: 'Same standards', label: 'as our long-term care — verified, trained, briefed' },
] as const

const SECTIONS = [
  {
    eyebrow: 'Short-term relief',
    titleLead: 'A real break,',
    titleMuted: 'without the guilt.',
    lede:
      'Family caregivers in Bangalore rarely get a day off. Respite care gives you a trained stand-in — for a day, a week or a month — so you can step away knowing your loved one is in good hands.',
    bullets: [
      'Cover from a single day up to a full month',
      'Travel, work trips, weddings and recovery from your own illness',
      'Flexible 12-hour or 24-hour live-in shifts',
      'Extend or shorten cover as your plans change',
    ],
  },
  {
    eyebrow: 'Seamless handover',
    titleLead: 'Your routine,',
    titleMuted: 'followed to the letter.',
    lede:
      'You have spent months building a routine that works. Our respite caregiver starts with a detailed handover briefing from you, so nothing changes for your loved one.',
    bullets: [
      'Structured handover briefing with the family carer before you leave',
      'Written routine notes — meals, medication times, preferences, dislikes',
      'Overlap day available so the caregiver settles in while you are still home',
      'Daily WhatsApp updates while you are away',
    ],
  },
  {
    eyebrow: 'Same standards',
    titleLead: 'Short-term cover,',
    titleMuted: 'long-term quality.',
    lede:
      'Respite caregivers come from the same verified, trained pool as our long-term placements — there is no “temp” tier of quality.',
    bullets: [
      'Police-verified, background-checked caregivers',
      'Trained in elder care, hygiene support and safe mobility assistance',
      'Experience with dementia, post-surgery and bedridden care available',
      'Free replacement if the caregiver isn’t the right fit',
    ],
  },
  {
    eyebrow: 'Caregiver wellbeing',
    titleLead: 'Because burnout helps',
    titleMuted: 'no one — least of all them.',
    lede:
      'Exhausted family caregivers make mistakes, fall ill and lose patience. Regular respite is not a luxury — it is how good care stays good.',
    bullets: [
      'Recurring respite slots — a weekend a month, or a fixed weekly day off',
      'Emergency respite when the family carer falls ill suddenly',
      'A pressure-free way to trial professional care before going long-term',
      'Smooth conversion to a long-term caregiver if you decide to continue',
    ],
  },
] as const

const FAQS = [
  {
    question: 'What is the minimum duration for respite care?',
    answer:
      'A single 12-hour shift is our minimum — useful for a wedding, a hospital visit of your own, or just a day of rest. Most Bangalore families book respite cover for anywhere between a weekend and a month.',
  },
  {
    question: 'How quickly can a respite caregiver start?',
    answer:
      'Typically within 24–48 hours in Bangalore, and same-day in genuine emergencies where a family carer has suddenly fallen ill. Booking a few days ahead gives us more choice in matching the right caregiver to your loved one.',
  },
  {
    question: 'What does respite care cost in Bangalore?',
    answer:
      `Respite care in Bangalore starts from around ₹1,200 per 12-hour shift (${formatPriceWithNote(SERVICE.priceKey)}), with 24-hour live-in cover priced higher depending on the level of care needed. Longer bookings work out more economical per day.`,
  },
  {
    question: 'Will the respite caregiver follow our existing routine?',
    answer:
      'Yes — that is the whole point of respite care. We start with a structured handover briefing from you, capture the routine in writing (medication times, meals, preferences), and the caregiver follows it exactly so your loved one’s day stays unchanged.',
  },
  {
    question: 'Can respite care convert into long-term care?',
    answer:
      'Absolutely, and many families use respite as a low-pressure trial. If the caregiver is a good fit and available, they can continue long-term; otherwise we match a permanent caregiver and manage a smooth handover.',
  },
  {
    question: 'Is respite care suitable for dementia patients?',
    answer:
      'Yes. We match caregivers with dementia experience and take extra care with the handover, since people with dementia can find new faces unsettling. An overlap day with the family carer present usually makes the transition smooth.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Respite Care at Home, Bangalore',
    medicalSpecialty: ['Geriatrics'],
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

export default function RespiteCareView() {
  return (
    <CareSubpageShell
      currentLabel={SERVICE.label}
      eyebrow="Bangalore · Respite care at home"
      headlineLead="You take the break."
      headlineAccent="We hold the routine."
      lede={SERVICE.tagline + ' From a single day to a full month — verified caregivers who follow your routine exactly, so you can travel, work or simply rest.'}
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director' }}
      lastUpdated="June 2026"
    >
      <section className="bg-white px-4 pt-4 sm:px-6">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="rounded-[24px] border border-neutral-200 bg-primary-50 p-6 text-center">
              <div className="font-careSerif text-3xl font-medium tracking-tight text-primary-500">{s.value}</div>
              <div className="mt-2 text-sm leading-snug text-neutral-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {SECTIONS.map((sec, idx) => (
        <section
          key={sec.eyebrow}
          className={`px-4 py-20 sm:px-6 sm:py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-primary-50'}`}
        >
          <div className="mx-auto max-w-5xl">
            <SectionHeader eyebrow={sec.eyebrow} titleLead={sec.titleLead} titleMuted={sec.titleMuted} lede={sec.lede} />
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {sec.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" aria-hidden />
                  <span className="text-sm leading-snug text-neutral-800">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Respite care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Short-term cover,"
        headlineAccent="arranged with one call."
        body="Tell us when you need the break and what your loved one needs. We respond within the hour and can usually place a caregiver in 24–48 hours."
        enquirySource={PATH}
        related={[
          { label: 'Elder Care at Home', href: '/care-services/elder-care-at-home-bangalore' },
          { label: 'Alzheimer’s Care', href: '/care-services/alzheimers-care-at-home-bangalore' },
          { label: 'Trained Attendants', href: '/care-services/trained-attendant-services-bangalore' },
          { label: 'Home Nursing Care', href: '/care-services/home-nursing-care-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
