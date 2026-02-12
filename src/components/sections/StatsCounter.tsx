'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import { Hammer, Users, Award, TrendingUp, LucideIcon } from 'lucide-react';
import { useInView } from 'framer-motion';

interface Stat {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: { ar: string; en: string };
}

const stats: Stat[] = [
  {
    icon: TrendingUp,
    value: 15,
    suffix: '+',
    label: { ar: 'سنوات الخبرة', en: 'Years Experience' },
  },
  {
    icon: Hammer,
    value: 500,
    suffix: '+',
    label: { ar: 'مشروع منجز', en: 'Projects Completed' },
  },
  {
    icon: Users,
    value: 450,
    suffix: '+',
    label: { ar: 'عميل سعيد', en: 'Happy Clients' },
  },
  {
    icon: Award,
    value: 100,
    suffix: '%',
    label: { ar: 'رضا العملاء', en: 'Client Satisfaction' },
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-5xl sm:text-6xl font-bold text-amber-600">
      {count}
      {suffix}
    </div>
  );
}

export default function StatsCounter() {
  const locale = useLocale();

  return (
    <section className="py-24 bg-gradient-to-br from-amber-600 to-amber-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const label = stat.label[locale as 'ar' | 'en'];

            return (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
                  <Icon size={32} />
                </div>
                <Counter value={stat.value} suffix={stat.suffix} />
                <div className="text-white/90 mt-2 font-medium">{label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
