'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const faqData = [
  {
    id: 1,
    category: "Services",
    question: "What services does EzyHelpers offer?",
    answer: "EzyHelpers is India's top domestic help service platform, offering a wide range of professional housemaid services. These include live-in maid services for 24/7 residential support, full-time maid services for 8–10 hours a day, part-time maid services from 2–6 hours daily, and on-demand helper services with same-day availability. As the best maid agency in India, we also offer certified nanny/babysitter services, elderly care, cook services, and personal driver assistance. We serve 10,000+ families with 5,000+ verified domestic helpers across 9 major cities."
  },
  {
    id: 2,
    category: "Services",
    question: "What makes EzyHelpers different from other maid services in India?",
    answer: "Unlike many local maid providers, EzyHelpers uses a direct payment model where you pay helpers directly after a one-time placement fee, while ensuring transparency and fairness. As a top house help service, we offer verified profiles through police checks, Aadhaar authentication, and skill assessment. With a 4.8/5 rating from 10,000+ families, a 24–72 hour placement guarantee, and free replacement policies, we're known as one of India's best maid services with trusted, hassle-free support."
  },
  {
    id: 3,
    category: "Booking",
    question: "How quickly can I get a maid or helper through EzyHelpers?",
    answer: "EzyHelpers offers one of the fastest housemaid service placements in India, usually within 24–72 hours. The process is simple: share your requirements, receive a callback within 30 minutes, get 3–5 shortlisted profiles in 24–48 hours, interview candidates, and confirm the final placement. For urgent domestic help needs, call +91 9972571005 for same-day service across major cities like Bangalore, Delhi, Mumbai, and Noida."
  },
  {
    id: 4,
    category: "Availability",
    question: "Is EzyHelpers available in my city?",
    answer: "Yes, our domestic help services are available in Bangalore, Mumbai, Delhi, Noida, Nagpur, Lucknow, Kanpur, Meerut, and Bareilly. With over 250 localities covered, we're among the best maid agencies offering city-wide and neighborhood-specific household support. We're rapidly expanding into nearby metro areas to meet growing demands for reliable home help services."
  },
  {
    id: 5,
    category: "Services",
    question: "Can I hire a maid for just 2–3 hours per day?",
    answer: "Absolutely! EzyHelpers provides flexible part-time housemaid services from 2 to 6 hours a day, Ideal for families needing daily cleaning, kitchen help, or short-term chores. As a premium domestic helper service, we tailor schedules to match your lifestyle, ensuring convenience without long-term commitment."
  },
  {
    id: 6,
    category: "Services",
    question: "Can I book a maid for just one day or a few days?",
    answer: "Yes, our on-demand house help service lets you book maids for single days, weekends, or short-term needs like festive cleaning, special events, or as a trial before long-term hiring. Whether you're looking for the best maid service or just temporary support, we provide full flexibility with zero hidden fees."
  },
  {
    id: 7,
    category: "Specialized Services",
    question: "Do you provide professional nanny and babysitter services?",
    answer: "Yes! EzyHelpers offers trained nannies and babysitters with verified backgrounds. Each caretaker is skilled in child care, emergency protocols, and meal prep. Available for hourly, part-time, or full-time child care, our domestic help service ensures your little ones are safe and engaged."
  },
  {
    id: 8,
    category: "Specialized Services",
    question: "What elderly care services do you provide?",
    answer: "We offer compassionate elderly care through trained domestic helpers experienced in senior assistance. Services include help with hygiene, mobility, meals, companionship, and medical reminders. Whether part-time or 24-hour live-in, our domestic help service supports senior well-being at home."
  },
  {
    id: 9,
    category: "Safety & Trust",
    question: "How do you ensure the maids' and helpers' safety and trustworthiness?",
    answer: "EzyHelpers enforces a five-layer verification process: police check, Aadhaar authentication, address verification, skill testing, and in-person assessment. Recognised by Skill India and DWSSC, we ensure every domestic helper we place meets top safety and trust standards."
  },
  {
    id: 10,
    category: "Safety & Trust",
    question: "What COVID-19 safety measures do your helpers follow?",
    answer: "All housemaids and domestic helpers follow strict hygiene protocols, including full vaccination, mask usage, regular sanitization, and daily health checks. As a responsible domestic help service provider, we maintain ongoing awareness and training around current health guidelines."
  },
  {
    id: 11,
    category: "Pricing",
    question: "Are there any hidden charges or fees with EzyHelpers?",
    answer: "No, we maintain full cost transparency. You pay a one-time placement fee to EzyHelpers, then pay your maid directly each month. As one of India's best maid services, we avoid ongoing commissions and ensure all fees are discussed upfront."
  },
  {
    id: 12,
    category: "Pricing",
    question: "How does the direct payment model work?",
    answer: "Under our transparent payment model, you pay EzyHelpers a one-time placement fee, we provide verified helper profiles, and once hired, you pay the housemaid directly. This empowers both you and the helper, avoiding middleman charges, something that sets us apart as a leading house help service."
  },
  {
    id: 13,
    category: "Guarantees",
    question: "Do you offer any guarantees or money-back policies?",
    answer: "Yes! We provide a 24–72 hour free replacement guarantee if you're unsatisfied, along with ongoing customer support and performance tracking. Our commitment to satisfaction makes us the best maid agency for quality and reliability."
  },
  {
    id: 14,
    category: "Process",
    question: "What is the complete process to hire a maid through EzyHelpers?",
    answer: "The process is simple: Share your requirements via call or online form. Receive 3–5 verified profiles in 24–48 hours. Conduct interviews (online or in-person) and select your helper. Placement is completed within 72 hours, with full support before and after hiring."
  },
  {
    id: 15,
    category: "Process",
    question: "How long does the background verification process take?",
    answer: "Pre-verified helpers can be placed in 24–48 hours. New candidates may take 3–5 days for full verification. As a best maid service platform, we maintain a pool of 5,000+ pre-screened helpers to ensure faster turnaround."
  },
  {
    id: 16,
    category: "Process",
    question: "Can I interview multiple candidates before deciding?",
    answer: "Yes. We encourage it. You can interview 3–5 shortlisted housemaids to assess their communication skills, work experience, and comfort level before finalizing. Our domestic help service is built around finding your perfect fit."
  },
  {
    id: 17,
    category: "Special Requirements",
    question: "Do you have maids experienced with working with professional families?",
    answer: "Yes. Our housemaids are used to structured routines, security protocols, and working in busy professional households. They can manage chores independently, ensuring a smooth household experience for working couples."
  },
  {
    id: 18,
    category: "Special Requirements",
    question: "Can you provide maids who speak regional languages?",
    answer: "Yes. We match domestic helpers based on language preferences like Kannada, Tamil, Marathi, Hindi, English, and more, depending on the city. This enhances communication and ensures a smoother domestic help service experience."
  },
  {
    id: 19,
    category: "Special Requirements",
    question: "Do you have helpers experienced with pets and children?",
    answer: "Many of our domestic helpers are trained and comfortable around pets and children. We also offer dedicated nanny services with advanced child care skills. Whether you need a housemaid or a babysitter, we'll match based on your family's needs."
  },
  {
    id: 20,
    category: "Special Requirements",
    question: "Can senior citizens directly hire helpers through EzyHelpers?",
    answer: "Yes. We make it easy for senior citizens to book helpers with simplified steps, personal assistance, and helpers trained in elderly care. Our housemaid service is designed to be accessible and supportive for all age groups."
  },
  {
    id: 21,
    category: "Emergency Support",
    question: "What if my current maid suddenly quits or doesn't show up?",
    answer: "EzyHelpers offers emergency housemaid service with same-day or next-day replacements, even if your current maid wasn't hired through us. Call +91 9972571005 for urgent assistance from our verified domestic helper pool."
  },
  {
    id: 22,
    category: "Special Occasions",
    question: "Can I hire helpers for festival cleaning and special occasions?",
    answer: "Yes! We offer on-demand house help service for festive deep cleaning, weddings, guest visits, or one-time events. No long-term contract required, just flexible, reliable support when you need it."
  },
  {
    id: 23,
    category: "Support",
    question: "Do you provide replacement helpers during vacations or sick leave?",
    answer: "Yes. Temporary replacements are available when your regular helper is on leave. As a reliable domestic help service provider, we ensure your home runs smoothly without interruption."
  },
  {
    id: 24,
    category: "Technology",
    question: "Are your helpers trained to use modern appliances and smart devices?",
    answer: "Yes. Our housemaids are trained in handling washing machines, dishwashers, microwaves, and smart home tools. We ensure your domestic helper is up to date with everyday household technology."
  },
  {
    id: 25,
    category: "Community Living",
    question: "Can helpers manage apartment complexes and gated community protocols?",
    answer: "Yes. Many of our maids are experienced with security protocols, visitor logs, intercom systems, and cleaning schedules in apartments and gated communities. This ensures a seamless and secure experience for homeowners."
  },
  {
    id: 26,
    category: "Comparison",
    question: "How is EzyHelpers better than local maid placement agencies?",
    answer: "Unlike traditional agents, we offer: Tech-enabled helper matching, Police-verified, ID-checked profiles, Transparent pricing, No monthly commissions, Free replacements, 24/7 customer support across cities. This makes us a smarter and more reliable alternative to local maid agencies."
  },
  {
    id: 27,
    category: "Comparison",
    question: "Why choose EzyHelpers over other online platforms?",
    answer: "We are the best maid agency with: The highest customer rating (4.8/5), Largest verified domestic helper network (5,000+), Fastest maid placement (24–72 hours), Direct payment model, Full range of domestic help services, Multi-city presence, Government-compliant verification and support."
  },
  {
    id: 28,
    category: "Company",
    question: "Is EzyHelpers a registered and licensed company?",
    answer: "Yes. We are fully registered and compliant with: DWSSC (Domestic Workers Sector Skill Council), Skill India, Indian business regulations, ISO-certified processes, Optional insurance coverage for additional protection."
  },
  {
    id: 29,
    category: "Getting Started",
    question: "How do I book my first maid or helper with EzyHelpers?",
    answer: "Booking is simple: Call +91 9972571005 or visit our website, Share service type, location, timing, and preferences, Receive shortlisted profiles, Interview and hire within 72 hours. We provide full support throughout the process."
  },
  {
    id: 30,
    category: "Getting Started",
    question: "What information do I need to provide when booking?",
    answer: "To book a helper, please share: Service type (maid, cook, nanny, etc.), Location details, Preferred timings and schedule, Required tasks, Language preferences, Any special needs, Your contact info. We'll guide you step-by-step."
  }
];

