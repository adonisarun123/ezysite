import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UrgencyCTA from '@/components/UrgencyCTA';
import {
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  SparklesIcon,
  HomeIcon,
  HeartIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export default function Blog() {
  const featuredPost = {
    id: 'hiring-domestic-helper',
    title: 'The Complete Guide to Hiring a Domestic Helper in India',
    excerpt: 'Everything you need to know about finding, vetting, and hiring the perfect domestic helper for your family. From legal considerations to interview tips.',
    author: 'Priya Sharma',
    date: 'December 10, 2024',
    readTime: '8 min read',
    category: 'Hiring Guide',
    image: '/blog-featured.jpg',
    featured: true,
    tags: ['hiring', 'domestic help', 'guide', 'legal']
  };

  const blogPosts = [
    {
      id: 'safety-tips',
      title: 'Home Safety Tips When Hiring Domestic Help',
      excerpt: 'Essential safety measures and background checks to ensure your family\'s security when bringing help into your home.',
      author: 'Amit Verma',
      date: 'December 8, 2024',
      readTime: '5 min read',
      category: 'Safety',
      tags: ['safety', 'background check', 'security']
    },
    {
      id: 'fair-wages',
      title: 'Understanding Fair Wages for Domestic Workers',
      excerpt: 'A comprehensive breakdown of fair compensation rates across different cities and service types in India.',
      author: 'Sneha Reddy',
      date: 'December 6, 2024',
      readTime: '6 min read',
      category: 'Legal & Ethics',
      tags: ['wages', 'legal', 'ethics']
    },
    {
      id: 'elderly-care',
      title: 'Specialized Care for Elderly Family Members',
      excerpt: 'What to look for when hiring caregivers for elderly relatives, including medical considerations and qualifications.',
      author: 'Dr. Rajesh Kumar',
      date: 'December 4, 2024',
      readTime: '7 min read',
      category: 'Elderly Care',
      tags: ['elderly', 'healthcare', 'caregiving']
    },
    {
      id: 'managing-expectations',
      title: 'Setting Clear Expectations with Your Helper',
      excerpt: 'How to communicate effectively and set boundaries for a harmonious working relationship.',
      author: 'Meera Patel',
      date: 'December 2, 2024',
      readTime: '4 min read',
      category: 'Relationship Management',
      tags: ['communication', 'expectations', 'management']
    },
    {
      id: 'childcare-tips',
      title: 'Finding the Perfect Nanny for Your Children',
      excerpt: 'Key qualities to look for in a childcare provider and questions to ask during the interview process.',
      author: 'Anita Singh',
      date: 'November 30, 2024',
      readTime: '6 min read',
      category: 'Childcare',
      tags: ['nanny', 'childcare', 'interview']
    },
    {
      id: 'legal-compliance',
      title: 'Legal Compliance for Domestic Employment',
      excerpt: 'Understanding labor laws, contracts, and your responsibilities as an employer of domestic help.',
      author: 'Advocate Ravi Gupta',
      date: 'November 28, 2024',
      readTime: '9 min read',
      category: 'Legal & Ethics',
      tags: ['legal', 'compliance', 'contracts']
    }
  ];

  const categories = [
    { name: 'Hiring Guide', count: 8, icon: UserIcon, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { name: 'Safety', count: 5, icon: ShieldCheckIcon, color: 'text-green-600', bgColor: 'bg-green-50' },
    { name: 'Legal & Ethics', count: 6, icon: TagIcon, color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { name: 'Childcare', count: 4, icon: HeartIcon, color: 'text-pink-600', bgColor: 'bg-pink-50' },
    { name: 'Elderly Care', count: 3, icon: HomeIcon, color: 'text-orange-600', bgColor: 'bg-orange-50' },
    { name: 'Tips & Tricks', count: 7, icon: LightBulbIcon, color: 'text-yellow-600', bgColor: 'bg-yellow-50' }
  ];

  return (
    <main className="min-h-screen">
      <UrgencyCTA />
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest tips, guides, and insights about home services, helper management, and home care.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
                Blog Coming Soon!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're working on bringing you valuable content about home services, helper tips, and home management guides. Stay tuned for regular updates!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/" className="btn-primary">
                  Back to Home
                </a>
                <a href="/services" className="btn-secondary">
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 