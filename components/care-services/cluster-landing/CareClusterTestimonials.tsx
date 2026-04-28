'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
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
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#fbfbfd_0%,#ffffff_45%,rgba(230,244,255,0.55)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200/80 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-primary-600">Real families</p>
        <h2 className="mt-2 text-center font-display text-xl font-bold tracking-tight text-neutral-950 sm:text-2xl">
          What people say about care with us
        </h2>

        <div className="relative mt-10 rounded-[28px] border border-primary-100/90 bg-white/95 p-8 shadow-[0_24px_80px_rgba(0,52,102,0.08)] backdrop-blur-[2px] sm:p-10">
          <span
            className="pointer-events-none absolute -left-1 top-6 font-display text-7xl leading-none text-primary-500/[0.12] sm:text-8xl"
            aria-hidden
          >
            &ldquo;
          </span>

          <blockquote className="relative text-center">
            <p className="text-pretty text-base font-normal leading-relaxed text-neutral-800 sm:text-[1.05rem] sm:leading-relaxed">
              {hasEm && emph ? (
                <>
                  {active.quote.slice(0, emIdx)}
                  <em className="not-italic font-medium text-primary-600">{emph}</em>
                  {active.quote.slice(emIdx + emph.length)}
                </>
              ) : (
                active.quote
              )}
            </p>
          </blockquote>

          <div className="mt-8 flex flex-col items-center gap-4 border-t border-neutral-100 pt-8 sm:flex-row sm:justify-center sm:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-trust-500 text-sm font-bold text-white shadow-lg shadow-primary-900/20">
              {active.initials}
            </div>
            <div className="text-center sm:text-left">
              <strong className="block text-sm font-semibold text-neutral-900">{active.name}</strong>
              <span className="mt-0.5 block text-xs text-neutral-600">{active.location}</span>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3" role="tablist" aria-label="Client stories">
            <button
              type="button"
              className="rounded-full border border-neutral-200 bg-white p-2 text-neutral-600 shadow-sm transition hover:border-primary-200 hover:text-primary-700"
              aria-label="Previous story"
              onClick={() => go(i - 1)}
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={idx === i}
                  aria-label={`Story ${idx + 1}`}
                  onClick={() => go(idx)}
                  className={`h-2 rounded-full transition-all ${idx === i ? 'w-10 bg-gradient-to-r from-primary-600 to-trust-500' : 'w-7 bg-neutral-200 hover:bg-primary-200'}`}
                />
              ))}
            </div>
            <button
              type="button"
              className="rounded-full border border-neutral-200 bg-white p-2 text-neutral-600 shadow-sm transition hover:border-primary-200 hover:text-primary-700"
              aria-label="Next story"
              onClick={() => go(i + 1)}
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
