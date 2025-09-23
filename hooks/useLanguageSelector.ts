'use client';

import { useState, useEffect } from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

export function useLanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [userDismissed, setUserDismissed] = useState(false);

  useEffect(() => {
    // Check multiple conditions to prevent unwanted reopening
    const pageKey = 'languageSelectorShown_for_helpers';
    const dismissedKey = 'languageSelectorDismissed_for_helpers';
    const sessionKey = 'languageSelectorSession_for_helpers';
    
    const hasShownBefore = localStorage.getItem(pageKey);
    const wasDismissed = localStorage.getItem(dismissedKey);
    const sessionShown = sessionStorage.getItem(sessionKey);
    
    // Debug logging (remove in production)
    console.log('Language Selector State Check:', {
      hasShownBefore: !!hasShownBefore,
      wasDismissed: !!wasDismissed,
      sessionShown: !!sessionShown,
      userDismissed,
    });
    
    // Only show if ALL conditions are false:
    // 1. Never shown before in localStorage
    // 2. Never dismissed by user
    // 3. Not shown in current session
    // 4. User hasn't dismissed in current session
    const shouldShow = !hasShownBefore && !wasDismissed && !sessionShown && !userDismissed;
    
    if (shouldShow) {
      console.log('Setting timer to show language selector in 3 seconds');
      const timer = setTimeout(() => {
        console.log('Showing language selector');
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem(pageKey, 'true');
        sessionStorage.setItem(sessionKey, 'true');
      }, 3000);

      return () => {
        console.log('Clearing language selector timer');
        clearTimeout(timer);
      };
    } else {
      console.log('Language selector will not be shown');
    }
  }, []); // Empty dependency array to run only once

  const openSelector = () => setIsOpen(true);
  
  const closeSelector = () => {
    console.log('Closing language selector');
    setIsOpen(false);
    // Don't mark as permanently dismissed - allow manual reopening
  };

  const handleLanguageSelect = (language: Language) => {
    localStorage.setItem('selectedLanguage', JSON.stringify(language));
    closeSelector();
  };

  return {
    isOpen,
    openSelector,
    closeSelector,
    handleLanguageSelect,
  };
}