import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'
import { PhoneIcon, ArrowRightIcon, CheckIcon, HeartIcon, ClockIcon } from '@heroicons/react/24/outline'
import { CARE_PILLAR_HREF, CARE_ENQUIRY_HREF } from '@/lib/careServices/registry'
import HomeHealthcareTestimonials, { type CareStory } from './HomeHealthcareTestimonials'

const NURSING_HREF = '/care-services/home-nursing-services-bangalore'
const CARETAKER_HREF = '/care-services/caretaker-services-bangalore'

const SERVICE_CARDS = [
  { tag: 'Recovery', title: 'Post-surgery recovery', body: 'Cardiac, orthopaedic, abdominal — medical attention paired with daily care.', tone: 'c1' as const },
  { tag: 'Stroke + Paralysis', title: 'Post-stroke and paralysis care', body: 'Mobility support, transfer assistance, and continued therapy follow-through.', tone: 'c2' as const },
  { tag: 'Chronic care', title: 'Long-term illness management', body: 'Diabetes, COPD, kidney conditions — with regular monitoring and reporting.', tone: 'c3' as const },
  { tag: 'ICU transition', title: 'ICU discharge home transition', body: 'Bridging hospital-grade attention with the comforts of home.', tone: 'c4' as const },
  { tag: 'Neurology', title: "Dementia and Alzheimer's", body: 'Continuous, gentle supervision with familiarity and patience.', tone: 'c5' as const },
  { tag: 'Palliative', title: 'Cancer palliative care', body: 'Medical comfort and daily support, delivered with dignity.', tone: 'c6' as const },
]

const toneClass: Record<(typeof SERVICE_CARDS)[number]['tone'], string> = {
  c1: 'from-sky-500/15 to-primary-500/5 border-sky-200/60',
  c2: 'from-teal-500/15 to-emerald-500/5 border-teal-200/60',
  c3: 'from-amber-500/15 to-orange-500/5 border-amber-200/60',
  c4: 'from-violet-500/15 to-indigo-500/5 border-violet-200/60',
  c5: 'from-rose-500/15 to-pink-500/5 border-rose-200/60',
  c6: 'from-cyan-500/15 to-blue-500/5 border-cyan-200/60',
}

const CONDITIONS = [
  'Post-cardiac surgery (bypass, angioplasty)',
  'Stroke recovery and paralysis care',
  'Diabetes management and monitoring',
  'Knee replacement, hip surgery, fractures',
  'ICU discharge and post-hospital recovery',
  'Cancer care and palliative support',
  "Parkinson's and neurological conditions",
  'Bedridden care, pressure sore support',
  'COPD, asthma, breathing conditions',
  'Kidney conditions, dialysis support',
  'Post-abdominal surgery recovery',
  'General elderly mobility support',
]

const STORIES: CareStory[] = [
  {
    quote:
      'My father had bypass surgery and came home with strict care instructions and a long list of medicines. The home healthcare professional arranged by EzyHelpers had experience in cardiac recovery. She followed all instructions carefully, kept us informed, and handled my father with patience and confidence. That support made a big difference in his recovery.',
    emphasisPhrase: 'That support made a big difference in his recovery.',
    name: 'Suresh Parthasarathy',
    location: 'Sarjapur Road, Bangalore',
    initials: 'SP',
  },
  {
    quote:
      'My mother has serious breathing issues (COPD), and we needed continuous care at home. The professional provided by EzyHelpers understood how to manage oxygen support and monitor her condition closely. She also stayed in touch with our doctor when needed. Her experience helped us handle difficult situations at home without rushing to the hospital every time.',
    emphasisPhrase: 'Her experience helped us handle difficult situations at home without rushing to the hospital every time.',
    name: 'Ananya Rao',
    location: 'Yelahanka, Bangalore',
    initials: 'AR',
  },
  {
    quote:
      "After my husband's kidney transplant, we needed very careful home care because of his sensitive condition. EzyHelpers took time to find someone with the right experience. She managed his medicines properly, followed all precautions, and kept us updated regularly. We felt confident knowing he was getting proper care at home.",
    emphasisPhrase: 'We felt confident knowing he was getting proper care at home.',
    name: 'Lalitha Iyer',
    location: 'Rajajinagar, Bangalore',
    initials: 'LI',
  },
]

