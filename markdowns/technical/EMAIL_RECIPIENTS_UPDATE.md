# Email Recipients Configuration Update - Selective Routing

## ✅ Changes Completed

The following email recipients have been added to receive lead notifications from **ONLY** the **Hire Helper Form** (`/hire-helper`) and **Contact Form** (`/contact`):

1. **suraj.ezyhelpers@gmail.com**
2. **ashma@ezyhelpers.com**

**Other forms** (agent registration, helper registration, etc.) will continue to use the original email recipients only.

---

## 🎯 Email Routing Logic

### Forms Sending to ALL 3 Emails:
- ✅ **Hire Helper Form** (`/hire-helper`) → `HIRE_CONTACT_EMAIL_RECIPIENTS`
- ✅ **Contact Form** (`/contact`) → `HIRE_CONTACT_EMAIL_RECIPIENTS`

### Forms Sending to Original Email Only:
- 📋 **Agent Registration** → `EMAIL_RECIPIENTS`
- 👤 **Helper Registration** → `EMAIL_RECIPIENTS`
- 📝 **Requirement Form** → `EMAIL_RECIPIENTS`
- 🏢 **Other Forms** → `EMAIL_RECIPIENTS`

---

## 📝 Files Updated

### 1. ✅ `lib/emailService.ts` - Email Routing Logic
**Added selective routing (Lines 902-913):**
```typescript
// Selective email routing based on lead type
if (leadType === 'hire_helper' || leadType === 'general') {
  // Use dedicated recipients for hire helper and contact forms
  emailRecipientsEnv = process.env.HIRE_CONTACT_EMAIL_RECIPIENTS || process.env.EMAIL_RECIPIENTS || process.env.ADMIN_EMAIL || '';
} else {
  // Use default recipients for other forms
  emailRecipientsEnv = process.env.EMAIL_RECIPIENTS || process.env.ADMIN_EMAIL || '';
}
```

### 2. ✅ `.env.development` - Development Environment
**Added new variable:**
```bash
EMAIL_RECIPIENTS=astik.ezyhelpers@gmail.com
HIRE_CONTACT_EMAIL_RECIPIENTS=astik.ezyhelpers@gmail.com,suraj.ezyhelpers@gmail.com,ashma@ezyhelpers.com
```

### 3. ✅ `.env.example` - Example Template
**Added new variable:**
```bash
EMAIL_RECIPIENTS=contact@ezyhelpers.com
HIRE_CONTACT_EMAIL_RECIPIENTS=contact@ezyhelpers.com,suraj.ezyhelpers@gmail.com,ashma@ezyhelpers.com
```

### 4. ✅ `.env.production.example` - Production Example
**Added new variable:**
```bash
EMAIL_RECIPIENTS=contact@ezyhelpers.com
HIRE_CONTACT_EMAIL_RECIPIENTS=contact@ezyhelpers.com,suraj.ezyhelpers@gmail.com,ashma@ezyhelpers.com
```

### 5. ✅ `lib/env.ts` - Environment Schema
**Added validation for new variable (Line 23):**
```typescript
HIRE_CONTACT_EMAIL_RECIPIENTS: z.string().optional(),
```

---

## IMPORTANT: Manual Update Required

### Update Your `.env.local` File

Since `.env.local` is not tracked in git (for security), **you need to manually add the new variable**.

**Open your `.env.local` file and add these lines:**

```bash
# Email Recipients for other forms (agent/helper registration, etc.)
EMAIL_RECIPIENTS=astik.ezyhelpers@gmail.com

# Email Recipients for Hire Helper & Contact forms ONLY
HIRE_CONTACT_EMAIL_RECIPIENTS=astik.ezyhelpers@gmail.com,suraj.ezyhelpers@gmail.com,ashma@ezyhelpers.com
```

**Or for production:**

```bash
# Email Recipients for other forms (agent/helper registration, etc.)
EMAIL_RECIPIENTS=contact@ezyhelpers.com

# Email Recipients for Hire Helper & Contact forms ONLY
HIRE_CONTACT_EMAIL_RECIPIENTS=contact@ezyhelpers.com,suraj.ezyhelpers@gmail.com,ashma@ezyhelpers.com
```

---

## How It Works

The email system automatically sends notifications to **all email addresses** listed in the `EMAIL_RECIPIENTS` environment variable.

### Forms That Will Send Emails:

1. **Hire Helper Form** (`/hire-helper`)
   - Lead type: `hire_helper`
   - Includes: service requirements, budget, languages, etc.

