import Link from 'next/link'
import {
  CheckIcon,
  HeartIcon,
  ClockIcon,
  HomeIcon,
  HandRaisedIcon,
  SparklesIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'

const PATH = '/care-services/dementia-alzheimers-care-bangalore'

const STAGES = [
  {
    n: 'Early',
    title: 'Mild forgetfulness, intact identity',
    body:
      'A few hours a day of companionship, structure, and gentle prompting. The goal is to keep routine, social engagement, and pride intact for as long as possible.',
    bullets: ['Day shift companionship', 'Memory-friendly routines', 'Light medication reminders', 'Social walks & meals'],
  },
  {
    n: 'Moderate',
    title: 'Confusion, agitation, sundowning',
    body:
      'Live-in or 12-hour cover becomes important. Caregivers manage wandering, evening agitation (sundowning), bathing resistance, and the family’s rising stress.',
    bullets: ['Live-in or extended day cover', 'Sundowning management', 'Safe bathing & dressing', 'Family respite scheduling'],
  },
  {
    n: 'Advanced',
    title: 'High dependence, communication loss',
    body:
      'Full-time, often medically-aware care. Mobility decline, swallow risk, incontinence, and the emotional difficulty of late-stage disease — handled with dignity, not detachment.',
    bullets: ['Live-in trained attendant', 'Swallow & feeding safety', 'Pressure-sore prevention', 'End-of-life sensitivity'],
  },
] as const

const BEHAVIOURS = [
  {
    icon: SunIcon,
    title: 'Sundowning',
    body:
      'Late-afternoon agitation, restlessness, or paranoia. Managed with consistent lighting, calming routines, light activity, and avoiding evening caffeine or stimulation.',
  },
  {
    icon: HandRaisedIcon,
    title: 'Wandering',
    body:
      'A safety risk in moderate-to-advanced stages. Door alarms, ID bracelets, and a caregiver who knows the patient’s favourite places to head toward — most wandering is goal-directed, not random.',
  },
  {
    icon: HeartIcon,
    title: 'Bathing & dressing resistance',
    body:
      'Often misread as stubbornness. Usually reflects fear of cold, embarrassment, or loss of control. Solved with warmer rooms, predictable steps, and patience — not insistence.',
  },
  {
    icon: SparklesIcon,
    title: 'Repetitive questions',
    body:
      'A reassurance-seeking behaviour, not memory failure. Caregivers learn to answer with the same calm tone every time, written notes for orientation, and gentle redirection.',
  },
  {
    icon: MoonIcon,
    title: 'Sleep disturbance',
    body:
      'Night-time confusion is common. A nightlight, fixed bedtime ritual, and limited daytime napping help. Avoid sedatives — they often worsen confusion.',
  },
  {
    icon: HomeIcon,
    title: 'Refusing meals',
    body:
      'Often a swallowing issue or texture preference, not pickiness. Soft, finger-friendly food, eating together, and removing distractions usually restore appetite.',
  },
] as const

const PHILOSOPHY = [
  'Validate the feeling, not the fact — arguing with a memory error increases agitation.',
  'Routines beat reminders — the same time, place, and order every day reduces confusion.',
  'One step at a time — break instructions into single, simple actions.',
  'Eye contact, name, smile — the social cues survive long after the names fade.',
  'Music, photographs, familiar fabrics — sensory anchors that reach memory when language can’t.',
  'Dignity is the entire point — care without it is just supervision.',
] as const

const FAQS = [
  {
    question: 'Is a regular caretaker enough for dementia, or do we need a specialist?',
    answer:
      'For early-stage dementia, an experienced caretaker who has worked with cognitive decline before is often sufficient. For moderate-to-advanced stages — especially with sundowning, wandering, or aggression — you need someone trained in dementia-specific behavioural management. We match accordingly.',
  },
  {
    question: 'How do I know what stage my parent is in?',
    answer:
      'Stages don’t map cleanly to time. Use function, not diagnosis date: can they bathe themselves? Manage medication? Recognise close family? Move safely without supervision? The more "no" answers, the more advanced the stage. We’ll help you assess on a free 15-minute call.',
  },
  {
    question: 'Can a caregiver actually slow the progression of dementia?',
    answer:
      'No caregiver — or treatment — reverses dementia. But a good one preserves function for longer: routine, stimulation, social contact, nutrition, sleep, and mood support all influence the *pace* of decline. The goal is more good days, fewer hospital visits, and dignity throughout.',
  },
  {
    question: 'My mother gets aggressive in the evening. How is that handled?',
    answer:
      'That’s sundowning. The caregiver works with predictable lighting, an early light dinner, calming background activity, and avoiding overstimulation after 4pm. Most agitation reduces meaningfully within 2–3 weeks of consistent routine. Medication is a last resort, not a first one.',
  },
  {
    question: 'How do you find caregivers who can actually do this work?',
    answer:
      'We require demonstrated dementia-specific experience — not just elderly-care experience. The caregiver must have managed at least one moderate-to-advanced dementia patient in the last 18 months and pass our calm-under-confusion screening. About 1 in 4 elderly-care candidates make it through.',
  },
  {
    question: 'What does dementia care at home cost in Bangalore?',
    answer:
      'Live-in placements typically run ₹22,000–₹32,000/month depending on stage and complexity. Day shifts are ₹900–₹1,300/day. Advanced-stage placements with a Trained Attendant run higher. A consultation gives you a precise estimate against your situation.',
  },
  {
    question: 'Should we move our parent to a memory care facility instead?',
    answer:
      'For most Indian families, home care is preferred — familiar surroundings reduce confusion and agitation, and the family stays meaningfully involved. A facility makes more sense in advanced stages with severe wandering or aggression, or when no family member can be reachable in emergencies. We’ll be honest with you about which makes sense.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Dementia & Alzheimer’s Care, Bangalore',
    medicalSpecialty: ['Geriatrics', 'Neurology'],
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

export default function DementiaCareView() {
  return (
    <CareSubpageShell
      currentLabel="Dementia & Alzheimer’s Care"
      eyebrow="Bangalore · Cognitive care at home"
      headlineLead="Dementia care, with dignity."
      headlineAccent="And a quiet steady hand."
      lede="Dementia changes everything except who your loved one is. We place caregivers trained to remember that — through agitation, repetition, sundowning, and the long months when the disease asks more of the family than of the patient."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      {/* One-paragraph direct answer */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-[#FBF3F1] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF385C]">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            Dementia care at home in Bangalore should be matched to the{' '}
            <em className="italic text-[#FF385C]">stage</em> of cognitive decline — not the calendar.
            Early-stage families need companionship and routine. Moderate-stage families need behavioural
            expertise. Advanced-stage families need a trained attendant who is steady through difficulty.
            EzyHelpers places caregivers with stage-appropriate experience and re-matches as the disease
            progresses.
          </p>
        </div>
      </section>

      {/* Stages */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="The three stages of care"
            titleLead="Different stages,"
            titleMuted="different caregivers."
            lede="What works in early-stage dementia is not what works in moderate stages, and is certainly not what works in advanced stages. We change the placement plan as the disease changes."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {STAGES.map((s) => (
              <article
                key={s.n}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <span className="inline-flex w-fit rounded-full bg-[#FF385C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#FF385C]">
                  {s.n} stage
                </span>
                <h3 className="mt-5 font-careSerif text-xl font-bold tracking-tight text-neutral-950 sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">{s.body}</p>
                <ul className="mt-5 space-y-2 text-sm text-neutral-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#FF385C]" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Common behaviours */}
      <section className="bg-[#FBF3F1] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="What we’re trained for"
            titleLead="The hard moments,"
            titleMuted="handled gently."
            lede="The behaviours that make families feel they can’t cope alone are the ones our dementia caregivers are matched on. None of these are unmanageable — they need the right approach, repeated calmly, every single day."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BEHAVIOURS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF0EA] text-[#FF385C] ring-1 ring-[#FF385C]/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-careSerif text-lg font-bold tracking-tight text-neutral-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care philosophy */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Our care philosophy"
            titleLead="Six principles"
            titleMuted="that shape every placement."
            align="center"
          />
          <ol className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {PHILOSOPHY.map((p, i) => (
              <li
                key={p}
                className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-[#F7F7F2] px-5 py-4"
              >
                <span className="font-careSerif text-2xl font-medium text-[#FF385C]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm leading-snug text-neutral-800 sm:text-base">{p}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Family support / respite */}
      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Care for the family too"
                titleLead="Dementia is exhausting."
                titleMuted="We notice."
                lede="The hardest part of dementia care isn’t the patient — it’s the toll on the spouse and adult children carrying it. Our placements are built so the family can rest, work, and breathe."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Scheduled respite hours so the spouse can leave the house',
                  'Daily WhatsApp updates so distant children stay connected',
                  'Crisis-line access for difficult nights',
                  'Mood and behavioural log shared with the family doctor',
                  'Family briefings whenever the stage changes',
                  'Replacement caregiver if the relationship isn’t working',
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5"
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#FF385C]" aria-hidden />
                    <span className="text-sm leading-snug text-neutral-800">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Dementia care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="A caregiver, before the next hard night."
        headlineAccent="Not after."
        body="Tell us what your evenings look like. We respond within the hour, recommend a stage-appropriate caregiver, and start the matching process today."
        enquirySource={PATH}
        related={[
          { label: 'Elderly Care Services', href: '/care-services/elderly-care-services-bangalore' },
          { label: 'Caretaker Services', href: '/care-services/caretaker-services-bangalore' },
          { label: 'Trained Attendant', href: '/care-services/trained-attendant-services-bangalore' },
          { label: 'Cost guide', href: '/care-services/home-nursing-cost-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
