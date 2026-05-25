'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { PhoneIcon, ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { CARE_ENQUIRY_HREF } from '@/lib/careServices/registry'
import { trackCareCTAClick, trackCarePhoneClick } from '@/lib/analytics'

/**
 * Shared shell for all /care-services/* SEO subpages (condition, locality,
 * cost, comparison). Provides:
 *  - Navbar
 *  - Inline transparent breadcrumb (matches /care-services hub style)
 *  - Apple-clean centered hero with eyebrow → headline → lede → CTAs
 *  - Footer
 *  - Final CTA section helper, ready to drop in
 *  - Optional JSON-LD slot
 */

const PHONE_DISPLAY = '080-31411776'
const PHONE_HREF = 'tel:+918031411776'

export type Crumb = { label: string; href?: string }

type Props = {
  /** Breadcrumb leaf label, e.g. "Stroke Care at Home" */
  currentLabel: string
  /** Eyebrow above the hero headline, small caps tracking */
  eyebrow: string
  /** Headline — the first half is bold neutral, the accent half italic rose */
  headlineLead: string
  headlineAccent: string
  /** Sub-headline / lede */
  lede: string
  /** Primary CTA button label, defaults to "Talk to a care advisor" */
  primaryCtaLabel?: string
  /** Pathname of the page itself, used to tag the enquiry source */
  enquirySource: string
  /** Children render below the hero */
  children: React.ReactNode
  /** Optional JSON-LD blocks injected in <head> via inline script */
  jsonLd?: Record<string, unknown>[]
  /** E-E-A-T: medical reviewer with credentials. Renders below the hero CTAs. */
  reviewedBy?: { name: string; credential: string; href?: string }
  /** E-E-A-T: human-readable last review date, e.g. "May 2026" */
  lastUpdated?: string
}

