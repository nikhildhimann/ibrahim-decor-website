'use client';

import { useTranslations, useLocale } from 'next-intl';
import servicesData from '@/data/services.json';
import { Sofa, Layout, Briefcase, Hammer } from 'lucide-react';

const iconMap: Record<string, any> = {
  Sofa,
  Layout,
  Briefcase,
  Hammer,
};

export default function Services() {
  const t = useTranslations('Services');
  const locale = useLocale();

  return (
    <section className="py-24 bg-gradient-to-b from-background to-amber-50/30 dark:to-amber-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
            {t('title')}
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Sofa;
            const title = service.title[locale as 'ar' | 'en'];
            const description = service.description[locale as 'ar' | 'en'];
            const priceRange = service.priceRange[locale as 'ar' | 'en'];

            return (
              <div
                key={service.id}
                className="group relative bg-white dark:bg-foreground/5 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-foreground/5"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-amber-600 transition-colors">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-foreground/60 mb-4 text-sm">
                  {description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                      {feature[locale as 'ar' | 'en']}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-sm font-semibold text-amber-600 mt-auto">
                  {priceRange}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-amber-600/0 group-hover:border-amber-600/20 transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
