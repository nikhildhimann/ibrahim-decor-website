'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import businessData from '@/data/business.json';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useBusinessHours } from '@/hooks/useBusinessHours';
import { generateWhatsAppLink } from '@/lib/utils';

export default function ContactPage() {
  const locale = useLocale();
  const businessStatus = useBusinessHours();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const address = businessData.contact.address[locale as 'ar' | 'en'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `
${locale === 'ar' ? 'مرحباً' : 'Hello'},
${locale === 'ar' ? 'الاسم' : 'Name'}: ${formData.name}
${locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}: ${formData.email}
${locale === 'ar' ? 'الخدمة المطلوبة' : 'Service'}: ${formData.service}
${locale === 'ar' ? 'الرسالة' : 'Message'}: ${formData.message}
    `.trim();

    const whatsappUrl = generateWhatsAppLink(businessData.contact.whatsapp, message);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-amber-50/30 to-background dark:from-amber-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              {locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              {locale === 'ar'
                ? 'نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق مشروعك'
                : "We're here to answer your questions and help bring your project to life"}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-foreground/5 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                {locale === 'ar' ? 'أرسل رسالة' : 'Send a Message'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    {locale === 'ar' ? 'الاسم' : 'Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-background focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all"
                    placeholder={locale === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    {locale === 'ar' ? 'رقم الجوال' : 'Phone'} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-background focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all"
                    placeholder="+966 XX XXX XXXX"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    {locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-background focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all"
                    placeholder={locale === 'ar' ? 'example@email.com' : 'example@email.com'}
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    {locale === 'ar' ? 'الخدمة المطلوبة' : 'Service'} *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-background focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all"
                  >
                    <option value="">
                      {locale === 'ar' ? 'اختر الخدمة' : 'Select Service'}
                    </option>
                    <option value="custom-furniture">
                      {locale === 'ar' ? 'أثاث مخصص' : 'Custom Furniture'}
                    </option>
                    <option value="interior-design">
                      {locale === 'ar' ? 'تصميم داخلي' : 'Interior Design'}
                    </option>
                    <option value="commercial">
                      {locale === 'ar' ? 'مشاريع تجارية' : 'Commercial Projects'}
                    </option>
                    <option value="consultation">
                      {locale === 'ar' ? 'استشارة' : 'Consultation'}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    {locale === 'ar' ? 'الرسالة' : 'Message'} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-background focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all resize-none"
                    placeholder={
                      locale === 'ar'
                        ? 'أخبرنا عن مشروعك...'
                        : 'Tell us about your project...'
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  {locale === 'ar' ? 'إرسال عبر واتساب' : 'Send via WhatsApp'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Business Status */}
              <div className="bg-gradient-to-br from-amber-600 to-amber-800 text-white rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      businessStatus.isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'
                    }`}
                  />
                  <h3 className="text-2xl font-bold">
                    {businessStatus.isOpen
                      ? locale === 'ar'
                        ? 'مفتوح الآن'
                        : 'Open Now'
                      : locale === 'ar'
                      ? 'مغلق حالياً'
                      : 'Closed Now'}
                  </h3>
                </div>
                <p className="text-white/90">
                  {locale === 'ar' ? 'ساعات العمل' : 'Business Hours'}
                </p>
                <p className="text-white/80 text-sm mt-2">
                  {locale === 'ar' ? 'السبت - الخميس' : 'Saturday - Thursday'}: 08:00 - 23:30
                </p>
                <p className="text-white/80 text-sm">
                  {locale === 'ar' ? 'الجمعة' : 'Friday'}: 16:00 - 23:30
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-white dark:bg-foreground/5 rounded-2xl shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {locale === 'ar' ? 'الهاتف' : 'Phone'}
                    </h3>
                    <a
                      href={`tel:${businessData.contact.phone}`}
                      className="text-foreground/60 hover:text-amber-600 transition-colors"
                      dir="ltr"
                    >
                      {businessData.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white dark:bg-foreground/5 rounded-2xl shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                    </h3>
                    <a
                      href={`mailto:${businessData.contact.email}`}
                      className="text-foreground/60 hover:text-amber-600 transition-colors"
                    >
                      {businessData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white dark:bg-foreground/5 rounded-2xl shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {locale === 'ar' ? 'العنوان' : 'Address'}
                    </h3>
                    <p className="text-foreground/60 mb-2">{address}</p>
                    <a
                      href={businessData.contact.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 text-sm"
                    >
                      {locale === 'ar' ? 'عرض على الخريطة' : 'View on Map'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
