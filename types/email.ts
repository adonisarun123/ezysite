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

export interface CustomerRequirementFormData {
  customerName: string;
  mobileNumber: string;
  houseNumber: string;
  areaLocality: string;
  apartmentName: string;
  serviceType: 'maid' | 'cook' | 'babysitter' | 'elderly_care' | 'other';
  serviceTypeOther?: string;
  workType: 'live_in' | 'full_time' | 'part_time';
  workTiming: {
    startTime: string;
    endTime: string;
  };
  agePreference?: 'no_preference' | 'below_25' | 'below_30' | '30_45' | 'above_45';
  preferredGender?: 'female' | 'male' | 'no_preference';
  languages?: ('kannada' | 'hindi' | 'tamil' | 'telugu' | 'english' | 'no_preference')[];
  houseRules?: string;
  wakeUpEarly?: boolean;
  wakeupTime?: string;
  usualSleepingTime?: 'before_10pm' | '10_11pm' | 'after_11pm';
  dietaryPreference?: 'vegetarian' | 'non_vegetarian';
  personalCareItems?: string[];
  restTimeProvided?: boolean;
  restTimeDetails?: string;
  provideTeaSnacks?: boolean;
  provideMeals?: boolean;
  foodArrangement?: 'same_as_family' | 'separate_food';
  tasks?: {
    ironing?: boolean;
    wateringPlants?: boolean;
    washingMachine?: boolean;
    microwave?: boolean;
    mixerOvenAirFryer?: boolean;
  };
  gasStoveType?: 'regular' | 'special';
  dropChildrenBusStop?: boolean;
  hasPets?: boolean;
  hasElderly?: boolean;
  houseType?: 'single_story' | 'duplex';
  separateRoomProvided?: boolean;
  bhkType?: '1bhk' | '2bhk' | '3bhk' | '4bhk' | 'other';
  bhkOther?: string;
  kitchenRestrictionMenstrualPeriods?: boolean;
  emergencyLeaveOk?: boolean;
  policyAcks: {
    salaryBy7th: boolean;
    noAdvanceSalary: boolean;
    feedbackWithinOneMonth: boolean;
    infoAccurate: boolean;
    agreeToTerms: boolean;
    contactConsent: boolean;
  };
  submittedAt?: string;
  source?: 'website' | 'app' | 'whatsapp' | 'callcenter' | 'other';
}

export interface HelperInterviewFormData {
  // Basic Information
  fullName: string;
  age: string;
  maritalStatus: string;
  hasChildren: string;
  localReference: string;
  hasSmartphone: string;
  speakHindi: string;
  speakOtherLanguages: string;
  readWriteHindi: string;

  // Work Preferences
  workInterests: string[];
  comfortableCooking: string;
  cookType: string;
  prepareMilletDietary: string;
  comfortableHousekeeping: string;
  willingCleanBathrooms: string;
  knowIroning: string;
  operateWashingMachine: string;
  useAppliances: string;
  comfortableKids: string;
  comfortableElderly: string;
  dropChildrenBusStop: string;
  canDrive: string;

  // Work Habits & Discipline
  wakeUpTime: string;
  earlyStart: string;
  comfortablePets: string;
  nonVegHome: string;
  phoneDuringWork: string;
  socialMediaWork: string;
  manageMultipleTasks: string;
  runBehindChildren: string;

  // Health & Leave Policy
  regularMedicines: string;
  healthConditions: string;
  monthlyLeave: string;
  leavePreference: string;
  restTimeNeeded: string;
  menstrualCycleComfort: string;

  // Food & Lifestyle Preferences
  eatSameFood: string;
  vegNonVegPreference: string;
  foodRestrictions: string;

  // Training & Skills
  formalTraining: string;
  specificTrainingNeeded: string;
  openToTraining: string;

  // Personal Habits
  personalHabits: string;
  followHouseRules: string;

  // Consent
  legalConsent: boolean;

  // Meta
  language: string;
  submittedAt: string;
  requestId: string;
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
  | 'requirement'
  | 'customer_requirement'
  | 'helper_interview';

export interface EmailSendResult {
  success: boolean;
  messageId?: string;
  error?: string;
}
