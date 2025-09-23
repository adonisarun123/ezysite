'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

interface GoogleTranslateWidgetProps {
  targetLanguage?: string;
}

export default function GoogleTranslateWidget({ targetLanguage }: GoogleTranslateWidgetProps) {
  useEffect(() => {
    // Function to initialize Google Translate
    const initGoogleTranslate = () => {
      window.googleTranslateElementInit = () => {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,hi,bn,te,mr,ta,gu,kn,ml,pa,or,as',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            'google_translate_element'
          );
        }
      };
    };

    // Load Google Translate script
    if (!window.google?.translate) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      
      script.onload = () => {
        initGoogleTranslate();
      };
      
      document.head.appendChild(script);
      initGoogleTranslate();
    } else {
      initGoogleTranslate();
      window.googleTranslateElementInit();
    }
  }, []);

  useEffect(() => {
    if (targetLanguage) {
      // Wait for Google Translate to be ready
      const translateToLanguage = () => {
        const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (selectElement) {
          selectElement.value = targetLanguage;
          selectElement.dispatchEvent(new Event('change'));
        }
      };

      // Try multiple times with increasing delays
      setTimeout(translateToLanguage, 500);
      setTimeout(translateToLanguage, 1500);
      setTimeout(translateToLanguage, 3000);
    }
  }, [targetLanguage]);

  return <div id="google_translate_element" style={{ display: 'none' }}></div>;
}