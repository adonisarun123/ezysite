import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'
import {
  PhoneIcon,
  ArrowRightIcon,
  ArrowLongRightIcon,
  CheckIcon,
  HeartIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  HomeModernIcon,
  ArrowDownIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import { CARE_NAV_CLUSTERS, CARE_ENQUIRY_HREF } from '@/lib/careServices/registry'

/* ───────────────────────────────────────────────────────────────────────────
 * /care-services — top-level Bangalore care landing
 * Aesthetic: Apple product-page DNA (huge serif type, generous whitespace,
 * deep black canvas sections punctuated by light pastel showcases) tied to
 * the EzyHelpers care palette (Fraunces serif, Plus Jakarta UI, #FF385C accent).
 * ─────────────────────────────────────────────────────────────────────────── */

const CARE_PHONE_DISPLAY = '080-31411776'
const CARE_PHONE_HREF = 'tel:+918031411776'

type ServiceShowcase = {
  slug: string
  eyebrow: string
  title: string
  oneLiner: string
  description: string
  bullets: string[]
  startingFrom?: string
  href: string
  /** tone defines the section background palette */
  tone:
    | 'pearl' // healthcare — soft sky/teal
    | 'stone' // nursing — graphite + cream
    | 'rose' // elderly — warm peach/rose
    | 'sage' // caretaker — fresh sage
    | 'sand' // patient care — warm sand
    | 'lilac' // home attendant — cool lavender
    | 'ink' // trained attendant — deep ink
}

const SERVICES: ServiceShowcase[] = [
  {
    slug: 'home-healthcare',
    eyebrow: 'Healthcare at home',
    title: 'Home Healthcare Services',
    oneLiner: 'Hospital-grade care, kept beautifully at home.',
    description:
      'For patients who need both medical procedures and daily support — a coordinated team of nurse and caretaker, working in step with your doctor’s plan.',
    bullets: [
      'Doctor-aligned care plan',
      'Nurse + caretaker, one team',
      'Wounds · IV · vitals · medication',
      'Hygiene · feeding · mobility',
      'Daily family updates',
    ],
    startingFrom: 'Long-term placements from ₹18,000/mo',
    href: '/care-services/home-healthcare-services-bangalore',
    tone: 'pearl',
  },
  {
    slug: 'home-nursing',
    eyebrow: 'Medical procedures',
    title: 'Home Nursing Services',
    oneLiner: 'Procedural medical care, performed at home with discipline.',
    description:
      'Credential-checked nurses who handle wound dressing, IV therapy, catheter management, vitals and post-surgical monitoring — with detailed daily logs and doctor handoffs.',
    bullets: [
      'GNM / B.Sc Nursing verified',
      'Wound · IV · catheter discipline',
      'BP · SpO₂ · glucose monitoring',
      'Daily clinical log + doctor handoff',
      'Single shift to extended cover',
    ],
    startingFrom: 'Visits from ₹600 · 12-hour shifts available',
    href: '/care-services/home-nursing-services-bangalore',
    tone: 'stone',
  },
  {
    slug: 'elderly-care',
    eyebrow: 'For ageing parents',
    title: 'Elderly Care Services',
    oneLiner: 'Dignity-first companionship for the people who raised us.',
    description:
      'Live-in or shift-based seniors care — built around routines, mobility, dementia and Parkinson’s, with caregivers chosen for warmth as much as competence.',
    bullets: [
      'Dementia & Parkinson’s familiarity',
      'Routine, mobility & medication',
      'Companionship and meals together',
      'Doctor visits & pharmacy runs',
      'Live-in or 12-hour shifts',
    ],
    startingFrom: 'Live-in placements from ₹22,000/mo',
    href: '/care-services/elderly-care-services-bangalore',
    tone: 'rose',
  },
  {
    slug: 'caretaker',
    eyebrow: 'Daily personal care',
    title: 'Caretaker Services',
    oneLiner: 'A verified, full-time caretaker — matched, not assigned.',
    description:
      'General-purpose caretakers for daily personal care, medication reminders and companionship. Day, night or live-in arrangements that fit your family.',
    bullets: [
      'Hygiene · grooming · feeding',
      'Safe transfers and mobility',
      'Medication reminders',
      'Day · night · live-in shifts',
      'Replacement guarantee',
    ],
    startingFrom: 'Live-in placements from ₹18,000/mo',
    href: '/care-services/caretaker-services-bangalore',
    tone: 'sage',
  },
  {
    slug: 'patient-care',
    eyebrow: 'Recovery & treatment',
    title: 'Patient Care Services',
    oneLiner: 'For the months that follow a surgery or a diagnosis.',
    description:
      'Post-operative, oncology and chronic-condition care at home — with caregivers who have managed your specific recovery before, not just any recovery.',
    bullets: [
      'Post-surgical recovery management',
      'Cardiac, oncology, dialysis support',
      'Nutrition, mobility and therapy aid',
      'Symptom watch & escalation',
      'Family dashboard updates',
    ],
    startingFrom: 'Custom plans, scoped per diagnosis',
    href: '/care-services/patient-care-services-bangalore',
    tone: 'sand',
  },
  {
    slug: 'home-attendant',
    eyebrow: 'Shift-based support',
    title: 'Home Attendant Services',
    oneLiner: 'Day, night, full-time or live-in — flexibility, on your terms.',
    description:
      'Reliable attendants for routine daily support, hygiene assistance and overnight presence. Built for households that need flexible, dependable cover.',
    bullets: [
      'Day · night · 24-hour cover',
      'Personal care & hygiene support',
      'Light household assistance',
      'Reliable shift handovers',
      'Same-day placement attempts',
    ],
    startingFrom: '12-hour shifts from ₹900/day',
    href: '/care-services/home-attendant-services-bangalore',
    tone: 'lilac',
  },
  {
    slug: 'trained-attendant',
    eyebrow: 'High-dependency care',
    title: 'Trained Attendant Services',
    oneLiner: 'For bedridden, post-spinal and neurological care.',
    description:
      'Skilled attendants trained in safe physical handling — transfers, repositioning, pressure-sore prevention, and the calm patience that high-dependency care requires.',
    bullets: [
      'Bedridden patient management',
      'Pressure-sore prevention protocol',
      'Safe transfers & repositioning',
      'Catheter & feeding-tube comfort',
      'Neuro & post-spinal experience',
    ],
    startingFrom: 'Live-in placements from ₹24,000/mo',
    href: '/care-services/trained-attendant-services-bangalore',
    tone: 'ink',
  },
]

const TRUST_METRICS = [
  { num: '10,000+', label: 'Families served across India' },
  { num: '16+', label: 'Bangalore localities covered' },
  { num: '24–48 hr', label: 'Typical placement window' },
  { num: '100%', label: 'Verified, screened, briefed' },
] as const

const HERO_PROOF = [
  { icon: ShieldCheckIcon, title: 'Aadhaar-verified', sub: 'background-checked' },
  { icon: AcademicCapIcon, title: 'Credentialed', sub: 'GNM / B.Sc / trained' },
  { icon: ClockIcon, title: 'Same-day attempts', sub: 'when discharge can’t wait' },
  { icon: HeartIcon, title: 'Free replacement', sub: 'if the match isn’t right' },
] as const

const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Free consultation',
    body: 'A 15-minute call to understand the patient, the condition and what matters most to your family.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    n: '02',
    title: 'Curated shortlist',
    body: 'Two or three caregivers matched to your specific situation — not whoever is free nearest.',
    icon: UserGroupIcon,
  },
  {
    n: '03',
    title: 'Interview & match',
    body: 'You meet shortlisted caregivers before confirming. Continue searching if none feel right.',
    icon: SparklesIcon,
  },
  {
    n: '04',
    title: 'Onboard & support',
    body: 'We brief the caregiver, follow up in week one, and stay reachable for adjustments or replacements.',
    icon: HomeModernIcon,
  },
] as const

