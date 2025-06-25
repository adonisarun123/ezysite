import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Instant Maid Service in Bareilly – Same-Day Quick Helper Available 24/7 | EzyHelpers',
  description: 'Get instant maid service in Bareilly within 2-4 hours! Emergency cleaning, last-minute cooking, and quick helper in Bareilly for weddings, festivals, and urgent home maintenance services.',
  keywords: 'instant maid service Bareilly, same-day helper Bareilly, emergency cleaning Bareilly, on-demand domestic help',
}

export default function OnDemandHelperBareilly() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Instant Maid Service in Bareilly – Same-Day Quick Helper Available 24/7
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Get instant maid service in Bareilly within 2-4 hours! Emergency cleaning, last-minute cooking, 
              and quick helper in Bareilly for weddings, festivals, and urgent home maintenance services. 
              Available on-demand for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-now" className="bg-white hover:bg-gray-100 text-red-600 font-bold py-4 px-8 rounded-lg transition-colors">
                Book Instant Maid Now
              </Link>
              <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors">
                Call Us for Urgent Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Assurance Badges */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-red-600 font-bold">✓</div>
              <div className="text-sm font-medium">Same-Day Service Available</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-orange-600 font-bold">✓</div>
              <div className="text-sm font-medium">Background-Verified Local Helpers</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-yellow-600 font-bold">✓</div>
              <div className="text-sm font-medium">Maids, Caretakers, Handymen & More</div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Metrics */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-red-600 mb-2">✅ Same-Day</div>
              <div className="text-gray-700">Booking</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">✅ 20+</div>
              <div className="text-gray-700">Bareilly Areas Covered</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-yellow-600 mb-2">✅ Speedy</div>
              <div className="text-gray-700">Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose EzyHelpers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Why Choose EzyHelpers' Instant Maid Service in Bareilly?
            </h2>
            <p className="text-lg text-center mb-8 text-gray-600">
              Bareilly homes love our on-demand helper service for its speed, professionalism, and reliability. Here's what makes us stand out:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                '1–4 Hour Instant Assistance',
                'Available for Same-Day or Emergency Needs',
                'Local Maids Familiar with Bareilly Customs',
                'Trained for Post-Event Cleaning, Guest Prep & More',
                'Fluent in Hindi & Local Language',
                'Reliable, Background-Verified Helpers'
              ].map((feature, index) => (
                <div key={index} className="flex items-start p-4 bg-red-50 rounded-lg">
                  <div className="text-red-600 mr-3 mt-1">✓</div>
                  <div className="text-gray-700">{feature}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered - Festival & Special Occasions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
              Festival & Special Occasion Services
            </h2>
            <p className="text-lg text-center mb-12 text-gray-600">
              Your emergency is our priority. Our instant maids are trained for multiple short-notice tasks:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Pre-Karva Chauth & Diwali Deep Cleaning',
                  description: 'Full house cleaning before festival days for pooja and guests.'
                },
                {
                  title: 'Post-Holi Cleanup',
                  description: 'Clean color stains and dust after Holi celebration ends.'
                },
                {
                  title: 'Wedding/Engagement Function Support',
                  description: 'Cleaning before events and full help after guests leave.'
                },
                {
                  title: 'Navratri Fasting Meal Prep',
                  description: 'Vrat food made with care using proper fasting ingredients.'
                },
                {
                  title: 'Eid Preparation Services',
                  description: 'Help in traditional Eid cooking and house decoration work.'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-red-600">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Family Emergency Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Family Emergency Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Same-day Childcare',
                  description: 'Babysitting if your regular maid cancels suddenly or urgently.'
                },
                {
                  title: 'Elder Care Assistance',
                  description: 'Maids for helping grandparents with food, medicines, walking, etc.'
                },
                {
                  title: 'New Mother Support (Japa Services)',
                  description: 'Post-delivery care, food, and home help for new mothers.'
                },
                {
                  title: 'School Holiday Supervision',
                  description: 'Childcare during holidays when kids are at home full day.'
                },
                {
                  title: 'Medical Emergency Support',
                  description: 'Helper for hospital visits, medicines, and family health needs.'
                }
              ].map((service, index) => (
                <div key={index} className="bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-orange-600">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Daily Life Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Daily Life Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Unexpected Guest Preparation',
                  description: 'Quick home cleaning and tea/snacks help for sudden guests.'
                },
                {
                  title: 'Market Shopping',
                  description: 'Buy vegetables, groceries, or medicines from the local market.'
                },
                {
                  title: 'Bank & Government Work',
                  description: 'Helpers for bills, form filling, or office submission tasks.'
                },
                {
                  title: 'Cooking for Special Diets',
                  description: 'Food made for sugar patients, old people, and diets.'
                },
                {
                  title: 'Laundry & Ironing Emergency',
                  description: 'Same-day clothes washing, drying, and ironing by trusted help.'
                },
                {
                  title: 'Deep Cleaning Services',
                  description: 'Full house cleaning including mandir, kitchen, and bathroom.'
                }
              ].map((service, index) => (
                <div key={index} className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-yellow-600">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
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
              4-Step Easy Booking Process
            </h2>
            <p className="text-lg text-center mb-12 text-gray-600">
              Book trusted on-demand maids & helpers in Bareilly in just four simple steps.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Share Your Urgent Need',
                  description: 'Tell us what help you need, where, and when, instantly.'
                },
                {
                  step: '2',
                  title: 'Get Verified Helpers Assigned',
                  description: 'We quickly shortlist background-checked maids from your local area.'
                },
                {
                  step: '3',
                  title: 'Confirm & Finalize Over Call',
                  description: 'Speak directly with the maid to confirm the task and timing.'
                },
                {
                  step: '4',
                  title: 'Helper Arrives Within Hours',
                  description: 'Your assigned maid reaches your home fully prepared and on time.'
                }
              ].map((process, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center border border-red-100">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
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
              Flexible & Reliable Home Maintenance Services in Bareilly
            </h2>
            <p className="text-lg text-center mb-8 text-gray-600">
              We also provide scheduled or repeat services for daily home upkeep.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-teal-600">Full-Time Maids in Bareilly</h3>
                <p className="text-gray-600 mb-4">8–10 hours for full home support.</p>
                <Link href="/cities/bareilly/full-time-maid" className="text-teal-600 hover:text-teal-800 font-medium">
                  Learn More About Full-Time Maids →
                </Link>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-emerald-600">Cook Services in Bareilly</h3>
                <p className="text-gray-600 mb-4">Daily or weekly food prep for families.</p>
                <Link href="/services/cooks" className="text-emerald-600 hover:text-emerald-800 font-medium">
                  Learn More About Cook Services →
                </Link>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-purple-600">Part-Time Maid Services</h3>
                <p className="text-gray-600 mb-4">Daily 2–4 hours for cooking and cleaning.</p>
                <Link href="/cities/bareilly/part-time-maid" className="text-purple-600 hover:text-purple-800 font-medium">
                  Explore Part-Time Maids in Bareilly →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Book Instant Maid in Bareilly Now
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether it's a festival rush, an unexpected guest, or a quick cleanup before work, 
              EzyHelpers provides fast, verified, and trained help on demand. We're Bareilly's 
              go-to solution for urgent domestic needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-now" className="bg-white hover:bg-gray-100 text-red-600 font-bold py-4 px-8 rounded-lg transition-colors">
                Book Instant Helper Now
              </Link>
              <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors">
                Call for Quick Helper in Bareilly
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 