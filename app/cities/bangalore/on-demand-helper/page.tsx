import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
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
  HeartIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'On-Demand Maid Service in Bangalore | Emergency Help',
  description:
    'Get fast, on-demand maid service in Bangalore for last-minute guests, missed maids, urgent cooking, event help, and babysitting with same-day availability.',
  openGraph: {
    title: 'On-Demand Maid Service in Bangalore | Emergency Help',
    description:
      'Instant, reliable on-demand maid and helper services in Bangalore for cleaning, cooking, babysitting and more. Same-day availability.',
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
    { name: 'Home', url: 'https://ezyhelpers.com' },
    { name: 'Cities', url: 'https://ezyhelpers.com/cities' },
    { name: 'Bangalore', url: 'https://ezyhelpers.com/cities/bangalore' },
    { name: 'On-Demand Helper', url: 'https://ezyhelpers.com/cities/bangalore/on-demand-helper' }
  ]

  const reasons = [
    {
      title: 'Last-Minute Guest Cleanup',
      description:
        'Quick cleaning support for unexpected guests to ensure your home looks neat and welcoming.',
      icon: SparklesIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Emergency Cooking or Babysitting',
      description:
        'Urgent need for a cook or babysitter? We provide quick, trusted help at your doorstep.',
      icon: HeartIcon,
      color: 'text-rose-600',
      bgColor: 'bg-rose-100'
    },
    {
      title: 'When Regular Maid is Unavailable',
      description:
        'Don’t stress if your regular maid is unavailable. Get same-day help for essential chores.',
      icon: ClockIcon,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    },
    {
      title: 'Urgent Event Help',
      description:
        'Festive rush or event at home? Hire instant helpers for cooking, serving, and post-cleaning.',
      icon: CalendarDaysIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ]

  const services = [
    {
      title: 'Emergency Cleaning Services',
      icon: HomeIcon,
      features: [
        'Same-day sweeping, mopping, and dusting',
        'Bathroom and kitchen cleaning',
        'Cupboard, counter, and clutter clearance'
      ],
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'One-Day Cook Services',
      icon: HeartIcon,
      features: ['Cook fresh, homestyle meals (veg/non-veg)', 'Support with groceries and prep', 'Clean kitchen after use'],
      gradient: 'from-rose-500 to-pink-600'
    },
    {
      title: 'Short-Term Babysitter Support',
      icon: UserGroupIcon,
      features: [
        'Child engagement, play, and homework help',
        'Meal feeding and hygiene support',
        'Short-term care for toddlers and infants'
      ],
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      title: 'Temporary Elder Care Helpers',
      icon: ShieldCheckIcon,
      features: [
        'Assist with walking, bathing, and feeding',
        'Medication reminders',
        'Companionship and updates to family'
      ],
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      title: 'Instant Technical or Domestic Repairs',
      icon: WrenchScrewdriverIcon,
      features: ['Plumbing and minor electrical issues', 'Appliance support or setup', 'Furniture assembly and basic carpentry'],
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Emergency Event Helpers',
      icon: CalendarDaysIcon,
      features: ['Event setup and decoration help', 'Kitchen and guest management', 'Post-event cleaning'],
      gradient: 'from-cyan-500 to-sky-600'
    },
    {
      title: 'Emergency School Pickup/Drop Service',
      icon: TruckIcon,
      features: ['Safe school pickups and drop-offs', 'Verified ID helpers', 'Instant coordination with schools'],
      gradient: 'from-teal-500 to-emerald-600'
    },
    {
      title: 'Festival Shopping Specialist',
      icon: ShoppingBagIcon,
      features: ['Buy groceries, gifts, decor', 'Assist with packing and carrying', 'Traditional arrangements support'],
      gradient: 'from-fuchsia-500 to-pink-600'
    },
    {
      title: 'Temporary Packing & Moving Help',
      icon: TruckIcon,
      features: ['Organize and pack kitchenware, clothes, essentials', 'Load, label, and assist movers', 'Short-notice help for tenants and bachelors'],
      gradient: 'from-slate-500 to-gray-600'
    },
    {
      title: 'On-Demand Wardrobe Organizers',
      icon: SparklesIcon,
      features: ['Sort, fold, and categorize clothing', 'Declutter and space optimization', 'Arrange wardrobe for easy access'],
      gradient: 'from-lime-500 to-green-600'
    },
    {
      title: 'Emergency Pet Care and Walking',
      icon: BoltIcon,
      description: 'Our emergency helpers provide immediate pet care support.',
      features: ['Dog walking and feeding', 'Basic grooming and playtime', 'House sitting with pet care'],
      gradient: 'from-yellow-500 to-amber-600'
    }
  ]

  const process = [
    { step: '1', title: 'Request Help Instantly', description: 'Call or book online. Share your location and exact requirement.', icon: PhoneIcon },
    { step: '2', title: 'Get Matched Immediately', description: 'We connect you with the nearest verified helper within minutes.', icon: BoltIcon },
    { step: '3', title: 'Confirm and Schedule', description: 'Review profile, finalize timing, and receive ETA updates.', icon: CalendarDaysIcon },
    { step: '4', title: 'Service Delivery', description: 'A vetted helper arrives and completes the task under supervision.', icon: CheckCircleIcon }
  ]

  const considerations = [
    'Immediate Availability Availability depends on your area and traffic. During rush hours or rain, delays are common. Book early for smoother, same-day emergency help in Bangalore.',
    'Define Service Scope Clearly Share exact needs, like kitchen deep cleaning or festival prep, so our emergency helpers arrive fully prepared, especially for unique Bangalore home environments.',
    'Transparent Hourly Rates Pay only after work is done with no hidden fees or advance payment. You’ll know the cost before service begins.'
  ]

  const bangaloreAreas = [
    'Electronic City', 'Whitefield', 'Marathahalli', 'Koramangala', 'Indiranagar',
    'Jayanagar', 'BTM Layout', 'HSR Layout', 'Sarjapur Road', 'Bannerghatta Road',
    'Yelahanka', 'Hebbal', 'Rajajinagar', 'Malleshwaram', 'Basavanagudi'
  ]

  const faqs = [
    { question: 'How quickly can I get an emergency helper in Bangalore?', answer: 'Our emergency helper in Bangalore typically arrives within 2-4 hours of booking, depending on your location and current availability. Areas like Koramangala, HSR Layout, and Indiranagar usually have faster response times.' },
    { question: 'Are emergency helpers trained for multiple tasks?', answer: 'Yes, most can handle cleaning, cooking, or care simultaneously. Just let us know in advance.' },
    { question: 'Is one-day maid in Bangalore available during festivals?', answer: 'Yes, our one day maid in Bangalore works during all major festivals including Diwali, Dussehra, Christmas, and regional celebrations. We maintain emergency helper availability for festival preparation and cleanup.' },
    { question: 'Can emergency helpers communicate in languages other than Kannada?', answer: 'Yes, we provide emergency helpers who can communicate in Hindi, English, Tamil, and Telugu, making it easier for Bangalore’s diverse population.' },
    { question: 'Are on-demand helpers verified?', answer: 'Yes, all on-demand helpers undergo background verification. Safety is ensured even for emergency and last-minute household help.' },
    { question: 'Can on-demand helpers work in apartment complexes?', answer: 'Yes, on-demand helpers understand gated community protocols, visitor registration, and apartment security procedures across Bangalore residential areas.' },
    { question: 'Can I book an emergency helper for just a few hours?', answer: 'Yes, you can book an emergency helper in Bangalore for a few hours depending on your need. Hourly pricing ensures flexibility for short tasks like quick cleaning or urgent kitchen help.' },
    { question: 'Is emergency help available in all parts of Bangalore?', answer: 'We cover most Bangalore areas including Whitefield, Bellandur, BTM Layout, Hebbal, Marathahalli, Jayanagar, and more. Availability may vary by locality and timing.' },
    { question: 'Can I book a female emergency helper in Bangalore?', answer: 'Yes, female emergency helpers are available for domestic needs, including household chores, elderly care, and kitchen work. Please specify gender preference while booking.' },
    { question: 'Are emergency helpers suitable for elderly or patient assistance?', answer: 'Yes, we provide trained helpers experienced in elderly care, including mobility assistance, companionship, and accompanying to medical appointments.' },
    { question: 'Can I request the same emergency helper again later?', answer: 'If the same helper is available, we’re happy to reassign them. Many clients prefer consistency, and we try our best to accommodate such requests.' }
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
        <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/cities/bangalore/on-demand-helper" />
        <LocalBusinessSchema {...localBusinessProps} />

        <Navbar />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <MapPinIcon className="h-5 w-5 text-yellow-300 mr-2" />
                  <span className="text-sm font-semibold">On-Demand Helpers Across Bangalore</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  On-Demand Maid Service
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">Bangalore</span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Need emergency help at home? Whether it's a last-minute mess, unexpected guests, or a missed maid visit, EzyHelpers offers instant, reliable on-demand maid and helper services in Bangalore for cleaning, cooking, babysitting, and more.
                </p>

                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Hourly Flexibility</div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Same-Day Availability</div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Emergency Support</div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Pay Per Task</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                  <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">
                      <span className="hidden sm:inline">Book On-Demand Maid</span>
                      <span className="sm:hidden">Book Now</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-primary-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300">
                    <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Call for Emergency Helper</span>
                    <span className="sm:hidden">Call Now</span>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">24-72hours</div>
                    <div className="text-primary-200 text-sm">Quick Response</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Last-Minute</div>
                    <div className="text-primary-200 text-sm">Booking Support</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">5,000+</div>
                    <div className="text-primary-200 text-sm">Bookings Completed</div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    {[SparklesIcon, HeartIcon, WrenchScrewdriverIcon, UserGroupIcon].map((Icon, idx) => (
                      <div key={idx} className="group bg-white/20 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 transition-all duration-500 transform hover:scale-105 cursor-pointer">
                        <Icon className="h-12 w-12 text-white mx-auto mb-3 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm">Service</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for On-Demand Maid Service in Bangalore?</h2>
              <p className="text-lg text-gray-600">Reliable, fast and flexible emergency helpers tailored to Bangalore’s fast-paced life.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reasons.map((item, idx) => {
                const IconComponent = (item.icon as any)
                return (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                    <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Services Do Our On-Demand Maids Offer?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Whether you're a working professional, student, or homemaker, our on-demand maid services in Bangalore are customised for your urgent or temporary needs.</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service, idx) => {
                const IconComponent = (service.icon as any)
                return (
                  <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{service.title}</h3>
                    {('description' in service) && (service as any).description && (
                      <p className="text-gray-700 mb-3">{(service as any).description}</p>
                    )}
                    <ul className="space-y-2">
                      {service.features.map((f: string, i: number) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    {service.title === 'Emergency Pet Care and Walking' && (
                      <div className="mt-4">
                        <Link href="/hire-helper" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                          Get Emergency Pet Helper
                          <ArrowRightIcon className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <Link href="/hire-helper" className="inline-flex items-center bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
                Book On-Demand Maid
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Our Emergency Helper in Bangalore in 4 Simple Steps</h2>
              <p className="text-lg text-gray-600">Follow these quick steps to book a verified emergency helper in Bangalore.</p>
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

        {/* Considerations */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Should You Consider Before Booking an Emergency Helper in Bangalore?</h2>
              <p className="text-lg text-gray-600">Quick tips to ensure faster service, better communication, and smoother same-day bookings across Bangalore.</p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <ul className="space-y-3">
                {considerations.map((tip, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                    {tip}
                  </li>
                ))}
              </ul>
              <div className="text-center mt-8">
                <Link href="/hire-helper" className="inline-flex items-center bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                  Book Online – Instant Confirmation
                </Link>
                <div className="mt-4">
                  <Link href="tel:+919972571005" className="text-primary-700 font-semibold hover:underline">Call Now for Immediate Booking</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emphasized CTA */}
        <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Don’t Let Urgent Situations Stress You – Book Your Emergency Helper Today!</h2>
              <p className="text-xl text-primary-100 mb-10 leading-relaxed">
                Whether it’s a spill, a guest, a sudden event, or an emergency cleaning task, EzyHelpers is here with trusted, fast, and skilled support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/hire-helper" className="bg-white text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl">
                  Book Online – Instant Confirmation
                </Link>
                <Link href="tel:+919972571005" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                  Call Now for Immediate Booking
                </Link>
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
                { title: 'Home Deep Cleaning in Bangalore', href: '/services/deep-cleaning', description: 'Deep cleaning for kitchen, bathroom, sofa, and floor hygiene.', cta: 'Schedule Deep Cleaning Today' }
              ].map((card, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
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

        {/* Areas */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Areas We Serve in Bangalore</h2>
              <p className="text-lg text-gray-600">Trusted emergency helper services across all Bangalore neighborhoods</p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {bangaloreAreas.map((area, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-gray-700 font-medium text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">And many more areas across Bangalore</p>
                <Link href="/hire-helper" className="inline-flex items-center bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                  Check Service in Your Area
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">FAQs</h2>
              <div className="divide-y divide-gray-200 rounded-2xl border border-gray-100 bg-white">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        

        <Footer />
      </main>
    </>
  )
}
