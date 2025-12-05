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
  StarIcon,
  SunIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Newborn Babycare in Bareilly – Trained Japa Maids',
  description: 'Looking for newborn babycare in Bareilly? Hire trained Japa maids for postnatal care, baby feeding, massage, and support—safe, gentle, and experienced help.',
  keywords: 'japa maid bareilly, newborn babycare bareilly, postnatal care bareilly, baby massage bareilly, postpartum care bareilly',
  openGraph: {
    title: 'Newborn Babycare in Bareilly – Trained Japa Maids',
    description: 'Looking for newborn babycare in Bareilly? Hire trained Japa maids for postnatal care, baby feeding, massage, and support—safe, gentle, and experienced help.',
    url: 'https://ezyhelpers.com/services/japa',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/services/japa'
  }
}

export default function JapaPage() {
  const services = [
    {
      title: "Newborn Baby Care",
      description: "Complete 24/7 newborn care including feeding, bathing, diaper changes, and establishing healthy sleep routines.",
      icon: HeartIcon,
      features: ["Feeding support", "Bathing & hygiene", "Sleep routines", "Umbilical care"]
    },
    {
      title: "Postpartum Mother Care", 
      description: "Traditional postpartum care with massage (malish), healing recipes, and personal hygiene support for new mothers.",
      icon: ShieldCheckIcon,
      features: ["Traditional massage", "Healing recipes", "Hygiene care", "Recovery support"]
    },
    {
      title: "Baby Massage (Malish)",
      description: "Gentle oil massage techniques to improve baby's sleep, digestion, and overall development.",
      icon: UserIcon,
      features: ["Traditional techniques", "Safe handling", "Better sleep", "Improved digestion"]
    },
    {
      title: "Special Care Support",
      description: "Specialized care for C-section recovery, premature babies, twins, and high-risk pregnancy recovery.",
      icon: ClockIcon,
      features: ["C-section care", "Premature care", "Twin support", "High-risk recovery"]
    }
  ]

  const benefits = [
    "Verified & Background-Checked",
    "Traditional Postpartum Expertise",
    "Certified in First-Aid",
    "Safe & Hygienic Practices",
    "Flexible Booking Options",
    "Traditional Massage Experts",
    "24/7 Support Available"
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-700 via-pink-600 to-pink-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-24 right-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-24 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 0C13.432 0 0 13.432 0 30s13.432 30 30 30 30-13.432 30-30S46.568 0 30 0zm0 50c-11.046 0-20-8.954-20-20s8.954-20 20-20 20 8.954 20 20-8.954 20-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
                  <span className="text-sm font-semibold">Expert Newborn Care</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Expert Newborn Babycare
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">
                    in Bareilly
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                  Gentle, trained postpartum care and japa maid services for mother and baby in Bareilly, with trusted local experience and traditional practices.
                </p>

                {/* Key Benefits Pills */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
                    ✓ Verified & Background-Checked
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
                    ✓ Traditional Expertise
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
                    ✓ Safe & Hygienic
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  <Link
                    href="/hire-helper"
                    className="inline-flex items-center justify-center w-full bg-white text-pink-600 font-semibold text-lg py-4 px-6 rounded-xl border-2 border-pink-600 hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    Book Newborn Babycare Now
                  </Link>

                  <Link
                    href="tel:+918031411776"
                    className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 hover:shadow-xl transition-all duration-300"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span className="hidden sm:inline">Call: 080-31411776</span>
                    <span className="sm:hidden">080-31411776</span>
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">4.9★</div>
                    <div className="text-pink-200 text-sm">Family Rating</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">1000+</div>
                    <div className="text-pink-200 text-sm">Families Helped</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-pink-200 text-sm">Care Support</div>
                  </div>
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative hidden lg:block">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  {/* Service Icons Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-rose-500 hover:to-pink-600 hover:shadow-2xl hover:shadow-rose-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <HeartIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-rose-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-rose-100">Baby Care</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-violet-600 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <ShieldCheckIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-purple-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-purple-100">Mother Care</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <UserIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-cyan-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-cyan-100">Massage</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-600 hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <ClockIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-amber-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-amber-100">24/7 Support</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-rose-400 text-rose-900 rounded-full p-3 shadow-lg">
                    <SparklesIcon className="h-6 w-6" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-pink-400 text-pink-900 rounded-full p-3 shadow-lg">
                    <SunIcon className="h-6 w-6" />
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
              Why Choose EzyHelpers for Newborn Babycare?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Gentle, caring, and culturally sensitive newborn babycare trusted by Bareilly families
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-pink-600 mt-1 shrink-0" />
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
              Our Newborn & Postpartum Care Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete support for mother and baby, with Bareilly's trusted japa maids
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center shrink-0">
                      <IconComponent className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-pink-600 mr-2 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Types of Japa Maids in Bareilly
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every Bareilly family has different needs, so we offer flexible options to suit your lifestyle and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Live-In Japa Maids",
                description: "Stay 24/7 for full mother and baby care during recovery.",
                features: ["Round-the-clock care", "Complete support", "Recovery focus", "Full attention"]
              },
              {
                title: "Full-Time Japa Maids", 
                description: "8–12 hours of daily help with massage, hygiene, and gentle care.",
                features: ["Daily support", "Massage service", "Hygiene care", "Regular schedule"]
              },
              {
                title: "Part-Time Japa Maids",
                description: "Few hours daily support for essential newborn and mother tasks.",
                features: ["Flexible hours", "Basic support", "Task-focused", "Budget-friendly"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-pink-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-pink-600 mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
              Get answers to common questions about our japa maid services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What does a japa maid do as part of postpartum home care services in Bareilly?",
                  answer: "As part of postpartum home care services in Bareilly, a japa maid assists new mothers with recovery massages, hygiene support, rest guidance, emotional care, and traditional North Indian food preparation, ensuring smooth healing and comfort after childbirth."
                },
                {
                  question: "Do you provide postpartum home care services for C-section recovery in Bareilly?",
                  answer: "Yes, our postpartum home care services in Bareilly include gentle support for C-section recovery. Our trained Japa maids assist with safe movement, hygiene, massage, and personalized care routines to help mothers heal comfortably after surgery."
                },
                {
                  question: "Are Japa maids in Bareilly trained in baby massage?",
                  answer: "Yes, EzyHelpers Japa maids are trained in traditional baby massage (malish) as part of our newborn babycare in Bareilly. These massages support healthy digestion, better sleep, and physical development for newborns, using safe, gentle, and time-tested techniques."
                },
                {
                  question: "What kind of postpartum food is prepared by Japa maids in Bareilly?",
                  answer: "Our japa maids prepare healing North Indian recipes such as panjiri, gond laddu, and methi paratha using fresh ingredients from Bareilly's markets to help new mothers regain strength."
                },
                {
                  question: "What hygiene measures are followed in postpartum home care in Bareilly?",
                  answer: "EzyHelpers follows strict hygiene protocols, including handwashing, clean clothing, sanitization, and safe handling techniques to protect mothers and babies during postpartum home care in Bareilly."
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
      <section className="section-padding bg-gradient-to-r from-pink-600 to-rose-700 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Welcome Your Newborn with Peace of Mind!
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Let EzyHelpers provide the expert newborn babycare & Japa service in Bareilly that you deserve. Our trusted professionals are here to support you during this special time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire-helper" className="btn-secondary bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-4">
              Book Newborn Babycare Now
            </Link>
            <Link href="tel:+918031411776" className="btn-secondary border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call 080-31411776
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
              Easy home help solutions beyond newborn babycare for Bareilly families
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Babysitter Services",
                description: "Trusted, loving care for your children while you're away",
                href: "/services/babysitter"
              },
              {
                title: "Elderly Care Services", 
                description: "Compassionate home support for your beloved senior family members",
                href: "/services/elderly-care"
              },
              {
                title: "Cook Services",
                description: "Enjoy delicious, home-cooked meals prepared by skilled chefs",
                href: "/services/cooks"
              }
            ].map((service, index) => (
              <Link key={index} href={service.href} className="block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="text-pink-600 font-medium hover:text-pink-700">
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
