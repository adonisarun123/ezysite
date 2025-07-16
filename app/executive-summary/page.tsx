import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TeamMemberCard from '../../components/TeamMemberCard';
import PDFDownloadButton from '../../components/PDFDownloadButton';

export const metadata: Metadata = {
  title: 'Executive Summary | EzyHelpers - Skilled, Verified On-Demand Helpers',
  description: 'EzyHelpers connects skilled and verified domestic helpers with Urban customers, making the hiring process seamless through mobile technology.',
};

const ExecutiveSummary = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/grid.svg"
            alt="Background Pattern"
            fill
            className="opacity-5 object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-12">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg inline-block">
                  <Image
                    src="/ezyhelper_logo_new.png"
                    alt="EzyHelpers Logo"
                    width={200}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Executive Summary
              <span className="block text-3xl md:text-4xl text-blue-300 mt-4 font-light">
                Skilled, Verified On-Demand Helpers
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing domestic help services with technology, trust, and transparency. 
              Connecting quality helpers with modern families across India.
            </p>

            {/* PDF Download Button */}
            <div className="mb-12 no-print">
              <PDFDownloadButton 
                filename="EzyHelpers-Executive-Summary.pdf"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
              >
                Download Executive Summary
              </PDFDownloadButton>
            </div>

            {/* Value Propositions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-blue-300 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">ASSURED</h3>
                <p className="text-gray-300 text-sm">Background verified professionals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-blue-300 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">SKILLED</h3>
                <p className="text-gray-300 text-sm">NSDC certified training</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-blue-300 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">VERIFIED</h3>
                <p className="text-gray-300 text-sm">Thorough screening process</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-blue-300 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">RELIABLE</h3>
                <p className="text-gray-300 text-sm">Consistent quality service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Affiliations Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Affiliations</h2>
          <div className="flex justify-center items-center gap-12">
            <div className="relative w-48 h-24 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/affiliations/nsdc-logo.png"
                alt="NSDC - National Skill Development Corporation"
                width={192}
                height={96}
                className="object-contain w-full h-full rounded-lg"
              />
            </div>
            <div className="relative w-48 h-24 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/affiliations/startup-india-logo.png"
                alt="Startup India"
                width={192}
                height={96}
                className="object-contain w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About EzyHelpers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transforming the domestic help industry through technology, trust, and transparency
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-indigo-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We are committed to providing Urban Customers with a perfect tech-enabled
                    platform for their daily house help needs. Our platform addresses critical 
                    challenges like trust deficit, skilled and inconsistent supply, service quality, 
                    and limited skilled talent pool that plague the domestic help industry.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The placement of domestic helpers is a very important and sensitive responsibility. 
                    We take this seriously by conducting thorough background checks, skill assessments, 
                    and verification processes for all our applicants, ensuring complete peace of mind 
                    for our customers.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology First</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our mobile-first platform makes hiring domestic helpers seamless and efficient. 
                    From browsing profiles to booking services, everything happens at your fingertips 
                    with real-time updates and transparent communication.
                  </p>
                </div>
              </div>

              {/* Right Content - Vision Card */}
              <div className="relative">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-12 rounded-3xl shadow-2xl text-white">
                  <div className="absolute top-6 right-6 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                  <p className="text-lg mb-8 leading-relaxed opacity-90">
                    With the best use of technology, we aim to provide the safest, most reliable 
                    domestic helpers for families in need. We ensure that our domestic helpers 
                    are thoroughly verified before they are offered to clients.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                      <span className="text-blue-100">Zero risk of hiring unverified helpers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                      <span className="text-blue-100">24/7 customer support and assistance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                      <span className="text-blue-100">Transparent pricing and no hidden costs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-500 transition-all duration-300">
                  <svg className="w-10 h-10 text-indigo-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Mobile-First Platform</h4>
                <p className="text-gray-600">Book services on-the-go with our intuitive mobile application</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500 transition-all duration-300">
                  <svg className="w-10 h-10 text-purple-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Skilled Workforce</h4>
                <p className="text-gray-600">NSDC certified trainers and comprehensive skill development</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-all duration-300">
                  <svg className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Trust & Safety</h4>
                <p className="text-gray-600">Comprehensive background verification and safety protocols</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section with Icons */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <p className="text-center text-gray-600 mb-12">
            Having been working with domestic helpers for the last three years, we have served
            our urban customers during the pandemic and post without any hassle.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-indigo-600 text-center">2000+</h3>
              <p className="text-gray-600 text-center">Families Served</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-indigo-600 text-center">330+</h3>
              <p className="text-gray-600 text-center">Positive Reviews</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-indigo-600 text-center">8000+</h3>
              <p className="text-gray-600 text-center">Hours of Work</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-indigo-600 text-center">200+</h3>
              <p className="text-gray-600 text-center">Apartments Served</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-indigo-600 text-center">1500+</h3>
              <p className="text-gray-600 text-center">Helpers Placed</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-indigo-600 text-center">90%</h3>
              <p className="text-gray-600 text-center">Working Women Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas with Hover Effect */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Cities & Localities Served</h2>
          
          {/* Major Cities */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-700">Major Cities</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                'Bangalore',
                'Bareilly', 
                'Gurugram',
                'Mumbai'
              ].map((city) => (
                <div 
                  key={city} 
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-center
                           transform hover:scale-105 transition-all duration-300 hover:shadow-lg border border-blue-100"
                >
                  <p className="text-gray-800 font-bold text-lg">{city}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bangalore Localities */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-700">Key Localities in Bangalore</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'HSR Layout',
                'Sarjapur Road',
                'Whitefield',
                'JP Nagar',
                'Electronic City',
                'Marathahalli',
                'Indiranagar',
                'KR Puram'
              ].map((locality) => (
                <div 
                  key={locality} 
                  className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg text-center
                           transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <p className="text-gray-800 font-semibold">{locality}</p>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-center text-gray-600 mt-8 italic">and many more localities across these cities</p>
        </div>
      </section>

      {/* Team Section with Photos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet The Team Behind This Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <TeamMemberCard
              name="Priyanka Rastogi"
              role="CEO & CO-FOUNDER"
              description="Visionary leader driving innovation in domestic help services with a passion for technology and social impact."
              imageSrc="/team/priyanka-rastogi.jpeg"
              linkedinUrl="https://www.linkedin.com/in/rastogipriyanka"
              initials="PR"
              gradientFrom="from-indigo-400"
              gradientTo="to-purple-500"
            />
            <TeamMemberCard
              name="Arun Mahendran"
              role="CO-FOUNDER"
              description="Tech entrepreneur focused on building scalable platforms that solve real-world problems and create meaningful impact."
              imageSrc="/team/arun-mahendran.jpeg"
              linkedinUrl="https://www.linkedin.com/in/arunmahendran05"
              initials="AM"
              gradientFrom="from-blue-400"
              gradientTo="to-indigo-500"
            />
          </div>
        </div>
      </section>

      {/* Contact Section with Animation */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <a 
                href="mailto:contact@ezyhelpers.com" 
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@ezyhelpers.com
              </a>
              <div className="flex gap-4">
                <a 
                  href="tel:+919008596005" 
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 90085 96005
                </a>
                <a 
                  href="tel:+919945843005" 
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 99458 43005
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExecutiveSummary; 