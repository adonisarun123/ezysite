#!/usr/bin/env node

/**
 * Bundle Analysis Script
 * Analyzes the built JavaScript files to identify legacy polyfills
 */

const fs = require('fs');
const path = require('path');

const LEGACY_FEATURES = [
  'Array.prototype.at',
  'Array.prototype.flat',
  'Array.prototype.flatMap',
  'Object.fromEntries',
  'String.prototype.trimStart',
  'String.prototype.trimEnd',
  'core-js',
  '_core_js_modules',
  'es.array.at',
  'es.array.flat',
  'es.array.flat-map',
  'es.object.from-entries',
  'es.string.trim-start',
  'es.string.trim-end'
];

function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const foundFeatures = [];
    
    LEGACY_FEATURES.forEach(feature => {
      if (content.includes(feature)) {
        foundFeatures.push(feature);
      }
    });
    
    return foundFeatures;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return [];
  }
}

function analyzeBuild() {
  const buildDir = path.join(process.cwd(), '.next');
  const staticDir = path.join(buildDir, 'static', 'chunks');
  
  if (!fs.existsSync(staticDir)) {
    console.error('Build directory not found. Please run `npm run build` first.');
    return;
  }
  
  console.log('🔍 Analyzing JavaScript bundles for legacy features...\n');
  
  let totalLegacyFeatures = 0;
  let analyzedFiles = 0;
  
  const files = fs.readdirSync(staticDir).filter(file => file.endsWith('.js'));
  
  files.forEach(file => {
    const filePath = path.join(staticDir, file);
    const legacyFeatures = analyzeFile(filePath);
    
    if (legacyFeatures.length > 0) {
      console.log(`📁 ${file}:`);
      legacyFeatures.forEach(feature => {
        console.log(`  ⚠️  ${feature}`);
      });
      console.log('');
      totalLegacyFeatures += legacyFeatures.length;
    }
    
    analyzedFiles++;
  });
  
  console.log(`📊 Analysis Results:`);
  console.log(`   Files analyzed: ${analyzedFiles}`);
  console.log(`   Legacy features found: ${totalLegacyFeatures}`);
  
  if (totalLegacyFeatures === 0) {
    console.log('✅ Great! No legacy JavaScript polyfills detected.');
    console.log('   Your bundle is optimized for modern browsers.');
  } else {
    console.log('\n💡 Recommendations:');
    console.log('   - Consider updating browser targets in .browserslistrc');
    console.log('   - Check for dependencies that might be including polyfills');
    console.log('   - Consider using dynamic imports for legacy browser support');
  }
}

if (require.main === module) {
  analyzeBuild();
}

module.exports = { analyzeFile, analyzeBuild }; 