export function CareSubpageShell({
  currentLabel,
  eyebrow,
  headlineLead,
  headlineAccent,
  lede,
  primaryCtaLabel = 'Talk to a care advisor',
  enquirySource,
  children,
  jsonLd,
  reviewedBy,
  lastUpdated,
}: Props) {
  const enquiryHref = `${CARE_ENQUIRY_HREF}?source=${encodeURIComponent(enquirySource)}`

  /* ───── Auto-generated BreadcrumbList JSON-LD for every subpage ───── */
  const SITE = 'https://www.ezyhelpers.com'
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Care Services', item: `${SITE}/care-services` },
      { '@type': 'ListItem', position: 3, name: currentLabel, item: `${SITE}${enquirySource}` },
    ],
  }

  const allJsonLd = [breadcrumbLd, ...(jsonLd ?? [])]

  return (
    <div className="min-h-screen bg-white font-careUi text-neutral-900 antialiased">
      <Navbar />

      {/* ─────────────────── Hero ─────────────────── */}
      <header className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,56,92,0.06) 0%, rgba(255,255,255,0) 60%)',
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:pb-24">
          {/* Inline transparent breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-left">
            <ol className="flex flex-wrap items-center gap-x-1 text-sm text-neutral-500">
              <li>
                <Link href="/" className="transition-colors hover:text-neutral-900">
                  Home
                </Link>
              </li>
              <li className="select-none px-2 text-neutral-300" aria-hidden="true">
                ›
              </li>
              <li>
                <Link href="/care-services" className="transition-colors hover:text-neutral-900">
                  Care Services
                </Link>
              </li>
              <li className="select-none px-2 text-neutral-300" aria-hidden="true">
                ›
              </li>
              <li>
                <span className="font-medium text-neutral-900">{currentLabel}</span>
              </li>
            </ol>
          </nav>

          <div className="mt-10 text-center sm:mt-14">
            <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF385C]" aria-hidden />
              {eyebrow}
            </p>

            <h1 className="mx-auto mt-7 max-w-4xl font-careSerif text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.03em] text-neutral-950">
              {headlineLead}
              <br />
              <em className="font-careSerif font-normal italic text-[#FF385C]">{headlineAccent}</em>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-600 sm:text-xl">
              {lede}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={enquiryHref}
                onClick={() => trackCareCTAClick(primaryCtaLabel, `${enquirySource}#hero`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-neutral-900 px-7 py-4 text-[15px] font-semibold text-white shadow-[0_2px_10px_rgba(0,0,0,0.18)] transition hover:bg-black hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] active:scale-[0.98]"
              >
                {primaryCtaLabel}
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={PHONE_HREF}
                onClick={() => trackCarePhoneClick(PHONE_DISPLAY, `${enquirySource}#hero`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-4 text-[15px] font-semibold text-neutral-900 shadow-sm transition hover:border-neutral-900 hover:bg-neutral-50"
              >
                <PhoneIcon className="h-4 w-4" aria-hidden />
                {PHONE_DISPLAY}
              </a>
            </div>

            {(reviewedBy || lastUpdated) && (
              <p className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-neutral-500">
                {reviewedBy ? (
                  <span>
                    Reviewed by{' '}
                    {reviewedBy.href ? (
                      <Link
                        href={reviewedBy.href}
                        className="font-semibold text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-700"
                      >
                        {reviewedBy.name}, {reviewedBy.credential}
                      </Link>
                    ) : (
                      <span className="font-semibold text-neutral-700">
                        {reviewedBy.name}, {reviewedBy.credential}
                      </span>
                    )}
                  </span>
                ) : null}
                {reviewedBy && lastUpdated ? <span aria-hidden>·</span> : null}
                {lastUpdated ? <span>Last updated {lastUpdated}</span> : null}
              </p>
            )}
          </div>
        </div>
      </header>

      <main>{children}</main>

      <Footer />

      {allJsonLd.map((blob, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blob) }}
        />
      ))}
    </div>
  )
}

/* ───────────────── Final CTA (warm peach gradient — re-use across pages) ───────────────── */
export function CareSubpageClosingCTA({
  headlineLead,
  headlineAccent,
  body,
  enquirySource,
  primaryCtaLabel = 'Get matched today',
  related,
}: {
  headlineLead: string
  headlineAccent: string
  body: string
  enquirySource: string
  primaryCtaLabel?: string
  related?: { label: string; href: string }[]
}) {
  const enquiryHref = `${CARE_ENQUIRY_HREF}?source=${encodeURIComponent(enquirySource)}`
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF1EC] via-[#FFE4DA] to-[#FFD3C2] px-4 py-24 sm:px-6 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-[#FF385C]/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-[#FF7D5C]/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-careSerif text-[clamp(2rem,5.5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
          {headlineLead}
          <br />
          <em className="font-careSerif font-normal italic text-[#FF385C]">{headlineAccent}</em>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">{body}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={enquiryHref}
            onClick={() => trackCareCTAClick(primaryCtaLabel, `${enquirySource}#footer-cta`)}
            className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-neutral-900 px-7 py-4 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition hover:bg-black active:scale-[0.98]"
          >
            {primaryCtaLabel}
            <ArrowRightIcon className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href={PHONE_HREF}
            onClick={() => trackCarePhoneClick(PHONE_DISPLAY, `${enquirySource}#footer-cta`)}
            className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-neutral-900/20 bg-white/80 px-7 py-4 text-[15px] font-semibold text-neutral-900 backdrop-blur transition hover:bg-white"
          >
            <PhoneIcon className="h-4 w-4" aria-hidden />
            {PHONE_DISPLAY}
          </a>
        </div>
        {related && related.length > 0 ? (
          <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-2">
            {related.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="inline-flex items-center gap-1 rounded-full border border-neutral-900/15 bg-white/70 px-4 py-2 text-xs font-semibold text-neutral-800 backdrop-blur transition hover:border-neutral-900/40 hover:bg-white"
                >
                  {r.label}
                  <ChevronRightIcon className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}

/* ──────────────── small section helpers (consistent rhythm) ──────────────── */
export function SectionHeader({
  eyebrow,
  titleLead,
  titleMuted,
  lede,
  align = 'left',
}: {
  eyebrow: string
  titleLead: string
  titleMuted?: string
  lede?: string
  align?: 'left' | 'center'
}) {
  const wrap =
    align === 'center'
      ? 'mx-auto max-w-3xl text-center'
      : 'max-w-3xl'
  return (
    <div className={wrap}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF385C]">{eyebrow}</p>
      <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
        {titleLead}
        {titleMuted ? (
          <>
            {' '}
            <span className="text-neutral-400">{titleMuted}</span>
          </>
        ) : null}
      </h2>
      {lede ? (
        <p className={`${align === 'center' ? 'mx-auto' : ''} mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg`}>
          {lede}
        </p>
      ) : null}
    </div>
  )
}
