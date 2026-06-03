import { Metadata } from 'next'
import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {
  DocumentTextIcon,
  ShieldCheckIcon,
  CurrencyRupeeIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ExclamationTriangleIcon,
  ScaleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  EyeIcon,
  LockClosedIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Terms, Privacy & Policies | EzyHelpers',
  description: 'EzyHelpers Terms of Service, Privacy Policy, Refund & Replacement Policy, and DPDP Act 2023 compliance notice. Written to be understood, not skimmed past.',
  keywords: 'terms of service, privacy policy, refund policy, DPDP Act, terms and conditions, EzyHelpers policies',
  openGraph: {
    title: 'EzyHelpers Terms, Privacy & Policies',
    description: 'Complete legal documentation for EzyHelpers. Terms of Service, Privacy Policy, Refund Policy, and compliance information.',
    url: 'https://www.ezyhelpers.com/terms-and-policies',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/terms-and-policies'
  }
}

export default function TermsAndPoliciesPage() {
  const tableOfContents = [
    { id: 'about', title: 'About this document', section: '01' },
    { id: 'definitions', title: 'Definitions', section: '02' },
    { id: 'eligibility', title: 'Eligibility & account', section: '03' },
    { id: 'services', title: 'Our services', section: '04' },
    { id: 'fees', title: 'Fees, payments & taxes', section: '05' },
    { id: 'refunds', title: 'Refund & replacement policy', section: '06' },
    { id: 'customer-obligations', title: 'Customer obligations', section: '07' },
    { id: 'helper-relationship', title: 'Helper engagement & employer status', section: '08' },
    { id: 'verification', title: 'Background verification', section: '09' },
    { id: 'liability', title: 'Limitation of liability', section: '10' },
    { id: 'privacy', title: 'Privacy policy', section: '11' },
    { id: 'dpdp', title: 'DPDP Act 2023 notice', section: '12' },
    { id: 'cookies', title: 'Cookies & tracking', section: '13' },
    { id: 'communications', title: 'WhatsApp & communications', section: '14' },
    { id: 'ip', title: 'Intellectual property', section: '15' },
    { id: 'termination', title: 'Suspension & termination', section: '16' },
    { id: 'disputes', title: 'Dispute resolution', section: '17' },
    { id: 'grievance', title: 'Grievance officer', section: '18' },
    { id: 'changes', title: 'Changes to these terms', section: '19' },
    { id: 'contact', title: 'Contact us', section: '20' },
  ]

  const feesTable = [
    { type: 'Registration Fee', amount: '₹1,499 (incl. of applicable GST)', when: 'At onboarding, one-time' },
    { type: 'Service Fee', amount: '₹20,000 – ₹25,000 (varies by category, plan, city)', when: 'On confirmation of Helper, before placement' },
    { type: 'Helper Salary', amount: 'As mutually agreed with the Helper', when: 'Paid directly by Customer to Helper, monthly' },
    { type: 'Replacement Fee', amount: 'Nil (within plan period, terms apply)', when: '—' },
  ]

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
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-slate-100 mb-4">
                  <DocumentTextIcon className="w-4 h-4 mr-2" />
                  Legal · Privacy · Refunds
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  The fine print,
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                    made plain.
                  </span>
                </h1>
                <p className="text-xl text-slate-100 leading-relaxed max-w-4xl mx-auto">
                  Everything that governs your relationship with EzyHelpers — what we promise, what you agree to, 
                  how we handle your data, and what happens if something goes wrong. Written to be understood, 
                  not skimmed past.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <CalendarDaysIcon className="w-5 h-5 text-green-300" />
                  <span className="text-slate-100">Last updated: 15 May 2026</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <CheckCircleIcon className="w-5 h-5 text-blue-300" />
                  <span className="text-slate-100">Effective: 15 May 2026</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <DocumentTextIcon className="w-5 h-5 text-purple-300" />
                  <span className="text-slate-100">Version 3.1</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <ScaleIcon className="w-5 h-5 text-orange-300" />
                  <span className="text-slate-100">India · Bengaluru jurisdiction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Contents
                </h2>
                <p className="text-lg text-gray-600">
                  Navigate to specific sections of our terms and policies
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tableOfContents.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-100 group-hover:bg-primary-100 text-gray-600 group-hover:text-primary-600 font-bold text-sm rounded-lg transition-all duration-300">
                      {item.section}
                    </div>
                    <span className="text-gray-700 group-hover:text-primary-700 font-medium transition-colors duration-300">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            
            {/* Section 1: About this document */}
            <div id="about" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                  <DocumentTextIcon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Section 01</span>
                  <h2 className="text-3xl font-bold text-gray-900">About this document</h2>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  This page is a single, consolidated legal notice covering your use of <strong>www.ezyhelpers.com</strong>, 
                  our mobile applications, our WhatsApp channels, and any service you book through EzyHelpers. It comprises 
                  our Terms of Service, Privacy Policy, Refund & Replacement Policy, and our notice under India's 
                  <strong> Digital Personal Data Protection Act, 2023</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By registering, paying any fee, or engaging a helper through EzyHelpers, you confirm that you have read 
                  and accepted these terms in full. If you do not agree with any part, please do not use the service.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
                  <p className="text-gray-700">
                    <strong className="text-blue-900">Operated by:</strong> EzyHelpers (the "Company", "we", "us"), 
                    a domestic workforce platform headquartered in Bengaluru, Karnataka, India, primarily servicing 
                    Bengaluru with operations in Bareilly and select Indian cities.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Definitions */}
            <div id="definitions" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                  <ClipboardDocumentListIcon className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Section 02</span>
                  <h2 className="text-3xl font-bold text-gray-900">Definitions</h2>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8">
                <ul className="space-y-4">
                  {[
                    { term: 'Customer / You', def: 'the individual or household engaging EzyHelpers to source a domestic helper.' },
                    { term: 'Helper', def: 'a domestic worker (housekeeping, cooking, baby care, Japa maid, elder care, driver, on-demand) sourced and verified by EzyHelpers and placed at the Customer\'s residence.' },
                    { term: 'Placement', def: 'the matching and deployment of a Helper to a Customer\'s household under an agreed plan.' },
                    { term: 'Registration Fee', def: 'the one-time non-refundable fee of ₹1,499 paid at the time of customer onboarding.' },
                    { term: 'Service Fee', def: 'the placement fee payable upon confirmation of a Helper, ranging typically between ₹20,000 and ₹25,000 depending on the Helper category and plan duration.' },
                    { term: 'Plan', def: 'the contracted duration of the placement — 1 month, 3 months, or 11 months.' },
                    { term: 'Replacement', def: 'the substitution of a placed Helper with another Helper of comparable profile during the Plan period.' },
                    { term: 'Platform', def: 'the EzyHelpers website, app, WhatsApp business number, and any related digital touchpoints.' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">{item.term}:</strong>
                        <span className="text-gray-700 ml-2">{item.def}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 3: Eligibility & account */}
            <div id="eligibility" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
                  <UserGroupIcon className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Section 03</span>
                  <h2 className="text-3xl font-bold text-gray-900">Eligibility & account</h2>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  To use EzyHelpers, you must be 18 years or older, a resident of India, and legally competent to enter 
                  into a contract under the Indian Contract Act, 1872. By creating an account or sharing your details 
                  with us, you confirm that the information you provide is accurate, current, and complete, and that 
                  you will keep it updated.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account credentials and for any 
                  activity that occurs under your account. Notify us immediately at{' '}
                  <a href="mailto:contact@ezyhelpers.com" className="text-blue-600 hover:text-blue-800 underline">
                    contact@ezyhelpers.com
                  </a>{' '}
                  if you suspect unauthorised use.
                </p>
              </div>
            </div>

            {/* Section 4: Our services */}
            <div id="services" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                  <BuildingOfficeIcon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Section 04</span>
                  <h2 className="text-3xl font-bold text-gray-900">Our services</h2>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 space-y-8">
                <p className="text-gray-700 leading-relaxed">
                  EzyHelpers operates as a hybrid workforce platform and operations company. Our role is to source, 
                  verify, train, and place Helpers at Customer households. We do not provide the domestic services 
                  ourselves — those are performed by the Helper at your residence under your direction.
                </p>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Service categories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: 'Live-in', desc: 'Full-time helpers staying at your residence — typically for housekeeping, cooking, baby care, Japa, or elder care.' },
                      { title: 'Live-out', desc: 'Part-time or full-time helpers who travel to your residence daily for defined hours and tasks.' },
                      { title: 'On-demand', desc: 'Short-duration placements for specific events, post-surgery support, post-natal care, or temporary needs.' },
                      { title: 'Specialist roles', desc: 'Drivers, trained cooks, infant-care specialists, and elder-care attendants with role-specific training.' }
                    ].map((service, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl border border-gray-100">
                        <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                        <p className="text-gray-600 text-sm">{service.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  Availability of categories may vary by city, season, and Helper supply. We do not guarantee 
                  placement of any specific Helper profile within a fixed timeframe but commit to good-faith 
                  efforts to match your requirements.
                </p>
              </div>
            </div>

            {/* Section 5: Fees, payments & taxes */}
            <div id="fees" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                  <CurrencyRupeeIcon className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Section 05</span>
                  <h2 className="text-3xl font-bold text-gray-900">Fees, payments & taxes</h2>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 space-y-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl shadow-sm overflow-hidden">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Fee type</th>
                        <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Amount</th>
                        <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">When charged</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feesTable.map((fee, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="p-4 text-gray-900 font-medium">{fee.type}</td>
                          <td className="p-4 text-gray-700">{fee.amount}</td>
                          <td className="p-4 text-gray-600">{fee.when}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    All fees are quoted in Indian Rupees and are exclusive of GST unless otherwise stated. Service Fees 
                    vary by Helper category (e.g., baby care, Japa, elder care typically command higher fees than general 
                    housekeeping), by Plan duration, and by city of placement.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Payments are accepted via UPI, bank transfer, credit/debit card, and select wallets through our 
                    payment gateway partners. A valid invoice will be issued for every payment received. Failure to pay 
                    the Service Fee in full before placement will result in the Helper not being deployed.
                  </p>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl">
                  <p className="text-gray-700">
                    <strong className="text-amber-900">Helper salary — direct payment only:</strong> The Helper's monthly 
                    salary is a direct payment from the Customer to the Helper. EzyHelpers is <strong>not a party to this 
                    transaction</strong>, does not collect, hold, route, disburse, or retain any portion of the Helper's 
                    salary, and does not act as a paymaster, agent, or employer-of-record for the Helper. The salary amount 
                    is mutually agreed between the Customer and the Helper at the time of placement.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6: Refund & replacement policy */}
            <div id="refunds" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center">
                  <ExclamationTriangleIcon className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Section 06</span>
                  <h2 className="text-3xl font-bold text-gray-900">Refund & replacement policy</h2>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 space-y-8">
                <p className="text-gray-700 leading-relaxed font-medium">
                  We've designed our policy around replacements rather than refunds, because our value to you is in 
                  supplying the right Helper — not in returning your money. Here is exactly how it works.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Registration Fee (₹1,499)</h3>
                    <p className="text-gray-700 leading-relaxed">
                      The Registration Fee is <strong>strictly non-refundable</strong> under any circumstance once paid. 
                      It covers the cost of requirement profiling, initial Helper shortlisting, onboarding administration, 
                      and access to the EzyHelpers platform — work that is performed before any placement occurs. This fee 
                      is not adjustable against the Service Fee.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Fee — replacement guarantee</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      For every Plan, you are entitled to <strong>free replacements</strong> within the Plan duration, 
                      subject to these conditions:
                    </p>
                    <ul className="space-y-3">
                      {[
                        '1-month plan: Up to 1 replacement within 30 days of placement.',
                        '3-month plan: Up to 2 replacements within 90 days of placement.',
                        '11-month plan: Up to 3 replacements within 330 days of placement.'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      A replacement is initiated when you raise a request through your assigned EzyHelpers point of contact 
                      or via{' '}
                      <a href="mailto:contact@ezyhelpers.com" className="text-blue-600 hover:text-blue-800 underline">
                        contact@ezyhelpers.com
                      </a>. The replacement Helper will be of comparable category and profile, subject to availability. 
                      Typical turnaround is 3 to 10 working days in Bengaluru.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
                  <p className="text-gray-700">
                    <strong className="text-blue-900">Good-faith principle:</strong> We honour the spirit of this policy. 
                    If you believe your case warrants exception (medical emergency, fraud by Helper, safety incident), 
                    write to our grievance officer. We review each escalation individually.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Policy Section */}
            <div id="privacy" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                  <LockClosedIcon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Section 11</span>
                  <h2 className="text-3xl font-bold text-gray-900">Privacy policy</h2>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 space-y-8">
                <p className="text-gray-700 leading-relaxed font-medium">
                  Your privacy matters. This section explains what we collect, why, and what control you have.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal data we collect</h3>
                    <ul className="space-y-3">
                      {[
                        'Identity & contact: name, phone, email, residential address, gender, date of birth.',
                        'Household profile: family composition, residence type, service requirements, special needs (e.g., elder care conditions, infant age).',
                        'Financial: payment instrument details (handled by PCI-DSS compliant payment gateways; we do not store full card data).',
                        'Communications: WhatsApp messages, call recordings (where lawfully recorded with disclosure), email correspondence.',
                        'Technical: IP address, device type, browser, cookies, app usage analytics.',
                        'Sensitive personal data: only where strictly necessary (e.g., medical context for elder/baby care matching), with explicit consent.'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Why we collect it</h3>
                    <ul className="space-y-3">
                      {[
                        'To match you with appropriate Helpers and execute placements.',
                        'To process payments, issue invoices, and meet tax obligations.',
                        'To communicate service updates, confirmations, and onboarding instructions.',
                        'To improve our service quality, train our team, and refine our matching.',
                        'To meet legal, regulatory, and law-enforcement obligations.'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Security</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We use reasonable security practices and procedures consistent with the SPDI Rules, 2011 and the DPDP Act, 2023 
                      — including encryption in transit, access controls, and periodic review. No system is perfectly secure; 
                      we encourage you to use strong passwords and keep your devices safe.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                  <PhoneIcon className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Section 20</span>
                  <h2 className="text-3xl font-bold text-gray-900">Contact us</h2>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  For any question about this policy, your account, your data, or your placement:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: EnvelopeIcon, label: 'General support', value: 'contact@ezyhelpers.com', href: 'mailto:contact@ezyhelpers.com' },
                    { icon: EnvelopeIcon, label: 'Refunds & escalations', value: 'contact@ezyhelpers.com', href: 'mailto:contact@ezyhelpers.com' },
                    { icon: EyeIcon, label: 'Privacy & data rights', value: 'contact@ezyhelpers.com', href: 'mailto:contact@ezyhelpers.com' },
                    { icon: DocumentTextIcon, label: 'Website', value: 'www.ezyhelpers.com', href: 'https://www.ezyhelpers.com' }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                      <contact.icon className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{contact.label}</h4>
                        <a href={contact.href} className="text-blue-600 hover:text-blue-800 underline">
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  ))}
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
                This Terms and Policies page was last updated on May 15, 2026. 
                We may update this document periodically to reflect changes in our practices or applicable laws.
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}