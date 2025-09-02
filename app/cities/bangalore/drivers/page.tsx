import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
import FAQAccordion from '@/components/FAQAccordion'
import {
  MapPinIcon,
  ShieldCheckIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  UserGroupIcon,
  MapIcon,
  PaperAirplaneIcon,
  TruckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Car Driver in Bangalore | Daily & Outstation',
  description:
    'Get reliable personal car driver services in Bangalore for daily commutes, office travel & family transportation with experienced drivers.',
  openGraph: {
    title: 'Car Driver in Bangalore | Daily & Outstation',
    description:
      'Professional chauffeur services in Bangalore: on-demand, full-time, and live-in drivers. Safe, punctual, background-verified.',
    url: 'https://ezyhelpers.com/cities/bangalore/drivers',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN'
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/cities/bangalore/drivers'
  }
}

export default function BangaloreDriversPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://ezyhelpers.com' },
    { name: 'Cities', url: 'https://ezyhelpers.com/cities' },
    { name: 'Bangalore', url: 'https://ezyhelpers.com/cities/bangalore' },
    { name: 'Drivers', url: 'https://ezyhelpers.com/cities/bangalore/drivers' }
  ]

  const trustBadges = [
    'Bangalore Traffic Experts',
    'Background-Verified Drivers',
    '24/7 Available Service',
    'All Routes Covered'
  ]

  const reasons = [
    {
      title: 'Stuck in traffic often?',
      description: 'Our drivers know Bangalore’s shortcuts and peak-hour bypasses.',
      icon: MapIcon
    },
    {
      title: 'Worried about elders travelling alone?',
      description: 'We provide patient, trained drivers for elderly and family transportation.',
      icon: UserGroupIcon
    },
    {
      title: 'Busy work schedule?',
      description: 'Use our driver services in Bangalore, designed for corporate executives, saving you time and stress.',
      icon: ClockIcon
    },
    {
      title: 'Need airport transfers or intercity trips?',
      description: 'Our chauffeur service in Bangalore ensures timely and relaxed travel.',
      icon: PaperAirplaneIcon
    }
  ]

  const offerings = [
    {
      title: 'Daily Commute Drivers',
      description:
        'Reliable drivers for school drops, office commutes, and daily errands, ensuring your routine runs smoothly and stress-free.'
    },
    {
      title: 'Elderly & Family Transport',
      description:
        'Patient drivers who understand the needs of seniors, kids, and dependent family members, offering extra care and comfort.'
    },
    {
      title: 'Airport Pickup & Drop',
      description:
        'Punctual drivers who align with your flight timing, help with luggage, and ensure smooth airport transfers every time.'
    },
    {
      title: 'Intercity & Outstation',
      description:
        'Skilled drivers for outstation trips, handling route planning, rest stops, and long drives with safety and professionalism.'
    },
    {
      title: 'Medical & Emergency Travel',
      description:
        'Quick-response drivers available for hospital visits, checkups, and emergency rides, always dependable when matters most.'
    }
  ]

  const driverCategories = [
    {
      title: 'Live-In Car Driver in Bangalore',
      points: [
        'Available 24x7 for all family members',
        'Assists with vehicle upkeep and maintenance reminders',
        'Manages multiple daily trips with ease',
        'Efficiently coordinates school, office, and personal travel',
        'Weekend, holiday & emergency availability guaranteed',
        'Stays at your home for complete convenience and trust'
      ]
    },
    {
      title: 'Full-Time Car Driver in Bangalore',
      points: [
        '8 to 10 hours of exclusive daily service',
        'Perfect for office commutes and business travel',
        'Reliable school drop-off and pickups',
        'Efficient Bangalore route planning to avoid traffic delays',
        'Presentable, punctual, and professional',
        'Tracks fuel use & supports basic maintenance scheduling'
      ]
    },
    {
      title: 'On-Demand Driver in Bangalore',
      points: [
        'Airport pickup/drop-off',
        'Transport for weddings, events, or parties',
        'Emergency hospital runs or doctor visits',
        'Local shopping, errands, and day tours',
        'Urgent or backup driver support when yours is unavailable',
        'Weekend getaways and intercity leisure trips'
      ]
    }
  ]

  const qualifications = [
    { title: 'Valid Driving License', description: 'All our drivers hold verified licenses and clean driving records, ensuring full legal and safety compliance.' },
    { title: 'Background Verification', description: 'Each driver undergoes Aadhaar, DL, and address verification for your peace of mind.' },
    { title: 'Defensive Driving Training', description: 'Professionally trained in safe driving, Bangalore traffic management, and emergency response protocols.' },
    { title: 'Local Area Knowledge', description: 'Our drivers know key zones like Indiranagar, Jayanagar, HSR Layout, and how to navigate Bangalore traffic smartly.' },
    { title: 'Professional Conduct', description: 'Expect courteous, punctual, and respectful behaviour throughout the service period.' },
    { title: 'Vehicle Maintenance Awareness', description: 'Basic upkeep knowledge with service coordination ensures your car stays road-ready.' }
  ]

  const features = [
    'GPS navigation support to avoid traffic and find faster routes',
    'Fuel management: monitor levels, plan refills smartly, and choose trusted stations across Bangalore routes',
    'Vehicle security protocols and responsible handling',
    'Multi-language support: Kannada, Hindi, Tamil, English',
    'Flexible scheduling: Book drivers for 24hrs, full-day or hourly needs',
    'Emergency assistance ready: quick response for hospital/roadside situations'
  ]

  const process = [
    { step: '1', title: 'Call or Book Online', description: 'Call +91 9972571005 or submit your details via our online form.', icon: PhoneIcon },
    { step: '2', title: 'Tell Us Your Need', description: 'Share your driver category (live-in, full-time, on-demand), timing, location, and car details.', icon: MapIcon },
    { step: '3', title: 'Get Matched Instantly', description: 'We quickly assign a background-verified driver suited to your travel requirements.', icon: ShieldCheckIcon },
    { step: '4', title: 'Travel Worry-Free', description: 'Enjoy safe, on-time travel with a trained, courteous driver at your service.', icon: CheckCircleIcon }
  ]

  

  const faqs = [
    { question: 'What makes your car driver in Bangalore service different?', answer: 'Our drivers are specially trained in Bangalore’s traffic with strong local knowledge of IT corridors, residential areas, and major connectivity routes. Each driver is background-verified and skilled in navigating city shortcuts and safe paths.' },
    { question: 'Do you provide personal drivers in Bangalore for elderly care?', answer: 'Absolutely. Our drivers are trained to assist elderly passengers with patient driving, medical appointment coordination, and clear communication with family members.' },
    { question: 'What vehicle types can your drivers handle?', answer: 'Our chauffeur drivers in Bangalore are experienced to operate all car types: hatchbacks, sedans, SUVs, and even high-end luxury vehicles, with proper licensing and experience.' },
    { question: 'Do you provide drivers familiar with Bangalore’s IT corridors?', answer: 'Yes. Our drivers have strong route expertise across key IT corridors like Outer Ring Road, Sarjapur Road, and Whitefield, ensuring faster commutes through Bangalore’s major corporate zones.' },
    { question: 'Do you provide one-time chauffeur drivers in Bangalore for special events?', answer: 'Yes, we offer one-time chauffeur drivers in Bangalore for special occasions like weddings, corporate events, and private gatherings. Our drivers arrive on time, dressed professionally, and ensure smooth, respectful service throughout the event for you and your guests.' },
    { question: 'Can I book a driver for airport drop or intercity travel?', answer: 'Definitely. We handle airport transfers with real-time flight tracking and also offer intercity driving for leisure, business, or family travel.' },
    { question: 'Can I hire a driver in Bangalore just for one day or a few hours?', answer: 'Yes, we offer on-demand drivers in Bangalore for a few hours, full-day, or one-time events. Whether it’s a wedding, airport pickup, or urgent hospital visit, you can hire an experienced chauffeur whenever needed, without long-term commitments.' },
    { question: 'What is the cost of hiring a car driver in Bangalore?', answer: 'Driver costs in Bangalore depend on the duration and type of service: hourly, daily, live-in, or outstation. Call us for exact rates; our pricing is transparent, with no hidden charges, and customised to your travel needs.' },
    { question: 'Can I get a driver who speaks Kannada or Hindi in Bangalore?', answer: 'Yes, we have multilingual drivers in Bangalore who can communicate in Kannada, Hindi, Tamil, and English. This makes communication easier for your family, elderly members, or clients with language preferences.' },
    { question: 'Is fuel cost included in your driver service pricing in Bangalore?', answer: 'No, our charges cover the driver’s service only. Fuel expenses are borne by the client. However, our drivers assist in monitoring fuel usage, planning refills, and choosing trusted petrol stations on your route.' }
  ]

  const localBusinessProps = {
    cityName: 'Bangalore',
    stateName: 'Karnataka',
    postalCode: '560001',
    streetAddress: 'Bangalore, Karnataka',
    latitude: 12.9716,
    longitude: 77.5946,
    specificServices: [
      'Car Driver Services',
      'Chauffeur Services',
      'Live-In Driver',
      'Full-Time Driver',
      'On-Demand Driver'
    ]
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Schema */}
        <BreadcrumbSchema items={breadcrumbs} />
        <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/cities/bangalore/drivers" />
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
                  <span className="text-sm font-semibold">Professional Drivers Across Bangalore</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Professional Car Driver in Bangalore
                </h1>
                <p className="text-2xl text-white/95 font-semibold mb-2">Safe & Reliable Chauffeur Service in Bangalore</p>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Skip the stress of driving! Book a professional driver in Bangalore for family, office, or intercity travel. Safe, courteous, and always punctual.
                </p>

                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  {trustBadges.map((tb, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ {tb}</div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                  <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">
                      <span className="hidden sm:inline">Book Your Car Driver</span>
                      <span className="sm:hidden">Book Now</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-primary-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300">
                    <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Call +91 9972571005</span>
                    <span className="sm:hidden">Call Now</span>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Emergency</div>
                    <div className="text-primary-200 text-sm">Trip Support</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Flexible</div>
                    <div className="text-primary-200 text-sm">Hourly Bookings</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Polite</div>
                    <div className="text-primary-200 text-sm">Professional Drivers</div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-3 gap-6">
                    {[TruckIcon, MapIcon, ShieldCheckIcon].map((Icon, idx) => (
                      <div key={idx} className="group bg-white/20 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 transition-all duration-500 transform hover:scale-105 cursor-pointer">
                        <Icon className="h-12 w-12 text-white mx-auto mb-3 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm">Driving</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Hire a Driver */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Should I Hire a Professional Car Driver in Bangalore?</h2>
              <p className="text-lg text-gray-600">Reliable drivers for smooth daily commutes or long-distance travel.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reasons.map((item, idx) => {
                const IconComponent = (item.icon as any)
                return (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Offerings */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Can I Expect from Your Professional Drivers in Bangalore?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">From daily commutes to emergency trips and outstation travel, EzyHelpers provides trained, reliable car drivers tailored to your lifestyle</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
              {offerings.map((item, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Flexible Driver Service Categories</h2>
              <p className="text-lg text-gray-600">Choose from our reliable driver service categories designed to match your lifestyle</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {driverCategories.map((cat, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-white border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.points.map((p, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Qualified & Professional Drivers in Bangalore</h2>
              <p className="text-lg text-gray-600">Bangalore’s Most Reliable Personal Drivers for Your Everyday and Emergency Needs.</p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <ul className="space-y-5">
                {qualifications.map((q, idx) => (
                  <li key={idx} className="text-gray-700">
                    <div className="flex items-center mb-1">
                      <ShieldCheckIcon className="h-5 w-5 text-primary-600 mr-2" />
                      <span className="font-semibold">{q.title}</span>
                    </div>
                    <p className="pl-7 text-gray-600">{q.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Additional Service Features in Bangalore</h2>
              <p className="text-lg text-gray-600">Extras that make your travel safer and more convenient in Bangalore.</p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <ul className="space-y-3">
                {features.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Hiring Process */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Hire a Driver in Bangalore with EzyHelpers</h2>
              <p className="text-lg text-gray-600">Follow a simple, hassle-free process to hire trusted, background-verified drivers in Bangalore</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
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

        {/* Post-Process Benefit and CTA */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display">Travel Smart with a Trusted Car Driver in Bangalore</h3>
              <p className="text-lg text-gray-700 mb-6">Experience stress-free travel with our driver services. Our drivers ensure comfort, punctuality, and peace of mind every time.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/hire-helper" className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors">Book Your Driver Today</Link>
                <Link href="tel:+919972571005" className="border-2 border-primary-600 text-primary-700 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors">Call Now: +91 9972571005</Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">FAQs</h2>
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Trusted Home Services by EzyHelpers</h2>
              <p className="text-lg text-gray-600">Complete household support for Bangalore's busy professionals.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'On-Demand Maid Service in Bangalore', href: '/cities/bangalore/on-demand-helper', description: 'Same-day help for cleaning, emergencies, or post-party home needs.', linkText: 'Learn About On-Demand Maid' },
                { title: 'Babysitter for Home in Bangalore', href: '/cities/bangalore/nanny-babysitter', description: 'Trusted babysitters for babies to teens, available hourly or full-day.', linkText: 'Learn About Babysitter' },
                { title: 'Senior Citizen Home Care Services in Bangalore', href: '/cities/bangalore/elderly-care', description: 'Caring in-home support for seniors, from hygiene to daily health monitoring.', linkText: 'Learn About Senior Care' }
              ].map((card, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{card.title}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <Link href={card.href} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                    {card.linkText}
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
