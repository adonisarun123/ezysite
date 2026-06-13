'use client'

import Link from 'next/link'
import {
  CareSubpageShell,
  CareSubpageClosingCTA,
  SectionHeader,
} from './CareSubpageShell'

const PATH = '/care-services/24-hour-elderly-care-at-home-bangalore'

const included = [
  'Help with bathing, dressing, grooming and toileting',
  'Meals prepared and fed on time, to dietary needs',
  'Medication reminders and help on a fixed schedule',
  'Mobility support and safe movement around the home',
  'Turning and positioning for bedridden parents, day and night',
  'Companionship through the long hours, not just tasks',
  'An alert presence overnight, when most falls happen',
]

const whoItSuits = [
  {
    title: 'After a fall or hospital stay',
    body: 'When a parent is no longer safe alone and needs someone within reach around the clock during recovery.',
  },
  {
    title: 'Advancing dementia',
    body: 'When wandering, confusion or sundowning make unsupervised hours risky and a familiar presence keeps things calm.',
  },
  {
    title: 'Bedridden or fully dependent',
    body: 'When turning, feeding and hygiene are needed through the night as well as the day to prevent bed sores and complications.',
  },
  {
    title: 'NRI families',
    body: 'When children abroad need to know a trusted person is present every hour, with one point of contact reporting back.',
  },
]

export default function TwentyFourHourElderCareView() {
  return (
    <CareSubpageShell
      currentLabel="24-Hour Elderly Care at Home"
      eyebrow="Elderly care · Bangalore"
      headlineLead="24-hour elderly care"
      headlineAccent="at home, in Bangalore"
      lede="For parents who are not safe alone, a round-the-clock caregiver means help is always within reach, day and night, in the comfort of home. Verified, trained, and matched to your parent's needs."
      primaryCtaLabel="Arrange 24-hour care"
      enquirySource={PATH}
    >
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-2xl border border-care-100 bg-care-50/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-care-600">
            Quick answer
          </p>
          <h2 className="mt-1 font-careSerif text-xl font-medium text-neutral-900 sm:text-2xl">
            What does 24-hour elderly care at home involve?
          </h2>
          <p className="mt-3 max-w-3xl text-neutral-700">
            A trained caregiver provides continuous support at home, either as a live-in
            arrangement or two shifts that cover the full day and night. They handle bathing,
            meals, medication reminders, mobility, overnight safety and companionship.
            EzyHelpers arranges background-verified 24-hour elderly caregivers across Bangalore,
            usually within 24 to 72 hours, with a replacement guarantee. Call 080-31411776 for a
            quote for your parent's needs.
          </p>
        </div>

        <div className="mt-14">
          <SectionHeader
            eyebrow="What's included"
            titleLead="Care that covers"
            titleMuted="the whole day and night"
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-neutral-200 bg-white p-4 text-sm leading-relaxed text-neutral-700"
              >
                <span aria-hidden className="mt-0.5 font-semibold text-care-500">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <SectionHeader
            eyebrow="Who it's for"
            titleLead="When round-the-clock care"
            titleMuted="makes sense"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {whoItSuits.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-careSerif text-lg font-medium text-neutral-900">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">{w.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
          <h3 className="font-careSerif text-xl font-medium text-neutral-900">
            Live-in or two shifts?
          </h3>
          <p className="mt-4 max-w-3xl text-neutral-700">
            For a parent who is mostly settled but unsafe alone, a single live-in caregiver is
            usually the most economical safe choice. For a parent who needs active care through
            the night, such as turning every couple of hours, two shifts or a live-in with night
            cover keeps the caregiver rested and your parent safe. We help you pick the right
            structure rather than selling the most expensive one. If medical tasks are involved,
            we can add{' '}
            <Link href="/care-services/home-nursing-care-bangalore" className="font-semibold text-care-600 underline">
              home nursing
            </Link>{' '}
            to the arrangement.
          </p>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Someone with your parent,"
        headlineAccent="every hour."
        body="Tell us about your parent's day and night and we'll match a verified caregiver and the right shift structure, usually within 24 to 72 hours, with a replacement guarantee."
        enquirySource={PATH}
        primaryCtaLabel="Arrange 24-hour care"
        related={[
          { label: 'Elder care at home', href: '/care-services/elder-care-at-home-bangalore' },
          { label: 'Bedridden patient care', href: '/care-services/bedridden-patient-care-at-home-bangalore' },
          { label: 'Dementia care at home', href: '/care-services/dementia-care-at-home-bangalore' },
          { label: 'Home nursing care', href: '/care-services/home-nursing-care-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
