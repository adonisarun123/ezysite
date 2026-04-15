# Google Analytics Implementation Guide

## Overview
This document outlines the comprehensive Google Analytics event tracking implementation for the EzyHelpers website. The system tracks user interactions, form submissions, conversions, and engagement metrics.

## Implementation Structure

### Core Files
- `lib/analytics.ts` - Main analytics utility functions
- `hooks/useScrollTracking.ts` - React hook for scroll depth tracking
- `components/PageTracking.tsx` - Page-level tracking component
- `components/FAQWithTracking.tsx` - FAQ component with interaction tracking

### Key Features
1. **Form Tracking** - Complete form interaction tracking
2. **CTA Tracking** - Call-to-action button click tracking
3. **Communication Tracking** - Phone, email, WhatsApp, and chat tracking
4. **User Journey Tracking** - Multi-step form progress tracking
5. **Engagement Tracking** - Scroll depth, FAQ interactions
6. **Error Tracking** - Form errors and page errors
7. **Conversion Tracking** - Lead generation and booking completions

## Event Categories

### Form Events
- `form_start` - When user starts interacting with a form
- `form_submit` - When form is submitted
- `form_complete` - When form submission is successful
- `form_error` - When form submission fails

### CTA Events
- `cta_click` - Primary and secondary CTA button clicks
- `button_click` - General button interactions

### Communication Events
- `phone_click` - Phone number clicks
- `email_click` - Email address clicks
- `whatsapp_click` - WhatsApp chat initiation
- `chat_start` - Live chat interactions

### Service Events
- `service_view` - Service page views
- `service_select` - Service selection in forms
- `booking_start` - Booking process initiation
- `booking_complete` - Successful booking completion

### Engagement Events
- `faq_expand` - FAQ question expansion
- `scroll_depth` - Page scroll milestones (25%, 50%, 75%, 90%, 100%)
- `page_view` - Enhanced page view tracking

### User Journey Events
- `step_complete` - Multi-step form progress
- `city_select` - City selection interactions

## Usage Examples

### Basic Event Tracking
```typescript
import { trackEvent } from '@/lib/analytics';

// Basic event
trackEvent('button_click', {
  event_category: 'navigation',
  event_label: 'header_cta',
  custom_parameters: {
    button_text: 'Book Now',
    location: 'header'
  }
});
```

### Form Tracking
```typescript
import { trackFormStart, trackFormSubmit, trackFormComplete } from '@/lib/analytics';

// Form start
trackFormStart('contact_form', 'contact_page');

// Form submission
trackFormSubmit('contact_form', formData);

// Form completion
trackFormComplete('contact_form', leadId);
```

### CTA Tracking
```typescript
import { trackCTAClick } from '@/lib/analytics';

trackCTAClick('Book Helper Now', 'hero_section', 'primary');
```

### Communication Tracking
```typescript
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

// Phone click
trackPhoneClick('+919972571005', 'header');

// WhatsApp click
trackWhatsAppClick('+919972571005', 'Hi! I need help', 'floating_button');
```

### Page-Level Tracking
```typescript
// Add to page components
import PageTracking from '@/components/PageTracking';

export default function ServicePage() {
  return (
    <>
      <PageTracking 
        pageTitle="Full-Time Maid Services"
        pageCategory="service_page"
        enableScrollTracking={true}
      />
      {/* Page content */}
    </>
  );
}
```

### Scroll Tracking Hook
```typescript
import { useScrollTracking } from '@/hooks/useScrollTracking';

export default function MyPage() {
  const { trackedThresholds } = useScrollTracking({
    pageType: 'service_page',
    thresholds: [25, 50, 75, 90, 100],
    enabled: true
  });

  return <div>Page content</div>;
}
```

## Implemented Tracking Points

### Forms
- ✅ Hire Helper Form (3-step process)
- ✅ Contact Form
- ✅ CTA Quick Quote Form
- ✅ Newsletter Signup (if applicable)

### CTAs and Buttons
- ✅ Primary CTAs (Book Now, Hire Helper)
- ✅ Secondary CTAs (Call Now, Learn More)
- ✅ Navigation buttons
- ✅ Service selection buttons

### Communication
- ✅ Phone number clicks (all instances)
- ✅ WhatsApp float button
- ✅ Live chat initiation (Tawk.to)
- ✅ Email clicks

### User Journey
- ✅ Multi-step form progression
- ✅ Service selection
- ✅ City selection
- ✅ Booking flow stages

### Engagement
- ✅ Scroll depth tracking (25%, 50%, 75%, 90%, 100%)
- ✅ FAQ expansions
- ✅ Page view tracking
- ✅ Time on page (via scroll depth)

## Data Structure

