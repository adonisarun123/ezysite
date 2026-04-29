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
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'
import type { CareClusterLandingConfig, HeroChipIcon } from '@/lib/careServices/clusterLanding/types'
import { CLUSTER_TRUST_STRIP } from '@/lib/careServices/clusterLanding/configs'
import { CARE_PILLAR_HREF, CARE_ENQUIRY_HREF } from '@/lib/careServices/registry'
import CareClusterTestimonials from './CareClusterTestimonials'
import type { ClusterTone } from '@/lib/careServices/clusterLanding/types'
import { resolveHeroScene } from './CareClusterHeroScenes'
import { pickIllustration } from './CareClusterServiceIllustrations'

/**
 * Service-card image gradients — mirror the inspiration HTML's category palette
 * (peach, mint, sand, lavender, blush, sky) using Tailwind arbitrary values.
 */
const toneClass: Record<ClusterTone, string> = {
  c1: 'from-[#FFD9CC] to-[#FFB39A] border-transparent',
  c2: 'from-[#D4EDD9] to-[#9BC9A6] border-transparent',
  c3: 'from-[#FFE9C7] to-[#F4C68C] border-transparent',
  c4: 'from-[#DDD4F0] to-[#B5A3DD] border-transparent',
  c5: 'from-[#FFD4D4] to-[#F19BAB] border-transparent',
  c6: 'from-[#C9E2EE] to-[#91BDD7] border-transparent',
}

const HERO_ICONS: Record<HeroChipIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  check: CheckIcon,
  heart: HeartIcon,
  clock: ClockIcon,
  shield: ShieldCheckIcon,
  user: UserGroupIcon,
  spark: SparklesIcon,
  chat: ChatBubbleLeftRightIcon,
}

const PILLAR_DECO_ICONS: ComponentType<SVGProps<SVGSVGElement>>[] = [
  HeartIcon,
  UserGroupIcon,
  SparklesIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
]

/** Airbnb-style pastel step panels (inspired by reference mock) */
const PROCESS_PASTEL_BG = ['bg-[#FFF1D6]', 'bg-[#E5F2EB]', 'bg-[#FFE0D9]', 'bg-[#E8E4F3]'] as const
const PROCESS_STEP_ICONS: ComponentType<SVGProps<SVGSVGElement>>[] = [
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
  HomeIcon,
]

/**
 * If a condition string begins with an emoji/pictograph (e.g. "🧠 Dementia"),
 * split it so the chip can render the icon in a tile and the rest as text.
 */
const LEADING_EMOJI_RE = /^(\p{Extended_Pictographic}(?:️)?(?:‍\p{Extended_Pictographic}(?:️)?)*)\s+(.*)$/u
function splitConditionLabel(label: string): { icon: string | null; text: string } {
  const match = label.match(LEADING_EMOJI_RE)
  if (match) return { icon: match[1], text: match[2] }
  return { icon: null, text: label }
}

type Props = {
  config: CareClusterLandingConfig
  metaDescription: string
  faqItems: { question: string; answer: string }[]
  pathname: string
}

