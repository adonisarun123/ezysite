# PDF Download Button - Usage Guide

## Overview
I've created a PDF download button that allows users to download any page as a PDF. The implementation uses the browser's built-in print functionality, which is fast, reliable, and doesn't require server resources.

## Available Components

### 1. PDFDownloadButton (Full-featured)
Location: `components/PDFDownloadButton.tsx`

**Features:**
- Two modes: `print` (default) and `server`
- Print mode: Uses browser's print dialog (user selects "Save as PDF")
- Server mode: Generates PDF server-side using Puppeteer
- Customizable styling and filename
- Error handling and loading states
- Automatic print-optimized styling

**Usage:**
```tsx
import PDFDownloadButton from '@/components/PDFDownloadButton';

// Basic usage (print mode)
<PDFDownloadButton />

// Customized
<PDFDownloadButton 
  filename="My-Custom-Page.pdf"
  variant="print"
  className="bg-blue-600 text-white"
>
  Download as PDF
</PDFDownloadButton>

// Server-side generation
<PDFDownloadButton 
  variant="server"
  filename="Server-Generated.pdf"
/>
```

### 2. SimplePDFButton (Lightweight)
Location: `components/SimplePDFButton.tsx`

**Features:**
- Minimal, lightweight implementation
- Only uses print dialog approach
- Easy to customize and understand
- Perfect for simple use cases

**Usage:**
```tsx
import SimplePDFButton from '@/components/SimplePDFButton';

// Basic usage
<SimplePDFButton />

// Custom title
<SimplePDFButton 
  pageTitle="My-Page-Name"
  className="bg-green-600 text-white"
/>
```

## How to Add to Any Page

### Method 1: Add to Existing Component
```tsx
// In any existing component file
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function MyPage() {
  return (
    <div>
      {/* Your existing content */}
      
      {/* Add PDF button anywhere */}
      <div className="text-center my-8">
        <PDFDownloadButton 
          filename="MyPage.pdf"
          className="bg-indigo-600 text-white"
        >
          📄 Download PDF
        </PDFDownloadButton>
      </div>
    </div>
  );
}
```

### Method 2: Add to Page Layout
```tsx
// In your page.tsx file
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function MyPage() {
  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-4 right-4 z-50 no-print">
        <PDFDownloadButton 
          filename="MyPage.pdf"
          className="bg-blue-600 text-white shadow-lg"
        />
      </div>
      
      {/* Your page content */}
      <main>
        {/* content */}
      </main>
    </>
  );
}
```

### Method 3: Add to Header/Navigation
```tsx
// In your navbar or header component
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function Navbar() {
  return (
    <nav>
      {/* existing nav items */}
      
      <div className="ml-4">
        <PDFDownloadButton 
          filename="Current-Page.pdf"
          className="text-sm bg-gray-100 text-gray-800 hover:bg-gray-200"
        >
          PDF
        </PDFDownloadButton>
      </div>
    </nav>
  );
}
```

## Print Optimization

The components automatically add print-specific CSS that:

1. **Hides unwanted elements:**
   - Navigation bars
   - Fixed/sticky elements
   - Buttons (except those with `.print-keep` class)
   - Elements with `.no-print` class

2. **Optimizes layout:**
   - Sets proper page margins
   - Prevents page breaks inside sections
   - Ensures images fit properly
   - Improves text contrast

3. **Preserves styling:**
   - Maintains colors and backgrounds
   - Keeps readable fonts
   - Preserves important visual elements

## Customization Options

### Hide Elements from PDF
Add the `no-print` class to any element you don't want in the PDF:

```tsx
<div className="no-print">
  This won't appear in the PDF
</div>

<button className="no-print">
  This button will be hidden
</button>
```

### Keep Elements in PDF
Add the `print-keep` class to buttons you want to keep:

```tsx
<button className="print-keep bg-blue-600 text-white">
  This button will appear in PDF
</button>
```

### Custom Print Styles
You can add custom print styles in your CSS:

```css
@media print {
  .my-custom-element {
    font-size: 14px;
    margin-bottom: 20px;
  }
  
  .hide-in-pdf {
    display: none !important;
  }
}
```

## Example Implementation

I've already added the PDF button to your homepage (`components/sections/HeroSection.tsx`) as an example. You can see it in action by:

1. Going to http://localhost:3000
2. Scrolling to the hero section
3. Clicking the "📄 Download Page as PDF" button
4. In the print dialog, choose "Save as PDF"

## Server-Side PDF Generation

If you need server-side PDF generation (for programmatic use or when client-side isn't suitable), use:

```tsx
<PDFDownloadButton 
  variant="server"
  filename="Server-Generated.pdf"
/>
```

This uses the existing `/api/generate-pdf` endpoint with Puppeteer.

## Browser Compatibility

- **Print mode**: Works in all modern browsers
- **Server mode**: Requires server-side Puppeteer setup

## Best Practices

1. **Placement**: Put the button where users expect to find download options
2. **Styling**: Make it visually distinct but not intrusive
3. **Filename**: Use descriptive filenames that include page/section names
4. **Responsive**: Ensure the button works well on mobile devices
5. **Accessibility**: Include proper ARIA labels and titles

## Troubleshooting

**Common Issues:**
- If styles don't appear in PDF: Ensure `-webkit-print-color-adjust: exact` is set
- If elements are cut off: Check for `page-break-inside: avoid` on containers
- If button doesn't work: Check for JavaScript errors in browser console

**Quick Fixes:**
- Always test the print preview before finalizing
- Use `.no-print` class liberally for UI elements
- Consider mobile print behavior when testing 