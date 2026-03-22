'use client';

import { useTranslations, useLocale } from 'next-intl';
import businessData from '@/data/business.json';
import { Phone, Mail, MapPin, Clock, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const t = useTranslations('Contact');
  const locale = useLocale();

  const address = businessData.contact.address[locale as 'ar' | 'en'];

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50/30 to-background dark:from-amber-950/10 dark:to-background">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-start gap-4 p-6 bg-white dark:bg-foreground/5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center flex-shrink-0">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t('phone')}</h3>
                <a
                  href={`tel:${businessData.contact.phone}`}
                  className="text-foreground/60 hover:text-amber-600 transition-colors"
                  dir="ltr"
                >
                  {businessData.contact.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-6 bg-white dark:bg-foreground/5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center flex-shrink-0">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t('email')}</h3>
                <a
                  href={`mailto:${businessData.contact.email}`}
                  className="text-foreground/60 hover:text-amber-600 transition-colors"
                >
                  {businessData.contact.email}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-6 bg-white dark:bg-foreground/5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t('address')}</h3>
                <p className="text-foreground/60">{address}</p>
                <a
                  href={businessData.contact.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-700 text-sm mt-2 inline-block"
                >
                  {t('view_map')}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-6 bg-white dark:bg-foreground/5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center flex-shrink-0">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t('hours')}</h3>
                <p className="text-foreground/60 text-sm">{t('hours_weekdays')}: 08:00 - 23:30</p>
                <p className="text-foreground/60 text-sm">{t('hours_friday')}: 16:00 - 23:30</p>
              </div>
            </div>
          </div>

          {/* Social & CTA */}
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">{t('cta_title')}</h3>
              <p className="text-white/90 mb-6">
                {t('cta_description')}
              </p>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${businessData.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-white text-amber-600 rounded-xl font-semibold text-center hover:bg-amber-50 transition-colors mb-6"
              >
                {t('whatsapp_button')}
              </a>

              {/* Social Links */}
              <div className="border-t border-white/20 pt-6">
                <p className="text-sm text-white/80 mb-4">{t('follow_us')}</p>
                <div className="flex gap-4">
                  <a
                    href={businessData.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href={businessData.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
                  >
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
