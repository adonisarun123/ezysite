import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
  ArrowPathIcon,
  UserIcon
} from '@heroicons/react/24/outline';

export default function RefundPolicyPage() {
  const sections = [
    {
      id: 'overview',
      title: 'Refund Policy Overview',
      icon: DocumentTextIcon,
      content: [
        'EzyHelpers operates on a service placement model where we connect customers with domestic helpers',
        'Our one-time placement fee covers verification, matching, and initial support services',
        'Refunds are processed based on service stage and satisfaction guarantees',
        'We maintain transparent refund policies to ensure customer satisfaction',
        'Different refund terms apply to different service stages and situations'
      ]
    },
    {
      id: 'placement-fee-refunds',
      title: 'Placement Fee Refunds',
      icon: CurrencyDollarIcon,
      content: [
        '<strong>Helper Does Not Report</strong> – If the helper does not report for duty on the first day, we will arrange a replacement promptly earliest possible.',
        '<strong>Helper Leaves Early (First 3 Days)</strong> – If the helper leaves within the first 3 days, we will provide a replacement or credit toward a new placement.',
        '<strong>Helper Leaves Within First Week</strong> – If the helper leaves within the first week due to compatibility issues, a replacement will be arranged.',
        '<strong>After 7 Days of Service</strong> – No refund or replacement is applicable once the helper has completed 7 days of satisfactory service.'
      ]
    },
    {
      id: 'replacement-guarantee',
      title: 'Free Replacement Policy',
      icon: ArrowPathIcon,
      content: [
        '<strong> Replacement Within 10–15 Days </strong>– If you are not satisfied with the assigned helper, a replacement will be provided as per the plan subscribed.',
        '<strong>Advance Notice Required </strong>– Customers should notify us at least 15 days in advance to request a replacement.',
        '<strong>Replacement During First Month </strong>– Up to 2 replacements can be requested within the first month if service expectations aren’t met (Depending upon the plan subscribed)',
        '<strong>Temporary Assistance </strong>– For urgent cases, a temporary helper can be arranged until a permanent replacement is assigned.',
        '<strong>Replacement for Genuine Concerns </strong>– If you have concerns about your helper, such as skill gaps, attitude issues, or reliability problems, we will discuss the matter with both parties and arrange a replacement accordingly.',
        '<strong>Service duration continuity </strong>– The service period starts from the the first helper placement. If we provide a replacement later, the service days keep counting, the duration does not restart. All replacements are part of the same ongoing service period.',
        '<strong>Note: All of the above rules are subject to the specific plan you have subscribed to.</strong>'
      ]
    },
    {
      id: 'refund-timeframes',
      title: 'Refund Processing Timeframes',
      icon: ClockIcon,
      content: [
        'Refund requests must be submitted within specified timeframes',
        '7-10 business days refund processing for pre-placement cancellations',
        '15 business days for placement fee refunds after helper placement',
        '15 business days for complex cases requiring investigation',
        'Refunds processed to original payment method or bank transfer'
      ]
    },
    {
      id: 'non-refundable',
      title: 'Non-Refundable Situations',
      icon: XCircleIcon,
      content: [
        'Helper salaries paid directly to helpers are non-refundable through EzyHelpers',
        'Services completed satisfactorily for more than 7 days',
        'Customer-initiated termination without valid service-related reason',
        'Cancellations due to customer relocation or changed requirements',
        'Third-party payment processing fees (if applicable)',
        'Services used during festivals or emergency situations with premium pricing'
      ]
    },
    {
      id: 'dispute-resolution',
      title: 'Dispute Resolution Process',
      icon: ShieldCheckIcon,
      content: [
        'Contact customer support immediately for any service issues',
        'Detailed investigation of all refund requests within 48 hours',
        'Documentation required for service quality or performance issues',
        'Mediation services available for complex disputes',
        'Final decision communicated within 72 hours of complaint submission',
        'Escalation to senior management for unresolved cases'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-700 to-green-800 text-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Refund
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-300">
                    Policy
                  </span>
                </h1>
                <p className="text-xl text-emerald-100 leading-relaxed max-w-4xl mx-auto">
                  Our comprehensive refund policy ensures your satisfaction and peace of mind 
                  when using EzyHelpers services. Your trust is our priority.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <ShieldCheckIcon className="w-5 h-5 text-green-300" />
                  <span className="text-emerald-100">Customer Protection</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <CurrencyDollarIcon className="w-5 h-5 text-teal-300" />
                  <span className="text-emerald-100">Fair Refunds</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <CalendarDaysIcon className="w-5 h-5 text-blue-300" />
                  <span className="text-emerald-100">Effective: Dec 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Refund Summary
                </h2>
                <p className="text-lg text-gray-600">
                  Key points about our refund and replacement policies
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: ArrowPathIcon,
                    title: "Free Replacements",
                    description: "Up to 3 free helper replacements within the first month if not satisfied",
                    color: "text-green-600",
                    bgColor: "bg-green-50"
                  },
                  {
                    icon: ClockIcon,
                    title: "Quick Processing",
                    description: "Refund requests processed within 3-5 business days with transparent timelines",
                    color: "text-teal-600",
                    bgColor: "bg-teal-50"
                  },
                  {
                    icon: ShieldCheckIcon,
                    title: "Customer Protection",
                    description: "You are eligible for a full refund if no helper is provided within 7 days of registration.",
                    color: "text-emerald-600",
                    bgColor: "bg-emerald-50"
                  }
                ].map((item, index) => (
                  <div key={index} className={`group ${item.bgColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center`}>
                    <item.icon className={`w-12 h-12 ${item.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {sections.map((section, index) => (
                <div key={section.id} className="group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                      <section.icon className="w-8 h-8 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {section.title}
                      </h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 group-hover:shadow-lg transition-all duration-300">
                    <ul className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span 
                            className="text-gray-700 leading-relaxed" 
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Need Help with Refunds?
                </h2>
                <p className="text-lg text-gray-600">
                  Our customer service team is ready to assist with your refund requests
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[
                    {
                      icon: PhoneIcon,
                      title: "Refund Helpline",
                      info: "080-31411776",
                      description: "Available For Immediate Assistance"
                    },
                    {
                      icon: EnvelopeIcon,
                      title: "Email Support",
                      info: "contact@ezyhelpers.com",
                      description: "Detailed refund requests and documentation"
                    }
                  ].map((contact, index) => (
                    <div key={index} className="group flex items-start gap-4 p-4 bg-white hover:bg-emerald-50 rounded-xl transition-all duration-300 transform hover:scale-105">
                      <contact.icon className="w-6 h-6 text-emerald-600 mt-1 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{contact.title}</h3>
                        <p className="text-emerald-600 font-medium mb-1">{contact.info}</p>
                        <p className="text-gray-600 text-sm">{contact.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Relations Manager</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Name:</strong> Anita Desai</p>
                    <p><strong>Specialization:</strong> Customer Satisfaction & Refunds</p>
                    <p><strong>Experience:</strong> 12+ years in customer service</p>
                    <p><strong>Languages:</strong> English, Hindi, Kannada, Tamil, Telugu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-emerald-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 text-emerald-700">
              <CalendarDaysIcon className="w-5 h-5" />
              <span className="text-sm">
                This Refund Policy was last updated on December 09, 2025. 
                We reserve the right to modify this policy with prior notice to customers.
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 
