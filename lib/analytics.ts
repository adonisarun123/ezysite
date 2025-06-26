// Google Analytics Event Tracking Utility for EzyHelpers
// This file contains all the custom event tracking functions for user interactions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Event Categories
export const GA_EVENTS = {
  // Form Events
  FORM_START: 'form_start',
  FORM_SUBMIT: 'form_submit',
  FORM_COMPLETE: 'form_complete',
  FORM_ABANDON: 'form_abandon',
  
  // CTA Events
  CTA_CLICK: 'cta_click',
  BUTTON_CLICK: 'button_click',
  
  // Communication Events
  PHONE_CLICK: 'phone_click',
  EMAIL_CLICK: 'email_click',
  WHATSAPP_CLICK: 'whatsapp_click',
  CHAT_START: 'chat_start',
  
  // Navigation Events
  PAGE_VIEW: 'page_view',
  EXTERNAL_LINK: 'external_link',
  INTERNAL_LINK: 'internal_link',
  
  // Service Events
  SERVICE_VIEW: 'service_view',
  SERVICE_SELECT: 'service_select',
  BOOKING_START: 'booking_start',
  BOOKING_COMPLETE: 'booking_complete',
  
  // Engagement Events
  FAQ_EXPAND: 'faq_expand',
  TESTIMONIAL_VIEW: 'testimonial_view',
  VIDEO_PLAY: 'video_play',
  SCROLL_DEPTH: 'scroll_depth',
  
  // User Journey Events
  STEP_COMPLETE: 'step_complete',
  CITY_SELECT: 'city_select',
  REQUIREMENT_ADD: 'requirement_add',
  
  // Error Events
  FORM_ERROR: 'form_error',
  PAGE_ERROR: 'page_error'
} as const;

// Event Parameters Interface
interface EventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
  user_id?: string;
  session_id?: string;
  page_title?: string;
  page_location?: string;
}

