import Link from 'next/link'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'

const PATH = '/care-services/care-glossary'

/* ──────────────────────────────────────────────────────────────────────────
 * Care Glossary
 * Six categories, ~50 terms. Each term is a {term, def, also?, links?}
 * record so the same data drives both the rendered <dl> and the JSON-LD
 * DefinedTermSet schema (LLM-friendly).
 * ────────────────────────────────────────────────────────────────────────── */

type Term = {
  /** Canonical term name */
  term: string
  /** Plain-English definition */
  def: string
  /** Also known as / synonyms */
  also?: string[]
  /** Optional internal link to a deeper page */
  link?: { label: string; href: string }
}

type Category = {
  id: string
  title: string
  blurb: string
  terms: Term[]
}

const CATEGORIES: Category[] = [
  {
    id: 'caregiver-roles',
    title: 'Caregiver roles & credentials',
    blurb: 'Who does what at home, and what the qualifications actually mean.',
    terms: [
      {
        term: 'GNM (General Nursing & Midwifery)',
        def: 'A 3-year diploma nursing qualification recognised across India. GNM nurses can administer injections, run IVs, dress wounds, and handle most clinical home-care tasks. The most common credential for home nurses in Bangalore.',
      },
      {
        term: 'B.Sc Nursing',
        def: 'A 4-year bachelor’s degree in nursing. More academically rigorous than GNM, with broader clinical exposure. Required for senior roles, ICU work, and supervisory positions.',
      },
      {
        term: 'ANM (Auxiliary Nurse Midwife)',
        def: 'A 2-year diploma focused primarily on community and maternal health. ANMs typically support GNM nurses rather than handling complex clinical care alone.',
      },
      {
        term: 'Trained attendant',
        def: 'A non-nursing caregiver trained in safe physical patient handling — transfers, repositioning, pressure-sore prevention, hygiene for bedridden patients. Right for high-dependency cases that aren’t medically complex.',
        link: { label: 'Trained Attendant Services', href: '/care-services/trained-attendant-services-bangalore' },
      },
      {
        term: 'Caretaker',
        def: 'A general-purpose caregiver focused on daily living — hygiene, meals, mobility, medication reminders, companionship. Cannot perform medical procedures.',
        also: ['Caregiver', 'Home aide'],
        link: { label: 'Caretaker Services', href: '/care-services/caretaker-services-bangalore' },
      },
      {
        term: 'Home nurse',
        def: 'A licensed nurse (GNM or B.Sc) placed at the home to deliver clinical care — wound dressing, IV therapy, vitals, catheter management. Distinct from a caretaker.',
        link: { label: 'Home Nursing Services', href: '/care-services/home-nursing-services-bangalore' },
      },
      {
        term: 'BLS / CPR certified',
        def: 'Basic Life Support / Cardio-Pulmonary Resuscitation training. A short certification covering chest compressions, airway management, and AED use. Standard for credible home nurses.',
      },
      {
        term: 'Critical-care nurse',
        def: 'A nurse with additional ICU-level training — ventilator handling, tracheostomy care, hemodynamic monitoring. The right level for very high-complexity home cases.',
      },
    ],
  },
  {
    id: 'care-types',
    title: 'Care types & arrangements',
    blurb: 'Different shapes of home care and what they actually deliver.',
    terms: [
      {
        term: 'Live-in care',
        def: 'A caregiver lives at the home 24×7 with one weekly off-day and a daily 2-hour rest period. Family provides meals and a bed. Best for alone-living seniors and high-dependency situations.',
        link: { label: 'Live-in vs day-shift', href: '/care-services/live-in-vs-day-shift-caregiver' },
      },
      {
        term: 'Day shift / night shift',
        def: 'A 12-hour caregiver shift either during the day or overnight. Lower cost than live-in when family covers the other half.',
      },
      {
        term: 'Visit-based nursing',
        def: 'A nurse visiting the home for specific clinical tasks (wound dressing, IV, port care) for 30–90 minutes, then leaving. Most cost-effective for stable patients with periodic clinical needs.',
      },
      {
        term: 'Domiciliary hospitalisation',
        def: 'An insurance-policy clause that lets you receive hospital-grade care at home if your condition would otherwise require admission. Most Indian health insurers offer it with conditions.',
        link: { label: 'Insurance & home care', href: '/care-services/insurance-and-home-care-bangalore' },
      },
      {
        term: 'Palliative care',
        def: 'Care focused on comfort, symptom relief and quality of life when curing the underlying disease isn’t the goal. Can be delivered at any stage of a serious illness, not only end-of-life.',
      },
      {
        term: 'Hospice care',
        def: 'A specific subset of palliative care for patients with a terminal prognosis (typically months, not years). End-of-life focused.',
      },
      {
        term: 'Respite care',
        def: 'Short-term professional care that gives the family caregiver a break — a few hours, a weekend, or a planned holiday. Prevents burnout in long primary-carer situations.',
      },
      {
        term: 'Step-down care',
        def: 'Care delivered after acute hospital treatment but before full recovery. Bridges hospital and full independence. Most post-surgery and post-stroke home care is step-down.',
      },
      {
        term: 'Convalescent care',
        def: 'Recovery-stage care for patients past the acute phase. Less intense than step-down, focused on rebuilding strength and routine.',
      },
    ],
  },
  {
    id: 'medical-conditions',
    title: 'Medical conditions & symptoms',
    blurb: 'Clinical terms that turn up in discharge summaries and consultant notes.',
    terms: [
      {
        term: 'Hemiplegia / hemiparesis',
        def: 'Weakness (paresis) or paralysis (plegia) on one side of the body, typically after a stroke. Affects safe transfers, balance and walking — needs experienced caregiver handling.',
        link: { label: 'Stroke care', href: '/care-services/stroke-care-at-home-bangalore' },
      },
      {
        term: 'Aphasia',
        def: 'Difficulty producing or understanding speech, often after a left-side stroke. The patient’s intelligence is intact — caregivers must adapt communication, not assume cognitive decline.',
      },
      {
        term: 'Dysphagia',
        def: 'Difficulty swallowing. Common after stroke, in advanced dementia, and in some cancers. Requires texture-modified food, upright posture during meals, and watching for aspiration.',
      },
      {
        term: 'Aspiration',
        def: 'Food, drink or saliva entering the lungs instead of the stomach. Causes aspiration pneumonia, a leading cause of death in dysphagia patients. Why upright feeding posture matters.',
      },
      {
        term: 'Sundowning',
        def: 'Late-afternoon and evening agitation, restlessness or paranoia in dementia patients. Managed with consistent lighting, calming routines and avoiding evening overstimulation.',
        link: { label: 'Dementia care', href: '/care-services/dementia-alzheimers-care-bangalore' },
      },
      {
        term: 'Pressure sore (decubitus ulcer / bedsore)',
        def: 'Skin and tissue damage caused by sustained pressure, typically over bony areas in bedridden patients. Staged 1 (red, intact skin) to 4 (deep tissue / bone exposure). Prevented by 2-hourly repositioning.',
        link: { label: 'Bedridden care', href: '/care-services/bedridden-patient-care-bangalore' },
      },
      {
        term: 'Contracture',
        def: 'Permanent shortening of muscle or tendon caused by lack of movement. Common in bedridden patients. Prevented by daily range-of-motion exercises.',
      },
      {
        term: 'TIA (transient ischemic attack)',
        def: 'A “mini-stroke” — stroke-like symptoms that resolve within 24 hours, usually within an hour. A warning sign that a major stroke may follow; treat as an emergency even if symptoms have passed.',
      },
      {
        term: 'DVT (deep vein thrombosis)',
        def: 'A blood clot in a deep leg vein, common after surgery or in bedridden patients. Sudden calf pain or swelling is a red flag — escalate to a doctor immediately.',
      },
      {
        term: 'Sepsis',
        def: 'A life-threatening infection-driven inflammatory response. Watch for: fever or low temperature, fast breathing, confusion, very low blood pressure. Requires hospital admission.',
      },
      {
        term: 'Foot drop',
        def: 'Inability to lift the front of the foot, causing it to drag during walking. Common after stroke or spinal injury. Splints and physiotherapy help.',
      },
      {
        term: 'Glasgow Coma Scale (GCS)',
        def: 'A 3–15 score measuring consciousness, used after head injuries and strokes. 15 is fully alert, 8 or below is severe impairment. You may see it on discharge summaries.',
      },
    ],
  },
  {
    id: 'procedures-equipment',
    title: 'Procedures & equipment',
    blurb: 'The clinical equipment and procedures families encounter at home.',
    terms: [
      {
        term: 'NG tube (nasogastric)',
        def: 'A thin tube passed through the nose into the stomach to deliver food, water and medication. Short-term solution (typically up to 4–6 weeks). Caregivers monitor the site; nurses change the tube.',
      },
      {
        term: 'PEG (Percutaneous Endoscopic Gastrostomy)',
        def: 'A feeding tube inserted directly through the abdominal wall into the stomach. Used when long-term feeding support is needed. Comfort and skin care around the site is daily caregiver work.',
      },
      {
        term: 'Foley catheter',
        def: 'A flexible tube inserted into the bladder to drain urine, held in place by a small balloon. Common after surgery, in bedridden patients, and in some neurological conditions. Bag emptying and hygiene are caregiver tasks; tube changes are nursing tasks.',
      },
      {
        term: 'IV (intravenous) line',
        def: 'A small tube inserted into a vein for delivering fluids, medication or nutrition directly into the bloodstream. IV insertion and management is a nursing-only task.',
      },
      {
        term: 'PICC line (peripherally inserted central catheter)',
        def: 'A long IV line typically inserted in the upper arm, threaded into a large central vein. Used for weeks-to-months of IV therapy (chemotherapy, long-course antibiotics). Requires careful site care.',
      },
      {
        term: 'Tracheostomy',
        def: 'A surgical opening in the front of the neck creating a direct airway. Used when prolonged ventilation or airway support is needed. Trach care, suctioning and emergency response training are mandatory for caregivers.',
      },
      {
        term: 'Suctioning',
        def: 'Using a small machine to clear secretions from the airway, especially for tracheostomy and bedridden patients with weak cough. Trained-attendant or nursing skill, not general caretaker.',
      },
      {
        term: 'BiPAP / CPAP',
        def: 'Bi-level / Continuous Positive Airway Pressure machines that support breathing, typically used overnight. Common for sleep apnea, COPD, and post-stroke breathing issues.',
      },
      {
        term: 'Pulse oximeter (SpO₂)',
        def: 'A small finger-clip device that measures blood oxygen saturation. Normal is 95–100%. Below 92% in a non-COPD patient is a flag.',
      },
      {
        term: 'Pressure-relief mattress',
        def: 'An alternating-pressure or foam mattress that redistributes weight to prevent pressure sores. Often essential for bedridden patients despite 2-hourly repositioning.',
      },
      {
        term: 'Patient hoist / lift',
        def: 'A mechanical or electric device for moving non-weight-bearing patients (between bed, wheelchair, commode). Reduces injury risk for both patient and caregiver.',
      },
      {
        term: 'Hospital bed',
        def: 'An adjustable bed with raised head/foot ends and side rails. Makes positioning, feeding, and care much easier for bedridden patients. Available for purchase or rent in Bangalore.',
      },
      {
        term: 'Range-of-motion (ROM) exercises',
        def: 'Gentle joint movements (active or passive) done daily to prevent contractures and maintain mobility. Caregivers do passive ROM 2–3 times daily for bedridden patients.',
      },
    ],
  },
  {
    id: 'hospital-insurance',
    title: 'Hospital & insurance terms',
    blurb: 'What you’ll see on discharge summaries, policy documents and TPA letters.',
    terms: [
      {
        term: 'Discharge summary',
        def: 'The hospital’s formal document at discharge, listing diagnosis, treatment, current medication, follow-up plan, and warning signs. The single most important document for setting up home care.',
        link: { label: 'Hospital discharge care', href: '/care-services/hospital-discharge-care-bangalore' },
      },
      {
        term: 'Pre-authorisation',
        def: 'Insurer approval obtained before a treatment or service starts. Required for cashless billing on hospital admission and most domiciliary hospitalisation claims.',
      },
      {
        term: 'TPA (Third Party Administrator)',
        def: 'A company that handles claim processing on behalf of an insurer — the body you actually communicate with for pre-auth, queries and reimbursement. MediAssist, Vidal Health, Health India are common Indian TPAs.',
      },
      {
        term: 'Cashless billing',
        def: 'A claim arrangement where the hospital or care provider bills the insurer directly, so the patient doesn’t pay out of pocket (subject to policy limits). Only works with empanelled providers.',
      },
      {
        term: 'Reimbursement',
        def: 'The patient pays first and submits documentation to the insurer for repayment, typically within 30–45 days. Used when the provider isn’t in the insurer’s network.',
      },
      {
        term: 'IPD vs OPD',
        def: 'Inpatient Department (admitted to hospital) vs Outpatient Department (consultation/treatment without admission). Most insurance plans cover IPD heavily and OPD lightly or not at all.',
      },
      {
        term: 'HDU (High-Dependency Unit)',
        def: 'A hospital ward between general care and ICU — for patients who need more monitoring than a regular ward but aren’t critical. Often where step-down care begins before discharge.',
      },
      {
        term: 'Sum insured',
        def: 'The maximum amount your health insurance policy pays in a year. Most home-care benefits are capped at a percentage of sum insured (typically 5–10%).',
      },
      {
        term: 'Empanelled provider',
        def: 'A hospital, nursing service or pharmacy that has a contractual cashless arrangement with an insurer or TPA. Always check this before assuming cashless billing will work.',
      },
    ],
  },
  {
    id: 'family-decision',
    title: 'Family decisions & care planning',
    blurb: 'The terms that come up when families plan care together.',
    terms: [
      {
        term: 'Family caregiver',
        def: 'An unpaid family member (spouse, adult child) acting as the primary carer. Often invisible in care plans but bearing the heaviest emotional load.',
      },
      {
        term: 'Caregiver burnout',
        def: 'Physical, emotional and mental exhaustion in long-term family caregivers. Signs include sleep changes, irritability, withdrawal, and resentment. Respite care is the standard intervention.',
      },
      {
        term: 'Care plan',
        def: 'A written document covering medication schedule, daily routine, warning signs, escalation contacts, and family preferences. We build one for every placement.',
      },
      {
        term: 'Activities of Daily Living (ADLs)',
        def: 'Six fundamental tasks: bathing, dressing, toileting, transferring, continence, eating. The standard framework for measuring whether someone can live independently.',
      },
      {
        term: 'Instrumental ADLs (IADLs)',
        def: 'Higher-order daily tasks: cooking, cleaning, finances, shopping, transportation, medication management. Decline in IADLs typically precedes decline in ADLs.',
      },
      {
        term: 'Power of Attorney (medical)',
        def: 'A legal document authorising another person to make medical decisions on the patient’s behalf if they become unable. Worth having before it’s urgently needed.',
      },
      {
        term: 'Advance directive',
        def: 'A document stating the patient’s wishes about future medical care — what treatments they would or wouldn’t want. Recognised in Indian medical practice though formal legal frameworks are still developing.',
      },
      {
        term: 'NRI family',
        def: 'A family with the patient in India and primary decision-makers abroad. Care coordination needs to be time-zone aware, with daily updates and clear escalation paths.',
        link: { label: 'NRI family care', href: '/care-services/nri-family-home-care-bangalore' },
      },
    ],
  },
]

