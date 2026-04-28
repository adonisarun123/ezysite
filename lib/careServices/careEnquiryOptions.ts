/** Value keys = pathname without leading slash (must match `CARE_TYPE_LABELS` in emailService) */
export const CARE_SERVICE_TYPE_OPTIONS = [
  { value: 'care-services/home-care-services-bangalore', label: 'Home Care Services (overview)' },
  { value: 'care-services/home-healthcare-services-bangalore', label: 'Home Healthcare Services' },
  { value: 'care-services/home-nursing-services-bangalore', label: 'Home Nursing Services' },
  { value: 'care-services/elderly-care-services-bangalore', label: 'Elderly Care Services' },
  { value: 'care-services/caretaker-services-bangalore', label: 'Caretaker Services' },
  { value: 'care-services/patient-care-services-bangalore', label: 'Patient Care Services' },
  { value: 'care-services/home-attendant-services-bangalore', label: 'Home Attendant Services' },
  { value: 'care-services/trained-attendant-services-bangalore', label: 'Trained Attendant Services' },
  { value: 'not_sure', label: 'Not sure — please advise' },
] as const

export const CARE_URGENCY_OPTIONS = [
  { value: 'same-day', label: 'Same day (if possible)' },
  { value: '24-48h', label: 'Within 24–48 hours' },
  { value: 'this-week', label: 'This week' },
  { value: 'planning', label: 'Planning / not urgent' },
] as const
