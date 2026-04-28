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

/** Navbar / footer: pillar parent + 7 clusters */
export const CARE_NAV_CLUSTERS = [
  { name: 'Home Healthcare Services', href: '/home-healthcare-services-bangalore' },
  { name: 'Home Nursing Services', href: '/home-nursing-services-bangalore' },
  { name: 'Elderly Care Services', href: '/elderly-care-services-bangalore' },
  { name: 'Caretaker Services', href: '/caretaker-services-bangalore' },
  { name: 'Patient Care Services', href: '/patient-care-services-bangalore' },
  { name: 'Home Attendant Services', href: '/home-attendant-services-bangalore' },
  { name: 'Trained Attendant Services', href: '/trained-attendant-services-bangalore' },
] as const

export const CARE_PILLAR_HREF = '/home-care-services-bangalore'

/** Dedicated care lead form (replaces hire-helper for care CTAs) */
export const CARE_ENQUIRY_HREF = '/care-services-enquiry'

/** Exact paths for active nav highlighting */
export const ALL_CARE_PATHS = new Set<string>([
  CARE_PILLAR_HREF,
  ...CARE_NAV_CLUSTERS.map((c) => c.href),
])
