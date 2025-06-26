'use client'

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { trackFAQExpand } from '@/lib/analytics';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQWithTrackingProps {
  faqs: FAQ[];
  category: string;
  className?: string;
}

export default function FAQWithTracking({ faqs, category, className = '' }: FAQWithTrackingProps) {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (faqId: string, question: string, index: number) => {
    const isOpening = openFAQ !== faqId;
    setOpenFAQ(isOpening ? faqId : null);
    
    // Track FAQ expansion (only when opening, not closing)
    if (isOpening) {
      trackFAQExpand(question, category, index);
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {faqs.map((faq, index) => (
        <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-200"
            onClick={() => toggleFAQ(faq.id, faq.question, index)}
            aria-expanded={openFAQ === faq.id}
            aria-controls={`faq-answer-${faq.id}`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                {faq.question}
              </h3>
              <ChevronDownIcon 
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                  openFAQ === faq.id ? 'rotate-180' : ''
                }`}
              />
            </div>
          </button>
          
          <div
            id={`faq-answer-${faq.id}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 