const categories = ["All", "Services", "Booking", "Pricing", "Safety & Trust", "Process", "Special Requirements", "Support", "Getting Started"];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <div className="flex justify-center mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <QuestionMarkCircleIcon className="w-16 h-16 text-yellow-300" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Frequently Asked
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                    Questions
                  </span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                  Find answers to common questions about our home services, booking process, 
                  and everything you need to know about EzyHelpers.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="group bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 group-hover:bounce transition-transform duration-300" />
                    Still Have Questions?
                  </span>
                </Link>
                <Link 
                  href="tel:+919972571005"
                  className="group border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    <PhoneIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Call +91 9972571005
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {/* Search Bar */}
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {filteredFAQs.length === 0 ? (
                <div className="text-center py-12">
                  <QuestionMarkCircleIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No FAQs found</h3>
                  <p className="text-gray-600">Try adjusting your search or category filter.</p>
                </div>
              ) : (
                filteredFAQs.map((faq) => (
                  <div
                    key={faq.id}
                    className="group bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 rounded-2xl"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="ml-6 flex-shrink-0">
                        {openFAQ === faq.id ? (
                          <ChevronUpIcon className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                        ) : (
                          <ChevronDownIcon className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                        )}
                      </div>
                    </button>
                    
                    {openFAQ === faq.id && (
                      <div className="px-8 pb-6">
                        <div className="border-t border-gray-100 pt-6">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by Thousands
              </h2>
              <p className="text-xl text-gray-600">
                See why families across India choose EzyHelpers
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "50,000+", label: "Happy Families", icon: "👨‍👩‍👧‍👦" },
                { number: "5,000+", label: "Verified Helpers", icon: "✅" },
                { number: "4.8/5", label: "Average Rating", icon: "⭐" },
                { number: "9", label: "Cities Served", icon: "🏙️" }
              ].map((stat, index) => (
                <div key={index} className="group text-center">
                  <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't wait! Book your service today or get in touch with our support team. 
              We're here to make your life easier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services"
                className="group bg-white hover:bg-gray-100 text-blue-900 font-semibold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  <StarIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Book a Service
                </span>
              </Link>
              <Link 
                href="/contact"
                className="group border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  <ChatBubbleLeftRightIcon className="w-5 h-5 group-hover:bounce transition-transform duration-300" />
                  Contact Support
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
