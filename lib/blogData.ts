export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags?: string[];
  image?: string;
  featured?: boolean;
  content: string;
}

const bangaloreMaidContent = `# What Is Live-In Maid in Bangalore? Roles, Duties, Salaries & Hiring Guide

## Tired of Coming Home to More Work After Battling Bangalore Traffic? You're Not Alone

Picture this: You've just survived the Electronic City to Koramangala route during peak hour traffic; what should be a 30-minute drive stretched to 2 hours. You finally reach your apartment in HSR Layout, completely drained, only to be greeted by dirty dishes from the morning's hurried breakfast, piles of laundry, and the daunting task of cooking dinner while mentally preparing for tomorrow's early morning breakfast.

Does this feel all too familiar?

If you're nodding your head, you're one of thousands of Bangalore's working professionals discovering that a live-in maid isn't a luxury; it's survival in India's Silicon Valley.

[... Rest of the content from bangalore_live_in_maid_trend.md ...]`;

const verificationGuideContent = `# The Importance of Maid Verification: A Complete Guide for Homeowners

## The Door Opens, But Are You Letting in Trust or Trouble?

The doorbell rings. It's the first day for your new domestic helper, someone who will soon step into your home, touch your belongings, and maybe even help care for your children or elderly parents. As you reach for the handle, a single question strikes you: "Do I really know who I'm letting in?"

For many families, this moment of doubt comes too late.

[... Rest of the content from maid_verification_guide.md ...]`;

const marketOverviewContent = `# The Indian Domestic Helper Market: Comprehensive Analysis

## Executive Summary

India's domestic helper market represents one of the largest informal employment sectors globally, with an estimated workforce of **50-90 million people**. This massive industry, valued at approximately **₹1.2 trillion annually**, is experiencing unprecedented transformation driven by urbanization, rising incomes, and changing lifestyle patterns.

[... Rest of the existing market overview content ...]`;

export const posts: BlogPost[] = [
  {
    id: 'live-in-maid-salary-roles-hiring-guide-bangalore',
    title: 'Live-In Maid Bangalore: Salary, Roles & How to Hire',
    excerpt: 'Your complete guide to hiring a live-in maid in Bangalore, including roles, salaries, safety checks, and tips for finding reliable, verified help.',
    author: 'Hiring Team',
    date: 'December 22, 2024',
    readTime: '12 min read',
    category: 'Hiring Guide',
    featured: true,
    tags: ['live-in maid', 'bangalore', 'salary guide', 'hiring tips', 'domestic help'],
    image: '/blog/live-in-maid-salary-roles-hiring-guide-bangalore.jpg',
    content: bangaloreMaidContent
  },
  {
    id: 'complete-guide-to-maid-verification-and-background-check-in-india',
    title: 'Maid Verification in India: Safe & Trusted Domestic Help',
    excerpt: 'Maid verification is crucial for your family\'s safety. Learn the risks of unverified hires and how to protect your home with proper verification.',
    author: 'Security Team',
    date: 'December 20, 2024',
    readTime: '10 min read',
    category: 'Safety & Security',
    featured: true,
    tags: ['verification', 'safety', 'domestic help', 'background check', 'security'],
    image: '/blog/complete-guide-to-maid-verification-and-background-check-in-india.jpg',
    content: verificationGuideContent
  },
  {
    id: 'market-overview',
    title: 'The Indian Domestic Helper Market: Market Overview, Challenges and Future Outlook',
    excerpt: 'Comprehensive analysis of India\'s domestic helper market - from its 50-90 million workforce to growth trends, formalization opportunities, and policy frameworks.',
    author: 'Market Research Team',
    date: 'December 15, 2024',
    readTime: '15 min read',
    category: 'Market Analysis',
    featured: false,
    tags: ['market analysis', 'domestic workers', 'industry trends', 'policy', 'formalization'],
    content: marketOverviewContent
  }
];
