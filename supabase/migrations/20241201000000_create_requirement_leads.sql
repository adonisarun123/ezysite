-- Create requirement_leads table for storing customer requirement submissions
CREATE TABLE IF NOT EXISTS requirement_leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    request_id VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contact_no VARCHAR(15) NOT NULL,
    area_of_service VARCHAR(255) NOT NULL,
    apartment TEXT NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    requirement_description TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'completed', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_requirement_leads_request_id ON requirement_leads(request_id);
CREATE INDEX IF NOT EXISTS idx_requirement_leads_email ON requirement_leads(email);
CREATE INDEX IF NOT EXISTS idx_requirement_leads_contact_no ON requirement_leads(contact_no);
CREATE INDEX IF NOT EXISTS idx_requirement_leads_status ON requirement_leads(status);
CREATE INDEX IF NOT EXISTS idx_requirement_leads_created_at ON requirement_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_requirement_leads_area_of_service ON requirement_leads(area_of_service);

-- Create spatial index for location-based queries
CREATE INDEX IF NOT EXISTS idx_requirement_leads_location ON requirement_leads USING gist(ll_to_earth(latitude, longitude));

-- Add updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_requirement_leads_updated_at 
    BEFORE UPDATE ON requirement_leads 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE requirement_leads ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users (admin access)
CREATE POLICY "Enable read access for authenticated users" ON requirement_leads
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Enable insert for all users" ON requirement_leads
    FOR INSERT WITH CHECK (true);

-- Add comments for documentation
COMMENT ON TABLE requirement_leads IS 'Stores customer service requirement submissions with location data';
COMMENT ON COLUMN requirement_leads.request_id IS 'Unique identifier with timestamp for tracking (format: REQ-TIMESTAMP-RANDOM)';
COMMENT ON COLUMN requirement_leads.latitude IS 'Latitude coordinate (automatically detected from user location)';
COMMENT ON COLUMN requirement_leads.longitude IS 'Longitude coordinate (automatically detected from user location)';
COMMENT ON COLUMN requirement_leads.area_of_service IS 'Locality or area where service is required';
COMMENT ON COLUMN requirement_leads.apartment IS 'Apartment/building details';
COMMENT ON COLUMN requirement_leads.requirement_description IS 'Detailed description of service requirements';
COMMENT ON COLUMN requirement_leads.status IS 'Current status of the requirement (new, contacted, in_progress, completed, cancelled)';
