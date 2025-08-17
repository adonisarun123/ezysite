import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  UserIcon,
  CheckCircleIcon,
  PhoneIcon,
  HomeIcon,
  StarIcon,
  HandRaisedIcon,
  SunIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Caretaker for Elderly in Bareilly – Compassionate Support',
  description: 'Get caretaker for elderly at home in Bareilly with trained staff for hygiene, medication, companionship, and emotional support for your loved ones.',
  keywords: 'caretaker for elderly bareilly, elderly care bareilly, old age care bareilly, senior home care bareilly, elder care services bareilly',
  openGraph: {
    title: 'Caretaker for Elderly in Bareilly – Compassionate Support',
    description: 'Get caretaker for elderly at home in Bareilly with trained staff for hygiene, medication, companionship, and emotional support for your loved ones.',
    url: 'https://ezyhelpers.com/services/elderly-care',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/services/elderly-care'
  }
}

export default function ElderlyCare() {
  const services = [
    {
      title: "Daily Personal Care",
      description: "Helping with bathing, dressing, and grooming, ensuring hygiene and comfort for elderly family members.",
      icon: UserIcon,
      features: ["Bathing assistance", "Grooming help", "Dressing support", "Hygiene maintenance"]
    },
    {
      title: "Medicine Management", 
      description: "Reminding and assisting with timely medication, as per the doctor's advice.",
      icon: ShieldCheckIcon,
      features: ["Timely reminders", "Dosage assistance", "Health tracking", "Doctor coordination"]
    },
    {
      title: "Meal Preparation",
      description: "Cooking healthy and favourite meals, keeping in mind dietary needs and local tastes.",
      icon: HeartIcon,
      features: ["Healthy cooking", "Dietary needs", "Local tastes", "Regular meals"]
    },
    {
      title: "Mobility & Support",
      description: "Assisting with moving around the house, going for walks, and preventing falls.",
      icon: ClockIcon,
      features: ["Walking support", "Fall prevention", "Exercise help", "Safe movement"]
    }
  ]

  const benefits = [
    "Respects traditions and daily routines",
    "Handles joint families with care",
    "Fast placement with verified staff",
    "Timely medicine and diet reminders",
    "Regular family updates",
    "Trained in senior care and emergencies",
    "Local language support"
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-16 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-16 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 0L35.98 16.91 52.19 7.72 44.72 23.07 60 30 44.72 36.93 52.19 52.28 35.98 43.09 30 60 24.02 43.09 7.81 52.28 15.28 36.93 0 30 15.28 23.07 7.81 7.72 24.02 16.91z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <div className="text-center lg:text-left">
                {/* Trust Badge */}
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <StarIcon className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-sm font-semibold">Compassionate Senior Care</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Caretaker for Elderly at Home
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">
                    Trustworthy Support for Your Loved Ones
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                  Get verified, trained caretakers for elderly at home in Bareilly for daily support, health monitoring, and compassionate care, ensuring your elders feel safe and cared for at home.
                </p>

                {/* Key Benefits Pills */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
                    ✓ Background Verified
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
                    ✓ 24-72 Hour Placement
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
                    ✓ Complete Elder Care
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Link href="/hire-helper" className="group relative bg-white text-blue-800 hover:bg-blue-50 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">Book Elderly Care Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300">
                    <PhoneIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Call: +91 9972571005</span>
                    <span className="sm:hidden">+91 9972571005</span>
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Medical</div>
                    <div className="text-blue-200 text-sm">Support</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Safety</div>
                    <div className="text-blue-200 text-sm">First Priority</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Dignity</div>
                    <div className="text-blue-200 text-sm">Preserved</div>
                  </div>
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative hidden lg:block">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  {/* Service Icons Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-600 hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <HeartIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-red-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-red-100">Compassionate</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-teal-500 hover:to-cyan-600 hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <ShieldCheckIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-teal-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-teal-100">Medical Care</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-600 hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <UserIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-indigo-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-indigo-100">Companionship</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-600 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <ClockIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-blue-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-blue-100">24/7 Available</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-cyan-400 text-cyan-900 rounded-full p-3 shadow-lg">
                    <SunIcon className="h-6 w-6" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 rounded-full p-3 shadow-lg">
                    <HandRaisedIcon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Why Choose EzyHelpers for Elderly Care?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compassionate, professional senior care that prioritizes comfort, dignity, and well-being
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-teal-600 mt-1 shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Comprehensive Senior Care Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional elderly care services designed to support independence and enhance quality of life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center shrink-0">
                      <IconComponent className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our elderly care services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What does daily personal care include for elderly at home in Bareilly?",
                  answer: "Daily personal care by a caretaker for elderly at home in Bareilly includes bathing, grooming, dressing, toilet assistance, and maintaining hygiene. EzyHelpers' home elder care services in Bareilly ensure seniors feel clean, comfortable, and cared for with dignity and respect."
                },
                {
                  question: "Do elderly caretakers in Bareilly help with medicine management?",
                  answer: "Yes, under our home elder care services in Bareilly, caretakers for elderly at home help with timely medication reminders and dosage assistance as per doctor's advice, ensuring seniors maintain their health routines safely and consistently."
                },
                {
                  question: "Do your elderly caretakers in Bareilly help with personal hygiene?",
                  answer: "Yes, our caretaker for elderly at home in Bareilly assists with hygiene tasks such as bathing, grooming, dressing, and cleanliness. EzyHelpers ensures seniors receive respectful and supportive hygiene care at home."
                },
                {
                  question: "What kind of meals do your caretakers prepare for seniors in Bareilly?",
                  answer: "Our home elder care services in Bareilly include preparing healthy and locally preferred meals. Caretakers for elderly at home consider dietary restrictions, personal taste, and medical needs while cooking for seniors."
                },
                {
                  question: "Can I get a caretaker for post-hospital recovery at home in Bareilly?",
                  answer: "Yes, EzyHelpers offers caretakes in Bareilly trained in post-hospital recovery. Our services include medication support, diet monitoring, rest assistance, and safe mobility during the recovery period."
                },
                {
                  question: "Can I hire a companion for an elderly person who lives alone?",
                  answer: "Absolutely. Our elderly care assistants engage seniors with reading, conversations, games, and emotional support to prevent loneliness and isolation."
                },
                {
                  question: "Are caretakers trained in handling bedridden patients?",
                  answer: "Yes, our senior caretakers in Bangalore are trained to support bedridden seniors with repositioning, sponge baths, feeding, and bedsore prevention."
                },
                {
                  question: "Can elderly caretakers manage chronic illnesses like diabetes or BP?",
                  answer: "Yes. Our staff is trained to monitor vital signs, follow diet restrictions, and remind seniors to take prescribed medications for chronic conditions."
                },
                {
                  question: "Do I need to provide accommodation for a live-in caretaker?",
                  answer: "Yes. A live-in caretaker needs to be provided with a bed, cot, or mattress and access to a bathroom. It ensures they stay rested and care efficiently."
                },
                {
                  question: "What if my parent or elderly member is uncomfortable with the assigned caregiver?",
                  answer: "We offer immediate replacement within 24 hours and work until we find the perfect personality and skill match."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0 transition-transform group-open:rotate-180">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-cyan-700 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Give Your Loved Ones the Care They Deserve
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Trust EzyHelpers to provide compassionate, professional elderly care that allows your family members to age gracefully in the comfort of their own home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire-helper" className="btn-secondary bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-4">
              Book Compassionate Care Now
            </Link>
            <Link href="tel:+919972571005" className="btn-secondary border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <PhoneIcon className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Call +91 9972571005</span>
              <span className="sm:hidden">Call Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
              Explore Our Other Services
            </h2>
            <p className="text-lg text-gray-600">
              Complete your home care needs with our wide range of domestic help services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Housekeeping & Deep Cleaning",
                description: "Professional deep cleaning, sofa washing, and kitchen sanitisation in Bareilly",
                href: "/services/deep-cleaning"
              },
              {
                title: "Cook Services", 
                description: "Expert cooks for daily meals, special occasions, or diet-specific cooking in Bareilly",
                href: "/services/cooks"
              },
              {
                title: "Driver Services",
                description: "Reliable drivers for school pickups, grocery runs, and local travel in Bareilly",
                href: "/services/drivers"
              }
            ].map((service, index) => (
              <Link key={index} href={service.href} className="block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="text-teal-600 font-medium hover:text-teal-700">
                  Learn More About {service.title} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 