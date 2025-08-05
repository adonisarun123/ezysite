import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { 
  ClockIcon, 
  ShieldCheckIcon, 
  HomeIcon, 
  HeartIcon,
  CheckCircleIcon,
  PhoneIcon,
  UserGroupIcon,
  StarIcon,
  SunIcon,
  SparklesIcon,
  BuildingOffice2Icon,
  UserPlusIcon,
  ArrowRightIcon,
  CurrencyRupeeIcon,
  MapPinIcon,
  CalendarDaysIcon,
  HandRaisedIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  UsersIcon,
  BoltIcon,
  CogIcon,
  ExclamationTriangleIcon,
  FireIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Instant Maid Service in Bareilly | Same-Day Quick Helper | EzyHelpers',
  description: 'Get instant maid service in Bareilly within 2-4 hours! Emergency cleaning, last-minute cooking, quick helper for weddings, festivals & urgent home needs.',
  keywords: 'instant maid service Bareilly, same day helper Bareilly, emergency maid Bareilly, quick helper Bareilly, festival cleaning Bareilly',
  openGraph: {
    title: 'Instant Maid Service in Bareilly - Same-Day Quick Helper Available 24/7',
    description: 'Emergency cleaning, last-minute cooking, and quick helper in Bareilly for weddings, festivals, and urgent home maintenance services.',
    url: 'https://ezyhelpers.com/cities/bareilly/on-demand-helper',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/cities/bareilly/on-demand-helper'
  }
}

