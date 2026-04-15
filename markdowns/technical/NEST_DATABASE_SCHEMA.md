# NEST Leads Database Schema

## Table: `nest_leads`

### Schema Definition

```sql
CREATE TABLE nest_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Contact Information
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  
  -- Booking Details
  booking_type TEXT CHECK (booking_type IN ('helper', 'employer')),
  check_in_date DATE,
  check_out_date DATE,
  duration_days INTEGER,
  
  -- User Type
  user_type TEXT CHECK (user_type IN (
    'helper_between_jobs',
    'helper_new_to_city',
    'helper_employer_vacation',
    'employer_booking',
    'emergency_stay',
    'festival_stay',
    'medical_leave'
  )),
  
  -- Additional Information
  special_requirements TEXT,
  message TEXT,
  
  -- Metadata
  source_url TEXT,
  request_id TEXT UNIQUE,
  
  -- Status
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'confirmed', 'completed', 'cancelled'))
);
```

### Indexes

```sql
CREATE INDEX idx_nest_leads_phone ON nest_leads(phone);
CREATE INDEX idx_nest_leads_created_at ON nest_leads(created_at DESC);
CREATE INDEX idx_nest_leads_status ON nest_leads(status);
CREATE INDEX idx_nest_leads_check_in ON nest_leads(check_in_date);
```

### Row Level Security (RLS)

```sql
-- Enable RLS
ALTER TABLE nest_leads ENABLE ROW LEVEL SECURITY;

-- Insert policy (public access)
CREATE POLICY "Anyone can insert nest leads"
  ON nest_leads
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Select policy (authenticated only)
CREATE POLICY "Authenticated users can view nest leads"
  ON nest_leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Update policy (authenticated only)
CREATE POLICY "Authenticated users can update nest leads"
  ON nest_leads
  FOR UPDATE
  TO authenticated
  USING (true);
```

## Common Queries

### Get All New Leads

```sql
SELECT *
FROM nest_leads
WHERE status = 'new'
ORDER BY created_at DESC;
```

### Get Leads by Date Range

```sql
SELECT *
FROM nest_leads
WHERE check_in_date BETWEEN '2025-01-01' AND '2025-01-31'
ORDER BY check_in_date;
```

### Get Leads by Phone Number

```sql
SELECT *
FROM nest_leads
WHERE phone = '+919999999999'
ORDER BY created_at DESC;
```

### Update Lead Status

```sql
UPDATE nest_leads
SET status = 'contacted'
WHERE id = 'uuid-here';
```

### Get Statistics

```sql
-- Total leads by booking type
SELECT 
  booking_type,
  COUNT(*) as total_leads,
  COUNT(CASE WHEN status = 'confirmed' THEN 1 END) as confirmed
FROM nest_leads
GROUP BY booking_type;

-- Leads by month
SELECT 
  DATE_TRUNC('month', created_at) as month,
  COUNT(*) as total_leads
FROM nest_leads
GROUP BY month
ORDER BY month DESC;
```

## TypeScript Types

```typescript
export interface NestLead {
  id: string
  created_at: string
  name: string
  phone: string
  email: string | null
  booking_type: 'helper' | 'employer' | null
  check_in_date: string | null
  check_out_date: string | null
  duration_days: number | null
  user_type: UserType | null
  special_requirements: string | null
  message: string | null
  source_url: string | null
  request_id: string | null
  status: LeadStatus
}

export type UserType =
  | 'helper_between_jobs'
  | 'helper_new_to_city'
  | 'helper_employer_vacation'
  | 'employer_booking'
  | 'emergency_stay'
  | 'festival_stay'
  | 'medical_leave'

export type LeadStatus = 'new' | 'contacted' | 'confirmed' | 'completed' | 'cancelled'
```