type Props = {
  metaDescription: string
  faqItems: { question: string; answer: string }[]
  pathname: string
}

export default function HomeHealthcareBangaloreView({ metaDescription, faqItems, pathname }: Props) {
  const enquiryHref = `${CARE_ENQUIRY_HREF}?source=${encodeURIComponent(pathname)}`

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-neutral-900">
      <Navbar />

      {/* Hero — aurora + grid (reference layout) */}
      <header className="relative flex min-h-[min(92svh,880px)] flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-28 text-center sm:px-6 sm:pb-24 sm:pt-32">
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
            Bangalore · In-home medical care
          </p>

          <h1 className="font-display text-[clamp(2.25rem,7vw,4.25rem)] font-bold leading-[1.08] tracking-tight text-neutral-950">
            Hospital-grade care.
            <br />
            Brought home,{' '}
            <span className="bg-gradient-to-r from-primary-600 via-teal-500 to-rose-500 bg-clip-text text-transparent">
              beautifully.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[clamp(1rem,2.4vw,1.25rem)] leading-relaxed text-neutral-600">
            {metaDescription}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={enquiryHref}
              id="book-top"
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
            {[
              {
                icon: CheckIcon,
                title: 'Verified professionals',
                sub: 'Aadhaar + credential checks',
                grad: 'from-sky-500 to-primary-500',
              },
              {
                icon: HeartIcon,
                title: 'Doctor-aligned',
                sub: 'Care plan continuity',
                grad: 'from-teal-500 to-emerald-500',
              },
              {
                icon: ClockIcon,
                title: 'Rapid response',
                sub: 'Often within hours',
                grad: 'from-rose-500 to-amber-500',
              },
            ].map(({ icon: Icon, title, sub, grad }) => (
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
            ))}
          </div>
        </div>
      </header>

      <Breadcrumb
        variant="minimal"
        separator="chevron"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Care Services', href: CARE_PILLAR_HREF },
          { label: 'Home Healthcare Services' },
        ]}
      />

      <main>
        {/* Compare */}
        <section id="difference" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">The difference</p>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,4.5vw,3.25rem)] font-bold leading-tight tracking-tight text-neutral-950">
              One service.
              <br />
              One team.{' '}
              <span className="text-neutral-400">One coordinated outcome.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
              Most providers force a choice — a nurse <em className="not-italic font-medium text-neutral-800">or</em> a
              caretaker. Home Healthcare is the integrated service for patients who genuinely need both, working in step.
            </p>

            <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:gap-5">
              <article className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[28px] bg-gradient-to-b from-neutral-900 to-neutral-950 p-8 text-white shadow-2xl shadow-neutral-900/30 lg:min-h-[380px]">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(ellipse_80%_100%_at_50%_0%,rgba(0,116,200,0.45),transparent_70%)]" />
                <div className="relative">
                  <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/95 backdrop-blur">
                    This page · Recommended
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-bold tracking-tight">Home Healthcare</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    For patients who need medical procedures and daily care, working as one coordinated team.
                  </p>
                  <ul className="mt-6 space-y-2.5 text-sm text-white/85">
                    {['Nurse + caretaker placement', 'Doctor-aligned care plan', 'Wound, vitals, medication', 'Hygiene, mobility, feeding', 'Family updates throughout'].map((t) => (
                      <li key={t} className="flex gap-2">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={enquiryHref} className="relative inline-flex items-center gap-1 text-sm font-semibold text-sky-300 hover:text-sky-200">
                  Start a placement <ArrowRightIcon className="h-4 w-4" aria-hidden />
                </Link>
              </article>

              <article className="flex min-h-[340px] flex-col justify-between rounded-[28px] border border-black/[0.06] bg-[#f5f5f7] p-8 shadow-sm lg:min-h-[380px]">
                <div>
                  <span className="inline-block rounded-full bg-black/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-700">
                    Medical only
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-neutral-950">Home Nursing</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    Procedural medical care: wound dressing, IV, catheter, vital monitoring.
                  </p>
                </div>
                <Link href={NURSING_HREF} className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700">
                  Learn more <ArrowRightIcon className="h-4 w-4" aria-hidden />
                </Link>
              </article>

              <article className="flex min-h-[340px] flex-col justify-between rounded-[28px] border border-black/[0.06] bg-[#f5f5f7] p-8 shadow-sm lg:min-h-[380px]">
                <div>
                  <span className="inline-block rounded-full bg-black/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-700">
                    Daily care only
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-neutral-950">Caretakers</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    Hygiene, feeding, mobility support, and companionship for daily living.
                  </p>
                </div>
                <Link href={CARETAKER_HREF} className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700">
                  Learn more <ArrowRightIcon className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* Bento pillars */}
        <section id="why" className="scroll-mt-28 bg-[#f5f5f7] px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">Why families choose us</p>
            <h2 className="mt-3 max-w-3xl font-display text-[clamp(1.65rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-neutral-950">
              Care that is <span className="text-neutral-500">medically informed</span>
              <br />
              and humanly held.
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
              <div className="rounded-[28px] border border-white/80 bg-white p-8 shadow-sm md:col-span-3">
                <span className="font-mono text-xs font-medium text-neutral-400">01</span>
                <h3 className="mt-4 font-display text-xl font-bold text-neutral-950 sm:text-2xl">
                  Medical and daily care, one coordinated service.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  One team manages nursing tasks and personal care together — no juggling vendors, no gaps in handoffs.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-[28px] border border-teal-100 bg-gradient-to-br from-white to-teal-50/50 p-8 shadow-sm md:col-span-3">
                <span className="font-mono text-xs font-medium text-teal-600/80">02</span>
                <h3 className="mt-4 font-display text-xl font-bold text-neutral-950 sm:text-2xl">
                  Responsive support after hospital discharge.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  When discharge plans change, we move quickly to match the right professional to the patient&apos;s situation.
                </p>
                <svg viewBox="0 0 800 60" className="mt-6 h-12 w-full text-primary-500/80" preserveAspectRatio="none" aria-hidden>
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    points="0,30 100,30 130,30 150,10 170,50 190,15 210,45 230,30 400,30 430,30 450,10 470,50 490,15 510,45 530,30 800,30"
                  />
                </svg>
              </div>
              {[
                {
                  n: '03',
                  t: 'Condition-specific matching.',
                  d: 'Cardiac, neuro, oncology — we match experience to diagnosis.',
                },
                {
                  n: '04',
                  t: 'Doctor-aligned plans.',
                  d: "The team is briefed on your doctor's instructions and follows them.",
                },
                {
                  n: '05',
                  t: 'Ongoing follow-through.',
                  d: 'We check in after the first week, and stay reachable throughout.',
                },
              ].map((x) => (
                <div key={x.n} className="rounded-[28px] border border-white/80 bg-white p-8 shadow-sm md:col-span-2">
                  <span className="font-mono text-xs font-medium text-neutral-400">{x.n}</span>
                  <h3 className="mt-4 font-display text-lg font-bold text-neutral-950">{x.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Horizontal service cards */}
        <section id="services" className="scroll-mt-28 border-y border-black/[0.06] bg-[#fbfbfd] px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">What we provide</p>
            <h2 className="mt-3 font-display text-[clamp(1.65rem,4vw,2.75rem)] font-bold tracking-tight text-neutral-950">
              Care arrangements, <span className="text-neutral-500">shaped to the situation.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-neutral-600">
              We don&apos;t sell packages. We design care around medical complexity and the rhythm of your home.
            </p>
          </div>
          <div className="mt-10 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-14">
            <div className="flex w-max snap-x snap-mandatory gap-4 px-4 sm:gap-5 lg:px-[max(1rem,calc((100vw-72rem)/2+1rem))]">
              {SERVICE_CARDS.map((c) => (
                <div
                  key={c.title}
                  className={`snap-start rounded-[22px] border bg-gradient-to-br p-6 shadow-sm ${toneClass[c.tone]} flex h-full min-h-[200px] w-[min(85vw,320px)] shrink-0 flex-col justify-between sm:w-[300px]`}
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wide text-neutral-600">{c.tag}</span>
                    <h3 className="mt-3 font-display text-lg font-bold text-neutral-950">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{c.body}</p>
                  </div>
                  <div className="mt-4 flex justify-end text-neutral-400">
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
            <span className="mt-1 block sm:mt-0 sm:inline">Day · night · full-time · live-in arrangements</span>
          </p>
        </section>

        {/* Trust */}
        <section className="border-y border-black/[0.06] bg-white px-4 py-14 sm:px-6">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
            {[
              { num: '10,000+', label: 'Families served across India' },
              { num: '16+', label: 'Bangalore localities covered' },
              { num: '2 yrs+', label: 'Minimum experience we look for' },
              { num: '100%', label: 'Verified, screened, briefed' },
            ].map((x) => (
              <div key={x.label}>
                <p className="font-display text-[clamp(2rem,5vw,3rem)] font-bold leading-none tracking-tight text-neutral-900">{x.num}</p>
                <p className="mt-2 text-xs leading-snug text-neutral-500 sm:text-sm">{x.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-28 bg-neutral-950 px-4 py-16 text-white sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">How it works</p>
            <h2 className="mt-3 font-display text-[clamp(1.65rem,4vw,2.75rem)] font-bold tracking-tight">
              Four steps, handled with precision.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-white/65">
              From first call to first day on the job — and well beyond — every step is held by a real person on our team.
            </p>

            <div className="mt-14 space-y-12 md:space-y-16">
              {[
                {
                  mark: 'i',
                  title: 'Free consultation',
                  body: "We understand the diagnosis, the doctor's instructions, the daily routines, and what the family is hoping for. We recommend the right combination of nurse and caretaker — or whether one is sufficient.",
                },
                {
                  mark: 'ii',
                  title: 'Coordinated shortlisting',
                  body: "Suitable professionals are matched to the patient's specific situation. A cardiac patient is paired with someone experienced in cardiac recovery, not generic post-op care.",
                },
                {
                  mark: 'iii',
                  title: 'Interview and matching',
                  body: "You review qualifications, relevant past work, and can speak with shortlisted candidates. You choose who you're most comfortable with.",
                },
                {
                  mark: 'iv',
                  title: 'Onboarding and ongoing support',
                  body: 'The professional is briefed on the care plan and routine. We follow up after the first week and remain reachable throughout the placement.',
                },
              ].map((step) => (
                <div key={step.mark} className="flex flex-col gap-5 md:flex-row md:gap-10">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 font-display text-xl italic text-white md:h-20 md:w-20 md:text-2xl">
                    {step.mark}
                  </div>
                  <div className="max-w-3xl pt-1">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-white/65">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section id="conditions" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">Conditions we handle</p>
            <h2 className="mt-3 font-display text-[clamp(1.65rem,4vw,2.75rem)] font-bold tracking-tight text-neutral-950">
              A range of situations. <span className="text-neutral-400">One steady standard.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-neutral-600">
              Our professionals have managed each of these in Bangalore homes. For complex or rare cases, speak with our team for a personalised assessment.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {CONDITIONS.map((label) => (
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

        <HomeHealthcareTestimonials stories={STORIES} />

        {/* FAQ */}
        {faqItems.length > 0 && (
          <section id="faq" className="scroll-mt-28 border-t border-black/[0.06] bg-white px-4 py-16 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">Questions</p>
              <h2 className="mt-3 font-display text-[clamp(1.65rem,4vw,2.25rem)] font-bold tracking-tight text-neutral-950">
                Straight answers. <span className="text-neutral-400">No jargon.</span>
              </h2>
              <div className="mt-10">
                <FAQAccordion faqs={faqItems} tone="care" />
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section
          id="book"
          className="relative scroll-mt-28 overflow-hidden bg-neutral-950 px-4 py-20 text-center sm:px-6 sm:py-28"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,116,200,0.2),transparent_70%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-white">
              Start home healthcare,
              <br />
              <span className="bg-gradient-to-r from-sky-300 via-teal-300 to-rose-300 bg-clip-text text-transparent">
                matched to your loved one.
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/65">Tell us your situation — our team typically responds within the hour on business days.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href={enquiryHref}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-bold text-neutral-950 shadow-xl transition hover:bg-emerald-50"
              >
                Start your enquiry
              </Link>
              <a
                href="tel:+918031411776"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-white/25 px-8 py-3.5 text-base font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                Call 080-31411776
              </a>
            </div>
            <p className="mt-10 text-sm text-white/45">
              <Link href={CARE_PILLAR_HREF} className="font-medium text-white/70 underline-offset-4 hover:text-white hover:underline">
                ← Home care services overview
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