### Standard Event Parameters
```typescript
{
  event_category: string,     // e.g., 'form_interaction', 'cta_interaction'
  event_label: string,        // e.g., 'hire_helper_form', 'Book Now'
  value?: number,             // Numeric value for conversions
  page_title: string,         // Current page title
  page_location: string,      // Current URL
  timestamp: string,          // ISO timestamp
  user_agent: string,         // Browser user agent
  custom_parameters: {        // Event-specific data
    // Varies by event type
  }
}
```

### Form Event Data
```typescript
{
  form_name: string,
  form_location: string,
  service_type?: string,
  city?: string,
  phone_provided: boolean,
  email_provided: boolean,
  requirements_length: number,
  lead_id?: string
}
```

### CTA Event Data
```typescript
{
  cta_text: string,
  cta_location: string,
  cta_type: 'primary' | 'secondary',
  cta_position: string
}
```

### Communication Event Data
```typescript
{
  phone_number?: string,
  email_address?: string,
  click_location: string,
  contact_method: string,
  message_preview?: string
}
```

## Conversion Tracking

### Lead Generation
- Form completions are tracked as conversions with value = 1
- Lead IDs are captured for attribution
- Service type and location are tracked for segmentation

### Booking Flow
- Booking initiation tracked when user starts process
- Booking completion tracked on successful submission
- Service details and customer information captured

### Revenue Attribution
- While direct revenue tracking isn't implemented, the system provides:
  - Lead quality indicators (form completion rate)
  - Service preference data
  - Geographic distribution
  - Customer journey insights

## Google Analytics 4 Configuration

### Recommended Custom Events in GA4
1. **form_start** - Track form engagement
2. **form_complete** - Track lead generation (conversion)
3. **booking_complete** - Track booking conversions
4. **phone_click** - Track phone engagement
5. **whatsapp_click** - Track WhatsApp engagement
6. **service_select** - Track service interest

### Recommended Audiences
1. **Form Starters** - Users who started any form
2. **High Engagers** - Users with >75% scroll depth
3. **Service Browsers** - Users who viewed service pages
4. **Phone Clickers** - Users who clicked phone numbers
5. **Multi-step Completers** - Users who completed form steps

### Recommended Goals/Conversions
1. **Lead Generation** - form_complete events
2. **Booking Completion** - booking_complete events
3. **High Engagement** - 90%+ scroll depth
4. **Communication Intent** - phone_click or whatsapp_click

## Development vs Production

### Development Mode
- Events are logged to console for debugging
- All tracking functions include error handling
- Detailed parameter logging for verification

### Production Mode
- Console logging disabled
- Error tracking for failed events
- Performance optimized event firing

## Privacy Compliance

### GDPR/CCPA Considerations
- No personally identifiable information is tracked in events
- Phone numbers and emails are hashed or abbreviated in tracking
- User consent should be obtained before tracking
- Opt-out mechanisms should be implemented

### Data Minimization
- Only necessary data is tracked
- Sensitive form data is not included in events
- User IDs are generated, not collected

## Performance Optimization

### Deferred Loading
- Analytics script loads after user interaction
- Non-blocking event firing
- Efficient scroll tracking with requestAnimationFrame

### Error Handling
- Graceful degradation if GA is blocked
- Try-catch blocks around all tracking calls
- Fallback tracking for critical events

## Monitoring and Debugging

### Real-time Verification
1. Open browser dev tools
2. Check console for event logs (development mode)
3. Use GA4 Real-time reports
4. Monitor Network tab for gtag requests

### Common Issues
1. **Events not firing**: Check if gtag is loaded
2. **Missing parameters**: Verify event data structure
3. **Duplicate events**: Check for multiple tracking calls
4. **Performance issues**: Review scroll tracking thresholds

## Future Enhancements

### Planned Features
1. **A/B Testing Integration** - Track experiment variations
2. **Enhanced E-commerce** - Service pricing and package tracking
3. **User Authentication** - Logged-in user journey tracking
4. **Cross-device Tracking** - User ID implementation
5. **Offline Event Tracking** - Queue events for later submission

### Advanced Analytics
1. **Custom Dimensions** - Service categories, user segments
2. **Custom Metrics** - Form completion rates, engagement scores
3. **Enhanced Conversions** - Revenue and LTV tracking
4. **Attribution Modeling** - Multi-touch attribution setup

## Support and Maintenance

### Regular Tasks
1. **Monthly Review** - Check event data quality
2. **Quarterly Optimization** - Update tracking based on insights
3. **Annual Audit** - Review implementation and compliance
4. **Performance Monitoring** - Track page load impact

### Troubleshooting
- Check browser console for errors
- Verify GA4 configuration
- Test in incognito mode
- Use GA4 DebugView for real-time testing

---

For technical support or questions about this implementation, refer to the analytics utility functions in `lib/analytics.ts` or contact the development team.