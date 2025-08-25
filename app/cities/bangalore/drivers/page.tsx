import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
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
    'Get reliable personal car driver services in Bangalore for daily commutes, airport transfers, office travel & family transportation with experienced drivers.',
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
      title: 'Beat Traffic & Save Time',
      description: 'Our drivers know Bangalore shortcuts and peak-hour bypasses.',
      icon: MapIcon
    },
    {
      title: 'Family & Elderly Transport',
      description: 'Patient, courteous drivers for seniors, kids, and family routines.',
      icon: UserGroupIcon
    },
    {
      title: 'Corporate Convenience',
      description: 'Stay productive while we handle your daily commutes and meetings.',
      icon: ClockIcon
    },
    {
      title: 'Airport & Intercity',
      description: 'Punctual airport pickups/drops and safe outstation trips.',
      icon: PaperAirplaneIcon
    }
  ]

  const offerings = [
    {
      title: 'Daily Commute Drivers',
      description:
        'Reliable drivers for school drops, office commutes, and daily errands to keep your routine smooth.'
    },
    {
      title: 'Elderly & Family Transport',
      description:
        'Trained, patient drivers who assist seniors and kids with careful, comfortable travel.'
    },
    {
      title: 'Airport Pickup & Drop',
      description:
        'On-time arrivals aligned with your flight schedule, with luggage assistance.'
    },
    {
      title: 'Intercity & Outstation',
      description:
        'Experienced drivers for long drives, route planning, and safe outstation trips.'
    },
    {
      title: 'Medical & Emergency Travel',
      description:
        'Quick-response drivers for hospital visits, checkups, and urgent rides.'
    }
  ]

  const driverCategories = [
    {
      title: 'Live-In Car Driver in Bangalore',
      points: [
        'Available 24x7 for all family members',
        'Assists with vehicle upkeep and maintenance reminders',
        'Manages multiple daily trips and coordinates travel',
        'Weekend, holiday & emergency availability',
        'Stays at your home for convenience and trust'
      ]
    },
    {
      title: 'Full-Time Car Driver in Bangalore',
      points: [
        '8–10 hours of exclusive daily service',
        'Perfect for office commutes and business travel',
        'Reliable school drop-off and pickups',
        'Efficient route planning to avoid delays',
        'Presentable, punctual, and professional',
        'Tracks fuel use & basic maintenance scheduling'
      ]
    },
    {
      title: 'On-Demand Driver in Bangalore',
      points: [
        'Airport pickup/drop-off',
        'Transport for weddings, events, or parties',
        'Emergency hospital runs or doctor visits',
        'Local shopping, errands, and day tours',
        'Backup driver support when yours is unavailable',
        'Weekend getaways and intercity leisure trips'
      ]
    }
  ]

  const qualifications = [
    'Valid Driving License: verified with clean records',
    'Background Verification: Aadhaar, DL, and address checks',
    'Defensive Driving Training: traffic management & emergency response',
    'Local Area Knowledge: Indiranagar, Jayanagar, HSR Layout and more',
    'Professional Conduct: courteous, punctual, and respectful',
    'Vehicle Maintenance Awareness: basic upkeep and service coordination'
  ]

  const features = [
    'GPS navigation support to avoid traffic and find faster routes',
    'Fuel management: monitor levels, plan refills, choose trusted stations',
    'Vehicle security protocols and responsible handling',
    'Multi-language support: Kannada, Hindi, Tamil, English',
    'Flexible scheduling: hourly, full-day, or 24-hour bookings',
    'Emergency assistance ready: quick response for hospital/roadside situations'
  ]

  const process = [
    { step: '1', title: 'Call or Book Online', description: 'Call +91 9972571005 or submit your details via our online form.', icon: PhoneIcon },
    { step: '2', title: 'Tell Us Your Need', description: 'Share category (live-in, full-time, on-demand), timings, location, and car details.', icon: MapIcon },
    { step: '3', title: 'Get Matched Instantly', description: 'We assign a background-verified driver suited to your requirements.', icon: ShieldCheckIcon },
    { step: '4', title: 'Travel Worry-Free', description: 'Enjoy safe, on-time travel with a trained, courteous driver.', icon: CheckCircleIcon }
  ]

  const bangaloreAreas = [
    'Electronic City', 'Whitefield', 'Marathahalli', 'Koramangala', 'Indiranagar',
    'Jayanagar', 'BTM Layout', 'HSR Layout', 'Sarjapur Road', 'Bannerghatta Road',
    'Yelahanka', 'Hebbal', 'Rajajinagar', 'Malleshwaram', 'Basavanagudi'
  ]

  const faqs = [
    { question: 'What makes your car driver service different in Bangalore?', answer: 'Drivers are trained for Bangalore’s traffic with strong local knowledge of IT corridors and residential areas. All are background-verified.' },
    { question: 'Do you provide personal drivers for elderly care?', answer: 'Yes. Drivers assist elderly passengers, coordinate medical appointments, and communicate with family.' },
    { question: 'What vehicle types can drivers handle?', answer: 'Hatchbacks, sedans, SUVs, and luxury vehicles—licensed and experienced.' },
    { question: 'Do drivers know Bangalore’s IT corridors?', answer: 'Yes. Route expertise across ORR, Sarjapur Road, Whitefield, and more for faster commutes.' },
    { question: 'Can I get one-time chauffeur drivers for events?', answer: 'Yes. One-time bookings for weddings, corporate events, and private gatherings are available.' },
    { question: 'Airport drop or intercity travel available?', answer: 'Definitely. We manage airport transfers with flight tracking and offer outstation driving.' },
    { question: 'Can I hire a driver for a day or a few hours?', answer: 'Yes. On-demand hourly or full-day bookings for urgent or special needs.' },
    { question: 'What is the cost of hiring a car driver in Bangalore?', answer: 'Pricing depends on duration and type—hourly, daily, live-in, or outstation. Call us for exact rates.' },
    { question: 'Are multilingual drivers available?', answer: 'Yes. Many drivers speak Kannada, Hindi, Tamil, and English.' },
    { question: 'Is fuel cost included in pricing?', answer: 'No. Charges cover the driver’s service; fuel is borne by the client. Drivers help track fuel and refills.' }
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
                  Professional Car Driver
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">Bangalore</span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Safe & reliable chauffeur service for family, office, and intercity travel. Courteous, punctual, and background-verified.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Hire a Professional Car Driver in Bangalore?</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Our Professional Drivers Offer</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">From daily commutes to emergency trips and outstation travel, get trained, reliable drivers tailored to your lifestyle.</p>
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
              <p className="text-lg text-gray-600">Choose a category that matches your lifestyle and travel needs.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Qualified & Professional Drivers</h2>
              <p className="text-lg text-gray-600">Bangalore’s most reliable personal drivers for everyday and emergency needs.</p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <ul className="space-y-3">
                {qualifications.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <ShieldCheckIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                    {item}
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Additional Service Features</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Hire a Driver in Bangalore</h2>
              <p className="text-lg text-gray-600">Follow a simple, hassle-free process to hire trusted, background-verified drivers.</p>
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

        {/* Areas We Serve */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Areas We Serve in Bangalore</h2>
              <p className="text-lg text-gray-600">Available across the city’s major neighborhoods and corridors</p>
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
        <section className="section-padding bg-gray-50">
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

        {/* Related Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Trusted Home Services by EzyHelpers</h2>
              <p className="text-lg text-gray-600">Complete household support for Bangalore's busy professionals.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'On-Demand Maid Service in Bangalore', href: '/cities/bangalore/on-demand-helper', description: 'Same-day help for cleaning, emergencies, and post-party needs.' },
                { title: 'Babysitter for Home in Bangalore', href: '/cities/bangalore/nanny-babysitter', description: 'Trusted childcare for babies to teens—hourly or full-day.' },
                { title: 'Senior Citizen Care in Bangalore', href: '/cities/bangalore/elderly-care', description: 'Caring in-home support for hygiene and health monitoring.' }
              ].map((card, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{card.title}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <Link href={card.href} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                    Learn More
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