// Main tracking function
export const trackEvent = (eventName: string, parameters: EventParams = {}) => {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      // Enhanced parameters with default values
      const enhancedParams = {
        event_category: parameters.event_category || 'general',
        event_label: parameters.event_label || '',
        value: parameters.value || 0,
        page_title: parameters.page_title || document.title,
        page_location: parameters.page_location || window.location.href,
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
        ...parameters.custom_parameters,
      };

      window.gtag('event', eventName, enhancedParams);
      
      // Console log for development (remove in production)
      if (process.env.NODE_ENV === 'development') {
        console.log('GA Event Tracked:', eventName, enhancedParams);
      }
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

// Specific tracking functions for common interactions

// Form Tracking
export const trackFormStart = (formName: string, formLocation: string) => {
  trackEvent(GA_EVENTS.FORM_START, {
    event_category: 'form_interaction',
    event_label: formName,
    custom_parameters: {
      form_name: formName,
      form_location: formLocation,
      form_step: 1
    }
  });
};

export const trackFormSubmit = (formName: string, formData: Record<string, any> = {}) => {
  trackEvent(GA_EVENTS.FORM_SUBMIT, {
    event_category: 'form_interaction',
    event_label: formName,
    custom_parameters: {
      form_name: formName,
      service_type: formData.serviceType || '',
      city: formData.city || '',
      phone_provided: !!formData.phone,
      email_provided: !!formData.email,
      requirements_length: formData.specificRequirements?.length || 0
    }
  });
};

export const trackFormComplete = (formName: string, leadId?: string) => {
  trackEvent(GA_EVENTS.FORM_COMPLETE, {
    event_category: 'conversion',
    event_label: formName,
    value: 1,
    custom_parameters: {
      form_name: formName,
      lead_id: leadId,
      conversion_type: 'lead_generation'
    }
  });
};

export const trackFormError = (formName: string, errorType: string, errorMessage: string) => {
  trackEvent(GA_EVENTS.FORM_ERROR, {
    event_category: 'form_interaction',
    event_label: `${formName}_error`,
    custom_parameters: {
      form_name: formName,
      error_type: errorType,
      error_message: errorMessage
    }
  });
};

// CTA and Button Tracking
export const trackCTAClick = (ctaText: string, ctaLocation: string, ctaType: 'primary' | 'secondary' = 'primary') => {
  trackEvent(GA_EVENTS.CTA_CLICK, {
    event_category: 'cta_interaction',
    event_label: ctaText,
    custom_parameters: {
      cta_text: ctaText,
      cta_location: ctaLocation,
      cta_type: ctaType,
      cta_position: ctaLocation
    }
  });
};

export const trackButtonClick = (buttonText: string, buttonLocation: string, buttonAction: string) => {
  trackEvent(GA_EVENTS.BUTTON_CLICK, {
    event_category: 'button_interaction',
    event_label: buttonText,
    custom_parameters: {
      button_text: buttonText,
      button_location: buttonLocation,
      button_action: buttonAction
    }
  });
};

// Communication Tracking
export const trackPhoneClick = (phoneNumber: string, location: string) => {
  trackEvent(GA_EVENTS.PHONE_CLICK, {
    event_category: 'communication',
    event_label: phoneNumber,
    custom_parameters: {
      phone_number: phoneNumber,
      click_location: location,
      contact_method: 'phone'
    }
  });
};

export const trackEmailClick = (emailAddress: string, location: string) => {
  trackEvent(GA_EVENTS.EMAIL_CLICK, {
    event_category: 'communication',
    event_label: emailAddress,
    custom_parameters: {
      email_address: emailAddress,
      click_location: location,
      contact_method: 'email'
    }
  });
};

export const trackWhatsAppClick = (phoneNumber: string, message: string, location: string) => {
  trackEvent(GA_EVENTS.WHATSAPP_CLICK, {
    event_category: 'communication',
    event_label: 'whatsapp_chat',
    custom_parameters: {
      phone_number: phoneNumber,
      message_preview: message.substring(0, 50),
      click_location: location,
      contact_method: 'whatsapp'
    }
  });
};

export const trackChatStart = (chatType: 'tawk' | 'whatsapp' | 'other', location: string) => {
  trackEvent(GA_EVENTS.CHAT_START, {
    event_category: 'communication',
    event_label: chatType,
    custom_parameters: {
      chat_type: chatType,
      chat_location: location,
      contact_method: 'live_chat'
    }
  });
};

// Service and Booking Tracking
export const trackServiceView = (serviceName: string, serviceCategory: string) => {
  trackEvent(GA_EVENTS.SERVICE_VIEW, {
    event_category: 'service_interaction',
    event_label: serviceName,
    custom_parameters: {
      service_name: serviceName,
      service_category: serviceCategory,
      interaction_type: 'view'
    }
  });
};

export const trackServiceSelect = (serviceName: string, serviceType: string, location: string) => {
  trackEvent(GA_EVENTS.SERVICE_SELECT, {
    event_category: 'service_interaction',
    event_label: serviceName,
    custom_parameters: {
      service_name: serviceName,
      service_type: serviceType,
      selection_location: location,
      interaction_type: 'select'
    }
  });
};

export const trackBookingStart = (serviceType: string, city: string) => {
  trackEvent(GA_EVENTS.BOOKING_START, {
    event_category: 'booking_flow',
    event_label: serviceType,
    custom_parameters: {
      service_type: serviceType,
      city: city,
      booking_step: 'start',
      funnel_stage: 'booking_initiated'
    }
  });
};

export const trackBookingComplete = (serviceType: string, city: string, bookingId?: string) => {
  trackEvent(GA_EVENTS.BOOKING_COMPLETE, {
    event_category: 'conversion',
    event_label: serviceType,
    value: 1,
    custom_parameters: {
      service_type: serviceType,
      city: city,
      booking_id: bookingId,
      conversion_type: 'booking_completion',
      funnel_stage: 'booking_completed'
    }
  });
};

// User Journey and Engagement Tracking
export const trackStepComplete = (stepName: string, stepNumber: number, totalSteps: number) => {
  trackEvent(GA_EVENTS.STEP_COMPLETE, {
    event_category: 'user_journey',
    event_label: stepName,
    custom_parameters: {
      step_name: stepName,
      step_number: stepNumber,
      total_steps: totalSteps,
      progress_percentage: Math.round((stepNumber / totalSteps) * 100)
    }
  });
};

export const trackCitySelect = (cityName: string, selectionMethod: 'dropdown' | 'link' | 'search') => {
  trackEvent(GA_EVENTS.CITY_SELECT, {
    event_category: 'location_interaction',
    event_label: cityName,
    custom_parameters: {
      city_name: cityName,
      selection_method: selectionMethod,
      interaction_type: 'city_selection'
    }
  });
};

export const trackFAQExpand = (faqQuestion: string, faqCategory: string, faqIndex: number) => {
  trackEvent(GA_EVENTS.FAQ_EXPAND, {
    event_category: 'content_interaction',
    event_label: faqQuestion.substring(0, 50),
    custom_parameters: {
      faq_question: faqQuestion,
      faq_category: faqCategory,
      faq_index: faqIndex,
      interaction_type: 'expand'
    }
  });
};

// Scroll Depth Tracking
export const trackScrollDepth = (percentage: number, pageType: string) => {
  trackEvent(GA_EVENTS.SCROLL_DEPTH, {
    event_category: 'engagement',
    event_label: `${percentage}%`,
    value: percentage,
    custom_parameters: {
      scroll_percentage: percentage,
      page_type: pageType,
      engagement_type: 'scroll'
    }
  });
};

// Page View Enhanced Tracking
export const trackPageView = (pagePath: string, pageTitle: string, pageCategory?: string) => {
  trackEvent(GA_EVENTS.PAGE_VIEW, {
    event_category: 'navigation',
    event_label: pageTitle,
    custom_parameters: {
      page_path: pagePath,
      page_title: pageTitle,
      page_category: pageCategory,
      referrer: document.referrer,
      user_type: 'visitor' // Can be enhanced with user authentication
    }
  });
};

// Conversion Tracking Helper
export const trackConversion = (conversionType: string, conversionValue: number, conversionDetails: Record<string, any> = {}) => {
  trackEvent('conversion', {
    event_category: 'conversion',
    event_label: conversionType,
    value: conversionValue,
    custom_parameters: {
      conversion_type: conversionType,
      conversion_value: conversionValue,
      ...conversionDetails
    }
  });
};

// Utility function to track external links
export const trackExternalLink = (url: string, linkText: string, location: string) => {
  trackEvent(GA_EVENTS.EXTERNAL_LINK, {
    event_category: 'navigation',
    event_label: url,
    custom_parameters: {
      external_url: url,
      link_text: linkText,
      link_location: location,
      link_type: 'external'
    }
  });
};

// Error Tracking
export const trackError = (errorType: string, errorMessage: string, errorLocation: string) => {
  trackEvent(GA_EVENTS.PAGE_ERROR, {
    event_category: 'error',
    event_label: errorType,
    custom_parameters: {
      error_type: errorType,
      error_message: errorMessage,
      error_location: errorLocation,
      user_agent: navigator.userAgent,
      page_url: window.location.href
    }
  });
}; 