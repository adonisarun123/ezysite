-- ===============================================
-- Add additional services to helper_lead enum
-- ===============================================

-- Add new values to the existing job_role_enum
ALTER TYPE ezyhelpers.job_role_enum ADD VALUE 'DRIVER';
ALTER TYPE ezyhelpers.job_role_enum ADD VALUE 'SECURITY';
ALTER TYPE ezyhelpers.job_role_enum ADD VALUE 'CARPENTER';
ALTER TYPE ezyhelpers.job_role_enum ADD VALUE 'PLUMBER';
