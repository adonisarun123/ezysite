'use client'

import Link from 'next/link'
import type { ComponentType, SVGProps } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import { trackCareCTAClick, trackCarePhoneClick } from '@/lib/analytics'
import {
  PhoneIcon,
  ArrowRightIcon,
  CheckIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  SparklesIcon,
  HandRaisedIcon,
  ChatBubbleLeftRightIcon,
  HomeModernIcon,
  PlusCircleIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline'
import { getPillar } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

/* ───────────────────────────────────────────────────────────────────────────
 * /care-services/palliative-care-at-home-bangalore — Pillar page
 *
 * A sensitive subject (serious illness, end of life). Copy is compassionate,
 * dignified and reassuring — never salesy or alarmist. CTAs stay gentle.
 * Colours use only Tailwind primary, accent, neutral and white tokens.
 * ─────────────────────────────────────────────────────────────────────────── */

const PHONE_DISPLAY = '080-31411776'
const PHONE_HREF = 'tel:+918031411776'
const ENQUIRY_HREF = '/care-services/enquiry'
const PATH = '/care-services/palliative-care-at-home-bangalore'

const PILLAR = getPillar('palliative-care-at-home-bangalore')

/* Heroicon lookup for nested-service cards (icon names come from the registry). */
const NESTED_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  SparklesIcon,
  PlusCircleIcon,
  HeartIcon,
  HomeModernIcon,
  ShieldCheckIcon,
  UserGroupIcon,
}

const TRUST_RIBBON = [
  { icon: UserGroupIcon, title: 'Trained palliative team', sub: 'experienced in serious-illness care' },
  { icon: PlusCircleIcon, title: 'Pain & symptom specialists', sub: 'comfort guided by your doctor' },
  { icon: ChatBubbleLeftRightIcon, title: 'Family support', sub: 'someone beside you, every day' },
  { icon: HeartIcon, title: 'Dignity-first', sub: 'comfort and respect, always' },
] as const

const WHAT_INCLUDES = [
  {
    icon: PlusCircleIcon,
    title: 'Physical comfort',
    body:
      'Gentle, doctor-guided relief from pain, breathlessness, nausea, fatigue and other symptoms — so each day can be as comfortable and calm as possible.',
    bullets: [
      'Pain and symptom relief',
      'Help with feeding, hygiene and rest',
      'Safe positioning and mobility support',
      'Coordination with your treating doctor',
    ],
  },
  {
    icon: HeartIcon,
    title: 'Emotional wellbeing',
    body:
      'A serious diagnosis carries fear, sadness and uncertainty. Our caregivers offer a steady, listening presence — and connect you with counselling when it would help.',
    bullets: [
      'A calm, listening companion',
      'Emotional reassurance through hard days',
      'Respect for personal and spiritual wishes',
      'Counselling support when wanted',
    ],
  },
  {
    icon: UserGroupIcon,
    title: 'Support for the family',
    body:
      'Caring for a seriously ill loved one is exhausting. We share the load — practical help, clear updates and respite so families can rest and simply be present.',
    bullets: [
      'Respite hours so families can rest',
      'Gentle guidance on what to expect',
      'Clear, kind daily updates',
      'Help coordinating doctors and supplies',
    ],
  },
] as const

const FAMILY_SUPPORT = [
  'Respite hours so the primary carer can rest and recover',
  'Calm, plain-language guidance on what each stage may bring',
  'Gentle daily updates for family near and far',
  'Help arranging doctor visits, medicines and equipment',
  'A reachable advisor for difficult days and nights',
  'Emotional support and grief resources for the whole family',
] as const

const STEPS = [
  {
    n: '01',
    title: 'A gentle conversation',
    body:
      'We listen first — to the diagnosis, the symptoms and what comfort and dignity mean to your family. There is no pressure, only understanding.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    n: '02',
    title: 'A comfort-focused plan',
    body:
      'Working alongside your treating doctor, we shape a care plan around pain relief, symptom comfort and emotional support — at home, where it feels safe.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    n: '03',
    title: 'A caregiver who fits',
    body:
      'We match a trained, compassionate caregiver to your loved one — chosen for warmth and patience as much as skill — and introduce them gently.',
    icon: HandRaisedIcon,
  },
  {
    n: '04',
    title: 'Care that stays close',
    body:
      'We remain reachable, adjust the plan as needs change, and support the whole family — quietly, steadily, for as long as you need us.',
    icon: HeartIcon,
  },
] as const

