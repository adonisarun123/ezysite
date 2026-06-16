'use client'

import { useEffect, useMemo, useRef } from 'react';
import { trackScrollDepth } from '@/lib/analytics';

interface UseScrollTrackingOptions {
  pageType?: string;
  thresholds?: number[];
  enabled?: boolean;
}

const DEFAULT_THRESHOLDS = [25, 50, 75, 90, 100];

export const useScrollTracking = (options: UseScrollTrackingOptions = {}) => {
  const {
    pageType = 'unknown',
    enabled = true
  } = options;

  // Stabilize the thresholds reference. Callers that omit `thresholds` would
  // otherwise pass a new array literal every render, which (because it's an
  // effect dependency below) tore down and re-added the scroll listener on
  // every re-render — and GlobalPageTracking re-renders on every route change.
  const thresholds = useMemo(
    () => options.thresholds ?? DEFAULT_THRESHOLDS,
    [options.thresholds]
  );

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

        // Guard short pages: when content fits the viewport documentHeight is 0,
        // so scrollTop/documentHeight is NaN (0/0) or Infinity on rubber-band
        // overscroll — Infinity >= every threshold would fire all 5 scroll_depth
        // events at once and corrupt analytics. Bail and clamp to [0,100].
        if (documentHeight <= 0) {
          isTracking.current = false;
          return;
        }
        const scrollPercentage = Math.min(100, Math.round((scrollTop / documentHeight) * 100));

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