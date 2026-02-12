'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: { ar: string; en: string };
  answer: { ar: string; en: string };
}

const faqData: FAQItem[] = [
  {
    question: {
      ar: 'ما هي المدة المتوقعة لإنجاز المشروع؟',
      en: 'What is the expected project completion time?',
    },
    answer: {
      ar: 'تختلف المدة حسب حجم المشروع، لكن معظم المشاريع تستغرق من 2-4 أسابيع من التصميم حتى التركيب.',
      en: 'Duration varies by project size, but most projects take 2-4 weeks from design to installation.',
    },
  },
  {
    question: {
      ar: 'هل تقدمون ضماناً على الأعمال؟',
      en: 'Do you provide a warranty on your work?',
    },
    answer: {
      ar: 'نعم، نقدم ضمان 10 سنوات على جميع أعمال النجارة والأثاث المخصص.',
      en: 'Yes, we provide a 10-year warranty on all carpentry and custom furniture work.',
    },
  },
  {
    question: {
      ar: 'ما أنواع الخشب التي تستخدمونها؟',
      en: 'What types of wood do you use?',
    },
    answer: {
      ar: 'نستخدم أجود أنواع الخشب الطبيعي مثل البلوط، الجوز، الساج، والصنوبر، جميعها من مصادر مستدامة.',
      en: 'We use premium natural woods like Oak, Walnut, Teak, and Pine, all from sustainable sources.',
    },
  },
  {
    question: {
      ar: 'هل يمكنني رؤية تصميم ثلاثي الأبعاد قبل التنفيذ؟',
      en: 'Can I see a 3D design before execution?',
    },
    answer: {
      ar: 'بالتأكيد! نوفر تصميم ثلاثي الأبعاد تفاعلي لجميع المشاريع قبل البدء بالتنفيذ.',
      en: 'Absolutely! We provide interactive 3D designs for all projects before starting execution.',
    },
  },
  {
    question: {
      ar: 'هل تقدمون خدمة الزيارة المجانية؟',
      en: 'Do you offer free site visits?',
    },
    answer: {
      ar: 'نعم، نقدم زيارة مجانية لموقع المشروع في الرياض لأخذ القياسات ومناقشة التفاصيل.',
      en: 'Yes, we offer free site visits in Riyadh to take measurements and discuss details.',
    },
  },
];

export default function FAQ() {
  const locale = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
            {locale === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-lg text-foreground/60">
            {locale === 'ar'
              ? 'إجابات على الأسئلة الأكثر شيوعاً'
              : 'Answers to the most common questions'}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const question = item.question[locale as 'ar' | 'en'];
            const answer = item.answer[locale as 'ar' | 'en'];
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white dark:bg-foreground/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-amber-600/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-amber-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-foreground/70">
                        {answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
