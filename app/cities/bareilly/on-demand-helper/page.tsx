import type { Metadata } from 'next'
import DbHtmlContent from '@/components/DbHtmlContent'
import { getHtmlContent } from '@/lib/htmlContentSource'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'
import { CheckCircleIcon, PhoneIcon } from '@heroicons/react/24/outline'
import NestCTA from '@/components/NestCTA'

export const metadata: Metadata = {
  title: 'Instant Maid Service in Bareilly – Same-Day Help',
  description: 'Instant maid service in Bareilly offers same-day domestic help for urgent cleaning, cooking, or emergency support during events and last-minute needs.',
  openGraph: {
    title: 'Instant Maid Service in Bareilly – Same-Day Help',
    description: 'Instant maid service in Bareilly offers same-day domestic help for urgent cleaning, cooking, or emergency support during events and last-minute needs.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/on-demand-helper',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/on-demand-helper'
  }
}

export default async function BareillyOnDemandHelperPage() {
  const __dbHtml = await getHtmlContent("cities/bareilly/on-demand-helper")
  if (__dbHtml) return <DbHtmlContent content={__dbHtml} />

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How quickly can I get an instant maid service in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can get an instant maid service in Bareilly within just 2–4 hours of booking through EzyHelpers. Whether it's emergency cleaning, cooking, or elderly care, we provide quick helpers in Bareilly on the same day, based on availability, for urgent or last-minute needs."
      }
    },{
      "@type": "Question",
      "name": "What types of quick helper services does EzyHelpers offer in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EzyHelpers offers a wide range of quick helper services in Bareilly through our trusted instant maid service. These include: Same-day deep cleaning and post-event cleanup; On-demand cooking (including fasting and traditional meals); Babysitting and childcare; Elderly support and companion care; Basic nursing and patient assistance at home; Technical home maintenance services like plumbing, electrical, and carpentry; Event support for functions and religious gatherings. All helpers are trained and ready for one-time or emergency assignments."
      }
    },{
      "@type": "Question",
      "name": "How much does instant maid service in Bareilly cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of instant maid service in Bareilly is based on transparent hourly pricing. There are no hidden fees or lock-in commitments; you pay only after the work is completed to your satisfaction. Whether it’s a one-time deep clean or an urgent home maintenance service, we keep pricing clear and fair."
      }
    },{
      "@type": "Question",
      "name": "Can I get emergency cleaning on the same day in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can! EzyHelpers provides same-day emergency cleaning as part of our instant maid service in Bareilly. Within 2–4 hours of booking, our quick helpers arrive fully equipped for sweeping, mopping, kitchen sanitization, bathroom cleaning, and even post-party mess cleanup."
      }
    },{
      "@type": "Question",
      "name": "Do your quick helpers in Bareilly speak Hindi and understand local needs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our quick helpers in Bareilly are fluent in Hindi and well-acquainted with local customs, traditions, and cooking styles. Whether it’s preparing Bareilly-style meals or assisting elders with pooja routines, our instant maid service matches you with culturally aware and sensitive professionals."
      }
    },{
      "@type": "Question",
      "name": "Can I book a quick helper in Bareilly for one-time tasks only?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, definitely. EzyHelpers lets you hire a quick helper in Bareilly for single-use or short-term tasks like festival preparation, guest cleanup, or urgent home maintenance services. There’s no need to commit to a long-term plan; just book as needed, when needed."
      }
    },{
      "@type": "Question",
      "name": "Are instant maid services available during festivals or public holidays in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, EzyHelpers provides instant maid service in Bareilly even during festivals and holidays. Whether it’s Diwali cleaning, Eid preparations, or Navratri fasting meal support, we ensure quick helpers are available when regular help is unavailable."
      }
    },{
      "@type": "Question",
      "name": "What happens if my booked quick helper in Bareilly cancels at the last minute?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In the rare case of a cancellation, EzyHelpers offers a quick replacement guarantee. Our team will immediately assign another verified quick helper in Bareilly to ensure your home maintenance service or emergency task is not disrupted."
      }
    },{
      "@type": "Question",
      "name": "Can I book a quick helper in Bareilly for technical services like plumbing or appliance repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our instant maid service in Bareilly also includes trained technicians for home maintenance services like plumbing, electrical repairs, and appliance fixes. You can book these services instantly with no long wait."
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
            { label: 'Instant Help' }
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
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-display leading-tight text-white tracking-tight drop-shadow-sm">
                Instant Maid Service in Bareilly <br className="hidden md:block" /><span className="text-indigo-200">– Quick Help When You Need It Most</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-indigo-50 max-w-4xl mx-auto leading-relaxed font-medium mb-10">
                Need urgent domestic assistance? EzyHelpers offers instant maid service in Bareilly, ideal for emergency situations, sudden guests, or one-time events. Our quick helpers are available within 2–4 hours!
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-8">
                <Link href="/hire-helper" className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-indigo-900 font-bold text-lg py-4 px-10 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all hover:-translate-y-1 duration-300">
                  Book an Instant Maid
                </Link>
                <Link href="tel:+918031411776" className="group inline-flex items-center justify-center w-full sm:w-auto text-white font-bold text-lg py-4 px-10 rounded-2xl border-2 border-indigo-300/50 hover:bg-white/10 hover:border-white backdrop-blur-sm transition-all duration-300">
                  <PhoneIcon className="h-6 w-6 mr-2 group-hover:animate-pulse" />
                  Call +91 80 3141 1776
                </Link>
              </div>

              {/* Service Assurance Badges */}
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                {[
                  'Verified & Trained Emergency Helpers',
                  'Same-Day Availability (within 2–4 hours)',
                  'Hourly Pricing, No Commitment'
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
                  { value: 'Instant', label: 'Booking & Confirmation' },
                  { value: 'Available', label: '7 Days a Week' },
                  { value: '4.8★ Rating', label: 'For Instant Maid Services in Bareilly' }
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
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">Why Choose EzyHelpers for Instant Maid Service in Bareilly?</h2>
              <p className="text-xl text-gray-600">Our instant maid service in Bareilly ensures prompt, reliable, and skilled help for all unplanned domestic needs. We're trusted by Bareilly families for fast and dependable service.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Trained, Background-Verified Helpers',
                'No Long-Term Commitment Required',
                'Transparent Hour-Based Pricing',
                'Familiar with Local Traditions & Needs',
                'Hindi-Speaking Bareilly Helpers',
                'Specializing in Home Maintenance Services'
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

        {/* Our Specialized Instant Maid Services for Every Urgent Need */}
        <section className="section-padding bg-white relative">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">Our Specialized Instant Maid Services for Every Urgent Need</h2>
              <p className="text-xl text-gray-600">From festival prep to family emergencies, our quick helpers in Bareilly are trained to handle your urgent home requirements right when you need them.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Emergency Cleaning */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-indigo-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-100 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors font-display">Emergency Home Cleaning</h3>
                  <p className="text-gray-600 mb-6 flex-grow">Expecting guests or preparing for a pooja? Our cleaning experts are just a call away for quick, reliable home cleaning.</p>
                  
                  <div className="bg-white rounded-2xl p-5 shadow-sm mb-6 border border-gray-50">
                    <p className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wide">What they do:</p>
                    <ul className="space-y-2 text-sm">
                      {['Sweeping, mopping, and dusting', 'Kitchen & bathroom sanitization', 'Post-party or festival cleaning', 'Room organization'].map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 font-medium">
                          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-indigo-500 shrink-0"></span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/hire-helper" className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg w-full">Book Cleaning Helper</Link>
                </div>
              </div>

              {/* Cooking */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-violet-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-violet-100 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-violet-700 transition-colors font-display">On-Demand Cooking</h3>
                  <p className="text-gray-600 mb-6 flex-grow">Our instant cooks prepare Bareilly-style meals, snacks, or vrat food with hygiene and care.</p>
                  
                  <div className="bg-white rounded-2xl p-5 shadow-sm mb-6 border border-gray-50">
                    <p className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wide">What they do:</p>
                    <ul className="space-y-2 text-sm">
                      {['North Indian veg/non-veg meals', 'Fasting food (Navratri, Karva Chauth)', 'Cooking for events or functions', 'Kitchen cleanup post-cooking'].map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 font-medium">
                          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-violet-500 shrink-0"></span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/hire-helper" className="inline-flex items-center justify-center bg-violet-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-violet-700 transition-colors shadow-md hover:shadow-lg w-full">Hire Quick Cook</Link>
                </div>
              </div>

              {/* Babysitting */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-pink-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-pink-100 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors font-display">Emergency Babysitter</h3>
                  <p className="text-gray-600 mb-6 flex-grow">Need help with kids while you're busy or out? Our trained babysitters step in instantly.</p>
                  
                  <div className="bg-white rounded-2xl p-5 shadow-sm mb-6 border border-gray-50">
                    <p className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wide">What they do:</p>
                    <ul className="space-y-2 text-sm">
                      {['Feeding, bathing, and hygiene', 'Storytelling and age-appropriate play', 'Holiday or emergency supervision', 'School drop/pickup support'].map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 font-medium">
                          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-pink-500 shrink-0"></span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/hire-helper" className="inline-flex items-center justify-center bg-pink-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-pink-700 transition-colors shadow-md hover:shadow-lg w-full">Get Babysitting Help</Link>
                </div>
              </div>

              {/* Elderly Care */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors font-display">Elder Care Support</h3>
                  <p className="text-gray-600 mb-6 flex-grow">If your regular caregiver is away, we provide respectful and gentle elderly support on short notice.</p>
                  
                  <div className="bg-white rounded-2xl p-5 shadow-sm mb-6 border border-gray-50">
                    <p className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wide">What they do:</p>
                    <ul className="space-y-2 text-sm">
                      {['Help with walking & medicine', 'Emotional companionship', 'Cleanliness and hygiene assistance', 'Light home support and rituals'].map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 font-medium">
                          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-500 shrink-0"></span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/hire-helper" className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg w-full">Book Elderly Care</Link>
                </div>
              </div>

              {/* Patient Care */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-emerald-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors font-display">Patient & Nursing Care</h3>
                  <p className="text-gray-600 mb-6 flex-grow">Need short-term support for someone unwell at home? We provide trained medical helpers.</p>
                  
                  <div className="bg-white rounded-2xl p-5 shadow-sm mb-6 border border-gray-50">
                    <p className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wide">What they do:</p>
                    <ul className="space-y-2 text-sm">
                      {['Medication and vitals monitoring', 'Support with daily movement', 'Hygiene care for recovery patients'].map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 font-medium">
                          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0"></span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/hire-helper" className="inline-flex items-center justify-center bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg w-full">Book Patient Care</Link>
                </div>
              </div>

              {/* Event Help */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-amber-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors font-display">Instant Event Help</h3>
                  <p className="text-gray-600 mb-6 flex-grow">Planning a wedding, pooja, or family event? Our event support helpers ensure smooth execution.</p>
                  
                  <div className="bg-white rounded-2xl p-5 shadow-sm mb-6 border border-gray-50">
                    <p className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wide">What they do:</p>
                    <ul className="space-y-2 text-sm">
                      {['Pre-function home prep', 'Guest service and food help', 'Kitchen & utensil management', 'Post-event cleaning'].map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 font-medium">
                          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 shrink-0"></span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/hire-helper" className="inline-flex items-center justify-center bg-amber-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg w-full">Book Event Helper</Link>
                </div>
              </div>
            </div>

            {/* Technical Home Maintenance Services - Full width card */}
            <div className="mt-8 bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-teal-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors font-display">Technical Home Maintenance Services</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">Facing plumbing, electrical, or carpentry issues? We have instant technicians ready to fix them.</p>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 border border-gray-50">
                    <p className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">What they do:</p>
                    <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
                      {['Fix fan, light, wiring, or switches', 'Tap leaks, drainage & water tank issues', 'Furniture repairs and home fixes', 'Fridge, cooler, and washing machine repairs'].map((task, idx) => (
                        <li key={idx} className="flex items-center gap-3 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/hire-helper" className="inline-flex items-center justify-center bg-teal-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg w-full sm:w-auto">Book Maintenance Support</Link>
                </div>
            </div>
          </div>
        </section>

        {/* Our Easy 4-Step Hiring Process */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">Easy 4-Step Booking for Instant Maids in Bareilly</h2>
              <p className="text-xl text-gray-600">Getting a quick helper in Bareilly is hassle-free with our 4-step process:</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-1 bg-indigo-100 rounded-full"></div>
              
              {[
                { title: 'Consultation', desc: 'Discuss your needs with our team and choose the type of emergency helper you want.' },
                { title: 'Maid Shortlisting', desc: 'We match you with 2–3 verified candidates based on your preferences.' },
                { title: 'Interview & Selection', desc: 'Connect with shortlisted helpers via call, video, or in-person interviews.' },
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
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">What to Consider Before Booking Quick Helpers in Bareilly?</h2>
              <p className="text-xl text-gray-600">Everything You Should Know to Make the Right Hiring Decision</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: '1. Real-Time Availability', desc: 'Helpers are dispatched within 2–4 hours, depending on your location in Bareilly. Book early during peak festivals.' },
                { title: '2. Clear Task Details', desc: 'Explain the service needed (e.g., “post-Holi cleanup” or “elderly meal support”) for a better match and preparedness.' },
                { title: '3. Transparent Hourly Pricing', desc: 'You’ll know the total cost before starting. No hidden charges, and payment only after satisfaction.' }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                  <h3 className="text-xl font-bold text-indigo-900 mb-4">{item.title}</h3>
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
              <h2 className="text-4xl md:text-5xl text-white font-bold mb-6 font-display tracking-tight">Get a Trusted Quick Helper in Bareilly – EzyHelpers is Just a Call Away</h2>
              <p className="text-xl md:text-2xl mb-10 text-indigo-100 font-medium max-w-3xl mx-auto leading-relaxed">
                From last-minute events to daily home emergencies, our quick helpers and instant maid services in Bareilly are your reliable local solution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-indigo-900 font-bold text-xl py-5 px-10 rounded-2xl shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                  Book Instant Help Now
                </Link>
                <Link href="tel:+918031411776" className="inline-flex items-center justify-center bg-transparent text-white font-bold text-xl py-5 px-10 rounded-2xl border-2 border-indigo-300 hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
                  <PhoneIcon className="h-6 w-6 mr-2" />
                  Call +91 80 3141 1776
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
                { title: 'Cook Services', desc: 'Skilled home cooks for daily meals, fasting food, or festive dishes.', link: '/cities/bareilly/cooks', linkText: 'Explore Cook Services' },
                { title: 'Babysitter/Nanny Services', desc: 'Caring and experienced nannies for infants, toddlers, and school-age kids.', link: '/cities/bareilly/babysitter', linkText: 'Hire a Trusted Babysitter' },
                { title: 'Elderly Care Services', desc: 'Compassionate support for seniors, including mobility, hygiene, and medication care.', link: '/cities/bareilly/elderly-care', linkText: 'Discover Elderly Care Options' }
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
                  question: "How quickly can I get an instant maid service in Bareilly?",
                  answer: "You can get an instant maid service in Bareilly within just 2–4 hours of booking through EzyHelpers. Whether it's emergency cleaning, cooking, or elderly care, we provide quick helpers in Bareilly on the same day, based on availability, for urgent or last-minute needs."
                },
                {
                  question: "What types of quick helper services does EzyHelpers offer in Bareilly?",
                  answer: "EzyHelpers offers a wide range of quick helper services in Bareilly through our trusted instant maid service. These include: Same-day deep cleaning and post-event cleanup; On-demand cooking (including fasting and traditional meals); Babysitting and childcare; Elderly support and companion care; Basic nursing and patient assistance at home; Technical home maintenance services like plumbing, electrical, and carpentry; Event support for functions and religious gatherings. All helpers are trained and ready for one-time or emergency assignments."
                },
                {
                  question: "How much does instant maid service in Bareilly cost?",
                  answer: "The cost of instant maid service in Bareilly is based on transparent hourly pricing. There are no hidden fees or lock-in commitments; you pay only after the work is completed to your satisfaction. Whether it’s a one-time deep clean or an urgent home maintenance service, we keep pricing clear and fair."
                },
                {
                  question: "Can I get emergency cleaning on the same day in Bareilly?",
                  answer: "Yes, you can! EzyHelpers provides same-day emergency cleaning as part of our instant maid service in Bareilly. Within 2–4 hours of booking, our quick helpers arrive fully equipped for sweeping, mopping, kitchen sanitization, bathroom cleaning, and even post-party mess cleanup."
                },
                {
                  question: "Do your quick helpers in Bareilly speak Hindi and understand local needs?",
                  answer: "Yes, our quick helpers in Bareilly are fluent in Hindi and well-acquainted with local customs, traditions, and cooking styles. Whether it’s preparing Bareilly-style meals or assisting elders with pooja routines, our instant maid service matches you with culturally aware and sensitive professionals."
                },
                {
                  question: "Can I book a quick helper in Bareilly for one-time tasks only?",
                  answer: "Yes, definitely. EzyHelpers lets you hire a quick helper in Bareilly for single-use or short-term tasks like festival preparation, guest cleanup, or urgent home maintenance services. There’s no need to commit to a long-term plan; just book as needed, when needed."
                },
                {
                  question: "Are instant maid services available during festivals or public holidays in Bareilly?",
                  answer: "Yes, EzyHelpers provides instant maid service in Bareilly even during festivals and holidays. Whether it’s Diwali cleaning, Eid preparations, or Navratri fasting meal support, we ensure quick helpers are available when regular help is unavailable."
                },
                {
                  question: "What happens if my booked quick helper in Bareilly cancels at the last minute?",
                  answer: "In the rare case of a cancellation, EzyHelpers offers a quick replacement guarantee. Our team will immediately assign another verified quick helper in Bareilly to ensure your home maintenance service or emergency task is not disrupted."
                },
                {
                  question: "Can I book a quick helper in Bareilly for technical services like plumbing or appliance repair?",
                  answer: "Yes. Our instant maid service in Bareilly also includes trained technicians for home maintenance services like plumbing, electrical repairs, and appliance fixes. You can book these services instantly with no long wait."
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
