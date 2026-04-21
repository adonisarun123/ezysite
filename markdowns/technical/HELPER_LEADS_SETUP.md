# Helper Leads Form - Database Setup

## Issue Fixed
The helper leads form at `/helper-leads` was failing because the `ezyhelpers.helper_lead` table didn't exist in your database.

## Database Migration Required

You need to run the following migration in your Supabase SQL editor:

### Step 1: Copy Migration SQL
Go to your Supabase project → SQL Editor → New Query

Copy and paste the entire contents of:
```
supabase/migrations/20241201000002_create_helper_lead_table.sql
```

### Step 2: Execute Migration
Click "Run" to execute the migration. This will:
- ✅ Create the `ezyhelpers` schema
- ✅ Create the `job_role_enum` with all 9 service types
- ✅ Create the `ezyhelpers.helper_lead` table
- ✅ Set up proper indexes, constraints, and triggers
- ✅ Configure Row Level Security (RLS) policies
- ✅ Grant proper permissions for anonymous form submissions

## What This Creates

### Database Schema: `ezyhelpers`
### Table: `helper_lead`

| Field | Type | Description |
|-------|------|-------------|
| `id` | UUID | Primary key (auto-generated) |
| `helper_name` | TEXT | Helper's full name (min 2 chars) |
| `mobile` | TEXT | 10-digit Indian mobile (6-9 prefix) |
| `job_roles` | ENUM[] | Array of selected services |
| `job_role_other` | TEXT | Other service description |
| `ip` | INET | User's IP address |
| `detected_city` | TEXT | Auto-detected city |
| `detected_region` | TEXT | Auto-detected region |
| `detected_country` | TEXT | Auto-detected country |
| `lat` | DOUBLE | Latitude coordinates |
| `lng` | DOUBLE | Longitude coordinates |
| `raw_geo` | JSONB | Raw geolocation data |
| `remarks` | TEXT | Additional information |
| `created_at` | TIMESTAMPTZ | Creation timestamp |
| `updated_at` | TIMESTAMPTZ | Last update timestamp |

### Service Types (job_role_enum)
- `COOK` - Cooking
- `HOUSEKEEPING` - Housekeeping  
- `BABY_CARE` - Baby Care
- `ELDER_CARE` - Elder Care
- `DRIVER` - Driver
- `SECURITY` - Security
- `CARPENTER` - Carpenter
- `PLUMBER` - Plumber
- `OTHER` - Other (requires job_role_other text)

## Security Features
- **Row Level Security**: Enabled
- **Anonymous Inserts**: Allowed (for form submissions)
- **Authenticated Reads**: Allowed (for admin dashboard)
- **Unique Mobile**: Each mobile number can only be registered once
- **Data Validation**: Built-in constraints for all fields

## After Migration
Once you run the migration, the helper leads form will work perfectly and start collecting lead data directly into your Supabase database.

## Error Handling Improved
The form now shows more specific error messages:
- Enum/service selection errors
- Database permission issues  
- Duplicate mobile number detection
- Schema/configuration problems
- Detailed logging in browser console

## Testing
After running the migration:
1. Visit `/helper-leads` on your website
2. Fill out the form with test data
3. Check your Supabase database for the new record
4. Review browser console for detailed logs
