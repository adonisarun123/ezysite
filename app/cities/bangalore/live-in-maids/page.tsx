import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CityBlogLinks from '@/components/CityBlogLinks'
import FAQAccordion from '@/components/FAQAccordion'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
import NestCTA from '@/components/NestCTA'
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
  CurrencyRupeeIcon,
  BuildingOffice2Icon,
  UserIcon,
  SparklesIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Live-In Maid in Bangalore | 24 Hrs Maid Service',
  description: 'Get a verified live-in maid in Bangalore from ₹18,000/mo. 24 hrs maid service for cooking, cleaning & care, no hidden charges, free replacement.',
  keywords: 'live-in maid Bangalore, 24 hrs maid service, 24 hour maid Bangalore, full-time maid services Bangalore',
  openGraph: {
    title: 'Live-In Maid in Bangalore | 24 Hrs Maid Service',
    description: 'Get a verified live-in maid in Bangalore from ₹18,000/mo. 24 hrs maid service for cooking, cleaning & care, no hidden charges, free replacement.',
    url: 'https://www.ezyhelpers.com/cities/bangalore/live-in-maids',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bangalore/live-in-maids'
  }
}

export default function BangaloreLiveInMaidsPage() {
  
  // Breadcrumb schema for SEO
  const breadcrumbs = [
    { name: "Home", url: "https://www.ezyhelpers.com" },
    { name: "Services", url: "https://www.ezyhelpers.com/services" },
    { name: "Bangalore", url: "https://www.ezyhelpers.com/cities/bangalore" },
    { name: "Live-In Maids", url: "https://www.ezyhelpers.com/cities/bangalore/live-in-maids" }
  ]

  const liveInServices = [
    {
      title: "Live-In Housekeeper",
      description: "Best suited for busy professionals and large apartments where daily upkeep is non-negotiable. A live-in housekeeper handles sweeping, mopping, dusting, laundry, ironing, and home organisation every day, so you return to a spotless home without lifting a finger. Ideal for working couples in tech hubs like Electronic City and Marathahalli who need consistent house help.",
      icon: HomeIcon,
      features: ["Daily cleaning", "Laundry & ironing", "Deep cleaning", "Furniture upkeep"],
      gradient: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Live-In Cook",
      description: "Best suited for families who want fresh, home-cooked meals daily without the stress of planning. Our live-in cook prepares South Indian, North Indian, and regional dishes tailored to your taste and dietary needs. A great fit for elderly parents, children, or anyone wanting a dedicated cooking maid for home who manages meals and groceries end-to-end.",
      icon: HeartIcon,
      features: ["Multi-cuisine cooking", "Meal planning", "Grocery shopping", "Dietary care"],
      gradient: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      title: "Live-In Nanny",
      description: "Best suited for working parents who need trusted, full-day childcare at home. A live-in nanny manages school pick-up and drop-off, homework, playtime, meals, and safety monitoring, giving you peace of mind during long workdays. Ideal for nuclear families in Whitefield, HSR Layout, and Sarjapur Road without nearby family support.",
      icon: UserGroupIcon,
      features: ["School pick-up/drop", "Homework help", "Activity coordination", "Safety monitoring"],
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      title: "Live-In Senior Caregiver",
      description: "Best suited for families caring for ageing parents who need attentive, round-the-clock support. A live-in senior caregiver assists with personal care, medication reminders, mobility, doctor visits, and companionship. A compassionate choice for elders living with adult children or staying independently in Bangalore's traditional neighbourhoods.",
      icon: ShieldCheckIcon,
      features: ["Personal care", "Medication reminders", "Doctor visits", "Companionship"],
      gradient: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ]

  const bangaloreAreas = [
    "Electronic City", "Whitefield", "Marathahalli", "Koramangala", "Indiranagar",
    "Jayanagar", "BTM Layout", "HSR Layout", "Sarjapur Road", "Bannerghatta Road",
    "Yelahanka", "Hebbal", "Rajajinagar", "Malleshwaram", "Basavanagudi"
  ]

  const pricingInfo = {
    range: "₹18,000 – ₹25,000 / month",
    factors: [
      "Type of work (cooking, childcare, housekeeping, or elder care)",
      "The maid's experience and language skills (Kannada, Hindi, English)",
      "Home size and your location in Bangalore",
      "Inclusions like food, accommodation, and rest days"
    ]
  }

  const process = [
    {
      step: "1",
      title: "Tell Us Your Needs",
      description: "Share your requirements for housekeeping, cooking, childcare, eldercare, or other household support.",
      icon: ChatBubbleLeftRightIcon
    },
    {
      step: "2", 
      title: "Get Verified Profiles",
      description: "Receive background-verified helper profiles matched to your needs.",
      icon: UserIcon
    },
    {
      step: "3",
      title: "Interview & Select",
      description: "Speak with shortlisted helpers through a video call and choose the best fit.",
      icon: CheckCircleIcon
    },
    {
      step: "4",
      title: "Confirm & Onboard",
      description: "We coordinate the joining process and send the selected helper on the agreed date.",
      icon: SparklesIcon
    }
  ]

  const faqs = [
    {
      question: "How much is 24 hrs maid service in Bangalore?",
      answer: "A live-in maid/24 hrs maid service in Bangalore typically costs ₹18,000–₹25,000 per month, depending on duties, experience, and home size."
    },
    {
      question: "Does a live-in maid work 24 hours or 12 hours?",
      answer: "A live-in maid stays at your home 24/7 for presence and emergencies, but actively works around 12 hours a day, with proper rest."
    },
    {
      question: "Is EzyHelpers a registered live-in maid agency in Bangalore?",
      answer: "Yes. We are a trusted live-in maid agency providing Aadhaar-verified, background-checked helpers, and we are registered with DWSSC & Skill India."
    },
    {
      question: "Can a live-in maid cook and clean both?",
      answer: "Each maid specialises in one core area for quality, but many handle a primary skill (like cooking) with light support tasks. Tell us your priority, and we'll match accordingly."
    },
    {
      question: "Do you provide live-in maids in Electronic City and Whitefield?",
      answer: "Yes. We serve Electronic City, Whitefield, Marathahalli, HSR Layout, and all major Bangalore neighbourhoods."
    },
    {
      question: "How soon can I get a live-in maid in Bangalore?",
      answer: "In most cases, a verified live-in maid is placed within 24–72 hours, depending on your requirements, preferred skills, location, and helper availability. Once we understand your needs, we shortlist suitable background-verified profiles, arrange interviews, and help you onboard the selected helper as quickly as possible. Our goal is to make the hiring process smooth, efficient, and hassle-free."
    },
    {
      question: "Do live-in helpers speak Kannada or Hindi?",
      answer: "Yes. We match helpers based on your language preference, including Kannada, Hindi, and English, to help ensure smooth communication and a comfortable experience for your family."
    },
    {
      question: "What is the difference between a live-in maid and a full-time maid?",
      answer: "A live-in maid stays at your home and provides support throughout the day within a structured work schedule. A full-time maid works fixed hours and returns home after 8-10 hours of shift. Live-in maids are often preferred by families needing childcare, elder care, or household support beyond standard working hours."
    }
  ]

  // Local business schema props for Bangalore
  const localBusinessProps = {
    cityName: "Bangalore",
    stateName: "Karnataka",
    postalCode: "560001",
    streetAddress: "Bangalore, Karnataka",
    latitude: 12.9716,
    longitude: 77.5946,
    specificServices: [
      "Live-In Maid Services",
      "Live-In Housekeeper Services",
      "Live-In Cook Services",
      "Live-In Nanny Services",
      "Live-In Senior Caregiver Services"
    ]
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Schema Markup */}
        <BreadcrumbSchema items={breadcrumbs} />
        <FAQSchema faqs={faqs} aboutPage="https://www.ezyhelpers.com/cities/bangalore/live-in-maids" />
        <LocalBusinessSchema {...localBusinessProps} />
        
        <Navbar />
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white pt-32 pb-20 overflow-hidden">

          {/* Background Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
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

                  <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                    Live-In Maid Services in Bangalore – Trusted 24 Hrs Maid Service & Home Help
                  </h1>
                  
                  <p className="text-xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                    Hire a background-verified live-in maid/24 hrs maid in Bangalore for round-the-clock home support. From Whitefield to Jayanagar, get dependable 24 hrs maid service for cooking, cleaning, childcare, and elder care.
                  </p>

                  {/* Key Benefits Pills */}
                  <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ Background-Checked Helpers
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ Trusted Across Bangalore
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                      ✓ Dependable Home Help Experts
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                    <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                      <span className="relative z-10">
                        Book Live-In Maid Now
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white to-primary-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Link>
                    <Link href="tel:+918031411776" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300">
                      <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                      Call Now
                    </Link>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-white">Dedicated</div>
                      <div className="text-primary-200 text-sm">Maid</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-primary-200 text-sm">Verified</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-white">Trained</div>
                      <div className="text-primary-200 text-sm">in Cooking, Childcare & Elder Care</div>
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

        {/* What Is a Live-In Maid */}
        <section className="section-padding bg-white border-b border-gray-100">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                What Is a Live-In Maid in Bangalore?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A live-in maid in Bangalore is a full-time domestic helper who stays at your home and supports your household throughout the day, while working a structured 12-hour shift with adequate rest. It is the most reliable form of 24 hrs maid service in Bangalore for busy families who need a stay-at-home maid for cooking, cleaning, or care under one roof. EzyHelpers is a trusted live-in maid agency in Bangalore, connecting families with verified, trained helpers across all major neighbourhoods.
              </p>
            </div>
          </div>
        </section>

        {/* Why Do Families Need a Live-In Maid */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Why Do Families Need a Live-In Maid/24-Hour Live-In Maid Service in Bangalore?
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                Busy city life makes household tasks hard to manage. A live-in maid keeps your home running so you can focus on work and family.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Hectic Bangalore Life",
                  description: "Long work hours leave little time for household management. A live-in maid provides dedicated support based on your family's specific needs, making daily life more manageable.",
                  icon: ClockIcon,
                  color: "text-blue-600",
                  bgColor: "bg-blue-100"
                },
                {
                  title: "Demanding IT Schedules", 
                  description: "Night shifts, client calls, and frequent travel call for dependable in-house help that is available whenever you need it.",
                  icon: BuildingOffice2Icon,
                  color: "text-purple-600",
                  bgColor: "bg-purple-100"
                },
                {
                  title: "Nuclear Family Living",
                  description: "With fewer joint families, everyday support systems are shrinking. A live-in maid fills that vital care and household role.",
                  icon: UserGroupIcon,
                  color: "text-green-600",
                  bgColor: "bg-green-100"
                },
                {
                  title: "Dual-Income Households",
                  description: "For working couples, running a home is a full-time job. A full-time, stay-at-home maid in Bangalore eases that daily pressure.",
                  icon: HeartIcon,
                  color: "text-red-600",
                  bgColor: "bg-red-100"
                }
              ].map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                    <div className={`w-14 h-14 ${item.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                      <IconComponent className={`h-7 w-7 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* What Types of Services Are Available */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                What Types of 24-Hour Maid Services Are Available in Bangalore?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each EzyHelpers live-in maid specialises in one area of domestic work, so you get a dedicated expert matched to your household, whether you live in a compact apartment in Electronic City or a family home in Jayanagar.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {liveInServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div key={index} className={`${service.bgColor} rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all`}>
                    <div className="flex items-center space-x-5 mb-5">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shrink-0 shadow-md`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 font-display">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="bg-white p-5 rounded-xl border border-gray-100">
                      <div className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm font-medium text-gray-700">
                          <CheckCircleIcon className={`h-5 w-5 ${service.iconColor} mr-2 shrink-0`} />
                          {feature}
                          </div>
                      ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 12-Hour Model Explained */}
        <section className="section-padding bg-primary-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 md:p-14 shadow-xl text-center border border-primary-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                How Does 24-Hour Maid Service Actually Work? <span className="text-primary-600 block sm:inline mt-2 sm:mt-0">(12-Hour Model Explained)</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Searching for '24x7 house help' or a '12-hour maid'? A live-in maid is the practical solution. She stays in your home around the clock for presence and emergencies, while actively working a structured 12-hour day. You get dependable, all-day household support from one trusted helper, without juggling multiple part-time workers.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                  How Much Does a Live-In Maid in Bangalore Cost?
                </h2>
                <p className="text-lg text-gray-600">
                  Transparent pricing to fit every home, no hidden charges.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-lg border border-primary-100">
                <div className="text-center mb-10">
                  <div className="text-4xl md:text-5xl font-bold text-primary-700 mb-3">{pricingInfo.range}</div>
                  <p className="text-gray-600">That is the typical 24 hrs maid service Bangalore price range. Your exact cost depends on:</p>
                </div>

                <div className="space-y-4 max-w-2xl mx-auto">
                  {pricingInfo.factors.map((factor, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm">
                      <CurrencyRupeeIcon className="h-6 w-6 text-primary-600 shrink-0" />
                      <span className="text-gray-800 font-medium">{factor}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-10">
                    <p className="text-gray-700 font-medium mb-6">Contact us for an exact quote based on your household.</p>
                    <Link href="tel:+918031411776" className="inline-flex items-center bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg">
                        <PhoneIcon className="w-5 h-5 mr-2" /> Call 080-31411776
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose EzyHelpers */}
        <section className="section-padding bg-gray-50 border-t border-gray-200">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Why Choose EzyHelpers — A Trusted Live-In Maid Agency in Bangalore
              </h2>
              <p className="text-lg text-gray-600">
                As an established live-in maid agency in Bangalore, we don't just send you a maid; we match the right helper to your home and needs.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Thoroughly Verified for Safety</h3>
                <p className="text-gray-600">Every maid undergoes Aadhaar verification and local address checks for complete peace of mind.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <StarIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Matched by Skills & Needs</h3>
                <p className="text-gray-600">We share 2–3 customised profiles based on your exact requirements, not random assignments.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <BuildingOffice2Icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced in Urban Households</h3>
                <p className="text-gray-600">Our helpers are familiar with apartment living, gated communities, and the routines of modern Bangalore families.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                    <HeartIcon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Support That Fits Your Lifestyle</h3>
                <p className="text-gray-600">Every household is different. We help you find helpers who can align with your daily schedule, preferences, and home requirements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Our Simple 4-Step Hiring Process
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {process.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary-100 group-hover:bg-primary-100 transition-colors">
                        <IconComponent className="h-8 w-8 text-primary-600" />
                      </div>
                      <div className="absolute -top-2 right-1/4 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-md">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-16 bg-primary-50 rounded-2xl p-8 text-center max-w-3xl mx-auto border border-primary-100">
                <h3 className="text-2xl font-bold text-primary-800 mb-2">Quick & Hassle-Free Placement</h3>
                <p className="text-lg text-primary-700">Get matched with a suitable helper in just a few days, depending on availability.</p>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="section-padding bg-gray-50 border-y border-gray-200">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Live-In Maid Service Across All Bangalore Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We provide trusted live-in maids and house help across every major Bangalore neighbourhood, including:
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap justify-center gap-3">
                {bangaloreAreas.map((area, index) => (
                  <div key={index} className="bg-white rounded-full px-5 py-3 border border-gray-200 shadow-sm text-gray-700 font-medium text-lg">
                    {area}
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <p className="text-gray-600 mb-6 text-lg">Looking for maid service in any other area? We very likely serve your locality, just check your pin code with us.</p>
                <Link href="/hire-helper" className="inline-flex items-center bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg">
                  Check Service in Your Area
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect When You Hire a Live-In Maid in Bangalore */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                What Should You Expect When Hiring a Live-In Maid in Bangalore?
              </h2>
              <p className="text-lg text-gray-600">
                Hiring live-in help is simple once you know how it works. Here's what to expect with an EzyHelpers live-in maid, so families and maids start on the right foot.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <HomeIcon className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Accommodation You Provide</h3>
                    <p className="text-gray-600">Give your live-in maid a basic, private living space along with safety and respect. A comfortable stay builds trust and supports long-term, dependable house help.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <ClockIcon className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Presence, 12-Hour Duty Schedule</h3>
                    <p className="text-gray-600">A live-in maid stays in your home but works within a structured 12-hour schedule that includes household tasks, meal breaks, and rest periods. This approach ensures reliable support while promoting a healthy and sustainable work arrangement.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <CalendarDaysIcon className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Monthly Days Off Are a Must</h3>
                    <p className="text-gray-600">Every live-in maid gets 2 paid days off each month. Unused leave carries forward, so leave can be planned flexibly around your family's schedule.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white text-center">
            <div className="container-custom max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white">
                    Book Trusted 24-Hrs Maid Service in Bangalore Today
                </h2>
                <p className="text-lg mb-10 text-primary-100">
                    Get a verified live-in maid / 24 hrs maid service in Bangalore for cooking, cleaning, childcare, and elder care, and get your time and peace of mind back. Trusted by thousands of Bangalore families.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/hire-helper" className="bg-white text-primary-800 font-bold text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-xl">
                        Book Live-In Maid Online
                    </Link>
                    <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 px-10 rounded-xl border-2 border-white hover:bg-white/10 transition-all">
                        Call 080-31411776
                    </Link>
                </div>
            </div>
        </section>

        {/* Related Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Explore Other Trusted Home Services by EzyHelpers
              </h2>
              <p className="text-lg text-gray-600">
                Complete household support solutions for Bangalore's busy professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Nanny Services in Bangalore",
                  description: "Experienced nannies for full-day or live-in care of infants and young children.",
                  href: "/cities/bangalore/nanny-babysitter",
                  icon: UserGroupIcon,
                  color: "text-pink-600",
                  bgColor: "bg-pink-50"
                },
                {
                  title: "Senior Citizen Care in Bangalore", 
                  description: "Compassionate caregivers for elders for medication, mobility support, companionship and more.",
                  href: "/cities/bangalore/elderly-care",
                  icon: HeartIcon,
                  color: "text-purple-600",
                  bgColor: "bg-purple-50"
                },
                {
                  title: "Cook for Home in Bangalore",
                  description: "Home cooks for daily meals, special diets, and regional cuisine preferences.",
                  href: "/cities/bangalore/cooks",
                  icon: SparklesIcon,
                  color: "text-green-600",
                  bgColor: "bg-green-50"
                }
              ].map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Link key={index} href={service.href} className={`bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all group`}>
                    <div className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`h-7 w-7 ${service.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary-600 font-bold group-hover:text-primary-700">
                      {service.title.includes('Nanny') ? 'Learn About Nanny Services' : service.title.includes('Senior') ? 'Learn About Senior Care' : 'Learn About Home Cook'}
                      <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
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