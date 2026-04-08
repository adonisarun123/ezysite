export type JobOpening = {
  slug: string
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Contract' | 'Hybrid' | 'Internship'
  team: string
  postedAt: string
  excerpt: string
  intro: string
  responsibilities: string[]
  requirements: string[]
  niceToHave?: string[]
}

/** Slugs that use a custom route under `app/careers/<slug>/` (excluded from `[slug]` static generation). */
export const CAREERS_DEDICATED_PAGE_SLUGS: ReadonlySet<string> = new Set([
  'chief-of-staff-intern',
])

/** Central list of open roles — edit here to add or remove positions. */
export const jobOpenings: JobOpening[] = [
  {
    slug: 'chief-of-staff-intern',
    title: "Chief of Staff Intern → Full-Time (Founder's Office)",
    department: "Founder's Office",
    location: 'Bangalore · Hybrid',
    type: 'Internship',
    team: "Founder's Office",
    postedAt: '2026-04-06',
    excerpt:
      '3 months. High intensity. Real ownership. Fix ops, build dashboards, ship with founders — perform, and you do not stay an intern.',
    intro:
      'This is a selection filter, not a generic internship. You will work on real bottlenecks in sales, sourcing, and operations with direct founder access.',
    responsibilities: [
      'Repair broken processes across sales, sourcing, and ops',
      'Build and maintain operational dashboards',
      'Own founder-assigned projects end to end',
    ],
    requirements: [
      'Ownership without waiting to be asked',
      'Comfort with ambiguity and incomplete information',
      'Evidence you have built or shipped something (even small)',
    ],
    niceToHave: [
      'SQL / spreadsheets / Notion or similar',
      'Prior startup, marketplace, or ops exposure',
    ],
  },
  {
    slug: 'operations-lead-field-quality',
    title: 'Operations Lead, Field & Quality',
    department: 'Operations',
    location: 'Bangalore',
    type: 'Full-time',
    team: 'City Operations',
    postedAt: '2026-03-15',
    excerpt:
      'Own helper onboarding, quality checks, and day-to-day delivery in one of our fastest-growing cities.',
    intro:
      'You will sit at the centre of how families experience EzyHelpers — from verification to replacements. We are scaling thoughtful operations, not call-centre volume.',
    responsibilities: [
      'Run and improve field verification, training touchpoints, and quality audits.',
      'Partner with product and central ops on playbooks, SLAs, and city-specific nuances.',
      'Coach a small ops pod; escalate patterns that should become product or policy.',
      'Represent customer and helper feedback in weekly leadership reviews.',
    ],
    requirements: [
      '4+ years in operations, marketplace ops, or high-trust services (healthcare, fintech, premium retail).',
      'Comfort with data: spreadsheets, basic dashboards, and writing clear weekly notes.',
      'Empathy for domestic workers and clarity with urban families — both matter.',
    ],
    niceToHave: [
      'Experience in staffing, home services, or gig platforms in India.',
      'Hindi + English fluency; Kannada is a plus in Bangalore.',
    ],
  },
  {
    slug: 'product-manager-growth-trust',
    title: 'Product Manager, Growth & Trust',
    department: 'Product',
    location: 'Bangalore · Hybrid',
    type: 'Hybrid',
    team: 'Product',
    postedAt: '2026-03-22',
    excerpt:
      'Shape verification, booking, and retention journeys for a category that runs on trust.',
    intro:
      'Domestic help is one of India’s largest labour markets and one of the least digitised. You will help families feel safe hiring and helpers feel respected — through product, not slogans.',
    responsibilities: [
      'Define and ship roadmap for trust surfaces: profiles, verification states, replacements.',
      'Partner with engineering, design, and ops on experiments and rollouts.',
      'Instrument funnels; turn ambiguous “trust” goals into measurable outcomes.',
    ],
    requirements: [
      '3+ years as a PM in consumer or marketplace products.',
      'Track record of shipping with small engineering teams in ambiguous domains.',
      'Written communication that works for leadership and frontline ops.',
    ],
    niceToHave: [
      'Experience with regulated or high-emotion categories.',
      'Comfort with SQL or analytics tools.',
    ],
  },
  {
    slug: 'full-stack-engineer',
    title: 'Full-stack Engineer',
    department: 'Engineering',
    location: 'Bangalore · Hybrid',
    type: 'Hybrid',
    team: 'Engineering',
    postedAt: '2026-04-01',
    excerpt:
      'Build the tools that match families with verified helpers — Next.js, APIs, and pragmatic craft.',
    intro:
      'Our stack is modern (Next.js, TypeScript, Tailwind) and our problems are human: scheduling, trust, and clear communication. We value small, reliable releases over hype.',
    responsibilities: [
      'Ship features across web and API layers with attention to performance and accessibility.',
      'Collaborate on schema, SEO, and internal tools that ops teams use daily.',
      'Participate in code review and help keep the codebase approachable.',
    ],
    requirements: [
      'Strong TypeScript / JavaScript and React patterns.',
      'Experience shipping production web apps; Next.js familiarity is ideal.',
      'Respect for security and privacy when handling personal data.',
    ],
    niceToHave: [
      'PostgreSQL / Supabase or similar.',
      'Interest in India-specific UX (languages, networks, devices).',
    ],
  },
  {
    slug: 'customer-success-lead',
    title: 'Customer Success Lead',
    department: 'Customer',
    location: 'Bareilly · Bangalore',
    type: 'Full-time',
    team: 'Customer Success',
    postedAt: '2026-04-04',
    excerpt:
      'Lead how we resolve issues, retain families, and turn feedback into better service.',
    intro:
      'When something breaks in home help, people remember. You will build calm, fair processes so customers feel heard and helpers are treated with dignity.',
    responsibilities: [
      'Own escalations, replacements, and satisfaction loops with clear SLAs.',
      'Train and align a lean CS team with ops and city leads.',
      'Synthesise themes for product and leadership — one pagers, not noise.',
    ],
    requirements: [
      '4+ years in customer success, account management, or service recovery.',
      'Excellent phone and written communication in English and Hindi.',
      'Comfort working across cities with different maturity levels.',
    ],
    niceToHave: [
      'Experience in marketplaces or regulated services.',
      'Exposure to CRM and ticketing workflows.',
    ],
  },
]

export function getJobBySlug(slug: string): JobOpening | undefined {
  return jobOpenings.find((j) => j.slug === slug)
}
