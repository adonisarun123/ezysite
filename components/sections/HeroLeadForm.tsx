'use client'

import { useState } from 'react'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { trackFormSubmitSuccess } from '@/lib/analytics'

const services = [
  'Live-in Maid', 'Full-time Maid', 'Part-time Maid', 'On-demand Helper',
  'Babysitter/Nanny', 'Elderly Care', 'Cook', 'Driver'
]

const cities = [
  'Bangalore', 'Mumbai', 'Delhi', 'Noida', 'Nagpur',
  'Lucknow', 'Kanpur', 'Meerut', 'Bareilly'
]

export default function HeroLeadForm() {
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
  const [submitting, setSubmitting] = useState(false)
  const [honeypot, setHoneypot] = useState('')

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
    if (submitting) return

    if (!validate()) {
      return; // Stop here if validation fails
    }

    setSubmitting(true)
    try {
      const { supabase } = await import('@/lib/supabaseClient')
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
            website: honeypot,
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

      trackFormSubmitSuccess('home_hero_lead_form', { serviceType: formData.service, city: formData.city })
      setSubmitStatus('success')
      setFormData({ name: '', phone: '', service: '', city: '' })
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" aria-busy={submitting}>
      {/* Honeypot field - hidden from real users, traps bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ position: 'absolute', left: '-9999px', width: 0, height: 0, opacity: 0 }}
      />
      <label htmlFor="hero-name" className="sr-only">Your Name</label>
      <input
        id="hero-name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        aria-invalid={!!formErrors.name}
        aria-describedby={formErrors.name ? 'hero-name-error' : undefined}
        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm"
        placeholder="Your Name"
        aria-label="Your Name"
      />
      {formErrors.name && <p id="hero-name-error" role="alert" className="text-xs text-red-500 mt-1">{formErrors.name}</p>}

      <label htmlFor="hero-phone" className="sr-only">Phone Number</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none select-none">+91</span>
        <input
          id="hero-phone"
          type="tel"
          name="phone"
          inputMode="tel"
          maxLength={10}
          pattern="[5-9][0-9]{9}"
          value={formData.phone}
          onChange={handleInputChange}
          aria-invalid={!!formErrors.phone}
          aria-describedby={formErrors.phone ? 'hero-phone-error' : 'hero-phone-hint'}
          className="w-full pl-12 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm"
          placeholder="9XXXXXXXXX"
          aria-label="Phone Number"
        />
      </div>
      <p id="hero-phone-hint" className="text-xs text-gray-500">10-digit mobile number, no country code needed</p>
      {formErrors.phone && <p id="hero-phone-error" role="alert" className="text-xs text-red-500 mt-1">{formErrors.phone}</p>}

      <label htmlFor="hero-service" className="sr-only">Select Service</label>
      <select
        id="hero-service"
        name="service"
        value={formData.service}
        onChange={handleInputChange}
        aria-invalid={!!formErrors.service}
        aria-describedby={formErrors.service ? 'hero-service-error' : undefined}
        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm text-gray-900"
        aria-label="Select Service Type"
      >
        <option value="">Select Service</option>
        {services.map((service) => (
          <option key={service} value={service}>{service}</option>
        ))}
      </select>
      {formErrors.service && <p id="hero-service-error" role="alert" className="text-xs text-red-500 mt-1">{formErrors.service}</p>}

      <label htmlFor="hero-city" className="sr-only">Select City</label>
      <select
        id="hero-city"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
        aria-invalid={!!formErrors.city}
        aria-describedby={formErrors.city ? 'hero-city-error' : undefined}
        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm text-gray-900"
        aria-label="Select City"
      >
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      {formErrors.city && <p id="hero-city-error" role="alert" className="text-xs text-red-500 mt-1">{formErrors.city}</p>}

      <button
        type="submit"
        disabled={submitting}
        aria-disabled={submitting}
        className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {submitting && <LoadingSpinner size="sm" />}
        {submitting ? 'Submitting...' : 'Get Free Consultation Now'}
      </button>
      {submitStatus === 'success' && <p role="status" className="text-green-600 text-sm mt-2">Lead submitted successfully!</p>}
      {submitStatus === 'error' && <p role="alert" className="text-red-600 text-sm mt-2">There was an error submitting your lead. Please try again.</p>}
    </form>
  )
}
