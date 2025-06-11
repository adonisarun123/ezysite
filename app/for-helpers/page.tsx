import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  UserPlusIcon,
  CurrencyDollarIcon,
  ClockIcon,
  StarIcon,
  ShieldCheckIcon,
  PhoneIcon,
  MapPinIcon,
  BanknotesIcon,
  CalendarDaysIcon,
  UsersIcon,
  TrophyIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

export default function ForHelpersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Join EzyHelpers
                    <span className="block text-yellow-300">Earn More, Work Smart</span>
                  </h1>
                  <p className="text-xl text-blue-100 leading-relaxed">
                    Become part of India's fastest-growing home services platform. 
                    Connect with customers who need your skills and build a thriving career.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/join-as-helper" className="group bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center">
                    <span className="flex items-center justify-center gap-2">
                      <UserPlusIcon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      Join as Helper
                    </span>
                  </Link>
                  <button className="group border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center justify-center gap-2">
                      <PhoneIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      Call: +91 9876543210
                    </span>
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                      <CurrencyDollarIcon className="w-12 h-12 text-yellow-300 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-semibold text-lg mb-2">Earn Well</h3>
                      <p className="text-blue-100 text-sm">₹15,000 - ₹45,000/month</p>
                    </div>
                    <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                      <ClockIcon className="w-12 h-12 text-green-300 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-semibold text-lg mb-2">Flexible Hours</h3>
                      <p className="text-blue-100 text-sm">Work when you want</p>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                      <StarIcon className="w-12 h-12 text-yellow-300 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-semibold text-lg mb-2">Build Reputation</h3>
                      <p className="text-blue-100 text-sm">Grow your rating</p>
                    </div>
                    <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                      <ShieldCheckIcon className="w-12 h-12 text-green-300 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-semibold text-lg mb-2">Secure Platform</h3>
                      <p className="text-blue-100 text-sm">Protected payments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose EzyHelpers?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of helpers who have transformed their careers with our platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: BanknotesIcon,
                  title: "Guaranteed Payments",
                  description: "Get paid on time, every time. No delays, no hassles.",
                  color: "text-green-600",
                  bgColor: "bg-green-50",
                  hoverColor: "hover:bg-green-100"
                },
                {
                  icon: CalendarDaysIcon,
                  title: "Flexible Scheduling",
                  description: "Choose your own working hours and days. Perfect work-life balance.",
                  color: "text-blue-600",
                  bgColor: "bg-blue-50",
                  hoverColor: "hover:bg-blue-100"
                },
                {
                  icon: UsersIcon,
                  title: "Steady Customers",
                  description: "Access to verified customers who regularly need your services.",
                  color: "text-purple-600",
                  bgColor: "bg-purple-50",
                  hoverColor: "hover:bg-purple-100"
                },
                {
                  icon: TrophyIcon,
                  title: "Skill Recognition",
                  description: "Build your reputation and get recognized for quality work.",
                  color: "text-yellow-600",
                  bgColor: "bg-yellow-50",
                  hoverColor: "hover:bg-yellow-100"
                },
                {
                  icon: MapPinIcon,
                  title: "Local Opportunities",
                  description: "Find work near your location. No long commutes required.",
                  color: "text-red-600",
                  bgColor: "bg-red-50",
                  hoverColor: "hover:bg-red-100"
                },
                {
                  icon: HeartIcon,
                  title: "Support System",
                  description: "24/7 customer support to help you succeed in your career.",
                  color: "text-pink-600",
                  bgColor: "bg-pink-50",
                  hoverColor: "hover:bg-pink-100"
                }
              ].map((benefit, index) => (
                <div key={index} className={`group ${benefit.bgColor} ${benefit.hoverColor} rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}>
                  <benefit.icon className={`w-12 h-12 ${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Getting started is simple. Follow these easy steps to begin your journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Register",
                  description: "Fill out our simple registration form with your details and skills."
                },
                {
                  step: "02", 
                  title: "Verification",
                  description: "Complete background verification and skill assessment."
                },
                {
                  step: "03",
                  title: "Get Bookings",
                  description: "Start receiving job requests from customers in your area."
                },
                {
                  step: "04",
                  title: "Earn Money",
                  description: "Complete jobs and receive instant payments directly to your account."
                }
              ].map((step, index) => (
                <div key={index} className="group text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-gray-300 transform -translate-x-1/2"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join EzyHelpers today and become part of a community that values your skills and supports your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join-as-helper" className="group bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center">
                <span className="flex items-center justify-center gap-2">
                  <UserPlusIcon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Register Now
                </span>
              </Link>
              <button className="group border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  <PhoneIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Call Us: +91 9876543210
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 