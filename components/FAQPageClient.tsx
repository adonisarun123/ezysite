'use client';

import React, { useState } from 'react';
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CurrencyRupeeIcon,
  CalendarDaysIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function FAQPageClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = ['All', 'Services', 'Booking', 'Pricing', 'Safety', 'General'];

  const faqs = [
    {
      id: 1,
      category: 'Services',
      question: 'What types of domestic help services do you provide?',
      answer: 'We provide a wide range of domestic help services including full-time maids, part-time maids, live-in maids, cooks, nannies/babysitters, elderly care, drivers, deep cleaning, and more. All our helpers are thoroughly verified and trained.'
    },
    {
      id: 2,
      category: 'Booking',
      question: 'How can I book a helper through EzyHelpers?',
      answer: 'You can book a helper through our website, mobile app, or by calling our customer support at 080-31411776. Simply select your service, location, and requirements, and we\'ll match you with suitable helpers.'
    },
    {
      id: 3,
      category: 'Safety',
      question: 'Are your helpers verified and trustworthy?',
      answer: 'Yes, all our helpers undergo rigorous background verification including police verification, address proof, identity verification, and reference checks. We also conduct in-person interviews to ensure reliability and trustworthiness.'
    },
    {
      id: 4,
      category: 'Pricing',
      question: 'What are your service charges?',
      answer: 'Our pricing varies based on the type of service, location, and duration. We offer competitive rates with no hidden charges. Contact us for detailed pricing information for your specific requirements.'
    },
    {
      id: 5,
      category: 'General',
      question: 'In which cities do you operate?',
      answer: 'We currently operate in major cities including Bangalore, Mumbai, Delhi, Noida, Nagpur, Kanpur, Lucknow, Meerut, and Bareilly. We\'re continuously expanding to new locations.'
    },
    {
      id: 6,
      category: 'Booking',
      question: 'How quickly can I get a helper?',
      answer: 'We typi cally provide helpers within 24–72 hours of your request, depending on your location and specific requirements. However, during high demand or due to availability constraints, it may take longer.'
    },
    {
      id: 7,
      category: 'Services',
      question: 'Do you provide replacement if I\'m not satisfied?',
      answer: 'Yes, we offer free replacement within the first week if you\'re not satisfied with the helper\'s performance. Customer satisfaction is our top priority.'
    },
    {
      id: 8,
      category: 'Pricing',
      question: 'Are there any hidden charges?',
      answer: 'No, we believe in transparent pricing. All charges are clearly mentioned upfront with no hidden fees. You only pay for the services you use.'
    },
    {
      id: 9,
      category: 'Safety',
      question: 'What safety measures do you take?',
      answer: 'We conduct thorough background checks, police verification, and maintain detailed records of all helpers. We also provide insurance coverage and 24/7 customer support for any emergencies.'
    },
    {
      id: 10,
      category: 'General',
      question: 'Do you provide emergency services?',
      answer: 'Yes, we have 24/7 emergency support for urgent domestic help requirements. Contact our emergency helpline for immediate assistance.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                <QuestionMarkCircleIcon className="h-12 w-12 text-blue-300" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Frequently Asked
              <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about EzyHelpers services, 
              booking process, helper verification, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-indigo-50 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <QuestionMarkCircleIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No FAQs found</h3>
                <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full mr-3 ${
                          faq.category === 'Services' ? 'bg-blue-100 text-blue-800' :
                          faq.category === 'Booking' ? 'bg-green-100 text-green-800' :
                          faq.category === 'Safety' ? 'bg-red-100 text-red-800' :
                          faq.category === 'Pricing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {faq.category}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      </div>
                      {openFAQ === faq.id ? (
                        <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    
                    {openFAQ === faq.id && (
                      <div className="px-6 pb-4">
                        <div className="pt-2 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl text-white font-bold mb-4">Still have questions?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Our customer support team is here to help you
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="tel:+918031411776"
                className="flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-4 rounded-lg transition-colors duration-200"
              >
                <PhoneIcon className="h-6 w-6 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Call Us</div>
                  <div className="text-sm text-indigo-100">080-31411776</div>
                </div>
              </a>
              
              <button className="flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-4 rounded-lg transition-colors duration-200">
                <ChatBubbleLeftRightIcon className="h-6 w-6 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Live Chat</div>
                  <div className="text-sm text-indigo-100">Start conversation</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Additional Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <UserGroupIcon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Guide</h3>
                <p className="text-gray-600 mb-4">
                  Learn about our different services and find the right helper for your needs.
                </p>
                <a href="/services" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  View Services →
                </a>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <ShieldCheckIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety & Trust</h3>
                <p className="text-gray-600 mb-4">
                  Understand our verification process and safety measures for your peace of mind.
                </p>
                <a href="/about" className="text-green-600 hover:text-green-800 font-medium">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <StarIcon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Stories</h3>
                <p className="text-gray-600 mb-4">
                  Read testimonials and success stories from our satisfied customers.
                </p>
                <a href="/blog" className="text-yellow-600 hover:text-yellow-800 font-medium">
                  Read Stories →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 
