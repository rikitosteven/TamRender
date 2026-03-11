'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="section-padding bg-cream border-t border-beige-200">
      <div className="container-max">
        {/* Header */}
        <motion.div
          className="mb-20 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-0.5 bg-accent-gold" />
            <p className="text-sm md:text-base uppercase tracking-widest font-medium text-accent-gold">
              Our Collection
            </p>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl font-bold mb-8 text-gray-darker"
          >
            Featured Works
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-medium max-w-3xl leading-relaxed font-light"
          >
            A curated selection showcasing our artistic approach to transforming spaces. Each project tells a unique narrative of vision, precision, and creative problem-solving across residential, commercial, and mixed-use environments.
          </motion.p>
        </motion.div>

        {/* Gallery Grid - Asymmetrical layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto"
        >
          {/* Featured large project */}
          {projects[0] && (
            <motion.div
              variants={itemVariants}
              className="md:col-span-7 md:row-span-2 group cursor-pointer"
            >
              <Link href={`/projects/${projects[0].id}`}>
                <div className="relative h-96 md:h-full min-h-96 overflow-hidden bg-gray-light">
                  <Image
                    src={projects[0].images[0]}
                    alt={projects[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  {/* Overlay with project info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-darker/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-cream mb-2">
                      {projects[0].title}
                    </h3>
                    <p className="text-cream/90 text-sm md:text-base">{projects[0].location} • {projects[0].year}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Secondary projects - vertical stack */}
          {projects.slice(1, 3).map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="md:col-span-5 group cursor-pointer"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="relative h-64 md:h-80 overflow-hidden bg-gray-light">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-darker/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-6">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-cream mb-1">
                      {project.title}
                    </h3>
                    <p className="text-cream/90 text-xs md:text-sm">{project.location}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Bottom row - 3 columns showcase */}
          {projects.slice(3).map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="md:col-span-4 group cursor-pointer"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="relative h-56 md:h-72 overflow-hidden bg-gray-light">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-darker/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                    <h3 className="font-display text-lg md:text-xl font-bold text-cream">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA - View All Projects */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Link href="/projects" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-cream transition-all duration-300 font-medium uppercase tracking-widest text-sm">
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
