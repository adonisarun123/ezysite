import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'

// Dynamic import for the form component
const RequirementForm = dynamic(() => import('@/components/RequirementForm'), {
  loading: () => (
    <div className="bg-white rounded-2xl shadow-lg p-8 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
    </div>
  )
})

export const metadata: Metadata = {
  title: 'Service Requirement Form | EzyHelpers',
  description: 'Submit your specific service requirements and we will connect you with the perfect helper. Get personalized assistance for your home needs.',
  keywords: ['service requirements', 'helper request', 'customized service', 'home help requirements', 'EzyHelpers form'],
  openGraph: {
    title: 'Service Requirement Form | EzyHelpers',
    description: 'Submit your specific service requirements and we will connect you with the perfect helper.',
    url: 'https://ezyhelpers.com/requirement',
  },
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Service Requirement', href: '/requirement' }
]

export default function RequirementPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <section className="pt-24 pb-12">
          <div className="container-custom">
            <Breadcrumb items={breadcrumbItems} />
            
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
                Tell Us Your <span className="text-gradient">Requirements</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Share your specific service needs and location details. We'll match you with the perfect helper 
                and send you a personalized quote with a unique reference ID.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="pb-16">
          <div className="container-custom max-w-4xl">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20">
              <RequirementForm />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white/50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Unique Reference ID</h3>
                <p className="text-gray-600">Every request gets a unique ID with timestamp for easy tracking and follow-up.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Auto Location Detection</h3>
                <p className="text-gray-600">We automatically detect your location coordinates for precise service matching.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Notification</h3>
                <p className="text-gray-600">Your requirement is immediately sent to our team with all the details via email.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
