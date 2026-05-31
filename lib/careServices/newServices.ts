import type { CarePriceKey } from './pricing'

/* ─────────────────────────────────────────────────────────────────────────
 * Care Services — NEW SERVICE REGISTRY (6 pillars + nested sub-services)
 *
 * Single source of truth for the rebuilt /care-services experience. Drives the
 * homepage cards, pillar pages, nested-page interlinking, breadcrumbs, nav and
 * structured data. SEO/AEO-optimised names + slugs (Bangalore-targeted).
 *
 * Prices are NOT stored here — each service references a `priceKey` resolved at
 * render time via lib/careServices/pricing.ts (so pricing stays backend-ready
 * and centralised).
 * ───────────────────────────────────────────────────────────────────────── */

export type CarePillarSlug =
  | 'elder-care-at-home-bangalore'
  | 'home-nursing-care-bangalore'
  | 'medical-equipment-rental-bangalore'
  | 'physiotherapy-at-home-bangalore'
  | 'critical-care-at-home-bangalore'
  | 'palliative-care-at-home-bangalore'

export interface CareNestedService {
  /** URL slug (no leading slash, full path is /care-services/<slug>) */
  slug: string
  /** Card + nav label (concise) */
  label: string
  /** SEO <h1> / hero title (Bangalore-targeted, AEO phrasing) */
  title: string
  /** One-line value proposition */
  tagline: string
  /** Meta description */
  description: string
  /** Pricing key (resolved via pricing.ts) */
  priceKey: CarePriceKey
  /** Heroicon name (outline) used on cards */
  icon: string
}

export interface CarePillar {
  slug: CarePillarSlug
  /** Short label for cards / nav */
  label: string
  /** SEO <h1> / hero title */
  title: string
  /** Hero subhead / card tagline */
  tagline: string
  /** Longer positioning sentence for the homepage card */
  blurb: string
  /** Meta description */
  description: string
  /** Pricing key for the pillar headline price */
  priceKey: CarePriceKey
  /** Heroicon name (outline) */
  icon: string
  /** Accent tone token group (all map to primary/accent; kept for per-card variety) */
  tone: 'primary' | 'accentWarm'
  /** Nested sub-services within this pillar */
  nested: CareNestedService[]
}

export const NEW_CARE_ENQUIRY_HREF = '/care-services/enquiry'

