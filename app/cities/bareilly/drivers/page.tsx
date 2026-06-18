import type { Metadata } from 'next'
import DbHtmlContent from '@/components/DbHtmlContent'
import { getHtmlContent } from '@/lib/htmlContentSource'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'
import { PhoneIcon } from '@heroicons/react/24/outline'
import NestCTA from '@/components/NestCTA'

export const metadata: Metadata = {
  title: 'Personal Drivers in Bareilly – Safe & Trusted Travel',
  description: 'Book experienced and licensed drivers in Bareilly for personal or family use. Choose from hourly, full-day, or live-in driver service options.',
  openGraph: {
    title: 'Personal Drivers in Bareilly – Safe & Trusted Travel',
    description: 'Book experienced and licensed drivers in Bareilly for personal or family use. Choose from hourly, full-day, or live-in driver service options.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/drivers',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/drivers'
  }
}

export default async function BareillyDriversPage() {
  const __dbHtml = await getHtmlContent("cities/bareilly/drivers")
  if (__dbHtml) return <DbHtmlContent content={__dbHtml} />

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Are drivers in Bareilly RTO licensed and verified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all drivers in Bareilly provided by EzyHelpers are RTO licensed and background-verified. Our driver services in Bareilly ensure complete safety and trust by conducting thorough checks before assigning any driver to your family or trip."
      }
    },{
      "@type": "Question",
      "name": "Can I get emergency driver services in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, EzyHelpers offers emergency driver services in Bareilly, available 24/7. Whether it's a hospital visit, medical emergency, or urgent travel need, our drivers in Bareilly are trained for fast response and immediate availability within your area."
      }
    },{
      "@type": "Question",
      "name": "Do drivers in Bareilly know local routes and traffic patterns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our drivers in Bareilly are local route experts who understand the city’s traffic, peak times, and alternate routes. Our driver services in Bareilly ensure faster, safer travel with less stress and fewer delays during daily commutes."
      }
    },{
      "@type": "Question",
      "name": "What is the difference between full-time and live-in drivers in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Full-time drivers in Bareilly work 8–12 hours a day, ideal for regular commutes. Live-in drivers offer 24/7 availability for families with frequent travel. Both driver services in Bareilly are professional, verified, and tailored to your schedule."
      }
    },{
      "@type": "Question",
      "name": "Do driver services in Bareilly include vehicle maintenance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our driver services in Bareilly cover basic vehicle support such as fuel management, mileage tracking, safe parking, and simple security checks. Drivers in Bareilly also help with cleanliness and timely fuel refills for smooth trips."
      }
    },{
      "@type": "Question",
      "name": "Can I hire a driver in Bareilly for just one day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, EzyHelpers offers on-demand drivers in Bareilly for single-day travel, events, or emergencies. Our driver services in Bareilly are flexible and quick to arrange, with professional drivers available for immediate or short-term transportation needs."
      }
    },{
      "@type": "Question",
      "name": "Do your drivers know local Bareilly routes well?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our drivers in Bareilly are highly familiar with all major areas, routes, and shortcuts. Driver services in Bareilly by EzyHelpers ensure timely arrivals, fewer delays, and a smoother experience for city, intercity, or urgent travel."
      }
    },{
      "@type": "Question",
      "name": "Can I hire a driver in Bareilly for flexible timing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our flexible driver services in Bareilly include part-time and on-demand options. You can book drivers in Bareilly for morning, evening, or specific-hour trips based on your schedule, even at short notice or weekends."
      }
    },{
      "@type": "Question",
      "name": "Can drivers in Bareilly handle different types of vehicles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, drivers in Bareilly from EzyHelpers are trained to drive hatchbacks, sedans, SUVs, and automatic or manual vehicles. Our driver services in Bareilly match you with a suitable driver based on your car type and travel needs."
      }
    }]
  };
  const serviceBadges = [
    'Local Route Experts',
    'Emergency Service',
    '100% RTO Licensed',
    '4.9★ Rating'
  ]

  const highlightMetrics = [
    { value: '5K+', label: 'Happy Families Served' },
    { value: '4.7★', label: 'Driver Ratings' },
    { value: 'Local', label: 'Driving Experts' }
  ]

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
            { label: 'Drivers' }
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
                PREMIUM DRIVER SERVICES
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-display leading-tight text-white tracking-tight drop-shadow-sm">
                Expert Drivers in Bareilly <br className="hidden md:block" /><span className="text-indigo-200">at Your Service</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-indigo-50 max-w-4xl mx-auto leading-relaxed font-medium mb-10">
                Reliable, Safe, and Trusted Driver Services for Every Need.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-8">
                <Link href="/hire-helper" className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-indigo-900 font-bold text-lg py-4 px-10 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all hover:-translate-y-1 duration-300">
                  Book a Driver Now
                </Link>

                <Link href="tel:+918031411776" className="group inline-flex items-center justify-center w-full sm:w-auto text-white font-bold text-lg py-4 px-10 rounded-2xl border-2 border-indigo-300/50 hover:bg-white/10 hover:border-white backdrop-blur-sm transition-all duration-300">
                  <PhoneIcon className="h-6 w-6 mr-2 group-hover:animate-pulse" />
                  Call +91 80 3141 1776
                </Link>
              </div>

              {/* Service Assurance Badges */}
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                {[
                  'Local Route Experts',
                  'Emergency Service',
                  '100% RTO Licensed',
                  '4.9★ Rating'
                ].map((badge, idx) => (
                  <div key={idx} className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full px-5 py-2.5 text-sm font-semibold text-white border border-white/10 shadow-inner">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{badge}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Metrics */}
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { value: '5K+', label: 'Happy Families Served' },
                  { value: '4.7★', label: 'Driver Ratings' },
                  { value: 'Local', label: 'Driving Experts' }
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
        
        {/* Why Choose Our Driver Services in Bareilly? */}
        <section className="section-padding bg-gray-50 relative">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">Why Choose Our Driver Services in Bareilly?</h2>
              <p className="text-xl text-gray-600">Your Bareilly family deserves safe, local, and dependable drivers.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                '100% RTO Licensed & Verified',
                'Fast Booking & Driver Assignment',
                'Trained for Elderly & Child Safety',
                'Polite, Punctual & Professional',
                'Flexible Timing',
                'Fuel & Vehicle Handling',
                'Dedicated Local Support Team'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-100 transition-all duration-300 group">
                  <div className="bg-indigo-50 p-3 rounded-xl group-hover:bg-indigo-100 transition-colors shrink-0">
                    <span className="text-indigo-600 font-bold">✓</span>
                  </div>
                  <span className="font-semibold text-gray-800 text-lg leading-snug pt-1">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Driver Services in Bareilly */}
        <section className="section-padding bg-white relative">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">Comprehensive Driver Services in Bareilly</h2>
              <p className="text-xl text-gray-600">From daily travel to one-time needs, our trained drivers in Bareilly offer reliable, professional, and safe transportation services for every occasion.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Daily Commutes', desc: 'Punctual drivers for office travel, school pickups, and local errands.', color: 'indigo' },
                { title: 'Airport & Outstation', desc: 'Comfortable drivers for Pantnagar Airport drops, station pickups, and intercity travel.', color: 'violet' },
                { title: 'Elderly Transport', desc: 'Patient drivers who assist seniors with respectful, careful driving for hospital visits.', color: 'pink' },
                { title: 'Emergency Support', desc: 'Quick-response drivers available on-call for urgent hospital runs and last-minute travel.', color: 'blue' },
                { title: 'Wedding & Events', desc: 'Experienced drivers for family functions helping with guest pickups and coordination.', color: 'emerald' },
                { title: 'Shopping & Errands', desc: 'Convenient transport for grocery shopping, pharmacy runs, and market visits.', color: 'amber' },
                { title: 'School Transport', desc: 'Safe school commutes with trusted drivers who know your child\'s schedule.', color: 'teal' },
                { title: 'Business Travel', desc: 'Polished drivers ideal for executives, meetings, and daily business travel.', color: 'fuchsia' }
              ].map((service, idx) => (
                <div key={idx} className={`bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:border-${service.color}-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full`}>
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-${service.color}-100 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110`}></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:text-${service.color}-700 transition-colors font-display`}>{service.title}</h3>
                    <p className="text-gray-600 flex-grow">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flexible Driver Service Options */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">Flexible Driver Service Options</h2>
              <p className="text-xl text-gray-600">Choose the driving service that best fits your transportation needs and schedule in Bareilly</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Live-In Drivers', desc: 'Round-the-clock transportation support for families with multiple cars and extensive travel requirements.', perks: ['24/7 availability', 'Multiple trips daily', 'Vehicle maintenance', 'Emergency response'] },
                { title: 'Full-Time Drivers', desc: 'Regular daily transportation for office commutes, school runs, and scheduled family trips.', perks: ['8-10 hours daily', 'Fixed schedule', 'Regular routes', 'Professional service'] },
                { title: 'On-Demand Drivers', desc: 'Trip-based flexible transportation for special occasions, airport transfers, and emergency travel needs.', perks: ['Trip-based service', 'Flexible timing', 'Special occasions', 'Emergency calls'] }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-indigo-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6 h-24">{item.desc}</p>
                  <ul className="space-y-3 border-t border-gray-100 pt-6">
                    {item.perks.map((perk, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-700 font-medium">
                        <span className="text-emerald-500 font-bold">✓</span> {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Easy 4-Step Hiring Process */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">Your Easy 4-Step Hiring Process</h2>
              <p className="text-xl text-gray-600">Hiring a reliable driver in Bareilly is simple with EzyHelpers!</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-1 bg-indigo-100 rounded-full"></div>
              
              {[
                { title: 'Tell Us Your Need', desc: 'Share your driving requirements and schedule.' },
                { title: 'We Match Drivers', desc: 'Get profiles of verified Bareilly drivers that fit your needs.' },
                { title: 'Interview & Select', desc: 'Meet the drivers and choose the best one for you.' },
                { title: 'Enjoy Your Ride', desc: 'Your chosen driver starts providing reliable service.' }
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

        {/* Explore Other Home Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">Explore Other Home Services</h2>
              <p className="text-xl text-gray-600">Complete home support services are available across Bareilly for all your household daily care needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Instant Maid Services', desc: 'Reliable maids for daily cleaning and chores.', href: '/cities/bareilly/part-time-maid', linkText: 'Learn About On-Demand Maid Services' },
                { title: 'Professional Cooks', desc: 'Experienced cooks for homely meals every day.', href: '/cities/bareilly/cooks', linkText: 'Learn About Cook Services' },
                { title: 'Home Deep Cleaning', desc: 'Thorough cleaning for sparkling homes in Bareilly.', href: '/cities/bareilly/home-deep-cleaning', linkText: 'Learn About Deep Cleaning' }
              ].map((card, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">{card.desc}</p>
                  </div>
                  <Link href={card.href} className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors inline-flex items-center gap-1 group-hover:underline">
                    {card.linkText} <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
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
              <h2 className="text-4xl md:text-5xl text-white font-bold mb-6 font-display tracking-tight">Get Your Trusted Driver Today!</h2>
              <p className="text-xl md:text-2xl mb-10 text-indigo-100 font-medium max-w-3xl mx-auto leading-relaxed">
                Don't compromise on safe transportation. Book verified, experienced drivers in Bareilly for your daily travel needs now.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-indigo-900 font-bold text-xl py-5 px-10 rounded-2xl shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                  Book Online
                </Link>
                <Link href="tel:+918031411776" className="inline-flex items-center justify-center bg-transparent text-white font-bold text-xl py-5 px-10 rounded-2xl border-2 border-indigo-300 hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
                  <PhoneIcon className="h-6 w-6 mr-2" />
                  Call +91 80 3141 1776
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Professional Driver Services Matter */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl border-l-8 border-indigo-500 bg-indigo-50/50 p-8 md:p-12 rounded-r-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Why Professional Driver Services Matter</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>Hiring a professional driver in Bareilly through EzyHelpers isn’t just about getting from one place to another; it’s about safety.</p>
              <p className="font-medium text-indigo-900 text-xl py-2">Each EzyHelpers driver in Bareilly is RTO-licensed, background-verified, and trained.</p>
              <p>With EzyHelpers, you’ll always have someone dependable behind the wheel.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">FAQs</h2>
              <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
            <FAQAccordion
              faqs={[
                {
                  question: "Are drivers in Bareilly RTO licensed and verified?",
                  answer: "Yes, all drivers in Bareilly provided by EzyHelpers are RTO licensed and background-verified. Our driver services in Bareilly ensure complete safety and trust by conducting thorough checks before assigning any driver to your family or trip."
                },
                {
                  question: "Can I get emergency driver services in Bareilly?",
                  answer: "Yes, EzyHelpers offers emergency driver services in Bareilly, available 24/7. Whether it's a hospital visit, medical emergency, or urgent travel need, our drivers in Bareilly are trained for fast response and immediate availability within your area."
                },
                {
                  question: "Do drivers in Bareilly know local routes and traffic patterns?",
                  answer: "Yes, our drivers in Bareilly are local route experts who understand the city’s traffic, peak times, and alternate routes. Our driver services in Bareilly ensure faster, safer travel with less stress and fewer delays during daily commutes."
                },
                {
                  question: "What is the difference between full-time and live-in drivers in Bareilly?",
                  answer: "Full-time drivers in Bareilly work 8–12 hours a day, ideal for regular commutes. Live-in drivers offer 24/7 availability for families with frequent travel. Both driver services in Bareilly are professional, verified, and tailored to your schedule."
                },
                {
                  question: "Do driver services in Bareilly include vehicle maintenance?",
                  answer: "Yes, our driver services in Bareilly cover basic vehicle support such as fuel management, mileage tracking, safe parking, and simple security checks. Drivers in Bareilly also help with cleanliness and timely fuel refills for smooth trips."
                },
                {
                  question: "Can I hire a driver in Bareilly for just one day?",
                  answer: "Yes, EzyHelpers offers on-demand drivers in Bareilly for single-day travel, events, or emergencies. Our driver services in Bareilly are flexible and quick to arrange, with professional drivers available for immediate or short-term transportation needs."
                },
                {
                  question: "Do your drivers know local Bareilly routes well?",
                  answer: "Yes, our drivers in Bareilly are highly familiar with all major areas, routes, and shortcuts. Driver services in Bareilly by EzyHelpers ensure timely arrivals, fewer delays, and a smoother experience for city, intercity, or urgent travel."
                },
                {
                  question: "Can I hire a driver in Bareilly for flexible timing?",
                  answer: "Yes, our flexible driver services in Bareilly include part-time and on-demand options. You can book drivers in Bareilly for morning, evening, or specific-hour trips based on your schedule, even at short notice or weekends."
                },
                {
                  question: "Can drivers in Bareilly handle different types of vehicles?",
                  answer: "Yes, drivers in Bareilly from EzyHelpers are trained to drive hatchbacks, sedans, SUVs, and automatic or manual vehicles. Our driver services in Bareilly match you with a suitable driver based on your car type and travel needs."
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
