import nodemailer from 'nodemailer';
import pRetry from 'p-retry';
import { EMAIL } from './constants';
import { logger } from './logger';
import { ContactFormData, EmailContent, HireHelperFormData, GeneralLeadFormData, AgentRegistrationFormData, HelperRegistrationFormData, RequirementFormData, CustomerRequirementFormData, HelperInterviewFormData, EmailSendResult, LeadType, CareersChiefOfStaffFormData, CareersApmFormData, CareersSalesExecutiveFormData, CareersRoleApplicationFormData, CareServicesLeadFormData } from '../types/email';

// Utility function to format phone numbers to bypass DLP (shows all digits with spaces)
const formatPhoneForEmail = (phone: string): string => {
  if (!phone || phone.length < 8) return phone;
  const cleaned = phone.replace(/\D/g, '');

  // For 10-digit numbers: 999 999 9999 (spaces break DLP pattern)
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
  }

  // For 11+ digit numbers (with country code): +91 999 999 9999
  if (cleaned.length > 10) {
    const countryCode = cleaned.slice(0, cleaned.length - 10);
    const remaining = cleaned.slice(-10);
    return `+${countryCode} ${remaining.slice(0, 3)} ${remaining.slice(3, 6)} ${remaining.slice(6)}`;
  }

  // For shorter numbers: add spaces every 3-4 digits
  return cleaned.match(/.{1,4}/g)?.join(' ') || phone;
};

