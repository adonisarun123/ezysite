'use client'

import Link from 'next/link'
import { useState, memo } from 'react'
import { CheckCircleIcon, StarIcon, PhoneIcon, ChatBubbleLeftRightIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'
import { supabase } from '@/lib/supabaseClient'

// Legacy stats kept for backward compatibility
const stats = [
  { label: 'Trusted Families', value: '10,000+' },
  { label: 'Verified Helpers', value: '5,000+' },
  { label: 'Locations', value: '250+' },
  { label: 'Customer Rating', value: '4.8/5' },
]



const trustedFeatures = [
  'Background Verified Helpers',
  '24/7 Support Available', 
  'Quick Placement',
  'Flexible Service Options',
]

// Optimized for performance - static arrays
const services = [
  'Live-in Maid', 'Full-time Maid', 'Part-time Maid', 'On-demand Helper',
  'Babysitter/Nanny', 'Elderly Care', 'Cook', 'Driver'
]

const cities = [
  'Bangalore', 'Mumbai', 'Delhi', 'Noida', 'Nagpur', 
  'Lucknow', 'Kanpur', 'Meerut', 'Bareilly'
]

const quickAccessServices = [
  { name: 'Live-in Maid', href: '/services/live-in-maids' },
  { name: 'Part-time Helper', href: '/services/part-time-maids' },
  { name: 'Elderly Care', href: '/services/elderly-care' },
  { name: 'Babysitter', href: '/services/nanny-babysitter' }
]

// Memoized star rating component
const StarRating = memo(() => (
  <div className="flex items-center space-x-1">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
    ))}
  </div>
));
StarRating.displayName = 'StarRating';

// Memoized stats component - now using EnhancedStatsGrid
const StatsGrid = memo(() => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {stats.map((stat) => (
      <div key={stat.label} className="text-center bg-white rounded-lg p-3 shadow-sm">
        <div className="text-xl md:text-2xl font-bold text-primary-600 mb-1">
          {stat.value}
        </div>
        <div className="text-xs text-gray-600">{stat.label}</div>
      </div>
    ))}
  </div>
));
StatsGrid.displayName = 'StatsGrid';

// Optional: Enhanced version available via dynamic import for future upgrade
// import dynamic from 'next/dynamic'
// const EnhancedStatsGrid = dynamic(() => import('../EnhancedStatsGrid'), { ssr: false })

