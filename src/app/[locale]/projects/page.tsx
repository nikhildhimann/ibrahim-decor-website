'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Modal from '@/components/ui/Modal';
import projectsData from '@/data/projects.json';
import Image from 'next/image';
import { MapPin, Calendar, Award, X } from 'lucide-react';

export default function ProjectsPage() {
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Get unique categories
  const categories = [
    { id: 'all', label: { ar: 'الكل', en: 'All' } },
    ...Array.from(
      new Set(projectsData.map((p) => p.category[locale as 'ar' | 'en']))
    ).map((cat) => ({
      id: cat,
      label: { ar: cat, en: cat },
    })),
  ];

  // Filter projects
  const filteredProjects =
    selectedCategory === 'all'
      ? projectsData
      : projectsData.filter(
          (p) => p.category[locale as 'ar' | 'en'] === selectedCategory
        );

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-amber-50/30 to-background dark:from-amber-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              {locale === 'ar' ? 'معرض الأعمال' : 'Our Projects'}
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              {locale === 'ar'
                ? 'استكشف مجموعة من أفضل مشاريعنا السكنية والتجارية'
                : 'Explore a collection of our finest residential and commercial projects'}
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg'
                    : 'bg-white dark:bg-foreground/5 text-foreground hover:bg-amber-600/10'
                }`}
              >
                {cat.label[locale as 'ar' | 'en']}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const title = project.title[locale as 'ar' | 'en'];
              const category = project.category[locale as 'ar' | 'en'];
              const description = project.description[locale as 'ar' | 'en'];

              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group relative bg-white dark:bg-foreground/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
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
                    {project.featured && (
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-foreground/90 rounded-full flex items-center justify-center">
                        <Award className="text-amber-600" size={20} />
                      </div>
                    )}
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          size="xl"
          className="!bg-stone-950 ring-1 ring-white/10"
        >
          <div className="space-y-6">
            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedProject.gallery.map((img: string, idx: number) => (
                <div key={idx} className="relative h-64 rounded-xl overflow-hidden">
                  <Image src={img} alt={`Gallery ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>

            {/* Details */}
            <div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                {selectedProject.title[locale as 'ar' | 'en']}
              </h2>
              <p className="text-white mb-6">
                {selectedProject.description[locale as 'ar' | 'en']}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <div className="text-sm text-white/80 mb-1">
                    {locale === 'ar' ? 'الموقع' : 'Location'}
                  </div>
                  <div className="font-semibold text-white">{selectedProject.location}</div>
                </div>
                <div>
                  <div className="text-sm text-white/80 mb-1">
                    {locale === 'ar' ? 'المساحة' : 'Area'}
                  </div>
                  <div className="font-semibold text-white">{selectedProject.area}</div>
                </div>
                <div>
                  <div className="text-sm text-white/80 mb-1">
                    {locale === 'ar' ? 'المدة' : 'Duration'}
                  </div>
                  <div className="font-semibold text-white">{selectedProject.duration}</div>
                </div>
                <div>
                  <div className="text-sm text-white/80 mb-1">
                    {locale === 'ar' ? 'السنة' : 'Year'}
                  </div>
                  <div className="font-semibold text-white">{selectedProject.year}</div>
                </div>
              </div>

              {/* Materials */}
              <div className="mb-6">
                <div className="text-sm text-white/80 mb-2">
                  {locale === 'ar' ? 'المواد المستخدمة' : 'Materials Used'}
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.materials.map((material: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-amber-600/10 text-amber-600 text-sm rounded-full"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {selectedProject.testimonial && (
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <p className="text-white/90 italic mb-2">
                    "{selectedProject.testimonial.quote[locale as 'ar' | 'en']}"
                  </p>
                  <p className="text-sm text-amber-200">
                    — {selectedProject.testimonial.author}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}

      <Footer />
      <WhatsAppButton />
    </>
  );
}
