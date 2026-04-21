'use client';

import React, { useState } from 'react';
import { GiftIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import ReferralModal from './ReferralModal';

interface ReferEarnSectionProps {
    variant?: 'teal' | 'indigo' | 'violet' | 'sky' | 'emerald' | 'blue' | 'purple' | 'cyan' | 'orange' | 'rose' | 'amber';
    lang?: 'en' | 'hi';
    location?: string;
}

const colorClasses = {
    teal: {
        text: 'text-teal-500',
        bg: 'bg-teal-50',
        border: 'border-teal-100',
        buttonText: 'text-teal-700'
    },
    indigo: {
        text: 'text-indigo-500',
        bg: 'bg-indigo-50',
        border: 'border-indigo-100',
        buttonText: 'text-indigo-700'
    },
    violet: {
        text: 'text-violet-500',
        bg: 'bg-violet-50',
        border: 'border-violet-100',
        buttonText: 'text-violet-700'
    },
    sky: {
        text: 'text-sky-500',
        bg: 'bg-sky-50',
        border: 'border-sky-100',
        buttonText: 'text-sky-700'
    },
    emerald: {
        text: 'text-emerald-500',
        bg: 'bg-emerald-50',
        border: 'border-emerald-100',
        buttonText: 'text-emerald-700'
    },
    blue: {
        text: 'text-blue-500',
        bg: 'bg-blue-50',
        border: 'border-blue-100',
        buttonText: 'text-blue-700'
    },
    purple: {
        text: 'text-purple-500',
        bg: 'bg-purple-50',
        border: 'border-purple-100',
        buttonText: 'text-purple-700'
    },
    cyan: {
        text: 'text-cyan-500',
        bg: 'bg-cyan-50',
        border: 'border-cyan-100',
        buttonText: 'text-cyan-700'
    },
    orange: {
        text: 'text-orange-500',
        bg: 'bg-orange-50',
        border: 'border-orange-100',
        buttonText: 'text-orange-700'
    },
    rose: {
        text: 'text-rose-500',
        bg: 'bg-rose-50',
        border: 'border-rose-100',
        buttonText: 'text-rose-700'
    },
    amber: {
        text: 'text-amber-500',
        bg: 'bg-amber-50',
        border: 'border-amber-100',
        buttonText: 'text-amber-700'
    }
};

export default function ReferEarnSection({ variant = 'indigo', lang = 'en', location }: ReferEarnSectionProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { text, bg, border, buttonText } = colorClasses[variant] || colorClasses.indigo;

    return (
        <>
            <section className="section-padding bg-yellow-50 border-y border-yellow-100">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-yellow-200">
                        <div className="md:flex">
                            <div className="md:w-5/12 bg-gradient-to-br from-yellow-400 to-orange-500 p-8 flex flex-col items-center justify-center text-center text-white">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20">
                                    <GiftIcon className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-1 font-display leading-tight uppercase tracking-tight">Refer & Earn</h2>
                                <h3 className="text-4xl md:text-5xl font-black mb-1">₹500!</h3>
                                <p className="text-yellow-100 text-xs font-bold uppercase tracking-widest leading-none mb-6">*Terms and Conditions apply</p>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    type="button"
                                    className="w-full bg-white text-orange-600 font-black text-lg py-4 px-8 rounded-2xl hover:bg-yellow-50 hover:shadow-xl transition-all transform active:scale-95 shadow-lg relative z-10"
                                >
                                    {lang === 'hi' ? 'जानकारी भेजें और ₹500 कमाएं' : 'Submit a Referral'}
                                </button>
                            </div>
                            <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                                <p className="text-lg md:text-xl text-gray-800 font-bold mb-6 text-wrap">
                                    {lang === 'hi'
                                        ? `क्या आपकी कोई बहन, दोस्त या पड़ोसी ${location ? `${location} से ` : ''}बैंगलोर में काम की तलाश में है?`
                                        : `Do you have a sister, friend, or neighbour ${location ? `from ${location} ` : ''}looking for work in Bangalore?`}
                                </p>
                                <div className="space-y-4 mb-8">
                                    {(lang === 'hi'
                                        ? [
                                            'सफलतापूर्वक उन्हें वर्क पर लगवाएं',
                                            'वे 1 महीने का काम पूरा करते हैं',
                                            'आप ₹500 कमाते हैं*'
                                        ]
                                        : [
                                            'Refer them to work with EzyHelpers',
                                            'They complete 1 month of work',
                                            'You earn ₹500*'
                                        ]
                                    ).map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircleIcon className={`w-5 h-5 ${text} flex-shrink-0 mt-0.5`} />
                                            <span className="text-gray-600 font-bold text-sm md:text-base leading-none">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className={`${bg} ${buttonText} font-black text-xs md:text-sm py-4 px-6 rounded-xl text-center border ${border} uppercase tracking-tight flex items-center justify-center`}>
                                    {lang === 'hi' ? 'कोई सीमा नहीं - रेफ़र करते रहें और कमाते रहें!' : 'No limit – keep referring and keep earning!'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ReferralModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                lang={lang}
            />
        </>
    );
}
