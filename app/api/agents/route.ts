import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'
import { randomUUID } from 'crypto'

// Types
interface AgentData {
  id: string
  agencyName: string
  registrationNumber: string
  agencyCertificate: string // file path
  yearFounded: number
  servicesOffered: string[]
  maxHelpersSupply: number
  ownerName: string
  ownerDOB: string
  ownerPhoto: string // file path
  ownerIDType: string
  ownerIDNumber: string
  ownerIDProof: string // file path
  primaryPhone: string
  secondaryPhone: string
  email: string
  officeAddressLine1: string
  officeAddressLine2: string
  city: string
  state: string
  pincode: string
  latitude: number | null
  longitude: number | null
  listedBy: string
  notes: string
  createdAt: string
  updatedAt: string
}

// File upload helper for Supabase storage
async function uploadFileToSupabase(file: File, folder: string, agentId: string): Promise<string> {
  const fileExt = file.name.split('.').pop()
  const fileName = `${agentId}/${folder}/${Date.now()}-${randomUUID()}.${fileExt}`
  
  const { data, error } = await supabase.storage
    .from('agent-documents')
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
    .from('agent-documents')
    .getPublicUrl(fileName)

  return publicUrl
}

// Validation helpers
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.toLowerCase())
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[0-9]{10,15}$/
  return phoneRegex.test(phone.replace(/\s+/g, ''))
}

