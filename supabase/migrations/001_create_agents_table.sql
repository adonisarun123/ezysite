-- Create agents table for partner agency registrations
CREATE TABLE IF NOT EXISTS agents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Agency Overview
  agency_name VARCHAR(100) NOT NULL,
  registration_number VARCHAR(100) NOT NULL,
  agency_certificate_url TEXT,
  year_founded INTEGER NOT NULL CHECK (year_founded >= 1990 AND year_founded <= EXTRACT(YEAR FROM NOW())),
  
  -- Service Capability
  services_offered TEXT[] NOT NULL DEFAULT '{}',
  max_helpers_supply INTEGER NOT NULL DEFAULT 1 CHECK (max_helpers_supply > 0),
  
  -- Founder/Owner Details
  owner_name VARCHAR(100) NOT NULL,
  owner_dob DATE NOT NULL,
  owner_photo_url TEXT,
  owner_id_type VARCHAR(20) NOT NULL CHECK (owner_id_type IN ('Aadhaar', 'Passport', 'VoterID', 'DrivingLicence')),
  owner_id_number VARCHAR(50) NOT NULL,
  owner_id_proof_url TEXT,
  
  -- Contact & Address
  primary_phone VARCHAR(15) NOT NULL,
  secondary_phone VARCHAR(15),
  email VARCHAR(100) NOT NULL,
  office_address_line1 TEXT NOT NULL,
  office_address_line2 TEXT,
  city VARCHAR(50) NOT NULL,
  state VARCHAR(50) NOT NULL,
  pincode VARCHAR(6) NOT NULL,
  latitude DECIMAL(10,8),
  longitude DECIMAL(11,8),
  
  -- Additional Fields
  listed_by VARCHAR(100),
  notes TEXT,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_agents_email ON agents(email);
CREATE INDEX IF NOT EXISTS idx_agents_primary_phone ON agents(primary_phone);
CREATE INDEX IF NOT EXISTS idx_agents_city ON agents(city);
CREATE INDEX IF NOT EXISTS idx_agents_state ON agents(state);
CREATE INDEX IF NOT EXISTS idx_agents_created_at ON agents(created_at);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_agents_updated_at 
    BEFORE UPDATE ON agents 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Add RLS (Row Level Security) policies if needed
ALTER TABLE agents ENABLE ROW LEVEL SECURITY;

-- Allow read access for authenticated users
CREATE POLICY "Allow read access for authenticated users" ON agents
    FOR SELECT USING (auth.role() = 'authenticated');

-- Allow insert for anonymous users (for registration)
CREATE POLICY "Allow insert for anonymous users" ON agents
    FOR INSERT WITH CHECK (true);