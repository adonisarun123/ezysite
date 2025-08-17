import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CalendarDaysIcon, 
  HomeIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  BuildingOfficeIcon,
  ClockIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline'
import { EzyNestBooking } from '@/components/EzyNestBooking'

export const metadata: Metadata = {
  title: 'EzyNest — Women-Only Short-Stay by EzyHelpers',
  description: 'A safe, respectful short-stay home for women domestic helpers. Pre-book clean, secure, and affordable accommodation via EzyHelpers.',
}

export default function EzyNestPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-600 via-rose-700 to-rose-800 text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <HomeIcon className="h-5 w-5 text-rose-200 mr-2" />
              <span className="text-sm font-semibold">Women-Only Short-Stay</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
              Welcome to
              <span className="block bg-gradient-to-r from-white to-rose-100 bg-clip-text text-transparent">
                EzyNest
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-rose-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              A safe, respectful short-stay home for women domestic helpers. Clean, secure, and affordable accommodation—pre-booked via EzyHelpers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-white text-rose-800 hover:bg-rose-50 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105"
              >
                Book a Bed Now
              </button>
              
              <Link 
                href="#availability" 
                className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300"
              >
                Check Availability
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">5+</div>
                <div className="text-rose-200 text-sm">Beds Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-rose-200 text-sm">Security</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-rose-200 text-sm">Women-Only</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">4.8★</div>
                <div className="text-rose-200 text-sm">Guest Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for a comfortable and secure stay
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheckIcon,
                title: "Women-Only Accommodation",
                description: "Secure environment with women wardens and 24/7 security"
              },
              {
                icon: HomeIcon,
                title: "Clean & Comfortable",
                description: "Well-ventilated dorms with proper bedding & fresh linen"
              },
              {
                icon: BuildingOfficeIcon,
                title: "Equipped Kitchen",
                description: "Modern kitchen with induction/LPG, utensils, fridge & RO water"
              },
              {
                icon: UserGroupIcon,
                title: "Common Areas",
                description: "Comfortable common room with TV and reading corner"
              },
              {
                icon: ClockIcon,
                title: "Flexible Timings",
                description: "Check-in at 12:00 PM, check-out at 10:00 AM"
              },
              {
                icon: DocumentCheckIcon,
                title: "Easy Booking",
                description: "Simple online booking process with instant confirmation"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-rose-200 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Booking Calendar Section */}
      <section id="booking-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book Your Stay
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select your check-in date and time to view bed availability
            </p>
          </div>

          <EzyNestBooking />
        </div>
      </section>

      {/* Schema.org Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hostel",
            "name": "EzyNest by EzyHelpers",
            "description": "Women-only, short-stay hostel for domestic helpers with proper bedding, equipped kitchen, lockers, and security with CCTV and check-in registers.",
            "url": "https://www.ezyhelpers.com/ezynest",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "HSR Layout",
              "addressLocality": "Bengaluru",
              "addressRegion": "KA",
              "postalCode": "560102",
              "addressCountry": "IN"
            },
            "amenityFeature": [
              {"@type":"LocationFeatureSpecification","name":"Women-only","value":true},
              {"@type":"LocationFeatureSpecification","name":"Equipped Kitchen","value":true},
              {"@type":"LocationFeatureSpecification","name":"CCTV (common areas)","value":true},
              {"@type":"LocationFeatureSpecification","name":"Lockers","value":true},
              {"@type":"LocationFeatureSpecification","name":"Common Room","value":true},
              {"@type":"LocationFeatureSpecification","name":"Hot Water","value":true}
            ],
            "audience": {
              "@type": "PeopleAudience",
              "requiredGender": "Female"
            },
            "checkinTime": "12:00",
            "checkoutTime": "10:00",
            "telephone": "+91-9972571005",
            "offers": [{
              "@type": "Offer",
              "name": "Dorm Bed (Weekday)",
              "price": "499",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://www.ezyhelpers.com/ezynest#pricing"
            }]
          })
        }}
      />
    </main>
  )
}
