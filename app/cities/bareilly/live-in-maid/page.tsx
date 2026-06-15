import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'

import NestCTA from '@/components/NestCTA'
import {
  CheckCircleIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Verified Live-In Maids in Bareilly – 12-Hour Daily Support',
  description: 'Hire a verified live-in house maid in Bareilly for all-day support. Our maids stay with you and assist with cooking, cleaning, and daily household needs.',
  openGraph: {
    title: 'Verified Live-In Maids in Bareilly – 12-Hour Daily Support',
    description: 'Hire a verified live-in house maid in Bareilly for all-day support. Our maids stay with you and assist with cooking, cleaning, and daily household needs.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/live-in-maid',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/live-in-maid'
  }
}

export default function BareillyLiveInMaidPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is a live-in maid, and how does it work in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A live-in maid in Bareilly is a domestic helper who stays at your home and helps with daily tasks like cooking, cleaning, and caregiving. She typically works up to 12 hours a day but remains available for basic support throughout the day and night."
      }
    },{
      "@type": "Question",
      "name": "How fast can I hire a live-in maid in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With EzyHelpers, you can hire a live-in maid in Bareilly within 24 to 72 hours. We maintain a ready database of verified candidates for quick placement based on your needs."
      }
    },{
      "@type": "Question",
      "name": "Are EzyHelpers' live-in house maids in Bareilly verified and safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all live-in house maids in Bareilly from EzyHelpers are background verified. We check the Aadhaar local address if available and basic identity. Police verification and medical checkups can also be arranged at an extra cost for added peace of mind."
      }
    },{
      "@type": "Question",
      "name": "What services do live-in maids provide in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Live-in maids in Bareilly offer dedicated support based on specific household needs. Their services include Housekeeping – cleaning, laundry, dishwashing. Cooking – preparing UP-style meals and regional dishes. Elderly care – helping with hygiene, mobility, and medication reminders. Childcare – feeding, bathing, and engaging with children. One maid usually handles only one type of task. For example, a cooking maid will not do cleaning or baby care. You can hire different maids for different roles, such as a cook, a cleaner, a nanny, or an elderly caretaker, based on your family's needs."
      }
    },{
      "@type": "Question",
      "name": "What is the cost of hiring a live-in maid in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EzyHelpers offers transparent monthly pricing for live-in house maid in Bareilly with no hidden fees. The exact cost depends on specific services required. Contact EzyHelpers for detailed pricing based on your household needs."
      }
    },{
      "@type": "Question",
      "name": "Do live-in maids in Bareilly speak Hindi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all our maids are fluent in Hindi and understand the regional language. This makes day-to-day communication easy for your family and elders."
      }
    },{
      "@type": "Question",
      "name": "What are the working hours for live-in maids in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Live-in maids usually work up to 12 hours a day with proper rest and breaks. Since they stay at your home, they can provide occasional help beyond working hours if needed."
      }
    },{
      "@type": "Question",
      "name": "How many leave days does a live-in maid get in a month?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most maids take 2 fixed leave days per month. These are planned in advance so your household does not get disrupted."
      }
    },{
      "@type": "Question",
      "name": "What living arrangements should I provide for a live-in maid in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a live-in house maid in Bareilly, you need to provide a room, private or shared, with basic facilities like a bed, mattress or cot along with access to a bathroom. These arrangements ensure the maids comfort and maintain your family's privacy."
      }
    },{
      "@type": "Question",
      "name": "What if the maid is not suitable or leaves the job?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EzyHelpers provides replacement support. If the maid does not match your expectations or leaves, we help you find a suitable replacement quickly."
      }
    },{
      "@type": "Question",
      "name": "Are the maids trained for elderly or bedridden care?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we have maids trained in elderly support, including hygiene care, mobility assistance and routine health monitoring for conditions like diabetes or joint pain."
      }
    },{
      "@type": "Question",
      "name": "Do live-in maids in Bareilly know local cooking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, live-in maids in Bareilly are skilled in UP-style cooking and family traditions. They can prepare regional dishes like Tehri Bedai Halwa Kheer and understand festival foods and fasting rules."
      }
    }]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
            <main className="min-h-screen">
        <Navbar />
        
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'Live-In House Maid' }
          ]} 
        />
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-violet-800 to-indigo-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-48 -left-24 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-indigo-100 text-sm font-semibold tracking-wider mb-6 backdrop-blur-md">
                PREMIUM DOMESTIC HELP
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-6 font-display leading-tight tracking-tight drop-shadow-sm">
                Live-in House Maid in Bareilly <br className="hidden md:block" /><span className="text-indigo-200">– Trusted Help, 24/7</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-indigo-50 max-w-4xl mx-auto leading-relaxed font-medium mb-10">
                EzyHelpers connects you with trained, verified, Hindi-speaking live-in house maids in Bareilly for cooking, cleaning, elderly care, and complete home support.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-8">
                <Link href="/hire-helper" className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-indigo-900 font-bold text-lg py-4 px-10 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all hover:-translate-y-1 duration-300">
                  Book a Live-In Maid
                </Link>
                <Link href="tel:+918031411776" className="group inline-flex items-center justify-center w-full sm:w-auto text-white font-bold text-lg py-4 px-10 rounded-2xl border-2 border-indigo-300/50 hover:bg-white/10 hover:border-white backdrop-blur-sm transition-all duration-300">
                  <PhoneIcon className="h-6 w-6 mr-2 group-hover:animate-pulse" />
                  Call +91 80 3141 1776
                </Link>
              </div>

              {/* Service Assurance Badges */}
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                {[
                  '100% Background-Checked Maids',
                  'Support Available Even After Placement',
                  'Fluent in Hindi & Regional Languages'
                ].map((b, i) => (
                  <div key={i} className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full px-5 py-2.5 text-sm font-semibold text-white border border-white/10 shadow-inner">
                    <CheckCircleIcon className="h-5 w-5 text-emerald-400" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Metrics */}
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { value: '98%', label: 'Customer Satisfaction' },
                  { value: '24–72 Hours', label: 'Average Maid Joining Time' },
                  { value: '10,000+', label: 'Families Served in Bareilly' }
                ].map((m, i) => (
                  <div key={i} className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl group hover:bg-white/10 transition-colors duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">{m.value}</div>
                    <div className="text-indigo-200 font-medium text-sm md:text-base uppercase tracking-wider">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose EzyHelpers */}
        <section className="section-padding bg-gray-50 relative">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">Why Choose EzyHelpers for a Live-In House Maid in Bareilly?
              </h2>
              <p className="text-xl text-gray-600">Thousands of households trust our live-in maid service in Bareilly for dependable, trained, and culturally compatible home support.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Fluent in Hindi & Regional Languages',
                'Skilled in UP-Style Cooking & Family Traditions',
                'Understands Joint Family & Religious Routines',
                'Maids from Bareilly & Neighboring Villages',
                'Fast Replacements When Needed',
                'Ongoing Support After Hiring'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-100 transition-all duration-300 group">
                  <div className="bg-indigo-50 p-3 rounded-xl group-hover:bg-indigo-100 transition-colors shrink-0">
                    <CheckCircleIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <span className="font-semibold text-gray-800 text-lg leading-snug pt-1">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Specialized Live-In Maid Services for Every Household Need */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">Our Specialized Live-In Maid Services for Every Household Need</h2>
              <p className="text-xl text-gray-600">Our live-in maid services in Bareilly offer trusted, task-focused helpers who blend into your home routine and support your family’s day-to-day needs with ease.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Housekeeping */}
              <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 border border-gray-100 hover:border-indigo-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors font-display">Live-in Maid for Housekeeping</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">Maintain a clean, organised home with a live-in house maid in Bareilly focused entirely on cleanliness and hygiene.</p>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 border border-gray-50 flex-grow">
                    <p className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Duties:</p>
                    <ul className="space-y-3">
                      {['Sweeping, mopping, and dusting', 'Kitchen and bathroom sanitation', 'Laundry, ironing, and folding', 'Bed-making and dishwashing'].map((task, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-gray-700 mb-8"><span className="font-bold text-gray-900">Expertise:</span> Skilled in household hygiene and routine cleaning tasks.</p>
                  <Link href="/hire-helper" className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg w-full sm:w-auto">Book a Housekeeping Maid</Link>
                </div>
              </div>

              {/* Cooking */}
              <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 border border-gray-100 hover:border-violet-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-violet-700 transition-colors font-display">Live-in Maid for Cooking</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">Enjoy UP-style home-cooked meals every day from a dedicated live-in maid service in Bareilly that specialises in traditional recipes and family-friendly food.</p>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 border border-gray-50 flex-grow">
                    <p className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Duties:</p>
                    <ul className="space-y-3">
                      {['Preparing breakfast, lunch, and dinner', 'Regional dishes like Tehri, Bedai, Halwa, Kheer', 'Grocery assistance and post-cooking cleanup', 'Kitchen hygiene and utensil maintenance'].map((task, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0"></span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-gray-700 mb-8"><span className="font-bold text-gray-900">Expertise:</span> Trained in local cuisine, festival foods, and fasting rules.</p>
                  <Link href="/hire-helper" className="inline-flex items-center justify-center bg-violet-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-violet-700 transition-colors shadow-md hover:shadow-lg w-full sm:w-auto">Hire a Live-In Cook</Link>
                </div>
              </div>

              {/* Elderly Care */}
              <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors font-display">Live-in Maid for Elderly Care</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">Give your elders the dignity and support they deserve with a compassionate live-in house maid in Bareilly trained in elderly care.</p>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 border border-gray-50 flex-grow">
                    <p className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Duties:</p>
                    <ul className="space-y-3">
                      {['Personal hygiene, bathing, and dressing', 'Assistance with walking and medication reminders', 'Companionship and pooja preparation', 'Diet and comfort management'].map((task, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-gray-700 mb-8"><span className="font-bold text-gray-900">Expertise:</span> Support for joint pain, diabetes, and emotional well-being.</p>
                  <Link href="/hire-helper" className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg w-full sm:w-auto">Get a Live-In Elderly Caregiver</Link>
                </div>
              </div>

              {/* Babysitter */}
              <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 border border-gray-100 hover:border-pink-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors font-display">Live-In Babysitter</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">Ensure your child is cared for by a loving, attentive live-in babysitter in Bareilly who prioritizes safety and hygiene.</p>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 border border-gray-50 flex-grow">
                    <p className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Duties:</p>
                    <ul className="space-y-3">
                      {['Feeding, bathing, nap routines', 'Learning activities and playtime', 'School readiness and homework help', 'Clean environment and hygiene care'].map((task, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0"></span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-gray-700 mb-8"><span className="font-bold text-gray-900">Expertise:</span> Experienced in caring for infants and toddlers.</p>
                  <Link href="/hire-helper" className="inline-flex items-center justify-center bg-pink-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-pink-700 transition-colors shadow-md hover:shadow-lg w-full sm:w-auto">Hire a Babysitter</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs a Live-in House Maid */}
        <section className="section-padding bg-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="container-custom max-w-5xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display tracking-tight text-white">Who Needs a Live-in House Maid in Bareilly?</h2>
              <p className="text-xl text-indigo-200">A live-in house maid in Bareilly is ideal for families who need continuous, dependable support without stress.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Working Couples',
                'Joint Families',
                'Parents of Young Children',
                'Government Employees/Teachers',
                'Single Parents',
                'Families with Elderly Parents or Grandparents'
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Easy 4-Step Hiring Process */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">Our Easy 4-Step Hiring Process</h2>
              <p className="text-xl text-gray-600">Hiring a live-in maid service in Bareilly with EzyHelpers is hassle-free.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-1 bg-indigo-100 rounded-full"></div>
              
              {[
                { title: 'Consultation', desc: 'Discuss your needs with our team and choose the type of maid service you want, like cleaning, cooking, childcare, or elder care.' },
                { title: 'Maid Shortlisting', desc: 'We match you with 2–3 verified candidates based on your preferences.' },
                { title: 'Interview & Selection', desc: 'Connect with shortlisted maids via call, video or in-person interviews.' },
                { title: 'Smooth Onboarding', desc: 'Once selected, we handle the documentation, and your maid begins with a trial period. The support team stays in touch throughout.' }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-white border-4 border-indigo-100 rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:border-indigo-500 group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl font-bold text-indigo-600">{i + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Consider Before Booking */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">What to Consider Before Booking a Live-in house maid in Bareilly?</h2>
              <p className="text-xl text-gray-600">Everything You Should Know to Make the Right Hiring Decision</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: '1. Living Arrangements', desc: 'Provide a separate room or shared room based on your household setup. Basic amenities such as a bed, cot or mattress and access to a toilet and bathroom.' },
                { title: '2. Working Hours', desc: 'Live-in maids typically work up to 12 structured hours a day with appropriate breaks.' },
                { title: '3. Monthly Leave', desc: 'Maids are entitled to two days off per month, planned in advance.' },
                { title: '4. Dedicated Roles Only', desc: 'Each live-in house maid in Bareilly is assigned one key task (cleaning, cooking, childcare, or elder care) to maintain service quality.' }
              ].map((item, i) => (
                <div key={i} className="bg-indigo-50/50 p-8 rounded-3xl border border-indigo-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-indigo-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-indigo-800 to-violet-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-20 mix-blend-overlay"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl text-white font-bold mb-6 font-display tracking-tight">Get a Trusted Live-In House Maid in Bareilly Today</h2>
              <p className="text-xl md:text-2xl mb-10 text-indigo-100 font-medium max-w-3xl mx-auto leading-relaxed">
                Say goodbye to daily stress. EzyHelpers offers you experienced, locally familiar live-in house maids in Bareilly who integrate smoothly into your home and routine.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-indigo-900 font-bold text-xl py-5 px-10 rounded-2xl shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                  Book a Live-In Maid
                </Link>
                <Link href="tel:+918031411776" className="inline-flex items-center justify-center bg-transparent text-white font-bold text-xl py-5 px-10 rounded-2xl border-2 border-indigo-300 hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
                  <PhoneIcon className="h-6 w-6 mr-2" />
                  Speak to a Support Expert
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Our Other Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">Explore Our Other Services</h2>
              <p className="text-xl text-gray-600">Complete your household support system with EzyHelpers' trusted domestic services in Bareilly and beyond:</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Full-Time Maid Services', desc: 'Reliable daily help for all home chores without requiring the maid to stay.', link: '/cities/bareilly/full-time-maid', linkText: 'Learn About Full-Time Maid Services' },
                { title: 'Part-Time Maid Services', desc: 'Flexible, time-based cleaning and assistance that fits your schedule.', link: '/cities/bareilly/part-time-maid', linkText: 'Learn About Part-Time Maid Services' },
                { title: 'Instant maid service in Bareilly', desc: 'Instant household help for emergencies, guest visits, or special occasions.', link: '/cities/bareilly/on-demand-helper', linkText: 'Explore Instant Maid Service' }
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{s.title}</h3>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">{s.desc}</p>
                  </div>
                  <Link href={s.link} className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors inline-flex items-center gap-1 group-hover:underline">
                    {s.linkText} <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">FAQs</h2>
              <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
            <FAQAccordion
              faqs={[
                {
                  question: "What is a live-in maid, and how does it work in Bareilly?",
                  answer: "A live-in maid in Bareilly is a domestic helper who stays at your home and helps with daily tasks like cooking, cleaning, and caregiving. She typically works up to 12 hours a day but remains available for basic support throughout the day and night."
                },
                {
                  question: "How fast can I hire a live-in maid in Bareilly?",
                  answer: "With EzyHelpers, you can hire a live-in maid in Bareilly within 24 to 72 hours. We maintain a ready database of verified candidates for quick placement based on your needs."
                },
                {
                  question: "Are EzyHelpers' live-in house maids in Bareilly verified and safe?",
                  answer: "Yes, all live-in house maids in Bareilly from EzyHelpers are background verified. We check the Aadhaar local address if available and basic identity. Police verification and medical checkups can also be arranged at an extra cost for added peace of mind."
                },
                {
                  question: "What services do live-in maids provide in Bareilly?",
                  answer: "Live-in maids in Bareilly offer dedicated support based on specific household needs. Their services include Housekeeping – cleaning, laundry, dishwashing; Cooking – preparing UP-style meals and regional dishes; Elderly care – helping with hygiene, mobility, and medication reminders; Childcare – feeding, bathing, and engaging with children. One maid usually handles only one type of task. For example, a cooking maid will not do cleaning or baby care. You can hire different maids for different roles, such as a cook, a cleaner, a nanny, or an elderly caretaker, based on your family's needs."
                },
                {
                  question: "What is the cost of hiring a live-in maid in Bareilly?",
                  answer: "EzyHelpers offers transparent monthly pricing for live-in house maid in Bareilly with no hidden fees. The exact cost depends on specific services required. Contact EzyHelpers for detailed pricing based on your household needs."
                },
                {
                  question: "Do live-in maids in Bareilly speak Hindi?",
                  answer: "Yes, all our maids are fluent in Hindi and understand the regional language. This makes day-to-day communication easy for your family and elders."
                },
                {
                  question: "What are the working hours for live-in maids in Bareilly?",
                  answer: "Live-in maids usually work up to 12 hours a day with proper rest and breaks. Since they stay at your home, they can provide occasional help beyond working hours if needed."
                },
                {
                  question: "How many leave days does a live-in maid get in a month?",
                  answer: "Most maids take 2 fixed leave days per month. These are planned in advance so your household does not get disrupted."
                },
                {
                  question: "What living arrangements should I provide for a live-in maid in Bareilly?",
                  answer: "For a live-in house maid in Bareilly, you need to provide a room, private or shared, with basic facilities like a bed, mattress or cot along with access to a bathroom. These arrangements ensure the maid's comfort and maintain your family's privacy."
                },
                {
                  question: "What if the maid is not suitable or leaves the job?",
                  answer: "EzyHelpers provides replacement support. If the maid does not match your expectations or leaves, we help you find a suitable replacement quickly."
                },
                {
                  question: "Are the maids trained for elderly or bedridden care?",
                  answer: "Yes, we have maids trained in elderly support, including hygiene care, mobility assistance and routine health monitoring for conditions like diabetes or joint pain."
                },
                {
                  question: "Do live-in maids in Bareilly know local cooking?",
                  answer: "Yes, live-in maids in Bareilly are skilled in UP-style cooking and family traditions. They can prepare regional dishes like Tehri Bedai Halwa Kheer and understand festival foods and fasting rules."
                }
              ]}
            />
          </div>
        </section>
      </main>
      
            <NestCTA />
      <Footer />
    </>
  )
}
