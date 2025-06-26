'use client'

import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '@/lib/analytics';

interface UseScrollTrackingOptions {
  pageType?: string;
  thresholds?: number[];
  enabled?: boolean;
}

export const useScrollTracking = (options: UseScrollTrackingOptions = {}) => {
  const {
    pageType = 'unknown',
    thresholds = [25, 50, 75, 90, 100],
    enabled = true
  } = options;

  const trackedThresholds = useRef<Set<number>>(new Set());
  const isTracking = useRef(false);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const handleScroll = () => {
      if (isTracking.current) return;
      
      isTracking.current = true;
      
      requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

        // Track each threshold only once
        thresholds.forEach(threshold => {
          if (scrollPercentage >= threshold && !trackedThresholds.current.has(threshold)) {
            trackedThresholds.current.add(threshold);
            trackScrollDepth(threshold, pageType);
          }
        });

        isTracking.current = false;
      });
    };

    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [enabled, pageType, thresholds]);

  // Reset tracking for new page loads
  useEffect(() => {
    trackedThresholds.current.clear();
  }, [pageType]);

  return {
    trackedThresholds: Array.from(trackedThresholds.current)
  };
}; 