export default function BareillyOnDemandHelperPage() {
  const urgentServices = [
    {
      category: "Festival & Special Occasions",
      icon: StarIcon,
      color: "from-purple-500 to-pink-500",
      services: [
        "Pre-Karva Chauth & Diwali Deep Cleaning",
        "Post-Holi Cleanup",
        "Wedding/Engagement Function Support", 
        "Navratri Fasting Meal Prep",
        "Eid Preparation Services"
      ]
    },
    {
      category: "Family Emergency Support",
      icon: ExclamationTriangleIcon,
      color: "from-red-500 to-orange-500", 
      services: [
        "Same-day Childcare",
        "Elder Care Assistance",
        "New Mother Support (Japa Services)",
        "School Holiday Supervision",
        "Medical Emergency Support"
      ]
    },
    {
      category: "Daily Life Solutions",
      icon: HomeIcon,
      color: "from-blue-500 to-indigo-500",
      services: [
        "Unexpected Guest Preparation",
        "Market Shopping",
        "Bank & Government Work",
        "Cooking for Special Diets",
        "Laundry & Ironing Emergency"
      ]
    },
    {
      category: "Technical & Maintenance",
      icon: WrenchScrewdriverIcon,
      color: "from-green-500 to-teal-500",
      services: [
        "Electrician Services",
        "Plumber Services", 
        "Carpenter Services",
        "Home Appliance Repair",
        "Deep Cleaning Services"
      ]
    }
  ]

  const whyChooseFeatures = [
    {
      title: "1–4 Hour Instant Assistance",
      description: "Get help within hours, not days. Perfect for urgent household needs",
      icon: ClockIcon
    },
    {
      title: "Same-Day or Emergency Availability",
      description: "Available for immediate needs including weekends and festivals",
      icon: FireIcon
    },
    {
      title: "Local Maids Familiar with Bareilly Customs",
      description: "Understanding of local traditions, festivals, and community practices",
      icon: HomeIcon
    },
    {
      title: "Trained for Post-Event Cleaning",
      description: "Expert in festival cleanup, guest preparation, and special occasion support",
      icon: SparklesIcon
    },
    {
      title: "Fluent in Hindi & Local Language",
      description: "Easy communication in regional language with cultural sensitivity",
      icon: ChatBubbleLeftRightIcon
    },
    {
      title: "Reliable, Background-Verified Helpers",
      description: "100% police verified professionals you can trust in emergencies",
      icon: ShieldCheckIcon
    }
  ]

  const emergencySupport = [
    {
      title: "Festival Season Urgency",
      description: "Instant help during Diwali, Holi, Eid, and other celebrations",
      icon: StarIcon
    },
    {
      title: "Government Transfer Assistance",
      description: "Quick support for government employees during transfers",
      icon: BuildingOffice2Icon
    },
    {
      title: "Medical Emergency Response",
      description: "Immediate household help during health emergencies",
      icon: HeartIcon
    },
    {
      title: "Social Function Pressure",
      description: "Last-minute help for weddings, engagements, and social events",
      icon: UserGroupIcon
    }
  ]

  const process = [
    {
      step: "1",
      title: "Share Your Urgent Need",
      description: "Call or WhatsApp us with your immediate requirement and timing"
    },
    {
      step: "2", 
      title: "Get Verified Helpers Assigned",
      description: "We immediately assign background-verified helpers available in your area"
    },
    {
      step: "3",
      title: "Confirm & Finalize Over Call",
      description: "Quick confirmation call to finalize timing and specific requirements"
    },
    {
      step: "4",
      title: "Helper Arrives Within Hours",
      description: "Trained professional reaches your location within 1-4 hours"
    }
  ]

  const serviceAreas = [
    "Civil Lines", "CB Ganj", "Cantt", "Badaun Road", "Pilibhit Road", "Izatnagar",
    "Railway Road", "Subhash Nagar", "Rampur Garden", "Medical College Road", "Clive Road",
    "Sheesh Mahal", "Civil Court", "Judges Colony", "Faridpur", "Nawabganj", "Baradari",
    "Kydganj", "Qila", "Sadar Bazaar"
  ]

  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'Instant On-Demand Helper Service' }
          ]} 
        />
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <BoltIcon className="h-5 w-5 text-yellow-300 mr-2" />
                    <span className="text-sm font-semibold">Same-Day Service Available</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                    Instant Maid Service in
                    <span className="block text-yellow-200">Bareilly</span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed">
                    Same-Day Quick Helper Available 24/7! Get instant maid service within 2-4 hours for emergency cleaning, last-minute cooking, and urgent home maintenance services.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ Same-Day Booking
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ 20+ Areas Covered
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ Speedy Response
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <Link
                      href="/hire-helper"
                      className="inline-flex items-center justify-center w-full bg-white text-red-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      Book Instant Maid Now
                    </Link>

                    <Link
                      href="tel:+919972571005"
                      className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                    >
                      <PhoneIcon className="h-5 w-5 mr-2" />
                      Call for Urgent Help
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold">2-4 Hrs</div>
                      <div className="text-orange-200 text-sm">Response Time</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-orange-200 text-sm">Available</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-orange-200 text-sm">Verified</div>
                    </div>
                  </div>
                </div>

                <div className="relative hidden lg:block">
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <StarIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">Festival Prep</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <ExclamationTriangleIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">Emergency Help</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <UserGroupIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">Guest Service</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <WrenchScrewdriverIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">Repair Services</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Why Choose EzyHelpers' Instant Maid Service in Bareilly?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Bareilly homes love our on-demand helper service for its speed, professionalism, and reliability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-red-100 rounded-xl p-3 w-fit mb-6">
                    <feature.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Urgent Services Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Services Offered by Instant Maids & Helpers in Bareilly
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Your emergency is our priority. Our instant maids are trained for multiple short-notice tasks
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {urgentServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${service.color} rounded-xl p-3 mr-4`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Lifestyle Emergency Support */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Local Lifestyle Emergency Support
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding Bareilly's unique lifestyle and providing targeted support when you need it most
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {emergencySupport.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl"
                >
                  <div className="bg-orange-100 rounded-xl p-4 w-fit mx-auto mb-6">
                    <item.icon className="h-12 w-12 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                4-Step Easy Booking Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ultra-fast booking process designed for urgent needs and emergency situations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Emergency Service Coverage in Bareilly
              </h2>
              <p className="text-lg text-gray-600">
                Instant helper services available across all major areas in Bareilly
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-red-300 hover:shadow-md transition-all duration-300"
                >
                  <MapPinIcon className="h-6 w-6 text-red-600 mx-auto mb-2" />
                  <span className="text-gray-700 font-medium text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Flexible & Reliable Home Services in Bareilly
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/cities/bareilly/full-time-maid" className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                <ClockIcon className="h-12 w-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Full-Time Maids</h3>
                <p className="text-gray-600 mb-4">8–10 hours for full home support</p>
                <div className="flex items-center text-orange-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/cooks" className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <SparklesIcon className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cook Services</h3>
                <p className="text-gray-600 mb-4">Daily or weekly food prep</p>
                <div className="flex items-center text-green-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/part-time-maid" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <ClockIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Part-Time Maids</h3>
                <p className="text-gray-600 mb-4">Daily 2–4 hours for cooking and cleaning</p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/cities/bareilly" 
                className="inline-flex items-center justify-center bg-red-600 text-white font-semibold text-lg py-4 px-8 rounded-xl hover:bg-red-700 transition-all duration-300"
              >
                View All Services in Bareilly
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-red-600 to-orange-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Book Instant Maid in Bareilly Now
              </h2>
              <p className="text-xl mb-8 text-red-100">
                Don't wait when you need help urgently. Get verified helpers within hours!
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-red-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Instant Helper Now
                </Link>
                
                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call for Quick Helper
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}