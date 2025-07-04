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
  BoltIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Full-Time Maid in Bareilly | 8-10 Hour Daily Help | EzyHelpers',
  description: 'Get verified, trained full-time maid in Bareilly for cooking, cleaning, elderly care & home management. Hindi-speaking maids for joint families. Book now!',
  keywords: 'full time maid Bareilly, daily maid service Bareilly, cooking cleaning maid Bareilly, home management Bareilly, verified maid service',
  openGraph: {
    title: 'Full-Time Maid in Bareilly - Dependable Daily Help | EzyHelpers',
    description: 'Background-verified, trained full-time maid in Bareilly for 8-10 hours daily. Perfect for joint families and working professionals.',
    url: 'https://ezyhelpers.com/cities/bareilly/full-time-maid',
    type: 'website',
  }
}

export default function BareillyFullTimeMaidPage() {
  const services = [
    {
      title: "Daily Cooking",
      description: "Breakfast, lunch, dinner with authentic North Indian & local Bareilly flavours",
      icon: HeartIcon,
      features: ["Traditional UP cuisine", "Joint family portions", "Festival special cooking", "Dietary preferences respected"]
    },
    {
      title: "Cleaning & Mopping", 
      description: "Complete house cleaning including sweeping, mopping, and dusting daily",
      icon: SparklesIcon,
      features: ["Daily room cleaning", "Kitchen maintenance", "Bathroom cleaning", "Organized storage"]
    },
    {
      title: "Washing & Ironing",
      description: "Washing, drying, folding, and ironing clothes regularly with care",
      icon: HomeIcon,
      features: ["Clothes washing", "Proper drying", "Neat folding", "Ironing service"]
    },
    {
      title: "Childcare & Eldercare",
      description: "Feeding, bathing, dressing, and supervision for children and elderly",
      icon: UserGroupIcon,
      features: ["Child supervision", "Elder assistance", "Meal help", "Daily care"]
    },
    {
      title: "Pooja & Traditions",
      description: "Cleaning temples, arranging prasad, and assisting in religious activities",
      icon: HandRaisedIcon,
      features: ["Temple cleaning", "Prasad preparation", "Festival assistance", "Traditional respect"]
    },
    {
      title: "Shopping Assistance",
      description: "Daily groceries and errands from local Bareilly markets",
      icon: BuildingOffice2Icon,
      features: ["Market shopping", "Grocery selection", "Local market knowledge", "Quality purchases"]
    }
  ]

  const idealFor = [
    {
      title: "Joint Families",
      description: "Perfect for large UP families with multiple generations",
      icon: UsersIcon
    },
    {
      title: "Working Government Employees",
      description: "Ideal for 9-5 government job holders who need reliable daily help",
      icon: BuildingOffice2Icon
    },
    {
      title: "IT & Banking Professionals",
      description: "Great for busy professionals who work long hours",
      icon: AcademicCapIcon
    },
    {
      title: "Business Owners & Shopkeepers",
      description: "Perfect for local business owners who are busy all day",
      icon: UserPlusIcon
    },
    {
      title: "Families with Toddlers",
      description: "Excellent support for families with young children",
      icon: HeartIcon
    },
    {
      title: "Single Parents",
      description: "Reliable help for single parents managing work and home",
      icon: UserGroupIcon
    }
  ]

  const whyChooseFeatures = [
    {
      title: "Speaks Hindi & Local Language",
      description: "Native Hindi speakers familiar with Bareilly's local dialect and customs",
      icon: ChatBubbleLeftRightIcon
    },
    {
      title: "Joint Family Experience",
      description: "Trained to manage large joint families efficiently with traditional values",
      icon: HomeIcon
    },
    {
      title: "Traditional Cooking Skills",
      description: "Expert in North Indian cuisine and local UP specialties",
      icon: HeartIcon
    },
    {
      title: "Police Verified",
      description: "100% background verified with local references and Aadhaar verification",
      icon: ShieldCheckIcon
    },
    {
      title: "Available in All Areas",
      description: "Service available across Civil Lines, CB Ganj, Cantt, and all major Bareilly areas",
      icon: MapPinIcon
    },
    {
      title: "Festival Support",
      description: "Extra help during Diwali, Holi, and other festivals with traditional knowledge",
      icon: StarIcon
    }
  ]

  const process = [
    {
      step: "1",
      title: "Personal Consultation",
      description: "We understand your family needs, working hours, and specific requirements"
    },
    {
      step: "2", 
      title: "Maid Selection",
      description: "Shortlist 2-3 verified profiles matching your preferences and locality"
    },
    {
      step: "3",
      title: "Interview & Review",
      description: "Phone, video, or in-person interviews to select the best fit"
    },
    {
      step: "4",
      title: "Easy Onboarding",
      description: "Complete documentation and start service with full support"
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
                <li className="text-gray-900 font-medium">Full-Time Maid Service</li>
              </ol>
            </nav>
          </div>
        </section>
      
      {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
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
                    <StarIcon className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-sm font-semibold">Verified, Trained Female Maids</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                    Full-Time Maid in
                    <span className="block text-yellow-200">Bareilly</span>
            </h1>
                  
                  <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed">
                    Dependable Daily Help for Every Household. Get background-verified, trained full-time maid for cooking, cleaning, elderly care & complete home management.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ 8-10 Hour Service
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ Customizable Schedule
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ Affordable Monthly Charges
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <Link
                      href="/hire-helper"
                      className="inline-flex items-center justify-center w-full bg-white text-orange-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                Book Full-Time Maid Now
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
                      <div className="text-2xl font-bold">10,000+</div>
                      <div className="text-orange-200 text-sm">Happy Homes</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-orange-200 text-sm">Hindi Support</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-orange-200 text-sm">Police Verified</div>
            </div>
          </div>
        </div>

                <div className="relative hidden lg:block">
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <HeartIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">Daily Cooking</div>
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
                        <HandRaisedIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">Pooja Help</div>
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
                Services Offered by Full-Time Maids
            </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive household support with traditional values and modern efficiency
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-100 rounded-xl p-3 mr-4">
                      <service.icon className="h-8 w-8 text-orange-600" />
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

        {/* Who Needs Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Who Needs a Full-Day Maid Service in Bareilly?
            </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Perfect for busy families who need reliable, full-time household support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {idealFor.map((item, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-orange-100 rounded-xl p-4 w-fit mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                    <item.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

        {/* Why Choose Section */}
        <section className="section-padding bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Why Choose EzyHelpers Full-Time Maid in Bareilly?
            </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Local expertise combined with professional training for the best household support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-orange-100 rounded-xl p-3 w-fit mb-6">
                    <feature.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
                Simple and transparent process to get your perfect full-time maid
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">
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
                We provide full-time maid services across all major areas in Bareilly
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300"
                >
                  <MapPinIcon className="h-6 w-6 text-orange-600 mx-auto mb-2" />
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
                More Home Services in Bareilly
            </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/cities/bareilly/live-in-maid" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <ClockIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Live-In Maid Service</h3>
                <p className="text-gray-600 mb-4">Round-the-clock household support with traditional cooking & complete care</p>
                <div className="flex items-center text-blue-600 font-semibold">
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

              <Link href="/cities/bareilly/on-demand-helper" className="group bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100 hover:border-red-300 hover:shadow-lg transition-all duration-300">
                <BoltIcon className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instant On-Demand Helper</h3>
                <p className="text-gray-600 mb-4">Same-day emergency help for festivals & urgent needs</p>
                <div className="flex items-center text-red-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
              </div>
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
        <section className="section-padding bg-gradient-to-br from-orange-600 to-red-600 text-white">
          <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              Book Your Full-Time Maid in Bareilly Today
            </h2>
              <p className="text-xl mb-8 text-orange-100">
                Get reliable, verified, and trained household support for your family
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-orange-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                Book Full-Time Maid Now
              </Link>
                
                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                Call Us
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