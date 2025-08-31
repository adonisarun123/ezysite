import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET(request: NextRequest) {
  try {
    console.log('🔍 Testing ezyhelpers.helper_lead table...');
    
    // Test 1: Check if table exists by trying to query it
    const { data: tableTest, error: tableError } = await supabase
      .from('ezyhelpers.helper_lead')
      .select('id')
      .limit(1);

    // Test 2: Try to get the table schema info
    const { data: schemaTest, error: schemaError } = await supabase
      .rpc('get_schema_info', { schema_name: 'ezyhelpers', table_name: 'helper_lead' })
      .select();

    // Test 3: Check if we can perform basic operations
    let insertTest = null;
    let insertError = null;
    
    if (!tableError) {
      // Try a test insert (this will fail if constraints are wrong, which is good info)
      const testData = {
        helper_name: 'Test Helper',
        mobile: '9999999999',
        job_roles: ['COOK', 'HOUSEKEEPING'],
        job_role_other: null,
        remarks: 'Test insertion - will be deleted'
      };

      const { data: insertData, error: insertErr } = await supabase
        .from('ezyhelpers.helper_lead')
        .insert([testData])
        .select();

      insertTest = insertData;
      insertError = insertErr;

      // Clean up test data if insert succeeded
      if (insertData && insertData.length > 0) {
        await supabase
          .from('ezyhelpers.helper_lead')
          .delete()
          .eq('id', insertData[0].id);
      }
    }

    const results = {
      tableExists: !tableError,
      tableError: tableError?.message || null,
      schemaExists: !schemaError,
      schemaError: schemaError?.message || null,
      canInsert: !insertError && insertTest !== null,
      insertError: insertError?.message || null,
      summary: {
        status: !tableError ? 'SUCCESS' : 'FAILED',
        message: !tableError 
          ? '✅ ezyhelpers.helper_lead table is working correctly!'
          : `❌ Table not found or not accessible: ${tableError.message}`
      }
    };

    return NextResponse.json({
      success: !tableError,
      timestamp: new Date().toISOString(),
      tests: results,
      recommendations: tableError ? [
        'Run the migration SQL in your Supabase SQL Editor',
        'Check that your Supabase environment variables are correct',
        'Verify RLS policies allow anonymous access'
      ] : [
        'Table is ready for form submissions!',
        'Test the helper leads form at /helper-leads'
      ]
    });

  } catch (error) {
    console.error('💥 Table test failed:', error);
    return NextResponse.json({
      success: false,
      error: 'Database test failed',
      details: error instanceof Error ? error.message : 'Unknown error',
      recommendations: [
        'Check your Supabase connection',
        'Verify environment variables are set',
        'Run the migration SQL if table doesn\'t exist'
      ]
    }, { status: 500 });
  }
}
