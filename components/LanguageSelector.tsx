'use client';

import React, { useState } from 'react';
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

// Global function to trigger Google Translate
const triggerGoogleTranslate = (languageCode: string) => {
  // Method 1: Try to find and use the Google Translate combo
  const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
  if (selectElement) {
    selectElement.value = languageCode === 'en' ? '' : languageCode;
    selectElement.dispatchEvent(new Event('change'));
    return;
  }

  // Method 2: If combo not found, try to trigger via URL hash
  if (languageCode !== 'en') {
    const hash = `#googtrans(en|${languageCode})`;
    window.location.hash = hash;
    window.location.reload();
  } else {
    // Reset to English
    window.location.hash = '';
    window.location.reload();
  }
};

export default function LanguageSelector({ isOpen, onClose, onLanguageSelect }: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    onLanguageSelect(language);
    
    // Close modal first
    onClose();
    
    // Trigger Google Translate
    setTimeout(() => {
      triggerGoogleTranslate(language.code);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Modal Container with Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden"
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
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                    selectedLanguage.code === language.code
                      ? 'bg-blue-50 border-2 border-blue-200 text-blue-900'
                      : 'hover:bg-gray-50 border-2 border-transparent'
                  }`}
                >
                  <span className="text-2xl">{language.flag}</span>
                  <span className="font-medium text-left">{language.name}</span>
                  {selectedLanguage.code === language.code && (
                    <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
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
          </div>
        </div>
      </div>
      

    </>
  );
}