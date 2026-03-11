'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageHoverVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <main className="pt-32 md:pt-40 pb-20 md:pb-32 bg-cream">
      <div className="section-padding">
        <div className="container-max">
          <motion.div
            className="mb-20 md:mb-32"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-6xl font-bold mb-6">
              All Projects
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-neutral max-w-2xl">
              A comprehensive collection of our residential, commercial, and renovation work
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={`/projects/${project.id}`}>
                  <motion.div
                    className="relative w-full h-96 md:h-[450px] overflow-hidden rounded-none mb-6 cursor-pointer group"
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.div
                      className="w-full h-full"
                      variants={imageHoverVariants}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover"
                        quality={75}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        placeholder="empty"
                      />
                    </motion.div>

                    <motion.div
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                    />
                  </motion.div>
                </Link>

                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 text-gray-dark">
                  {project.title}
                </h3>
                <p className="text-gray-neutral mb-3">
                  {project.location} • {project.year}
                </p>
                <p className="text-gray-dark leading-relaxed">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