export const CARE_PILLARS: Record<CarePillarSlug, CarePillar> = {
  'elder-care-at-home-bangalore': {
    slug: 'elder-care-at-home-bangalore',
    label: 'Elder Care at Home',
    title: 'Elder Care at Home in Bangalore',
    tagline: 'Dignified, compassionate care for ageing parents — in their own home.',
    blurb:
      'Trained, verified caregivers for seniors — from companionship and daily routines to dementia, Parkinson’s and bedridden support.',
    description:
      'Trusted elder care at home in Bangalore. Verified caregivers for dementia, Parkinson’s, bedridden seniors, companionship and mobility support. Live-in or day shifts, same-day placement.',
    priceKey: 'elder-care',
    icon: 'HeartIcon',
    tone: 'primary',
    nested: [
      {
        slug: 'dementia-care-at-home-bangalore',
        label: 'Dementia & Alzheimer’s Care',
        title: 'Dementia & Alzheimer’s Care at Home in Bangalore',
        tagline: 'Patient, specialised memory care that keeps loved ones calm and safe.',
        description:
          'Specialised dementia and Alzheimer’s care at home in Bangalore — trained caregivers for memory loss, wandering, sundowning and family respite.',
        priceKey: 'dementia-care',
        icon: 'SparklesIcon',
      },
      {
        slug: 'bedridden-patient-care-at-home-bangalore',
        label: 'Bedridden Patient Care',
        title: 'Bedridden Patient Care at Home in Bangalore',
        tagline: 'Safe handling, pressure-sore prevention and dignified daily care.',
        description:
          'Expert bedridden patient care at home in Bangalore — repositioning, pressure-sore prevention, hygiene, feeding and safe transfers by trained attendants.',
        priceKey: 'bedridden-care',
        icon: 'ShieldCheckIcon',
      },
      {
        slug: 'elderly-companionship-care-bangalore',
        label: 'Companionship Care',
        title: 'Elderly Companionship Care at Home in Bangalore',
        tagline: 'Warm company, conversation and daily engagement for seniors.',
        description:
          'Companion care for elderly in Bangalore — conversation, meals together, walks, hobbies and emotional support that prevents senior loneliness.',
        priceKey: 'companionship',
        icon: 'ChatBubbleLeftRightIcon',
      },
      {
        slug: 'senior-mental-health-counselling-bangalore',
        label: 'Senior Mental Health & Counselling',
        title: 'Senior Mental Health & Counselling at Home in Bangalore',
        tagline: 'Emotional wellbeing support for depression, anxiety and isolation.',
        description:
          'At-home mental health support and counselling for seniors in Bangalore — depression, anxiety, grief and isolation, delivered with dignity.',
        priceKey: 'mental-health',
        icon: 'UserGroupIcon',
      },
      {
        slug: 'post-fall-mobility-care-bangalore',
        label: 'Post-Fall & Mobility Care',
        title: 'Post-Fall Recovery & Mobility Care at Home in Bangalore',
        tagline: 'Safe recovery, fall-prevention and mobility rebuilding at home.',
        description:
          'Post-fall recovery and mobility care for seniors in Bangalore — safe transfers, fall-prevention, walking support and confidence rebuilding.',
        priceKey: 'post-fall-mobility',
        icon: 'ArrowTrendingUpIcon',
      },
      {
        slug: 'parkinsons-care-at-home-bangalore-elder',
        label: 'Parkinson’s Care',
        title: 'Parkinson’s Care at Home in Bangalore',
        tagline: 'Routine, mobility and medication support for Parkinson’s.',
        description:
          'Specialised Parkinson’s care at home in Bangalore — medication timing, mobility, tremor-aware assistance and daily routine support.',
        priceKey: 'parkinsons-care',
        icon: 'ClockIcon',
      },
    ],
  },

  'home-nursing-care-bangalore': {
    slug: 'home-nursing-care-bangalore',
    label: 'Home Nursing Care',
    title: 'Home Nursing Care in Bangalore',
    tagline: 'Credentialled nurses for clinical care, performed at home.',
    blurb:
      'GNM/B.Sc-verified nurses for wound care, IV therapy, catheter management, injections and post-surgical monitoring — with daily clinical logs.',
    description:
      'Professional home nursing care in Bangalore. Credential-checked nurses for wound dressing, IV therapy, catheter care, injections and post-surgical recovery. Visits or 12-hour shifts.',
    priceKey: 'nursing-care',
    icon: 'ClipboardDocumentCheckIcon',
    tone: 'primary',
    nested: [
      {
        slug: 'wound-care-dressing-at-home-bangalore',
        label: 'Wound Care & Dressing',
        title: 'Wound Care & Dressing at Home in Bangalore',
        tagline: 'Sterile dressing, diabetic-wound and post-op wound management.',
        description:
          'Professional wound care and dressing at home in Bangalore — diabetic wounds, bedsores, surgical wounds and ostomy care by trained nurses.',
        priceKey: 'wound-care',
        icon: 'PlusCircleIcon',
      },
      {
        slug: 'iv-therapy-at-home-bangalore',
        label: 'IV Therapy & Infusion',
        title: 'IV Therapy & Infusion at Home in Bangalore',
        tagline: 'Doctor-prescribed IV fluids, antibiotics and infusions at home.',
        description:
          'Safe IV therapy and infusion at home in Bangalore — IV fluids, antibiotics, electrolytes and prescribed infusions administered by credentialled nurses.',
        priceKey: 'iv-therapy',
        icon: 'BeakerIcon',
      },
      {
        slug: 'catheter-care-at-home-bangalore',
        label: 'Catheter & Tube Care',
        title: 'Catheter & Tube Care at Home in Bangalore',
        tagline: 'Hygienic catheter, Ryles tube and feeding-tube management.',
        description:
          'Catheter and feeding-tube care at home in Bangalore — urinary catheter changes, Ryles tube and PEG feeding managed safely by nurses.',
        priceKey: 'catheter-care',
        icon: 'AdjustmentsHorizontalIcon',
      },
      {
        slug: 'post-surgical-nursing-care-bangalore',
        label: 'Post-Surgical Nursing',
        title: 'Post-Surgical Nursing Care at Home in Bangalore',
        tagline: 'Recovery monitoring, wound and medication management after surgery.',
        description:
          'Post-surgical nursing care at home in Bangalore — incision care, vitals monitoring, medication management and complication watch after discharge.',
        priceKey: 'post-surgical-nursing',
        icon: 'HomeModernIcon',
      },
      {
        slug: 'injections-vitals-monitoring-bangalore',
        label: 'Injections & Vitals Monitoring',
        title: 'Injections & Vitals Monitoring at Home in Bangalore',
        tagline: 'Prescribed injections, BP, sugar and SpO₂ monitoring at home.',
        description:
          'At-home injections and vitals monitoring in Bangalore — insulin, prescribed injections, BP, blood sugar and SpO₂ checks by qualified nurses.',
        priceKey: 'injections-vitals',
        icon: 'HeartIcon',
      },
      {
        slug: 'tracheostomy-care-at-home-bangalore',
        label: 'Tracheostomy Care',
        title: 'Tracheostomy Care at Home in Bangalore',
        tagline: 'Suctioning, tube hygiene and respiratory support at home.',
        description:
          'Tracheostomy care at home in Bangalore — suctioning, tube hygiene, stoma care and respiratory monitoring by trained nurses.',
        priceKey: 'tracheostomy-care',
        icon: 'ShieldCheckIcon',
      },
    ],
  },

  'medical-equipment-rental-bangalore': {
    slug: 'medical-equipment-rental-bangalore',
    label: 'Medical Equipment Rental & Buy',
    title: 'Medical Equipment Rental & Purchase in Bangalore',
    tagline: 'Hospital-grade equipment delivered, installed and serviced at home.',
    blurb:
      'Rent or buy hospital beds, oxygen concentrators, wheelchairs, monitors and more — delivered, installed and maintained across Bangalore.',
    description:
      'Medical equipment rental and purchase in Bangalore. Hospital beds, oxygen concentrators, wheelchairs, BiPAP/CPAP and patient monitors — delivered, installed and serviced at home.',
    priceKey: 'medical-equipment',
    icon: 'TruckIcon',
    tone: 'accentWarm',
    nested: [
      {
        slug: 'hospital-bed-rental-bangalore',
        label: 'Hospital Bed Rental',
        title: 'Hospital Bed Rental in Bangalore',
        tagline: 'Manual & electric ICU-grade beds, delivered and installed.',
        description:
          'Hospital bed rental in Bangalore — manual and fully electric ICU-grade beds with side rails and mattress, delivered and installed at home.',
        priceKey: 'hospital-bed',
        icon: 'HomeModernIcon',
      },
      {
        slug: 'oxygen-concentrator-rental-bangalore',
        label: 'Oxygen Concentrator Rental',
        title: 'Oxygen Concentrator Rental in Bangalore',
        tagline: '5L & 10L concentrators with setup and 24/7 support.',
        description:
          'Oxygen concentrator rental in Bangalore — 5L and 10L machines with home setup, training and round-the-clock support.',
        priceKey: 'oxygen-concentrator',
        icon: 'BeakerIcon',
      },
      {
        slug: 'wheelchair-rental-bangalore',
        label: 'Wheelchair Rental',
        title: 'Wheelchair Rental in Bangalore',
        tagline: 'Standard, commode and reclining wheelchairs on rent.',
        description:
          'Wheelchair rental in Bangalore — standard, commode, reclining and lightweight wheelchairs delivered to your door.',
        priceKey: 'wheelchair',
        icon: 'AdjustmentsHorizontalIcon',
      },
      {
        slug: 'patient-monitor-rental-bangalore',
        label: 'Patient Monitor Rental',
        title: 'Patient Monitor Rental in Bangalore',
        tagline: 'Multi-para monitors for vitals tracking at home.',
        description:
          'Patient monitor rental in Bangalore — multi-parameter monitors for ECG, SpO₂, BP and heart rate tracking, ideal for ICU-at-home setups.',
        priceKey: 'patient-monitor',
        icon: 'ClipboardDocumentCheckIcon',
      },
      {
        slug: 'bipap-cpap-rental-bangalore',
        label: 'BiPAP / CPAP Rental',
        title: 'BiPAP & CPAP Machine Rental in Bangalore',
        tagline: 'Respiratory support machines with masks and setup.',
        description:
          'BiPAP and CPAP machine rental in Bangalore — respiratory support devices with masks, humidifiers and home setup for sleep apnoea and COPD.',
        priceKey: 'bipap-cpap',
        icon: 'ShieldCheckIcon',
      },
      {
        slug: 'mobility-aids-rental-bangalore',
        label: 'Mobility Aids',
        title: 'Mobility Aids Rental in Bangalore',
        tagline: 'Walkers, commodes, air mattresses and daily-living aids.',
        description:
          'Mobility aids rental in Bangalore — walkers, commode chairs, air mattresses, suction machines and other daily-living equipment.',
        priceKey: 'mobility-aids',
        icon: 'ArrowTrendingUpIcon',
      },
    ],
  },

  'physiotherapy-at-home-bangalore': {
    slug: 'physiotherapy-at-home-bangalore',
    label: 'Physiotherapy at Home',
    title: 'Physiotherapy at Home in Bangalore',
    tagline: 'Certified physiotherapists who bring recovery to your living room.',
    blurb:
      'Certified physiotherapists for orthopaedic, neuro, post-surgical and geriatric rehab — personalised programmes delivered at home.',
    description:
      'Home physiotherapy in Bangalore. Certified physiotherapists for orthopaedic, neurological, post-surgical, cardiac and geriatric rehabilitation — personalised sessions at home.',
    priceKey: 'physiotherapy',
    icon: 'ArrowTrendingUpIcon',
    tone: 'primary',
    nested: [
      {
        slug: 'orthopedic-physiotherapy-at-home-bangalore',
        label: 'Orthopaedic Physiotherapy',
        title: 'Orthopaedic Physiotherapy at Home in Bangalore',
        tagline: 'Joint, back, knee and post-fracture rehabilitation.',
        description:
          'Orthopaedic physiotherapy at home in Bangalore — knee, back, shoulder, arthritis and post-fracture rehab with certified physiotherapists.',
        priceKey: 'ortho-physio',
        icon: 'ShieldCheckIcon',
      },
      {
        slug: 'neuro-physiotherapy-at-home-bangalore',
        label: 'Neurological Physiotherapy',
        title: 'Neurological Physiotherapy at Home in Bangalore',
        tagline: 'Stroke, Parkinson’s and paralysis recovery programmes.',
        description:
          'Neuro physiotherapy at home in Bangalore — stroke rehabilitation, Parkinson’s, paralysis and spinal-injury recovery by specialist physiotherapists.',
        priceKey: 'neuro-physio',
        icon: 'SparklesIcon',
      },
      {
        slug: 'post-surgical-physiotherapy-bangalore',
        label: 'Post-Surgical Physiotherapy',
        title: 'Post-Surgical Physiotherapy at Home in Bangalore',
        tagline: 'Faster, safer recovery after joint and major surgery.',
        description:
          'Post-surgical physiotherapy at home in Bangalore — knee/hip replacement, ligament and post-operative rehab with guided exercise programmes.',
        priceKey: 'post-surgical-physio',
        icon: 'HomeModernIcon',
      },
      {
        slug: 'geriatric-physiotherapy-bangalore',
        label: 'Geriatric Physiotherapy',
        title: 'Geriatric Physiotherapy at Home in Bangalore',
        tagline: 'Strength, balance and fall-prevention for seniors.',
        description:
          'Geriatric physiotherapy at home in Bangalore — balance training, strength building and fall-prevention programmes designed for older adults.',
        priceKey: 'geriatric-physio',
        icon: 'HeartIcon',
      },
      {
        slug: 'cardio-respiratory-physiotherapy-bangalore',
        label: 'Cardiac & Respiratory Physio',
        title: 'Cardiac & Respiratory Physiotherapy at Home in Bangalore',
        tagline: 'Breathing, chest and post-cardiac rehabilitation.',
        description:
          'Cardiac and respiratory physiotherapy at home in Bangalore — chest physio, breathing exercises and post-cardiac/COPD rehabilitation.',
        priceKey: 'cardio-respiratory-physio',
        icon: 'BeakerIcon',
      },
      {
        slug: 'paediatric-physiotherapy-bangalore',
        label: 'Paediatric Physiotherapy',
        title: 'Paediatric Physiotherapy at Home in Bangalore',
        tagline: 'Developmental and special-needs physio for children.',
        description:
          'Paediatric physiotherapy at home in Bangalore — developmental delays, cerebral palsy and special-needs rehabilitation for children.',
        priceKey: 'paediatric-physio',
        icon: 'UserGroupIcon',
      },
    ],
  },

  'critical-care-at-home-bangalore': {
    slug: 'critical-care-at-home-bangalore',
    label: 'Critical Care at Home (ICU)',
    title: 'Critical Care (ICU) at Home in Bangalore',
    tagline: 'Full ICU-grade care, set up and run safely in your home.',
    blurb:
      'ICU-at-home setups with ventilator support, trained critical-care nurses, monitoring and equipment — hospital-level care without the hospital.',
    description:
      'ICU and critical care at home in Bangalore. Ventilator support, tracheostomy care, multi-para monitoring and critical-care nurses — a complete ICU setup at home.',
    priceKey: 'critical-care',
    icon: 'ShieldCheckIcon',
    tone: 'accentWarm',
    nested: [
      {
        slug: 'ventilator-care-at-home-bangalore',
        label: 'Ventilator Care',
        title: 'Ventilator Care at Home in Bangalore',
        tagline: 'Invasive & non-invasive ventilation managed by experts.',
        description:
          'Ventilator care at home in Bangalore — invasive and non-invasive ventilation, settings management and 24/7 monitoring by critical-care nurses.',
        priceKey: 'ventilator-care',
        icon: 'BeakerIcon',
      },
      {
        slug: 'icu-setup-at-home-bangalore',
        label: 'ICU Setup at Home',
        title: 'ICU Setup at Home in Bangalore',
        tagline: 'Complete ICU equipment, staffing and protocols installed.',
        description:
          'Complete ICU setup at home in Bangalore — beds, monitors, ventilators, suction and trained staff installed and managed to hospital protocols.',
        priceKey: 'icu-setup',
        icon: 'HomeModernIcon',
      },
      {
        slug: 'post-icu-recovery-care-bangalore',
        label: 'Post-ICU Recovery Care',
        title: 'Post-ICU Recovery Care at Home in Bangalore',
        tagline: 'Safe step-down care after hospital ICU discharge.',
        description:
          'Post-ICU recovery care at home in Bangalore — step-down monitoring, rehabilitation and complication watch after intensive-care discharge.',
        priceKey: 'post-icu-care',
        icon: 'ArrowTrendingUpIcon',
      },
      {
        slug: 'tracheostomy-critical-care-bangalore',
        label: 'Tracheostomy Critical Care',
        title: 'Tracheostomy Critical Care at Home in Bangalore',
        tagline: 'Advanced airway and tracheostomy management at home.',
        description:
          'Tracheostomy critical care at home in Bangalore — advanced airway management, suctioning and respiratory monitoring by critical-care nurses.',
        priceKey: 'tracheostomy-icu',
        icon: 'ShieldCheckIcon',
      },
      {
        slug: 'cardiac-critical-care-at-home-bangalore',
        label: 'Cardiac Critical Care',
        title: 'Cardiac Critical Care at Home in Bangalore',
        tagline: 'Continuous cardiac monitoring and post-event support.',
        description:
          'Cardiac critical care at home in Bangalore — continuous cardiac monitoring, medication management and post-cardiac-event support at home.',
        priceKey: 'cardiac-critical',
        icon: 'HeartIcon',
      },
    ],
  },

  'palliative-care-at-home-bangalore': {
    slug: 'palliative-care-at-home-bangalore',
    label: 'Palliative Care at Home',
    title: 'Palliative Care at Home in Bangalore',
    tagline: 'Comfort, dignity and pain relief for serious illness — at home.',
    blurb:
      'Compassionate palliative and end-of-life care — pain management, symptom relief and emotional support for patients and families.',
    description:
      'Palliative care at home in Bangalore. Compassionate pain management, symptom relief, cancer/oncology support and end-of-life care with dignity for patients and families.',
    priceKey: 'palliative-care',
    icon: 'HeartIcon',
    tone: 'accentWarm',
    nested: [
      {
        slug: 'cancer-palliative-care-at-home-bangalore',
        label: 'Cancer / Oncology Palliative Care',
        title: 'Cancer & Oncology Palliative Care at Home in Bangalore',
        tagline: 'Comfort-focused support through cancer treatment.',
        description:
          'Cancer palliative care at home in Bangalore — symptom relief, chemotherapy-side-effect support and comfort care for oncology patients.',
        priceKey: 'cancer-palliative',
        icon: 'SparklesIcon',
      },
      {
        slug: 'pain-symptom-management-at-home-bangalore',
        label: 'Pain & Symptom Management',
        title: 'Pain & Symptom Management at Home in Bangalore',
        tagline: 'Expert relief from pain, breathlessness and discomfort.',
        description:
          'Pain and symptom management at home in Bangalore — medical pain relief, breathlessness, nausea and symptom control for serious illness.',
        priceKey: 'pain-management',
        icon: 'PlusCircleIcon',
      },
      {
        slug: 'end-of-life-care-at-home-bangalore',
        label: 'End-of-Life Care',
        title: 'End-of-Life Care at Home in Bangalore',
        tagline: 'Gentle, dignified care in the final stages of life.',
        description:
          'End-of-life care at home in Bangalore — compassionate comfort care, dignity and family support during the final stages of illness.',
        priceKey: 'end-of-life',
        icon: 'HeartIcon',
      },
      {
        slug: 'hospice-care-at-home-bangalore',
        label: 'Hospice Care at Home',
        title: 'Hospice Care at Home in Bangalore',
        tagline: 'Full hospice support without leaving home.',
        description:
          'Hospice care at home in Bangalore — coordinated medical, emotional and spiritual support for patients and families, delivered in the comfort of home.',
        priceKey: 'hospice-at-home',
        icon: 'HomeModernIcon',
      },
    ],
  },
}