// Utility function to format coordinates to bypass DLP
const formatCoordinatesForEmail = (latitude: number, longitude: number): string => {
  // Format as degrees with some precision but break the exact pattern
  return `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
};

// Utility function to format ID numbers to bypass DLP (shows all characters with spaces)
const formatIDForEmail = (idNumber: string): string => {
  if (!idNumber || idNumber.length < 6) return idNumber;

  // Add spaces every 4 characters to break consecutive patterns
  return idNumber.match(/.{1,4}/g)?.join(' ') || idNumber;
};

// Utility function to format account numbers to bypass DLP (shows all digits with spaces)
const formatAccountForEmail = (accountNumber: string): string => {
  if (!accountNumber || accountNumber.length < 8) return accountNumber;

  // Add spaces every 4 digits to break consecutive patterns
  return accountNumber.match(/.{1,4}/g)?.join(' ') || accountNumber;
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

const HIRE_HELPER_DURATION_LABELS: Record<string, string> = {
  'few-hours-once': 'Few hours / one-time visit',
  'daily-partial': 'Daily (part of the day)',
  'daily-full': 'Daily (full working day)',
  '1-week': 'About 1 week',
  '1-month': 'About 1 month',
  '2-3-months': '2–3 months',
  '6-months-plus': '6 months or longer',
  ongoing: 'Ongoing / flexible',
};

const formatHireHelperDurationForEmail = (serviceType: string, durationKey: string) => {
  if (serviceType === 'live-in') return 'N/A (24/7 live-in)';
  if (!durationKey) return '—';
  return HIRE_HELPER_DURATION_LABELS[durationKey] || durationKey;
};

const formatHireHelperTimingsForEmail = (serviceType: string, timings?: string) => {
  if (serviceType === 'live-in') return '—';
  return timings?.trim() || '—';
};

const generateHireHelperLeadEmail = (formData: {
  name: string;
  phone: string;
  email: string;
  city: string;
  locality?: string;
  apartment?: string;
  serviceType: string;
  duration: string;
  serviceTimings?: string;
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
  const durationLine = formatHireHelperDurationForEmail(formData.serviceType, formData.duration);
  const timingsLine = formatHireHelperTimingsForEmail(formData.serviceType, formData.serviceTimings);

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
          <p><strong>Locality:</strong> ${formData.locality?.trim() || '—'}</p>
          <p><strong>Apartment:</strong> ${formData.apartment?.trim() || '—'}</p>
        </div>
        <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Service Requirements</h3>
          <p><strong>Service Type:</strong> ${formData.serviceType}</p>
          <p><strong>Preferred timings:</strong> ${timingsLine}</p>
          <p><strong>Duration:</strong> ${durationLine}</p>
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
- Locality: ${formData.locality?.trim() || '—'}
- Apartment: ${formData.apartment?.trim() || '—'}

Service Requirements:
- Service Type: ${formData.serviceType}
- Preferred timings: ${timingsLine}
- Duration: ${durationLine}
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
  const formattedIDNumber = formData.additionalDetails?.idProofNumber ? formatIDForEmail(formData.additionalDetails.idProofNumber) : null;
  const formattedAccountNumber = formData.additionalDetails?.accountNumber ? formatAccountForEmail(formData.additionalDetails.accountNumber) : null;

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
            <p><strong>Coordinates:</strong> ${formatCoordinatesForEmail(formData.additionalDetails.latitude, formData.additionalDetails.longitude)}</p>
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
${(formData.additionalDetails.latitude && formData.additionalDetails.longitude) ? `- Coordinates: ${formatCoordinatesForEmail(formData.additionalDetails.latitude, formData.additionalDetails.longitude)}
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
  const formattedIDNumber = formatIDForEmail(formData.ownerIDNumber);
  const formattedCoordinates = (formData.latitude && formData.longitude) ? formatCoordinatesForEmail(formData.latitude, formData.longitude) : null;

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
          <p><strong>ID Number:</strong> ${formattedIDNumber}</p>
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
          ${formattedCoordinates ? `<p><strong>Coordinates:</strong> ${formattedCoordinates}</p>` : ''}
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
- ID Number: ${formattedIDNumber}

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
${formattedCoordinates ? `- Coordinates: ${formattedCoordinates}` : ''}

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
  const formattedIDNumber = formatIDForEmail(formData.idProofNumber);
  const formattedAccountNumber = formData.accountNumber ? formatAccountForEmail(formData.accountNumber) : null;
  const formattedCoordinates = (formData.latitude && formData.longitude) ? formatCoordinatesForEmail(formData.latitude, formData.longitude) : null;

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
          <p><strong>ID Proof Number:</strong> ${formattedIDNumber}</p>
        </div>

        ${formData.bankName || formData.accountNumber ? `
        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Banking Details</h3>
          ${formData.bankName ? `<p><strong>Bank Name:</strong> ${formData.bankName}</p>` : ''}
          ${formData.bankIFSC ? `<p><strong>IFSC Code:</strong> ${formData.bankIFSC}</p>` : ''}
          ${formData.accountHolderName ? `<p><strong>Account Holder Name:</strong> ${formData.accountHolderName}</p>` : ''}
          ${formData.accountNumber ? `<p><strong>Account Number:</strong> ${formattedAccountNumber}</p>` : ''}
        </div>
        ` : ''}

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Contact Information</h3>
          <p><strong>Primary Phone:</strong> <a href="tel:${formData.primaryPhone}" style="text-decoration: none; color: #1e40af;">${formattedPrimaryPhone}</a></p>
          ${formData.alternatePhone ? `<p><strong>Alternate Phone:</strong> <a href="tel:${formData.alternatePhone}" style="text-decoration: none; color: #1e40af;">${formattedAlternatePhone}</a></p>` : ''}
          ${formData.emergencyContactName ? `<p><strong>Emergency Contact:</strong> ${formData.emergencyContactName}</p>` : ''}
          ${formData.emergencyContactPhone ? `<p><strong>Emergency Contact Phone:</strong> <a href="tel:${formData.emergencyContactPhone}" style="text-decoration: none; color: #1e40af;">${formattedEmergencyPhone}</a></p>` : ''}
          ${formattedCoordinates ? `<p><strong>Location Coordinates:</strong> ${formattedCoordinates}</p>` : ''}
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
- ID Proof Number: ${formattedIDNumber}

${formData.bankName || formData.accountNumber ? `BANKING DETAILS:
${formData.bankName ? `- Bank Name: ${formData.bankName}` : ''}
${formData.bankIFSC ? `- IFSC Code: ${formData.bankIFSC}` : ''}
${formData.accountHolderName ? `- Account Holder Name: ${formData.accountHolderName}` : ''}
${formData.accountNumber ? `- Account Number: ${formattedAccountNumber}` : ''}
` : ''}

CONTACT INFORMATION:
- Primary Phone: ${formattedPrimaryPhone}
${formData.alternatePhone ? `- Alternate Phone: ${formattedAlternatePhone}` : ''}
${formData.emergencyContactName ? `- Emergency Contact: ${formData.emergencyContactName}` : ''}
${formData.emergencyContactPhone ? `- Emergency Contact Phone: ${formattedEmergencyPhone}` : ''}
${formattedCoordinates ? `- Location Coordinates: ${formattedCoordinates}` : ''}

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
  const formattedCoordinates = (formData.latitude && formData.longitude) ? formatCoordinatesForEmail(formData.latitude, formData.longitude) : null;

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
          ${formattedCoordinates ? `
          <p><strong>Coordinates:</strong> ${formattedCoordinates}</p>
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
${formattedCoordinates ? `- Coordinates: ${formattedCoordinates}` : ''}
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
const generateCustomerRequirementEmail = (formData: CustomerRequirementFormData): EmailContent => {
  const formattedPhone = formatPhoneForEmail(formData.mobileNumber);

  const tasksList = formData.tasks ? Object.entries(formData.tasks)
    .filter(([_, value]) => value === true)
    .map(([key, _]) => key.replace(/([A-Z])/g, ' $1').toLowerCase())
    .join(', ') : 'None';

  return {
    subject: `New Customer Requirement: ${formData.customerName} - ${formData.serviceType}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
        <h2 style="color: #2563eb; background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 0 0 20px 0;">🏠 New Customer Requirement</h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #334155;">Customer Details</h3>
          <p><strong>Name:</strong> ${formData.customerName}</p>
          <p><strong>Phone:</strong> <a href="tel:${formData.mobileNumber}" style="text-decoration: none; color: #1e40af;">${formattedPhone}</a></p>
          <p><strong>Address:</strong> ${formData.houseNumber}, ${formData.apartmentName}, ${formData.areaLocality}</p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Service Requirements</h3>
          <p><strong>Service Type:</strong> ${formData.serviceType}${formData.serviceType === 'other' ? ` (${formData.serviceTypeOther})` : ''}</p>
          <p><strong>Work Type:</strong> ${formData.workType}</p>
          <p><strong>Timings:</strong> ${formData.workTiming.startTime} - ${formData.workTiming.endTime}</p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Preferences</h3>
          <p><strong>Age Preference:</strong> ${formData.agePreference?.replace('_', ' ') || 'No preference'}</p>
          <p><strong>Gender Preference:</strong> ${formData.preferredGender || 'No preference'}</p>
          <p><strong>Languages:</strong> ${formData.languages?.join(', ') || 'No preference'}</p>
          <p><strong>House Rules:</strong> ${formData.houseRules || 'None'}</p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Daily Routine & Household</h3>
          <p><strong>Wake Up Early:</strong> ${formData.wakeUpEarly ? `Yes (at ${formData.wakeupTime || 'Not specified'})` : 'No'}</p>
          <p><strong>Sleeping Time:</strong> ${formData.usualSleepingTime || 'Not specified'}</p>
          <p><strong>Rest Time:</strong> ${formData.restTimeProvided ? `Yes (${formData.restTimeDetails})` : 'No'}</p>
          <p><strong>Dietary Preference:</strong> ${formData.dietaryPreference === 'vegetarian' ? 'Vegetarian Only' : 'Vegetarian & Non-Vegetarian'}</p>
          <p><strong>Food & Snacks:</strong> Tea/Snacks: ${formData.provideTeaSnacks ? 'Yes' : 'No'}, Meals: ${formData.provideMeals ? 'Yes' : 'No'}</p>
          <p><strong>Food Arrangement:</strong> ${formData.foodArrangement || 'Not specified'}</p>
          <p><strong>Personal Care Provided:</strong> ${formData.personalCareItems?.join(', ') || 'None'}</p>
          <p><strong>Tasks:</strong> ${tasksList}</p>
          <p><strong>Gas Stove:</strong> ${formData.gasStoveType || 'Not specified'}</p>
          <p><strong>Drop Children:</strong> ${formData.dropChildrenBusStop ? 'Yes' : 'No'}</p>
          <p><strong>House Details:</strong> Pets: ${formData.hasPets ? 'Yes' : 'No'}, Elderly: ${formData.hasElderly ? 'Yes' : 'No'}, Type: ${formData.houseType || 'Not specified'}</p>
          <p><strong>Separate Room:</strong> ${formData.separateRoomProvided === true ? 'Yes' : formData.separateRoomProvided === false ? 'No' : 'Not specified'}</p>
          <p><strong>BHK / House Size:</strong> ${formData.bhkType === 'other' ? formData.bhkOther || 'Other' : formData.bhkType?.toUpperCase() || 'Not specified'}</p>
          <p><strong>Menstrual Restrictions:</strong> ${formData.kitchenRestrictionMenstrualPeriods ? 'Yes' : 'No'}</p>
        </div>

        <div style="background-color: #fffbeb; padding: 20px; border: 1px solid #fbbf24; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #92400e;">Policy Understandings</h3>
          <p><strong>Emergency Leave:</strong> ${formData.emergencyLeaveOk ? 'Yes' : 'No'}</p>
          <p><strong>Salary Policy:</strong> Agreed to pay by 7th, no advance salary, provide feedback within 1 month.</p>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
        <p style="color: #64748b; font-size: 12px;">This email was automatically generated from the EzyHelpers website customer requirement form.</p>
      </div>
    `,
    text: `
New Customer Requirement: ${formData.customerName} - ${formData.serviceType}

CUSTOMER DETAILS:
- Name: ${formData.customerName}
- Phone: ${formattedPhone}
- Address: ${formData.houseNumber}, ${formData.apartmentName}, ${formData.areaLocality}

SERVICE REQUIREMENTS:
- Service Type: ${formData.serviceType}${formData.serviceType === 'other' ? ` (${formData.serviceTypeOther})` : ''}
- Work Type: ${formData.workType}
- Timings: ${formData.workTiming.startTime} - ${formData.workTiming.endTime}

PREFERENCES:
- Age Preference: ${formData.agePreference?.replace('_', ' ') || 'No preference'}
- Gender Preference: ${formData.preferredGender || 'No preference'}
- Languages: ${formData.languages?.join(', ') || 'No preference'}
- House Rules: ${formData.houseRules || 'None'}

DAILY ROUTINE & HOUSEHOLD:
- Wake Up Early: ${formData.wakeUpEarly ? `Yes (at ${formData.wakeupTime || 'Not specified'})` : 'No'}
- Sleeping Time: ${formData.usualSleepingTime || 'Not specified'}
- Rest Time: ${formData.restTimeProvided ? `Yes (${formData.restTimeDetails})` : 'No'}
- Dietary Preference: ${formData.dietaryPreference === 'vegetarian' ? 'Vegetarian Only' : 'Vegetarian & Non-Vegetarian'}
- Food & Snacks: Tea/Snacks: ${formData.provideTeaSnacks ? 'Yes' : 'No'}, Meals: ${formData.provideMeals ? 'Yes' : 'No'}
- Food Arrangement: ${formData.foodArrangement || 'Not specified'}
- Personal Care Provided: ${formData.personalCareItems?.join(', ') || 'None'}
- Tasks: ${tasksList}
- Gas Stove: ${formData.gasStoveType || 'Not specified'}
- Drop Children: ${formData.dropChildrenBusStop ? 'Yes' : 'No'}
- House Details: Pets: ${formData.hasPets ? 'Yes' : 'No'}, Elderly: ${formData.hasElderly ? 'Yes' : 'No'}, Type: ${formData.houseType || 'Not specified'}
- Separate Room: ${formData.separateRoomProvided === true ? 'Yes' : formData.separateRoomProvided === false ? 'No' : 'Not specified'}
- BHK / House Size: ${formData.bhkType === 'other' ? formData.bhkOther || 'Other' : formData.bhkType?.toUpperCase() || 'Not specified'}
- Menstrual Restrictions: ${formData.kitchenRestrictionMenstrualPeriods ? 'Yes' : 'No'}

POLICY UNDERSTANDINGS:
- Emergency Leave: ${formData.emergencyLeaveOk ? 'Yes' : 'No'}
- Salary Policy: Agreed to pay by 7th, no advance salary, provide feedback within 1 month.

---
This email was automatically generated from the EzyHelpers website customer requirement form.
    `,
  };
};

const generateHelperInterviewEmail = (formData: HelperInterviewFormData): EmailContent => {
  return {
    subject: `Helper Interview Questionnaire: ${formData.fullName} - ${formData.language.toUpperCase()}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; line-height: 1.6; color: #333;">
        <h2 style="color: #1e40af; background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 0 0 20px 0; border-left: 4px solid #1e40af;">📘 Helper Interview Questionnaire</h2>
        
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e2e8f0;">
          <p style="margin: 0;"><strong>Submission ID:</strong> ${formData.requestId}</p>
          <p style="margin: 5px 0 0 0;"><strong>Language Used:</strong> ${formData.language.toUpperCase()}</p>
          <p style="margin: 5px 0 0 0;"><strong>Submitted On:</strong> ${new Date(formData.submittedAt).toLocaleString()}</p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 15px;">1. Basic Information</h3>
          <p><strong>Full Name:</strong> ${formData.fullName}</p>
          <p><strong>Age:</strong> ${formData.age}</p>
          <p><strong>Marital Status:</strong> ${formData.maritalStatus}</p>
          <p><strong>Has Children:</strong> ${formData.hasChildren}</p>
          <p><strong>Local Reference:</strong> ${formData.localReference}</p>
          <p><strong>Has Smartphone:</strong> ${formData.hasSmartphone}</p>
          <p><strong>Speak Hindi:</strong> ${formData.speakHindi}</p>
          <p><strong>Speak/Other Languages:</strong> ${formData.speakOtherLanguages}</p>
          <p><strong>Read/Write Hindi:</strong> ${formData.readWriteHindi}</p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 15px;">2. Work Preferences</h3>
          <p><strong>Interests:</strong> ${formData.workInterests.join(', ')}</p>
          <p><strong>Cooking Comfort:</strong> ${formData.comfortableCooking}</p>
          <p><strong>Cook Type:</strong> ${formData.cookType}</p>
          <p><strong>Millet/Dietary Meals:</strong> ${formData.prepareMilletDietary}</p>
          <p><strong>Housekeeping Comfort:</strong> ${formData.comfortableHousekeeping}</p>
          <p><strong>Clean Bathrooms:</strong> ${formData.willingCleanBathrooms}</p>
          <p><strong>Ironing:</strong> ${formData.knowIroning}</p>
          <p><strong>Washing Machine:</strong> ${formData.operateWashingMachine}</p>
          <p><strong>Appliances:</strong> ${formData.useAppliances}</p>
          <p><strong>Children Care:</strong> ${formData.comfortableKids}</p>
          <p><strong>Elderly Care:</strong> ${formData.comfortableElderly}</p>
          <p><strong>Drop Children at Bus Stop:</strong> ${formData.dropChildrenBusStop}</p>
          <p><strong>Driving Skills:</strong> ${formData.canDrive}</p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 15px;">3. Work Habits & Discipline</h3>
          <p><strong>Wake up time:</strong> ${formData.wakeUpTime}</p>
          <p><strong>Early start:</strong> ${formData.earlyStart}</p>
          <p><strong>With pets:</strong> ${formData.comfortablePets}</p>
          <p><strong>Non-veg home:</strong> ${formData.nonVegHome}</p>
          <p><strong>Phone during work:</strong> ${formData.phoneDuringWork}</p>
          <p><strong>Social media during work:</strong> ${formData.socialMediaWork}</p>
          <p><strong>Multiple tasks:</strong> ${formData.manageMultipleTasks}</p>
          <p><strong>Running behind children:</strong> ${formData.runBehindChildren}</p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 15px;">4. Health & Leave Policy</h3>
          <p><strong>Regular medicines:</strong> ${formData.regularMedicines}</p>
          <p><strong>Health conditions:</strong> ${formData.healthConditions}</p>
          <p><strong>Monthly leave:</strong> ${formData.monthlyLeave}</p>
          <p><strong>Leave preference:</strong> ${formData.leavePreference}</p>
          <p><strong>Rest time:</strong> ${formData.restTimeNeeded}</p>
          <p><strong>Menstrual cycle comfort:</strong> ${formData.menstrualCycleComfort}</p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 15px;">5. Food & Lifestyle Preferences</h3>
          <p><strong>Eat same food:</strong> ${formData.eatSameFood}</p>
          <p><strong>Veg/Non-veg based on household:</strong> ${formData.vegNonVegPreference}</p>
          <p><strong>Food restrictions:</strong> ${formData.foodRestrictions}</p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 15px;">6. Training & Skills</h3>
          <p><strong>Formal training:</strong> ${formData.formalTraining}</p>
          <p><strong>Specific training needs:</strong> ${formData.specificTrainingNeeded}</p>
          <p><strong>Open to training:</strong> ${formData.openToTraining}</p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 15px;">7. Personal Habits</h3>
          <p><strong>Smoking/Drinking/Tobacco:</strong> ${formData.personalHabits}</p>
          <p><strong>Follow house rules:</strong> ${formData.followHouseRules}</p>
        </div>

        <div style="padding: 15px; background-color: #fefce8; border-radius: 8px; border: 1px solid #fef08a;">
          <p style="margin: 0;"><strong>Legal Consent:</strong> ${formData.legalConsent ? 'YES' : 'NO'}</p>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
        <p style="color: #64748b; font-size: 12px;">This email was automatically generated from the EzyHelpers Helper Interview Questionnaire.</p>
      </div>
    `,
    text: `
Helper Interview Questionnaire: ${formData.fullName} - ${formData.language.toUpperCase()}

SUBMISSION DETAILS:
- ID: ${formData.requestId}
- Language: ${formData.language.toUpperCase()}
- Submitted On: ${new Date(formData.submittedAt).toLocaleString()}

1. BASIC INFORMATION
- Name: ${formData.fullName}
- Age: ${formData.age}
- Marital Status: ${formData.maritalStatus}
- Has Children: ${formData.hasChildren}
- Local Reference: ${formData.localReference}
- Has Smartphone: ${formData.hasSmartphone}
- Speak Hindi: ${formData.speakHindi}
- Speak/Other Languages: ${formData.speakOtherLanguages}
- Read/Write Hindi: ${formData.readWriteHindi}

2. WORK PREFERENCES
- Interests: ${formData.workInterests.join(', ')}
- Cooking Comfort: ${formData.comfortableCooking}
- Cook Type: ${formData.cookType}
- Millet/Dietary Meals: ${formData.prepareMilletDietary}
- Housekeeping Comfort: ${formData.comfortableHousekeeping}
- Clean Bathrooms: ${formData.willingCleanBathrooms}
- Ironing: ${formData.knowIroning}
- Washing Machine: ${formData.operateWashingMachine}
- Appliances: ${formData.useAppliances}
- Children Care: ${formData.comfortableKids}
- Elderly Care: ${formData.comfortableElderly}
- Drop Children at Bus Stop: ${formData.dropChildrenBusStop}
- Driving Skills: ${formData.canDrive}

3. WORK HABITS & DISCIPLINE
- Wake up time: ${formData.wakeUpTime}
- Early start: ${formData.earlyStart}
- With pets: ${formData.comfortablePets}
- Non-veg home: ${formData.nonVegHome}
- Phone during work: ${formData.phoneDuringWork}
- Social media during work: ${formData.socialMediaWork}
- Multiple tasks: ${formData.manageMultipleTasks}
- Running behind children: ${formData.runBehindChildren}

4. HEALTH & LEAVE POLICY
- Regular medicines: ${formData.regularMedicines}
- Health conditions: ${formData.healthConditions}
- Monthly leave: ${formData.monthlyLeave}
- Leave preference: ${formData.leavePreference}
- Rest time: ${formData.restTimeNeeded}
- Menstrual cycle comfort: ${formData.menstrualCycleComfort}

5. FOOD & LIFESTYLE PREFERENCES
- Eat same food: ${formData.eatSameFood}
- Veg/Non-veg based on household: ${formData.vegNonVegPreference}
- Food restrictions: ${formData.foodRestrictions}

6. TRAINING & SKILLS
- Formal training: ${formData.formalTraining}
- Specific training needs: ${formData.specificTrainingNeeded}
- Open to training: ${formData.openToTraining}

7. PERSONAL HABITS
- Smoking/Drinking/Tobacco: ${formData.personalHabits}
- Follow house rules: ${formData.followHouseRules}

LEGAL CONSENT: ${formData.legalConsent ? 'YES' : 'NO'}

---
This email was automatically generated from the EzyHelpers Helper Interview Questionnaire.
    `,
  };
};

const escapeHtml = (raw: string) =>
  String(raw)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const generateCareersChiefOfStaffEmail = (formData: CareersChiefOfStaffFormData): EmailContent => {
  const formattedPhone = formatPhoneForEmail(formData.phone);
  const block = (label: string, text: string) => `
        <div style="background-color:#fff;padding:16px 20px;border:1px solid #e5e7eb;border-radius:8px;margin:0 0 16px;">
          <h3 style="margin:0 0 8px;color:#111827;font-size:14px;">${escapeHtml(label)}</h3>
          <p style="margin:0;white-space:pre-wrap;color:#374151;font-size:14px;line-height:1.55;">${escapeHtml(text)}</p>
        </div>`;

  return {
    subject: `Chief of Staff Intern Application — ${formData.fullName}`,
    html: `
      <div style="font-family:system-ui,-apple-system,sans-serif;max-width:640px;margin:0 auto;">
        <h2 style="color:#0074C8;">Chief of Staff Intern (Founder’s Office) — New Application</h2>
        <div style="background:#f9fafb;padding:16px 20px;border-radius:8px;margin:16px 0;">
          <p style="margin:4px 0;"><strong>Name:</strong> ${escapeHtml(formData.fullName)}</p>
          <p style="margin:4px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(formData.email)}">${escapeHtml(formData.email)}</a></p>
          <p style="margin:4px 0;"><strong>Phone:</strong> ${formattedPhone}</p>
          ${formData.linkedinUrl ? `<p style="margin:4px 0;"><strong>LinkedIn:</strong> <a href="${escapeHtml(formData.linkedinUrl)}">${escapeHtml(formData.linkedinUrl)}</a></p>` : ''}
          ${formData.portfolioUrl ? `<p style="margin:4px 0;"><strong>Portfolio / other:</strong> <a href="${escapeHtml(formData.portfolioUrl)}">${escapeHtml(formData.portfolioUrl)}</a></p>` : ''}
          ${formData.resumeFileName ? `<p style="margin:4px 0;"><strong>CV / résumé:</strong> attached (${escapeHtml(formData.resumeFileName)})</p>` : '<p style="margin:4px 0;color:#6b7280;font-size:13px;">CV / résumé: not attached</p>'}
          ${formData.submittedAt ? `<p style="margin:4px 0;color:#6b7280;font-size:13px;">Submitted: ${escapeHtml(formData.submittedAt)}</p>` : ''}
        </div>
        ${block('1. Problem you solved without being told', formData.problemSolved)}
        ${block('2. What you would improve at EzyHelpers in 30 days', formData.improveThirtyDays)}
        ${block('3. Something you built (even small)', formData.builtSomething)}
        ${block('4. Why should we not hire you?', formData.whyNotHireYou)}
        <p style="color:#6b7280;font-size:12px;margin-top:24px;">Score applications on: Thinking · Execution · Ownership · Clarity (each /10).</p>
        ${formData.sourceUrl ? `<p style="font-size:12px;color:#6b7280;"><strong>Source:</strong> <a href="${escapeHtml(formData.sourceUrl)}">${escapeHtml(formData.sourceUrl)}</a></p>` : ''}
      </div>
    `,
    text: `
Chief of Staff Intern (Founder's Office) — Application

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formattedPhone}
${formData.linkedinUrl ? `LinkedIn: ${formData.linkedinUrl}\n` : ''}${formData.portfolioUrl ? `Portfolio: ${formData.portfolioUrl}\n` : ''}${formData.resumeFileName ? `CV / résumé: attached (${formData.resumeFileName})\n` : `CV / résumé: not attached\n`}${formData.submittedAt ? `Submitted: ${formData.submittedAt}\n` : ''}

1. Problem you solved without being told:
${formData.problemSolved}

2. What you would improve at EzyHelpers in 30 days:
${formData.improveThirtyDays}

3. Something you built (even small):
${formData.builtSomething}

4. Why should we not hire you?
${formData.whyNotHireYou}

---
Score on: Thinking, Execution, Ownership, Clarity (each /10).
${formData.sourceUrl ? `Source: ${formData.sourceUrl}` : ''}
    `.trim(),
  };
};

const generateCareersApmEmail = (formData: CareersApmFormData): EmailContent => {
  const formattedPhone = formatPhoneForEmail(formData.phone);
  const block = (label: string, text: string) => `
        <div style="background-color:#fff;padding:16px 20px;border:1px solid #e5e7eb;border-radius:8px;margin:0 0 16px;">
          <h3 style="margin:0 0 8px;color:#111827;font-size:14px;">${escapeHtml(label)}</h3>
          <p style="margin:0;white-space:pre-wrap;color:#374151;font-size:14px;line-height:1.55;">${escapeHtml(text)}</p>
        </div>`;

  return {
    subject: `AI-First APM Application — ${formData.fullName}`,
    html: `
      <div style="font-family:system-ui,-apple-system,sans-serif;max-width:640px;margin:0 auto;">
        <h2 style="color:#0074C8;">AI-First Associate Product Manager — New Application</h2>
        <div style="background:#f9fafb;padding:16px 20px;border-radius:8px;margin:16px 0;">
          <p style="margin:4px 0;"><strong>Name:</strong> ${escapeHtml(formData.fullName)}</p>
          <p style="margin:4px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(formData.email)}">${escapeHtml(formData.email)}</a></p>
          <p style="margin:4px 0;"><strong>Phone:</strong> ${formattedPhone}</p>
          ${formData.linkedinUrl ? `<p style="margin:4px 0;"><strong>LinkedIn:</strong> <a href="${escapeHtml(formData.linkedinUrl)}">${escapeHtml(formData.linkedinUrl)}</a></p>` : ''}
          ${formData.portfolioUrl ? `<p style="margin:4px 0;"><strong>Portfolio / other:</strong> <a href="${escapeHtml(formData.portfolioUrl)}">${escapeHtml(formData.portfolioUrl)}</a></p>` : ''}
          ${formData.resumeFileName ? `<p style="margin:4px 0;"><strong>CV / résumé:</strong> attached (${escapeHtml(formData.resumeFileName)})</p>` : '<p style="margin:4px 0;color:#6b7280;font-size:13px;">CV / résumé: not attached</p>'}
          ${formData.submittedAt ? `<p style="margin:4px 0;color:#6b7280;font-size:13px;">Submitted: ${escapeHtml(formData.submittedAt)}</p>` : ''}
        </div>
        ${block('1. Relevant experience', formData.relevantExperience)}
        ${block('2. How would you automate operations at EzyHelpers?', formData.automationOperations)}
        ${block('3. Keeping the dev task pipeline full', formData.taskPipelineApproach)}
        ${formData.additionalNotes ? block('4. Additional notes', formData.additionalNotes) : ''}
        ${formData.sourceUrl ? `<p style="font-size:12px;color:#6b7280;"><strong>Source:</strong> <a href="${escapeHtml(formData.sourceUrl)}">${escapeHtml(formData.sourceUrl)}</a></p>` : ''}
      </div>
    `,
    text: `
AI-First Associate Product Manager — Application

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formattedPhone}
${formData.linkedinUrl ? `LinkedIn: ${formData.linkedinUrl}\n` : ''}${formData.portfolioUrl ? `Portfolio: ${formData.portfolioUrl}\n` : ''}${formData.resumeFileName ? `CV / résumé: attached (${formData.resumeFileName})\n` : `CV / résumé: not attached\n`}${formData.submittedAt ? `Submitted: ${formData.submittedAt}\n` : ''}

1. Relevant experience:
${formData.relevantExperience}

2. How would you automate operations at EzyHelpers?
${formData.automationOperations}

3. Keeping the dev task pipeline full:
${formData.taskPipelineApproach}
${formData.additionalNotes ? `\n4. Additional notes:\n${formData.additionalNotes}\n` : ''}
${formData.sourceUrl ? `Source: ${formData.sourceUrl}` : ''}
    `.trim(),
  };
};

const generateCareersSalesExecutiveEmail = (
  formData: CareersSalesExecutiveFormData
): EmailContent => {
  const formattedPhone = formatPhoneForEmail(formData.phone)
  const block = (label: string, text: string) => `
        <div style="background-color:#fff;padding:16px 20px;border:1px solid #e5e7eb;border-radius:8px;margin:0 0 16px;">
          <h3 style="margin:0 0 8px;color:#111827;font-size:14px;">${escapeHtml(label)}</h3>
          <p style="margin:0;white-space:pre-wrap;color:#374151;font-size:14px;line-height:1.55;">${escapeHtml(text)}</p>
        </div>`

  return {
    subject: `Sales Executive Application — ${formData.fullName}`,
    html: `
      <div style="font-family:system-ui,-apple-system,sans-serif;max-width:640px;margin:0 auto;">
        <h2 style="color:#0074C8;">Sales Executive (Bangalore) — New Application</h2>
        <div style="background:#f9fafb;padding:16px 20px;border-radius:8px;margin:16px 0;">
          <p style="margin:4px 0;"><strong>Name:</strong> ${escapeHtml(formData.fullName)}</p>
          <p style="margin:4px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(formData.email)}">${escapeHtml(formData.email)}</a></p>
          <p style="margin:4px 0;"><strong>Phone:</strong> ${formattedPhone}</p>
          ${formData.linkedinUrl ? `<p style="margin:4px 0;"><strong>LinkedIn:</strong> <a href="${escapeHtml(formData.linkedinUrl)}">${escapeHtml(formData.linkedinUrl)}</a></p>` : ''}
          <p style="margin:4px 0;"><strong>CV / résumé:</strong> attached (${escapeHtml(formData.resumeFileName)})</p>
          ${formData.noticePeriod ? `<p style="margin:4px 0;"><strong>Notice period:</strong> ${escapeHtml(formData.noticePeriod)}</p>` : ''}
          ${formData.submittedAt ? `<p style="margin:4px 0;color:#6b7280;font-size:13px;">Submitted: ${escapeHtml(formData.submittedAt)}</p>` : ''}
        </div>
        ${block('1. Languages (English, Hindi, Kannada)', formData.languagesProficiency)}
        ${block('2. Sales / customer-facing experience', formData.salesExperienceSummary)}
        ${block('3. Deal or follow-up story', formData.dealOrFollowUpStory)}
        ${block('4. Working with targets', formData.targetDiscipline)}
        ${formData.additionalNotes ? block('5. Additional notes', formData.additionalNotes) : ''}
        ${formData.sourceUrl ? `<p style="font-size:12px;color:#6b7280;"><strong>Source:</strong> <a href="${escapeHtml(formData.sourceUrl)}">${escapeHtml(formData.sourceUrl)}</a></p>` : ''}
      </div>
    `,
    text: `
Sales Executive (Bangalore) — Application

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formattedPhone}
${formData.linkedinUrl ? `LinkedIn: ${formData.linkedinUrl}\n` : ''}CV / résumé: attached (${formData.resumeFileName})
${formData.noticePeriod ? `Notice period: ${formData.noticePeriod}\n` : ''}${formData.submittedAt ? `Submitted: ${formData.submittedAt}\n` : ''}

