import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  ClockIcon, 
  ShieldCheckIcon, 
  HomeIcon, 
  HeartIcon,
  CheckCircleIcon,
  PhoneIcon,
  UserGroupIcon,
  StarIcon,
  SunIcon,
  SparklesIcon,
  BuildingOffice2Icon,
  UserPlusIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Full Time Maid Services | 8-10 Hours | EzyHelpers',
  description: 'Reliable full-time maid services for daily cleaning, cooking & home care. Get 8–10 hrs of trained, verified help daily. Book trusted maids near you today!',
  keywords: 'full time maid, daily maid service, 8-10 hours maid, full time domestic help, home care services',
  openGraph: {
    title: 'Full Time Maid Services - Daily Home Management | EzyHelpers',
    description: 'Get reliable full-time maid services for all your daily home needs. Professional, verified staff for cleaning, cooking, and home management.',
    url: 'https://ezyhelpers.com/services/full-time-maids',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/services/full-time-maids'
  }
}

export default function FullTimeMaidsPage() {
  const services = [
    {
      title: "Housekeeping & Cleaning",
      description: "Daily cleaning needs like sweeping, mopping, dusting, and deep cleaning for a spotless living space.",
      icon: HomeIcon
    },
    {
      title: "Meal Preparation & Kitchen Care", 
      description: "Meal planning, grocery shopping, cooking, dishwashing, and overall kitchen maintenance.",
      icon: HeartIcon
    },
    {
      title: "Childcare Support",
      description: "Babysitting, school assignments, playtime activities, and daily routines for children of all ages.",
      icon: UserGroupIcon
    },
    {
      title: "Elderly Assistance",
      description: "Companionship, mobility support, meal assistance, and medication reminders for seniors.",
      icon: ShieldCheckIcon
    }
  ]

  const benefits = [
    "Full-day support for all household needs",
    "Verified, skilled, and trained professionals", 
    "No live-in needed, just full-time help",
    "Reliable service with replacement guarantee",
    "Fixed schedules with trained professionals",
    "Privacy respected - return home daily"
  ]

  return (
    <>
      <main className="min-h-screen">
        <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-700 via-secondary-600 to-secondary-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20zM0 20c11.046 0 20 8.954 20 20H0V20z'/%3E%3C/g%3E%3C/svg%3E")`
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
                  <span className="text-sm font-semibold">Professional Daily Support</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Full-Time Maid
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">
                    Daily Home Management
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                  Experience hassle-free living with dedicated full-time maids who handle everything from housekeeping to meal preparation with professional expertise.
                </p>

                {/* Key Benefits Pills */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
                    ✓ Fixed Schedules
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
                    ✓ No Live-In Needed
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
                    ✓ Trained Professionals
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  <Link
                    href="/hire-helper"
                    className="inline-flex items-center justify-center w-full bg-white text-secondary-600 font-semibold text-lg py-4 px-6 rounded-xl border-2 border-secondary-600 hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    Book Reliable Full-Time Maid Now
                  </Link>

                  <Link
                    href="tel:+919972571005"
                    className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 hover:shadow-xl transition-all duration-300"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span className="hidden sm:inline">Call +91 9972571005</span>
                    <span className="sm:hidden">Call Now</span>
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">8+ Hrs</div>
                    <div className="text-secondary-200 text-sm">Daily Support</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Privacy</div>
                    <div className="text-secondary-200 text-sm">Return Home Daily</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-secondary-200 text-sm">Replacement Guarantee</div>
                  </div>
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative hidden lg:block">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  {/* Service Icons Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-600 hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <HomeIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-emerald-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-emerald-100">Daily Cleaning</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <HeartIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-orange-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-orange-100">Meal Prep</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <UserGroupIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-cyan-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-cyan-100">Child Support</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-600 hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <ShieldCheckIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-indigo-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-indigo-100">Elder Care</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-blue-400 text-blue-900 rounded-full p-3 shadow-lg">
                    <SunIcon className="h-6 w-6" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 rounded-full p-3 shadow-lg">
                    <CheckCircleIcon className="h-6 w-6" />
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
              Why Hire a Full-Time Maid through EzyHelpers?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get the benefits of dedicated help without 24/7 live-in commitment - perfect for busy families
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
              Our Comprehensive Full-Time Maid Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ideal for those with busy work schedules, elderly parents, or young children
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center shrink-0">
                      <IconComponent className="h-6 w-6 text-secondary-600" />
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

      {/* Specialized Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              We Also Offer Specialised Full-Time Helpers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our range of full-time helper services tailored to your specific household needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Full-Time Nannies",
                description: "Daytime childcare with feeding, bathing, routines, and playtime",
                icon: "👶"
              },
              {
                title: "Elderly Attendants", 
                description: "Daily support with mobility, hygiene, medicine, and companionship",
                icon: "👴"
              },
              {
                title: "Full-Time Cooks",
                description: "Fresh meals from morning to night with hygiene maintenance",
                icon: "👨‍🍳"
              },
              {
                title: "Full-Time Drivers",
                description: "School runs, errands, and appointments throughout the day",
                icon: "🚗"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
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

      {/* Process Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Our Simple 4-Step Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Getting started with our full-time maid service is simple and straightforward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "Understanding your specific household needs and lifestyle"
              },
              {
                step: "2", 
                title: "Matching",
                description: "We choose 2–3 verified maids who match your requirements"
              },
              {
                step: "3",
                title: "Interviews", 
                description: "Meet selected candidates face-to-face or online"
              },
              {
                step: "4",
                title: "Onboarding",
                description: "Documentation, training, trial period, and ongoing support"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our full-time maid services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What is a full-time maid service?",
                  answer: "A full-time maid works 8 to 12 hours a day, helping with daily cleaning, cooking, laundry, childcare, and elderly care, while returning to her own home every evening. It's ideal if you want a full-day maid service without needing someone to stay overnight."
                },
                {
                  question: "How many hours do full-time maids work daily?",
                  answer: "They typically work 8 to 12 hours, depending on your needs. You can decide the start and end time during hiring, and also schedule breaks during the day."
                },
                {
                  question: "What's included in full-time maid services?",
                  answer: "Our full-time maids handle daily cleaning, mopping, laundry, kitchen management, babysitting, elderly care, grocery shopping, and other small tasks. Tasks can be customised to suit your family's routine and preferences."
                },
                {
                  question: "How much does a full-time maid cost?",
                  answer: "Pricing varies by location, experience, and duties assigned. EzyHelpers provides affordable rates with no hidden costs. Contact us for a custom quote based on your requirements."
                },
                {
                  question: "What's the difference between full-time maids and live-in maids?",
                  answer: "Full-time maids work fixed hours and return home, offering privacy for your family while supporting you during the day. Live-in maids stay in your home, offering 24-hour domestic help for more intensive needs."
                },
                {
                  question: "Are full-time maids background-verified?",
                  answer: "Yes. All our maids undergo police verification, address check, and skill evaluations to ensure your family's safety and smooth service delivery."
                },
                {
                  question: "Do your full-time maids know how to use appliances?",
                  answer: "Yes. Our maids are trained in using washing machines, mixers, vacuum cleaners, irons, and more. If your home has specialised equipment, we can arrange additional guidance."
                },
                {
                  question: "Do full-time maids work on weekends?",
                  answer: "Yes, their schedule can include weekends if discussed during hiring. Most full-time maids take 1 weekly off, often Sundays, or any agreed day."
                },
                {
                  question: "Can I customise the full-time maid's duties?",
                  answer: "Absolutely! Tasks can be customised, whether you need childcare, elderly assistance, deep kitchen cleaning, or errand help. We match maids based on your household's lifestyle and preferences."
                },
                {
                  question: "Is there a trial period for full-time maids?",
                  answer: "Yes. We offer a trial period so you can assess the maid's performance and fit before committing to a longer contract."
                },
                {
                  question: "Do full-time maids need constant supervision?",
                  answer: "No, they are trained to work independently. However, some initial instructions and occasional monitoring help maintain consistency and satisfaction."
                },
                {
                  question: "Can full-time maids work in apartments and gated communities?",
                  answer: "Yes, all our maids and helpers are comfortable working in apartments, gated communities, and villas, following security protocols and society rules."
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
      <section className="section-padding bg-secondary-600 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Let Us Make Your Life Easier
          </h2>
          <p className="text-xl text-secondary-100 mb-8 max-w-3xl mx-auto">
            No more stress, no more juggling tasks. Just peace of mind and a well-run home. Call EzyHelpers today and book a full-time maid for the support you need!
          </p>
          {/* CTA Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <Link
              href="/hire-helper"
              className="inline-flex items-center justify-center w-full bg-white text-secondary-600 font-semibold text-lg py-4 px-6 rounded-xl border-2 border-secondary-600 hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
            >
              Book Reliable Full-Time Maid Now
            </Link>

            <Link
              href="tel:+919972571005"
              className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 hover:shadow-xl transition-all duration-300"
            >
              <PhoneIcon className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="hidden sm:inline">Call +91 9972571005</span>
              <span className="sm:hidden">Call Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Related Services */}
      <section className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23818cf8' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3Ccircle cx='45' cy='15' r='2'/%3E%3Ccircle cx='15' cy='45' r='2'/%3E%3Ccircle cx='45' cy='45' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-secondary-100 text-secondary-800 rounded-full px-4 py-2 mb-6">
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
                title: "Live-In Maid Services",
                description: "24/7 household help right at home for constant support",
                href: "/services/live-in-maids",
                icon: BuildingOffice2Icon,
                bgColor: "bg-orange-50",
                iconColor: "text-orange-600",
                borderColor: "border-orange-200"
              },
              {
                title: "Part-Time Maid Services", 
                description: "Flexible cleaning on your schedule without full commitment",
                href: "/services/part-time-maids",
                icon: SparklesIcon,
                bgColor: "bg-purple-50",
                iconColor: "text-purple-600",
                borderColor: "border-purple-200"
              },
              {
                title: "Cook Services",
                description: "Delicious, hassle-free meals every day from professional cooks",
                href: "/services/cooks",
                icon: UserPlusIcon,
                bgColor: "bg-pink-50",
                iconColor: "text-pink-600",
                borderColor: "border-pink-200"
              }
            ].map((service, index) => {
              const IconComponent = service.icon
              return (
                <Link
                  key={index}
                  href={service.href}
                  className={`group relative ${service.bgColor} rounded-2xl p-8 border-2 ${service.borderColor} hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>
                  </div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${service.bgColor} group-hover:bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 border ${service.borderColor} group-hover:border-white/20`}>
                      <IconComponent className={`h-8 w-8 ${service.iconColor} group-hover:text-white group-hover:scale-110 transition-all duration-300`} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 font-display transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className={`${service.iconColor} group-hover:text-white font-semibold transition-colors duration-300`}>
                        Learn More About {service.title}
                      </span>
                      <ArrowRightIcon className={`h-5 w-5 ${service.iconColor} group-hover:text-white group-hover:translate-x-1 transition-all duration-300`} />
                    </div>
                  </div>

                  {index === 1 && (
                    <div className="absolute -top-3 -left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full transform -rotate-12 shadow-lg">
                      Popular
                    </div>
                  )}
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? We have more services available!
            </p>
            <Link
              href="/hire-helper"
              className="inline-flex items-center bg-secondary-600 text-white hover:bg-secondary-700 font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
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