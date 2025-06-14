export interface BlogPost {
  id: string; // used as slug
  title: string;
  excerpt: string;
  author: string;
  date: string; // human readable
  readTime: string;
  category: string;
  tags?: string[];
  image?: string;
  featured?: boolean;
  content: string; // basic markdown / plain text
}

export const posts: BlogPost[] = [
  {
    id: 'hiring-domestic-helper',
    title: 'The Complete Guide to Hiring a Domestic Helper in India',
    excerpt:
      'Everything you need to know about finding, vetting, and hiring the perfect domestic helper for your family – from legal considerations to interview tips.',
    author: 'Priya Sharma',
    date: 'December 10, 2024',
    readTime: '8 min read',
    category: 'Hiring Guide',
    featured: true,
    tags: ['hiring', 'domestic help', 'guide', 'legal'],
    content: `## Introduction\nBringing a domestic helper into your home can be life-changing, freeing up precious hours and giving your family professional support. In this guide we'll walk through the entire hiring journey – **from sourcing candidates to drawing up a legally-sound contract**.\n\n---\n\n### 1. Understand Your Requirements\nBefore you post a job ad, take time to map out what kind of help you need. Is it full-time, part-time, live-in? Childcare, elder-care, general housekeeping? Being clear now prevents costly mismatches later.\n\n### 2. Where to Find Reliable Helpers\n- Personal referrals\n- Verified agencies\n- Online platforms like **EzyHelpers**\n\nEach source has pros & cons – we break them down in detail.\n\n### 3. Vetting & Background Checks\nSafety first. Always…\n\n_(Article truncated for brevity)_`
  },
  {
    id: 'safety-tips',
    title: 'Home Safety Tips When Hiring Domestic Help',
    excerpt:
      'Essential safety measures and background checks to ensure your family\'s security when bringing help into your home.',
    author: 'Amit Verma',
    date: 'December 8, 2024',
    readTime: '5 min read',
    category: 'Safety',
    tags: ['safety', 'background check', 'security'],
    content: `### Keep your home secure…\n(Full article coming soon)`
  },
  {
    id: 'fair-wages',
    title: 'Understanding Fair Wages for Domestic Workers',
    excerpt:
      'A comprehensive breakdown of fair compensation rates across different cities and service types in India.',
    author: 'Sneha Reddy',
    date: 'December 6, 2024',
    readTime: '6 min read',
    category: 'Legal & Ethics',
    tags: ['wages', 'legal', 'ethics'],
    content: `### Paying fairly isn\'t just ethical, it\'s smart…`
  },
  {
    id: 'elderly-care',
    title: 'Specialized Care for Elderly Family Members',
    excerpt:
      'What to look for when hiring caregivers for elderly relatives, including medical considerations and qualifications.',
    author: 'Dr. Rajesh Kumar',
    date: 'December 4, 2024',
    readTime: '7 min read',
    category: 'Elderly Care',
    tags: ['elderly', 'healthcare', 'caregiving'],
    content: `### Caring for seniors requires empathy…`
  },
  {
    id: 'managing-expectations',
    title: 'Setting Clear Expectations with Your Helper',
    excerpt:
      'How to communicate effectively and set boundaries for a harmonious working relationship.',
    author: 'Meera Patel',
    date: 'December 2, 2024',
    readTime: '4 min read',
    category: 'Relationship Management',
    tags: ['communication', 'expectations', 'management'],
    content: `### Communication is key…`
  },
  {
    id: 'childcare-tips',
    title: 'Finding the Perfect Nanny for Your Children',
    excerpt:
      'Key qualities to look for in a childcare provider and questions to ask during the interview process.',
    author: 'Anita Singh',
    date: 'November 30, 2024',
    readTime: '6 min read',
    category: 'Childcare',
    tags: ['nanny', 'childcare', 'interview'],
    content: `### A great nanny is worth their weight in gold…`
  },
  {
    id: 'legal-compliance',
    title: 'Legal Compliance for Domestic Employment',
    excerpt:
      'Understanding labor laws, contracts, and your responsibilities as an employer of domestic help.',
    author: 'Advocate Ravi Gupta',
    date: 'November 28, 2024',
    readTime: '9 min read',
    category: 'Legal & Ethics',
    tags: ['legal', 'compliance', 'contracts'],
    content: `### Don\'t get caught out by paperwork…`
  },
]; 