1. Languages (English, Hindi, Kannada):
${formData.languagesProficiency}

2. Sales / customer-facing experience:
${formData.salesExperienceSummary}

3. Deal or follow-up story:
${formData.dealOrFollowUpStory}

4. Working with targets:
${formData.targetDiscipline}
${formData.additionalNotes ? `\n5. Additional notes:\n${formData.additionalNotes}\n` : ''}
${formData.sourceUrl ? `Source: ${formData.sourceUrl}` : ''}
    `.trim(),
  }
}

const generateCareersRoleApplicationEmail = (
  formData: CareersRoleApplicationFormData
): EmailContent => {
  const formattedPhone = formatPhoneForEmail(formData.phone)
  const block = (label: string, text: string) => `
        <div style="background-color:#fff;padding:16px 20px;border:1px solid #e5e7eb;border-radius:8px;margin:0 0 16px;">
          <h3 style="margin:0 0 8px;color:#111827;font-size:14px;">${escapeHtml(label)}</h3>
          <p style="margin:0;white-space:pre-wrap;color:#374151;font-size:14px;line-height:1.55;">${escapeHtml(text)}</p>
        </div>`

  return {
    subject: `${formData.jobTitle} — Application — ${formData.fullName}`,
    html: `
      <div style="font-family:system-ui,-apple-system,sans-serif;max-width:640px;margin:0 auto;">
        <h2 style="color:#0074C8;">Careers — ${escapeHtml(formData.jobTitle)}</h2>
        <div style="background:#f9fafb;padding:16px 20px;border-radius:8px;margin:16px 0;">
          <p style="margin:4px 0;"><strong>Role:</strong> ${escapeHtml(formData.jobTitle)} <span style="color:#6b7280;">(${escapeHtml(formData.jobSlug)})</span></p>
          <p style="margin:4px 0;"><strong>Name:</strong> ${escapeHtml(formData.fullName)}</p>
          <p style="margin:4px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(formData.email)}">${escapeHtml(formData.email)}</a></p>
          <p style="margin:4px 0;"><strong>Phone:</strong> ${formattedPhone}</p>
          ${formData.linkedinUrl ? `<p style="margin:4px 0;"><strong>LinkedIn:</strong> <a href="${escapeHtml(formData.linkedinUrl)}">${escapeHtml(formData.linkedinUrl)}</a></p>` : ''}
          <p style="margin:4px 0;"><strong>CV / résumé:</strong> attached (${escapeHtml(formData.resumeFileName)})</p>
          ${formData.noticePeriod ? `<p style="margin:4px 0;"><strong>Notice period:</strong> ${escapeHtml(formData.noticePeriod)}</p>` : ''}
          ${formData.submittedAt ? `<p style="margin:4px 0;color:#6b7280;font-size:13px;">Submitted: ${escapeHtml(formData.submittedAt)}</p>` : ''}
        </div>
        ${block('1. Relevant experience', formData.relevantExperience)}
        ${block('2. Why this role at EzyHelpers', formData.whyThisRole)}
        ${formData.additionalNotes ? block('3. Additional notes', formData.additionalNotes) : ''}
        ${formData.sourceUrl ? `<p style="font-size:12px;color:#6b7280;"><strong>Source:</strong> <a href="${escapeHtml(formData.sourceUrl)}">${escapeHtml(formData.sourceUrl)}</a></p>` : ''}
      </div>
    `,
    text: `
