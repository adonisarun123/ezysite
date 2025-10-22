-- Database indexes for performance optimization
-- Run this migration to add indexes to common query patterns

-- Indexes for helpers table
CREATE INDEX IF NOT EXISTS idx_helpers_created_at
  ON helpers(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_helpers_current_locality
  ON helpers(current_locality);

CREATE INDEX IF NOT EXISTS idx_helpers_helper_type
  ON helpers(helper_type);

CREATE INDEX IF NOT EXISTS idx_helpers_primary_phone
  ON helpers(primary_phone);

CREATE INDEX IF NOT EXISTS idx_helpers_specialities
  ON helpers USING GIN(specialities);

CREATE INDEX IF NOT EXISTS idx_helpers_languages_known
  ON helpers USING GIN(languages_known);

-- Indexes for agents table
CREATE INDEX IF NOT EXISTS idx_agents_created_at
  ON agents(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_agents_city
  ON agents(city);

CREATE INDEX IF NOT EXISTS idx_agents_primary_phone
  ON agents(primary_phone);

CREATE INDEX IF NOT EXISTS idx_agents_email
  ON agents(email);

CREATE INDEX IF NOT EXISTS idx_agents_services_offered
  ON agents USING GIN(services_offered);

-- Indexes for leads table (if exists)
-- Uncomment and modify based on your actual schema
-- CREATE INDEX IF NOT EXISTS idx_leads_created_at
--   ON leads(created_at DESC);

-- CREATE INDEX IF NOT EXISTS idx_leads_email
--   ON leads(email);

-- CREATE INDEX IF NOT EXISTS idx_leads_city
--   ON leads(city);

-- CREATE INDEX IF NOT EXISTS idx_leads_service_type
--   ON leads(service_type);

-- Compound index for common query patterns
CREATE INDEX IF NOT EXISTS idx_helpers_type_locality
  ON helpers(helper_type, current_locality);

CREATE INDEX IF NOT EXISTS idx_agents_city_state
  ON agents(city, state);

-- Comments for documentation
COMMENT ON INDEX idx_helpers_created_at IS 'Optimize queries ordering by creation date';
COMMENT ON INDEX idx_helpers_current_locality IS 'Optimize location-based searches';
COMMENT ON INDEX idx_helpers_helper_type IS 'Optimize filtering by helper type';
COMMENT ON INDEX idx_helpers_specialities IS 'Optimize GIN index for array searches on specialities';
COMMENT ON INDEX idx_helpers_languages_known IS 'Optimize GIN index for array searches on languages';
