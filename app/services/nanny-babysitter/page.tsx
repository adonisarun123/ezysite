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
  title: 'Professional Babysitter Services | Certified | EzyHelpers',
  description: 'Trusted babysitter & nanny services with child safety certified professionals. 24/7 childcare support for working parents. Background verified & trained.',
  keywords: 'babysitter, nanny services, childcare, professional babysitter, child safety certified, trained nannies',
}

export default function NannyBabysitterPage() {
  const services = [
    {
      title: "Child Supervision & Safety",
      description: "Constant supervision, ensuring children's safety during play, meals, and daily activities.",
      icon: ShieldCheckIcon
    },
    {
      title: "Educational Activities", 
      description: "Homework assistance, creative activities, reading sessions, and skill development support.",
      icon: AcademicCapIcon
    },
    {
      title: "Daily Routine Management",
      description: "Feeding, bathing, nap times, and maintaining consistent daily schedules for children.",
      icon: ClockIcon
    },
    {
      title: "Emotional Support",
      description: "Building companionship, emotional bonding, and providing comfort during parents' absence.",
      icon: HeartIcon
    }
  ]

  const benefits = [
    "Emotional support and companionship",
    "Routine building and consistency", 
    "Custom daily routines tailored to child",
    "Trained in child safety and development",
    "Background-verified professionals",
    "Available for live-in, full-time, or part-time"
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

      {/* Age Groups */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Specialized Care for Every Age Group
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Newborns (0-6 months)",
                description: "Feeding schedules, diaper changes, sleep routines, and infant safety",
                icon: "👶"
              },
              {
                title: "Toddlers (1-3 years)", 
                description: "Potty training, language development, safe play, and meal assistance",
                icon: "🧒"
              },
              {
                title: "Preschoolers (3-5 years)",
                description: "Educational activities, social skills, creative play, and pre-school prep",
                icon: "👧"
              },
              {
                title: "School Age (5+ years)",
                description: "Homework help, extracurricular coordination, transportation, and supervision",
                icon: "🎒"
              }
            ].map((group, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{group.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">
                  {group.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {group.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Qualifications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Safety & Qualifications You Can Trust
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Background Verified",
                description: "Comprehensive police verification and reference checks for all caregivers"
              },
              {
                title: "Child Safety Training", 
                description: "Certified in first aid, CPR, and emergency response procedures"
              },
              {
                title: "Experience & Skills",
                description: "Proven experience with children and early childhood development knowledge"
              },
              {
                title: "Regular Health Checkups",
                description: "Up-to-date medical certificates and health screenings"
              },
              {
                title: "Communication Skills",
                description: "Clear communication with parents and age-appropriate interaction with children"
              },
              {
                title: "Ongoing Support",
                description: "Regular check-ins and replacement guarantee for peace of mind"
              }
            ].map((qualification, index) => (
              <div key={index} className="bg-pink-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">
                  {qualification.title}
                </h3>
                <p className="text-gray-600">
                  {qualification.description}
                </p>
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
                  answer: "A babysitter is usually hired for short-term help like watching your child for a few hours or during special occasions. A nanny, on the other hand, offers full-time or long-term support. Nannies handle daily routines, help with learning activities, and provide emotional care, becoming a consistent part of your child's life."
                },
                {
                  question: "Are babysitters and nannies background verified?",
                  answer: "Yes, your child's safety is our top priority. All EzyHelpers babysitter services and nannies undergo thorough background checks, police verification, and childcare training, ensuring secure and professional care."
                },
                {
                  question: "What are the different types of childcare service options you offer?",
                  answer: "We offer flexible childcare solutions tailored to your needs: Live-in babysitters: 24/7 care and supervision. Full-time babysitters: Daily support for routines, meals, and learning. Part-time babysitters: Ideal for morning or evening shifts. On-demand babysitters: Perfect for urgent or emergency babysitting needs."
                },
                {
                  question: "Can I get a nanny for specific hours or short-term needs?",
                  answer: "Yes, we provide part-time nannies and on-call babysitters for short-term or irregular schedules. Ideal for working parents, events, or sudden changes in routine."
                },
                {
                  question: "What age groups do your childcare services cover?",
                  answer: "Our child caretaker services cover all age groups, from newborns (0–6 months) to toddlers and school-going children (5+ years). Each nanny or babysitter is trained to manage age-appropriate care tasks such as feeding, diapering, potty training, and homework assistance."
                },
                {
                  question: "How do I choose between a live-in nanny and a full-time nanny?",
                  answer: "Choose a live-in nanny for round-the-clock care, especially useful for infants or families with multiple children. A full-time nanny is suitable for daytime needs like school preparation, engaging in play, and educational activities."
                },
                {
                  question: "What kind of activities do your nannies engage children in?",
                  answer: "Our nannies/babysitters engage kids in age-appropriate educational and creative activities like storytelling, drawing, reading, skill-building, and games. We focus on both development and fun."
                },
                {
                  question: "Can I choose the babysitter, or will you assign one?",
                  answer: "We match families with suitable babysitters or nannies based on your needs. You'll always have the opportunity to interview and approve the chosen child caretaker before finalising."
                },
                {
                  question: "Do you provide same-day or emergency babysitting services?",
                  answer: "Yes, our emergency babysitting services ensure that you get quick, trusted help for last-minute needs like travel, work meetings, or urgent outings."
                },
                {
                  question: "Can the schedule be customised according to my work shifts or flexible needs?",
                  answer: "Absolutely. Whether you work early mornings, weekends, or rotating shifts, our babysitter services are customisable to your routine and preferences."
                },
                {
                  question: "What tasks will the babysitter handle apart from supervision?",
                  answer: "Our babysitters go beyond basic supervision. They assist with meal preparation, educational support, hygiene routines, emotional development, and interactive play for complete childcare support."
                },
                {
                  question: "Do babysitters prepare meals for children?",
                  answer: "Yes, babysitters prepare healthy, child-friendly meals and snacks based on your child's dietary needs and feeding schedule. We also offer cook services for complete meal assistance."
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