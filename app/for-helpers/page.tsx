'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WorkingLanguageSelector from '../../components/WorkingLanguageSelector';
import TranslationNotice from '../../components/TranslationNotice';
import GoogleTranslateWidget from '../../components/GoogleTranslateWidget';
import { useLanguageSelector } from '../../hooks/useLanguageSelector';
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
  HeartIcon,
  ChevronLeftIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function ForHelpersPage() {
  const { isOpen, openSelector, closeSelector, handleLanguageSelect } = useLanguageSelector();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Language Selector Popup */}
      <WorkingLanguageSelector
        isOpen={isOpen}
        onClose={closeSelector}
        onLanguageSelect={handleLanguageSelect}
      />

      {/* Translation Notice */}
      <TranslationNotice />



      {/* Floating Language Button */}
      <button
        onClick={openSelector}
        className="fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        title="Change Language"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      </button>
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
                      Call: +91 9972571005
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
                  description: "Our team is here to guide you, answer queries, and ensure a smooth work experience.",
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
        </section>        {/* Find Jobs Section - Blue Theme Redesign */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden text-white">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="space-y-20">
              {/* 1. Header Section */}
              <div className="text-center max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                  Find Helper Jobs <span className="text-yellow-300">in Bangalore</span>
                </h2>
                <p className="text-2xl md:text-3xl text-blue-100 font-bold mb-8">
                  Take the next step towards a better income.
                </p>
                <div className="h-1.5 w-24 bg-yellow-400 mx-auto rounded-full mb-4"></div>
                <p className="text-lg text-blue-50 leading-relaxed font-medium">
                  EzyHelpers helps you find jobs with trusted families who are actively hiring.
                  You can explore jobs in Bangalore from your state, city, or region.
                  Whether you have experience or not, we help you find the right job based on your skills and comfort.
                </p>
              </div>

              {/* 2. Available Job Opportunities Grid */}
              <div className="space-y-10">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <h3 className="text-3xl font-bold text-white">Available Job Opportunities</h3>
                  <div className="h-1 w-20 bg-blue-400/30 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'Housekeeping Jobs', icon: '🧹' },
                    { title: 'Cooking Jobs', icon: '🍳' },
                    { title: 'Nanny / Babysitter Jobs', icon: '👶' },
                    { title: 'Elderly Care Jobs', icon: '👴' },
                    { title: 'Patient Care Jobs', icon: '🏥' },
                    { title: 'Live-in Housekeeping Couple Jobs', icon: '👥' },
                    { title: 'Apartment Couple Security Jobs', icon: '🛡️' },
                    { title: 'Japa Maid Jobs', icon: '🤱' },
                    { title: 'Live-in Couple for Farmhouse Jobs', icon: '🏡' }
                  ].map((job, idx) => (
                    <div key={idx} className="group flex items-center gap-5 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl hover:bg-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-1">
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-500 shadow-inner">
                        <span className="group-hover:hidden">{job.icon}</span>
                        <StarIcon className="w-8 h-8 text-blue-900 hidden group-hover:block animate-pulse" />
                      </div>
                      <span className="text-white font-bold text-lg group-hover:text-yellow-200 transition-colors uppercase tracking-tight">{job.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Choose What Suits You Section (Integrated Benefits) */}
              <div className="bg-white/10 backdrop-blur-xl rounded-[3rem] p-8 md:p-10 text-white border border-white/20 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>
                <div className="relative z-10 space-y-12">
                  <div className="text-center space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-yellow-300">Choose What Suits You</h3>
                    <p className="text-blue-100 text-lg">We prioritize your comfort and professional growth</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { icon: ClockIcon, text: "Flexible working hours", desc: "Choose shifts that fit your life" },
                      { icon: StarIcon, text: "Jobs based on skills", desc: "Positions matching your expertise" },
                      { icon: HeartIcon, text: "Full support from us", desc: "24/7 assistance for all helpers" },
                      { icon: ShieldCheckIcon, text: "Wait-free process", desc: "Get matched within 48 hours" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center space-y-4 p-4 bg-blue-950/20 rounded-3xl border border-white/10 hover:bg-blue-950/40 transition-all duration-300">
                        <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform">
                          <item.icon className="w-8 h-8 text-blue-900" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-lg text-white">{item.text}</h4>
                          <p className="text-blue-200 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. CTA Section - Centered at the bottom */}
              <div className="text-center space-y-4">
                <div className="space-y-4">
                  <Link
                    href="/helper-jobs"
                    className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-black text-lg py-4 px-8 rounded-[2rem] transition-all shadow-[0_20px_50px_rgba(253,224,71,0.2)] gap-4 group hover:scale-[1.03] active:scale-95"
                  >
                    Browse Jobs by Your Region
                    <ArrowRightIcon className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>

                <div className="flex flex-col items-center gap-6">
                  <p className="text-blue-100 font-bold text-lg">Can't find what you're looking for?</p>
                  <Link href="tel:+918031411776" className="flex items-center gap-3 bg-white/10 px-8 py-4 rounded-full text-white hover:bg-white/20 transition-all border border-white/20">
                    <PhoneIcon className="w-6 h-6 animate-bounce text-yellow-300" />
                    <span className="font-black text-white">Contact Support: 080-31411776</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section - Dark Theme for Premium Look */}
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Getting started is simple. Follow these easy steps to begin your journey.
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-8 rounded-full"></div>
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
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
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
                  Call Us: 080-31411776
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