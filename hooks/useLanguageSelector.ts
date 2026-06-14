'use client';

import { useState, useEffect } from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

// Safe storage access — Safari private mode / blocked storage throws
// SecurityError, which would otherwise propagate out of the effect/handler.
function safeGet(store: 'local' | 'session', key: string): string | null {
  try {
    if (typeof window === 'undefined') return null
    return (store === 'local' ? window.localStorage : window.sessionStorage).getItem(key)
  } catch { return null }
}
function safeSet(store: 'local' | 'session', key: string, value: string): void {
  try {
    if (typeof window === 'undefined') return
    ;(store === 'local' ? window.localStorage : window.sessionStorage).setItem(key, value)
  } catch { /* ignore */ }
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

    const hasShownBefore = safeGet('local', pageKey);
    const wasDismissed = safeGet('local', dismissedKey);
    const sessionShown = safeGet('session', sessionKey);

    // Only show if ALL conditions are false:
    // 1. Never shown before in localStorage
    // 2. Never dismissed by user
    // 3. Not shown in current session
    // 4. User hasn't dismissed in current session
    const shouldShow = !hasShownBefore && !wasDismissed && !sessionShown && !userDismissed;

    if (shouldShow) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
        safeSet('local', pageKey, 'true');
        safeSet('session', sessionKey, 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [userDismissed]); // re-evaluate if the user dismisses

  const openSelector = () => setIsOpen(true);

  const closeSelector = () => {
    setIsOpen(false);
    // Don't mark as permanently dismissed - allow manual reopening
  };

  const handleLanguageSelect = (language: Language) => {
    safeSet('local', 'selectedLanguage', JSON.stringify(language));
    closeSelector();
  };

  return {
    isOpen,
    openSelector,
    closeSelector,
    handleLanguageSelect,
  };
}