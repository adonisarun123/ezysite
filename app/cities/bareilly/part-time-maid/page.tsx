import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Part-Time Maid in Bareilly – Flexible Daily Help for Cooking & Cleaning | EzyHelpers',
  description: 'Get trusted part-time maids in Bareilly for 2–4 hours daily to handle your kitchen and home cleaning needs. Perfect for working women and nuclear families who need reliable daily help.',
  keywords: 'part-time maid Bareilly, hourly maid service Bareilly, flexible domestic help Bareilly, daily cleaning service',
}

export default function PartTimeMaidBareilly() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Part-Time Maid in Bareilly – Flexible Daily Help for Cooking & Cleaning
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Get trusted part-time maids in Bareilly for 2–4 hours daily to handle your kitchen and 
              home cleaning needs. Perfect for working women and nuclear families who need reliable daily help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-now" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors">
                Book Part-Time Maid Now
              </Link>
              <Link href="/contact" className="bg-white hover:bg-gray-100 text-teal-600 font-bold py-4 px-8 rounded-lg transition-colors">
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Assurance Badges */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-teal-50 rounded-lg">
              <div className="text-teal-600 font-bold">✓</div>
              <div className="text-sm font-medium">Verified & Trained Local Maids</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-green-600 font-bold">✓</div>
              <div className="text-sm font-medium">2–4 Hour Daily Shifts Available</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-blue-600 font-bold">✓</div>
              <div className="text-sm font-medium">Morning & Evening Slots</div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Metrics */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-teal-600 mb-2">✅ 2–4 Hours</div>
              <div className="text-gray-700">Daily</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">✅ 20+</div>
              <div className="text-gray-700">Service Available in Areas</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">✅ Customizable</div>
              <div className="text-gray-700">Work Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose EzyHelpers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Why Choose EzyHelpers' Part-Time Maid in Bareilly?
            </h2>
            <p className="text-lg text-center mb-8 text-gray-600">
              Bareilly families trust us for reliable, short-time daily help. Here's why:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Expert in cooking and cleaning tasks',
                'Choose 2, 3 or 4-hour slots (morning/evening)',
                'Fluent in Hindi and Bareilly\'s local language',
                'Flexible timings to suit school hours & working women\'s schedules',
                'Dependable help even during peak summer and monsoon',
                'Knows local shopping and kitchen routines'
              ].map((feature, index) => (
                <div key={index} className="flex items-start p-4 bg-teal-50 rounded-lg">
                  <div className="text-teal-600 mr-3 mt-1">✓</div>
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
              Services Offered by Part-Time Maids
            </h2>
            <p className="text-lg text-center mb-12 text-gray-600">
              Get essential domestic help for 2-4 hours daily with our trusted part-time maids
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Daily Cooking',
                  description: 'Cooking fresh meals like roti, sabzi, and dal during morning or evening time as per schedule.'
                },
                {
                  title: 'Cleaning & Mopping',
                  description: 'Sweeping, mopping, and dusting all rooms daily to keep the home neat, fresh, and clean.'
                },
                {
                  title: 'Washing Clothes & Ironing',
                  description: 'Washing, drying, folding, and ironing clothes properly to keep family clothes ready and well-arranged.'
                },
                {
                  title: 'Kitchen Management',
                  description: 'Cleaning the kitchen, washing utensils, arranging shelves, and keeping everything neat and ready for cooking.'
                },
                {
                  title: 'Bathroom Cleaning',
                  description: 'Wash and clean toilets, washrooms, and tiles properly to keep them fresh and hygienic daily.'
                },
                {
                  title: 'Light Household Tasks',
                  description: 'Dusting furniture, tidying up rooms, and keeping everything in place for a clean-looking home.'
                },
                {
                  title: 'Shopping Assistance',
                  description: 'Helping with buying vegetables, groceries, or home items from the nearby market during working hours.'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-teal-600">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs Part-Time Maid Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
              Who Needs Part-Time Maid Services in Bareilly?
            </h2>
            <p className="text-lg text-center mb-12 text-gray-600">
              Ideal for those who need flexible, short-duration help:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Working Women',
                  description: 'Daily 2–4 hours help before or after office time.'
                },
                {
                  title: 'Nuclear Families',
                  description: 'Short-time maid for daily cleaning and kitchen tasks.'
                },
                {
                  title: 'Seniors Living Alone',
                  description: 'Light cooking, cleaning, and regular household support made easy.'
                },
                {
                  title: 'Teachers & School Staff',
                  description: 'Midday or school-hour help for meals and cleaning.'
                },
                {
                  title: 'Summer & Monsoon Relief',
                  description: 'Extra seasonal support during hot months or heavy rains.'
                }
              ].map((need, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-teal-600">{need.title}</h3>
                  <p className="text-gray-600">{need.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
              Specialized Part-Time Maid Services in Bareilly
            </h2>
            <p className="text-lg text-center mb-12 text-gray-600">
              Pick the right helper for your home; flexible hours, reliable support, and trained in specific tasks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Part-Time Babysitters',
                  description: 'Short-time care for kids with feeding, bathing, and playtime during your preferred slot.'
                },
                {
                  title: 'Part-Time Elderly Helpers',
                  description: 'Assistance with walking, hygiene, medicines, and simple care for elders in 2–4 hour shifts.'
                },
                {
                  title: 'Part-Time Cooks',
                  description: 'Cooking fresh roti, sabzi, dal, and snacks as per your family\'s taste and meal times.'
                },
                {
                  title: 'Part-Time Drivers',
                  description: 'Available for school drops, local errands, and short-distance travel during selected hours.'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-green-600">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Lifestyle Match */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">
              Local Lifestyle Match & Service Flexibility
            </h2>
            <p className="text-lg mb-8 text-gray-600">
              We understand Bareilly's lifestyle and offer maids that match your routine.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="font-bold text-teal-600 mb-2">2–4 Hours Daily</h3>
                <p className="text-gray-600 text-sm">Perfect for Working Women in Bareilly</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-600 mb-2">Morning/Evening Slots</h3>
                <p className="text-gray-600 text-sm">Match Work Culture & School Timings</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-600 mb-2">Flexible Around Events</h3>
                <p className="text-gray-600 text-sm">Religious & Local Events</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-bold text-purple-600 mb-2">Small Families</h3>
                <p className="text-gray-600 text-sm">Ideal for Colonies & Apartments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
              4-Step Easy Booking Process
            </h2>
            <p className="text-lg text-center mb-12 text-gray-600">
              Hiring a part-time maid in Bareilly with EzyHelpers is quick and reliable:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Share Your Requirement',
                  description: 'We understand your family\'s needs, preferred timing, and specific tasks.'
                },
                {
                  step: '2',
                  title: 'Maid Shortlisting',
                  description: 'We shortlist 2–3 background-verified maids that match your preferences.'
                },
                {
                  step: '3',
                  title: 'Interview & Finalize',
                  description: 'You can interview them directly via call or video and choose who fits best.'
                },
                {
                  step: '4',
                  title: 'Easy Onboarding',
                  description: 'Once selected, the maid joins with proper documentation and timing confirmation.'
                }
              ].map((process, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center border border-teal-100">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Explore Other Home Services in Bareilly
            </h2>
            <p className="text-lg text-center mb-8 text-gray-600">
              Make life easier with our other trusted services in Bareilly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-purple-600">Full-Time Maids in Bareilly</h3>
                <p className="text-gray-600 mb-4">8–10 hours of dedicated household help.</p>
                <Link href="/cities/bareilly/full-time-maid" className="text-purple-600 hover:text-purple-800 font-medium">
                  Learn More About Full-Time Maid Services →
                </Link>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-teal-600">Cook Services in Bareilly</h3>
                <p className="text-gray-600 mb-4">Expert cooks for daily meals, tiffins & festive food.</p>
                <Link href="/services/cooks" className="text-teal-600 hover:text-teal-800 font-medium">
                  Learn More About Cook Services →
                </Link>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-orange-600">Elderly Caregiver in Bareilly</h3>
                <p className="text-gray-600 mb-4">Daily support for senior members for bathing, feeding, and companionship.</p>
                <Link href="/services/elderly-care" className="text-orange-600 hover:text-orange-800 font-medium">
                  Learn More About Elderly Caregiver Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Book Your Part-Time Maid in Bareilly Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Enjoy stress-free mornings and peaceful evenings with dependable, trained part-time helpers 
              for cooking and cleaning. Bareilly families trust EzyHelpers for quality, affordability, and service reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-now" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors">
                Book Part-Time Maid Now
              </Link>
              <Link href="/contact" className="bg-white hover:bg-gray-100 text-teal-600 font-bold py-4 px-8 rounded-lg transition-colors">
                Call Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 