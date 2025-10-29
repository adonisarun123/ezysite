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
  title: 'Compassionate Elderly Care Services for Seniors | EzyHelpers',
  description: 'Compassionate elder care services with medical assistance, companionship & mobility support. Trained specialists for seniors Trusted by families across India.',
  keywords: 'elderly care, senior care, caretaker for elderly, in-home elderly care, compassionate care, medication reminders, mobility assistance, companionship',
  openGraph: {
    title: 'Compassionate Elderly Care Services for Seniors | EzyHelpers',
    description: 'Compassionate elder care services with medical assistance, companionship & mobility support. Trained specialists for seniors Trusted by families across India.',
    url: 'https://www.ezyhelpers.com/services/elderly-care',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/services/elderly-care'
  }
}

export default function ElderlyCare() {
  const services = [
    {
      title: "Personal Care Assistance",
      description: "Help with bathing, grooming, dressing, and maintaining personal hygiene with dignity and respect.",
      icon: UserIcon,
    },
    {
      title: "Medication Management", 
      description: "Timely medication reminders, dosage tracking, and coordination with healthcare providers.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Mobility Support",
      description: "Safe assistance with walking, transfers, and physical therapy exercises to maintain independence.",
      icon: ClockIcon,
    },
    {
      title: "Companionship",
      description: "Emotional support, conversation, and engaging activities to combat loneliness and isolation.",
      icon: HeartIcon,
    }
  ]

  const benefits = [
    "Medication reminders and health monitoring",
    "Mobility & hygiene assistance",
    "Emotional support & companionship",
    "Trained in senior care best practices",
    "Background-verified caregivers",
    "24/7, full-time, or part-time options available"
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
                  <span className="text-sm font-semibold">Dignity & Comfort at Home</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Elderly Care
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">
                    Dignity & Comfort at Home
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                  Provide your loved ones with compassionate elderly care that honors their dignity while ensuring safety, comfort, and companionship at home.
                </p>

                {/* Key Benefits Pills */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">✓ Medical Support</div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">✓ 24/7 Care Available</div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">✓ Trained Caregivers</div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Link href="/hire-helper" className="group relative bg-white text-blue-800 hover:bg-blue-50 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">Book Elderly Care Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300">
                    <PhoneIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Call Now</span>
                    <span className="sm:hidden">Call Now</span>
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
              Professional elderly care services are designed to support independence and enhance quality of life
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

      {/* Flexible Elderly Care Options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Flexible Elderly Care Options</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Choose the care plan that best supports your loved one’s health, comfort, and independence.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Live-In Elderly Care</h3>
              <p className="text-gray-600 mb-4">24/7 compassionate assistance and supervision, perfect for seniors who need round-the-clock support and companionship.</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Continuous care & supervision</li>
                <li>Help with hygiene, mobility, and medication</li>
                <li>Emotional companionship</li>
                <li>Ideal for post-hospital recovery or advanced age</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Full-Time Elderly Care</h3>
              <p className="text-gray-600 mb-4">Daytime care tailored to your loved one’s daily schedule and medical needs, ensuring safety, routine, and well-being.</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>8–12 hours of daily support</li>
                <li>Medication reminders & mobility help</li>
                <li>Meal prep & personal hygiene assistance</li>
                <li>Emotional support and engagement</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">On-Demand Elderly Care</h3>
              <p className="text-gray-600 mb-4">Quick, flexible support whenever you need temporary or emergency care for your loved one.</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Hourly or same-day assistance</li>
                <li>Bathing, feeding, walking, or companionship</li>
                <li>Emergency or short-notice availability</li>
                <li>Ideal for caregiver breaks or unexpected situations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Caregiver Philosophy */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Caregiver Philosophy: Compassionate Care You Can Trust</h2>
          </div>
          <div className="max-w-4xl mx-auto text-gray-700 space-y-5 leading-relaxed">
            <p>At EzyHelpers, we believe that exceptional elderly care begins with dedicated and empathetic caregivers. Our selection focuses on hiring individuals who are experienced, reliable, and naturally caring toward senior citizens. We look for caretakers who demonstrate patience, good communication, and a genuine interest in supporting elders with dignity. Each elderly care assistant is chosen to reflect our core values of respect, responsibility, and compassionate care.</p>
            <p>Once selected, our caretakers receive hands-on training in essential elderly care areas such as assisting with mobility, hygiene care, handling age-related health conditions like diabetes and high blood pressure, and basic safety and home care practices. They are also taught how to support elders with forgetfulness or reduced independence in a respectful and reassuring manner.</p>
            <p>To maintain the highest standards, we provide continuous training through regular workshops, helping our caretakers stay updated and confident in their duties.</p>
            <p>We also believe in emotional connection, matching each senior with a caregiver who understands their routine, personality, and cultural preferences. This ensures a nurturing, trustworthy bond that brings both comfort and companionship. With EzyHelpers, your loved ones are cared for by trained professionals who treat them like family.</p>
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
                  question: "What elderly care services can I get at home from EzyHelpers?",
                  answer: "EzyHelpers offers professional in-home elderly care, including help with hygiene, mobility, daily tasks, medication reminders, and companionship. Our trained caretakers ensure seniors live safely and comfortably at home, receiving the attention and respect they deserve every day."
                },
                {
                  question: "Are EzyHelpers’ caretakers trained to handle medical needs?",
                  answer: "Yes, our senior citizen caretakers are trained in basic medical support. They can give medication reminders, monitor vital signs, and assist during emergencies. Although they aren’t certified doctors or nurses, they offer dependable home assistance for elderly family members who require regular health supervision."
                },
                {
                  question: "Can elderly caretakers help with bathing and grooming seniors?",
                  answer: "Absolutely. Our elderly care assistants help with bathing, grooming, dressing, and toileting. These hygiene tasks are performed gently and respectfully, ensuring your senior family member remains clean, comfortable, and treated with dignity at all times."
                },
                {
                  question: "Do your care providers assist with daily medications for the elderly?",
                  answer: "Yes, our care providers provide medication reminders and help organise daily doses as per the doctor’s instructions. This ensures your elderly loved one takes the right medicines at the right time, supporting better health and regular treatment compliance."
                },
                {
                  question: "Are EzyHelpers’ elderly caretakers' backgrounds verified?",
                  answer: "Yes, all EzyHelpers caretakers are fully background verified with Aadhaar, address proof, and work history. We also provide health certificates upon request. Your family’s safety and trust are our top priorities in elderly care services."
                },
                {
                  question: "Do you provide post-hospital recovery care for seniors at home?",
                  answer: "Yes, EzyHelpers offers post-hospital care for seniors. Our caretakers help with recovery routines, monitor health, manage medications, and offer emotional support, ensuring a smooth, safe transition from hospital to home care."
                },
                {
                  question: "Will the elderly care assistants maintain health logs and medication records?",
                  answer: "Yes, our elderly care assistants can maintain basic health records, track medication timing, and note any changes in behavior or routine. These updates help families and doctors monitor progress and make informed decisions during checkups or emergencies."
                },
                {
                  question: "Can elderly assistants accompany seniors to appointments or walks?",
                  answer: "Yes, our elderly care assistants can accompany seniors to doctor visits, therapy sessions, or daily walks. They provide both physical support and companionship, making every outing safer, easier, and more enjoyable."
                },
                {
                  question: "Will the caretakers help with feeding, diapers, or physiotherapy?",
                  answer: "Yes, our elderly caretakers assist with feeding, adult diaper changes, and basic physiotherapy exercises as needed. These services are delivered with patience and professionalism to keep seniors comfortable and well-supported at home."
                },
                {
                  question: "Do I need to provide a room for a live-in elderly caretaker?",
                  answer: "Yes, if you hire a live-in elderly caretaker, you must provide a room, either private or shared, with basic amenities like a bed, mattress, and bathroom access. A comfortable stay helps the caretaker provide better round-the-clock care."
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
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">
            Give Your Loved Ones the Care They Deserve
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Trust EzyHelpers to provide compassionate, professional elderly care that allows your family members to age gracefully in the comfort of their own home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire-helper" className="btn-secondary bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-4">
              Book Compassionate Care
            </Link>
            <Link href="tel:+919972571005" className="btn-secondary border-white bg-transparent text-white hover:bg-white/10 text-lg px-8 py-4">
              <PhoneIcon className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Call +91 9972571005</span>
              <span className="sm:hidden">Call +91 9972571005</span>
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
                description: "24/7 household support, including elderly care assistance and home management",
                href: "/services/live-in-maids"
              },
              {
                title: "Cook Services", 
                description: "Nutritious meal preparation following dietary restrictions for seniors",
                href: "/services/cooks"
              },
              {
                title: "On-Demand Helpers",
                description: "Emergency elderly care and assistance services for unexpected needs",
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