'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { Project } from '@/data/projects';

interface ProjectDetailClientProps {
  project: Project;
  nextProject: Project;
}

export default function ProjectDetailClient({ project, nextProject }: ProjectDetailClientProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <main className="bg-cream">
      {/* Hero Image */}
      <motion.div
        className="relative w-full h-96 md:h-[600px] pt-32 md:pt-40 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
          quality={85}
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Project Header */}
      <section className="section-padding bg-cream">
        <div className="container-max max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-6xl font-bold mb-6">
              {project.title}
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 pb-12 border-b border-gray-light"
            >
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-neutral mb-2">Location</p>
                <p className="font-display text-lg font-semibold text-gray-dark">{project.location}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-neutral mb-2">Year</p>
                <p className="font-display text-lg font-semibold text-gray-dark">{project.year}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-neutral mb-2">Category</p>
                <p className="font-display text-lg font-semibold text-gray-dark capitalize">{project.category}</p>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-dark leading-relaxed mt-12 max-w-3xl"
            >
              {project.longDescription || project.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding bg-cream">
        <div className="container-max">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
          >
            {/* Large image left */}
            <motion.div
              className="md:col-span-2 relative h-96 md:h-[500px]"
              variants={imageVariants}
            >
              <Image
                src={project.images[0]}
                alt={`${project.title} - 1`}
                fill
                className="object-cover"
                quality={75}
                sizes="(max-width: 768px) 100vw, 65vw"
                placeholder="empty"
              />
            </motion.div>

            {/* Stacked images right */}
            <div className="flex flex-col gap-6 md:gap-8">
              {project.images.slice(1, 3).map((image, idx) => (
                <motion.div
                  key={idx}
                  className="relative h-64 md:h-[246px]"
                  variants={imageVariants}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - ${idx + 2}`}
                    fill
                    className="object-cover"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 35vw"
                    placeholder="empty"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before/After */}
      {project.beforeImage && project.afterImage && (
        <BeforeAfterSlider
          beforeImage={project.beforeImage}
          afterImage={project.afterImage}
          title="Project Transformation"
          description="A detailed look at the renovation process"
        />
      )}

      {/* Materials & Credits */}
      <section className="section-padding bg-gray-dark text-cream">
        <div className="container-max max-w-4xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
          >
            {/* Materials */}
            {project.materials && project.materials.length > 0 && (
              <motion.div variants={itemVariants}>
                <h3 className="font-display text-3xl font-bold mb-8 text-cream">Materials & Finishes</h3>
                <ul className="space-y-3">
                  {project.materials.map((material, idx) => (
                    <li key={idx} className="text-beige text-lg">
                      • {material}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Credits */}
            {project.credits && (
              <motion.div variants={itemVariants}>
                <h3 className="font-display text-3xl font-bold mb-8 text-cream">Credits</h3>
                <div className="space-y-4">
                  {project.credits.architect && (
                    <div>
                      <p className="text-sm uppercase tracking-widest text-gray-light mb-1">Architect</p>
                      <p className="text-lg text-beige">{project.credits.architect}</p>
                    </div>
                  )}
                  {project.credits.photographer && (
                    <div>
                      <p className="text-sm uppercase tracking-widest text-gray-light mb-1">Photographer</p>
                      <p className="text-lg text-beige">{project.credits.photographer}</p>
                    </div>
                  )}
                  {project.credits.builder && (
                    <div>
                      <p className="text-sm uppercase tracking-widest text-gray-light mb-1">Builder</p>
                      <p className="text-lg text-beige">{project.credits.builder}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Next Project Navigation */}
      <section className="section-padding bg-cream">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-gray-neutral mb-6">Next Project</p>
            <Link href={`/projects/${nextProject.id}`}>
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 group">
                <div className="flex-1">
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-2 text-gray-dark group-hover:text-gray-neutral transition-colors">
                    {nextProject.title}
                  </h3>
                  <p className="text-gray-neutral">{nextProject.location}</p>
                </div>
                <svg
                  className="w-8 h-8 text-gray-dark group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
