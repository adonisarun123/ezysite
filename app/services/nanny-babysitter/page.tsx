import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  UserGroupIcon, 
  HeartIcon, 
  ShieldCheckIcon, 
  AcademicCapIcon,
  CheckCircleIcon,
  PhoneIcon,
  ClockIcon,
  StarIcon,
  SparklesIcon,
  SunIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Nanny & Babysitter | Expert Childcare You Trust',
  description: 'Give your children the loving care they deserve with qualified nannies and babysitters trained in child development and safety.',
  keywords: 'nanny, babysitter, childcare, child caretaker, child safety, child development',
}

export default function NannyBabysitterPage() {
  const services = [
    {
      title: "Child Supervision & Safety",
      description: "Constant supervision, ensuring children's safety during play, meals, and daily activities.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Educational Activities", 
      description: "Homework assistance, creative activities, reading sessions, and skill development support.",
      icon: AcademicCapIcon,
    },
    {
      title: "Daily Routine Management",
      description: "Feeding, bathing, nap times, and maintaining consistent daily schedules for children.",
      icon: ClockIcon,
    },
    {
      title: "Emotional Support",
      description: "Building companionship, emotional bonding, and providing comfort during parents' absence.",
      icon: HeartIcon,
    }
  ]

  const benefits = [
    "Emotional support and companionship",
    "Routine building and consistency",
    "Custom daily routines tailored to child",
    "Trained in child safety and development",
    "Background-verified professionals",
    "Available for live-in, full-time, or part-time",
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-700 via-pink-600 to-pink-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-24 left-24 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-24 right-24 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M60 0C60 33.137 33.137 60 0 60s60 26.863 60 60 26.863-60 60-60S60 26.863 60 0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
                  <span className="text-sm font-semibold">Child Safety Certified</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Nanny & Babysitter
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">
                    Expert Childcare You Trust
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                  Give your children the loving care they deserve with our qualified nannies and babysitters, trained in child development and safety.
                </p>

                {/* Key Benefits Pills */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    ✓ Background Verified
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    ✓ Child Safety Trained
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    ✓ All Age Groups
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Link href="/hire-helper" className="group relative bg-white text-pink-800 hover:bg-pink-50 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">Book Trusted Nanny Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-pink-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 whitespace-nowrap">
                    <PhoneIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="hidden sm:inline">Call: +91 9972571005</span>
                    <span className="sm:hidden">+91 9972571005</span>
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">0-16</div>
                    <div className="text-pink-200 text-sm">Age Groups</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Safe</div>
                    <div className="text-pink-200 text-sm">& Certified</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-pink-200 text-sm">Support</div>
                  </div>
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative hidden lg:block">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  {/* Service Icons Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-600 hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <HeartIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-pink-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-pink-100">Loving Care</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-indigo-500 hover:to-blue-600 hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <AcademicCapIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-indigo-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-indigo-100">Educational</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-600 hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <ShieldCheckIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-green-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-green-100">Safety First</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-violet-600 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <UserGroupIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-purple-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-purple-100">All Ages</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 rounded-full p-3 shadow-lg">
                    <SunIcon className="h-6 w-6" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-purple-400 text-purple-900 rounded-full p-3 shadow-lg">
                    <SparklesIcon className="h-6 w-6" />
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
              Why Choose EzyHelpers for Childcare?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Gentle, experienced care for your children with safety, love, and professional expertise
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
              Comprehensive Childcare Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional nanny and babysitting services designed to support your child's growth and happiness
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
              Flexible Childcare Options for Every Need
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the right childcare solution based on your schedule and family needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Live-In Nannies",
                description: "24/7 childcare support with constant presence for newborns, toddlers, or multiple children requiring round-the-clock attention.",
                features: ["24/7 availability", "Newborn specialist care", "Sleep training support", "Emergency response"]
              },
              {
                title: "Full-Time Nannies", 
                description: "Daily childcare during working hours with structured routines, educational activities, and meal preparation for school-age children.",
                features: ["8-12 hours daily", "School pickup/drop", "Homework assistance", "Activity planning"]
              },
              {
                title: "Part-Time Babysitters",
                description: "Flexible childcare for specific hours, perfect for date nights, appointments, or when you need a few hours of personal time.",
                features: ["Flexible hours", "Evening care", "Weekend availability", "Short-term support"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
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
              Get answers to common questions about our nanny and babysitter services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What is the difference between a babysitter and a nanny?",
                  answer: "A babysitter is usually hired for short-term or occasional childcare, like during events or emergencies. A nanny provides long-term, full-time support. Nannies help with daily routines such as meals, learning activities, hygiene, and emotional care for your child."
                },
                {
                  question: "How do you ensure the safety and reliability of your babysitters and nannies?",
                  answer: "All EzyHelpers babysitters and nannies are background-verified for safety. We check Aadhaar, address proof, and past job history. Police and medical checks are also available to ensure secure and professional childcare for your family."
                },
                {
                  question: "Do I need to provide a room for a live-in nanny?",
                  answer: "Yes, if you hire a live-in nanny, you need to provide a private or shared room with basic things like a bed, mattress, or cot, and bathroom access. Comfortable accommodation helps the nanny stay well-rested and care for your child better."
                },
                {
                  question: "Can I choose the babysitter or nanny myself?",
                  answer: "Yes, you can choose. We share profiles of verified babysitters and nannies based on your needs. You can talk to them via phone, video call, or in person and pick the one who feels right for your child and family."
                },
                {
                  question: "Do you offer emergency or same-day babysitter services?",
                  answer: "Yes, we provide same-day and emergency babysitting services. If you need last-minute help due to travel, work, or urgent plans, our trained babysitters can reach your home quickly to care for your child safely and professionally."
                },
                {
                  question: "Can the babysitter work around my office hours or changing schedule?",
                  answer: "Yes, our babysitters are available for flexible hours. Whether you work early mornings, night shifts, or weekends or have a changing routine, we’ll match you with a caretaker whose timing fits your schedule."
                },
                {
                  question: "What tasks does a babysitter help with besides watching the child?",
                  answer: "Our babysitters help with feeding, diaper changes, bathing, storytelling, homework, hygiene, and keeping the child engaged. They make sure your child is safe, clean, happy, and emotionally cared for throughout the day."
                },
                {
                  question: "Can one babysitter take care of more than one child?",
                  answer: "Yes, experienced babysitters can manage two or more children. They follow each child’s routine, including meals, hygiene, playtime, and study, while making sure all children stay safe, cared for, and attended to."
                },
                {
                  question: "Can the babysitter drop off or pick up my child from school or tuition?",
                  answer: "Yes, many of our babysitters can handle school and tuition pickups or drops. This service is arranged in advance to ensure safety, making it easier for working parents to manage their child’s daily routine."
                },
                {
                  question: "Do you have babysitters trained for children with special needs?",
                  answer: "Yes, we provide babysitters trained in special needs care. They offer extra patience, simple communication, and personalised support, ensuring your child feels safe, included, and understood at all times."
                },
                {
                  question: "How much does it cost to hire a babysitter or nanny?",
                  answer: "Babysitting and nanny charges depend on service type; part-time, full-time, or live-in, and number of children. We provide affordable pricing with a personalised quote based on your exact childcare needs and schedule."
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
      <section className="section-padding bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Give Your Child the Best Care
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Trust EzyHelpers to provide loving, professional childcare that lets you focus on work and life while knowing your children are in safe, caring hands.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto px-4">
            <Link
              href="/hire-helper"
              className="inline-flex items-center justify-center w-full bg-white text-purple-600 font-semibold text-lg py-4 px-6 rounded-xl border-2 border-purple-600 hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
            >
              Book Trusted Childcare Now
            </Link>

            <Link
              href="tel:+919972571005"
              className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 hover:shadow-xl transition-all duration-300"
            >
              <PhoneIcon className="h-5 w-5 mr-2 shrink-0" />
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
                title: "Live-In Maid Services",
                description: "24/7 household support including childcare assistance and home management",
                href: "/services/live-in-maids"
              },
              {
                title: "Elderly Care Services", 
                description: "Compassionate care for aging family members with medical support",
                href: "/services/elderly-care"
              },
              {
                title: "On-Demand Helpers",
                description: "Emergency childcare and babysitting services for unexpected needs",
                href: "/services/on-demand-helpers"
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