import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  BoltIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon,
  CheckCircleIcon,
  PhoneIcon,
  ExclamationTriangleIcon,
  StarIcon,
  BriefcaseIcon,
  UserGroupIcon,
  CalendarIcon,
  HomeModernIcon,
  ArrowRightIcon,
  BuildingOffice2Icon,
  UserPlusIcon,
  TruckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'On-Demand Maid Services – Instant Help When You Need It Most',
  description: 'Need urgent household help? EzyHelpers offers on-demand maid services, perfect for one-time or last-minute support—cleaning, cooking, babysitting, elderly care, and more with quick confirmation and verified helpers.',
  keywords: 'on-demand maid, emergency maid, same day maid, urgent house help, instant booking, hourly pricing',
}

export default function OnDemandHelpersPage() {
  const services = [
    {
      title: "Emergency Home Cleaning",
      description: "Expecting guests or preparing for a pooja? Our cleaning experts are just a call away for quick, reliable home cleaning.",
      icon: BoltIcon,
      features: ["Sweeping & mopping", "Kitchen & bathroom cleaning", "Post-party cleaning", "Room organization"]
    },
    {
      title: "On-Demand Cooking Services", 
      description: "Our instant cooks prepare fresh home-style meals, snacks, or fasting food with hygiene and care.",
      icon: ClockIcon,
      features: ["North Indian meals", "Fasting food", "Event cooking", "Kitchen cleanup"]
    },
    {
      title: "Emergency Babysitter Services",
      description: "Need help with kids while you're busy or out? Our trained babysitters step in instantly.",
      icon: ShieldCheckIcon,
      features: ["Feeding & bathing", "Age-appropriate play", "Holiday supervision", "School drop/pickup"]
    },
    {
      title: "Elder Care Support",
      description: "If your regular caregiver is away, we provide respectful and gentle elderly support.",
      icon: ExclamationTriangleIcon,
      features: ["Mobility assistance", "Medicine reminders", "Emotional support", "Light home help"]
    }
  ]

  const benefits = [
    "Fast Response – Helpers Available in Hours",
    "Trained & Background-Checked Professionals",
    "No Long-Term Contract Required",
    "Multiple Services Under One Roof",
    "Reasonable, Hour-Based Pricing",
    "Ideal for Unplanned Needs or Temporary Help",
    "Transparent Hourly Pricing"
  ]

  return (
    <>
      <main className="min-h-screen">
        <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-trust-700 via-trust-600 to-trust-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-16 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-16 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 0L60.82 39.18 100 50 60.82 60.82 50 100 39.18 60.82 0 50 39.18 39.18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
                  <span className="text-sm font-semibold">Same-Day Availability</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  On-Demand Maid Services
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">
                    Instant Help When You Need It Most
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                  Need urgent household help? Our trained and background-verified helpers are just a call away for one-time or last-minute needs—emergency cleaning, quick cooking, babysitting, elderly care, and more.
                </p>

                {/* Key Benefits Pills */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    ✓ 2–4 Hours Response
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    ✓ Verified & Trained
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    ✓ Hourly Pricing
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Link href="/hire-helper" className="group relative bg-white text-trust-800 hover:bg-trust-50 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">Book an On-Demand Maid</span>
                  </Link>
                  <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300">
                    <PhoneIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Call for Emergency Help</span>
                    <span className="sm:hidden">+91 9972571005</span>
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Instant</div>
                    <div className="text-trust-200 text-sm">Booking & Confirmation</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Available</div>
                    <div className="text-trust-200 text-sm">7 Days a Week</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">4.8★</div>
                    <div className="text-trust-200 text-sm">For Emergency Helper Services</div>
                  </div>
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative hidden lg:block">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  {/* Service Icons Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-yellow-500 hover:to-orange-600 hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <ClockIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-yellow-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-yellow-100">Temp Support</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-red-500 hover:to-orange-600 hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <BoltIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-red-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-red-100">Emergency Clean</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-600 hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <ShieldCheckIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-green-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-green-100">Childcare</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-fuchsia-500 hover:to-purple-600 hover:shadow-2xl hover:shadow-fuchsia-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <ExclamationTriangleIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-fuchsia-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-fuchsia-100">Quick Tasks</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-red-400 text-red-900 rounded-full p-3 shadow-lg">
                    <BoltIcon className="h-6 w-6" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-orange-400 text-orange-900 rounded-full p-3 shadow-lg">
                    <ClockIcon className="h-6 w-6" />
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
              Why EzyHelpers is Your Best Choice for Emergency House Help?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose EzyHelpers for peace of mind during emergencies - fast response, trusted service, and experienced staff
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-success-600 mt-1 shrink-0" />
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
              Comprehensive On-Demand Services Offered by EzyHelpers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A wide range of flexible, reliable household support solutions designed to meet your needs, whenever and wherever you need them
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-trust-100 rounded-lg flex items-center justify-center shrink-0">
                      <IconComponent className="h-6 w-6 text-trust-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                      {service.features && (
                        <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                          {service.features.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional On-Demand Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Additional Specialized On-Demand Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "On-Demand Pet Walker", description: "Dog walking, feeding, and basic grooming when you're short on time" },
              { title: "On-Demand Patient/Nursing Care", description: "Basic nursing support, medicine assistance, and hygiene care at home" },
              { title: "On-Demand Technical Support", description: "Quick fixes for electrical, plumbing, or minor carpentry issues" },
              { title: "On-Demand Event Helpers", description: "Setup, serving, guest management, and post-event cleanup" },
              { title: "Post-Party Cleanup", description: "Complete cleanup after events so you can relax without lifting a finger" },
              { title: "Driver Services", description: "Professional drivers for airport drops, meetings, or late-night travel" }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Who Can Benefit from Our On-Demand Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ideal for anyone needing flexible, reliable home assistance, only when you need it
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Busy Professionals",
                description: "Unpredictable work hours needing help when actually at home",
                icon: BriefcaseIcon,
                bgColor: "bg-blue-50",
                iconColor: "text-blue-600"
              },
              {
                title: "Emergency Situations", 
                description: "Urgent childcare due to cancelled babysitters or unexpected plans",
                icon: ExclamationTriangleIcon,
                bgColor: "bg-red-50",
                iconColor: "text-red-600"
              },
              {
                title: "Event Hosts",
                description: "Fast cleaning or staffing support before, during, or after gatherings",
                icon: UserGroupIcon,
                bgColor: "bg-purple-50",
                iconColor: "text-purple-600"
              },
              {
                title: "Transitional Housing",
                description: "Moving, renovating, or in-between homes needing short-term support",
                icon: HomeModernIcon,
                bgColor: "bg-orange-50",
                iconColor: "text-orange-600"
              }
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <div 
                  key={index} 
                  className={`group relative ${item.bgColor} rounded-xl p-6 border border-transparent hover:border-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer overflow-hidden`}

                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 ${item.bgColor} group-hover:bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 transition-all duration-300`}>
                      <IconComponent className={`h-6 w-6 ${item.iconColor} group-hover:text-white group-hover:scale-110 transition-all duration-300`} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-3 font-display transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <StarIcon className="h-4 w-4 text-white" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Our Easy 4-Step Emergency Booking Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Booking an on-demand maid with EzyHelpers is instant and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Instant Consultation",
                description: "Call or book online immediately and tell us your urgent need"
              },
              {
                step: "2", 
                title: "Immediate Matching",
                description: "We quickly match available verified helpers to your requirement"
              },
              {
                step: "3",
                title: "Quick Confirmation", 
                description: "Receive immediate confirmation with helper details and ETA"
              },
              {
                step: "4",
                title: "Service Delivery",
                description: "Your helper arrives promptly and begins work immediately"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-trust-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Consider Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What to Consider Before Booking Emergency Helpers?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Everything you should know for immediate service</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[ 
              { title: "Immediate Availability", description: "Emergency helpers are subject to availability in your area. Peak times may have longer response times, so book as early as possible." },
              { title: "Service Scope", description: "Clearly communicate your urgent needs and expectations so the helper comes prepared with the right tools and supplies." },
              { title: "Hourly Rates", description: "Pricing is hourly and confirmed upfront. There are no hidden fees, and you pay only after service completion." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
              Get answers to common questions about our on-demand helper services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[ 
                { question: "What is an on-demand maid service?", answer: "An on-demand maid service provides quick household support when you need it most—cleaning, cooking, babysitting, or care. It’s ideal for unexpected situations and short-term help, bookable for just a few hours without any long-term contract." },
                { question: "How quickly can I get an on-demand maid?", answer: "We can often send an on-demand maid within a few hours of your request. Same-day service is available in most locations—booking early helps during weekends or holidays." },
                { question: "Do I need to pay upfront, or can I pay after the service is completed?", answer: "You can pay after the service is completed. The total charge is confirmed before the service begins, and payment is only required once you're satisfied with the help provided." },
                { question: "Can I request a female helper for babysitting or elderly care?", answer: "Yes, you can request a female helper. Please mention your preference while booking and we’ll try our best to match it based on availability." },
                { question: "Can I cancel my emergency booking if my situation changes?", answer: "Yes, you can cancel your emergency booking. Since these services are fast and same-day, some charges may apply if the helper is already on the way." },
                { question: "Can I hire an on-demand cook for same-day meals?", answer: "Yes. On-demand cooks can prepare home-style meals for your family or small gatherings, and also help with groceries, menu planning, and kitchen cleaning." },
                { question: "Can I choose the language my helper speaks?", answer: "Yes, you can mention your preferred language during booking. We’ll try to match someone who can communicate comfortably with your family." },
                { question: "How is emergency service different from regular part-time maid service?", answer: "Emergency services are for urgent, same-day help without contracts and for shorter durations. Part-time services are scheduled regularly with fixed timings and longer-term arrangements." }
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
      <section className="section-padding bg-trust-600 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Find Your Trusted On-Demand Maid with EzyHelpers Today!</h2>
          <p className="text-xl text-trust-100 mb-8 max-w-3xl mx-auto">Don't let emergencies or last-minute situations overwhelm you. Get reliable, background-verified helpers who provide immediate support exactly when you need it most.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto px-4">
            <Link
              href="/hire-helper"
              className="inline-flex items-center justify-center w-full bg-white text-trust-600 font-semibold text-lg py-4 px-6 rounded-xl border-2 border-trust-600 hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
            >
              Book Your Emergency Helper
            </Link>

            <Link
              href="tel:+919972571005"
              className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 hover:shadow-xl transition-all duration-300"
            >
              <PhoneIcon className="h-5 w-5 mr-3 flex-shrink-0" />
              Call Us for Immediate Assistance
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Related Services */}
      <section className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23818cf8' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3Ccircle cx='45' cy='15' r='2'/%3E%3Ccircle cx='15' cy='45' r='2'/%3E%3Ccircle cx='45' cy='45' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-trust-100 text-trust-800 rounded-full px-4 py-2 mb-6">
              <SparklesIcon className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">Complete Home Care Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Explore Our Other Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete your home care needs with our wide range of professional domestic help services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Part-Time Maid Services",
                description: "Flexible cleaning on your schedule without full commitment",
                href: "/services/part-time-maids",
                icon: BuildingOffice2Icon,
                gradient: "from-teal-500 to-cyan-600",
                bgColor: "bg-teal-50",
                iconColor: "text-teal-600",
                borderColor: "border-teal-200"
              },
              {
                title: "Elderly Care Services", 
                description: "Compassionate support for seniors with daily routines and companionship",
                href: "/services/elderly-care",
                icon: UserPlusIcon,
                gradient: "from-amber-500 to-orange-600",
                bgColor: "bg-amber-50",
                iconColor: "text-amber-600",
                borderColor: "border-amber-200"
              },
              {
                title: "Driver Services",
                description: "Safe and timely travel solutions for all your transportation needs",
                href: "/services/drivers",
                icon: TruckIcon,
                gradient: "from-indigo-500 to-purple-600",
                bgColor: "bg-indigo-50",
                iconColor: "text-indigo-600",
                borderColor: "border-indigo-200"
              }
            ].map((service, index) => {
              const IconComponent = service.icon
              return (
                <Link 
                  key={index} 
                  href={service.href} 
                  className={`group relative ${service.bgColor} rounded-2xl p-8 border-2 ${service.borderColor} hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer overflow-hidden`}

                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${service.bgColor} group-hover:bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 border ${service.borderColor} group-hover:border-white/20`}>
                      <IconComponent className={`h-8 w-8 ${service.iconColor} group-hover:text-white group-hover:scale-110 transition-all duration-300`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 font-display transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Enhanced Learn More */}
                    <div className="flex items-center justify-between">
                      <span className={`${service.iconColor} group-hover:text-white font-semibold transition-colors duration-300`}>
                        Learn More About {service.title}
                      </span>
                      <ArrowRightIcon className={`h-5 w-5 ${service.iconColor} group-hover:text-white group-hover:translate-x-1 transition-all duration-300`} />
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Popular Badge for middle card */}
                  {index === 1 && (
                    <div className="absolute -top-3 -left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full transform -rotate-12 shadow-lg">
                      Popular
                    </div>
                  )}
                </Link>
              )
            })}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? We have more services available!
            </p>
            <Link 
              href="/hire-helper" 
              className="inline-flex items-center bg-trust-600 text-white hover:bg-trust-700 font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View All Services
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
      </main>
    </>
  )
} 