import type { ComponentType, SVGProps } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'
import {
  PhoneIcon,
  ArrowRightIcon,
  CheckIcon,
  HeartIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  SparklesIcon,
  MapPinIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'

const TRUST_STRIP_ICONS: ComponentType<SVGProps<SVGSVGElement>>[] = [
  UserGroupIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
]
import type { CareClusterLandingConfig, HeroChipIcon } from '@/lib/careServices/clusterLanding/types'
import { CLUSTER_TRUST_STRIP } from '@/lib/careServices/clusterLanding/configs'
import { CARE_PILLAR_HREF, CARE_ENQUIRY_HREF } from '@/lib/careServices/registry'
import CareClusterTestimonials from './CareClusterTestimonials'
import type { ClusterTone } from '@/lib/careServices/clusterLanding/types'

const toneClass: Record<ClusterTone, string> = {
  c1: 'from-sky-500/15 to-primary-500/5 border-sky-200/60',
  c2: 'from-teal-500/15 to-emerald-500/5 border-teal-200/60',
  c3: 'from-amber-500/15 to-orange-500/5 border-amber-200/60',
  c4: 'from-violet-500/15 to-indigo-500/5 border-violet-200/60',
  c5: 'from-rose-500/15 to-pink-500/5 border-rose-200/60',
  c6: 'from-cyan-500/15 to-blue-500/5 border-cyan-200/60',
}

const HERO_ICONS: Record<HeroChipIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  check: CheckIcon,
  heart: HeartIcon,
  clock: ClockIcon,
  shield: ShieldCheckIcon,
  user: UserGroupIcon,
  spark: SparklesIcon,
}

const PILLAR_DECO_ICONS: ComponentType<SVGProps<SVGSVGElement>>[] = [
  HeartIcon,
  UserGroupIcon,
  SparklesIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
]

type Props = {
  config: CareClusterLandingConfig
  metaDescription: string
  faqItems: { question: string; answer: string }[]
  pathname: string
}

