/** Source files under content/care-services/ */
export const CARE_PAGE_FILES = {
  pillar: '01-pillar-home-care-services.md',
  homeHealthcare: '06-cluster-home-healthcare-services.md',
  homeNursing: '02-cluster-home-nursing-services.md',
  elderlyCare: '03-cluster-elderly-care-services.md',
  caretaker: '04-cluster-caretaker-services.md',
  patientCare: '07-cluster-patient-care-services.md',
  homeAttendant: '08-cluster-home-attendant-services.md',
  trainedAttendant: '09-cluster-trained-attendant-services.md',
} as const

export type CarePageFile = (typeof CARE_PAGE_FILES)[keyof typeof CARE_PAGE_FILES]

/**
 * Navbar / footer — the 6 NEW service pillars (2026 rebuild). These are the
 * primary care offerings surfaced site-wide.
 */
export const CARE_NAV_PILLARS = [
  { name: 'Elder Care at Home', href: '/care-services/elder-care-at-home-bangalore' },
  { name: 'Home Nursing Care', href: '/care-services/home-nursing-care-bangalore' },
  { name: 'Medical Equipment Rental & Buy', href: '/care-services/medical-equipment-rental-bangalore' },
  { name: 'Physiotherapy at Home', href: '/care-services/physiotherapy-at-home-bangalore' },
  { name: 'Critical Care at Home (ICU)', href: '/care-services/critical-care-at-home-bangalore' },
  { name: 'Palliative Care at Home', href: '/care-services/palliative-care-at-home-bangalore' },
] as const

/**
 * Legacy cluster pages — retained as SEO landing pages (still indexed). Kept
 * here for any remaining references; primary nav now uses CARE_NAV_PILLARS.
 */
export const CARE_NAV_CLUSTERS = [
  { name: 'Home Healthcare Services', href: '/care-services/home-healthcare-services-bangalore' },
  { name: 'Home Nursing Services', href: '/care-services/home-nursing-services-bangalore' },
  { name: 'Elderly Care Services', href: '/care-services/elderly-care-services-bangalore' },
  { name: 'Caretaker Services', href: '/care-services/caretaker-services-bangalore' },
  { name: 'Patient Care Services', href: '/care-services/patient-care-services-bangalore' },
  { name: 'Home Attendant Services', href: '/care-services/home-attendant-services-bangalore' },
  { name: 'Trained Attendant Services', href: '/care-services/trained-attendant-services-bangalore' },
] as const

export const CARE_PILLAR_HREF = '/care-services/home-care-services-bangalore'

/** Dedicated care lead form */
export const CARE_ENQUIRY_HREF = '/care-services/enquiry'

/** Exact paths for active nav highlighting */
export const ALL_CARE_PATHS = new Set<string>([
  CARE_PILLAR_HREF,
  CARE_ENQUIRY_HREF,
  ...CARE_NAV_PILLARS.map((c) => c.href),
  ...CARE_NAV_CLUSTERS.map((c) => c.href),
])
