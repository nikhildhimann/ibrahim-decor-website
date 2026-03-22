'use client';

import { useTranslations, useLocale } from 'next-intl';
import testimonialsData from '@/data/testimonials.json';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';

export default function Testimonials() {
  const t = useTranslations('Testimonials');
  const locale = useLocale();

  return (
    <section className="py-24 bg-gradient-to-b from-background to-amber-50/30 dark:to-amber-950/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={staggerItem}
            className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent"
          >
            {locale === 'ar' ? 'آراء عملائنا' : 'Client Testimonials'}
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            {locale === 'ar' 
              ? 'اكتشف ما يقوله عملاؤنا عن تجربتهم معنا'
              : 'Discover what our clients say about their experience with us'}
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonialsData.map((testimonial, index) => {
            const quote = testimonial.quote[locale as 'ar' | 'en'];
            const role = testimonial.role[locale as 'ar' | 'en'];

            return (
              <motion.div
                key={testimonial.id}
                variants={staggerItem}
                className="group relative bg-white dark:bg-foreground/5 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={48} className="text-amber-600" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 mb-6 relative z-10 italic">
                  "{quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-amber-600/20">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-foreground/60">{role}</p>
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