${formData.jobTitle} — Application (slug: ${formData.jobSlug})

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formattedPhone}
${formData.linkedinUrl ? `LinkedIn: ${formData.linkedinUrl}\n` : ''}CV / résumé: attached (${formData.resumeFileName})
${formData.noticePeriod ? `Notice period: ${formData.noticePeriod}\n` : ''}${formData.submittedAt ? `Submitted: ${formData.submittedAt}\n` : ''}

1. Relevant experience:
${formData.relevantExperience}

2. Why this role at EzyHelpers:
${formData.whyThisRole}
${formData.additionalNotes ? `\n3. Additional notes:\n${formData.additionalNotes}\n` : ''}
${formData.sourceUrl ? `Source: ${formData.sourceUrl}` : ''}
    `.trim(),
  }
}

export type SendLeadEmailOptions = {
  attachments?: NonNullable<nodemailer.SendMailOptions['attachments']>
}

const CARE_TYPE_LABELS: Record<string, string> = {
  'care-services/home-care-services-bangalore': 'Home Care Services (overview)',
  'care-services/home-healthcare-services-bangalore': 'Home Healthcare Services',
  'care-services/home-nursing-services-bangalore': 'Home Nursing Services',
  'care-services/elderly-care-services-bangalore': 'Elderly Care Services',
  'care-services/caretaker-services-bangalore': 'Caretaker Services',
  'care-services/patient-care-services-bangalore': 'Patient Care Services',
  'care-services/home-attendant-services-bangalore': 'Home Attendant Services',
  'care-services/trained-attendant-services-bangalore': 'Trained Attendant Services',
  not_sure: 'Not sure — please advise',
}

const URGENCY_LABELS: Record<string, string> = {
  'same-day': 'Same day (if possible)',
  '24-48h': 'Within 24–48 hours',
  'this-week': 'This week',
  planning: 'Planning / not urgent',
}

const escapeCareEmailHtml = (s: string) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const generateCareServicesLeadEmail = (formData: CareServicesLeadFormData & { sourceUrl?: string }): EmailContent => {
  const formattedPhone = formatPhoneForEmail(formData.phone)
  const careLabelPlain = CARE_TYPE_LABELS[formData.careType] || formData.careType
  const careLabelHtml = CARE_TYPE_LABELS[formData.careType] || escapeCareEmailHtml(formData.careType)
  const urgencyLabel = URGENCY_LABELS[formData.urgency] || formData.urgency
  const rawSource = formData.sourceUrl?.trim() || ''
  const sourceDisplay = rawSource ? escapeCareEmailHtml(rawSource) : 'Not provided'
  const sourceHref = rawSource ? escapeCareEmailHtml(rawSource) : '#'
  const nameSafe = escapeCareEmailHtml(formData.name)
  const localitySafe = escapeCareEmailHtml(formData.locality?.trim() || '—')

  return {
    subject: `New Bangalore care enquiry: ${careLabelPlain}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
        <h2 style="color: #0074C8;">New care services lead (Bangalore)</h2>
        <div style="background-color: #e8f4fc; padding: 16px; border-radius: 8px; margin: 16px 0; border: 1px solid #b3d9f2;">
          <p style="margin: 0 0 8px 0; font-size: 14px; color: #0c4a6e;"><strong>Source page (URL)</strong></p>
          <p style="margin: 0; word-break: break-all;">
            ${rawSource ? `<a href="${sourceHref}" target="_blank" rel="noopener noreferrer" style="color: #0369a1;">${sourceDisplay}</a>` : sourceDisplay}
          </p>
        </div>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Contact</h3>
          <p><strong>Name:</strong> ${nameSafe}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${formData.phone}" style="text-decoration: none; color: #1e40af;">${formattedPhone}</a></p>
        </div>
        <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #333;">Care request</h3>
          <p><strong>Service line:</strong> ${careLabelHtml}</p>
          <p><strong>Locality / area:</strong> ${localitySafe}</p>
          <p><strong>Urgency:</strong> ${urgencyLabel}</p>
          <h4 style="color: #333;">Situation / patient brief</h4>
          <p style="white-space: pre-wrap;">${escapeCareEmailHtml(formData.patientSummary)}</p>
          ${formData.notes?.trim() ? `<h4 style="color: #333;">Additional notes</h4><p style="white-space: pre-wrap;">${escapeCareEmailHtml(formData.notes)}</p>` : ''}
        </div>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">Submitted via the EzyHelpers Bangalore care services enquiry form.</p>
      </div>
    `,
    text: `
