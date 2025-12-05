'use client'

import React, { useState } from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { sendWebhook } from '@/lib/webhookService'
import { 
  UserIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon, 
  CalendarIcon,
  CurrencyRupeeIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

interface FormData {
  name: string
  phone: string
  email: string
  city: string
  service: string
  duration: string
  startDate: string
  specificRequirements: string
  experience: string
  budget: string
  languages: string
  additionalServices: string
  familySize: string
  preferredGender: string
}

interface FormErrors {
  [key: string]: string
}

const serviceOptions = [
  { value: 'cook', label: 'Cook' },
  { value: 'full-time', label: 'Full-Time Maid' },
  { value: 'live-in', label: 'Live-In Maid' },
  { value: 'part-time', label: 'Part-Time Maid' },
  { value: 'babysitter', label: 'Babysitter/Nanny' },
  { value: 'on-demand', label: 'On-Demand Helper' },
  { value: 'driver', label: 'Driver' }
]

const durationOptions = [
  { value: 'temporary', label: 'Temporary (1-6 months)' },
  { value: 'permanent', label: 'Permanent (6+ months)' },
  { value: 'trial', label: 'Trial Period (1-4 weeks)' },
  { value: 'flexible', label: 'Flexible/As Needed' }
]

const experienceOptions = [
  { value: 'fresher', label: 'Fresher (0-1 years)' },
  { value: 'experienced', label: 'Experienced (1-3 years)' },
  { value: 'highly-experienced', label: 'Highly Experienced (3+ years)' },
  { value: 'any', label: 'Any Experience Level' }
]

const genderOptions = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'no-preference', label: 'No Preference' }
]

const languageOptions = [
  { value: 'hindi', label: 'Hindi' },
  { value: 'english', label: 'English' },
  { value: 'bengali', label: 'Bengali' },
  { value: 'tamil', label: 'Tamil' },
  { value: 'telugu', label: 'Telugu' },
  { value: 'marathi', label: 'Marathi' },
  { value: 'gujarati', label: 'Gujarati' },
  { value: 'kannada', label: 'Kannada' },
  { value: 'punjabi', label: 'Punjabi' },
  { value: 'malayalam', label: 'Malayalam' }
]

const additionalServicesOptions = [
  { value: 'cooking', label: 'Cooking' },
  { value: 'cleaning', label: 'Deep Cleaning' },
  { value: 'laundry', label: 'Laundry & Ironing' },
  { value: 'eldercare', label: 'Elderly Care' },
  { value: 'petcare', label: 'Pet Care' },
  { value: 'tutoring', label: 'Child Tutoring' },
  { value: 'gardening', label: 'Gardening' },
  { value: 'grocery', label: 'Grocery Shopping' }
]

const cities = [
  'Bangalore', 'Delhi', 'Mumbai', 'Lucknow', 'Kanpur', 'Bareilly', 'Meerut', 'Nagpur', 'Noida', 'Gurgaon'
]

