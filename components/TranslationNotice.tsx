'use client';

import React, { useState, useEffect } from 'react';
import { XMarkIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export default function TranslationNotice() {
  const [isVisible, setIsVisible] = useState(false);
  const [userDismissed, setUserDismissed] = useState(false);

  useEffect(() => {
    // Check if page is translated
    const checkTranslation = () => {
      // Don't show if user has dismissed it
      if (userDismissed) return;
      
      const body = document.body;
      const isTranslated = body.classList.contains('translated-ltr') || 
                          body.classList.contains('translated-rtl') ||
                          document.querySelector('.goog-te-combo')?.value !== '';
      
      if (isTranslated && !userDismissed) {
        setIsVisible(true);
      }
    };

    // Check periodically for translation
    const interval = setInterval(checkTranslation, 1000);
    
    return () => clearInterval(interval);
  }, [userDismissed]);

  const handleClose = () => {
    setIsVisible(false);
    setUserDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-lg max-w-md mx-4">
      <div className="flex items-start gap-3">
        <InformationCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-sm text-blue-800">
            This page has been translated using Google Translate. Some content may not be perfectly accurate.
          </p>
        </div>
        <button
          onClick={handleClose}
          className="p-1 hover:bg-blue-100 rounded-full transition-colors flex-shrink-0"
        >
          <XMarkIcon className="w-4 h-4 text-blue-600" />
        </button>
      </div>
    </div>
  );
}