import Link from 'next/link'
import { HomeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GoBackButton from '@/components/GoBackButton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found - 404 | EzyHelpers',
  description: "The page you're looking for doesn't exist. Find trusted house help services, maids, cooks, and home maintenance services at EzyHelpers.",
  keywords: '404, page not found, EzyHelpers, house help services, domestic help',
}

export default function NotFound() {
  return (
    <>
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Navbar />
        
        {/* 404 Hero Section */}
        <section className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* 404 Animation */}
            <div className="mb-8">
              <div className="text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                404
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            {/* Error Message */}
            <div className="mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Oops! Page Not Found
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                The page you're looking for doesn't exist or has been moved. 
                Don't worry, we're here to help you find what you need!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link 
                href="/"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <HomeIcon className="w-5 h-5 mr-2" />
                Go to Homepage
              </Link>
              
              <Link 
                href="/services"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
                Browse Services
              </Link>
              
              <GoBackButton />
            </div>
          </div>
        </section>

        {/* Popular Services Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Popular Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Maybe you were looking for one of these popular services?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service Cards */}
              <Link 
                href="/services/full-time-maids"
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <HomeIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Full-Time Maids</h3>
                  <p className="text-gray-600 text-sm">8-10 hours daily cleaning & home care</p>
                </div>
              </Link>

              <Link 
                href="/services/part-time-maids"
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                    <HomeIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Part-Time Maids</h3>
                  <p className="text-gray-600 text-sm">2-6 hours flexible cleaning service</p>
                </div>
              </Link>

              <Link 
                href="/services/cooks"
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                    <HomeIcon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cook Services</h3>
                  <p className="text-gray-600 text-sm">Professional cooking & meal preparation</p>
                </div>
              </Link>

              <Link 
                href="/services/nanny-babysitter"
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pink-200"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-pink-200 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:from-pink-200 group-hover:to-pink-300 transition-all duration-300">
                    <HomeIcon className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Nanny & Babysitter</h3>
                  <p className="text-gray-600 text-sm">Professional childcare services</p>
                </div>
              </Link>

              <Link 
                href="/services/elderly-care"
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                    <HomeIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Elderly Care</h3>
                  <p className="text-gray-600 text-sm">Compassionate senior care services</p>
                </div>
              </Link>

              <Link 
                href="/services/on-demand-helpers"
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-red-200 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300">
                    <HomeIcon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">On-Demand Help</h3>
                  <p className="text-gray-600 text-sm">Emergency & urgent assistance</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Still Can't Find What You're Looking For?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Our customer support team is here to help you find the right service for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300"
                >
                  Contact Support
                </Link>
                <a 
                  href="tel:+919972571005"
                  className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300 border border-blue-500"
                >
                  Call: +91 99725 71005
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
} 