import { Metadata } from 'next'
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UrgencyCTA from '@/components/UrgencyCTA';
import FAQWithTracking from '@/components/FAQWithTracking';
import { posts } from '@/lib/blogData';
import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.id }));
}

// FAQ data for different blog categories
const blogFAQs = {
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
  ]
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = posts.find(p => p.id === params.slug)
  
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
      url: `https://ezyhelpers.com/blog/${post.id}`,
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
      canonical: `https://ezyhelpers.com/blog/${post.id}`
    }
  }
}

export default function BlogPost({ params }: PageProps) {
  const post = posts.find((p) => p.id === params.slug);
  if (!post) return notFound();

  const markdown = post.content;
  const faqs = blogFAQs[post.id as keyof typeof blogFAQs] || [];

  return (
    <main className="min-h-screen">
      <UrgencyCTA />
      <Navbar />

      {/* Header */}
      <header className="section-padding bg-gradient-to-br from-indigo-50 via-blue-50 to-white">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <span className="inline-block mb-4 text-sm font-medium text-blue-600 uppercase tracking-wide">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display text-gray-900">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <CalendarDaysIcon className="w-4 h-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <ClockIcon className="w-4 h-4" /> {post.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="prose prose-indigo mx-auto px-4 py-16 max-w-3xl dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </article>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Common questions about {post.title.toLowerCase()}
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

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 font-display">Need Trusted Help at Home?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <a href="/hire-helper" className="btn-secondary bg-white text-indigo-600 hover:bg-gray-100 w-full">
              Book a Helper Now
            </a>
            <a href="tel:+919972571005" className="btn-secondary border-white text-white hover:bg-white/10 w-full">
              Call +91 99725 71005
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 