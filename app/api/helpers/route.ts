import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { randomUUID } from 'crypto'

// Types
interface HelperData {
  id: string
  helperType: string
  firstName: string
  lastName: string
  gender: string
  dateOfBirth: string
  age: number
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
  preferredLocalities: string[]
  maxPlacementsPerMonth: number
  expectedSalaryMin: number
  expectedSalaryMax: number
  idProofType: string
  idProofNumber: string
  idProofFile: string // file path
  bankName: string
  bankIFSC: string
  accountHolderName: string
  accountNumber: string
  helperPhoto: string // file path
  primaryPhone: string
  alternatePhone: string
  emergencyContactName: string
  emergencyContactPhone: string
  latitude: number | null
  longitude: number | null
  listedBy: string
  internalNotes: string
  createdAt: string
  updatedAt: string
}

// File upload helper
async function saveFile(file: File, folder: string): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer())
  const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`
  const uploadDir = join(process.cwd(), 'public', 'uploads', 'helpers', folder)
  
  // Create directory if it doesn't exist
  try {
    await mkdir(uploadDir, { recursive: true })
  } catch (error) {
    // Directory might already exist
  }
  
  const filepath = join(uploadDir, filename)
  await writeFile(filepath, buffer)
  
  return `/uploads/helpers/${folder}/${filename}`
}

// Validation helpers
function validatePhone(phone: string): boolean {
  const phoneRegex = /^[0-9]{10,15}$/
  return phoneRegex.test(phone.replace(/\s+/g, ''))
}

function validateIDNumber(idType: string, idNumber: string): boolean {
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

function validateIFSC(ifsc: string): boolean {
  if (!ifsc) return true // Optional field
  return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc.toUpperCase())
}

// Simulate database save
async function saveToDatabase(helperData: HelperData): Promise<boolean> {
  try {
    const dbFilePath = join(process.cwd(), 'data', 'helpers.json')
    
    // Create data directory if it doesn't exist
    try {
      await mkdir(join(process.cwd(), 'data'), { recursive: true })
    } catch (error) {
      // Directory might already exist
    }
    
    // Read existing data or create empty array
    let existingData: HelperData[] = []
    try {
      const { readFile } = await import('fs/promises')
      const fileContent = await readFile(dbFilePath, 'utf-8')
      existingData = JSON.parse(fileContent)
    } catch (error) {
      // File doesn't exist yet, start with empty array
    }
    
    // Add new helper data
    existingData.push(helperData)
    
    // Save back to file
    await writeFile(dbFilePath, JSON.stringify(existingData, null, 2))
    
    console.log('Helper registration saved:', {
      id: helperData.id,
      name: `${helperData.firstName} ${helperData.lastName}`,
      type: helperData.helperType,
      phone: helperData.primaryPhone,
      experience: helperData.experienceMonths,
      specialities: helperData.specialities,
      location: helperData.currentLocality,
      listedBy: helperData.listedBy,
      createdAt: helperData.createdAt
    })
    
    return true
  } catch (error) {
    console.error('Database save error:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extract and validate basic fields
    const helperType = formData.get('helperType') as string
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string || ''
    const gender = formData.get('gender') as string
    const dateOfBirth = formData.get('dateOfBirth') as string
    const age = parseInt(formData.get('age') as string) || 0
    const nativeState = formData.get('nativeState') as string
    const currentLocality = formData.get('currentLocality') as string
    const educationLevel = formData.get('educationLevel') as string
    const maritalStatus = formData.get('maritalStatus') as string
    const spouseOccupation = formData.get('spouseOccupation') as string || ''
    const kidsCount = parseInt(formData.get('kidsCount') as string) || 0
    const smartphoneAvailable = formData.get('smartphoneAvailable') === 'true'
    const whatsappActive = formData.get('whatsappActive') === 'true'
    const vaccinationStatus = formData.get('vaccinationStatus') as string
    const experienceMonths = parseInt(formData.get('experienceMonths') as string) || 0
    const workingHoursPreference = formData.get('workingHoursPreference') as string || '8 AM - 6 PM'
    const maxPlacementsPerMonth = parseInt(formData.get('maxPlacementsPerMonth') as string) || 1
    const expectedSalaryMin = parseInt(formData.get('expectedSalaryMin') as string) || 0
    const expectedSalaryMax = parseInt(formData.get('expectedSalaryMax') as string) || 0
    const idProofType = formData.get('idProofType') as string
    const idProofNumber = formData.get('idProofNumber') as string
    const bankName = formData.get('bankName') as string || ''
    const bankIFSC = formData.get('bankIFSC') as string || ''
    const accountHolderName = formData.get('accountHolderName') as string || ''
    const accountNumber = formData.get('accountNumber') as string || ''
    const primaryPhone = formData.get('primaryPhone') as string
    const alternatePhone = formData.get('alternatePhone') as string || ''
    const emergencyContactName = formData.get('emergencyContactName') as string || ''
    const emergencyContactPhone = formData.get('emergencyContactPhone') as string || ''
    const latitude = formData.get('latitude') ? parseFloat(formData.get('latitude') as string) : null
    const longitude = formData.get('longitude') ? parseFloat(formData.get('longitude') as string) : null
    const listedBy = formData.get('listedBy') as string || ''
    const internalNotes = formData.get('internalNotes') as string || ''
    const createdAt = formData.get('createdAt') as string || new Date().toISOString()
    
    // Extract arrays
    const languagesKnown: string[] = []
    formData.getAll('languagesKnown[]').forEach(lang => {
      if (typeof lang === 'string') {
        languagesKnown.push(lang)
      }
    })
    
    const specialities: string[] = []
    formData.getAll('specialities[]').forEach(spec => {
      if (typeof spec === 'string') {
        specialities.push(spec)
      }
    })
    
    const preferredLocalities: string[] = []
    formData.getAll('preferredLocalities[]').forEach(loc => {
      if (typeof loc === 'string') {
        preferredLocalities.push(loc)
      }
    })
    
    // Validation
    const errors: string[] = []
    
    if (!firstName || firstName.length < 2) {
      errors.push('First name must be at least 2 characters')
    }
    
    if (!dateOfBirth) {
      errors.push('Date of birth is required')
    } else {
      const age = new Date().getFullYear() - new Date(dateOfBirth).getFullYear()
      if (age < 18) {
        errors.push('Must be at least 18 years old')
      } else if (age > 60) {
        errors.push('Must be under 60 years old')
      }
    }
    
    if (!nativeState) {
      errors.push('Native state is required')
    }
    
    if (!currentLocality) {
      errors.push('Current locality is required')
    }
    
    if (languagesKnown.length === 0) {
      errors.push('At least one language must be selected')
    }
    
    if (specialities.length === 0) {
      errors.push('At least one speciality must be selected')
    }
    
    if (!primaryPhone || !validatePhone(primaryPhone)) {
      errors.push('Valid primary phone number is required')
    }
    
    if (alternatePhone && !validatePhone(alternatePhone)) {
      errors.push('Alternate phone number is invalid')
    }
    
    if (emergencyContactPhone && !validatePhone(emergencyContactPhone)) {
      errors.push('Emergency contact phone number is invalid')
    }
    
    if (!idProofNumber || !validateIDNumber(idProofType, idProofNumber)) {
      errors.push(`Valid ${idProofType} number is required`)
    }
    
    if (bankIFSC && !validateIFSC(bankIFSC)) {
      errors.push('Invalid IFSC code format')
    }
    
    // File validations
    const helperPhoto = formData.get('helperPhoto') as File
    const idProofFile = formData.get('idProofFile') as File
    
    if (!helperPhoto || helperPhoto.size === 0) {
      errors.push('Helper photo is required')
    }
    
    if (!idProofFile || idProofFile.size === 0) {
      errors.push('ID proof document is required')
    }
    
    // Check file sizes
    const maxPhotoSize = 800 * 1024 // 800KB
    const maxDocSize = 5 * 1024 * 1024 // 5MB
    
    if (helperPhoto && helperPhoto.size > maxPhotoSize) {
      errors.push('Helper photo file size must be less than 800KB')
    }
    
    if (idProofFile && idProofFile.size > maxDocSize) {
      errors.push('ID proof file size must be less than 5MB')
    }
    
    if (errors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      )
    }
    
    // Save files
    let helperPhotoPath = ''
    let idProofFilePath = ''
    
    try {
      helperPhotoPath = await saveFile(helperPhoto, 'photos')
      idProofFilePath = await saveFile(idProofFile, 'id-proofs')
    } catch (error) {
      console.error('File save error:', error)
      return NextResponse.json(
        { error: 'Failed to save uploaded files' },
        { status: 500 }
      )
    }
    
    // Create helper data object
    const helperData: HelperData = {
      id: randomUUID(),
      helperType,
      firstName,
      lastName,
      gender,
      dateOfBirth,
      age,
      nativeState,
      currentLocality,
      languagesKnown,
      educationLevel,
      maritalStatus,
      spouseOccupation,
      kidsCount,
      smartphoneAvailable,
      whatsappActive,
      vaccinationStatus,
      experienceMonths,
      specialities,
      workingHoursPreference,
      preferredLocalities,
      maxPlacementsPerMonth,
      expectedSalaryMin,
      expectedSalaryMax,
      idProofType,
      idProofNumber,
      idProofFile: idProofFilePath,
      bankName,
      bankIFSC,
      accountHolderName,
      accountNumber,
      helperPhoto: helperPhotoPath,
      primaryPhone,
      alternatePhone,
      emergencyContactName,
      emergencyContactPhone,
      latitude,
      longitude,
      listedBy,
      internalNotes,
      createdAt,
      updatedAt: new Date().toISOString()
    }
    
    // Save to database
    const saved = await saveToDatabase(helperData)
    
    if (!saved) {
      return NextResponse.json(
        { error: 'Failed to save registration data' },
        { status: 500 }
      )
    }
    
    // Send success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Helper registration submitted successfully',
        helperId: helperData.id,
        submittedAt: helperData.createdAt
      },
      { status: 201 }
    )
    
  } catch (error) {
    console.error('Helper registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET method to retrieve helper registrations (for admin use)
export async function GET(request: NextRequest) {
  try {
    const { readFile } = await import('fs/promises')
    const dbFilePath = join(process.cwd(), 'data', 'helpers.json')
    
    const fileContent = await readFile(dbFilePath, 'utf-8')
    const helpers: HelperData[] = JSON.parse(fileContent)
    
    // Return sanitized data (without file paths for security)
    const sanitizedHelpers = helpers.map(helper => ({
      id: helper.id,
      helperType: helper.helperType,
      firstName: helper.firstName,
      lastName: helper.lastName,
      gender: helper.gender,
      age: helper.age,
      experienceMonths: helper.experienceMonths,
      specialities: helper.specialities,
      languagesKnown: helper.languagesKnown,
      currentLocality: helper.currentLocality,
      primaryPhone: helper.primaryPhone,
      expectedSalaryMin: helper.expectedSalaryMin,
      expectedSalaryMax: helper.expectedSalaryMax,
      workingHoursPreference: helper.workingHoursPreference,
      latitude: helper.latitude,
      longitude: helper.longitude,
      listedBy: helper.listedBy,
      createdAt: helper.createdAt,
      updatedAt: helper.updatedAt
    }))
    
    return NextResponse.json({
      success: true,
      count: sanitizedHelpers.length,
      helpers: sanitizedHelpers
    })
    
  } catch (error) {
    return NextResponse.json(
      { error: 'No registrations found' },
      { status: 404 }
    )
  }
}