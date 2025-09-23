'use client';

import React, { useState, useEffect } from 'react';
import { XMarkIcon, LanguageIcon } from '@heroicons/react/24/outline';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी (Hindi)', flag: '🇮🇳' },
  { code: 'bn', name: 'বাংলা (Bengali)', flag: '🇧🇩' },
  { code: 'te', name: 'తెలుగు (Telugu)', flag: '🇮🇳' },
  { code: 'mr', name: 'मराठी (Marathi)', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ் (Tamil)', flag: '🇮🇳' },
  { code: 'gu', name: 'ગુજરાતી (Gujarati)', flag: '🇮🇳' },
  { code: 'kn', name: 'ಕನ್ನಡ (Kannada)', flag: '🇮🇳' },
  { code: 'ml', name: 'മലയാളം (Malayalam)', flag: '🇮🇳' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)', flag: '🇮🇳' },
  { code: 'or', name: 'ଓଡ଼ିଆ (Odia)', flag: '🇮🇳' },
  { code: 'as', name: 'অসমীয়া (Assamese)', flag: '🇮🇳' },
];

interface LanguageSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onLanguageSelect: (language: Language) => void;
}

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function WorkingLanguageSelector({ isOpen, onClose, onLanguageSelect }: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    // Load Google Translate script
    const loadGoogleTranslate = () => {
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.head.appendChild(script);
      }
    };

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: languages.map(lang => lang.code).join(','),
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    loadGoogleTranslate();

    // Initialize if already loaded
    if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }
  }, []);

  const handleLanguageSelect = async (language: Language) => {
    setSelectedLanguage(language);
    setIsTranslating(true);
    onLanguageSelect(language);
    
    // Close modal immediately
    onClose();

    try {
      if (language.code === 'en') {
        // Reset to English - reload page to clear translation
        window.location.reload();
        return;
      }

      // Method 1: Try using Google Translate widget
      const tryGoogleTranslateWidget = () => {
        const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (selectElement) {
          selectElement.value = language.code;
          selectElement.dispatchEvent(new Event('change'));
          return true;
        }
        return false;
      };

      // Method 2: Use Google Translate URL hash
      const useGoogleTranslateHash = () => {
        window.location.hash = `googtrans(en|${language.code})`;
        setTimeout(() => {
          window.location.reload();
        }, 100);
      };

      // Try widget first, fallback to hash method
      setTimeout(() => {
        if (!tryGoogleTranslateWidget()) {
          useGoogleTranslateHash();
        }
      }, 500);

      // Fallback after 2 seconds
      setTimeout(() => {
        const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        const isTranslated = document.body.classList.contains('translated-ltr') || 
                            document.body.classList.contains('translated-rtl') ||
                            (selectElement && selectElement.value === language.code);
        
        if (!isTranslated) {
          useGoogleTranslateHash();
        }
        setIsTranslating(false);
      }, 2000);

    } catch (error) {
      console.error('Translation error:', error);
      setIsTranslating(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <LanguageIcon className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Select Language</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <XMarkIcon className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          {/* Language List */}
          <div className="p-6">
            <p className="text-sm text-gray-600 mb-4">
              Choose your preferred language to view this page:
            </p>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language)}
                  disabled={isTranslating}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                    selectedLanguage.code === language.code
                      ? 'bg-blue-50 border-2 border-blue-200 text-blue-900'
                      : 'hover:bg-gray-50 border-2 border-transparent'
                  } ${isTranslating ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span className="text-2xl">{language.flag}</span>
                  <span className="font-medium text-left">{language.name}</span>
                  {selectedLanguage.code === language.code && (
                    <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}
                  {isTranslating && selectedLanguage.code === language.code && (
                    <div className="ml-auto">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <p className="text-xs text-gray-500 text-center">
              Translation powered by Google Translate
            </p>
            {isTranslating && (
              <p className="text-xs text-blue-600 text-center mt-2">
                Translating page...
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
    </>
  );
}