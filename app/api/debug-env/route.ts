import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    console.log('🔍 Checking environment variables...');
    
    const envCheck = {
      supabase: {
        url: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        urlValue: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set (length: ' + process.env.NEXT_PUBLIC_SUPABASE_URL.length + ')' : 'Not set',
        key: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        keyValue: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set (length: ' + process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.length + ')' : 'Not set'
      },
      email: {
        host: !!process.env.SMTP_HOST,
        hostValue: process.env.SMTP_HOST || 'Not set',
        port: !!process.env.SMTP_PORT,
        portValue: process.env.SMTP_PORT || 'Not set',
        user: !!process.env.SMTP_USER,
        userValue: process.env.SMTP_USER ? 'Set (length: ' + process.env.SMTP_USER.length + ')' : 'Not set',
        pass: !!process.env.SMTP_PASS,
        passValue: process.env.SMTP_PASS ? 'Set (length: ' + process.env.SMTP_PASS.length + ')' : 'Not set'
      },
      node: {
        env: process.env.NODE_ENV,
        version: process.version
      }
    };
    
    const allSupabaseSet = envCheck.supabase.url && envCheck.supabase.key;
    const allEmailSet = envCheck.email.host && envCheck.email.port && envCheck.email.user && envCheck.email.pass;
    
    return NextResponse.json({
      success: true,
      environment: envCheck,
      status: {
        supabase: allSupabaseSet ? 'configured' : 'missing variables',
        email: allEmailSet ? 'configured' : 'missing variables',
        overall: allSupabaseSet && allEmailSet ? 'ready' : 'needs configuration'
      },
      recommendations: [
        ...(!allSupabaseSet ? ['Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY'] : []),
        ...(!allEmailSet ? ['Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS'] : [])
      ]
    });
    
  } catch (error) {
    console.error('💥 Environment check failed:', error);
    return NextResponse.json({
      success: false,
      error: 'Environment check failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
