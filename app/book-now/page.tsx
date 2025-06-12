import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  HomeIcon,
  CheckCircleIcon,
  StarIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  HeartIcon,
  BoltIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function BookNowPage() {
  const services = [
    {
      id: 'live-in-maid',
      name: 'Live-in Maid',
      price: '₹15,000-25,000/month',
      icon: HomeIcon,
      description: '24/7 household assistance with accommodation',
      popular: true
    },
    {
      id: 'full-time-maid',
      name: 'Full-time Maid',
      price: '₹8,000-15,000/month',
      icon: UserIcon,
      description: 'Daily cleaning and household management'
    },
    {
      id: 'part-time-maid',
      name: 'Part-time Maid',
      price: '₹3,000-8,000/month',
      icon: ClockIcon,
      description: 'Flexible hours, perfect for working families'
    },
    {
      id: 'on-demand-helper',
      name: 'On-demand Helper',
      price: '₹500-1,500/day',
      icon: BoltIcon,
      description: 'Immediate assistance when you need it most'
    },
    {
      id: 'nanny-babysitter',
      name: 'Nanny/Babysitter',
      price: '₹10,000-20,000/month',
      icon: HeartIcon,
      description: 'Professional childcare with loving attention'
    },
    {
      id: 'elderly-care',
      name: 'Elderly Care',
      price: '₹12,000-22,000/month',
      icon: ShieldCheckIcon,
      description: 'Compassionate care for senior family members'
    },
    {
      id: 'cook',
      name: 'Cook',
      price: '₹6,000-12,000/month',
      icon: SparklesIcon,
      description: 'Delicious homemade meals daily'
    },
    {
      id: 'driver',
      name: 'Driver',
      price: '₹8,000-15,000/month',
      icon: MapPinIcon,
      description: 'Safe and reliable transportation'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Book Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                    Perfect Helper
                  </span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                  Find verified, professional helpers for all your household needs. 
                  Quick booking, instant confirmation, and 100% satisfaction guaranteed.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <CheckCircleIcon className="w-5 h-5 text-green-300" />
                  <span className="text-blue-100">100% Verified Helpers</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <StarIcon className="w-5 h-5 text-yellow-300" />
                  <span className="text-blue-100">4.8★ Average Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <ShieldCheckIcon className="w-5 h-5 text-green-300" />
                  <span className="text-blue-100">Instant Booking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Selection Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Service
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Select the type of helper you need and we'll connect you with the perfect match
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={service.id} className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 border-transparent hover:border-blue-200">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <service.icon className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-right">
                        <div className="text-sm text-gray-500 mb-1">Starting from</div>
                        <div className="font-semibold text-blue-600">{service.price}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 transform group-hover:scale-105">
                      Select Service
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Complete Your Booking
                </h2>
                <p className="text-lg text-gray-600">
                  Fill in your details and we'll match you with the perfect helper
                </p>
              </div>
              
              <form className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                    <UserIcon className="w-6 h-6 text-blue-600" />
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <div className="relative">
                        <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="+91 9972571005"
                        />
                      </div>
                    </div>
                    <div className="group md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <div className="relative">
                        <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                    <HomeIcon className="w-6 h-6 text-blue-600" />
                    Service Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select service type</option>
                        {services.map(service => (
                          <option key={service.id} value={service.id}>{service.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Start Date *</label>
                      <div className="relative">
                        <CalendarDaysIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Working Hours *</label>
                      <div className="relative">
                        <ClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select working hours</option>
                          <option value="full-time">Full-time (8-10 hours)</option>
                          <option value="part-time-morning">Part-time Morning (4-5 hours)</option>
                          <option value="part-time-evening">Part-time Evening (4-5 hours)</option>
                          <option value="live-in">Live-in (24/7)</option>
                          <option value="on-demand">On-demand</option>
                        </select>
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range *</label>
                      <div className="relative">
                        <CurrencyDollarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select budget range</option>
                          <option value="3000-8000">₹3,000 - ₹8,000/month</option>
                          <option value="8000-15000">₹8,000 - ₹15,000/month</option>
                          <option value="15000-25000">₹15,000 - ₹25,000/month</option>
                          <option value="25000-plus">₹25,000+/month</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                    <MapPinIcon className="w-6 h-6 text-blue-600" />
                    Location Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select your city</option>
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
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Area/Locality *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your area/locality"
                      />
                    </div>
                    <div className="group md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Complete Address</label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Enter your complete address (optional)"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Special Requirements */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                    <SparklesIcon className="w-6 h-6 text-blue-600" />
                    Special Requirements
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'Cooking skills required',
                        'Pet-friendly helper',
                        'Experience with children',
                        'Elderly care experience',
                        'Own transportation',
                        'Language preferences'
                      ].map((requirement, index) => (
                        <label key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="text-gray-700">{requirement}</span>
                        </label>
                      ))}
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Any specific requirements or preferences you'd like to mention..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircleIcon className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">What happens next?</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• We'll review your requirements within 2 hours</li>
                          <li>• You'll receive 3-5 verified helper profiles</li>
                          <li>• Schedule interviews with your preferred candidates</li>
                          <li>• Start with your chosen helper - satisfaction guaranteed!</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <CheckCircleIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                      Complete Booking - It's Free!
                    </span>
                  </button>
                  
                  <p className="text-center text-sm text-gray-600">
                    No booking fees • Simple commission, then pay directly to helper • 100% satisfaction guarantee
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose EzyHelpers?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: ShieldCheckIcon,
                  title: "100% Verified",
                  description: "All helpers undergo thorough background checks and identity verification",
                  color: "text-green-600",
                  bgColor: "bg-green-50"
                },
                {
                  icon: StarIcon,
                  title: "Highly Rated",
                  description: "Average 4.8★ rating from thousands of satisfied customers",
                  color: "text-yellow-600",
                  bgColor: "bg-yellow-50"
                },
                {
                  icon: HeartIcon,
                  title: "Satisfaction Guaranteed",
                  description: "100% satisfaction guarantee with free replacement if not happy",
                  color: "text-red-600",
                  bgColor: "bg-red-50"
                }
              ].map((feature, index) => (
                <div key={index} className={`group ${feature.bgColor} rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 