export default function CareClusterLandingView({ config, metaDescription, faqItems, pathname }: Props) {
  const enquiryHref = `${CARE_ENQUIRY_HREF}?source=${encodeURIComponent(pathname)}`

  const breadcrumbItems =
    pathname === CARE_PILLAR_HREF
      ? [{ label: 'Home', href: '/' }, { label: 'Care Services' }]
      : [
          { label: 'Home', href: '/' },
          { label: 'Care Services', href: CARE_PILLAR_HREF },
          { label: config.breadcrumbCurrent },
        ]

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-neutral-900">
      <Navbar />

      <div className="relative z-30 border-b border-black/[0.06] bg-[#fbfbfd]/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <Breadcrumb variant="minimal" separator="chevron" items={breadcrumbItems} />
        </div>
      </div>

      <header className="relative flex min-h-[min(88svh,800px)] flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-12 text-center sm:px-6 sm:pb-20 sm:pt-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(48,184,201,0.14),transparent_60%),radial-gradient(ellipse_60%_50%_at_90%_30%,rgba(255,107,139,0.08),transparent_55%),radial-gradient(ellipse_70%_60%_at_10%_70%,rgba(0,116,200,0.1),transparent_60%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45] [background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_45%,black,transparent_78%)]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/80 px-4 py-2 text-xs font-medium text-neutral-600 shadow-sm backdrop-blur-md sm:text-[13px]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {config.eyebrow}
          </p>

          <h1 className="font-display text-[clamp(2.25rem,7vw,4.25rem)] font-bold leading-[1.08] tracking-tight text-neutral-950">
            {config.hero.line1}
            <br />
            {config.hero.line2Before}
            <span className="bg-gradient-to-r from-primary-600 via-teal-500 to-rose-500 bg-clip-text text-transparent">
              {config.hero.line2Accent}
            </span>
            {config.hero.line2After ?? ''}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[clamp(1rem,2.4vw,1.25rem)] leading-relaxed text-neutral-600">
            {metaDescription}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={enquiryHref}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-primary-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-primary-600/25 transition hover:bg-primary-700"
            >
              Request a callback
              <ArrowRightIcon className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href="tel:+918031411776"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-black/10 bg-white/90 px-7 py-3.5 text-[15px] font-semibold text-neutral-900 shadow-sm backdrop-blur transition hover:bg-white"
            >
              <PhoneIcon className="h-4 w-4" aria-hidden />
              080-31411776
            </a>
          </div>

          <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3 sm:mt-20 sm:gap-4">
            {config.heroChips.map(({ icon, title, sub, grad }) => {
              const Icon = HERO_ICONS[icon]
              return (
                <div
                  key={title}
                  className="flex max-w-[280px] flex-1 items-center gap-3 rounded-2xl border border-white/80 bg-white/75 px-4 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-md sm:min-w-[240px] sm:px-5"
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${grad} text-white shadow-md`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="text-left">
                    <strong className="block text-sm font-semibold text-neutral-900">{title}</strong>
                    <span className="text-xs text-neutral-500">{sub}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </header>

      <main>
        <section id="difference" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">{config.difference.eyebrow}</p>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,4.5vw,3.25rem)] font-bold leading-tight tracking-tight text-neutral-950">
              {config.difference.titleLine1}
              <br />
              {(config.difference.titleLine2Lead || config.difference.titleLine2Muted) && (
                <>
                  {config.difference.titleLine2Lead && (
                    <span className="text-neutral-950">{config.difference.titleLine2Lead} </span>
                  )}
                  <span className="text-neutral-400">{config.difference.titleLine2Muted}</span>
                </>
              )}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">{config.difference.lede}</p>

            <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:items-stretch lg:gap-5">
              <article className="relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[28px] bg-gradient-to-br from-primary-800 via-primary-900 to-trust-900 p-8 text-white shadow-2xl shadow-primary-900/35 lg:min-h-[400px]">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(ellipse_80%_100%_at_50%_0%,rgba(0,116,200,0.5),transparent_72%)]" />
                <div className="relative">
                  <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/95 backdrop-blur">
                    {config.difference.featured.tag}
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-bold tracking-tight text-white">{config.difference.featured.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{config.difference.featured.description}</p>
                  <ul className="mt-6 space-y-2.5 text-sm text-white/85">
                    {config.difference.featured.bullets.map((t) => (
                      <li key={t} className="flex gap-2">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={enquiryHref} className="relative inline-flex items-center gap-1 text-sm font-semibold text-sky-300 hover:text-sky-200">
                  {config.difference.featured.ctaLabel} <ArrowRightIcon className="h-4 w-4" aria-hidden />
                </Link>
              </article>

              {[config.difference.altLeft, config.difference.altRight].map((alt) => (
                <article
                  key={alt.href}
                  className="flex min-h-[360px] flex-col justify-between rounded-[28px] border border-black/[0.06] bg-[#f5f5f7] p-8 shadow-sm lg:min-h-[400px]"
                >
                  <div>
                    <span className="inline-block rounded-full bg-black/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-700">
                      {alt.tag}
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-bold text-neutral-950">{alt.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">{alt.description}</p>
                  </div>
                  <Link href={alt.href} className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700">
                    {alt.linkLabel ?? 'Learn more'} <ArrowRightIcon className="h-4 w-4" aria-hidden />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="scroll-mt-28 bg-[#f5f5f7] px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">{config.why.eyebrow}</p>
            <h2 className="mt-3 max-w-3xl font-display text-[clamp(1.65rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-neutral-950">
              {config.why.titleLine1}
              <br />
              <span className="text-neutral-500">{config.why.titleLine2Muted}</span>
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5 md:items-stretch">
              {config.why.pillars.map((p, idx) => {
                const DecoIcon = PILLAR_DECO_ICONS[idx % PILLAR_DECO_ICONS.length]
                return (
                <div
                  key={p.num}
                  className={`flex h-full flex-col rounded-[28px] border border-white/80 bg-white p-8 shadow-sm ${
                    p.span === 3 ? 'md:col-span-3' : 'md:col-span-2'
                  } ${p.heartbeat ? 'relative overflow-hidden border-teal-100 bg-gradient-to-br from-white to-teal-50/50' : ''}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className={`font-mono text-xs font-medium ${p.heartbeat ? 'text-teal-600/80' : 'text-neutral-400'}`}>
                      {p.num}
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-sm ${
                        p.heartbeat
                          ? 'border-teal-200/80 bg-white text-teal-600'
                          : 'border-primary-100 bg-primary-50 text-primary-600'
                      }`}
                      aria-hidden
                    >
                      <DecoIcon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold leading-snug text-neutral-950 sm:text-xl">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{p.description}</p>
                  {p.heartbeat && (
                    <svg viewBox="0 0 800 60" className="mt-auto h-12 w-full shrink-0 pt-6 text-primary-500/80" preserveAspectRatio="none" aria-hidden>
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        points="0,30 100,30 130,30 150,10 170,50 190,15 210,45 230,30 400,30 430,30 450,10 470,50 490,15 510,45 530,30 800,30"
                      />
                    </svg>
                  )}
                </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-28 border-y border-black/[0.06] bg-[#fbfbfd] px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">{config.servicesIntro.eyebrow}</p>
            <h2 className="mt-3 font-display text-[clamp(1.65rem,4vw,2.75rem)] font-bold tracking-tight text-neutral-950">
              {config.servicesIntro.titleLine1}{' '}
              <span className="text-neutral-500">{config.servicesIntro.titleLine2Muted}</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-neutral-600">{config.servicesIntro.lede}</p>
          </div>
          <div className="mt-10 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-14">
            <div className="flex w-max snap-x snap-mandatory items-stretch gap-4 px-4 sm:gap-5 lg:px-[max(1rem,calc((100vw-72rem)/2+1rem))]">
              {config.serviceCards.map((c) => (
                <div
                  key={c.title}
                  className={`snap-start flex min-h-[288px] w-[min(85vw,320px)] shrink-0 flex-col rounded-[22px] border bg-gradient-to-br p-6 shadow-sm sm:min-h-[300px] sm:w-[300px] ${toneClass[c.tone]}`}
                >
                  <div className="flex min-h-0 flex-1 flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wide text-neutral-600">{c.tag}</span>
                    <h3 className="mt-3 font-display text-base font-bold leading-snug text-neutral-950 sm:text-lg">{c.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{c.body}</p>
                  </div>
                  <div className="mt-auto flex justify-end pt-5 text-neutral-400">
                    <ArrowRightIcon className="h-5 w-5" aria-hidden />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-6xl px-4 text-center text-xs text-neutral-500 sm:text-sm">
            <span className="inline-flex items-center gap-1">
              <ArrowRightIcon className="h-4 w-4 rotate-180 sm:hidden" aria-hidden />
              Scroll for more
            </span>
            <span className="mx-2 hidden sm:inline">·</span>
            <span className="mt-1 block sm:mt-0 sm:inline">{config.servicesIntro.scrollHint ?? 'Flexible arrangements · Ask us what fits'}</span>
          </p>
        </section>

        <section
          className="relative overflow-hidden border-y border-primary-100/60 bg-gradient-to-b from-white via-primary-50/50 to-trust-50/40 px-4 py-12 sm:px-6 sm:py-16"
          aria-labelledby="care-trust-heading"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_20%,rgba(0,116,200,0.06),transparent_60%),radial-gradient(ellipse_45%_35%_at_90%_80%,rgba(0,175,170,0.08),transparent_58%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl">
            <p id="care-trust-heading" className="sr-only">
              Trust and scale at a glance
            </p>
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
              {CLUSTER_TRUST_STRIP.map((x, i) => {
                const TrustIcon = TRUST_STRIP_ICONS[i] ?? UserGroupIcon
                return (
                  <div
                    key={x.label}
                    className="rounded-2xl border border-white/90 bg-white/85 p-5 shadow-[0_12px_40px_rgba(0,52,102,0.06)] backdrop-blur-[2px] transition hover:border-primary-200 hover:shadow-[0_16px_48px_rgba(0,52,102,0.09)]"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-trust-500 text-white shadow-md shadow-primary-900/15">
                      <TrustIcon className="h-6 w-6" aria-hidden />
                    </div>
                    <p className="font-display text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold leading-none tracking-tight text-primary-900">
                      {x.num}
                    </p>
                    <p className="mt-2.5 text-xs font-medium leading-snug text-neutral-700 sm:text-sm">{x.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section
          id="process"
          className="relative isolate scroll-mt-28 overflow-hidden bg-primary-950 px-4 py-20 text-white sm:px-6 sm:py-28"
        >
          {/* Solid brand-dark base (primary-950 #001e40) — overlays stay subtle so the section never reads as “white” */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-950 to-[#031525]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen bg-[radial-gradient(ellipse_75%_55%_at_20%_0%,rgba(61,184,255,0.22),transparent_58%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_55%_45%_at_95%_90%,rgba(0,175,170,0.2),transparent_60%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-6xl">
            <p className="inline-flex rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-trust-200">
              {config.processIntro.eyebrow}
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-[clamp(1.85rem,4.25vw,2.85rem)] font-semibold leading-[1.15] tracking-tight text-white">
              {config.processIntro.title}
            </h2>
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-neutral-200 sm:text-lg">
              {config.processIntro.lede}
            </p>

            <div className="mt-12 flex flex-col gap-5 md:mt-16 md:gap-6">
              {config.processSteps.map((step) => (
                <div
                  key={step.mark}
                  className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.45)] backdrop-blur-[8px] sm:flex-row sm:items-start sm:gap-8 sm:p-8"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-primary-600/50 to-trust-700/40 font-display text-lg font-semibold not-italic text-white shadow-inner shadow-black/20 sm:h-16 sm:w-16 sm:text-xl">
                    {step.mark}
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">{step.title}</h3>
                    <p className="mt-3 text-[15px] leading-[1.7] text-neutral-200 sm:text-[17px]">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="conditions" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">{config.conditionsIntro.eyebrow}</p>
            <h2 className="mt-3 font-display text-[clamp(1.45rem,3.5vw,2.35rem)] font-bold tracking-tight text-neutral-950">
              {config.conditionsIntro.titleLine1} <span className="text-neutral-400">{config.conditionsIntro.titleLine2Muted}</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-neutral-600">{config.conditionsIntro.lede}</p>
            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {config.conditions.map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-black/[0.06] bg-white px-4 py-3.5 text-sm font-medium text-neutral-800 shadow-sm transition hover:border-primary-200 hover:shadow-md"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-primary-500 to-teal-500" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <CareClusterTestimonials stories={config.stories} />

        {faqItems.length > 0 && (
          <section id="faq" className="scroll-mt-28 border-t border-black/[0.06] bg-white px-4 py-16 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">Questions</p>
              <h2 className="mt-3 font-display text-[clamp(1.45rem,3.5vw,2rem)] font-bold tracking-tight text-neutral-950">
                Straight answers. <span className="text-neutral-400">No jargon.</span>
              </h2>
              <div className="mt-10">
                <FAQAccordion faqs={faqItems} tone="care" />
              </div>
            </div>
          </section>
        )}

        <section
          id="book"
          className="relative isolate scroll-mt-28 overflow-hidden bg-primary-950 px-4 py-20 text-center sm:px-6 sm:py-28"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-primary-950 to-trust-900/40"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-45 bg-[radial-gradient(ellipse_65%_50%_at_50%_15%,rgba(77,191,255,0.18),transparent_62%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-2xl px-2">
            <h2 className="font-display text-[clamp(1.75rem,4.25vw,2.65rem)] font-semibold leading-[1.2] tracking-tight text-white">
              <span className="block">{config.finalCta.titleBefore}</span>
              <span className="mt-2 block text-trust-200">{config.finalCta.titleGradient}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-neutral-200 sm:text-lg">
              {config.finalCta.lede}
            </p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href={enquiryHref}
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-9 py-3.5 text-base font-semibold text-primary-950 shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition hover:bg-neutral-100"
              >
                Start your enquiry
              </Link>
              <a
                href="tel:+918031411776"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-white/70 bg-transparent px-9 py-3.5 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Call 080-31411776
              </a>
            </div>
            {config.finalCta.showPillarLink !== false && (
              <p className="mt-12 text-sm text-neutral-300">
                <Link
                  href={CARE_PILLAR_HREF}
                  className="font-medium text-white/90 underline decoration-white/30 underline-offset-4 transition hover:text-white hover:decoration-white"
                >
                  {config.finalCta.pillarLinkLabel ?? '← Home care services overview'}
                </Link>
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
