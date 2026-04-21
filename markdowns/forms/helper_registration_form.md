# APP_NAME
EzyHelpers – Helper Registration Portal

# PURPOSE
Onboard domestic helpers (live-in, full-time, part-time, on-demand) via a single, mobile-first form that:

1. Captures full personal, skills & compliance data.
2. Auto-grabs GPS lat/long + submission timestamp.
3. Takes live photos & document uploads.
4. Saves everything to a secure **helpers** table.
5. Works beautifully on 360-430 px screens (mainly phones).

# ENTITIES & FIELDS
## Table: helpers
| field                    | type & rules                                                                                  |
|--------------------------|-----------------------------------------------------------------------------------------------|
| id                       | uuid - auto                                                                                  |
| helperType               | ENUM { Live-in, Full-time, Part-time, On-demand } – required                                  |
| firstName                | text – required, max 50                                                                       |
| lastName                 | text – optional                                                                               |
| gender                   | ENUM { Female, Male, Other } – required                                                       |
| dateOfBirth              | date – required (min age 18, max age 60)                                                      |
| age                      | virtual, derive from DOB                                                                      |
| nativeState              | text – dropdown Indian states – required                                                      |
| currentLocality          | text – required (auto-suggest)                                                                |
| languagesKnown           | multiselect { Hindi, Kannada, Tamil, Telugu, Bengali, Marathi, English, Other } – min 1       |
| educationLevel           | ENUM { None, 5th, 8th, 10th, 12th, Graduate+ }                                                |
| maritalStatus            | ENUM { Single, Married, Widowed, Divorced }                                                   |
| spouseOccupation         | text – optional                                                                               |
| kidsCount                | number – 0-10                                                                                 |
| smartphoneAvailable      | boolean – required                                                                            |
| whatsappActive           | boolean – required                                                                            |
| vaccinationStatus        | ENUM { Fully, Partially, None }                                                               |
| experienceMonths         | number – min 0                                                                                |
| specialities             | multiselect { Feeding, Bathing, Massage, Baby-clothes-wash, Utensil-wash, Dusting, Cooking, Elder-care, Driver, Folding clothes, Drying clothes, Sweeping/Mopping, Other } |
| workingHoursPreference   | text – e.g. “8 am – 6 pm”                                                                     |
| preferredLocalities      | chips multiselect – optional                                                                  |
| maxPlacementsPerMonth    | number – helper’s availability to take new jobs (1–5)                                         |
| expectedSalaryMin        | currency – required                                                                           |
| expectedSalaryMax        | currency – optional                                                                           |
| idProofType              | ENUM { Aadhaar, Passport, VoterID, DrivingLicence } – required                                |
| idProofNumber            | text – regex per ID type                                                                      |
| idProofFile              | file (PDF/JPG/PNG) – required                                                                 |
| bankName                 | text – optional                                                                               |
| bankIFSC                 | text – optional, 11 chars                                                                     |
| accountHolderName        | text – optional                                                                               |
| accountNumber            | text – optional                                                                               |
| helperPhoto              | image – capture via camera or upload – required                                               |
| primaryPhone             | phone – required, 10–15 digits                                                                |
| alternatePhone           | phone – optional                                                                              |
| emergencyContactName     | text – optional                                                                               |
| emergencyContactPhone    | phone – optional                                                                              |
| latitude                 | decimal(10,8) – auto via geolocation, editable fallback                                       |
| longitude                | decimal(11,8) – auto via geolocation, editable fallback                                       |
| internalNotes            | longtext                                                                                      |
| createdAt                | datetime – default now()                                                                      |
| updatedAt                | datetime – auto on update                                                                     |

# PAGE_FLOW
## 1. /register
### Section A – Basic Details  
* Helper Type selector (pill buttons)  
* First & Last Name, Gender, DOB (age auto-shows)  
* Live Photo (camera snapshot → compress to ≤800 KB)  

### Section B – Background & Skills  
* Native State, Current Locality (autocomplete)  
* Languages Known (chips multiselect)  
* Education Level, Marital Status, Spouse Occupation, Kids Count  
* Vaccination Status radio buttons  
* Experience (months slider 0-240)  
* Specialities (chips multiselect with search)  

### Section C – Work Preferences  
* Working Hours Preference (time-range picker)  
* Preferred Localities (chips)  
* Max Placements / Month (1-5)  
* Expected Salary Range (min-max)  

### Section D – Compliance & Banking  
* ID Proof Type + Number (masked)  
* Upload ID Proof (file)  
* Bank Details (optional accordion)  

### Section E – Contact & Geo  
* Primary Phone, Alternate Phone  
* Emergency Contact (name + phone)  
* **One-tap “Use My Location”** → fills lat/long + pin on mini-map  

### Section F – Declaration & Submit  
* T&C checkbox (opens modal)  
* **Submit** → POST /api/helpers, then /success screen with submission timestamp.

## 2. /success  
Check-circle icon, “Thank you, {{firstName}}! Your profile was received on {{createdAt | format(‘DD MMM YYYY HH:mm’)}}. We’ll match you to families soon.” + WhatsApp CTA.

# UI/UX DIRECTIVES
* **Mobile-first** (max-width: 640 px), CSS clamp() for typography.  
* Stepper header (6 dots) & progress bar.  
* Floating labels, 44 px min tap targets, rounded-lg boxes, depth-2 shadows.  
* Colour theme: primary #3B82F6 (blue-500), accent #F59E0B (amber-500).  
* Instant inline validation (red-500 helper text).  
* Thumbnail preview + file size for uploads (auto-compress images >1 MB).  
* Dark-mode via prefers-color-scheme.

# LOGIC
```pseudo
onPageLoad:
  createdAt = Date.now()
  try geolocation.getCurrentPosition():
      set lat/long fields (readonly until “Edit” tapped)

onSubmit:
  validateAll()
  if ok:
      POST multipart-formdata → /api/helpers
      redirect /success
  else:
      scrollToFirstError()