/** Ordered list for homepage cards / index pages. */
export const CARE_PILLAR_ORDER: CarePillarSlug[] = [
  'elder-care-at-home-bangalore',
  'home-nursing-care-bangalore',
  'medical-equipment-rental-bangalore',
  'physiotherapy-at-home-bangalore',
  'critical-care-at-home-bangalore',
  'palliative-care-at-home-bangalore',
]

/** Helper: pillar meta by slug. */
export function getPillar(slug: CarePillarSlug): CarePillar {
  return CARE_PILLARS[slug]
}

/** Helper: find which pillar a nested slug belongs to (for breadcrumbs). */
export function getPillarForNested(nestedSlug: string): CarePillar | undefined {
  return Object.values(CARE_PILLARS).find((p) =>
    p.nested.some((n) => n.slug === nestedSlug)
  )
}

/** Helper: nested service meta by slug. */
export function getNestedService(nestedSlug: string): CareNestedService | undefined {
  for (const p of Object.values(CARE_PILLARS)) {
    const n = p.nested.find((x) => x.slug === nestedSlug)
    if (n) return n
  }
  return undefined
}

/** All nested slugs (for sitemap / static params). */
export function getAllNestedSlugs(): string[] {
  return Object.values(CARE_PILLARS).flatMap((p) => p.nested.map((n) => n.slug))
}
