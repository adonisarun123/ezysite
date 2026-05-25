import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import { validateApiKey } from '@/lib/auth';

const ALLOWED_HOSTS = new Set<string>([
  'www.ezyhelpers.com',
  'ezyhelpers.com',
]);

// RFC1918 private ranges + loopback + link-local
function isPrivateOrLoopbackHost(host: string): boolean {
  const h = host.toLowerCase();
  if (h === 'localhost' || h === '0.0.0.0' || h === '::1') return true;
  // IPv4 numeric form
  const ipv4 = h.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (ipv4) {
    const [a, b] = [parseInt(ipv4[1], 10), parseInt(ipv4[2], 10)];
    if (a === 10) return true;
    if (a === 127) return true;
    if (a === 169 && b === 254) return true;
    if (a === 172 && b >= 16 && b <= 31) return true;
    if (a === 192 && b === 168) return true;
    if (a === 100 && b >= 64 && b <= 127) return true; // CGNAT
    if (a === 0) return true;
  }
  // IPv6 short-form check (basic)
  if (h.startsWith('fc') || h.startsWith('fd') || h.startsWith('fe80')) return true;
  return false;
}

function isAllowedUrl(rawUrl: string): { ok: boolean; reason?: string } {
  let parsed: URL;
  try {
    parsed = new URL(rawUrl);
  } catch {
    return { ok: false, reason: 'invalid_url' };
  }
  if (parsed.protocol !== 'https:') {
    return { ok: false, reason: 'protocol_not_allowed' };
  }
  if (isPrivateOrLoopbackHost(parsed.hostname)) {
    return { ok: false, reason: 'host_not_allowed' };
  }
  if (!ALLOWED_HOSTS.has(parsed.hostname.toLowerCase())) {
    return { ok: false, reason: 'host_not_allowed' };
  }
  return { ok: true };
}

export async function POST(request: NextRequest) {
  // Require API key
  const authResult = validateApiKey(request);
  if (!authResult.isValid) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  let browser: Awaited<ReturnType<typeof puppeteer.launch>> | null = null;
  try {
    const { url } = await request.json();

    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        { error: 'invalid_request' },
        { status: 400 }
      );
    }

    const check = isAllowedUrl(url);
    if (!check.ok) {
      return NextResponse.json(
        { error: 'invalid_request' },
        { status: 400 }
      );
    }

    // Launch Puppeteer with safe args only (no --no-sandbox / --disable-setuid-sandbox)
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--disable-gpu',
      ],
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
    browser = null;

    // Return the PDF as a response
    return new NextResponse(Buffer.from(pdf) as any, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="EzyHelpers-Executive-Summary.pdf"',
        'Cache-Control': 'no-cache'
      }
    });

  } catch (error) {
    console.error('PDF generation error:', error);
    if (browser) {
      try { await browser.close(); } catch { /* ignore */ }
    }
    return NextResponse.json(
      { error: 'pdf_generation_failed' },
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
