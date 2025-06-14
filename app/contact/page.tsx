'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  PaperAirplaneIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { supabase } from '@/lib/supabaseClient'

export default function ContactPage() {
  // Function to open Tawk.to chat
  const openTawkChat = () => {
    if (typeof window !== 'undefined' && (window as any).Tawk_API) {
      (window as any).Tawk_API.toggle();
    }
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  })
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validate = () => {
    const errors: { [key: string]: string } = {}
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required'
    } else if (formData.firstName.trim().length < 2) {
      errors.firstName = 'First name must be at least 2 characters'
    }
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required'
    } else if (formData.lastName.trim().length < 2) {
      errors.lastName = 'Last name must be at least 2 characters'
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      errors.email = 'Enter a valid email address'
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required'
    } else if (!/^[5-9][0-9]{9}$/.test(formData.phone.trim())) {
      errors.phone = 'Enter a valid 10-digit phone number starting with 5-9'
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Please select a subject'
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters'
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      try {
        const { error } = await supabase.from('contact_leads').insert([
          {
            first_name: formData.firstName.trim(),
            last_name: formData.lastName.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            subject: formData.subject,
            message: formData.message.trim()
          }
        ])
        if (error) throw error
        setSubmitStatus('success')
      } catch {
        setSubmitStatus('error')
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Tawk.to Live Chat Script */}
      <Script
        id="tawk-to-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/67188db42480f5b4f591f799/1iaruj2t3';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Get in
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                    Touch
                  </span>
                </h1>
                <p className="text-xl text-emerald-100 leading-relaxed max-w-4xl mx-auto">
                  We're here to help! Whether you have questions, need support, or want to share feedback, 
                  our friendly team is ready to assist you.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={openTawkChat}
                  className="group bg-yellow-400 hover:bg-yellow-300 text-emerald-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 group-hover:bounce transition-transform duration-300" />
                    Start a Conversation
                  </span>
                </button>
                <button className="group border-2 border-white hover:bg-white hover:text-emerald-900 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center justify-center gap-2">
                    <PhoneIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Call Now: +91 9972571005
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Let's Connect
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Have a question or need assistance? We'd love to hear from you. 
                    Reach out through any of these channels and we'll get back to you as soon as possible.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: PhoneIcon,
                      title: "Call Us",
                      info: "+91 9972571005",
                      subinfo: "Available 24/7 for emergencies",
                      color: "text-blue-600",
                      bgColor: "bg-blue-50",
                      hoverColor: "hover:bg-blue-100"
                    },
                    {
                      icon: EnvelopeIcon,
                      title: "Email Support",
                      info: "contact@ezyhelpers.com",
                      subinfo: "We'll respond within 2 hours",
                      color: "text-green-600",
                      bgColor: "bg-green-50",
                      hoverColor: "hover:bg-green-100"
                    },
                    {
                      icon: ChatBubbleLeftRightIcon,
                      title: "Live Chat",
                      info: "Chat with our team",
                      subinfo: "Available Mon-Sat, 9 AM - 9 PM",
                      color: "text-purple-600",
                      bgColor: "bg-purple-50",
                      hoverColor: "hover:bg-purple-100"
                    },
                    {
                      icon: MapPinIcon,
                      title: "Visit Our Office",
                      info: "Bangalore, Karnataka",
                      subinfo: "Schedule an appointment",
                      color: "text-red-600",
                      bgColor: "bg-red-50",
                      hoverColor: "hover:bg-red-100"
                    }
                  ].map((contact, index) => (
                    <div 
                      key={index} 
                      className={`group ${contact.bgColor} ${contact.hoverColor} rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer`}
                      onClick={contact.title === "Live Chat" ? openTawkChat : undefined}
                    >
                      <div className="flex items-start gap-4">
                        <contact.icon className={`w-8 h-8 ${contact.color} mt-1 group-hover:scale-110 transition-transform duration-300`} />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{contact.title}</h3>
                          <p className={`${contact.color} font-medium mb-1`}>{contact.info}</p>
                          <p className="text-gray-600 text-sm">{contact.subinfo}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <ClockIcon className="w-6 h-6 text-emerald-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Emergency only</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="space-y-6">
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
                    <p className="text-gray-600">Fill out the form below and we'll get back to you promptly</p>
                  </div>
                  
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <div className="relative">
                          <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 group-hover:border-emerald-300"
                            placeholder="John"
                          />
                        </div>
                        {formErrors.firstName && <p className="text-xs text-red-500 mt-1">{formErrors.firstName}</p>}
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <div className="relative">
                          <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 group-hover:border-emerald-300"
                            placeholder="Doe"
                          />
                        </div>
                        {formErrors.lastName && <p className="text-xs text-red-500 mt-1">{formErrors.lastName}</p>}
                      </div>
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <div className="relative">
                        <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 group-hover:border-emerald-300"
                          placeholder="john@example.com"
                        />
                      </div>
                      {formErrors.email && <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>}
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 group-hover:border-emerald-300"
                          placeholder="+91 9972571005"
                        />
                      </div>
                      {formErrors.phone && <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>}
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 group-hover:border-emerald-300"
                      >
                        <option>General Inquiry</option>
                        <option>Service Request</option>
                        <option>Billing Support</option>
                        <option>Technical Issue</option>
                        <option>Feedback</option>
                        <option>Partnership</option>
                      </select>
                      {formErrors.subject && <p className="text-xs text-red-500 mt-1">{formErrors.subject}</p>}
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 group-hover:border-emerald-300 resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                      {formErrors.message && <p className="text-xs text-red-500 mt-1">{formErrors.message}</p>}
                    </div>
                    
                    <button
                      type="submit"
                      className="group w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <PaperAirplaneIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </span>
                    </button>
                    {submitStatus === 'success' && <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>}
                    {submitStatus === 'error' && <p className="text-red-600 text-sm mt-2">There was an error sending your message. Please try again.</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Offices
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visit us at our locations or reach out for local support in your city
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  city: "Bangalore",
                  address: "123 Tech Park, Electronic City",
                  pincode: "Bangalore, Karnataka 560100",
                  phone: "+91 9972571005",
                  email: "contact@ezyhelpers.com",
                  isHQ: true
                },
                {
                  city: "Bareilly",
                  address: "No 187/3, Vivek Vihar, Janakpuri, Near Avadh Plaza Hotel, Bareilly",
                  pincode: "Uttar Pradesh 243001",
                  phone: "+91 9410814693",
                  email: "contact@ezyhelpers.com",
                  isHQ: false
                }
              ].map((office, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-emerald-50 hover:to-teal-50 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative">
                  {office.isHQ && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                      HQ
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <BuildingOfficeIcon className="w-8 h-8 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-xl font-semibold text-gray-900">{office.city}</h3>
                    </div>
                    
                    <div className="space-y-3 text-gray-600">
                      <div className="flex items-start gap-3">
                        <MapPinIcon className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p>{office.address}</p>
                          <p>{office.pincode}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <PhoneIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <p className="hover:text-emerald-600 cursor-pointer transition-colors duration-300">
                          {office.phone}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <EnvelopeIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <p className="hover:text-emerald-600 cursor-pointer transition-colors duration-300">
                          {office.email}
                        </p>
                      </div>
                    </div>
                    
                    <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 transform group-hover:scale-105">
                      Get Directions
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Need Quick Answers?
                </h2>
                <p className="text-xl text-gray-600">
                  Check out our most commonly asked questions or reach out directly
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    question: "How do I book a service?",
                    answer: "Simply click 'Book Now' and select your preferred service and time."
                  },
                  {
                    question: "Are helpers verified?",
                    answer: "Yes, all helpers undergo thorough background checks and verification."
                  },
                  {
                    question: "What if I'm not satisfied?",
                    answer: "We offer a 100% satisfaction guarantee with free re-service if needed."
                  },
                  {
                    question: "How do payments work?",
                    answer: "Secure online payments with multiple options including cards and UPI."
                  }
                ].map((faq, index) => (
                  <div key={index} className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-left">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <button className="group bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <span className="flex items-center justify-center gap-2">
                  <GlobeAltIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  View All FAQs
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Don't wait! Book your service today or join our helper community. 
              We're here to make your life easier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white hover:bg-gray-100 text-emerald-900 font-semibold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <span className="flex items-center justify-center gap-2">
                  <HeartIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Book a Service
                </span>
              </button>
              <button 
                onClick={openTawkChat}
                className="group border-2 border-white hover:bg-white hover:text-emerald-900 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <ChatBubbleLeftRightIcon className="w-5 h-5 group-hover:bounce transition-transform duration-300" />
                  Start Live Chat
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