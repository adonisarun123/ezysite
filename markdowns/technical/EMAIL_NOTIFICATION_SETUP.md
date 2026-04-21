# Email Notification Setup for Registration Forms

This document outlines the email notification system for agent and helper registration forms.

## Overview

When users complete either the agent registration or helper registration forms, the system automatically:
1. Saves the data to Supabase database
2. Sends a detailed email notification to `contact@ezyhelpers.com`
3. Returns a success response to the user

## Email Configuration

### Environment Variables Required

Add these to your `.env.local` file:

```bash
# SMTP Configuration
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password

# Admin Email (for other lead types, not registration)
ADMIN_EMAIL=your_admin_email@domain.com
```

### Supported SMTP Providers

- **Gmail**: Use `smtp.gmail.com` with port `587`
- **SendGrid**: Use `smtp.sendgrid.net` with port `587`
- **Mailgun**: Use `smtp.mailgun.org` with port `587`
- **AWS SES**: Use your region's SMTP endpoint

## Email Templates

### Agent Registration Email

**Subject**: `New Agent Registration: {Agency Name}`

**Includes**:
- Registration ID and timestamp
- Agency information (name, registration number, services)
- Owner details (name, DOB, ID verification)
- Contact information (phones, email)
- Office address with coordinates
- Banking/compliance details
- Additional notes
- Next steps for verification

### Helper Registration Email

**Subject**: `New Helper Registration: {Name} - {Helper Type}`

**Includes**:
- Registration ID and timestamp
- Personal information (name, age, location)
- Family and personal details
- Work experience and skills
- Salary expectations
- Identity verification details
- Banking information (if provided)
- Contact information
- Emergency contacts
- Next steps for onboarding

## Email Delivery

### Success Handling
- Registration proceeds successfully even if email fails
- Email failures are logged but don't affect user experience
- Users receive success confirmation regardless of email status

### Error Handling
- SMTP connection errors are logged
- Invalid email configurations are caught
- Retry logic can be implemented if needed

### Logging
- Successful emails log the message ID
- Failed emails log the specific error
- All email events are tracked in server logs

## Email Content Features

### Professional Formatting
- Clean HTML templates with inline CSS
- Mobile-responsive design
- Company branding and colors
- Structured information sections

### Rich Content
- Clickable phone numbers (`tel:` links)
- Clickable email addresses (`mailto:` links)
- Formatted tables and lists
- Color-coded sections for different information types

### Plain Text Fallback
- All emails include plain text versions
- Structured formatting for readability
- All information preserved in text format

## Security Considerations

### Data Protection
- Sensitive information like ID numbers are included but marked clearly
- Banking details are conditionally shown only if provided
- File URLs point to secure Supabase storage

### Email Security
- Uses secure SMTP with authentication
- Supports TLS/SSL encryption
- Reply-to addresses set appropriately

## Testing Email Setup

### Test Connection
Use the test endpoint to verify email configuration:

```javascript
import { testEmailConnection } from '@/lib/emailService'

const result = await testEmailConnection()
console.log(result) // { success: true/false, message/error }
```

### Test Registration Email
Submit a test registration through the forms to verify:
1. Email is sent successfully
2. Content renders correctly
3. All information is included
4. Formatting is proper

## Troubleshooting

### Common Issues

1. **SMTP Authentication Failed**
   - Verify SMTP credentials
   - Check if 2FA requires app-specific passwords
   - Ensure SMTP host and port are correct

2. **Email Not Received**
   - Check spam/junk folders
   - Verify recipient email address
   - Check SMTP logs for delivery status

3. **Template Rendering Issues**
   - Verify all required fields are provided
   - Check for special characters in data
   - Test with minimal data first

4. **SSL/TLS Errors**
   - Ensure correct port (587 for TLS, 465 for SSL)
   - Verify SMTP provider requirements
   - Check firewall/network restrictions

### Debug Mode

Enable debug logging by setting:
```bash
NODE_ENV=development
```

This will provide detailed SMTP transaction logs.

## Production Deployment

### Before Going Live

1. **Verify SMTP Credentials**
   - Test with production SMTP service
   - Ensure rate limits are sufficient
   - Configure monitoring and alerts

2. **Email Deliverability**
   - Set up SPF, DKIM, and DMARC records
   - Warm up the sending domain
   - Monitor bounce and spam rates

3. **Monitoring**
   - Set up email delivery monitoring
   - Track success/failure rates
   - Alert on email service issues

### Performance Considerations

- Email sending is non-blocking (doesn't delay user response)
- Failed emails don't affect registration success
- Consider queue system for high-volume scenarios
- Monitor SMTP provider rate limits

## Email Analytics

### Tracking Capabilities
- Email delivery success/failure rates
- Template rendering performance
- SMTP connection metrics
- Registration volume tracking

### Business Intelligence
- Registration source tracking
- Peak registration times
- Geographic distribution of registrations
- Service type preferences

## Future Enhancements

### Potential Improvements
- Email template customization
- Multi-language support
- Email scheduling and batching
- Advanced analytics and reporting
- Integration with CRM systems
- Automated follow-up sequences

### Scalability
- Queue-based email processing
- Multiple SMTP provider failover
- Template versioning system
- A/B testing capabilities