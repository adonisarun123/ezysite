# Analytics Testing Guide

## Quick Testing Checklist

### 1. Development Console Testing
Open your browser's developer console and navigate through your site. You should see analytics events being logged.

**Expected Console Output:**
```
GA Event Tracked: form_start {event_category: "form_interaction", ...}
GA Event Tracked: cta_click {event_category: "cta_interaction", ...}
GA Event Tracked: phone_click {event_category: "communication", ...}
```

### 2. Key Interactions to Test

#### Form Interactions
1. **Hire Helper Form** (`/hire-helper`)
   - Form start when clicking any field
   - Step progression (1→2→3)
   - Service selection
   - Form submission and completion

2. **Contact Form** (`/contact`)
   - Form start and submission
   - Live chat button clicks

#### CTA Interactions
- Primary CTAs: "Book Now", "Hire Helper"
- Secondary CTAs: "Call Now", phone numbers
- Navigation buttons

#### Communication
- Phone number clicks (navbar, footer, pages)
- WhatsApp float button
- Live chat initiation

#### Engagement
- Scroll depth tracking (25%, 50%, 75%, 90%, 100%)
- FAQ expansions
- Page navigation

### 3. Google Analytics 4 Verification
1. Open GA4 Real-time reports
2. Perform test actions on your site
3. Verify events appear within 30 seconds
4. Check event parameters are populated

### 4. Expected Events by Page

#### Homepage
- `page_view`, `scroll_depth`, `cta_click`, `whatsapp_click`

#### Hire Helper Page
- `form_start`, `step_complete`, `service_select`, `form_submit`, `form_complete`

#### Contact Page
- `form_start`, `form_submit`, `chat_start`, `phone_click`

#### Service Pages
- `service_view`, `cta_click`, `faq_expand`

---

**Note**: Events are logged to console in development mode for easy debugging.