/* Flatten for JSON-LD DefinedTermSet schema. */
const ALL_TERMS = CATEGORIES.flatMap((c) => c.terms)

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'EzyHelpers Home Care Glossary',
    description:
      'Plain-English definitions of home-care, nursing, condition, equipment, hospital and insurance terms commonly encountered by Indian families.',
    url: `https://www.ezyhelpers.com${PATH}`,
    hasDefinedTerm: ALL_TERMS.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.def,
      inDefinedTermSet: `https://www.ezyhelpers.com${PATH}`,
    })),
  },
] as const

export default function CareGlossaryView() {
  const totalTerms = ALL_TERMS.length

  return (
    <CareSubpageShell
      currentLabel="Care Glossary"
      eyebrow="Plain-English · Bangalore"
      headlineLead="Home care terms,"
      headlineAccent="explained simply."
      lede="Every term Indian families come across when arranging home care — from NG tubes and PEG to GNM nurses and TPAs — without the jargon."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{
        name: 'Sister Mary George',
        credential: 'B.Sc Nursing, Care Director',
        href: '/care-services/care-leadership',
      }}
      lastUpdated="May 2026"
    >
      {/* Direct answer */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-[#F2F7FB] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0074C8]">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            <em className="italic text-[#0074C8]">{totalTerms} terms</em>, six categories — caregiver roles
            and credentials, care types, medical conditions, procedures and equipment, hospital and
            insurance, and family decision-making. All defined in plain English, reviewed by a B.Sc Nursing
            Care Director, with links to deeper pages where useful.
          </p>
        </div>
      </section>

      {/* Category nav */}
      <section className="bg-white px-4 pb-4 pt-2 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Jump to</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-900 hover:bg-neutral-50"
                >
                  {c.title}
                  <span className="ml-2 text-[11px] font-medium text-neutral-400">{c.terms.length}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Categories */}
      {CATEGORIES.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F7F7F2]'}`}
        >
          <div className="mx-auto max-w-5xl">
            <SectionHeader eyebrow={`Category ${String(idx + 1).padStart(2, '0')}`} titleLead={cat.title} lede={cat.blurb} />

            <dl className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {cat.terms.map((t) => (
                <div
                  key={t.term}
                  className="flex h-full flex-col rounded-[20px] border border-neutral-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
                >
                  <dt className="font-careSerif text-lg font-bold tracking-tight text-neutral-950 sm:text-xl">
                    {t.term}
                  </dt>
                  {t.also && t.also.length > 0 ? (
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      Also: {t.also.join(' · ')}
                    </p>
                  ) : null}
                  <dd className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">{t.def}</dd>
                  {t.link ? (
                    <Link
                      href={t.link.href}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#FF385C] hover:underline underline-offset-4"
                    >
                      {t.link.label} →
                    </Link>
                  ) : null}
                </div>
              ))}
            </dl>
          </div>
        </section>
      ))}

      {/* Back-to-top + footnote */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-neutral-500">
            Don’t see a term? Tell us — we’ll add it. The glossary is reviewed and expanded every quarter
            by our Care Director.
          </p>
          <div className="mt-6">
            <a
              href="#caregiver-roles"
              className="inline-flex items-center gap-1 text-sm font-semibold text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-700"
            >
              Back to top
            </a>
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Now that the words make sense,"
        headlineAccent="let’s talk about your situation."
        body="Tell us what you need. The terms above will help — but a 5-minute call with a care advisor will help more."
        enquirySource={PATH}
        related={[
          { label: 'Care Quiz', href: '/care-services/care-quiz' },
          { label: 'Cost Calculator', href: '/care-services/cost-calculator' },
          { label: 'Cost Guide', href: '/care-services/home-nursing-cost-bangalore' },
          { label: 'All Care Services', href: '/care-services' },
        ]}
      />
    </CareSubpageShell>
  )
}
