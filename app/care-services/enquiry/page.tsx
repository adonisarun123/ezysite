import { Suspense } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import CareServicesEnquiryForm from '@/components/care-services/CareServicesEnquiryForm'
import { CARE_PILLAR_HREF } from '@/lib/careServices/registry'
import {
  HeroTileCalmHome,
  HeroTileCompanionship,
  HeroTileDailyRoutines,
} from '@/components/care-services/cluster-landing/CareClusterHeroIllustrations'
import {
  PhoneIcon,
  ArrowRightIcon,
  CheckIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

// Metadata for this route lives in ./layout.tsx so the layout owns SEO/social
// concerns (Open Graph, Twitter, hreflang, geo) and the page stays UI-only.

const HERO_CHIPS = [
  {
    Icon: ShieldCheckIcon,
    title: 'Verified network',
    sub: 'Aadhaar + background',
    grad: 'from-sky-500 to-primary-500',
  },
  {
    Icon: ChatBubbleLeftRightIcon,
    title: 'Human matching',
    sub: 'Not random assignment',
    grad: 'from-teal-500 to-emerald-500',
  },
  {
    Icon: ClockIcon,
    title: 'Rapid response',
    sub: 'Reply within 24 hours',
    grad: 'from-orange-500 to-amber-500',
  },
  {
    Icon: HeartIcon,
    title: 'Replacement promise',
    sub: 'If fit feels wrong',
    grad: 'from-fuchsia-600 to-rose-500',
  },
] as const

const HOW_IT_WORKS = [
  {
    mark: 'i',
    title: 'You share the situation',
    body: 'Condition, schedule, language, and what would help most — in one form.',
  },
  {
    mark: 'ii',
    title: 'We shortlist with intent',
    body: 'Two to three professionals matched to the patient — not whoever is free.',
  },
  {
    mark: 'iii',
    title: 'You meet & decide',
    body: 'Speak with shortlisted candidates before you commit.',
  },
  {
    mark: 'iv',
    title: 'We stay close',
    body: 'Week-one check-in. Free replacement if the fit feels wrong.',
  },
] as const

export default function CareServicesEnquiryPage() {
  return (
    <div className="min-h-screen bg-white font-careUi text-[#222] antialiased">
      <Navbar />

      <div className="relative z-30 border-b border-neutral-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <Breadcrumb
            variant="minimal"
            separator="chevron"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Care Services', href: CARE_PILLAR_HREF },
              { label: 'Enquiry' },
            ]}
          />
        </div>
      </div>

      <header className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-2 sm:px-6 lg:px-8 lg:pb-14">
          <div className="grid min-h-0 gap-2 overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-50 shadow-[0_6px_24px_rgba(0,0,0,0.06)] lg:min-h-[420px] lg:grid-cols-2 lg:gap-0">
            <div className="relative flex flex-col justify-between bg-gradient-to-br from-[#FFE5E5] to-[#FFF1D6] p-8 text-left sm:p-10 lg:p-12">
              <div
                className="pointer-events-none absolute bottom-[-60px] right-[-60px] h-56 w-56 rounded-full bg-[#FF385C]/12 blur-2xl"
                aria-hidden
              />
              <div className="relative">
                <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/90 bg-white px-4 py-2 text-xs font-semibold text-[#484848] shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_14px_rgba(0,0,0,0.04)]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00A699]" aria-hidden />
                  Bangalore · Care enquiry
                </p>
                <h1 className="font-careSerif text-[clamp(2.25rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.025em] text-[#222]">
                  Tell us what kind of care
                  <br />
                  <em className="font-careSerif font-normal italic text-[#FF385C]">your loved one</em> needs.
                </h1>
                <p className="mt-5 max-w-lg text-pretty text-[17px] leading-relaxed text-[#484848]">
                  Nurses, caretakers, and attendants — matched to your patient&apos;s situation. Same verification
                  standards as our domestic placements.
                </p>
              </div>
              <div className="relative mt-8 flex flex-wrap gap-3">
                <a
                  href="#care-enquiry-form"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-[#FF385C] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_2px_8px_rgba(255,56,92,0.25)] transition hover:bg-[#E31C5F] hover:shadow-[0_4px_14px_rgba(255,56,92,0.35)] active:scale-[0.98]"
                >
                  Start the form
                  <ArrowRightIcon className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href="tel:+918031411776"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-neutral-900 bg-white px-6 py-3.5 text-[15px] font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50"
                >
                  <PhoneIcon className="h-4 w-4" aria-hidden />
                  080-31411776
                </a>
              </div>
            </div>

            <div className="grid min-h-[240px] grid-cols-2 grid-rows-2 gap-2 p-2 sm:min-h-[300px] sm:p-3 lg:min-h-0">
              <div className="relative row-span-2 overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFB58C] to-[#FF7D5C] shadow-inner">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-3 pt-6">
                  <HeroTileCompanionship className="h-[min(88%,200px)] w-[88%] max-w-[210px]" />
                </div>
                <span className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[#222] shadow-sm backdrop-blur-sm">
                  Human-centred care
                </span>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#C8E4D3] to-[#6FB58F]">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-2">
                  <HeroTileDailyRoutines className="h-[min(82%,160px)] w-[82%] max-w-[180px]" />
                </div>
                <span className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[#222] shadow-sm backdrop-blur-sm">
                  Daily routines
                </span>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFD7A5] to-[#F4A05F]">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-2">
                  <HeroTileCalmHome className="h-[min(82%,170px)] w-[78%] max-w-[185px]" />
                </div>
                <span className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[#222] shadow-sm backdrop-blur-sm">
                  A calm home
                </span>
              </div>
            </div>
          </div>

          {/* Hero stat chips */}
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {HERO_CHIPS.map(({ Icon, title, sub, grad }) => (
              <div
                key={title}
                className="flex items-center gap-3 rounded-2xl bg-[#F7F7F2] px-4 py-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-neutral-200/80"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${grad} text-white`}
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </div>
                </div>
                <div className="min-w-0 text-left">
                  <strong className="block text-xs font-bold text-neutral-900 sm:text-sm">{title}</strong>
                  <span className="text-[11px] text-neutral-500 sm:text-xs">{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* Form + aside */}
        <section
          id="care-enquiry-form"
          className="scroll-mt-28 bg-[#F7F7F2] px-4 py-16 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-12">
              {/* Form card */}
              <div className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.06)] sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF385C]">Care enquiry</p>
                <h2 className="mt-3 font-careSerif text-[clamp(1.5rem,3.2vw,2rem)] font-medium leading-tight tracking-tight text-neutral-950">
                  A few details, <em className="font-careSerif font-normal italic text-[#FF385C]">that&apos;s all.</em>
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600">
                  This goes straight to our care desk in Bangalore. We&apos;ll respond to your requirement within the
                  next 24 hours — placements generally take about 7–10 working days, depending on the existing
                  pipeline.
                </p>

                <div className="mt-8">
                  <Suspense
                    fallback={
                      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-12 text-center text-neutral-500">
                        Loading form…
                      </div>
                    }
                  >
                    <CareServicesEnquiryForm />
                  </Suspense>
                </div>
              </div>

              {/* Aside */}
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="grid gap-5">
                  {/* Call card — peachy banner */}
                  <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#FFE0D9] via-[#FFC4B0] to-[#FF8A65] p-6 text-neutral-900 shadow-[0_24px_60px_rgba(255,90,60,0.18)] sm:p-7">
                    <div
                      className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-white/35 blur-2xl"
                      aria-hidden
                    />
                    <div className="relative">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-900/80">
                        Talk to the care desk
                      </p>
                      <h3 className="mt-2 font-careSerif text-2xl font-semibold leading-tight tracking-tight">
                        Prefer a quick call?
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-900/85">
                        We&apos;ll capture the same details on the phone in five minutes.
                      </p>
                      <a
                        href="tel:+918031411776"
                        className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-xl border border-neutral-900 bg-white px-5 py-3.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
                      >
                        <PhoneIcon className="h-4 w-4" aria-hidden />
                        080-31411776
                      </a>
                    </div>
                  </div>

                  {/* How it works */}
                  <div className="rounded-[24px] border border-neutral-200 bg-white p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)] sm:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF385C]">
                      What happens next
                    </p>
                    <h3 className="mt-2 font-careSerif text-xl font-semibold tracking-tight text-neutral-950">
                      Four steps. Human-first.
                    </h3>
                    <ol className="mt-5 space-y-4">
                      {HOW_IT_WORKS.map((s) => (
                        <li key={s.mark} className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FFF8F1] font-careSerif text-sm font-semibold uppercase text-[#FF385C]">
                            {s.mark}
                          </span>
                          <div className="min-w-0">
                            <strong className="block text-sm font-bold text-neutral-900">{s.title}</strong>
                            <span className="block text-sm leading-snug text-neutral-600">{s.body}</span>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Need help choosing */}
                  <div className="rounded-[24px] border border-neutral-200 bg-[#FFF8F1] p-6 sm:p-7">
                    <div className="flex items-center gap-2">
                      <SparklesIcon className="h-4 w-4 text-[#FF385C]" aria-hidden />
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF385C]">Not sure yet?</p>
                    </div>
                    <h3 className="mt-2 font-careSerif text-xl font-semibold tracking-tight text-neutral-950">
                      Need help choosing?
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                      Read the overview of services first, or ask us — we&apos;ll route you to the right line in a few
                      minutes.
                    </p>
                    <Link
                      href={CARE_PILLAR_HREF}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-900"
                    >
                      Home care services overview
                      <ArrowRightIcon className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>

                  {/* Trust micro-list */}
                  <ul className="grid gap-2.5 px-1 text-sm text-neutral-700">
                    {[
                      'Verified Aadhaar + background checks',
                      'Replacement at no charge if fit feels wrong',
                      'No automated follow-ups — a real coordinator',
                    ].map((line) => (
                      <li key={line} className="flex items-start gap-2.5">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#00A699]" aria-hidden />
                        <span className="leading-snug">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Trust strip — same dark band as cluster pages */}
        <section
          className="border-y border-neutral-800 bg-neutral-900 px-4 py-14 text-white sm:px-6 sm:py-16"
          aria-labelledby="enquiry-trust-heading"
        >
          <div className="relative mx-auto max-w-6xl">
            <p id="enquiry-trust-heading" className="sr-only">
              Trust and scale at a glance
            </p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
              {[
                { num: '10,000+', label: 'Families served across India' },
                { num: '16+', label: 'Bangalore localities covered' },
                { num: '2 yrs+', label: 'Minimum experience required' },
                { num: '100%', label: 'Verified, screened, briefed' },
              ].map((x) => (
                <div key={x.label} className="text-left">
                  <p className="font-careSerif text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-none tracking-tight text-white">
                    {x.num.replace(/\+|%/g, '')}
                    {x.num.includes('+') && <em className="text-[#FF385C] not-italic">+</em>}
                    {x.num.includes('%') && <em className="text-[#FF385C] not-italic">%</em>}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-white/65">{x.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
