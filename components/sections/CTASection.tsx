import Link from 'next/link'
import { PhoneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'

export default function CTASection() {
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
          {/* CTA Buttons */}
          <div className="text-center lg:text-left">
            <div className="space-y-3 px-4">
              <Link 
                href="/hire-helper" 
                className="inline-flex items-center bg-white text-primary-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center text-sm sm:text-base"
              >
                <ChatBubbleLeftRightIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                <span className="hidden sm:inline">Book Your Helper Now</span>
                <span className="sm:hidden">Book Helper</span>
              </Link>
              
              <div className="text-primary-100 text-sm">or</div>
              
              <Link 
                href="tel:+919972571005" 
                className="inline-flex items-center bg-transparent border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-colors w-full sm:w-auto justify-center text-sm sm:text-base"
              >
                <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                <span className="hidden sm:inline">Call: +91 9972571005</span>
                <span className="sm:hidden">Call Now</span>
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-white mb-1">24-72 Hours</div>
                <div className="text-primary-200 text-sm">Quick Placement</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-primary-200 text-sm">Verified Helpers</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 font-display">
              Get a Quick Quote
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-gray-900">
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
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-gray-900">
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