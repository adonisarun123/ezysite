import { NextRequest, NextResponse } from 'next/server';
import { testEmailConnection } from '@/lib/emailService';
import { validateApiKey } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Only allow in development or with valid API key
    if (process.env.NODE_ENV === 'production') {
      const authResult = validateApiKey(request);
      if (!authResult.isValid) {
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        );
      }
    }

    // Check if environment variables are set
    const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'ADMIN_EMAIL'];
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      return NextResponse.json({
        success: false,
        error: 'Missing environment variables',
        missing: missingVars
      }, { status: 400 });
    }

    // Test email connection
    const result = await testEmailConnection();

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message,
        config: {
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          user: process.env.SMTP_USER,
          adminEmail: process.env.ADMIN_EMAIL
        }
      });
    } else {
      return NextResponse.json({
        success: false,
        error: result.error
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Test email API error:', error);
    return NextResponse.json({
      success: false,
      error: 'Internal server error'
    }, { status: 500 });
  }
} 