// Memoized quick access links
const QuickAccessLinks = memo(() => (
  <div className="flex flex-wrap gap-2 mb-8">
    <span className="text-sm text-gray-500 mr-2">Quick access:</span>
    {quickAccessServices.map((service) => (
      <Link
        key={service.name}
        href={service.href}
        className="text-sm bg-white border border-gray-200 rounded-full px-3 py-1 hover:border-primary-300 hover:bg-primary-50 transition-colors"
      >
        {service.name}
      </Link>
    ))}
  </div>
));
QuickAccessLinks.displayName = 'QuickAccessLinks';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    city: ''
  })

  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: '',
    service: '',
    city: ''
  })

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validate = () => {
    const errors: typeof formErrors = { name: '', phone: '', service: '', city: '' }
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    } else if (formData.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters'
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required'
    } else if (!/^[5-9][0-9]{9}$/.test(formData.phone.trim())) {
      errors.phone = 'Enter a valid 10-digit phone number starting with 5-9'
    }
    if (!formData.service) {
      errors.service = 'Please select a service'
    }
    if (!formData.city) {
      errors.city = 'Please select a city'
    }
    setFormErrors(errors)
    return Object.values(errors).every((v) => !v)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validate()) {
      return; // Stop here if validation fails
    }
    
    try {
      // Store in Supabase
      const { error } = await supabase.from('leads').insert([
        {
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          city: formData.city
        }
      ])
      if (error) throw error
      
      // Send email notification
      try {
        const emailResponse = await fetch('/api/send-lead-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            leadType: 'general',
            formData: {
              name: formData.name.trim(),
              phone: formData.phone.trim(),
              service: formData.service,
              city: formData.city
            },
            sourceUrl: window.location.href
          })
        });

        if (!emailResponse.ok) {
          console.error('Failed to send email notification');
        } else {
          console.log('Email notification sent successfully');
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Don't fail the form submission if email fails
      }
      
      setSubmitStatus('success')
      setFormData({ name: '', phone: '', service: '', city: '' })
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background-primary via-primary-50/30 to-secondary-50/30 pt-12 lg:pt-16">
      <div className="relative container-custom pb-16 lg:pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-2 mb-6">
              <StarRating />
              <span className="text-sm text-gray-600 font-medium">
                Rated 4.8/5 by 10,000+ families
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-display leading-tight">
              Your Trusted{' '}
              <span className="text-gradient">House Help</span>{' '}
              & Complete{' '}
              <span className="text-gradient">Home Care</span>
            </h1>

            {/* LCP Element - Optimized for fastest render */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Connect with verified, reliable professionals for all your home needs. 
              From housemaids and cooks to caretakers and maintenance - 
              <strong className="text-gray-900"> fair pricing with direct payments to helpers, quick booking, exceptional service.</strong>
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {trustedFeatures.map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-primary-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Updated CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full">
              {/* Primary CTA */}
              <Link
                href="/hire-helper"
                className="w-full bg-white text-primary-600 font-semibold rounded-xl shadow-xl hover:bg-gray-50 transition-all duration-300 inline-flex items-center justify-center gap-3 py-4 px-6 whitespace-nowrap flex-1"
              >
                {/* outline badge icon */}
                <CheckBadgeIcon className="h-6 w-6 flex-shrink-0" />
                <span className="leading-none">Book Verified Helper Now</span>
              </Link>

              {/* Secondary CTA */}
              <Link
                href="tel:+919972571005"
                className="w-full bg-transparent border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-3 py-4 px-6 whitespace-nowrap flex-1"
              >
                <PhoneIcon className="h-6 w-6 flex-shrink-0" />
                <span className="leading-none">Call: +91 9972571005</span>
              </Link>
            </div>

            <QuickAccessLinks />
            <StatsGrid />
          </div>

          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ChatBubbleLeftRightIcon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 font-display">Get Helper in 24-72 Hours</h3>
                <p className="text-xs text-gray-600">Fill form → We call you in 30 min</p>
              </div>

              <div className="flex justify-center items-center space-x-3 mb-4 p-2 bg-trust-50 rounded-lg">
                <div className="flex items-center space-x-1">
                  <CheckCircleIcon className="h-3 w-3 text-trust-500" />
                  <span className="text-xs text-trust-700 font-medium">Verified</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircleIcon className="h-3 w-3 text-trust-500" />
                  <span className="text-xs text-trust-700 font-medium">Direct Pay</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircleIcon className="h-3 w-3 text-trust-500" />
                  <span className="text-xs text-trust-700 font-medium">24hr Support</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  id="hero-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm"
                  placeholder="Your Name"
                  aria-label="Your Name"
                />
                {formErrors.name && <p className="text-xs text-red-500 mt-1">{formErrors.name}</p>}

                <input
                  id="hero-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm"
                  placeholder="Phone Number (+91 XXXXX XXXXX)"
                  aria-label="Phone Number"
                />
                {formErrors.phone && <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>}

                <select
                  id="hero-service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm text-gray-900"
                  aria-label="Select Service Type"
                >
                  <option value="">Select Service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                {formErrors.service && <p className="text-xs text-red-500 mt-1">{formErrors.service}</p>}

                <select
                  id="hero-city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm text-gray-900"
                  aria-label="Select City"
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                {formErrors.city && <p className="text-xs text-red-500 mt-1">{formErrors.city}</p>}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                >
                  Get Free Consultation Now
                </button>
                {submitStatus === 'success' && <p className="text-green-600 text-sm mt-2">Lead submitted successfully!</p>}
                {submitStatus === 'error' && <p className="text-red-600 text-sm mt-2">There was an error submitting your lead. Please try again.</p>}
              </form>

              <div className="mt-3 text-center">
                <div className="flex items-center justify-center space-x-1">
                  <CheckCircleIcon className="h-3 w-3 text-success-500" />
                  <span className="text-xs text-gray-600">30-min callback • 100% secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 