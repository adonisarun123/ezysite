import { z } from 'zod';

/**
 * Environment variable validation schema
 * Validates all required environment variables at runtime
 */

// Server-side environment variables
const serverSchema = z.object({
  // Supabase
  NEXT_PUBLIC_SUPABASE_URL: z.string().url('Invalid Supabase URL'),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1, 'Supabase anon key is required'),

  // SMTP Email Configuration
  SMTP_HOST: z.string().min(1, 'SMTP host is required'),
  SMTP_PORT: z.string().regex(/^\d+$/, 'SMTP port must be a number'),
  SMTP_USER: z.string().email('SMTP user must be a valid email'),
  SMTP_PASS: z.string().min(1, 'SMTP password is required'),

  // Email Recipients (comma-separated list)
  EMAIL_RECIPIENTS: z.string().optional(),
  ADMIN_EMAIL: z.string().optional(),
  HIRE_CONTACT_EMAIL_RECIPIENTS: z.string().optional(), // Specific recipients for hire-helper and contact forms
  CUSTOMER_REQUIREMENT_RECIPIENTS: z.string().default('arun@ezyhelpers.com,suraj@ezyhelpers.com,priyanka@ezyhelpers.com'), // Specific recipients for customer requirements form

  // API Security
  API_SECRET_KEY: z.string().min(32, 'API secret key must be at least 32 characters').optional(),

  // Node Environment
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

// Client-side environment variables (accessible in browser)
const clientSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
});

/**
 * Validates server environment variables
 * Throws an error if validation fails
 */
export function validateServerEnv() {
  try {
    return serverSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.issues.map(
        (err: z.ZodIssue) => `${err.path.join('.')}: ${err.message}`
      );

      console.error('❌ Environment variable validation failed:');
      errorMessages.forEach((msg: string) => console.error(`  - ${msg}`));

      throw new Error(
        `Environment validation failed:\n${errorMessages.join('\n')}`
      );
    }
    throw error;
  }
}

/**
 * Validates client environment variables
 * Throws an error if validation fails
 */
export function validateClientEnv() {
  try {
    return clientSchema.parse({
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.issues.map(
        (err: z.ZodIssue) => `${err.path.join('.')}: ${err.message}`
      );

      throw new Error(
        `Client environment validation failed:\n${errorMessages.join('\n')}`
      );
    }
    throw error;
  }
}

/**
 * Type-safe environment variables for server-side code
 */
export type ServerEnv = z.infer<typeof serverSchema>;

/**
 * Type-safe environment variables for client-side code
 */
export type ClientEnv = z.infer<typeof clientSchema>;

/**
 * Helper function to get environment variable with type safety
 */
export function getEnv<K extends keyof ServerEnv>(key: K): ServerEnv[K] {
  const env = process.env[key];
  if (!env) {
    throw new Error(`Environment variable ${key} is not set`);
  }
  return env as ServerEnv[K];
}

/**
 * Check if running in production
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

/**
 * Check if running in development
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}

/**
 * Check if running in test
 */
export function isTest(): boolean {
  return process.env.NODE_ENV === 'test';
}
