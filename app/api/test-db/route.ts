import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET(request: NextRequest) {
  try {
    console.log('🔍 Testing database connection...');
    
    // Test 1: Basic connection
    console.log('1️⃣ Testing basic Supabase connection...');
    const { data: tables, error: tablesError } = await supabase
      .from('requirement_leads')
      .select('*')
      .limit(1);
    
    if (tablesError) {
      console.error('❌ Tables query error:', tablesError);
      return NextResponse.json({
        success: false,
        error: 'Database connection failed',
        details: tablesError.message,
        code: tablesError.code
      }, { status: 500 });
    }
    
    console.log('✅ Database connection successful');
    
    // Test 2: Try a simple insert with test data
    console.log('2️⃣ Testing insert capability...');
    const testData = {
      request_id: `TEST-${Date.now()}`,
      name: 'Test User',
      email: 'test@example.com',
      contact_no: '9999999999',
      area_of_service: 'Test Area',
      apartment: 'Test Apartment',
      latitude: 12.9716,
      longitude: 77.5946,
      requirement_description: 'This is a test requirement',
      created_at: new Date().toISOString()
    };
    
    const { data: insertData, error: insertError } = await supabase
      .from('requirement_leads')
      .insert([testData])
      .select();
    
    if (insertError) {
      console.error('❌ Insert test failed:', insertError);
      return NextResponse.json({
        success: false,
        error: 'Insert test failed',
        details: insertError.message,
        code: insertError.code,
        hint: insertError.hint
      }, { status: 500 });
    }
    
    console.log('✅ Insert test successful:', insertData);
    
    // Test 3: Clean up test data
    const { error: deleteError } = await supabase
      .from('requirement_leads')
      .delete()
      .eq('request_id', testData.request_id);
    
    if (deleteError) {
      console.warn('⚠️ Cleanup failed (not critical):', deleteError.message);
    } else {
      console.log('🧹 Test data cleaned up');
    }
    
    return NextResponse.json({
      success: true,
      message: 'Database tests passed!',
      tests: {
        connection: 'passed',
        insert: 'passed',
        cleanup: deleteError ? 'failed' : 'passed'
      }
    });
    
  } catch (error) {
    console.error('💥 Database test failed:', error);
    return NextResponse.json({
      success: false,
      error: 'Database test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
