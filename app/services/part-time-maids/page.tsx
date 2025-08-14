import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  ClockIcon, 
  CurrencyDollarIcon, 
  HomeIcon, 
  HeartIcon,
  CheckCircleIcon,
  PhoneIcon,
  CalendarDaysIcon,
  StarIcon,
  SparklesIcon,
  BriefcaseIcon,
  UsersIcon,
  UserIcon,
  CurrencyDollarIcon as DollarIcon,
  EyeSlashIcon,
  AcademicCapIcon,
  ArrowRightIcon,
  BuildingOffice2Icon,
  UserPlusIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Part-Time Maid in Bangalore | Hourly House Help',
  description: 'Get reliable part-time maids in Bangalore for 2-6 hours daily. Flexible timings for cleaning, cooking, and home tasks with verified helpers.',
  keywords: 'part time maid bangalore, hourly maid bangalore, house help bangalore, cleaning maid bangalore',
}

export default function PartTimeMaidsPage() {
  const services = [
    {
      title: "Part-Time House Cleaning",
      description: "Professional cleaning services for 2-6 hours daily. Perfect for busy professionals in Bangalore's tech hubs like Electronic City and Whitefield.",
      icon: HomeIcon,
      features: ["Daily sweeping", "Bathroom cleaning", "Kitchen cleaning", "Dusting & mopping"]
    },
    {
      title: "Part-Time Kitchen Help", 
      description: "Flexible kitchen assistance with meal prep, cooking, and cleaning. Ideal for working couples in Bangalore's IT corridors.",
      icon: HeartIcon,
      features: ["Meal preparation", "Utensil washing", "Kitchen cleaning", "Grocery help"]
    },
    {
      title: "Part-Time Child Support",
      description: "Reliable childcare support for a few hours daily. Great for families in Bangalore's residential areas like HSR Layout and Marathahalli.",
      icon: ClockIcon,
      features: ["School prep", "Meal feeding", "Activity supervision", "Basic care"]
    },
    {
      title: "Part-Time Senior Care",
      description: "Gentle assistance for elderly family members. Available in all major Bangalore localities for flexible hours.",
      icon: CalendarDaysIcon,
      features: ["Basic care", "Meal assistance", "Medicine reminders", "Light exercise"]
    }
  ]

  const benefits = [
    "Flexible 2-6 hour schedules",
    "Verified & trained helpers",
    "Affordable hourly rates",
    "No long-term commitment",
    "Bangalore-wide coverage",
    "Replacement guarantee"
  ]

  return (
    <>
      <main className="min-h-screen">
        <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-700 via-accent-600 to-accent-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='4'/%3E%3Ccircle cx='20' cy='20' r='4'/%3E%3Ccircle cx='60' cy='20' r='4'/%3E%3Ccircle cx='20' cy='60' r='4'/%3E%3Ccircle cx='60' cy='60' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
                  <span className="text-sm font-semibold">Flexible & Cost-Effective</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Part-Time Maid
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">
                    Book Hourly, Daily, Weekly
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                  Keep your home spotless and stress-free with flexible part-time maids. From cleaning to meal prep, get professional help exactly when you need it.
                </p>

                {/* Key Benefits Pills */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    ✓ Flexible Scheduling
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    ✓ Pay Per Hour
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    ✓ No Contracts
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto px-4">
                  <Link
                    href="/hire-helper"
                    className="inline-flex items-center justify-center w-full bg-white text-accent-600 font-semibold text-lg py-4 px-6 rounded-xl border-2 border-accent-600 hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    Book Flexible Part-Time Maid Near You
                  </Link>

                  <Link
                    href="tel:+919972571005"
                    className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 hover:shadow-xl transition-all duration-300"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2 shrink-0" />
                    <span className="hidden sm:inline">Call: +91 9972571005</span>
                    <span className="sm:hidden">+91 9972571005</span>
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">2-6 Hrs</div>
                    <div className="text-accent-200 text-sm">Flexible Hours</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Budget</div>
                    <div className="text-accent-200 text-sm">Friendly Rates</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Privacy</div>
                    <div className="text-accent-200 text-sm">Respected</div>
                  </div>
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative hidden lg:block">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  {/* Service Icons Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-violet-500 hover:to-purple-600 hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <HomeIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-violet-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-violet-100">Basic Cleaning</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-rose-500 hover:to-pink-600 hover:shadow-2xl hover:shadow-rose-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <HeartIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-rose-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-rose-100">Meal Prep</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-600 hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <CalendarDaysIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-amber-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-amber-100">Quick Tasks</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-teal-500 hover:to-cyan-600 hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <ClockIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-teal-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-teal-100">Care Support</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-purple-400 text-purple-900 rounded-full p-3 shadow-lg">
                    <SparklesIcon className="h-6 w-6" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 rounded-full p-3 shadow-lg">
                    <CurrencyDollarIcon className="h-6 w-6" />
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
              Why Choose EzyHelpers' Part-Time Maid Service?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A flexible maid service that fits around your schedule, budget, and specific household tasks
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
              Expert Part-Time Maid Services to Make Life Easier
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From cleaning to kitchen help, our part-time maids deliver quality service tailored to your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center shrink-0">
                      <IconComponent className="h-6 w-6 text-accent-600" />
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

      {/* Who Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Who Can Benefit from Our Part-Time Maid Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Working Professionals",
                description: "Busy workers who need daily chores handled without disrupting their schedule",
                icon: BriefcaseIcon,
                bgColor: "bg-indigo-50",
                iconColor: "text-indigo-600"
              },
              {
                title: "Busy Parents", 
                description: "Support with kitchen prep and house chores for smoother family life",
                icon: UsersIcon,
                bgColor: "bg-green-50",
                iconColor: "text-green-600"
              },
              {
                title: "Seniors at Home",
                description: "Gentle, respectful help with daily tasks like laundry or light cleaning",
                icon: UserIcon,
                bgColor: "bg-orange-50",
                iconColor: "text-orange-600"
              },
              {
                title: "Young Couples",
                description: "Flexible help with dishes, cleaning, and organizing without overwhelm",
                icon: HeartIcon,
                bgColor: "bg-pink-50",
                iconColor: "text-pink-600"
              },
              {
                title: "Budget-Conscious Households",
                description: "Save money by paying only for essential services when needed",
                icon: DollarIcon,
                bgColor: "bg-yellow-50",
                iconColor: "text-yellow-600"
              },
              {
                title: "Privacy-Focused Individuals",
                description: "Discreet, respectful help with no unnecessary intrusion on personal space",
                icon: EyeSlashIcon,
                bgColor: "bg-purple-50",
                iconColor: "text-purple-600"
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

      {/* Specialized Services */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Find the Perfect Part-Time Helpers for Your Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the right help for your home, your schedule, and your comfort
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Part-Time Nanny",
                description: "Trusted childcare for a few focused hours during work or outings",
                icon: "👶"
              },
              {
                title: "Home Attendant", 
                description: "Dedicated support for seniors during morning routines and meals",
                icon: "👴"
              },
              {
                title: "Part-Time Cook",
                description: "Home-cooked meals during key prep hours for working families",
                icon: "👨‍🍳"
              },
              {
                title: "Part-Time Driver",
                description: "Safe travel for school drop-offs, doctor visits, and errands",
                icon: "🚗"
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

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our part-time maid services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What is the cost of part-time maid in Bangalore?",
                  answer: "Part-time maid costs in Bangalore vary by area and tasks. Typically, rates range from ₹2,500 to ₹4,000 monthly for 2-3 hours daily service. Areas like Whitefield or Electronic City may have slightly higher rates. Exact pricing depends on work hours, duties, and location."
                },
                {
                  question: "What are the working hours for part-time maids?",
                  answer: "Most part-time maids in Bangalore work 2-6 hours daily, with flexible morning or evening slots. Common timings are 7-10 AM or 4-7 PM, but can be adjusted to your schedule."
                },
                {
                  question: "Can I get a part-time maid for weekends only?",
                  answer: "Yes, weekend-only part-time maids are available in Bangalore. Many IT professionals prefer this option for deep cleaning and organizing on weekends."
                },
                {
                  question: "Do you provide female part-time maids?",
                  answer: "Yes, we have trained female part-time maids across Bangalore. Most clients prefer female maids for household work."
                },
                {
                  question: "Are part-time maids available in my area?",
                  answer: "We cover all major Bangalore areas including Whitefield, HSR Layout, Marathahalli, Koramangala, BTM Layout, JP Nagar, and more."
                },
                {
                  question: "Can part-time maids cook South Indian food?",
                  answer: "Yes, many part-time maids can prepare basic South Indian dishes like idli, dosa, sambar, and rice. Cooking skills vary by individual."
                },
                {
                  question: "Do part-time maids work in gated communities?",
                  answer: "Yes, our part-time maids are familiar with gated community protocols in Bangalore. They follow security procedures and society rules."
                },
                {
                  question: "What tasks do part-time maids handle?",
                  answer: "They handle sweeping, mopping, dusting, bathroom cleaning, utensil washing, and basic kitchen work. Additional tasks can be discussed during booking."
                },
                {
                  question: "Can I change maid timings later?",
                  answer: "Yes, timing changes are possible with advance notice. If current maid can't adjust, we'll find a replacement for your preferred timing."
                },
                {
                  question: "Are part-time maids verified?",
                  answer: "Yes, all part-time maids undergo ID verification and background checks. We prioritize client safety and trust."
                },
                {
                  question: "What if my regular maid takes leave?",
                  answer: "We provide temporary replacement maids during your regular maid's leave to ensure uninterrupted service."
                },
                {
                  question: "Can I get a trial period?",
                  answer: "Yes, we offer a short trial period to ensure the maid's work quality matches your expectations."
                },
                {
                  question: "Do part-time maids speak local languages?",
                  answer: "Most maids speak Kannada and basic Hindi. Many also understand basic English commands."
                },
                {
                  question: "What about maid replacement?",
                  answer: "If you're unhappy with the service, we offer quick replacement within 24-48 hours in most Bangalore areas."
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
      <section className="section-padding bg-accent-600 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Ready to Bring Ease and Comfort Back to Your Home?
          </h2>
          <p className="text-xl text-accent-100 mb-8 max-w-3xl mx-auto">
            Don't let household chores steal your precious time and peace. Hire a trusted part-time maid from EzyHelpers today and experience the joy of having reliable support exactly when you need it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto px-4">
            <Link
              href="/hire-helper"
              className="inline-flex items-center justify-center w-full bg-white text-accent-600 font-semibold text-lg py-4 px-6 rounded-xl border-2 border-accent-600 hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
            >
              Book Flexible Part-Time Maid Near You
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
            <div className="inline-flex items-center bg-accent-100 text-accent-800 rounded-full px-4 py-2 mb-6">
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
                title: "On-Demand Maid Services",
                description: "Instant home help with no commitment for urgent cleaning needs",
                href: "/services/on-demand-helpers",
                icon: BuildingOffice2Icon,
                gradient: "from-orange-500 to-red-600",
                bgColor: "bg-orange-50",
                iconColor: "text-orange-600",
                borderColor: "border-orange-200"
              },
              {
                title: "Deep Cleaning Services", 
                description: "Thorough cleaning for every occasion from festive prep to post-party",
                href: "/services/on-demand-helpers",
                icon: SparklesIcon,
                gradient: "from-purple-500 to-violet-600",
                bgColor: "bg-purple-50",
                iconColor: "text-purple-600",
                borderColor: "border-purple-200"
              },
              {
                title: "Part-Time Nanny Services",
                description: "Flexible childcare you can trust for safe, caring support",
                href: "/services/nanny-babysitter",
                icon: UserPlusIcon,
                gradient: "from-pink-500 to-rose-600",
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
              className="inline-flex items-center bg-accent-600 text-white hover:bg-accent-700 font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
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