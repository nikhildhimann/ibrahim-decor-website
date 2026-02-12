'use client';

import { useState, useEffect } from 'react';
import { throttle } from '@/lib/utils';

interface ScrollPosition {
  x: number;
  y: number;
}

/**
 * Custom hook to track scroll position
 * @param throttleMs - Throttle delay in milliseconds (default: 100)
 * @returns Current scroll position {x, y}
 */
export function useScrollPosition(throttleMs: number = 100): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    }, throttleMs);

    // Set initial position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [throttleMs]);

  return scrollPosition;
}

/**
 * Hook to detect if scrolled past a certain threshold
 */
export function useIsScrolled(threshold: number = 20): boolean {
  const { y } = useScrollPosition();
  return y > threshold;
}
