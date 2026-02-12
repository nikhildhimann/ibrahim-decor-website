import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import servicesData from '@/data/services.json';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'ar' ? 'خدماتنا | إبراهيم للديكور' : 'Our Services | Ibrahim Decor',
    description:
      locale === 'ar'
        ? 'اكتشف خدماتنا المتكاملة في النجارة والديكور الداخلي'
        : 'Discover our comprehensive carpentry and interior design services',
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-amber-50/30 to-background dark:from-amber-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              {locale === 'ar' ? 'خدماتنا' : 'Our Services'}
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              {locale === 'ar'
                ? 'حلول متكاملة في النجارة والديكور الداخلي مصممة خصيصاً لتلبية احتياجاتك'
                : 'Comprehensive carpentry and interior design solutions tailored to your needs'}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 0;
              const title = service.title[locale as 'ar' | 'en'];
              const description = service.description[locale as 'ar' | 'en'];
              const priceRange = service.priceRange[locale as 'ar' | 'en'];

              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven && locale === 'en' ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative h-96 rounded-3xl overflow-hidden shadow-2xl ${
                      !isEven && locale === 'en' ? 'lg:col-start-2' : ''
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className={!isEven && locale === 'en' ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="inline-block px-4 py-2 bg-amber-600/10 text-amber-600 rounded-full text-sm font-medium mb-4">
                      {priceRange}
                    </div>
                    <h2 className="text-4xl font-bold mb-4 text-foreground">{title}</h2>
                    <p className="text-lg text-foreground/70 mb-6">{description}</p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-600/10 flex items-center justify-center mt-0.5">
                            <Check size={14} className="text-amber-600" />
                          </div>
                          <span className="text-foreground/80">
                            {feature[locale as 'ar' | 'en']}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      {locale === 'ar' ? 'احصل على عرض سعر' : 'Get a Quote'}
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-gradient-to-b from-background to-amber-50/30 dark:to-amber-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
            {locale === 'ar' ? 'كيف نعمل' : 'How We Work'}
          </h2>

          <div className="space-y-8">
            {[
              {
                step: 1,
                title: { ar: 'الاستشارة', en: 'Consultation' },
                description: {
                  ar: 'نستمع لأفكارك ونفهم احتياجاتك بدقة',
                  en: 'We listen to your ideas and understand your needs precisely',
                },
              },
              {
                step: 2,
                title: { ar: 'التصميم', en: 'Design' },
                description: {
                  ar: 'نقدم تصميم ثلاثي الأبعاد تفاعلي لمشروعك',
                  en: 'We provide interactive 3D design for your project',
                },
              },
              {
                step: 3,
                title: { ar: 'التنفيذ', en: 'Execution' },
                description: {
                  ar: 'حرفيون مهرة ينفذون المشروع بأعلى جودة',
                  en: 'Skilled craftsmen execute the project with highest quality',
                },
              },
              {
                step: 4,
                title: { ar: 'التركيب', en: 'Installation' },
                description: {
                  ar: 'تركيب احترافي في موقعك',
                  en: 'Professional installation at your location',
                },
              },
              {
                step: 5,
                title: { ar: 'الدعم', en: 'Support' },
                description: {
                  ar: 'ضمان 10 سنوات ودعم مستمر',
                  en: '10-year warranty and ongoing support',
                },
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 text-white flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {item.title[locale as 'ar' | 'en']}
                  </h3>
                  <p className="text-foreground/70">
                    {item.description[locale as 'ar' | 'en']}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
