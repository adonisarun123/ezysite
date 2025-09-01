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
      title: "On-Demand Maid for Emergency Cleaning",
      description: "Had a sudden mess or last-minute guests? Our on-demand maids for cleaning can reach your home quickly to get everything spotless.",
      icon: BoltIcon,
      features: [
        "Sweeping, mopping, and dusting",
        "Deep kitchen and bathroom cleaning",
        "Quick room organization and clutter removal",
        "Sanitization of key areas"
      ],
      cta: "Book Emergency Cleaning Now"
    },
    {
      title: "On-Demand Cook", 
      description: "Hosting a get-together or just too busy to cook? Our on-demand cooks can step in with fresh meals made right at home.",
      icon: ClockIcon,
      features: [
        "Prepare meals for families or small gatherings",
        "Assist with menu planning and groceries",
        "Cook Indian dishes, snacks, and more",
        "Clean the kitchen after cooking"
      ],
      cta: "Hire Emergency Cook Today"
    },
    {
      title: "On-Demand Babysitter",
      description: "Need to step out unexpectedly? Our emergency helpers for babysitting offer safe, caring support for your child at short notice.",
      icon: ShieldCheckIcon,
      features: [
        "Supervise and engage kids with play or study",
        "Feed and manage hygiene needs",
        "Help with homework or school pickup",
        "Keep your child safe and happy"
      ],
      cta: "Get Emergency Babysitter"
    },
    {
      title: "On-Demand Elderly Care Assistant",
      description: "When your regular caregiver is unavailable, call our trained on-demand elderly care helpers for prompt and kind assistance.",
      icon: ExclamationTriangleIcon,
      features: [
        "Help with bathing, dressing, and medication",
        "Offer emotional support and companionship",
        "Assist with walking and movement",
        "Provide health updates to the family"
      ],
      cta: "Book Emergency Elder Care"
    },
    {
      title: "On-Demand Pet Walker",
      description: "Can’t make time for your pet’s walk today? Our on-demand pet helpers are just a call away.",
      icon: UserGroupIcon,
      features: [
        "Dog walking and feeding",
        "Basic grooming and playtime",
        "Pet transport and emergency care"
      ],
      cta: "Get Emergency Pet Walker"
    },
    {
      title: "On-Demand Patient/Nursing Care",
      description: "Need help caring for someone unwell? Our emergency nursing helpers can come to your home and support you with basic medical needs.",
      icon: BriefcaseIcon,
      features: [
        "Administer medicines and monitor vitals",
        "Help with movement and hygiene",
        "Assist with doctor instructions and care routines"
      ],
      cta: "Book Emergency Nursing Care"
    },
    {
      title: "On-Demand Technical Support",
      description: "Got a sudden plumbing, electric, or furniture issue? Get our on-demand technicians to fix it quickly.",
      icon: SparklesIcon,
      features: [
        "Electrical repairs and short circuit fixes",
        "Plumbing leaks and drainage issues",
        "Minor carpentry or appliance setup"
      ],
      cta: "Get Emergency Technical Help"
    },
    {
      title: "On-Demand Event Helpers",
      description: "Hosting a party or social event and short on help? Our on-demand event helpers will make your function smooth and stress-free.",
      icon: CalendarIcon,
      features: [
        "Assist with setup, decoration, and serving",
        "Help in the kitchen and manage guests",
        "Handle cleaning after the event"
      ],
      cta: "Book Event Emergency Helpers"
    }
  ]

  const benefits = [
    "Fast Response – Maids Available in Hours",
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
                  Need urgent household help? EzyHelpers offers on-demand maid services in your city, perfect for one-time or last-minute support needs. Whether it’s an unexpected guest, emergency cleanup, last-minute cooking, or temporary care, our emergency helpers are just a call away; skilled, verified, and ready to assist.
                </p>

                {/* Key Benefits Pills */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  {[
                    'Verified & Trained Emergency Helpers',
                    'Same-Day Availability',
                    'Hourly Pricing, No Commitment',
                    'Flexible Short-Term Assignments',
                    'Available for Events & Special Occasions',
                    'Quick Replacement Guarantee',
                    'Multi-Tasking Capable (on request)',
                    'Instant Booking Options',
                    'Multi-Service Specialists'
                  ].map((pill, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ {pill}</div>
                  ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for On-Demand Maids?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our On-Demand Maid service is designed for flexibility and quick action. Whether it’s for 2 hours or a day-long event, we provide trained helpers for one-time or emergency needs.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Specialized On-Demand Maid Services for Every Urgent Need</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Whether it’s an unexpected guest, a last-minute event, or a sudden personal need, EzyHelpers is here with trained on-demand maids and emergency helpers ready to step in fast. Choose from our expert services designed to support you exactly when you need them most.</p>
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
                        <>
                          <div className="mt-4 text-sm font-semibold text-gray-900">What they do:</div>
                          <ul className="mt-2 space-y-2 list-disc list-inside text-gray-700">
                            {service.features.map((f, i) => (
                              <li key={i}>{f}</li>
                            ))}
                          </ul>
                        </>
                      )}
                      {service.cta && (
                        <div className="mt-4">
                          <Link href="/hire-helper" className="inline-flex items-center text-trust-700 font-semibold hover:underline">
                            {service.cta}
                            <ArrowRightIcon className="h-4 w-4 ml-1" />
                          </Link>
                        </div>
                      )}
                    </div>
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
                description: "Call or book online immediately. Discuss your urgent needs and choose the type of emergency helper you need."
              },
              {
                step: "2", 
                title: "Immediate Matching",
                description: "We instantly connect you with available verified emergency helpers based on your location and urgent requirements."
              },
              {
                step: "3",
                title: "Quick Confirmation", 
                description: "Get immediate confirmation of your booking with helper details and estimated arrival time."
              },
              {
                step: "4",
                title: "Service Delivery",
                description: "Your emergency helper arrives promptly and begins work immediately. Our support team monitors the service throughout."
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
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Everything You Should Know for Immediate Service</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[ 
              { title: "Immediate Availability", description: "Emergency helpers are subject to availability in your area. Peak times may have longer response times, so book as early as possible." },
              { title: "Service Scope", description: "Clearly communicate your urgent needs and expectations to ensure the emergency helper comes prepared with the necessary tools and supplies." },
              { title: "Hourly Rates", description: "Pricing for on-demand maid services is based on hourly rates and clearly communicated before the service begins. You’ll know the total cost in advance to ensure full transparency. There are no hidden fees, and you only pay after the service is completed to your satisfaction." }
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
                { question: 'What is an on-demand maid service?', answer: 'An on-demand maid service helps you get quick household support when you need it most. EzyHelpers offers same-day emergency maids for cleaning, cooking, babysitting, and care. It is ideal for unexpected situations and short-term help. You can book it for just a few hours without any long-term contract.' },
                { question: 'How quickly can I get an on-demand maid?', answer: 'EzyHelpers can send an on-demand maid within a few hours of your request. We offer same-day service across most locations. For faster response, it is best to book early, especially during weekends or holidays.' },
                { question: 'Do I need to pay upfront, or can I pay after the emergency service is completed?', answer: 'You can pay after the service is completed. We accept multiple payment methods, including cash, UPI, and card. The total charge is confirmed before the service begins, and payment is only required once you are satisfied with the help provided.' },
                { question: 'Can I request a female helper for emergency babysitting or elderly care?', answer: 'Yes, you can request a female helper. We understand that families may prefer female support for services like babysitting or elder care. Just let us know your preference while booking. We try our best to match it, depending on availability.' },
                { question: 'Can I cancel my emergency booking if my situation changes?', answer: 'Yes, you can cancel your emergency booking. However, since these services are fast and same-day, some charges may apply if the helper is already on the way. For best results, inform our support team as early as possible.' },
                { question: 'Can I hire an on-demand cook for same-day meals?', answer: 'Yes, we offer on-demand cooks for same-day meal preparation. They can help with cooking meals for your family, small parties, or guests. They also help with groceries, menu planning, and kitchen cleaning. You can request this service for a few hours or for a full day.' },
                { question: 'Can I choose the language my emergency helper speaks?', answer: 'Yes, you can mention your preferred language when booking. Most of our helpers speak both local languages and basic English. We will try to match you with someone who can communicate clearly with your family.' },
                { question: 'How is emergency service different from regular part-time maid service?', answer: 'Emergency maid services are for urgent, same-day help. You can book them instantly for short periods without contracts. Part-time services are scheduled regularly with fixed timings and long-term arrangements. Emergency services are quicker but may cost slightly more per hour.' }
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
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Find Your Trusted On-Demand Maid with EzyHelpers Today!</h2>
          <p className="text-xl text-trust-100 mb-8 max-w-3xl mx-auto">Don't let emergencies or last-minute situations overwhelm you. With EzyHelpers, get reliable, background-verified emergency helpers who provide immediate support exactly when you need it most.</p>
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
                description: "Short-duration cleaning, cooking, or support help for 2–6 hours a day",
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
                description: "Experienced, background-verified drivers for family travel, errands, or appointments",
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
                        {index === 0 ? 'Learn More About Part-Time Maid Services' : index === 1 ? 'Learn More About Elderly Care Services' : 'Learn More About Driver Services'}
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