const TESTIMONIALS = [
  {
    quote:
      'When treatment options ran out, all we wanted was for Amma to be comfortable and at home. The caregiver was so gentle with her pain and so kind to us. We will never forget that quiet dignity.',
    name: 'Lakshmi R.',
    place: 'Jayanagar, Bangalore',
  },
  {
    quote:
      'My father wanted to be in his own room, with his own things around him. EzyHelpers made that possible — comfort care, calm updates, and a caregiver who treated him like family.',
    name: 'Imran S.',
    place: 'HSR Layout, Bangalore',
  },
  {
    quote:
      'We are abroad, and that distance was the hardest part. Knowing someone compassionate was beside my mother every day, keeping her comfortable, gave our family real peace.',
    name: 'Anjali M.',
    place: 'Parents in Indiranagar',
  },
] as const

const FAQS = [
  {
    question: 'What is palliative care at home, and how is it different from hospital care?',
    answer:
      'Palliative care focuses on comfort, dignity and quality of life for someone living with a serious illness — relieving pain and symptoms rather than only treating the disease. At home, that comfort is delivered in familiar surroundings, surrounded by family, while staying coordinated with your treating doctor. It can be provided alongside ongoing treatment, not only at the end of life.',
  },
  {
    question: 'Is palliative care only for the final stage of life?',
    answer:
      'No. Palliative care can begin at any point after a serious diagnosis — including during active treatment — to ease pain, breathlessness, nausea and emotional distress. End-of-life and hospice care are part of palliative care, but many families benefit from comfort-focused support much earlier in the journey.',
  },
  {
    question: 'Will the caregiver manage pain and difficult symptoms?',
    answer:
      'Our caregivers provide comfort care and symptom support under the guidance of your treating doctor — helping keep pain, breathlessness, nausea and discomfort gently controlled, and alerting your medical team when something needs attention. Medical decisions and prescriptions always remain with your doctor. This page is for information and is not medical advice.',
  },
  {
    question: 'How do you support the family, not just the patient?',
    answer:
      'Caring for a seriously ill loved one is physically and emotionally exhausting. We offer respite hours so family carers can rest, gentle guidance on what to expect, clear daily updates for relatives near and far, and emotional support — including grief resources — for everyone involved.',
  },
  {
    question: 'Can palliative care at home be arranged across Bangalore?',
    answer:
      'Yes. We arrange compassionate palliative care at home across Bangalore, coordinating caregivers, comfort plans and any required equipment. If you are unsure whether we cover your area, a gentle call with a care advisor will confirm everything.',
  },
  {
    question: 'How do we begin, and is there any pressure?',
    answer:
      'You can begin with a calm, no-pressure conversation with a care advisor. We listen to your situation, explain what comfort care at home could look like, and move at the pace that feels right for your family. There is never any obligation.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Palliative Care at Home, Bangalore',
    medicalSpecialty: ['PalliativeCare', 'Hospice'],
    areaServed: { '@type': 'City', name: 'Bangalore' },
    url: `https://www.ezyhelpers.com${PATH}`,
    telephone: '+91-80-31411776',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  },
] as const

