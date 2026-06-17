export type JobOpeningExtraSection = {
  title: string
  items: string[]
}

export type JobCategory =
  | "Founder's Office"
  | 'Product & Engineering'
  | 'Sales'
  | 'Operations'
  | 'City Leadership'
  | 'People & HR'
  | 'Care Services'
  | 'Specialist Care'
  | 'Business Development'
  | 'Marketing & Content'

export type JobOpening = {
  slug: string
  title: string
  department: string
  /** High-level grouping used to render category sections on the careers page */
  category: JobCategory
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
  applicationForm?: 'apm' | 'sales_executive' | 'role'
}

/** Ordered category list. Determines the section order on the /careers page. */
export const JOB_CATEGORY_ORDER: JobCategory[] = [
  "Founder's Office",
  'Product & Engineering',
  'Sales',
  'Operations',
  'City Leadership',
  'People & HR',
  'Care Services',
  'Specialist Care',
  'Business Development',
  'Marketing & Content',
]

/** Short description shown under each category heading on the /careers page. */
export const JOB_CATEGORY_BLURBS: Record<JobCategory, string> = {
  "Founder's Office":
    "Work alongside the founders on the highest-leverage problems across the business.",
  'Product & Engineering':
    'Build the tech and AI layer that powers sales, sourcing, operations, and CX.',
  Sales:
    'First voice families hear — qualify needs, explain plans, and guide families to the right help.',
  Operations:
    'The engine that keeps placements, supply, and quality running every day.',
  'City Leadership':
    'Own a city like a business unit — P&L, supply, demand, and a local team.',
  'People & HR':
    'Onboarding, MIS, and the workforce backbone that keeps placements moving.',
  'Care Services':
    'Field caregivers who go to homes — elder care, patient care, and live-in roles.',
  'Specialist Care':
    'Trained for specific conditions — dementia, post-surgery, and clinical home visits.',
  'Business Development':
    'Build partnerships with hospitals, vendors, and referral networks across the city.',
  'Marketing & Content':
    'Brand voice, growth performance, and the content that helps families decide.',
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
    category: "Founder's Office",
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
    category: 'Product & Engineering',
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
    slug: 'junior-software-developer-bangalore',
    title: 'Junior Software Developer',
    department: 'Engineering',
    category: 'Product & Engineering',
    location: 'Bengaluru',
    type: 'Full-time',
    team: 'Engineering · Python / Django',
    postedAt: '2026-06-02',
    excerpt:
      'Build and ship features on CHAP, our internal CRM, with Python and Django. A high-ownership role for someone eager to learn, with direct mentorship and a clear path to Mid-Level Software Engineer.',
    intro:
      'Founded in 2020, EzyHelpers is transforming India’s domestic workforce ecosystem through technology. Our platform connects thousands of families with trained and verified domestic helpers, while empowering workers with better opportunities, skill development, and dignified employment. We work closely with industry partners and skill development organisations to create meaningful impact, and our engineering team builds and maintains the platform that powers this mission — from customer onboarding to payment processing and beyond.\n\nWe are looking for a Junior Software Developer who is eager to learn, build, and grow with a fast-moving product team. You will work directly on CHAP, our internal CRM platform, and contribute to features that are used in production by our operations and business teams every day.',
    responsibilities: [
      'Build and improve customer, helper, and job management modules within our Django-based CRM platform.',
      'Develop new features and maintain existing application code using Python and Django.',
      'Integrate third-party services including payment gateways and communication APIs (e.g. WhatsApp, SMS).',
      'Create internal reports, dashboards, and business workflow automation tools.',
      'Debug and resolve issues in production applications in a timely and reliable manner.',
      'Collaborate with senior developers through code reviews and pair programming sessions.',
      'Write clean, maintainable code with appropriate documentation and test coverage.',
    ],
    requirements: [
      '0–2 years of professional or project-based experience in Python development.',
      'Basic understanding of Django or a comparable web framework.',
      'Working knowledge of SQL and relational databases (PostgreSQL preferred).',
      'Familiarity with HTML, CSS, JavaScript and an understanding of how web applications work.',
      'Strong problem-solving instincts and a genuine willingness to learn on the job.',
      'Basic familiarity with Docker and containerised development environments.',
      'Ability to communicate clearly with teammates and ask good questions.',
    ],
    niceToHave: [
      'Experience building or consuming REST APIs.',
      'Familiarity with Bootstrap or other frontend frameworks.',
      'Understanding of Git workflows, branching, and pull request practices.',
      'Exposure to Celery, Redis, or background task processing.',
      'Any prior experience with CRM systems, fintech, or SaaS products.',
    ],
    extraSections: [
      {
        title: 'What you’ll gain',
        items: [
          'Hands-on experience working on a live production platform with real users and real stakes.',
          'Deep exposure to payment integrations, CRM architecture, and communication pipeline development.',
          'Direct mentorship from experienced engineers on technical decisions and engineering best practices.',
          'A clear growth trajectory towards a Mid-Level Software Engineer role within the organisation.',
          'The opportunity to work on a product that creates genuine social and economic impact.',
        ],
      },
    ],
    applyEmail: 'contact@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'sales-executive-bangalore',
    title: 'Sales Executive',
    department: 'Sales',
    category: 'Sales',
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
    category: 'Operations',
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
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'sourcing-lead-bangalore',
    title: 'Sourcing Lead (Field + Tele)',
    department: 'Operations',
    category: 'Operations',
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
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'supply-sourcing-executive-bangalore',
    title: 'Supply Sourcing Executive',
    department: 'Operations',
    category: 'Operations',
    location: 'Bangalore (HSR Layout · on-site)',
    type: 'Full-time',
    team: 'Supply & sourcing',
    postedAt: '2026-04-15',
    excerpt:
      'Tele-sourcing engine for verified helpers: outbound and inbound calls, complete profiles, disciplined CRM and follow-ups, and tight handoffs to field verification — you keep supply moving so sales can place with confidence.',
    intro:
      'EzyHelpers matches families with verified domestic professionals — live-in and full-time maids, part-time help, cooks, nannies, caregivers, drivers, and more. Sales only works when supply is real: accurate profiles, honest availability, and helpers who are ready for verification and placement. Supply Sourcing Executives are the voice of our supply funnel on the phone. You call leads and inbound interest, explain how we work with fairness and clarity, build structured profiles in our tools, chase documentation and follow-ups like a professional recruiter, and coordinate with Field Officers and sourcing leads so nothing stalls between “interested” and “ready to match.” This is a full-time, office-based role in HSR Layout for someone who likes high-volume calling, owns their pipeline, and cares about quality as much as volume.',
    responsibilities: [
      'Run outbound and inbound tele-sourcing campaigns to recruit helpers and job-seekers across categories (live-in, full-time, part-time, on-demand) using lead lists, referrals, and inbound callbacks as assigned.',
      'Conduct structured phone screening: experience, role fit, salary expectations, location and timing, family constraints, and basic eligibility; capture outcomes clearly in CRM or internal tools the same day.',
      'Build complete, accurate helper profiles — skills, work history, references where applicable, availability, and category — so matching and field verification are not reworked later.',
      'Drive follow-up discipline: callbacks, document collection reminders, no-show recovery, and status updates until a lead is profiled, disqualified for a clear reason, or handed to field with a clean brief.',
      'Maintain CRM / sheet hygiene: call logs, dispositions, next actions, and pipeline stages so dashboards, targets, and lead allocation stay truthful.',
      'Coordinate with Field Officers and sourcing leadership on visit scheduling, priority geographies, and edge cases (documentation gaps, salary misalignment, risk flags).',
      'Hit and track personal metrics: dials, meaningful connects, profiles created or advanced, verification handoffs, and conversion ratios defined by your manager.',
      'Represent EzyHelpers professionally on every call — respectful tone with workers, no false promises on earnings or placements, and adherence to consent and data-handling norms.',
      'Participate in daily or weekly huddles; share learnings on what messaging or lead sources convert; suggest improvements to scripts, lists, or process within the playbook.',
    ],
    requirements: [
      'Strong spoken communication for high-volume phone work — clear, patient, and confident without sounding scripted or pushy.',
      'Ability to hold professional conversations in English and Hindi; Kannada is important for many helper-side conversations in Bangalore.',
      'Prior experience in tele-calling, recruitment calling, BPO/KPO outbound, inside sales, or high-volume customer/supplier outreach (roughly 6 months–3 years is typical; judgment and output matter more than exact tenure).',
      'Comfort with targets and activity metrics (calls, connects, conversions) and honest self-reporting.',
      'Basic digital literacy: CRM, spreadsheets, WhatsApp coordination, and typing notes while on calls or immediately after.',
      'High ownership of your pipeline — you treat “no answer” and “call back Tuesday” as states to manage, not forget.',
      'Full-time availability from our Bangalore office (HSR Layout); this is not a remote role.',
    ],
    niceToHave: [
      'Blue-collar hiring, staffing agency, domestic help, gig, hyperlocal, or marketplace supply-side calling experience.',
      'Familiarity with Bangalore neighbourhoods and how domestic workers describe roles and pay.',
      'Exposure to diallers, click-to-call, or telephony integrated with CRM.',
      'Any prior coordination with field teams or verification workflows.',
    ],
    extraSections: [
      {
        title: 'What success looks like',
        items: [
          'Consistent daily output: planned dials, connects, and logged outcomes',
          'Strong lead → profile conversion without sacrificing accuracy',
          'Low rework from field or matching due to sloppy or incomplete tele notes',
          'Predictable follow-ups — fewer “lost” leads in the funnel',
          'Professional helper experience on the phone (respect, clarity, no over-promising)',
        ],
      },
      {
        title: 'Key performance indicators',
        items: [
          'Call and connect volumes (as defined for your pod)',
          'Profile creation and profile completeness rates',
          'Time from first touch to verification-ready handoff',
          'Conversion from sourced lead to active, placeable supply',
          'CRM hygiene and on-time dispositioning',
        ],
      },
      {
        title: 'Work setup and compensation',
        items: [
          'Full-time employment based at our HSR Layout office with standard weekday hours; peak windows may align with helper availability (per team norms).',
          'Competitive fixed pay plus performance-linked components where applicable — detailed with shortlisted candidates.',
          'Tools: CRM, telephony or dialler as configured, internal playbooks, and training on profile templates.',
        ],
      },
      {
        title: 'Why join EzyHelpers',
        items: [
          'Direct impact on whether families get safe, timely matches',
          'Clear path toward senior tele-sourcing, team lead, or broader sourcing ops as you prove throughput and quality',
          'Structured playbooks in a category that still runs too much on chaos elsewhere',
        ],
      },
    ],
    applyEmail: 'contact@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'city-head-ghaziabad',
    title: 'City Head – Ghaziabad',
    department: 'City leadership',
    category: 'City Leadership',
    location: 'Ghaziabad',
    type: 'Full-time',
    team: 'City P&L & growth',
    postedAt: '2026-04-10',
    excerpt:
      'Own end-to-end business performance in Ghaziabad: P&L, demand and supply, operations, and local growth — building a high-efficiency, profitable city.',
    intro:
      'EzyHelpers connects households with verified domestic help at scale. The City Head for Ghaziabad drives the full city like a business unit: revenue and margins, lead generation and conversion, helper supply and field execution, placement quality, and team performance. You will partner with central teams while owning what happens on the ground across Ghaziabad’s micro-markets.',
    responsibilities: [
      'Own city P&L: placements, revenue, margins, and cost efficiency; improve unit economics over time.',
      'Generate consistent demand through society tie-ups, referrals, local marketing, and disciplined sales conversion.',
      'Ensure helper availability: sourcing channels, field officers, and a healthy supply–demand balance.',
      'Run operations for a fast placement cycle with fewer escalations and delays; protect customer experience.',
      'Lead the local team across sales, sourcing, and field; set targets, track performance, and drive accountability.',
      'Uphold verification, documentation, and process compliance; keep system records accurate and audit-ready.',
      'Build partnerships with societies, agents, and local networks to expand presence across Ghaziabad.',
    ],
    requirements: [
      'Graduate.',
      'Roughly 3–6 years in sales, operations, or business roles with ownership of outcomes and targets.',
      'Proven ability to lead small teams and manage execution, not only planning.',
      'Strong problem-solving mindset and comfort with ambiguity in a growing market.',
      'Based in or able to work full-time from Ghaziabad.',
    ],
    niceToHave: [
      'Experience in domestic staffing, home services, or marketplace city ops in India.',
      'Exposure to P&L reporting, funnel metrics, and partnership-led growth.',
    ],
    extraSections: [
      {
        title: 'Key KPIs',
        items: [
          'Revenue and placements',
          'Conversion rate',
          'Supply availability',
          'Cost efficiency',
          'Customer satisfaction',
          'Replacement rate',
        ],
      },
      {
        title: 'What you will gain',
        items: [
          'Ownership of a city-level business',
          'Fast growth opportunities',
          'Exposure to business strategy and execution',
        ],
      },
    ],
    applyEmail: 'contact@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'city-head-chennai',
    title: 'City Head – Chennai',
    department: 'City leadership',
    category: 'City Leadership',
    location: 'Chennai',
    type: 'Full-time',
    team: 'City launch & scale',
    postedAt: '2026-04-10',
    excerpt:
      'Launch and scale Chennai: full P&L, supply and demand, operations, and team performance — from early growth to a stable, profitable market.',
    intro:
      'Chennai is a strategic expansion market for EzyHelpers. As City Head, you own the journey from early traction to a repeatable, profitable operation: demand generation, supply and verification, placement velocity, and local team building. You will represent EzyHelpers with societies and communities and ensure our “verified help” promise shows up in execution, not only in messaging.',
    responsibilities: [
      'Own city revenue and profitability; drive placements, margins, and operational efficiency.',
      'Build demand through local marketing, apartment and society tie-ups, and referral networks with strong conversion discipline.',
      'Build supply pipelines (agents, field networks) and ensure availability of verified, profile-ready helpers.',
      'Run the placement lifecycle end to end: requirement → matching → placement → support; improve closure speed and satisfaction.',
      'Hire, coach, and manage sales, sourcing, and field teams with clear daily accountability.',
      'Ensure verification and documentation SOPs are followed and CHAP / internal systems stay clean.',
      'Drive local partnerships and brand trust so EzyHelpers is a preferred name for domestic help in Chennai.',
    ],
    requirements: [
      'Graduate; MBA is a plus.',
      'Roughly 3–7 years combining sales and operations execution, ideally with team management.',
      'Understanding of local market dynamics and ability to execute on the ground.',
      'Leadership skills: clarity, follow-through, and performance culture.',
      'Based in or able to relocate to Chennai full-time.',
    ],
    niceToHave: [
      'Prior startup or marketplace experience.',
      'Experience launching or scaling a new city or region.',
    ],
    extraSections: [
      {
        title: 'Key KPIs',
        items: [
          'Revenue and profitability',
          'Placement volume',
          'Conversion rate',
          'Supply readiness',
          'Customer satisfaction',
          'Replacement rate',
        ],
      },
      {
        title: 'What you will gain',
        items: [
          'Build a new market from the ground up',
          'High ownership and autonomy',
          'Direct interaction with founders',
          'Leadership growth opportunities',
        ],
      },
    ],
    applyEmail: 'contact@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'city-head-hyderabad',
    title: 'City Head – Hyderabad',
    department: 'City leadership',
    category: 'City Leadership',
    location: 'Hyderabad',
    type: 'Full-time',
    team: 'City P&L & growth',
    postedAt: '2026-04-10',
    excerpt:
      'Act as the CEO of the Hyderabad city unit: P&L, revenue growth, supply–demand balance, operations, and team performance in a high-ownership role.',
    intro:
      'Hyderabad is a full P&L mandate. You own revenue, cost, and contribution margin; you build lead pipelines across digital, partnerships, societies, and referrals; you ensure verified helper supply keeps pace with demand; and you run operations from requirement through post-placement support. This role suits someone who thrives in a fast-paced startup and wants to scale a city from traction to a durable business.',
    responsibilities: [
      'Own monthly targets on placements, revenue, and contribution margins; optimise unit economics (e.g. CAC, cost per placement).',
      'Scale demand: digital and local partnerships, society activations, referrals; manage lead → conversion funnel with central marketing alignment.',
      'Own helper acquisition: sourcing team and field officers, agent and referral networks, healthy supply–demand ratio.',
      'Drive operations excellence across requirement → sourcing → onboarding → placement → post-placement; reduce TAT, replacements, and escalations.',
      'Hire, train, and manage sales, sourcing, and field teams with high accountability and daily performance tracking.',
      'Enforce verification and compliance (e.g. Aadhaar, e-court where applicable), documentation completeness, and disciplined CHAP updates.',
      'Expand via societies, RWAs, agents, and influencers; identify micro-markets for growth within Hyderabad.',
    ],
    requirements: [
      'Graduate; MBA preferred but not mandatory.',
      'Roughly 3–7 years across operations, sales, and/or business management with mandatory experience managing teams and targets.',
      'Strong grasp of P&L and business metrics; data-informed decision making.',
      'High ownership, problem-solving, and ability to thrive in ambiguity.',
      'Based in or able to relocate to Hyderabad full-time.',
    ],
    niceToHave: [
      'Marketplace or high-volume services experience in India.',
      'Prior ownership of a geography or P&L line.',
    ],
    extraSections: [
      {
        title: 'Key KPIs',
        items: [
          'Monthly revenue and profitability',
          'Successful placements',
          'Cost per placement',
          'Supply availability and quality',
          'Lead → closure conversion',
          'Customer satisfaction and repeat rate',
          'Replacement rate reduction',
        ],
      },
      {
        title: 'What you will gain',
        items: [
          'Ownership of a complete business unit',
          'Exposure to founders and strategic decisions',
          'Path to senior leadership as the city scales',
          '0 → scale market-building experience',
        ],
      },
    ],
    applyEmail: 'contact@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'city-head-delhi',
    title: 'City Head – Delhi',
    department: 'City leadership',
    category: 'City Leadership',
    location: 'Delhi',
    type: 'Full-time',
    team: 'City P&L & growth',
    postedAt: '2026-04-10',
    excerpt:
      'Lead one of EzyHelpers’ highest-potential markets: P&L, aggressive growth, operations, and expansion across Delhi.',
    intro:
      'Delhi demands sharp execution at scale. You will own growth targets, revenue and city-level profitability, and the operating rhythm that connects demand, supply, placements, and customer experience. You build and lead a high-performance local team, deepen partnerships with premium societies and referral ecosystems, and use data to steer CAC, LTV, and supply–demand balance.',
    responsibilities: [
      'Drive aggressive growth and city-level P&L: revenue, margins, and profitability.',
      'Scale high-quality leads through digital, partnerships, and on-ground activations; lift conversion consistently.',
      'Build sourcing pipelines and ensure strong availability of verified helpers.',
      'Run seamless placement journeys: reduce turnaround time and escalations.',
      'Build and manage a high-performance local team with clear accountability.',
      'Develop partnerships with premium societies and networks; strengthen referral flywheels.',
    ],
    requirements: [
      'Graduate; MBA preferred.',
      'Roughly 4–8 years in sales, operations, or general management with leadership experience.',
      'Strong execution bias and comfort owning targets end to end.',
      'Data-driven decision making on funnel, unit economics, and supply health.',
      'Based in or able to work full-time from Delhi.',
    ],
    niceToHave: [
      'Experience in consumer services, staffing, or marketplace businesses in metros.',
    ],
    extraSections: [
      {
        title: 'Key KPIs',
        items: [
          'Revenue growth',
          'Placement volume',
          'CAC vs LTV',
          'Supply–demand balance',
        ],
      },
    ],
    applyEmail: 'contact@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'city-head-bareilly',
    title: 'City Head – Bareilly',
    department: 'City leadership',
    category: 'City Leadership',
    location: 'Bareilly',
    type: 'Full-time',
    team: 'City P&L & growth',
    postedAt: '2026-04-10',
    excerpt:
      'Mini-CEO for Bareilly: own revenue, cost, profitability, supply, demand, field execution, and team performance end to end.',
    intro:
      'Bareilly is an owned city business for EzyHelpers. You run P&L and monthly targets on placements and margins, build local demand through inbound, societies, and marketing, and keep helper supply aligned with sales. You lead sales, sourcing, and field officers, enforce verification and CHAP discipline, and grow through apartments, agents, and local influencers.',
    responsibilities: [
      'Own revenue, cost, and profitability; hit monthly placement and margin targets; improve unit economics.',
      'Build and manage local lead channels; convert inbound, society partnerships, and marketing into closed business.',
      'Ensure consistent quality helper supply; manage sourcing and field officers; maintain supply–demand balance.',
      'Optimise requirement → onboarding → placement flow; minimise escalations and improve satisfaction.',
      'Hire, train, and manage sales, sourcing, and field teams with daily performance tracking.',
      'Ensure verification and documentation completeness; maintain CHAP hygiene.',
      'Expand via apartments, agents, and local partners with a clear city growth plan.',
    ],
    requirements: [
      'Graduate; MBA preferred.',
      'Roughly 3–7 years in operations, sales, or business roles with team and target ownership.',
      'Business acumen and comfort with P&L-style thinking.',
      'Problem-solving mindset and high ownership.',
      'Based in or able to work full-time from Bareilly.',
    ],
    niceToHave: [
      'Tier-2 / tier-3 city operating experience.',
      'Domestic help or services category exposure.',
    ],
    extraSections: [
      {
        title: 'Key KPIs',
        items: [
          'Monthly revenue and profitability',
          'Placements',
          'Supply availability',
          'Conversion rates',
          'Customer satisfaction and repeat rate',
        ],
      },
      {
        title: 'What you will gain',
        items: [
          'Full ownership of a business unit',
          'Direct exposure to founders',
          'Path to senior leadership as we scale',
        ],
      },
    ],
    applyEmail: 'contact@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'senior-hr-executive-bangalore',
    title: 'Senior HR Executive',
    department: 'People & HR',
    category: 'People & HR',
    location: 'Bangalore (HSR Layout · office)',
    type: 'Full-time',
    team: 'People operations',
    postedAt: '2026-04-10',
    excerpt:
      'Senior operational HR owning helper onboarding, verification, internal hiring, MIS, and compliance end to end — setting up the processes and mentoring the team that keep our workforce engine running at scale.',
    intro:
      'This is a hands-on senior HR role with real ownership. You will own helper onboarding end to end (verification, documentation, CHAP), drive internal hiring for sales, field, and ops, and build the trackers, MIS, and SOPs that keep requirement → onboarding → placement fast and audit-ready. You will mentor junior HR and coordinators, partner with sales, sourcing, and field leads as their go-to HR point of contact, and bring structure where things are still scaling. You care deeply about accuracy, compliance, and a positive, disciplined workplace — and you can lead from the front while doing it.',
    responsibilities: [
      'Own and continuously improve helper onboarding and documentation: Aadhaar and checks per process, complete files, accurate CHAP records; set the standard for profile readiness with sourcing and field.',
      'Lead internal recruitment end to end: drive pipelines, candidate coordination, and hiring TAT for roles such as sales executives and field officers, and own closures.',
      'Build and maintain HR operations, MIS, and dashboards: joiners, active employees, attrition, attendance and leaves; deliver weekly and monthly reporting with insights, not just numbers.',
      'Own employee and helper lifecycle: induction, issue resolution, replacements, retention, and churn analysis with corrective actions.',
      'Define and enforce compliance with verification standards and HR policies; write and maintain SOPs and keep records audit-ready.',
      'Mentor and guide junior HR executives and coordinators; review their work and raise the bar on quality and discipline.',
      'Act as the senior HR partner to sales (requirements), sourcing (pipeline), and field officers (ground validation) to remove handoff delays and resolve escalations.',
      'Lead engagement initiatives, handle sensitive employee queries, and champion a respectful, high-discipline culture.',
    ],
    requirements: [
      'Graduate in any discipline; HR, BBA, or MBA preferred.',
      '4–7 years of HR/recruitment/operations experience, including ownership of processes and some team or mentoring exposure.',
      'Strong communication in Hindi and English; Kannada is a plus.',
      'High ownership and accountability; proven ability to build process, juggle multiple workstreams, and drive closures independently.',
      'Strong reporting and analytical discipline; comfortable turning MIS into decisions.',
      'Full-time, work from office in Bangalore (HSR Layout).',
    ],
    niceToHave: [
      'Experience leading or mentoring a small HR/ops team.',
      'Blue-collar or high-volume hiring experience at scale.',
      'Strong Excel or Google Sheets skills; comfort building dashboards and SOPs.',
    ],
    extraSections: [
      {
        title: 'Key KPIs',
        items: [
          'Helpers onboarded per week and onboarding TAT',
          'Documentation and CHAP data accuracy',
          'Hiring TAT and closure rate for internal roles',
          'Attrition reduction and retention',
          'Process and SOP compliance (audit-ready)',
          'Coordination efficiency (requirement → closure)',
        ],
      },
      {
        title: 'Working style',
        items: [
          'High responsiveness and ownership',
          'Daily reporting and review discipline',
          'Strong follow-up and escalation culture',
          'Leads from the front while juggling multiple workstreams',
        ],
      },
      {
        title: 'Growth path',
        items: [
          'HR Manager',
          'Operations lead',
          'People & culture lead',
        ],
      },
      {
        title: 'Why EzyHelpers',
        items: [
          'Hands-on exposure to high-scale operations',
          'Real blue-collar workforce management',
          'Direct exposure to founders and decisions',
          'Impact-heavy role, not theory-only',
        ],
      },
    ],
    applyEmail: 'contact@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'elder-care-attendant-bangalore',
    title: 'Elder Care Attendant',
    department: 'Care Services',
    category: 'Care Services',
    location: 'Bangalore (across the city · within 10 km of your address)',
    type: 'Full-time',
    team: 'Field caregiving',
    postedAt: '2026-05-09',
    excerpt:
      'Care for an aging parent in their own home — companionship, daily living, gentle dignity. 60-hour paid training, 24×7 care-manager support, and a real path to higher-paying live-in or specialist roles.',
    intro:
      'Elder care attendants are the heart of what we do. You spend your days in a Bangalore family’s home, looking after a senior parent — helping with bathing, meals, medication reminders, walks in the garden, and quiet conversations through long afternoons. It is not nursing. It is closer to family work, done by trained, kind people who are paid fairly for it. We train you for 60 hours before your first placement, and we keep you supported with a care manager you can call at any hour, and a supervisor who visits the home every two weeks. Most elder care attendants stay with the same family for 6 to 9 months — long enough that the patient asks for you by name on your day off.',
    responsibilities: [
      'Personal hygiene assistance — bathing, grooming, oral and nail care.',
      'Help with dressing and changing, with dignity always first.',
      'Meal preparation per the patient’s dietary plan and feeding when needed.',
      'Medication reminders at the right times, logged in our app.',
      'Vitals tracking — blood pressure, sugar, temperature, oxygen saturation.',
      'Mobility support and fall-prevention checks throughout the day.',
      'Companionship — conversation, walks, reading aloud, light music.',
      'Light housekeeping inside the patient’s room (not the whole house).',
      'Daily updates to family on WhatsApp at the end of each shift.',
      'Escalate any health change, however small, to the care manager.',
      'Maintain a clean appearance and wear the EzyHelpers uniform on duty; carry your ID badge at all times.',
    ],
    requirements: [
      '10th standard pass (or equivalent).',
      'Spoken comfort in at least one of: Kannada, Tamil, Telugu, Malayalam, Hindi, English.',
      'Aadhaar card and one address proof.',
      'Two references we can call.',
      'Physical fitness — able to support a patient with mobility.',
      'Patience with elderly people, especially those with memory loss.',
    ],
    niceToHave: [
      'Prior caregiving or hospital-attendant experience.',
      'A second language.',
      'Basic smartphone comfort (we’ll train on our app).',
      'First-aid awareness.',
    ],
    extraSections: [
      {
        title: 'Shift options',
        items: [
          'Choice of 12-hour day shift.',
          '12-hour night shift.',
          '4-hour hourly visits.',
        ],
      },
      {
        title: 'Compensation & benefits',
        items: [
          '₹15,000–₹25,000 / month.',
          'Weekly paid off (one day a week, with a relief caregiver covering).',
          'Monthly performance bonus up to ₹3,000.',
          'Group accident insurance during shifts.',
          'Festival bonus twice a year.',
          'Annual paid leave (10 days).',
          'Free refresher training every six months — paid.',
        ],
      },
      {
        title: 'What we invest in you',
        items: [
          '60-hour paid training programme before your first placement.',
          'Uniform, ID card, and basic care kit.',
          'Care manager you can reach 24×7 from your phone.',
          'Bi-weekly supervisor home visit while you’re on placement.',
        ],
      },
      {
        title: 'Career path',
        items: [
          'Months 0–6 · Elder Care Attendant — build reliability and family ratings.',
          'Months 6–12 · Live-in Caregiver (₹22–35k/month).',
          'Year 2+ · Dementia / Bedridden Specialist (₹25–40k/month).',
          'Year 3+ · Care Supervisor (salaried, off-field).',
        ],
      },
    ],
    applyEmail: 'careers@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'patient-care-attendant-bangalore',
    title: 'Patient Care Attendant',
    department: 'Care Services',
    category: 'Care Services',
    location: 'Bangalore (placements often align with discharging hospital location)',
    type: 'Full-time',
    team: 'Field caregiving',
    postedAt: '2026-05-09',
    excerpt:
      'Bring hospital-grade attentiveness home — for recovery, chronic illness, and post-discharge. 80-hour training with supervised hospital exposure, ₹18–30k/month, and a sponsored bridge to formal home-nursing qualification.',
    intro:
      'Patient care attendants are the step up from elder care. You work with patients freshly discharged from hospital, or with chronic conditions managed at home — stroke, cardiac, post-surgery, cancer recovery. You’re not a nurse. But you’re trained to track vitals, manage feeding tubes under nursing supervision, observe wound areas, and watch for the small signs that something is changing. You work under a care manager and a nurse for clinical questions. If you’ve worked as a hospital attendant before, or trained as a GDA (General Duty Assistant), this is a direct fit. Pay is higher than elder care because the skill ceiling is.',
    responsibilities: [
      'Track vitals — BP, sugar, temperature, SpO₂ — and log them in the app.',
      'Feed orally, or assist with NG/RT feeding under nurse supervision.',
      'Observe surgical sites and wound areas; report any change immediately.',
      'Catheter care and incontinence management with dignity.',
      'Reposition bedridden patients every 2–3 hours to prevent pressure sores.',
      'Mobility coaching — bed to chair, chair to walker, supervised walks.',
      'Coordinate with the family’s physiotherapist when they visit.',
      'Medication adherence with timing logs.',
      'Hydration and nutrition tracking, including intake/output for some patients.',
      'Daily care reports shared with family and treating doctor (with consent).',
      'Escalate immediately on warning signs — fever, breathlessness, swelling, confusion.',
      'Maintain infection-control practices: hand hygiene, glove use, linen change.',
    ],
    requirements: [
      '12th standard pass, or equivalent.',
      'Some healthcare exposure — hospital attendant, ANM dropout, GDA course, etc.',
      'Comfort reading basic medication labels in English.',
      'Spoken comfort in two of: Kannada, Tamil, Telugu, Hindi, English.',
      'Physical fitness to lift or assist a patient with mobility.',
      'Two professional references.',
    ],
    niceToHave: [
      'Formal GDA (General Duty Assistant) certification.',
      'Hospital experience in a multi-specialty unit.',
      'BLS / first-aid certificate.',
      'Experience with post-op cardiac or orthopedic patients.',
    ],
    extraSections: [
      {
        title: 'Shift options',
        items: [
          '12-hour day shift.',
          '12-hour night shift (popular for post-surgery week-one placements).',
          '24×7 live-in (monthly).',
        ],
      },
      {
        title: 'Compensation & benefits',
        items: [
          '₹18,000–₹30,000 / month.',
          'Weekly paid off.',
          'Monthly performance bonus up to ₹4,000.',
          'Group accident insurance during shifts.',
          'Festival bonus twice a year.',
          'Annual paid leave (12 days).',
          'Quarterly refresher training, paid.',
        ],
      },
      {
        title: 'What we invest in you',
        items: [
          '80-hour training programme including supervised hospital exposure.',
          'Uniform, ID card, basic care kit, and vitals equipment.',
          'Care manager 24×7 and a clinical nurse you can call.',
          'Weekly nurse review of your care logs.',
          'Sponsored bridge to formal Home Nursing or ANM qualification after 12 months.',
        ],
      },
      {
        title: 'Career path',
        items: [
          'Months 0–12 · Patient Care Attendant.',
          'Year 2 · Live-in Patient Attendant / Bedridden Specialist (₹28–38k/month).',
          'Year 2–3 · Home Nursing Assistant (with bridge training we sponsor).',
        ],
      },
    ],
    applyEmail: 'careers@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'live-in-caregiver-bangalore',
    title: 'Live-in Caregiver',
    department: 'Care Services',
    category: 'Care Services',
    location: 'Bangalore (placement matched to your area and the patient’s need)',
    type: 'Full-time',
    team: 'Field caregiving',
    postedAt: '2026-05-09',
    excerpt:
      'Stay with one family. Provide round-the-clock presence. Earn more, grow deeper roots. Higher base than day-shift, free boarding, weekly off with a trained relief caregiver, and group accident + term life insurance.',
    intro:
      'Live-in caregivers stay with one family for weeks or months. You wake up in the home, do the morning routine, manage the day with calm rhythm, and watch through the night. We pay for the work, and the family provides board and a private sleeping space. This is the most demanding shape of caregiving and also the most rewarding. You become genuinely part of someone’s last years or a long recovery, and most placements last 3 to 9 months. We give you a relief caregiver for your weekly off, a supervisor who visits every two weeks, and an emergency line that always picks up.',
    responsibilities: [
      'Provide continuous day and night care for one patient.',
      'Personal care, meals, hygiene, mobility, and medication adherence.',
      'Vitals tracking and reporting via the EzyHelpers app.',
      'Repositioning every 2–3 hours if patient is bedridden.',
      'Night-time vigilance with short, scheduled rest cycles.',
      'Light housekeeping in the patient’s room (not the whole home).',
      'Family liaison — daily updates, weekly summaries.',
      'Coordinate with visiting physiotherapist, nurse, or doctor.',
      'Maintain a clean appearance and follow the household’s quiet hours.',
      'Train the family on the safe handling protocol on day one.',
      'Stay within the agreed scope — no babysitting other family members, no cooking for the wider family.',
      'Honor a minimum 30-day notice if you wish to exit the placement.',
    ],
    requirements: [
      'Minimum 6 months of caregiver experience (with us or elsewhere).',
      'Willingness to live in the family’s home for the placement duration.',
      'Comfort with night-time alertness and short-rest cycles.',
      '10th standard or above.',
      'Police verification and Aadhaar verification (we coordinate).',
      'Available for a minimum 3-month commitment per placement.',
    ],
    niceToHave: [
      'Live-in or hospital-stay experience.',
      'Multiple language fluency.',
      'Specialised training (dementia / bedridden).',
      'Comfort with cooking simple meals for the patient.',
    ],
    extraSections: [
      {
        title: 'Shift',
        items: [
          '24×7 live-in with one weekly off (relief caregiver provided).',
        ],
      },
      {
        title: 'Compensation & benefits',
        items: [
          '₹22,000–₹35,000 / month.',
          'Free boarding (private bed) at the family’s home.',
          'Two meals a day, or food allowance.',
          'Paid weekly off (one day a week).',
          'Festival bonus twice a year.',
          'Annual paid leave (15 days).',
          'Group accident + term life insurance.',
          'Quarterly performance bonus up to ₹5,000.',
        ],
      },
      {
        title: 'Career path',
        items: [
          'Year 1 · Live-in Caregiver — 3 to 4 placements typically.',
          'Year 2 · Specialist Live-in (Dementia / Bedridden) — smaller load, higher pay.',
          'Year 3+ · Senior Live-in / Trainer-in-residence.',
        ],
      },
    ],
    applyEmail: 'careers@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'dementia-care-specialist-bangalore',
    title: 'Dementia Care Specialist',
    department: 'Care Services',
    category: 'Specialist Care',
    location: 'Bangalore (match-prioritised for language and household culture)',
    type: 'Full-time',
    team: 'Specialist caregiving',
    postedAt: '2026-05-09',
    excerpt:
      'Specialised caregiver for dementia and Alzheimer’s patients. Continuity, validation, kindness. 120-hour paid training, smaller caseload, longer placements, and higher pay.',
    intro:
      'Dementia care is its own discipline. The same question asked twenty times in an afternoon. The agitation that rises like clockwork at 5 PM. The wandering at 2 AM. The face of a daughter no longer recognised. None of it can be fixed — but a great deal of it can be softened, with the right person and the right training. Dementia Care Specialists complete an additional 60 hours of training in dementia communication, sundowning management, wandering prevention and family coaching, on top of the elder-care or live-in foundation. You will be placed only with dementia and Alzheimer’s patients, with smaller caseloads and longer placements. Pay is higher because continuity matters more in this work than in any other.',
    responsibilities: [
      'Use validation therapy — meet the patient where they are, don’t correct facts.',
      'Apply redirection techniques during agitation (change room / activity / topic).',
      'Hold a strict daily routine, with the same timing every day.',
      'Manage sundowning with morning sunlight and low-stimulation evenings.',
      'Wandering prevention — environmental safety, gentle observation, never restraint.',
      'Personal hygiene with dignity-first prompts (avoid shame triggers).',
      'Feeding with swallowing awareness in advanced cases.',
      'Cognitive stimulation: old photos, simple folding, familiar music.',
      'Family coaching — what to say, what not to say, why episodes happen.',
      'Detailed daily logs of sleep, mood, agitation episodes, eating, medications.',
      'Bi-weekly review with our care manager + neurologist input where relevant.',
      'Never raise your voice; never argue; never restrain physically or chemically.',
    ],
    requirements: [
      'At least 12 months of caregiver experience.',
      'Exceptional patience — willingness to answer the same question 20 times warmly.',
      'Completion of our 120-hour dementia training (provided, paid).',
      'Comfort with disturbed sleep schedules (sundowning, night wakings).',
      'Stable temperament — no shouting, no arguing back, no shaming.',
      'Strong references from previous placements.',
    ],
    niceToHave: [
      'Prior experience with dementia or psychiatric patients.',
      'Familiarity with Lewy body / Parkinson’s dementia.',
      'Comfort with multi-language households (older patients often slip back to their first language).',
    ],
    extraSections: [
      {
        title: 'Shift options',
        items: [
          '12-hour day shift.',
          '12-hour night shift.',
          '24×7 live-in (preferred for continuity).',
        ],
      },
      {
        title: 'Compensation & benefits',
        items: [
          '₹25,000–₹40,000 / month.',
          'Higher tier base salary than general caregiving.',
          'Live-in placements include private boarding and food.',
          'Weekly off paid with a trained relief caregiver.',
          'Festival bonus + annual leave.',
          'Group accident + term life insurance.',
          'Monthly clinical supervision session with a geriatric care nurse.',
        ],
      },
      {
        title: 'What we invest in you',
        items: [
          '120-hour specialised dementia training programme, paid (stipend ₹8,000–10,000).',
          'Smaller caseload (typically one long placement at a time).',
          'Dedicated supervisor visits weekly during the first month.',
          'Continuity-first scheduling so the same patient sees you, every day.',
        ],
      },
      {
        title: 'Career path',
        items: [
          'Year 1 · Dementia Care Specialist — long placements, strong continuity.',
          'Year 2–3 · Senior Dementia Specialist (₹38–50k/month).',
          'Year 3+ · Trainer (Dementia track) — train new specialists and coach families.',
        ],
      },
    ],
    applyEmail: 'careers@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'home-nursing-assistant-bangalore',
    title: 'Home Nursing Assistant',
    department: 'Care Services',
    category: 'Specialist Care',
    location: 'Bangalore-wide (visits clustered geographically to minimise riding time)',
    type: 'Full-time',
    team: 'Clinical home visits',
    postedAt: '2026-05-09',
    excerpt:
      'Clinical home-visit role — IV, dressings, catheter changes — for the medical edge cases. ANM/GNM with a Karnataka State Nursing Council registration. ₹25–45k/month including per-visit pay and fuel allowance.',
    intro:
      'Home Nursing Assistants are our most clinical field role. You make scheduled visits to patients’ homes — typically 1–2 hours per visit, 4–6 visits a day — to do the procedures that a patient care attendant cannot: IV infusions, injections, catheter changes, active wound dressings, NG tube management. You work under the oversight of our consulting clinical nurse, and we maintain a strict scope-of-practice for what you can and cannot do solo. Documentation is rigorous — every visit ends with a signed note shared with the family and the treating doctor. If you’ve trained as an ANM or GNM and want a stable, daytime role outside hospital shift work, this is one of the best home-care job patterns in Bangalore.',
    responsibilities: [
      'Administer scheduled IV fluids and IV medication per doctor’s prescription.',
      'Give intramuscular and subcutaneous injections.',
      'Perform wound dressings and post-surgical site care.',
      'Catheter insertion, change, and care.',
      'Manage Ryle’s tube / NG-feed insertion and replacement.',
      'Tracheostomy care (basic) and suction.',
      'Take detailed vitals and document changes.',
      'Coordinate with the patient’s care attendant on the daily plan.',
      'Share signed visit notes with family and treating doctor.',
      'Stock and maintain your visit kit; restock from our office monthly.',
      'Maintain infection-control protocols on every visit.',
      'Escalate any change in patient status to the clinical care manager immediately.',
    ],
    requirements: [
      'ANM (Auxiliary Nurse Midwife) or GNM (General Nursing and Midwifery) diploma.',
      'Registered with the Karnataka State Nursing Council.',
      'Minimum 2 years clinical experience (hospital or home setting).',
      'Comfort with IV cannulation and IV medication.',
      'English + at least one Indian language.',
      'Two-wheeler license and willingness to ride for visits.',
      'Smartphone with internet access.',
    ],
    niceToHave: [
      'Critical care or surgical-ward experience.',
      'BLS / ACLS certification.',
      'Experience with home-care nursing or hospital-at-home programmes.',
      'Comfort with wound vacuum / advanced dressings.',
    ],
    extraSections: [
      {
        title: 'Shift',
        items: [
          'Daytime — typically 8 AM to 6 PM, 6 days a week. Sundays off.',
        ],
      },
      {
        title: 'Compensation & benefits',
        items: [
          '₹25,000–₹45,000 / month (monthly retainer ₹18,000 + per-visit pay ₹200–500).',
          'Fuel allowance ₹2,500/month.',
          'Smartphone allowance ₹500/month.',
          'Continuing education sponsorship (BLS, advanced wound care, etc.).',
          'Professional indemnity insurance + accident insurance.',
          'Annual leave (15 days) + festival bonus.',
        ],
      },
      {
        title: 'What we invest in you',
        items: [
          'Visit kit with all consumables — replenished from our office.',
          'Two-wheeler fuel allowance and minor maintenance support.',
          'Smartphone allowance for visit logging.',
          'Weekly clinical case-review with the senior consulting nurse.',
        ],
      },
      {
        title: 'Career path',
        items: [
          'Year 1–2 · Home Nursing Assistant — build a strong visit-based clinical practice.',
          'Year 2–3 · Senior Home Nursing Lead (₹50–80k/month) — manage a panel of HNAs.',
          'Year 3+ · Clinical Care Manager (Operations) — central operations, salaried.',
        ],
      },
    ],
    applyEmail: 'careers@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'care-supervisor-bangalore',
    title: 'Care Supervisor',
    department: 'Operations',
    category: 'Operations',
    location: 'Bangalore (assigned zone — East, West, South, North, or Central)',
    type: 'Full-time',
    team: 'Field operations',
    postedAt: '2026-05-09',
    excerpt:
      'Field supervisor visiting 15–20 placements bi-weekly to keep care quality high. Salaried role for an experienced caregiver or home nurse ready to step off direct patient care — ₹35–55k/month + fuel allowance.',
    intro:
      'Care Supervisors are the field arm of our quality system. You visit 15 to 20 active placements every two weeks — sit with the patient and family, review the caregiver’s logs, observe the room, ask the questions the family doesn’t think to ask, and report what you find back to our central team. It’s not a desk job. You’re on a scooter for 6 hours a day across Bangalore, in conversation for the rest. The work demands a clinical instinct, a soft voice, and the ability to spot a small problem before it becomes a complaint. We pair you with a Clinical Care Manager you call when something needs more than your judgement alone.',
    responsibilities: [
      'Visit 15–20 active care placements every two weeks across your assigned zone.',
      'Sit with the patient and family for 30–45 minutes per visit.',
      'Review the caregiver’s daily log book and app entries.',
      'Observe the room, the patient’s appearance, and the household tone.',
      'Re-train the caregiver on the spot if you see protocol gaps.',
      'Document findings — strengths, gaps, escalations — in our supervisor report.',
      'Identify caregivers at risk of burnout and rotate them out kindly.',
      'Be the family’s first escalation channel for non-clinical concerns.',
      'Help onboard new caregivers into their first placement.',
      'Run monthly small-group meetings with caregivers in your zone.',
      'Flag any safeguarding concern immediately to the Operations Head.',
      'Maintain a clean professional appearance and never miss a scheduled visit without notice.',
    ],
    requirements: [
      'GNM diploma or BSc Nursing, or 5+ years caregiving experience with strong references.',
      '3+ years in patient care or supervisory role.',
      'Two-wheeler license and ability to ride safely across Bangalore.',
      'Spoken comfort in Kannada + Hindi + English (Tamil/Telugu a bonus).',
      'Smartphone literacy for visit logging and family WhatsApp groups.',
      'Emotional maturity — ability to deliver hard feedback gently.',
    ],
    niceToHave: [
      'Prior agency supervisory experience.',
      'Geriatric or palliative care training.',
      'Experience with hospital case management.',
      'Comfort presenting to small groups (caregiver meetings).',
    ],
    extraSections: [
      {
        title: 'Shift',
        items: [
          'Daytime — 9 AM to 6 PM, 6 days/week. Sundays off.',
        ],
      },
      {
        title: 'Compensation & benefits',
        items: [
          '₹35,000–₹55,000 / month — salaried, not per-visit.',
          'Fuel allowance ₹4,500/month.',
          'Smartphone + data plan.',
          'Annual leave (18 days) + sick leave (8 days).',
          'Group medical insurance.',
          'Bi-monthly training updates.',
          'Annual performance bonus.',
        ],
      },
      {
        title: 'Career path',
        items: [
          'Year 1–2 · Care Supervisor — master your assigned zone.',
          'Year 2–3 · Zone Lead / Senior Supervisor (₹55–75k/month).',
          'Year 3+ · Operations Head — run field operations across Bangalore.',
        ],
      },
    ],
    applyEmail: 'careers@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'care-manager-operations-bangalore',
    title: 'Care Manager (24×7 Operations)',
    department: 'Operations',
    category: 'Operations',
    location: 'Bangalore (EzyHelpers office, Indiranagar)',
    type: 'Full-time',
    team: 'Central operations',
    postedAt: '2026-05-09',
    excerpt:
      'Central operations role — the person families and caregivers call when something matters. Rotating shifts including nights; ₹40–70k/month with night-shift differential, cab transport, and a real path to Operations Head.',
    intro:
      'Care Managers run the central nervous system of our care operations. Families call you when they’re worried. Caregivers WhatsApp you when something’s off. Hospitals message you when a discharge is happening tomorrow morning. You triage all of it, make a call, dispatch a person, and follow up by 9 AM. We run three shifts (8 AM–4 PM, 4 PM–12 AM, 12 AM–8 AM), and there’s always at least one Care Manager on duty. The night shift is quieter but more consequential — most emergencies happen between 11 PM and 4 AM. It’s a role for someone who finds calm in chaos — a hospital BD, a startup ops generalist, or a triage nurse who wants off the ward.',
    responsibilities: [
      'Pick up every inbound call, message, and WhatsApp within the response SLA.',
      'Triage emergencies — connect to ambulance partner, treating doctor, family.',
      'Dispatch caregivers for same-day placements (within 6-hour SLA).',
      'Handle replacement requests within 24 hours.',
      'Maintain the duty log — every call, every action, every outcome.',
      'Coordinate hospital discharge placements with case managers.',
      'Brief incoming caregivers on each new family before they leave.',
      'Be the family’s day-to-day point of contact for any concern.',
      'Escalate clinical questions to the Clinical Care Manager.',
      'Handle billing queries and payment follow-ups.',
      'Run the monthly retention call with active long-term clients.',
      'Document everything — we are an evidence-driven operation.',
    ],
    requirements: [
      'Bachelor’s degree (any discipline).',
      'Excellent spoken Kannada + Hindi + English.',
      '2+ years in customer-facing operations (hospital, hotel, startup ops, etc.).',
      'Comfort with shift work, including night shifts on rotation.',
      'Strong written communication for WhatsApp and email.',
      'Calm under pressure — references should call out your composure.',
      'Comfortable with software tools (we use a custom dispatch app).',
    ],
    niceToHave: [
      'Hospital case management experience.',
      'Healthcare BD or family-facing patient relations background.',
      'Tamil or Telugu fluency.',
      'Prior 24×7 operations role.',
    ],
    extraSections: [
      {
        title: 'Shift',
        items: [
          'Rotating: 8 AM–4 PM, 4 PM–12 AM, 12 AM–8 AM. Two-week rotations.',
        ],
      },
      {
        title: 'Compensation & benefits',
        items: [
          '₹40,000–₹70,000 / month.',
          'Night-shift differential +15%.',
          'Cab transport home after 11 PM.',
          'Group medical insurance (family floater).',
          'Annual leave (20 days).',
          'Quarterly off-sites.',
          'Annual performance bonus 1–2 months.',
        ],
      },
      {
        title: 'Career path',
        items: [
          'Year 1 · Care Manager — master triage and dispatch.',
          'Year 1–2 · Senior Care Manager (₹65–95k/month).',
          'Year 3+ · Operations Head.',
        ],
      },
    ],
    applyEmail: 'careers@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'care-coordinator-home-healthcare-bangalore',
    title: 'Care Coordinator – Home Healthcare',
    department: 'Operations',
    category: 'Operations',
    location: 'Bangalore (HSR Layout · office-based)',
    type: 'Full-time',
    team: 'Home healthcare operations',
    postedAt: '2026-06-03',
    excerpt:
      'Office-based coordination role at the heart of our home healthcare service: understand family needs, match the right caregiver or nurse, and ensure reliable, continuous care delivery. 2–3 years in healthcare or caregiving, 6 days a week in HSR Layout.',
    intro:
      'EzyHelpers is a trusted home care and domestic helper service provider based in Bangalore. We help families find reliable, trained, and verified caregivers, nursing assistants, home helpers, cooks, nannies, elderly care attendants, and patient care support staff. As we expand our healthcare and caregiving services, we are looking for a dedicated and responsible Care Coordinator – Home Healthcare who understands the caregiving ecosystem and can coordinate effectively with nurses, physiotherapists, caregivers, patients, and families.\n\nThis is an office-based coordination and operations role. You will understand patient and family requirements, coordinate with staff nurses, nursing assistants, physiotherapists, and caregivers, manage caregiver availability, and ensure smooth, timely service delivery and follow-up for clients. The ideal candidate has experience across elderly care, patient care, post-operative care, palliative care, physiotherapy support coordination, and home-based caregiving services.',
    responsibilities: [
      'Speak with families to understand care requirements in detail — elderly, post-operative, palliative, bedridden, dementia, physiotherapy support, general caregiving, or nursing support.',
      'Ask the right questions to assess the patient’s condition, mobility level, medical dependency, food habits, language preference, duty timings, and family expectations; document everything in the internal tracker.',
      'Coordinate with staff nurses, nursing assistants, GDA/ANM/GNM candidates, physiotherapists, and caregivers; check availability, experience, location, language skills, and suitability.',
      'Match the right caregiver or healthcare support staff to client needs, and brief them on patient condition, family expectations, hygiene standards, duty timings, and responsibilities before assignment.',
      'Manage day-to-day coordination between clients, caregivers, nurses, physiotherapists, and internal teams; follow up after placement to ensure satisfaction.',
      'Resolve issues around caregiver behaviour, attendance, duty understanding, replacements, or service gaps; arrange replacements and ensure continuity of care without disruption.',
      'Help families choose the right level of care based on the patient’s condition, and escalate medical or clinical concerns to qualified professionals when needed.',
      'Screen and profile caregivers, nursing assistants, staff nurses, and physiotherapists by skills, past cases, language, location, salary expectation, shift preference, and availability; maintain an updated staff database.',
      'Maintain polite, clear, professional communication with families; give realistic updates without overpromising and handle concerns with empathy and ownership.',
      'Coordinate with the sales and operations team for closures and service delivery.',
      'Maintain accurate records of requirements, staff profiles, placements, follow-ups, complaints, replacements, and service status; prepare daily/weekly reports on active cases, pending requirements, staff availability, and escalations.',
    ],
    requirements: [
      '2–3 years of experience in home healthcare operations, elderly/patient care coordination, nursing bureau or caregiver placement, hospital discharge or physiotherapy service coordination, palliative care support, healthcare customer support, or medical/nursing staff coordination.',
      'Good understanding of home healthcare and caregiving services and the ability to understand patient and elderly care requirements.',
      'Strong communication in English and Hindi; Kannada is an added advantage.',
      'Ability to coordinate with caregivers, nurses, physiotherapists, and families.',
      'Strong follow-up and documentation skills.',
      'Empathy and patience while handling families and elderly care cases, including sensitive healthcare conversations.',
      'Good judgment in matching the right caregiver to the right family.',
      'Comfortable working from the office 6 days a week.',
      'Basic computer knowledge — Google Sheets, Excel, WhatsApp, CRM, or internal tracking tools.',
    ],
    niceToHave: [
      'Background in healthcare, home healthcare, nursing bureau, elderly care, rehabilitation, physiotherapy coordination, or patient care services.',
      'Experience dealing with elderly patients, bedridden patients, post-operative cases, or palliative care cases.',
      'Experience speaking with staff nurses, physiotherapists, nursing assistants, caregivers, and patient families.',
      'Graduate in any discipline; healthcare management, nursing-related qualification, or GDA/ANM/GNM/B.Sc Nursing exposure (formal medical qualification not mandatory).',
      'Calm under pressure with the ability to solve operational issues quickly and balance client expectations with staff availability.',
    ],
    extraSections: [
      {
        title: 'Care knowledge areas',
        items: [
          'Elderly care, post-operative care, and palliative care.',
          'Bedridden patient support and stroke recovery support.',
          'Dementia and Alzheimer’s care; mobility support.',
          'Physiotherapy coordination; patient hygiene and feeding support.',
          'Medicine reminder support and hospital-to-home transition care.',
        ],
      },
      {
        title: 'Key performance indicators',
        items: [
          'Number of care requirements successfully coordinated.',
          'Quality of caregiver and nurse matching.',
          'Client satisfaction after placement.',
          'Timely follow-ups and issue resolution.',
          'Accuracy of documentation and reporting.',
          'Reduction in replacement cases due to better matching.',
          'Speed of coordination between client and care staff.',
          'Quality of communication with families and internal teams.',
        ],
      },
      {
        title: 'Work setup & compensation',
        items: [
          'Full-time, office-based role at our HSR Layout, Bangalore office.',
          'Working days: 6 days a week.',
          'Salary based on experience, communication skills, healthcare exposure, and ability to manage care coordination responsibilities.',
        ],
      },
      {
        title: 'Why join EzyHelpers',
        items: [
          'Work in a fast-growing home healthcare and caregiving company.',
          'Meaningful work that directly supports elderly people, patients, and families.',
          'Exposure to healthcare operations, caregiver management, and client coordination.',
          'Growth as EzyHelpers expands deeper into elderly care, patient care, and professional home caregiving.',
          'A mission-driven team that values dignity, reliability, and care.',
        ],
      },
    ],
    applyEmail: 'careers@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'caregiver-trainer-bangalore',
    title: 'Caregiver Trainer',
    department: 'Operations',
    category: 'Operations',
    location: 'Bangalore (training space, Indiranagar · with field visits across the city)',
    type: 'Full-time',
    team: 'Training & curriculum',
    postedAt: '2026-05-09',
    excerpt:
      'Design and deliver the training that makes every EzyHelpers caregiver good at this work. BSc Nursing or GNM, 5+ years experience, instructional chops. ₹50–80k/month + conference budget + equity option.',
    intro:
      'The Caregiver Trainer owns the curriculum and the cohorts. You will run new-caregiver onboarding (60 hours), patient care attendant training (80 hours), and dementia/bedridden specialist tracks (120 hours each). Half your week is in our Indiranagar training space teaching — clinical basics, communication, dignity-first hygiene, dementia validation therapy, infection control, household safety. The other half is in the field, observing caregivers in real placements and writing the next iteration of the curriculum. This is the most consequential role in the care function. The training curriculum is the moat.',
    responsibilities: [
      'Run new caregiver cohorts (8–15 trainees, 60 hours over 2.5 weeks).',
      'Run specialist cohorts (dementia, bedridden, post-surgery, female-care).',
      'Deliver classroom modules + role-plays + supervised home practice.',
      'Maintain and version the curriculum — written, illustrated, and on video.',
      'Assess trainees and certify them for placement.',
      'Spend 1–2 days a week in active placements observing real practice.',
      'Identify the gap between curriculum and field reality, close it.',
      'Run quarterly refresher programmes for active caregivers.',
      'Coach caregivers flagged by supervisors as needing support.',
      'Maintain the training space, equipment, mannequins, supplies.',
      'Document training outcomes — completion rates, ratings, drop-offs.',
      'Represent EzyHelpers at hospital and academic training partnerships.',
    ],
    requirements: [
      'BSc Nursing or GNM diploma.',
      '5+ years clinical or caregiver-management experience.',
      'Strong instructional skills — comfortable in front of a 15-person room.',
      'Fluent Kannada + Hindi + English.',
      'Empathy with first-generation learners.',
      'Curriculum design instinct — comfort writing and revising training materials.',
    ],
    niceToHave: [
      'Previous role as a nursing tutor, hospital trainer, or NGO health educator.',
      'Experience with adult-learning methodology.',
      'Tamil or Telugu fluency.',
      'Comfort with video content creation.',
    ],
    extraSections: [
      {
        title: 'Shift',
        items: [
          'Daytime — 9 AM to 6 PM, 5 days a week. Weekends off.',
        ],
      },
      {
        title: 'Compensation & benefits',
        items: [
          '₹50,000–₹80,000 / month — fixed daytime hours, weekends off.',
          'Conference + CME budget ₹40,000/year.',
          'Group medical insurance (family floater).',
          'Annual leave (20 days).',
          'Festival bonus.',
          'Equity option after 2 years.',
        ],
      },
      {
        title: 'Career path',
        items: [
          'Year 1–2 · Caregiver Trainer — own the curriculum.',
          'Year 2–3 · Head of Training (₹80k–1.4L/month) — build a training team.',
          'Year 3+ · Clinical Director — lead clinical strategy.',
        ],
      },
    ],
    applyEmail: 'careers@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'vendor-partner-onboarding-specialist-bangalore',
    title: 'Vendor & Partner Onboarding Specialist',
    department: 'Operations',
    category: 'Operations',
    location: 'Bangalore-wide (heavy intra-city travel for vendor site visits)',
    type: 'Full-time',
    team: 'Partnerships & vendors',
    postedAt: '2026-05-09',
    excerpt:
      'Sign up and integrate the ambulance, physio, equipment, and clinic partners that round out our care service. Operations-meets-BD role with negotiation authority. ₹40–65k/month + travel allowance.',
    intro:
      'Care placements often need more than just a caregiver. An ambulance to bring the patient home from hospital. A physiotherapist to visit twice a week. An air mattress on rent for a bedridden patient. An ECG machine for a cardiac case. A pharmacy that delivers same-day. The Vendor Onboarding Specialist builds and maintains the network of partners that fills these needs. You source candidates, run them through our verification and quality check, sign them up on commercial terms, train their teams on our SLAs, and review their performance monthly. Where they fail, you replace them. Where they succeed, you expand the relationship.',
    responsibilities: [
      'Source vendors across categories: ambulance, physiotherapy, equipment rental, pharmacy, lab pickup, geriatricians.',
      'Run vendor verification: company registration, GST, insurance, references, on-site visit.',
      'Negotiate commercial terms — pricing, SLAs, exclusivity, billing cadence.',
      'Onboard partner teams on our process — escalation card, response SLAs, billing.',
      'Maintain the partner directory and route requests to the right vendor.',
      'Track partner performance against SLA every week.',
      'Run monthly partner reviews — top performers get more volume; under-performers get warnings.',
      'Handle vendor escalations and family complaints involving vendors.',
      'Maintain commercial paperwork — agreements, renewals, indemnities.',
      'Identify gaps in the partner network and proactively source.',
      'Negotiate volume discounts as we grow.',
      'Document the entire vendor lifecycle in our operations playbook.',
    ],
    requirements: [
      '2+ years vendor management, partnership operations, or B2B account management.',
      'Comfort with commercial negotiation and contract paperwork.',
      'Spoken Kannada + Hindi + English.',
      'Two-wheeler for vendor site visits.',
      'Process discipline — clean documentation, contract version control, SLA tracking.',
      'Polished judgement — you’re the company’s face to many small businesses.',
      'Comfort using spreadsheets and basic CRM.',
    ],
    niceToHave: [
      'Prior experience in hospital procurement, hospitality vendor management, or aggregator (Urban Company, Practo) operations.',
      'Healthcare vendor network in Bangalore.',
      'Comfort reading basic financial documents (vendor balance sheets, GST returns).',
      'Familiarity with NABH or hospital quality standards.',
    ],
    extraSections: [
      {
        title: 'Shift',
        items: [
          'Daytime — 9 AM to 6 PM, 6 days/week. Sundays off.',
        ],
      },
      {
        title: 'Compensation & benefits',
        items: [
          '₹40,000–₹65,000 / month.',
          'Travel + fuel allowance ₹4,000/month.',
          'Smartphone + data plan.',
          'Group medical insurance (family floater).',
          'Annual leave (20 days).',
          'Festival bonus + annual performance bonus.',
          'Quarterly off-sites.',
        ],
      },
      {
        title: 'Career path',
        items: [
          'Year 1 · Vendor & Partner Onboarding Specialist.',
          'Year 1–2 · Senior Vendor Operations Lead.',
          'Year 2+ · Head of Operations / Head of Partnerships (₹70k–1.2L/month).',
        ],
      },
    ],
    applyEmail: 'careers@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'hospital-partnerships-manager-bangalore',
    title: 'Hospital Partnerships Manager',
    department: 'Business Development',
    category: 'Business Development',
    location: 'Bangalore (heavy intra-city travel)',
    type: 'Full-time',
    team: 'Partnerships & growth',
    postedAt: '2026-05-09',
    excerpt:
      'Build referral relationships with Bangalore’s major hospitals so patients leave with us already lined up. Healthcare BD with uncapped commission, base ₹60k–1.2L/month + ₹2k–5k per referred placement, and stock options after a year.',
    intro:
      'Hospital discharge is one of the highest-intent moments in caregiving. The family is anxious, the patient is going home in 48 hours, and they need help they didn’t think they’d need. The hospitals that hand a family our flyer at discharge change the trajectory of those next four weeks. The Hospital Partnerships Manager builds these relationships, one hospital at a time. You’ll work with discharge case managers, geriatric clinics, orthopedic departments, oncology floors, and post-cardiac units. The goal is for EzyHelpers to be the named home-care service in their discharge pathway. It’s BD work, but for a service families actually want.',
    responsibilities: [
      'Build relationships with 15–20 Bangalore hospitals across 18 months.',
      'Identify the right contacts — case managers, ward heads, geriatricians, surgeons.',
      'Present EzyHelpers credibly: process, training, pricing, escalation, outcomes.',
      'Negotiate discharge pathway integration, flyer placement, ward-level briefings.',
      'Coordinate with Care Managers to ensure smooth hospital-to-home handover.',
      'Maintain a CRM of every hospital contact, conversation, and follow-up.',
      'Run quarterly review meetings with our top 5 hospital partners.',
      'Field hospital escalations — if anything goes wrong in a partnered discharge, you own it.',
      'Identify cross-referral opportunities (geriatricians, physiotherapists, etc.).',
      'Represent EzyHelpers at hospital medical conferences and clinician meet-ups.',
      'Bring market intelligence back — what are other agencies offering hospitals.',
      'Hit a referral-volume target (currently 40 hospital-referred placements / month).',
    ],
    requirements: [
      'Bachelor’s degree, MBA preferred.',
      '3+ years healthcare business development, account management, or hospital sales.',
      'Existing relationships in Bangalore healthcare are a strong plus.',
      'Polished spoken English; comfort with clinical conversation.',
      'Strong written proposals and CRM discipline.',
      'Two-wheeler or willingness to travel intra-city daily.',
      'Calm, low-pressure sales style — we don’t push, we earn.',
    ],
    niceToHave: [
      'Pharma or medical-device sales background.',
      'Hospital insurance / TPA partnership experience.',
      'Existing relationships at Manipal, Apollo, Sakra, Fortis, or Narayana.',
      'Comfort with quarterly business reviews and clinical metric reporting.',
    ],
    extraSections: [
      {
        title: 'Shift',
        items: [
          'Daytime — 9 AM to 7 PM, 5–6 days/week.',
        ],
      },
      {
        title: 'Compensation & benefits',
        items: [
          '₹60,000–₹1,20,000 / month base + uncapped commission.',
          'Commission ₹2,000–5,000 per hospital-referred placement.',
          'Travel + parking allowance.',
          'Smartphone + data plan.',
          'Stock options after 1 year.',
          'Group medical insurance (family floater).',
          'Annual leave (24 days).',
          'Festival + annual performance bonus.',
        ],
      },
      {
        title: 'Career path',
        items: [
          'Year 1–2 · Hospital Partnerships Manager — win the first 15 hospital partnerships.',
          'Year 2–3 · Head of Partnerships — build a team, expand to clinics and physiotherapy networks.',
          'Year 3+ · Commercial Director — own all revenue channels.',
        ],
      },
    ],
    applyEmail: 'careers@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'content-brand-lead-bangalore',
    title: 'Content & Brand Lead',
    department: 'Marketing',
    category: 'Marketing & Content',
    location: 'Bangalore (hybrid · 2 days in Indiranagar office, 3 remote)',
    type: 'Hybrid',
    team: 'Marketing & content',
    postedAt: '2026-05-09',
    excerpt:
      'Own the editorial voice, SEO/AEO, and every word a family reads from us. Healthcare brand editor / senior writer with portfolio. ₹70k–1.5L/month + stock options + conference budget.',
    intro:
      'EzyHelpers is, at its core, a content company that also places caregivers. The journal, the service pages, the locality pages, the tone of the WhatsApp messages our Care Managers send at 11 PM — they all need a single, calm, honest voice. The Content & Brand Lead owns that voice. You’ll publish 4 long-form journal posts a month, refresh service and locality pages quarterly, commission illustration and photography, run a monthly newsletter, and shape every piece of family-facing communication. You’ll also own SEO — keyword strategy, internal linking, AEO/llms.txt content, structured data tone, the lot.',
    responsibilities: [
      'Publish 4 long-form journal posts per month, each ≥1,200 words.',
      'Maintain and version-control the entire content corpus (services, localities, journal).',
      'Run editorial review for clinical accuracy with the consulting nurse.',
      'Commission illustration, photography, and short video from agencies.',
      'Manage SEO end-to-end — keyword strategy, on-page optimisation, AEO, llms.txt.',
      'Write the monthly newsletter (~5,000 subscribers, growing).',
      'Maintain brand-voice guide and review all family-facing copy.',
      'Build and brief external freelancers as content needs scale.',
      'Track content performance — rankings, time on page, conversions.',
      'Run quarterly content reviews with the founder.',
      'Represent the brand at small media conversations and partnerships.',
      'Develop the editorial-board partnership with our consulting clinicians.',
    ],
    requirements: [
      '5+ years content / editorial experience, ideally in healthcare or wellness.',
      'Demonstrated long-form writing chops (portfolio required).',
      'Working knowledge of SEO and analytics (Search Console, GA4).',
      'Ability to edit clinical content for a lay audience without losing accuracy.',
      'Strong project management — running 4 pieces a month with research, edit, illustration.',
      'Comfort with markdown, Git, or similar version-controlled workflows.',
    ],
    niceToHave: [
      'Prior experience at a healthcare publication, wellness brand, or care startup.',
      'Experience with Indian regional language content (Kannada, Tamil, Hindi).',
      'Hands-on SEO at an Indian D2C / healthcare brand.',
      'Comfort briefing illustrators or photographers.',
      'AEO / generative-search experience.',
    ],
    extraSections: [
      {
        title: 'Shift',
        items: [
          'Daytime — flexible, results-based. Hybrid (2 office days, 3 remote). No weekend work.',
        ],
      },
      {
        title: 'Compensation & benefits',
        items: [
          '₹70,000–₹1,50,000 / month.',
          'Annual conference + book budget ₹50,000.',
          'Stock options (cliff after 1 year).',
          'Group medical insurance (family floater).',
          'Annual leave (24 days).',
          'Sabbatical eligibility after 3 years.',
        ],
      },
      {
        title: 'Career path',
        items: [
          'Year 1–2 · Content & Brand Lead — own the editorial calendar.',
          'Year 2–3 · Head of Brand & Content (₹1.5–2.5L/month + equity).',
          'Year 3+ · Head of Marketing / Founder’s Office.',
        ],
      },
    ],
    applyEmail: 'careers@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'family-care-counsellor-sales-bangalore',
    title: 'Family Care Counsellor (Inbound Sales)',
    department: 'Sales',
    category: 'Sales',
    location: 'Bangalore (EzyHelpers office, Indiranagar)',
    type: 'Full-time',
    team: 'Family acquisition',
    postedAt: '2026-05-09',
    excerpt:
      'Talk to anxious families calling us. Help them choose. Convert with empathy, not pressure. Consultative sales — base ₹35–65k/month + variable per closed booking + stock options after a year.',
    intro:
      'Most of our customers find us through search, a journal post, a hospital referral, or a friend. They WhatsApp, they call, they fill out the booking flow halfway. Every one of those moments is someone in distress — a stroke yesterday, a mother who fell this morning, a father who has been declining for months. The Family Care Counsellor is the human who picks up. You spend the call listening first, then explaining what we offer, then helping the family decide between hourly, day-shift, live-in, and specialist care. You quote pricing transparently. You convert to a confirmed booking only when the fit is real. It is sales. It is also, on the best days, the most useful 20-minute conversation that family has had all week.',
    responsibilities: [
      'Pick up every inbound family call within the ringing SLA.',
      'Reply to every booking-form lead, WhatsApp enquiry, and email within 30 minutes during business hours.',
      'Listen first — what is the actual situation, who is the patient, what is urgent.',
      'Recommend the right service plan honestly (sometimes that means recommending less, not more).',
      'Quote pricing transparently; explain what’s included and what’s not.',
      'Coordinate the first match call with the Care Manager when the family is ready.',
      'Schedule and conduct discovery calls for higher-touch enquiries (NRI families, complex cases).',
      'Send a follow-up summary on WhatsApp within 30 minutes of every call.',
      'Maintain meticulous CRM records — every lead, every conversation, every objection.',
      'Identify common objections and feed insights back to Marketing and Content.',
      'Track personal conversion rate, response time, and lead quality every week.',
      'Handle the occasional escalation from a confused or anxious family with patience.',
    ],
    requirements: [
      '3+ years inbound sales, customer success, or consultative selling.',
      'Polished English + fluent Kannada or Hindi.',
      'Empathetic, non-pushy temperament — references should describe you as patient.',
      'CRM discipline (HubSpot, Salesforce, Zoho, or similar).',
      'Comfort quoting prices and handling money conversations.',
      'Composure on emotionally heavy calls.',
      'Strong written communication for WhatsApp follow-ups.',
    ],
    niceToHave: [
      'Prior healthcare, eldercare, or home-services sales.',
      'Experience selling to NRI customers.',
      'Tamil or Telugu fluency.',
      'Background in nursing or social work.',
      'Comfort with light data analysis on CRM dashboards.',
    ],
    extraSections: [
      {
        title: 'Shift',
        items: [
          'Daytime — 9 AM to 7 PM, 6 days/week. One weekday off, Sundays off.',
        ],
      },
      {
        title: 'Compensation & benefits',
        items: [
          'Base ₹35,000–₹65,000 / month + variable.',
          'Variable ₹2,000–5,000 per closed booking (live-in placements pay highest).',
          'Stock options after 1 year.',
          'Group medical insurance (family floater).',
          'Annual leave (20 days).',
          'Quarterly off-sites with the sales team.',
          'Conference + training budget ₹30,000/year.',
        ],
      },
      {
        title: 'Career path',
        items: [
          'Year 1 · Family Care Counsellor — hit consistent conversion benchmarks.',
          'Year 1–2 · Senior Counsellor / Team Lead.',
          'Year 2+ · Sales Lead / Head of Family Acquisition.',
        ],
      },
    ],
    applyEmail: 'careers@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'digital-marketing-strategist-bangalore',
    title: 'Digital Marketing Strategist',
    department: 'Marketing',
    category: 'Marketing & Content',
    location: 'Bangalore (hybrid · 2 days at Indiranagar office, 3 remote)',
    type: 'Hybrid',
    team: 'Growth & performance',
    postedAt: '2026-05-09',
    excerpt:
      'Own paid acquisition, SEO performance, email, and the analytics that tell us what’s working. 4+ years D2C/healthcare growth. ₹70k–1.3L/month + equity + a modern stack and real budget authority.',
    intro:
      'EzyHelpers has invested deeply in content — well-ranked pages, comprehensive schema, a working AEO surface. The Digital Marketing Strategist takes that foundation and builds the growth engine around it: paid acquisition that scales, SEO that compounds, email and lifecycle that retains, analytics that tell the truth. Your day is split between strategy and execution. Strategy: where does the next 1,000 customers come from? Execution: launch the Google Ads campaign on Monday, ship the new landing page A/B test on Wednesday, analyse the funnel drop-off on Friday. You will work alongside the Content & Brand Lead — they own editorial voice and SEO content; you own performance, paid, and the analytics that connect both to revenue.',
    responsibilities: [
      'Plan and run paid acquisition across Google Ads, Meta, and YouTube.',
      'Set and manage the monthly performance budget (currently ₹4–6L/month, scaling).',
      'Manage SEO performance tracking — rankings, CTR, page experience, technical health.',
      'Own the analytics stack — GA4, Search Console, Looker Studio dashboards.',
      'Build and run lifecycle email campaigns (newsletter, post-booking, re-engagement).',
      'Run continuous landing-page A/B tests on top-converting pages.',
      'Build retargeting and audience strategies (Meta CAPI, Google Customer Match).',
      'Coordinate with Content & Brand on SEO keyword priorities and content gaps.',
      'Coordinate with Family Care Counsellor team on lead quality feedback loops.',
      'Monthly performance review with founder — channels, CAC, payback, retention.',
      'Maintain the marketing tech stack (analytics, CDP, email, attribution).',
      'Identify and pilot new channels — affiliates, WhatsApp marketing, partnerships.',
    ],
    requirements: [
      '4+ years digital marketing / growth at a D2C, healthcare, or consumer-services brand.',
      'Hands-on Google Ads + Meta Ads experience (not just agency-managed).',
      'Strong GA4 and Search Console proficiency.',
      'Demonstrated SEO performance work (rankings → traffic → conversions).',
      'Comfort with A/B testing tools (VWO, Optimizely, Posthog, or similar).',
      'Email lifecycle experience (HubSpot, Mailchimp, Customer.io, or similar).',
      'Strong commercial instinct — every metric tied to revenue and unit economics.',
    ],
    niceToHave: [
      'Healthcare, eldercare, or fertility/wellness vertical experience.',
      'Indian local-language marketing (Kannada, Tamil, Hindi).',
      'WhatsApp Business API marketing.',
      'Hands-on SQL or BigQuery comfort.',
      'Existing relationships with Indian DSPs or affiliates.',
    ],
    extraSections: [
      {
        title: 'Shift',
        items: [
          'Daytime — flexible, results-based. Hybrid (2 office days, 3 remote). Weekends off unless launching a campaign.',
        ],
      },
      {
        title: 'Compensation & benefits',
        items: [
          '₹70,000–₹1,30,000 / month.',
          'Stock options (cliff after 1 year).',
          'Conference + training budget ₹50,000/year.',
          'Group medical insurance (family floater).',
          'Annual leave (24 days).',
          'Annual performance bonus 1–2 months.',
          'Modern hardware (Mac + display).',
        ],
      },
      {
        title: 'Career path',
        items: [
          'Year 1 · Digital Marketing Strategist — build the growth engine.',
          'Year 1–2 · Head of Growth (₹1.5–2.5L/month + equity).',
          'Year 3+ · VP Marketing.',
        ],
      },
    ],
    applyEmail: 'careers@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'technical-content-writer-bangalore',
    title: 'Technical Content Writer',
    department: 'Marketing',
    category: 'Marketing & Content',
    location: 'Bangalore (hybrid · 2 days in Indiranagar office, 3 remote)',
    type: 'Hybrid',
    team: 'Clinical content',
    postedAt: '2026-05-09',
    excerpt:
      'Write the clinical, condition-specific, and how-to content that powers our most useful pages. Medically accurate, emotionally clear. ₹45–80k/month + book budget + stock options.',
    intro:
      'The Technical Content Writer covers a specific lane: clinical and condition-specific writing. While the Content & Brand Lead owns voice and editorial strategy, you produce the depth — illness guides, recovery checklists, condition explainers, caregiver training material, internal SOP documents. Your work has to be medically accurate enough to pass a nurse’s review and emotionally clear enough that a non-clinical family member reading at 11 PM can act on it. Most healthcare content fails one or the other. Doing both well is the entire job. Two-thirds of your output is family-facing (long guides, condition pages, post-discharge checklists). One-third is internal (training manuals, caregiver SOPs, supervisor scripts).',
    responsibilities: [
      'Write 2 long-form clinical guides per month (1,500–2,500 words each).',
      'Refresh and expand existing service detail pages quarterly.',
      'Produce condition-specific content (stroke recovery, Parkinson’s home care, post-op cardiac, etc.).',
      'Build downloadable checklists and PDFs for families.',
      'Maintain caregiver training manuals and supervisor scripts.',
      'Coordinate clinical review with the consulting nurse on every clinical piece.',
      'Use primary sources (PubMed, WHO, ICMR) — cite responsibly.',
      'Maintain a glossary of caregiving terms for SEO and AEO surfaces.',
      'Internal docs — SOPs for Care Managers, escalation cards for placements.',
      'Collaborate with Content & Brand on long-form journal pieces.',
      'Maintain the version history of clinical content (every claim dated and reviewed).',
      'Localise key content into Kannada and Tamil with translation partners.',
    ],
    requirements: [
      '2+ years technical or healthcare content writing experience.',
      'Portfolio of clinical/medical writing for a lay audience.',
      'Ability to read and translate primary research into plain English.',
      'Strong editing instinct — you’ll edit your own work daily.',
      'Comfort with Markdown, version control (Git), or similar workflows.',
      'Familiarity with SEO principles (you’ll write H2-friendly, scan-friendly copy).',
    ],
    niceToHave: [
      'Nursing or allied-health degree (BSc Nursing, B Pharm, BPT).',
      'Prior experience at Practo, Lybrate, mfine, Cleartrip Health, or similar.',
      'Comfort writing in Indian English while avoiding jargon.',
      'Experience writing for AI search / AEO (TL;DR blocks, FAQ schema).',
      'Kannada or Tamil writing ability.',
    ],
    extraSections: [
      {
        title: 'Shift',
        items: [
          'Daytime — flexible, results-based. Hybrid (2 office days, 3 remote). Weekends off.',
        ],
      },
      {
        title: 'Compensation & benefits',
        items: [
          '₹45,000–₹80,000 / month.',
          'Conference + book budget ₹35,000/year.',
          'Stock options (cliff after 1 year).',
          'Group medical insurance (family floater).',
          'Annual leave (22 days).',
          'Festival bonus.',
          'Modern hardware (laptop + display).',
        ],
      },
      {
        title: 'Career path',
        items: [
          'Year 1 · Technical Content Writer — steady, clinically-reviewed long-form output.',
          'Year 1–2 · Senior Technical Writer (₹80k–1.2L/month).',
          'Year 2+ · Editor / Head of Clinical Content.',
        ],
      },
    ],
    applyEmail: 'careers@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'field-mobiliser-source-state-recruitment',
    title: 'Field Mobiliser — Source-State Recruitment',
    department: 'Operations · Supply & Sourcing',
    category: 'Operations',
    location: 'Multi-Region (NE India, Tamil Nadu, AP, Telangana, Odisha, Jharkhand, WB, Bihar, UP, Chhattisgarh)',
    type: 'Full-time',
    team: 'Supply & Sourcing — Field',
    postedAt: '2026-05-24',
    excerpt:
      'On-the-ground recruitment officer in source districts — find, motivate, and onboard candidates from your home region for verified placements in metro cities. High-impact, field-based role with clear growth path.',
    intro:
      'EzyHelpers connects urban households across India with verified domestic professionals — live-in maids, full-time and part-time helpers, cooks, nannies, elderly caregivers, drivers, and patient-care attendants. Most placements happen in metros (Bangalore, Delhi NCR, Hyderabad, Chennai, Mumbai, Pune, Bareilly), but the supply comes overwhelmingly from source-rich states — the North East, coastal Andhra and Telangana, interior Tamil Nadu, the tribal belts of Odisha and Jharkhand, and parts of West Bengal, Bihar, UP, and Chhattisgarh.\n\nA Field Mobiliser is EzyHelpers\' on-the-ground recruitment officer in a source district. You find, motivate, and onboard the right candidates from your home region for placement opportunities in city markets — with honest conversations, family consent, clear expectations on pay and conditions, and clean documentation. You are not a tele-caller. You travel — to villages, panchayats, urban wards, ITIs, training centres, women\'s self-help groups, NGO partners, anganwadis, jan suvidha kendras, college and skill-mission alumni networks. Done well, this is one of the highest-impact roles in the company. A great Field Mobiliser brings 15–25 placement-ready candidates a month, and changes the income trajectory of every single one of them.',
    responsibilities: [
      'Build and run a monthly mobilisation plan for your district / cluster — villages, blocks, urban wards, training institutes, SHGs, NGOs, panchayat networks, and faith-based community gatherings.',
      'Conduct field visits, group meetings, and 1:1 conversations with prospective candidates (most often women aged 21–55, but also couples for housekeeping / farmhouse / security roles).',
      'Partner with local stakeholders — Panchayat Secretaries, ASHAs, anganwadi workers, ITI placement cells, JSS, DDU-GKY and PMKVY centres, NRLM / SRLM SHG federations, church / mahila mandal groups, local agents — to generate consistent inflow of credible leads.',
      'Run small community awareness sessions about live-in, full-time, and patient-care opportunities in cities; bust myths around safety, food, and treatment; explain salary structure, weekly off, leave policy, and return travel.',
      'Conduct structured screening: age, marital status, family permission, language(s) spoken, prior work, cooking style, health, willingness to relocate, expected salary, joining timeline.',
      'Pre-qualify candidates against current city demand: live-in maid, full-time maid, cook (veg / non-veg, regional cuisine), nanny, elderly / patient care, couple housekeeping, farmhouse couple, Japa maid, etc.',
      'Set realistic expectations on salary band, working hours, food, accommodation, off-day, and city culture. Never over-promise — under-promise and let the city team close.',
      'Capture Aadhaar, PAN (where available), photograph, voter ID / ration card, two reference contacts, current and permanent address with landmark, and live geo-tagged location.',
      'Conduct basic verbal reference check with the candidate\'s family head or village-level reference before the file leaves your hands.',
      'Fill out the EzyHelpers helper profile in our app / CHAP system on the same day — skills, languages, prior work history, salary expectation, joining date, photographs, video introduction, category mapping.',
      'Handle family counselling — sit with parents, in-laws, husbands, and elder siblings to address concerns about safety and respect.',
      'Coordinate travel logistics with the central placement team: train / bus booking, station pickup at the destination city, contact handoff to the city team.',
      'Stay reachable to the candidate for the first 30 days of placement; resolve homesickness, salary clarification, and family communication issues before they become drop-outs.',
      'Receive daily / weekly demand briefs from the central sourcing lead and push candidate profiles into the funnel within agreed TAT (same-day or next-day).',
      'Submit Daily Work Report (DWR): villages / locations visited, meetings held, leads generated, candidates screened, profiles created, profiles confirmed, travel covered.',
      'Follow EzyHelpers\' Code of Conduct strictly: no commission from candidates, no false promises of pay, no recruitment of minors, no recruitment without family consent.',
    ],
    requirements: [
      'Mother-tongue fluency in the dominant language of your assigned cluster (e.g. Assamese / Bodo, Khasi, Tamil, Telugu, Odia, Santhali / Ho / Mundari, Bengali, Bhojpuri — as relevant to your region).',
      'Working Hindi and basic English for coordination with the central team in Bangalore / Delhi.',
      'Roughly 1–4 years of field experience in any of: blue-collar recruitment, NRLM / SRLM / NGO field work, microfinance loan officer, insurance agent, ASHA / anganwadi supervisor, FMCG distribution, DDU-GKY mobiliser, skill-development counsellor, or domestic-help / placement agency field role.',
      'Strong local network — you should already know your district. People should already know you.',
      'A two-wheeler and valid driving licence, and the ability to cover 40–80 km a day on field.',
      'Smartphone literacy: WhatsApp, Google Maps, our app, photo upload, basic typing in your local language.',
      'High integrity — recruitment of vulnerable workers is a sensitive job. We do background checks on Field Mobilisers themselves.',
      'Comfort travelling 20–24 working days a month within your cluster, with occasional 2–4 day trips to the destination city.',
      '10+2 / Class 12 minimum; graduate preferred but not mandatory.',
    ],
    niceToHave: [
      'Prior experience as a placement officer or mobiliser with a recognised skill-mission programme (DDU-GKY, PMKVY, NULM, Skill India, NRLM, SRLM, ITI placement cell).',
      'Existing relationships with SHG federations, panchayats, or NGOs in your district.',
      'Exposure to digital tools — Google Sheets, basic CRM, biometric kits, e-KYC.',
      'A second regional language (Bengali speaker who also speaks Hindi; Tamil speaker who also speaks Telugu; etc.).',
      'Prior experience placing candidates outside your home state — you understand both ends of the migration journey.',
      'Comfort presenting in small group settings (community sessions of 10–30 women / families).',
    ],
    extraSections: [
      {
        title: 'Open locations (multiple openings)',
        items: [
          'North East: Assam (Guwahati, Dibrugarh, Jorhat, Silchar), Meghalaya (Shillong, Tura), Manipur (Imphal), Tripura (Agartala), Nagaland (Dimapur, Kohima), Mizoram (Aizawl), Arunachal Pradesh (Itanagar)',
          'Tamil Nadu: Chennai catchment, Tiruvannamalai, Villupuram, Salem, Erode, Madurai, Tirunelveli, Thoothukudi, Nagapattinam, Cuddalore',
          'Andhra Pradesh: Vijayawada, Visakhapatnam, Guntur, Anantapur, Kurnool, Chittoor, East & West Godavari',
          'Telangana: Hyderabad catchment, Khammam, Warangal, Karimnagar, Nalgonda, Mahbubnagar',
          'Odisha: Ganjam, Cuttack, Bhubaneswar, Koraput, Mayurbhanj',
          'Jharkhand: Ranchi, Gumla, Lohardaga, Simdega, Dumka',
          'Chhattisgarh: Raipur, Bilaspur, Jagdalpur',
          'West Bengal: Kolkata catchment, North & South 24 Parganas, Murshidabad, Malda',
          'Bihar: Patna, Gaya, Purnia, Madhubani',
          'Uttar Pradesh: Lucknow, Gorakhpur, Varanasi, Bareilly belts',
        ],
      },
      {
        title: 'Compensation & benefits',
        items: [
          'Fixed monthly salary: ₹18,000 – ₹32,000 depending on region, experience, and cluster size.',
          'Performance-linked incentive: ₹500 – ₹1,500 per successfully placed and retained candidate (paid after 30-day retention). Top mobilisers earn ₹15,000 – ₹40,000/month in incentives.',
          'Travel & field allowance: fuel reimbursement + fixed monthly mobile / data allowance.',
          'Quarterly recognition bonus for top performers across regions.',
          'Annual paid leave (12 days) plus declared regional holidays.',
          'Group accident insurance during field hours.',
          'Festival bonus twice a year.',
          'Sponsored training — onboarding, Code of Conduct certification, periodic refreshers.',
          'Smartphone allowance / company device for high-performing mobilisers after 3 months.',
        ],
      },
      {
        title: 'Key KPIs',
        items: [
          'Leads generated per month: 80–150 (region-dependent)',
          'Candidates screened and profile-created per month: 30–50',
          'Profiles confirmed as placement-ready: 15–25 per month',
          'Successful placements in destination cities: 8–15 per month',
          '30-day retention rate of placed candidates: ≥ 80%',
          'Documentation completeness and accuracy: ≥ 95% audit pass rate; zero ghost profiles',
          'Code of Conduct adherence: zero tolerance on commission-taking, minor recruitment, or family-consent violations',
          'Daily Work Report (DWR) compliance: submitted by 9 PM every working day',
        ],
      },
      {
        title: 'A typical week',
        items: [
          'Monday morning: Review the central demand brief — categories in demand, salary bands, city priorities.',
          'Monday–Wednesday: Visit 2–3 villages or wards per day. One SHG group meeting in the morning, 4–6 individual / family conversations through the day. Profile creation in the evening.',
          'Thursday: Document collection day — Aadhaar, photographs, references; family counselling for candidates who have said yes; coordinate medical and travel.',
          'Friday: Boarding day — drop off candidates at the station; handover call with city team; close files.',
          'Saturday: Cluster review with Regional Supply Head — what worked, what didn\'t, next week\'s demand.',
          'Sunday: Off (unless a boarding is scheduled).',
        ],
      },
      {
        title: 'Growth path',
        items: [
          'Year 1: Field Mobiliser — own your district / cluster and prove consistent monthly throughput with strong retention.',
          'Year 1.5–2: Senior Field Mobiliser / Cluster Lead — manage 3–5 mobilisers across a sub-region; own a state-level supply target.',
          'Year 2–3: Regional Supply Head — own a full state or zone, with a team of 8–15 mobilisers, full state-level P&L for supply.',
          'Year 3+: Cross-functional moves into central operations, training, partnerships, or city leadership.',
          'We promote from within. Almost every senior person in our supply organisation started at the village level.',
        ],
      },
      {
        title: 'Why join EzyHelpers',
        items: [
          'Mission you can explain in one sentence: "I help women and families find dignified, well-paid work in cities — and the city families they work for treat them well."',
          'Direct line to the central team — data-driven, daily check-ins, and clear playbooks.',
          'Pay that respects your local market. Most field-mobiliser roles in the social sector underpay. We don\'t.',
          'Real career growth. Supply is our biggest constraint — this is a core function, not a side team.',
          'No commission-taking culture. Zero tolerance for charging candidates. You will never be asked to compromise.',
        ],
      },
      {
        title: 'What this role is NOT',
        items: [
          'Not a desk job. If you want to work from an office, this is the wrong role.',
          'Not a tele-calling role. We have a separate Supply Sourcing Executive (tele) team for that.',
          'Not a placement-agent / middleman role. You are a full-time EzyHelpers employee with salary, KPIs, ID card, and code of conduct.',
          'Not a "send anyone, anyhow" role. We reject roughly 40% of submitted profiles. Volume without quality is failure here.',
        ],
      },
      {
        title: 'Selection process',
        items: [
          'Application review (CV + a short voice note in your local language explaining why you fit this role).',
          'Phone interview in your local language with the Regional Supply Head (30–40 minutes).',
          'One-day field shadow — you accompany an existing mobiliser, or we accompany you to two of your candidate conversations.',
          'Reference check with two professional references.',
          'Offer + onboarding — 5-day paid training at our Bangalore office (travel + stay covered), including 2 days of city-side field exposure.',
          'End-to-end timeline: typically 10–18 days from application to offer.',
        ],
      },
    ],
    applyEmail: 'contact@ezyhelpers.com',
    applyBodyPrompt: 'Please include:\n1. Your CV or a clear note covering your work history, district, languages, and current location.\n2. The district and cluster you would mobilise from.\n3. A 2–3 minute voice note in your local language answering: "Why are you the right person to recruit domestic professionals from your area, and what does your local network look like today?"\n4. Your earliest joining date and current/expected salary.\n\nSubject line: Field Mobiliser — [Your District], [Your State]',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'field-recruiter-business-development-executive-pan-india',
    title: 'Field Recruiter / Business Development Executive — PAN India',
    department: 'Operations · Supply & Sourcing',
    category: 'Business Development',
    location: 'Field-Based (PAN India · serving Bengaluru and other locations)',
    type: 'Full-time',
    team: 'Field Recruitment & Business Development',
    postedAt: '2026-05-28',
    excerpt:
      'Recruit domestic helpers, caregivers, babysitters, cooks, and housekeeping staff from local cities and nearby villages. Field-based role with flexible hours, immediate joining.',
    intro:
      'EzyHelpers is looking for passionate, confident, and proactive people to help us recruit domestic helpers, caregivers, babysitters, cooks, and housekeeping staff from local cities and nearby villages — serving Bengaluru and other locations.\n\nThe ideal candidate is comfortable travelling locally, meeting people, building grassroots connections, and sourcing reliable helpers. This is a field-based role with hands-on work in your local area, giving you direct impact on candidate sourcing for one of India\'s fastest-growing domestic staffing platforms.',
    responsibilities: [
      'Find and recruit domestic helpers and caregivers from local cities and villages.',
      'Source candidates across multiple roles: Housekeeping, Baby Care, Elderly Care, Cooking, Live-in Helpers, and Caregivers.',
      'Build partnerships with local agents, villages, training centres, and communities.',
      'Conduct helper screening and provide onboarding support.',
      'Coordinate closely with the Bengaluru operations team.',
      'Drive mobilisation and referral hiring programs.',
      'Maintain a strong pipeline of candidates through field visits and references.',
    ],
    requirements: [
      'Hindi is a must — proficiency is essential for this role.',
      'Good communication skills.',
      'Local language knowledge preferred.',
      'Comfortable with field work and local travel.',
      'Strong convincing and networking skills.',
      'Experience in recruitment, sales, field work, or manpower hiring is preferred.',
      'Freshers with strong local connections are welcome to apply.',
    ],
    niceToHave: [
      'Prior experience as a recruiter, mobiliser, or BD executive in staffing, NGO, microfinance, insurance, or skill-mission programmes.',
      'Existing relationships with local agents, training institutes, panchayats, or community groups.',
      'Experience sourcing candidates from villages and tier-2/3 towns for metro placements.',
      'Smartphone literacy — WhatsApp, basic CRM, photo upload, Google Maps.',
      'A second regional language beyond Hindi.',
    ],
    extraSections: [
      {
        title: 'Salary & benefits',
        items: [
          'Attractive salary.',
          'Referral incentives.',
          'Performance-based incentives.',
          'Growth opportunities.',
          'Flexible work culture with field-based work.',
        ],
      },
      {
        title: 'Why join EzyHelpers',
        items: [
          'Be part of a fast-growing domestic staffing platform.',
          'Opportunity to work across multiple cities.',
          'Strong support and incentive programs.',
          'Work closely with operations and hiring teams.',
          'Build local networks and grow into leadership roles.',
        ],
      },
      {
        title: 'Work setup',
        items: [
          'Location: Field-Based Work across PAN India.',
          'Job Type: Full-Time · Flexible Hours.',
          'Joining: Immediate.',
        ],
      },
    ],
    applyEmail: 'careers@ezyhelpers.com',
    applyBodyPrompt: 'Please include:\n1. Your CV or a brief note covering your work history and current location.\n2. Your city/town and the area(s) you can cover for field work.\n3. Languages you speak (Hindi is mandatory; mention any local languages).\n4. Any prior experience in recruitment, sales, field work, or manpower hiring.\n5. Your earliest joining date and current/expected salary.\n\nSubject line: Field Recruiter — [Your City/Town]',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
  {
    slug: 'home-helper-caregiver-bangalore',
    title: 'Home Helper & Caregiver',
    department: 'EzyHelpers Care & Home Services',
    category: 'Care Services',
    location: 'Bangalore (placements across all zones)',
    type: 'Full-time',
    team: 'Field caregiving',
    postedAt: '2026-06-13',
    excerpt:
      'A blend of home care and personal care: cooking and cleaning one moment, lending support and companionship the next. Full-time or part-time, live-in or live-out, with a Care Coordinator you can reach anytime.',
    intro:
      'Join the EzyHelpers family. Our Home Helpers do more than chores; they become a dependable part of the families they serve. In this role you take care of everyday household needs while also supporting elderly members, patients, or anyone in the home who needs a helping hand. It is a blend of home care and personal care: cooking and cleaning one moment, lending support and companionship the next. If you are hardworking, warm-hearted, and trustworthy, we will place you with the right family and support you every step of the way. The exact mix of home and care duties depends on each placement. Some families need more household help, others more personal care, and we match you to roles that fit your strengths.',
    responsibilities: [
      'Clean and maintain the home: sweeping, mopping, dusting, and tidying.',
      'Cook fresh, home-style meals based on the family’s preferences and dietary needs.',
      'Wash dishes and utensils; handle laundry, ironing, and bed-making.',
      'Manage groceries and run small household errands.',
      'Keep the home organised, safe, and comfortable.',
      'Assist elderly members or patients with daily routines: bathing, grooming, dressing, and meals.',
      'Help with mobility, give gentle support while walking, and accompany them when needed.',
      'Provide medication reminders as instructed by the family.',
      'Keep a friendly eye on wellbeing and report anything that seems off.',
      'Offer companionship, conversation, and a caring presence.',
      'Maintain a respectful, trustworthy relationship with the household.',
      'Communicate openly with the family and your EzyHelpers Care Coordinator.',
      'Adapt to the family’s routines and needs with patience and flexibility.',
    ],
    requirements: [
      'A caring, honest, and dependable person who takes pride in their work.',
      'Able to handle household tasks and physical support comfortably.',
      'Patient and respectful, especially with the elderly and unwell.',
      'Able to communicate in at least one of: Kannada, Hindi, Tamil, Telugu, or English.',
      'Willing to complete background verification (a simple, standard process).',
      'For live-in roles: comfortable staying at the family’s home as agreed.',
      'No formal degree is needed for most roles; sincerity, reliability, and a good heart matter most.',
    ],
    niceToHave: [
      'Previous experience as a house help, cook, caregiver, patient attendant, or ayah.',
      'Cooking skills (South Indian, North Indian, or specific regional cuisine).',
      'Any care or nursing training, or experience with elderly or post-surgery care.',
    ],
    extraSections: [
      {
        title: 'Role type',
        items: [
          'Full-time or part-time.',
          'Live-in or live-out, as agreed with the family.',
          'Placements across all Bangalore zones.',
        ],
      },
      {
        title: 'Why work with EzyHelpers',
        items: [
          'Steady work, fair pay: competitive, on-time salary matched to your skills.',
          'The right fit: we place you with families that suit your experience and preferred area.',
          'Always supported: a dedicated Care Coordinator you can reach anytime.',
          'Clear expectations: every placement comes with defined duties, so there are no surprises.',
          'Respect and safety: we verify the homes we place you in and stand by you.',
          'Grow your career: training, recognition, and long-term opportunities for dependable helpers.',
        ],
      },
      {
        title: 'How to apply',
        items: [
          'Applying takes just a few minutes.',
          'Apply online through this page, or call or WhatsApp our recruitment team.',
          'Keep your ID, any certificates, and references handy for the verification step.',
        ],
      },
    ],
    applyEmail: 'careers@ezyhelpers.com',
    hasApplicationForm: true,
    applicationForm: 'role',
  },
]

export function getJobBySlug(slug: string): JobOpening | undefined {
  return jobOpenings.find((j) => j.slug === slug)
}
