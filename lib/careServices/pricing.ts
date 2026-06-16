/* ─────────────────────────────────────────────────────────────────────────
 * Care Services — CENTRALISED PRICING (single source of truth)
 *
 * Every price shown anywhere in the /care-services section is read from this
 * file. Change a number here and it updates across the homepage, pillar pages,
 * nested service pages, cards and structured data.
 *
 * BACKEND-READY: this file intentionally exposes a single `getPrice(key)`
 * accessor and a plain `CARE_PRICING` object. To drive prices from a CMS/DB in
 * future, replace the literal values below with a fetch (or hydrate
 * CARE_PRICING at build time) — no consumer code needs to change because they
 * all go through `getPrice()` / `formatPrice()`.
 *
 * Currency + locale are also centralised so an India-wide / multi-currency
 * rollout only edits this file.
 * ───────────────────────────────────────────────────────────────────────── */

export type CarePriceUnit = 'mo' | 'day' | 'visit' | 'hr' | 'week' | 'session' | 'custom'

export interface CarePrice {
  /** Numeric amount in the base currency (INR). `null` = "custom / on request". */
  amount: number | null
  /** Billing unit. */
  unit: CarePriceUnit
  /** Optional override label, e.g. "Custom plans" or "From quote". */
  label?: string
  /** Optional note shown under the price, e.g. "12-hour shift". */
  note?: string
}

export const CARE_CURRENCY = {
  code: 'INR',
  symbol: '₹',
  /** Intl locale used for grouping (₹18,000). */
  locale: 'en-IN',
} as const

/**
 * Pricing keys are stable identifiers (NOT slugs) so a service can be renamed
 * without breaking its price reference.
 */
export type CarePriceKey =
  // Pillars
  | 'elder-care'
  | 'nursing-care'
  | 'medical-equipment'
  | 'physiotherapy'
  | 'critical-care'
  | 'palliative-care'
  // Elder care nested
  | 'dementia-care'
  | 'bedridden-care'
  | 'companionship'
  | 'mental-health'
  | 'post-fall-mobility'
  | 'parkinsons-care'
  | 'alzheimers-care'
  | 'respite-care'
  | 'diabetes-care'
  | 'ms-als-care'
  | 'arthritis-care'
  | 'respiratory-care'
  // Nursing nested
  | 'wound-care'
  | 'iv-therapy'
  | 'catheter-care'
  | 'post-surgical-nursing'
  | 'injections-vitals'
  | 'tracheostomy-care'
  // Equipment nested
  | 'hospital-bed'
  | 'oxygen-concentrator'
  | 'wheelchair'
  | 'patient-monitor'
  | 'bipap-cpap'
  | 'mobility-aids'
  // Physiotherapy nested
  | 'ortho-physio'
  | 'neuro-physio'
  | 'post-surgical-physio'
  | 'geriatric-physio'
  | 'cardio-respiratory-physio'
  | 'paediatric-physio'
  | 'speech-rehab'
  // Critical care nested
  | 'ventilator-care'
  | 'icu-setup'
  | 'post-icu-care'
  | 'tracheostomy-icu'
  | 'cardiac-critical'
  // Palliative nested
  | 'cancer-palliative'
  | 'pain-management'
  | 'end-of-life'
  | 'hospice-at-home'

/**
 * All care prices. Edit values here only.
 * NOTE FOR REVIEW: amounts below are PLACEHOLDER market-range figures and
 * should be confirmed against EzyHelpers' actual rate card before launch.
 */
