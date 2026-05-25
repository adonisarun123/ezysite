import {
  CheckIcon,
  GlobeAltIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  CreditCardIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'

const PATH = '/care-services/nri-family-home-care-bangalore'

const SUPPORT = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Daily WhatsApp updates',
    body:
      'A short evening summary every day — meals, medication, mood, anything notable. Photos when appropriate. The cadence that distant children actually want.',
  },
  {
    icon: VideoCameraIcon,
    title: 'Weekly video calls',
    body:
      'A scheduled video check-in with the caregiver and the parent — caregiver sets it up, family sees how things look. We coordinate the time across time zones.',
  },
  {
    icon: ClockIcon,
    title: 'Time-zone-aware emergency contact',
    body:
      'A 24×7 emergency line with India-time and target-country-time on file. Emergencies are escalated through pre-agreed paths, not random WhatsApps.',
  },
  {
    icon: CreditCardIcon,
    title: 'Payment from anywhere',
    body:
      'International cards, NRE/NRO transfers, or payments to a designated India-based family member. Monthly invoicing, transparent line items.',
  },
  {
    icon: GlobeAltIcon,
    title: 'Family WhatsApp group',
    body:
      'A managed group with the caregiver, the family, and our care coordinator. Everyone’s in the loop without having to remember to forward updates.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Independent escalation',
    body:
      'A senior care advisor (not the caregiver) calls or messages every two weeks. If something is off, you hear it from someone who isn’t the caregiver.',
  },
] as const

const COUNTRIES = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'United Arab Emirates',
  'Singapore',
  'Germany',
  'New Zealand',
] as const

const CONCERNS = [
  {
    fear: 'How will I know if something is wrong?',
    answer:
      'Daily updates + scheduled video calls + an independent two-weekly check by our senior advisor. Most issues surface long before they become problems.',
  },
  {
    fear: 'What if the caregiver doesn’t bond with my parent?',
    answer:
      'You’re not stuck. Free replacement, no questions asked. We’d rather find the right caregiver than persuade you to keep the wrong one.',
  },
  {
    fear: 'How do emergencies work when I’m 12 hours away?',
    answer:
      'Pre-agreed escalation: minor (caregiver handles, you’re informed in the next update), moderate (we call you on your local time), serious (we call regardless of time zone). Ambulance, hospital, paperwork — we coordinate even when you can’t.',
  },
  {
    fear: 'Will I be able to speak to my parent freely?',
    answer:
      'Always. Caregivers know they’re not gatekeepers. You can call your parent anytime. We don’t mediate that conversation.',
  },
] as const

const FAQS = [
  {
    question: 'I’m in the US. How will the daily updates work across time zones?',
    answer:
      'The caregiver sends an evening WhatsApp message after dinner-time in India (≈8pm IST). That’s typically morning in North America. Most NRI families read it with their morning coffee. We can adjust to any preference.',
  },
  {
    question: 'How do I pay?',
    answer:
      'Three options: international card, NRE/NRO bank transfer, or payment to a designated India-based family member who reimburses or pays directly. We send a transparent monthly invoice with all line items.',
  },
  {
    question: 'What if my parent is hospitalised when I can’t fly?',
    answer:
      'We coordinate. Caregiver accompanies to the hospital, our care advisor liaises with the hospital, and we keep you updated on a schedule that fits your time zone. Many of our NRI families have managed full hospitalisations from abroad without travelling.',
  },
  {
    question: 'Can the caregiver communicate with my parent’s consultant doctor?',
    answer:
      'Yes — we register the caregiver with the consultant for routine updates. For meaningful clinical decisions, we always loop in the family.',
  },
  {
    question: 'What about visa visits — can the caregiver continue when I visit India?',
    answer:
      'Of course. Many families ask the caregiver to stay during their visits — it preserves the parent’s routine and gives you trusted help during what’s often a busy trip.',
  },
  {
    question: 'How do you handle festivals, religious observance, dietary preferences?',
    answer:
      'These are the daily texture of life — not optional. We brief the caregiver on dietary norms (vegetarian, Jain, fasting), festival routines, and prayer-time accommodation. We screen for cultural sensitivity in the same interview that screens for skill.',
  },
  {
    question: 'Are NRI prices different from local prices?',
    answer:
      'No. NRI families pay the same rates as local families. We don’t add an "abroad" markup — that wouldn’t be right.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Home Care for NRI Families in Bangalore',
    areaServed: { '@type': 'City', name: 'Bangalore' },
    provider: { '@type': 'Organization', name: 'EzyHelpers' },
    audience: { '@type': 'Audience', audienceType: 'Non-Resident Indian families' },
    url: `https://www.ezyhelpers.com${PATH}`,
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

export default function NriFamilyView() {
  return (
    <CareSubpageShell
      currentLabel="Home Care for NRI Families"
      eyebrow="Bangalore · NRI care coordination"
      headlineLead="Care for parents in Bangalore."
      headlineAccent="Wherever you are in the world."
      lede="Daily updates, weekly video calls, time-zone-aware emergencies, transparent invoicing — built for the families running this from 12 time zones away."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-[#F2F7FB] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0074C8]">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            We coordinate care across time zones the way you’d want it done if you were close enough to be
            doing it yourself. <em className="italic text-[#0074C8]">Daily updates</em>,{' '}
            <em className="italic text-[#0074C8]">weekly video</em>, escalation paths agreed in advance, and
            payment from anywhere. NRI rates are the same as local rates — no markup for distance.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="What we do differently"
            titleLead="Six things"
            titleMuted="that make remote care work."
            lede="Most home care isn’t built for distance. We’ve built ours around it — because over half our care placements are NRI-coordinated."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SUPPORT.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E6F1FA] text-[#0074C8] ring-1 ring-[#0074C8]/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-careSerif text-lg font-bold tracking-tight text-neutral-950 sm:text-xl">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2F7FB] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="The hard questions"
            titleLead="What NRI families"
            titleMuted="actually worry about."
            lede="The fears we hear most often, answered without sales gloss."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {CONCERNS.map((c) => (
              <article
                key={c.fear}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF385C]">The worry</p>
                <p className="mt-2 font-careSerif text-lg leading-snug text-neutral-900 sm:text-xl">
                  {c.fear}
                </p>
                <div className="mt-5 border-t border-neutral-200 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    What we do
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">{c.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="NRI families served"
            titleLead="Coordinating care"
            titleMuted="from these countries every week."
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {COUNTRIES.map((c) => (
              <div
                key={c}
                className="flex items-center justify-center rounded-2xl border border-neutral-200 bg-[#F7F7F2] px-4 py-3.5 text-sm font-semibold text-neutral-900"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="NRI care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Peace of mind,"
        headlineAccent="from any time zone."
        body="Tell us where you are, what your parent needs, and the time zone we should respect. We’ll respond within your local working hours."
        enquirySource={PATH}
        related={[
          { label: 'Elderly Care Services', href: '/care-services/elderly-care-services-bangalore' },
          { label: 'Whitefield care', href: '/care-services/elderly-care-whitefield-bangalore' },
          { label: 'Verification Process', href: '/care-services/caregiver-verification-process' },
        ]}
      />
    </CareSubpageShell>
  )
}
