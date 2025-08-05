import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
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
  CogIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: '24-Hour Live-In Maid Service in Bareilly | Reliable Help | EzyHelpers',
  description: 'Get verified, trained live-in maid service in Bareilly available 24/7 for traditional UP cooking, cleaning, elderly care & complete home support. Book now!',
  keywords: 'live in maid Bareilly, 24 hour maid service Bareilly, stay in maid Bareilly, full time home help Bareilly, verified maid service',
  openGraph: {
    title: '24-Hour Live-In Maid Service in Bareilly - Reliable & Trusted | EzyHelpers',
    description: 'Background-verified, trained live-in maid service in Bareilly available 24/7 for traditional cooking, cleaning & complete home support.',
    url: 'https://ezyhelpers.com/cities/bareilly/live-in-maid',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/cities/bareilly/live-in-maid'
  }
}

export default function BareillyLiveInMaidPage() {
  const services = [
    {
      title: "Daily Meal Preparation",
      description: "Breakfast to dinner with North Indian & Bareilly-style authentic flavors",
      icon: HeartIcon,
      features: ["Traditional UP cuisine", "Tehri, Bedai, Halwa, Kheer", "Festival special cooking", "Custom dietary preferences"]
    },
    {
      title: "House Cleaning", 
      description: "Complete daily house cleaning including sweeping, mopping, and dusting",
      icon: SparklesIcon,
      features: ["Daily room cleaning", "Kitchen maintenance", "Bathroom sanitization", "Organized storage"]
    },
    {
      title: "Laundry & Ironing",
      description: "Washing, drying, and ironing clothes neatly with proper care",
      icon: HomeIcon,
      features: ["Clothes washing", "Proper drying", "Neat folding", "Professional ironing"]
    },
    {
      title: "Grocery Help",
      description: "Assists in daily bazaar trips and errands with local market knowledge",
      icon: BuildingOffice2Icon,
      features: ["Market shopping", "Quality selection", "Local vendor relations", "Fresh produce choice"]
    },
    {
      title: "Child & Elderly Care",
      description: "Hygiene, meals & emotional support for children and elderly family members",
      icon: UserGroupIcon,
      features: ["Child supervision", "Elder assistance", "Meal help", "Emotional support"]
    },
    {
      title: "Guest Management",
      description: "Chai service and post-guest cleaning with traditional hospitality",
      icon: HandRaisedIcon,
      features: ["Guest service", "Chai preparation", "Post-visit cleaning", "Traditional hospitality"]
    }
  ]

  const culturalFeatures = [
    {
      title: "Traditional Cooking Knowledge",
      description: "Expert in Tehri, Bedai, Halwa, Kheer & other UP specialties",
      icon: HeartIcon
    },
    {
      title: "Customary Practices",
      description: "Understanding of fasting rules, dietary preferences & pooja rituals",
      icon: HandRaisedIcon
    },
    {
      title: "Language & Local Respect",
      description: "Fluent in Hindi, culturally sensitive and respectful of traditions",
      icon: ChatBubbleLeftRightIcon
    }
  ]

  const idealFor = [
    {
      title: "Working Couples",
      description: "Perfect for dual-income families needing comprehensive household support",
      icon: UsersIcon
    },
    {
      title: "Joint Families",
      description: "Ideal for large UP families with multiple generations and traditions",
      icon: HomeIcon
    },
    {
      title: "Government Staff & Teachers",
      description: "Great for government employees with regular work schedules",
      icon: AcademicCapIcon
    },
    {
      title: "Shopkeepers & Business Owners",
      description: "Perfect for local business owners who are busy throughout the day",
      icon: BuildingOffice2Icon
    },
    {
      title: "Parents with Young Children",
      description: "Excellent support for families with toddlers requiring constant care",
      icon: UserGroupIcon
    },
    {
      title: "Single Parents",
      description: "Reliable 24/7 help for single parents managing work and home",
      icon: HeartIcon
    }
  ]

  const process = [
    {
      step: "1",
      title: "Personal Consultation",
      description: "Assess needs, family dynamics, and recommend suitable live-in plan"
    },
    {
      step: "2", 
      title: "Maid Selection",
      description: "Share 2-3 verified profiles matching your preferences and requirements"
    },
    {
      step: "3",
      title: "Interview & Review",
      description: "Conduct call, video, or in-person interviews to select the best fit"
    },
    {
      step: "4",
      title: "Easy Onboarding",
      description: "Complete documentation, accommodation setup, and ongoing support"
    }
  ]

  const serviceAreas = [
    "Civil Lines", "CB Ganj", "Cantt", "Badaun Road", "Pilibhit Road", "Izatnagar",
    "Railway Road", "Subhash Nagar", "Rampur Garden", "Medical College Road"
  ]

  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        
        {/* Breadcrumb Navigation */}
        <section className="bg-gray-100 py-4">
          <div className="container-custom">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-purple-600">Home</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/cities/bareilly" className="text-gray-500 hover:text-purple-600">Bareilly</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">24-Hour Live-In Maid Service</li>
              </ol>
            </nav>
          </div>
        </section>
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
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
                    <ClockIcon className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-sm font-semibold">24/7 Stay-In Assistance</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                    24-Hour Maid Service in
                    <span className="block text-yellow-200">Bareilly</span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed">
                    Reliable & Trusted Help at Your Doorstep! Get verified, trained live-in maid service available 24/7 for traditional UP cooking, cleaning, elderly care & complete home support.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ 24-72 Hour Placement
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ Full Domestic Support
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ Affordable Monthly Pricing
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <Link
                      href="/hire-helper"
                      className="inline-flex items-center justify-center w-full bg-white text-purple-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      Book 24-Hour Maid Now
                    </Link>

                    <Link
                      href="tel:+919972571005"
                      className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                    >
                      <PhoneIcon className="h-5 w-5 mr-2" />
                      Call Now
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold">10K+</div>
                      <div className="text-purple-200 text-sm">Happy Families</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-purple-200 text-sm">Hindi Support</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-purple-200 text-sm">Police Verified</div>
                    </div>
                  </div>
                </div>

                <div className="relative hidden lg:block">
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <HeartIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">24/7 Cooking</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <SparklesIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">House Cleaning</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <UserGroupIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">Family Care</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <BuildingOffice2Icon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">Guest Service</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Services Offered by Our 24/7 Live-in Maids in Bareilly
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive household support with traditional values and round-the-clock care
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-100 rounded-xl p-3 mr-4">
                      <service.icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional & Cultural Familiarity */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Regional & Cultural Familiarity
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Deep understanding of Bareilly traditions and UP family customs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {culturalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl"
                >
                  <div className="bg-purple-100 rounded-xl p-4 w-fit mx-auto mb-6">
                    <feature.icon className="h-12 w-12 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Needs Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Who Needs 24-Hour Maid Service?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Perfect for families requiring comprehensive round-the-clock household support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {idealFor.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-purple-100 rounded-xl p-4 w-fit mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                    <item.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                4-Step Easy Hiring Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Simple and transparent process to get your perfect live-in maid
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">
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
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Service Areas in Bareilly
              </h2>
              <p className="text-lg text-gray-600">
                We provide 24-hour live-in maid services across all major areas in Bareilly
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300"
                >
                  <MapPinIcon className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <span className="text-gray-700 font-medium text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Explore Other Services in Bareilly
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/cities/bareilly/full-time-maid" className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                <ClockIcon className="h-12 w-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Full-Time Maid Service</h3>
                <p className="text-gray-600 mb-4">8-10 hours daily help for cooking, cleaning & home management</p>
                <div className="flex items-center text-orange-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/part-time-maid" className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <ClockIcon className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Part-Time Maid Service</h3>
                <p className="text-gray-600 mb-4">Flexible 2-4 hours daily for cooking & cleaning tasks</p>
                <div className="flex items-center text-green-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/on-demand-helper" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <BoltIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instant On-Demand Helper</h3>
                <p className="text-gray-600 mb-4">Same-day emergency help for festivals & urgent needs</p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>

            {/* Additional Services Grid */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <Link href="/cities/bareilly/elderly-care" className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <HeartIcon className="h-8 w-8 text-purple-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Elderly Care Services</h4>
                <p className="text-gray-600 text-sm">Mobility, hygiene, meals, companionship</p>
              </Link>

              <Link href="/cities/bareilly/babysitter" className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
                <UserGroupIcon className="h-8 w-8 text-pink-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Baby Care Services</h4>
                <p className="text-gray-600 text-sm">Feeding, bathing, playful engagement</p>
              </Link>

              <Link href="/cities/bareilly/appliance-repair" className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <CogIcon className="h-8 w-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Home Appliance Repair</h4>
                <p className="text-gray-600 text-sm">Fridge, AC, fan, washing machine</p>
              </Link>

              <Link href="/cities/bareilly/cooks" className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                <SparklesIcon className="h-8 w-8 text-orange-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Cook Services</h4>
                <p className="text-gray-600 text-sm">Traditional UP cuisine & daily meals</p>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/cities/bareilly" 
                className="inline-flex items-center justify-center bg-purple-600 text-white font-semibold text-lg py-4 px-8 rounded-xl hover:bg-purple-700 transition-all duration-300"
              >
                View All Services in Bareilly
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Book Your 24-Hour Maid in Bareilly Today
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Get reliable, verified, and trained household support available round-the-clock
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-purple-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book 24-Hour Maid Now
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