import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'
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
  preferredLocalities: string
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

// File upload helper for Supabase storage
async function uploadFileToSupabase(file: File, folder: string, helperId: string): Promise<string> {
  const fileExt = file.name.split('.').pop()
  const fileName = `${helperId}/${folder}/${Date.now()}-${randomUUID()}.${fileExt}`
  
  const { data, error } = await supabase.storage
    .from('helper-documents')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
    })

  if (error) {
    console.error('File upload error:', error)
    throw new Error(`Failed to upload ${folder}`)
  }

  // Get public URL
  const { data: { publicUrl } } = supabase.storage
    .from('helper-documents')
    .getPublicUrl(fileName)

  return publicUrl
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

// Save helper data to Supabase database
async function saveToDatabase(helperData: Omit<HelperData, 'createdAt' | 'updatedAt'>): Promise<{ success: boolean; error?: string }> {
  try {
    const { data, error } = await supabase
      .from('helpers')
      .insert([{
        id: helperData.id,
        helper_type: helperData.helperType,
        first_name: helperData.firstName,
        last_name: helperData.lastName,
        gender: helperData.gender,
        date_of_birth: helperData.dateOfBirth,
        helper_photo_url: helperData.helperPhoto,
        native_state: helperData.nativeState,
        current_locality: helperData.currentLocality,
        languages_known: helperData.languagesKnown,
        education_level: helperData.educationLevel,
        marital_status: helperData.maritalStatus,
        spouse_occupation: helperData.spouseOccupation,
        kids_count: helperData.kidsCount,
        smartphone_available: helperData.smartphoneAvailable,
        whatsapp_active: helperData.whatsappActive,
        vaccination_status: helperData.vaccinationStatus,
        experience_months: helperData.experienceMonths,
        specialities: helperData.specialities,
        working_hours_preference: helperData.workingHoursPreference,
        preferred_localities: helperData.preferredLocalities,
        max_placements_per_month: helperData.maxPlacementsPerMonth,
        expected_salary_min: helperData.expectedSalaryMin,
        expected_salary_max: helperData.expectedSalaryMax,
        id_proof_type: helperData.idProofType,
        id_proof_number: helperData.idProofNumber,
        id_proof_file_url: helperData.idProofFile,
        bank_name: helperData.bankName,
        bank_ifsc: helperData.bankIFSC,
        account_holder_name: helperData.accountHolderName,
        account_number: helperData.accountNumber,
        primary_phone: helperData.primaryPhone,
        alternate_phone: helperData.alternatePhone,
        emergency_contact_name: helperData.emergencyContactName,
        emergency_contact_phone: helperData.emergencyContactPhone,
        latitude: helperData.latitude,
        longitude: helperData.longitude,
        listed_by: helperData.listedBy,
        internal_notes: helperData.internalNotes
      }])
      .select()

    if (error) {
      console.error('Database save error:', error)
      return { success: false, error: error.message }
    }

    console.log('Helper registration saved to Supabase:', {
      id: helperData.id,
      name: `${helperData.firstName} ${helperData.lastName}`,
      type: helperData.helperType,
      phone: helperData.primaryPhone,
      experience: helperData.experienceMonths,
      specialities: helperData.specialities,
      location: helperData.currentLocality,
      listedBy: helperData.listedBy
    })
    
    return { success: true }
  } catch (error) {
    console.error('Database save error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
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
    
    const preferredLocalities = formData.get('preferredLocalities') as string || ''
    
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
    
    // Generate helper ID first for file organization
    const helperId = randomUUID()
    
    // Upload files to Supabase storage
    let helperPhotoUrl = ''
    let idProofFileUrl = ''
    
    try {
      helperPhotoUrl = await uploadFileToSupabase(helperPhoto, 'photos', helperId)
      idProofFileUrl = await uploadFileToSupabase(idProofFile, 'id-proofs', helperId)
    } catch (error) {
      console.error('File upload error:', error)
      return NextResponse.json(
        { error: 'Failed to upload files' },
        { status: 500 }
      )
    }
    
    // Create helper data object
    const helperData: HelperData = {
      id: helperId,
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
      idProofFile: idProofFileUrl,
      bankName,
      bankIFSC,
      accountHolderName,
      accountNumber,
      helperPhoto: helperPhotoUrl,
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
    const saveResult = await saveToDatabase(helperData)
    
    if (!saveResult.success) {
      return NextResponse.json(
        { error: 'Failed to save registration data', details: saveResult.error },
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
    const { data: helpers, error } = await supabase
      .from('helpers')
      .select(`
        id,
        helper_type,
        first_name,
        last_name,
        gender,
        age,
        experience_months,
        specialities,
        languages_known,
        current_locality,
        primary_phone,
        expected_salary_min,
        expected_salary_max,
        working_hours_preference,
        latitude,
        longitude,
        listed_by,
        created_at,
        updated_at
      `)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Database fetch error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch helpers' },
        { status: 500 }
      )
    }

    // Convert snake_case to camelCase for frontend compatibility
    const sanitizedHelpers = helpers.map(helper => ({
      id: helper.id,
      helperType: helper.helper_type,
      firstName: helper.first_name,
      lastName: helper.last_name,
      gender: helper.gender,
      age: helper.age,
      experienceMonths: helper.experience_months,
      specialities: helper.specialities,
      languagesKnown: helper.languages_known,
      currentLocality: helper.current_locality,
      primaryPhone: helper.primary_phone,
      expectedSalaryMin: helper.expected_salary_min,
      expectedSalaryMax: helper.expected_salary_max,
      workingHoursPreference: helper.working_hours_preference,
      latitude: helper.latitude,
      longitude: helper.longitude,
      listedBy: helper.listed_by,
      createdAt: helper.created_at,
      updatedAt: helper.updated_at
    }))
    
    return NextResponse.json({
      success: true,
      count: sanitizedHelpers.length,
      helpers: sanitizedHelpers
    })
    
  } catch (error) {
    console.error('Helper fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch helper registrations' },
      { status: 500 }
    )
  }
}