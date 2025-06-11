import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  PhotoIcon,
  CheckCircleIcon,
  StarIcon,
  ShieldCheckIcon,
  HeartIcon,
  HomeIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

export default function JoinAsHelperPage() {
  const serviceTypes = [
    { id: 'housekeeping', name: 'Housekeeping & Cleaning', icon: HomeIcon },
    { id: 'cooking', name: 'Cooking & Meal Preparation', icon: HeartIcon },
    { id: 'childcare', name: 'Childcare & Babysitting', icon: AcademicCapIcon },
    { id: 'eldercare', name: 'Elderly Care', icon: ShieldCheckIcon },
    { id: 'driving', name: 'Driving & Transportation', icon: MapPinIcon },
    { id: 'gardening', name: 'Gardening & Outdoor Work', icon: StarIcon }
  ];

  const experienceLevels = [
    { value: 'entry', label: 'Entry Level (0-1 years)' },
    { value: 'experienced', label: 'Experienced (2-5 years)' },
    { value: 'senior', label: 'Senior (5+ years)' },
    { value: 'expert', label: 'Expert (10+ years)' }
  ];

  const availabilityTypes = [
    { value: 'live-in', label: 'Live-in (24/7)' },
    { value: 'full-time', label: 'Full-time (8-10 hours/day)' },
    { value: 'part-time', label: 'Part-time (4-6 hours/day)' },
    { value: 'on-demand', label: 'On-demand/Flexible' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Join as
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                    Helper
                  </span>
                </h1>
                <p className="text-xl text-emerald-100 leading-relaxed max-w-4xl mx-auto">
                  Start your career with EzyHelpers and connect with families who value your skills. 
                  Join thousands of helpers earning ₹15,000 - ₹45,000 per month.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <CheckCircleIcon className="w-5 h-5 text-green-300" />
                  <span className="text-emerald-100">Free Registration</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <CurrencyDollarIcon className="w-5 h-5 text-yellow-300" />
                  <span className="text-emerald-100">Guaranteed Payments</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <StarIcon className="w-5 h-5 text-purple-300" />
                  <span className="text-emerald-100">Flexible Working</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Helper Registration Form</h2>
                <p className="text-emerald-100 mt-2">Complete the form below to start your journey with EzyHelpers</p>
              </div>
              
              <form className="p-8 space-y-12">
                {/* Personal Information */}
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <UserIcon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                      <p className="text-gray-600">Tell us about yourself</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                          placeholder="+91 9876543210"
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <div className="relative">
                        <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current City *</label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
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
                  </div>
                </section>

                {/* Services & Experience */}
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <BriefcaseIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Services & Experience</h3>
                      <p className="text-gray-600">What services can you provide?</p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">Services You Can Provide *</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {serviceTypes.map((service) => (
                          <label key={service.id} className="group flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-300 cursor-pointer">
                            <input
                              type="checkbox"
                              value={service.id}
                              className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                            />
                            <service.icon className="w-5 h-5 text-gray-600 group-hover:text-emerald-600 transition-colors duration-300" />
                            <span className="text-gray-700 group-hover:text-emerald-700 transition-colors duration-300">{service.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Total Experience *</label>
                        <select
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select experience level</option>
                          {experienceLevels.map((level) => (
                            <option key={level.value} value={level.value}>{level.label}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Availability Type *</label>
                        <select
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select availability</option>
                          {availabilityTypes.map((type) => (
                            <option key={type.value} value={type.value}>{type.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expected Monthly Salary *</label>
                      <div className="relative">
                        <CurrencyDollarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select salary range</option>
                          <option value="5000-10000">₹5,000 - ₹10,000</option>
                          <option value="10000-15000">₹10,000 - ₹15,000</option>
                          <option value="15000-25000">₹15,000 - ₹25,000</option>
                          <option value="25000-35000">₹25,000 - ₹35,000</option>
                          <option value="35000-plus">₹35,000+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Document Upload */}
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <DocumentTextIcon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Document Upload</h3>
                      <p className="text-gray-600">Upload required documents for verification</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-2xl p-6">
                      <div className="flex items-start gap-3">
                        <InformationCircleIcon className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Required Documents</h4>
                          <ul className="text-gray-700 space-y-1">
                            <li>• Government-issued Photo ID (Aadhaar/PAN/Passport)</li>
                            <li>• Recent passport-size photograph</li>
                            <li>• Address proof document</li>
                            <li>• Experience certificates (if available)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { label: 'Profile Photo *', accept: 'image/*' },
                        { label: 'ID Proof *', accept: '.pdf,.jpg,.jpeg,.png' },
                        { label: 'Address Proof', accept: '.pdf,.jpg,.jpeg,.png' },
                        { label: 'Experience Certificates', accept: '.pdf,.jpg,.jpeg,.png' }
                      ].map((doc, index) => (
                        <div key={index} className="group">
                          <label className="block text-sm font-medium text-gray-700 mb-2">{doc.label}</label>
                          <div className="relative">
                            <input
                              type="file"
                              accept={doc.accept}
                              className="hidden"
                              id={`file-${index}`}
                            />
                            <label
                              htmlFor={`file-${index}`}
                              className="group cursor-pointer flex items-center justify-center w-full px-6 py-4 border-2 border-gray-300 border-dashed rounded-xl hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300"
                            >
                              <div className="text-center">
                                <PhotoIcon className="w-8 h-8 text-gray-400 group-hover:text-emerald-500 mx-auto mb-2 transition-colors duration-300" />
                                <span className="text-gray-600 group-hover:text-emerald-600 transition-colors duration-300">
                                  Click to upload
                                </span>
                              </div>
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Terms & Conditions */}
                <section>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-gray-900">Terms & Conditions</h3>
                      
                      <div className="space-y-4">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            required
                            className="w-5 h-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded mt-0.5"
                          />
                          <span className="text-gray-700 leading-relaxed">
                            I confirm that all information provided is accurate and complete to the best of my knowledge. *
                          </span>
                        </label>
                        
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            required
                            className="w-5 h-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded mt-0.5"
                          />
                          <span className="text-gray-700 leading-relaxed">
                            I agree to EzyHelpers' <a href="/terms-of-service" className="text-emerald-600 hover:underline">Terms of Service</a> and <a href="/privacy-policy" className="text-emerald-600 hover:underline">Privacy Policy</a>. *
                          </span>
                        </label>
                        
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            required
                            className="w-5 h-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded mt-0.5"
                          />
                          <span className="text-gray-700 leading-relaxed">
                            I consent to background verification and reference checks as part of the registration process. *
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Submit Button */}
                <section className="text-center">
                  <button
                    type="submit"
                    className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-12 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <CheckCircleIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                      Submit Registration
                    </span>
                  </button>
                  
                  <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                    After submission, our team will review your application and contact you within 2-3 business days.
                  </p>
                </section>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 