const CONDITIONS = [
  'Post-surgical recovery',
  'Stroke rehabilitation',
  'Alzheimer’s & dementia',
  'Parkinson’s disease',
  'Bedridden patient care',
  'Cardiac monitoring',
  'Chronic kidney disease',
  'Orthopaedic recovery',
  'Cancer comfort care',
  'COPD & respiratory',
  'Diabetes daily care',
  'Spinal-injury recovery',
] as const

const LOCALITIES = [
  'Whitefield',
  'HSR Layout',
  'Koramangala',
  'Indiranagar',
  'Jayanagar',
  'JP Nagar',
  'Banashankari',
  'Electronic City',
  'Hebbal',
  'Yelahanka',
  'Marathahalli',
  'Sarjapur Road',
  'Bannerghatta Road',
  'Rajajinagar',
  'Malleswaram',
  'RT Nagar',
] as const

const TESTIMONIALS = [
  {
    quote:
      'My mother has Type 2 diabetes with early-stage kidney disease. The home care professional EzyHelpers placed had worked with diabetic-kidney patients before. In eight months: zero hospital readmissions.',
    name: 'Kiran Reddy',
    place: 'Electronic City, Bangalore',
  },
  {
    quote:
      'We are an NRI family in Canada. The caregiver sends a detailed update every evening, handles all doctor appointments, and has built a genuine relationship with both our parents. Peace of mind from 12,000 km away.',
    name: 'Arun Sharma',
    place: 'Parents in Koramangala',
  },
  {
    quote:
      'My husband had bypass surgery. EzyHelpers matched us with a caregiver who had worked specifically in post-cardiac recovery. She was a calm, steady presence through a frightening period.',
    name: 'Sunita Narayanan',
    place: 'Indiranagar, Bangalore',
  },
] as const

