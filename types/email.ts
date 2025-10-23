/**
 * Type definitions for email service
 */

export interface EmailContent {
  subject: string;
  html: string;
  text: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  sourceUrl?: string;
}

export interface HireHelperFormData {
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
}

export interface GeneralLeadFormData {
  name: string;
  phone: string;
  service: string;
  city: string;
  email?: string;
  sourceUrl?: string;
  additionalDetails?: GeneralLeadAdditionalDetails;
}

export interface GeneralLeadAdditionalDetails {
  leadType?: 'Comprehensive Service Request' | 'Helper Lead';
  job_roles?: string[];
  job_role_other?: string;
  area_of_residence?: string;
  languages?: string[];
  remarks?: string;
  detected_city?: string;
  detected_region?: string;
  detected_country?: string;
  latitude?: number;
  longitude?: number;
  duration?: string;
  startDate?: string;
  budget?: string;
  familySize?: string;
  experience?: string;
  preferredGender?: string;
  additionalServices?: string;
  specificRequirements?: string;
  field_officer_name?: string;
}

export interface AgentRegistrationFormData {
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
}

export interface HelperRegistrationFormData {
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
}

export interface RequirementFormData {
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
}

export type LeadType =
  | 'contact'
  | 'hire_helper'
  | 'general'
  | 'agent_registration'
  | 'helper_registration'
  | 'requirement';

export interface EmailSendResult {
  success: boolean;
  messageId?: string;
  error?: string;
}
