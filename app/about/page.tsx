import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  HeartIcon,
  ShieldCheckIcon,
  StarIcon,
  UsersIcon,
  TrophyIcon,
  CheckCircleIcon,
  LightBulbIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800 text-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  About
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                    EzyHelpers
                  </span>
                </h1>
                <p className="text-xl text-indigo-100 leading-relaxed max-w-4xl mx-auto">
                  We're revolutionizing home services in India by connecting skilled helpers 
                  with families who need reliable, professional assistance for their daily needs.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { number: "50K+", label: "Happy Customers" },
                  { number: "10K+", label: "Trusted Helpers" },
                  { number: "9", label: "Cities Covered" },
                  { number: "4.8", label: "Average Rating" }
                ].map((stat, index) => (
                  <div key={index} className="group text-center">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-indigo-200 text-sm md:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Our Mission
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To make quality home services accessible, reliable, and affordable for every 
                    Indian household while empowering skilled individuals to build sustainable careers.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We believe that everyone deserves a clean, comfortable home and the time to focus 
                    on what matters most to them. Our platform bridges the gap between busy families 
                    and skilled service providers.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: HeartIcon, text: "Built with Care" },
                    { icon: ShieldCheckIcon, text: "100% Verified" },
                    { icon: StarIcon, text: "Quality Assured" }
                  ].map((item, index) => (
                    <div key={index} className="group flex items-center gap-2 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                      <item.icon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-blue-900 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <UsersIcon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Community First</h3>
                      <p className="text-gray-600 text-sm">Building strong relationships between helpers and families</p>
                    </div>
                    <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <TrophyIcon className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Excellence</h3>
                      <p className="text-gray-600 text-sm">Committed to delivering exceptional service quality</p>
                    </div>
                  </div>
                  <div className="space-y-6 pt-12">
                    <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <LightBulbIcon className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Innovation</h3>
                      <p className="text-gray-600 text-sm">Using technology to make home services better</p>
                    </div>
                    <div className="group bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <SparklesIcon className="w-12 h-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Trust</h3>
                      <p className="text-gray-600 text-sm">Building lasting trust through transparency and reliability</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From a simple idea to India's most trusted home services platform
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"></div>
              
              <div className="space-y-16">
                {[
                  {
                    year: "2020",
                    title: "The Beginning",
                    description: "Started with a vision to solve the household help problem faced by urban Indian families.",
                    icon: LightBulbIcon,
                    side: "left"
                  },
                  {
                    year: "2021",
                    title: "First 1000 Customers",
                    description: "Reached our first milestone with 1000 happy customers and 500 verified helpers.",
                    icon: UsersIcon,
                    side: "right"
                  },
                  {
                    year: "2022",
                    title: "Multi-City Expansion",
                    description: "Expanded to 5 major cities and introduced specialized services like elderly care and cooking.",
                    icon: BuildingOfficeIcon,
                    side: "left"
                  },
                  {
                    year: "2023",
                    title: "National Reach",
                    description: "Now serving 9 cities with over 50,000 customers and 10,000 trained helpers.",
                    icon: GlobeAltIcon,
                    side: "right"
                  }
                ].map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${milestone.side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${milestone.side === 'left' ? 'pr-16' : 'pl-16'}`}>
                      <div className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${milestone.side === 'left' ? 'text-right' : 'text-left'}`}>
                        <div className="flex items-center gap-4 mb-4">
                          {milestone.side === 'left' ? (
                            <>
                              <div className="text-3xl font-bold text-blue-600">{milestone.year}</div>
                              <milestone.icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                            </>
                          ) : (
                            <>
                              <milestone.icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                              <div className="text-3xl font-bold text-blue-600">{milestone.year}</div>
                            </>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-600 rounded-full shadow-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircleIcon,
                  title: "Reliability",
                  description: "We ensure every helper is verified and every service is guaranteed for your peace of mind.",
                  color: "text-green-600",
                  bgGradient: "from-green-50 to-emerald-50"
                },
                {
                  icon: HeartIcon,
                  title: "Compassion",
                  description: "We care deeply about both our customers and helpers, treating everyone like family.",
                  color: "text-red-600",
                  bgGradient: "from-red-50 to-pink-50"
                },
                {
                  icon: StarIcon,
                  title: "Quality",
                  description: "We maintain the highest standards through continuous training and feedback.",
                  color: "text-yellow-600",
                  bgGradient: "from-yellow-50 to-orange-50"
                },
                {
                  icon: ShieldCheckIcon,
                  title: "Safety",
                  description: "Complete background verification and skill training for ultimate service quality.",
                  color: "text-blue-600",
                  bgGradient: "from-blue-50 to-indigo-50"
                },
                {
                  icon: UsersIcon,
                  title: "Community",
                  description: "Building strong, lasting relationships within our helper and customer community.",
                  color: "text-purple-600",
                  bgGradient: "from-purple-50 to-pink-50"
                },
                {
                  icon: LightBulbIcon,
                  title: "Innovation",
                  description: "Constantly improving our platform with the latest technology and user feedback.",
                  color: "text-indigo-600",
                  bgGradient: "from-indigo-50 to-blue-50"
                }
              ].map((value, index) => (
                <div key={index} className={`group bg-gradient-to-br ${value.bgGradient} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  <value.icon className={`w-12 h-12 ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be Part of Our Journey
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Whether you're looking for reliable home services or want to join our helper community, 
              we're here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hire-helper" className="group bg-white hover:bg-gray-100 text-indigo-900 font-semibold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center">
                <span className="flex items-center justify-center gap-2">
                  <UsersIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Hire a Helper
                </span>
              </Link>
              <Link href="/join-as-helper" className="group border-2 border-white hover:bg-white hover:text-indigo-900 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-center">
                <span className="flex items-center justify-center gap-2">
                  <HeartIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Join as Helper
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 