import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '24-Hour Maid Service in Bareilly – Reliable & Trusted Help at Your Doorstep! | EzyHelpers',
  description: 'Get verified, trained live-in maid service in Bareilly available 24/7 for traditional UP cooking, cleaning, elderly care, and complete home support. Hindi-speaking maids who are familiar with local customs and joint family traditions.',
  keywords: '24-hour maid service Bareilly, live-in maid Bareilly, 24/7 domestic help Bareilly, round the clock maid service',
}

export default function LiveInMaidBareilly() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              24-Hour Maid Service in Bareilly – Reliable & Trusted Help at Your Doorstep!
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Get verified, trained live-in maid service in Bareilly available 24/7 for traditional UP cooking, 
              cleaning, elderly care, and complete home support. Hindi-speaking maids who are familiar with 
              local customs and joint family traditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-now" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors">
                Book 24-Hour Maid Now
              </Link>
              <Link href="/contact" className="bg-white hover:bg-gray-100 text-purple-600 font-bold py-4 px-8 rounded-lg transition-colors">
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Assurance Badges */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-green-600 font-bold">✓</div>
              <div className="text-sm font-medium">Background Verified Female Maids</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-blue-600 font-bold">✓</div>
              <div className="text-sm font-medium">Placement Within 24–72 Hours</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-purple-600 font-bold">✓</div>
              <div className="text-sm font-medium">Trained in Full Domestic Support</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-orange-600 font-bold">✓</div>
              <div className="text-sm font-medium">Affordable Monthly Pricing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Metrics */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">✅ 10K+</div>
              <div className="text-gray-700">Happy Families in Bareilly</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-pink-600 mb-2">✅ 24/7</div>
              <div className="text-gray-700">Hindi Customer Support for Any Help</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-red-600 mb-2">✅ 100%</div>
              <div className="text-gray-700">Police Verified & Trained Female Maids</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose EzyHelpers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Why Choose EzyHelpers 24-Hour Maid Service in Bareilly?
            </h2>
            <p className="text-lg text-center mb-8 text-gray-600">
              Here's why thousands in Bareilly rely on EzyHelpers for full-time, verified, and affordable 24-hour maid services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Speaks Hindi & Local Language',
                'Understands Family Traditions & Pooja Routines',
                'Cooks UP Specialties',
                'Trained Maids from Bareilly & Surrounding Villages',
                'Police Verified with Aadhaar & Local References'
              ].map((feature, index) => (
                <div key={index} className="flex items-start p-4 bg-purple-50 rounded-lg">
                  <div className="text-purple-600 mr-3 mt-1">✓</div>
                  <div className="text-gray-700">{feature}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
              Services Offered by Our 24/7 Live-in Maids in Bareilly
            </h2>
            <p className="text-lg text-center mb-12 text-gray-600">
              Our 24-hour maid service in Bareilly provides end-to-end domestic help:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Daily Meal Preparation',
                  description: 'Breakfast to dinner, with a focus on North Indian & Bareilly-style cuisine.'
                },
                {
                  title: 'House Cleaning',
                  description: 'Sweeping, mopping, and dusting with every corner cleaned daily.'
                },
                {
                  title: 'Laundry & Ironing',
                  description: 'Washing, drying, and neatly ironing your clothes.'
                },
                {
                  title: 'Grocery Help',
                  description: 'Assists in daily bazaar trips & running home errands.'
                },
                {
                  title: 'Child & Elderly Care',
                  description: 'Hands-on support with hygiene, meals & emotional care.'
                },
                {
                  title: 'Guest Management',
                  description: 'From chai service to cleaning after guests leave.'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-purple-600">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regional & Cultural Familiarity */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">
              Regional & Cultural Familiarity
            </h2>
            <p className="text-lg mb-8 text-gray-600">
              Our 24-hour maids are trained to match Bareilly's unique home culture:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-bold text-yellow-600 mb-2">Traditional Cooking Knowledge</h3>
                <p className="text-gray-600">Tehri, Bedai, Halwa, Kheer & other regional dishes.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-600 mb-2">Customary Practices</h3>
                <p className="text-gray-600">Understanding of fasting rules, dietary preferences & pooja rituals.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-600 mb-2">Language & Local Respect</h3>
                <p className="text-gray-600">Fluent in Hindi and familiar with cultural sensitivity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs 24-Hour Maid Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
              Who Needs 24-Hour Maid Service?
            </h2>
            <p className="text-lg text-center mb-12 text-gray-600">
              EzyHelpers offers flexible support for every type of household:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Working Couples',
                  description: 'Focus on your job while we manage the home.'
                },
                {
                  title: 'Joint Families',
                  description: 'Continuous care for elders & help with large household needs.'
                },
                {
                  title: 'Government Staff & Teachers',
                  description: 'Consistent help despite transfers or busy schedules.'
                },
                {
                  title: 'Shopkeepers & Business Owners',
                  description: 'Run your work without worrying about chores.'
                },
                {
                  title: 'Parents with Young Children',
                  description: 'Extra hands for baby care, bathing, and safety.'
                },
                {
                  title: 'Single Parents',
                  description: 'Reliable support for managing home and children alone.'
                }
              ].map((need, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-purple-600">{need.title}</h3>
                  <p className="text-gray-600">{need.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
              4-Step Easy Hiring Process
            </h2>
            <p className="text-lg text-center mb-12 text-gray-600">
              Getting reliable home help is simple with EzyHelpers. Follow these easy steps:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Personal Consultation',
                  description: 'We assess your family\'s needs and recommend the most suitable maid service plan.'
                },
                {
                  step: '2',
                  title: 'Maid Selection',
                  description: 'We share 2–3 verified maid profiles based on your household needs and preferences.'
                },
                {
                  step: '3',
                  title: 'Interview & Review',
                  description: 'You can interview shortlisted maids via call, video, or in-person before finalising.'
                },
                {
                  step: '4',
                  title: 'Easy Onboarding',
                  description: 'Selected maid joins smoothly with full paperwork and dedicated customer support from us.'
                }
              ].map((process, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center border border-purple-100">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Explore Other Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-teal-600">Elderly Care Services in Bareilly</h3>
                <p className="text-gray-600 mb-4">Support with mobility, hygiene, medication, meals, and companionship.</p>
                <Link href="/services/elderly-care" className="text-teal-600 hover:text-teal-800 font-medium">
                  Learn More About Elderly Care Services →
                </Link>
              </div>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-purple-600">Baby Care Services in Bareilly</h3>
                <p className="text-gray-600 mb-4">Nannies handle feeding, bathing, sleeping, and playful engagement.</p>
                <Link href="/services/nanny-babysitter" className="text-purple-600 hover:text-purple-800 font-medium">
                  Learn More About Baby Care Services →
                </Link>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-orange-600">Home Appliance Repair in Bareilly</h3>
                <p className="text-gray-600 mb-4">Doorstep repair for fridge, AC, fan, and washing machine.</p>
                <Link href="/services/appliance-repair" className="text-orange-600 hover:text-orange-800 font-medium">
                  Learn More About Appliance Repair →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Book Your 24-Hour Maid in Bareilly Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Finding the right home help should not be hard. With EzyHelpers, it's simple, safe, and quick. 
              Our verified 24-hour maids offer round-the-clock support for families in Bareilly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-now" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors">
                Book 24-Hour Maid Now
              </Link>
              <Link href="/contact" className="bg-white hover:bg-gray-100 text-purple-600 font-bold py-4 px-8 rounded-lg transition-colors">
                Call for Quick Helper in Bareilly
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 