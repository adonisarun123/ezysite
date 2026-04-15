/**
 * Maps hire-helper style payloads to PostgreSQL column names for `public.hire_helper_leads`.
 * PostgREST requires keys to match DB columns (snake_case); camelCase causes 400 Bad Request.
 */
export type HireHelperLeadInsertRow = {
  name: string
  phone: string
  email: string
  city: string
  locality: string
  apartment: string
  service: string
  duration: string
  service_timings: string
  start_date: string
  specific_requirements: string
  experience: string
  budget: string
  languages: string
  additional_services: string
  family_size: string
  preferred_gender: string | null
}

export function buildHireHelperLeadInsertRow(params: {
  name: string
  phone: string
  email: string
  city: string
  locality: string
  apartment: string
  service: string
  duration: string
  serviceTimings: string
  startDate: string
  specificRequirements: string
  experience: string
  budget: string
  languages: string
  additionalServices: string
  familySize: string
  preferredGender: string
}): HireHelperLeadInsertRow {
  const pg = (s: string) => s.trim()
  const preferred = pg(params.preferredGender)
  return {
    name: pg(params.name),
    phone: pg(params.phone),
    email: pg(params.email),
    city: pg(params.city),
    locality: pg(params.locality),
    apartment: pg(params.apartment),
    service: pg(params.service),
    duration: pg(params.duration),
    service_timings: pg(params.serviceTimings),
    start_date: pg(params.startDate),
    specific_requirements: pg(params.specificRequirements),
    experience: pg(params.experience),
    budget: pg(params.budget),
    languages: params.languages,
    additional_services: params.additionalServices,
    family_size: pg(params.familySize),
    preferred_gender: preferred === '' ? null : preferred,
  }
}
