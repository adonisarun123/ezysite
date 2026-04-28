'use client'

import { useCallback, useEffect, useState } from 'react'
import type { CareStory } from '@/lib/careServices/clusterLanding/types'

export type { CareStory }

export default function CareClusterTestimonials({ stories }: { stories: CareStory[] }) {
  const [i, setI] = useState(0)
  const active = stories[i] ?? stories[0]

  useEffect(() => {
    const id = window.setInterval(() => setI((x) => (x + 1) % stories.length), 8000)
    return () => window.clearInterval(id)
  }, [stories.length])

  const go = useCallback((n: number) => setI(((n % stories.length) + stories.length) % stories.length), [stories.length])

  if (!active) return null

  const emph = active.emphasisPhrase
  const emIdx = emph ? active.quote.indexOf(emph) : -1
  const hasEm = emIdx >= 0 && emph

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fbfbfd] to-primary-50/30 px-4 py-20 sm:px-6 lg:py-28">
      <p
        className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 font-display text-[clamp(180px,35vw,280px)] leading-none text-primary-500/[0.06]"
        aria-hidden
      >
        &ldquo;
      </p>
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-display text-[clamp(1.35rem,4vw,2.125rem)] leading-snug tracking-tight text-neutral-800">
          {hasEm && emph ? (
            <>
              {active.quote.slice(0, emIdx)}
              <em className="not-italic text-primary-600">{emph}</em>
              {active.quote.slice(emIdx + emph.length)}
            </>
          ) : (
            active.quote
          )}
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-teal-500 text-sm font-bold text-white shadow-md">
            {active.initials}
          </div>
          <div className="text-left">
            <strong className="block text-sm font-semibold text-neutral-900">{active.name}</strong>
            <span className="text-xs text-neutral-500">{active.location}</span>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Client stories">
          {stories.map((_, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={idx === i}
              onClick={() => go(idx)}
              className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-10 bg-gradient-to-r from-primary-600 to-trust-500' : 'w-7 bg-neutral-300 hover:bg-primary-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
