import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import businessData from '@/data/business.json';
import teamData from '@/data/team.json';
import Image from 'next/image';
import { Users, Award, Target, Heart } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });

  const values = [
    {
      icon: Award,
      title: { ar: 'الجودة', en: 'Quality' },
      description: {
        ar: 'نلتزم بأعلى معايير الجودة في كل مشروع',
        en: 'We commit to the highest quality standards in every project',
      },
    },
    {
      icon: Users,
      title: { ar: 'الثقة', en: 'Trust' },
      description: {
        ar: 'بناء علاقات طويلة الأمد مع عملائنا',
        en: 'Building long-term relationships with our clients',
      },
    },
    {
      icon: Target,
      title: { ar: 'الابتكار', en: 'Innovation' },
      description: {
        ar: 'دمج التقنيات الحديثة مع الحرفية التقليدية',
        en: 'Combining modern technology with traditional craftsmanship',
      },
    },
    {
      icon: Heart,
      title: { ar: 'الشغف', en: 'Passion' },
      description: {
        ar: 'حب العمل الخشبي يظهر في كل قطعة نصنعها',
        en: 'Love for woodwork shows in every piece we create',
      },
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-amber-50/30 to-background dark:from-amber-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              {locale === 'ar' ? 'من نحن' : 'About Us'}
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              {businessData.identity.description[locale as 'ar' | 'en']}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                {locale === 'ar' ? 'قصتنا' : 'Our Story'}
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  {locale === 'ar'
                    ? `تأسست إبراهيم للديكور والموبيليا في عام ${businessData.identity.founded}، ومنذ ذلك الحين ونحن نقدم أرقى الحلول في مجال النجارة والديكور الداخلي في الرياض.`
                    : `Ibrahim Decor & Furniture was founded in ${businessData.identity.founded}, and since then we have been providing the finest solutions in carpentry and interior design in Riyadh.`}
                </p>
                <p>
                  {locale === 'ar'
                    ? 'بدأنا كورشة صغيرة بشغف كبير للعمل الخشبي، ونمونا لنصبح واحدة من أبرز الشركات المتخصصة في التصميم الداخلي والأثاث المخصص.'
                    : 'We started as a small workshop with a great passion for woodwork, and grew to become one of the leading companies specialized in interior design and custom furniture.'}
                </p>
                <p>
                  {locale === 'ar'
                    ? 'فريقنا من الحرفيين المهرة يجمع بين الخبرة التقليدية والتقنيات الحديثة لتقديم قطع فنية تدوم لأجيال.'
                    : 'Our team of skilled craftsmen combines traditional expertise with modern techniques to deliver artistic pieces that last for generations.'}
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200"
                alt="Workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b from-background to-amber-50/30 dark:to-amber-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
            {locale === 'ar' ? 'قيمنا' : 'Our Values'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white dark:bg-foreground/5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {value.title[locale as 'ar' | 'en']}
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    {value.description[locale as 'ar' | 'en']}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
            {locale === 'ar' ? 'فريقنا' : 'Our Team'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="group bg-white dark:bg-foreground/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name[locale as 'ar' | 'en']}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-foreground">
                    {member.name[locale as 'ar' | 'en']}
                  </h3>
                  <p className="text-amber-600 font-medium mb-3">
                    {member.role[locale as 'ar' | 'en']}
                  </p>
                  <p className="text-foreground/60 text-sm">
                    {member.bio[locale as 'ar' | 'en']}
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
