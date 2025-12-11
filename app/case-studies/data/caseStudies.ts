export type CaseStudy = {
  slug: string;
  title: string;
  shortTitle?: string;
  summary: string;
  clientType: "Family" | "ApartmentAssociation" | "Corporate" | "Helper" | "Agent" | "Other";
  clientName?: string;
  city?: string;
  state?: string;
  country?: string;
  serviceTypes: string[];
  segmentTags: string[];

  // Hero/result metrics
  heroMetricLabel?: string;
  heroMetricValue?: string;
  metrics?: {
    label: string;
    value: string;
    description?: string;
  }[];

  // Story sections
  challenge: string;
  context?: string;
  approach: string;
  solution: string;
  results: string;
  keyOutcomes?: string[];

  // Testimonial
  testimonial?: {
    quote: string;
    name?: string;
    roleOrRelation?: string;
  };

  // Media
  coverImage?: {
    src: string;
    alt: string;
  };

  // SEO
  seoTitle?: string;
  seoDescription?: string;
  publishedAt?: string;
  updatedAt?: string;

  // Internal linking
  relatedSlugs?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "chhote-break-bade-results",
    title: "Chhote Break, Bade Results - How a 30-Minute Rule Saved a Live-In Housemaid Placement",
    shortTitle: "Chhote Break, Bade Results",
    summary: "Learn how a guaranteed 30-minute break restored focus, behaviour, and loyalty for a live-in housemaid. Real EzyHelpers case story on trust and harmony.",
    clientType: "Family",
    city: "Bangalore",
    state: "Karnataka",
    serviceTypes: ["Live-in Maid", "Housekeeping"],
    segmentTags: ["Bangalore", "Live-in Maid", "Retention"],
    heroMetricLabel: "Protected Break",
    heroMetricValue: "30 Minutes",
    metrics: [
      {
        label: "Energy",
        value: "+24%",
        description: "Cleaner pace after the break routine"
      },
      {
        label: "Quality",
        value: "100%",
        description: "Rooms, laundry, and upkeep returned to perfect standards"
      },
      {
        label: "Loyalty",
        value: "1 Year+",
        description: "Palak decided to stay rather than request a new house"
      }
    ],
    context: "Palak, a live-in housemaid from Bihar, lived inside the home but had no breathing space. Her days were packed from 6 AM to 10 PM, so even her downtime felt like work. Silence, exhaustion, and the feeling of being invisible pushed her toward a house change.",
    challenge: "She asked for a new placement after months of nonstop chores. The family was surprised—on paper everything was fine, but Palak felt drained and guilty taking even a short rest.",
    approach: "EzyHelpers initiated mediation, surfaced both perspectives, and highlighted that helpers need clarity and permission to pause. We proposed one concrete system instead of another productivity trick.",
    solution: "The family committed to a non-negotiable, daily personal break from 4:00 to 4:30 PM. Palak received explicit permission to rest without guilt, and the family agreed to stop piling on ad-hoc tasks.",
    results: "Within days, her energy rebounded, her attitude softened, she took initiative, and mistakes vanished. Palak said, 'Everything is fine now. I want to stay here,' while the family exclaimed that 30 minutes made all the difference.",
    keyOutcomes: [
      "Structured breaks restored energy and speed",
      "Behaviour and communication improved noticeably",
      "Work quality and attention to detail returned to pre-burnout levels",
      "The helper reaffirmed her loyalty instead of requesting a transfer",
      "EzyHelpers now recommends protected rest for every live-in placement"
    ],
    testimonial: {
      quote: "Ab sab theek chal raha hai. Main yahin rehna chahti hoon. A simple break made me feel heard.",
      name: "Palak",
      roleOrRelation: "Live-in Housemaid"
    },
    publishedAt: "2024-02-10T00:00:00Z",
    seoTitle: "Case Study: Chhote Break, Bade Results | EzyHelpers",
    seoDescription: "See how a 30-minute daily break saved a live-in housemaid placement by restoring energy, behaviour, and loyalty."
  },
  {
    slug: "kaam-ka-clear-system-helper-bhaagne-ka-chance-kam",
    title: "Kaam Ka Clear System = Helper Bhaagne Ka Chance Kam",
    shortTitle: "Clear Expectations & Stability",
    summary: "A Bangalore family stopped losing helpers every month by having an honest expectations call before the placement. Clarity replaced confusion.",
    clientType: "Family",
    city: "Bangalore",
    state: "Karnataka",
    serviceTypes: ["Housekeeping"],
    segmentTags: ["Bangalore", "Clarity", "Systems"],
    heroMetricLabel: "Turnover Drop",
    heroMetricValue: "70%",
    metrics: [
      {
        label: "Replacements",
        value: "0",
        description: "Zero replacements after the clarity discussion"
      },
      {
        label: "Confidence",
        value: "100%",
        description: "Helper knew exactly what was routine vs ad-hoc"
      },
      {
        label: "Longevity",
        value: "12+ Months",
        description: "Same helper stayed with new family"
      }
    ],
    context: "A young couple had seen four helpers quit in six months. Each walkout came with vague excuses, even though the home provided good salary, no kids, and no pets. The helpers never explained the real reason—until we asked.",
    challenge: "Helpers felt nervous because every day brought random, unspoken tasks. They were living under shifting expectations and left before speaking up.",
    approach: "EzyHelpers introduced a 15-minute clarity conversation before hiring: routines, occasional tasks, boundaries, and the meaning of daily work were spelled out and acknowledged.",
    solution: "With expectations out in the open, the helper joined confidently knowing there would be no sudden surprises or hidden workloads.",
    results: "Behaviour changed in a week—on-time arrival, calm execution, open communication. The helper stayed for over a year, and the family stopped treating replacements as the only option.",
    keyOutcomes: [
      "Clarity calls reduced helper turnover by 70%",
      "Open communication prevented silent exits",
      "Families learned that helpers fear uncertainty, not work",
      "A stable home replaced constant onboarding stress",
      "EzyHelpers now includes structured expectation reviews before every placement"
    ],
    testimonial: {
      quote: "We never realised one simple conversation could solve months of stress. Now the maid is calm, confident, and staying put.",
      name: "Mrs. R.",
      roleOrRelation: "Bangalore Homeowner"
    },
    publishedAt: "2024-03-01T00:00:00Z",
    seoTitle: "Case Study: Clear Expectations Keep Maids From Quitting | EzyHelpers",
    seoDescription: "Discover how clarity before hiring stopped helpers from quitting by eliminating confusion."
  },
  {
    slug: "salary-time-pe-loyalty-pukka",
    title: "Salary Time Pe = Loyalty Pukka",
    shortTitle: "Salary Discipline = Loyalty",
    summary: "A consistent pay date rebuilt trust between Rani and the Verma family. Timely salaries proved to be the most basic yet powerful retention tool.",
    clientType: "Family",
    clientName: "The Verma Family",
    city: "Bangalore",
    state: "Karnataka",
    serviceTypes: ["Housekeeping"],
    segmentTags: ["Bangalore", "Salary", "Trust"],
    heroMetricLabel: "Pay Predictability",
    heroMetricValue: "5th of Every Month",
    metrics: [
      {
        label: "Pay Discipline",
        value: "100%",
        description: "From the 5th without fail"
      },
      {
        label: "Retention Boost",
        value: "2.5x",
        description: "Helpers stay 2.5× longer with fixed salary dates"
      },
      {
        label: "Borrowing",
        value: "₹0",
        description: "No last-minute loans or guilt trips"
      }
    ],
    context: "Rani was a trusted helper, but each month she faced the same uncertainty: salary could arrive anywhere between the 8th and 20th. Rent, tuition, groceries—they all depended on that vague date, leaving her anxious and feeling like a beggar.",
    challenge: "Mrs. Verma assumed a few days' delay was harmless. The constant requests for salary updates left both sides irritated, and eventually Rani asked to leave.",
    approach: "EzyHelpers highlighted the gap in financial worlds and suggested setting a fixed paydate with UPI or standing instructions so Rani would never wonder when the funds would arrive.",
    solution: "The family committed to paying Rani on the 5th of every month, and Rani confirmed that a standing reminder ensured she received money without chasing anyone.",
    results: "Rani stopped borrowing, started saving, and felt respected. The family gained peace of mind, better communication, and a helper who remained attentive and loyal.",
    keyOutcomes: [
      "Predictable pay removed shame and stress for Rani",
      "The Vermas stopped running to ATMs and worrying about reminders",
      "Trust deepened, loyalty increased, and Rani became more proactive",
      "EzyHelpers data shows 66% helpers live in pay uncertainty; fixed dates keep them 2.5× longer"
    ],
    testimonial: {
      quote: "I plan my entire month on the 2nd now. That fixed payday made me feel valued, not like I was begging for salary.",
      name: "Rani",
      roleOrRelation: "Housekeeping Helper"
    },
    publishedAt: "2024-04-01T00:00:00Z",
    seoTitle: "Case Study: Salary Time Pe = Loyalty Pukka | EzyHelpers",
    seoDescription: "A consistent salary date rebuilt trust and prevented a helper from quitting. Learn why predictable pay is the most powerful retention tool."
  },
  {
    slug: "small-celebrations-big-bonding",
    title: "Small Celebrations, Big Bonding - How One Thoughtful Diwali Gesture Won a Babysitter's Loyalty",
    shortTitle: "Small Celebrations, Big Bonding",
    summary: "A Diwali gesture made a live-in babysitter feel seen, turning emotional distance into belonging and lifelong loyalty.",
    clientType: "Family",
    clientName: "The Sharma Family",
    city: "Bangalore",
    state: "Karnataka",
    serviceTypes: ["Babysitter"],
    segmentTags: ["Bangalore", "Babysitter", "Belonging"],
    heroMetricLabel: "Loyalty",
    heroMetricValue: "Priceless",
    metrics: [
      {
        label: "Emotion",
        value: "100%",
        description: "From distance to belonging after the Diwali gesture"
      },
      {
        label: "Refusal",
        value: "1",
        description: "Declined higher-paying offer from neighbour"
      },
      {
        label: "Bond",
        value: "Forever",
        description: "Helper began calling the baby 'ours'"
      }
    ],
    context: "Kavitha arrived as a soft-spoken babysitter. She performed every task perfectly but remained emotionally distant—sitting alone, avoiding meals, and declining gifts. She didn't feel part of the family.",
    challenge: "The Sharmas feared the helper would leave despite the baby being thriving. They knew proper care was not enough; Kavitha needed to feel included.",
    approach: "During Diwali, Mrs. Sharma noticed Kavitha lacked celebration. She offered a saree, sweets, and ₹1000 simply to say, 'You are part of our home.'",
    solution: "Kavitha returned the kindness with fresh marigold decorations and a heartfelt note. The gesture created emotional safety and a sense of belonging.",
    results: "Kavitha smiled, initiated conversations, called the baby 'our baby,' and refused a higher-paying job because she felt respected. The home became joyful and steady.",
    keyOutcomes: [
      "A personal Diwali gesture repaired emotional distance",
      "The helper began contributing creatively and caring protectively",
      "She declined external offers because she trusted the family",
      "The child thrived with consistent, emotionally engaged care",
      "EzyHelpers now encourages small celebrations to deepen loyalty"
    ],
    testimonial: {
      quote: "Money comes and goes. Respect is what makes me stay. That Diwali gesture gave me belonging.",
      name: "Kavitha",
      roleOrRelation: "Babysitter"
    },
    publishedAt: "2024-05-05T00:00:00Z",
    seoTitle: "Case Study: Small Celebrations, Big Bonding | EzyHelpers",
    seoDescription: "One Diwali gift turned a helper's emotional distance into loyalty. Learn the power of thoughtful gestures."
  },
  {
    slug: "respect-equals-retention",
    title: "Why Maids Stay Longer: Real Case Study on Respect & Loyalty",
    shortTitle: "Respect = Retention",
    summary: "Respect builds loyalty. Case study reveals how one small gesture helped retain a maid for the long term, without raising salary.",
    clientType: "Family",
    clientName: "Nisha",
    city: "Bangalore",
    state: "Karnataka",
    serviceTypes: ["Part-time Helper", "Housekeeping"],
    segmentTags: ["Bangalore", "Retention", "Respect", "Working Professional"],
    heroMetricLabel: "Retention",
    heroMetricValue: "9+ Months",
    metrics: [
      {
        label: "Previous Turnover",
        value: "2-3 Months",
        description: "Average time before helpers left"
      },
      {
        label: "Salary Increase",
        value: "₹0",
        description: "No salary increase needed for retention"
      },
      {
        label: "Better Offers Declined",
        value: "₹2,000+",
        description: "Helper stayed despite higher offers elsewhere"
      }
    ],
    context: "Nisha, a software professional living in Bangalore, faced recurring helper turnover every few months. Increased salary, adjust work timings, nothing worked—until respect became the focus.",
    challenge: "The family needed a helper who would stay instead of training a replacement every quarter. The solution had to address emotional safety, not just skills.",
    approach: "EzyHelpers matched Nisha with Rani and encouraged humane rituals alongside verification: kindness, pauses, and gratitude.",
    solution: "On day one, Nisha asked Rani, 'Would you like tea before we start?' That small question became a daily ritual, giving Rani a sense of dignity.",
    results: "Rani stayed 9+ months, rejected higher offers, and the home regained peace. The intangible respect turned into tangible loyalty.",
    keyOutcomes: [
      "9+ months retention—longest in Nisha's experience",
      "Zero disruption due to frequent job changes",
      "Helper stayed despite higher salary offers elsewhere",
      "Emotional peace and reduced stress for the family",
      "A positive, supportive work-home atmosphere"
    ],
    testimonial: {
      quote: "Earlier, helpers were temporary. Now Rani feels like family. That tea ritual made her feel valued instead of just a labourer.",
      name: "Nisha",
      roleOrRelation: "Software Professional, Bangalore"
    },
    publishedAt: "2024-01-15T00:00:00Z",
    seoTitle: "Why Maids Stay Longer: Real Case Study on Respect & Loyalty | EzyHelpers",
    seoDescription: "Respect builds loyalty. Case study reveals how one small gesture helped retain a maid for the long term, without raising salary. Learn the secret to helper retention."
  }
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getRelatedCaseStudies(currentSlug: string, count: number = 3): CaseStudy[] {
  const current = getCaseStudy(currentSlug);
  const others = caseStudies.filter((cs) => cs.slug !== currentSlug);
  
  if (!current) return others.slice(0, count);

  // Simple scoring: same client type or shared service types
  const scored = others.map(cs => {
    let score = 0;
    if (cs.clientType === current.clientType) score += 2;
    const sharedServices = cs.serviceTypes.filter(s => current.serviceTypes.includes(s));
    score += sharedServices.length;
    return { cs, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, count).map(item => item.cs);
}
