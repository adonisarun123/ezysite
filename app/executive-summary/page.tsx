

export const metadata = {
  title: 'Executive Summary - EzyHelpers',
  description: 'Comprehensive executive summary of EzyHelpers platform achievements and future roadmap.',
}

// Enhanced stats component with visual effects
function SimpleStats() {
  const stats = [
    { label: "Trusted Families", value: "10,000+", color: "from-blue-500 to-blue-600", textColor: "text-blue-600" },
    { label: "Verified Helpers", value: "5,000+", color: "from-green-500 to-green-600", textColor: "text-green-600" },
    { label: "Service Locations", value: "250+", color: "from-purple-500 to-purple-600", textColor: "text-purple-600" },
    { label: "Customer Rating", value: "4.8/5", color: "from-yellow-500 to-yellow-600", textColor: "text-yellow-600" },
    { label: "Hours of Work", value: "8,000+", color: "from-red-500 to-red-600", textColor: "text-red-600" },
    { label: "Helpers Placed", value: "1,500+", color: "from-indigo-500 to-indigo-600", textColor: "text-indigo-600" },
    { label: "Positive Reviews", value: "330+", color: "from-pink-500 to-pink-600", textColor: "text-pink-600" },
    { label: "Working Women Served", value: "90%", color: "from-teal-500 to-teal-600", textColor: "text-teal-600" }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="group text-center p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:border-gray-300 cursor-pointer">
          {/* Animated background gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
          <div className="relative z-10">
            {/* Pulsing effect container for the number */}
            <div className="relative mb-4">
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-20 rounded-lg blur-sm group-hover:blur-md transition-all duration-500`}></div>
              <div className={`relative text-3xl md:text-4xl font-bold ${stat.textColor} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                <span className="relative z-10 drop-shadow-sm">{stat.value}</span>
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 animate-pulse transition-opacity duration-1000"></div>
              </div>
            </div>
            <div className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ExecutiveSummary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Executive Summary
              <span className="block text-3xl md:text-4xl text-blue-300 mt-4 font-light">
                Skilled, Verified Helpers for Home
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing domestic help services with technology, trust, and transparency. 
              Connecting quality helpers with modern families across India.
            </p>


          </div>
        </div>
      </div>

      {/* Vision & Mission - More Elaborate */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Our Vision & Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Guided by our commitment to excellence, transparency, and empowerment, we envision a future where domestic help services transform lives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Vision */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-blue-600">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To become India's most trusted platform for domestic help services, creating sustainable employment opportunities while ensuring quality service delivery to urban families.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Market leadership in domestic services
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sustainable employment creation
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Technology-driven service excellence
                </div>
              </div>
            </div>
            
            {/* Mission */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-green-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-green-600">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To bridge the gap between skilled domestic helpers and quality-conscious families through technology-enabled verification, training, and seamless service delivery.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Comprehensive helper verification
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Continuous skill development programs
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Seamless family-helper matching
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Trust</h4>
                <p className="text-gray-600 text-sm">Building confidence through transparency and reliability</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h4>
                <p className="text-gray-600 text-sm">Leveraging technology for better service delivery</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Empathy</h4>
                <p className="text-gray-600 text-sm">Understanding and addressing real human needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Community</h4>
                <p className="text-gray-600 text-sm">Creating positive impact for all stakeholders</p>
              </div>
            </div>
          </div>

          {/* Certified By Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-10 rounded-2xl shadow-lg border border-gray-100 mt-8">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Certified By</h3>
            <div className="flex justify-center items-center space-x-16">
              <div className="text-center group cursor-pointer">
                <div className="w-32 h-32 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src="/affiliations/nsdc-logo.png" 
                    alt="NSDC - National Skill Development Corporation" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">NSDC</h4>
                <p className="text-gray-600 text-sm">National Skill Development<br/>Corporation</p>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="w-32 h-32 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src="/affiliations/startup-india-logo.png" 
                    alt="Startup India - Government Initiative" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Startup India</h4>
                <p className="text-gray-600 text-sm">Government of India<br/>Initiative</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section (Previously Statistics + Future Roadmap) */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Having been working with domestic helpers for the last three years, we have served our urban customers during the pandemic and post without any hassle. Here's our comprehensive impact across current achievements and future roadmap.
            </p>
          </div>

          {/* Current Achievements */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Current Achievements</h3>
            <SimpleStats />
          </div>

          {/* Future Roadmap */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-12 rounded-2xl">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced Metrics & Innovation
              </h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Strategic initiatives and upcoming milestones that will enhance our platform capabilities and expand our impact across India.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-blue-200 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-3">12+</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Unique Job Roles</div>
                <div className="text-sm text-blue-600 font-medium mb-4">Currently Available</div>
                <p className="text-sm text-gray-600">Diverse service categories meeting various household needs</p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-green-200 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-green-600 mb-3">3,200+</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Women Helpers Placed</div>
                <div className="text-sm text-green-600 font-medium mb-4">Successfully Placed</div>
                <p className="text-sm text-gray-600">Empowering women through sustainable employment opportunities</p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-purple-200 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-3">₹2.5Cr+</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Total Income Generated</div>
                <div className="text-sm text-purple-600 font-medium mb-4">Generated to Date</div>
                <p className="text-sm text-gray-600">Creating significant economic value for our helper community</p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-orange-200 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-orange-600 mb-3">25+</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Active Partners</div>
                <div className="text-sm text-orange-600 font-medium mb-4">Currently Active</div>
                <p className="text-sm text-gray-600">Strategic partnerships with NGOs, agents, and institutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Growth Strategy */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Growth Strategy
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Strategic roadmap for scaling our platform and enhancing service quality across India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Technology Excellence</h3>
              <p className="text-gray-300">
                Continuous investment in AI-powered matching, mobile-first design, and automation for seamless user experience.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Market Expansion</h3>
              <p className="text-gray-300">
                Strategic expansion to tier-2 cities with localized service offerings and partnership development.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Quality Assurance</h3>
              <p className="text-gray-300">
                Enhanced training programs, continuous skill development, and comprehensive background verification systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Conclusion */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Domestic Help Services?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied families and helpers on India's most trusted platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918031411776" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              📞 Call 080-31411776
            </a>
            <a 
              href="/hire-helper" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              🏠 Hire Helper Now
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-700 text-lg font-medium mb-3">
              © 2025 EzyHelpers. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-600">
              <span className="font-medium">Officially Registered with DWSSC, Skill India, StartUp India</span>
              <span className="hidden sm:inline text-gray-400">•</span>
              <span className="font-medium">Trusted by 10,000+ families</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
