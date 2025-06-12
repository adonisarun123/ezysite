import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  ShieldCheckIcon,
  EyeIcon,
  LockClosedIcon,
  DocumentTextIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: DocumentTextIcon,
      content: [
        'Personal information you provide (name, email, phone number, address)',
        'Service preferences and booking history',
        'Payment information (processed securely through encrypted channels)',
        'Communication records between you and our support team',
        'Device information and usage analytics for service improvement'
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: EyeIcon,
      content: [
        'To provide and improve our home services platform',
        'To match you with suitable helpers based on your requirements',
        'To process payments and manage your bookings',
        'To communicate important updates about your services',
        'To ensure safety and security for all platform users',
        'To comply with legal obligations and resolve disputes'
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: UserIcon,
      content: [
        'With verified helpers to facilitate service provision',
        'With payment processors for secure transaction handling',
        'With law enforcement when required by law',
        'With service providers who assist in platform operations',
        'We never sell your personal information to third parties'
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: LockClosedIcon,
      content: [
        'Industry-standard encryption for all sensitive data',
        'Regular security audits and vulnerability assessments',
        'Secure data storage with restricted access controls',
        'Employee training on data protection best practices',
        'Incident response procedures for any security breaches'
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      icon: CheckCircleIcon,
      content: [
        'Access your personal information we have on file',
        'Request correction of inaccurate or incomplete data',
        'Request deletion of your account and associated data',
        'Opt-out of marketing communications at any time',
        'Data portability - receive your data in a standard format',
        'File complaints with relevant data protection authorities'
      ]
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking',
      icon: ExclamationTriangleIcon,
      content: [
        'Essential cookies for platform functionality',
        'Analytics cookies to understand user behavior',
        'Marketing cookies for personalized advertisements',
        'Third-party cookies from integrated services',
        'You can manage cookie preferences through your browser settings'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-600 via-gray-700 to-zinc-800 text-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Privacy
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                    Policy
                  </span>
                </h1>
                <p className="text-xl text-slate-100 leading-relaxed max-w-4xl mx-auto">
                  Your privacy is important to us. This policy explains how we collect, use, 
                  and protect your personal information when you use EzyHelpers services.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <ShieldCheckIcon className="w-5 h-5 text-green-300" />
                  <span className="text-slate-100">GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <LockClosedIcon className="w-5 h-5 text-blue-300" />
                  <span className="text-slate-100">Secure & Encrypted</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <CalendarDaysIcon className="w-5 h-5 text-purple-300" />
                  <span className="text-slate-100">Last Updated: Dec 2024</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Privacy at a Glance
                </h2>
                <p className="text-lg text-gray-600">
                  Key points about how we handle your personal information
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: ShieldCheckIcon,
                    title: "Data Protection",
                    description: "We use industry-standard security measures to protect your personal information",
                    color: "text-green-600",
                    bgColor: "bg-green-50"
                  },
                  {
                    icon: UserIcon,
                    title: "Limited Sharing",
                    description: "We only share necessary information with verified helpers to provide services",
                    color: "text-blue-600",
                    bgColor: "bg-blue-50"
                  },
                  {
                    icon: CheckCircleIcon,
                    title: "Your Control",
                    description: "You have full control over your data with rights to access, modify, or delete",
                    color: "text-purple-600",
                    bgColor: "bg-purple-50"
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

        {/* Detailed Sections */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {sections.map((section, index) => (
                <div key={section.id} className="group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-gray-100 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                      <section.icon className="w-8 h-8 text-slate-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-slate-700 transition-colors duration-300">
                        {section.title}
                      </h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-slate-400 to-gray-400 rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 group-hover:shadow-lg transition-all duration-300">
                    <ul className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
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

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Questions About Privacy?
                </h2>
                <p className="text-lg text-gray-600">
                  Our Data Protection Officer is here to help with any privacy concerns
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[
                    {
                      icon: EnvelopeIcon,
                      title: "Email Us",
                      info: "contact@ezyhelpers.com",
                      description: "Get responses within 48 hours"
                    },
                    {
                      icon: PhoneIcon,
                      title: "Call Our Privacy Hotline",
                      info: "+91 9972571005",
                      description: "Available Mon-Fri, 9 AM - 6 PM"
                    }
                  ].map((contact, index) => (
                    <div key={index} className="group flex items-start gap-4 p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all duration-300 transform hover:scale-105">
                      <contact.icon className="w-6 h-6 text-slate-600 mt-1 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{contact.title}</h3>
                        <p className="text-slate-600 font-medium mb-1">{contact.info}</p>
                        <p className="text-gray-600 text-sm">{contact.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Protection Officer</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Name:</strong> Priya Sharma</p>
                    <p><strong>Certification:</strong> CIPP/E, CIPM</p>
                    <p><strong>Experience:</strong> 8+ years in data privacy</p>
                    <p><strong>Languages:</strong> English, Hindi, Tamil</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <div className="flex items-start gap-3">
                  <DocumentTextIcon className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Filing a Privacy Complaint</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      If you believe your privacy rights have been violated, you can file a complaint with us or directly 
                      with the relevant data protection authority in your jurisdiction. We are committed to resolving all 
                      privacy concerns promptly and transparently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-12 bg-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 text-slate-600">
              <CalendarDaysIcon className="w-5 h-5" />
              <span className="text-sm">
                This Privacy Policy was last updated on December 15, 2024. 
                We may update this policy periodically to reflect changes in our practices or applicable laws.
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 