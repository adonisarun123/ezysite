import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'
import { PhoneIcon } from '@heroicons/react/24/outline'

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

export default function BareillyDriversPage() {
  const serviceBadges = [
    'Local Route Experts',
    'Emergency Service',
    '24/7 Driver Support',
    '100% RTO Licensed',
    '4.9★ Rating'
  ]

  const highlightMetrics = [
    { value: '5K+', label: 'Happy Families Served' },
    { value: '4.7★', label: 'Driver Ratings' },
    { value: '24–48 Hr', label: 'Driver Placement' }
  ]

  return (
    <>
      <main className="min-h-screen">
        <Navbar />

        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'Driver Services' }
          ]} 
        />
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-display leading-tight text-white">
                Expert Drivers in Bareilly at Your Service
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Reliable, Safe, and Trusted Driver Services for Every Need
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full bg-white text-blue-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book a Driver Now
                </Link>

                <Link
                  href="tel:+918031411776"
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call 080-31411776
                </Link>
              </div>

              {/* Service Assurance Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                {serviceBadges.map((b, i) => (
                  <span key={i} className="text-sm bg-white/10 border border-white/20 rounded-full px-3 py-1">
                    ✅ {b}
                  </span>
                ))}
              </div>

              {/* Highlight Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {highlightMetrics.map((m, i) => (
                  <div key={i} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-white mb-1">{m.value}</div>
                    <div className="text-blue-100">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Why Choose Our Driver Services in Bareilly? */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose Our Driver Services in Bareilly?</h2>
              <p className="text-lg text-gray-600">Your Bareilly family deserves safe, local, and dependable drivers.</p>
            </div>
            <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto text-gray-700">
              <li>• 100% RTO Licensed & Verified</li>
              <li>• Fast Booking & Driver Assignment</li>
              <li>• Trained for Elderly & Child Safety</li>
              <li>• Polite, Punctual & Professional</li>
              <li>• Flexible Timing</li>
              <li>• Fuel & Vehicle Handling</li>
              <li>• Dedicated Local Support Team</li>
            </ul>
          </div>
        </section>

        {/* Comprehensive Driver Services in Bareilly */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Comprehensive Driver Services in Bareilly</h2>
              <p className="text-lg text-gray-600">From daily travel to one-time needs, our trained drivers in Bareilly offer reliable, professional, and safe transportation services for every occasion.</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold">1.  Daily Office & School Commutes</h3>
                <p>Punctual and disciplined drivers for everyday routines like office travel, school pickups, and local errands, ensuring your day runs on schedule.</p>
              </div>
              <div>
                <h3 className="font-semibold">2.  Airport Transfers & Outstation Trips</h3>
                <p>Comfortable, dependable drivers for Pantnagar Airport drops, train station pickups, and intercity travel from Bareilly to Lucknow, Delhi, and nearby cities.</p>
              </div>
              <div>
                <h3 className="font-semibold">3.  Elderly & Family Member Transport</h3>
                <p>Patient drivers who assist seniors and family members with respectful, careful driving, ideal for hospital visits, temple trips, or local outings.</p>
              </div>
              <div>
                <h3 className="font-semibold">4.  Medical Emergency Support</h3>
                <p>Quick-response drivers available on-call for urgent hospital runs, emergency checkups, and last-minute travel, day or night.</p>
              </div>
              <div>
                <h3 className="font-semibold">5.  Wedding & Event Transport</h3>
                <p>Experienced drivers for family functions, weddings, and large gatherings, helping with guest pickups, multiple trips, and vehicle coordination.</p>
              </div>
              <div>
                <h3 className="font-semibold">6.  Shopping & Daily Errands</h3>
                <p>Convenient transport for grocery shopping, pharmacy runs, market visits, and general errands, your personal driver for stress-free local tasks.</p>
              </div>
              <div>
                <h3 className="font-semibold">7.  School Transport for Children</h3>
                <p>Safe school commutes with trusted drivers who know your child’s schedule and provide updates, ensuring peace of mind for parents.</p>
              </div>
              <div>
                <h3 className="font-semibold">8.  Business & Corporate Transport</h3>
                <p>Polished, professional drivers ideal for executives, meetings, and daily business travel with vehicle management and on-time arrivals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Flexible Driver Service Options */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Flexible Driver Service Options</h2>
              <p className="text-lg text-gray-600">Choose the driving service that best fits your transportation needs and schedule in Bareilly</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3">Live-In Drivers</h3>
                <p className="text-gray-600 mb-3">Round-the-clock transportation support for families with multiple cars and extensive travel requirements.</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• 24/7 availability</li>
                  <li>• Multiple trips daily</li>
                  <li>• Vehicle maintenance</li>
                  <li>• Emergency response</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3">Full-Time Drivers</h3>
                <p className="text-gray-600 mb-3">Regular daily transportation for office commutes, school runs, and scheduled family trips.</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• 8-10 hours daily</li>
                  <li>• Fixed schedule</li>
                  <li>• Regular routes</li>
                  <li>• Professional service</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3">On-Demand Drivers</h3>
                <p className="text-gray-600 mb-3">Trip-based flexible transportation for special occasions, airport transfers, and emergency travel needs.</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Trip-based service</li>
                  <li>• Flexible timing</li>
                  <li>• Special occasions</li>
                  <li>• Emergency calls</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Your Easy 4-Step Hiring Process */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">Your Easy 4-Step Hiring Process:</h2>
            <p className="text-gray-700 mb-4 text-center">Hiring a reliable driver in Bareilly is simple with EzyHelpers!</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Tell Us Your Need:</strong> Share your driving requirements and schedule.</li>
              <li><strong>We Match Drivers:</strong> Get profiles of verified Bareilly drivers that fit your needs.</li>
              <li><strong>Interview & Select:</strong> Meet the drivers and choose the best one for you.</li>
              <li><strong>Enjoy Your Ride:</strong> Your chosen driver starts providing reliable service.</li>
            </ol>
          </div>
        </section>

        {/* Explore Other Home Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">Explore Other Home Services</h2>
            <p className="text-lg text-gray-600 text-center mb-8">Complete home support services are available across Bareilly for all your household daily care needs</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold mb-2">Instant Maid Services</h3>
                <p className="text-gray-600">Reliable maids for daily cleaning and chores.</p>
                <Link href="/cities/bareilly/part-time-maid" className="text-blue-600 font-semibold mt-2 inline-block">Learn About On-Demand Maid Services</Link>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold mb-2">Professional Cooks</h3>
                <p className="text-gray-600">Experienced cooks for homely meals every day.</p>
                <Link href="/cities/bareilly/cooks" className="text-blue-600 font-semibold mt-2 inline-block">Learn About Cook Services</Link>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold mb-2">Home Deep Cleaning</h3>
                <p className="text-gray-600">Thorough cleaning for sparkling homes in Bareilly.</p>
                <Link href="/cities/bareilly/home-cleaning" className="text-blue-600 font-semibold mt-2 inline-block">Learn About Deep Cleaning</Link>
              </div>
            </div>
          </div>
        </section>

        

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Get Your Trusted Driver Today!</h2>
              <p className="text-xl mb-8 text-blue-100">Don't compromise on safe transportation. Book verified, experienced drivers in Bareilly for your daily travel needs now.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">Book Online</Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Informational Section */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Why Professional Driver Services Matter for Your Family's Safety & Convenience</h2>
            <p className="text-gray-700 mb-4">Hiring a professional driver in Bareilly through EzyHelpers isn’t just about getting from one place to another; it’s about ensuring every ride is safe, timely, and stress-free. Unlike informal or unverified drivers, our services are backed by a system that prioritises trust, discipline, and your daily comfort.</p>
            <p className="text-gray-700 mb-4">Each EzyHelpers driver in Bareilly is RTO-licensed, background-verified, and trained to handle both routine travel and emergency situations with care. Whether you're sending your children to school, attending a business meeting, or transporting a senior to the hospital, our drivers know how to keep the journey smooth and secure.</p>
            <p className="text-gray-700 mb-4">What sets our service apart is our focus on dependability. Drivers arrive on time, follow traffic rules diligently, and remain calm and courteous under all conditions. They also know Bareilly’s traffic patterns, shortcuts, and alternate routes, saving your time and avoiding unnecessary delays.</p>
            <p className="text-gray-700">With EzyHelpers, you don’t have to worry about availability, delays, or inconsistent service. Our full-time, live-in, and on-demand driver options ensure that whether your needs are daily or occasional, we always have a solution that fits your schedule. You’ll always have someone dependable behind the wheel, so you and your loved ones can travel with confidence.</p>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">FAQs</h2>
            <FAQAccordion
              faqs={[
                {
                  question: 'Are drivers in Bareilly RTO licensed and verified?',
                  answer: 'Yes, all drivers in Bareilly provided by EzyHelpers are RTO licensed and background-verified. Our driver services in Bareilly ensure complete safety and trust by conducting thorough checks before assigning any driver to your family or trip.'
                },
                {
                  question: 'Can I get emergency driver services in Bareilly?',
                  answer: 'Yes, EzyHelpers offers emergency driver services in Bareilly, available 24/7. Whether it\'s a hospital visit, medical emergency, or urgent travel need, our drivers in Bareilly are trained for fast response and immediate availability within your area.'
                },
                {
                  question: 'Do drivers in Bareilly know local routes and traffic patterns?',
                  answer: 'Yes, our drivers in Bareilly are local route experts who understand the city’s traffic, peak times, and alternate routes. Our driver services in Bareilly ensure faster, safer travel with less stress and fewer delays during daily commutes.'
                },
                {
                  question: 'What is the difference between full-time and live-in drivers in Bareilly?',
                  answer: 'Full-time drivers in Bareilly work 8–12 hours a day, ideal for regular commutes. Live-in drivers offer 24/7 availability for families with frequent travel. Both driver services in Bareilly are professional, verified, and tailored to your schedule.'
                },
                {
                  question: 'Do driver services in Bareilly include vehicle maintenance?',
                  answer: 'Yes, our driver services in Bareilly cover basic vehicle support such as fuel management, mileage tracking, safe parking, and simple security checks. Drivers in Bareilly also help with cleanliness and timely fuel refills for smooth trips.'
                },
                {
                  question: 'Can I hire a driver in Bareilly for just one day?',
                  answer: 'Yes, EzyHelpers offers on-demand drivers in Bareilly for single-day travel, events, or emergencies. Our driver services in Bareilly are flexible and quick to arrange, with professional drivers available for immediate or short-term transportation needs.'
                },
                {
                  question: 'Do your drivers know local Bareilly routes well?',
                  answer: 'Yes, our drivers in Bareilly are highly familiar with all major areas, routes, and shortcuts. Driver services in Bareilly by EzyHelpers ensure timely arrivals, fewer delays, and a smoother experience for city, intercity, or urgent travel.'
                },
                {
                  question: 'Can I hire a driver in Bareilly for flexible timing?',
                  answer: 'Yes, our flexible driver services in Bareilly include part-time and on-demand options. You can book drivers in Bareilly for morning, evening, or specific-hour trips based on your schedule, even at short notice or weekends.'
                },
                {
                  question: 'Can drivers in Bareilly handle different types of vehicles?',
                  answer: 'Yes, drivers in Bareilly from EzyHelpers are trained to drive hatchbacks, sedans, SUVs, and automatic or manual vehicles. Our driver services in Bareilly match you with a suitable driver based on your car type and travel needs.'
                }
              ]}
            />
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  )
}
