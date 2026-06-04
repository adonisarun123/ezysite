'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { whatsappSendUrl } from '@/lib/whatsappUrl'
import { trackFormSubmitSuccess } from '@/lib/analytics'
import Image from 'next/image'
import {
  CameraIcon,
  MapPinIcon,
  DocumentIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  PhoneIcon,
  ShieldCheckIcon,
  HomeIcon,
  HeartIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

type Lang = 'en' | 'hi'

// Types
interface FormData {
  helperType: string
  firstName: string
  lastName: string
  gender: string
  dateOfBirth: string
  age: number
  helperPhoto: File | null

  nativeState: string
  currentLocality: string
  languagesKnown: string[]
  educationLevel: string
  maritalStatus: string
  spouseOccupation: string
  kidsCount: number
  smartphoneAvailable: boolean
  whatsappActive: boolean
  vaccinationStatus: string
  experienceMonths: number
  specialities: string[]

  workingHoursPreference: string
  preferredLocalities: string
  maxPlacementsPerMonth: number
  expectedSalaryMin: number
  expectedSalaryMax: number

  idProofType: string
  idProofNumber: string
  idProofFile: File | null
  bankName: string
  bankIFSC: string
  accountHolderName: string
  accountNumber: string

  primaryPhone: string
  alternatePhone: string
  emergencyContactName: string
  emergencyContactPhone: string
  latitude: number | null
  longitude: number | null

  listedBy: string
  internalNotes: string
}

interface FormErrors {
  [key: string]: string
}

// ============================================================
// Translations
// ============================================================
const T = {
  en: {
    // Header
    brand: 'EzyHelpers',
    tagline: 'Trusted Home Help Network',
    pageTitle: 'Helper Registration',
    pageSubtitle: 'Join thousands of trusted helpers across India',
    trustVerified: 'Background Verified',
    trustFamilies: 'Best Families',
    trustPlatform: 'Trusted Platform',
    langToggleLabel: 'भाषा / Language',
    langEnglish: 'English',
    langHindi: 'हिंदी',

    // SEO/Intro
    introTitle: "Join India's Most Trusted Helper Network",
    introBody:
      'Register as a verified domestic helper and connect with thousands of families across India. EzyHelpers provides secure employment opportunities with background verification, fair wages, and professional support throughout your career.',
    benefit1Title: 'Verified Opportunities',
    benefit1Body:
      'Work with pre-verified families who value professional domestic help. All employers undergo background checks for your safety and security.',
    benefit2Title: 'Fair Compensation',
    benefit2Body:
      'Earn competitive wages with transparent payment terms. Direct salary payments ensure you receive full compensation for your valuable work.',
    benefit3Title: 'Professional Growth',
    benefit3Body:
      'Access skill development programs, training opportunities, and career advancement support to enhance your professional capabilities.',
    whyChoose: 'Why Choose EzyHelpers?',
    why1: '10,000+ families trust our platform for domestic help services',
    why2: '100% Aadhaar verification ensures your credentials are properly documented',
    why3: '24/7 support available for any assistance during your employment',
    why4: 'Multiple cities including Bangalore, Delhi, Mumbai, Hyderabad, and more',
    why5: 'Flexible work options - live-in, full-time, part-time, or on-demand',
    why6: 'Safe working environment with regular check-ins and feedback systems',

    // Progress / Steps
    stepLabel: 'Step',
    stepOf: 'of',
    stepNames: [
      'About You',
      'Skills & Background',
      'Work Preferences',
      'ID & Bank',
      'Contact',
      'Submit',
    ] as string[],

    // Common
    required: 'Required',
    optional: 'Optional',
    next: 'Next',
    previous: 'Previous',
    submit: 'Submit Registration',
    submitting: 'Submitting...',
    yes: 'Yes',
    no: 'No',
    selectOption: 'Select an option',
    youAreOnly: 'Almost done!',

    // Section 1 — Basic Details
    s1Title: 'About You',
    s1Sub: 'Just a few quick details to start',
    helperType: 'What type of work do you want?',
    helperTypeOpts: {
      'Live-in': 'Live-in (stay with family)',
      'Full-time': 'Full-time (full day)',
      'Part-time': 'Part-time (a few hours)',
      'On-demand': 'On-demand (when needed)',
    } as Record<string, string>,
    firstName: 'First name',
    firstNamePh: 'e.g. Sita',
    lastName: 'Last name',
    lastNamePh: 'e.g. Devi (optional)',
    gender: 'Gender',
    genderOpts: { Female: 'Female', Male: 'Male', Other: 'Other' } as Record<
      string,
      string
    >,
    dob: 'Date of birth',
    ageLabel: 'Age',
    ageYears: 'years',
    photo: 'Your photo',
    photoTake: 'Take photo or upload',
    photoHelp: 'A clear face photo. Max 800KB.',
    listedBy: 'Listed by (field officer name)',
    listedByPh: 'Enter field officer name',
    listedByHelp: 'Only if a field officer is helping you register.',

    // Section 2 — Skills
    s2Title: 'Your Skills & Background',
    s2Sub: 'Tell us what you can do',
    nativeState: 'Native state',
    nativeStatePh: 'Select your home state',
    currentLocality: 'Where do you stay now?',
    currentLocalityPh: 'Area / locality',
    languages: 'Languages you speak',
    languagesHelp: 'Select all that apply.',
    education: 'Education',
    marital: 'Marital status',
    spouseJob: "Spouse's work",
    spouseJobPh: 'What does your spouse do?',
    kidsCount: 'Number of children',
    smartphone: 'Do you have a smartphone?',
    whatsapp: 'Is your WhatsApp working?',
    vaccination: 'Vaccination',
    experience: 'Experience',
    months: 'months',
    years: 'years',
    specialities: 'Work you can do',
    specialitiesHelp: 'Select everything you are good at.',
    educationLevels: {
      None: 'None',
      '5th': 'Class 5',
      '8th': 'Class 8',
      '10th': 'Class 10',
      '12th': 'Class 12',
      'Graduate+': 'Graduate or higher',
    } as Record<string, string>,
    maritalStatuses: {
      Single: 'Single',
      Married: 'Married',
      Widowed: 'Widowed',
      Divorced: 'Divorced',
    } as Record<string, string>,
    vaccinationStatuses: {
      Fully: 'Fully vaccinated',
      Partially: 'Partially vaccinated',
      None: 'Not vaccinated',
    } as Record<string, string>,
    languageNames: {
      Hindi: 'Hindi',
      Kannada: 'Kannada',
      Tamil: 'Tamil',
      Telugu: 'Telugu',
      Bengali: 'Bengali',
      Marathi: 'Marathi',
      English: 'English',
      Other: 'Other',
    } as Record<string, string>,
    specialityNames: {
      Feeding: 'Feeding',
      Bathing: 'Bathing',
      Massage: 'Massage',
      'Baby-clothes-wash': 'Baby clothes wash',
      'Utensil-wash': 'Washing utensils',
      Dusting: 'Dusting',
      Cooking: 'Cooking',
      'Elder-care': 'Elder care',
      Driver: 'Driving',
      'Folding clothes': 'Folding clothes',
      'Drying clothes': 'Drying clothes',
      'Sweeping/Mopping': 'Sweeping & mopping',
      Other: 'Other',
    } as Record<string, string>,

    // Section 3 — Work prefs
    s3Title: 'Work Preferences',
    s3Sub: 'When and where you want to work',
    hoursPref: 'Preferred working hours',
    hoursPrefPh: 'e.g. 8 AM - 6 PM',
    preferredLocalities: 'Preferred work areas',
    preferredLocalitiesPh: 'e.g. HSR, Whitefield, Indiranagar',
    preferredLocalitiesHelp:
      'Areas in the city where you would like to work. Separate with commas.',
    maxPlacements: 'How many homes can you serve per month?',
    placements: 'placements',
    salary: 'Expected salary (₹/month)',
    salaryMin: 'Minimum',
    salaryMax: 'Maximum',

    // Section 4 — Compliance
    s4Title: 'ID & Bank Details',
    s4Sub: 'For verification and salary payment',
    idType: 'ID proof type',
    idNumber: 'ID number',
    idNumberPh: 'Enter ID number',
    idUpload: 'Upload ID photo',
    idUploadHelp: 'PDF, JPG, or PNG. Max 5MB.',
    idUploadCta: 'Choose file or drag here',
    idTypes: {
      Aadhaar: 'Aadhaar',
      Passport: 'Passport',
      VoterID: 'Voter ID',
      DrivingLicence: 'Driving Licence',
    } as Record<string, string>,
    bankDetails: 'Bank details',
    bankOptionalNote:
      'Optional — you can add this later. Salary is paid directly to your account.',
    bankName: 'Bank name',
    bankNamePh: 'e.g. SBI',
    ifsc: 'IFSC code',
    ifscPh: 'ABCD0123456',
    accountName: 'Account holder name',
    accountNamePh: 'Name as in the bank account',
    accountNumber: 'Account number',
    accountNumberPh: 'Bank account number',

    // Section 5 — Contact
    s5Title: 'Contact Details',
    s5Sub: 'So we can reach you',
    primaryPhone: 'Primary phone (WhatsApp preferred)',
    primaryPhonePh: '10-digit mobile number',
    alternatePhone: 'Alternate phone',
    alternatePhonePh: 'Family or friend phone',
    emergencyContact: 'Emergency contact',
    emergencyOptional:
      'Whom should we call if there is an emergency? (Optional)',
    contactName: 'Contact name',
    contactNamePh: 'Name',
    contactPhone: 'Contact phone',
    contactPhonePh: '10-digit number',
    location: 'Your location',
    detecting: 'Detecting your location…',
    locationDetected: 'Location detected. Thank you!',
    locationManual:
      'Please allow location access, or skip — we can take it later.',

    // Section 6 — Declare
    s6Title: 'Almost Done!',
    s6Sub: 'Review your information and submit',
    extraNotes: 'Anything else we should know?',
    extraNotesPh:
      'Tell us anything else that could help us find the right family for you.',
    summary: 'Quick summary',
    nameSummary: 'Name',
    typeSummary: 'Work type',
    phoneSummary: 'Phone',
    expSummary: 'Experience',
    langsSummary: 'Languages',
    skillsSummary: 'Skills',
    listedBySummary: 'Listed by',
    notProvided: 'Not provided',
    noneSelected: 'None selected',
    agreeTerms: 'I agree to the',
    termsLink: 'Terms & Conditions',
    agreeAccurate: 'and confirm that all information is accurate and true.',

    // Errors
    errFirstName: 'First name must be at least 2 characters',
    errFirstNameLong: 'First name must be less than 50 characters',
    errDob: 'Date of birth is required',
    errAgeMin: 'Must be at least 18 years old',
    errAgeMax: 'Must be under 60 years old',
    errPhoneRequired: 'Primary phone is required',
    errPhoneInvalid: 'Please enter a valid phone number',
    errIdRequired: 'ID number is required',
    errIdInvalid: 'Please enter a valid {idType} number',
    errIfsc: 'Please enter a valid IFSC code',
    errLang: 'Please select at least one language',
    errSpeciality: 'Please select at least one skill',
    errFieldRequired: 'This field is required',
    errPhoto: 'Your photo is required',
    errIdFile: 'ID proof document is required',
    errPhotoSize: 'Image must be less than 800KB. Please choose a smaller file.',
    submitError:
      'There was an error submitting your registration. Please try again.',

    // Footer
    footerTagline: "India's Most Trusted Domestic Help Network",
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    contact: 'Contact Us',
    rightsReserved: 'All rights reserved.',
    needHelp: 'Need Help?',
    waMsg: 'Hi! I need help with helper registration.',
  },

  hi: {
    // Header
    brand: 'EzyHelpers',
    tagline: 'भरोसेमंद होम हेल्प नेटवर्क',
    pageTitle: 'हेल्पर रजिस्ट्रेशन',
    pageSubtitle: 'पूरे भारत में हज़ारों भरोसेमंद हेल्पर्स से जुड़ें',
    trustVerified: 'बैकग्राउंड वेरिफाइड',
    trustFamilies: 'अच्छे परिवार',
    trustPlatform: 'भरोसेमंद प्लेटफ़ॉर्म',
    langToggleLabel: 'भाषा / Language',
    langEnglish: 'English',
    langHindi: 'हिंदी',

    // SEO/Intro
    introTitle: 'भारत के सबसे भरोसेमंद हेल्पर नेटवर्क से जुड़ें',
    introBody:
      'EzyHelpers पर वेरिफाइड डोमेस्टिक हेल्पर बनकर पूरे भारत के हज़ारों परिवारों से जुड़ें। हम सुरक्षित नौकरी, बैकग्राउंड वेरिफिकेशन, उचित सैलरी और पूरे करियर में प्रोफेशनल सपोर्ट देते हैं।',
    benefit1Title: 'वेरिफाइड मौके',
    benefit1Body:
      'सिर्फ़ वेरिफाइड परिवारों के साथ काम करें जो डोमेस्टिक हेल्प की कद्र करते हैं। आपकी सुरक्षा के लिए सभी एम्प्लॉयर का बैकग्राउंड चेक होता है।',
    benefit2Title: 'सही सैलरी',
    benefit2Body:
      'पारदर्शी शर्तों पर अच्छी सैलरी कमाएँ। डायरेक्ट सैलरी पेमेंट से आपको आपका पूरा हक मिलता है — कोई कटौती नहीं।',
    benefit3Title: 'करियर ग्रोथ',
    benefit3Body:
      'स्किल डेवलपमेंट प्रोग्राम, ट्रेनिंग और करियर बढ़ाने में सपोर्ट पाएँ ताकि आपका भविष्य और बेहतर बने।',
    whyChoose: 'EzyHelpers क्यों चुनें?',
    why1: '10,000+ परिवार हमारे प्लेटफ़ॉर्म पर भरोसा करते हैं',
    why2: '100% आधार वेरिफिकेशन — आपकी पहचान सुरक्षित और दर्ज',
    why3: 'काम के दौरान कभी भी मदद के लिए 24/7 सपोर्ट',
    why4: 'कई शहर — बैंगलोर, दिल्ली, मुंबई, हैदराबाद और बहुत कुछ',
    why5: 'फ़्लेक्सिबल काम — लिव-इन, फुल-टाइम, पार्ट-टाइम या ऑन-डिमांड',
    why6: 'सुरक्षित कार्यस्थल — रेगुलर चेक-इन और फ़ीडबैक के साथ',

    // Progress / Steps
    stepLabel: 'चरण',
    stepOf: 'में से',
    stepNames: [
      'आपके बारे में',
      'स्किल्स',
      'काम की पसंद',
      'पहचान और बैंक',
      'संपर्क',
      'सबमिट',
    ] as string[],

    // Common
    required: 'ज़रूरी',
    optional: 'वैकल्पिक',
    next: 'अगला',
    previous: 'पीछे',
    submit: 'रजिस्ट्रेशन सबमिट करें',
    submitting: 'सबमिट हो रहा है...',
    yes: 'हाँ',
    no: 'नहीं',
    selectOption: 'चुनें',
    youAreOnly: 'बस थोड़ा बाक़ी है!',

    // Section 1
    s1Title: 'आपके बारे में',
    s1Sub: 'शुरू करने के लिए कुछ ज़रूरी जानकारी',
    helperType: 'आप कौन-सा काम करना चाहते हैं?',
    helperTypeOpts: {
      'Live-in': 'लिव-इन (परिवार के साथ रहें)',
      'Full-time': 'फ़ुल-टाइम (पूरे दिन)',
      'Part-time': 'पार्ट-टाइम (कुछ घंटे)',
      'On-demand': 'ऑन-डिमांड (ज़रूरत पर)',
    } as Record<string, string>,
    firstName: 'पहला नाम',
    firstNamePh: 'जैसे: सीता',
    lastName: 'सरनेम',
    lastNamePh: 'जैसे: देवी (वैकल्पिक)',
    gender: 'लिंग',
    genderOpts: { Female: 'महिला', Male: 'पुरुष', Other: 'अन्य' } as Record<
      string,
      string
    >,
    dob: 'जन्मतिथि',
    ageLabel: 'उम्र',
    ageYears: 'साल',
    photo: 'अपना फ़ोटो',
    photoTake: 'फ़ोटो लें या अपलोड करें',
    photoHelp: 'साफ़ चेहरे की तस्वीर। अधिकतम 800KB।',
    listedBy: 'फ़ील्ड ऑफ़िसर का नाम',
    listedByPh: 'फ़ील्ड ऑफ़िसर का नाम लिखें',
    listedByHelp: 'अगर कोई फ़ील्ड ऑफ़िसर आपकी मदद कर रहा है, तो उनका नाम।',

    // Section 2
    s2Title: 'आपके स्किल्स और बैकग्राउंड',
    s2Sub: 'हमें बताएँ आप क्या कर सकते हैं',
    nativeState: 'घरेलू राज्य',
    nativeStatePh: 'अपना राज्य चुनें',
    currentLocality: 'अभी कहाँ रहते हैं?',
    currentLocalityPh: 'इलाक़ा / लोकैलिटी',
    languages: 'आप कौन-सी भाषाएँ बोलते हैं?',
    languagesHelp: 'जितनी भी आती हों, सभी चुनें।',
    education: 'पढ़ाई',
    marital: 'वैवाहिक स्थिति',
    spouseJob: 'पति/पत्नी का काम',
    spouseJobPh: 'जैसे: ड्राइवर, मज़दूर',
    kidsCount: 'बच्चों की संख्या',
    smartphone: 'क्या आपके पास स्मार्टफोन है?',
    whatsapp: 'क्या आपका WhatsApp चल रहा है?',
    vaccination: 'वैक्सीनेशन',
    experience: 'अनुभव',
    months: 'महीने',
    years: 'साल',
    specialities: 'आप क्या-क्या काम कर सकते हैं?',
    specialitiesHelp: 'जो भी काम आपको आता है, सब चुनें।',
    educationLevels: {
      None: 'पढ़ाई नहीं की',
      '5th': '5वीं',
      '8th': '8वीं',
      '10th': '10वीं',
      '12th': '12वीं',
      'Graduate+': 'ग्रेजुएट या ऊपर',
    } as Record<string, string>,
    maritalStatuses: {
      Single: 'अविवाहित',
      Married: 'विवाहित',
      Widowed: 'विधवा/विधुर',
      Divorced: 'तलाक़शुदा',
    } as Record<string, string>,
    vaccinationStatuses: {
      Fully: 'पूरी तरह',
      Partially: 'आंशिक रूप से',
      None: 'नहीं हुआ',
    } as Record<string, string>,
    languageNames: {
      Hindi: 'हिंदी',
      Kannada: 'कन्नड़',
      Tamil: 'तमिल',
      Telugu: 'तेलुगू',
      Bengali: 'बंगाली',
      Marathi: 'मराठी',
      English: 'अंग्रेज़ी',
      Other: 'अन्य',
    } as Record<string, string>,
    specialityNames: {
      Feeding: 'खाना खिलाना',
      Bathing: 'नहलाना',
      Massage: 'मालिश',
      'Baby-clothes-wash': 'बच्चे के कपड़े धोना',
      'Utensil-wash': 'बर्तन धोना',
      Dusting: 'धूल साफ़ करना',
      Cooking: 'खाना बनाना',
      'Elder-care': 'बुज़ुर्गों की देखभाल',
      Driver: 'ड्राइविंग',
      'Folding clothes': 'कपड़े तह करना',
      'Drying clothes': 'कपड़े सुखाना',
      'Sweeping/Mopping': 'झाड़ू और पोछा',
      Other: 'अन्य',
    } as Record<string, string>,

    // Section 3
    s3Title: 'काम की पसंद',
    s3Sub: 'आप कब और कहाँ काम करना चाहते हैं?',
    hoursPref: 'काम के पसंदीदा घंटे',
    hoursPrefPh: 'जैसे: सुबह 8 - शाम 6',
    preferredLocalities: 'पसंदीदा इलाक़े',
    preferredLocalitiesPh: 'जैसे: HSR, व्हाइटफील्ड, इंदिरानगर',
    preferredLocalitiesHelp:
      'शहर के जिन इलाक़ों में काम करना चाहते हैं, कॉमा से अलग करें।',
    maxPlacements: 'एक महीने में कितने घरों में काम कर सकते हैं?',
    placements: 'घर',
    salary: 'अपेक्षित सैलरी (₹/महीना)',
    salaryMin: 'न्यूनतम',
    salaryMax: 'अधिकतम',

    // Section 4
    s4Title: 'पहचान और बैंक डिटेल्स',
    s4Sub: 'वेरिफिकेशन और सैलरी पेमेंट के लिए',
    idType: 'पहचान पत्र',
    idNumber: 'ID नंबर',
    idNumberPh: 'ID नंबर लिखें',
    idUpload: 'ID की फ़ोटो अपलोड करें',
    idUploadHelp: 'PDF, JPG, या PNG। अधिकतम 5MB।',
    idUploadCta: 'फ़ाइल चुनें या यहाँ खींचें',
    idTypes: {
      Aadhaar: 'आधार',
      Passport: 'पासपोर्ट',
      VoterID: 'वोटर ID',
      DrivingLicence: 'ड्राइविंग लाइसेंस',
    } as Record<string, string>,
    bankDetails: 'बैंक डिटेल्स',
    bankOptionalNote:
      'वैकल्पिक — बाद में भी जोड़ सकते हैं। सैलरी सीधे आपके अकाउंट में आएगी।',
    bankName: 'बैंक का नाम',
    bankNamePh: 'जैसे: SBI',
    ifsc: 'IFSC कोड',
    ifscPh: 'ABCD0123456',
    accountName: 'अकाउंट होल्डर का नाम',
    accountNamePh: 'बैंक पासबुक के अनुसार नाम',
    accountNumber: 'अकाउंट नंबर',
    accountNumberPh: 'बैंक अकाउंट नंबर',

    // Section 5
    s5Title: 'संपर्क जानकारी',
    s5Sub: 'ताकि हम आप तक पहुँच सकें',
    primaryPhone: 'मुख्य फ़ोन (WhatsApp वाला)',
    primaryPhonePh: '10 अंकों का मोबाइल नंबर',
    alternatePhone: 'दूसरा फ़ोन',
    alternatePhonePh: 'परिवार या दोस्त का नंबर',
    emergencyContact: 'इमरजेंसी संपर्क',
    emergencyOptional:
      'इमरजेंसी में किसे फ़ोन करें? (वैकल्पिक)',
    contactName: 'नाम',
    contactNamePh: 'नाम',
    contactPhone: 'फ़ोन',
    contactPhonePh: '10 अंकों का नंबर',
    location: 'आपका स्थान',
    detecting: 'आपकी लोकेशन ढूँढी जा रही है…',
    locationDetected: 'लोकेशन मिल गई। धन्यवाद!',
    locationManual: 'कृपया लोकेशन एक्सेस दें, या छोड़ दें — हम बाद में ले सकते हैं।',

    // Section 6
    s6Title: 'बस थोड़ा बाक़ी है!',
    s6Sub: 'जानकारी जाँचें और सबमिट करें',
    extraNotes: 'कुछ और बताना चाहते हैं?',
    extraNotesPh: 'कुछ भी जो आपके लिए सही फ़ैमिली ढूँढने में मदद करे।',
    summary: 'संक्षेप में जानकारी',
    nameSummary: 'नाम',
    typeSummary: 'काम का प्रकार',
    phoneSummary: 'फ़ोन',
    expSummary: 'अनुभव',
    langsSummary: 'भाषाएँ',
    skillsSummary: 'स्किल्स',
    listedBySummary: 'द्वारा लिस्ट',
    notProvided: 'नहीं दिया',
    noneSelected: 'कुछ नहीं चुना',
    agreeTerms: 'मैं',
    termsLink: 'नियम और शर्तों',
    agreeAccurate: 'से सहमत हूँ और पुष्टि करता/करती हूँ कि सभी जानकारी सही है।',

    // Errors
    errFirstName: 'पहला नाम कम से कम 2 अक्षरों का होना चाहिए',
    errFirstNameLong: 'पहला नाम 50 अक्षरों से कम होना चाहिए',
    errDob: 'जन्मतिथि ज़रूरी है',
    errAgeMin: 'उम्र कम से कम 18 साल होनी चाहिए',
    errAgeMax: 'उम्र 60 साल से कम होनी चाहिए',
    errPhoneRequired: 'मुख्य फ़ोन ज़रूरी है',
    errPhoneInvalid: 'सही फ़ोन नंबर डालें',
    errIdRequired: 'ID नंबर ज़रूरी है',
    errIdInvalid: 'सही {idType} नंबर डालें',
    errIfsc: 'सही IFSC कोड डालें',
    errLang: 'कम से कम एक भाषा चुनें',
    errSpeciality: 'कम से कम एक स्किल चुनें',
    errFieldRequired: 'यह फ़ील्ड ज़रूरी है',
    errPhoto: 'आपकी फ़ोटो ज़रूरी है',
    errIdFile: 'ID प्रूफ डॉक्यूमेंट ज़रूरी है',
    errPhotoSize: 'फ़ोटो 800KB से कम होनी चाहिए। छोटी फ़ाइल चुनें।',
    submitError: 'रजिस्ट्रेशन सबमिट करने में समस्या आई। कृपया फिर कोशिश करें।',

    // Footer
    footerTagline: 'भारत का सबसे भरोसेमंद डोमेस्टिक हेल्प नेटवर्क',
    privacy: 'प्राइवेसी पॉलिसी',
    terms: 'सेवा की शर्तें',
    contact: 'संपर्क करें',
    rightsReserved: 'सर्वाधिकार सुरक्षित।',
    needHelp: 'मदद चाहिए?',
    waMsg: 'नमस्ते! मुझे हेल्पर रजिस्ट्रेशन में मदद चाहिए।',
  },
}

const helperTypes = ['Live-in', 'Full-time', 'Part-time', 'On-demand']
const genders = ['Female', 'Male', 'Other']
const educationLevels = ['None', '5th', '8th', '10th', '12th', 'Graduate+']
const maritalStatuses = ['Single', 'Married', 'Widowed', 'Divorced']
const vaccinationStatuses = ['Fully', 'Partially', 'None']
const idTypes = ['Aadhaar', 'Passport', 'VoterID', 'DrivingLicence']

const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
  'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
  'Uttarakhand', 'West Bengal'
]

