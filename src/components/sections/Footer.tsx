'use client';

import { useTranslations, useLocale } from 'next-intl';
import businessData from '@/data/business.json';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();
  const params = useParams();
  const currentLocale = params.locale as string;

  const navItems = [
    { key: 'home', href: `/${currentLocale}` },
    { key: 'services', href: `/${currentLocale}/services` },
    { key: 'projects', href: `/${currentLocale}/projects` },
    { key: 'about', href: `/${currentLocale}/about` },
    { key: 'contact', href: `/${currentLocale}/contact` },
  ];

  const businessName = businessData.identity.name[locale as 'ar' | 'en'];

  return (
    <footer className="bg-gradient-to-b from-background to-amber-50/20 dark:to-amber-950/10 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-4">
              {businessName}
            </h3>
            <p className="text-foreground/60 text-sm mb-4">
              {businessData.identity.description[locale as 'ar' | 'en']}
            </p>
            <p className="text-foreground/50 text-xs">
              {t('founded')} {businessData.identity.founded}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('quick_links')}</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-foreground/60 hover:text-amber-600 transition-colors text-sm"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('contact_info')}</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href={`tel:${businessData.contact.phone}`} className="hover:text-amber-600 transition-colors" dir="ltr">
                  {businessData.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${businessData.contact.email}`} className="hover:text-amber-600 transition-colors">
                  {businessData.contact.email}
                </a>
              </li>
              <li className="text-xs">
                {businessData.contact.address[locale as 'ar' | 'en']}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-foreground/10 pt-8 text-center">
          <p className="text-foreground/50 text-sm">
            {t('copyright', { year: new Date().getFullYear(), name: businessName })}
          </p>
        </div>
      </div>
    </footer>
  );
}
