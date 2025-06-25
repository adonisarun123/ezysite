import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Full-Time Maid in Bareilly – Dependable Daily Help for Every Household | EzyHelpers',
  description: 'Get a background-verified, trained full-time maid in Bareilly for cooking, cleaning, elderly care, and complete home management. Perfect for joint families and working professionals.',
  keywords: 'full-time maid Bareilly, daily help Bareilly, house maid service Bareilly, domestic help Bareilly',
}

export default function FullTimeMaidBareilly() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Full-Time Maid in Bareilly – Dependable Daily Help for Every Household
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Get a background-verified, trained full-time maid in Bareilly for cooking, cleaning, 
              elderly care, and complete home management. Perfect for joint families and working professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-now" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors">
                Book Full-Time Maid Now
              </Link>
              <Link href="/contact" className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-lg transition-colors">
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
              <div className="text-sm font-medium">Verified, Trained Female Maids</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-blue-600 font-bold">✓</div>
              <div className="text-sm font-medium">Daily 8 to 10-hour service Options</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-purple-600 font-bold">✓</div>
              <div className="text-sm font-medium">Customizable Work Schedules</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-orange-600 font-bold">✓</div>
              <div className="text-sm font-medium">Affordable Monthly Charges</div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Metrics */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">✅ 10,000+</div>
              <div className="text-gray-700">Happy Homes</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">✅ 24/7</div>
              <div className="text-gray-700">Hindi Support</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">✅ 100%</div>
              <div className="text-gray-700">Police-Verified Maids</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose EzyHelpers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Why Choose EzyHelpers Full-Time Maid in Bareilly?
            </h2>
            <p className="text-lg text-center mb-8 text-gray-600">
              Here's why families across Bareilly trust us for full-day maid service:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Speaks Hindi and Bareilly\'s local language',
                'Knows how to manage big joint families',
                'Can cook tasty North Indian food',
                'Trained in traditional work',
                'Knows cleaning and kitchen routines',
                'Available in all main areas'
              ].map((feature, index) => (
                <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                  <div className="text-blue-600 mr-3 mt-1">✓</div>
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
              Services Offered by Full-Time Maids
            </h2>
            <p className="text-lg text-center mb-12 text-gray-600">
              Get complete domestic help from morning to evening with our trusted full-day maids
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Daily Cooking',
                  description: 'Preparing breakfast, lunch, and dinner with authentic North Indian flavours that your family loves.'
                },
                {
                  title: 'Cleaning & Mopping',
                  description: 'Sweeping, mopping, and dusting all rooms daily to keep your home fresh, clean, and hygienic.'
                },
                {
                  title: 'Washing Clothes & Ironing',
                  description: 'Washing, drying, folding, and ironing clothes regularly to keep your family\'s wardrobe clean and well-managed.'
                },
                {
                  title: 'Childcare & Eldercare Support',
                  description: 'Caring support for kids and elders with feeding, bathing, dressing, and general supervision with patience and love.'
                },
                {
                  title: 'Assisting in Pooja & Traditions',
                  description: 'Helping during daily pooja routines, cleaning temples, arranging flowers, preparing prasad, and supporting religious activities.'
                },
                {
                  title: 'Festival & Seasonal Support',
                  description: 'Assist with festive preparations like Diwali cleaning, Holi food items, summer storage, and traditional household work.'
                },
                {
                  title: 'Shopping Assistance',
                  description: 'Support with daily grocery shopping, local errands, and managing household needs from nearby markets or stores.'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs Full-Day Maid Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
              Who Needs a Full-Day Maid Service in Bareilly?
            </h2>
            <p className="text-lg text-center mb-12 text-gray-600">
              Our full-time maids make life easier, perfect for these types of households in Bareilly
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Joint Families',
                  description: 'Full-time help for large households.'
                },
                {
                  title: 'Working Government Employees (9 to 5)',
                  description: 'Stress-free housework while you are at the office.'
                },
                {
                  title: 'IT & Banking Professionals',
                  description: 'A balanced life with stress-free daily chores.'
                },
                {
                  title: 'Busy Shopkeepers & Business Owners',
                  description: 'Focus on work while we handle your home.'
                },
                {
                  title: 'Families with Toddlers or Seniors',
                  description: 'Dedicated support for vulnerable family members.'
                },
                {
                  title: 'Single Parents',
                  description: 'Dependable help for cooking, cleaning, and childcare.'
                }
              ].map((need, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-blue-600">{need.title}</h3>
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
              Specialized Full-Time Maid Services in Bareilly
            </h2>
            <p className="text-lg text-center mb-12 text-gray-600">
              Choose from trained full-day maids based on your household type, lifestyle, and daily support needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Full-Time Babysitters/Nannies',
                  description: 'Caring maids to help with feeding, bathing, playing, and watching over your little ones all day.'
                },
                {
                  title: 'Full-Time Senior Caretakers',
                  description: 'Gentle support for elders by helping with walking, hygiene, medicine, and emotional companionship.'
                },
                {
                  title: 'Full-Time Cooks',
                  description: 'Daily home-cooked meals like roti, sabzi, dal, rice, prepared with care, cleanliness, and family taste in mind.'
                },
                {
                  title: 'Full-Time Drivers in Bareilly',
                  description: 'Reliable daily driving support for your home and work needs; perfect for families, seniors, and professionals.'
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

      {/* Local Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">
              Local Expertise You Can Trust
            </h2>
            <p className="text-lg mb-8 text-gray-600">
              Our maids are deeply familiar with Bareilly's unique household requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-bold text-yellow-600 mb-2">Expert in UP Joint Family Homes</h3>
                <p className="text-gray-600">Manages large households smoothly.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-600 mb-2">Traditional Storage Knowledge</h3>
                <p className="text-gray-600">Grain storage, pickle-making, and more.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-bold text-orange-600 mb-2">Festival & Pooja Assistance</h3>
                <p className="text-gray-600">Helps with Diwali cleaning, Holi meals, and Karva Chauth prep.</p>
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
              4-Step Easy Hiring Process
            </h2>
            <p className="text-lg text-center mb-12 text-gray-600">
              Getting reliable full-time home help in Bareilly is simple & easy with EzyHelpers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Personal Consultation',
                  description: 'We understand your family\'s needs and routines to suggest the best house maid service plan.'
                },
                {
                  step: '2',
                  title: 'Maid Selection',
                  description: 'We shortlist 2–3 background-verified maids matching your lifestyle, work needs, and cultural preferences perfectly.'
                },
                {
                  step: '3',
                  title: 'Interview & Review',
                  description: 'You can interview shortlisted maids via phone, video, or in person to choose confidently.'
                },
                {
                  step: '4',
                  title: 'Easy Onboarding',
                  description: 'Once selected, the maid joins with proper documentation and full-time support from our team.'
                }
              ].map((process, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
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
              Explore Our Other Services
            </h2>
            <p className="text-lg text-center mb-8 text-gray-600">
              Complete your home care needs with our wide range of professional domestic help services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-purple-600">Part-Time Maid Services in Bareilly</h3>
                <p className="text-gray-600 mb-4">Hourly help for cooking, cleaning, and daily household chores.</p>
                <Link href="/cities/bareilly/part-time-maid" className="text-purple-600 hover:text-purple-800 font-medium">
                  Learn More About Part-Time Maid Services →
                </Link>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-teal-600">Cook Services in Bareilly</h3>
                <p className="text-gray-600 mb-4">Expert cooks for North Indian meals, tiffins, and festive cooking.</p>
                <Link href="/services/cooks" className="text-teal-600 hover:text-teal-800 font-medium">
                  Learn More About Cook Services →
                </Link>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-orange-600">Elderly Caregiver in Bareilly</h3>
                <p className="text-gray-600 mb-4">Caring support for elders' mobility, medication, and daily personal care.</p>
                <Link href="/services/elderly-care" className="text-orange-600 hover:text-orange-800 font-medium">
                  Learn More About Elderly Caregiver Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Book Your Full-Time Maid in Bareilly Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Reliable, trained, and respectful full-day maids are just a call away. With EzyHelpers, 
              simplify your daily life and get complete home support tailored to Bareilly families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-now" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors">
                Book Full-Time Maid Now
              </Link>
              <Link href="/contact" className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-lg transition-colors">
                Call Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 