const languages = ['Hindi', 'Kannada', 'Tamil', 'Telugu', 'Bengali', 'Marathi', 'English', 'Other']

const specialitiesList = [
  'Feeding', 'Bathing', 'Massage', 'Baby-clothes-wash', 'Utensil-wash',
  'Dusting', 'Cooking', 'Elder-care', 'Driver', 'Folding clothes',
  'Drying clothes', 'Sweeping/Mopping', 'Other'
]

// Helpful label component
function FieldLabel({
  children,
  required,
  optional,
}: {
  children: React.ReactNode
  required?: boolean
  optional?: string
}) {
  return (
    <label className="block text-base font-semibold text-gray-800 dark:text-gray-200">
      {children}
      {required && <span className="ml-1 text-red-500">*</span>}
      {optional && (
        <span className="ml-2 inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-2 py-0.5 text-[11px] font-medium text-gray-500 dark:text-gray-400 align-middle">
          {optional}
        </span>
      )}
    </label>
  )
}

export default function HelperRegistrationPage() {
  const [lang, setLang] = useState<Lang>('en')
  const t = T[lang]

  const [currentSection, setCurrentSection] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [locationLoading, setLocationLoading] = useState(true)
  const [formData, setFormData] = useState<FormData>({
    helperType: 'Full-time',
    firstName: '',
    lastName: '',
    gender: 'Female',
    dateOfBirth: '',
    age: 0,
    helperPhoto: null,
    nativeState: '',
    currentLocality: '',
    languagesKnown: [],
    educationLevel: '8th',
    maritalStatus: 'Single',
    spouseOccupation: '',
    kidsCount: 0,
    smartphoneAvailable: true,
    whatsappActive: true,
    vaccinationStatus: 'Fully',
    experienceMonths: 0,
    specialities: [],
    workingHoursPreference: '8 AM - 6 PM',
    preferredLocalities: '',
    maxPlacementsPerMonth: 1,
    expectedSalaryMin: 10000,
    expectedSalaryMax: 15000,
    idProofType: 'Aadhaar',
    idProofNumber: '',
    idProofFile: null,
    bankName: '',
    bankIFSC: '',
    accountHolderName: '',
    accountNumber: '',
    primaryPhone: '',
    alternatePhone: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    latitude: null,
    longitude: null,
    listedBy: '',
    internalNotes: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }))
          setLocationLoading(false)
        },
        (error) => {
          console.error('Geolocation error:', error)
          setLocationLoading(false)
        }
      )
    } else {
      setLocationLoading(false)
    }
  }, [])

  useEffect(() => {
    if (formData.dateOfBirth) {
      const today = new Date()
      const birthDate = new Date(formData.dateOfBirth)
      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }

      setFormData(prev => ({ ...prev, age: Math.max(0, age) }))
    }
  }, [formData.dateOfBirth])

  // Validation helpers
  const validatePhone = (phone: string) => /^[0-9]{10,15}$/.test(phone.replace(/\s+/g, ''))

  const validateIDNumber = (idType: string, idNumber: string) => {
    switch (idType) {
      case 'Aadhaar':
        return /^[0-9]{12}$/.test(idNumber.replace(/\s+/g, ''))
      case 'Passport':
        return /^[A-Z][0-9]{7}$/.test(idNumber.toUpperCase())
      case 'VoterID':
        return /^[A-Z]{3}[0-9]{7}$/.test(idNumber.toUpperCase())
      case 'DrivingLicence':
        return /^[A-Z]{2}[0-9]{13}$/.test(idNumber.toUpperCase())
      default:
        return true
    }
  }

  const validateIFSC = (ifsc: string) => /^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc.toUpperCase())

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const validateField = (name: string, value: any) => {
    const newErrors = { ...errors }

    switch (name) {
      case 'firstName':
        if (!value || value.length < 2) {
          newErrors[name] = t.errFirstName
        } else if (value.length > 50) {
          newErrors[name] = t.errFirstNameLong
        } else {
          delete newErrors[name]
        }
        break

      case 'dateOfBirth':
        if (!value) {
          newErrors[name] = t.errDob
        } else {
          const age = new Date().getFullYear() - new Date(value).getFullYear()
          if (age < 18) {
            newErrors[name] = t.errAgeMin
          } else if (age > 60) {
            newErrors[name] = t.errAgeMax
          } else {
            delete newErrors[name]
          }
        }
        break

      case 'primaryPhone':
        if (!value) {
          newErrors[name] = t.errPhoneRequired
        } else if (!validatePhone(value)) {
          newErrors[name] = t.errPhoneInvalid
        } else {
          delete newErrors[name]
        }
        break

      case 'alternatePhone':
      case 'emergencyContactPhone':
        if (value && !validatePhone(value)) {
          newErrors[name] = t.errPhoneInvalid
        } else {
          delete newErrors[name]
        }
        break

      case 'idProofNumber':
        if (!value) {
          newErrors[name] = t.errIdRequired
        } else if (!validateIDNumber(formData.idProofType, value)) {
          newErrors[name] = t.errIdInvalid.replace('{idType}', formData.idProofType)
        } else {
          delete newErrors[name]
        }
        break

      case 'bankIFSC':
        if (value && !validateIFSC(value)) {
          newErrors[name] = t.errIfsc
        } else {
          delete newErrors[name]
        }
        break

      case 'languagesKnown':
        if (!value || value.length === 0) {
          newErrors[name] = t.errLang
        } else {
          delete newErrors[name]
        }
        break

      case 'specialities':
        if (!value || value.length === 0) {
          newErrors[name] = t.errSpeciality
        } else {
          delete newErrors[name]
        }
        break

      default:
        if (!value && ['nativeState', 'currentLocality'].includes(name)) {
          newErrors[name] = t.errFieldRequired
        } else {
          delete newErrors[name]
        }
    }

    setErrors(newErrors)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  const handleFileUpload = (name: string, file: File) => {
    if (file.type.startsWith('image/') && file.size > 800 * 1024) {
      setErrors(prev => ({ ...prev, [name]: t.errPhotoSize }))
      return
    }

    setFormData(prev => ({ ...prev, [name]: file }))
    setErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[name]
      return newErrors
    })
  }

  const toggleArrayValue = (arrayName: string, value: string) => {
    const currentArray = formData[arrayName as keyof FormData] as string[]
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value]

    handleInputChange(arrayName, newArray)
  }

  const nextSection = () => {
    if (currentSection < 6) {
      setCurrentSection(currentSection + 1)
      // Scroll to top on next section for clarity
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = async () => {
    const requiredFields = [
      'firstName', 'dateOfBirth', 'nativeState', 'currentLocality',
      'primaryPhone', 'idProofNumber'
    ]

    const newErrors: FormErrors = {}

    requiredFields.forEach(field => {
      if (!formData[field as keyof FormData]) {
        newErrors[field] = t.errFieldRequired
      }
    })

    if (formData.languagesKnown.length === 0) newErrors.languagesKnown = t.errLang
    if (formData.specialities.length === 0) newErrors.specialities = t.errSpeciality
    if (!formData.helperPhoto) newErrors.helperPhoto = t.errPhoto
    if (!formData.idProofFile) newErrors.idProofFile = t.errIdFile

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      const firstError = Object.keys(newErrors)[0]
      const element = document.getElementById(firstError)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }

    setIsSubmitting(true)

    try {
      const formDataToSubmit = new FormData()

      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && typeof value !== 'object') {
          formDataToSubmit.append(key, value.toString())
        }
      })

      formData.languagesKnown.forEach(l => formDataToSubmit.append('languagesKnown[]', l))
      formData.specialities.forEach(s => formDataToSubmit.append('specialities[]', s))
      if (formData.preferredLocalities) {
        formDataToSubmit.append('preferredLocalities', formData.preferredLocalities)
      }

      if (formData.helperPhoto) formDataToSubmit.append('helperPhoto', formData.helperPhoto)
      if (formData.idProofFile) formDataToSubmit.append('idProofFile', formData.idProofFile)

      formDataToSubmit.append('createdAt', new Date().toISOString())

      const response = await fetch('/api/helpers', { method: 'POST', body: formDataToSubmit })

      if (response.ok) {
        const confirmId = `HLP-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`
        trackFormSubmitSuccess('helper_registration_form', { leadId: confirmId })
        window.location.href = `/thank-you?type=helper&ref=${encodeURIComponent(confirmId)}`
        return
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert(t.submitError)
    } finally {
      setIsSubmitting(false)
    }
  }

  const progressPercentage = (currentSection / 6) * 100

  // ============================================================
  // Render
  // ============================================================
  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors ${lang === 'hi' ? 'noto-sans-devanagari-hindi' : ''}`}>
      {/* Branded Header */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 py-6 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="max-w-2xl mx-auto px-4 relative z-10">
          {/* Top row: Logo + Language toggle */}
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center shadow-md">
                <Image
                  src="/ezyhelper_logo_new.png"
                  alt="EzyHelpers Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="text-white">
                <span className="text-xl font-bold">{t.brand}</span>
                <p className="text-blue-100 text-xs">{t.tagline}</p>
              </div>
            </Link>

            {/* Language toggle */}
            <div className="flex items-center gap-1 rounded-full bg-white/15 p-1 ring-1 ring-white/25 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  lang === 'en' ? 'bg-white text-blue-700 shadow' : 'text-white hover:bg-white/10'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('hi')}
                aria-pressed={lang === 'hi'}
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  lang === 'hi' ? 'bg-white text-blue-700 shadow' : 'text-white hover:bg-white/10'
                }`}
              >
                हिं
              </button>
            </div>
          </div>

          <div className="text-center text-white mb-4">
            <h2 className="text-xl md:text-2xl font-bold mb-1">{t.pageTitle}</h2>
            <p className="text-blue-100 text-sm">{t.pageSubtitle}</p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-3 text-center text-white text-[11px] sm:text-xs">
            <div className="flex flex-col items-center">
              <ShieldCheckIcon className="h-6 w-6 text-blue-200 mb-1" />
              <span>{t.trustVerified}</span>
            </div>
            <div className="flex flex-col items-center">
              <HomeIcon className="h-6 w-6 text-blue-200 mb-1" />
              <span>{t.trustFamilies}</span>
            </div>
            <div className="flex flex-col items-center">
              <HeartIcon className="h-6 w-6 text-blue-200 mb-1" />
              <span>{t.trustPlatform}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="sticky top-0 z-40 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
              {t.stepNames[currentSection - 1]}
            </h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {t.stepLabel} {currentSection} {t.stepOf} 6
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex justify-between mt-3">
            {[1, 2, 3, 4, 5, 6].map(step => (
              <div
                key={step}
                className={`w-3 h-3 rounded-full transition-colors ${
                  step <= currentSection ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Intro Content */}
      <div className="bg-white dark:bg-gray-800 py-8 border-b dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">{t.introTitle}</h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            {t.introBody}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl text-left">
              <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-2">{t.benefit1Title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{t.benefit1Body}</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl text-left">
              <h3 className="font-bold text-green-900 dark:text-green-200 mb-2">{t.benefit2Title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{t.benefit2Body}</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl text-left">
              <h3 className="font-bold text-purple-900 dark:text-purple-200 mb-2">{t.benefit3Title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{t.benefit3Body}</p>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-6">
            <h3 className="font-bold text-amber-900 dark:text-amber-200 mb-3 flex items-center justify-center gap-2">
              <SparklesIcon className="h-5 w-5" />
              {t.whyChoose}
            </h3>
            <ul className="text-left text-amber-800 dark:text-amber-100 space-y-2 max-w-2xl mx-auto">
              {[t.why1, t.why2, t.why3, t.why4, t.why5, t.why6].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 shrink-0 mt-0.5 text-amber-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <form className="space-y-6">
          {/* ============================================================ */}
          {/* Section 1: About You */}
          {/* ============================================================ */}
          {currentSection === 1 && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 sm:p-8 space-y-6">
              <div className="text-center mb-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{t.s1Title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{t.s1Sub}</p>
              </div>

              {/* Helper Type */}
              <div className="space-y-2">
                <FieldLabel required>{t.helperType}</FieldLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {helperTypes.map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleInputChange('helperType', type)}
                      className={`px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium text-left ${
                        formData.helperType === type
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shadow-sm'
                          : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300'
                      }`}
                    >
                      {t.helperTypeOpts[type]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <FieldLabel required>{t.firstName}</FieldLabel>
                  <input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder={t.firstNamePh}
                    maxLength={50}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <FieldLabel optional={t.optional}>{t.lastName}</FieldLabel>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder={t.lastNamePh}
                  />
                </div>
              </div>

              {/* Gender & DOB */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <FieldLabel required>{t.gender}</FieldLabel>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {genders.map(g => <option key={g} value={g}>{t.genderOpts[g]}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <FieldLabel required>{t.dob}</FieldLabel>
                  <input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  {formData.age > 0 && (
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {t.ageLabel}: {formData.age} {t.ageYears}
                    </p>
                  )}
                  {errors.dateOfBirth && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                      {errors.dateOfBirth}
                    </p>
                  )}
                </div>
              </div>

              {/* Helper Photo */}
              <div className="space-y-2">
                <FieldLabel required>{t.photo}</FieldLabel>
                <div className="border-2 border-dashed border-blue-300 dark:border-blue-600 rounded-xl p-6 text-center bg-blue-50/40 dark:bg-blue-900/10">
                  <CameraIcon className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                  <input
                    id="helperPhoto"
                    type="file"
                    accept="image/*"
                    capture="user"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) handleFileUpload('helperPhoto', file)
                    }}
                    className="hidden"
                  />
                  <label htmlFor="helperPhoto" className="cursor-pointer inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-700 transition">
                    <CameraIcon className="h-4 w-4" />
                    {formData.helperPhoto ? formData.helperPhoto.name : t.photoTake}
                  </label>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">{t.photoHelp}</p>
                </div>
                {errors.helperPhoto && (
                  <p className="text-red-500 text-sm flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                    {errors.helperPhoto}
                  </p>
                )}
              </div>

              {/* Listed By */}
              <div className="space-y-2">
                <FieldLabel optional={t.optional}>{t.listedBy}</FieldLabel>
                <input
                  type="text"
                  value={formData.listedBy}
                  onChange={(e) => handleInputChange('listedBy', e.target.value)}
                  className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder={t.listedByPh}
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">{t.listedByHelp}</p>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* Section 2: Skills */}
          {/* ============================================================ */}
          {currentSection === 2 && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 sm:p-8 space-y-6">
              <div className="text-center mb-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{t.s2Title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{t.s2Sub}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <FieldLabel required>{t.nativeState}</FieldLabel>
                  <select
                    id="nativeState"
                    value={formData.nativeState}
                    onChange={(e) => handleInputChange('nativeState', e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">{t.nativeStatePh}</option>
                    {indianStates.map(state => <option key={state} value={state}>{state}</option>)}
                  </select>
                  {errors.nativeState && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />{errors.nativeState}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <FieldLabel required>{t.currentLocality}</FieldLabel>
                  <input
                    id="currentLocality"
                    type="text"
                    value={formData.currentLocality}
                    onChange={(e) => handleInputChange('currentLocality', e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder={t.currentLocalityPh}
                  />
                  {errors.currentLocality && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />{errors.currentLocality}
                    </p>
                  )}
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-2">
                <FieldLabel required>{t.languages}</FieldLabel>
                <p className="text-xs text-gray-500 dark:text-gray-400">{t.languagesHelp}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {languages.map(language => (
                    <button
                      key={language}
                      type="button"
                      onClick={() => toggleArrayValue('languagesKnown', language)}
                      className={`px-3 py-2.5 rounded-xl border-2 transition-all duration-200 text-sm ${
                        formData.languagesKnown.includes(language)
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold'
                          : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300'
                      }`}
                    >
                      {t.languageNames[language]}
                    </button>
                  ))}
                </div>
                {errors.languagesKnown && (
                  <p className="text-red-500 text-sm flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />{errors.languagesKnown}
                  </p>
                )}
              </div>

              {/* Education & Marital */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <FieldLabel optional={t.optional}>{t.education}</FieldLabel>
                  <select
                    value={formData.educationLevel}
                    onChange={(e) => handleInputChange('educationLevel', e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {educationLevels.map(level => <option key={level} value={level}>{t.educationLevels[level]}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <FieldLabel optional={t.optional}>{t.marital}</FieldLabel>
                  <select
                    value={formData.maritalStatus}
                    onChange={(e) => handleInputChange('maritalStatus', e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {maritalStatuses.map(s => <option key={s} value={s}>{t.maritalStatuses[s]}</option>)}
                  </select>
                </div>
              </div>

              {/* Spouse & Kids */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <FieldLabel optional={t.optional}>{t.spouseJob}</FieldLabel>
                  <input
                    type="text"
                    value={formData.spouseOccupation}
                    onChange={(e) => handleInputChange('spouseOccupation', e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder={t.spouseJobPh}
                  />
                </div>
                <div className="space-y-2">
                  <FieldLabel optional={t.optional}>{t.kidsCount}</FieldLabel>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={formData.kidsCount}
                    onChange={(e) => handleInputChange('kidsCount', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-600"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>0</span>
                    <span className="font-bold text-blue-600">{formData.kidsCount}</span>
                    <span>10</span>
                  </div>
                </div>
              </div>

              {/* Smartphone & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <FieldLabel required>{t.smartphone}</FieldLabel>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleInputChange('smartphoneAvailable', true)}
                      className={`px-3 py-2.5 rounded-xl border-2 text-sm font-medium ${formData.smartphoneAvailable ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-300 bg-white text-gray-700'}`}
                    >{t.yes}</button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('smartphoneAvailable', false)}
                      className={`px-3 py-2.5 rounded-xl border-2 text-sm font-medium ${!formData.smartphoneAvailable ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-300 bg-white text-gray-700'}`}
                    >{t.no}</button>
                  </div>
                </div>
                <div className="space-y-2">
                  <FieldLabel required>{t.whatsapp}</FieldLabel>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleInputChange('whatsappActive', true)}
                      className={`px-3 py-2.5 rounded-xl border-2 text-sm font-medium ${formData.whatsappActive ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-300 bg-white text-gray-700'}`}
                    >{t.yes}</button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('whatsappActive', false)}
                      className={`px-3 py-2.5 rounded-xl border-2 text-sm font-medium ${!formData.whatsappActive ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-300 bg-white text-gray-700'}`}
                    >{t.no}</button>
                  </div>
                </div>
              </div>

              {/* Vaccination */}
              <div className="space-y-2">
                <FieldLabel optional={t.optional}>{t.vaccination}</FieldLabel>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {vaccinationStatuses.map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => handleInputChange('vaccinationStatus', s)}
                      className={`px-3 py-2.5 rounded-xl border-2 text-sm font-medium ${formData.vaccinationStatus === s ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-300 bg-white text-gray-700'}`}
                    >
                      {t.vaccinationStatuses[s]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-2">
                <FieldLabel optional={t.optional}>{t.experience}</FieldLabel>
                <input
                  type="range"
                  min="0"
                  max="240"
                  value={formData.experienceMonths}
                  onChange={(e) => handleInputChange('experienceMonths', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-600"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>0 {t.months}</span>
                  <span className="font-bold text-blue-600">
                    {formData.experienceMonths} {t.months}
                    {formData.experienceMonths >= 12 && ` (${Math.floor(formData.experienceMonths / 12)} ${t.years})`}
                  </span>
                  <span>20 {t.years}</span>
                </div>
              </div>

              {/* Specialities */}
              <div className="space-y-2">
                <FieldLabel required>{t.specialities}</FieldLabel>
                <p className="text-xs text-gray-500 dark:text-gray-400">{t.specialitiesHelp}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {specialitiesList.map(speciality => (
                    <button
                      key={speciality}
                      type="button"
                      onClick={() => toggleArrayValue('specialities', speciality)}
                      className={`px-3 py-2.5 rounded-xl border-2 text-sm transition-all duration-200 ${
                        formData.specialities.includes(speciality)
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold'
                          : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300'
                      }`}
                    >
                      {t.specialityNames[speciality]}
                    </button>
                  ))}
                </div>
                {errors.specialities && (
                  <p className="text-red-500 text-sm flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />{errors.specialities}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* Section 3: Work Preferences */}
          {/* ============================================================ */}
          {currentSection === 3 && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 sm:p-8 space-y-6">
              <div className="text-center mb-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{t.s3Title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{t.s3Sub}</p>
              </div>

              <div className="space-y-2">
                <FieldLabel optional={t.optional}>{t.hoursPref}</FieldLabel>
                <input
                  type="text"
                  value={formData.workingHoursPreference}
                  onChange={(e) => handleInputChange('workingHoursPreference', e.target.value)}
                  className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder={t.hoursPrefPh}
                />
              </div>

              <div className="space-y-2">
                <FieldLabel optional={t.optional}>{t.preferredLocalities}</FieldLabel>
                <input
                  type="text"
                  value={formData.preferredLocalities}
                  onChange={(e) => handleInputChange('preferredLocalities', e.target.value)}
                  className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder={t.preferredLocalitiesPh}
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">{t.preferredLocalitiesHelp}</p>
              </div>

              <div className="space-y-2">
                <FieldLabel optional={t.optional}>{t.maxPlacements}</FieldLabel>
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    onClick={() => handleInputChange('maxPlacementsPerMonth', Math.max(1, formData.maxPlacementsPerMonth - 1))}
                    className="w-12 h-12 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-600"
                  >−</button>
                  <div className="flex-1 text-center bg-blue-50 dark:bg-blue-900/30 rounded-xl py-3">
                    <span className="text-3xl font-bold text-blue-700 dark:text-blue-300">{formData.maxPlacementsPerMonth}</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t.placements}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleInputChange('maxPlacementsPerMonth', Math.min(5, formData.maxPlacementsPerMonth + 1))}
                    className="w-12 h-12 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-600"
                  >+</button>
                </div>
              </div>

              <div className="space-y-3">
                <FieldLabel optional={t.optional}>{t.salary}</FieldLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400">{t.salaryMin}</label>
                    <input
                      type="number"
                      value={formData.expectedSalaryMin}
                      onChange={(e) => handleInputChange('expectedSalaryMin', parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="10000"
                      min="0"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400">{t.salaryMax}</label>
                    <input
                      type="number"
                      value={formData.expectedSalaryMax}
                      onChange={(e) => handleInputChange('expectedSalaryMax', parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="15000"
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* Section 4: ID & Bank */}
          {/* ============================================================ */}
          {currentSection === 4 && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 sm:p-8 space-y-6">
              <div className="text-center mb-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{t.s4Title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{t.s4Sub}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <FieldLabel required>{t.idType}</FieldLabel>
                  <select
                    value={formData.idProofType}
                    onChange={(e) => handleInputChange('idProofType', e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {idTypes.map(type => <option key={type} value={type}>{t.idTypes[type]}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <FieldLabel required>{t.idNumber}</FieldLabel>
                  <input
                    id="idProofNumber"
                    type="text"
                    value={formData.idProofNumber}
                    onChange={(e) => handleInputChange('idProofNumber', e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder={t.idNumberPh}
                  />
                  {errors.idProofNumber && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />{errors.idProofNumber}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <FieldLabel required>{t.idUpload}</FieldLabel>
                <div className="border-2 border-dashed border-blue-300 dark:border-blue-600 rounded-xl p-6 text-center bg-blue-50/40 dark:bg-blue-900/10">
                  <DocumentIcon className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                  <input
                    id="idProofFile"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) handleFileUpload('idProofFile', file)
                    }}
                    className="hidden"
                  />
                  <label htmlFor="idProofFile" className="cursor-pointer inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-700 transition">
                    <DocumentIcon className="h-4 w-4" />
                    {formData.idProofFile ? formData.idProofFile.name : t.idUploadCta}
                  </label>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">{t.idUploadHelp}</p>
                </div>
                {errors.idProofFile && (
                  <p className="text-red-500 text-sm flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />{errors.idProofFile}
                  </p>
                )}
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{t.bankDetails}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{t.bankOptionalNote}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <FieldLabel optional={t.optional}>{t.bankName}</FieldLabel>
                    <input
                      type="text"
                      value={formData.bankName}
                      onChange={(e) => handleInputChange('bankName', e.target.value)}
                      className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400"
                      placeholder={t.bankNamePh}
                    />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel optional={t.optional}>{t.ifsc}</FieldLabel>
                    <input
                      type="text"
                      value={formData.bankIFSC}
                      onChange={(e) => handleInputChange('bankIFSC', e.target.value.toUpperCase())}
                      className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400"
                      placeholder={t.ifscPh}
                      maxLength={11}
                    />
                    {errors.bankIFSC && (
                      <p className="text-red-500 text-sm flex items-center">
                        <ExclamationTriangleIcon className="h-4 w-4 mr-1" />{errors.bankIFSC}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <FieldLabel optional={t.optional}>{t.accountName}</FieldLabel>
                    <input
                      type="text"
                      value={formData.accountHolderName}
                      onChange={(e) => handleInputChange('accountHolderName', e.target.value)}
                      className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400"
                      placeholder={t.accountNamePh}
                    />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel optional={t.optional}>{t.accountNumber}</FieldLabel>
                    <input
                      type="text"
                      value={formData.accountNumber}
                      onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                      className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400"
                      placeholder={t.accountNumberPh}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* Section 5: Contact */}
          {/* ============================================================ */}
          {currentSection === 5 && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 sm:p-8 space-y-6">
              <div className="text-center mb-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{t.s5Title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{t.s5Sub}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <FieldLabel required>{t.primaryPhone}</FieldLabel>
                  <input
                    id="primaryPhone"
                    type="tel"
                    value={formData.primaryPhone}
                    onChange={(e) => handleInputChange('primaryPhone', e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder={t.primaryPhonePh}
                  />
                  {errors.primaryPhone && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />{errors.primaryPhone}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <FieldLabel optional={t.optional}>{t.alternatePhone}</FieldLabel>
                  <input
                    type="tel"
                    value={formData.alternatePhone}
                    onChange={(e) => handleInputChange('alternatePhone', e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder={t.alternatePhonePh}
                  />
                  {errors.alternatePhone && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />{errors.alternatePhone}
                    </p>
                  )}
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-5">
                <h3 className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-1">{t.emergencyContact}</h3>
                <p className="text-xs text-amber-700 dark:text-amber-300 mb-4">{t.emergencyOptional}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <FieldLabel optional={t.optional}>{t.contactName}</FieldLabel>
                    <input
                      type="text"
                      value={formData.emergencyContactName}
                      onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
                      className="w-full px-4 py-3 text-base border border-amber-300 dark:border-amber-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
                      placeholder={t.contactNamePh}
                    />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel optional={t.optional}>{t.contactPhone}</FieldLabel>
                    <input
                      type="tel"
                      value={formData.emergencyContactPhone}
                      onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)}
                      className="w-full px-4 py-3 text-base border border-amber-300 dark:border-amber-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
                      placeholder={t.contactPhonePh}
                    />
                    {errors.emergencyContactPhone && (
                      <p className="text-red-500 text-sm flex items-center">
                        <ExclamationTriangleIcon className="h-4 w-4 mr-1" />{errors.emergencyContactPhone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <FieldLabel optional={t.optional}>{t.location}</FieldLabel>
                {locationLoading ? (
                  <p className="text-amber-600 text-sm flex items-center">
                    <MapPinIcon className="h-4 w-4 mr-1 animate-pulse" />{t.detecting}
                  </p>
                ) : formData.latitude && formData.longitude ? (
                  <p className="text-green-600 text-sm flex items-center">
                    <CheckCircleIcon className="h-4 w-4 mr-1" />{t.locationDetected}
                  </p>
                ) : (
                  <p className="text-gray-500 text-sm">{t.locationManual}</p>
                )}
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* Section 6: Submit */}
          {/* ============================================================ */}
          {currentSection === 6 && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 sm:p-8 space-y-6">
              <div className="text-center mb-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 text-xs font-semibold">
                  <SparklesIcon className="h-3.5 w-3.5" /> {t.youAreOnly}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-3 mb-1">{t.s6Title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{t.s6Sub}</p>
              </div>

              <div className="space-y-2">
                <FieldLabel optional={t.optional}>{t.extraNotes}</FieldLabel>
                <textarea
                  value={formData.internalNotes}
                  onChange={(e) => handleInputChange('internalNotes', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder={t.extraNotesPh}
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-5 space-y-2">
                <h3 className="font-bold text-gray-900 dark:text-white">{t.summary}</h3>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
                  <p><span className="font-semibold">{t.nameSummary}:</span> {formData.firstName} {formData.lastName || ''}</p>
                  <p><span className="font-semibold">{t.typeSummary}:</span> {t.helperTypeOpts[formData.helperType] || formData.helperType}</p>
                  <p><span className="font-semibold">{t.ageLabel}:</span> {formData.age} {t.ageYears}</p>
                  <p><span className="font-semibold">{t.expSummary}:</span> {formData.experienceMonths} {t.months}</p>
                  <p><span className="font-semibold">{t.langsSummary}:</span> {formData.languagesKnown.map(l => t.languageNames[l]).join(', ') || t.noneSelected}</p>
                  <p><span className="font-semibold">{t.skillsSummary}:</span> {formData.specialities.map(s => t.specialityNames[s]).join(', ') || t.noneSelected}</p>
                  <p><span className="font-semibold">{t.phoneSummary}:</span> {formData.primaryPhone || t.notProvided}</p>
                  {formData.listedBy && <p><span className="font-semibold">{t.listedBySummary}:</span> {formData.listedBy}</p>}
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t.agreeTerms}{' '}
                  <Link href="/terms-of-service" className="text-blue-600 hover:text-blue-700 underline font-medium">
                    {t.termsLink}
                  </Link>{' '}
                  {t.agreeAccurate}
                </label>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* Navigation */}
          {/* ============================================================ */}
          <div className="flex justify-between pt-6 gap-3">
            <button
              type="button"
              onClick={prevSection}
              disabled={currentSection === 1}
              className={`flex items-center gap-1.5 px-5 py-3 rounded-xl font-semibold transition-all duration-200 ${
                currentSection === 1
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
              }`}
            >
              <ArrowLeftIcon className="h-5 w-5" />
              {t.previous}
            </button>

            {currentSection < 6 ? (
              <button
                type="button"
                onClick={nextSection}
                className="flex items-center gap-1.5 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
              >
                {t.next}
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-1.5 px-7 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg min-h-[48px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    {t.submitting}
                  </>
                ) : (
                  <>
                    <CheckCircleIcon className="h-5 w-5" />
                    {t.submit}
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 mt-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <Image
                src="/ezyhelper_logo_new.png"
                alt="EzyHelpers Logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">{t.brand}</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{t.footerTagline}</p>
          <div className="flex justify-center space-x-6 text-xs text-gray-500 dark:text-gray-400">
            <Link href="/privacy-policy" className="hover:text-blue-600">{t.privacy}</Link>
            <Link href="/terms-of-service" className="hover:text-blue-600">{t.terms}</Link>
            <Link href="/contact" className="hover:text-blue-600">{t.contact}</Link>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
            © 2026 EzyHelpers. {t.rightsReserved}
          </p>
        </div>
      </div>

      {/* WhatsApp Help */}
      <div className="fixed bottom-4 left-4 z-40">
        <Link
          href={whatsappSendUrl('919972571005', t.waMsg)}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 text-sm font-semibold"
        >
          <PhoneIcon className="h-4 w-4" />
          {t.needHelp}
        </Link>
      </div>
    </div>
  )
}
