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
  BeakerIcon,
  GiftIcon,
  BanknotesIcon,
  ShoppingBagIcon,
  BoltIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  ShieldExclamationIcon,
  TruckIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Instant Maid Service in Bareilly | Same-Day Quick Helper | EzyHelpers',
  description: 'Get instant maid service in Bareilly within 2-4 hours! Emergency cleaning, last-minute cooking, and quick helper for weddings, festivals, and urgent needs.',
  keywords: 'instant maid service Bareilly, same day helper Bareilly, emergency cleaning Bareilly, quick helper service, urgent maid service',
  openGraph: {
    title: 'Instant Maid Service in Bareilly - Same-Day Quick Helper Available 24/7 | EzyHelpers',
    description: 'Get instant help within 2-4 hours! Emergency cleaning, cooking, and quick assistance for urgent household needs.',
    url: 'https://ezyhelpers.com/cities/bareilly/on-demand-helper',
    type: 'website',
  }
}

export default function BareillyOnDemandHelperPage() {
  const emergencyServices = [
    {
      title: "Pre-Karva Chauth & Diwali Deep Cleaning",
      description: "Thorough house cleaning before major festivals with traditional preparation support",
      icon: SparklesIcon,
      features: ["Festival house cleaning", "Temple area cleaning", "Traditional preparation", "Guest-ready home"]
    },
    {
      title: "Post-Holi Cleanup", 
      description: "Complete cleanup after Holi celebrations including color stain removal",
      icon: PaintBrushIcon,
      features: ["Color stain removal", "House cleaning", "Laundry assistance", "Fresh home restoration"]
    },
    {
      title: "Wedding/Engagement Function Support",
      description: "Event assistance for pre and post wedding functions and celebrations",
      icon: GiftIcon,
      features: ["Pre-event preparation", "Function support", "Post-event cleanup", "Guest management"]
    },
    {
      title: "Navratri Fasting Meal Prep",
      description: "Special cooking for fasting periods with traditional knowledge and care",
      icon: BeakerIcon,
      features: ["Fasting meal prep", "Traditional recipes", "Pure ingredients", "Religious sensitivity"]
    },
    {
      title: "Eid Preparation Services",
      description: "Festival preparation and cooking support for Eid celebrations",
      icon: HeartIcon,
      features: ["Festival cooking", "House preparation", "Sweet making", "Guest arrangement"]
    },
    {
      title: "Emergency Family Support",
      description: "Immediate help during family emergencies and urgent situations",
      icon: ShieldExclamationIcon,
      features: ["Same-day childcare", "Elder care assistance", "New mother support", "Medical emergency support"]
    }
  ]

  const instantServices = [
    {
      title: "Unexpected Guest Preparation",
      description: "Quick house cleaning and cooking when guests arrive suddenly",
      icon: UsersIcon,
      features: ["Rapid house cleaning", "Quick meal preparation", "Guest room setup", "Tea/snack service"]
    },
    {
      title: "Market Shopping & Errands",
      description: "Immediate shopping assistance for groceries and household needs",
      icon: ShoppingBagIcon,
      features: ["Grocery shopping", "Market visits", "Bank errands", "Local task completion"]
    },
    {
      title: "Cooking for Special Diets",
      description: "Emergency cooking for health conditions or special dietary requirements",
      icon: HeartIcon,
      features: ["Diabetic meals", "Recovery food", "Special diet cooking", "Health-conscious meals"]
    },
    {
      title: "Laundry & Ironing Emergency",
      description: "Urgent laundry and ironing services for immediate clothing needs",
      icon: HomeIcon,
      features: ["Express washing", "Quick drying", "Urgent ironing", "Ready-to-wear service"]
    }
  ]

  const technicalServices = [
    {
      title: "Electrician Services",
      description: "Emergency electrical repairs and installations",
      icon: LightBulbIcon,
      href: "/services/electricians"
    },
    {
      title: "Plumber Services",
      description: "Urgent plumbing fixes and water-related issues",
      icon: WrenchScrewdriverIcon,
      href: "/services/plumbers"
    },
    {
      title: "Carpenter Services",
      description: "Quick furniture repairs and woodwork solutions",
      icon: BuildingOffice2Icon,
      href: "/services/carpenters"
    },
    {
      title: "Home Appliance Repair",
      description: "Same-day appliance repair and maintenance",
      icon: SparklesIcon,
      href: "/services/appliance-repair"
    }
  ]

  const specializedHelp = [
    {
      title: "Driver Services",
      description: "Immediate transportation for emergencies and urgent trips",
      icon: TruckIcon,
      features: ["Emergency transport", "Medical trips", "Urgent travel", "Safe driving"]
    },
    {
      title: "Gardening Services",
      description: "Quick garden cleanup and maintenance for events",
      icon: SunIcon,
      features: ["Garden cleanup", "Plant care", "Lawn maintenance", "Event preparation"]
    },
    {
      title: "Security Guard Services",
      description: "Temporary security for events and emergency situations",
      icon: ShieldCheckIcon,
      features: ["Event security", "Property protection", "Emergency watch", "Trained personnel"]
    },
    {
      title: "Event Support Staff",
      description: "Additional hands for functions and celebrations",
      icon: UserPlusIcon,
      features: ["Function assistance", "Serving help", "Setup support", "Event coordination"]
    }
  ]

  const whyChooseFeatures = [
    {
      title: "1–4 Hour Instant Assistance",
      description: "Quick response time for urgent household needs and emergency situations",
      icon: BoltIcon
    },
    {
      title: "Same-Day or Emergency Availability",
      description: "Available for immediate booking on the same day for urgent requirements",
      icon: ClockIcon
    },
    {
      title: "Local Maids Familiar with Bareilly",
      description: "Helpers who understand local customs, festivals, and household traditions",
      icon: ChatBubbleLeftRightIcon
    },
    {
      title: "Trained for Multi-Tasks",
      description: "Skilled in post-event cleaning, guest preparation, and emergency support",
      icon: AcademicCapIcon
    },
    {
      title: "Festival & Event Expertise",
      description: "Special knowledge for festival preparations, functions, and traditional events",
      icon: GiftIcon
    },
    {
      title: "Background-Verified Helpers",
      description: "All helpers are verified and reliable for emergency and urgent assistance",
      icon: ShieldCheckIcon
    }
  ]

  const process = [
    {
      step: "1",
      title: "Share Your Urgent Need",
      description: "Tell us what you need immediately and when you need it"
    },
    {
      step: "2", 
      title: "Get Verified Helpers Assigned",
      description: "We quickly assign available verified helpers to your location"
    },
    {
      step: "3",
      title: "Confirm & Finalize Over Call",
      description: "Quick confirmation call to finalize details and timing"
    },
    {
      step: "4",
      title: "Helper Arrives Within Hours",
      description: "Helper reaches your location within 1-4 hours as committed"
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
                  <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/cities/bareilly" className="text-gray-500 hover:text-red-600">Bareilly</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">On-Demand Helper Service</li>
              </ol>
            </nav>
          </div>
        </section>
      
      {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
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
                    Instant Maid Service
                    <span className="block text-yellow-200">in Bareilly</span>
            </h1>
                  
                  <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed">
                    Same-Day Quick Helper Available 24/7! Get instant maid service within 2-4 hours for emergency cleaning, last-minute cooking, and urgent home maintenance.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ 1-4 Hour Response
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ Background Verified
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ Emergency Available
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
                      <div className="text-2xl font-bold">Same-Day</div>
                      <div className="text-orange-200 text-sm">Booking Available</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold">20+</div>
                      <div className="text-orange-200 text-sm">Bareilly Areas</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-orange-200 text-sm">Emergency Support</div>
                    </div>
                  </div>
                </div>

                <div className="relative hidden lg:block">
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <BoltIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">Instant Response</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <SparklesIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">Emergency Cleaning</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <GiftIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">Festival Support</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <ShieldExclamationIcon className="h-12 w-12 text-white mx-auto mb-3" />
                        <div className="text-white font-semibold text-sm">Family Emergency</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

        {/* Festival & Emergency Services Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Festival & Special Occasion Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Emergency help for festivals, functions, and special family occasions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {emergencyServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-red-100 rounded-xl p-3 mr-4">
                      <service.icon className="h-8 w-8 text-red-600" />
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

        {/* Daily Life Solutions */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Daily Life Emergency Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Instant help for unexpected situations and urgent household needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {instantServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-orange-100 rounded-xl p-3 w-fit mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <CheckCircleIcon className="h-3 w-3 text-green-500 mr-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
            </div>
              ))}
          </div>
        </div>
      </section>

        {/* Technical & Maintenance */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Technical & Maintenance Emergency
            </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Same-day technical services for urgent repairs and maintenance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technicalServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-red-100 rounded-xl p-3 w-fit mb-4 group-hover:bg-red-200 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  <div className="flex items-center text-red-600 font-semibold text-sm mt-4">
                    Get Help Now <ArrowRightIcon className="h-3 w-3 ml-1" />
                </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

        {/* Specialized Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Specialized Emergency Services
            </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Additional emergency support services for complete assistance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specializedHelp.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-red-100 rounded-xl p-3 w-fit mb-4 group-hover:bg-red-200 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <CheckCircleIcon className="h-3 w-3 text-green-500 mr-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </section>

        {/* Why Choose Section */}
        <section className="section-padding bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Why Choose EzyHelpers' Instant Maid Service in Bareilly?
            </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Bareilly homes love our on-demand helper service for speed, professionalism, and reliability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
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

        {/* Process Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                4-Step Easy Booking Process
            </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quick and simple process to get immediate household assistance
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
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Service Areas in Bareilly
            </h2>
              <p className="text-lg text-gray-600">
                Instant maid and helper services available across all major areas in Bareilly
              </p>
                  </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                More Home Services in Bareilly
            </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/cities/bareilly/full-time-maid" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <UsersIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Full-Time Maid Service</h3>
                <p className="text-gray-600 mb-4">8–10 hours daily for complete home support</p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
                </Link>

              <Link href="/cities/bareilly/live-in-maid" className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <ClockIcon className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Live-In Maid Service</h3>
                <p className="text-gray-600 mb-4">Round-the-clock household support & traditional cooking</p>
                <div className="flex items-center text-green-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
              </div>
                </Link>

              <Link href="/cities/bareilly/part-time-maid" className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <ClockIcon className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Part-Time Maid Service</h3>
                <p className="text-gray-600 mb-4">Daily 2–4 hours for cooking and cleaning tasks</p>
                <div className="flex items-center text-purple-600 font-semibold">
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
                Get immediate help for any household emergency or urgent requirement
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
                Call for Quick Helper in Bareilly
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