'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Hero() {
  const t = useTranslations('Hero');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-background to-amber-50/30 dark:from-amber-950/20 dark:via-background dark:to-amber-900/10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600/10 text-amber-600 mb-6 animate-fade-in">
          <Sparkles size={16} />
          <span className="text-sm font-medium">{t('badge')}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent">
            {t('title')}
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-foreground/70 mb-4 max-w-3xl mx-auto animate-slide-up delay-100">
          {t('tagline')}
        </p>

        {/* Description */}
        <p className="text-lg text-foreground/60 mb-10 max-w-2xl mx-auto animate-slide-up delay-200">
          {t('description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-300">
          <Link
            href={`/${locale}/contact`}
            className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            {t('cta_primary')}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={`/${locale}/projects`}
            className="px-8 py-4 border-2 border-amber-600 text-amber-600 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300"
          >
            {t('cta_secondary')}
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-slide-up delay-500">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">15+</div>
            <div className="text-sm text-foreground/60">{t('stat_years')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
            <div className="text-sm text-foreground/60">{t('stat_projects')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">450+</div>
            <div className="text-sm text-foreground/60">{t('stat_clients')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
            <div className="text-sm text-foreground/60">{t('stat_satisfaction')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
