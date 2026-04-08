export type JobOpeningExtraSection = {
  title: string
  items: string[]
}

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
  /** Optional blocks (e.g. key projects, KPIs, why join) rendered after Nice to have */
  extraSections?: JobOpeningExtraSection[]
  /** Mailto address for Apply (defaults to info@ezyhelpers.com on the job page) */
  applyEmail?: string
  /** Prefilled mailto body, e.g. prompt for candidates to answer */
  applyBodyPrompt?: string
  /** When true, the job page shows an inline application form (see careers/[slug]/page.tsx) */
  hasApplicationForm?: boolean
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
    slug: 'ai-first-associate-product-manager',
    title: 'AI-First Associate Product Manager (APM)',
    department: 'Product',
    location: 'Bangalore (HSR Layout)',
    type: 'Full-time',
    team: 'Product & automation',
    postedAt: '2026-04-07',
    excerpt:
      'Own the execution engine for our tech and AI layer: turn Sales, Sourcing, and Ops problems into shipped automations, tools, and dashboards — with a full task pipeline and founder access.',
    intro:
      'EzyHelpers connects households with verified domestic help across housekeeping, cooking, elderly care, and childcare. We are shifting to a tech-first, AI-powered operations platform where Sales, Sourcing, Operations, and CX run on systems, automation, and intelligence. This role is the central execution engine for that layer: you find problems, structure them as product work, and keep ideas moving from spec to production.',
    responsibilities: [
      'Work with Sales, Sourcing, Operations, and founders to spot repetitive workflows, inefficiencies, and gaps; turn them into AI automations, internal tools, dashboards, and process fixes.',
      'Own the task pipeline end to end: maintain a continuous queue of work, break ideas into simple PRDs and small executable tasks, and prioritise by business impact, speed to deploy, and revenue or efficiency gain.',
      'Partner with developers and leverage no-code and AI tools (e.g. Lovable, GPT workflows) for fast build cycles; write clear specs, understand system logic, and test outputs rigorously — deep coding is not required.',
      'Own production and deployment: move features from idea through dev, testing, and release; keep release tracking, version notes, and bug visibility so you are the last-mile owner of execution.',
      'Build and evolve dashboards for sales performance, sourcing efficiency, placement and replacement metrics; use Supabase and internal systems to turn raw data into decisions.',
      'Run feedback loops with sales, field officers, and customers; continuously improve helper onboarding and the customer placement journey.',
      'Implement AI and automation where it matters: e.g. call summaries, WhatsApp flows, smarter matching, auto MIS — always tied to measurable ops outcomes.',
    ],
    requirements: [
      'Roughly 1–3 years in a product, ops-tech, or high-ownership role; mindset and execution matter more than exact tenure.',
      'Strong problem-solving and ability to break complex workflows into shippable slices.',
      'High ownership: you push work across the line, not only document it.',
      'Solid product thinking — structured written specs, clear acceptance criteria, and judgment on trade-offs.',
    ],
    niceToHave: [
      'No-code tools (Lovable, Zapier, or similar).',
      'Basic SQL and familiarity with Supabase or similar data stores.',
      'Hands-on use of AI tools (ChatGPT, automation workflows).',
      'CRM exposure and experience in operations-heavy or marketplace businesses.',
      'Mindset we value: execution over perfection, systems thinking, speed, iteration, data-informed decisions, AI-first instincts.',
    ],
    extraSections: [
      {
        title: 'Key projects',
        items: [
          'CHAP system enhancements',
          'Requirement management app',
          'Helper tracking and field-officer tracking apps',
          'AI-based CRM improvements',
          'Sales and sourcing dashboards',
          'Automation for WhatsApp and TeleCMI workflows',
          'Internal productivity tools (RACI, task trackers, and similar)',
        ],
      },
      {
        title: 'Success metrics',
        items: [
          'Features shipped per month',
          'Consistency of the task pipeline (minimal idle dev time)',
          'Reduction in manual processes',
          'Improvements in placement success, helper utilisation, and sales conversion',
          'Adoption of internal tools across teams',
        ],
      },
      {
        title: 'Why join',
        items: [
          'Work directly with founders',
          'Build systems from 0 → 1 → scale with outsized ownership from day one',
          'Exposure across AI, product, operations, and growth',
          'Credible path toward product leadership as the function matures',
        ],
      },
    ],
    applyEmail: 'contact@ezyhelpers.com',
    hasApplicationForm: true,
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
