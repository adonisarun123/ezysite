import {
  CheckIcon,
  IdentificationIcon,
  DocumentCheckIcon,
  UserIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  HeartIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'

const PATH = '/care-services/caregiver-verification-process'

const STEPS = [
  {
    n: '01',
    icon: IdentificationIcon,
    title: 'Aadhaar authentication',
    body:
      'Every applicant’s Aadhaar is biometrically authenticated via UIDAI before any further screening begins. We do not place a caregiver whose Aadhaar identity cannot be confirmed.',
    metric: 'Mandatory · 100%',
  },
  {
    n: '02',
    icon: DocumentCheckIcon,
    title: 'Government ID & address',
    body:
      'PAN, voter ID, or driving licence — at least one secondary government-issued ID. Permanent and current address are verified. Address mismatches are flagged for in-person review.',
    metric: '2 government IDs minimum',
  },
  {
    n: '03',
    icon: UserIcon,
    title: 'In-person interview',
    body:
      'A structured in-person interview at one of our offices, lasting 45–60 minutes. We assess language, demeanour, communication, willingness for the work, and red-flag any inconsistency in their stated experience.',
    metric: '~45 mins · in-office',
  },
  {
    n: '04',
    icon: ShieldCheckIcon,
    title: 'Background & reference check',
    body:
      'Police-verifiable background check, plus telephone reference checks with two prior employers (where the candidate has worked before). Anything unverifiable is treated as unverified.',
    metric: '2 references · police record',
  },
  {
    n: '05',
    icon: AcademicCapIcon,
    title: 'Condition-specific experience review',
    body:
      'For care placements, we verify hands-on experience with the relevant condition (dementia, stroke, post-surgery, bedridden) within the last 12–18 months. We don’t place caregivers on conditions they haven’t managed before.',
    metric: 'Condition-specific',
  },
  {
    n: '06',
    icon: HeartIcon,
    title: 'Pre-placement health screening',
    body:
      'Basic health check covering communicable diseases (TB, hepatitis), vision, and physical capacity for the role. For bedridden or post-surgical care placements, additional capability tests apply.',
    metric: 'Pre-placement',
  },
] as const

const DISQUALIFIERS = [
  'Failed Aadhaar biometric authentication',
  'Mismatched ID across documents',
  'Any criminal record',
  'Two or more unverifiable prior employers',
  'Inconsistent or fabricated experience claims',
  'Failed condition-specific assessment',
  'Communicable disease without clearance',
  'Refusal of background check',
] as const

const ONGOING = [
  {
    title: 'Daily WhatsApp check-ins',
    body: 'Caregivers report into our team daily during placements — anything unusual is flagged the same hour.',
  },
  {
    title: 'Family feedback loop',
    body: 'We follow up with the family in week 1, week 4, and quarterly. Concerns are acted on within 24 hours.',
  },
  {
    title: 'Surprise visits',
    body: 'For long-term placements (3+ months), our care coordinators conduct unannounced check-in visits.',
  },
  {
    title: 'Re-verification annually',
    body: 'Every active caregiver is re-verified annually — Aadhaar, address, and reference re-checks.',
  },
] as const

const FAQS = [
  {
    question: 'How many candidates pass your verification process?',
    answer:
      'Roughly 1 in 4. The largest single drop-off is the condition-specific experience review for care placements — many candidates have general elderly experience but not specific dementia, stroke, or bedridden experience. We don’t lower the bar to fill faster.',
  },
  {
    question: 'How long does verification take for a single caregiver?',
    answer:
      'Initial screening (Aadhaar, IDs, interview) takes 1–2 days. Background and reference checks add 3–7 days depending on previous employer responsiveness. Total: roughly a week from application to placement-ready.',
  },
  {
    question: 'Can families see the verification documents?',
    answer:
      'Yes. Aadhaar (masked), government ID, and a verification summary are shared with the family before placement. The full background check report is available on request and is shared securely.',
  },
  {
    question: 'What happens if a verified caregiver behaves inappropriately at the home?',
    answer:
      'Immediate replacement, no questions asked. The caregiver is removed from active placement and an internal review is conducted. If concerns are serious, they are removed from our network permanently and referenced if the police are involved.',
  },
  {
    question: 'Do you verify caregiver health every year?',
    answer:
      'Yes. Active caregivers re-submit Aadhaar, address proof and reference contacts annually. Health re-screening is triggered for caregivers placed on high-dependency care — bedridden, post-surgery, oncology — every 6 months.',
  },
  {
    question: 'Is the police verification done by you or by the police?',
    answer:
      'We use a regulated background-verification partner who runs police-record and database checks against the candidate’s declared addresses. For families who require a formal police-issued character certificate, we can support the application.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'How EzyHelpers Verifies Caregivers',
    url: `https://www.ezyhelpers.com${PATH}`,
    about: 'Caregiver verification, background screening, Aadhaar authentication',
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

export default function VerificationProcessView() {
  return (
    <CareSubpageShell
      currentLabel="Caregiver Verification"
      eyebrow="Trust · Bangalore"
      headlineLead="Six steps before"
      headlineAccent="anyone enters your home."
      lede="Aadhaar, ID, in-person interview, background check, condition-specific experience review, and a pre-placement health screening. Every caregiver. Every placement."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      {/* Direct answer */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-[#F2F7FB] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            Roughly <em className="italic text-care-500">one in four</em> applicants make it through.
            Aadhaar authentication, government IDs, in-person interview, background and reference checks,
            condition-specific experience review, and pre-placement health screening — non-negotiable, in
            that order. Verification documents are shared with the family before placement.
          </p>
        </div>
      </section>

      {/* Six steps */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="The screening steps"
            titleLead="Six checks,"
            titleMuted="every caregiver, no exceptions."
            lede="Each step is independent — failing any one removes the candidate. We don’t override on the basis of urgency; we’d rather take an extra day than place wrong."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map(({ n, icon: Icon, title, body, metric }) => (
              <article
                key={n}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-careSerif text-3xl font-medium text-care-500">{n}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-care-50 text-care-500 ring-1 ring-care-500/15">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                </div>
                <h3 className="mt-5 font-careSerif text-lg font-bold tracking-tight text-neutral-950 sm:text-xl">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{body}</p>
                <p className="mt-4 inline-flex w-fit rounded-full bg-neutral-900/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-700">
                  {metric}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What disqualifies */}
      <section className="bg-care-50 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Why we say no"
                titleLead="Eight things"
                titleMuted="that disqualify a candidate."
                lede="No matter how kind, capable, or in-need the candidate is, these are non-negotiable. Care placements affect families’ safety — there is no flexibility here."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {DISQUALIFIERS.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2 rounded-2xl border border-care-500/20 bg-white px-4 py-3.5"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-care-500/10 text-care-500">
                      <XMarkIcon className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="text-sm leading-snug text-neutral-800">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing oversight */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="After placement"
            titleLead="Verification doesn’t end"
            titleMuted="when the caregiver arrives."
            lede="Continuous oversight is how we catch the rare cases where things change after a strong start."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ONGOING.map((o) => (
              <div
                key={o.title}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-[#F7F7F2] p-6"
              >
                <h3 className="font-careSerif text-lg font-bold tracking-tight text-neutral-950">
                  {o.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="For the family"
            titleLead="What you receive"
            titleMuted="before placement begins."
            align="center"
          />
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              'Caregiver name, age, languages',
              'Masked Aadhaar copy',
              'Government ID copy',
              'Verification summary report',
              'Two reference contacts',
              'Stated experience timeline',
              'Photo + photograph match',
              'Health screening confirmation',
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5"
              >
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#1F8A4C]" aria-hidden />
                <span className="text-sm leading-snug text-neutral-800">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Verification, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Trust starts before the door opens."
        headlineAccent="Not after."
        body="Tell us about your situation. We’ll share verified caregiver shortlists with full documentation before any placement decision."
        enquirySource={PATH}
        related={[
          { label: 'Care Leadership', href: '/care-services/care-leadership' },
          { label: 'Caregiver Training', href: '/care-services/caregiver-training' },
          { label: 'All Care Services', href: '/care-services' },
        ]}
      />
    </CareSubpageShell>
  )
}
