import { Metadata } from 'next'
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'
import { CheckCircleIcon, PhoneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Hire Domestic Help | Quick & Easy Booking | EzyHelpers',
  description: 'Book verified domestic help in minutes. Easy process to hire maids, cooks, nannies & more. Background-checked staff, flexible timing options available.',
  keywords: 'hire domestic help, book maid service, hire cook, hire nanny, domestic staff booking',
  openGraph: {
    title: 'Hire Verified Domestic Help - Quick Booking Process',
    description: 'Book reliable domestic help through EzyHelpers. Verified staff, transparent pricing, and hassle-free process.',
    url: 'https://ezyhelpers.com/hire-helper',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/hire-helper'
  }
}

const HireHelperForm = dynamic(() => import('@/components/HireHelperForm'), { ssr: false })

export default function HireHelperPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-secondary-50 pt-24 pb-20">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Hire Your Perfect <span className="text-gradient">Home Helper</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tell us your requirements and we’ll connect you with verified, professional helpers matched to your needs. Choose from live-in, full-time, part-time, or on-demand services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Verified</h3>
              <p className="text-sm text-gray-600">Background checked and trained professionals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">24h</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quick Placement</h3>
              <p className="text-sm text-gray-600">Helpers Matched Fast</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Easy Assistance</h3>
              <p className="text-sm text-gray-600">Support When Needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="hire-form" className="section-padding bg-background-primary scroll-mt-24 lg:scroll-mt-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <HireHelperForm />
            </div>

            {/* Contact Options */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 sticky top-24">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 font-display">
                  Need Immediate Help?
                </h3>
                
                <div className="space-y-4 mb-8">
                  <a 
                    href="tel:+918031411776"
                    className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200"
                  >
                    <PhoneIcon className="h-6 w-6 text-primary-600 mr-4" />
                    <div>
                      <div className="font-medium text-gray-900">Call Us Now</div>
                      <div className="text-sm text-gray-600">080-31411776</div>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/918031411776"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200"
                  >
                    <svg className="w-6 h-6 text-green-600 mr-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.488"/>
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">WhatsApp</div>
                      <div className="text-sm text-gray-600">Chat with us instantly</div>
                    </div>
                  </a>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-medium text-gray-900 mb-4">Our Promise</h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      Background verified helpers only
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      Free replacement if not satisfied
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      Dedicated Customer Support
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      Fair pricing - pay directly to helpers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 