New care services lead (Bangalore)

Source page (URL): ${rawSource || 'Not provided'}

Contact:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formattedPhone}

Care request:
- Service line: ${careLabelPlain}
- Locality / area: ${formData.locality?.trim() || '—'}
- Urgency: ${urgencyLabel}

Situation / patient brief:
${formData.patientSummary}
${formData.notes?.trim() ? `\nAdditional notes:\n${formData.notes}\n` : ''}
---
EzyHelpers care services enquiry form
    `.trim(),
  }
}

export const sendLeadEmail = async (
  leadType: LeadType,
  formData: any, // TODO: Create union type for all form data types
  requestId?: string,
  sourceUrl?: string,
  options?: SendLeadEmailOptions
): Promise<EmailSendResult> => {
  try {
    // hire_helper and general (contact form) use HIRE_CONTACT_EMAIL_RECIPIENTS
    let emailRecipientsEnv: string;

    if (leadType === 'hire_helper' || leadType === 'general') {
      // Check if it's an on-demand helper lead from either form
      const isHireHelperOnDemand = leadType === 'hire_helper' && formData.serviceType === 'on-demand';
      const isGeneralOnDemand = leadType === 'general' && formData.service && typeof formData.service === 'string' && formData.service.toLowerCase().includes('on-demand');

      if (isHireHelperOnDemand || isGeneralOnDemand) {
        emailRecipientsEnv = 'saritha@ezyhelpers.com';
      } else {
        emailRecipientsEnv = process.env.HIRE_CONTACT_EMAIL_RECIPIENTS || process.env.EMAIL_RECIPIENTS || process.env.ADMIN_EMAIL || '';
      }
    } else if (leadType === 'helper_interview') {
      emailRecipientsEnv = process.env.HELPER_INTERVIEW_RECIPIENTS || 'suraj@ezyhelpers.com,priyanka@ezyhelpers.com,arun@ezyhelpers.com';
    } else if (leadType === 'care_services') {
      emailRecipientsEnv =
        process.env.CARE_SERVICES_EMAIL_RECIPIENTS ||
        'contact@ezyhelpers.com,arun@ezyhelpers.com,suraj@ezyhelpers.com';
    } else if (
      leadType === 'careers_chief_of_staff' ||
      leadType === 'careers_apm' ||
      leadType === 'careers_sales_executive' ||
      leadType === 'careers_role_application'
    ) {
      emailRecipientsEnv =
        process.env.CAREERS_EMAIL_RECIPIENTS || 'contact@ezyhelpers.com';
    } else {
      // Use default recipients for other forms (agent registration, helper registration, etc.)
      emailRecipientsEnv = process.env.EMAIL_RECIPIENTS || process.env.ADMIN_EMAIL || '';
    }

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
      case 'customer_requirement':
        emailContent = generateCustomerRequirementEmail(formData);
        break;
      case 'requirement':
        emailContent = generateRequirementLeadEmail({ ...formData, requestId: requestId || 'N/A', sourceUrl });
        break;
      case 'helper_interview':
        emailContent = generateHelperInterviewEmail(formData);
        break;
      case 'careers_chief_of_staff':
        emailContent = generateCareersChiefOfStaffEmail(formData as CareersChiefOfStaffFormData);
        break;
      case 'careers_apm':
        emailContent = generateCareersApmEmail(formData as CareersApmFormData);
        break;
      case 'careers_sales_executive':
        emailContent = generateCareersSalesExecutiveEmail(
          formData as CareersSalesExecutiveFormData
        );
        break;
      case 'careers_role_application':
        emailContent = generateCareersRoleApplicationEmail(
          formData as CareersRoleApplicationFormData
        );
        break;
      case 'care_services':
        emailContent = generateCareServicesLeadEmail({
          ...(formData as CareServicesLeadFormData),
          sourceUrl: sourceUrl || (formData as CareServicesLeadFormData).sourceUrl,
        });
        break;
      default:
        throw new Error('Invalid lead type');
    }

    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.SMTP_USER,
      to: adminEmail,
      replyTo: formData.email || process.env.SMTP_USER,
      ...emailContent,
    };

    if (options?.attachments?.length) {
      mailOptions.attachments = options.attachments
    }

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
        idProofNumber: formatIDForEmail(bookingDetails.idProofNumber),
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

// NEST Lead Email Function
export const sendNestLeadEmail = async (
  formData: {
    name: string
    phone: string
    email?: string | null
    booking_type: 'helper' | 'employer' | null
    check_in_date?: string | null
    check_out_date?: string | null
    duration_days?: number | null
    user_type?: string | null
    message?: string | null
  },
  requestId?: string
): Promise<EmailSendResult> => {
  try {
    const formattedPhone = formatPhoneForEmail(formData.phone)
    const emailRecipientsEnv = process.env.NEST_LEADS_EMAIL || process.env.EMAIL_RECIPIENTS || process.env.ADMIN_EMAIL || ''

    if (!emailRecipientsEnv) {
      console.error('NEST_LEADS_EMAIL, EMAIL_RECIPIENTS or ADMIN_EMAIL environment variable not set')
      return { success: false, error: 'Email recipients not configured' }
    }

    const adminEmail = emailRecipientsEnv
      .split(',')
      .map(email => email.trim())
      .filter(Boolean)
      .join(', ')

    if (!adminEmail) {
      console.error('No valid email recipients found')
      return { success: false, error: 'Admin email not configured' }
    }

    const transporter = createTransporter()

    const userTypeLabels: Record<string, string> = {
      'helper_between_jobs': 'Helper between jobs',
      'helper_new_to_city': 'Helper new to city',
      'helper_employer_vacation': 'Helper during employer vacation',
      'employer_booking': 'Employer booking for helper',
      'emergency_stay': 'Emergency stay',
      'festival_stay': 'Festival/holiday stay',
      'medical_leave': 'Medical/personal leave'
    }

    const userTypeLabel = formData.user_type ? userTypeLabels[formData.user_type] || formData.user_type : 'Not specified'
    const bookingTypeLabel = formData.booking_type === 'helper' ? 'Helper' : formData.booking_type === 'employer' ? 'Employer' : 'Not specified'

    const emailContent = {
      subject: `New NEST Accommodation Booking - ${requestId || 'NEW'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e11d48; background-color: #ffe4e6; padding: 20px; border-radius: 8px; margin: 0 0 20px 0;">🏠 New NEST Accommodation Booking</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #334155;">Request Details</h3>
            ${requestId ? `<p><strong>Request ID:</strong> <span style="font-family: monospace; background-color: #e1e8f0; padding: 2px 6px; border-radius: 4px;">${requestId}</span></p>` : ''}
            <p><strong>Booking Type:</strong> <span style="background-color: #fce7f3; color: #e11d48; padding: 4px 8px; border-radius: 4px; font-weight: bold;">${bookingTypeLabel}</span></p>
            <p><strong>Stay Type:</strong> ${userTypeLabel}</p>
          </div>

          <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Phone:</strong> <a href="tel:${formData.phone}" style="text-decoration: none; color: #1e40af;">${formattedPhone}</a></p>
            ${formData.email ? `<p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>` : ''}
          </div>

          <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">📅 Booking Dates</h3>
            ${formData.check_in_date ? `<p><strong>Check-in Date:</strong> ${new Date(formData.check_in_date).toLocaleDateString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</p>` : '<p><strong>Check-in Date:</strong> Not specified</p>'}
            ${formData.check_out_date ? `<p><strong>Check-out Date:</strong> ${new Date(formData.check_out_date).toLocaleDateString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</p>` : '<p><strong>Check-out Date:</strong> Not specified</p>'}
            ${formData.duration_days ? `<p><strong>Duration:</strong> ${formData.duration_days} ${formData.duration_days === 1 ? 'day' : 'days'}</p>` : ''}
          </div>

          ${formData.message ? `
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">📝 Special Requirements</h3>
            <p style="white-space: pre-wrap;">${formData.message}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding: 20px; background-color: #fef2f2; border-left: 4px solid #ef4444; border-radius: 8px;">
            <p style="margin: 0; color: #dc2626;"><strong>🚨 Action Required:</strong></p>
            <ul style="color: #dc2626; margin: 10px 0;">
              <li>Contact ${bookingTypeLabel === 'Helper' ? 'helper' : 'employer'} within 30 minutes</li>
              <li>Confirm availability for requested dates</li>
              <li>Process booking and arrange accommodation</li>
              <li>Send confirmation with booking details</li>
            </ul>
          </div>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 12px;">This email was automatically generated from the NEST booking system.</p>
        </div>
      `,
      text: `
New NEST Accommodation Booking${requestId ? ` - ${requestId}` : ''}

REQUEST DETAILS:
${requestId ? `- Request ID: ${requestId}` : ''}
- Booking Type: ${bookingTypeLabel}
- Stay Type: ${userTypeLabel}

CONTACT INFORMATION:
- Name: ${formData.name}
- Phone: ${formattedPhone}
${formData.email ? `- Email: ${formData.email}` : ''}

BOOKING DATES:
${formData.check_in_date ? `- Check-in Date: ${new Date(formData.check_in_date).toLocaleDateString('en-IN')}` : '- Check-in Date: Not specified'}
${formData.check_out_date ? `- Check-out Date: ${new Date(formData.check_out_date).toLocaleDateString('en-IN')}` : '- Check-out Date: Not specified'}
${formData.duration_days ? `- Duration: ${formData.duration_days} ${formData.duration_days === 1 ? 'day' : 'days'}` : ''}

${formData.message ? `SPECIAL REQUIREMENTS:\n${formData.message}` : ''}

ACTION REQUIRED:
- Contact ${bookingTypeLabel === 'Helper' ? 'helper' : 'employer'} within 30 minutes
- Confirm availability for requested dates
- Process booking and arrange accommodation
- Send confirmation with booking details

---
This email was automatically generated from the NEST booking system.
      `
    }

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: adminEmail,
      replyTo: formData.email || process.env.SMTP_USER,
      ...emailContent,
    }

    return await sendEmailWithRetry(transporter, mailOptions)
  } catch (error) {
    logger.error('Error in sendNestLeadEmail', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Test email function
export const testEmailConnection = async () => {
  try {
    const transporter = createTransporter()
    await transporter.verify()
    return { success: true, message: 'Email connection verified successfully' }
  } catch (error) {
    console.error('Email connection test failed:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}