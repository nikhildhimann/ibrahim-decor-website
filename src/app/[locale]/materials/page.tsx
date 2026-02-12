'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import materialsData from '@/data/materials.json';
import { Sparkles } from 'lucide-react';

export default function MaterialsPage() {
  const locale = useLocale();
  const [selectedMaterial, setSelectedMaterial] = useState(materialsData[0]);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-amber-50/30 to-background dark:from-amber-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              {locale === 'ar' ? 'الخامات' : 'Materials'}
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              {locale === 'ar'
                ? 'نستخدم أجود أنواع الخشب الطبيعي من مصادر مستدامة'
                : 'We use the finest natural woods from sustainable sources'}
            </p>
          </div>
        </div>
      </section>

      {/* Materials Showcase */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Material Selector */}
            <div className="space-y-4">
              {materialsData.map((material) => {
                const name = material.name[locale as 'ar' | 'en'];
                const description = material.description[locale as 'ar' | 'en'];
                const isSelected = selectedMaterial.id === material.id;

                return (
                  <button
                    key={material.id}
                    onClick={() => setSelectedMaterial(material)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-xl scale-105'
                        : 'bg-white dark:bg-foreground/5 hover:bg-amber-600/10 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div
                        className="w-12 h-12 rounded-lg"
                        style={{ backgroundColor: material.color }}
                      />
                      <h3 className="text-2xl font-bold">{name}</h3>
                    </div>
                    <p className={isSelected ? 'text-white/90' : 'text-foreground/60'}>
                      {description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Material Details */}
            <div className="bg-white dark:bg-foreground/5 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-amber-600" size={32} />
                <h2 className="text-3xl font-bold text-foreground">
                  {selectedMaterial.name[locale as 'ar' | 'en']}
                </h2>
              </div>

              <div className="space-y-6">
                {/* Color Sample */}
                <div>
                  <div className="text-sm text-foreground/50 mb-2">
                    {locale === 'ar' ? 'اللون' : 'Color'}
                  </div>
                  <div
                    className="w-full h-24 rounded-xl shadow-inner"
                    style={{ backgroundColor: selectedMaterial.color }}
                  />
                </div>

                {/* Properties */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-foreground/50 mb-1">
                      {locale === 'ar' ? 'الخشونة' : 'Roughness'}
                    </div>
                    <div className="font-semibold text-foreground">
                      {(selectedMaterial.roughness * 100).toFixed(0)}%
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 mb-1">
                      {locale === 'ar' ? 'المعدنية' : 'Metalness'}
                    </div>
                    <div className="font-semibold text-foreground">
                      {(selectedMaterial.metalness * 100).toFixed(0)}%
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 mb-1">
                      {locale === 'ar' ? 'المنشأ' : 'Origin'}
                    </div>
                    <div className="font-semibold text-foreground">
                      {selectedMaterial.origin}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 mb-1">
                      {locale === 'ar' ? 'الفئة السعرية' : 'Price Range'}
                    </div>
                    <div className="font-semibold text-amber-600">
                      {selectedMaterial.price}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <div className="text-sm text-foreground/50 mb-2">
                    {locale === 'ar' ? 'الوصف' : 'Description'}
                  </div>
                  <p className="text-foreground/70">
                    {selectedMaterial.description[locale as 'ar' | 'en']}
                  </p>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <a
                    href={`/${locale}/contact`}
                    className="block w-full py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-center rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    {locale === 'ar' ? 'اطلب عينة' : 'Request Sample'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Natural Wood */}
      <section className="py-16 bg-gradient-to-b from-background to-amber-50/30 dark:to-amber-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
            {locale === 'ar' ? 'لماذا الخشب الطبيعي؟' : 'Why Natural Wood?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: { ar: 'متين وطويل الأمد', en: 'Durable & Long-lasting' },
                description: {
                  ar: 'يدوم لعقود مع العناية المناسبة',
                  en: 'Lasts for decades with proper care',
                },
              },
              {
                title: { ar: 'صديق للبيئة', en: 'Eco-friendly' },
                description: {
                  ar: 'مصادر مستدامة وقابل لإعادة التدوير',
                  en: 'Sustainable sources and recyclable',
                },
              },
              {
                title: { ar: 'جمال طبيعي', en: 'Natural Beauty' },
                description: {
                  ar: 'كل قطعة فريدة بنمطها الخاص',
                  en: 'Each piece unique with its own pattern',
                },
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-foreground/5 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {item.title[locale as 'ar' | 'en']}
                </h3>
                <p className="text-foreground/60">{item.description[locale as 'ar' | 'en']}</p>
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
