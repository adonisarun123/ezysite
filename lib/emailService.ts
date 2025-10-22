import nodemailer from 'nodemailer';
import pRetry from 'p-retry';
import { EMAIL } from './constants';
import { logger } from './logger';
import type {
  EmailContent,
  ContactFormData,
  HireHelperFormData,
  GeneralLeadFormData,
  AgentRegistrationFormData,
  HelperRegistrationFormData,
  RequirementFormData,
  LeadType,
  EmailSendResult,
} from '@/types/email';

// Utility function to format phone numbers to bypass DLP (shows all digits with dashes)
const formatPhoneForEmail = (phone: string): string => {
  if (!phone || phone.length < 8) return phone;
  const cleaned = phone.replace(/\D/g, '');
  
  // For 10-digit numbers, use dash separation: 901-940-7334
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  
  // For 11+ digit numbers (with country code), format: +91-901-940-7334
  if (cleaned.length > 10) {
    const countryCode = cleaned.slice(0, cleaned.length - 10);
    const remaining = cleaned.slice(-10);
    return `+${countryCode}-${remaining.slice(0, 3)}-${remaining.slice(3, 6)}-${remaining.slice(6)}`;
  }
  
  // For shorter numbers, add dashes every 3 digits
  return cleaned.match(/.{1,3}/g)?.join('-') || phone;
};

// Utility function to mask ID numbers
const maskIDNumber = (idNumber: string): string => {
  if (!idNumber || idNumber.length < 6) return 'XXXX';
  // Show first 2 and last 2 characters, mask the rest
  const masked = idNumber.slice(0, 2) + 'X'.repeat(Math.max(idNumber.length - 4, 2)) + idNumber.slice(-2);
  // Add spaces to break pattern
  return masked.match(/.{1,4}/g)?.join(' ') || masked;
};

