import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
import FAQAccordion from '@/components/FAQAccordion'
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
    url: 'https://www.ezyhelpers.com/cities/bangalore/cooks',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN'
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bangalore/cooks'
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
    'Flexible Timings for Busy Lifestyles',
    'Expert in Regional & Daily Cuisine',
    'Veg & Non-Veg Cooking Covered',
    'Trained for Hygiene and Cleanliness'
  ]

  const reasons = [
    {
      title: 'Traffic & Time Constraints',
      description: 'Skip cooking stress after long commutes; our home chefs ensure fresh meals are always ready.',
      icon: CalendarDaysIcon
    },
    {
      title: 'Diverse Taste Preferences',
      description: 'Our home cooks specialise in regional and multi-cuisine dishes tailored to your family\'s food habits and flavour preferences.',
      icon: SparklesIcon
    },
    {
      title: 'Health-Conscious Lifestyle',
      description: 'Get low-oil, diabetic-friendly meals daily. Suitable for health-focused professionals and fitness-conscious families in Bangalore.',
      icon: HeartIcon
    },
    {
      title: 'Elderly and Child Nutrition',
      description: 'Daily soft, nutritious meals prepared specially for elderly parents or kids with dietary sensitivities.',
      icon: UserGroupIcon
    }
  ]

  const services = [
    {
      title: 'Daily Meal Preparation',
      description:
        'Fresh, nutritious meals prepared daily using locally sourced ingredients from Bangalore\'s best markets, accommodating your family\'s taste preferences.',
      icon: FireIcon
    },
    {
      title: 'Kitchen Management & Organization',
      description:
        'Full kitchen organization, grocery planning from nearby stores, ingredient preparation, and maintaining professional home cooking standards.',
      icon: ClipboardDocumentListIcon
    },
    {
      title: 'Specialized Dietary Solutions',
      description:
        'Expert dietary management for diabetic meals, low-sodium preparations, vegetarian, and Jain food requirements; addressing Bangalore\'s health-conscious community needs.',
      icon: CheckCircleIcon
    },
    {
      title: 'Multi-Cuisine Expertise',
      description:
        'Skilled in preparing Karnataka dishes along with popular cuisines from Tamil Nadu, Kerala, Andhra, North India, and even light Indo-Chinese meals.',
      icon: SparklesIcon
    }
  ]

  const cuisines = [
    'South Indian Authentic dosas, sambar, rasam, and rice dishes with homestyle spices and flavours.',
    'North Indian Wholesome sabzis, rotis, parathas, and creamy gravies prepared in traditional style.',
    'Chinese Tasty fried rice, noodles, and Manchurian with Indo-Chinese spices and street-style flair.',
    'Continental Fresh pasta and salad breakfasts made with healthy ingredients.',
    'Regional Indian Dal baati, litti chokha, and Bengali and Gujarati meals rooted in cultural taste.'
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
      points: ['1 to 2 meals per day', 'Breakfast-only or dinner-only options', 'Evening or weekend availability']
    }
  ]

  const process = [
    { step: '1', title: 'Tell Us Your Needs', description: 'Share cuisine, meal count, and timing preferences for daily cooking.', icon: ChatBubbleLeftRightIcon },
    { step: '2', title: 'Get Matched', description: 'Receive verified cook profiles tailored to your family’s unique kitchen needs.', icon: ClipboardDocumentListIcon },
    { step: '3', title: 'Hire and Enjoy', description: 'Get started quickly and enjoy hassle-free, home-cooked meals every day.', icon: CheckCircleIcon }
  ]

  const bangaloreAreas = [
    'Electronic City', 'Whitefield', 'Marathahalli', 'Koramangala', 'Indiranagar',
    'Jayanagar', 'BTM Layout', 'HSR Layout', 'Sarjapur Road', 'Bannerghatta Road',
    'Yelahanka', 'Hebbal', 'Rajajinagar', 'Malleshwaram', 'Basavanagudi'
  ]

  const faqs = [
    {
      question: 'How can I find a reliable cook for home in Bangalore?',
      answer:
        'EzyHelpers connects you with verified and experienced home cooks in Bangalore who undergo background checks and cooking skill assessments. We share shortlisted profiles based on your dietary needs, preferred cuisine, and schedule for a perfect home cooking match.'
    },
    {
      question: 'Do your home cooks accommodate dietary restrictions?',
      answer:
        'Yes, our cooks are experienced enough to prepare meals according to your health needs. Whether it’s diabetic-friendly, Jain food, vegan, or low-sodium diets, EzyHelpers ensures you get a cook who understands and respects your dietary preferences.'
    },
    {
      question: 'Will your home cooks help with grocery and vegetable shopping in Bangalore?',
      answer:
        'Yes, many of our home cooks in Bangalore assist with daily or weekly grocery and vegetable shopping. They can visit local markets or nearby stores to purchase fresh ingredients or accompany you when required. This ensures meals are prepared with fresh, timely ingredients while saving you time and effort.'
    },
    {
      question: 'Can your cook prepare meals for office tiffins?',
      answer:
        'Absolutely. Many Bangalore families trust EzyHelpers’ cooks to prepare home-style meals for office tiffins. It’s a healthier, more cost-effective alternative to restaurant food, especially for busy professionals seeking nutritious lunch options.'
    },
    {
      question: 'How do you ensure food safety and kitchen hygiene?',
      answer:
        'At EzyHelpers, we train all home cooks on kitchen safety, personal hygiene, and clean cooking practices. We make sure cooking is clean and safe by using clean utensils, storing food properly, and training cooks in personal hygiene practices.'
    },
    {
      question: 'Can I hire a cook for specific cuisines?',
      answer:
        'Yes. EzyHelpers provides multi-cuisine home cooks trained in South Indian (Karnataka, Kerala, and Tamil), North Indian, Bengali, Gujarati, and Chinese cuisines, which are perfect for Bangalore’s diverse families.'
    },
    {
      question: 'Is hiring a home cook a good idea?',
      answer:
        'Hiring a cook is one of the best ways to save time and eat healthier. With a reliable cook, you get fresh meals according to your taste, less stress over daily cooking, and improved work-life balance, especially helpful for working couples and elders.'
    },
    {
      question: 'What is the salary of a female cook in Bangalore?',
      answer:
        'The salary of a female home cook in Bangalore depends on her experience, working hours, and specific duties. On average, part-time female cooks earn ₹6,000 to ₹10,000 per month, while full-time cooks typically earn ₹12,000 to ₹20,000 per month. Live-in cooks may charge upwards of ₹25,000/month with added responsibilities.'
    },
    {
      question: 'Can I get a temporary cook for a few weeks or events in Bangalore?',
      answer:
        'Yes, EzyHelpers offers temporary cook services in Bangalore for short-term needs like family functions or when your regular cook is on leave. You can book skilled cooks for a few days, weeks, or just for a special occasion. Our flexible service ensures you get fresh, home-style food without any long-term commitment.'
    },
    {
      question: 'Are male cooks available for home cooking in Bangalore?',
      answer:
        'Yes, EzyHelpers provides both male and female home cooks in Bangalore. Many male cooks are experienced in handling bulk meal preparation, special diets, or cooking for large families. If you have a gender preference, let us know during booking, and we’ll match you with the right home cook for your needs.'
    },
    {
      question: 'Can I hire a cook for elderly care diets in Bangalore?',
      answer:
        'Absolutely. Our trained home cooks in Bangalore can prepare meals that are suitable for elderly family members, including soft food, low-oil dishes, diabetic-friendly recipes, or food suited for age-related health conditions. Whether it\'s a special diet chart from a doctor or simple, easy-to-digest home food, our cooks handle it with care and attention.'
    }
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
                  Cook for Home in Bangalore
                </h1>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Fresh, hygienic, and homestyle meals daily from verified professional home cooks in Bangalore. Personalised cooking tailored to your diet, culture, and daily routine.
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
              <p className="text-lg text-gray-600">Professional home cooking services designed specifically for Bangalore's diverse lifestyle needs, from IT professionals to traditional families.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Are the Different Cook Services Available in Bangalore?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">From daily meal preparation services to special occasion cooking, our skilled home chefs in Bangalore handle all your food needs.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What cuisines do our home cooks specialise in?</h2>
              <p className="text-lg text-gray-600">Our home cooks in Bangalore are trained in multiple cuisines to cater to the city's diverse population.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Types of Home Cook Services Are Available in Bangalore?</h2>
              <p className="text-lg text-gray-600">Explore cook options to suit your family's schedule, meal needs, and lifestyle.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Hire a Cook for Home in Bangalore?</h2>
              <p className="text-lg text-gray-600">Discover our simple, step-by-step process to book a reliable home cook tailored to your family's needs.</p>
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

        {/* Explore Trusted Home Maintenance Services in Bangalore */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Trusted Home Maintenance Services in Bangalore</h2>
              <p className="text-lg text-gray-600">Skilled professionals for all your home improvement, repair, and upgrade needs.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[{
                title: 'Carpenter Services in Bangalore',
                href: '/cities/bangalore/carpenter',
                description: 'Furniture repairs, shelf fitting, and woodwork for your home.',
                linkText: 'Explore Carpenter Services'
              }, {
                title: 'Painter Services in Bangalore',
                href: '/cities/bangalore/painter',
                description: 'Expert painting for interiors, exteriors, or full home makeovers.',
                linkText: 'Explore Painting Services'
              }, {
                title: 'Home Appliance Repair in Bangalore',
                href: '/cities/bangalore/appliance-repair',
                description: 'Same-day service for ACs, fridges, washing machines, and more.',
                linkText: 'Explore Appliance Repair Services'
              }].map((card, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{card.title}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <Link href={card.href} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                    {card.linkText}
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
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
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        

        <Footer />
      </main>
    </>
  )
}
