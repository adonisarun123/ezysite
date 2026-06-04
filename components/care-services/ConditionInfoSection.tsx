'use client'

import { useState } from 'react'
import { ChartBarIcon, MagnifyingGlassIcon, ExclamationTriangleIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

/**
 * ConditionInfoSection — "Understand the condition" tabbed block.
 *
 * Inspired by the Vital Stats / Causes / Symptoms / Treatment pattern used by
 * established elder-care organisations. Adapted for EzyHelpers: the fourth tab
 * is "When you need care" (we arrange caregivers; we do not prescribe
 * treatment). Content is supplied per page via props so every condition page
 * shows medically grounded, condition-specific information.
 *
 * Also renders the full content in a visually-hidden block when tabs are not
 * active so search engines always see all four panels server-side.
 */

export interface ConditionInfo {
  /** e.g. "Dementia" — used in the section heading */
  conditionName: string
  /** 2-3 short stat lines (India/global prevalence etc.) with source names */
  vitalStats: { stat: string; detail: string }[]
  /** Common causes / risk factors */
  causes: string[]
  /** Early warning signs / symptoms */
  symptoms: string[]
  /** Signals that it's time to arrange professional home care */
  whenYouNeedCare: string[]
}

const TABS = [
  { key: 'stats', label: 'Vital stats', icon: ChartBarIcon },
  { key: 'causes', label: 'Causes', icon: MagnifyingGlassIcon },
  { key: 'symptoms', label: 'Symptoms', icon: ExclamationTriangleIcon },
  { key: 'care', label: 'When you need care', icon: HandRaisedIcon },
] as const

type TabKey = (typeof TABS)[number]['key']

export default function ConditionInfoSection({ info }: { info: ConditionInfo }) {
  const [active, setActive] = useState<TabKey>('stats')

  const panel = (key: TabKey) => {
    if (key === 'stats') {
      return (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {info.vitalStats.map((s) => (
            <li key={s.stat} className="rounded-2xl border border-care-100 bg-care-50/60 p-5">
              <div className="font-careSerif text-2xl font-semibold text-care-700">{s.stat}</div>
              <p className="mt-2 text-sm leading-snug text-neutral-700">{s.detail}</p>
            </li>
          ))}
        </ul>
      )
    }
    const items = key === 'causes' ? info.causes : key === 'symptoms' ? info.symptoms : info.whenYouNeedCare
    return (
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-care-500" aria-hidden />
            <span className="text-sm leading-snug text-neutral-800">{item}</span>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-24" aria-labelledby="condition-info-heading">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-600">Understand the condition</p>
        <h2 id="condition-info-heading" className="mt-3 font-careSerif text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
          {info.conditionName}: <span className="text-neutral-500">what families should know.</span>
        </h2>

        {/* Tabs */}
        <div role="tablist" aria-label={`${info.conditionName} information`} className="mt-8 flex flex-wrap gap-2">
          {TABS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              role="tab"
              aria-selected={active === key}
              onClick={() => setActive(key)}
              className={`inline-flex min-h-[42px] items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-care-500 focus-visible:ring-offset-1 ${
                active === key
                  ? 'border-care-600 bg-care-600 text-white'
                  : 'border-neutral-200 bg-white text-neutral-700 hover:border-care-300 hover:bg-care-50'
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden />
              {label}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="mt-8">
          {panel(active)}
        </div>

        {/* SEO: render inactive panels for crawlers (visually hidden, not display:none-from-birth since this is client-side; the default tab is server-rendered) */}
        <div className="sr-only" aria-hidden="true">
          {TABS.filter((t) => t.key !== active).map((t) => (
            <div key={t.key}>{panel(t.key)}</div>
          ))}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-neutral-400">
          This information is for general awareness, not medical advice. Always consult a qualified doctor for
          diagnosis and treatment. EzyHelpers arranges trained caregivers and nursing support — we work alongside
          your doctor&rsquo;s plan, never in place of it.
        </p>
      </div>
    </section>
  )
}
