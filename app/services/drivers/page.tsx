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
  title: 'Professional Drivers Services | Licensed | EzyHelpers India',
  description: 'Licensed professional drivers for family transportation, office commutes & personal use. Safe, reliable & punctual service across major cities in India.',
  keywords: 'professional drivers, licensed drivers, family transportation, office commute, personal driver, safe transport',
}

export default function DriversPage() {
  const services = [
    {
      title: "Daily Commute Services",
      description: "Reliable transportation for office commutes, school runs, and regular daily travel needs with punctual service.",
      icon: ClockIcon
    },
    {
      title: "Airport & Long Distance", 
      description: "Safe and comfortable travel for airport transfers, intercity trips, and long-distance journeys.",
      icon: TruckIcon
    },
    {
      title: "Elderly & Family Transport",
      description: "Careful, patient driving for seniors and family members with special attention to comfort and safety.",
      icon: UserIcon
    },
    {
      title: "Emergency & Medical Trips",
      description: "On-call drivers for medical emergencies, hospital visits, and urgent transportation needs.",
      icon: ShieldCheckIcon
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

                {/* Key Benefits Pills */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
                    ✓ Licensed Drivers
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
                    ✓ Well-Maintained Vehicles
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
                    ✓ 24/7 Available
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Link href="/hire-helper" className="group relative bg-white text-gray-800 hover:bg-gray-50 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">Book Professional Driver</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300">
                    <PhoneIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Call Now
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
                description: "Flexible transportation for specific trips, special occasions, airport transfers, and as-needed basis.",
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

      {/* Transportation Types */}
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
                icon: "💼"
              },
              {
                title: "Medical Visits",
                description: "Patient, careful transport for medical appointments and emergencies",
                icon: "🏥"
              },
              {
                title: "Shopping & Errands",
                description: "Convenient transportation for shopping, errands, and daily tasks",
                icon: "🛒"
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

      {/* Driver Qualifications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Qualified & Professional Drivers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Valid Driving License",
                description: "All drivers possess valid licenses with clean driving records and experience"
              },
              {
                title: "Background Verification", 
                description: "Comprehensive police verification and reference checks for safety assurance"
              },
              {
                title: "Defensive Driving Training",
                description: "Trained in safe driving practices, traffic rules, and emergency response"
              },
              {
                title: "Local Area Knowledge",
                description: "Familiar with city routes, traffic patterns, and efficient navigation"
              },
              {
                title: "Professional Conduct",
                description: "Courteous, punctual, and maintaining professional behavior at all times"
              },
              {
                title: "Vehicle Maintenance",
                description: "Basic vehicle maintenance knowledge and coordination with service centers"
              }
            ].map((qualification, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6">
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

      {/* Special Features */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Additional Service Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "GPS Navigation",
                description: "Modern navigation tools for efficient route planning and time management"
              },
              {
                title: "Fuel Management", 
                description: "Efficient fuel consumption and coordination with fuel stations"
              },
              {
                title: "Vehicle Security",
                description: "Secure parking and basic vehicle security measures during service"
              },
              {
                title: "Multi-Language Support",
                description: "Drivers comfortable with local languages and basic English communication"
              },
              {
                title: "Flexible Scheduling",
                description: "Adaptable to changing schedules and last-minute transportation needs"
              },
              {
                title: "Emergency Assistance",
                description: "Breakdown assistance coordination and emergency contact protocols"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
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
              Get answers to common questions about our driver services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What driver services does EzyHelpers provide?",
                  answer: "EzyHelpers offers professional driver services including daily office commutes, airport transfers, outstation trips, medical appointments, shopping assistance, and special event transportation. Our drivers are trained, licensed, and experienced in safe driving practices."
                },
                {
                  question: "Are your drivers licensed and experienced?",
                  answer: "Yes, all our drivers hold valid driving licenses with clean records and extensive driving experience. They undergo background verification, defensive driving training, and are familiar with local traffic rules and routes."
                },
                {
                  question: "Can I hire a driver for outstation trips?",
                  answer: "Absolutely! We provide outstation driver services for long-distance travel, weekend getaways, and multi-city trips. Our drivers are experienced in highway driving and familiar with popular tourist destinations."
                },
                {
                  question: "Do you provide drivers for both personal and commercial vehicles?",
                  answer: "Yes, our drivers can operate personal cars, SUVs, and light commercial vehicles. They adapt to different vehicle types and are trained in vehicle maintenance basics and safety protocols."
                },
                {
                  question: "How much do driver services cost?",
                  answer: "Driver service costs depend on duration, distance, and specific requirements. We offer hourly, daily, and monthly packages with transparent pricing. Contact us for customized quotes based on your travel needs."
                },
                {
                  question: "Can I book a driver for same-day service?",
                  answer: "Yes, we offer same-day driver booking based on availability. For urgent transportation needs, our dispatch team works to assign the nearest available driver to your location."
                },
                {
                  question: "Do drivers provide their own vehicles?",
                  answer: "Our drivers typically use your personal vehicle. However, we can also arrange drivers with their own vehicles for specific requirements. This option may have different pricing structures."
                },
                {
                  question: "Are drivers available for night shifts and weekends?",
                  answer: "Yes, our drivers are available for night shifts, weekend trips, and holiday travel. We understand that transportation needs don't follow regular business hours."
                },
                {
                  question: "What safety measures do your drivers follow?",
                  answer: "Our drivers follow strict safety protocols including defensive driving techniques, regular vehicle checks, GPS navigation for optimal routes, and emergency contact procedures. They prioritize passenger safety above all else."
                },
                {
                  question: "Can drivers assist with elderly or differently-abled passengers?",
                  answer: "Yes, we have drivers specially trained to assist elderly passengers and those with mobility challenges. They provide extra care and support during boarding, travel, and arrival."
                },
                {
                  question: "Do you provide drivers for corporate clients?",
                  answer: "Yes, we offer corporate driver services for business executives, client transportation, airport transfers, and company events. We can arrange dedicated drivers for regular corporate requirements."
                },
                {
                  question: "What happens if the driver is late or unavailable?",
                  answer: "We maintain high punctuality standards. If any delay occurs due to unforeseen circumstances, we immediately inform you and arrange alternative transportation. Customer satisfaction is our priority."
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Travel Safely with Professional Drivers
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Experience stress-free transportation with our skilled drivers. Whether for daily commutes or special occasions, we ensure you reach your destination safely and on time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire-helper" className="btn-secondary bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              Hire Professional Driver Today
            </Link>
            <Link href="tel:+919972571005" className="btn-secondary border-white text-white hover:bg-white/10 text-lg px-8 py-4">
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