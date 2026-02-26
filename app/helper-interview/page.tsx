'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CheckCircleIcon, LanguageIcon, PaperAirplaneIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { translations, Language } from '@/lib/interviewTranslations'

export default function HelperInterviewPage() {
    const [lang, setLang] = useState<Language>('en')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [requestId, setRequestId] = useState('')
    const [error, setError] = useState('')

    const t = translations[lang]

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        const formData = new FormData(e.currentTarget)
        const data: any = {
            language: lang,
            workInterests: formData.getAll('workInterests'),
        }

        formData.forEach((value, key) => {
            if (key !== 'workInterests') {
                data[key] = value
            }
        })

        // Add required fields check if legalConsent is checked
        if (!data.legalConsent) {
            setError('Please provide legal consent to proceed.')
            setIsSubmitting(false)
            return
        }

        try {
            const response = await fetch('/api/helper-interview', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                const result = await response.json()
                setRequestId(result.requestId)
                setIsSubmitted(true)
                window.scrollTo({ top: 0, behavior: 'smooth' })
            } else {
                const err = await response.json()
                setError(err.error || 'Something went wrong. Please try again.')
            }
        } catch (err) {
            setError('Failed to submit. Please check your connection.')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-blue-100">
                    <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
                        <CheckCircleIcon className="h-10 w-10 text-green-600" aria-hidden="true" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Success!</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Thank you for filling out the questionnaire. Your information has been received.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4 mb-8">
                        <p className="text-sm text-blue-800 font-medium">Reference ID: <span className="font-bold">{requestId}</span></p>
                    </div>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="w-full inline-flex justify-center transition-all py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Submit Another
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-blue-100">
            {/* Premium Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/80">
                <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                            <Image src="/ezyhelper_logo_new.png" alt="Logo" width={28} height={28} className="brightness-0 invert" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
                            EzyHelpers
                        </span>
                    </div>

                    <div className="flex items-center space-x-2 bg-slate-100 p-1 rounded-xl">
                        {(['en', 'hi', 'kn', 'ta', 'te'] as Language[]).map((l) => (
                            <button
                                key={l}
                                onClick={() => setLang(l)}
                                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${lang === l
                                    ? 'bg-white text-blue-600 shadow-sm ring-1 ring-slate-200'
                                    : 'text-slate-500 hover:text-slate-800'
                                    }`}
                            >
                                {translations[l].label}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-200">
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 px-8 py-12 text-white text-center">
                        <h1 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight leading-tight">
                            {t.title}
                        </h1>
                        <p className="text-blue-100 text-lg sm:text-xl font-medium max-w-2xl mx-auto opacity-90">
                            Providing this information helps us match you with the best families.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 sm:p-12 space-y-12">
                        {error && (
                            <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 font-medium rounded-r-lg">
                                {error}
                            </div>
                        )}

                        {/* Section 1: Basic Info */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-base">1</span>
                                {t.sections.basic}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.fullName} *</label>
                                    <input type="text" name="fullName" required className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50 transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.age} *</label>
                                    <input type="text" name="age" required className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.maritalStatus} *</label>
                                    <select name="maritalStatus" required className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="">Select...</option>
                                        <option value="Married">Married</option>
                                        <option value="Unmarried">Unmarried</option>
                                        <option value="Widow">Widow</option>
                                        <option value="Widower">Widower</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.hasChildren} *</label>
                                    <input type="text" name="hasChildren" required className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.localReference} *</label>
                                    <input type="text" name="localReference" required className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.hasSmartphone} *</label>
                                    <select name="hasSmartphone" required className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.speakHindi} *</label>
                                    <select name="speakHindi" required className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.speakOtherLanguages} *</label>
                                    <input type="text" name="speakOtherLanguages" required className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.readWriteHindi} *</label>
                                    <select name="readWriteHindi" required className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Work Preferences */}
                        <section className="space-y-6 pt-6 border-t border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-base">2</span>
                                {t.sections.workPrefs}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 mb-3">{t.fields.workInterests}</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {['Cooking', 'Housekeeping', 'Babysitting', 'Elderly Care', 'All-rounder'].map(item => (
                                            <label key={item} className="flex items-center p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
                                                <input type="checkbox" name="workInterests" value={item} className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-blue-500" />
                                                <span className="ml-3 text-sm font-medium text-slate-700">{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.comfortableCooking}</label>
                                    <select name="comfortableCooking" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.cookType}</label>
                                    <select name="cookType" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Vegetarian">Vegetarian</option>
                                        <option value="Non-Vegetarian">Non-Vegetarian</option>
                                        <option value="Both">Both</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.prepareMilletDietary}</label>
                                    <select name="prepareMilletDietary" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.comfortableHousekeeping}</label>
                                    <select name="comfortableHousekeeping" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.willingCleanBathrooms}</label>
                                    <select name="willingCleanBathrooms" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.knowIroning}</label>
                                    <select name="knowIroning" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.operateWashingMachine}</label>
                                    <select name="operateWashingMachine" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.useAppliances}</label>
                                    <select name="useAppliances" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.comfortableKids}</label>
                                    <select name="comfortableKids" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.comfortableElderly}</label>
                                    <select name="comfortableElderly" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.dropChildrenBusStop}</label>
                                    <select name="dropChildrenBusStop" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.canDrive}</label>
                                    <input type="text" name="canDrive" placeholder="Car / Scooter / None" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50" />
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Habits */}
                        <section className="space-y-6 pt-6 border-t border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-base">3</span>
                                {t.sections.habits}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.wakeUpTime}</label>
                                    <input type="text" name="wakeUpTime" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.earlyStart}</label>
                                    <select name="earlyStart" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.comfortablePets}</label>
                                    <select name="comfortablePets" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.nonVegHome}</label>
                                    <select name="nonVegHome" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.phoneDuringWork}</label>
                                    <select name="phoneDuringWork" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.socialMediaWork}</label>
                                    <select name="socialMediaWork" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.manageMultipleTasks}</label>
                                    <select name="manageMultipleTasks" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.runBehindChildren}</label>
                                    <select name="runBehindChildren" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Health */}
                        <section className="space-y-6 pt-6 border-t border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-base">4</span>
                                {t.sections.health}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.regularMedicines}</label>
                                    <input type="text" name="regularMedicines" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.healthConditions}</label>
                                    <input type="text" name="healthConditions" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.monthlyLeave}</label>
                                    <select name="monthlyLeave" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.leavePreference}</label>
                                    <select name="leavePreference" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Monthly">Monthly</option>
                                        <option value="All Together">All Together</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.restTimeNeeded}</label>
                                    <select name="restTimeNeeded" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.menstrualCycleComfort}</label>
                                    <select name="menstrualCycleComfort" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Food */}
                        <section className="space-y-6 pt-6 border-t border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-base">5</span>
                                {t.sections.lifestyle}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.riceOrRoti}</label>
                                    <select name="riceOrRoti" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Rice">Rice</option>
                                        <option value="Roti">Roti</option>
                                        <option value="Both">Both</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.howManyRotis}</label>
                                    <select name="howManyRotis" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        {Array.from({ length: 15 }, (_, i) => i + 1).map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.vegNonVegPreference}</label>
                                    <select name="vegNonVegPreference" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.foodRestrictions}</label>
                                    <input type="text" name="foodRestrictions" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50" />
                                </div>
                            </div>
                        </section>

                        {/* Section 6: Training */}
                        <section className="space-y-6 pt-6 border-t border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-base">6</span>
                                {t.sections.training}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.formalTraining}</label>
                                    <input type="text" name="formalTraining" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.specificTrainingNeeded}</label>
                                    <input type="text" name="specificTrainingNeeded" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.openToTraining}</label>
                                    <select name="openToTraining" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                        </section>

                        {/* Section 7: Personal */}
                        <section className="space-y-6 pt-6 border-t border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-base">7</span>
                                {t.sections.personal}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.personalHabits}</label>
                                    <input type="text" name="personalHabits" placeholder="Smoke / Drink / Tobacco / None" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.fields.followHouseRules}</label>
                                    <select name="followHouseRules" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-slate-50">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                        </section>

                        {/* Consent */}
                        <section className="pt-8 border-t border-slate-100">
                            <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200">
                                <div className="flex items-start">
                                    <div className="flex items-center h-6">
                                        <input name="legalConsent" type="checkbox" required className="h-6 w-6 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer" />
                                    </div>
                                    <div className="ml-4 text-sm">
                                        <label className="font-bold text-slate-900 mb-1 block">{t.sections.consent}</label>
                                        <p className="text-slate-600 leading-relaxed italic">{t.fields.consentText}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full flex justify-center items-center py-5 px-8 border border-transparent rounded-2xl shadow-xl text-xl font-black text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:-translate-y-1 active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <ArrowPathIcon className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <PaperAirplaneIcon className="-ml-1 mr-3 h-6 w-6 text-white" />
                                        Submit Interview Details
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            <footer className="max-w-4xl mx-auto py-12 px-4 text-center text-slate-400 text-sm">
                <p>&copy; {new Date().getFullYear()} EzyHelpers Private Limited. All rights reserved.</p>
            </footer>
        </div>
    )
}
