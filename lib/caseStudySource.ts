import { caseStudies, type CaseStudy } from '@/app/case-studies/data/caseStudies';

/**
 * Case-study data-access layer. Pages import from here rather than reaching
 * into the static `caseStudies` array directly, so the backing store can be
 * swapped for a database without touching the pages.
 */

export async function getCaseStudy(slug: string): Promise<CaseStudy | undefined> {
  return caseStudies.find((cs) => cs.slug === slug);
}

/**
 * Related case studies for a given slug: explicit `relatedSlugs` first, then
 * filled up to `limit` with the studies that share the most segment/service
 * tags. The source study itself is always excluded.
 */
export async function getRelatedCaseStudies(slug: string, limit = 3): Promise<CaseStudy[]> {
  const current = caseStudies.find((cs) => cs.slug === slug);
  if (!current) return [];

  const bySlug = new Map(caseStudies.map((cs) => [cs.slug, cs]));
  const picked: CaseStudy[] = [];
  const seen = new Set<string>([slug]);

  for (const relatedSlug of current.relatedSlugs ?? []) {
    const cs = bySlug.get(relatedSlug);
    if (cs && !seen.has(relatedSlug)) {
      picked.push(cs);
      seen.add(relatedSlug);
    }
    if (picked.length >= limit) return picked;
  }

  const tags = new Set(current.segmentTags);
  const services = new Set(current.serviceTypes);
  const overlap = (cs: CaseStudy) =>
    cs.segmentTags.filter((t) => tags.has(t)).length +
    cs.serviceTypes.filter((t) => services.has(t)).length;

  const filler = caseStudies
    .filter((cs) => !seen.has(cs.slug))
    .sort((a, b) => overlap(b) - overlap(a));

  for (const cs of filler) {
    picked.push(cs);
    if (picked.length >= limit) break;
  }

  return picked.slice(0, limit);
}
