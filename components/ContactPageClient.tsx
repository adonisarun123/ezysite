'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
  StarIcon,
  HeartIcon,
  HomeIcon,
  ShieldCheckIcon,
  CurrencyRupeeIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
  HandRaisedIcon
} from '@heroicons/react/24/outline';
import { supabase } from '@/lib/supabaseClient'
import { trackFormStart, trackFormSubmit, trackFormComplete, trackFormError, trackChatStart, trackPhoneClick } from '@/lib/analytics'

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    city: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined') {
      // Any client-side analytics tracking
    }
  }, [])

  const services = [
    'Full-time Maid',
    'Part-time Maid', 
    'Live-in Maid',
    'Cook',
    'Nanny/Babysitter',
    'Elderly Care',
    'Driver',
    'Cleaner',
    'Other'
  ]

  const cities = [
    'Bangalore', 'Mumbai', 'Delhi', 'Noida', 'Nagpur',
    'Kanpur', 'Lucknow', 'Meerut', 'Bareilly', 'Other'
  ]

  const validateForm = () => {
    const errors: { [key: string]: string } = {}
    
    if (!formData.name.trim()) errors.name = 'Name is required'
    if (!formData.email.trim()) errors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid'
    if (!formData.phone.trim()) errors.phone = 'Phone is required'
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) errors.phone = 'Phone must be 10 digits'
    if (!formData.service) errors.service = 'Service is required'
    if (!formData.city) errors.city = 'City is required'
    if (!formData.message.trim()) errors.message = 'Message is required'
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    trackFormStart('contact_form', 'contact_page')
    
    if (!validateForm()) {
      trackFormError('contact_form', 'validation_failed', 'Form validation failed')
      return
    }

    setSubmitStatus('idle')

    try {
      trackFormSubmit('contact_form', formData)
      
      // Save to Supabase
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            city: formData.city,
            message: formData.message,
            source: 'contact_form',
            created_at: new Date().toISOString()
          }
        ])

      if (error) throw error

      // Send email via API
      const response = await fetch('/api/send-lead-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      setSubmitStatus('success')
      trackFormComplete('contact_form')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        city: '',
        message: ''
      })
      setFormErrors({})
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      trackFormError('contact_form', 'submission_failed', 'Form submission failed')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handlePhoneClick = () => {
    trackPhoneClick('+919972571005', 'contact_page')
  }

  const handleChatClick = () => {
    trackChatStart('other', 'contact_page')
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Y9VE0VN6HQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y9VE0VN6HQ');
        `}
      </Script>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                <ChatBubbleLeftRightIcon className="h-12 w-12 text-blue-300" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Get in Touch with
              <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                EzyHelpers
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              We're here to help you find the perfect domestic help for your home. 
              Reach out to us 24/7 for support, queries, or to book our services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <PhoneIcon className="h-8 w-8 text-blue-300 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-200">24/7 Support Available</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <EnvelopeIcon className="h-8 w-8 text-purple-300 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-200">Quick Response Guaranteed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <MapPinIcon className="h-8 w-8 text-green-300 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-200">Multiple City Locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-700">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <XCircleIcon className="h-5 w-5 text-red-600 mr-2" />
                  <span className="text-red-700">Sorry, there was an error sending your message. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                        formErrors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                        formErrors.service ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    {formErrors.service && <p className="text-red-500 text-sm mt-1">{formErrors.service}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                        formErrors.city ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select your city</option>
                      {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                    {formErrors.city && <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      formErrors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                      <PhoneIcon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone Numbers</h4>
                      <a 
                        href="tel:+919972571005" 
                        onClick={handlePhoneClick}
                        className="text-indigo-600 hover:text-indigo-800 block"
                      >
                        +91 99725 71005
                      </a>
                      <a 
                        href="tel:+919945843005" 
                        onClick={handlePhoneClick}
                        className="text-indigo-600 hover:text-indigo-800 block"
                      >
                        +91 99458 43005
                      </a>
                      <p className="text-gray-600 text-sm mt-1">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                      <EnvelopeIcon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a 
                        href="mailto:contact@ezyhelpers.com" 
                        className="text-purple-600 hover:text-purple-800"
                      >
                        contact@ezyhelpers.com
                      </a>
                      <p className="text-gray-600 text-sm mt-1">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <MapPinIcon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                      <address className="text-gray-600 not-italic">
                        HSR Layout, Bangalore, Karnataka 560102<br />
                        <span className="text-sm">Serving across India's major cities</span>
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <ClockIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <p className="text-gray-600">Monday - Sunday</p>
                      <p className="text-gray-600">24/7 Customer Support</p>
                      <p className="text-gray-600 text-sm">Emergency services available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Support */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="mb-6 opacity-90">
                  Our customer support team is available 24/7 to assist you with any queries or emergency bookings.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="tel:+919972571005"
                    onClick={handlePhoneClick}
                    className="flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    <PhoneIcon className="h-5 w-5 mr-3" />
                    <span className="font-semibold">Call Now: +91 99725 71005</span>
                  </a>
                  
                  <button
                    onClick={handleChatClick}
                    className="flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-lg transition-colors duration-200 w-full"
                  >
                    <ChatBubbleLeftRightIcon className="h-5 w-5 mr-3" />
                    <span className="font-semibold">Start Live Chat</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We Serve Across Multiple Cities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              EzyHelpers provides trusted domestic help services in major cities across India. 
              Find quality helpers in your area.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              'Bangalore', 'Mumbai', 'Delhi', 'Noida', 'Nagpur',
              'Kanpur', 'Lucknow', 'Meerut', 'Bareilly', 'Chennai'
            ].map((city) => (
              <div key={city} className="bg-gray-50 hover:bg-indigo-50 p-4 rounded-lg text-center transition-colors duration-200">
                <MapPinIcon className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                <span className="text-gray-700 font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Quick answers to common questions about our services
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How quickly can I get a helper?",
                  answer: "We typically provide helpers within 24-48 hours of your request, depending on your location and specific requirements."
                },
                {
                  question: "Are all helpers verified?",
                  answer: "Yes, all our helpers undergo thorough background verification including police verification, address proof, and reference checks."
                },
                {
                  question: "What if I'm not satisfied with the helper?",
                  answer: "We offer free replacement within the first week if you're not satisfied with the helper's performance."
                },
                {
                  question: "Do you provide emergency services?",
                  answer: "Yes, we have 24/7 emergency support for urgent domestic help requirements across all our service cities."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 