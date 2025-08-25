import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
import {
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CheckCircleIcon,
  MapPinIcon,
  ArrowRightIcon,
  HandRaisedIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  CalendarDaysIcon,
  UserIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Senior Citizen Home Services in Bangalore | Elderly Support',
  description:
    'Senior citizen care at home in Bangalore. Trained caregivers for elderly care, meals, medication help, and daily support.',
  openGraph: {
    title: 'Senior Citizen Home Services in Bangalore | Elderly Support',
    description:
      'Trusted in-home elderly care in Bangalore: personal care, medication help, meal prep, mobility support, and companionship.',
    url: 'https://ezyhelpers.com/cities/bangalore/elderly-care',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN'
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/cities/bangalore/elderly-care'
  }
}

export default function BangaloreElderlyCarePage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://ezyhelpers.com' },
    { name: 'Cities', url: 'https://ezyhelpers.com/cities' },
    { name: 'Bangalore', url: 'https://ezyhelpers.com/cities/bangalore' },
    { name: 'Elderly Care', url: 'https://ezyhelpers.com/cities/bangalore/elderly-care' }
  ]

  const whyNeedCare = [
    {
      title: 'Stretched Work Hours',
      description:
        'Long office hours leave little time for elderly members. We ensure dependable daily support at home.',
      icon: ClipboardDocumentCheckIcon
    },
    {
      title: 'Nuclear Families',
      description:
        'Elders often feel alone in small families. Our companions provide emotional warmth and interaction.',
      icon: UserGroupIcon
    },
    {
      title: 'Health Risks at Home',
      description:
        'Risks like falls or missed meds increase when alone. We ensure safety checks and supervision daily.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Distance Barriers',
      description:
        'Living far from parents? Our caretakers act as extended family for daily elder support.',
      icon: HandRaisedIcon
    }
  ]

  const services = [
    {
      title: 'Personal Care Assistance',
      description: 'Gentle, respectful help with daily hygiene tasks to maintain dignity and comfort.',
      features: ['Bathing, grooming, and dressing', 'Toileting and hygiene assistance', 'Assistance with meals'],
      icon: HeartIcon,
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Medical Support at Home',
      description: 'Reliable support with medicines, health tracking, and recovery care at home.',
      features: ['Medication reminders and health tracking', 'Post-hospitalization recovery care', 'Chronic condition management'],
      icon: ShieldCheckIcon,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Companion Care Services',
      description: 'Friendly caretakers providing emotional support and joyful company every day.',
      features: ['Reading, games, and bonding', 'Festival participation and social engagement', 'Daily conversations to reduce isolation'],
      icon: ChatBubbleLeftRightIcon,
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      title: 'Mobility Assistance Specialists',
      description: 'Trained help for safe movement inside and outside the home to prevent falls.',
      features: ['Walking support', 'Wheelchair and transfer aid', 'Fall prevention and home safety checks'],
      icon: UserIcon,
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      title: 'Meal Prep & Diet Management',
      description: 'Healthy, home-style meals tailored to health needs and preferences.',
      features: ['Personalized meal planning', 'Special diet support (low sugar, low salt)', 'Grocery shopping and meal prep'],
      icon: SparklesIcon,
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Safety Monitoring Systems',
      description: 'Extra peace of mind with daily updates, night care, and emergency tools.',
      features: ['Daily health updates to family', 'Night-time supervision options', 'Emergency button setup and support'],
      icon: ShieldCheckIcon,
      gradient: 'from-cyan-500 to-sky-600'
    }
  ]

  const careTypes = [
    {
      title: 'Live-In Elderly Caretaker',
      description:
        '24/7 senior care with continuous support for high-dependency cases. Ideal for bedridden seniors or post-surgery recovery. Includes hygiene, feeding, companionship, and night supervision.',
    },
    {
      title: 'Full-Time Elderly Assistant',
      description:
        'Day or night shifts (8–10 hours) for regular medical and physical assistance including bathing, mobility, meal prep, and vital monitoring.',
    },
    {
      title: 'Part-Time Elderly Helper',
      description:
        'Short daily visits (2–6 hours) for basic support, companionship, and routine help. Cost-effective and flexible.',
    }
  ]

  const whoShouldOpt = [
    'Busy professionals with elderly parents at home',
    'Children living abroad or in other cities',
    'Families with elderly members needing daily care',
    'Recovering patients needing short-term support',
    'Elderly individuals who live alone'
  ]

  const process = [
    { step: '1', title: 'Tell Us Your Needs', description: 'Share routine, health condition, and care timing preferences.', icon: ChatBubbleLeftRightIcon },
    { step: '2', title: 'Receive Profiles', description: 'Get 2–3 verified caretaker profiles based on your needs.', icon: ClipboardDocumentCheckIcon },
    { step: '3', title: 'Interview & Choose', description: 'Speak to selected caretakers and choose your best match.', icon: CalendarDaysIcon },
    { step: '4', title: 'Start Services Quickly', description: 'Get professional care started within 24–72 working hours.', icon: CheckCircleIcon }
  ]

  const bangaloreAreas = [
    'Electronic City', 'Whitefield', 'Marathahalli', 'Koramangala', 'Indiranagar',
    'Jayanagar', 'BTM Layout', 'HSR Layout', 'Sarjapur Road', 'Bannerghatta Road',
    'Yelahanka', 'Hebbal', 'Rajajinagar', 'Malleshwaram', 'Basavanagudi'
  ]

  const faqs = [
    { question: 'Can I hire a part-time senior care assistant in Bangalore?', answer: 'Yes. We offer 2–6 hour part-time care options for meal prep, medication reminders, and companionship.' },
    { question: 'Do you provide live-in caretakers for seniors in Bangalore?', answer: 'Yes. Live-in caretakers provide 24/7 support including hygiene, feeding, companionship, and night supervision.' },
    { question: 'Difference between part-time and full-time elderly care?', answer: 'Part-time: 2–6 hours for light support. Full-time: 8–10 hours for seniors needing regular monitoring or mobility aid.' },
    { question: 'Can I get a temporary caretaker after hospital discharge?', answer: 'Yes. Short-term post-hospitalisation care includes wound care, feeding, medication reminders, and physical support.' },
    { question: 'Are female caretakers available?', answer: 'Yes. Request female caretakers for comfort during personal care tasks.' },
    { question: 'Can I hire a companion for an elderly person who lives alone?', answer: 'Absolutely. Companions engage with reading, conversations, games, and emotional support.' },
    { question: 'Are caretakers trained for bedridden patients?', answer: 'Yes. Trained for repositioning, sponge baths, feeding, and bedsore prevention.' },
    { question: 'Can caretakers manage chronic illnesses like diabetes or BP?', answer: 'Yes. Staff can monitor vitals, follow diet restrictions, and remind prescribed medications.' },
    { question: 'Do I need to provide accommodation for live-in caretaker?', answer: 'Yes. Provide a bed/cot/mattress and bathroom access for efficient care.' },
    { question: 'What if we are not comfortable with the assigned caregiver?', answer: 'We offer prompt replacement and work until we find the perfect skill and personality match.' }
  ]

  const localBusinessProps = {
    cityName: 'Bangalore',
    stateName: 'Karnataka',
    postalCode: '560001',
    streetAddress: 'Bangalore, Karnataka',
    latitude: 12.9716,
    longitude: 77.5946,
    specificServices: [
      'Senior Citizen Home Care',
      'Elderly Care at Home',
      'Live-In Elderly Caretaker',
      'Full-Time Elderly Assistant',
      'Part-Time Elderly Helper'
    ]
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Schema */}
        <BreadcrumbSchema items={breadcrumbs} />
        <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/cities/bangalore/elderly-care" />
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
                  <span className="text-sm font-semibold">Trusted Senior Care Across Bangalore</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Senior Citizen Home Care
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">Bangalore</span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  From medication to companionship, get trusted in-home elderly care so your loved ones feel safe, supported, and never alone.
                </p>

                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Daily Routine Help</div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Personalized Attention</div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Health Monitoring</div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Hygiene Assistance</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                  <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">
                      <span className="hidden sm:inline">Book Senior Care Services</span>
                      <span className="sm:hidden">Book Now</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-primary-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300">
                    <SparklesIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Call +91 9972571005</span>
                    <span className="sm:hidden">Call Now</span>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Personalized</div>
                    <div className="text-primary-200 text-sm">Elderly Care Plans</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Trained</div>
                    <div className="text-primary-200 text-sm">In Senior Handling</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Safe</div>
                    <div className="text-primary-200 text-sm">Home-Based Assistance</div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    {[HeartIcon, ShieldCheckIcon, UserGroupIcon, CheckCircleIcon].map((Icon, idx) => (
                      <div key={idx} className="group bg-white/20 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 transition-all duration-500 transform hover:scale-105 cursor-pointer">
                        <Icon className="h-12 w-12 text-white mx-auto mb-3 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm">Care</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Do Parents Need Care */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Do Elderly Parents in Bangalore Need Care at Home?</h2>
              <p className="text-lg text-gray-600">Modern life often overlooks elderly support. We're here to change that.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyNeedCare.map((item, idx) => {
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Do Our Aged Care Support Services Include?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">From personal care and mobility to meal prep and safety monitoring, we cover it all.</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service, idx) => {
                const IconComponent = (service.icon as any)
                return (
                  <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{service.title}</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((f: string, i: number) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <Link href="/hire-helper" className="inline-flex items-center bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
                Book Senior Care Services
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Care Types */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Types of Elderly Care in Bangalore</h2>
              <p className="text-lg text-gray-600">Choose the right care category based on your needs.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {careTypes.map((type, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{type.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Opt */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Who Should Opt for Aged Care Support?</h2>
              <p className="text-lg text-gray-600">We serve a wide range of households and situations.</p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <ul className="space-y-3">
                {whoShouldOpt.map((item, idx) => (
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
        <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Get Senior Care at Home?</h2>
              <p className="text-lg text-gray-600">Find the right caretaker with our quick, hassle-free process.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, idx) => {
                const IconComponent = (step.icon as any)
                return (
                  <div key={idx} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-yellow-900">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Areas We Serve in Bangalore</h2>
              <p className="text-lg text-gray-600">Trusted senior care services across all Bangalore neighborhoods</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Trusted Home Services by EzyHelpers</h2>
              <p className="text-lg text-gray-600">Complete household support solutions for Bangalore's busy professionals.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Live-In Maid in Bangalore', href: '/cities/bangalore/live-in-maid', description: '24/7 home help for cooking, cleaning, childcare, and eldercare.' },
                { title: 'Full-Time Maid in Bangalore', href: '/cities/bangalore/full-time-maid', description: '8–10 hour daily support with household chores and kitchen tasks.' },
                { title: 'Part-Time Maid in Bangalore', href: '/cities/bangalore/part-time-maid', description: '2–6 hour flexible help for daily cleaning, utensils, and basic upkeep.' }
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
