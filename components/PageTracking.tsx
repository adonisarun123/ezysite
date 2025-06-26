'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';
import { useScrollTracking } from '@/hooks/useScrollTracking';

interface PageTrackingProps {
  pageTitle?: string;
  pageCategory?: string;
  enableScrollTracking?: boolean;
}

export default function PageTracking({ 
  pageTitle, 
  pageCategory,
  enableScrollTracking = true 
}: PageTrackingProps) {
  const pathname = usePathname();
  
  // Enable scroll tracking for this page
  useScrollTracking({
    pageType: pageCategory || 'general',
    enabled: enableScrollTracking
  });

  useEffect(() => {
    // Track enhanced page view
    const title = pageTitle || document.title;
    trackPageView(pathname, title, pageCategory);
  }, [pathname, pageTitle, pageCategory]);

  return null; // This component doesn't render anything
}