const FAQ_ITEMS = [
  {
    question: 'Which care service is right for my family?',
    answer:
      'If your loved one needs medical procedures (wounds, IV, catheter), choose Home Nursing. For both medical and daily care, choose Home Healthcare. For age-related daily support, choose Elderly Care. For a bedridden or high-dependency patient, choose Trained Attendant. If you’re unsure, call us — we’ll guide you in a 5-minute conversation.',
  },
  {
    question: 'What’s the difference between a nurse, a caretaker and an attendant?',
    answer:
      'A nurse is medically trained and handles procedures. A caretaker provides general daily support — hygiene, feeding, mobility, companionship. An attendant focuses on physical handling — repositioning, transfers, mobility. Many families need a combination, which we coordinate.',
  },
  {
    question: 'Can I combine multiple care types — for example, a nurse and a caretaker?',
    answer:
      'Yes. This is a common arrangement. The nurse handles medical tasks while the caretaker manages daily personal care. We coordinate both placements and ensure the handover and communication work smoothly.',
  },
  {
    question: 'How quickly can you place a caregiver?',
    answer:
      'For most areas in Bangalore, we attempt same-day placement when a suitable professional is available. For urgent situations like hospital discharge, we prioritise. If precise matching takes longer, we keep you informed and aim to place within 24–48 hours.',
  },
  {
    question: 'Are your caregivers verified?',
    answer:
      'Every caregiver is verified through Aadhaar authentication, government ID validation, in-person interview and background checks. For nurses, we additionally verify nursing qualifications. For trained attendants, we verify hands-on skill in patient handling.',
  },
  {
    question: 'What if the placement isn’t working?',
    answer:
      'We offer free replacements. If the caregiver isn’t the right fit for any reason — comfort, communication or care approach — let us know and we begin finding a better match. There’s no requirement to justify the request.',
  },
  {
    question: 'Is care available across all of Bangalore?',
    answer:
      'We currently serve 16+ Bangalore localities including Whitefield, HSR Layout, Koramangala, Indiranagar, Jayanagar, JP Nagar, Hebbal, Sarjapur Road and Electronic City. Call us to confirm coverage in your specific area.',
  },
] as const

/* ───────── tone-driven section styling ───────── */
type Tone = ServiceShowcase['tone']

const TONE_STYLES: Record<
  Tone,
  {
    section: string
    eyebrow: string
    title: string
    body: string
    accent: string
    chip: string
    chipBorder: string
    cta: string
    artGrad: string
    artHalo: string
    bigGlyph: string
    iconCircle: string
    iconColor: string
  }
