'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    CheckCircleIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    InformationCircleIcon,
    ShieldCheckIcon,
    HomeIcon,
    HeartIcon
} from '@heroicons/react/24/outline'
import { CustomerRequirementFormData } from '@/types/email'

export default function CustomerRequirementsPage() {
    const [currentStep, setCurrentStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const [formData, setFormData] = useState<Partial<CustomerRequirementFormData>>({
        serviceType: 'maid',
        workType: 'full_time',
        workTiming: {
            startTime: '07:00',
            endTime: '19:00'
        },
        agePreference: 'no_preference',
        languages: ['no_preference'],
        usualSleepingTime: 'before_10pm',
        foodArrangement: 'same_as_family',
        gasStoveType: 'regular',
        houseType: 'single_story',
        policyAcks: {
            salaryBy7th: false,
            noAdvanceSalary: false,
            feedbackWithinOneMonth: false,
            infoAccurate: false,
            agreeToTerms: false,
            contactConsent: false
        }
    })

    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleInputChange = (field: string, value: any) => {
        if (field.includes('.')) {
            const [parent, child] = field.split('.')
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...(prev[parent as keyof typeof prev] as any),
                    [child]: value
                }
            }))
        } else {
            setFormData(prev => ({ ...prev, [field]: value }))
        }
        // Clear error
        if (errors[field]) {
            setErrors(prev => {
                const newErrors = { ...prev }
                delete newErrors[field]
                return newErrors
            })
        }
    }

    const handleCheckboxChange = (group: string, field: string, value: boolean) => {
        setFormData(prev => ({
            ...prev,
            [group]: {
                ...(prev[group as keyof typeof prev] as any),
                [field]: value
            }
        }))
    }

    const handleMultiSelect = (field: string, value: string) => {
        const current = (formData[field as keyof typeof formData] as string[]) || []
        let updated = []
        if (value === 'no_preference') {
            updated = ['no_preference']
        } else {
            updated = current.filter(v => v !== 'no_preference')
            if (current.includes(value)) {
                updated = updated.filter(v => v !== value)
            } else {
                updated = [...updated, value]
            }
            if (updated.length === 0) updated = ['no_preference']
        }
        setFormData(prev => ({ ...prev, [field]: updated }))
    }

    const validateStep = (step: number) => {
        const newErrors: Record<string, string> = {}
        if (step === 1) {
            if (!formData.customerName) newErrors.customerName = 'Name is required'
            if (!formData.mobileNumber) {
                newErrors.mobileNumber = 'Mobile number is required'
            } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
                newErrors.mobileNumber = 'Enter a valid 10-digit mobile number'
            }
            if (!formData.houseNumber) newErrors.houseNumber = 'House number is required'
            if (!formData.areaLocality) newErrors.areaLocality = 'Area/Locality is required'
            if (!formData.apartmentName) newErrors.apartmentName = 'Apartment name is required'
        }
        if (step === 2) {
            if (!formData.serviceType) newErrors.serviceType = 'Required'
            if (formData.serviceType === 'other' && !formData.serviceTypeOther) newErrors.serviceTypeOther = 'Please specify'
            if (!formData.workType) newErrors.workType = 'Required'
        }
        if (step === 7) {
            if (!formData.policyAcks?.salaryBy7th) newErrors['policyAcks.salaryBy7th'] = 'Required'
            if (!formData.policyAcks?.noAdvanceSalary) newErrors['policyAcks.noAdvanceSalary'] = 'Required'
            if (!formData.policyAcks?.feedbackWithinOneMonth) newErrors['policyAcks.feedbackWithinOneMonth'] = 'Required'
            if (!formData.policyAcks?.infoAccurate) newErrors['policyAcks.infoAccurate'] = 'Required'
            if (!formData.policyAcks?.agreeToTerms) newErrors['policyAcks.agreeToTerms'] = 'Required'
            if (!formData.policyAcks?.contactConsent) newErrors['policyAcks.contactConsent'] = 'Required'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => prev + 1)
            window.scrollTo(0, 0)
        }
    }

    const prevStep = () => {
        setCurrentStep(prev => prev - 1)
        window.scrollTo(0, 0)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validateStep(7)) return

        setIsSubmitting(true)
        try {
            const response = await fetch('/api/customer-requirements', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setIsSubmitted(true)
                window.scrollTo(0, 0)
            } else {
                alert('Something went wrong. Please try again.')
            }
        } catch (error) {
            console.error(error)
            alert('Submission failed. Please check your connection.')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center animate-in fade-in zoom-in duration-300">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircleIcon className="h-12 w-12 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Submitted!</h2>
                    <p className="text-gray-600 mb-8">
                        Thank you, {formData.customerName}. Our team will contact you shortly to match you with the most suitable helper.
                    </p>
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Back to Home
                        </Link>
                        <button
                            onClick={() => {
                                setIsSubmitted(false)
                                setCurrentStep(1)
                                setFormData({
                                    serviceType: 'maid',
                                    workType: 'full_time',
                                    workTiming: { startTime: '07:00', endTime: '19:00' },
                                    languages: ['no_preference'],
                                    policyAcks: { salaryBy7th: false, noAdvanceSalary: false, feedbackWithinOneMonth: false, infoAccurate: false, agreeToTerms: false, contactConsent: false }
                                })
                            }}
                            className="text-gray-500 font-medium hover:text-blue-600"
                        >
                            Submit another requirement
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-12">
            {/* Branded Header */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 py-10 text-white">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-8">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="bg-white p-1 rounded-lg">
                                <Image src="/ezyhelper_logo_new.png" alt="EzyHelpers" width={32} height={32} />
                            </div>
                            <span className="text-xl font-bold tracking-tight">EzyHelpers</span>
                        </Link>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Find the Right Helper for Your Home</h1>
                    <p className="text-blue-100 text-lg">Please share a few details so we can match you with the most suitable helper.</p>
                </div>
            </div>

            {/* Progress Dots */}
            <div className="max-w-3xl mx-auto px-4 -mt-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Step {currentStep} of 7</span>
                        <span className="text-sm text-gray-400">{Math.round((currentStep / 7) * 100)}% Complete</span>
                    </div>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5, 6, 7].map(s => (
                            <div
                                key={s}
                                className={`h-2 flex-1 rounded-full transition-all duration-300 ${s <= currentStep ? 'bg-blue-600' : 'bg-gray-100'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <main className="max-w-3xl mx-auto px-4 mt-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <form className="p-8">
                        {/* STEP 1: Basic Details */}
                        {currentStep === 1 && (
                            <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                                <div className="border-b border-gray-100 pb-4">
                                    <h2 className="text-2xl font-bold text-gray-900">Step 1: Your Basic Details</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Customer Name *</label>
                                        <input
                                            type="text"
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.customerName ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                                            placeholder="Your full name"
                                            value={formData.customerName || ''}
                                            onChange={(e) => handleInputChange('customerName', e.target.value)}
                                        />
                                        {errors.customerName && <p className="text-red-500 text-xs">{errors.customerName}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Mobile Number *</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">+91</span>
                                            <input
                                                type="tel"
                                                className={`w-full pl-12 pr-4 py-3 rounded-lg border ${errors.mobileNumber ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                                                placeholder="10-digit number"
                                                value={formData.mobileNumber || ''}
                                                onChange={(e) => handleInputChange('mobileNumber', e.target.value.replace(/\D/g, '').slice(0, 10))}
                                            />
                                        </div>
                                        <p className="text-xs text-gray-400">Used for updates and coordination</p>
                                        {errors.mobileNumber && <p className="text-red-500 text-xs">{errors.mobileNumber}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Door / House Number *</label>
                                        <input
                                            type="text"
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.houseNumber ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                                            placeholder="e.g. 101, Ground Floor"
                                            value={formData.houseNumber || ''}
                                            onChange={(e) => handleInputChange('houseNumber', e.target.value)}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Apartment / Society Name *</label>
                                        <input
                                            type="text"
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.apartmentName ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                                            placeholder="e.g. Prestige Shantiniketan"
                                            value={formData.apartmentName || ''}
                                            onChange={(e) => handleInputChange('apartmentName', e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Area & Locality *</label>
                                    <input
                                        type="text"
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.areaLocality ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                                        placeholder="e.g. Haralur, Sarjapur Road"
                                        value={formData.areaLocality || ''}
                                        onChange={(e) => handleInputChange('areaLocality', e.target.value)}
                                    />
                                </div>
                            </div>
                        )}

                        {/* STEP 2: Type of Help */}
                        {currentStep === 2 && (
                            <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                                <div className="border-b border-gray-100 pb-4">
                                    <h2 className="text-2xl font-bold text-gray-900">Step 2: Type of Help Required</h2>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm font-semibold text-gray-700">What service are you looking for? *</label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {['maid', 'cook', 'babysitter', 'elderly_care', 'other'].map(opt => (
                                            <button
                                                key={opt}
                                                type="button"
                                                onClick={() => handleInputChange('serviceType', opt)}
                                                className={`px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${formData.serviceType === opt ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-100 hover:border-gray-200 text-gray-600'}`}
                                            >
                                                {opt.replace('_', ' ').toUpperCase()}
                                            </button>
                                        ))}
                                    </div>
                                    {formData.serviceType === 'other' && (
                                        <input
                                            type="text"
                                            className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-200"
                                            placeholder="Please specify service"
                                            value={formData.serviceTypeOther || ''}
                                            onChange={(e) => handleInputChange('serviceTypeOther', e.target.value)}
                                        />
                                    )}
                                </div>

                                <div className="space-y-4 pt-4">
                                    <label className="text-sm font-semibold text-gray-700">Work Type *</label>
                                    <div className="flex flex-wrap gap-3">
                                        {['live_in', 'full_time', 'part_time'].map(opt => (
                                            <button
                                                key={opt}
                                                type="button"
                                                onClick={() => handleInputChange('workType', opt)}
                                                className={`flex-1 min-w-[120px] px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${formData.workType === opt ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-100 hover:border-gray-200 text-gray-600'}`}
                                            >
                                                {opt.replace('_', '-').toUpperCase()}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <label className="text-sm font-semibold text-gray-700">Expected Working Timings</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <span className="text-xs text-gray-500 uppercase font-bold">Start Time</span>
                                            <input
                                                type="time"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200"
                                                value={formData.workTiming?.startTime}
                                                onChange={(e) => handleInputChange('workTiming.startTime', e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-xs text-gray-500 uppercase font-bold">End Time</span>
                                            <input
                                                type="time"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200"
                                                value={formData.workTiming?.endTime}
                                                onChange={(e) => handleInputChange('workTiming.endTime', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-400">Example: 7:00 AM – 7:00 PM</p>
                                </div>
                            </div>
                        )}

                        {/* STEP 3: Preferences */}
                        {currentStep === 3 && (
                            <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                                <div className="border-b border-gray-100 pb-4">
                                    <h2 className="text-2xl font-bold text-gray-900">Step 3: Preferences (Optional)</h2>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm font-semibold text-gray-700">Preferred Age Range</label>
                                    <select
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                                        value={formData.agePreference}
                                        onChange={(e) => handleInputChange('agePreference', e.target.value)}
                                    >
                                        <option value="no_preference">No preference</option>
                                        <option value="below_25">Below 25</option>
                                        <option value="below_30">Below 30</option>
                                        <option value="30_45">30–45</option>
                                        <option value="above_45">Above 45</option>
                                    </select>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm font-semibold text-gray-700">Preferred Gender</label>
                                    <select
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                                        value={formData.preferredGender || 'no_preference'}
                                        onChange={(e) => handleInputChange('preferredGender', e.target.value)}
                                    >
                                        <option value="no_preference">No preference</option>
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                    </select>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm font-semibold text-gray-700">Language Preference (Multi-select)</label>
                                    <div className="flex flex-wrap gap-2">
                                        {(['kannada', 'hindi', 'tamil', 'telugu', 'english', 'no_preference'] as const).map(lang => (
                                            <button
                                                key={lang}
                                                type="button"
                                                onClick={() => handleMultiSelect('languages', lang)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${formData.languages?.includes(lang) ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'}`}
                                            >
                                                {lang.replace('_', ' ').toUpperCase()}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm font-semibold text-gray-700">Any house rules the helper should know?</label>
                                    <textarea
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 h-32 focus:ring-2 focus:ring-blue-500 outline-none"
                                        placeholder="Mention any specific rules (e.g. no smoking, specific clothes to wear, kitchen rules)..."
                                        value={formData.houseRules || ''}
                                        onChange={(e) => handleInputChange('houseRules', e.target.value)}
                                    />
                                </div>
                            </div>
                        )}

                        {/* STEP 4: Daily Work Requirements */}
                        {currentStep === 4 && (
                            <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
                                <div className="border-b border-gray-100 pb-4">
                                    <h2 className="text-2xl font-bold text-gray-900">Step 4: Daily Work Requirements</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-sm font-semibold text-gray-700">Does the helper need to wake up early?</label>
                                        <div className="flex gap-4">
                                            {['Yes', 'No'].map(opt => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => handleInputChange('wakeUpEarly', opt === 'Yes')}
                                                    className={`flex-1 py-3 rounded-xl border-2 font-bold ${formData.wakeUpEarly === (opt === 'Yes') ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-100 text-gray-400'}`}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-sm font-semibold text-gray-700">At what time should the helper wake up?</label>
                                        <input
                                            type="time"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                                            value={formData.wakeupTime || ''}
                                            onChange={(e) => handleInputChange('wakeupTime', e.target.value)}
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-sm font-semibold text-gray-700">Usual sleeping time at your home</label>
                                        <select
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200"
                                            value={formData.usualSleepingTime}
                                            onChange={(e) => handleInputChange('usualSleepingTime', e.target.value)}
                                        >
                                            <option value="before_10pm">Before 10 PM</option>
                                            <option value="10_11pm">10–11 PM</option>
                                            <option value="after_11pm">After 11 PM</option>
                                        </select>
                                    </div>

                                    <div className="space-y-4 col-span-full">
                                        <label className="text-sm font-semibold text-gray-700">Will rest time be provided to the helper?</label>
                                        <div className="flex gap-4 mb-3">
                                            {['Yes', 'No'].map(opt => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => handleInputChange('restTimeProvided', opt === 'Yes')}
                                                    className={`flex-1 py-3 rounded-xl border-2 font-bold ${formData.restTimeProvided === (opt === 'Yes') ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-100 text-gray-400'}`}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                        {formData.restTimeProvided && (
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200"
                                                placeholder="Mention rest timings (e.g. 2:00 PM - 4:00 PM)"
                                                value={formData.restTimeDetails || ''}
                                                onChange={(e) => handleInputChange('restTimeDetails', e.target.value)}
                                            />
                                        )}
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-sm font-semibold text-gray-700">Will you provide tea or snacks?</label>
                                        <div className="flex gap-4">
                                            {['Yes', 'No'].map(opt => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => handleInputChange('provideTeaSnacks', opt === 'Yes')}
                                                    className={`flex-1 py-3 rounded-xl border-2 font-bold ${formData.provideTeaSnacks === (opt === 'Yes') ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-100 text-gray-400'}`}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-sm font-semibold text-gray-700">Will you provide meals?</label>
                                        <div className="flex gap-4">
                                            {['Yes', 'No'].map(opt => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => handleInputChange('provideMeals', opt === 'Yes')}
                                                    className={`flex-1 py-3 rounded-xl border-2 font-bold ${formData.provideMeals === (opt === 'Yes') ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-100 text-gray-400'}`}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4 col-span-full">
                                        <label className="text-sm font-semibold text-gray-700 text-center block">Food arrangement for helper</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            {['same_as_family', 'separate_food'].map(opt => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => handleInputChange('foodArrangement', opt)}
                                                    className={`py-4 px-2 rounded-xl border-2 text-sm font-bold text-center ${formData.foodArrangement === opt ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-100 text-gray-400'}`}
                                                >
                                                    {opt.replace(/_/g, ' ').toUpperCase()}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4 col-span-full">
                                        <label className="text-sm font-semibold text-gray-700">Dietary Preference of Household</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                { id: 'vegetarian', label: 'Vegetarian Only' },
                                                { id: 'non_vegetarian', label: 'Vegetarian & Non-Vegetarian' }
                                            ].map(opt => (
                                                <button
                                                    key={opt.id}
                                                    type="button"
                                                    onClick={() => handleInputChange('dietaryPreference', opt.id)}
                                                    className={`py-4 px-2 rounded-xl border-2 text-xs font-bold text-center ${formData.dietaryPreference === opt.id ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-100 text-gray-400'}`}
                                                >
                                                    {opt.label.toUpperCase()}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4 col-span-full pt-4">
                                        <label className="text-sm font-semibold text-gray-700">Which personal care items will you provide?</label>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                            {['Soap', 'Shampoo', 'Toothpaste', 'Toothbrush', 'Sanitary pads', 'Cream', 'Oil', 'None'].map(item => (
                                                <label key={item} className={`flex items-center p-3 rounded-xl border-2 cursor-pointer transition-all ${formData.personalCareItems?.includes(item) ? 'border-blue-200 bg-blue-50 text-blue-700' : 'border-gray-50 text-gray-500 hover:border-gray-100'}`}>
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
                                                        checked={formData.personalCareItems?.includes(item) || false}
                                                        onChange={(e) => {
                                                            const currentItems = formData.personalCareItems || [];
                                                            if (e.target.checked) {
                                                                handleInputChange('personalCareItems', [...currentItems, item]);
                                                            } else {
                                                                handleInputChange('personalCareItems', currentItems.filter(i => i !== item));
                                                            }
                                                        }}
                                                    />
                                                    <span className="ml-2 text-xs font-bold">{item.toUpperCase()}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 5: Household Tasks */}
                        {currentStep === 5 && (
                            <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
                                <div className="border-b border-gray-100 pb-4">
                                    <h2 className="text-2xl font-bold text-gray-900">Step 5: Household Tasks</h2>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm font-semibold text-gray-700">Please select applicable tasks:</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { id: 'ironing', label: 'Ironing clothes' },
                                            { id: 'wateringPlants', label: 'Watering plants' },
                                            { id: 'washingMachine', label: 'Operating washing machine' },
                                            { id: 'microwave', label: 'Using microwave' },
                                            { id: 'mixerOvenAirFryer', label: 'Using mixer / oven / air fryer' },
                                        ].map(task => (
                                            <label key={task.id} className="flex items-center p-4 rounded-xl border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
                                                <input
                                                    type="checkbox"
                                                    className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
                                                    checked={!!formData.tasks?.[task.id as keyof typeof formData.tasks]}
                                                    onChange={(e) => handleCheckboxChange('tasks', task.id, e.target.checked)}
                                                />
                                                <span className="ml-3 text-gray-700 font-medium">{task.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                    <div className="space-y-4">
                                        <label className="text-sm font-semibold text-gray-700">Type of gas stove</label>
                                        <div className="flex gap-4">
                                            {['regular', 'special'].map(opt => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => handleInputChange('gasStoveType', opt)}
                                                    className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all ${formData.gasStoveType === opt ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-100 text-gray-400'}`}
                                                >
                                                    {opt.toUpperCase()}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-sm font-semibold text-gray-700">Need to drop children at bus stop?</label>
                                        <div className="flex gap-4">
                                            {['Yes', 'No'].map(opt => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => handleInputChange('dropChildrenBusStop', opt === 'Yes')}
                                                    className={`flex-1 py-3 rounded-xl border-2 font-bold ${formData.dropChildrenBusStop === (opt === 'Yes') ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-100 text-gray-400'}`}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 6: Household Information */}
                        {currentStep === 6 && (
                            <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
                                <div className="border-b border-gray-100 pb-4">
                                    <h2 className="text-2xl font-bold text-gray-900">Step 6: Your Household Information</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-sm font-semibold text-gray-700">Do you have pets at home?</label>
                                        <div className="flex gap-4">
                                            {['Yes', 'No'].map(opt => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => handleInputChange('hasPets', opt === 'Yes')}
                                                    className={`flex-1 py-3 rounded-xl border-2 font-bold ${formData.hasPets === (opt === 'Yes') ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-100 text-gray-400'}`}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-sm font-semibold text-gray-700">Any elderly members at home?</label>
                                        <div className="flex gap-4">
                                            {['Yes', 'No'].map(opt => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => handleInputChange('hasElderly', opt === 'Yes')}
                                                    className={`flex-1 py-3 rounded-xl border-2 font-bold ${formData.hasElderly === (opt === 'Yes') ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-100 text-gray-400'}`}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-sm font-semibold text-gray-700">House Type</label>
                                        <div className="flex gap-4">
                                            {['single_story', 'duplex'].map(opt => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => handleInputChange('houseType', opt)}
                                                    className={`flex-1 py-3 rounded-xl border-2 font-bold text-xs ${formData.houseType === opt ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-100 text-gray-400'}`}
                                                >
                                                    {opt.replace('_', ' ').toUpperCase()}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-sm font-semibold text-gray-700">Kitchen restrictions (Menstrual)?</label>
                                        <div className="flex gap-4">
                                            {['Yes', 'No'].map(opt => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => handleInputChange('kitchenRestrictionMenstrualPeriods', opt === 'Yes')}
                                                    className={`flex-1 py-3 rounded-xl border-2 font-bold ${formData.kitchenRestrictionMenstrualPeriods === (opt === 'Yes') ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-100 text-gray-400'}`}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4 col-span-full">
                                        <label className="text-sm font-semibold text-gray-700">BHK / House Size Details</label>
                                        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                                            {['1bhk', '2bhk', '3bhk', '4bhk', 'other'].map(opt => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => handleInputChange('bhkType', opt)}
                                                    className={`py-3 px-1 rounded-xl border-2 text-xs font-bold text-center transition-all ${formData.bhkType === opt ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-100 text-gray-400 hover:border-gray-200'}`}
                                                >
                                                    {opt === 'other' ? 'OTHERS' : opt.toUpperCase()}
                                                </button>
                                            ))}
                                        </div>
                                        {formData.bhkType === 'other' && (
                                            <div className="mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                                                    placeholder="Enter number of BHK (e.g. 5 BHK, 6 BHK)"
                                                    value={formData.bhkOther || ''}
                                                    onChange={(e) => handleInputChange('bhkOther', e.target.value)}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-4 col-span-full">
                                        <label className="text-sm font-semibold text-gray-700">Will you provide a separate room for the helper?</label>
                                        <div className="flex gap-4">
                                            {['Yes', 'No'].map(opt => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => handleInputChange('separateRoomProvided', opt === 'Yes')}
                                                    className={`flex-1 py-3 rounded-xl border-2 font-bold ${formData.separateRoomProvided === (opt === 'Yes') ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-100 text-gray-400'}`}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 7: Salary & Policy */}
                        {currentStep === 7 && (
                            <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                                <div className="border-b border-gray-100 pb-4">
                                    <h2 className="text-2xl font-bold text-gray-900">Step 7: Salary & Policy</h2>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm font-semibold text-gray-700">Okay granting leave in case of emergencies?</label>
                                    <div className="flex gap-4">
                                        {['Yes', 'No'].map(opt => (
                                            <button
                                                key={opt}
                                                type="button"
                                                onClick={() => handleInputChange('emergencyLeaveOk', opt === 'Yes')}
                                                className={`flex-1 py-3 rounded-xl border-2 font-bold ${formData.emergencyLeaveOk === (opt === 'Yes') ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-100 text-gray-400'}`}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4">
                                    <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Consent & Declaration</h3>

                                    {[
                                        { id: 'salaryBy7th', text: 'I agree to pay the salary on or before the 7th of every month as per the agreement.' },
                                        { id: 'noAdvanceSalary', text: 'I understand that advance salary payments are not permitted.' },
                                        { id: 'feedbackWithinOneMonth', text: 'I agree to provide feedback about the helper within one month of joining.' },
                                        { id: 'infoAccurate', text: 'I confirm that all the information provided above is true and accurate.' },
                                        { id: 'agreeToTerms', text: 'I agree to abide by the company’s service terms, replacement policy, and payment guidelines.' },
                                        { id: 'contactConsent', text: 'I consent to be contacted via call or WhatsApp for service-related communication.' },
                                    ].map(policy => (
                                        <label key={policy.id} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
                                            <input
                                                type="checkbox"
                                                className="mt-1 w-5 h-5 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
                                                checked={!!formData.policyAcks?.[policy.id as keyof typeof formData.policyAcks]}
                                                onChange={(e) => handleCheckboxChange('policyAcks', policy.id, e.target.checked)}
                                            />
                                            <span className="text-sm text-gray-600 font-medium">{policy.text}</span>
                                        </label>
                                    ))}
                                    {Object.keys(errors).some(k => k.startsWith('policyAcks')) && (
                                        <p className="text-red-500 text-xs font-bold">Please accept all terms to continue.</p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-8">
                            {currentStep > 1 ? (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex items-center space-x-2 text-gray-500 font-bold hover:text-gray-900 transition-colors"
                                >
                                    <ChevronLeftIcon className="h-5 w-5" />
                                    <span>PREVIOUS</span>
                                </button>
                            ) : <div />}

                            {currentStep < 7 ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center space-x-2"
                                >
                                    <span>NEXT STEP</span>
                                    <ChevronRightIcon className="h-5 w-5" />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    disabled={isSubmitting}
                                    onClick={handleSubmit}
                                    className={`bg-blue-600 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center space-x-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? (
                                        'SUBMITTING...'
                                    ) : (
                                        <>
                                            <span>SUBMIT MY REQUIREMENT</span>
                                            <CheckCircleIcon className="h-5 w-5" />
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                {/* Trust Footer */}
                <div className="mt-12 text-center text-gray-400 text-sm">
                    <p className="flex items-center justify-center space-x-4 mb-4">
                        <span className="flex items-center"><ShieldCheckIcon className="h-4 w-4 mr-1 text-blue-300" /> SECURE</span>
                        <span className="flex items-center"><HomeIcon className="h-4 w-4 mr-1 text-blue-300" /> TRUSTED</span>
                        <span className="flex items-center"><HeartIcon className="h-4 w-4 mr-1 text-blue-300" /> VERIFIED</span>
                    </p>
                    <p>© {new Date().getFullYear()} EzyHelpers Private Limited. All rights reserved.</p>
                </div>
            </main >
        </div >
    )
}
