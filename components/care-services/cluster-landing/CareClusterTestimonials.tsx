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
    <section className="relative overflow-hidden bg-[#FFF8F1] px-4 py-16 font-careUi sm:px-6 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#FFF8F1_0%,#ffffff_50%,#FFF8F1_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF385C]/25 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#FF385C]">Real families</p>
        <h2 className="font-careSerif mt-2 text-center text-xl font-medium tracking-tight text-[#222] sm:text-[clamp(1.25rem,3vw,1.75rem)]">
          What people say <span className="text-[#717171]">about care with us</span>
        </h2>

        <div className="relative mt-10 rounded-[28px] border border-[#FF385C]/15 bg-white/95 p-8 shadow-[0_24px_80px_rgba(255,56,92,0.06)] backdrop-blur-[2px] sm:p-10">
          <span
            className="pointer-events-none absolute -left-1 top-6 font-careSerif text-7xl leading-none text-[#FF385C]/[0.12] sm:text-8xl"
            aria-hidden
          >
            &ldquo;
          </span>

          <blockquote className="relative text-center">
            <p className="text-pretty font-careSerif text-base font-normal leading-relaxed tracking-[-0.01em] text-[#222] sm:text-[1.125rem] sm:leading-[1.45]">
              {hasEm && emph ? (
                <>
                  {active.quote.slice(0, emIdx)}
                  <em className="font-careSerif font-normal italic text-[#FF385C]">{emph}</em>
                  {active.quote.slice(emIdx + emph.length)}
                </>
              ) : (
                active.quote
              )}
            </p>
          </blockquote>

          <div className="mt-8 flex flex-col items-center gap-4 border-t border-neutral-100 pt-8 sm:flex-row sm:justify-center sm:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF385C] to-[#FC642D] text-xs font-bold leading-tight text-white shadow-lg shadow-[#FF385C]/25 sm:text-sm">
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
              className="rounded-full border border-neutral-200 bg-white p-2 text-neutral-600 shadow-sm transition hover:border-[#FF385C]/40 hover:text-[#FF385C]"
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
                  className={`h-2 rounded-full transition-all ${idx === i ? 'w-10 bg-gradient-to-r from-[#FF385C] to-[#FC642D]' : 'w-7 bg-neutral-200 hover:bg-[#FF385C]/25'}`}
                />
              ))}
            </div>
            <button
              type="button"
              className="rounded-full border border-neutral-200 bg-white p-2 text-neutral-600 shadow-sm transition hover:border-[#FF385C]/40 hover:text-[#FF385C]"
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
