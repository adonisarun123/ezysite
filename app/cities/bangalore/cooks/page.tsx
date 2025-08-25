import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
import {
  MapPinIcon,
  CheckCircleIcon,
  FireIcon,
  ClipboardDocumentListIcon,
  SparklesIcon,
  UserGroupIcon,
  HeartIcon,
  ArrowRightIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Cook for Home Bangalore | Daily Fresh Meals',
  description:
    'Find a reliable cook for home in Bangalore for daily, live-in, or part-time meal services. Fresh, healthy, and regionally customised food daily.',
  openGraph: {
    title: 'Cook for Home Bangalore | Daily Fresh Meals',
    description:
      'Verified home cooks in Bangalore for daily meals, special diets, and multi-cuisine expertise. Flexible timings and hygienic cooking.',
    url: 'https://ezyhelpers.com/cities/bangalore/cooks',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN'
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/cities/bangalore/cooks'
  }
}

export default function BangaloreCooksPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://ezyhelpers.com' },
    { name: 'Cities', url: 'https://ezyhelpers.com/cities' },
    { name: 'Bangalore', url: 'https://ezyhelpers.com/cities/bangalore' },
    { name: 'Cooks for Home', url: 'https://ezyhelpers.com/cities/bangalore/cooks' }
  ]

  const trustBadges = [
    'Multi-Cuisine Expertise',
    'Fresh Meal Preparation',
    'Kitchen Hygiene Standards',
    'Flexible Timings'
  ]

  const reasons = [
    {
      title: 'Traffic & Time Constraints',
      description: 'Skip cooking stress after long commutes; fresh meals are ready on time.',
      icon: CalendarDaysIcon
    },
    {
      title: 'Diverse Taste Preferences',
      description: 'Regional and multi-cuisine dishes tailored to family taste.',
      icon: SparklesIcon
    },
    {
      title: 'Health-Conscious Lifestyle',
      description: 'Low-oil, diabetic-friendly meals for health-focused families.',
      icon: HeartIcon
    },
    {
      title: 'Elderly and Child Nutrition',
      description: 'Soft, nutritious meals for elders and child-friendly options.',
      icon: UserGroupIcon
    }
  ]

  const services = [
    {
      title: 'Daily Meal Preparation',
      description:
        'Fresh, nutritious meals prepared daily using locally sourced ingredients and your taste preferences.',
      icon: FireIcon
    },
    {
      title: 'Kitchen Management & Organization',
      description:
        'Grocery planning, ingredient prep, tidy counters, and maintaining professional standards.',
      icon: ClipboardDocumentListIcon
    },
    {
      title: 'Specialized Dietary Solutions',
      description:
        'Diabetic-friendly, low-sodium, vegetarian, and Jain meals to match your health goals.',
      icon: CheckCircleIcon
    },
    {
      title: 'Multi-Cuisine Expertise',
      description:
        'Karnataka staples plus Tamil, Kerala, Andhra, North Indian, and light Indo-Chinese.',
      icon: SparklesIcon
    }
  ]

  const cuisines = [
    'South Indian: Dosa, sambar, rasam, rice dishes with homestyle spices',
    'North Indian: Sabzis, rotis, parathas, and gravies in traditional style',
    'Chinese: Fried rice, noodles, Manchurian with Indo-Chinese flair',
    'Continental: Healthy pasta and salad breakfasts',
    'Regional Indian: Dal baati, litti chokha, Bengali and Gujarati meals'
  ]

  const cookTypes = [
    {
      title: 'Live-In Cooks in Bangalore',
      points: ['24/7 kitchen access', 'All daily meals included', 'Basic kitchen cleaning and upkeep']
    },
    {
      title: 'Full-Time Cooks in Bangalore',
      points: ['2 to 3 meals per day', 'Grocery and meal planning', 'Flexible 8 to 10 hour shifts']
    },
    {
      title: 'Part-Time Cooks in Bangalore',
      points: ['1 to 2 meals per day', 'Breakfast-only or dinner-only', 'Evening or weekend availability']
    }
  ]

  const process = [
    { step: '1', title: 'Tell Us Your Needs', description: 'Share cuisine, meal count, and timing preferences for daily cooking.', icon: ChatBubbleLeftRightIcon },
    { step: '2', title: 'Get Matched', description: 'Receive verified cook profiles tailored to your kitchen needs.', icon: ClipboardDocumentListIcon },
    { step: '3', title: 'Hire and Enjoy', description: 'Start quickly and enjoy homestyle meals every day.', icon: CheckCircleIcon }
  ]

  const bangaloreAreas = [
    'Electronic City', 'Whitefield', 'Marathahalli', 'Koramangala', 'Indiranagar',
    'Jayanagar', 'BTM Layout', 'HSR Layout', 'Sarjapur Road', 'Bannerghatta Road',
    'Yelahanka', 'Hebbal', 'Rajajinagar', 'Malleshwaram', 'Basavanagudi'
  ]

  const faqs = [
    { question: 'How can I find a reliable cook for home in Bangalore?', answer: 'We connect you with verified, experienced home cooks who pass background checks and skill assessments. Shortlisted profiles match your diet and schedule.' },
    { question: 'Do your home cooks accommodate dietary restrictions?', answer: 'Yes. Diabetic-friendly, Jain food, vegan, and low-sodium diets are supported by trained cooks.' },
    { question: 'Will your home cooks help with grocery and vegetable shopping?', answer: 'Many cooks assist with daily/weekly grocery shopping from local markets or nearby stores.' },
    { question: 'Can your cook prepare meals for office tiffins?', answer: 'Yes. Many families rely on our cooks for nutritious office tiffins—healthier and cost-effective.' },
    { question: 'How do you ensure food safety and kitchen hygiene?', answer: 'We train cooks on kitchen safety and hygiene: clean utensils, proper storage, and personal cleanliness.' },
    { question: 'Can I hire a cook for specific cuisines?', answer: 'Yes. Multi-cuisine cooks trained in South Indian, North Indian, Bengali, Gujarati, and Chinese.' },
    { question: 'Is hiring a home cook a good idea?', answer: 'It saves time, improves diet quality, and reduces stress—great for working couples and elders.' },
    { question: 'What is the salary of a female cook in Bangalore?', answer: 'Part-time: ₹6,000–₹10,000/month; Full-time: ₹12,000–₹20,000/month; Live-in: ₹25,000+/month depending on duties.' },
    { question: 'Can I get a temporary cook for a few weeks or events?', answer: 'Yes. We offer short-term cooks for functions or when your regular cook is on leave.' },
    { question: 'Are male cooks available for home cooking?', answer: 'Yes. Both male and female cooks are available. Share any preference during booking.' },
    { question: 'Can I hire a cook for elderly care diets?', answer: 'Absolutely. We can follow diet charts for elders: soft food, low-oil, diabetic-friendly, etc.' }
  ]

  const localBusinessProps = {
    cityName: 'Bangalore',
    stateName: 'Karnataka',
    postalCode: '560001',
    streetAddress: 'Bangalore, Karnataka',
    latitude: 12.9716,
    longitude: 77.5946,
    specificServices: [
      'Home Cook Services',
      'Daily Meal Preparation',
      'Live-In Cook',
      'Full-Time Cook',
      'Part-Time Cook'
    ]
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Schema */}
        <BreadcrumbSchema items={breadcrumbs} />
        <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/cities/bangalore/cooks" />
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
                  <span className="text-sm font-semibold">Trusted Home Cooks in Bangalore</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Cook for Home
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">Bangalore</span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Fresh, hygienic, homestyle meals from verified professional home cooks. Tailored to your taste, culture, and routine.
                </p>

                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  {trustBadges.map((tb, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ {tb}</div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                  <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">
                      <span className="hidden sm:inline">Hire Cook for Home</span>
                      <span className="sm:hidden">Hire Now</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-primary-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300">
                    <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Call +91 9972571005</span>
                    <span className="sm:hidden">Call Now</span>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    {[FireIcon, SparklesIcon, ClipboardDocumentListIcon, CheckCircleIcon].map((Icon, idx) => (
                      <div key={idx} className="group bg-white/20 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 transition-all duration-500 transform hover:scale-105 cursor-pointer">
                        <Icon className="h-12 w-12 text-white mx-auto mb-3 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm">Cooking</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose Our Cook for Home in Bangalore?</h2>
              <p className="text-lg text-gray-600">Professional cooking designed for Bangalore’s diverse lifestyles—from IT professionals to traditional families.</p>
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

        {/* Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Cook Services Available in Bangalore</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">From daily meals to special diets and multi-cuisine cooking—get exactly what your family needs.</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
              {services.map((service, idx) => {
                const IconComponent = (service.icon as any)
                return (
                  <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Cuisines */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Cuisines Our Home Cooks Specialise In</h2>
              <p className="text-lg text-gray-600">Trained in multiple cuisines to serve Bangalore’s diverse population.</p>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <ul className="space-y-3">
                {cuisines.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Types of Cooks */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Types of Home Cook Services</h2>
              <p className="text-lg text-gray-600">Choose an option that fits your schedule and meal needs.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {cookTypes.map((type, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{type.title}</h3>
                  <ul className="space-y-2">
                    {type.points.map((p, i) => (
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

        {/* Hiring Process */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Hire a Cook for Home</h2>
              <p className="text-lg text-gray-600">A simple process to get you a reliable home cook tailored to your needs.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {process.map((step, idx) => {
                const IconComponent = (step.icon as any)
                return (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
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
              <p className="text-lg text-gray-600">Trusted home cook services across all Bangalore neighborhoods</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Related Home Services</h2>
              <p className="text-lg text-gray-600">More trusted help for a smoother home routine in Bangalore.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Full-Time Maid in Bangalore', href: '/cities/bangalore/full-time-maid', description: 'Daily home management support: cleaning, kitchen help, and more.' },
                { title: 'On-Demand Helper in Bangalore', href: '/cities/bangalore/on-demand-helper', description: 'Instant help for urgent needs, events, and last-minute support.' },
                { title: 'Senior Citizen Care in Bangalore', href: '/cities/bangalore/elderly-care', description: 'Trained caretakers for mobility help, medication, and companionship.' }
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
