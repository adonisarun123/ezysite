import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ComprehensiveLeadForm from '@/components/ComprehensiveLeadForm'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Complete Service Request Form | EzyHelpers',
  description: 'Submit a detailed service request to find the perfect domestic helper for your family. Comprehensive form to match you with verified maids, cooks, babysitters, drivers and more.',
  keywords: 'service request form, hire domestic help, maid booking form, cook hiring, babysitter request, driver booking, complete helper requirements',
  openGraph: {
    title: 'Complete Service Request - Find Your Perfect Helper | EzyHelpers',
    description: 'Tell us exactly what you need and we\'ll find the perfect domestic helper for your family. Detailed matching based on your specific requirements.',
    images: [{
      url: '/ezyhelper_logo_new.png',
      width: 1200,
      height: 630,
      alt: 'EzyHelpers Service Request Form'
    }]
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function ServiceRequestPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Service Request' }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Domestic Helper
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Complete our detailed form and we'll match you with verified helpers who meet your exact requirements. 
              Get personalized recommendations within 2 hours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold mb-2">Quick Matching</h3>
                <p className="text-primary-100 text-sm">
                  Get matched with suitable helpers within 2 hours
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold mb-2">Perfect Match</h3>
                <p className="text-primary-100 text-sm">
                  AI-powered matching based on your specific needs
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-lg font-semibold mb-2">Verified Helpers</h3>
                <p className="text-primary-100 text-sm">
                  All helpers are background verified and trained
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Use Our Detailed Service Request?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive form ensures we understand your exact needs and find the best match for your family
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Better Screening</h3>
                <p className="text-gray-600">
                  Detailed requirements help us pre-screen helpers to match your specific needs and preferences
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Save Time</h3>
                <p className="text-gray-600">
                  Avoid multiple interviews by getting pre-matched candidates who fit your exact requirements
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Budget Matching</h3>
                <p className="text-gray-600">
                  Get helpers within your budget range with transparent pricing and no hidden costs
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🗣️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Language Match</h3>
                <p className="text-gray-600">
                  Find helpers who speak your preferred language for better communication
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Suitable</h3>
                <p className="text-gray-600">
                  Helpers matched based on your family size and specific household requirements
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Skill Matching</h3>
                <p className="text-gray-600">
                  Get helpers with the right experience level and additional skills you need
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ComprehensiveLeadForm />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Trusted by 10,000+ Families
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-700 font-medium">Successful Matches</div>
                <div className="text-sm text-gray-500 mt-1">First helper works out</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">2hrs</div>
                <div className="text-gray-700 font-medium">Average Response</div>
                <div className="text-sm text-gray-500 mt-1">We contact you quickly</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100">
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-700 font-medium">Support Available</div>
                <div className="text-sm text-gray-500 mt-1">Always here to help</div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <p className="text-gray-600 text-lg leading-relaxed">
                <span className="font-semibold text-gray-900">"EzyHelpers' detailed form helped us find the perfect nanny for our family. 
                She speaks our language, has experience with toddlers, and fits our budget perfectly!"</span>
                <br />
                <span className="text-sm text-gray-500 mt-2 block">- Priya Sharma, Bangalore</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