2. **Contact Form** (`/contact`)
   - Lead type: `general`
   - Includes: name, phone, service, city, message

3. **Agent Registration** (if applicable)
   - Lead type: `agent_registration`

4. **Helper Registration** (if applicable)
   - Lead type: `helper_registration`

### Email Format:
All recipients receive emails in this format:
```
To: email1@example.com, email2@example.com, email3@example.com
```

---

## 🧪 Testing

After updating your `.env.local` file:

1. **Restart your development server:**
   ```bash
   npm run dev
   ```

2. **Test the Hire Helper Form:**
   - Go to: `http://localhost:3000/hire-helper`
   - Fill out and submit the form
   - Check that all 3 email addresses receive the notification

3. **Test the Contact Form:**
   - Go to: `http://localhost:3000/contact`
   - Fill out and submit the form
   - Check that all 3 email addresses receive the notification

---

## 📋 Email Distribution

### Hire Helper & Contact Forms (`/hire-helper`, `/contact`):
| Email Address | Description |
|--------------|-------------|
| `astik.ezyhelpers@gmail.com` or `contact@ezyhelpers.com` | Primary/Admin |
| `suraj.ezyhelpers@gmail.com` | Sales Team ✅ |
| `ashma@ezyhelpers.com` | Sales Team ✅ |

### Other Forms (Agent/Helper Registration, Requirements):
| Email Address | Description |
|--------------|-------------|
| `astik.ezyhelpers@gmail.com` or `contact@ezyhelpers.com` | Primary/Admin Only |

---

## 🚀 Production Deployment

When deploying to production (Vercel/Netlify/etc.), ensure you update the environment variables:

### For Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add/Update these variables:
   ```
   EMAIL_RECIPIENTS=contact@ezyhelpers.com
   HIRE_CONTACT_EMAIL_RECIPIENTS=contact@ezyhelpers.com,suraj.ezyhelpers@gmail.com,ashma@ezyhelpers.com
   ```
4. Redeploy your application

### For Netlify:
1. Go to "Site settings" → "Environment variables"
2. Add/Update these variables:
   ```
   EMAIL_RECIPIENTS=contact@ezyhelpers.com
   HIRE_CONTACT_EMAIL_RECIPIENTS=contact@ezyhelpers.com,suraj.ezyhelpers@gmail.com,ashma@ezyhelpers.com
   ```
3. Redeploy

---

## ✅ Verification Checklist

- [x] Updated `lib/emailService.ts` with selective routing logic
- [x] Updated `.env.development` with `HIRE_CONTACT_EMAIL_RECIPIENTS`
- [x] Updated `.env.example` with `HIRE_CONTACT_EMAIL_RECIPIENTS`
- [x] Updated `.env.production.example` with `HIRE_CONTACT_EMAIL_RECIPIENTS`
- [x] Updated `lib/env.ts` with environment variable validation
- [ ] **TODO: Manually add `HIRE_CONTACT_EMAIL_RECIPIENTS` to `.env.local`**
- [ ] **TODO: Restart development server**
- [ ] **TODO: Test hire helper form → verify 3 emails received**
- [ ] **TODO: Test contact form → verify 3 emails received**
- [ ] **TODO: Test agent/helper registration → verify only 1 email received**
- [ ] **TODO: Update production environment variables on hosting platform**

---

## 📧 Email Template Example

When a lead is submitted, all recipients will receive an email like this:

```
Subject: New Hire Helper Lead: Full-Time Maid in Bangalore

From: your-smtp-email@gmail.com
To: contact@ezyhelpers.com, suraj.ezyhelpers@gmail.com, ashma@ezyhelpers.com

New Hire Helper Lead Received

Request ID: ABC123
Name: John Doe
Email: john@example.com
Phone: +91 99999 99999
City: Bangalore

Service Requirements:
- Service Type: Full-Time Maid
- Duration: 6 months
- Start Date: 2025-01-01
...
```

---

## 🛠️ Troubleshooting

### No emails received?
1. Check SMTP configuration in `.env.local`
2. Verify `EMAIL_RECIPIENTS` format (comma-separated, no spaces after commas)
3. Check spam/junk folders
4. Review application logs for email errors

### Only one recipient receiving emails?
1. Verify the comma-separated format is correct
2. Ensure no trailing/leading spaces
3. Restart the development server

---

**Last Updated:** November 3, 2025
**Updated By:** Cascade AI Assistant
