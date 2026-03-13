'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { XMarkIcon, LanguageIcon } from '@heroicons/react/24/outline';

export default function LanguageSelectorPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        // console.log('Current pathname:', pathname);

        // Only run on helper-jobs pages
        if (!pathname?.startsWith('/helper-jobs')) {
            setIsVisible(false);
            return;
        }

        // Check if user has already dismissed the popup
        const isDismissed = localStorage.getItem('lang_popup_dismissed');
        // console.log('isDismissed:', isDismissed);

        if (isDismissed === 'true') {
            setIsVisible(false);
            return;
        }

        // Show popup after 5 seconds
        const timer = setTimeout(() => {
            // console.log('Setting popup visible');
            setIsVisible(true);
        }, 5000);

        return () => {
            clearTimeout(timer);
            setIsVisible(false);
        };
    }, [pathname]);

    if (!isVisible) return null;

    const isHindiPage = pathname.includes('/hin');

    const handleLanguageSelect = (lang: 'en' | 'hi') => {
        localStorage.setItem('lang_popup_dismissed', 'true');
        setIsVisible(false);

        if (lang === 'hi' && !isHindiPage) {
            // Redirect to Hindi version
            // Assuming /hin is at the end or as a segment
            const newPath = pathname.endsWith('/') ? `${pathname}hin` : `${pathname}/hin`;
            router.push(newPath);
        } else if (lang === 'en' && isHindiPage) {
            // Redirect to English version
            const newPath = pathname.replace('/hin', '');
            router.push(newPath || '/');
        }
    };

    const handleDismiss = () => {
        localStorage.setItem('lang_popup_dismissed', 'true');
        setIsVisible(false);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-pink-100 animate-in slide-in-from-bottom-8 duration-500">
                {/* Header */}
                <div className="relative h-32 bg-gradient-to-br from-pink-600 to-pink-800 flex items-center justify-center overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <LanguageIcon className="w-64 h-64 transform -translate-x-10 -translate-y-10" />
                    </div>
                    <div className="relative z-10 bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30">
                        <LanguageIcon className="w-10 h-10 text-white" />
                    </div>
                    <button
                        onClick={handleDismiss}
                        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
                    >
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-8 text-center">
                    {/* Content Section */}
                    <div className="space-y-6 mb-8">
                        <div>
                            <p className="text-gray-500 text-sm font-medium mb-1">Please select your preferred language.</p>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Choose Language</h2>
                        </div>

                        <div className="py-2">
                            <div className="h-px bg-gradient-to-r from-transparent via-pink-100 to-transparent w-full"></div>
                        </div>

                        <div>
                            <p className="noto-sans-devanagari-hindi text-pink-600 text-lg font-bold mb-1">कृपया अपनी पसंदीदा भाषा चुनें।</p>
                            <h2 className="noto-sans-devanagari-hindi text-xl md:text-2xl font-bold text-gray-900 uppercase">भाषा चुनें</h2>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={() => handleLanguageSelect('hi')}
                            className="group flex flex-col items-center justify-center p-6 bg-pink-50 hover:bg-pink-600 rounded-2xl border-2 border-pink-100 hover:border-pink-600 transition-all duration-300 transform hover:scale-105 active:scale-95"
                        >
                            <span className="noto-sans-devanagari-hindi text-2xl font-bold text-pink-700 group-hover:text-white mb-1">हिंदी</span>
                            <span className="text-xs font-bold text-pink-400 group-hover:text-white/80 uppercase tracking-widest">Hindi</span>
                        </button>

                        <button
                            onClick={() => handleLanguageSelect('en')}
                            className="group flex flex-col items-center justify-center p-6 bg-teal-50 hover:bg-teal-600 rounded-2xl border-2 border-teal-100 hover:border-teal-600 transition-all duration-300 transform hover:scale-105 active:scale-95"
                        >
                            <span className="text-2xl font-bold text-teal-700 group-hover:text-white mb-1">English</span>
                            <span className="noto-sans-devanagari-hindi text-xs font-bold text-teal-400 group-hover:text-white/80 uppercase tracking-widest">इंग्लिश</span>
                        </button>
                    </div>

                    <p className="mt-8 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        EzyHelpers • Safe & Trusted
                    </p>
                </div>
            </div>
        </div>
    );
}
