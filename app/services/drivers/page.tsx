import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  TruckIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  MapPinIcon,
  CheckCircleIcon,
  PhoneIcon,
  UserIcon,
  StarIcon,
  BeakerIcon,
  SunIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Professional Drivers Services | Safe & Reliable | EzyHelpers',
  description: 'Licensed professional drivers for family transportation, office commutes & personal use. Safe, reliable & punctual service across major cities in India.',
  keywords: 'professional driver, licensed drivers, chauffeur, hire driver, driver services, airport transfer, outstation travel, daily commute',
  alternates: {
    canonical: 'https://www.ezyhelpers.com/services/drivers'
  }
}

export default function DriversPage() {
  const services = [
    {
      title: "Daily Commute Services",
      description: "Reliable transportation for office commutes, school runs, and regular daily travel needs with punctual service.",
      icon: ClockIcon,
      features: ["Office commutes", "School runs", "Local errands", "Timely service"]
    },
    {
      title: "Airport & Long Distance", 
      description: "Safe and comfortable travel for airport transfers, intercity trips, and long-distance journeys.",
      icon: TruckIcon,
      features: ["Airport transfers", "Station pickups", "Intercity travel", "Comfortable rides"]
    },
    {
      title: "Elderly & Family Transport",
      description: "Careful, patient driving for seniors and family members with special attention to comfort and safety.",
      icon: UserIcon,
      features: ["Senior assistance", "Hospital visits", "Family outings", "Careful driving"]
    },
    {
      title: "Emergency & Medical Trips",
      description: "On-call drivers for medical emergencies, hospital visits, and urgent transportation needs.",
      icon: ShieldCheckIcon,
      features: ["24/7 availability", "Emergency response", "Medical trips", "Quick support"]
    }
  ]

  const benefits = [
    "Licensed and experienced drivers",
    "Flexible scheduling options",
    "Safe and punctual service",
    "Well-maintained vehicles available",
    "Background-verified professionals",
    "Available for live-in, full-time, or on-demand"
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-24 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-24 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-2/3 left-1/2 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M25 0L35 10 25 20 15 10z M35 10L45 20 35 30 25 20z M15 10L25 20 15 30 5 20z M5 20L15 30 5 40 -5 30z M25 20L35 30 25 40 15 30z M45 20L50 25 45 30 40 25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
                  <span className="text-sm font-semibold">Licensed & Verified Drivers</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Professional Drivers
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">
                    Safe & Reliable Transport
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                  Travel with confidence using our professional driver services. Licensed, experienced drivers for all your transportation needs, from daily commutes to special occasions.
                </p>

                {/* Assurance Badges */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">✓ Licensed Drivers</div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">✓ Well-Maintained Vehicles</div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">✓ 24/7 Available</div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Link href="/hire-helper" className="group relative bg-white text-gray-800 hover:bg-gray-50 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">Book Professional Driver</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
                    <div className="text-2xl font-bold text-white">Licensed</div>
                    <div className="text-gray-200 text-sm">& Verified</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Safe</div>
                    <div className="text-gray-200 text-sm">Transport</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Punctual</div>
                    <div className="text-gray-200 text-sm">Service</div>
                  </div>
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative hidden lg:block">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  {/* Service Icons Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-slate-500 hover:to-gray-600 hover:shadow-2xl hover:shadow-slate-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <TruckIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-slate-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-slate-100">All Vehicle Types</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-600 hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <ShieldCheckIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-green-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-green-100">Safety First</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-600 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <ClockIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-blue-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-blue-100">On Time</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-violet-600 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <MapPinIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-purple-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-purple-100">All Routes</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-blue-400 text-blue-900 rounded-full p-3 shadow-lg">
                    <BeakerIcon className="h-6 w-6" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 rounded-full p-3 shadow-lg">
                    <SunIcon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualified & Professional Drivers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Qualified & Professional Drivers</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Valid Driving License</h3>
              <p className="text-gray-700">All drivers possess valid licenses with clean driving records and experience</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Background Verification</h3>
              <p className="text-gray-700">Comprehensive police verification and reference checks for safety assurance</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Defensive Driving Training</h3>
              <p className="text-gray-700">Trained in safe driving practices, traffic rules, and emergency response</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Local Area Knowledge</h3>
              <p className="text-gray-700">Familiar with city routes, traffic patterns, and efficient navigation</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Professional Conduct</h3>
              <p className="text-gray-700">Courteous, punctual, and maintain professional behavior at all times</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Vehicle Maintenance</h3>
              <p className="text-gray-700">Basic vehicle maintenance knowledge and coordination with service centers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Service Features */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Additional Service Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">GPS Navigation</h3>
              <p className="text-gray-700">Modern navigation tools for efficient route planning and time management</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Fuel Management</h3>
              <p className="text-gray-700">Efficient fuel consumption and coordination with fuel stations</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Vehicle Security</h3>
              <p className="text-gray-700">Secure parking and basic vehicle security measures during service</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Multi-Language Support</h3>
              <p className="text-gray-700">Drivers comfortable with local languages and basic English communication</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Flexible Scheduling</h3>
              <p className="text-gray-700">Adaptable to changing schedules and last-minute transportation needs</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Emergency Assistance</h3>
              <p className="text-gray-700">Breakdown assistance coordination and emergency contact protocols</p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Why Choose EzyHelpers for Driver Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional, safe, and reliable transportation services with experienced drivers you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-blue-600 mt-1 shrink-0" />
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
              Comprehensive Driver Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From daily commutes to special occasions, our professional drivers provide safe and reliable transportation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                      <IconComponent className="h-6 w-6 text-blue-600" />
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
              Flexible Driver Service Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the driving service that best fits your transportation needs and schedule
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Live-In Drivers",
                description: "24/7 availability for families with extensive travel needs, multiple cars, or requiring constant transportation support.",
                features: ["24/7 availability", "Multiple trips daily", "Vehicle maintenance", "Emergency response"]
              },
              {
                title: "Full-Time Drivers", 
                description: "Dedicated drivers for regular office commutes, school runs, and daily transportation during working hours.",
                features: ["8-12 hours daily", "Fixed schedule", "Regular routes", "Professional service"]
              },
              {
                title: "On-Demand Drivers",
                description: "Flexible transportation for specific trips, special occasions, airport transfers, and an as-needed basis.",
                features: ["Trip-based service", "Flexible timing", "Special occasions", "Emergency calls"]
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
                      <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Specialized Transportation Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "School Transport",
                description: "Safe pickup and drop-off for children with punctual, reliable service",
                icon: "🎒"
              },
              {
                title: "Office Commute", 
                description: "Daily office transportation with comfortable, professional service",
                icon: "🚗"
              },
              {
                title: "Medical Visits",
                description: "Patient, careful transport for medical appointments and emergencies",
                icon: "🏥"
              },
              {
                title: "Shopping & Errands",
                description: "Convenient transportation for shopping, errands, and daily tasks",
                icon: "🛍️"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
              Why Choose EzyHelpers Drivers for Your Daily Travel Needs
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                EzyHelpers offers more than just a driving service; we provide a complete personal commute experience built on reliability, safety, and professionalism. Our drivers are carefully selected and experienced to deliver smooth, stress-free travel; whether it’s for daily commutes, family outings, airport drops, or long-distance trips. With a strong focus on punctuality, our drivers ensure that you’re never late for important meetings, appointments, or flights. They are trained to respect your privacy and operate with full discretion, making them suitable for both personal and professional use.
              </p>
              <p>
                We also understand that schedules can change, which is why our services are flexible and designed to adapt to your unique needs. EzyHelpers drivers maintain a neat appearance and speak respectfully, providing updates on ETAs and managing unexpected delays with professionalism. Their in-depth knowledge of local roads and traffic conditions ensures faster, safer routes and smarter driving decisions.
              </p>
              <p>
                In addition to driving, they care for your vehicle as if it were their own, keeping it clean, fuelled, and ready for the next journey. Whether you need a full-time chauffeur or temporary driver support, EzyHelpers delivers a dependable service that makes your everyday travel more comfortable, convenient, and worry-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our driver services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Are EzyHelpers drivers licensed and experienced?",
                  answer: "Yes, all EzyHelpers drivers have valid Indian driving licences and years of experience. They are experienced in safe driving, know how to handle different vehicles, and are well-versed with local traffic rules and city roads."
                },
                {
                  question: "Can EzyHelpers drivers handle all types of cars?",
                  answer: "Yes, our drivers are skilled in driving hatchbacks, sedans, SUVs, and luxury cars. We ensure the driver assigned to you is experienced with your specific vehicle type for smooth and safe driving."
                },
                {
                  question: "Can I book a driver for outstation travel through EzyHelpers?",
                  answer: "Yes, we provide experienced drivers for outstation and intercity travel. Whether it’s a weekend getaway, a business trip, or a pilgrimage, our drivers ensure a safe, comfortable, and well-planned journey."
                },
                {
                  question: "Do you provide drivers for airport pickup and drop-off?",
                  answer: "Yes, EzyHelpers offers reliable airport transfer services. Our drivers assist with luggage, manage traffic delays, and ensure on-time arrival or pickup, making airport travel stress-free and smooth."
                },
                {
                  question: "Are EzyHelpers drivers familiar with local roads and traffic?",
                  answer: "Yes, our drivers know local routes, shortcuts, and traffic conditions well. Their experience helps save travel time and avoid congested areas, especially during peak hours."
                },
                {
                  question: "Do EzyHelpers drivers maintain car hygiene and condition?",
                  answer: "Yes, our drivers are trained to maintain basic vehicle hygiene. They clean interiors, check fuel and tyre pressure, and keep your car ready for daily use."
                },
                {
                  question: "Are driver services from EzyHelpers suitable for corporate travel?",
                  answer: "Yes, we offer professional drivers for business travel and corporate clients. Our drivers are well-groomed and punctual and maintain formal conduct, ideal for executives, meetings, and client pickups."
                },
                {
                  question: "What is the salary of a car driver in India?",
                  answer: "The salary of a car driver in India depends on factors like work hours, location, type of vehicle, and whether the role is part-time, full-time, or live-in. At EzyHelpers, we help match you with professional drivers based on your specific travel needs and schedule."
                },
                {
                  question: "What is the difference between a driver and a chauffeur?",
                  answer: "A driver primarily focuses on transporting passengers from one location to another. A chauffeur, on the other hand, offers a more premium experience, often including etiquette, grooming standards, vehicle maintenance, and formal client interactions. EzyHelpers provides both types based on your service preferences."
                },
                {
                  question: "How to get a driver in India?",
                  answer: "To hire a driver in India, simply contact a reliable service like EzyHelpers. We provide licensed, background-verified drivers for daily commutes, school runs, airport transfers, and outstation trips. You can choose from part-time, full-time, live-in, or on-demand options based on your schedule."
                },
                {
                  question: "What are the duties of a private hire driver?",
                  answer: "A private hire driver is responsible for safe and timely transportation, maintaining vehicle cleanliness, route planning, assisting passengers, and ensuring a comfortable ride. EzyHelpers ensures all drivers are trained to handle these tasks professionally for your peace of mind."
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
      <section className="section-padding bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">
            Travel Safely with Professional Drivers
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Experience stress-free transportation with our skilled drivers. Whether for daily commutes or special occasions, we ensure you reach your destination safely and on time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire-helper" className="btn-secondary bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              Hire a Professional Driver
            </Link>

            <Link href="tel:+919972571005" className="btn-secondary border-white bg-transparent text-white hover:bg-white/10 text-lg px-8 py-4">
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call +91 9972571005
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
                description: "Complete household management with transportation coordination when needed",
                href: "/services/live-in-maids"
              },
              {
                title: "Elderly Care Services", 
                description: "Specialized transportation for medical appointments and senior care needs",
                href: "/services/elderly-care"
              },
              {
                title: "On-Demand Helpers",
                description: "Emergency transportation and quick assistance for urgent travel needs",
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
                <span className="text-blue-600 font-medium hover:text-blue-700">
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