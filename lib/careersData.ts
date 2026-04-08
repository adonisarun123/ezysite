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
  /** Which form to render when hasApplicationForm is true (defaults to apm if omitted) */
  applicationForm?: 'apm' | 'sales_executive'
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
    applicationForm: 'apm',
  },
  {
    slug: 'sales-executive-bangalore',
    title: 'Sales Executive',
    department: 'Sales',
    location: 'Bangalore (HSR Layout · on-site)',
    type: 'Full-time',
    team: 'Sales & growth',
    postedAt: '2026-03-16',
    excerpt:
      'Convert family inquiries into registrations and placements: inbound and outbound calls, clear explanations of how EzyHelpers works, disciplined CRM hygiene, and teamwork with sourcing and ops.',
    intro:
      'EzyHelpers helps urban households hire verified domestic professionals — maids, cooks, nannies, elderly caregivers, drivers, and more. Our sales team is the first voice families hear: you qualify needs, explain plans and pricing with transparency, and guide people to a confident “yes” while ops delivers a strong match. This is a full-time, office-based role in Bangalore for someone who likes talking to people, owns follow-ups, and thrives when targets are clear.',
    responsibilities: [
      'Handle inbound and outbound sales calls with customers seeking domestic help; qualify budget, role type, timing, location, and household preferences.',
      'Explain EzyHelpers’ service model, verification approach, process steps, plans, and charges clearly — no jargon, no pressure tactics.',
      'Guide interested customers through registration, payment or confirmation steps, and next milestones with calm professionalism.',
      'Follow up persistently on warm leads (calls, WhatsApp where appropriate) until closure or a clean disqualification — with notes every time.',
      'Maintain accurate lead data, call outcomes, and pipeline stages in CRM, spreadsheets, or internal tools your manager defines.',
      'Coordinate with sourcing and operations so customer promises in sales match what the field team can fulfil; flag mismatches early.',
      'Handle common objections (price, trust, timelines) with empathy; escalate edge cases to your lead when needed.',
      'Track personal and team targets (calls, registrations, confirmations, revenue contribution) and participate in daily or weekly sales huddles.',
      'Support repeat enquiries, renewals, or upsell paths where the playbook applies.',
    ],
    requirements: [
      'Strong spoken communication and persuasion — confident, respectful, never pushy.',
      'Ability to conduct sales conversations in English, Hindi, and Kannada (customers switch languages often).',
      'Solid listening skills: you can restate a family’s problem before you pitch.',
      'Disciplined follow-up habits; you treat “no answer yet” as a state to manage, not ignore.',
      'Comfort in a target-driven environment (individual and team KPIs).',
      'Basic hands-on comfort with CRM tools, Google Sheets / Excel, or similar — we will train you on our stack.',
      'Currently based in Bangalore (or able to relocate and work daily from our HSR Layout office).',
    ],
    niceToHave: [
      '1–3 years in tele-sales, inside sales, retail or service sales, or customer acquisition.',
      'Exposure to domestic staffing, recruitment, home services, edtech sales, or other high-trust consumer categories.',
      'Familiarity with Bangalore neighbourhoods and how families talk about household help.',
      'Prior use of diallers, WhatsApp Business, or ticketing tools alongside CRM.',
    ],
    extraSections: [
      {
        title: 'Key performance indicators',
        items: [
          'Leads worked and calls / meaningful conversations completed',
          'Follow-ups logged on time',
          'Customer registrations and service confirmations closed',
          'Placements or revenue attributed to your pipeline',
          'Lead-to-conversion ratio and funnel hygiene',
          'Contribution from repeat or renewal opportunities where applicable',
        ],
      },
      {
        title: 'What we are looking for',
        items: [
          'Someone who genuinely enjoys speaking with customers',
          'Trust-building and closure without aggressive hard-selling',
          'Neat records and predictable follow-through',
          'Ownership of personal targets and tight collaboration with operations for delivery',
        ],
      },
      {
        title: 'Why join EzyHelpers',
        items: [
          'Meaningful category — you help real families and workers every week',
          'Direct line of sight to revenue and growth',
          'Fast-paced, feedback-rich sales culture',
          'Room to grow into senior executive or team lead paths as we scale',
        ],
      },
      {
        title: 'Work setup and compensation',
        items: [
          'Full-time role based at our Bangalore office (HSR Layout) — not remote.',
          'Standard weekday hours; occasional flexibility during peak inquiry windows may be needed (aligned with your manager).',
          'Competitive fixed compensation plus performance-linked incentives — structure discussed with shortlisted candidates.',
          'Tools provided or supported: CRM, telephony / dialler as applicable, spreadsheets, and internal playbooks.',
        ],
      },
    ],
    applyEmail: 'contact@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'sales_executive',
  },
  {
    slug: 'field-officer-bangalore',
    title: 'Field Officer',
    department: 'Operations',
    location: 'Bangalore (field travel · HSR office base)',
    type: 'Full-time',
    team: 'Field operations',
    postedAt: '2026-04-08',
    excerpt:
      'On-ground verification, quality checks, and helper touchpoints across Bangalore — you make our “verified help” promise real before a family ever books.',
    intro:
      'EzyHelpers matches households with domestic professionals — maids, cooks, nannies, caregivers, drivers, and more. Trust is everything: families need to know who is entering their home, and helpers deserve a fair, respectful process. Field Officers are our eyes and ears in the city. You visit helpers, run checks and interviews per playbook, capture evidence in our tools, and flag anything that does not meet the bar. You work closely with sourcing, city ops, and sometimes sales so placements are safe, accurate, and fast.',
    responsibilities: [
      'Conduct field visits and in-person verification steps for helpers (identity, address, references, and other checks defined in our SOPs).',
      'Run structured interviews or screening conversations; assess fit, experience, and documentation; record outcomes clearly in CRM / internal apps the same day.',
      'Capture photos, documents, and notes per policy; ensure files are complete and legible for audit and quality review.',
      'Support helper onboarding touchpoints — briefings on expectations, app usage where applicable, and next steps after verification.',
      'Perform quality audits, spot checks, or re-verifications when ops or leadership flags risk or repeat issues.',
      'Coordinate with sourcing and city ops on schedules, priorities, and escalations; communicate delays or blockers early.',
      'Represent EzyHelpers professionally with helpers and, when required, with families for in-person fit or clarification visits (as per playbook).',
      'Follow safety guidelines for solo field work; use check-ins and reporting lines as defined by the company.',
      'Maintain daily activity logs (visits, outcomes, mileage or time) so dashboards and SLAs stay accurate.',
    ],
    requirements: [
      'Comfort with full-time field work across Bangalore — different neighbourhoods, traffic, and schedules.',
      'Valid two-wheeler license and own vehicle preferred; ability to travel independently for most of the workday.',
      'Strong smartphone skills: mobile apps, WhatsApp, maps, and uploading photos or forms without friction.',
      'Clear communication in English and Hindi; Kannada is important for many local conversations — you should be able to hold basic professional dialogues in all three where needed.',
      'High integrity and discretion when handling IDs, addresses, and personal data.',
      'Reliable documentation habits — if it is not logged, it did not happen.',
      'Respect for domestic workers; firm on standards without being dismissive or rude.',
    ],
    niceToHave: [
      '1–2 years in field verification, background checks, staffing, security, logistics, or gig / hyperlocal ops.',
      'Experience with domestic help, facility services, or marketplace field teams in India.',
      'Familiarity with Bangalore localities and commute patterns.',
      'Prior use of CRM, ticketing, or field-force apps.',
    ],
    extraSections: [
      {
        title: 'Typical day (illustrative)',
        items: [
          'Start from HSR or a defined reporting point; pick up the day’s visit list and priorities from ops.',
          'Travel to helper locations; run verification and interviews; upload proof and notes.',
          'Sync with sourcing or team lead on edge cases, rejections, or re-schedules.',
          'End-of-day: close loops in tools, hand off open items, prep tomorrow’s route where possible.',
        ],
      },
      {
        title: 'How we measure success',
        items: [
          'Verification cases completed on time with complete, audit-ready records',
          'Quality of field notes and adherence to SOPs',
          'Accuracy (low rework / low dispute rate tied to verification gaps)',
          'Collaboration signals from sourcing and city ops',
          'Professional conduct in helper and customer interactions',
        ],
      },
      {
        title: 'Work setup',
        items: [
          'Full-time employment; primarily field-based with regular reporting into our Bangalore office (HSR Layout).',
          'Compensation and field-allowance structure discussed with shortlisted candidates.',
          'Company will share safety, dress, and conduct guidelines for field work.',
        ],
      },
      {
        title: 'Why join',
        items: [
          'Direct impact on family safety and helper dignity in a category that needs better standards',
          'Clear growth path toward senior field, team lead, or city ops roles as we scale',
          'Structured playbooks and tools — not arbitrary “figure it out” field work',
        ],
      },
    ],
    applyEmail: 'contact@ezyhelpers.com',
  },
  {
    slug: 'sourcing-lead-bangalore',
    title: 'Sourcing Lead (Field + Tele)',
    department: 'Operations',
    location: 'Bangalore (HSR office · field + floor)',
    type: 'Full-time',
    team: 'Supply & sourcing',
    postedAt: '2026-04-09',
    excerpt:
      'Own EzyHelpers’ supply engine: Field Officers on the ground and tele-sourcing callers — consistent helper inflow, strong profiles, fast path to placement, tight coordination with sales.',
    intro:
      'EzyHelpers connects families with verified domestic help across live-in, full-time, part-time, and on-demand categories. None of that works without a healthy, honest supply pool. The Sourcing Lead owns the full funnel from lead to “ready to place”: field sourcing, calling, profiling, verification handoffs, and quality control. You manage Field Officers and tele-sourcing executives, set territories and targets, enforce discipline (check-ins, daily reporting, dashboards), and partner with sales so the right helper reaches the right requirement quickly. Supply is our biggest growth lever — this role sits on the engine.',
    responsibilities: [
      'Own end-to-end supply: lead → call → profile → verify → ready → placement; ensure daily visibility of pipeline and bottlenecks.',
      'Maintain availability of helpers across live-in, full-time, part-time, and on-demand; balance category mix with sales demand.',
      'Lead Field Officers: territories, daily visit targets, sourcing tactics by area; track visits, leads generated, profiles created, and productivity.',
      'Enforce field discipline: app check-in/check-out, live tracking where used, daily work reporting (DWR), and escalation when standards slip.',
      'Manage tele-sourcing: call volumes, connect rates, lead-to-profile conversion, follow-up rigour; allocate leads fairly and track performance.',
      'Build and refine systems for lead allocation, call logging, and performance monitoring (CRM, sheets, internal tools).',
      'Own profile quality: complete, accurate, role-aligned records to cut wrong matches, customer rejections, and unnecessary replacements.',
      'Ensure verification and compliance pathways are followed: Aadhaar, background checks, police verification where applicable; keep the supply pool audit-ready.',
      'Partner with sales on fast matching, placement success, time to closure, and profile-to-placement ratio; surface supply gaps before they hit revenue.',
      'Spot skill and expectation gaps; coordinate basic training or readiness steps so helpers are job-ready, salary-aligned, and expectation-aligned.',
      'Track field metrics (leads and profiles per FO, cost per helper), tele metrics (calls, connects, conversions), and overall pool health (active helpers, placement conversion, replacement rate, time to closure).',
      'Write and improve SOPs for field sourcing, tele sourcing, and profiling; push speed, quality, and efficiency without cutting corners.',
    ],
    requirements: [
      'Roughly 3–6 years in blue-collar hiring, staffing, recruitment, or high-volume supply ops — with hands-on experience managing both field teams and tele-calling teams.',
      'Proven people leadership: coaching, targets, attendance and output control for on-ground and phone-based teams.',
      'Target-driven execution: you plan in weekly and daily horizons, not only in decks.',
      'Comfort with data: dashboards, conversion funnels, and using numbers to reallocate effort.',
      'Strong systems for follow-up, quality checks, and accountability — you cannot stand chaos without fixing it.',
      'High ownership in ambiguous, high-pressure environments; solution-oriented when volume spikes or demand shifts.',
      'Based in Bangalore (or able to relocate); able to be present with field and floor teams as needed from HSR Layout.',
      'Professional communication in English and Hindi; Kannada is a strong plus for local helper and partner conversations.',
    ],
    niceToHave: [
      'Domestic staffing, home services, gig, or marketplace supply experience in India.',
      'Prior use of diallers, field-force apps, and CRM for supply or recruitment.',
      'Exposure to verification vendors, police verification processes, or compliance checklists.',
    ],
    extraSections: [
      {
        title: 'Key KPIs',
        items: [
          'Daily / weekly helper sourcing output',
          'Active helper pool size and health by category',
          'Lead → profile → placement conversion',
          'Replacement rate as a quality signal',
          'Cost per acquisition where tracked',
          'Time to closure from profile-ready to placement',
          'Field Officer productivity (visits, leads, profiles)',
          'Tele caller productivity (calls, connects, conversions)',
        ],
      },
      {
        title: 'Why this role matters',
        items: [
          'Supply directly drives revenue, NPS, and trust in a two-sided marketplace',
          'You build the operating system that keeps sales honest and customers served',
          'Visible impact: when supply works, the whole company feels it',
        ],
      },
      {
        title: 'Growth path',
        items: [
          'Sourcing Lead → City Supply Head → Regional supply / ops leadership',
          'Performance and scale create room to expand mandate quickly',
        ],
      },
      {
        title: 'What to expect',
        items: [
          'High ownership, high tempo, high impact — not a theoretical strategy role',
          'Full-time role centred in Bangalore with field and tele floor exposure',
          'Compensation and variable structure discussed with shortlisted candidates',
        ],
      },
    ],
    applyEmail: 'contact@ezyhelpers.com',
  },
]

export function getJobBySlug(slug: string): JobOpening | undefined {
  return jobOpenings.find((j) => j.slug === slug)
}