// Utility function to mask account numbers
const maskAccountNumber = (accountNumber: string): string => {
  if (!accountNumber || accountNumber.length < 4) return 'XXXX';
  // Show only last 4 digits
  return 'XXXX-' + accountNumber.slice(-4);
};

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
const generateContactLeadEmail = (formData: ContactFormData): EmailContent => {
  const formattedPhone = formatPhoneForEmail(formData.phone);
  
  return {
    subject: `New Contact Lead: ${formData.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f1750a;">New Contact Lead Received</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${formData.phone}" style="text-decoration: none; color: #1e40af;">${formattedPhone}</a></p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
        </div>
        <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #333;">Message</h3>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>
        <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-radius: 8px;">
          <p style="margin: 0; color: #2d5a2d;"><strong>Action Required:</strong> Please respond to this lead within 2 hours.</p>
        </div>
        ${formData.sourceUrl ? `
        <div style="margin-top: 20px; padding: 15px; background-color: #f0f8ff; border-radius: 8px;">
          <p style="margin: 0; color: #1e40af;"><strong>Source URL:</strong> <a href="${formData.sourceUrl}" target="_blank" style="color: #1e40af; text-decoration: underline;">${formData.sourceUrl}</a></p>
        </div>
        ` : ''}
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">This email was automatically generated from the EzyHelpers website contact form.</p>
      </div>
    `,
    text: `
New Contact Lead: ${formData.subject}

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formattedPhone}
- Subject: ${formData.subject}

Message:
${formData.message}

Action Required: Please respond to this lead within 2 hours.

${formData.sourceUrl ? `Source URL: ${formData.sourceUrl}` : ''}

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
  sourceUrl?: string;
}) => {
  const formattedPhone = formatPhoneForEmail(formData.phone);
  
  return {
    subject: `New Hire Helper Lead: ${formData.serviceType} in ${formData.city}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f1750a;">New Hire Helper Lead Received</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Request ID: ${formData.requestId}</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${formData.phone}" style="text-decoration: none; color: #1e40af;">${formattedPhone}</a></p>
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
        ${formData.sourceUrl ? `
        <div style="margin-top: 20px; padding: 15px; background-color: #f0f8ff; border-radius: 8px;">
          <p style="margin: 0; color: #1e40af;"><strong>Source URL:</strong> <a href="${formData.sourceUrl}" target="_blank" style="color: #1e40af; text-decoration: underline;">${formData.sourceUrl}</a></p>
        </div>
        ` : ''}
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
- Phone: ${formattedPhone}
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

${formData.sourceUrl ? `Source URL: ${formData.sourceUrl}` : ''}

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
  email?: string;
  sourceUrl?: string;
  additionalDetails?: any;
}) => {
  const isEzyNestBooking = formData.service.includes('EzyNest');
  const isHelperLead = formData.additionalDetails?.leadType === 'Helper Lead' || !!formData.additionalDetails?.job_roles;
  const formattedPhone = formatPhoneForEmail(formData.phone);
  
  const roleLabelMap: Record<string, string> = {
    COOK: 'Cooking',
    HOUSEKEEPING: 'Housekeeping',
    BABY_CARE: 'Baby Care',
    ELDER_CARE: 'Elder Care',
    DRIVER: 'Driver',
    SECURITY: 'Security',
    CARPENTER: 'Carpenter',
    PLUMBER: 'Plumber',
    OTHER: 'Other'
  };
  const formatServices = (roles?: string[]) => {
    if (!roles || roles.length === 0) return 'None';
    return roles.map(r => roleLabelMap[r] || r).join(', ');
  };
  
  return {
    subject: `New Lead: ${formData.service} in ${formData.city}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f1750a;">${isEzyNestBooking ? '🏠 New EzyNest Booking' : 'New Lead Received'}</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Lead Information</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Phone:</strong> <a href="tel:${formData.phone}" style="text-decoration: none; color: #1e40af;">${formattedPhone}</a></p>
          ${formData.email ? `<p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>` : ''}
          ${formData.additionalDetails?.field_officer_name ? `<p><strong>Field Officer Name:</strong> ${formData.additionalDetails.field_officer_name}</p>` : ''}
          <p><strong>Service:</strong> ${formData.service}</p>
          <p><strong>City:</strong> ${formData.city}</p>
        </div>
        
        ${formData.additionalDetails ? `
        ${formData.additionalDetails.leadType === 'Comprehensive Service Request' ? `
        <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">📋 Service Requirements</h3>
          ${formData.additionalDetails.duration ? `<p><strong>Duration:</strong> ${formData.additionalDetails.duration}</p>` : ''}
          ${formData.additionalDetails.startDate ? `<p><strong>Preferred Start Date:</strong> ${formData.additionalDetails.startDate}</p>` : ''}
          ${formData.additionalDetails.budget ? `<p><strong>Monthly Budget:</strong> ₹${formData.additionalDetails.budget}</p>` : ''}
          ${formData.additionalDetails.familySize ? `<p><strong>Family Size:</strong> ${formData.additionalDetails.familySize}</p>` : ''}
        </div>
        
        <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">👤 Helper Preferences</h3>
          ${formData.additionalDetails.experience ? `<p><strong>Experience Level:</strong> ${formData.additionalDetails.experience}</p>` : ''}
          ${formData.additionalDetails.preferredGender ? `<p><strong>Gender Preference:</strong> ${formData.additionalDetails.preferredGender}</p>` : ''}
          ${formData.additionalDetails.languages ? `<p><strong>Preferred Languages:</strong> ${formData.additionalDetails.languages}</p>` : ''}
          ${formData.additionalDetails.additionalServices ? `<p><strong>Additional Services:</strong> ${formData.additionalDetails.additionalServices}</p>` : ''}
        </div>
        
        ${formData.additionalDetails.specificRequirements ? `
        <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">📝 Specific Requirements</h3>
          <p style="white-space: pre-wrap;">${formData.additionalDetails.specificRequirements}</p>
        </div>
        ` : ''}
        ` : isHelperLead ? `
        <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">👷‍♀️ Helper Registration Details</h3>
          <p><strong>Services You Can Provide:</strong> ${formatServices(formData.additionalDetails.job_roles)}</p>
          ${formData.additionalDetails.job_role_other ? `<p><strong>Other Service:</strong> ${formData.additionalDetails.job_role_other}</p>` : ''}
          ${formData.additionalDetails.area_of_residence ? `<p><strong>Area of Residence:</strong> ${formData.additionalDetails.area_of_residence}</p>` : ''}
          ${Array.isArray(formData.additionalDetails.languages) && formData.additionalDetails.languages.length ? `<p><strong>Languages:</strong> ${formData.additionalDetails.languages.join(', ')}</p>` : ''}
          ${formData.additionalDetails.remarks ? `<p><strong>Additional Info:</strong> ${formData.additionalDetails.remarks}</p>` : ''}
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">📍 Location</h3>
          ${formData.additionalDetails.detected_city || formData.additionalDetails.detected_region || formData.additionalDetails.detected_country ? `
            <p><strong>Detected Location:</strong> ${[
              formData.additionalDetails.detected_city,
              formData.additionalDetails.detected_region,
              formData.additionalDetails.detected_country
            ].filter(Boolean).join(', ')}</p>
          ` : ''}
          ${(formData.additionalDetails.latitude && formData.additionalDetails.longitude) ? `
            <p><strong>Coordinates:</strong> ${Number(formData.additionalDetails.latitude).toFixed(6)}, ${Number(formData.additionalDetails.longitude).toFixed(6)}</p>
            <p><strong>Maps Link:</strong> <a href="https://www.google.com/maps?q=${formData.additionalDetails.latitude},${formData.additionalDetails.longitude}" target="_blank" style="color: #1e40af; text-decoration: underline;">View on Google Maps</a></p>
          ` : ''}
        </div>
        ` : ``}
        ` : ''}
        
        <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-radius: 8px;">
          <p style="margin: 0; color: #2d5a2d;"><strong>Action Required:</strong> ${isEzyNestBooking ? 'Process booking and arrange accommodation' : 'Please call this lead within 30 minutes'}.</p>
        </div>
        ${formData.sourceUrl ? `
        <div style="margin-top: 20px; padding: 15px; background-color: #f0f8ff; border-radius: 8px;">
          <p style="margin: 0; color: #1e40af;"><strong>Source URL:</strong> <a href="${formData.sourceUrl}" target="_blank" style="color: #1e40af; text-decoration: underline;">${formData.sourceUrl}</a></p>
        </div>
        ` : ''}
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">This email was automatically generated from the EzyHelpers website.</p>
      </div>
    `,
    text: `
${isEzyNestBooking ? 'New EzyNest Booking' : 'New Lead'}: ${formData.service} in ${formData.city}

Lead Information:
- Name: ${formData.name}
- Phone: ${formattedPhone}
${formData.email ? `- Email: ${formData.email}` : ''}
- Service: ${formData.service}
- City: ${formData.city}

${formData.additionalDetails ? `
${formData.additionalDetails.leadType === 'Comprehensive Service Request' ? `
SERVICE REQUIREMENTS:
${formData.additionalDetails.duration ? `- Duration: ${formData.additionalDetails.duration}` : ''}
${formData.additionalDetails.startDate ? `- Preferred Start Date: ${formData.additionalDetails.startDate}` : ''}
${formData.additionalDetails.budget ? `- Monthly Budget: ₹${formData.additionalDetails.budget}` : ''}
${formData.additionalDetails.familySize ? `- Family Size: ${formData.additionalDetails.familySize}` : ''}

HELPER PREFERENCES:
${formData.additionalDetails.experience ? `- Experience Level: ${formData.additionalDetails.experience}` : ''}
${formData.additionalDetails.preferredGender ? `- Gender Preference: ${formData.additionalDetails.preferredGender}` : ''}
${formData.additionalDetails.languages ? `- Preferred Languages: ${formData.additionalDetails.languages}` : ''}
${formData.additionalDetails.additionalServices ? `- Additional Services: ${formData.additionalDetails.additionalServices}` : ''}

${formData.additionalDetails.specificRequirements ? `
SPECIFIC REQUIREMENTS:
${formData.additionalDetails.specificRequirements}
` : ''}
` : isHelperLead ? `
HELPER REGISTRATION DETAILS:
- Services You Can Provide: ${formatServices(formData.additionalDetails.job_roles)}
${formData.additionalDetails.job_role_other ? `- Other Service: ${formData.additionalDetails.job_role_other}` : ''}
${Array.isArray(formData.additionalDetails.languages) && formData.additionalDetails.languages.length ? `- Languages: ${formData.additionalDetails.languages.join(', ')}` : ''}
${formData.additionalDetails.area_of_residence ? `- Area of Residence: ${formData.additionalDetails.area_of_residence}` : ''}
${formData.additionalDetails.remarks ? `- Additional Info: ${formData.additionalDetails.remarks}` : ''}

LOCATION:
${(formData.additionalDetails.detected_city || formData.additionalDetails.detected_region || formData.additionalDetails.detected_country) ? `- Detected: ${[
  formData.additionalDetails.detected_city,
  formData.additionalDetails.detected_region,
  formData.additionalDetails.detected_country
].filter(Boolean).join(', ')}` : ''}
${(formData.additionalDetails.latitude && formData.additionalDetails.longitude) ? `- Coordinates: ${Number(formData.additionalDetails.latitude).toFixed(6)}, ${Number(formData.additionalDetails.longitude).toFixed(6)}
- Maps: https://www.google.com/maps?q=${formData.additionalDetails.latitude},${formData.additionalDetails.longitude}` : ''}
` : ``}
` : ''}

Action Required: ${isEzyNestBooking ? 'Process booking and arrange accommodation' : 'Please call this lead within 30 minutes'}.

${formData.sourceUrl ? `Source URL: ${formData.sourceUrl}` : ''}

---
This email was automatically generated from the EzyHelpers website.
    `,
  };
};

const generateAgentRegistrationEmail = (formData: {
  id: string;
  agencyName: string;
  registrationNumber: string;
  yearFounded: number;
  servicesOffered: string[];
  maxHelpersSupply: number;
  ownerName: string;
  ownerDOB: string;
  ownerIDType: string;
  ownerIDNumber: string;
  primaryPhone: string;
  secondaryPhone?: string;
  email: string;
  officeAddressLine1: string;
  officeAddressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  latitude?: number;
  longitude?: number;
  listedBy?: string;
  notes?: string;
}) => {
  const formattedPrimaryPhone = formatPhoneForEmail(formData.primaryPhone);
  const formattedSecondaryPhone = formData.secondaryPhone ? formatPhoneForEmail(formData.secondaryPhone) : null;
  
  return {
    subject: `New Agent Registration: ${formData.agencyName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
        <h2 style="color: #0891b2; background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 0 0 20px 0;">🤝 New Agent Registration</h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #334155;">Registration ID: ${formData.id}</h3>
          <p><strong>Registration Date:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Listed By:</strong> ${formData.listedBy || 'Self Registration'}</p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Agency Information</h3>
          <p><strong>Agency Name:</strong> ${formData.agencyName}</p>
          <p><strong>Registration Number:</strong> ${formData.registrationNumber}</p>
          <p><strong>Year Founded:</strong> ${formData.yearFounded}</p>
          <p><strong>Services Offered:</strong> ${formData.servicesOffered.join(', ')}</p>
          <p><strong>Max Helpers Supply:</strong> ${formData.maxHelpersSupply} helpers per month</p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Owner Details</h3>
          <p><strong>Owner Name:</strong> ${formData.ownerName}</p>
          <p><strong>Date of Birth:</strong> ${formData.ownerDOB}</p>
          <p><strong>ID Type:</strong> ${formData.ownerIDType}</p>
          <p><strong>ID Number:</strong> ${maskIDNumber(formData.ownerIDNumber)}</p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Contact Information</h3>
          <p><strong>Primary Phone:</strong> <a href="tel:${formData.primaryPhone}" style="text-decoration: none; color: #1e40af;">${formattedPrimaryPhone}</a></p>
          ${formData.secondaryPhone ? `<p><strong>Secondary Phone:</strong> <a href="tel:${formData.secondaryPhone}" style="text-decoration: none; color: #1e40af;">${formattedSecondaryPhone}</a></p>` : ''}
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Office Address</h3>
          <p><strong>Address Line 1:</strong> ${formData.officeAddressLine1}</p>
          ${formData.officeAddressLine2 ? `<p><strong>Address Line 2:</strong> ${formData.officeAddressLine2}</p>` : ''}
          <p><strong>City:</strong> ${formData.city}</p>
          <p><strong>State:</strong> ${formData.state}</p>
          <p><strong>Pincode:</strong> ${formData.pincode}</p>
          ${formData.latitude && formData.longitude ? `<p><strong>Coordinates:</strong> ${formData.latitude}, ${formData.longitude}</p>` : ''}
        </div>

        ${formData.notes ? `
        <div style="background-color: #fffbeb; padding: 20px; border: 1px solid #fbbf24; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #92400e;">Additional Notes</h3>
          <p style="white-space: pre-wrap;">${formData.notes}</p>
        </div>
        ` : ''}

        <div style="margin-top: 30px; padding: 20px; background-color: #dbeafe; border-radius: 8px;">
          <p style="margin: 0; color: #1e40af;"><strong>Next Steps:</strong></p>
          <ul style="color: #1e40af; margin: 10px 0;">
            <li>Verify agency documents and certificates</li>
            <li>Conduct background verification of owner</li>
            <li>Schedule onboarding call</li>
            <li>Add to partner network if approved</li>
          </ul>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
        <p style="color: #64748b; font-size: 12px;">This email was automatically generated from the EzyHelpers Agent Registration system.</p>
      </div>
    `,
    text: `
New Agent Registration: ${formData.agencyName}

Registration ID: ${formData.id}
Registration Date: ${new Date().toLocaleString()}
Listed By: ${formData.listedBy || 'Self Registration'}

AGENCY INFORMATION:
- Agency Name: ${formData.agencyName}
- Registration Number: ${formData.registrationNumber}
- Year Founded: ${formData.yearFounded}
- Services Offered: ${formData.servicesOffered.join(', ')}
- Max Helpers Supply: ${formData.maxHelpersSupply} helpers per month

OWNER DETAILS:
- Owner Name: ${formData.ownerName}
- Date of Birth: ${formData.ownerDOB}
- ID Type: ${formData.ownerIDType}
- ID Number: ${maskIDNumber(formData.ownerIDNumber)}

CONTACT INFORMATION:
- Primary Phone: ${formattedPrimaryPhone}
${formData.secondaryPhone ? `- Secondary Phone: ${formattedSecondaryPhone}` : ''}
- Email: ${formData.email}

OFFICE ADDRESS:
- Address Line 1: ${formData.officeAddressLine1}
${formData.officeAddressLine2 ? `- Address Line 2: ${formData.officeAddressLine2}` : ''}
- City: ${formData.city}
- State: ${formData.state}
- Pincode: ${formData.pincode}
${formData.latitude && formData.longitude ? `- Coordinates: ${formData.latitude}, ${formData.longitude}` : ''}

${formData.notes ? `ADDITIONAL NOTES:\n${formData.notes}` : ''}

NEXT STEPS:
- Verify agency documents and certificates
- Conduct background verification of owner
- Schedule onboarding call
- Add to partner network if approved

---
This email was automatically generated from the EzyHelpers Agent Registration system.
    `,
  };
};

const generateHelperRegistrationEmail = (formData: {
  id: string;
  helperType: string;
  firstName: string;
  lastName?: string;
  gender: string;
  dateOfBirth: string;
  age: number;
  nativeState: string;
  currentLocality: string;
  languagesKnown: string[];
  educationLevel: string;
  maritalStatus: string;
  spouseOccupation?: string;
  kidsCount: number;
  smartphoneAvailable: boolean;
  whatsappActive: boolean;
  vaccinationStatus: string;
  experienceMonths: number;
  specialities: string[];
  workingHoursPreference: string;
  preferredLocalities?: string;
  maxPlacementsPerMonth: number;
  expectedSalaryMin: number;
  expectedSalaryMax: number;
  idProofType: string;
  idProofNumber: string;
  bankName?: string;
  bankIFSC?: string;
  accountHolderName?: string;
  accountNumber?: string;
  primaryPhone: string;
  alternatePhone?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  latitude?: number;
  longitude?: number;
  listedBy?: string;
  internalNotes?: string;
}) => {
  const formattedPrimaryPhone = formatPhoneForEmail(formData.primaryPhone);
  const formattedAlternatePhone = formData.alternatePhone ? formatPhoneForEmail(formData.alternatePhone) : null;
  const formattedEmergencyPhone = formData.emergencyContactPhone ? formatPhoneForEmail(formData.emergencyContactPhone) : null;
  
  return {
    subject: `New Helper Registration: ${formData.firstName} ${formData.lastName || ''} - ${formData.helperType}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
        <h2 style="color: #2563eb; background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 0 0 20px 0;">👥 New Helper Registration</h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #334155;">Registration ID: ${formData.id}</h3>
          <p><strong>Registration Date:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Listed By:</strong> ${formData.listedBy || 'Self Registration'}</p>
          <p><strong>Helper Type:</strong> <span style="background-color: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 4px; font-weight: bold;">${formData.helperType}</span></p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Personal Information</h3>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName || ''}</p>
          <p><strong>Gender:</strong> ${formData.gender}</p>
          <p><strong>Date of Birth:</strong> ${formData.dateOfBirth} (Age: ${formData.age} years)</p>
          <p><strong>Native State:</strong> ${formData.nativeState}</p>
          <p><strong>Current Locality:</strong> ${formData.currentLocality}</p>
          <p><strong>Languages Known:</strong> ${formData.languagesKnown.join(', ')}</p>
          <p><strong>Education Level:</strong> ${formData.educationLevel}</p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Family & Personal Details</h3>
          <p><strong>Marital Status:</strong> ${formData.maritalStatus}</p>
          ${formData.spouseOccupation ? `<p><strong>Spouse Occupation:</strong> ${formData.spouseOccupation}</p>` : ''}
          <p><strong>Number of Kids:</strong> ${formData.kidsCount}</p>
          <p><strong>Smartphone Available:</strong> ${formData.smartphoneAvailable ? 'Yes' : 'No'}</p>
          <p><strong>WhatsApp Active:</strong> ${formData.whatsappActive ? 'Yes' : 'No'}</p>
          <p><strong>Vaccination Status:</strong> ${formData.vaccinationStatus}</p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Work Experience & Skills</h3>
          <p><strong>Experience:</strong> ${formData.experienceMonths} months</p>
          <p><strong>Specialities:</strong> ${formData.specialities.join(', ')}</p>
          <p><strong>Working Hours Preference:</strong> ${formData.workingHoursPreference}</p>
          ${formData.preferredLocalities ? `<p><strong>Preferred Localities:</strong> ${formData.preferredLocalities}</p>` : ''}
          <p><strong>Max Placements Per Month:</strong> ${formData.maxPlacementsPerMonth}</p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Salary Expectations</h3>
          <p><strong>Expected Salary Range:</strong> ₹${formData.expectedSalaryMin} - ₹${formData.expectedSalaryMax} per month</p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Identity Verification</h3>
          <p><strong>ID Proof Type:</strong> ${formData.idProofType}</p>
          <p><strong>ID Proof Number:</strong> ${maskIDNumber(formData.idProofNumber)}</p>
        </div>

        ${formData.bankName || formData.accountNumber ? `
        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Banking Details</h3>
          ${formData.bankName ? `<p><strong>Bank Name:</strong> ${formData.bankName}</p>` : ''}
          ${formData.bankIFSC ? `<p><strong>IFSC Code:</strong> ${formData.bankIFSC}</p>` : ''}
          ${formData.accountHolderName ? `<p><strong>Account Holder Name:</strong> ${formData.accountHolderName}</p>` : ''}
          ${formData.accountNumber ? `<p><strong>Account Number:</strong> ${maskAccountNumber(formData.accountNumber)}</p>` : ''}
        </div>
        ` : ''}

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Contact Information</h3>
          <p><strong>Primary Phone:</strong> <a href="tel:${formData.primaryPhone}" style="text-decoration: none; color: #1e40af;">${formattedPrimaryPhone}</a></p>
          ${formData.alternatePhone ? `<p><strong>Alternate Phone:</strong> <a href="tel:${formData.alternatePhone}" style="text-decoration: none; color: #1e40af;">${formattedAlternatePhone}</a></p>` : ''}
          ${formData.emergencyContactName ? `<p><strong>Emergency Contact:</strong> ${formData.emergencyContactName}</p>` : ''}
          ${formData.emergencyContactPhone ? `<p><strong>Emergency Contact Phone:</strong> <a href="tel:${formData.emergencyContactPhone}" style="text-decoration: none; color: #1e40af;">${formattedEmergencyPhone}</a></p>` : ''}
          ${formData.latitude && formData.longitude ? `<p><strong>Location Coordinates:</strong> ${formData.latitude}, ${formData.longitude}</p>` : ''}
        </div>

        ${formData.internalNotes ? `
        <div style="background-color: #fffbeb; padding: 20px; border: 1px solid #fbbf24; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #92400e;">Internal Notes</h3>
          <p style="white-space: pre-wrap;">${formData.internalNotes}</p>
        </div>
        ` : ''}

        <div style="margin-top: 30px; padding: 20px; background-color: #ecfdf5; border-radius: 8px;">
          <p style="margin: 0; color: #065f46;"><strong>Next Steps:</strong></p>
          <ul style="color: #065f46; margin: 10px 0;">
            <li>Verify identity documents and background</li>
            <li>Conduct skill assessment interview</li>
            <li>Check references and previous work history</li>
            <li>Schedule orientation and training</li>
            <li>Add to active helper database if approved</li>
          </ul>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
        <p style="color: #64748b; font-size: 12px;">This email was automatically generated from the EzyHelpers Helper Registration system.</p>
      </div>
    `,
    text: `
New Helper Registration: ${formData.firstName} ${formData.lastName || ''} - ${formData.helperType}

Registration ID: ${formData.id}
Registration Date: ${new Date().toLocaleString()}
Listed By: ${formData.listedBy || 'Self Registration'}
Helper Type: ${formData.helperType}

PERSONAL INFORMATION:
- Name: ${formData.firstName} ${formData.lastName || ''}
- Gender: ${formData.gender}
- Date of Birth: ${formData.dateOfBirth} (Age: ${formData.age} years)
- Native State: ${formData.nativeState}
- Current Locality: ${formData.currentLocality}
- Languages Known: ${formData.languagesKnown.join(', ')}
- Education Level: ${formData.educationLevel}

FAMILY & PERSONAL DETAILS:
- Marital Status: ${formData.maritalStatus}
${formData.spouseOccupation ? `- Spouse Occupation: ${formData.spouseOccupation}` : ''}
- Number of Kids: ${formData.kidsCount}
- Smartphone Available: ${formData.smartphoneAvailable ? 'Yes' : 'No'}
- WhatsApp Active: ${formData.whatsappActive ? 'Yes' : 'No'}
- Vaccination Status: ${formData.vaccinationStatus}

WORK EXPERIENCE & SKILLS:
- Experience: ${formData.experienceMonths} months
- Specialities: ${formData.specialities.join(', ')}
- Working Hours Preference: ${formData.workingHoursPreference}
${formData.preferredLocalities ? `- Preferred Localities: ${formData.preferredLocalities}` : ''}
- Max Placements Per Month: ${formData.maxPlacementsPerMonth}

SALARY EXPECTATIONS:
- Expected Salary Range: ₹${formData.expectedSalaryMin} - ₹${formData.expectedSalaryMax} per month

IDENTITY VERIFICATION:
- ID Proof Type: ${formData.idProofType}
- ID Proof Number: ${maskIDNumber(formData.idProofNumber)}

${formData.bankName || formData.accountNumber ? `BANKING DETAILS:
${formData.bankName ? `- Bank Name: ${formData.bankName}` : ''}
${formData.bankIFSC ? `- IFSC Code: ${formData.bankIFSC}` : ''}
${formData.accountHolderName ? `- Account Holder Name: ${formData.accountHolderName}` : ''}
${formData.accountNumber ? `- Account Number: ${maskAccountNumber(formData.accountNumber)}` : ''}
` : ''}

CONTACT INFORMATION:
- Primary Phone: ${formattedPrimaryPhone}
${formData.alternatePhone ? `- Alternate Phone: ${formattedAlternatePhone}` : ''}
${formData.emergencyContactName ? `- Emergency Contact: ${formData.emergencyContactName}` : ''}
${formData.emergencyContactPhone ? `- Emergency Contact Phone: ${formattedEmergencyPhone}` : ''}
${formData.latitude && formData.longitude ? `- Location Coordinates: ${formData.latitude}, ${formData.longitude}` : ''}

${formData.internalNotes ? `INTERNAL NOTES:\n${formData.internalNotes}` : ''}

NEXT STEPS:
- Verify identity documents and background
- Conduct skill assessment interview
- Check references and previous work history
- Schedule orientation and training
- Add to active helper database if approved

---
This email was automatically generated from the EzyHelpers Helper Registration system.
    `,
  };
};

const generateRequirementLeadEmail = (formData: {
  name: string;
  email: string;
  contactNo: string;
  areaOfService: string;
  apartment: string;
  latitude: number | null;
  longitude: number | null;
  requirementDescription: string;
  address?: string;
  requestId: string;
  timestamp: string;
  sourceUrl?: string;
  databaseSaved?: boolean;
}) => {
  const formattedContactNo = formatPhoneForEmail(formData.contactNo);
  
  return {
    subject: `New Service Requirement: ${formData.areaOfService} - ${formData.requestId}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0074C8; background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 0 0 20px 0;">📋 New Service Requirement Received</h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #334155;">Request Details</h3>
          <p><strong>Request ID:</strong> <span style="font-family: monospace; background-color: #e1e8f0; padding: 2px 6px; border-radius: 4px;">${formData.requestId}</span></p>
          <p><strong>Submission Time:</strong> ${new Date(formData.timestamp).toLocaleString()}</p>
          <p><strong>Priority:</strong> <span style="background-color: #fef3c7; color: #92400e; padding: 2px 8px; border-radius: 4px; font-weight: bold;">New Requirement</span></p>
          ${formData.databaseSaved === false ? `
          <p><strong>⚠️ Database Status:</strong> <span style="background-color: #fef2f2; color: #dc2626; padding: 2px 8px; border-radius: 4px; font-weight: bold;">NOT SAVED TO DATABASE</span></p>
          <p style="color: #dc2626; font-size: 14px;"><em>This lead was received via email only. Please manually enter into system.</em></p>
          ` : formData.databaseSaved === true ? `
          <p><strong>✅ Database Status:</strong> <span style="background-color: #f0fdf4; color: #166534; padding: 2px 8px; border-radius: 4px; font-weight: bold;">SAVED TO DATABASE</span></p>
          ` : ''}
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Customer Information</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #0074C8;">${formData.email}</a></p>
          <p><strong>Contact Number:</strong> <a href="tel:${formData.contactNo}" style="color: #1e40af; text-decoration: none;">${formattedContactNo}</a></p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">📍 Location Details</h3>
          <p><strong>Area of Service:</strong> ${formData.areaOfService}</p>
          <p><strong>Apartment/Building:</strong> ${formData.apartment}</p>
          ${formData.address ? `<p><strong>Detected Address:</strong> ${formData.address}</p>` : ''}
          ${formData.latitude && formData.longitude ? `
          <p><strong>Coordinates:</strong> ${formData.latitude.toFixed(6)}, ${formData.longitude.toFixed(6)}</p>
          <p><strong>Maps Link:</strong> <a href="https://www.google.com/maps?q=${formData.latitude},${formData.longitude}" target="_blank" style="color: #0074C8;">View on Google Maps</a></p>
          ` : ''}
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">📝 Service Requirements</h3>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; white-space: pre-wrap; font-family: Arial, sans-serif; line-height: 1.6;">${formData.requirementDescription}</div>
        </div>

        <div style="margin-top: 30px; padding: 20px; background-color: #fef2f2; border-left: 4px solid #ef4444; border-radius: 8px;">
          <p style="margin: 0; color: #dc2626;"><strong>🚨 Immediate Action Required:</strong></p>
          <ul style="color: #dc2626; margin: 10px 0;">
            <li>Contact customer within 30 minutes</li>
            <li>Assess requirements and provide quote</li>
            <li>Match with suitable helpers</li>
            <li>Follow up within 24 hours</li>
          </ul>
        </div>

        ${formData.sourceUrl ? `
        <div style="margin-top: 20px; padding: 15px; background-color: #f0f8ff; border-radius: 8px;">
          <p style="margin: 0; color: #1e40af;"><strong>Source URL:</strong> <a href="${formData.sourceUrl}" target="_blank" style="color: #1e40af; text-decoration: underline;">${formData.sourceUrl}</a></p>
        </div>
        ` : ''}

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
        <p style="color: #64748b; font-size: 12px;">This email was automatically generated from the EzyHelpers Service Requirement Form.</p>
      </div>
    `,
    text: `
New Service Requirement: ${formData.areaOfService} - ${formData.requestId}

REQUEST DETAILS:
- Request ID: ${formData.requestId}
- Submission Time: ${new Date(formData.timestamp).toLocaleString()}
- Priority: New Requirement
${formData.databaseSaved === false ? '- Database Status: NOT SAVED TO DATABASE (manual entry required)' : formData.databaseSaved === true ? '- Database Status: SAVED TO DATABASE' : ''}

CUSTOMER INFORMATION:
- Name: ${formData.name}
- Email: ${formData.email}
- Contact Number: ${formattedContactNo}

LOCATION DETAILS:
- Area of Service: ${formData.areaOfService}
- Apartment/Building: ${formData.apartment}
${formData.address ? `- Detected Address: ${formData.address}` : ''}
${formData.latitude && formData.longitude ? `- Coordinates: ${formData.latitude.toFixed(6)}, ${formData.longitude.toFixed(6)}` : ''}
${formData.latitude && formData.longitude ? `- Maps Link: https://www.google.com/maps?q=${formData.latitude},${formData.longitude}` : ''}

SERVICE REQUIREMENTS:
${formData.requirementDescription}

IMMEDIATE ACTION REQUIRED:
- Contact customer within 30 minutes
- Assess requirements and provide quote
- Match with suitable helpers  
- Follow up within 24 hours

${formData.sourceUrl ? `Source URL: ${formData.sourceUrl}` : ''}

---
This email was automatically generated from the EzyHelpers Service Requirement Form.
    `,
  };
};

// Helper function to send email with retry logic
async function sendEmailWithRetry(
  transporter: nodemailer.Transporter,
  mailOptions: nodemailer.SendMailOptions
): Promise<EmailSendResult> {
  try {
    const result = await pRetry(
      async () => {
        return await transporter.sendMail(mailOptions);
      },
      {
        retries: EMAIL.MAX_RETRY_ATTEMPTS,
        factor: EMAIL.RETRY_BACKOFF_MULTIPLIER,
        minTimeout: EMAIL.RETRY_DELAY_MS,
        onFailedAttempt: (error) => {
          logger.warn(`Email send attempt ${error.attemptNumber} failed`, {
            retriesLeft: error.retriesLeft,
          });
        },
      }
    );

    logger.emailSent(
      String(mailOptions.to),
      String(mailOptions.subject),
      true,
      { messageId: result.messageId }
    );

    return { success: true, messageId: result.messageId };
  } catch (error) {
    logger.emailSent(
      String(mailOptions.to),
      String(mailOptions.subject),
      false,
      { error: error instanceof Error ? error.message : 'Unknown error' }
    );

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Main email sending function
export const sendLeadEmail = async (
  leadType: LeadType,
  formData: any, // TODO: Create union type for all form data types
  requestId?: string,
  sourceUrl?: string
): Promise<EmailSendResult> => {
  try {
    // Get email recipients from environment variables
    // Format: email1@example.com,email2@example.com,email3@example.com
    const emailRecipientsEnv = process.env.EMAIL_RECIPIENTS || process.env.ADMIN_EMAIL;

    if (!emailRecipientsEnv) {
      console.error('EMAIL_RECIPIENTS or ADMIN_EMAIL environment variable not set');
      return { success: false, error: 'Email recipients not configured' };
    }

    // Split by comma and trim whitespace
    const adminEmail = emailRecipientsEnv
      .split(',')
      .map(email => email.trim())
      .filter(Boolean)
      .join(', ');

    if (!adminEmail) {
      console.error('No valid email recipients found');
      return { success: false, error: 'Admin email not configured' };
    }

    const transporter = createTransporter();
    
    let emailContent;
    
    switch (leadType) {
      case 'contact':
        emailContent = generateContactLeadEmail({ ...formData, sourceUrl });
        break;
      case 'hire_helper':
        emailContent = generateHireHelperLeadEmail({ ...formData, requestId: requestId || 'N/A', sourceUrl });
        break;
      case 'general':
        emailContent = generateGeneralLeadEmail({ ...formData, sourceUrl });
        break;
      case 'agent_registration':
        emailContent = generateAgentRegistrationEmail(formData);
        break;
      case 'helper_registration':
        emailContent = generateHelperRegistrationEmail(formData);
        break;
      case 'requirement':
        emailContent = generateRequirementLeadEmail({ ...formData, requestId: requestId || 'N/A', sourceUrl });
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

    // Send email with retry logic
    return await sendEmailWithRetry(transporter, mailOptions);
  } catch (error) {
    logger.error('Error in sendLeadEmail', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

// Specific EzyNest booking email function with file attachment
export const sendEzyNestBookingEmail = async (
  bookingDetails: any,
  idProofFile?: File | null
) => {
  try {
    const transporter = createTransporter();
    
    const serviceName = `EzyNest Booking - ${bookingDetails.numberOfDays} ${bookingDetails.numberOfDays === 1 ? 'Day' : 'Days'}`;
    
    const emailContent = generateGeneralLeadEmail({
      name: bookingDetails.name,
      phone: bookingDetails.phone,
      service: serviceName,
      city: 'Bangalore',
      email: bookingDetails.email,
      additionalDetails: {
        bookingId: bookingDetails.bookingId,
        checkInDate: bookingDetails.checkInDate,
        checkInTime: bookingDetails.checkInTime,
        checkOutDate: bookingDetails.checkOutDate,
        numberOfDays: bookingDetails.numberOfDays,
        employerName: bookingDetails.employerName,
        employerAddress: bookingDetails.employerAddress,
        permanentAddress: bookingDetails.permanentAddress,
        idProofNumber: bookingDetails.idProofNumber,
        idProofFileName: bookingDetails.idProofFileName,
        bookingType: 'EzyNest Women-Only Short Stay'
      }
    });

    // Get email recipients from environment variables
    const emailRecipientsEnv = process.env.EMAIL_RECIPIENTS || process.env.ADMIN_EMAIL || '';
    const adminEmail = emailRecipientsEnv
      .split(',')
      .map(email => email.trim())
      .filter(Boolean)
      .join(', ');

    let mailOptions: any = {
      from: process.env.SMTP_USER,
      to: adminEmail,
      replyTo: bookingDetails.email || process.env.SMTP_USER,
      ...emailContent,
    };

    // Add ID proof attachment if provided
    if (idProofFile) {
      const buffer = await idProofFile.arrayBuffer();
      const uint8Array = new Uint8Array(buffer);
      
      mailOptions.attachments = [
        {
          filename: `ID_Proof_${bookingDetails.bookingId}.${idProofFile.name.split('.').pop()}`,
          content: uint8Array,
          contentType: idProofFile.type,
        }
      ];
    }

    const result = await transporter.sendMail(mailOptions);
    
    console.log('EzyNest booking email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
    
  } catch (error) {
    console.error('Error sending EzyNest booking email:', error);
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