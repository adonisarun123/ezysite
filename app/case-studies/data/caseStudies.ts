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
