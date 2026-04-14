'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { supabase } from '@/lib/supabaseClient';

interface ReferralModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang: 'en' | 'hi';
}

const workTypes = {
    en: [
        { id: 'house_cleaning', label: 'House cleaning' },
        { id: 'cooking', label: 'Cooking' },
        { id: 'baby_care', label: 'Baby care' },
        { id: 'elder_care', label: 'Elder care' },
        { id: 'patient_care', label: 'Patient care' },
    ],
    hi: [
        { id: 'house_cleaning', label: 'घर की सफाई' },
        { id: 'cooking', label: 'खाना बनाना' },
        { id: 'baby_care', label: 'बच्चे की देखभाल' },
        { id: 'elder_care', label: 'बुजुर्ग की देखभाल' },
        { id: 'patient_care', label: 'मरीज की देखभाल' },
    ],
};

const content = {
    en: {
        title: 'Help someone find work',
        subtitle: 'Fill in the details below',
        yourDetails: 'YOUR DETAILS',
        nameLabel: 'Your name *',
        phoneLabel: 'Your phone *',
        workerDetails: 'WORKER DETAILS',
        workerNameLabel: 'Worker name *',
        workerPhoneLabel: 'Worker phone *',
        workTypeLabel: 'Type of work needed * (select one or more)',
        submitBtn: 'Submit details',
        footer: '*Terms and conditions apply',
        success: 'Referral submitted successfully!',
        error: 'Something went wrong. Please try again.',
        placeholderName: 'Your name',
        placeholderPhone: '+91 XXXXX XXXXX',
        placeholderWorkerName: 'Worker name',
    },
    hi: {
        title: 'किसी को काम दिलाने में मदद करें',
        subtitle: 'नीचे जानकारी भरें',
        yourDetails: 'आपकी जानकारी',
        nameLabel: 'आपका नाम *',
        phoneLabel: 'आपका फोन नंबर *',
        workerDetails: 'काम करने वाले की जानकारी',
        workerNameLabel: 'काम करने वाले का नाम *',
        workerPhoneLabel: 'काम करने वाले का फोन नंबर *',
        workTypeLabel: 'कैसा काम चाहिए * (एक या अधिक चुनें)',
        submitBtn: 'जानकारी भेजें और ₹500 कमाएं',
        footer: '*नियम और शर्तें लागू',
        success: 'जानकारी सफलतापूर्वक भेज दी गई है!',
        error: 'कुछ गलत हो गया। कृपया पुन: प्रयास करें।',
        placeholderName: 'आपका नाम',
        placeholderPhone: '+91 XXXXX XXXXX',
        placeholderWorkerName: 'काम करने वाले का नाम',
    },
};

export default function ReferralModal({ isOpen, onClose, lang }: ReferralModalProps) {
    const t = content[lang];
    const [formData, setFormData] = useState({
        userName: '',
        userPhone: '',
        workerName: '',
        workerPhone: '',
    });
    const [selectedWorkTypes, setSelectedWorkTypes] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const toggleWorkType = (id: string) => {
        setSelectedWorkTypes((prev) =>
            prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedWorkTypes.length === 0) return;

        setIsSubmitting(true);
        setStatus('idle');

        try {
            const { error } = await supabase.from('referral_leads').insert([
                {
                    referrer_name: formData.userName,
                    referrer_phone: formData.userPhone,
                    worker_name: formData.workerName,
                    worker_phone: formData.workerPhone,
                    work_types: selectedWorkTypes,
                    lang: lang,
                },
            ]);

            if (error) throw error;
            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setFormData({ userName: '', userPhone: '', workerName: '', workerPhone: '' });
                setSelectedWorkTypes([]);
            }, 2000);
        } catch (err) {
            console.error('Submission error:', err);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-white rounded-[2rem] shadow-2xl max-w-lg w-full max-h-[calc(100vh-16px)] overflow-y-auto border border-gray-100"
                    >
                        {/* Header */}
                        <div className="bg-blue-600 p-4 flex items-center justify-between sticky top-0 z-10 shadow-lg">
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={onClose}
                                    type="button"
                                    className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                                >
                                    <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6 stroke-2" />
                                </button>
                                <div>
                                    <h3 className="text-xl font-bold text-white leading-tight">
                                        {t.title}
                                    </h3>
                                    <p className="text-blue-100 text-xs font-semibold">
                                        {t.subtitle}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                type="button"
                                className="w-8 h-8 md:w-10 md:h-10 bg-black/10 rounded-full flex items-center justify-center text-white hover:bg-black/20 transition-all"
                            >
                                <XMarkIcon className="w-5 h-5 md:w-6 md:h-6 stroke-2" />
                            </button>
                        </div>

                        {/* Body */}
                        <form onSubmit={handleSubmit} className="p-5 md:p-6 space-y-5">
                            {/* Your Details */}
                            <div className="space-y-3">
                                <h4 className="text-[10px] font-bold text-blue-600 uppercase tracking-widest border-b border-gray-100 pb-1">
                                    {t.yourDetails}
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-gray-700">
                                            {t.nameLabel}
                                        </label>
                                        <input
                                            required
                                            name="userName"
                                            value={formData.userName}
                                            onChange={handleInputChange}
                                            placeholder={t.placeholderName}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-gray-700">
                                            {t.phoneLabel}
                                        </label>
                                        <input
                                            required
                                            type="tel"
                                            name="userPhone"
                                            value={formData.userPhone}
                                            onChange={handleInputChange}
                                            placeholder={t.placeholderPhone}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Worker Details */}
                            <div className="space-y-3">
                                <h4 className="text-[10px] font-bold text-blue-600 uppercase tracking-widest border-b border-gray-100 pb-1">
                                    {t.workerDetails}
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-gray-700">
                                            {t.workerNameLabel}
                                        </label>
                                        <input
                                            required
                                            name="workerName"
                                            value={formData.workerName}
                                            onChange={handleInputChange}
                                            placeholder={t.placeholderWorkerName}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-gray-700">
                                            {t.workerPhoneLabel}
                                        </label>
                                        <input
                                            required
                                            type="tel"
                                            name="workerPhone"
                                            value={formData.workerPhone}
                                            onChange={handleInputChange}
                                            placeholder={t.placeholderPhone}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Work Type */}
                            <div className="space-y-3">
                                <h4 className="text-xs font-bold text-gray-700">
                                    {t.workTypeLabel}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {workTypes[lang].map((type) => (
                                        <button
                                            key={type.id}
                                            type="button"
                                            onClick={() => toggleWorkType(type.id)}
                                            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                                                selectedWorkTypes.includes(type.id)
                                                    ? 'bg-blue-600 text-white border-blue-600'
                                                    : 'bg-transparent text-blue-600 border-blue-600'
                                            }`}
                                        >
                                            {type.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2 flex flex-col items-center gap-3">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-lg py-3.5 rounded-2xl transition-all transform active:scale-95 disabled:opacity-50 disabled:active:scale-100 shadow-lg shadow-blue-200"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>...</span>
                                        </div>
                                    ) : (
                                        t.submitBtn
                                    )}
                                </button>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter text-center">
                                    {t.footer}
                                </p>
                            </div>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <p className="text-green-600 text-center font-bold text-sm animate-pulse">
                                    {t.success}
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-600 text-center font-bold text-sm">
                                    {t.error}
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
