import { Metadata } from 'next'
import { CheckCircleIcon, UserGroupIcon, ClockIcon, ShieldCheckIcon, StarIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'

export const metadata: Metadata = {
  title: 'How It Works | EzyHelpers - Simple Steps to Find Your Perfect Helper',
  description: 'Discover how easy it is to find verified, reliable home helpers with EzyHelpers. Our simple 4-step process connects you with trusted professionals for all your household needs.',
  keywords: 'how it works, find helpers, home services, maid booking, helper recruitment, verified professionals',
  openGraph: {
    title: 'How It Works | EzyHelpers - Simple Steps to Find Your Perfect Helper',
    description: 'Discover how easy it is to find verified, reliable home helpers with EzyHelpers. Our simple 4-step process connects you with trusted professionals.',
    url: 'https://ezyhelpers.com/how-it-works',
    siteName: 'EzyHelpers',
    images: [
      {
        url: 'https://ezyhelpers.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

const steps = [
  {
    number: 1,
    title: 'Tell Us Your Needs',
    description: 'Share your requirements - type of help needed, location, timing preferences, and specific skills required.',
    icon: UserGroupIcon,
    details: [
      'Select service type (maid, cook, driver, etc.)',
      'Choose your preferred schedule',
      'Set your location and budget',
      'Add any special requirements'
    ]
  },
  {
    number: 2,
    title: 'We Find & Verify',
    description: 'Our team searches for suitable candidates and conducts thorough background verification and skill assessment.',
    icon: ShieldCheckIcon,
    details: [
      'Background verification checks',
      'Document validation',
      'Reference checks from previous employers',
      'Skill and experience assessment'
    ]
  },
  {
    number: 3,
    title: 'Meet & Interview',
    description: 'We arrange meetings with pre-screened candidates so you can interview and select the best fit for your family.',
    icon: CheckCircleIcon,
    details: [
      'Meet candidates at your convenience',
      'Conduct face-to-face interviews',
      'Assess compatibility with your family',
      'Trial period options available'
    ]
  },
  {
    number: 4,
    title: 'Ongoing Support',
    description: 'Once hired, we provide continuous support, replacement guarantee, and regular check-ins for your satisfaction.',
    icon: StarIcon,
    details: [
      'Free replacement within guarantee period',
      'Regular performance check-ins',
      'Dedicated Relationship Manager',
      'Conflict resolution assistance'
    ]
  }
]

const features = [
  {
    title: 'Verified Professionals',
    description: 'All our helpers undergo strict background checks and verification processes.',
    icon: ShieldCheckIcon
  },
  {
    title: 'Quick Matching',
    description: 'Hassle-free matching with verified, experienced domestic helpers.',
    icon: ClockIcon
  },
  {
    title: 'Replacement Guarantee',
    description: 'Free replacement if you are dissatisfied, based on earliest availability.',
    icon: CheckCircleIcon
  }
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'How It Works' }
        ]} 
      />
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-display">
              <span className="text-white">How It</span> <span className="text-primary-200">Works</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 mb-8 leading-relaxed">
              Finding reliable home help has never been easier. Our simple 4-step process 
              connects you with verified, trusted professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Get Started Now
              </Link>
              <Link
                href="tel:+918031411776"
                className="inline-flex items-center justify-center bg-primary-500 text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary-400 transition-all duration-200 transform hover:scale-105 border-2 border-primary-400"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call 080-31411776
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-16 lg:py-24">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
                Simple Steps to Success
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our streamlined process ensures you get the right helper quickly and safely
              </p>
            </div>

            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={step.number} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-full font-bold text-xl mb-6">
                      {step.number}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-display">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-gray-700">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-2xl">
                      <step.icon className="w-16 h-16 lg:w-20 lg:h-20 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 lg:py-24">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
                Why Choose EzyHelpers?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We go the extra mile to ensure your complete satisfaction and peace of mind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-all duration-300 hover:shadow-lg">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-16 lg:py-20">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-display">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Join thousands of satisfied families who found their perfect helpers through EzyHelpers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Find Your Helper Now
              </Link>
              <Link
                href="https://wa.me/919972571005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary-500 text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary-400 transition-all duration-200 transform hover:scale-105 border-2 border-primary-400"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.488"/>
                </svg>
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Common questions about our process
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How long does it take to find a helper?</h3>
                <p className="text-gray-600">We carefully shortlist suitable candidates based on your requirements within 72 hours, ensuring they meet your household needs and expectations. The final selection and hiring process is guided by your availability for interviews, so you can choose the helper who best fits your family.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What if I'm not satisfied with the helper?</h3>
                <p className="text-gray-600">If you’re not satisfied with the helper due to genuine concerns like skill gaps, attitude issues, or reliability problems, we will review the situation with both parties and arrange a replacement that better matches your family’s needs and expectations.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you charge any fees upfront?</h3>
                <p className="text-gray-600">We charge a one-time placement fee only after you've successfully hired a helper through our service. There are no upfront charges or hidden fees.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Are all helpers verified?</h3>
                <p className="text-gray-600">Yes, all our helpers undergo thorough background verification including document checks, reference verification, and police verification where applicable.</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/faqs"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
              >
                View All FAQs
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
