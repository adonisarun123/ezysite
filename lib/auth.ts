import { NextRequest, NextResponse } from 'next/server';

/**
 * Authentication middleware for protecting sensitive API routes
 * Validates API key from Authorization header
 */
export function validateApiKey(request: NextRequest): { isValid: boolean; error?: string } {
  const authHeader = request.headers.get('authorization');

  if (!authHeader) {
    return { isValid: false, error: 'Missing authorization header' };
  }

  // Support both "Bearer token" and "token" formats
  const token = authHeader.startsWith('Bearer ')
    ? authHeader.substring(7)
    : authHeader;

  // Check against environment variable
  const validApiKey = process.env.API_SECRET_KEY;

  if (!validApiKey) {
    console.error('API_SECRET_KEY environment variable not set');
    return { isValid: false, error: 'Server configuration error' };
  }

  if (token !== validApiKey) {
    return { isValid: false, error: 'Invalid API key' };
  }

  return { isValid: true };
}

/**
 * Higher-order function to protect API routes with authentication
 * Usage: export const GET = withAuth(async (request) => { ... })
 */
export function withAuth(
  handler: (request: NextRequest) => Promise<NextResponse>
) {
  return async (request: NextRequest): Promise<NextResponse> => {
    const authResult = validateApiKey(request);

    if (!authResult.isValid) {
      return NextResponse.json(
        {
          error: 'Unauthorized',
          message: authResult.error,
          hint: 'Please provide a valid API key in the Authorization header'
        },
        { status: 401 }
      );
    }

    return handler(request);
  };
}

/**
 * Rate limiting helper using in-memory store
 * In production, use Redis or similar distributed cache
 */
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 100,
  windowMs: number = 60000 // 1 minute
): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);

  // Clean up expired entries periodically
  if (rateLimitStore.size > 10000) {
    for (const [key, value] of rateLimitStore.entries()) {
      if (value.resetAt < now) {
        rateLimitStore.delete(key);
      }
    }
  }

  if (!record || record.resetAt < now) {
    const resetAt = now + windowMs;
    rateLimitStore.set(identifier, { count: 1, resetAt });
    return { allowed: true, remaining: maxRequests - 1, resetAt };
  }

  if (record.count >= maxRequests) {
    return { allowed: false, remaining: 0, resetAt: record.resetAt };
  }

  record.count++;
  return { allowed: true, remaining: maxRequests - record.count, resetAt: record.resetAt };
}
