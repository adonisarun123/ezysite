import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
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
  ArrowRightIcon,
  HandRaisedIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Full-Time Maid Bangalore | Verified Daily Helper',
  description:
    'Full-time maids in Bangalore for daily cleaning, cooking, and home tasks. Perfect for working families needing complete home management support.',
  keywords:
    'full time maid bangalore, full day maid bangalore, daily maid bangalore, househelp bangalore, cook bangalore, babysitter bangalore, elderly care bangalore',
  openGraph: {
    title: 'Full-Time Maid Bangalore | Verified Daily Helper',
    description:
      'Reliable 8–10 hour daily maid service in Bangalore for cleaning, cooking, childcare, or elderly care. Background-verified and trained.',
    url: 'https://ezyhelpers.com/cities/bangalore/full-time-maid',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN'
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/cities/bangalore/full-time-maid'
  }
}

export default function BangaloreFullTimeMaidPage() {
  // Breadcrumbs
  const breadcrumbs = [
    { name: 'Home', url: 'https://ezyhelpers.com' },
    { name: 'Cities', url: 'https://ezyhelpers.com/cities' },
    { name: 'Bangalore', url: 'https://ezyhelpers.com/cities/bangalore' },
    { name: 'Full-Time Maid', url: 'https://ezyhelpers.com/cities/bangalore/full-time-maid' }
  ]

  // Reasons (Why Full-Time Maids Are a Necessity in Bangalore)
  const reasons = [
    {
      title: 'Daily Chores, Simplified',
      description:
        'Full-time maids in Bangalore manage household tasks so you can enjoy your time and reduce stress.',
      icon: HomeIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Fits Busy Work Schedules',
      description:
        'Our maids support you during long shifts, meetings, and hectic workdays, so you can focus without stress.',
      icon: BuildingOffice2Icon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Balance Family & Work',
      description:
        'Maids adjust to your routine, helping manage daily tasks for working parents and homemakers alike.',
      icon: UserGroupIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Ideal for Tech Families',
      description:
        'Perfect for dual-income or joint families managing packed schedules in Bangalore’s tech hubs.',
      icon: SparklesIcon,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    },
    {
      title: 'Help for All Residents',
      description:
        'New to Bangalore or long-settled, our maids bring daily consistency while you handle your priorities.',
      icon: StarIcon,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      title: 'No Live-In Needed',
      description:
        'Get 8–10 hours of help daily without accommodating a maid. Enjoy privacy and clean home comfort.',
      icon: LockClosedIcon,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ]

  // Services
  const fullTimeServices = [
    {
      title: 'Full-Time Housekeeper',
      description:
        'Manage daily home tasks with a flexible 8–10 hour schedule. Perfect for tech professionals in Electronic City and Outer Ring Road.',
      icon: HomeIcon,
      features: [
        'Daily sweeping, mopping, dusting',
        'Bathroom cleaning',
        'Utensil washing',
        'Laundry & ironing',
        'Basic kitchen help'
      ],
      gradient: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Full-Time Cook',
      description:
        'Fresh, healthy meals aligned with your work schedule. Ideal for busy professionals needing breakfast before early meetings and dinner after late work.',
      icon: HeartIcon,
      features: [
        'Breakfast, lunch, dinner prep',
        'South Indian, North Indian & basic continental',
        'Tiffin packing',
        'Market errands',
        'Festival/special meal support'
      ],
      gradient: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      title: 'Full-Day Babysitter',
      description:
        "Reliable childcare support coordinating with parents' schedules. Perfect for working couples in Whitefield and Marathahalli managing school routines.",
      icon: UserGroupIcon,
      features: ['Bathing & feeding', 'Homework assistance', 'Playtime management', 'Pick-up/drop from school or daycare'],
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Full-Time Elderly Care Assistant',
      description:
        'Dedicated daytime care for senior family members. Essential for families needing supervision during work hours.',
      icon: ShieldCheckIcon,
      features: ['Daytime companionship', 'Medication reminders', 'Light medical assistance', 'Hygiene support'],
      gradient: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ]

  const pricingInfo = {
    range: '₹12,000 to ₹20,000/month',
    note: 'Typical salary for 8–10 hour full-time maid services in Bangalore',
    factors: [
      'Type of service: cleaning, cooking, childcare, or elderly care',
      'Maid’s experience, skillset, and language comfort',
      'Daily working hours (usually 8–10) and task complexity',
      'Your location in Bangalore; premium localities may impact salary rates',
      'Cost-effective vs. live-in (no accommodation needed)'
    ]
  }

  const benefits = [
    { title: '8–10 Hour Daily Support', description: 'Get reliable help throughout your day. Perfect for any family that values both privacy and a consistent household routine.', icon: ClockIcon },
    { title: 'Fits Your Lifestyle', description: 'Flexible timing aligned with your office hours, home responsibilities, and regular family activities.', icon: CalendarDaysIcon },
    { title: 'No Accommodation Needed', description: 'Enjoy full-time maid support without the stress of live-in arrangements. Your maid returns home after her shift.', icon: HomeIcon },
    { title: 'Replacement Guarantee', description: 'If your maid is unavailable, we ensure quick replacements so your home routine stays uninterrupted.', icon: ShieldCheckIcon },
    { title: 'Cost-Effective Daily Help', description: 'Skip the hassle of managing multiple part-time helpers. One trained, full-time maid offers better value and consistent quality every day.', icon: CurrencyRupeeIcon },
    { title: 'Trained & Verified', description: 'Background checks, hygiene and safety orientation for reliable performance.', icon: CheckCircleIcon }
  ]

  const lifestyleFit = [
    'Flexible for various household schedules and lifestyle preferences',
    'Adaptable to diverse family needs and daily routines',
    'Clear communication in Hindi, Kannada, or English',
    'Well-versed in apartment rules and gated community protocols with full compliance',
    'Comfortable working in all types of homes, from compact apartments to independent villas',
    'Also ideal for non-working residents, homemakers, or seniors needing consistent, all-day help'
  ]

  const process = [
    { step: '1', title: 'Consultation', description: 'We carefully understand your lifestyle, preferences, and specific requirements', icon: ChatBubbleLeftRightIcon },
    { step: '2', title: 'Matching', description: 'Receive 2-3 curated profiles customized to your specific criteria', icon: UserIcon },
    { step: '3', title: 'Interviews', description: 'Evaluate candidates with interviews and trial periods to ensure a great fit', icon: CheckCircleIcon },
    { step: '4', title: 'Onboarding', description: 'Quick onboarding to get trusted help without delays', icon: SparklesIcon }
  ]

  const bangaloreAreas = [
    'Electronic City', 'Whitefield', 'Marathahalli', 'Koramangala', 'Indiranagar',
    'Jayanagar', 'BTM Layout', 'HSR Layout', 'Sarjapur Road', 'Bannerghatta Road',
    'Yelahanka', 'Hebbal', 'Rajajinagar', 'Malleshwaram', 'Basavanagudi'
  ]

  const faqs = [
    { question: 'What is the difference between full-time maid and live-in maid services?', answer: 'A full-time maid Bangalore works 8-10 hours daily and returns home, while live-in maids stay 24/7. Full-time service offers professional support without accommodation requirements.' },
    { question: 'Can full-day maid in Bangalore adjust to IT professional schedules?', answer: "Yes, our maids are trained to work with early morning starts (as early as 6 AM) and evening schedules (up to 8 PM) to support Bangalore's tech workforce." },
    { question: 'Do full-time maids work on weekends?', answer: 'Our full-day maids typically work 6 days a week with one weekly day off. Emergency weekend support is available on request.' },
    { question: 'Can the maid handle both cooking and cleaning in 8-10 hours?', answer: 'No, one maid typically specialises in a specific task. If you hire a maid for cleaning, she focuses only on cleaning duties. If you hire a cook, she will handle cooking and may assist with light cleaning or top-up work if time allows. For both cooking and cleaning, we recommend hiring two separate helpers to ensure quality and efficiency.' },
    { question: 'Is full-time maid service cost-effective for small families?', answer: "Full-time service offers better value than multiple part-time helpers, especially for working couples in Bangalore's competitive rental market." },
    { question: 'Do you provide maids familiar with North Indian cooking?', answer: 'Yes, we match maids for full-time, based on cuisine preferences, including North Indian, South Indian, and continental cooking skills.' },
    { question: 'How do you ensure the safety of full-time maid services?', answer: 'We ensure safety by verifying every maid’s Aadhaar ID and local address. Police verification is available on request for added security and peace of mind.' },
    { question: 'Can full-time maids manage modern apartment living in Bangalore?', answer: 'Our full-day maids in Bangalore are trained in using modern appliances, following apartment rules, and managing day-to-day urban home needs.' },
    { question: 'Do full-time maids take weekly off?', answer: 'Yes, most full-time maids take one day off per week. The day can be fixed based on mutual agreement and household convenience.' },
    { question: 'How are maids trained before placement?', answer: 'We conduct skill assessment and soft skill orientation before assigning full-time maids. This includes hygiene, safety, and household discipline basics.' },
    { question: 'Are full-time maids available for single-person households?', answer: 'Absolutely. Full-time maids are also ideal for working professionals, senior citizens, or bachelors who need daily help with cleaning and cooking.' },
    { question: 'Do I need to provide food for the full-time maid?', answer: 'Providing meals is not mandatory. Most maids bring their own food, though offering water, tea, or snacks is a courteous gesture. However, offering water, tea, or snacks is a common gesture and helps build a positive working relationship. Many households do choose to provide meals.' },
    { question: 'How do I give feedback or report an issue with the maid?', answer: 'You can contact our customer support or use our feedback portal. We take complaints seriously and ensure professional behavior and performance.' }
  ]

  // Local Business Schema props
  const localBusinessProps = {
    cityName: 'Bangalore',
    stateName: 'Karnataka',
    postalCode: '560001',
    streetAddress: 'Bangalore, Karnataka',
    latitude: 12.9716,
    longitude: 77.5946,
    specificServices: [
      'Full-Time Maid Services',
      'Full-Time Housekeeper Services',
      'Full-Time Cook Services',
      'Full-Day Babysitter Services',
      'Full-Time Elderly Care Services'
    ]
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Schema Markup */}
        <BreadcrumbSchema items={breadcrumbs} />
        <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/cities/bangalore/full-time-maid" />
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
                    Full-Time Maid
                    <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">Bangalore</span>
                  </h1>

                  <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                    Reliable 8–10 hour daily maid service for working families and everyday households across Bangalore. Get trusted help for cleaning, cooking, childcare, or elderly care, customised to your routine.
                  </p>

                  {/* Key Benefits Pills */}
                  <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Background Verified</div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ 8–10 Hour Daily Assistance</div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Affordable, Full-Day Help</div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                    <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                      <span className="relative z-10">
                        <span className="hidden sm:inline">Book Full-Time Maid Now</span>
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
                      <div className="text-2xl font-bold text-white">8–10 hrs</div>
                      <div className="text-primary-200 text-sm">Daily Service</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-white">Experienced</div>
                      <div className="text-primary-200 text-sm">in Urban Homes</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-white">Safe</div>
                      <div className="text-primary-200 text-sm">and Trusted Maids</div>
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

        {/* Why Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
                Why Full-Time Maids Are a Necessity in Bangalore Homes
              </h2>
              <p className="text-xl text-gray-600 mb-12">
              In Bangalore’s busy life with traffic and work pressure, a full-time maid helps manage daily chores so you can focus on family and career.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((item, index) => {
                const IconComponent = (item.icon as any)
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

        {/* Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                What Does a Full-Time Maid in Bangalore Do?
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Each EzyHelpers maid focuses on one core responsibility, like cooking, childcare, or cleaning, ensuring consistent quality for homes across Bangalore, from compact apartments to large villas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {fullTimeServices.map((service, index) => {
                const IconComponent = (service.icon as any)
                return (
                  <div key={index} className={`${service.bgColor} rounded-2xl p-8 hover:shadow-lg transition-shadow`}>
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{service.title}</h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature: string, idx: number) => (
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

            {/* CTA */}
            <div className="text-center">
              <Link href="/hire-helper" className="inline-flex items-center bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
                Book Full-Time Maid Now
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                  How Much Does a Full-Time Maid in Bangalore Cost?
                </h2>
                <p className="text-lg text-gray-600">Transparent Pricing for Daily Domestic Support</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-primary-600 mb-2">{pricingInfo.range}</div>
                  <p className="text-gray-600">{pricingInfo.note}</p>
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

        {/* Benefits */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                What are the Benefits of Hiring a Full-Time Maid in Bangalore?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Daily household support made simple with trained maids and flexible working hours
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = (benefit.icon as any)
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

        {/* Lifestyle Fit */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                What Makes EzyHelpers’ Full-Time Maids Ideal for All Lifestyles and Schedules
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Tailored full-time maid support for every routine, home type, and lifestyle need.
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
              <ul className="space-y-3">
                {lifestyleFit.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our 4-Step Hiring Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Simple and efficient process to get you trusted help quickly</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => {
                const IconComponent = (step.icon as any)
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

        

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Transform Your Bangalore Lifestyle with a Full-Time Maid</h2>
              <p className="text-xl text-primary-100 mb-10 leading-relaxed">
                Simplify home management and make your routine stress-free. Whether you're a working professional, homemaker, or anyone in between, EzyHelpers has the perfect daily maid for your needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/hire-helper" className="bg-white text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl">
                  Book Full-Time Maid Now
                </Link>
                <Link href="tel:+919972571005" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                  Talk to an Expert
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">8–10 hrs</div>
                  <div className="text-primary-200 text-sm">Daily Service</div>
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
                  title: 'Babysitter Services',
                  description: 'Caring and trained babysitters for infants and toddlers.',
                  href: '/services/nanny-babysitter',
                  icon: UserGroupIcon,
                  color: 'text-pink-600',
                  bgColor: 'bg-pink-50'
                },
                {
                  title: 'Eldercare Services',
                  description: 'Day-time or full-day support for senior citizens.',
                  href: '/services/elderly-care',
                  icon: HeartIcon,
                  color: 'text-red-600',
                  bgColor: 'bg-red-50'
                },
                {
                  title: 'Live-In Maids',
                  description: 'Round-the-clock help for families that need residential support.',
                  href: '/cities/bangalore/live-in-maids',
                  icon: ShieldCheckIcon,
                  color: 'text-purple-600',
                  bgColor: 'bg-purple-50'
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
                        {service.title.includes('Babysitter') ? 'Explore Babysitter Services' : service.title.includes('Eldercare') ? 'Explore Senior Care Options' : 'Explore Live-In Maids Services'} <ArrowRightIcon className="h-4 w-4 ml-2" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Areas We Serve in Bangalore</h2>
              <p className="text-lg text-gray-600">Trusted full-time maid services across all Bangalore neighborhoods</p>
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

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Everything you need to know about full-time maid services in Bangalore</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
