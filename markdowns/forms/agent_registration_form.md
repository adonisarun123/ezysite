# APP_NAME
EzyHelpers – Agent Registration Portal

# PURPOSE
Create a single-page, mobile-first form that lets domestic-helper agencies register themselves and list the helpers they can supply.  
The form must:
1. Collect comprehensive agency, founder/owner & compliance details.  
2. Auto-capture GPS lat/long + submission timestamp.  
3. Upload photos & PDFs.  
4. Validate inputs in real-time and save to a secure “Agents” table.  
5. Work seamlessly on 360–430 px screens as well as desktop.

# ENTITIES & FIELDS
## Table: agents  
| field                | type & rules                                                    |
|----------------------|-----------------------------------------------------------------|
| id                   | uuid - auto                                                    |
| agencyName           | text - required, max 100                                       |
| registrationNumber   | text - unique, required (Govt/Shop & Establishment, etc.)      |
| agencyCertificate    | file (PDF/JPG/PNG) - required                                  |
| yearFounded          | number - min 1900, max currentYear                             |
| servicesOffered      | multiselect ENUM { Live-in, Full-time, Part-time, Babysitting, Elder-care, Cooking, Cleaning, Driver } – min 1 |
| maxHelpersSupply     | number - min 1                                                 |
| ownerName            | text - required                                                |
| ownerDOB             | date - required                                                |
| ownerPhoto           | image - capture via camera or upload – required                |
| ownerIDType          | ENUM { Aadhaar, Passport, VoterID, DrivingLicence }            |
| ownerIDNumber        | text - regex per ID type                                       |
| ownerIDProof         | file (PDF/JPG/PNG) - required                                  |
| primaryPhone         | phone - required, 10-15 digits                                 |
| secondaryPhone       | phone - optional                                               |
| email                | email - required, lowercase                                    |
| officeAddressLine1   | text - required                                                |
| officeAddressLine2   | text - optional                                                |
| city                 | text - required                                                |
| state                | text - required (dropdown Indian states)                       |
| pincode              | number - 6 digits                                              |
| latitude             | decimal(10,8) - auto via geolocation, editable fallback        |
| longitude            | decimal(11,8) - auto via geolocation, editable fallback        |
| notes                | longtext                                                       |
| createdAt            | datetime - default now()                                       |
| updatedAt            | datetime - auto on update                                      |

# PAGE_FLOW
## 1. /register  
- **Section 1 – Agency Overview**  
  - Agency Name (text)  
  - Govt Registration / Licence No. (text)  
  - Upload Certificate (file)  
  - Year Founded (number slider 1990 → current year)  
- **Section 2 – Service Capability**  
  - Services Offered (chips multiselect)  
  - Max Helpers You Can Supply Now (stepped number input)  
- **Section 3 – Founder / Owner**  
  - Full Name, Date of Birth (date-picker)  
  - Live Photo (camera-capture preferred)  
  - ID Type (dropdown) + ID Number (masked)  
  - Upload ID Proof (file)  
- **Section 4 – Contact & Address**  
  - Primary Phone, Secondary Phone, Email  
  - Address Line 1 & 2, City, State, Pincode (auto-suggest via Google Places API)  
  - **Lat/Long Auto-Detect** (one-tap “Use My Location”; editable map pin)  
- **Section 5 – Declaration & Submit**  
  - T&C checkbox (link modal)  
  - “Submit Registration” button → POST /api/agents, then success screen.

## 2. /success  
Minimal page with check-circle icon, “Registration received on {{createdAt}}. We’ll verify and revert within 48 hrs.” + CTA to WhatsApp helpline.

# UI/UX DIRECTIVES
- **Mobile-first grid (max-width: 640 px)**; use CSS clamp() for font sizes.  
- Sticky progress bar (0–100 %) across sections.  
- Floating labels, 44 px min tap targets, subtle depth-2 shadows, rounded-lg corners.  
- Primary colour #0D9488 (teal-600), secondary #F59E0B (amber-500).  
- Real-time inline validation + red-500 helper text.  
- File inputs show thumbnail + file size; compress images to ≤1 MB before upload.  
- Dark-mode auto via media-query prefers-color-scheme.

# LOGIC
```pseudo
onPageLoad:
  requestBrowserGeolocation()
  if success -> set latitude, longitude inputs (read-only until “Edit” tapped)
  timestamp createdAt = Date.now()

onSubmit:
  validateAll()
  if ok:
    POST /api/agents with multipart-formdata
    redirect /success
  else:
    scrollTo firstError
