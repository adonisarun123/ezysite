# Email Setup Guide

This guide explains how to configure and use the SMTP email functionality for lead notifications in the EzyHelpers website.

## Overview

The website now automatically sends email notifications to the admin when users submit forms. This ensures that leads are received immediately, even if there are issues with the database.

## Environment Variables

Add these variables to your `.env.local` file:

```env
# SMTP Configuration
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
ADMIN_EMAIL=admin@ezyhelpers.com
```

### Common SMTP Providers

#### Gmail
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

#### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your_email@outlook.com
SMTP_PASS=your_password
```

#### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your_sendgrid_api_key
```

## Testing Email Configuration

1. Start your development server: `npm run dev`
2. Visit: `http://localhost:3000/api/test-email`
3. You should see a JSON response indicating success or failure

## Email Templates

### Contact Form Email
- **Subject**: "New Contact Lead: [Subject]"
- **Content**: Name, email, phone, subject, and message
- **Priority**: Standard

### Hire Helper Form Email
- **Subject**: "New Hire Helper Lead: [Service] in [City]"
- **Content**: Complete service requirements, preferences, and contact details
- **Priority**: High (marked for immediate follow-up)

### General Lead Email
- **Subject**: "New Lead: [Service] in [City]"
- **Content**: Basic lead information from hero section and CTAs
- **Priority**: Standard

## Form Integration

The following forms now send email notifications:

1. **Contact Form** (`/contact`)
2. **Hire Helper Form** (`/hire-helper`)
3. **Hero Section Form** (homepage)
4. **CTA Quick Quote Form** (various pages)

## Error Handling

- If email sending fails, the form submission still succeeds
- Email errors are logged to the console
- Database storage is prioritized over email sending
- Users receive success messages regardless of email status

## Troubleshooting

### Common Issues

1. **Authentication Failed**
   - Check SMTP_USER and SMTP_PASS
   - For Gmail, use App Passwords instead of regular passwords
   - Ensure 2FA is properly configured

2. **Connection Timeout**
   - Verify SMTP_HOST and SMTP_PORT
   - Check firewall settings
   - Try different ports (587, 465, 25)

3. **Email Not Received**
   - Check spam/junk folders
   - Verify ADMIN_EMAIL is correct
   - Test with a different email provider

### Debug Steps

1. Test email configuration: `/api/test-email`
2. Check browser console for errors
3. Verify environment variables are loaded
4. Test with a simple email client

## Security Considerations

- Never commit `.env.local` to version control
- Use App Passwords for Gmail instead of regular passwords
- Consider using environment-specific SMTP settings
- Monitor email sending logs for unusual activity

## Production Deployment

For production deployment:

1. Set environment variables in your hosting platform
2. Use a reliable SMTP provider (SendGrid, Mailgun, etc.)
3. Monitor email delivery rates
4. Set up email bounce handling if needed

## Files Modified

- `package.json` - Added nodemailer dependency
- `lib/emailService.ts` - Email service utilities
- `app/api/send-lead-email/route.ts` - Email API endpoint
- `app/api/test-email/route.ts` - Test endpoint
- `app/contact/page.tsx` - Contact form integration
- `components/HireHelperForm.tsx` - Hire helper form integration
- `components/sections/HeroSection.tsx` - Hero form integration
- `components/sections/CTASection.tsx` - CTA form integration
- `README.md` - Updated documentation 