import {
  CheckIcon,
  XMarkIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'

const PATH = '/care-services/insurance-and-home-care-bangalore'

const INSURERS = [
  {
    name: 'Niva Bupa (formerly Max Bupa)',
    coverage: 'Home nursing under Domiciliary Hospitalisation in select plans (ReAssure, Health Companion). Typically 5–10% of sum insured per year.',
    notes: 'Pre-authorisation required. Doctor must certify hospitalisation would otherwise be needed.',
    rating: 'Strong',
  },
  {
    name: 'Star Health',
    coverage: 'Home Care benefit in Senior Citizens Red Carpet, Family Health Optima, and Star Health Comprehensive — daily limits apply.',
    notes: 'Often capped at ₹3,000–₹5,000/day. Pre-authorisation mandatory.',
    rating: 'Moderate',
  },
  {
    name: 'Aditya Birla Health',
    coverage: 'Activ Assure, Activ Health Platinum include domiciliary hospitalisation and limited home nursing.',
    notes: 'Conditions: continuous treatment for at least 3 days, doctor certification.',
    rating: 'Moderate',
  },
  {
    name: 'HDFC Ergo',
    coverage: 'Optima Restore, my:health Suraksha plans cover home healthcare with conditions.',
    notes: 'Network providers preferred for cashless. Reimbursement otherwise.',
    rating: 'Moderate',
  },
  {
    name: 'ICICI Lombard',
    coverage: 'Complete Health Insurance includes domiciliary hospitalisation under specific clauses.',
    notes: 'Daily caps; requires hospitalisation alternative justification.',
    rating: 'Limited',
  },
  {
    name: 'Bajaj Allianz',
    coverage: 'Health Guard plan covers domiciliary in some variants.',
    notes: 'Most plans require hospitalisation; home nursing only in upgraded variants.',
    rating: 'Limited',
  },
] as const

const RATING_CLASS: Record<(typeof INSURERS)[number]['rating'], string> = {
  Strong: 'bg-[#1F8A4C]/10 text-[#1F8A4C]',
  Moderate: 'bg-[#B97A1F]/10 text-[#B97A1F]',
  Limited: 'bg-neutral-100 text-neutral-600',
}

const COVERED = [
  'Skilled nursing care prescribed by a doctor',
  'IV therapy at home (with prescription)',
  'Wound dressing post-surgery',
  'Catheter care, tube feeding under nurse',
  'Tracheostomy care under nurse',
  'Post-operative recovery requiring nursing oversight',
] as const

const NOT_COVERED = [
  'General caretaker / companion services',
  'Personal care (bathing, hygiene, feeding)',
  'Help for elderly without active medical need',
  'Long-term live-in arrangements (>30 days, in most plans)',
  'Trained attendant work (physical handling)',
  'Companionship and supervision-only services',
] as const

const STEPS = [
  {
    n: '1',
    title: 'Doctor’s certification',
    body: 'Get a written prescription from the treating doctor stating that home nursing is medically necessary as an alternative to continued hospitalisation.',
  },
  {
    n: '2',
    title: 'Pre-authorisation',
    body: 'Submit the prescription, hospital discharge summary, and treatment plan to the insurer. Approval typically takes 24–48 hours.',
  },
  {
    n: '3',
    title: 'Use a network provider (if available)',
    body: 'Cashless claims work only with empanelled providers. For non-network arrangements, you pay first and claim reimbursement later.',
  },
  {
    n: '4',
    title: 'Maintain documentation',
    body: 'Daily nursing log, medication records, treatment notes — all needed at claim submission. Without these, claims are routinely rejected.',
  },
] as const

const FAQS = [
  {
    question: 'Will my health insurance cover a home caretaker?',
    answer:
      'Almost certainly not. Indian health insurance covers medical/nursing care, not personal care. A "home caretaker" providing hygiene, meals, mobility, and companionship is considered non-medical and isn’t reimbursable. A home nurse providing IV, wound care, or post-surgical monitoring under doctor’s prescription often is.',
  },
  {
    question: 'What is "domiciliary hospitalisation" in my policy?',
    answer:
      'It’s a clause that lets you receive hospital-grade care at home if your condition would otherwise require admission. Most plans have it but with conditions: doctor certification, minimum continuous treatment period (often 3 days), and pre-authorisation. The benefit is usually a fraction of the sum insured.',
  },
  {
    question: 'Is cashless billing available for home nursing?',
    answer:
      'Only if EzyHelpers (or your nursing provider) is empanelled with your insurer’s network. We can check. Otherwise, you pay first and claim reimbursement — claim approval typically takes 30–45 days.',
  },
  {
    question: 'How much does insurance typically cover for home nursing?',
    answer:
      'Highly plan-dependent. Most plans cap home nursing at 5–10% of the total sum insured per year, or apply daily limits (₹2,000–₹5,000/day). For long-term placements (3+ months), expect that insurance covers a meaningful portion but not all.',
  },
  {
    question: 'Can I claim for a stroke or post-surgery placement?',
    answer:
      'Often yes — these are clear medical needs. The placement must include skilled nursing tasks (vitals, wound care, medication administration), be prescribed by a doctor, and be documented daily. Companionship-only post-stroke placements typically aren’t covered.',
  },
  {
    question: 'Will EzyHelpers help me with the claim paperwork?',
    answer:
      'Yes. We provide daily nursing logs, treatment summaries, and prescription copies on request — the documentation insurers ask for. We don’t directly handle claim filing but can guide you to a TPA or insurance advisor who does.',
  },
  {
    question: 'Are there any insurers that cover non-medical home care?',
    answer:
      'Almost none in standard Indian health insurance. Some senior-specific top-up plans (e.g. specific Star Senior variants, certain corporate group plans) include limited home care benefits — read the wordings carefully or have us review with your TPA.',
  },
] as const

const JSONLD = [
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

export default function InsuranceHomeCareView() {
  return (
    <CareSubpageShell
      currentLabel="Insurance & Home Care"
      eyebrow="Bangalore · Insurance guide"
      headlineLead="Will your insurance"
      headlineAccent="cover home care?"
      lede="An honest guide to how major Indian health insurers handle home nursing — what qualifies, what doesn’t, and how to claim without surprises."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-[#F1F6F0] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1F8A4C]">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            Indian health insurance typically covers <em className="italic text-[#1F8A4C]">skilled home nursing</em>{' '}
            — IV, wound care, post-surgical monitoring — under "domiciliary hospitalisation" clauses, with
            doctor certification and pre-authorisation. It almost never covers caretaker or companion
            services. The amount varies by plan, often 5–10% of sum insured per year.
          </p>
        </div>
      </section>

      {/* Insurer-by-insurer */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Major insurers"
            titleLead="What each insurer"
            titleMuted="actually covers."
            lede="Plan-level details vary. Read your specific policy wordings or call your TPA — but this is roughly where each company stands."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {INSURERS.map((i) => (
              <article
                key={i.name}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-careSerif text-lg font-bold tracking-tight text-neutral-950 sm:text-xl">
                    {i.name}
                  </h3>
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${RATING_CLASS[i.rating]}`}>
                    {i.rating} cover
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-700 sm:text-base">{i.coverage}</p>
                <p className="mt-3 text-xs italic text-neutral-500">{i.notes}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Covered vs not */}
      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="What qualifies"
            titleLead="Insurance covers care that is"
            titleMuted="medical, prescribed, and documented."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[24px] border border-neutral-200 bg-[#F1F6F0] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1F8A4C]">Typically covered</p>
              <h3 className="mt-3 font-careSerif text-xl font-bold text-neutral-950 sm:text-2xl">
                Skilled nursing tasks
              </h3>
              <ul className="mt-5 space-y-2.5">
                {COVERED.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-neutral-800">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#1F8A4C]" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] border border-neutral-200 bg-primary-50 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">Typically not covered</p>
              <h3 className="mt-3 font-careSerif text-xl font-bold text-neutral-950 sm:text-2xl">
                Personal care services
              </h3>
              <ul className="mt-5 space-y-2.5">
                {NOT_COVERED.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-neutral-800">
                    <XMarkIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Claim steps */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="How to claim"
            titleLead="Four steps,"
            titleMuted="in order."
            lede="Skip any of these and the claim is likely to be rejected. The order matters too."
          />
          <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <li
                key={s.n}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-[#F7F7F2] p-6"
              >
                <span className="font-careSerif text-3xl font-medium text-primary-500">{s.n}</span>
                <h3 className="mt-3 font-careSerif text-lg font-bold tracking-tight text-neutral-950">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Insurance, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Insurance, with the right paperwork."
        headlineAccent="And no surprises."
        body="Tell us your insurer and the situation. We’ll let you know what’s likely to be covered, what isn’t, and provide the documentation you need to claim cleanly."
        enquirySource={PATH}
        related={[
          { label: 'Home Nursing', href: '/care-services/home-nursing-services-bangalore' },
          { label: 'Cost guide', href: '/care-services/home-nursing-cost-bangalore' },
          { label: 'Hospital Discharge Care', href: '/care-services/hospital-discharge-care-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
