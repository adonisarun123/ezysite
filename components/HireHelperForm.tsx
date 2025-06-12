'use client'

import { useState } from 'react'
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

interface FormData {
  name: string
  phone: string
  email: string
  city: string
  serviceType: string
  duration: string
  startDate: string
  specificRequirements: string
  experience: string
  budget: string
  languages: string[]
  additionalServices: string[]
  familySize: string
  preferredGender: string
}

const services = [
  { value: 'live-in', label: 'Live-in Maid', description: '24/7 support at home' },
  { value: 'full-time', label: 'Full-time Maid', description: 'Daily 8-10 hours' },
  { value: 'part-time', label: 'Part-time Maid', description: 'Few hours daily' },
  { value: 'on-demand', label: 'On-demand Helper', description: 'As needed basis' },
  { value: 'babysitter', label: 'Babysitter/Nanny', description: 'Child care specialist' },
  { value: 'elderly-care', label: 'Elderly Care', description: 'Senior care assistant' },
  { value: 'cook', label: 'Cook', description: 'Meal preparation' },
  { value: 'driver', label: 'Driver', description: 'Transportation service' }
]

const cities = [
  'Bangalore', 'Mumbai', 'Delhi', 'Noida', 'Nagpur', 
  'Lucknow', 'Kanpur', 'Meerut', 'Bareilly'
]

const languages = ['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Bengali', 'Marathi']

export default function HireHelperForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    city: '',
    serviceType: '',
    duration: '',
    startDate: '',
    specificRequirements: '',
    experience: '',
    budget: '',
    languages: [],
    additionalServices: [],
    familySize: '',
    preferredGender: ''
  })

  const handleInputChange = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleLanguageToggle = (language: string) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(l => l !== language)
        : [...prev.languages, language]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you within 30 minutes to discuss your requirements.')
  }

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((stepNum) => (
            <div key={stepNum} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= stepNum ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {step > stepNum ? <CheckCircleIcon className="w-5 h-5" /> : stepNum}
              </div>
              {stepNum < 3 && (
                <div className={`w-full h-1 mx-4 ${
                  step > stepNum ? 'bg-primary-500' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-sm text-gray-600">
          Step {step} of 3: {
            step === 1 ? 'Personal Information' :
            step === 2 ? 'Service Requirements' :
            'Additional Details'
          }
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-display">
              Tell Us About Yourself
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  placeholder="+91 9972571005"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <select
                  required
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  <option value="">Select your city</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary flex items-center"
              >
                Next Step <ChevronRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Service Requirements */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-display">
              Service Requirements
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                What type of service do you need? *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map(service => (
                  <div
                    key={service.value}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      formData.serviceType === service.value
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleInputChange('serviceType', service.value)}
                  >
                    <div className="font-medium text-gray-900">{service.label}</div>
                    <div className="text-sm text-gray-600">{service.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  When do you need to start? *
                </label>
                <input
                  type="date"
                  required
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Family Size
                </label>
                <select
                  value={formData.familySize}
                  onChange={(e) => handleInputChange('familySize', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  <option value="">Select family size</option>
                  <option value="1-2">1-2 members</option>
                  <option value="3-4">3-4 members</option>
                  <option value="5-6">5-6 members</option>
                  <option value="7+">7+ members</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specific Requirements
              </label>
              <textarea
                value={formData.specificRequirements}
                onChange={(e) => handleInputChange('specificRequirements', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                placeholder="Tell us about any specific needs, preferences, or requirements..."
              />
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="btn-outline"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary flex items-center"
              >
                Next Step <ChevronRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Additional Details */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-display">
              Additional Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Gender
                </label>
                <select
                  value={formData.preferredGender}
                  onChange={(e) => handleInputChange('preferredGender', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  <option value="">No preference</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  <option value="">No preference</option>
                  <option value="entry">Entry level (0-1 years)</option>
                  <option value="experienced">Experienced (2-5 years)</option>
                  <option value="expert">Expert (5+ years)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Preferred Languages
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {languages.map(language => (
                  <label key={language} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.languages.includes(language)}
                      onChange={() => handleLanguageToggle(language)}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{language}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Budget Range
              </label>
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              >
                <option value="">Select budget range</option>
                <option value="under-10k">Under ₹10,000</option>
                <option value="10k-15k">₹10,000 - ₹15,000</option>
                <option value="15k-20k">₹15,000 - ₹20,000</option>
                <option value="20k-25k">₹20,000 - ₹25,000</option>
                <option value="25k-30k">₹25,000 - ₹30,000</option>
                <option value="above-30k">Above ₹30,000</option>
              </select>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="btn-outline"
              >
                Previous
              </button>
              <button
                type="submit"
                className="btn-primary"
              >
                Submit Request
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
} 