function validatePincode(pincode: string): boolean {
  const pincodeRegex = /^[0-9]{6}$/
  return pincodeRegex.test(pincode)
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

// Save agent data to Supabase database
async function saveToDatabase(agentData: Omit<AgentData, 'createdAt' | 'updatedAt'>): Promise<{ success: boolean; error?: string }> {
  try {
    const { data, error } = await supabase
      .from('agents')
      .insert([{
        id: agentData.id,
        agency_name: agentData.agencyName,
        registration_number: agentData.registrationNumber,
        agency_certificate_url: agentData.agencyCertificate,
        year_founded: agentData.yearFounded,
        services_offered: agentData.servicesOffered,
        max_helpers_supply: agentData.maxHelpersSupply,
        owner_name: agentData.ownerName,
        owner_dob: agentData.ownerDOB,
        owner_photo_url: agentData.ownerPhoto,
        owner_id_type: agentData.ownerIDType,
        owner_id_number: agentData.ownerIDNumber,
        owner_id_proof_url: agentData.ownerIDProof,
        primary_phone: agentData.primaryPhone,
        secondary_phone: agentData.secondaryPhone,
        email: agentData.email.toLowerCase(),
        office_address_line1: agentData.officeAddressLine1,
        office_address_line2: agentData.officeAddressLine2,
        city: agentData.city,
        state: agentData.state,
        pincode: agentData.pincode,
        latitude: agentData.latitude,
        longitude: agentData.longitude,
        listed_by: agentData.listedBy,
        notes: agentData.notes
      }])
      .select()

    if (error) {
      console.error('Database save error:', error)
      return { success: false, error: error.message }
    }

    console.log('Agent registration saved to Supabase:', {
      id: agentData.id,
      agencyName: agentData.agencyName,
      ownerName: agentData.ownerName,
      email: agentData.email,
      phone: agentData.primaryPhone,
      city: agentData.city,
      state: agentData.state,
      servicesOffered: agentData.servicesOffered
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
    const agencyName = formData.get('agencyName') as string
    const registrationNumber = formData.get('registrationNumber') as string
    const yearFounded = parseInt(formData.get('yearFounded') as string)
    const maxHelpersSupply = parseInt(formData.get('maxHelpersSupply') as string)
    const ownerName = formData.get('ownerName') as string
    const ownerDOB = formData.get('ownerDOB') as string
    const ownerIDType = formData.get('ownerIDType') as string
    const ownerIDNumber = formData.get('ownerIDNumber') as string
    const primaryPhone = formData.get('primaryPhone') as string
    const secondaryPhone = formData.get('secondaryPhone') as string || ''
    const email = formData.get('email') as string
    const officeAddressLine1 = formData.get('officeAddressLine1') as string
    const officeAddressLine2 = formData.get('officeAddressLine2') as string || ''
    const city = formData.get('city') as string
    const state = formData.get('state') as string
    const pincode = formData.get('pincode') as string
    const latitude = formData.get('latitude') ? parseFloat(formData.get('latitude') as string) : null
    const longitude = formData.get('longitude') ? parseFloat(formData.get('longitude') as string) : null
    const listedBy = formData.get('listedBy') as string || ''
    const notes = formData.get('notes') as string || ''
    const createdAt = formData.get('createdAt') as string || new Date().toISOString()
    
    // Extract services offered (array)
    const servicesOffered: string[] = []
    formData.getAll('servicesOffered[]').forEach(service => {
      if (typeof service === 'string') {
        servicesOffered.push(service)
      }
    })
    
    // Validation
    const errors: string[] = []
    
    if (!agencyName || agencyName.length < 2) {
      errors.push('Agency name must be at least 2 characters')
    }
    
    if (!registrationNumber) {
      errors.push('Registration number is required')
    }
    
    if (!ownerName) {
      errors.push('Owner name is required')
    }
    
    if (!ownerDOB) {
      errors.push('Owner date of birth is required')
    }
    
    if (!primaryPhone || !validatePhone(primaryPhone)) {
      errors.push('Valid primary phone number is required')
    }
    
    if (secondaryPhone && !validatePhone(secondaryPhone)) {
      errors.push('Secondary phone number is invalid')
    }
    
    if (!email || !validateEmail(email)) {
      errors.push('Valid email address is required')
    }
    
    if (!officeAddressLine1) {
      errors.push('Office address is required')
    }
    
    if (!city) {
      errors.push('City is required')
    }
    
    if (!state) {
      errors.push('State is required')
    }
    
    if (!pincode || !validatePincode(pincode)) {
      errors.push('Valid 6-digit pincode is required')
    }
    
    if (!ownerIDNumber || !validateIDNumber(ownerIDType, ownerIDNumber)) {
      errors.push(`Valid ${ownerIDType} number is required`)
    }
    
    if (servicesOffered.length === 0) {
      errors.push('At least one service must be selected')
    }
    
    // File validations
    const agencyCertificate = formData.get('agencyCertificate') as File
    const ownerPhoto = formData.get('ownerPhoto') as File
    const ownerIDProof = formData.get('ownerIDProof') as File
    
    if (!agencyCertificate || agencyCertificate.size === 0) {
      errors.push('Agency certificate is required')
    }
    
    if (!ownerPhoto || ownerPhoto.size === 0) {
      errors.push('Owner photo is required')
    }
    
    if (!ownerIDProof || ownerIDProof.size === 0) {
      errors.push('Owner ID proof is required')
    }
    
    // Check file sizes
    const maxFileSize = 5 * 1024 * 1024 // 5MB
    if (agencyCertificate && agencyCertificate.size > maxFileSize) {
      errors.push('Agency certificate file size must be less than 5MB')
    }
    
    if (ownerPhoto && ownerPhoto.size > maxFileSize) {
      errors.push('Owner photo file size must be less than 5MB')
    }
    
    if (ownerIDProof && ownerIDProof.size > maxFileSize) {
      errors.push('Owner ID proof file size must be less than 5MB')
    }
    
    if (errors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      )
    }
    
    // Generate agent ID first for file organization
    const agentId = randomUUID()
    
    // Upload files to Supabase storage
    let agencyCertificateUrl = ''
    let ownerPhotoUrl = ''
    let ownerIDProofUrl = ''
    
    try {
      agencyCertificateUrl = await uploadFileToSupabase(agencyCertificate, 'certificates', agentId)
      ownerPhotoUrl = await uploadFileToSupabase(ownerPhoto, 'photos', agentId)
      ownerIDProofUrl = await uploadFileToSupabase(ownerIDProof, 'id-proofs', agentId)
    } catch (error) {
      console.error('File upload error:', error)
      return NextResponse.json(
        { error: 'Failed to upload files' },
        { status: 500 }
      )
    }
    
    // Create agent data object
    const agentData: AgentData = {
      id: agentId,
      agencyName,
      registrationNumber,
      agencyCertificate: agencyCertificateUrl,
      yearFounded,
      servicesOffered,
      maxHelpersSupply,
      ownerName,
      ownerDOB,
      ownerPhoto: ownerPhotoUrl,
      ownerIDType,
      ownerIDNumber,
      ownerIDProof: ownerIDProofUrl,
      primaryPhone,
      secondaryPhone,
      email: email.toLowerCase(),
      officeAddressLine1,
      officeAddressLine2,
      city,
      state,
      pincode,
      latitude,
      longitude,
      listedBy,
      notes,
      createdAt,
      updatedAt: new Date().toISOString()
    }
    
    // Save to database
    const saveResult = await saveToDatabase(agentData)
    
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
        message: 'Agent registration submitted successfully',
        agentId: agentData.id,
        submittedAt: agentData.createdAt
      },
      { status: 201 }
    )
    
  } catch (error) {
    console.error('Agent registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET method to retrieve agent registrations (for admin use)
export async function GET(request: NextRequest) {
  try {
    const { data: agents, error } = await supabase
      .from('agents')
      .select(`
        id,
        agency_name,
        registration_number,
        year_founded,
        services_offered,
        max_helpers_supply,
        owner_name,
        owner_id_type,
        primary_phone,
        email,
        city,
        state,
        pincode,
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
        { error: 'Failed to fetch agents' },
        { status: 500 }
      )
    }

    // Convert snake_case to camelCase for frontend compatibility
    const sanitizedAgents = agents.map(agent => ({
      id: agent.id,
      agencyName: agent.agency_name,
      registrationNumber: agent.registration_number,
      yearFounded: agent.year_founded,
      servicesOffered: agent.services_offered,
      maxHelpersSupply: agent.max_helpers_supply,
      ownerName: agent.owner_name,
      ownerIDType: agent.owner_id_type,
      primaryPhone: agent.primary_phone,
      email: agent.email,
      city: agent.city,
      state: agent.state,
      pincode: agent.pincode,
      latitude: agent.latitude,
      longitude: agent.longitude,
      listedBy: agent.listed_by,
      createdAt: agent.created_at,
      updatedAt: agent.updated_at
    }))
    
    return NextResponse.json({
      success: true,
      count: sanitizedAgents.length,
      agents: sanitizedAgents
    })
    
  } catch (error) {
    console.error('Agent fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch agent registrations' },
      { status: 500 }
    )
  }
}