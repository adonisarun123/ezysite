import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
import {
  HomeIcon,
  ShieldCheckIcon,
  ClockIcon,
  HeartIcon,
  CheckCircleIcon,
  PhoneIcon,
  StarIcon,
  UserGroupIcon,
  MapPinIcon,
  AcademicCapIcon,
  CurrencyRupeeIcon,
  BuildingOffice2Icon,
  UserIcon,
  SparklesIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
  HandRaisedIcon,
  ChatBubbleLeftRightIcon,
  LockClosedIcon,
  FireIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Live-In Maid in Bangalore | 24/7 Home Help',
  description: 'Get live-in maids in Bangalore for 24/7 home help. Cooking, cleaning, babysitting, or elderly care. Background checked and trusted.',
  keywords: 'live in maid bangalore, 24hr maid bangalore, stay in maid bangalore, domestic help bangalore, live-in housekeeping bangalore',
  openGraph: {
    title: 'Live-In Maid Services in Bangalore | 24/7 Home Help',
    description: 'Background-verified live-in maids for Bangalore families. Cooking, cleaning, childcare, and elder care with quick placement across the city.',
    url: 'https://ezyhelpers.com/cities/bangalore/live-in-maid',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/cities/bangalore/live-in-maid'
  }
}

export default function BangaloreLiveInMaidPage() {
  // Breadcrumbs for schema
  const breadcrumbs = [
    { name: 'Home', url: 'https://ezyhelpers.com' },
    { name: 'Cities', url: 'https://ezyhelpers.com/cities' },
    { name: 'Bangalore', url: 'https://ezyhelpers.com/cities/bangalore' },
    { name: 'Live-In Maid', url: 'https://ezyhelpers.com/cities/bangalore/live-in-maid' }
  ]

  // Services section from markdown
  const liveInServices = [
    {
      title: 'Live-In Housekeeper',
      description: 'Complete home maintenance with daily cleaning, laundry, and organisation. Perfect for busy Bangalore families in tech hubs like Electronic City.',
      icon: HomeIcon,
      features: ['Daily cleaning', 'Laundry & ironing', 'Deep cleaning', 'Furniture upkeep'],
      gradient: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Live-In Cook',
      description: "Nutritious home-cooked meals tailored to your taste, from South Indian to North Indian cuisine, perfect for Bangalore's diverse population.",
      icon: HeartIcon,
      features: ['Multi-cuisine cooking', 'Meal planning', 'Grocery shopping', 'Dietary restrictions'],
      gradient: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      title: 'Live-In Nanny',
      description: 'Professional childcare with school coordination and activities. Ideal for working parents in Whitefield and Marathahalli areas.',
      icon: UserGroupIcon,
      features: ['School pick-up/drop', 'Homework help', 'Activity coordination', 'Safety monitoring'],
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Live-In Senior Caregiver',
      description: "Compassionate elderly care with basic medical support. Perfect for families caring for ageing parents in Bangalore's traditional neighbourhoods.",
      icon: ShieldCheckIcon,
      features: ['Personal care', 'Medication reminders', 'Doctor visits', 'Companionship'],
      gradient: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ]

  const reasons = [
    {
      title: 'Hectic Bangalore Life',
      description: 'For tech professionals working 12–14 hours, a live-in maid keeps your home clean and stress-free.',
      icon: ClockIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Demanding IT Schedules',
      description: 'Night shifts, client calls, and work travel demand a dependable in-house helper.',
      icon: BuildingOffice2Icon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Nuclear Family Living',
      description: 'With fewer joint families, support systems are shrinking. A live-in maid fills that vital care role.',
      icon: UserGroupIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Dual-Income Struggles',
      description: 'For working couples, managing a household is a full-time task. Our maids ease that pressure.',
      icon: HeartIcon,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ]

  const pricingInfo = {
    range: '₹18,000 to ₹25,000/month',
    factors: [
      'Type of work (cooking, childcare, general housekeeping)',
      "Helper's experience and language skills",
      'Home size and location',
      'Inclusions like food, accommodation, and rest days'
    ]
  }

  const benefits = [
    {
      title: '12-Hour Daily Support',
      description: 'Dedicated assistance while ensuring the maid gets proper rest and privacy.',
      icon: ClockIcon
    },
    {
      title: 'One Focus Area, High Skill',
      description: 'Each maid specializes in one area, ensuring quality and consistency.',
      icon: StarIcon
    },
    {
      title: 'Time for Career & Growth',
      description: 'With domestic work off your plate, focus on work and family.',
      icon: AcademicCapIcon
    },
    {
      title: 'Emotional Peace',
      description: 'Return to a clean, well-managed home every day.',
      icon: HeartIcon
    },
    {
      title: 'Emergency Readiness',
      description: 'Your maid knows your home and can respond quickly to health or urgent needs.',
      icon: FireIcon
    },
    {
      title: 'Value for Money',
      description: 'Instead of juggling multiple part-timers, one trained live-in expert saves costs and confusion.',
      icon: CurrencyRupeeIcon
    }
  ]

  const choosingRight = [
    {
      title: 'Bangalore-Savvy & Apartment-Ready',
      description: "Our maids are trained to handle Bangalore’s modern apartments, gated community rules, and urban family lifestyles.",
      icon: BuildingOffice2Icon
    },
    {
      title: 'Thoroughly Verified for Your Safety',
      description: 'Each maid undergoes Aadhaar verification and local address verification for your peace of mind.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Matched by Skills & Needs',
      description: 'We don’t just assign maids; we match them based on your exact household needs and expectations.',
      icon: CheckCircleIcon
    },
    {
      title: 'Flexible with Family Dynamics',
      description: 'From childcare to festival cooking or odd work hours, our maids adapt with ease.',
      icon: HandRaisedIcon
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Consultation',
      description: 'We carefully understand your lifestyle, preferences, and specific requirements',
      icon: ChatBubbleLeftRightIcon
    },
    {
      step: '2',
      title: 'Matching',
      description: 'Receive 2-3 curated profiles customized to your specific criteria',
      icon: UserIcon
    },
    {
      step: '3',
      title: 'Interviews',
      description: 'Evaluate candidates with interviews and trial periods to ensure a great fit',
      icon: CheckCircleIcon
    },
    {
      step: '4',
      title: 'Onboarding',
      description: 'Quick onboarding to get trusted help without delays',
      icon: SparklesIcon
    }
  ]

  const expectWhenHiring = [
    {
      title: 'Accommodation Guidelines',
      description: 'Provide basic living space, respect, and safety to encourage trust, comfort, and long-term dependable service.'
    },
    {
      title: '24/7 Presence Doesn’t Mean 24/7 Work',
      description: 'Though present 24/7, a live-in maid works for 12 hours a day. Adequate rest ensures long-term reliability and well-being.'
    },
    {
      title: 'Monthly Offs Are a Must',
      description: 'Live-in maids get 2 monthly days off; unused days carry forward and can be taken later flexibly.'
    }
  ]

  const bangaloreAreas = [
    'Electronic City', 'Whitefield', 'Marathahalli', 'Koramangala', 'Indiranagar',
    'Jayanagar', 'BTM Layout', 'HSR Layout', 'Sarjapur Road', 'Bannerghatta Road',
    'Yelahanka', 'Hebbal', 'Rajajinagar', 'Malleshwaram', 'Basavanagudi'
  ]

  const faqs = [
    {
      question: 'How to get a live-in maid in Bangalore?',
      answer: 'Choose a reliable domestic help agency like EzyHelpers. We match you with background-verified maids based on your needs and ensure smooth onboarding and support.'
    },
    {
      question: 'Is it safe to have a live-in maid in Bangalore with kids at home?',
      answer: 'Yes, if you hire through a trusted agency. At EzyHelpers, each live-in maid is background-verified, trained, and experienced in childcare.'
    },
    {
      question: 'What accommodation should I provide for a live-in maid?',
      answer: 'Offer a private or shared room with a bed/cot/mattress and washroom access depending on availability. Many Bangalore homes have a dedicated helper’s room.'
    },
    {
      question: 'What if my live-in maid leaves suddenly?',
      answer: 'Most maids give a one-month notice. If that happens, we help you find a replacement quickly so your household is not disturbed.'
    },
    {
      question: 'Do live-in maids in Bangalore get time off?',
      answer: 'Yes, live-in maids are entitled to two days off per month, scheduled with mutual understanding.'
    },
    {
      question: 'What is the salary of a live-in maid in Bangalore?',
      answer: 'Typically ₹18,000 to ₹25,000 per month depending on experience, duties, and location. Salary usually includes stay, meals, and rest days.'
    },
    {
      question: 'Are the live-in maids background-checked?',
      answer: 'Yes. All maids undergo Aadhaar and address verification. Police verification can be arranged at additional cost on request.'
    },
    {
      question: 'Can live-in maids cook local Bangalore-style food?',
      answer: 'Yes. Many can cook South Indian meals like dosa, sambar, and rasam, as well as North Indian and basic continental dishes.'
    },
    {
      question: 'How soon can I get a live-in maid in Bangalore?',
      answer: 'Usually within 24 to 72 hours depending on your location and requirements.'
    },
    {
      question: 'Can a live-in maid work for two households?',
      answer: 'No. A live-in maid works full-time for one family only for loyalty and focused care.'
    },
    {
      question: 'Do live-in maids speak Kannada or Hindi?',
      answer: 'Most live-in maids can speak Kannada and Hindi for smooth communication with family and building staff.'
    },
    {
      question: 'Are live-in maids suitable for IT professionals?',
      answer: 'Absolutely. Ideal for tech professionals who work long hours or travel often.'
    },
    {
      question: 'Can live-in maids work in apartment buildings?',
      answer: 'Yes. They follow apartment rules and can handle delivery access and building protocols.'
    },
    {
      question: 'Can a live-in maid handle online deliveries or food orders?',
      answer: 'Yes. Many can manage online grocery deliveries and food apps and coordinate with security/mailroom.'
    }
  ]

  // Local business schema props for Bangalore
  const localBusinessProps = {
    cityName: 'Bangalore',
    stateName: 'Karnataka',
    postalCode: '560001',
    streetAddress: 'Bangalore, Karnataka',
    latitude: 12.9716,
    longitude: 77.5946,
    specificServices: [
      'Live-In Maid Services',
      'Live-In Housekeeper Services',
      'Live-In Cook Services',
      'Live-In Nanny Services',
      'Live-In Senior Caregiver Services'
    ]
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Schema Markup */}
        <BreadcrumbSchema items={breadcrumbs} />
        <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/cities/bangalore/live-in-maid" />
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
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content Column */}
                <div className="text-center lg:text-left">
                  {/* Location Badge */}
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <MapPinIcon className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-sm font-semibold">Serving All Bangalore Areas</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                    Live-In Maid Services
                    <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">in Bangalore</span>
                  </h1>

                  <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                    24/7 domestic help for busy families across Bangalore. From Whitefield to Jayanagar, get reliable live-in maids for cooking, cleaning, childcare, and eldercare.
                  </p>

                  {/* Key Benefits Pills */}
                  <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Background Verified</div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Bangalore-Savvy</div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ 24–72hr Placement</div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                    <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                      <span className="relative z-10">
                        <span className="hidden sm:inline">Book Live-In Maid Now</span>
                        <span className="sm:hidden">Book Maid</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white to-primary-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Link>
                    <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300">
                      <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                      <span className="hidden sm:inline">Call +91 9972571005</span>
                      <span className="sm:hidden">Call Now</span>
                    </Link>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-white">10K+</div>
                      <div className="text-primary-200 text-sm">Happy Families</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-primary-200 text-sm">Support Available</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-white">Trained</div>
                      <div className="text-primary-200 text-sm">in Duties</div>
                    </div>
                  </div>
                </div>

                {/* Visual Column */}
                <div className="relative hidden lg:block">
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                    {/* Service Icons Grid */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                        <HomeIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-blue-100 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm group-hover:text-blue-100">Housekeeping</div>
                      </div>
                      <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-600 hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                        <HeartIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-red-100 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm group-hover:text-red-100">Cooking</div>
                      </div>
                      <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-600 hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                        <UserGroupIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-green-100 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm group-hover:text-green-100">Childcare</div>
                      </div>
                      <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-violet-600 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                        <ShieldCheckIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-purple-100 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm group-hover:text-purple-100">Elder Care</div>
                      </div>
                    </div>
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 rounded-full p-3 shadow-lg">
                      <ClockIcon className="h-6 w-6" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 rounded-full p-3 shadow-lg">
                      <CheckCircleIcon className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Bangalore Residents Need Live-In Maids */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
                Why Do Bangalore Residents Need Live-In Maid Services?
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Busy city life makes home tasks hard to manage. Live-in maids help you balance both.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reasons.map((item, index) => {
                const IconComponent = item.icon as any
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                    <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Live-In Maid Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                What Services Does a 24hr Live-In Maid Provide?
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                At EzyHelpers, our live-in maids are trained to focus on one specialised area of domestic work. Whether you live in a compact apartment in Whitefield or a family home in Jayanagar, we match you with a dedicated expert.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {liveInServices.map((service, index) => {
                const IconComponent = service.icon as any
                return (
                  <div key={index} className={`${service.bgColor} rounded-2xl p-8 hover:shadow-lg transition-shadow`}>
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{service.title}</h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircleIcon className={`h-4 w-4 ${service.iconColor} mr-2 shrink-0`} />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA in services section */}
            <div className="text-center">
              <Link href="/hire-helper" className="inline-flex items-center bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
                Book Live-In Maid Now
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                  How Much Does a Live-In Maid in Bangalore Cost?
                </h2>
                <p className="text-lg text-gray-600">Transparent Pricing to Fit Every Home</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-primary-600 mb-2">{pricingInfo.range}</div>
                  <p className="text-gray-600">Monthly salary range in Bangalore</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing depends on:</h3>
                  {pricingInfo.factors.map((factor, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CurrencyRupeeIcon className="h-5 w-5 text-primary-600 mt-1 shrink-0" />
                      <span className="text-gray-700">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Benefits of Hiring a Live-In Maid in Bangalore
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional support designed for Bangalore's modern lifestyle
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon as any
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Choosing the Right Maid */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Choosing the Right Live-In Maid in Bangalore
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                What makes our live-in maids the trusted choice for Bangalore families
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {choosingRight.map((item, index) => {
                const IconComponent = item.icon as any
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Our 4-Step Hiring Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Simple and efficient process to get you trusted help quickly
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => {
                const IconComponent = step.icon as any
                return (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-yellow-900">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                What to Expect When You Hire a Live-In Maid in Bangalore
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                EzyHelpers ensures a smooth, respectful start for families and maids
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {expectWhenHiring.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Areas We Serve in Bangalore</h2>
              <p className="text-lg text-gray-600">Trusted live-in maid services across all Bangalore neighborhoods</p>
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

        {/* Final CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Transform Your Bangalore Lifestyle Today</h2>
              <p className="text-xl text-primary-100 mb-10 leading-relaxed">
                A live-in maid in Bangalore offers trusted, all-round support, making daily life easier for modern, working families. Start today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/hire-helper" className="bg-white text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl">
                  Book Live-in Maid Online
                </Link>
                <Link href="tel:+919972571005" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                  Call +91 9972571005
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-primary-200 text-sm">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5★</div>
                  <div className="text-primary-200 text-sm">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-primary-200 text-sm">Background Verified</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Explore Other Trusted Home Services by EzyHelpers
              </h2>
              <p className="text-lg text-gray-600">Complete household support solutions for Bangalore's busy professionals.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[ 
                {
                  title: 'Nanny Services in Bangalore',
                  description: 'Experienced nannies for full-day or live-in care of infants and young children.',
                  href: '/services/nanny-babysitter',
                  icon: UserGroupIcon,
                  color: 'text-pink-600',
                  bgColor: 'bg-pink-50'
                },
                {
                  title: 'Senior Citizen Care in Bangalore',
                  description: 'Compassionate caregivers for elders for medication, mobility support, companionship and more.',
                  href: '/services/elderly-care',
                  icon: HeartIcon,
                  color: 'text-red-600',
                  bgColor: 'bg-red-50'
                },
                {
                  title: 'Cook for Home in Bangalore',
                  description: 'Home cooks for daily meals, special diets, and regional cuisine preferences.',
                  href: '/services/cooks',
                  icon: SparklesIcon,
                  color: 'text-orange-600',
                  bgColor: 'bg-orange-50'
                }
              ].map((service, index) => {
                const IconComponent = service.icon as any
                return (
                  <Link
                    key={index}
                    href={service.href}
                    className={`group relative ${service.bgColor} rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>
                    </div>

                    <div className="relative z-10">
                      <div className={`w-16 h-16 ${service.bgColor} group-hover:bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 border border-white/20`}>
                        <IconComponent className={`h-8 w-8 ${service.color} group-hover:text-white group-hover:scale-110 transition-all duration-300`} />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center text-primary-600 font-semibold">
                        Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
