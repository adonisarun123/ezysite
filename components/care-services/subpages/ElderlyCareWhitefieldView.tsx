import Link from 'next/link'
import {
  CheckIcon,
  MapPinIcon,
  HeartIcon,
  ClockIcon,
  ShieldCheckIcon,
  HomeModernIcon,
  GlobeAsiaAustraliaIcon,
  TruckIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'

const PATH = '/care-services/elderly-care-whitefield-bangalore'

const SUB_AREAS = [
  'ITPL Main Road',
  'Brookefield',
  'Hoodi',
  'Kundalahalli',
  'Varthur',
  'AECS Layout',
  'Mahadevapura',
  'Marathahalli (East)',
  'Kadugodi',
  'Sadaramangala',
  'Channasandra',
  'Whitefield Main Rd',
  'Borewell Road',
  'Pattandur Agrahara',
  'Hagadur',
  'Immadihalli',
] as const

const HOSPITALS = [
  'Manipal Hospital, Whitefield',
  'Sakra World Hospital',
  'Vydehi Institute of Medical Sciences',
  'Columbia Asia, Whitefield',
  'Cloudnine, Whitefield',
  'Narayana Multispeciality, Hoodi',
] as const

const WHITEFIELD_REALITY = [
  {
    icon: BuildingOffice2Icon,
    title: 'IT-corridor families',
    body:
      'Most Whitefield households are dual-income tech families. Parents move in for support, then need a caregiver during work hours and on travel weeks.',
  },
  {
    icon: GlobeAsiaAustraliaIcon,
    title: 'NRI children',
    body:
      'Many seniors live in Whitefield while their children are abroad. Care here is built around long-distance family communication — daily updates, video calls, and clear escalation.',
  },
  {
    icon: TruckIcon,
    title: 'Hospital proximity matters',
    body:
      'Whitefield’s hospital cluster — Manipal, Sakra, Vydehi, Columbia Asia — means most acute care is 10–20 minutes away. Caregivers are briefed on which hospital your family prefers.',
  },
  {
    icon: HeartIcon,
    title: 'Apartment living',
    body:
      'Most Whitefield seniors live in mid-to-large apartment complexes (Prestige, Sobha, Brigade). Lift access, security desks, and gated complexes change how caregivers come and go.',
  },
] as const

type CareOption = {
  title: string
  hours: string
  fit: string
  price: string
  highlight?: boolean
}

const CARE_OPTIONS: CareOption[] = [
  {
    title: 'Day shift companion',
    hours: '8 hours · 9am–5pm',
    fit: 'Working couples whose parents need company and supervision while they’re at the office.',
    price: '₹14,000–₹18,000 / mo',
  },
  {
    title: '12-hour caretaker',
    hours: '12 hours · day or night',
    fit: 'Families needing more substantial coverage — bath assistance, medication, meal prep, evening companionship.',
    price: '₹18,000–₹24,000 / mo',
    highlight: true,
  },
  {
    title: 'Live-in caregiver',
    hours: '24×7 · one weekly off',
    fit: 'Older parents living alone in Whitefield while children are abroad. Full-time presence with overnight cover.',
    price: '₹22,000–₹30,000 / mo',
  },
  {
    title: 'Trained attendant (live-in)',
    hours: '24×7 · skilled handling',
    fit: 'Bedridden, post-stroke, dementia-advanced, or any high-dependency situation.',
    price: '₹26,000–₹34,000 / mo',
  },
]

const TYPICAL_DAY = [
  '7:00 — Morning hygiene, medications, breakfast together',
  '9:00 — Light walk in the apartment garden or lobby',
  '10:30 — Doctor’s call, pharmacy run if needed, calls with family',
  '12:30 — Lunch (cooked or coordinated with the cook)',
  '13:30 — Rest, reading, music, gentle activity',
  '16:00 — Tea, evening visitors or grandchildren video call',
  '18:00 — Walk in the garden, light exercise',
  '19:30 — Dinner, evening meds',
  '21:00 — Wind-down, night-time routine, settle in',
] as const

const FAMILIES = [
  {
    quote:
      'My parents are in Brigade Cosmopolis. I work from a Manyata office and travel two weeks a month. The caregiver EzyHelpers placed has been with my mother for 11 months now. The daily updates are the only thing that lets me sleep on travel nights.',
    name: 'Anjali R.',
    place: 'Brigade Cosmopolis, Whitefield',
  },
  {
    quote:
      'We are based in Toronto. My father lives alone in a Sobha apartment near ITPL after my mother passed. The caregiver doesn’t just look after him — she sits with him during dinner. He stopped feeling alone in week three.',
    name: 'Karthik M.',
    place: 'Father in Sobha Habitech, Whitefield',
  },
  {
    quote:
      'Post-stroke discharge from Manipal Whitefield. The caregiver started the same day. Nine months in, my mother walks unsupported and the recovery has been steady. Worth every rupee.',
    name: 'Priya S.',
    place: 'Hoodi Circle, Whitefield',
  },
] as const

const FAQS = [
  {
    question: 'How quickly can you place a caregiver in Whitefield?',
    answer:
      'Whitefield is one of our highest-density caregiver zones. For most situations we attempt same-day placement, and for complex matches (dementia, post-stroke, language requirements) we typically place within 24–48 hours.',
  },
  {
    question: 'Do you have caregivers who speak English / Hindi / Tamil / Kannada?',
    answer:
      'Yes — language match is a primary criterion in our shortlisting. Whitefield’s population is genuinely cosmopolitan, and we routinely match in English, Hindi, Tamil, Kannada, Telugu, Malayalam, and Bengali.',
  },
  {
    question: 'Can the caregiver accompany my parent to Manipal or Sakra?',
    answer:
      'Yes. Hospital escort is part of the standard arrangement — appointment days, scheduled tests, pharmacy collections. We brief the caregiver on the family’s preferred hospital and consultant.',
  },
  {
    question: 'My parent lives in a gated apartment complex. Will the caregiver be allowed in?',
    answer:
      'We register the caregiver with your apartment’s security and provide ID and Aadhaar copies in advance. For most large complexes (Prestige, Brigade, Sobha) this is a routine same-day process.',
  },
  {
    question: 'Are caregivers comfortable with NRI families and remote coordination?',
    answer:
      'Many of our Whitefield placements are with NRI families. Daily WhatsApp updates, weekly video calls, written care logs, and time-zone-aware emergency communication are part of how we work.',
  },
  {
    question: 'Can we hire someone for just a few hours a day?',
    answer:
      'Yes. Day-shift companions starting at 6–8 hours/day are common in Whitefield, especially for working couples. Below 6 hours, the on-demand visit model is usually more cost-effective.',
  },
  {
    question: 'What does live-in elderly care in Whitefield typically cost?',
    answer:
      'Live-in placements in Whitefield run ₹22,000–₹30,000/month for general elderly care, ₹26,000–₹34,000/month for trained attendants (bedridden / advanced dementia / post-stroke). These match Bangalore-wide rates — we don’t add a locality premium.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'EzyHelpers — Elderly Care Services in Whitefield, Bangalore',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Whitefield, Bangalore',
    },
    url: `https://www.ezyhelpers.com${PATH}`,
    telephone: '+91-80-31411776',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Whitefield',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
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

export default function ElderlyCareWhitefieldView() {
  return (
    <CareSubpageShell
      currentLabel="Elderly Care · Whitefield"
      eyebrow="Whitefield · Bangalore"
      headlineLead="Elderly care, in Whitefield."
      headlineAccent="Close to home. Closer to family."
      lede="Verified, matched caregivers across the entire Whitefield corridor — from ITPL to Varthur, Brookefield to Hoodi — typically reaching your home within 30 minutes."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      {/* Direct answer */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-[#FBF3F1] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF385C]">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            Elderly care in Whitefield means caregivers placed within{' '}
            <em className="italic text-[#FF385C]">30 minutes</em> of your apartment, briefed on your
            preferred hospital — Manipal, Sakra, Vydehi, Columbia Asia — and matched to the language and
            routine your parent is used to. Whether you’re an IT-corridor family with an office to run to
            or an NRI child handling everything from abroad.
          </p>
        </div>
      </section>

      {/* Why Whitefield is unique */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="The Whitefield context"
            titleLead="Care that fits"
            titleMuted="how Whitefield actually lives."
            lede="Whitefield is its own world inside Bangalore — IT campuses, large gated complexes, a senior population that often arrived for a child’s career. Care here is built around that reality, not a generic city template."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {WHITEFIELD_REALITY.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-[24px] border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF0EA] text-[#FF385C] ring-1 ring-[#FF385C]/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-careSerif text-lg font-bold tracking-tight text-neutral-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care options */}
      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Choose the right cover"
            titleLead="Four arrangements"
            titleMuted="that work in Whitefield."
            lede="From a few hours of weekday companionship to round-the-clock live-in care — most Whitefield families settle into one of these four shapes."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {CARE_OPTIONS.map((c) => (
              <article
                key={c.title}
                className={`flex h-full flex-col rounded-[24px] border bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] ${
                  c.highlight ? 'border-[#FF385C]/40' : 'border-neutral-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-careSerif text-xl font-bold tracking-tight text-neutral-950">{c.title}</h3>
                  {c.highlight ? (
                    <span className="rounded-full bg-[#FF385C]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#FF385C]">
                      Most popular
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-500">{c.hours}</p>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">{c.fit}</p>
                <div className="mt-6 border-t border-neutral-200 pt-5">
                  <span className="font-careSerif text-2xl font-medium text-neutral-950">{c.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-areas covered */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Sub-areas covered"
            titleLead="Across all of Whitefield"
            titleMuted="and its surrounding micro-localities."
            lede="Caregivers are placed citywide and assigned by reachability — most arrive at your gate within 30 minutes of the morning shift start."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {SUB_AREAS.map((a) => (
              <div
                key={a}
                className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-sm font-medium text-neutral-800"
              >
                <MapPinIcon className="h-4 w-4 shrink-0 text-[#FF385C]" aria-hidden />
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitals coordinated with */}
      <section className="bg-[#F2F7FB] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Hospital network"
            titleLead="We coordinate with"
            titleMuted="every major Whitefield hospital."
            lede="Whether your parent is being discharged from Manipal Whitefield or has weekly tests at Sakra, we brief the caregiver on the consultant, the appointment cadence, and what symptoms to flag."
          />
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {HOSPITALS.map((h) => (
              <div key={h} className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-4">
                <BuildingOffice2Icon className="h-5 w-5 shrink-0 text-[#0074C8]" aria-hidden />
                <span className="text-sm font-medium text-neutral-900">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical day */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="A typical day"
            titleLead="What live-in care looks like,"
            titleMuted="hour by hour."
            lede="Every household is different — this is a representative weekday for a Whitefield senior with a live-in caregiver."
            align="center"
          />
          <ol className="mx-auto mt-12 max-w-3xl space-y-3">
            {TYPICAL_DAY.map((line) => {
              const [time, ...rest] = line.split(' — ')
              return (
                <li
                  key={line}
                  className="flex items-start gap-5 rounded-2xl border border-neutral-200 bg-[#F7F7F2] px-5 py-4"
                >
                  <span className="font-careSerif text-lg font-medium text-[#FF385C] sm:text-xl min-w-[3.5rem]">
                    {time}
                  </span>
                  <span className="text-sm leading-snug text-neutral-800 sm:text-base">{rest.join(' — ')}</span>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* Whitefield testimonials */}
      <section className="bg-[#FBF7F1] px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Whitefield families"
            titleLead="Stories from"
            titleMuted="apartments around ITPL."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {FAMILIES.map((f) => (
              <figure
                key={f.name}
                className="flex h-full flex-col justify-between rounded-[24px] border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <div>
                  <span aria-hidden className="font-careSerif text-5xl leading-none text-[#FF385C]/40">
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 font-careSerif text-base leading-snug text-neutral-900 sm:text-lg">
                    {f.quote}
                  </blockquote>
                </div>
                <figcaption className="mt-6 border-t border-neutral-200 pt-5 text-sm">
                  <span className="block font-semibold text-neutral-950">{f.name}</span>
                  <span className="block text-neutral-500">{f.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Whitefield care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Care, on your gate by morning."
        headlineAccent="From wherever you’re calling from."
        body="Tell us your apartment complex and your parent’s situation. We respond within the hour and try to place a caregiver before you finish work today."
        enquirySource={PATH}
        related={[
          { label: 'Elderly Care Services', href: '/care-services/elderly-care-services-bangalore' },
          { label: 'Caretaker Services', href: '/care-services/caretaker-services-bangalore' },
          { label: 'Dementia Care', href: '/care-services/dementia-alzheimers-care-bangalore' },
          { label: 'All Care Services', href: '/care-services' },
        ]}
      />
    </CareSubpageShell>
  )
}
