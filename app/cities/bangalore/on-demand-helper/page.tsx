import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
import NestCTA from '@/components/NestCTA'
import FAQAccordion from '@/components/FAQAccordion'
import {
  BoltIcon,
  ClockIcon,
  PhoneIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  MapPinIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
  CurrencyRupeeIcon,
  TruckIcon,
  ShoppingBagIcon,
  HomeIcon,
  HeartIcon,
  StarIcon,
  ScaleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Instant Maid Service in Bangalore | Same-Day Help',
  description: 'Get on-demand / instant maid service in Bangalore. Verified, background-checked helpers for same-day cleaning, cooking and one-day help. Book online now.',
  openGraph: {
    title: 'Instant Maid Service in Bangalore | Same-Day Help',
    description: 'Get on-demand / instant maid service in Bangalore. Verified, background-checked helpers for same-day cleaning, cooking and one-day help. Book online now.',
    url: 'https://www.ezyhelpers.com/cities/bangalore/on-demand-helper',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN'
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bangalore/on-demand-helper'
  }
}

export default function BangaloreOnDemandHelperPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.ezyhelpers.com' },
    { name: 'Services', url: 'https://www.ezyhelpers.com/services' },
    { name: 'Bangalore', url: 'https://www.ezyhelpers.com/cities/bangalore' },
    { name: 'On-Demand Helper', url: 'https://www.ezyhelpers.com/cities/bangalore/on-demand-helper' }
  ]

  const reasons = [
    {
      title: 'Verified, Background-Checked',
      description: 'Not anonymous strangers. Every helper is Aadhaar-verified and checked so you can open your door with confidence.',
      icon: ShieldCheckIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Same-Day & Next-Day Availability',
      description: 'Household needs do not wait. We offer fast, reliable help across Bangalore when you need it most.',
      icon: BoltIcon,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    },
    {
      title: 'Hourly & Short-Term Options',
      description: 'Book a maid on call for a single task, a few hours, one full day, or repeat visits to suit any need.',
      icon: ClockIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Transparent Hourly Rates',
      description: 'No advance payment. You only pay for the work that is done with clear rates shared upfront.',
      icon: CurrencyRupeeIcon,
      color: 'text-rose-600',
      bgColor: 'bg-rose-100'
    }
  ]

  const services = [
    {
      title: 'Same-Day Cleaning Maid',
      icon: HomeIcon,
      description: 'Get instant house help when your regular maid is absent, or guests arrive. Covers sweeping, mopping, dusting, bathroom and kitchen cleaning, and instant home cleaning services for last-minute messes.',
      bestFor: 'working professionals, parents, and hosts',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Maid for One Day',
      icon: SparklesIcon,
      description: 'A one-day maid in Bangalore covers full housekeeping plus light cooking, giving you a complete home reset for a single day with no monthly commitment.',
      bestFor: 'festival days, deep-clean weekends, and visiting family',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      title: 'Hourly Maid for a Few Hours',
      icon: ClockIcon,
      description: 'Want an online maid for 1 hour or short hourly help? Share your task and hours, and we match you with an hourly maid nearby. You pay only for the hours you book.',
      bestFor: 'small homes, bachelors, and busy schedules',
      gradient: 'from-teal-500 to-emerald-600'
    },
    {
      title: 'One-Day Cook and Kitchen Help',
      icon: HeartIcon,
      description: 'Your helper prepares fresh homestyle veg or non-veg meals, assists with groceries and prep, and cleans the kitchen afterwards, with no long-term cook needed.',
      bestFor: 'guest dinners, festival cooking, and cook-off days',
      gradient: 'from-rose-500 to-pink-600'
    },
    {
      title: 'Same-Day Babysitter',
      icon: UserGroupIcon,
      description: 'A verified babysitter engages your child with play and homework help, manages meals and hygiene, and gives short-term care for toddlers and infants under your guidance.',
      bestFor: 'sudden childcare gaps, work calls, and school holidays',
      gradient: 'from-fuchsia-500 to-pink-600'
    },
    {
      title: 'Temporary Elder Care Helper',
      icon: ShieldCheckIcon,
      description: 'The helper assists an elderly parent with walking, bathing, feeding, medication reminders, and companionship, ideal while your regular caregiver is away.',
      bestFor: 'short-notice elder support and post-discharge care',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Event and Festival Helper',
      icon: CalendarDaysIcon,
      description: 'Get instant help with setup, kitchen and guest management, serving, and post-event cleaning, plus festival shopping for groceries, gifts, and decor.',
      bestFor: 'home functions, pujas, and parties',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Packing and Moving Help',
      icon: TruckIcon,
      description: 'Helpers organise and pack kitchenware, clothes, and daily essentials, label boxes clearly, and assist your movers on short notice so the day runs smoothly.',
      bestFor: 'tenants, bachelors, and last-minute movers',
      gradient: 'from-slate-500 to-gray-600'
    },
    {
      title: 'Same-Day Pet Care',
      icon: HeartIcon,
      description: 'Get dog walking, feeding, grooming, playtime, and simple house sitting with pet care, all from a verified, trusted helper.',
      bestFor: 'pet parents travelling or stuck at work',
      gradient: 'from-lime-500 to-green-600'
    }
  ]

  const process = [
    { step: '1', title: 'Tell Us What You Need', description: 'Call or book online and share your area, date, and task.', icon: PhoneIcon },
    { step: '2', title: 'Get Matched the Same Day', description: 'We connect you with the nearest verified, background-checked helper available today.', icon: BoltIcon },
    { step: '3', title: 'Review and Confirm', description: 'Check the helper profile, fix the timing, and get a clear arrival time before you confirm.', icon: CheckCircleIcon },
    { step: '4', title: 'Help Arrives at Your Door', description: 'Your vetted helper reaches you the same day and completes the work under your guidance. You pay only after the job is done.', icon: HomeIcon }
  ]

  const bangaloreAreas = [
    'Electronic City', 'Whitefield', 'Marathahalli', 'Koramangala', 'Indiranagar',
    'Jayanagar', 'BTM Layout', 'HSR Layout', 'Sarjapur Road', 'Bannerghatta Road',
    'Yelahanka', 'Hebbal', 'Rajajinagar', 'Malleshwaram', 'Basavanagudi'
  ]

  const faqs = [
    { question: 'Can I get same-day maid service in Bangalore?', answer: 'Yes. EzyHelpers provides same-day, on-demand maid service across Bangalore for cleaning, cooking, babysitting, and more. Availability depends on your area and the time of booking, so booking earlier in the day gives you the fastest help.' },
    { question: 'Can I book a maid for just 1 hour in Bangalore?', answer: 'We offer hourly and short-task help, and you can request an online maid for 1 hour. We offer flexible hourly bookings based on the type of work and helper availability in your area. Simply tell us your requirement, and we\'ll match you with a verified helper. You pay only for the service you book.' },
    { question: 'How is this different from a 10-minute instant maid app?', answer: 'Instead of sending a different anonymous worker every time, we send a verified, background-checked helper you can trust and request again. You still get fast, same-day help, but with accountability and consistent quality.' },
    { question: 'How much does an on-demand maid cost in Bangalore?', answer: 'Pricing is hourly and fully transparent. You pay only after the work is done, with no advance payment, and you know the cost before the helper starts. Rates vary by task and number of hours.' },
    { question: 'Is a one-day maid available during festivals?', answer: 'Yes. Our one-day maid in Bangalore works during major festivals like Diwali, Dussehra, and Christmas, helping with preparation, cooking, and cleanup.' },
    { question: 'Are your on-demand helpers verified?', answer: 'Yes. Every on-demand helper is Aadhaar-verified and background-checked, so safety is ensured even for last-minute and same-day bookings.' },
    { question: 'Can I book a female maid in Bangalore?', answer: 'Yes. Female helpers are available for cleaning, cooking, childcare, and elder care. Please state your preference while booking.' },
    { question: 'Can on-demand helpers work in gated apartment complexes?', answer: 'Yes. Our helpers understand gated community protocols, visitor registration, and apartment security procedures across Bangalore.' },
    { question: 'Which areas in Bangalore do you cover?', answer: 'We cover most areas, including Whitefield, HSR Layout, Koramangala, Indiranagar, Marathahalli, BTM Layout, Hebbal, Jayanagar, and many more. If you search for maid help near me, we likely serve your locality.' }
  ]

  const localBusinessProps = {
    cityName: 'Bangalore',
    stateName: 'Karnataka',
    postalCode: '560001',
    streetAddress: 'Bangalore, Karnataka',
    latitude: 12.9716,
    longitude: 77.5946,
    specificServices: [
      'On-Demand Maid Services',
      'Emergency Helper Services',
      'One-Day Maid Services',
      'Emergency Babysitter Services',
      'Event Helper Services'
    ]
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Schema */}
        <BreadcrumbSchema items={breadcrumbs} />
        <FAQSchema faqs={faqs} aboutPage="https://www.ezyhelpers.com/cities/bangalore/on-demand-helper" />
        <LocalBusinessSchema {...localBusinessProps} />

        <Navbar />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
          </div>

          {/* Geometric Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content Column */}
                <div className="text-center lg:text-left">
                  {/* Location Badge */}
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <MapPinIcon className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-sm font-semibold">Instant Helpers Across Bangalore</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                    On-Demand / Instant Maid Service in Bangalore
                  </h1>

                  <p className="text-lg lg:text-xl text-white/95 mb-4 leading-relaxed drop-shadow-sm">
                    Need help at home today? EzyHelpers connects you with verified, background-checked helpers. Whether your regular maid is on leave, guests are arriving, or a task simply cannot wait, you get same-day support.
                  </p>
                  
                  <div className="inline-flex items-start text-left bg-white/20 backdrop-blur-md rounded-xl px-4 py-3 mb-8 border border-white/30">
                    <ShieldCheckIcon className="h-6 w-6 text-yellow-300 mr-3 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base font-medium">We are not a 10-minute gig app. We send a trusted, verified helper to your door the same day, so you get speed and reliability together.</span>
                  </div>

                  {/* Key Benefits Pills */}
                  <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/10">✓ Same-Day Availability</div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/10">✓ Hourly & One-Day Help</div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/10">✓ Verified Helpers</div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/10">✓ Pay Per Task</div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                    <a href="#on-demand-booking" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-center">
                      <span className="relative z-10">
                        <span className="hidden sm:inline">Book On-Demand Maid</span>
                        <span className="sm:hidden">Book Now</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white to-primary-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                    <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300">
                      <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                      <span className="hidden sm:inline">Call for Same-Day Helper</span>
                      <span className="sm:hidden">Call Now</span>
                    </Link>
                  </div>
                  
                  {/* Mobile Stats */}
                  <div className="grid grid-cols-3 gap-2 lg:hidden pt-6 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">Same-Day</div>
                      <div className="text-primary-200 text-xs">Availability</div>
                    </div>
                    <div className="text-center border-l border-white/20">
                      <div className="text-xl font-bold text-white">Fast</div>
                      <div className="text-primary-200 text-xs">Booking</div>
                    </div>
                    <div className="text-center border-l border-white/20">
                      <div className="text-xl font-bold text-white">100%</div>
                      <div className="text-primary-200 text-xs">Verified</div>
                    </div>
                  </div>
                </div>

                {/* Visual Column */}
                <div className="relative hidden lg:block">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-white/10 rounded-3xl transform rotate-3 scale-105"></div>
                  <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                    <div className="mb-6 text-center">
                      <div className="inline-flex items-center justify-center space-x-2 bg-white/20 rounded-full px-6 py-2 mb-2">
                        <BoltIcon className="w-5 h-5 text-yellow-400" />
                        <span className="text-white font-bold tracking-wide">SAME-DAY DISPATCH</span>
                      </div>
                    </div>
                    {/* Service Icons Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-5 text-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:shadow-xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-white/10">
                        <HomeIcon className="h-10 w-10 text-white mx-auto mb-3 group-hover:text-blue-100 group-hover:scale-110 transition-transform" />
                        <div className="text-white font-semibold text-sm">Emergency Cleaning</div>
                      </div>
                      <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-5 text-center hover:bg-gradient-to-br hover:from-rose-500 hover:to-pink-600 hover:shadow-xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-white/10">
                        <HeartIcon className="h-10 w-10 text-white mx-auto mb-3 group-hover:text-rose-100 group-hover:scale-110 transition-transform" />
                        <div className="text-white font-semibold text-sm">One-Day Cook</div>
                      </div>
                      <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-5 text-center hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-600 hover:shadow-xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-white/10">
                        <CalendarDaysIcon className="h-10 w-10 text-white mx-auto mb-3 group-hover:text-amber-100 group-hover:scale-110 transition-transform" />
                        <div className="text-white font-semibold text-sm">Event Helper</div>
                      </div>
                      <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-5 text-center hover:bg-gradient-to-br hover:from-emerald-500 hover:to-green-600 hover:shadow-xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-white/10">
                        <UserGroupIcon className="h-10 w-10 text-white mx-auto mb-3 group-hover:text-emerald-100 group-hover:scale-110 transition-transform" />
                        <div className="text-white font-semibold text-sm">Instant Babysitter</div>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-around items-center pt-6 border-t border-white/20">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">Fast</div>
                        <div className="text-primary-100 text-xs uppercase tracking-wider font-semibold">Booking</div>
                      </div>
                      <div className="w-px h-10 bg-white/20"></div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">100%</div>
                        <div className="text-primary-100 text-xs uppercase tracking-wider font-semibold">Verified</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
                  Why Choose EzyHelpers for On-Demand / Instant Maid Service in Bangalore?
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none mb-8">
                  <p className="mb-4">
                    Bangalore moves fast, and household needs do not wait. EzyHelpers gives you reliable instant maid help without the uncertainty of a random, anonymous worker. Every helper is Aadhaar-verified and background-checked, so you can open your door with confidence.
                  </p>
                  <p>
                    You can book a maid on call for a single task, a few hours, one full day, or repeat visits, and you only pay for the work that is done. That flexibility makes us a trusted choice for instant house help in Bangalore, from a single task to a full day of support.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {reasons.map((item, idx) => {
                  const IconComponent = (item.icon as any)
                  return (
                    <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-5 shadow-sm`}>
                        <IconComponent className={`h-6 w-6 ${item.color}`} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Can Your On-Demand / Instant Maid Do in Bangalore?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Each service below is matched to a real situation, so you can quickly find the help that fits your day.</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service, idx) => {
                const IconComponent = (service.icon as any)
                return (
                  <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow border border-gray-100 relative group overflow-hidden">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{service.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="mt-auto pt-4 border-t border-gray-200">
                      <div className="flex items-start text-sm text-gray-600">
                        <StarIcon className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
                        <span><strong>Best for:</strong> {service.bestFor}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-primary-100 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                  <ScaleIcon className="h-10 w-10 md:h-12 md:w-12 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">On-Demand vs Part-Time vs Full-Time Maid, Which Do You Need?</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Choose <strong>on-demand or instant maid service</strong> when the need is urgent or one-off, such as a single cleaning, a one-day cook, or a few hours of house help in Bangalore. Choose a <strong>part-time maid</strong> for daily fixed-hour chores, and a <strong>full-time or live-in maid</strong> for all-day support. Not sure which fits? Our team helps you pick the right option in minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book an On-Demand Maid in Bangalore in 4 Simple Steps</h2>
              <p className="text-lg text-gray-600">Booking same-day help takes only a few minutes, with no app download and no advance payment. Just four simple steps:</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, idx) => {
                const IconComponent = (step.icon as any)
                return (
                  <div key={idx} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-yellow-900">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Transparent Hourly Rates */}
        <section className="section-padding bg-white relative">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100 shadow-sm relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center shrink-0 border-4 border-emerald-50 transform hover:scale-105 transition-transform duration-300">
                  <CurrencyRupeeIcon className="h-10 w-10 md:h-12 md:w-12 text-emerald-600" />
                </div>
                
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Transparent Hourly Rates, No Hidden Charges</h2>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                    You pay only after the work is done, with no hidden fees and no advance payment. Hourly rates depend on the task and the number of hours, and you will always know the cost before the service begins. That keeps instant maid service in Bangalore simple, fair, and easy to plan. Book an online maid service in minutes, whether you need an instant helper near you for one hour or a one-day maid.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book on-demand */}
        <section id="on-demand-booking" className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white scroll-mt-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display text-white">Book Your On-Demand / Instant Maid in Bangalore Today</h2>
              <p className="text-xl text-primary-100 mb-10 leading-relaxed">
                A spill, a guest, a missed maid, or a sudden event, EzyHelpers brings fast, verified, same-day help to your door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/hire-helper" className="bg-white text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl text-center">
                  Book Online, Instant Confirmation
                </Link>
                <Link href="tel:+919972571005" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-center flex items-center justify-center">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call Now for Same-Day Booking
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Areas We Serve for On-Demand Maid Service in Bangalore</h2>
              <p className="text-lg text-gray-600">Trusted same-day helper service across Bangalore neighborhoods.</p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {bangaloreAreas.map((area, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-gray-700 font-medium text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">And many more areas across the city</p>
                <a href="#on-demand-booking" className="inline-flex items-center bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                  Check Service in Your Area
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Trusted Home Services by EzyHelpers</h2>
              <p className="text-lg text-gray-600">Complete household support solutions for Bangalore's busy professionals.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Driver Services in Bangalore', href: '/services/drivers', description: 'Trained, verified drivers for office commutes, school runs, and long trips.', cta: 'Book a Reliable Driver Now' },
                { title: 'Appliance Repair in Bangalore', href: '/services/appliance-repair', description: 'Fast, expert repairs for ACs, fridges, washing machines, and more.', cta: 'Get Same-Day Appliance Repair' },
                { title: 'Home Deep Cleaning in Bangalore', href: '/services/deep-cleaning', description: 'Deep cleaning for the kitchen, bathroom, sofa, and floor hygiene.', cta: 'Schedule Deep Cleaning Today' }
              ].map((card, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{card.title}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <Link href={card.href} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                    {card.cta}
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">On-Demand / Instant Maid Service Bangalore, FAQs</h2>
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        <NestCTA />
        <Footer />
      </main>
    </>
  )
}
