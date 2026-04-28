/** Value keys must match `CARE_TYPE_LABELS` in emailService */
export const CARE_SERVICE_TYPE_OPTIONS = [
  { value: 'home-care-services-bangalore', label: 'Home Care Services (overview)' },
  { value: 'home-healthcare-services-bangalore', label: 'Home Healthcare Services' },
  { value: 'home-nursing-services-bangalore', label: 'Home Nursing Services' },
  { value: 'elderly-care-services-bangalore', label: 'Elderly Care Services' },
  { value: 'caretaker-services-bangalore', label: 'Caretaker Services' },
  { value: 'patient-care-services-bangalore', label: 'Patient Care Services' },
  { value: 'home-attendant-services-bangalore', label: 'Home Attendant Services' },
  { value: 'trained-attendant-services-bangalore', label: 'Trained Attendant Services' },
  { value: 'not_sure', label: 'Not sure — please advise' },
] as const

export const CARE_URGENCY_OPTIONS = [
  { value: 'same-day', label: 'Same day (if possible)' },
  { value: '24-48h', label: 'Within 24–48 hours' },
  { value: 'this-week', label: 'This week' },
  { value: 'planning', label: 'Planning / not urgent' },
] as const
