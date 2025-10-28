import { randomUUID } from 'crypto';

/**
 * Generate a unique error ID for tracking
 */
export function generateErrorId(): string {
  return randomUUID();
}

/**
 * Create a structured error response with error ID
 */
export function createErrorResponse(
  message: string,
  statusCode: number = 500,
  details?: string | string[]
) {
  const errorId = generateErrorId();

  return {
    response: {
      success: false,
      error: message,
      errorId,
      details,
      timestamp: new Date().toISOString(),
    },
    statusCode,
    errorId, // Return for logging
  };
}

/**
 * Cache control headers for different scenarios
 */
export const CacheHeaders = {
  // No caching - for dynamic/user-specific content
  noCache: {
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  },

  // Short cache - for frequently changing data (1 minute)
  short: {
    'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
  },

  // Medium cache - for moderately stable data (5 minutes)
  medium: {
    'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
  },

  // Long cache - for stable data (1 hour)
  long: {
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
  },

  // Static assets - cache for 1 year
  static: {
    'Cache-Control': 'public, max-age=31536000, immutable',
  },
};
