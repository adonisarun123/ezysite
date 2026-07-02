import { Metadata } from 'next'
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import UrgencyCTA from '@/components/UrgencyCTA';
import FAQWithTracking from '@/components/FAQWithTracking';
import { posts } from '@/lib/blogData';
import { getBlogPost } from '@/lib/blogSource';
import RelatedPosts from '@/components/RelatedPosts';
import BlogServiceLinks from '@/components/BlogServiceLinks';
import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.id }));
}

// FAQ data for different blog categories
const blogFAQs = {
  'how-to-find-a-maid-for-home-in-bangalore': [
    {
      id: 'reliable-maid-bangalore',
      question: 'How do I find a reliable maid for my home in Bangalore?',
      answer: 'Decide the arrangement you need (part-time, full-time, or live-in), then source through a verified agency, a trusted reference, or a reputable platform and always run a background check before hiring. An agency is the fastest, most reliable route because candidates are pre-verified.'
    },
    {
      id: 'get-full-time-maid-quickly',
      question: 'How can I get a full-time maid in Bangalore quickly?',
      answer: 'Share your requirements with a verified agency, review 2–3 matched profiles, interview or trial them, and onboard, often within a few days. This is faster and safer than chasing brokers or unverified listings.'
    },
    {
      id: 'full-time-maid-cost-bangalore',
      question: 'How much does a full-time maid cost in Bangalore?',
      answer: 'Roughly ₹16,000–₹20,000 per month for 8–10 hours daily, depending on the tasks, the maid\'s experience, and your locality. Part-time costs less; live-in costs more.'
    },
    {
      id: 'what-to-check-before-hiring',
      question: 'What should I check before hiring a maid in Bangalore?',
      answer: 'Government ID and address proof, police/background verification, references from previous families, and a health check, plus a short trial period. Also, confirm your apartment or gated community\'s staff registration rules.'
    },
    {
      id: 'agency-vs-direct-hiring',
      question: 'Is it better to hire a maid through an agency or directly in Bangalore?',
      answer: 'Direct hiring can be cheaper, but you handle all verification and have no backup if it fails. An agency pre-verifies candidates and offers replacements, usually worth it in a large city where reliability and safety matter most.'
    },
    {
      id: 'hardest-time-to-find-maid',
      question: 'When is the hardest time to find a maid in Bangalore?',
      answer: 'Around major festivals and the year-end, when many helpers travel to their hometowns, availability tightens. Start early in these periods, or use an agency that can guarantee a replacement.'
    }
  ],
  'part-time-vs-full-time-vs-live-in-cook': [
    {
      id: 'diff-part-time-full-time-cook',
      question: 'What is the difference between a part-time and full-time cook?',
      answer: 'A part-time cook comes for a fixed slot, cooks the booked meals, and leaves. A full-time cook works through the day, handling most meals plus kitchen upkeep, then goes home at night. Full-time gives more coverage; part-time costs less.'
    },
    {
      id: 'is-live-in-cook-worth-it',
      question: 'Is a live-in cook worth it?',
      answer: 'For large or joint families, those who entertain often, or households with unpredictable mealtimes, yes, a live-in cook delivers any-hour coverage. For a small family with regular meals, it\'s usually more than you need.'
    },
    {
      id: 'most-affordable-cook',
      question: 'Which type of cook is most affordable?',
      answer: 'A part-time cook is typically the most economical, since you only pay for specific meal slots rather than all-day availability.'
    },
    {
      id: 'part-time-cook-special-diets',
      question: 'Can a part-time cook handle special diets?',
      answer: 'Yes, discuss your dietary needs (vegetarian, Jain, diabetic-friendly, regional cuisine) upfront. A trial meal helps you confirm the fit before committing.'
    },
    {
      id: 'provide-accommodation-for-cook',
      question: 'Do I need to provide accommodation for a cook?',
      answer: 'Only for a live-in cook, who stays in your home. Part-time and full-time cooks go home, so no accommodation is needed.'
    }
  ],
  'signs-elderly-parents-need-help-at-home': [
    {
      id: 'first-signs-elderly-parent-needs-help',
      question: 'What are the first signs an elderly parent needs help?',
      answer: 'Often subtle ones like unsteadiness or a minor fall, missed medications, a home that\'s less clean than usual, spoiled or scarce food, and withdrawing socially. A cluster of these matters more than any single sign.'
    },
    {
      id: 'parent-insists-they-are-fine',
      question: 'My parent insists they\'re fine — what do I do?',
      answer: 'Resistance is common and usually about fear of losing independence. Approach it gently, focus on specific safety concerns rather than "you can\'t cope," and involve their doctor. Our guide on helping seniors accept care covers this in depth.'
    },
    {
      id: 'memory-lapses-normal',
      question: 'Are memory lapses a normal part of ageing?',
      answer: 'Mild forgetfulness can be. But frequent repetition, confusion in familiar places, missed appointments, or trouble managing money warrant a doctor\'s input, since some causes are treatable.'
    },
    {
      id: 'what-kind-of-help-arrange',
      question: 'What kind of help should I arrange?',
      answer: 'It depends on the need. Companionship for loneliness and light support, a full-time or live-in caretaker for daily tasks and mobility, or 24-hour care for higher needs. Match the level of care to the signs you\'re seeing.'
    },
    {
      id: 'arrange-early-or-wait',
      question: 'Is it better to arrange help early or wait?',
      answer: 'Earlier is usually safer. Families often wait until a crisis; arranging support when the early signs appear prevents falls, medication errors, and emergencies, and helps your parent stay independent longer.'
    }
  ],
  'hiring-a-maid-without-an-agency': [
    {
      id: 'is-it-legal-to-hire-directly',
      question: 'Is it legal to hire a maid without an agency?',
      answer: 'Yes. There\'s no law requiring you to use an agency. The responsibility for verification and fair terms simply shifts entirely to you.'
    },
    {
      id: 'police-verification-hired-directly',
      question: 'Can I get police verification for a maid I hired directly?',
      answer: 'Yes. Citizens can request domestic-help antecedent verification through official state portals (Seva Sindhu in Karnataka) and the national Digital Police Portal.'
    },
    {
      id: 'is-hiring-directly-cheaper',
      question: 'Is hiring directly cheaper than an agency?',
      answer: 'It can look cheaper upfront because there\'s no agency fee. But factor in your time, the verification effort, and the cost and risk if the hire fails and you have no replacement.'
    },
    {
      id: 'biggest-risk',
      question: 'What\'s the biggest risk of hiring without an agency?',
      answer: 'Skipping or being unable to do proper background verification. An unverified stranger in your home around family and valuables is the core risk you\'re taking on.'
    },
    {
      id: 'protect-myself-direct-hiring',
      question: 'How do I protect myself if I still want to hire directly?',
      answer: 'Do every step in the checklist above — verify ID, get a background check, call real references, run a trial, and put terms in writing.'
    }
  ],
  'types-of-domestic-help-india': [
    {
      id: 'diff-maid-cook',
      question: 'What is the difference between a maid and a cook?',
      answer: 'A maid handles cleaning and general housekeeping; a cook focuses on meal preparation and the kitchen. Some full-time or live-in maids do both, but if cooking is your priority, a dedicated cook is usually better.'
    },
    {
      id: 'what-does-top-work-mean',
      question: 'What does "top work maid" mean?',
      answer: 'A maid who does "top work", the standing-level kitchen and counter tasks like washing utensils and cooking help, rather than floor-level cleaning ("below work"). Always confirm which she does before hiring.'
    },
    {
      id: 'can-one-do-all',
      question: 'Can one person do all the household work?',
      answer: 'Usually, no. Most domestic helpers are hired for specific responsibilities based on their skills and experience. For example, a live-in maid generally focuses on housekeeping and daily household chores, while a live-in cook handles meal preparation. Similarly, childcare and elderly care require dedicated support and are often assigned to trained caregivers. If you need a helper to manage multiple tasks, this should be discussed and agreed upon before hiring so that the duties, workload, and salary expectations are clear for everyone involved.'
    },
    {
      id: 'most-affordable',
      question: 'Which type of domestic help is most affordable?',
      answer: 'A part-time maid for a single task is typically the lowest cost. Live-in and specialised roles (japa, elderly care) cost more because of the hours and skills involved.'
    },
    {
      id: 'do-all-need-verification',
      question: 'Do all types of domestic help need verification?',
      answer: 'Yes. Anyone entering your home; maid, cook, nanny, caretaker, or driver, should be background-verified for your family\'s safety.'
    }
  ],
  'how-to-choose-a-reliable-japa-maid': [
    {
      id: 'how-far-in-advance-choose-japa-maid',
      question: 'How far in advance should I choose a japa maid?',
      answer: 'Start during pregnancy, a few weeks before your due date. Good japa maids are booked early, and you don\'t want to be scrambling after delivery.'
    },
    {
      id: 'most-important-thing-to-check',
      question: 'What\'s the single most important thing to check?',
      answer: 'Verification. You\'re trusting someone with a newborn and a healing mother. ID and background checks, health status, and real references come before everything else.'
    },
    {
      id: 'should-japa-maid-live-in',
      question: 'Should the japa maid live in?',
      answer: 'For most families, yes. Night care for feeds is a big part of the value. But if you only need daytime help, part-time arrangements exist.'
    },
    {
      id: 'what-if-japa-maid-not-good-fit',
      question: 'What if the japa maid isn\'t a good fit after a few days?',
      answer: 'This is exactly why you confirm the replacement policy upfront. With a reputable agency you can request a replacement; with direct hiring you\'re on your own, which is a real risk to weigh.'
    },
    {
      id: 'is-more-expensive-japa-maid-better',
      question: 'Is a more expensive japa maid always better?',
      answer: 'Not automatically. Experience, verification, references, and fit with your family matter more than price alone. Use cost as one factor, not the deciding one.'
    }
  ],
  'japa-maid-vs-nanny-vs-babysitter': [
    {
      id: 'is-japa-nanny-same',
      question: 'Is a japa nanny the same as a regular nanny?',
      answer: 'No. A "japa nanny" is another name for a japa maid, a postpartum specialist for the recovery period who also cares for the mother. A regular nanny focuses on the child over the long term.'
    },
    {
      id: 'can-one-be-both',
      question: 'Can one person be both a japa maid and a nanny?',
      answer: 'Sometimes an experienced caregiver can transition from japa duties into a nanny role once the mother has recovered, if you and she agree. But the skill sets and focus differ, so discuss it openly rather than assuming.'
    },
    {
      id: 'diff-nanny-babysitter',
      question: 'What\'s the difference between a nanny and a babysitter?',
      answer: 'A nanny provides ongoing, full-day or live-in childcare and takes on your child\'s whole routine and development. A babysitter provides hours-based cover, which can be occasional (an evening out) or regular part-time (a few hours every day), focused on keeping your child safe and occupied during those hours rather than the deeper nanny role.'
    },
    {
      id: 'which-is-more-expensive',
      question: 'Which is more expensive?',
      answer: 'A japa maid usually costs the most per month because the care is specialised and round-the-clock, but it\'s only for a short period. Nannies are an ongoing monthly cost. Babysitters are usually paid hourly or per session.'
    },
    {
      id: 'family-help-at-home',
      question: 'We have family help at home, do we still need any of these?',
      answer: 'Not necessarily. If you have reliable family support, you might only need occasional babysitting. These roles exist to fill gaps that family support can\'t, which is common in nuclear, far-from-home, or dual-working households.'
    }
  ],
  'what-is-a-Japa-maid': [
    {
      id: 'japa-maid-vs-confinement-nanny',
      question: 'Is a Japa maid the same as a confinement nanny?',
      answer: 'Yes. "Confinement nanny," "postpartum maid," "newborn care specialist," and "Japa nanny" all describe broadly the same role, a trained caregiver for the mother-and-baby recovery period.'
    },
    {
      id: 'when-to-book-japa-maid',
      question: 'When should I book a Japa maid?',
      answer: 'Ideally, during your pregnancy, a few weeks before your due date, so an experienced, verified caregiver is reserved and ready when the baby arrives. Good Japa maids get booked early.'
    },
    {
      id: 'japa-care-for-baby-only',
      question: 'Is Japa care only for the baby?',
      answer: 'No. A defining feature of Japa care is that it looks after the mother\'s recovery too; her meals, massage, rest, and emotional wellbeing, not only the newborn.'
    },
    {
      id: 'religious-regional-traditions',
      question: 'Does Japa care follow religious or regional traditions?',
      answer: 'It can. Many families want specific dietary, massage, or tummy-binding practices observed, and experienced Japa maids are familiar with these. You can discuss your family\'s preferences upfront.'
    },
    {
      id: 'different-from-normal-nanny',
      question: 'How is this different from a normal nanny I\'d hire later?',
      answer: 'A Japa maid is for the short, intensive recovery window and cares for both mother and baby. A regular nanny usually starts later and focuses on the child as it grows. Many families use a Japa maid first, then transition to a nanny.'
    }
  ],
  'hiring-domestic-helper': [
    {
      id: 'hiring-cost',
      question: 'How much does it cost to hire domestic help in India?',
      answer: 'Costs vary by location and service type. In metro cities, part-time help ranges from ₹8,000-15,000/month, while full-time help costs ₹15,000-25,000/month. Tier 2 cities are generally 30-40% less expensive.'
    },
    {
      id: 'background-check',
      question: 'How long does background verification take?',
      answer: 'Police verification typically takes 7-15 days, depending on your location. We recommend starting this process early and never hiring anyone without proper verification.'
    },
    {
      id: 'trial-period',
      question: 'Should I have a trial period?',
      answer: 'Yes, we strongly recommend a 30-day trial period. This allows both parties to assess compatibility and adjust expectations before committing to a long-term arrangement.'
    },
    {
      id: 'legal-requirements',
      question: 'What legal documents do I need?',
      answer: 'You need a written employment contract, copies of their ID documents, police verification certificate, and maintain proper wage records. Some states also require registration with local authorities.'
    },
    {
      id: 'finding-help',
      question: 'What\'s the best way to find reliable domestic help?',
      answer: 'The most reliable methods are verified agencies like EzyHelpers, personal referrals from trusted sources, and verified online platforms. Avoid unverified sources like street-side agencies or unknown walk-in candidates.'
    }
  ],
  'safety-tips': [
    {
      id: 'safety-measures',
      question: 'What are the most important safety measures when hiring domestic help?',
      answer: 'Always conduct police verification, verify identity documents, check references, secure valuables, and establish clear house rules. Install security systems if needed, but ensure transparency and consent.'
    },
    {
      id: 'emergency-procedures',
      question: 'How should I prepare for emergencies?',
      answer: 'Keep updated emergency contacts, ensure your helper knows basic first aid, have clear evacuation plans, and maintain emergency supplies. Train them on emergency procedures and communication protocols.'
    },
    {
      id: 'security-cameras',
      question: 'Should I install security cameras?',
      answer: 'Security cameras in common areas are acceptable with proper consent and transparency. Never install cameras in private spaces, always inform your helper, and ensure compliance with privacy laws.'
    },
    {
      id: 'trust-building',
      question: 'How can I build trust while maintaining security?',
      answer: 'Be transparent about security measures, treat helpers with respect, start with supervised work, gradually increase responsibilities, and maintain open communication. Trust is built over time through consistent behavior.'
    }
  ],
  'fair-wages': [
    {
      id: 'minimum-wage',
      question: 'What is the minimum wage for domestic workers?',
      answer: 'Minimum wages vary by state. Delhi is ₹17,500/month, Mumbai ₹16,800/month, Bangalore ₹15,200/month for unskilled workers. Always check current local minimum wage rates and ensure compliance.'
    },
    {
      id: 'wage-factors',
      question: 'What factors affect domestic worker wages?',
      answer: 'Key factors include location, experience level, skill specialization, number of tasks, working hours, and additional responsibilities. Skilled workers with experience command 40-80% premium over base rates.'
    },
    {
      id: 'benefits-mandatory',
      question: 'What benefits am I legally required to provide?',
      answer: 'Mandatory benefits include paid leaves, festival bonuses, health insurance (for eligible employees), and accident insurance. EPF and ESI apply to employees earning above certain thresholds.'
    },
    {
      id: 'wage-increases',
      question: 'How often should I increase wages?',
      answer: 'Annual wage reviews are standard, with 10-15% increases for good performance. Consider market rate adjustments, skill development rewards, and performance-based bonuses.'
    }
  ],
  'elderly-care': [
    {
      id: 'caregiver-qualifications',
      question: 'What qualifications should I look for in an elderly caregiver?',
      answer: 'Look for healthcare background, first aid certification, experience with elderly care, patience, and empathy. Specialized training in dementia care or physical therapy is valuable for specific needs.'
    },
    {
      id: 'care-costs',
      question: 'How much does elderly care cost?',
      answer: 'Basic elderly care costs ₹15,000-35,000/month, while specialized medical care ranges from ₹25,000-50,000/month. Live-in care costs ₹20,000-40,000/month plus accommodation.'
    },
    {
      id: 'medical-emergencies',
      question: 'How should caregivers handle medical emergencies?',
      answer: 'Caregivers should have first aid certification, know emergency contacts, understand the elderly person\'s medical conditions, and have clear protocols for contacting family and medical professionals.'
    },
    {
      id: 'dementia-care',
      question: 'Do I need special training for dementia care?',
      answer: 'Yes, dementia care requires specialized training in communication techniques, behavioral management, safety protocols, and understanding of cognitive decline. Look for certified dementia care providers.'
    }
  ],
  'managing-expectations': [
    {
      id: 'clear-expectations',
      question: 'How do I set clear expectations with my helper?',
      answer: 'Create detailed job descriptions, establish working hours, communicate house rules, provide written documentation, and have regular check-ins. Be specific about tasks, standards, and performance expectations.'
    },
    {
      id: 'communication-frequency',
      question: 'How often should I communicate with my helper?',
      answer: 'Daily brief check-ins, weekly performance reviews, and monthly formal evaluations work well. Address concerns immediately and maintain open two-way communication.'
    },
    {
      id: 'performance-issues',
      question: 'How do I address performance issues?',
      answer: 'Address issues early, provide specific feedback, offer training opportunities, and document conversations. Use progressive discipline for serious issues and consider whether additional training might help.'
    },
    {
      id: 'boundary-setting',
      question: 'What boundaries should I establish?',
      answer: 'Set clear work scope, establish personal space boundaries, define visitor policies, create phone usage guidelines, and maintain professional relationships while showing respect and dignity.'
    }
  ],
  'childcare-tips': [
    {
      id: 'nanny-qualifications',
      question: 'What qualifications should I look for in a nanny?',
      answer: 'Look for childcare training, first aid certification, 2-3 years of experience, good references, and genuine love for children. Background checks and health screening are essential.'
    },
    {
      id: 'child-safety',
      question: 'How do I ensure my child\'s safety with a nanny?',
      answer: 'Conduct thorough background checks, verify references, observe interactions, establish safety protocols, provide emergency procedures, and maintain open communication with both nanny and child.'
    },
    {
      id: 'nanny-costs',
      question: 'What do nannies typically cost?',
      answer: 'Nanny costs range from ₹15,000-35,000/month depending on experience, location, and responsibilities. Specialized care (educational support, multiple children) commands higher rates.'
    },
    {
      id: 'red-flags',
      question: 'What are red flags when hiring a nanny?',
      answer: 'Watch for lack of references, inconsistent stories, poor communication, disinterest in children, no first aid training, unreliable transportation, or any signs of substance abuse.'
    }
  ],
  'legal-compliance': [
    {
      id: 'employment-contract',
      question: 'Do I need a written employment contract?',
      answer: 'Yes, written contracts are essential for legal protection. Include job description, compensation, working hours, leave policy, termination conditions, and dispute resolution procedures.'
    },
    {
      id: 'legal-documentation',
      question: 'What legal documents do I need to maintain?',
      answer: 'Maintain employment contracts, wage records, attendance logs, identity documents, background checks, performance evaluations, and any incident reports.'
    },
    {
      id: 'termination-procedures',
      question: 'What is the proper procedure for termination?',
      answer: 'Provide minimum 30 days notice, clear all dues within 2 days, provide experience certificates, and ensure proper documentation. Follow lawful termination grounds and avoid discriminatory practices.'
    },
    {
      id: 'insurance-requirements',
      question: 'What insurance do I need for domestic employees?',
      answer: 'Consider public liability, professional indemnity, and property insurance. Provide medical insurance, accident insurance, and life insurance for employees. Workmen\'s compensation is mandatory for injuries.'
    }
  ],
  'home-care-cost-elderly-parents-india': [
    {
      id: 'attendant-vs-nurse-cost',
      question: 'How much does a live-in elderly care attendant cost per month in India?',
      answer: 'As a typical 2025-26 market range, a live-in attendant for daily personal care such as bathing, feeding and mobility runs about ₹12,000 to ₹25,000 a month. A trained home nurse for medical tasks costs more, roughly ₹25,000 to ₹60,000. Bangalore and other metros sit at the higher end. These are market ranges; call EzyHelpers on 080-31411776 for a quote for your situation.'
    },
    {
      id: 'why-bangalore-costs-more',
      question: 'Why does elderly care cost more in Bangalore than smaller towns?',
      answer: 'Wages and living costs are higher in metros, so home care in Bangalore, Mumbai or Delhi typically costs 20 to 50 percent more than in smaller cities.'
    },
    {
      id: 'reduce-care-cost',
      question: 'How can families reduce the cost of home care without cutting safety?',
      answer: 'Match the caregiver to the actual task. Most elderly parents need an attendant most of the time, with a nurse only for specific clinical jobs, so hiring a full-time nurse for routine companionship wastes money. Ask providers what the caregiver is paid versus the agency markup, and use a trial period to avoid a costly replacement search.'
    }
  ],
  'government-schemes-senior-care-india': [
    {
      id: 'schemes-provide-caregiver',
      question: 'Does any government scheme provide a home caregiver for elderly parents?',
      answer: 'No. Government schemes cover hospital treatment, assistive devices, pensions and institutional old age homes. The daily work of bathing, feeding, medication and companionship at home is arranged privately, through family or a service like EzyHelpers.'
    },
    {
      id: 'nphce',
      question: 'What is the National Programme for Health Care of the Elderly?',
      answer: 'It is a central and state funded programme that sets up dedicated geriatric clinics and wards in government hospitals so seniors get age-appropriate care. If your parent uses public hospitals, ask whether there is a geriatric OPD.'
    },
    {
      id: 'claim-senior-benefits',
      question: 'How do families claim senior citizen benefits in India?',
      answer: 'Get a senior citizen identity card from the state social welfare department, keep Aadhaar and income or BPL proof ready since most schemes are means-tested, and apply through the District Social Welfare Office or official scheme portal rather than paid agents.'
    }
  ],
  'caring-for-ageing-parents-india-from-abroad': [
    {
      id: 'nri-trust-care',
      question: 'How can NRIs arrange trustworthy home care for parents in India?',
      answer: 'Set up three things: a verified caregiver physically present for daily care, a single point of contact who reports to you across time zones, and transparent direct payment to the caregiver. Background and police verification matter most for NRI families because you cannot drop in to check.'
    },
    {
      id: 'parents-say-fine',
      question: 'My parents always say they are fine. How do I know if they need help?',
      answer: 'Parents often say "fine" to avoid worrying their children. The reliable way to know is to have someone trustworthy on the ground who sees the ordinary days and reports honestly, rather than relying on a tidied-up ten-minute video call.'
    },
    {
      id: 'nri-emergency',
      question: 'How should NRI families prepare for a medical emergency back home?',
      answer: 'Set up remote hospital bill payment before you need it, keep a shared document of doctors, medicines and hospital preference, choose a hospital in advance, and give the caregiver and a local relative authority to act fast so nothing waits on a time difference.'
    }
  ],
  'signs-your-parent-needs-a-caregiver': [
    {
      id: 'warning-signs',
      question: 'What are the early signs an elderly parent needs a caregiver?',
      answer: 'Watch for falls or new unsteadiness, unexplained weight loss, missed or muddled medications, memory changes that disrupt daily life, slipping personal hygiene, unopened post or unpaid bills, and a parent becoming withdrawn or lonely. Acting on these early avoids a crisis later.'
    },
    {
      id: 'raise-care-conversation',
      question: 'How do I raise the topic of a caregiver without upsetting my parent?',
      answer: 'Frame care as support that keeps them independent longer, not a takeover. Start small with a few hours of help or respite care, let them keep choices over caregiver and tasks, and bring in a doctor or trusted relative rather than making it feel like the children decided for them.'
    },
    {
      id: 'memory-loss-dementia',
      question: 'Is forgetfulness in my parent normal ageing or dementia?',
      answer: 'Occasional forgetting is normal. Missed medications, repeated questions in one conversation, confusion about the day, or getting lost on familiar routes are signs worth a doctor visit. A lot of dementia in India goes undiagnosed because families read early signs as ordinary ageing.'
    }
  ],
  'post-surgery-recovery-care-at-home-india': [
    {
      id: 'prepare-home-surgery',
      question: 'How do I prepare my home before a parent is discharged after surgery?',
      answer: 'Set the home up while they are still in hospital. Move the bed to the ground floor, clear loose rugs and clutter, light the path to the bathroom well, and arrange any equipment such as a walker or commode in advance. Get the discharge summary in writing and understand the medicines, dressing schedule and warning signs.'
    },
    {
      id: 'post-surgery-nurse',
      question: 'Do I need a home nurse after surgery or will an attendant do?',
      answer: 'The first two to six weeks often need a trained nurse for dressing changes, pain management and spotting infection early. Once the wound heals and clinical needs drop, an attendant is usually enough. Matching the level of care to the stage keeps cost sensible.'
    },
    {
      id: 'infection-signs',
      question: 'What are the warning signs of infection after surgery at home?',
      answer: 'Increasing redness, swelling, warmth, foul smell or unusual discharge from the wound, along with a rising fever, are signs of infection that need a doctor rather than a wait-and-see approach. Keep the surgeon\'s number within reach from day one.'
    }
  ],
  'dementia-care-at-home-guide-india': [
    {
      id: 'dementia-routine',
      question: 'Why does routine matter so much in dementia care?',
      answer: 'People with dementia do better with sameness. Meals at the same time, a familiar daily rhythm and a calm, uncluttered home reduce confusion and agitation, while change and chaos make them worse. This is why a consistent caregiver who knows the parent\'s habits is far better than rotating strangers.'
    },
    {
      id: 'dementia-difficult-behaviour',
      question: 'How do I handle anger or confusion in a parent with dementia?',
      answer: 'Do not argue with their version of reality; redirect gently instead of correcting them into distress. Keep your voice calm and sentences short, reduce noise and crowds, and learn their triggers, since tiredness, hunger, pain or needing the toilet often cause outbursts they cannot explain.'
    },
    {
      id: 'dementia-burnout',
      question: 'How do families avoid burnout caring for a parent with dementia?',
      answer: 'Dementia caregiving is relentless, and one person doing it alone around the clock will burn out, which harms both carer and parent. Sharing the load with a trained caregiver, even part of the day through respite care, is what makes long-term home care sustainable. Using help is good caregiving, not a failure.'
    }
  ],
  'fall-proofing-parents-home-india': [
    {
      id: 'fall-most-dangerous-room',
      question: 'Which room is most dangerous for elderly falls?',
      answer: 'The bathroom. Wet floors, hard surfaces and the awkward motions of bathing make it the highest-risk room. Grab bars next to the toilet and in the bathing area, an anti-slip mat, a bath stool, and keeping the floor dry prevent most bathroom falls.'
    },
    {
      id: 'fall-quick-fixes',
      question: 'What are the cheapest, highest-value fall-prevention fixes?',
      answer: 'Remove or fix down loose rugs, add grab bars in the bathroom, put a night light on the route to the toilet, get non-slip footwear, and ensure good lighting throughout. These cost little and prevent the majority of home falls.'
    },
    {
      id: 'fall-after-one-fall',
      question: 'My parent has already fallen once. What now?',
      answer: 'One fall sharply raises the risk of another. Beyond home modifications, having someone present for the risky moments, the bath, the night trip, getting up from a chair, is the surest prevention. A caregiver, even for a few hours, prevents the fall that grab bars alone cannot.'
    }
  ],
  'when-ageing-parent-refuses-help': [
    {
      id: 'refuse-why',
      question: 'Why does my parent refuse help they clearly need?',
      answer: 'The refusal is usually about fear of losing independence and control, not about the help itself. Once you frame care as something that keeps them independent longer, rather than a takeover, the conversation gets much easier.'
    },
    {
      id: 'refuse-what-works',
      question: 'What actually works to get a resistant parent to accept care?',
      answer: 'Start small with a few hours a week, frame it around a task they dislike rather than personal care, let them choose the caregiver and hours, and bring in a voice they respect such as a doctor. A no-pressure trial period often breaks the deadlock.'
    },
    {
      id: 'refuse-still-refuses',
      question: 'What if my parent refuses and the risk is serious?',
      answer: 'A mentally competent adult has the right to make their own choices. Keep offering gently without making every visit a fight, reduce risk where you can (fall-proofing, a medical alert, check-ins), and keep the door open. Many parents accept once it stops feeling like a threat.'
    }
  ],
  'sandwich-generation-india-caregiving': [
    {
      id: 'sandwich-meaning',
      question: 'What is the sandwich generation?',
      answer: 'People caring for ageing parents while still raising their own children, caught between two sets of responsibilities at once. In India it is increasingly common as people live longer, have children later, and live in nuclear families away from extended support.'
    },
    {
      id: 'sandwich-survive',
      question: 'How do sandwich-generation caregivers avoid burning out?',
      answer: 'Shift from doing everything personally to managing the care: share the load honestly with siblings, involve older children, use paid help during work hours, protect time with your spouse and kids, and use respite care so you can rest. Trying to do it all alone is the trap.'
    },
    {
      id: 'sandwich-guilt',
      question: 'How do I deal with the guilt of not doing enough?',
      answer: 'The guilt is the heaviest and least useful part of the load. Arranging good care for your parent, including paid help, is a form of showing up, not a failure of duty. Being present but exhausted and resentful is not more loving than organising real, competent care.'
    }
  ],
  'caregiver-burnout-signs-and-help': [
    {
      id: 'burnout-signs',
      question: 'What are the signs of caregiver burnout?',
      answer: 'Constant exhaustion even after sleep, irritability and snapping at the person you care for, hopelessness, withdrawing from friends and hobbies, getting ill more often, and a creeping numbness where the warmth has gone out of the caregiving. Several of these together signal burnout.'
    },
    {
      id: 'burnout-why',
      question: 'What causes caregiver burnout?',
      answer: 'Lack of relief, not lack of love. A caregiver who does everything alone around the clock with no breaks will burn out regardless of how devoted they are. Financial strain, no recognition, and watching a loved one decline add to it.'
    },
    {
      id: 'burnout-fix',
      question: 'What helps with caregiver burnout?',
      answer: 'Relief. Accept and ask for help, lower standards from perfect to good enough, keep one part of your own life alive, stay connected to people, and use professional respite care so you can rest. If you have thoughts of self-harm, seek medical help immediately.'
    }
  ],
  'stroke-recovery-at-home-india': [
    {
      id: 'stroke-recovery-real',
      question: 'Can someone really recover after a stroke at home?',
      answer: 'Yes. The brain can rewire itself after a stroke, and lost functions can return with consistent rehabilitation. The fastest gains usually come in the first months, which is why consistent home physiotherapy and speech therapy in that window matter so much.'
    },
    {
      id: 'stroke-home-care',
      question: 'What does stroke care at home involve?',
      answer: 'Home safety to prevent falls, regular turning and movement for a bedbound patient, daily physiotherapy and where needed speech therapy, faithful management of the medicines that prevent another stroke, good nutrition and hydration, and attention to the depression that commonly follows a stroke.'
    },
    {
      id: 'stroke-warning',
      question: 'What are the warning signs of another stroke?',
      answer: 'Sudden weakness or numbness on one side, a drooping face, slurred or lost speech, sudden confusion, or trouble seeing. Act immediately, because with stroke every minute counts. Someone who has had one stroke is at raised risk of another.'
    }
  ],
  'parkinsons-care-at-home-india-guide': [
    {
      id: 'parkinsons-medication',
      question: "Why is medication timing so important in Parkinson's?",
      answer: "Parkinson's drugs work in windows, and a dose taken late can leave the person barely able to move for an hour or more. Getting the medicines exactly on time, every time, is the foundation of good home care and one of the most common things that goes wrong."
    },
    {
      id: 'parkinsons-freezing',
      question: "How do you handle a Parkinson's freezing episode?",
      answer: 'Freezing, where the person suddenly cannot move, often in doorways, passes but causes falls. Simple techniques help: counting a rhythm, stepping over an imaginary line, or shifting weight side to side. A trained caregiver handles it calmly rather than panicking.'
    },
    {
      id: 'parkinsons-progression',
      question: "How does care change as Parkinson's progresses?",
      answer: 'Early on a person may need only reminders and a little help. As it advances they need help with dressing, bathing, eating and mobility, and eventually full daily care. Because the progression is gradual, the care can grow with it, ideally with a caregiver trained in Parkinson\'s.'
    }
  ],
  'managing-diabetes-elderly-parents-home': [
    {
      id: 'diabetes-low-sugar',
      question: 'What is the biggest diabetes danger for elderly parents?',
      answer: 'Low blood sugar. In elderly diabetics on medication it can come on fast and cause confusion, sweating, shaking and even unconsciousness, and older people may not recognise the warning signs. The fix is sugar or juice immediately, then a proper snack. Skipping a meal after taking medication is the classic cause.'
    },
    {
      id: 'diabetes-diet',
      question: 'How do you manage a diabetic Indian diet for an elderly parent?',
      answer: 'Not with a joyless diet nobody sustains, but with sensible adjustment: smaller portions of rice and roti, more vegetables and protein, whole grains over refined, fruit instead of sweets, restraint rather than denial at festivals, and regular meal timing that stays in step with the medication.'
    },
    {
      id: 'diabetes-feet',
      question: 'Why is daily foot care important for diabetic elders?',
      answer: 'Diabetes deadens sensation in the feet, so a small cut or blister goes unnoticed, gets infected, and in the worst cases leads to amputation. A daily look at the feet, proper footwear, never walking barefoot, and prompt attention to any wound prevents this.'
    }
  ],
  'protecting-elderly-parents-from-scams-india': [
    {
      id: 'scam-digital-arrest',
      question: 'What is the digital arrest scam targeting senior citizens?',
      answer: 'Fraudsters call or video-call posing as police, CBI or customs, claim the victim is under investigation, keep them isolated and terrified for hours, and demand money to clear their name. There is no such thing as a digital arrest in Indian law. No real agency arrests anyone over a video call or demands money to drop a case.'
    },
    {
      id: 'scam-rules',
      question: 'What simple rules protect elderly parents from scams?',
      answer: 'No real police or agency arrests people over a phone or video call or asks for money to drop a case. No bank ever asks for an OTP, PIN or password. Anyone creating panic and demanding immediate payment is a scammer. When in doubt, hang up and call you or the bank on its official number.'
    },
    {
      id: 'scam-what-to-do',
      question: 'What should I do if my elderly parent has been scammed?',
      answer: 'Act fast. Call the national cybercrime helpline on 1930 immediately and file at cybercrime.gov.in, as fast reporting gives the best chance of freezing the money. Inform the bank to block the account. And go gently with your parent, since shame stops victims telling their family next time.'
    }
  ],
  'how-to-choose-home-care-provider-india': [
    {
      id: 'choose-key-question',
      question: 'What is the most important thing to check in a home care provider?',
      answer: 'Verification. Ask specifically whether they run police verification, identity and Aadhaar checks, and reference checks before placement, and ask to see it on the actual person being placed, not a general policy. A stranger will be alone with a vulnerable parent, so this matters most, especially for families who cannot supervise closely.'
    },
    {
      id: 'choose-questions',
      question: 'What questions should I ask before hiring a home care provider?',
      answer: 'Ask how they verify caregivers, what training they give and whether it matches your parent\'s condition, what happens if the caregiver does not fit, whether there is a trial period, who you call when there is a problem at night, and how the caregiver is paid. The answers reveal how they really operate.'
    },
    {
      id: 'choose-warning-signs',
      question: 'What are the warning signs of a bad home care provider?',
      answer: 'Pressure to decide immediately, vague answers about verification, no clear replacement or trial policy, a price suspiciously below everyone else, and becoming hard to reach when you raise a concern. Going silent after payment is the most common complaint, so probe support directly.'
    }
  ],
  'private-caregiver-vs-agency-india': [
    {
      id: 'private-risks',
      question: 'What are the risks of hiring a private caregiver?',
      answer: 'Usually no verification, no police check or confirmed references, so you are trusting a recommendation. No backup if they fall sick or quit, leaving you scrambling. No training or oversight for your parent\'s condition. And no one to escalate to if the caregiver is unsuitable or there is a dispute.'
    },
    {
      id: 'agency-worth-it',
      question: 'Is a home care agency worth the extra cost over private hiring?',
      answer: 'For a short-term, low-risk need with a genuinely trusted person, private hiring can work. For an elderly or unwell parent alone with the caregiver, for medical or high-dependency care, for live-in arrangements, or where you cannot supervise, the verification, training and backup an agency provides are usually worth the cost.'
    },
    {
      id: 'agency-direct-pay',
      question: 'Can I get agency verification but still pay the caregiver directly?',
      answer: 'Yes. Some providers, including EzyHelpers, give you verified, trained caregivers with a replacement guarantee and a care manager to call, while paying wages transparently and directly to the caregiver. That combines the safety of an agency with fair, direct payment.'
    }
  ],
  'caring-for-bedridden-parent-at-home-india': [
    {
      id: 'bedridden-sores',
      question: 'How do you prevent bed sores in a bedridden parent?',
      answer: 'Turn the person every two hours, day and night, to shift the pressure. Keep the skin clean and dry, use a pressure-relieving mattress if you can, and check bony areas (lower back, hips, heels, elbows) daily for the first reddened signs. This single routine prevents most pressure sores and is the most common thing untrained care gets wrong.'
    },
    {
      id: 'bedridden-swallowing',
      question: 'Why is feeding a bedridden parent risky?',
      answer: 'If they have trouble swallowing, common after stroke or in advanced illness, food or liquid can go into the lungs and cause pneumonia, a frequent serious complication. Feed them sitting as upright as possible, go slowly, use soft or modified-texture food if advised, watch hydration, and see a doctor for any real swallowing difficulty.'
    },
    {
      id: 'bedridden-help',
      question: 'Can a family manage bedridden care alone?',
      answer: 'Round-the-clock bedridden care, the two-hourly turning through the night, lifting, constant attention, will exhaust one family member within weeks. A trained caregiver who knows safe turning and transfers, sore prevention, dignified hygiene, and how to spot complications makes the care safer and sustainable.'
    }
  ],
  'incontinence-care-elderly-parents-dignity': [
    {
      id: 'incontinence-medical',
      question: 'Is incontinence just a normal part of ageing?',
      answer: 'Not necessarily. It is common in older people but often has a treatable cause: a urinary infection, a medication side effect, constipation, prostate issues, diabetes, or mobility problems. New or worsening incontinence deserves a doctor\'s look, because it can sometimes be improved or resolved rather than just contained.'
    },
    {
      id: 'incontinence-skin',
      question: 'How do you protect the skin in incontinence care?',
      answer: 'Change promptly when wet or soiled, clean gently and thoroughly, dry the skin properly, and use a barrier cream. Skin left in moisture breaks down into sores and infections, especially in an immobile parent. Good products that keep moisture away from the skin are worth the cost.'
    },
    {
      id: 'incontinence-dignity',
      question: 'How do you handle incontinence care without shaming an elderly parent?',
      answer: 'Be matter-of-fact and calm, never showing disgust, protect their privacy completely, avoid shaming language, and never scold an accident. Support their independence with easy clothing, a clear path to the toilet, a commode by the bed, and scheduled trips. Many parents find it easier to accept this care from a calm professional than from their own child.'
    }
  ],
  'safe-hospital-to-home-discharge-elderly-india': [
    {
      id: 'discharge-understand',
      question: 'What should I understand before taking my parent home from hospital?',
      answer: 'Get the discharge summary in writing and make sure you know every medicine with its dose and timing (especially new or changed ones), the warning signs that mean you must call the doctor, what your parent can and cannot do, any wound care needed, and the follow-up appointment date. Ask while the doctors are still in front of you.'
    },
    {
      id: 'discharge-medicines',
      question: 'Why are medication errors common after hospital discharge?',
      answer: 'The hospital often changes the regimen, and the family does not fully register it, so at home the old routine continues alongside the new one or doses get doubled or missed. Reconcile the new list against the old, clarify confusion with the doctor or pharmacist, and use a pill organiser with fixed timings and someone checking.'
    },
    {
      id: 'discharge-home-ready',
      question: 'How do I prepare the home before my parent is discharged?',
      answer: 'Set it up while they are still in hospital. Move the bed to the ground floor, clear and light the path to the bathroom, remove loose rugs, and arrange equipment such as a walker, commode or bedside rail in advance, so home is already safe when they arrive.'
    }
  ],
  'preventing-hospital-readmission-elderly-india': [
    {
      id: 'readmission-cause',
      question: 'What is the most common preventable cause of hospital readmission?',
      answer: 'Medication going wrong after discharge. The hospital changes the regimen, the family does not fully register it, and doses get missed, doubled, or muddled with the old routine. Reconciling the medicines and running a tight system at home prevents more readmissions than anything else.'
    },
    {
      id: 'readmission-followup',
      question: 'How important is the post-discharge follow-up appointment?',
      answer: 'Very. It exists to catch problems early, and many families miss it, letting a developing complication go unseen until it becomes an emergency. Put it in the calendar before leaving the hospital, arrange transport and an escort in advance, and treat it as non-negotiable.'
    },
    {
      id: 'readmission-prevent',
      question: 'How can families reduce the risk of an elderly parent being readmitted?',
      answer: 'Get the medicines right, keep the follow-up appointment, catch warning signs like fever or an infected wound early, and prevent the new problems recovery itself causes, falls, pressure sores, chest infections, dehydration, through fall-proofing, safe movement, and good nutrition. Competent home care in the recovery weeks keeps all of this on track.'
    }
  ],
  'nutrition-for-elderly-parents-india': [
    {
      id: 'nutrition-why-hard',
      question: 'Why do elderly parents eat less as they age?',
      answer: 'Appetite naturally fades, taste and smell dull, dental or chewing problems make eating a chore, some medicines suppress appetite, and a parent living alone loses the motivation to cook and eat for one. Loneliness and low mood feed directly into poor eating.'
    },
    {
      id: 'nutrition-priorities',
      question: 'What should an elderly parent\'s diet focus on?',
      answer: 'Protein matters more with age because older bodies lose muscle, so include dal, curd, paneer, eggs, fish and milk. Add calcium and vitamin D for bones, fibre for digestion, and plenty of fluids, since older people dehydrate easily. Keep it balanced and familiar rather than exotic.'
    },
    {
      id: 'nutrition-hydration',
      question: 'Why is dehydration so common in elderly people?',
      answer: 'The sense of thirst weakens with age, so a parent can be quite dehydrated without feeling thirsty. The consequences, confusion, urinary infections, dizziness, falls, are serious and often mistaken for other things. Offer fluids regularly through the day, including buttermilk, soups and coconut water, rather than waiting for them to ask.'
    }
  ],
  'sleep-problems-elderly-parents-india': [
    {
      id: 'sleep-why',
      question: 'Why do elderly parents have trouble sleeping?',
      answer: 'Some is normal: sleep becomes lighter and more broken with age. But much is treatable, caused by pain, frequent night-time urination, anxiety or low mood, certain medicines, too much daytime napping, or conditions like sleep apnoea or dementia. These causes are worth addressing rather than just accepting.'
    },
    {
      id: 'sleep-help',
      question: 'How can I help my elderly parent sleep better without pills?',
      answer: 'Keep a regular bed and wake time, get daylight and some activity during the day, limit daytime naps, cut evening tea, coffee and heavy meals, make the bedroom dark, quiet and cool, and build a calm wind-down before bed. Treat pain and reduce anxiety. These habits help more than sedatives.'
    },
    {
      id: 'sleep-pills',
      question: 'Are sleeping pills safe for elderly parents?',
      answer: 'They carry real dangers in older people: a higher risk of falls, daytime drowsiness and confusion, and worsened memory. They should be a last resort, used briefly under a doctor\'s supervision, not a standing solution. Persistent sleep problems should go to a doctor, since the answer is often treating the underlying cause.'
    }
  ],
  'loneliness-in-elderly-parents-india': [
    {
      id: 'loneliness-health',
      question: 'Is loneliness actually harmful to elderly parents?',
      answer: 'Yes. Prolonged loneliness and isolation in older people are linked to higher rates of depression and anxiety, faster cognitive decline and dementia, worse physical health, and shorter life. A lonely parent eats worse, moves less, takes medicines less reliably, and is more vulnerable to scams.'
    },
    {
      id: 'loneliness-signs',
      question: 'How do I know if my elderly parent is lonely?',
      answer: 'Parents often hide it, so look for going quiet, lost interest in things they enjoyed, sounding flat on calls, poor eating or sleep, a neglected home, no longer going out or seeing anyone, or repeated calls just to talk. Someone who sees their ordinary days gives a truer picture than a tidied-up video call.'
    },
    {
      id: 'loneliness-help',
      question: 'What helps with loneliness in elderly parents?',
      answer: 'Real, regular connection: a daily call and regular video calls, involving them in family life, helping them stay connected to neighbours, friends and community, and easy-to-use technology. For many families, especially those far away, arranging regular human company through a companion is the most effective answer.'
    }
  ],
  'hearing-vision-loss-elderly-parents-india': [
    {
      id: 'sensory-why-matters',
      question: 'Why do hearing and vision loss matter so much in elderly parents?',
      answer: 'They are how a person stays connected to the world. A parent who cannot hear withdraws from conversation and company, feeding loneliness and faster cognitive decline. A parent who cannot see well is at high risk of falls, medication errors, and lost independence. Both, left unaddressed, quietly shrink a person\'s life.'
    },
    {
      id: 'hearing-checked',
      question: 'Should an elderly parent just live with hearing loss?',
      answer: 'No. Hearing loss is usually helpable. The cause might be as simple as wax, easily removed, or age-related loss that a modern hearing aid can transform. Start with a proper hearing test. Meanwhile, face them in good light, speak clearly rather than shouting, and reduce background noise.'
    },
    {
      id: 'vision-checks',
      question: 'What vision problems in elderly parents are treatable?',
      answer: 'Much elderly vision loss comes from treatable causes if caught early: cataracts, fixed by a simple successful operation; glaucoma, slowed if caught early; and diabetic eye damage, which is why diabetic parents need regular eye checks. Regular eye examinations are the single most important habit.'
    }
  ],
  'managing-chronic-conditions-elderly-parents-home': [
    {
      id: 'chronic-medication',
      question: 'How do you manage multiple medicines for an elderly parent?',
      answer: 'Build a reliable system: a pill organiser sorted by day and time, fixed timings tied to meals, and someone checking that doses are taken. Keep an up-to-date list of every medicine, because parents see different specialists who may not know what the others prescribed, and clashing drugs are a real risk.'
    },
    {
      id: 'chronic-monitor',
      question: 'What should families monitor at home for chronic conditions?',
      answer: 'Depending on the condition: a home blood-pressure monitor, a glucometer for diabetes, weight for heart failure, and signs like breathlessness, swelling or fatigue. Keep a simple log, since a trend over days or weeks tells the doctor more than a single reading and catches trouble before it becomes an emergency.'
    },
    {
      id: 'chronic-coordinate',
      question: 'How do you coordinate care for a parent with several conditions?',
      answer: 'Someone needs to hold the whole picture: all conditions, all medicines, all appointments, ensuring nothing contradicts, since multiple doctors often do not talk to each other. For a busy or distant family this is one of the most valuable things a care coordinator or home nurse provides.'
    }
  ],
  'arthritis-joint-pain-care-elderly-home': [
    {
      id: 'arthritis-movement',
      question: 'Should an elderly parent with arthritis rest or move?',
      answer: 'Gentle, regular, appropriate movement, not rest. Inactivity makes arthritis worse: the joint stiffens, supporting muscles weaken, and pain deepens. But overdoing it harms the joint. The right exercises, done safely through home physiotherapy, keep joints mobile and genuinely reduce pain over time.'
    },
    {
      id: 'arthritis-pain',
      question: 'How can I ease my parent\'s arthritis pain at home?',
      answer: 'Heat helps stiff joints (a warm compress or bath, especially mornings), while cold helps an acutely swollen joint. Use pain medication as the doctor advises, maintain a healthy weight to reduce load on knees and hips, and use simple aids like walking sticks, raised seats and supportive footwear.'
    },
    {
      id: 'arthritis-home',
      question: 'How do you adapt a home for an elderly parent with arthritis?',
      answer: 'Raised toilet seats and chairs with armrests make getting up easier, grab bars give support and reduce falls, easy-grip tools and lever taps help arthritic hands, and keeping used items within reach avoids painful bending. Warmth in the home reduces stiffness, especially in cold weather.'
    }
  ],
  'dementia-wandering-sundowning-difficult-days': [
    {
      id: 'dementia-wandering',
      question: 'How do you keep a parent with dementia from wandering off?',
      answer: 'Reduce the triggers with a predictable routine, gentle activity, and attention to whether they are hungry, in pain or need the toilet. Add safeguards: locks or alarms they will not easily operate, a secured main door, and an ID card or bracelet with a contact number. A familiar, consistent caregiver is one of the best protections.'
    },
    {
      id: 'dementia-sundowning',
      question: 'What is sundowning and how do you manage it?',
      answer: 'Sundowning is increased confusion and agitation in the late afternoon and evening, linked to tiredness, fading light and a disrupted body clock. Keep the evening calm and predictable, light the home well as daylight fades, avoid over-tiring and long daytime naps, cut evening caffeine and big meals, and stay calm yourself.'
    },
    {
      id: 'dementia-aggression',
      question: 'How do you handle aggression in a parent with dementia?',
      answer: 'Remember it is the disease, not the parent, and almost never personal. It usually comes from fear, confusion, or an unmet need they cannot express, pain, hunger, needing the toilet, too much noise. Do not argue or correct; stay calm, keep your manner gentle, do not take it personally, and look for the trigger.'
    }
  ],
  'palliative-end-of-life-care-at-home-india': [
    {
      id: 'palliative-what',
      question: 'What is palliative care, and is it giving up?',
      answer: 'Palliative care is comfort-focused care for someone with a serious or terminal illness. It is not giving up and not only for the last days; it can run alongside treatment, aiming to relieve suffering of body and mind and support quality of life. End-of-life care is its final phase.'
    },
    {
      id: 'palliative-pain',
      question: 'Can pain really be managed in end-of-life care at home?',
      answer: 'Yes. Far too many people suffer unnecessarily at the end because pain is undertreated. Good palliative care actively manages pain, breathlessness and nausea so the person is as comfortable as possible. This needs proper medical input and a trained palliative caregiver who can manage symptoms at home.'
    },
    {
      id: 'palliative-family',
      question: 'How does home palliative care help the family?',
      answer: 'It lets the family be family rather than nurses. Sharing the physical care with a trained caregiver means a daughter can be a daughter at her mother\'s bedside, present and grieving, rather than alone managing medications and dressings while exhausted. Done well, it gives a peaceful home, not a hospital ward.'
    }
  ],
  'cancer-care-at-home-elderly-parents-india': [
    {
      id: 'cancer-side-effects',
      question: 'How do you manage cancer treatment side effects at home?',
      answer: 'Keep the parent hydrated and eating what they can, manage nausea with prescribed medicines, keep them rested but gently moving, and crucially protect them from infection, since a cancer patient\'s immune system is often suppressed and an ordinary infection can become serious. Good hygiene, avoiding crowds and sick visitors, and watching for fever all matter.'
    },
    {
      id: 'cancer-nutrition',
      question: 'Why is nutrition important during cancer treatment?',
      answer: 'A better-nourished patient tolerates treatment better and recovers faster, but nausea, mouth sores and loss of appetite make eating hard. Small, frequent, appealing meals, soft foods when the mouth is sore, plenty of fluids, and patience help. A caregiver or cook who prepares what the parent can manage eases the burden.'
    },
    {
      id: 'cancer-support',
      question: 'How does home care help an elderly parent through cancer?',
      answer: 'A trained caregiver manages side effects, keeps the parent nourished and protected from infection, helps with appointments and medicines, watches for warning signs, and provides steady company and support. This makes the ordeal more bearable and treatment more effective, and lets the family be family through a frightening time.'
    }
  ],
  'keeping-elderly-parents-active-exercise-mobility': [
    {
      id: 'exercise-why',
      question: 'Why is staying active so important for elderly parents?',
      answer: 'In older people, strength and mobility lost to inactivity decline fast and feed on themselves: less movement leads to weakness, falls and fear, then even less movement. Regular gentle activity maintains the strength and balance that prevent falls, eases joints, helps blood pressure, sugar, weight and heart health, and improves sleep, mood and cognition.'
    },
    {
      id: 'exercise-safe',
      question: 'What exercise is safe for an elderly parent?',
      answer: 'It depends on their condition, but most can do something: walking even short distances, gentle stretching, simple strength work like standing from a chair repeatedly, balance exercises, and chair-based exercises for those who cannot stand safely. Regular and gentle beats occasional and strenuous. For frail or recovering parents, home physiotherapy ensures it is done safely.'
    },
    {
      id: 'exercise-resistance',
      question: 'How do I get a reluctant parent to exercise?',
      answer: 'Encouragement and ease work better than pushing. Start very small so it is not daunting, make it social like a walk together, tie it to things they enjoy such as gardening or grandchildren, and address the fear of falling directly with reassurance and support. A caregiver who gently builds activity into the day often achieves what nagging cannot.'
    }
  ],
  'how-to-verify-a-caregiver-before-hiring-india': [
    {
      id: 'verify-steps',
      question: 'How do you verify a caregiver before hiring them?',
      answer: 'Confirm a government photo ID and Aadhaar and check they match the person. Arrange police verification, since they will be alone with a vulnerable elder. Get references from previous families and actually call them. Confirm their training matches your parent\'s needs, and check they are in reasonable health. A good agency does all of this before placement.'
    },
    {
      id: 'verify-police',
      question: 'Is police verification necessary for an in-home caregiver?',
      answer: 'When someone will be alone with a vulnerable elderly person and have access to the home and valuables, yes. It confirms there is no criminal record and gives a real record of who they are. In India you can apply for police verification of domestic workers, and a serious agency does this as standard.'
    },
    {
      id: 'verify-references',
      question: 'How do I check a caregiver\'s references properly?',
      answer: 'Ask for references from previous families and actually call them. A real conversation reveals how long the caregiver worked there, why they left, whether they were reliable, honest and good with the elderly person, and whether the family would hire them again. Be wary of references that cannot be reached or sound rehearsed.'
    }
  ],
  'keeping-parent-safe-with-caregiver-at-home': [
    {
      id: 'safe-oversight',
      question: 'How do I keep my parent safe once a caregiver is in the home?',
      answer: 'Start with proper background verification, then add light ongoing oversight: stay in real contact with your parent separately from the caregiver, watch for warning signs, keep valuables secured, and have a structure to raise and resolve concerns, such as a care coordinator through an agency. The aim is sensible structure, not suspicion.'
    },
    {
      id: 'safe-warning-signs',
      question: 'What are the warning signs of a problem with a caregiver?',
      answer: 'Unexplained injuries or a parent fearful of the caregiver, a decline in hygiene, weight or mood the caregiver cannot explain, money or valuables going missing, and the caregiver being evasive, blocking your contact with your parent, or discouraging visits. None prove anything alone, but they are reasons to pay closer attention.'
    },
    {
      id: 'safe-valuables',
      question: 'How should I handle money and valuables with a caregiver at home?',
      answer: 'Secure them, which protects everyone including an honest caregiver from suspicion. Do not leave cash, jewellery or documents accessible, keep them locked away, manage your parent\'s finances yourself or with oversight rather than handing cash control to the caregiver, and set up bank alerts so you see money moving.'
    }
  ],
  'protecting-elderly-parents-financial-abuse-india': [
    {
      id: 'abuse-who',
      question: 'Who commits financial abuse against elderly parents?',
      answer: 'Often someone close: a relative, a trusted helper, a neighbour, sometimes the person meant to be caring for them. It is heavily under-reported because the victim is usually dependent on or loves the abuser and is ashamed or afraid to speak. That closeness is exactly why families have to watch for it.'
    },
    {
      id: 'abuse-signs',
      question: 'What are the warning signs of elder financial abuse?',
      answer: 'Unexplained withdrawals or transfers, money or valuables disappearing, a sudden change in a will or property arrangement, a parent anxious or secretive about money, unpaid bills despite having funds, a new person heavily involved in the parent\'s finances, or a parent being kept away from other family.'
    },
    {
      id: 'abuse-protect',
      question: 'How do I protect my elderly parent\'s finances?',
      answer: 'Stay involved with their consent so a trustworthy person has visibility, set up bank alerts, keep valuables and documents secured, use a proper accountable power of attorney rather than informal access, do not leave one person with unchecked control, and keep your parent connected to wider family. Secrecy and isolation are where abuse thrives.'
    }
  ],
  'home-safety-technology-elderly-parents-india': [
    {
      id: 'tech-medical-alert',
      question: 'What is a medical alert system for elderly parents?',
      answer: 'A button a parent wears or keeps nearby that summons help when pressed, either calling family or a monitoring service. For a parent living alone, it means a fall they cannot get up from still brings help. Some newer devices add automatic fall detection, which alerts even if the parent cannot press the button.'
    },
    {
      id: 'tech-monitoring-dignity',
      question: 'Is monitoring an elderly parent at home ethical?',
      answer: 'It can be, with care. An elderly parent has a right to privacy and dignity in their own home, so monitoring should be discussed with them, agreed where possible, and limited to what genuinely helps safety rather than feeling like surveillance. The goal is to keep a parent safe, not watched.'
    },
    {
      id: 'tech-vs-care',
      question: 'Can technology replace a caregiver for an elderly parent?',
      answer: 'No. A medical alert summons help after something happens; it does not prevent the fall, help the parent up, manage medicines, or keep them company. Technology works best alongside human care, not instead of it. For a frail or genuinely unsafe parent, a present caregiver is the surest safety, with technology adding a layer.'
    }
  ]
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) {
    return {
      title: 'Post Not Found | EzyHelpers Blog',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} | EzyHelpers Blog`,
    description: post.excerpt,
    keywords: `${post.category}, home services, domestic help, ${post.tags?.join(', ')}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.ezyhelpers.com/blog/${post.id}`,
      type: 'article',
      siteName: 'EzyHelpers',
      locale: 'en_IN',
      publishedTime: post.date,
      authors: ['EzyHelpers'],
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ] : undefined
    },
    alternates: {
      canonical: `https://www.ezyhelpers.com/blog/${post.id}`
    }
  }
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return notFound();

  const markdown = post.content;
  const faqs = blogFAQs[post.id as keyof typeof blogFAQs] || [];

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: post.image
              ? (post.image.startsWith('http') ? post.image : `https://www.ezyhelpers.com${post.image}`)
              : 'https://www.ezyhelpers.com/og-image.jpg',
            datePublished: post.date,
            dateModified: post.date,
            author: {
              '@type': 'Organization',
              name: post.author ?? 'EzyHelpers',
              url: 'https://www.ezyhelpers.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'EzyHelpers',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.ezyhelpers.com/ezyhelper_logo_new.png',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://www.ezyhelpers.com/blog/${post.id}`,
            },
            // AEO: mark headline + intro as speakable for voice/AI assistants
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', 'article p:first-of-type'],
            },
          }),
        }}
      />
      <UrgencyCTA />
      <Navbar />

      {/* Hero Image */}
      {post.image && (
        <div className="w-full bg-gray-50 pt-8 pb-12">
          <div className="container-custom max-w-4xl mx-auto px-4">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Article Header & Content */}
      <article className="prose-blog mx-auto px-4 py-16 max-w-3xl">
        <div className="mb-12 text-center md:text-left">
          <span className="inline-block mb-4 text-sm font-bold text-blue-600 uppercase tracking-[0.2em]">
            {post.category}
          </span>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-gray-400 font-medium border-y border-gray-100 py-4">
            <time dateTime={post.date} className="flex items-center gap-2">
              <CalendarDaysIcon className="w-4 h-4" /> {post.date}
            </time>
            <span className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4" /> {post.readTime}
            </span>
          </div>
        </div>

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 mt-4 leading-tight font-display">{children}</h1>,
            h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12 pb-2 border-b-2 border-blue-500 w-fit">{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-8">{children}</h3>,
            blockquote: ({ children }) => (
              <blockquote className="bg-blue-50/80 p-8 rounded-2xl border-l-4 border-blue-600 my-10 shadow-sm">
                <div className="prose prose-blue max-w-none">{children}</div>
              </blockquote>
            ),
            p: ({ children }) => <p className="text-gray-700 mb-6 leading-relaxed text-lg">{children}</p>,
            ul: ({ children }) => <ul className="list-disc pl-6 mb-8 space-y-3">{children}</ul>,
            li: ({ children }) => <li className="text-gray-700 leading-relaxed text-lg">{children}</li>,
            strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
            a: ({ href, children }) => {
              if (href?.startsWith('https://tel.btn/')) {
                const phone = href.replace('https://tel.btn/', '');
                return (
                  <a href={`tel:${phone}`} className="inline-block bg-blue-600 !text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-transform hover:scale-105 shadow-md my-2 mx-4 !no-underline border-0">
                    {children}
                  </a>
                );
              }
              if (href?.includes('#btn') || href?.includes('?btn')) {
                return (
                  <a href={href.replace('#btn', '').replace('?btn', '')} className="inline-block bg-blue-600 !text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-transform hover:scale-105 shadow-md my-2 mx-4 !no-underline border-0">
                    {children}
                  </a>
                );
              }
              return <a href={href} className="text-blue-600 font-semibold underline decoration-2 underline-offset-4 hover:text-blue-800 transition-colors">{children}</a>;
            },
            table: ({ children }) => (
              <div className="overflow-x-auto my-8 rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">{children}</table>
              </div>
            ),
            thead: ({ children }) => <thead className="bg-gray-50">{children}</thead>,
            th: ({ children }) => <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">{children}</th>,
            td: ({ children }) => <td className="px-6 py-4 text-sm text-gray-700 border-t border-gray-100">{children}</td>,
          }}
        >
          {markdown}
        </ReactMarkdown>
      </article>

      {/* Blog -> Service interlinking */}
      <BlogServiceLinks postId={post.id} />

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="section-padding bg-white border-y border-gray-100">
          <div className="container-custom max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 font-medium">
                Common questions about finding domestic help in India
              </p>
            </div>
            <FAQWithTracking
              faqs={faqs}
              category={`blog-${post.category.toLowerCase()}`}
              className="max-w-3xl mx-auto"
            />
          </div>
        </section>
      )}

      {/* Related blog posts interlinking */}
      <RelatedPosts currentPostId={post.id} />

      {/* CTA */}
      <section className="section-padding bg-blue-700 text-white text-center">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 font-display tracking-tight text-white">Ready to Find Trusted Help at Home?</h2>
          <p className="text-blue-100 mb-10 text-lg">Join 10,000+ families who trust EzyHelpers for their daily home support.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/hire-helper" className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-900/20">
              Book a Helper Now
            </a>
            <a href="tel:+918031411776" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold py-4 px-10 rounded-full transition-all duration-300">
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 