'use client'

import React from 'react';
import { trackWhatsAppClick } from '@/lib/analytics';

const WhatsAppFloat: React.FC = () => {
  const phoneNumber = '+919972571005';
  const message = 'Hi! I would like to know more about your services.';
  
  const handleWhatsAppClick = () => {
    // Track WhatsApp click event
    trackWhatsAppClick(phoneNumber, message, 'floating_button');
    
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 cursor-pointer transform transition-all duration-300 hover:scale-110"
      onClick={handleWhatsAppClick}
    >
      <div className="bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M16 0C7.163 0 0 7.163 0 16c0 2.84.748 5.505 2.058 7.813L0 32l8.313-2.058C10.495 31.252 13.16 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.25 22.563c-.313.875-1.563 1.625-2.563 1.813-.688.125-1.563.188-2.563-.188-1.063-.375-2.438-.875-4.188-1.813-3.5-1.875-5.75-5.5-5.938-5.75-.188-.25-1.5-2-1.5-3.813s.938-2.688 1.313-3.063c.375-.375.813-.438 1.063-.438s.5 0 .75.013c.25.013.563-.125.875.688.313.813 1.063 2.625 1.188 2.813.125.188.188.438.063.688-.125.25-.188.375-.375.563-.188.188-.375.438-.563.625-.188.188-.375.375-.188.75.188.375.875 1.438 1.875 2.313 1.313 1.125 2.375 1.5 2.75 1.625.375.125.625.125.813-.063.188-.188.813-.938 1.063-1.25.25-.313.5-.25.813-.125.313.125 2 .938 2.313 1.125.313.188.563.25.625.438.063.188.063 1.063-.25 1.938z"
            fill="currentColor"
          />
        </svg>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat; 