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
  CurrencyRupeeIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Part-Time Maid Services in Bangalore | Flexible Hourly Help',
  description:
    'Part-time maid services in Bangalore for 2–6 hours daily. Includes cleaning, cooking, caregiving, and driver support for busy families.',
  keywords:
    'part-time maid bangalore, hourly maid bangalore, hourly cleaner bangalore, cook bangalore, babysitter bangalore, elderly care bangalore, domestic help bangalore',
  openGraph: {
    title: 'Part-Time Maid Services in Bangalore | Flexible Hourly Help',
    description:
      'Quick and reliable part-time maids in Bangalore for 2–6 hours daily. Ideal for cooking, cleaning, childcare, and eldercare.',
    url: 'https://ezyhelpers.com/cities/bangalore/part-time-maid',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN'
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/cities/bangalore/part-time-maid'
  }
}

export default function BangalorePartTimeMaidPage() {
  // Breadcrumbs
  const breadcrumbs = [
    { name: 'Home', url: 'https://ezyhelpers.com' },
    { name: 'Cities', url: 'https://ezyhelpers.com/cities' },
    { name: 'Bangalore', url: 'https://ezyhelpers.com/cities/bangalore' },
    { name: 'Part-Time Maid', url: 'https://ezyhelpers.com/cities/bangalore/part-time-maid' }
  ]

  // Why choose part-time maids (from markdown bullets)
  const reasons = [
    {
      title: 'Budget-Conscious Households',
      description: "Both regular households and young professionals need affordable housekeeping services that don't strain monthly budgets.",
      icon: CurrencyRupeeIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Small Apartment Reality',
      description: '1BHK and 2BHK homes in HSR Layout and Indiranagar require efficient hourly domestic help, not full-day assistance.',
      icon: HomeIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Flexible Work Schedules',
      description: 'From traditional 9 to 5 jobs to hybrid work models, families need customisable home care that adapts to changing routines.',
      icon: ClockIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Student & PG Residents',
      description: 'Newcomers to Bangalore and students in shared accommodations need cost-sharing options for household maintenance.',
      icon: UserIcon,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    },
    {
      title: 'Regular Family Needs',
      description: 'Traditional Bangalore families prefer daily maid support for 3–4 hours, valuing privacy and cultural comfort over live-in arrangements.',
      icon: StarIcon,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      title: 'Dual-Income Households',
      description: 'Working couples across all income levels need reliable domestic support without the commitment of full-time staff.',
      icon: UserGroupIcon,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    }
  ]

  // Services (from markdown sections)
  const services = [
    {
      title: 'Part-Time Maid for Cleaning',
      description:
        "Complete home maintenance with flexible housekeeping schedules. Perfect for regular households and busy families across Bangalore.",
      icon: HomeIcon,
      features: ['Daily sweeping & mopping', 'Kitchen & bathroom cleaning', 'Dusting & garbage disposal', 'Laundry & organization'],
      gradient: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Part-Time Cook',
      description:
        'Fresh home-cooked meals with budget-friendly cleaning of cooking areas. Ideal for Bangalore\'s diverse food preferences, from South Indian to North Indian cuisine.',
      icon: HeartIcon,
      features: ['Multi-cuisine cooking', 'Meal preparation', 'Kitchen maintenance', 'Grocery assistance'],
      gradient: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      title: 'Part-Time Babysitter',
      description:
        'Professional childcare for after-school and evenings. Perfect for tech hubs like Marathahalli and Electronic City.',
      icon: UserGroupIcon,
      features: ['Feeding & nap time', 'Playtime supervision', 'School prep and bag packing', 'Hygiene & diaper care'],
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Part-Time Home Care For Elderly',
      description:
        'Compassionate elderly care with hourly domestic help for families. Ideal for a traditional Bangalore neighbourhoods, caring for ageing parents.',
      icon: ShieldCheckIcon,
      features: ['Help with bathing & mobility', 'Medication reminders', 'Daily companionship', 'Health monitoring'],
      gradient: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ]

  const pricingInfo = {
    headline: 'Transparent Pricing Based on Your Needs',
    description: 'The cost of hiring a part-time maid in Bangalore depends on several key factors that ensure fair pricing for every home:',
    factors: [
      'Service type (housekeeping, cooking, childcare, eldercare)',
      'Daily hours (2–6 hour slots available)',
      "Helper's experience and language skills",
      'Location within Bangalore',
      'Frequency (daily, alternate days, weekly)'
    ]
  }

  const benefits = [
    { title: 'Budget-Friendly Cleaning', description: 'Pay only for the hours you need, perfect for young professionals and students.' },
    { title: 'Flexible Housekeeping', description: 'Adjust timing and frequency based on your work schedule and travel plans.' },
    { title: 'No Long-Term Commitment', description: 'Enjoy flexible services without the need for monthly contracts or binding commitments.' },
    { title: 'Same-Day Availability', description: 'Urgent cleaning needs or last-minute guests? We provide hourly domestic help within hours.' },
    { title: 'Customizable Home Care', description: 'Choose specific tasks and focus areas for maximum efficiency in a limited time.' },
    { title: 'Perfect for Small Spaces', description: '1BHK apartments and PG accommodations get thorough cleaning without overpaying.' }
  ]

  const choosingRight = [
    'Bangalore Apartment & Society Ready: Our part-time maids understand apartment complexes, society timings, and urban living requirements across Bangalore.',
    'Background Verified for Trust: Every part-time helper undergoes Aadhaar verification and local address checks for your security.',
    'Task-Specific Training: Our maids are trained for efficient task completion within 2–6 hour windows for maximum productivity.',
    "Multi-Language Communication: Available in Kannada, Hindi, Tamil, and English to serve Bangalore's diverse population effectively.",
    'Flexible & Reliable: From early morning slots to evening schedules, our helpers adapt to your lifestyle.'
  ]

  const process = [
    { step: '1', title: 'Consultation', description: 'We carefully understand your lifestyle, preferences, and specific requirements', icon: ChatBubbleLeftRightIcon },
    { step: '2', title: 'Matching', description: 'Receive 2–3 curated profiles customized to your specific criteria', icon: UserIcon },
    { step: '3', title: 'Interviews', description: 'Evaluate candidates with interviews and trial periods to ensure a great fit', icon: CheckCircleIcon },
    { step: '4', title: 'Onboarding', description: 'Quick onboarding to get trusted help without delays', icon: SparklesIcon }
  ]

  const bangaloreAreas = [
    'Electronic City', 'Whitefield', 'Marathahalli', 'Koramangala', 'Indiranagar',
    'Jayanagar', 'BTM Layout', 'HSR Layout', 'Sarjapur Road', 'Bannerghatta Road',
    'Yelahanka', 'Hebbal', 'Rajajinagar', 'Malleshwaram', 'Basavanagudi'
  ]

  const faqs = [
    { question: 'How many hours do part-time maids work in Bangalore?', answer: 'Most part-time maids work 2–6 hours daily depending on your requirement and the task.' },
    { question: 'What is the cost of hiring a part-time helper in Bangalore?', answer: 'Pricing depends on service type, hours, experience, task complexity, frequency, and your location. Share your needs with EzyHelpers for accurate quotes.' },
    { question: 'Can I hire a maid for only one task, like cleaning or cooking?', answer: 'Yes, you can hire specialized part-time maids for just cooking, cleaning, childcare, or elder care.' },
    { question: 'Is part-time maid service available in gated societies?', answer: 'Absolutely. We match you with society-trained maids who understand entry protocols and community rules.' },
    { question: 'Can I change or replace my part-time helper if needed?', answer: 'Yes. If you are not satisfied, we arrange a quick replacement within 1–3 working days.' },
    { question: 'Do you offer weekend-only part-time help?', answer: 'Yes, weekend-only or alternate-day help is available for cleaning, cooking, or support work.' },
    { question: 'How quickly can I get a part-time helper in Bangalore?', answer: 'Same-day service available. Most bookings are fulfilled within 24–72 hours.' },
    { question: 'Can I change the timings later?', answer: 'Yes. If the current maid is unavailable for the new schedule, we will promptly replace her to match your updated preferences.' },
    { question: 'Is there a difference in pricing between areas?', answer: 'Slight variations may exist based on location and travel time, but we maintain competitive rates citywide.' },
    { question: 'Can regular households afford part-time helpers?', answer: 'Yes, part-time help is designed to suit everyday needs without stretching your budget.' }
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
      'Part-Time Maid Services',
      'Part-Time Housekeeper Services',
      'Part-Time Cook Services',
      'Part-Time Babysitter Services',
      'Part-Time Elderly Care Services'
    ]
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Schema Markup */}
        <BreadcrumbSchema items={breadcrumbs} />
        <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/cities/bangalore/part-time-maid" />
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
                    Part-Time Maid
                    <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">Bangalore</span>
                  </h1>

                  <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                    Quick and reliable part-time maids in Bangalore, available for 2–6 hours daily. Ideal for cooking, cleaning, childcare, and eldercare.
                  </p>

                  {/* Key Benefits Pills */}
                  <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Background Verified</div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Same-Day Availability</div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Flexible 2–6 Hour Slots</div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                    <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                      <span className="relative z-10">
                        <span className="hidden sm:inline">Book Part-Time Maid Now</span>
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
                      <div className="text-2xl font-bold text-white">8K+</div>
                      <div className="text-primary-200 text-sm">Happy Families</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-white">Flexible</div>
                      <div className="text-primary-200 text-sm">Timing Options</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-white">Affordable</div>
                      <div className="text-primary-200 text-sm">Monthly Plans</div>
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
                        <div className="text-white font-semibold text-sm group-hover:text-blue-100">Cleaning</div>
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
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Why Do Bangalore Households Choose Part-Time Maid Services?
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Budget-Friendly Cleaning That Fits Every Lifestyle. Part-time maid services in Bangalore offer the perfect balance of professional home help and cost-effectiveness.
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
                What Services Does a Part-Time Helper in Bangalore Provide?
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                At EzyHelpers, our Bangalore part-time maid services provide specialized maids for each household task, delivering focused expertise and customized care solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => {
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
                Book Part-Time Maid Now
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
                  How Much Does a Part-Time Maid in Bangalore Cost?
                </h2>
                <p className="text-lg text-gray-600">{pricingInfo.headline}</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <p className="text-gray-700 mb-4">{pricingInfo.description}</p>
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
                Benefits of Hiring Part-Time Maid Services in Bangalore
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Reliable hourly maids when you need them; no fuss, no overpaying.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Choosing the Right Helper */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Choosing the Right Part-Time Helper in Bangalore
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Flexible, background-verified helpers who understand Bangalore’s homes and urban family routines.
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
              <ul className="space-y-3">
                {choosingRight.map((item, idx) => (
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
                    <p className="text-gray-600 leading-relaxed">{step.description}.</p>
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
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Transform Your Bangalore Home with Affordable Excellence</h2>
              <p className="text-xl text-primary-100 mb-10 leading-relaxed">
                Part-time maid services in Bangalore offer the perfect solution for modern, busy lifestyles without breaking the budget.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/hire-helper" className="bg-white text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl">
                  Book Part-Time Maid Online
                </Link>
                <Link href="tel:+919972571005" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                  Call Now
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">2–6 hrs</div>
                  <div className="text-primary-200 text-sm">Daily Slots</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5★</div>
                  <div className="text-primary-200 text-sm">Trusted Service</div>
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
                { title: 'Home Cook Services', href: '/services/cooks', description: 'Hire a personal cook for regional meals, special diets, and daily tiffins.', cta: 'Explore Home Cooks Services' },
                { title: 'Deep Cleaning Services', href: '/services/deep-cleaning', description: 'One-time or regular deep cleaning for apartments and villas.', cta: 'Explore Deep Cleaning Services' },
                { title: 'On-Demand Maid Services in Bangalore', href: '/services/on-demand-helpers', description: 'Instant, task-based maid help for cleaning, cooking, and emergencies', cta: 'Explore On-Demand Services' }
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

        {/* Areas We Serve */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Areas We Serve in Bangalore</h2>
              <p className="text-lg text-gray-600">Trusted part-time maid services across all Bangalore neighborhoods</p>
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
                <p className="text-gray-600 mb-4">and many more localities across Bangalore</p>
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
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
