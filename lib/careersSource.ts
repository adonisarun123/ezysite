import { jobOpenings, type JobOpening } from '@/lib/careersData'

/**
 * Careers data-access layer. Pages import from here rather than reaching into
 * careersData directly, so the backing store (currently the static
 * `jobOpenings` array) can be swapped for a database without touching the pages.
 */

export async function getAllJobs(): Promise<JobOpening[]> {
  return jobOpenings
}

export async function getJobBySlug(slug: string): Promise<JobOpening | undefined> {
  return jobOpenings.find((j) => j.slug === slug)
}
