import nodemailer from 'nodemailer';

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Email templates
const generateContactLeadEmail = (formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  return {
    subject: `New Contact Lead: ${formData.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f1750a;">New Contact Lead Received</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
        </div>
        <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #333;">Message</h3>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>
        <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-radius: 8px;">
          <p style="margin: 0; color: #2d5a2d;"><strong>Action Required:</strong> Please respond to this lead within 2 hours.</p>
        </div>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">This email was automatically generated from the EzyHelpers website contact form.</p>
      </div>
    `,
    text: `
New Contact Lead: ${formData.subject}

Contact Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Subject: ${formData.subject}

Message:
${formData.message}

Action Required: Please respond to this lead within 2 hours.

---
This email was automatically generated from the EzyHelpers website contact form.
    `,
  };
};

const generateHireHelperLeadEmail = (formData: {
  name: string;
  phone: string;
  email: string;
  city: string;
  serviceType: string;
  duration: string;
  startDate: string;
  specificRequirements: string;
  experience: string;
  budget: string;
  languages: string[];
  additionalServices: string[];
  familySize: string;
  preferredGender: string;
  requestId: string;
}) => {
  return {
    subject: `New Hire Helper Lead: ${formData.serviceType} in ${formData.city}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f1750a;">New Hire Helper Lead Received</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Request ID: ${formData.requestId}</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>
          <p><strong>City:</strong> ${formData.city}</p>
        </div>
        <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Service Requirements</h3>
          <p><strong>Service Type:</strong> ${formData.serviceType}</p>
          <p><strong>Duration:</strong> ${formData.duration}</p>
          <p><strong>Start Date:</strong> ${formData.startDate}</p>
          <p><strong>Experience Required:</strong> ${formData.experience}</p>
          <p><strong>Budget Range:</strong> ${formData.budget}</p>
          <p><strong>Family Size:</strong> ${formData.familySize}</p>
          <p><strong>Preferred Gender:</strong> ${formData.preferredGender}</p>
          <p><strong>Languages:</strong> ${formData.languages.join(', ')}</p>
          <p><strong>Additional Services:</strong> ${formData.additionalServices.join(', ') || 'None'}</p>
        </div>
        <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Specific Requirements</h3>
          <p style="white-space: pre-wrap;">${formData.specificRequirements || 'No specific requirements mentioned.'}</p>
        </div>
        <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; border-radius: 8px;">
          <p style="margin: 0; color: #856404;"><strong>Priority:</strong> High priority lead - immediate follow-up required.</p>
        </div>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">This email was automatically generated from the EzyHelpers website hire helper form.</p>
      </div>
    `,
    text: `
New Hire Helper Lead: ${formData.serviceType} in ${formData.city}

Request ID: ${formData.requestId}

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- City: ${formData.city}

Service Requirements:
- Service Type: ${formData.serviceType}
- Duration: ${formData.duration}
- Start Date: ${formData.startDate}
- Experience Required: ${formData.experience}
- Budget Range: ${formData.budget}
- Family Size: ${formData.familySize}
- Preferred Gender: ${formData.preferredGender}
- Languages: ${formData.languages.join(', ')}
- Additional Services: ${formData.additionalServices.join(', ') || 'None'}

Specific Requirements:
${formData.specificRequirements || 'No specific requirements mentioned.'}

Priority: High priority lead - immediate follow-up required.

---
This email was automatically generated from the EzyHelpers website hire helper form.
    `,
  };
};

const generateGeneralLeadEmail = (formData: {
  name: string;
  phone: string;
  service: string;
  city: string;
}) => {
  return {
    subject: `New Lead: ${formData.service} in ${formData.city}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f1750a;">New Lead Received</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Lead Information</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>
          <p><strong>Service:</strong> ${formData.service}</p>
          <p><strong>City:</strong> ${formData.city}</p>
        </div>
        <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-radius: 8px;">
          <p style="margin: 0; color: #2d5a2d;"><strong>Action Required:</strong> Please call this lead within 30 minutes.</p>
        </div>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">This email was automatically generated from the EzyHelpers website.</p>
      </div>
    `,
    text: `
New Lead: ${formData.service} in ${formData.city}

Lead Information:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Service: ${formData.service}
- City: ${formData.city}

Action Required: Please call this lead within 30 minutes.

---
This email was automatically generated from the EzyHelpers website.
    `,
  };
};

// Main email sending function
export const sendLeadEmail = async (
  leadType: 'contact' | 'hire_helper' | 'general',
  formData: any,
  requestId?: string
) => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    if (!adminEmail) {
      console.error('ADMIN_EMAIL environment variable not set');
      return { success: false, error: 'Admin email not configured' };
    }

    const transporter = createTransporter();
    
    let emailContent;
    
    switch (leadType) {
      case 'contact':
        emailContent = generateContactLeadEmail(formData);
        break;
      case 'hire_helper':
        emailContent = generateHireHelperLeadEmail({ ...formData, requestId: requestId || 'N/A' });
        break;
      case 'general':
        emailContent = generateGeneralLeadEmail(formData);
        break;
      default:
        throw new Error('Invalid lead type');
    }

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: adminEmail,
      replyTo: formData.email || process.env.SMTP_USER,
      ...emailContent,
    };

    const result = await transporter.sendMail(mailOptions);
    
    console.log('Lead email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
    
  } catch (error) {
    console.error('Error sending lead email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

// Test email function
export const testEmailConnection = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    return { success: true, message: 'Email connection verified successfully' };
  } catch (error) {
    console.error('Email connection test failed:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}; 