export const CARE_PRICING: Record<CarePriceKey, CarePrice> = {
  // ── Pillars ──────────────────────────────────────────────
  'elder-care': { amount: 18000, unit: 'mo', note: 'Live-in from' },
  'nursing-care': { amount: 600, unit: 'visit', note: 'Per visit from' },
  'medical-equipment': { amount: 1500, unit: 'mo', note: 'Rental from' },
  'physiotherapy': { amount: 700, unit: 'session', note: 'Per session from' },
  'critical-care': { amount: 1500, unit: 'day', note: 'ICU-at-home from' },
  'palliative-care': { amount: null, unit: 'custom', label: 'Custom plans', note: 'Scoped per diagnosis' },

  // ── Elder care nested ────────────────────────────────────
  'dementia-care': { amount: 22000, unit: 'mo', note: 'Live-in from' },
  'bedridden-care': { amount: 24000, unit: 'mo', note: 'Live-in from' },
  'companionship': { amount: 15000, unit: 'mo', note: 'From' },
  'mental-health': { amount: 1200, unit: 'session', note: 'Counselling from' },
  'post-fall-mobility': { amount: 18000, unit: 'mo', note: 'From' },
  'parkinsons-care': { amount: 22000, unit: 'mo', note: 'Live-in from' },
  'alzheimers-care': { amount: 24000, unit: 'mo', note: 'Live-in from' },
  'respite-care': { amount: 1200, unit: 'day', note: '12-hr shift from' },
  'diabetes-care': { amount: 18000, unit: 'mo', note: 'From' },
  'ms-als-care': { amount: 26000, unit: 'mo', note: 'Live-in from' },
  'arthritis-care': { amount: 18000, unit: 'mo', note: 'From' },
  'respiratory-care': { amount: 22000, unit: 'mo', note: 'From' },

  // ── Nursing nested ───────────────────────────────────────
  'wound-care': { amount: 600, unit: 'visit', note: 'Per dressing from' },
  'iv-therapy': { amount: 700, unit: 'visit', note: 'Per visit from' },
  'catheter-care': { amount: 800, unit: 'visit', note: 'Per procedure from' },
  'post-surgical-nursing': { amount: 1200, unit: 'day', note: '12-hr shift from' },
  'injections-vitals': { amount: 400, unit: 'visit', note: 'Per visit from' },
  'tracheostomy-care': { amount: 1500, unit: 'day', note: '12-hr shift from' },

  // ── Equipment nested ─────────────────────────────────────
  'hospital-bed': { amount: 3000, unit: 'mo', note: 'Rental from' },
  'oxygen-concentrator': { amount: 5000, unit: 'mo', note: 'Rental from' },
  'wheelchair': { amount: 1200, unit: 'mo', note: 'Rental from' },
  'patient-monitor': { amount: 4000, unit: 'mo', note: 'Rental from' },
  'bipap-cpap': { amount: 6000, unit: 'mo', note: 'Rental from' },
  'mobility-aids': { amount: 800, unit: 'mo', note: 'Rental from' },

  // ── Physiotherapy nested ─────────────────────────────────
  'ortho-physio': { amount: 700, unit: 'session', note: 'Per session from' },
  'neuro-physio': { amount: 900, unit: 'session', note: 'Per session from' },
  'post-surgical-physio': { amount: 800, unit: 'session', note: 'Per session from' },
  'geriatric-physio': { amount: 700, unit: 'session', note: 'Per session from' },
  'cardio-respiratory-physio': { amount: 900, unit: 'session', note: 'Per session from' },
  'paediatric-physio': { amount: 900, unit: 'session', note: 'Per session from' },
  'speech-rehab': { amount: 900, unit: 'session', note: 'Per session from' },

  // ── Critical care nested ─────────────────────────────────
  'ventilator-care': { amount: 2500, unit: 'day', note: 'From' },
  'icu-setup': { amount: 1500, unit: 'day', note: 'Setup + care from' },
  'post-icu-care': { amount: 1800, unit: 'day', note: 'From' },
  'tracheostomy-icu': { amount: 2000, unit: 'day', note: 'From' },
  'cardiac-critical': { amount: 2500, unit: 'day', note: 'From' },

  // ── Palliative nested ────────────────────────────────────
  'cancer-palliative': { amount: null, unit: 'custom', label: 'Custom plans', note: 'Scoped per diagnosis' },
  'pain-management': { amount: 1500, unit: 'day', note: 'From' },
  'end-of-life': { amount: null, unit: 'custom', label: 'Custom plans', note: 'Compassionate, scoped care' },
  'hospice-at-home': { amount: null, unit: 'custom', label: 'Custom plans', note: 'Scoped per family' },
}

const UNIT_LABEL: Record<CarePriceUnit, string> = {
  mo: '/month',
  day: '/day',
  visit: '/visit',
  hr: '/hour',
  week: '/week',
  session: '/session',
  custom: '',
}

/**
 * GLOBAL PRICE-DISPLAY SWITCH.
 *
 * The business decision (2026) is to NOT show ₹ amounts on public care pages —
 * pricing is given after a free consultation so the quote matches the patient's
 * actual needs. The numeric data above is retained (backend-ready) but every
 * public price string resolves to a soft, conversion-friendly label.
 *
 * Flip to `true` to surface real ₹ amounts everywhere (single switch — no
 * consumer code changes needed).
 */
export const SHOW_PRICES = false

/** Soft, no-number label shown when SHOW_PRICES is false. */
const SOFT_PRICE_LABEL = 'Custom plans'

/** Format a raw amount with the centralised currency + grouping. */
export function formatAmount(amount: number): string {
  return `${CARE_CURRENCY.symbol}${amount.toLocaleString(CARE_CURRENCY.locale)}`
}

/**
 * Human-readable price string. With SHOW_PRICES off this returns a soft label
 * (e.g. "Custom plans") instead of a ₹ amount.
 */
export function formatPrice(key: CarePriceKey): string {
  const p = CARE_PRICING[key]
  if (!p) return ''
  if (!SHOW_PRICES) return p.label ?? SOFT_PRICE_LABEL
  if (p.amount === null) return p.label ?? SOFT_PRICE_LABEL
  return `${formatAmount(p.amount)}${UNIT_LABEL[p.unit]}`
}

/**
 * Price string prefixed with its note. With SHOW_PRICES off, returns a soft,
 * benefit-led label with NO ₹ amount (e.g. "Flexible plans — get a free quote").
 */
export function formatPriceWithNote(key: CarePriceKey): string {
  const p = CARE_PRICING[key]
  if (!p) return ''
  if (!SHOW_PRICES) {
    // Custom-quote services keep their bespoke (number-free) note; everything
    // else gets a consistent, conversion-friendly call to action — never a
    // number, and never a dangling "from".
    if (p.amount === null && p.note) return p.note
    return 'Flexible plans · free quote'
  }
  const price = formatPrice(key)
  return p.note ? `${p.note} ${price}` : price
}

/** Raw accessor (backend swap point). */
export function getPrice(key: CarePriceKey): CarePrice {
  return CARE_PRICING[key]
}
