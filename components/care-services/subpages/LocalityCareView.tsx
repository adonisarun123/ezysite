import {
  MapPinIcon,
  HeartIcon,
  GlobeAsiaAustraliaIcon,
  TruckIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'

/**
 * Reusable locality elderly-care landing page, driven entirely by per-area
 * data so each page carries genuine local detail (real sub-areas, hospitals,
 * apartment clusters, testimonials) rather than thin duplicate content.
 * Modelled on the original Whitefield page.
 */
export interface LocalityCareData {
  path: string
  localityName: string
  /** Short context line for the hero, e.g. "from CMH Road to 100 Feet Road" */
  heroSpan: string
  /** One-paragraph answer-first block. Mentions the hospital cluster. */
  oneParagraph: string
  /** 4 reality cards specific to how this locality lives */
  reality: { kind: 'office' | 'nri' | 'hospital' | 'home'; title: string; body: string }[]
  careOptions: { title: string; hours: string; fit: string; price: string; highlight?: boolean }[]
  subAreas: string[]
  hospitals: string[]
  testimonials: { quote: string; name: string; place: string }[]
  faqs: { question: string; answer: string }[]
}

const REALITY_ICONS = {
  office: BuildingOffice2Icon,
  nri: GlobeAsiaAustraliaIcon,
  hospital: TruckIcon,
  home: HeartIcon,
} as const

export default function LocalityCareView({ data }: { data: LocalityCareData }) {
  const { path, localityName } = data

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: `EzyHelpers, Elderly Care Services in ${localityName}, Bangalore`,
      areaServed: { '@type': 'AdministrativeArea', name: `${localityName}, Bangalore` },
      url: `https://www.ezyhelpers.com${path}`,
      telephone: '+91-80-31411776',
      address: {
        '@type': 'PostalAddress',
        addressLocality: localityName,
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ]

  return (
    <CareSubpageShell
      currentLabel={`Elderly Care · ${localityName}`}
      eyebrow={`${localityName} · Bangalore`}
      headlineLead={`Elderly care, in ${localityName}.`}
      headlineAccent="Close to home. Closer to family."
      lede={`Verified, matched caregivers across ${localityName}, ${data.heroSpan}, typically reaching your home within 30 minutes.`}
      enquirySource={path}
      jsonLd={jsonLd as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="June 2026"
    >
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-care-50 p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            {data.oneParagraph}
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={`The ${localityName} context`}
            titleLead="Care that fits"
            titleMuted={`how ${localityName} actually lives.`}
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {data.reality.map((r) => {
              const Icon = REALITY_ICONS[r.kind]
              return (
                <div
                  key={r.title}
                  className="flex items-start gap-4 rounded-[24px] border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-care-50 text-care-500 ring-1 ring-care-500/15">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-careSerif text-lg font-bold tracking-tight text-neutral-950">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{r.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Choose the right cover"
            titleLead="Four arrangements"
            titleMuted={`that work in ${localityName}.`}
            lede="From a few hours of weekday companionship to round-the-clock live-in care, most families settle into one of these four shapes."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {data.careOptions.map((c) => (
              <article
                key={c.title}
                className={`flex h-full flex-col rounded-[24px] border bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] ${
                  c.highlight ? 'border-care-500/40' : 'border-neutral-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-careSerif text-xl font-bold tracking-tight text-neutral-950">{c.title}</h3>
                  {c.highlight ? (
                    <span className="rounded-full bg-care-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-care-500">
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

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Sub-areas covered"
            titleLead={`Across all of ${localityName}`}
            titleMuted="and its surrounding micro-localities."
            lede="Caregivers are placed citywide and assigned by reachability, most arrive at your gate within 30 minutes of the morning shift start."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {data.subAreas.map((a) => (
              <div
                key={a}
                className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-sm font-medium text-neutral-800"
              >
                <MapPinIcon className="h-4 w-4 shrink-0 text-care-500" aria-hidden />
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2F7FB] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Hospital network"
            titleLead="We coordinate with"
            titleMuted={`every major hospital near ${localityName}.`}
            lede="When your parent is discharged or has a scheduled appointment, we brief the caregiver on the consultant, the cadence, and what symptoms to flag."
          />
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.hospitals.map((h) => (
              <div key={h} className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-4">
                <BuildingOffice2Icon className="h-5 w-5 shrink-0 text-care-500" aria-hidden />
                <span className="text-sm font-medium text-neutral-900">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FBF7F1] px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow={`${localityName} families`} titleLead="Stories from" titleMuted="around the neighbourhood." />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {data.testimonials.map((f) => (
              <figure
                key={f.name}
                className="flex h-full flex-col justify-between rounded-[24px] border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <div>
                  <span aria-hidden className="font-careSerif text-5xl leading-none text-care-500/40">
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

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead={`${localityName} care, answered.`} />
          <div className="mt-10">
            <FAQAccordion faqs={data.faqs} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Care, on your gate by morning."
        headlineAccent="From wherever you're calling from."
        body="Tell us your apartment complex and your parent's situation. We respond within the hour and try to place a caregiver before you finish work today."
        enquirySource={path}
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
