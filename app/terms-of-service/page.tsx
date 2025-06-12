import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  DocumentTextIcon,
  ScaleIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  CurrencyDollarIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function TermsOfServicePage() {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: CheckCircleIcon,
      content: [
        'By accessing and using EzyHelpers services, you accept and agree to be bound by these terms',
        'These terms apply to all users including customers and service providers',
        'If you do not agree to these terms, you must not use our services',
        'We may modify these terms at any time with notice to users',
        'Continued use after modifications constitutes acceptance of new terms'
      ]
    },
    {
      id: 'service-description',
      title: 'Service Description',
      icon: UserIcon,
      content: [
        'EzyHelpers is a platform connecting customers with verified domestic helpers',
        'We facilitate bookings, payments, and communication between parties',
        'We do not directly provide domestic help services',
        'Service quality is the responsibility of individual helpers',
        'Platform availability may vary and is not guaranteed 24/7'
      ]
    },
    {
      id: 'user-obligations',
      title: 'User Obligations',
      icon: ScaleIcon,
      content: [
        'Provide accurate and complete information during registration',
        'Maintain confidentiality of your account credentials',
        'Use the platform only for lawful purposes',
        'Treat all parties with respect and professionalism',
        'Report any issues or violations to our support team',
        'Comply with local laws and regulations'
      ]
    },
    {
      id: 'payment-terms',
      title: 'Payment Terms',
      icon: CurrencyDollarIcon,
      content: [
        'Platform fees are clearly disclosed before booking confirmation',
        'Payments are processed securely through our payment partners',
        'Helper payments are released after service completion',
        'Refunds are subject to our refund policy terms',
        'Price disputes must be reported within 48 hours',
        'All prices are inclusive of applicable taxes'
      ]
    },
    {
      id: 'liability-limitations',
      title: 'Liability Limitations',
      icon: ShieldCheckIcon,
      content: [
        'EzyHelpers acts as an intermediary platform only',
        'We are not liable for helper performance or service quality',
        'Maximum liability is limited to platform fees paid',
        'Users assume responsibility for property and personal safety',
        'Insurance coverage details are provided separately',
        'Force majeure events exempt us from liability'
      ]
    },
    {
      id: 'prohibited-conduct',
      title: 'Prohibited Conduct',
      icon: XCircleIcon,
      content: [
        'Harassment, discrimination, or abusive behavior',
        'Providing false information or fraudulent activities',
        'Circumventing platform fees or payment systems',
        'Sharing contact information to avoid platform usage',
        'Posting inappropriate content or spam',
        'Attempting to hack or disrupt platform operations'
      ]
    },
    {
      id: 'termination',
      title: 'Account Termination',
      icon: ExclamationTriangleIcon,
      content: [
        'Either party may terminate their account with notice',
        'We may suspend accounts for terms violations',
        'Pending transactions will be completed before termination',
        'Some obligations survive account termination',
        'Banned users cannot create new accounts',
        'Data retention follows our privacy policy'
      ]
    },
    {
      id: 'dispute-resolution',
      title: 'Dispute Resolution',
      icon: ScaleIcon,
      content: [
        'First attempt resolution through our support team',
        'Mediation services available for unresolved disputes',
        'Arbitration may be required for certain disputes',
        'Class action lawsuits are waived where permitted',
        'Governing law is Indian jurisdiction',
        'Legal proceedings must be filed within one year'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-orange-700 to-red-800 text-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Terms of
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                    Service
                  </span>
                </h1>
                <p className="text-xl text-amber-100 leading-relaxed max-w-4xl mx-auto">
                  These terms govern your use of EzyHelpers platform and services. 
                  Please read carefully to understand your rights and responsibilities.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <ScaleIcon className="w-5 h-5 text-yellow-300" />
                  <span className="text-amber-100">Legally Binding</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <ShieldCheckIcon className="w-5 h-5 text-green-300" />
                  <span className="text-amber-100">Fair & Transparent</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <CalendarDaysIcon className="w-5 h-5 text-blue-300" />
                  <span className="text-amber-100">Effective: Dec 2024</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Key Terms Summary
                </h2>
                <p className="text-lg text-gray-600">
                  Essential points about using our platform and services
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: UserIcon,
                    title: "Platform Role",
                    description: "We connect customers with helpers but don't provide services directly",
                    color: "text-orange-600",
                    bgColor: "bg-orange-50"
                  },
                  {
                    icon: CurrencyDollarIcon,
                    title: "Payment Protection",
                    description: "Secure payments with clear fees and refund policies for your protection",
                    color: "text-amber-600",
                    bgColor: "bg-amber-50"
                  },
                  {
                    icon: ScaleIcon,
                    title: "Fair Usage",
                    description: "All users must follow our guidelines for respectful and lawful platform use",
                    color: "text-red-600",
                    bgColor: "bg-red-50"
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

        {/* Detailed Terms Sections */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {sections.map((section, index) => (
                <div key={section.id} className="group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                      <section.icon className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-300">
                        {section.title}
                      </h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 group-hover:shadow-lg transition-all duration-300">
                    <ul className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notices */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Important Legal Notices
                </h2>
                <p className="text-lg text-gray-600">
                  Additional terms and conditions you should be aware of
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: ExclamationTriangleIcon,
                    title: "Limitation of Liability",
                    content: "Our liability is limited to the platform fees you have paid. We are not responsible for helper performance, property damage, or personal injury.",
                    color: "border-yellow-200 bg-yellow-50",
                    iconColor: "text-yellow-600"
                  },
                  {
                    icon: ClockIcon,
                    title: "Service Availability",
                    content: "Platform availability may vary due to maintenance, technical issues, or other factors. We strive for 99.9% uptime but cannot guarantee continuous access.",
                    color: "border-blue-200 bg-blue-50",
                    iconColor: "text-blue-600"
                  },
                  {
                    icon: ShieldCheckIcon,
                    title: "Verification Process",
                    content: "While we verify helper credentials, you are responsible for your own safety. Always meet helpers in person before finalizing arrangements.",
                    color: "border-green-200 bg-green-50",
                    iconColor: "text-green-600"
                  },
                  {
                    icon: DocumentTextIcon,
                    title: "Terms Updates",
                    content: "We may update these terms periodically. Significant changes will be communicated via email and platform notifications.",
                    color: "border-purple-200 bg-purple-50",
                    iconColor: "text-purple-600"
                  }
                ].map((notice, index) => (
                  <div key={index} className={`group border-2 ${notice.color} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    <div className="flex items-start gap-4">
                      <notice.icon className={`w-8 h-8 ${notice.iconColor} mt-1 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`} />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{notice.title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{notice.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Legal Contact */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Legal Questions?
                </h2>
                <p className="text-lg text-gray-600">
                  Contact our legal team for terms clarification or legal matters
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[
                    {
                      icon: EnvelopeIcon,
                      title: "Legal Department",
                      info: "contact@ezyhelpers.com",
                      description: "For contract disputes and legal matters"
                    },
                    {
                      icon: PhoneIcon,
                      title: "Legal Helpline",
                      info: "+91 9972571005",
                      description: "Available Mon-Fri, 10 AM - 5 PM"
                    }
                  ].map((contact, index) => (
                    <div key={index} className="group flex items-start gap-4 p-4 bg-white hover:bg-orange-50 rounded-xl transition-all duration-300 transform hover:scale-105">
                      <contact.icon className="w-6 h-6 text-orange-600 mt-1 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{contact.title}</h3>
                        <p className="text-orange-600 font-medium mb-1">{contact.info}</p>
                        <p className="text-gray-600 text-sm">{contact.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal Compliance Officer</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Name:</strong> Advocate Rajesh Kumar</p>
                    <p><strong>Bar Registration:</strong> Maharashtra Bar Council</p>
                    <p><strong>Specialization:</strong> Technology & Contract Law</p>
                    <p><strong>Experience:</strong> 12+ years</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-orange-100 rounded-xl">
                <div className="flex items-start gap-3">
                  <ScaleIcon className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Governing Law</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      These terms are governed by the laws of India. Any disputes will be subject to the 
                      exclusive jurisdiction of courts in Bangalore, Karnataka. We encourage mediation 
                      before legal proceedings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Effective Date */}
        <section className="py-12 bg-orange-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 text-orange-700">
              <CalendarDaysIcon className="w-5 h-5" />
              <span className="text-sm">
                These Terms of Service are effective from December 15, 2024. 
                Previous versions are archived and available upon request.
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 