> = {
  pearl: {
    section: 'bg-[#F2F7FB] text-neutral-950',
    eyebrow: 'text-[#0074C8]',
    title: 'text-neutral-950',
    body: 'text-neutral-700',
    accent: 'text-[#0074C8]',
    chip: 'bg-white text-neutral-900',
    chipBorder: 'border-neutral-200',
    cta: 'bg-neutral-900 text-white hover:bg-black',
    artGrad: 'from-[#D6E8F4] via-[#E8F2F8] to-[#F2F7FB]',
    artHalo: 'bg-[#9EC8E5]/35',
    bigGlyph: 'text-[#0074C8]/15',
    iconCircle: 'bg-white border border-[#0074C8]/20',
    iconColor: 'text-[#0074C8]',
  },
  stone: {
    section: 'bg-[#0E0F12] text-white',
    eyebrow: 'text-[#FF7D5C]',
    title: 'text-white',
    body: 'text-white/70',
    accent: 'text-[#FF7D5C]',
    chip: 'bg-white/[0.06] text-white',
    chipBorder: 'border-white/10',
    cta: 'bg-white text-neutral-900 hover:bg-neutral-100',
    artGrad: 'from-[#1E2026] via-[#16181D] to-[#0E0F12]',
    artHalo: 'bg-[#FF7D5C]/20',
    bigGlyph: 'text-white/[0.05]',
    iconCircle: 'bg-white/[0.08] border border-white/10',
    iconColor: 'text-[#FF7D5C]',
  },
  rose: {
    section: 'bg-[#FBF3F1] text-neutral-950',
    eyebrow: 'text-[#FF385C]',
    title: 'text-neutral-950',
    body: 'text-neutral-700',
    accent: 'text-[#FF385C]',
    chip: 'bg-white text-neutral-900',
    chipBorder: 'border-neutral-200',
    cta: 'bg-[#FF385C] text-white hover:bg-[#E31C5F]',
    artGrad: 'from-[#FFE2D6] via-[#FFD0C2] to-[#FBC0AE]',
    artHalo: 'bg-[#FF385C]/25',
    bigGlyph: 'text-[#FF385C]/15',
    iconCircle: 'bg-white border border-[#FF385C]/20',
    iconColor: 'text-[#FF385C]',
  },
  sage: {
    section: 'bg-[#F1F6F0] text-neutral-950',
    eyebrow: 'text-[#1F8A4C]',
    title: 'text-neutral-950',
    body: 'text-neutral-700',
    accent: 'text-[#1F8A4C]',
    chip: 'bg-white text-neutral-900',
    chipBorder: 'border-neutral-200',
    cta: 'bg-neutral-900 text-white hover:bg-black',
    artGrad: 'from-[#D9EDDF] via-[#C4E0CC] to-[#A9D4B6]',
    artHalo: 'bg-[#1F8A4C]/25',
    bigGlyph: 'text-[#1F8A4C]/15',
    iconCircle: 'bg-white border border-[#1F8A4C]/20',
    iconColor: 'text-[#1F8A4C]',
  },
  sand: {
    section: 'bg-[#FAF6EE] text-neutral-950',
    eyebrow: 'text-[#B97A1F]',
    title: 'text-neutral-950',
    body: 'text-neutral-700',
    accent: 'text-[#B97A1F]',
    chip: 'bg-white text-neutral-900',
    chipBorder: 'border-neutral-200',
    cta: 'bg-neutral-900 text-white hover:bg-black',
    artGrad: 'from-[#F4E5C8] via-[#EFD8A8] to-[#E5C68A]',
    artHalo: 'bg-[#B97A1F]/25',
    bigGlyph: 'text-[#B97A1F]/15',
    iconCircle: 'bg-white border border-[#B97A1F]/20',
    iconColor: 'text-[#B97A1F]',
  },
  lilac: {
    section: 'bg-[#F4F1FB] text-neutral-950',
    eyebrow: 'text-[#6B4FBE]',
    title: 'text-neutral-950',
    body: 'text-neutral-700',
    accent: 'text-[#6B4FBE]',
    chip: 'bg-white text-neutral-900',
    chipBorder: 'border-neutral-200',
    cta: 'bg-neutral-900 text-white hover:bg-black',
    artGrad: 'from-[#E2D9F4] via-[#D1C4ED] to-[#B9A8E0]',
    artHalo: 'bg-[#6B4FBE]/25',
    bigGlyph: 'text-[#6B4FBE]/15',
    iconCircle: 'bg-white border border-[#6B4FBE]/20',
    iconColor: 'text-[#6B4FBE]',
  },
  ink: {
    section: 'bg-[#0B0B0F] text-white',
    eyebrow: 'text-[#5EE0FF]',
    title: 'text-white',
    body: 'text-white/70',
    accent: 'text-[#5EE0FF]',
    chip: 'bg-white/[0.06] text-white',
    chipBorder: 'border-white/10',
    cta: 'bg-white text-neutral-900 hover:bg-neutral-100',
    artGrad: 'from-[#181A22] via-[#11131A] to-[#0B0B0F]',
    artHalo: 'bg-[#5EE0FF]/20',
    bigGlyph: 'text-white/[0.05]',
    iconCircle: 'bg-white/[0.08] border border-white/10',
    iconColor: 'text-[#5EE0FF]',
  },
}

