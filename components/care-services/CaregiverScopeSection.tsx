import { CheckCircleIcon, XCircleIcon, PhoneIcon, UserGroupIcon, HomeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

/**
 * CaregiverScopeSection — honest "What the caregiver does / doesn't do" block
 * plus a 3-step "How to book" strip.
 *
 * The Do's & Don'ts pattern (inspired by leading home-care platforms) sets
 * expectations upfront and prevents the #1 cause of placement disputes:
 * mismatched assumptions about scope. The booking strip reduces hesitation by
 * showing how simple the process is.
 *
 * Defaults cover the caregiver/attendant scope; pages can override per service
 * (e.g. nursing pages where clinical procedures ARE in scope).
 */

interface CaregiverScopeProps {
  dos?: string[]
  donts?: string[]
  /** Override e.g. "the nurse" for nursing pages */
  workerLabel?: string
}

const DEFAULT_DOS = [
  'Personal care — bathing, grooming, dressing, toilet assistance',
  'Oral feeding and meal-time support',
  'Oral medication reminders, on schedule',
  'Safe walking, transfers and mobility support',
  'Companionship, conversation and daily engagement',
  'Light tidying of the care recipient’s room and washroom',
  'Washing the care recipient’s clothes (machine wash)',
  'Preparing simple meals for the care recipient',
]

const DEFAULT_DONTS = [
  'Injections, IV lines, Ryle’s tube or any clinical procedure (we arrange qualified nurses for these)',
  'Cooking or housework for the whole family',
  'Washing the family’s clothes or cleaning the full house',
  'Heavy massage or physiotherapy (we arrange certified physiotherapists)',
  'Administering medication beyond reminders without nurse oversight',
  'Driving or errands outside the agreed care plan',
]

const BOOKING_STEPS = [
  {
    icon: PhoneIcon,
    title: 'Tell us what you need',
    body: 'Call 080-31411776 or send the form — share the condition, daily routine and your locality.',
  },
  {
    icon: UserGroupIcon,
    title: 'Get matched within hours',
    body: 'We shortlist verified caregivers suited to the condition, language and shift you need.',
  },
  {
    icon: HomeIcon,
    title: 'Care starts at home',
    body: 'The caregiver is briefed and begins — with quick replacement support if the fit isn’t right.',
  },
] as const

export default function CaregiverScopeSection({ dos = DEFAULT_DOS, donts = DEFAULT_DONTS, workerLabel = 'the caregiver' }: CaregiverScopeProps) {
  return (
    <>
      {/* Do's & Don'ts */}
      <section className="bg-care-50/50 px-4 py-20 sm:px-6 sm:py-24" aria-labelledby="scope-heading">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-600">Honest expectations</p>
          <h2 id="scope-heading" className="mt-3 font-careSerif text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            What {workerLabel} does — <span className="text-neutral-500">and doesn&rsquo;t.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-600">
            Clear scope from day one keeps the placement happy on both sides. Here&rsquo;s exactly what to expect.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-[24px] border border-neutral-200 bg-white p-6 sm:p-7">
              <h3 className="flex items-center gap-2 text-lg font-bold text-neutral-900">
                <CheckCircleIcon className="h-6 w-6 text-green-600" aria-hidden />
                Included in care
              </h3>
              <ul className="mt-5 space-y-3">
                {dos.map((d) => (
                  <li key={d} className="flex items-start gap-2.5">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-green-600" aria-hidden />
                    <span className="text-sm leading-snug text-neutral-800">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[24px] border border-neutral-200 bg-white p-6 sm:p-7">
              <h3 className="flex items-center gap-2 text-lg font-bold text-neutral-900">
                <XCircleIcon className="h-6 w-6 text-red-500" aria-hidden />
                Not included (we arrange specialists instead)
              </h3>
              <ul className="mt-5 space-y-3">
                {donts.map((d) => (
                  <li key={d} className="flex items-start gap-2.5">
                    <XCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-red-400" aria-hidden />
                    <span className="text-sm leading-snug text-neutral-800">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to book */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24" aria-labelledby="booking-heading">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-600">Simple to start</p>
          <h2 id="booking-heading" className="mt-3 font-careSerif text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            How to book care at home.
          </h2>

          <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {BOOKING_STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <li key={step.title} className="relative rounded-[24px] border border-neutral-200 bg-white p-6 sm:p-7">
                  <span className="absolute -top-3 left-6 rounded-full bg-care-600 px-3 py-1 text-xs font-bold text-white">
                    Step {i + 1}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-care-50 text-care-600 ring-1 ring-care-500/15">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-neutral-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.body}</p>
                </li>
              )
            })}
          </ol>

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link
              href="/care-services/enquiry"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-care-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-care-700 active:scale-[0.98]"
            >
              Start your care enquiry
            </Link>
            <a
              href="tel:+918031411776"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:border-care-300 hover:bg-care-50"
            >
              <PhoneIcon className="h-4 w-4 text-care-600" aria-hidden />
              080-31411776
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
