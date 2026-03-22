'use client';

import { useTranslations, useLocale } from 'next-intl';
import projectsData from '@/data/projects.json';
import Image from 'next/image';
import { MapPin, Calendar, Award } from 'lucide-react';

export default function Projects() {
  const t = useTranslations('Projects');
  const locale = useLocale();

  // Get featured projects
  const featuredProjects = projectsData.filter(p => p.featured);

  return (
    <section className="py-24 bg-background">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => {
            const title = project.title[locale as 'ar' | 'en'];
            const category = project.category[locale as 'ar' | 'en'];
            const description = project.description[locale as 'ar' | 'en'];

            return (
              <div
                key={project.id}
                className="group relative bg-white dark:bg-foreground/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-amber-600 text-white text-sm font-medium rounded-full">
                    {category}
                  </div>
                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-foreground/90 rounded-full flex items-center justify-center">
                    <Award className="text-amber-600" size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-amber-600 transition-colors">
                    {title}
                  </h3>
                  
                  <p className="text-foreground/60 text-sm mb-4 line-clamp-2">
                    {description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-foreground/50">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Materials */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.materials.slice(0, 3).map((material, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-amber-600/10 text-amber-600 text-xs rounded-full"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