/* ─── per-service big background glyph (kept simple, line-art, Apple-y) ─── */
function ServiceArt({ slug }: { slug: ServiceShowcase['slug'] }) {
  const common = 'h-full w-full'
  switch (slug) {
    case 'home-healthcare':
      return (
        <svg viewBox="0 0 200 200" className={common} aria-hidden>
          <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M100 64v72M64 100h72" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 6" />
        </svg>
      )
    case 'home-nursing':
      return (
        <svg viewBox="0 0 200 200" className={common} aria-hidden>
          <path
            d="M30 110q40 -60 70 0 t70 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 130q40 -50 80 0 t80 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.55"
          />
          <circle cx="100" cy="60" r="6" fill="currentColor" />
        </svg>
      )
    case 'elderly-care':
      return (
        <svg viewBox="0 0 200 200" className={common} aria-hidden>
          <path
            d="M100 30 C 60 70, 60 130, 100 170 C 140 130, 140 70, 100 30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M100 60 C 80 90, 80 110, 100 140" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="100" cy="100" r="4" fill="currentColor" />
        </svg>
      )
    case 'caretaker':
      return (
        <svg viewBox="0 0 200 200" className={common} aria-hidden>
          <circle cx="100" cy="80" r="22" fill="none" stroke="currentColor" strokeWidth="2" />
          <path
            d="M55 160 C 60 120, 140 120, 145 160"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M70 105 q30 -25 60 0" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
        </svg>
      )
    case 'patient-care':
      return (
        <svg viewBox="0 0 200 200" className={common} aria-hidden>
          <rect x="35" y="80" width="130" height="60" rx="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M35 110h130" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="65" cy="70" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M40 140v20M160 140v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'home-attendant':
      return (
        <svg viewBox="0 0 200 200" className={common} aria-hidden>
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M100 50v50l34 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
          <circle cx="100" cy="100" r="4" fill="currentColor" />
        </svg>
      )
    case 'trained-attendant':
      return (
        <svg viewBox="0 0 200 200" className={common} aria-hidden>
          <path
            d="M40 60 q60 -30 120 0 v80 q-60 30 -120 0 z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M70 110h60M70 130h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="100" cy="80" r="6" fill="currentColor" />
        </svg>
      )
  }
}

/* ─────────────────────────── view ─────────────────────────── */
export default function CareServicesHomeView() {
  const enquiryHref = `${CARE_ENQUIRY_HREF}?source=${encodeURIComponent('/care-services')}`

  return (
    <div className="min-h-screen bg-white font-careUi text-neutral-900 antialiased">
      <Navbar />

      <div className="relative z-30 border-b border-neutral-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <Breadcrumb
            variant="minimal"
            separator="chevron"
            items={[{ label: 'Home', href: '/' }, { label: 'Care Services' }]}
          />
        </div>
      </div>

      {/* ─────────────────── Hero ─────────────────── */}
      <header className="relative overflow-hidden bg-white">
        {/* subtle radial backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,56,92,0.06) 0%, rgba(255,255,255,0) 60%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-12 text-center sm:px-6 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24">
          <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-neutral-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <MapPinIcon className="h-3.5 w-3.5 text-[#FF385C]" aria-hidden />
            Now serving Bangalore
          </p>

          <h1 className="mx-auto mt-7 max-w-5xl font-careSerif text-[clamp(2.6rem,7vw,5.75rem)] font-medium leading-[1.02] tracking-[-0.035em] text-neutral-950">
            Care, brought home.
            <br />
            <span className="text-neutral-400">Quietly. Carefully.</span>{' '}
            <em className="font-careSerif font-normal italic text-[#FF385C]">By design.</em>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-600 sm:text-xl">
            One platform for every kind of home care in Bangalore — verified nurses, caretakers and
            attendants, matched to your family. Not assigned, matched.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={enquiryHref}
              className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-neutral-900 px-7 py-4 text-[15px] font-semibold text-white shadow-[0_2px_10px_rgba(0,0,0,0.18)] transition hover:bg-black hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] active:scale-[0.98]"
            >
              Find the right caregiver
              <ArrowRightIcon className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href={CARE_PHONE_HREF}
              className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-4 text-[15px] font-semibold text-neutral-900 shadow-sm transition hover:border-neutral-900 hover:bg-neutral-50"
            >
              <PhoneIcon className="h-4 w-4" aria-hidden />
              {CARE_PHONE_DISPLAY}
            </a>
          </div>

          <a
            href="#services"
            className="mt-8 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 transition hover:text-neutral-900"
          >
            Explore the seven services
            <ArrowDownIcon className="h-3.5 w-3.5" aria-hidden />
          </a>

          {/* Hero proof tiles */}
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-4">
            {HERO_PROOF.map(({ icon: Icon, title, sub }) => (
              <div
                key={title}
                className="flex flex-col items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-5 text-left shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-white">
                  <Icon className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <div>
                  <strong className="block text-sm font-bold text-neutral-950">{title}</strong>
                  <span className="text-xs text-neutral-500">{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* ─────────────── Trust strip ─────────────── */}
        <section aria-labelledby="trust" className="border-y border-neutral-200 bg-white">
          <h2 id="trust" className="sr-only">
            By the numbers
          </h2>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-neutral-200 sm:grid-cols-4">
            {TRUST_METRICS.map((m) => (
              <div key={m.label} className="bg-white px-6 py-8 text-center sm:py-10">
                <div className="font-careSerif text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                  {m.num}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-500">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────── Index of services ─────────────── */}
        <section id="services" className="scroll-mt-28 bg-white px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF385C]">
                Seven services. One standard.
              </p>
              <h2 className="mt-4 font-careSerif text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                Choose the right kind of care.
                <br />
                <span className="text-neutral-400">We’ll match the right person to it.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
                Every family arrives looking for something specific — a nurse for wound care, a caretaker
                for a parent, an attendant for a bedridden patient. We help you choose, then match.
              </p>
            </div>

            {/* index cards — quick jump */}
            <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="group flex items-start justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-neutral-900 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                >
                  <div className="min-w-0">
                    <span className="font-careSerif text-sm font-medium text-neutral-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-1 font-careSerif text-lg font-bold leading-tight tracking-tight text-neutral-950 sm:text-xl">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">{s.oneLiner}</p>
                  </div>
                  <ArrowLongRightIcon
                    className="mt-1 h-5 w-5 shrink-0 text-neutral-400 transition group-hover:translate-x-1 group-hover:text-neutral-900"
                    aria-hidden
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── Service showcases ─────────────── */}
        {SERVICES.map((s, idx) => {
          const t = TONE_STYLES[s.tone]
          const reverse = idx % 2 === 1
          const isDark = s.tone === 'stone' || s.tone === 'ink'
          return (
            <section
              key={s.slug}
              id={s.slug}
              className={`relative scroll-mt-24 overflow-hidden ${t.section}`}
            >
              <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
                <div
                  className={`grid items-center gap-12 lg:gap-16 lg:grid-cols-12 ${
                    reverse ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  <div className={`lg:col-span-6 ${reverse ? 'lg:[direction:ltr]' : ''}`}>
                    <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${t.eyebrow}`}>
                      {s.eyebrow}
                    </p>
                    <h2
                      className={`mt-4 font-careSerif text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.025em] ${t.title}`}
                    >
                      {s.title}.
                    </h2>
                    <p className={`mt-5 font-careSerif text-2xl italic leading-snug ${t.accent} sm:text-3xl`}>
                      {s.oneLiner}
                    </p>
                    <p className={`mt-6 max-w-xl text-base leading-relaxed sm:text-lg ${t.body}`}>
                      {s.description}
                    </p>

                    <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className={`flex items-start gap-2 rounded-xl border ${t.chipBorder} ${t.chip} px-3.5 py-2.5 text-sm`}
                        >
                          <CheckIcon className={`mt-0.5 h-4 w-4 shrink-0 ${t.accent}`} aria-hidden />
                          <span className="leading-snug">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-9 flex flex-wrap items-center gap-4">
                      <Link
                        href={s.href}
                        className={`inline-flex min-h-[48px] items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition active:scale-[0.98] ${t.cta}`}
                      >
                        Explore {s.title.replace(' Services', '')}
                        <ArrowRightIcon className="h-4 w-4" aria-hidden />
                      </Link>
                      <Link
                        href={enquiryHref}
                        className={`inline-flex min-h-[48px] items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition ${
                          isDark
                            ? 'border-white/20 text-white hover:bg-white/5'
                            : 'border-neutral-300 text-neutral-900 hover:bg-neutral-50'
                        }`}
                      >
                        Talk to a care advisor
                      </Link>
                    </div>

                    {s.startingFrom ? (
                      <p className={`mt-5 text-xs uppercase tracking-[0.18em] ${isDark ? 'text-white/50' : 'text-neutral-500'}`}>
                        {s.startingFrom}
                      </p>
                    ) : null}
                  </div>

                  {/* right-side art panel */}
                  <div className={`lg:col-span-6 ${reverse ? 'lg:[direction:ltr]' : ''}`}>
                    <div
                      className={`relative aspect-[1.05] w-full overflow-hidden rounded-[36px] bg-gradient-to-br ${t.artGrad} shadow-[0_30px_70px_-30px_rgba(0,0,0,0.35)]`}
                    >
                      <div
                        className={`pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl ${t.artHalo}`}
                        aria-hidden
                      />
                      <div
                        className={`pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl ${t.artHalo}`}
                        aria-hidden
                      />
                      {/* big background numeral */}
                      <span
                        aria-hidden
                        className={`absolute inset-x-0 -top-6 select-none text-center font-careSerif text-[18rem] font-medium leading-none tracking-tighter ${t.bigGlyph}`}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      {/* foreground service mark */}
                      <div className={`absolute inset-0 flex items-center justify-center p-16 ${t.iconColor}`}>
                        <ServiceArt slug={s.slug} />
                      </div>
                      {/* floating chip */}
                      <div
                        className={`absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border bg-white/95 px-4 py-3 shadow-md backdrop-blur ${t.chipBorder}`}
                      >
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-xl ${t.iconCircle} ${t.iconColor}`}
                        >
                          <HeartIcon className="h-4 w-4" aria-hidden />
                        </span>
                        <div className="text-left">
                          <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                            {s.eyebrow}
                          </span>
                          <span className="block text-sm font-bold text-neutral-900">{s.title}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}

        {/* ─────────────── Why EzyHelpers ─────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF385C]">
                Built differently
              </p>
              <h2 className="mt-4 font-careSerif text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                Most services place
                <br />
                <span className="text-neutral-400">whoever is available.</span>{' '}
                <em className="font-careSerif font-normal italic text-[#FF385C]">We place whoever is right.</em>
              </h2>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
              {/* large dark spotlight */}
              <article className="relative overflow-hidden rounded-[28px] bg-neutral-950 p-8 text-white sm:p-10 lg:col-span-2">
                <span className="inline-block rounded-full bg-[#FF385C] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  The matching difference
                </span>
                <h3 className="mt-6 font-careSerif text-3xl font-semibold tracking-tight sm:text-4xl">
                  Matching, not assignment.
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
                  Every placement begins with a detailed consultation about the patient’s medical history,
                  daily routine, condition and communication style. The shortlist is built on those
                  specifics — never on which caregiver happens to live nearest.
                </p>
                <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 text-sm text-white/85 sm:grid-cols-2">
                  {[
                    'Condition-relevant experience',
                    'Language match where possible',
                    'Aadhaar + ID + background checks',
                    'Direct interaction before placement',
                    'Free replacement guarantee',
                    'Week-one and ongoing follow-ups',
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#5EE0FF]" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="flex flex-col justify-between rounded-[28px] border border-neutral-200 bg-[#F7F7F2] p-8 sm:p-10">
                <div>
                  <span className="inline-block rounded-full bg-black/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-700">
                    Same-day placement
                  </span>
                  <h3 className="mt-6 font-careSerif text-2xl font-bold tracking-tight text-neutral-950">
                    For when discharge can’t wait.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    Hospital discharge tomorrow morning? An emergency tonight? Where a suitable
                    professional is free, we attempt placement on the same day, across all 16+ Bangalore
                    localities we serve.
                  </p>
                </div>
                <Link
                  href={enquiryHref}
                  className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-[#FF385C] hover:text-[#E31C5F]"
                >
                  Start with a 15-minute call
                  <ArrowRightIcon className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* ─────────────── How it works ─────────────── */}
        <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF385C]">
                How it works
              </p>
              <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                Four steps. One careful match.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                The same disciplined process whether you need a nurse for two weeks or a live-in caregiver
                for two years.
              </p>
            </div>

            <ol className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map(({ n, title, body, icon: Icon }) => (
                <li
                  key={n}
                  className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-careSerif text-3xl font-medium text-[#FF385C]">{n}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-700">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <h3 className="mt-5 font-careSerif text-xl font-bold tracking-tight text-neutral-950">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─────────────── Conditions we handle ─────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF385C]">
                  Conditions we handle
                </p>
                <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                  Experience, not improvisation.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
                  Caregivers are matched only when they have managed your specific condition before. If
                  yours isn’t listed, call us — we’ll assess what the care actually requires.
                </p>
                <a
                  href={CARE_PHONE_HREF}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
                >
                  <PhoneIcon className="h-4 w-4" aria-hidden />
                  {CARE_PHONE_DISPLAY}
                </a>
              </div>
              <div className="lg:col-span-7">
                <div className="flex flex-wrap gap-2.5">
                  {CONDITIONS.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────── Testimonials ─────────────── */}
        <section className="border-y border-neutral-200 bg-[#0E0F12] px-4 py-20 text-white sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF7D5C]">
                Real families
              </p>
              <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em]">
                Stories from Bangalore homes.
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur"
                >
                  <blockquote className="font-careSerif text-lg leading-snug text-white/90 sm:text-xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-white/10 pt-5 text-sm">
                    <span className="block font-semibold text-white">{t.name}</span>
                    <span className="block text-white/50">{t.place}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── Coverage ─────────────── */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF385C]">
                Now serving Bangalore
              </p>
              <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
                16+ localities. One careful standard.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
                Caregivers are distributed across the city for fast, reliable placement. Don’t see your
                area? Call us — coverage is expanding every month.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {LOCALITIES.map((l) => (
                <div
                  key={l}
                  className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-sm font-medium text-neutral-800"
                >
                  <MapPinIcon className="h-4 w-4 shrink-0 text-[#FF385C]" aria-hidden />
                  {l}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── FAQ ─────────────── */}
        <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF385C]">
              Frequently asked
            </p>
            <h2 className="mt-4 font-careSerif text-[clamp(1.85rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.025em] text-neutral-950">
              Answers, before you even call.
            </h2>
            <div className="mt-10">
              <FAQAccordion faqs={FAQ_ITEMS as unknown as { question: string; answer: string }[]} tone="default" />
            </div>
          </div>
        </section>

        {/* ─────────────── Final CTA ─────────────── */}
        <section className="relative overflow-hidden bg-neutral-950 px-4 py-24 text-white sm:px-6 sm:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,56,92,0.18) 0%, rgba(0,0,0,0) 60%)',
            }}
          />
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="font-careSerif text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.025em]">
              Care, beautifully arranged.
              <br />
              <em className="font-careSerif font-normal italic text-[#FF7D5C]">In a single call.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Tell us your situation. Our team responds within the hour, recommends the right service, and
              starts the matching process — at no cost.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={enquiryHref}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-neutral-900 transition hover:bg-neutral-100 active:scale-[0.98]"
              >
                Get matched today
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={CARE_PHONE_HREF}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-[15px] font-semibold text-white transition hover:bg-white/5"
              >
                <PhoneIcon className="h-4 w-4" aria-hidden />
                {CARE_PHONE_DISPLAY}
              </a>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/40">
              Now serving Bangalore · Other cities coming soon
            </p>

            {/* Quick links to all 7 services for SEO + UX */}
            <ul className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-2">
              {CARE_NAV_CLUSTERS.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
