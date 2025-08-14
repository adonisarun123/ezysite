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
  title: 'Babysitter for Home in Bangalore | Trusted Childcare',
  description: 'Find trained babysitters for home in Bangalore. Safe, reliable childcare for infants, toddlers & school kids with flexible hours.',
  keywords: 'babysitter bangalore, childcare bangalore, nanny bangalore, babysitting services bangalore, child caretaker bangalore',
}

export default function NannyBabysitterPage() {
  const services = [
    {
      title: "Daily Routine Management",
      description: "Our babysitters follow your child's daily schedule to keep them happy, clean, and well cared for.",
      icon: ClockIcon,
      features: ["Help with feeding, bathing, and diaper changes", "Support during nap time", "Safe school drop-off and pickup", "Guide kids with daily habits"]
    },
    {
      title: "Engaging Activities", 
      description: "Our babysitters make sure your child has fun while learning and growing every day.",
      icon: AcademicCapIcon,
      features: ["Play games and share stories", "Teach ABCs and numbers", "Help with drawing and coloring", "Encourage free play"]
    },
    {
      title: "Food & Nutrition Support",
      description: "Our babysitters take care of your child's meals with love and cleanliness.",
      icon: HeartIcon,
      features: ["Prepare healthy meals and snacks", "Help with feeding", "Follow diet rules", "Clean up after meals"]
    },
    {
      title: "Emotional & Social Support",
      description: "Our babysitters provide more than care; they build a strong bond with your child.",
      icon: UserGroupIcon,
      features: ["Give full attention and company", "Create a safe space", "Teach good habits", "Support positive play"]
    }
  ]

  const benefits = [
    "Irregular work schedules support",
    "Nuclear family childcare assistance",
    "School drop & pick challenges solved",
    "Trusted help for families new to Bangalore",
    "Meal & nap routines maintained",
    "Infant to teen care expertise"
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
                title: "Live-In Nanny",
                description: "Round-the-clock childcare from within your home for complete peace of mind.",
                features: ["12-hour childcare support", "Perfect for infants and toddlers", "Manages meals and hygiene", "Overnight care and bonding"]
              },
              {
                title: "Full-Time Babysitter", 
                description: "Daytime childcare help that fits into your work schedule and routine needs.",
                features: ["Works 8–10 hours daily", "Perfect for school-going children", "Educational support", "After-school care"]
              },
              {
                title: "Part-Time Babysitter",
                description: "Flexible, short-duration support ideal for busy hours or occasional help.",
                features: ["2–6 hours a day", "Ideal for gap hours", "School holiday care", "Affordable and flexible"]
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
                  question: "How quickly can I get a babysitter for home in Bangalore?",
                  answer: "Emergency childcare at home in Bangalore is available within 2–4 hours. Regular booking requires 24–48 hours for proper matching."
                },
                {
                  question: "Are babysitters trained for children with special needs?",
                  answer: "Yes, we offer specialised child supervision services for children with developmental needs, learning disabilities, and medical needs."
                },
                {
                  question: "Do you provide babysitters for weekend events or travel?",
                  answer: "Yes, our flexible home babysitting in Bangalore includes weekend coverage, event childcare, and travel companion services."
                },
                {
                  question: "How do you ensure child safety in Bangalore apartments?",
                  answer: "Our babysitters are trained to keep children safe in apartment settings. They know how to handle things like balcony safety, using lifts carefully, and what to do in case of emergencies."
                },
                {
                  question: "Can babysitters pick up children from school in Bangalore traffic?",
                  answer: "Our babysitters are trained in Bangalore traffic navigation, school pickup protocols, and use verified transportation for child safety."
                },
                {
                  question: "How much does a babysitter for home in Bangalore cost?",
                  answer: "A babysitter typically charges ₹15,000 – ₹25,000/month depending on the child's age, required working hours, location, and experience."
                },
                {
                  question: "Can I get childcare at home in Bangalore for part-time hours?",
                  answer: "Yes. We offer flexible schedules from 2 to 6 hours daily, perfect for school gaps or work-from-home parents."
                },
                {
                  question: "Can babysitters work during school holidays?",
                  answer: "Yes, full-day holiday care during summer breaks, Diwali holidays, and school vacation periods. Extended childcare for working parents."
                },
                {
                  question: "What is the difference between a babysitter and a Japa maid in Bangalore?",
                  answer: "A babysitter in Bangalore takes care of children's daily needs like feeding, playing, and homework help. A Japa maid in Bangalore, on the other hand, is trained to care for newborn babies and post-delivery mothers. They handle tasks like baby massage, mother's recovery support, and hygiene care after childbirth."
                },
                {
                  question: "What living arrangements do live-in nannies in Bangalore need?",
                  answer: "Live-in nannies/babysitters should be provided with a bed, cot, or mattress and access to the bathroom. A separate bathroom is preferred, but shared access is also fine based on the customer's convenience."
                },
                {
                  question: "Are babysitters trained to handle sick children at home?",
                  answer: "Yes, many babysitters are trained to manage mild illnesses such as fever or cough, and can administer medicine as directed by your doctor. For serious health concerns, we recommend medical attention along with parental supervision."
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