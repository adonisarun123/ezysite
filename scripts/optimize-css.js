#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// CSS optimization utility to remove unused styles
class CSSOptimizer {
  constructor() {
    this.usedClasses = new Set();
    this.componentFiles = [];
    this.cssFiles = [];
  }

  // Find all component files
  async findComponentFiles() {
    const patterns = [
      'app/**/*.{tsx,ts,jsx,js}',
      'components/**/*.{tsx,ts,jsx,js}',
      'pages/**/*.{tsx,ts,jsx,js}'
    ];

    for (const pattern of patterns) {
      const files = await glob(pattern, { ignore: ['node_modules/**'] });
      this.componentFiles.push(...files);
    }

    console.log(`Found ${this.componentFiles.length} component files`);
  }

  // Extract used CSS classes from components
  extractUsedClasses() {
    const classPatterns = [
      /className="([^"]+)"/g,
      /className='([^']+)'/g,
      /className=\{`([^`]+)`\}/g,
      /className=\{"([^"]+)"\}/g,
      /className=\{'([^']+)'\}/g,
    ];

    this.componentFiles.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        classPatterns.forEach(pattern => {
          let match;
          while ((match = pattern.exec(content)) !== null) {
            const classString = match[1];
            // Split by spaces and handle template literals
            const classes = classString
              .split(/\s+/)
              .map(cls => cls.trim())
              .filter(cls => cls && !cls.includes('${') && !cls.includes('`'));
            
            classes.forEach(cls => this.usedClasses.add(cls));
          }
        });
      } catch (error) {
        console.warn(`Error reading ${file}:`, error.message);
      }
    });

    console.log(`Found ${this.usedClasses.size} unique CSS classes`);
  }

  // Analyze global CSS for unused rules
  analyzeGlobalCSS() {
    const globalCSSPath = path.join(process.cwd(), 'app/globals.css');
    
    if (!fs.existsSync(globalCSSPath)) {
      console.log('No globals.css found');
      return;
    }

    const cssContent = fs.readFileSync(globalCSSPath, 'utf8');
    const lines = cssContent.split('\n');
    const unusedLines = [];
    const usedLines = [];

    let currentSelector = '';
    let currentBlock = [];
    let inBlock = false;
    let blockStartLine = 0;

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      // Check for CSS selectors
      if (trimmedLine.includes('{') && !inBlock) {
        currentSelector = trimmedLine.split('{')[0].trim();
        currentBlock = [line];
        inBlock = true;
        blockStartLine = index;
      } else if (inBlock) {
        currentBlock.push(line);
        
        if (trimmedLine.includes('}')) {
          inBlock = false;
          
          // Check if selector is used
          const isUsed = this.isSelectorUsed(currentSelector);
          
          if (isUsed) {
            usedLines.push(...currentBlock);
          } else {
            unusedLines.push({
              selector: currentSelector,
              lines: blockStartLine + 1,
              block: currentBlock.join('\n')
            });
          }
          
          currentBlock = [];
          currentSelector = '';
        }
      } else if (!inBlock) {
        // Comments, imports, etc.
        usedLines.push(line);
      }
    });

    console.log('\n=== CSS Analysis Results ===');
    console.log(`Total selectors analyzed: ${unusedLines.length + usedLines.length}`);
    console.log(`Unused selectors found: ${unusedLines.length}`);
    
    if (unusedLines.length > 0) {
      console.log('\nUnused CSS selectors:');
      unusedLines.forEach(item => {
        console.log(`- Line ${item.lines}: ${item.selector}`);
      });
      
      // Optionally create optimized CSS file
      const optimizedCSS = usedLines.join('\n');
      const optimizedPath = path.join(process.cwd(), 'app/globals.optimized.css');
      fs.writeFileSync(optimizedPath, optimizedCSS);
      console.log(`\nOptimized CSS written to: ${optimizedPath}`);
      console.log(`Original size: ${cssContent.length} bytes`);
      console.log(`Optimized size: ${optimizedCSS.length} bytes`);
      console.log(`Savings: ${cssContent.length - optimizedCSS.length} bytes`);
    }
  }

  // Check if a CSS selector is used
  isSelectorUsed(selector) {
    // Remove pseudo-selectors and focus on base classes
    const baseSelector = selector
      .replace(/::?[\w-]+/g, '') // Remove pseudo-elements/classes
      .replace(/\[.*?\]/g, '') // Remove attribute selectors
      .replace(/>\s*/g, ' ') // Replace child selectors
      .replace(/\+\s*/g, ' ') // Replace sibling selectors
      .replace(/~\s*/g, ' ') // Replace general sibling selectors
      .trim();

    // Extract class names from selector
    const classMatches = baseSelector.match(/\.[\w-]+/g);
    if (classMatches) {
      return classMatches.some(className => {
        const cls = className.substring(1); // Remove the dot
        return this.usedClasses.has(cls);
      });
    }

    // For non-class selectors (elements, etc.), assume they're used
    return true;
  }

  // Main optimization process
  async optimize() {
    console.log('Starting CSS optimization...\n');
    
    await this.findComponentFiles();
    this.extractUsedClasses();
    this.analyzeGlobalCSS();
    
    console.log('\nOptimization complete!');
  }
}

// Run optimization
if (require.main === module) {
  const optimizer = new CSSOptimizer();
  optimizer.optimize().catch(console.error);
}

module.exports = CSSOptimizer; 