export default function PalliativeCareAtHomeView() {
  const enquiryHref = `${ENQUIRY_HREF}?source=${encodeURIComponent(PATH)}`

  return (
    <div className="min-h-screen bg-white font-careUi text-neutral-900 antialiased">
      <Navbar />

      {/* ─────────────────── Hero ─────────────────── */}
      <header className="relative overflow-hidden bg-care-50">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-accent-100/50 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 sm:pb-28 sm:pt-8 lg:pb-32">
          {/* Breadcrumb */}
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
                <span className="font-medium text-neutral-900">Palliative Care at Home</span>
              </li>
            </ol>
          </nav>

          <div className="mt-10 max-w-3xl sm:mt-14">
            <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden />
              Bangalore · Comfort care at home
            </p>

            <h1 className="mt-7 font-careSerif text-[clamp(2.4rem,6vw,4.75rem)] font-medium leading-[1.04] tracking-[-0.03em] text-neutral-950">
              {PILLAR.title}.
              <br />
              <em className="font-careSerif font-normal italic text-accent-600">Comfort, dignity, togetherness.</em>
            </h1>

            <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-600 sm:text-xl">
              When someone you love is living with a serious illness, what matters most is comfort,
              gentleness and being together. We bring compassionate palliative care home — easing pain
              and symptoms, supporting the heart, and standing beside your whole family.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href={enquiryHref}
                onClick={() => trackCareCTAClick('Talk to a care advisor', `${PATH}#hero`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-neutral-900 px-7 py-4 text-[15px] font-semibold text-white shadow-[0_2px_10px_rgba(0,0,0,0.18)] transition hover:bg-black hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] active:scale-[0.98]"
              >
                Talk to a care advisor
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={PHONE_HREF}
                onClick={() => trackCarePhoneClick(PHONE_DISPLAY, `${PATH}#hero`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-4 text-[15px] font-semibold text-neutral-900 shadow-sm transition hover:border-neutral-900 hover:bg-neutral-50"
              >
                <PhoneIcon className="h-4 w-4" aria-hidden />
                {PHONE_DISPLAY}
              </a>
            </div>
            <p className="mt-5 text-sm text-neutral-500">
              A calm, no-pressure conversation — we move at the pace that feels right for your family.
            </p>
          </div>
        </div>
      </header>

      <main>
        {/* ─────────────── Trust ribbon ─────────────── */}
        <section aria-labelledby="trust-ribbon" className="border-y border-neutral-200 bg-white">
          <h2 id="trust-ribbon" className="sr-only">
            Why families trust our palliative care
          </h2>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-neutral-200 lg:grid-cols-4">
            {TRUST_RIBBON.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-start gap-3 bg-white px-5 py-7 sm:px-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-accent-600/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <strong className="block text-sm font-bold text-neutral-950">{title}</strong>
                  <span className="text-xs leading-snug text-neutral-500">{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────── Gentle intro ─────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-care-50 p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">A gentle note</p>
            <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
              Palliative care is not about giving up — it is about caring fully. It puts{' '}
              <em className="italic text-accent-600">comfort and dignity</em> at the centre, easing pain
              and worry so your loved one can live their days as gently and meaningfully as possible, at
              home, surrounded by the people they love.
            </p>
          </div>
        </section>

        {/* ─────────────── Nested services (4 cards) ─────────────── */}
        <section className="border-y border-neutral-200 bg-neutral-50 px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                Ways we can help
              </p>
              <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                Compassionate care, shaped around your loved one.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                Every situation is different. These are the gentle, comfort-focused services we most often
                arrange — and we will always tailor them to what your family needs.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {PILLAR.nested.map((n) => {
                const Icon = NESTED_ICONS[n.icon] ?? HeartIcon
                return (
                  <Link
                    key={n.slug}
                    href={`/care-services/${n.slug}`}
                    className="group flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] outline-none transition hover:-translate-y-1 hover:border-accent-600/40 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 ring-1 ring-accent-600/15">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-careSerif text-xl font-bold tracking-tight text-neutral-950">
                      {n.label}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{n.tagline}</p>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                      {formatPriceWithNote(n.priceKey)}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 transition group-hover:gap-2">
                      Learn more
                      <ArrowRightIcon className="h-4 w-4" aria-hidden />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─────────────── What palliative care includes ─────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                What palliative care includes
              </p>
              <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                Comfort for the body, the heart and the family.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                Good palliative care holds all three together — gentle physical relief, emotional
                steadiness, and real support for the people doing the caring.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {WHAT_INCLUDES.map(({ icon: Icon, title, body, bullets }) => (
                <article
                  key={title}
                  className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-accent-600/15">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-careSerif text-xl font-bold tracking-tight text-neutral-950">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
                  <ul className="mt-5 space-y-2 text-sm text-neutral-700">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" aria-hidden />
                        <span className="leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── How we support the whole family ─────────────── */}
        <section className="bg-neutral-50 px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                  Care for the whole family
                </p>
                <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                  You are not carrying this alone.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
                  A serious illness asks so much of a family. Our role is to lighten that weight — with
                  practical help, gentle guidance and a steady presence — so you can rest, and simply be
                  with the person you love.
                </p>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {FAMILY_SUPPORT.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5"
                    >
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" aria-hidden />
                      <span className="text-sm leading-snug text-neutral-800">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────── How it works ─────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                How it works
              </p>
              <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                Gentle, unhurried steps.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                There is no rush. We begin with listening, and move only at the pace your family is ready
                for.
              </p>
            </div>

            <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map(({ n, title, body, icon: Icon }) => (
                <li
                  key={n}
                  className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-careSerif text-3xl font-medium text-accent-600">{n}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-700">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <h3 className="mt-5 font-careSerif text-lg font-bold tracking-tight text-neutral-950">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─────────────── Testimonials ─────────────── */}
        <section className="border-y border-neutral-200 bg-care-50 px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                In families’ own words
              </p>
              <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                Comfort, remembered with gratitude.
              </h2>
              <p className="mt-4 text-sm text-neutral-500">
                Shared with permission. Names and details adjusted to protect each family’s privacy.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="flex h-full flex-col justify-between rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                >
                  <div>
                    <span aria-hidden className="font-careSerif text-5xl leading-none text-accent-600/40">
                      &ldquo;
                    </span>
                    <blockquote className="mt-2 font-careSerif text-lg leading-snug text-neutral-900">
                      {t.quote}
                    </blockquote>
                  </div>
                  <figcaption className="mt-6 border-t border-neutral-200 pt-5 text-sm">
                    <span className="block font-semibold text-neutral-950">{t.name}</span>
                    <span className="block text-neutral-500">{t.place}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── FAQ ─────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              Questions families ask
            </p>
            <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
              Answered gently, and honestly.
            </h2>
            <div className="mt-10">
              <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
            </div>
            <p className="mt-8 text-sm leading-relaxed text-neutral-500">
              This page is for general information and comfort, and is not medical advice. Decisions about
              treatment and medication always rest with your treating doctor.
            </p>
          </div>
        </section>

        {/* ─────────────── Final CTA ─────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-care-50 via-care-100 to-care-200 px-4 py-24 sm:px-6 sm:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-accent-200/40 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-care-400/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-careSerif text-[clamp(2rem,5.5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
              Whenever you are ready,
              <br />
              <em className="font-careSerif font-normal italic text-accent-600">we are here for your family.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              Reach out for a calm, compassionate conversation. We will listen, answer your questions, and
              gently explain how palliative care at home could bring comfort — with no pressure at all.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={enquiryHref}
                onClick={() => trackCareCTAClick('Request a compassionate consultation', `${PATH}#footer-cta`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-neutral-900 px-7 py-4 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition hover:bg-black active:scale-[0.98]"
              >
                Request a compassionate consultation
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={PHONE_HREF}
                onClick={() => trackCarePhoneClick(PHONE_DISPLAY, `${PATH}#footer-cta`)}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-neutral-900/20 bg-white/80 px-7 py-4 text-[15px] font-semibold text-neutral-900 backdrop-blur transition hover:bg-white"
              >
                <PhoneIcon className="h-4 w-4" aria-hidden />
                {PHONE_DISPLAY}
              </a>
            </div>

            <ul className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-2">
              {PILLAR.nested.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/care-services/${n.slug}`}
                    className="inline-flex items-center rounded-full border border-neutral-900/15 bg-white/70 px-4 py-2 text-xs font-semibold text-neutral-800 backdrop-blur transition hover:border-neutral-900/40 hover:bg-white hover:text-neutral-950"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />

      {JSONLD.map((blob, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blob) }}
        />
      ))}
    </div>
  )
}
