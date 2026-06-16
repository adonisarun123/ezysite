'use client'

import Link from 'next/link'
import {
  CareSubpageShell,
  CareSubpageClosingCTA,
  SectionHeader,
} from './CareSubpageShell'

const PATH = '/care-services/signs-elderly-parent-needs-care-bangalore'

const signGroups = [
  {
    title: 'Physical signs',
    items: [
      'A fall, or new unsteadiness on stairs and getting out of chairs',
      'Unexplained bruises they did not mention',
      'Weight loss, or a fridge with nothing fresh in it',
      'Struggling with bathing, dressing or cooking',
    ],
  },
  {
    title: 'Memory and judgement',
    items: [
      'Missed medications, or a pill box that does not match the day',
      'Repeated questions within one conversation',
      'Confusion about the day, or getting lost on familiar routes',
      'Missed appointments and bills',
    ],
  },
  {
    title: 'Mood and daily life',
    items: [
      'Wearing the same clothes for days, skipping baths',
      'A tidy home becoming neglected',
      'Withdrawing from friends and hobbies they loved',
      'Seeming flat, low or lonely, especially if living alone',
    ],
  },
]

export default function SignsParentNeedsCareView() {
  return (
    <CareSubpageShell
      currentLabel="Signs Your Parent Needs Care"
      eyebrow="Elderly care · Bangalore"
      headlineLead="Is it time to arrange care"
      headlineAccent="for your parent?"
      lede="Most families wait too long, not from neglect but because decline is gradual and parents insist they are managing. These are the earlier signs worth acting on, before a crisis decides for you."
      primaryCtaLabel="Talk to a care advisor"
      enquirySource={PATH}
    >
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-2xl border border-care-100 bg-care-50/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-care-600">
            Quick answer
          </p>
          <h2 className="mt-1 font-careSerif text-xl font-medium text-neutral-900 sm:text-2xl">
            How do I know when my ageing parent needs a caregiver?
          </h2>
          <p className="mt-3 max-w-3xl text-neutral-700">
            If you find yourself worrying about your parent between visits, checking your phone
            for missed calls, or planning trips around their safety, that worry is usually a
            signal the situation has already moved past what they can manage alone. Watch for
            falls, weight loss, missed medications, memory changes that disrupt daily life,
            slipping personal care, and growing loneliness. EzyHelpers provides verified
            elderly caregivers in Bangalore, from a few hours a week to full live-in care.
          </p>
        </div>

        <div className="mt-14">
          <SectionHeader
            eyebrow="What to watch for"
            titleLead="The signs"
            titleMuted="that matter most"
            lede="One of these on its own may be nothing. Several together usually mean it is time to bring in help."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {signGroups.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-careSerif text-lg font-medium text-neutral-900">{g.title}</h3>
                <ul className="mt-4 space-y-3">
                  {g.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-neutral-700">
                      <span aria-hidden className="mt-1 text-care-500">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
            <h3 className="font-careSerif text-xl font-medium text-neutral-900">
              How to raise it without a fight
            </h3>
            <p className="mt-4 text-neutral-700">
              Parents resist help because it feels like losing independence. The conversation
              goes better when you frame care as support that keeps them independent longer, not
              a takeover. Start small. A few hours of help, or a{' '}
              <Link href="/care-services/respite-care-at-home-bangalore" className="font-semibold text-care-600 underline">
                respite arrangement
              </Link>
              , is easier to accept than a live-in caregiver arriving all at once. Let them keep
              choices over the caregiver, the hours and the tasks, and bring in a doctor or
              trusted relative so it does not feel like the children decided for them.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
            <h3 className="font-careSerif text-xl font-medium text-neutral-900">
              Where to start
            </h3>
            <p className="mt-4 text-neutral-700">
              You do not have to jump to full-time care. Many families begin with{' '}
              <Link href="/care-services/elder-care-at-home-bangalore" className="font-semibold text-care-600 underline">
                a few hours of elderly care
              </Link>{' '}
              or a companion for the lonely parts of the day, and add more only as needs grow.
              If memory changes are the worry,{' '}
              <Link href="/care-services/dementia-care-at-home-bangalore" className="font-semibold text-care-600 underline">
                dementia care support
              </Link>{' '}
              may be the better fit. A trial period lets you test the fit before committing.
            </p>
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Not sure if it's time?"
        headlineAccent="Talk it through with us."
        body="Describe an ordinary day in your parent's life and a care advisor will tell you honestly what level of help, if any, would make a difference. No pressure, no upselling."
        enquirySource={PATH}
        primaryCtaLabel="Talk to a care advisor"
        related={[
          { label: 'Elder care at home', href: '/care-services/elder-care-at-home-bangalore' },
          { label: 'Dementia care at home', href: '/care-services/dementia-care-at-home-bangalore' },
          { label: 'Respite care', href: '/care-services/respite-care-at-home-bangalore' },
          { label: 'Caretaker services', href: '/care-services/caretaker-services-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
