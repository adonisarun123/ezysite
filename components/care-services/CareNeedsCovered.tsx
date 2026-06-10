import { ClipboardDocumentCheckIcon, HeartIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/24/solid'

/**
 * CareNeedsCovered — "Care needs & conditions covered" block for condition
 * pages. Two panels:
 *  1. Conditions covered — symptom/situation chips a family recognises
 *  2. Care needs we support — the concrete daily tasks the caregiver handles
 *
 * Content is supplied per page. Phrasing follows the caregiver (non-clinical)
 * scope: observation and support language, clinical procedures stay with
 * nurses ("if trained and instructed" caveats preserved where supplied).
 */

export interface CareNeeds {
  /** Symptom/situation chips, e.g. "Memory loss", "Wandering" */
  conditionsCovered: string[]
  /** Concrete daily care tasks, e.g. "Help with bathing, dressing and meals" */
  careNeeds: string[]
}

export default function CareNeedsCovered({ needs }: { needs: CareNeeds }) {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-24" aria-labelledby="care-needs-heading">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-600">What we cover</p>
        <h2 id="care-needs-heading" className="mt-3 font-careSerif text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
          Care needs &amp; conditions <span className="text-neutral-500">covered.</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Conditions covered */}
          <div className="rounded-[24px] border border-care-100 bg-care-50/50 p-6 sm:p-7 lg:col-span-2">
            <h3 className="flex items-center gap-2 text-lg font-bold text-neutral-900">
              <HeartIcon className="h-5 w-5 text-care-600" aria-hidden />
              Conditions covered
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {needs.conditionsCovered.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-care-200 bg-white px-3.5 py-2 text-sm font-medium text-care-800"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Care needs */}
          <div className="rounded-[24px] border border-neutral-200 bg-white p-6 sm:p-7 lg:col-span-3">
            <h3 className="flex items-center gap-2 text-lg font-bold text-neutral-900">
              <ClipboardDocumentCheckIcon className="h-5 w-5 text-care-600" aria-hidden />
              Care needs we support
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {needs.careNeeds.map((n) => (
                <li key={n} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-care-50 ring-1 ring-care-500/20">
                    <CheckIcon className="h-3 w-3 text-care-600" aria-hidden />
                  </span>
                  <span className="text-sm leading-snug text-neutral-800">{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
