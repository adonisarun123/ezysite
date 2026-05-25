/** Bangalore pilot: on-demand home help booking page (/on-demand-help). */

export const ON_DEMAND_HELP_CITY = 'Bangalore'

export const ON_DEMAND_HELP_AREAS = [
  'HSR Layout',
  'Sarjapur Road',
  'BTM Layout',
  'Haralur',
  'Bellandur',
] as const

export type OnDemandHelpArea = (typeof ON_DEMAND_HELP_AREAS)[number]

/** Task IDs + labels — household chores positioned without copying competitor wording */
export const ON_DEMAND_HELP_TASKS = [
  { id: 'floors-sweep-mop', label: 'Sweep & mop floors' },
  { id: 'surfaces-dust-wipe', label: 'Surface dusting & dry wipe-down' },
  { id: 'dishes-sink', label: 'Dishwashing & sink tidy-up' },
  { id: 'kitchen-no-cook', label: 'Kitchen tidy-up (no cooking)' },
  { id: 'plants-water', label: 'Indoor plant watering' },
  { id: 'pack-organise', label: 'Packing & light organising' },
  { id: 'meal-serve', label: 'Mealtime serving assistance' },
  { id: 'wardrobe-organise', label: 'Wardrobe & cupboard organising' },
  { id: 'bathroom-basics', label: 'Bathroom wipe-down & basics' },
] as const

export type OnDemandHelpTaskId = (typeof ON_DEMAND_HELP_TASKS)[number]['id']

export const ON_DEMAND_HELP_DURATIONS = [2, 4, 6, 8] as const

export type OnDemandHelpDurationHours = (typeof ON_DEMAND_HELP_DURATIONS)[number]

/**
 * Razorpay Payment Button IDs (one per package).
 * In Razorpay Dashboard → Payment Buttons → each button → set redirect / success URL to:
 * `https://www.ezyhelpers.com/on-demand-help/thank-you` (or `/thank-you?type=on-demand-help`).
 */
export const RAZORPAY_PAYMENT_BUTTON_IDS: Record<OnDemandHelpDurationHours, string> = {
  2: 'pl_SiUq89UjFEDmXZ',
  4: 'pl_SiUtGjb3xt70sN',
  6: 'pl_SiUwfEn1n5OVag',
  8: 'pl_SiUv3SOB5rCcK9',
}
