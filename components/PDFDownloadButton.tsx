'use client';

import { useState } from 'react';

interface PDFDownloadButtonProps {
  filename?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: 'server' | 'print';
}

export default function PDFDownloadButton({ 
  filename = 'EzyHelpers-Page.pdf',
  className = '',
  children,
  variant = 'print'
}: PDFDownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateServerPDF = async () => {
    try {
      setIsGenerating(true);
      setError(null);

      const targetUrl = window.location.href;

      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: targetUrl }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate PDF');
      }

      // Create blob from response
      const blob = await response.blob();
      
      // Create download link
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = filename;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);

    } catch (err) {
      console.error('PDF generation error:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate PDF');
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrintPDF = () => {
    try {
      setError(null);
      
      // Add print-specific styles
      const printStyles = document.createElement('style');
      printStyles.id = 'pdf-print-styles';
      printStyles.textContent = `
        @media print {
          @page {
            margin: 0.5in;
            size: A4;
          }
          
          body {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
            font-size: 12px;
            line-height: 1.4;
          }
          
          /* Hide elements that shouldn't be printed */
          .no-print,
          nav,
          header nav,
          footer,
          .fixed,
          .sticky,
          button:not(.print-include),
          [role="banner"],
          [role="navigation"],
          .bg-fixed {
            display: none !important;
          }
          
          /* Ensure backgrounds and colors are printed */
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          /* Better page breaks */
          h1, h2, h3, h4, h5, h6 {
            page-break-after: avoid;
            page-break-inside: avoid;
          }
          
          section, article {
            page-break-inside: avoid;
            margin-bottom: 20px;
          }
          
          /* Ensure gradients and backgrounds show */
          .bg-gradient-to-r,
          .bg-gradient-to-br,
          .bg-gradient-to-b,
          .bg-gradient-to-l,
          .bg-gradient-to-t {
            background: #f3f4f6 !important;
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          /* Improve text contrast for printing */
          .text-gray-600 { color: #4b5563 !important; }
          .text-gray-700 { color: #374151 !important; }
          .text-gray-800 { color: #1f2937 !important; }
          .text-gray-900 { color: #111827 !important; }
          
          /* Ensure links are visible */
          a {
            color: #1e40af !important;
            text-decoration: underline;
          }
          
          /* Make sure images fit properly */
          img {
            max-width: 100% !important;
            height: auto !important;
            page-break-inside: avoid;
          }
        }
      `;
      
      document.head.appendChild(printStyles);
      
      // Set document title for PDF filename
      const originalTitle = document.title;
      document.title = filename.replace('.pdf', '');
      
      // Trigger print dialog
      window.print();
      
      // Cleanup after print dialog closes
      setTimeout(() => {
        document.title = originalTitle;
        const stylesElement = document.getElementById('pdf-print-styles');
        if (stylesElement) {
          stylesElement.remove();
        }
      }, 1000);
      
    } catch (err) {
      console.error('Print PDF error:', err);
      setError('Failed to open print dialog');
    }
  };

  const handleClick = () => {
    if (variant === 'server') {
      generateServerPDF();
    } else {
      handlePrintPDF();
    }
  };

  return (
    <div className="inline-block">
      <button
        onClick={handleClick}
        disabled={isGenerating}
        className={`
          inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg
          hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed
          transition-all duration-200 shadow-lg hover:shadow-xl
          ${className}
        `}
        title={variant === 'print' ? 'Open print dialog to save as PDF' : 'Generate and download PDF'}
      >
        {isGenerating ? (
          <>
            <svg 
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Generating PDF...
          </>
        ) : (
          <>
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {children || (variant === 'print' ? 'Download PDF' : 'Generate PDF')}
          </>
        )}
      </button>
      
      {error && (
        <div className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded-md">
          {error}
        </div>
      )}
      
      {variant === 'print' && (
        <div className="mt-2 text-xs text-gray-500">
          Click to open print dialog, then choose "Save as PDF"
        </div>
      )}
    </div>
  );
} 