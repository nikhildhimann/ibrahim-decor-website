'use client';

import { useState, useEffect } from 'react';
import businessData from '@/data/business.json';
import { isBusinessOpen } from '@/lib/utils';

interface BusinessStatus {
  isOpen: boolean;
  currentDay: string;
  openTime: string;
  closeTime: string;
}

/**
 * Custom hook to check if business is currently open
 * Updates every minute
 */
export function useBusinessHours(): BusinessStatus {
  const [status, setStatus] = useState<BusinessStatus>(() =>
    isBusinessOpen(businessData.hours)
  );

  useEffect(() => {
    // Update status every minute
    const interval = setInterval(() => {
      setStatus(isBusinessOpen(businessData.hours));
    }, 60000); // 60 seconds

    return () => clearInterval(interval);
  }, []);

  return status;
}
