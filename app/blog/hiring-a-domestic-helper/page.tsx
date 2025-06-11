import React from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import {
  CalendarDaysIcon,
  UserIcon,
  ClockIcon,
  BookmarkIcon,
  ShareIcon,
  TagIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

export default function HiringDomesticHelperPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Article Header */}
        <section className="bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-2 text-violet-200">
                <TagIcon className="w-5 h-5" />
                <span className="text-sm">Guide • Domestic Help • Safety</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                The Complete Guide to
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                  Hiring a Domestic Helper
                </span>
              </h1>
              
              <p className="text-xl text-violet-100 max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about finding, hiring, and managing domestic help in India. 
                From background checks to legal considerations.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-violet-200">
                <div className="flex items-center space-x-2">
                  <CalendarDaysIcon className="w-4 h-4" />
                  <span>December 15, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <UserIcon className="w-4 h-4" />
                  <span>EzyHelpers Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="bg-violet-50 border-l-4 border-violet-400 rounded-r-2xl p-6 mb-8">
              <div className="flex items-start space-x-3">
                <LightBulbIcon className="w-6 h-6 text-violet-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Summary</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Hiring domestic help requires careful consideration of background verification, legal documentation, 
                    clear job expectations, and ongoing management. This guide covers everything from initial screening 
                    to building a long-term working relationship.
                  </p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
              <nav className="space-y-2">
                {[
                  { title: "Understanding Your Needs", anchor: "#understanding-needs" },
                  { title: "Finding Reliable Candidates", anchor: "#finding-candidates" },
                  { title: "Background Verification Process", anchor: "#background-verification" },
                  { title: "Interview and Selection", anchor: "#interview-selection" },
                  { title: "Legal Documentation", anchor: "#legal-documentation" },
                  { title: "Setting Clear Expectations", anchor: "#clear-expectations" },
                  { title: "Trial Period Management", anchor: "#trial-period" },
                  { title: "Building Long-term Relationships", anchor: "#long-term-relationships" }
                ].map((item, index) => (
                  <a key={index} href={item.anchor} className="block text-violet-600 hover:text-violet-800 hover:underline transition-colors">
                    {index + 1}. {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Section 1 */}
            <section id="understanding-needs" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Understanding Your Needs</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Before beginning your search for domestic help, it's crucial to clearly define what you need. 
                This foundational step will save you time and ensure you find the right person for your household.
              </p>

              <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Questions to Ask Yourself:</h3>
                <ul className="space-y-3">
                  {[
                    "What specific tasks do you need help with? (cleaning, cooking, childcare, elderly care)",
                    "How many hours per day/week do you need assistance?",
                    "Do you prefer live-in or live-out help?",
                    "What's your budget for domestic help?",
                    "Do you need someone who speaks a specific language?",
                    "Are there any special requirements? (pet care, dietary restrictions, etc.)"
                  ].map((question, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{question}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section id="finding-candidates" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Finding Reliable Candidates</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                There are several ways to find domestic help, each with its own advantages and considerations. 
                Here are the most effective methods:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">✅ Recommended Methods</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-700">• Professional agencies like EzyHelpers</li>
                    <li className="text-gray-700">• Personal referrals from trusted sources</li>
                    <li className="text-gray-700">• Verified online platforms</li>
                    <li className="text-gray-700">• Community recommendations</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">⚠️ Approach with Caution</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-700">• Unverified online classifieds</li>
                    <li className="text-gray-700">• Street-side agencies</li>
                    <li className="text-gray-700">• Unknown walk-in candidates</li>
                    <li className="text-gray-700">• Social media groups without verification</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="background-verification" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Background Verification Process</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-2xl p-6 mb-6">
                <div className="flex items-start space-x-3">
                  <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Critical Safety Step</h3>
                    <p className="text-gray-700">
                      Background verification is non-negotiable when hiring domestic help. This step protects your family 
                      and property while ensuring you hire trustworthy individuals.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">Essential Verification Steps:</h3>
              
              <div className="space-y-4 mb-6">
                {[
                  { 
                    title: "Police Verification", 
                    description: "Obtain police clearance certificate from their local police station",
                    importance: "Critical"
                  },
                  { 
                    title: "Identity Documentation", 
                    description: "Verify Aadhaar card, PAN card, and other government-issued IDs",
                    importance: "Essential"
                  },
                  { 
                    title: "Address Verification", 
                    description: "Confirm current and permanent addresses with supporting documents",
                    importance: "Important"
                  },
                  { 
                    title: "Reference Checks", 
                    description: "Contact previous employers and get detailed feedback",
                    importance: "Essential"
                  },
                  { 
                    title: "Medical Certificate", 
                    description: "Ensure they're in good health and free from communicable diseases",
                    importance: "Important"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <div className={`w-3 h-3 rounded-full mt-2 ${
                        item.importance === 'Critical' ? 'bg-red-500' :
                        item.importance === 'Essential' ? 'bg-orange-500' : 'bg-yellow-500'
                      }`} />
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                        <span className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                          item.importance === 'Critical' ? 'bg-red-100 text-red-800' :
                          item.importance === 'Essential' ? 'bg-orange-100 text-orange-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.importance}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 */}
            <section id="interview-selection" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Interview and Selection</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                The interview process is your opportunity to assess not just skills, but also personality fit and reliability. 
                Here's how to conduct effective interviews:
              </p>

              <div className="bg-violet-50 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Interview Checklist:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Skills Assessment</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Previous work experience</li>
                      <li>• Specific skill demonstrations</li>
                      <li>• Language proficiency</li>
                      <li>• Technology comfort level</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Personality Fit</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Communication style</li>
                      <li>• Reliability indicators</li>
                      <li>• Problem-solving approach</li>
                      <li>• Cultural compatibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-12">
              <HeartIcon className="w-12 h-12 text-violet-200 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Need Help Finding Verified Domestic Help?</h3>
              <p className="text-violet-100 mb-6 max-w-2xl mx-auto">
                Skip the hassle of verification and interviews. EzyHelpers provides pre-verified, 
                trained domestic helpers with complete background checks and insurance coverage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/hire-helper" className="bg-white text-violet-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Find Verified Helpers
                </Link>
                <Link href="/blog" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-violet-600 transition-colors">
                  Read More Articles
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Legal Rights When Hiring Domestic Help",
                  excerpt: "Understanding labor laws and legal protections for both employers and helpers.",
                  readTime: "5 min read",
                  category: "Legal"
                },
                {
                  title: "Creating a Safe Home Environment",
                  excerpt: "Essential safety measures when bringing new domestic help into your home.",
                  readTime: "6 min read",
                  category: "Safety"
                },
                {
                  title: "Managing Domestic Help Effectively",
                  excerpt: "Tips for building positive relationships and clear communication with your helper.",
                  readTime: "7 min read",
                  category: "Management"
                }
              ].map((article, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-xs text-violet-600 font-medium mb-2">{article.category}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                    <Link href="#" className="text-violet-600 hover:text-violet-800 text-sm font-medium">
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 