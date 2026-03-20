"use client"

import Link from 'next/link'
import { SparklesIcon, CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function NestCTA() {
    const benefits = [
        "Short- & Long-Term Stays",
        "Hygienic, Women-Only Environment",
        "Reliable Support While You Travel"
    ]

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#e11d48 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="container-custom relative z-10">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 md:p-12 lg:p-16 border border-rose-100 shadow-xl overflow-hidden relative">

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                        {/* Content Side */}
                        <div className="w-full lg:w-3/5 space-y-6">
                            <div className="inline-flex items-center space-x-2 bg-rose-100/50 backdrop-blur-sm px-4 py-2 rounded-full border border-rose-200">
                                <SparklesIcon className="w-5 h-5 text-rose-600" />
                                <span className="text-sm font-semibold text-rose-800">For Your Helpers</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-display leading-tight">
                                Leaving Town? <br className="hidden md:block" />
                                <span className="text-rose-600">Don't Leave Your Helper Stranded</span>
                            </h2>

                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                Vacations, work travel, or emergencies can make helper stays difficult to manage.
                                <strong> Nest by EzyHelpers</strong>, India's First Women-Only Hostel for Domestic Helpers, provides a reliable stay solution when you're away, eliminating last-minute stress and uncertainty.
                            </p>
                        </div>

                        {/* Benefits & CTA Side */}
                        <div className="w-full lg:w-2/5 flex flex-col justify-center bg-white/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white shadow-sm h-full">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-display border-b border-gray-200 pb-3">Why Nest Works:</h3>

                            <ul className="space-y-4 mb-8">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                                        <span className="text-gray-700 font-medium">{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/nest"
                                className="group w-full inline-flex items-center justify-center bg-rose-600 hover:bg-rose-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-rose-500/30 hover:-translate-y-1"
                            >
                                Explore Nest
                                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
