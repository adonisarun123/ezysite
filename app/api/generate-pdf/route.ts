import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' }, 
        { status: 400 }
      );
    }

    // Launch Puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--single-process',
        '--disable-gpu'
      ]
    });

    const page = await browser.newPage();
    
    // Set viewport for consistent rendering
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 2
    });

    // Navigate to the page
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Wait for any dynamic content to load
    await page.waitForSelector('body', { timeout: 10000 });
    
    // Add some custom styles for PDF
    await page.addStyleTag({
      content: `
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          .no-print {
            display: none !important;
          }
          
          /* Ensure backgrounds are printed */
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          /* Better page breaks */
          section {
            page-break-inside: avoid;
          }
          
          /* Ensure gradients and backgrounds show */
          .bg-gradient-to-r,
          .bg-gradient-to-br,
          .bg-gradient-to-b {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `
    });

    // Generate PDF
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px'
      },
      displayHeaderFooter: true,
      headerTemplate: `
        <div style="font-size: 10px; margin: 0 auto; color: #666;">
          EzyHelpers - Executive Summary
        </div>
      `,
      footerTemplate: `
        <div style="font-size: 10px; margin: 0 auto; color: #666;">
          Page <span class="pageNumber"></span> of <span class="totalPages"></span>
        </div>
      `,
      preferCSSPageSize: false
    });

    await browser.close();

    // Return the PDF as a response
    return new NextResponse(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="EzyHelpers-Executive-Summary.pdf"',
        'Cache-Control': 'no-cache'
      }
    });

  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' }, 
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'PDF generation endpoint. Use POST with URL parameter.' },
    { status: 200 }
  );
} 