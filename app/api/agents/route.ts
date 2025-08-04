import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
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

// File upload helper
async function saveFile(file: File, folder: string): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer())
  const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`
  const uploadDir = join(process.cwd(), 'public', 'uploads', folder)
  
  // Create directory if it doesn't exist
  try {
    await mkdir(uploadDir, { recursive: true })
  } catch (error) {
    // Directory might already exist
  }
  
  const filepath = join(uploadDir, filename)
  await writeFile(filepath, buffer)
  
  return `/uploads/${folder}/${filename}`
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

// Simulate database save (in real app, this would save to your actual database)
async function saveToDatabase(agentData: AgentData): Promise<boolean> {
  try {
    // In a real application, you would save to your database here
    // For now, we'll just log the data and save to a JSON file for demonstration
    
    const dbFilePath = join(process.cwd(), 'data', 'agents.json')
    
    // Create data directory if it doesn't exist
    try {
      await mkdir(join(process.cwd(), 'data'), { recursive: true })
    } catch (error) {
      // Directory might already exist
    }
    
    // Read existing data or create empty array
    let existingData: AgentData[] = []
    try {
      const { readFile } = await import('fs/promises')
      const fileContent = await readFile(dbFilePath, 'utf-8')
      existingData = JSON.parse(fileContent)
    } catch (error) {
      // File doesn't exist yet, start with empty array
    }
    
    // Add new agent data
    existingData.push(agentData)
    
    // Save back to file
    await writeFile(dbFilePath, JSON.stringify(existingData, null, 2))
    
    console.log('Agent registration saved:', {
      id: agentData.id,
      agencyName: agentData.agencyName,
      ownerName: agentData.ownerName,
      email: agentData.email,
      phone: agentData.primaryPhone,
      city: agentData.city,
      state: agentData.state,
      servicesOffered: agentData.servicesOffered,
      createdAt: agentData.createdAt
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
    
    // Save files
    let agencyCertificatePath = ''
    let ownerPhotoPath = ''
    let ownerIDProofPath = ''
    
    try {
      agencyCertificatePath = await saveFile(agencyCertificate, 'certificates')
      ownerPhotoPath = await saveFile(ownerPhoto, 'photos')
      ownerIDProofPath = await saveFile(ownerIDProof, 'id-proofs')
    } catch (error) {
      console.error('File save error:', error)
      return NextResponse.json(
        { error: 'Failed to save uploaded files' },
        { status: 500 }
      )
    }
    
    // Create agent data object
    const agentData: AgentData = {
      id: randomUUID(),
      agencyName,
      registrationNumber,
      agencyCertificate: agencyCertificatePath,
      yearFounded,
      servicesOffered,
      maxHelpersSupply,
      ownerName,
      ownerDOB,
      ownerPhoto: ownerPhotoPath,
      ownerIDType,
      ownerIDNumber,
      ownerIDProof: ownerIDProofPath,
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
    const saved = await saveToDatabase(agentData)
    
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
    const { readFile } = await import('fs/promises')
    const dbFilePath = join(process.cwd(), 'data', 'agents.json')
    
    const fileContent = await readFile(dbFilePath, 'utf-8')
    const agents: AgentData[] = JSON.parse(fileContent)
    
    // Return sanitized data (without file paths for security)
    const sanitizedAgents = agents.map(agent => ({
      id: agent.id,
      agencyName: agent.agencyName,
      registrationNumber: agent.registrationNumber,
      yearFounded: agent.yearFounded,
      servicesOffered: agent.servicesOffered,
      maxHelpersSupply: agent.maxHelpersSupply,
      ownerName: agent.ownerName,
      ownerIDType: agent.ownerIDType,
      primaryPhone: agent.primaryPhone,
      email: agent.email,
      city: agent.city,
      state: agent.state,
      pincode: agent.pincode,
      latitude: agent.latitude,
      longitude: agent.longitude,
      listedBy: agent.listedBy,
      createdAt: agent.createdAt,
      updatedAt: agent.updatedAt
    }))
    
    return NextResponse.json({
      success: true,
      count: sanitizedAgents.length,
      agents: sanitizedAgents
    })
    
  } catch (error) {
    return NextResponse.json(
      { error: 'No registrations found' },
      { status: 404 }
    )
  }
}