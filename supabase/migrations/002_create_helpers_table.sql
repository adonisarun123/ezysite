-- Create helpers table for individual helper registrations
CREATE TABLE IF NOT EXISTS helpers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Basic Details
  helper_type VARCHAR(20) NOT NULL CHECK (helper_type IN ('Live-in', 'Full-time', 'Part-time', 'On-demand')),
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50),
  gender VARCHAR(10) NOT NULL CHECK (gender IN ('Female', 'Male', 'Other')),
  date_of_birth DATE NOT NULL,
  age INTEGER GENERATED ALWAYS AS (EXTRACT(YEAR FROM AGE(date_of_birth))) STORED,
  helper_photo_url TEXT,
  
  -- Background & Skills
  native_state VARCHAR(50) NOT NULL,
  current_locality VARCHAR(100) NOT NULL,
  languages_known TEXT[] NOT NULL DEFAULT '{}',
  education_level VARCHAR(20) NOT NULL CHECK (education_level IN ('None', '5th', '8th', '10th', '12th', 'Graduate+')),
  marital_status VARCHAR(20) NOT NULL CHECK (marital_status IN ('Single', 'Married', 'Widowed', 'Divorced')),
  spouse_occupation VARCHAR(100),
  kids_count INTEGER DEFAULT 0 CHECK (kids_count >= 0 AND kids_count <= 10),
  smartphone_available BOOLEAN NOT NULL DEFAULT true,
  whatsapp_active BOOLEAN NOT NULL DEFAULT true,
  vaccination_status VARCHAR(20) NOT NULL CHECK (vaccination_status IN ('Fully', 'Partially', 'None')),
  experience_months INTEGER DEFAULT 0 CHECK (experience_months >= 0),
  specialities TEXT[] NOT NULL DEFAULT '{}',
  
  -- Work Preferences
  working_hours_preference VARCHAR(100) DEFAULT '8 AM - 6 PM',
  preferred_localities TEXT,
  max_placements_per_month INTEGER DEFAULT 1 CHECK (max_placements_per_month >= 1 AND max_placements_per_month <= 5),
  expected_salary_min INTEGER DEFAULT 0,
  expected_salary_max INTEGER DEFAULT 0,
  
  -- Compliance & Banking
  id_proof_type VARCHAR(20) NOT NULL CHECK (id_proof_type IN ('Aadhaar', 'Passport', 'VoterID', 'DrivingLicence')),
  id_proof_number VARCHAR(50) NOT NULL,
  id_proof_file_url TEXT,
  bank_name VARCHAR(100),
  bank_ifsc VARCHAR(11),
  account_holder_name VARCHAR(100),
  account_number VARCHAR(20),
  
  -- Contact & Location
  primary_phone VARCHAR(15) NOT NULL,
  alternate_phone VARCHAR(15),
  emergency_contact_name VARCHAR(100),
  emergency_contact_phone VARCHAR(15),
  latitude DECIMAL(10,8),
  longitude DECIMAL(11,8),
  
  -- Additional Fields
  listed_by VARCHAR(100),
  internal_notes TEXT,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_helpers_primary_phone ON helpers(primary_phone);
CREATE INDEX IF NOT EXISTS idx_helpers_helper_type ON helpers(helper_type);
CREATE INDEX IF NOT EXISTS idx_helpers_current_locality ON helpers(current_locality);
CREATE INDEX IF NOT EXISTS idx_helpers_native_state ON helpers(native_state);
CREATE INDEX IF NOT EXISTS idx_helpers_experience_months ON helpers(experience_months);
CREATE INDEX IF NOT EXISTS idx_helpers_specialities ON helpers USING GIN(specialities);
CREATE INDEX IF NOT EXISTS idx_helpers_languages_known ON helpers USING GIN(languages_known);
CREATE INDEX IF NOT EXISTS idx_helpers_created_at ON helpers(created_at);

-- Create updated_at trigger
CREATE TRIGGER update_helpers_updated_at 
    BEFORE UPDATE ON helpers 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Add constraints for age validation (18-60 years)
ALTER TABLE helpers ADD CONSTRAINT check_age_range 
    CHECK (date_of_birth <= CURRENT_DATE - INTERVAL '18 years' 
           AND date_of_birth >= CURRENT_DATE - INTERVAL '60 years');

-- Add RLS (Row Level Security) policies
ALTER TABLE helpers ENABLE ROW LEVEL SECURITY;

-- Allow read access for authenticated users
CREATE POLICY "Allow read access for authenticated users" ON helpers
    FOR SELECT USING (auth.role() = 'authenticated');

-- Allow insert for anonymous users (for registration)
CREATE POLICY "Allow insert for anonymous users" ON helpers
    FOR INSERT WITH CHECK (true);