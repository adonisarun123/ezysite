// Utility functions for language selector state management

export const clearLanguageSelectorState = () => {
  // Clear all language selector related storage
  localStorage.removeItem('languageSelectorShown_for_helpers');
  localStorage.removeItem('languageSelectorDismissed_for_helpers');
  sessionStorage.removeItem('languageSelectorSession_for_helpers');
  sessionStorage.removeItem('languageSelectorDismissed_for_helpers');
  localStorage.removeItem('selectedLanguage');
};

export const getLanguageSelectorState = () => {
  return {
    hasShown: localStorage.getItem('languageSelectorShown_for_helpers'),
    wasDismissed: localStorage.getItem('languageSelectorDismissed_for_helpers'),
    sessionShown: sessionStorage.getItem('languageSelectorSession_for_helpers'),
    sessionDismissed: sessionStorage.getItem('languageSelectorDismissed_for_helpers'),
    selectedLanguage: localStorage.getItem('selectedLanguage'),
  };
};

// Call this function in browser console to reset for testing:
// clearLanguageSelectorState()
if (typeof window !== 'undefined') {
  (window as any).clearLanguageSelectorState = clearLanguageSelectorState;
  (window as any).getLanguageSelectorState = getLanguageSelectorState;
}