export default function CareClusterLandingView({ config, metaDescription, faqItems, pathname }: Props) {
  const enquiryHref = `${CARE_ENQUIRY_HREF}?source=${encodeURIComponent(pathname)}`
  const heroLead = config.heroLead ?? metaDescription
  const primaryCta = config.primaryCtaLabel ?? 'Request a callback'
  const heroCap = config.heroCaptions
  const heroScene = resolveHeroScene(config.heroSceneId)
  const HeroBigTile = heroScene.tiles[0].illustration
  const HeroTopTile = heroScene.tiles[1].illustration
  const HeroBottomTile = heroScene.tiles[2].illustration

  const breadcrumbItems =
    pathname === CARE_PILLAR_HREF
      ? [{ label: 'Home', href: '/' }, { label: 'Care Services' }]
      : [
          { label: 'Home', href: '/' },
          { label: 'Care Services', href: CARE_PILLAR_HREF },
          { label: config.breadcrumbCurrent },
        ]

  return (
    <div className="min-h-screen bg-white font-careUi text-[#222] antialiased">
      <Navbar />

      <div className="relative z-30 border-b border-neutral-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <Breadcrumb variant="minimal" separator="chevron" items={breadcrumbItems} />
        </div>
      </div>

      <header className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-2 sm:px-6 lg:px-8 lg:pb-14">
          <div className="grid min-h-0 gap-2 overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-50 shadow-[0_6px_24px_rgba(0,0,0,0.06)] lg:grid-cols-2 lg:min-h-[420px] lg:gap-0">
            <div className={`relative flex flex-col justify-between bg-gradient-to-br ${heroScene.leftPanelGradient} p-8 text-left sm:p-10 lg:p-12`}>
              <div className={`pointer-events-none absolute bottom-[-60px] right-[-60px] h-56 w-56 rounded-full ${heroScene.blobAccentClass} blur-2xl`} aria-hidden />
              <div className="relative">
                <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/90 bg-white px-4 py-2 text-xs font-semibold text-[#484848] shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_14px_rgba(0,0,0,0.04)]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00A699]" aria-hidden />
                  {config.eyebrow}
                </p>
                <h1 className="font-careSerif text-[clamp(2.25rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.025em] text-[#222]">
                  {config.hero.line1}
                  <br />
                  {config.hero.line2Before}
                  <em className="font-careSerif font-normal italic text-[#FF385C]">{config.hero.line2Accent}</em>
                  {config.hero.line2After ?? ''}
                </h1>
                <p className="mt-5 max-w-lg text-pretty text-[17px] leading-relaxed text-[#484848]">{heroLead}</p>
              </div>
              <div className="relative mt-8 flex flex-wrap gap-3">
                <Link
                  href={enquiryHref}
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-[#FF385C] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_2px_8px_rgba(255,56,92,0.25)] transition hover:bg-[#E31C5F] hover:shadow-[0_4px_14px_rgba(255,56,92,0.35)] active:scale-[0.98]"
                >
                  {primaryCta}
                  <ArrowRightIcon className="h-4 w-4" aria-hidden />
                </Link>
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
              <div
                className={`relative row-span-2 overflow-hidden rounded-2xl bg-gradient-to-br ${heroScene.tiles[0].tileGradient} shadow-inner`}
              >
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-3 pt-6">
                  <HeroBigTile className="h-[min(88%,200px)] w-[88%] max-w-[210px]" />
                </div>
                <span className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[#222] shadow-sm backdrop-blur-sm">
                  {heroCap?.[0] ?? heroScene.tiles[0].caption}
                </span>
              </div>
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${heroScene.tiles[1].tileGradient}`}>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-2">
                  <HeroTopTile className="h-[min(82%,160px)] w-[82%] max-w-[180px]" />
                </div>
                <span className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[#222] shadow-sm backdrop-blur-sm">
                  {heroCap?.[1] ?? heroScene.tiles[1].caption}
                </span>
              </div>
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${heroScene.tiles[2].tileGradient}`}>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-2">
                  <HeroBottomTile className="h-[min(82%,170px)] w-[78%] max-w-[185px]" />
                </div>
                <span className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[#222] shadow-sm backdrop-blur-sm">
                  {heroCap?.[2] ?? heroScene.tiles[2].caption}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {config.heroChips.map(({ icon, title, sub, grad }) => {
              const Icon = HERO_ICONS[icon]
              return (
                <div
                  key={title}
                  className="flex items-center gap-3 rounded-2xl bg-[#F7F7F2] px-4 py-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-neutral-200/80"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${grad} text-white`}>
                      <Icon className="h-4 w-4" aria-hidden />
                    </div>
                  </div>
                  <div className="min-w-0 text-left">
                    <strong className="block text-xs font-bold text-neutral-900 sm:text-sm">{title}</strong>
                    <span className="text-[11px] text-neutral-500 sm:text-xs">{sub}</span>
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF385C]">{config.difference.eyebrow}</p>
            <h2 className="mt-3 font-careSerif text-[clamp(1.75rem,4.5vw,3.25rem)] font-bold leading-tight tracking-tight text-neutral-950">
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

            <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-stretch">
              <article className="relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[24px] border border-neutral-900 bg-neutral-900 p-8 text-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.22)] lg:min-h-[400px]">
                <div className="relative">
                  <span className="inline-block rounded-full bg-[#FF385C] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm">
                    {config.difference.featured.tag}
                  </span>
                  <h3 className="mt-6 font-careSerif text-3xl font-semibold tracking-tight text-white">{config.difference.featured.title}</h3>
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
                <Link href={enquiryHref} className="relative inline-flex items-center gap-1 text-sm font-semibold text-white underline decoration-white/35 underline-offset-4 hover:decoration-white">
                  {config.difference.featured.ctaLabel} <ArrowRightIcon className="h-4 w-4" aria-hidden />
                </Link>
              </article>

              {[config.difference.altLeft, config.difference.altRight].map((alt) => (
                <article
                  key={alt.href}
                  className="flex min-h-[360px] flex-col justify-between rounded-[24px] border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-neutral-900 hover:shadow-lg lg:min-h-[400px]"
                >
                  <div>
                    <span className="inline-block rounded-full bg-black/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-700">
                      {alt.tag}
                    </span>
                    <h3 className="mt-6 font-careSerif text-2xl font-bold text-neutral-950">{alt.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">{alt.description}</p>
                  </div>
                  <Link href={alt.href} className="inline-flex items-center gap-1 text-sm font-semibold text-[#FF385C] hover:text-[#E31C5F]">
                    {alt.linkLabel ?? 'Learn more'} <ArrowRightIcon className="h-4 w-4" aria-hidden />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="scroll-mt-28 bg-[#F7F7F2] px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF385C]">{config.why.eyebrow}</p>
            <h2 className="mt-3 max-w-3xl font-careSerif text-[clamp(1.65rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-neutral-950">
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
                  className={`flex h-full flex-col rounded-[24px] border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)] ${
                    p.spotlight
                      ? 'border-neutral-900 bg-neutral-900 hover:border-neutral-900'
                      : `border-neutral-200 bg-white hover:border-neutral-900 ${p.heartbeat ? 'relative overflow-hidden border-teal-200/80 bg-gradient-to-br from-white to-teal-50/80' : ''}`
                  } ${p.span === 3 ? 'md:col-span-3' : 'md:col-span-2'}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`font-careSerif text-3xl font-medium leading-none ${
                        p.spotlight ? 'text-[#FF7D5C]' : p.heartbeat ? 'text-teal-600' : 'text-[#FF385C]'
                      }`}
                    >
                      {p.num}
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-sm ${
                        p.spotlight
                          ? 'border-white/20 bg-white/10 text-white'
                          : p.heartbeat
                            ? 'border-teal-200/80 bg-white text-teal-600'
                            : 'border-[#FF385C]/20 bg-[#FF385C]/8 text-[#FF385C]'
                      }`}
                      aria-hidden
                    >
                      <DecoIcon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3
                    className={`mt-4 font-careSerif text-lg font-bold leading-snug sm:text-xl ${p.spotlight ? 'text-white' : 'text-neutral-950'}`}
                  >
                    {p.title}
                  </h3>
                  <p className={`mt-3 flex-1 text-sm leading-relaxed ${p.spotlight ? 'text-white/70' : 'text-neutral-600'}`}>{p.description}</p>
                  {p.heartbeat && !p.spotlight && (
                    <svg viewBox="0 0 800 60" className="mt-auto h-12 w-full shrink-0 pt-6 text-[#FF385C]/75" preserveAspectRatio="none" aria-hidden>
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

        <section id="services" className="scroll-mt-28 border-y border-neutral-200 bg-[#F7F7F2] px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF385C]">{config.servicesIntro.eyebrow}</p>
                <h2 className="mt-3 font-careSerif text-[clamp(1.65rem,4vw,2.5rem)] font-medium leading-tight tracking-tight text-neutral-950">
                  {config.servicesIntro.titleLine1}{' '}
                  <em className="font-careSerif font-normal italic text-neutral-500">{config.servicesIntro.titleLine2Muted}</em>
                </h2>
                <p className="mt-4 text-base text-neutral-600 sm:text-lg">{config.servicesIntro.lede}</p>
              </div>
              <Link
                href={enquiryHref}
                className="hidden items-center gap-1 text-sm font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-900 sm:inline-flex"
              >
                {config.servicesIntro.scrollHint ?? 'View all arrangements'}
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
              {config.serviceCards.map((c) => {
                const Illustration = pickIllustration(c.illustration, c.tone)
                const headerLabel = c.badge ?? c.tag
                const cardHref = c.href ?? enquiryHref
                const cardAriaLabel = c.href
                  ? `${c.title} — learn more`
                  : `${c.title} — request a callback`
                return (
                  <Link
                    key={c.title}
                    href={cardHref}
                    aria-label={cardAriaLabel}
                    className="group flex cursor-pointer flex-col rounded-[28px] outline-none transition focus-visible:ring-2 focus-visible:ring-[#FF385C] focus-visible:ring-offset-2"
                  >
                    <div
                      className={`relative aspect-[1.05] w-full overflow-hidden rounded-[24px] border bg-gradient-to-br shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition group-hover:-translate-y-1 group-hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)] ${toneClass[c.tone]}`}
                    >
                      {headerLabel ? (
                        <span className="absolute left-3.5 top-3.5 z-[2] rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-neutral-900 shadow-sm">
                          {headerLabel}
                        </span>
                      ) : null}
                      <span
                        aria-hidden
                        className="absolute right-3.5 top-3.5 z-[2] flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-sm backdrop-blur-sm transition group-hover:scale-110"
                      >
                        <HeartIcon className="h-4 w-4" />
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <Illustration className="h-[68%] w-[68%]" />
                      </div>
                    </div>

                    <div className="mt-4 px-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-careSerif text-base font-bold tracking-tight text-neutral-950 sm:text-[17px]">{c.title}</h3>
                        {c.rating ? (
                          <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-neutral-900">
                            <span className="text-neutral-900" aria-hidden>
                              ★
                            </span>
                            {c.rating}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-600">{c.body}</p>
                      {c.detail ? <p className="mt-1 text-sm text-neutral-600">{c.detail}</p> : null}
                      {c.priceBold || c.priceRest ? (
                        <p className="mt-1.5 text-sm text-neutral-900">
                          {c.priceBold ? <strong className="font-bold">{c.priceBold}</strong> : null}
                          {c.priceRest ?? ''}
                        </p>
                      ) : null}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <section
          className="border-y border-neutral-800 bg-neutral-900 px-4 py-14 text-white sm:px-6 sm:py-16"
          aria-labelledby="care-trust-heading"
        >
          <div className="relative mx-auto max-w-6xl">
            <p id="care-trust-heading" className="sr-only">
              Trust and scale at a glance
            </p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
              {CLUSTER_TRUST_STRIP.map((x) => (
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

        <section id="process" className="scroll-mt-28 bg-white px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF385C]">{config.processIntro.eyebrow}</p>
            <h2 className="mt-3 max-w-3xl font-careSerif text-[clamp(1.75rem,4vw,2.65rem)] font-semibold leading-tight tracking-tight text-neutral-900">
              {config.processIntro.title}
            </h2>
            <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-neutral-600 sm:text-lg">{config.processIntro.lede}</p>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {config.processSteps.map((step, idx) => {
                const StepIcon = PROCESS_STEP_ICONS[idx % PROCESS_STEP_ICONS.length]
                const pastel = PROCESS_PASTEL_BG[idx % PROCESS_PASTEL_BG.length]
                return (
                  <div
                    key={step.mark}
                    className={`flex flex-col rounded-3xl p-7 shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)] ${pastel}`}
                  >
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_2px_6px_rgba(0,0,0,0.06)]">
                      <StepIcon className="h-7 w-7 text-[#FF385C]" aria-hidden />
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#FF385C]">Step {step.mark}</p>
                    <h3 className="mt-2 font-careSerif text-lg font-bold tracking-tight text-neutral-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="conditions" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF385C]">{config.conditionsIntro.eyebrow}</p>
            <h2 className="mt-3 font-careSerif text-[clamp(1.45rem,3.5vw,2.35rem)] font-bold tracking-tight text-neutral-950">
              {config.conditionsIntro.titleLine1} <span className="text-neutral-400">{config.conditionsIntro.titleLine2Muted}</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-neutral-600">{config.conditionsIntro.lede}</p>
            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {config.conditions.map((label) => {
                const { icon, text } = splitConditionLabel(label)
                return (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-black/[0.06] bg-white px-4 py-3.5 text-sm font-medium text-neutral-800 shadow-sm transition hover:-translate-y-0.5 hover:border-[#FF385C]/35 hover:shadow-md"
                  >
                    {icon ? (
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FFF8F1] text-base leading-none"
                        aria-hidden
                      >
                        {icon}
                      </span>
                    ) : (
                      <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-[#FF385C] to-[#00A699]" aria-hidden />
                    )}
                    <span className="min-w-0 leading-snug">{text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <CareClusterTestimonials stories={config.stories} />

        {faqItems.length > 0 && (
          <section id="faq" className="scroll-mt-28 border-t border-black/[0.06] bg-white px-4 py-16 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF385C]">Questions</p>
              <h2 className="mt-3 font-careSerif text-[clamp(1.45rem,3.5vw,2rem)] font-bold tracking-tight text-neutral-950">
                Straight answers. <span className="text-neutral-400">No jargon.</span>
              </h2>
              <div className="mt-10">
                <FAQAccordion faqs={faqItems} tone="care" />
              </div>
            </div>
          </section>
        )}

        <section id="book" className="scroll-mt-28 bg-[#F7F7F2] px-4 py-16 sm:px-6 sm:py-20">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-gradient-to-br from-[#FFE0D9] via-[#FFC4B0] to-[#FF8A65] p-8 shadow-[0_24px_60px_rgba(255,90,60,0.2)] sm:p-12 lg:p-14">
            <div
              className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/40 blur-3xl"
              aria-hidden
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-12">
              <div className="text-left">
                <h2 className="font-careSerif text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-tight text-neutral-900">
                  <span className="block">{config.finalCta.titleBefore}</span>
                  <span className="mt-2 block text-[#E31C5F]">{config.finalCta.titleGradient}</span>
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-800/90 sm:text-lg">{config.finalCta.lede}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Link
                    href={enquiryHref}
                    className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#FF385C] px-8 py-3.5 text-base font-semibold text-white shadow-[0_4px_14px_rgba(255,56,92,0.35)] transition hover:bg-[#E31C5F] active:scale-[0.98]"
                  >
                    Start your enquiry
                    <ArrowRightIcon className="h-4 w-4" aria-hidden />
                  </Link>
                  <a
                    href="tel:+918031411776"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl border-2 border-neutral-900 bg-white/85 px-8 py-3.5 text-base font-semibold text-neutral-900 backdrop-blur-sm transition hover:bg-white"
                  >
                    Call 080-31411776
                  </a>
                </div>
                {config.finalCta.showPillarLink !== false && (
                  <p className="mt-8 text-sm text-neutral-800/80">
                    <Link href={CARE_PILLAR_HREF} className="font-semibold underline decoration-neutral-900/25 underline-offset-4 hover:decoration-neutral-900">
                      {config.finalCta.pillarLinkLabel ?? '← Home care services overview'}
                    </Link>
                  </p>
                )}
              </div>
              <div className="relative hidden min-h-[200px] lg:flex lg:items-center lg:justify-center" aria-hidden>
                <div className="relative h-52 w-52 rounded-full bg-white/35 shadow-inner ring-4 ring-white/50">
                  <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[#FF385C]/45 to-[#00A699]/40" />
                  <HeartIcon className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
