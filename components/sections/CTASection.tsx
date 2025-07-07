'use client'

import Link from 'next/link'
import { CheckBadgeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { trackCTAClick, trackPhoneClick, trackFormStart, trackFormSubmit, trackFormComplete, trackFormError } from '@/lib/analytics'

export default function CTASection() {
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      service: formData.get('service') as string,
      city: formData.get('city') as string,
    };

    try {
      // Track form submission
      trackFormSubmit('cta_quick_quote', data);
      
      // Send email notification
      try {
        const emailResponse = await fetch('/api/send-lead-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            leadType: 'general',
            formData: data,
            sourceUrl: window.location.href
          })
        });

        if (!emailResponse.ok) {
          console.error('Failed to send email notification');
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Don't fail the form submission if email fails
      }
      
      // Track completion
      trackFormComplete('cta_quick_quote');
      
      // Reset form or show success message
      e.currentTarget.reset();
    } catch (error) {
      trackFormError('cta_quick_quote', 'submission_error', error instanceof Error ? error.message : 'Unknown error');
    }
  };

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Book Your Trusted Home Help Today!
          </h2>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto mb-8">
            Get reliable, efficient, and hassle-free housemaid services from EzyHelpers. 
            It's quick to get the assistance you need for a comfortable home life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* CTA Buttons - Single column grid approach */}
          <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md mx-auto">
            {/* Primary CTA Button - Simplified flex layout */}
            <Link 
              href="/hire-helper" 
              className="w-full bg-white text-primary-600 font-semibold text-lg rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex flex-row items-center justify-center gap-3 py-4 px-6 whitespace-nowrap"
              onClick={() => trackCTAClick('Book Verified Helper Now', 'cta_section', 'primary')}
            >
              <CheckBadgeIcon className="h-6 w-6 flex-shrink-0 self-center" />
              <span className="leading-none">Book Verified Helper Now</span>
            </Link>
            
            {/* "or" Separator */}
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-primary-300"></div>
              </div>
              <div className="relative bg-primary-600 text-center">
                <span className="text-primary-100 text-lg font-medium px-4">or</span>
              </div>
            </div>
            
            {/* Secondary CTA Button - Simplified flex layout */}
            <Link 
              href="tel:+919972571005" 
              className="w-full bg-transparent border-2 border-white text-white font-semibold text-lg rounded-2xl hover:bg-white hover:text-primary-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 inline-flex flex-row items-center justify-center gap-3 py-4 px-6 whitespace-nowrap"
              onClick={() => trackPhoneClick('+919972571005', 'cta_section')}
            >
              <PhoneIcon className="h-6 w-6 flex-shrink-0 self-center" />
              <span className="leading-none">Call: +91 9972571005</span>
            </Link>

            {/* Statistics Section */}
            <div className="grid grid-cols-2 gap-8 mt-8 pt-8 border-t border-primary-300/50 w-full max-w-sm">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24-72 Hours</div>
                <div className="text-primary-200 text-sm font-medium">Quick Placement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-primary-200 text-sm font-medium">Verified Helpers</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 font-display">
              Get a Quick Quote
            </h3>
            <form className="space-y-4" onSubmit={handleFormSubmit} onFocus={() => trackFormStart('cta_quick_quote', 'cta_section')}>
              <div>
                <label htmlFor="cta-name" className="sr-only">Your Name</label>
                <input
                  id="cta-name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  aria-label="Your Name"
                />
              </div>
              <div>
                <label htmlFor="cta-phone" className="sr-only">Phone Number</label>
                <input
                  id="cta-phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  aria-label="Phone Number"
                />
              </div>
              <div>
                <label htmlFor="cta-service" className="sr-only">Service Type</label>
                <select 
                  id="cta-service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-gray-900"
                  aria-label="Select Service Type"
                >
                  <option value="">Select Service Type</option>
                  <option value="live-in">Live-in Maid</option>
                  <option value="full-time">Full-time Maid</option>
                  <option value="part-time">Part-time Maid</option>
                  <option value="on-demand">On-demand Helper</option>
                  <option value="babysitter">Babysitter/Nanny</option>
                  <option value="elderly-care">Elderly Care</option>
                  <option value="cook">Cook</option>
                  <option value="driver">Driver</option>
                </select>
              </div>
              <div>
                <label htmlFor="cta-city" className="sr-only">City</label>
                <select 
                  id="cta-city"
                  name="city"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-gray-900"
                  aria-label="Select City"
                >
                  <option value="">Select City</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="noida">Noida</option>
                  <option value="nagpur">Nagpur</option>
                  <option value="lucknow">Lucknow</option>
                  <option value="kanpur">Kanpur</option>
                  <option value="meerut">Meerut</option>
                  <option value="bareilly">Bareilly</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Get Free Consultation
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center">
              We'll contact you within 30 minutes to discuss your requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 