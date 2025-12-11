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
    slug: "working-couple-bangalore-live-in-maid",
    title: "How a Busy Tech Couple in HSR Layout Found Stability with a Live-in Helper",
    shortTitle: "Working Couple & Live-in Maid",
    summary: "A dual-income couple in Bangalore struggled with unreliable part-time help. EzyHelpers matched them with a verified live-in maid within 48 hours, looking after their home and pet.",
    clientType: "Family",
    clientName: "The Sharmas",
    city: "Bangalore",
    state: "Karnataka",
    serviceTypes: ["Live-in Maid", "Cook"],
    segmentTags: ["Bangalore", "HSR Layout", "Working Professionals", "Pet Friendly"],
    heroMetricLabel: "Placement Time",
    heroMetricValue: "48 Hours",
    metrics: [
      {
        label: "Retention",
        value: "2+ Years",
        description: "Same helper managing home & kitchen"
      },
      {
        label: "Time Saved",
        value: "20 Hrs/Week",
        description: "Reclaimed weekends and evenings"
      }
    ],
    context: "Anand and Priya are software engineers living in HSR Layout, Bangalore. With demanding jobs and a golden retriever, managing household chores and cooking was becoming overwhelming. Reliance on local unverified part-timers led to frequent absenteeism and safety concerns.",
    challenge: "They needed a reliable, full-time live-in helper who was pet-friendly, could cook North Indian food, and passed a strict background verification for safety. Local agencies were unresponsive or sent untrained candidates.",
    approach: "EzyHelpers understood their specific requirements: pet compatibility, cuisine preference, and background verification. We scanned our verified pool of helpers in Bangalore.",
    solution: "We shortlisted 3 candidates. The first candidate, Sunita, was a perfect match—experienced in cooking and fond of dogs. We facilitated a video interview, followed by a trial day. We also handled the police verification documentation.",
    results: "Sunita has been with the family for over 2 years now. The house is spotless, fresh meals are ready on time, and their dog has a companion during the day. Anand and Priya report a significant improvement in their work-life balance.",
    keyOutcomes: [
      "Verified live-in maid placed in 48 hours",
      "Zero unannounced leaves in 2 years",
      "Pet-friendly environment maintained"
    ],
    testimonial: {
      quote: "We were skeptical about agencies, but EzyHelpers was professional & transparent. Sunita is now part of our family. The verification process gave us real peace of mind.",
      name: "Priya Sharma",
      roleOrRelation: "Resident, HSR Layout"
    },
    publishedAt: "2023-10-15T00:00:00Z",
    updatedAt: "2023-11-01T00:00:00Z",
    seoTitle: "Case Study: Verified Live-in Maid for Working Couple in Bangalore | EzyHelpers",
    seoDescription: "See how EzyHelpers helped a tech couple in HSR Layout find a reliable, pet-friendly live-in maid in 48 hours. Read the success story."
  },
  {
    slug: "elderly-care-bareilly-parents",
    title: "Compassionate Elderly Care for Aging Parents in Bareilly",
    shortTitle: "Elderly Care in Bareilly",
    summary: "With children settled abroad, an elderly couple in Bareilly needed constant support. EzyHelpers provided a 24/7 caretaker trained in geriatric care and companionship.",
    clientType: "Family",
    city: "Bareilly",
    state: "Uttar Pradesh",
    serviceTypes: ["Elderly Care", "Patient Care"],
    segmentTags: ["Bareilly", "Senior Citizens", "NRI Children"],
    heroMetricLabel: "Peace of Mind",
    heroMetricValue: "100%",
    metrics: [
      {
        label: "Response Time",
        value: "24 Hours",
        description: "Immediate replacement guarantee actively managed"
      },
      {
        label: "Safety",
        value: "Verified",
        description: "Comprehensive background check"
      }
    ],
    context: "Mr. and Mrs. Gupta, aged 78 and 75, live in their ancestral home in Bareilly. Their son resides in the US and was constantly worried about their daily needs, medication management, and loneliness.",
    challenge: "Finding a trustworthy caretaker in a tier-2 city who creates a bond with the seniors, rather than just doing chores. The family wanted someone patient, respectful, and capable of handling basic vitals monitoring.",
    approach: "EzyHelpers activated our Bareilly network. We looked for candidates with 'Seva' attitude and prior experience with elderly couples. We focused on soft skills—patience and listening ability—alongside technical caretaking skills.",
    solution: "We deployed Ramesh, a trained caregiver who also acts as a companion—reading newspapers to Mr. Gupta and accompanying them on evening walks. EzyHelpers support team stays in touch with the US-based son via WhatsApp updates.",
    results: "The Guptas feel more secure and less lonely. Their son sleeps better knowing his parents are in safe hands. Daily video calls show happy, well-cared-for parents.",
    keyOutcomes: [
      "24/7 compassionate care ensured",
      "Medication adherence improved to 100%",
      "Regular updates to family abroad"
    ],
    testimonial: {
      quote: "It's not just about the work; it's about the trust. Ramesh takes care of my parents like his own. EzyHelpers made this possible in a city where good help is hard to find.",
      name: "Amit Gupta",
      roleOrRelation: "Son (based in USA)"
    },
    publishedAt: "2023-09-10T00:00:00Z",
    seoTitle: "Elderly Care Case Study Bareilly | EzyHelpers",
    seoDescription: "Case study: How EzyHelpers provided trusted elderly care for parents in Bareilly, giving peace of mind to NRI children."
  },
  {
    slug: "apartment-association-cooks-cleaners",
    title: "Streamlining Domestic Help for a Premium Apartment Complex",
    shortTitle: "Apartment Community Solutions",
    summary: "Greenwood Residency faced security issues with unverified daily entry. EzyHelpers set up a verification camp and provided a pool of badged, pre-screened cooks and cleaners.",
    clientType: "ApartmentAssociation",
    city: "Bangalore",
    state: "Karnataka",
    serviceTypes: ["Part-time Helper", "Cook", "Security"],
    segmentTags: ["Bangalore", "Whitefield", "Gated Community", "Security"],
    heroMetricLabel: "Verification",
    heroMetricValue: "100%",
    metrics: [
      {
        label: "Helpers Verified",
        value: "50+",
        description: "Police and ID verification completed"
      },
      {
        label: "Incidents",
        value: "Zero",
        description: "Theft/Safety incidents since implementation"
      }
    ],
    context: "Greenwood Residency in Whitefield is a premium society with 200+ flats. The Residents' Welfare Association (RWA) was struggling with unauthorized entry of workers and lack of accountability.",
    challenge: "Ensuring every domestic helper entering the premise was verified. Residents needed a reliable source to hire replacements quickly without compromising security.",
    approach: "EzyHelpers partnered with the RWA to organize a 'Verification Drrive'. We also created a dedicated pool of pre-screened helpers available exclusively for the society.",
    solution: "We implemented a digital badging system. Existing helpers were vetted, and new requirements were fulfilled from our 'Greenwood Exclusive' pool. A dedicated relationship manager was assigned to the society.",
    results: "Security has tightened significantly. Residents verify helper status instantly. The time to find a replacement cook or maid dropped from weeks to days due to the ready pool.",
    keyOutcomes: [
      "50+ helpers verified and badged",
      "Streamlined entry exit process",
      "Resident satisfaction score increased"
    ],
    testimonial: {
      quote: "EzyHelpers didn't just provide maids; they solved our security loophole. The organized approach to verification is exactly what a large community needs.",
      name: "Mr. Menon",
      roleOrRelation: "RWA President"
    },
    publishedAt: "2023-11-20T00:00:00Z",
    seoTitle: "Apartment Society Helper Management Case Study | EzyHelpers",
    seoDescription: "How EzyHelpers solved security & hiring challenges for a premium apartment complex in Bangalore with verified domestic helpers."
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
    context: "Nisha, a software professional living in Bangalore, faced a recurring problem: her domestic helpers would work for two to three months and then disappear. She tried increasing salary, decreasing workload, and changing work timings, but nothing worked. The constant turnover disrupted her daily routines and increased stress.",
    challenge: "Finding a helper who would stay long-term. Nisha genuinely believed she was a good employer, yet something was missing. She needed a reliable helper who wouldn't leave after a few months, disrupting her work-life balance.",
    approach: "EzyHelpers matched Nisha with Rani, an experienced and reliable housemaid trained in professional cleaning and household organization. However, the key difference wasn't just the placement—it was what happened afterwards.",
    solution: "On the very first morning, Nisha casually asked Rani, 'Rani, chai logi kaam shuru karne se pehle?' (Would you like to have tea before we start work?). This simple gesture of respect—offering tea before work began—became a daily ritual. It wasn't a strategy or retention trick; it was just kindness. But it changed everything.",
    results: "Rani stayed for 9+ months—a new record for Nisha. For the first time in years, Nisha had a helper who didn't leave. Their working rhythm became smooth, there was no stress of training someone new repeatedly, and Nisha finally had peace of mind. When asked why she stayed so long, Rani gave a simple answer: 'Kyuki yahan mujhe izzat milti hai' (Because I am respected here). She even declined an offer of ₹2,000 more from a neighbor, saying 'Naya ghar mil jayega, par izzat har jagah nahi milti' (A new home can be found, but respect is not found everywhere).",
    keyOutcomes: [
      "9+ months retention—longest in Nisha's experience",
      "Zero disruption due to frequent job changes",
      "Helper stayed despite higher salary offers elsewhere",
      "Emotional peace and reduced stress for the family",
      "A positive, supportive work-home atmosphere"
    ],
    testimonial: {
      quote: "Earlier, helpers were temporary. Now Rani feels like family. That one simple gesture of offering tea made all the difference—it made her feel valued instead of treated like a labourer.",
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
