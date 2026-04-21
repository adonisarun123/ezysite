# Supabase Database Setup for EzyHelpers Registration System

This document outlines the setup process for connecting the EzyHelpers registration forms to Supabase database.

## Prerequisites

1. **Supabase Account**: Create an account at [supabase.com](https://supabase.com)
2. **Environment Variables**: Set up the following environment variables in your `.env.local` file:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

## Database Setup

### 1. Run Database Migrations

Execute the following SQL files in your Supabase SQL editor in order:

#### Step 1: Create Agents Table
```sql
-- Copy and paste contents from: supabase/migrations/001_create_agents_table.sql
```

#### Step 2: Create Helpers Table
```sql
-- Copy and paste contents from: supabase/migrations/002_create_helpers_table.sql
```

#### Step 3: Create Storage Buckets
```sql
-- Copy and paste contents from: supabase/migrations/003_create_storage_buckets.sql
```

### 2. Storage Configuration

The system uses two storage buckets:
- **agent-documents**: For storing agent certificates, photos, and ID proofs
- **helper-documents**: For storing helper photos and ID documents

### 3. Row Level Security (RLS)

Both tables have RLS enabled with the following policies:
- **Public Insert**: Allows anonymous users to register (insert new records)
- **Authenticated Read**: Allows authenticated users to view registrations
- **Storage Access**: Allows anonymous uploads and public reads for document storage

## Database Schema

### Agents Table
- **Primary Key**: `id` (UUID)
- **Agency Information**: name, registration number, year founded
- **Services**: offered services array, helper capacity
- **Owner Details**: name, DOB, photo, ID verification
- **Contact Info**: phones, email, address, coordinates
- **Metadata**: listed_by, notes, timestamps

### Helpers Table
- **Primary Key**: `id` (UUID)
- **Personal Info**: name, gender, DOB, photo
- **Background**: education, experience, languages, specialities
- **Work Preferences**: hours, localities, salary expectations
- **Compliance**: ID verification, banking details
- **Contact Info**: phones, emergency contact, coordinates
- **Metadata**: listed_by, notes, timestamps

## File Upload System

### Organization Structure
```
Storage Buckets:
├── agent-documents/
│   └── {agent-id}/
│       ├── certificates/
│       ├── photos/
│       └── id-proofs/
└── helper-documents/
    └── {helper-id}/
        ├── photos/
        └── id-proofs/
```

### File Size Limits
- **Helper Photos**: 800KB maximum
- **Documents**: 5MB maximum
- **Supported Formats**: PDF, JPG, JPEG, PNG

## API Endpoints

### Agent Registration
- **POST** `/api/agents` - Submit agent registration
- **GET** `/api/agents` - Retrieve agent registrations (admin)

### Helper Registration
- **POST** `/api/helpers` - Submit helper registration
- **GET** `/api/helpers` - Retrieve helper registrations (admin)

## Data Validation

### Server-side Validation
- Email format validation
- Phone number validation (10-15 digits)
- ID number format validation per type
- File size and type validation
- Required field validation
- Age validation (18-60 years for helpers)

### Database Constraints
- Age range validation for helpers
- Enum constraints for categorical fields
- Required field constraints
- Array field validation

## Security Features

1. **Row Level Security**: Prevents unauthorized data access
2. **File Upload Security**: Organized file structure with access controls
3. **Input Validation**: Comprehensive server-side validation
4. **SQL Injection Protection**: Using Supabase parameterized queries
5. **File Type Validation**: Restricts file uploads to safe formats

## Monitoring and Maintenance

### Database Indexes
Indexes are created for:
- Email and phone fields for quick lookups
- Geographic fields (city, state) for location-based queries
- Experience and specialities for helper matching
- Creation timestamps for chronological sorting

### Performance Optimization
- Efficient database queries with specific field selection
- File storage organized by user ID for quick access
- Proper indexing on frequently queried fields
- Optimized data types and constraints

## Troubleshooting

### Common Issues

1. **Environment Variables Not Set**
   - Ensure `.env.local` contains correct Supabase credentials
   - Restart development server after adding variables

2. **RLS Policy Issues**
   - Verify policies are enabled for anonymous insert operations
   - Check storage bucket policies for file uploads

3. **File Upload Errors**
   - Confirm storage buckets exist and are properly configured
   - Check file size limits and format restrictions

4. **Database Connection Issues**
   - Verify Supabase project URL and API key
   - Ensure Supabase client is properly initialized

### Debugging

Enable console logging in the API routes to monitor:
- Database query results
- File upload status
- Validation errors
- Authentication issues

## Data Backup

Regular backups are automatically handled by Supabase, but consider:
- Exporting critical data periodically
- Monitoring database size and storage usage
- Setting up alerts for failed operations

## Production Deployment

Before going live:
1. Update RLS policies for production security requirements
2. Configure proper CORS settings
3. Set up monitoring and alerting
4. Test all registration flows thoroughly
5. Verify file upload and storage functionality