import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  ClockIcon,
  CheckCircleIcon,
  StarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  HomeIcon,
  SparklesIcon,
  HeartIcon,
  ArrowRightIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Part-Time Maid in Bareilly – Flexible Daily Help for Cooking & Cleaning | EzyHelpers',
  description: 'Get trusted part-time maids in Bareilly for 2–4 hours daily to handle your kitchen and home cleaning needs. Perfect for working women and nuclear families who need reliable daily help.',
  keywords: 'part-time maid Bareilly, hourly maid service Bareilly, flexible domestic help Bareilly, daily cleaning service',
}

export default function PartTimeMaidBareilly() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-green-600 to-emerald-700 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <ClockIcon className="h-5 w-5 text-white mr-2" />
              <span className="text-sm font-semibold">Flexible 2-4 Hour Daily Service</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
              Part-Time Maid in
              <span className="block bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent">
                Bareilly
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-teal-100 mb-10 leading-relaxed max-w-4xl mx-auto">
              Get trusted part-time maids for 2–4 hours daily to handle your kitchen and home cleaning needs. 
              Perfect for working women and nuclear families.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/book-now" className="group relative bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center">
                  Book Part-Time Maid Now
                  <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                <PhoneIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Call Now
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">2-4</div>
                <div className="text-sm text-teal-100">Hours Daily</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-teal-100">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.8★</div>
                <div className="text-sm text-teal-100">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-teal-100">Verified Maids</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Assurance Badges */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="group text-center p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl border border-teal-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheckIcon className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-teal-800 mb-2">Verified & Trained</h3>
              <p className="text-sm text-teal-700">Local maids with background verification</p>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <ClockIcon className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-green-800 mb-2">Flexible Hours</h3>
              <p className="text-sm text-green-700">2–4 hour daily shifts available</p>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <StarIcon className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-blue-800 mb-2">Morning & Evening</h3>
              <p className="text-sm text-blue-700">Slots to match your schedule</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose EzyHelpers */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Why Choose EzyHelpers' Part-Time Maid in Bareilly?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Bareilly families trust us for reliable, short-time daily help. Here's why we're the preferred choice:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: SparklesIcon,
                  title: 'Expert in cooking and cleaning tasks',
                  description: 'Skilled in daily household routines'
                },
                {
                  icon: ClockIcon,
                  title: 'Choose 2, 3 or 4-hour slots',
                  description: 'Morning/evening flexibility'
                },
                {
                  icon: UserGroupIcon,
                  title: 'Fluent in Hindi and local language',
                  description: 'Easy communication guaranteed'
                },
                {
                  icon: HomeIcon,
                  title: 'Flexible timings for working women',
                  description: 'Suits school hours & schedules'
                },
                {
                  icon: CheckCircleIcon,
                  title: 'Dependable during all seasons',
                  description: 'Summer and monsoon reliability'
                },
                {
                  icon: HeartIcon,
                  title: 'Knows local shopping routines',
                  description: 'Familiar with Bareilly markets'
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Services Offered by Part-Time Maids
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get essential domestic help for 2-4 hours daily with our trusted part-time maids
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Daily Cooking',
                  description: 'Fresh meals like roti, sabzi, and dal during morning or evening time as per schedule.',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  title: 'Cleaning & Mopping',
                  description: 'Sweeping, mopping, and dusting all rooms daily to keep the home neat and clean.',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Washing Clothes & Ironing',
                  description: 'Washing, drying, folding, and ironing clothes to keep family clothes ready.',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'Kitchen Management',
                  description: 'Cleaning kitchen, washing utensils, arranging shelves for cooking readiness.',
                  color: 'from-green-500 to-teal-500'
                },
                {
                  title: 'Bathroom Cleaning',
                  description: 'Wash toilets, washrooms, and tiles properly to keep them fresh and hygienic.',
                  color: 'from-indigo-500 to-purple-500'
                },
                {
                  title: 'Light Household Tasks',
                  description: 'Dusting furniture, tidying rooms, and keeping everything in place.',
                  color: 'from-yellow-500 to-orange-500'
                },
                {
                  title: 'Shopping Assistance',
                  description: 'Help with buying vegetables, groceries from nearby market during work hours.',
                  color: 'from-pink-500 to-rose-500'
                }
              ].map((service, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs Part-Time Maid Services */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-green-50 to-emerald-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Who Needs Part-Time Maid Services in Bareilly?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ideal for those who need flexible, short-duration help
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Working Women',
                  description: 'Daily 2–4 hours help before or after office time.',
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'Nuclear Families',
                  description: 'Short-time maid for daily cleaning and kitchen tasks.',
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Seniors Living Alone',
                  description: 'Light cooking, cleaning, and regular household support made easy.',
                  gradient: 'from-green-500 to-teal-500'
                },
                {
                  title: 'Teachers & School Staff',
                  description: 'Midday or school-hour help for meals and cleaning.',
                  gradient: 'from-yellow-500 to-orange-500'
                },
                {
                  title: 'Summer & Monsoon Relief',
                  description: 'Extra seasonal support during hot months or heavy rains.',
                  gradient: 'from-indigo-500 to-purple-500'
                }
              ].map((need, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${need.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">{need.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{need.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                4-Step Easy Booking Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hiring a part-time maid in Bareilly with EzyHelpers is quick and reliable
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Share Your Requirement',
                  description: 'We understand your family\'s needs, preferred timing, and specific tasks.',
                  color: 'bg-teal-600'
                },
                {
                  step: '2',
                  title: 'Maid Shortlisting',
                  description: 'We shortlist 2–3 background-verified maids that match your preferences.',
                  color: 'bg-green-600'
                },
                {
                  step: '3',
                  title: 'Interview & Finalize',
                  description: 'You can interview them directly via call or video and choose who fits best.',
                  color: 'bg-blue-600'
                },
                {
                  step: '4',
                  title: 'Easy Onboarding',
                  description: 'Once selected, the maid joins with proper documentation and timing confirmation.',
                  color: 'bg-purple-600'
                }
              ].map((process, index) => (
                <div key={index} className="group text-center p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300">
                  <div className={`w-16 h-16 ${process.color} text-white rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{process.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Explore Other Home Services in Bareilly
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Make life easier with our other trusted services in Bareilly
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <HomeIcon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Full-Time Maids in Bareilly</h3>
                  <p className="text-gray-600 mb-6">8–10 hours of dedicated household help.</p>
                  <Link href="/cities/bareilly/full-time-maid" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium group-hover:translate-x-1 transition-all">
                    Learn More
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
              
              <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <UserGroupIcon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Cook Services in Bareilly</h3>
                  <p className="text-gray-600 mb-6">Expert cooks for daily meals, tiffins & festive food.</p>
                  <Link href="/services/cooks" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium group-hover:translate-x-1 transition-all">
                    Learn More
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
              
              <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <HeartIcon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Elderly Caregiver in Bareilly</h3>
                  <p className="text-gray-600 mb-6">Daily support for senior members with care and companionship.</p>
                  <Link href="/services/elderly-care" className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium group-hover:translate-x-1 transition-all">
                    Learn More
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 bg-gradient-to-br from-teal-600 via-green-600 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
              Book Your Part-Time Maid in Bareilly Today
            </h2>
            <p className="text-xl text-teal-100 mb-10 leading-relaxed">
              Enjoy stress-free mornings and peaceful evenings with dependable, trained part-time helpers 
              for cooking and cleaning. Bareilly families trust EzyHelpers for quality and reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-now" className="group relative bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center">
                  Book Part-Time Maid Now
                  <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300">
                <PhoneIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Call Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 