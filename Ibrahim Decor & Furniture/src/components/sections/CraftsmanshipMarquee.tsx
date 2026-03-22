'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';

const messages = {
  ar: ['حرفية تتحدث', 'جودة تدوم', '15+ عاماً من الإتقان', 'تصميم فاخر', 'خشب طبيعي 100%'],
  en: ['Craftsmanship That Speaks', 'Quality That Lasts', '15+ Years of Mastery', 'Luxury Design', '100% Natural Wood'],
};

export default function CraftsmanshipMarquee() {
  const locale = useLocale();
  const marqueeRef = useRef<HTMLDivElement>(null);

  const items = messages[locale as 'ar' | 'en'];
  const allItems = [...items, ...items, ...items]; // Triple for seamless loop

  return (
    <section className="py-12 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600 overflow-hidden">
      <div
        ref={marqueeRef}
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: 'marquee 30s linear infinite',
        }}
      >
        {allItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-8 text-white font-bold text-2xl sm:text-3xl"
          >
            <span>{item}</span>
            <span className="text-amber-200">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