export default function ComprehensiveLeadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: '',
    duration: '',
    startDate: '',
    specificRequirements: '',
    experience: '',
    budget: '',
    languages: '',
    additionalServices: '',
    familySize: '',
    preferredGender: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Required field validations
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.city) newErrors.city = 'City is required'
    if (!formData.service) newErrors.service = 'Service type is required'
    if (!formData.duration) newErrors.duration = 'Duration is required'
    if (!formData.startDate) newErrors.startDate = 'Start date is required'
    if (!formData.experience) newErrors.experience = 'Experience preference is required'
    if (!formData.budget.trim()) newErrors.budget = 'Budget is required'
    if (!formData.familySize.trim()) newErrors.familySize = 'Family size is required'
    if (!formData.preferredGender) newErrors.preferredGender = 'Gender preference is required'

    // Validate start date is not in the past
    if (formData.startDate) {
      const startDate = new Date(formData.startDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (startDate < today) {
        newErrors.startDate = 'Start date cannot be in the past'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleCheckboxChange = (field: 'languages' | 'additionalServices', value: string) => {
    const currentValues = formData[field] ? formData[field].split(',') : []
    const newValues = currentValues.includes(value) 
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value]
    
    setFormData(prev => ({ ...prev, [field]: newValues.join(',') }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-lead-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          leadType: 'general',
          formData: {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            city: formData.city,
            service: `${formData.service} - Comprehensive Lead`,
            sourceUrl: window.location.href,
            additionalDetails: {
              duration: formData.duration,
              startDate: formData.startDate,
              specificRequirements: formData.specificRequirements,
              experience: formData.experience,
              budget: formData.budget,
              languages: formData.languages,
              additionalServices: formData.additionalServices,
              familySize: formData.familySize,
              preferredGender: formData.preferredGender,
              leadType: 'Comprehensive Service Request'
            }
          }
        })
      })

      if (response.ok) {
        // Send webhook
        sendWebhook('comprehensive_lead', formData).catch(console.error)
        
        setIsSubmitted(true)
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          city: '',
          service: '',
          duration: '',
          startDate: '',
          specificRequirements: '',
          experience: '',
          budget: '',
          languages: '',
          additionalServices: '',
          familySize: '',
          preferredGender: ''
        })
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ submit: 'Failed to submit form. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">
              Your service request has been submitted successfully. Our team will contact you within 2 hours to discuss your requirements.
            </p>
          </div>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="bg-primary-600 hover:bg-primary-700"
          >
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader className="text-center pb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Complete Service Request Form
        </h2>
        <p className="text-gray-600">
          Tell us exactly what you need and we'll find the perfect helper for your family
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {errors.submit && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-600 text-sm">{errors.submit}</p>
            </div>
          )}

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className={errors.name ? 'border-red-500' : ''}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className={errors.phone ? 'border-red-500' : ''}
                placeholder="10-digit mobile number"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <EnvelopeIcon className="h-4 w-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'border-red-500' : ''}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="city" className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4" />
                City *
              </Label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className={`flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 ${errors.city ? 'border-red-500' : ''}`}
              >
                <option value="">Select your city</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>
          </div>

          {/* Service Requirements */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Service Requirements</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="service">Service Type *</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={`flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 ${errors.service ? 'border-red-500' : ''}`}
                >
                  <option value="">Select service type</option>
                  {serviceOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration" className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4" />
                  Duration *
                </Label>
                <select
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className={`flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 ${errors.duration ? 'border-red-500' : ''}`}
                >
                  <option value="">Select duration</option>
                  {durationOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                {errors.duration && <p className="text-red-500 text-sm">{errors.duration}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="startDate" className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  Preferred Start Date *
                </Label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={errors.startDate ? 'border-red-500' : ''}
                />
                {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="flex items-center gap-2">
                  <CurrencyRupeeIcon className="h-4 w-4" />
                  Monthly Budget (₹) *
                </Label>
                <Input
                  id="budget"
                  name="budget"
                  type="text"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className={errors.budget ? 'border-red-500' : ''}
                  placeholder="e.g., 15000-20000"
                />
                {errors.budget && <p className="text-red-500 text-sm">{errors.budget}</p>}
              </div>
            </div>
          </div>

          {/* Helper Preferences */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Helper Preferences</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="experience">Experience Level *</Label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className={`flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 ${errors.experience ? 'border-red-500' : ''}`}
                >
                  <option value="">Select experience level</option>
                  {experienceOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredGender">Gender Preference *</Label>
                <select
                  id="preferredGender"
                  name="preferredGender"
                  value={formData.preferredGender}
                  onChange={handleInputChange}
                  className={`flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 ${errors.preferredGender ? 'border-red-500' : ''}`}
                >
                  <option value="">Select gender preference</option>
                  {genderOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                {errors.preferredGender && <p className="text-red-500 text-sm">{errors.preferredGender}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="familySize" className="flex items-center gap-2">
                  <UserGroupIcon className="h-4 w-4" />
                  Family Size *
                </Label>
                <Input
                  id="familySize"
                  name="familySize"
                  type="text"
                  value={formData.familySize}
                  onChange={handleInputChange}
                  className={errors.familySize ? 'border-red-500' : ''}
                  placeholder="e.g., 4 members (2 adults, 2 children)"
                />
                {errors.familySize && <p className="text-red-500 text-sm">{errors.familySize}</p>}
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                <ChatBubbleLeftRightIcon className="h-4 w-4" />
                Preferred Languages (Select all that apply)
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {languageOptions.map(option => (
                  <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.languages.split(',').includes(option.value)}
                      onChange={() => handleCheckboxChange('languages', option.value)}
                      className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                    />
                    <span className="text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Services */}
            <div className="space-y-3">
              <Label>Additional Services (Optional)</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {additionalServicesOptions.map(option => (
                  <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.additionalServices.split(',').includes(option.value)}
                      onChange={() => handleCheckboxChange('additionalServices', option.value)}
                      className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                    />
                    <span className="text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Specific Requirements */}
          <div className="space-y-2">
            <Label htmlFor="specificRequirements">Specific Requirements (Optional)</Label>
            <textarea
              id="specificRequirements"
              name="specificRequirements"
              value={formData.specificRequirements}
              onChange={handleInputChange}
              rows={4}
              className="flex w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
              placeholder="Tell us about any specific needs, working hours, special skills required, dietary restrictions, etc."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 text-lg font-semibold"
            >
              {isSubmitting ? 'Submitting Request...' : 'Submit Service Request'}
            </Button>
          </div>

          <p className="text-sm text-gray-500 text-center">
            By submitting this form, you agree to our terms of service and privacy policy. 
            Our team will contact you within 2 hours to discuss your requirements.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
