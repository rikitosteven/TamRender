'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full min-h-screen pt-32 md:pt-40 flex items-center overflow-hidden bg-cream">
      {/* Artistic Background - Multiple layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 md:left-1/3">
          <Image
            src="/AT HOUSE/1.jfif"
            alt="Tam.Renders Portfolio"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 60vw"
            placeholder="empty"
          />
        </div>
        {/* Gradient overlay - more sophisticated */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/75 to-transparent" />
      </div>

      {/* Content - Enhanced spacing and typography */}
      <motion.div
        className="relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="px-6 md:px-12 lg:px-16">
          <div className="container-max max-w-2xl">
            {/* Studio label with accent line */}
            <motion.div 
              variants={itemVariants}
              className="mb-6 md:mb-8 flex items-center gap-4"
            >
              <motion.div 
                className="w-12 h-0.5 bg-accent-gold"
                variants={lineVariants}
              />
              <p className="text-sm md:text-base uppercase tracking-widest font-medium text-accent-gold">
                Tam.Renders Studio
              </p>
            </motion.div>

            {/* Main heading - Bold and artistic */}
            <motion.div variants={itemVariants} className="mb-8 md:mb-10">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-gray-darker leading-tight tracking-tight">
                Where Imagination <br className="hidden sm:block" />
                Meets <span className="text-accent-gold">Precision</span>
              </h1>
            </motion.div>

            {/* Subheading - Artistic tone */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-medium mb-6 md:mb-8 max-w-xl leading-relaxed font-light"
            >
              Transforming visions into compelling narratives through thoughtful design. Since 2018, we&apos;ve crafted spaces across residential, commercial, and mixed-use projects with artistic precision and functional excellence.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 md:gap-6"
              variants={itemVariants}
            >
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link href="/contact" className="btn-secondary">
                Start a Project
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs font-medium text-gray-dark uppercase tracking-widest">Scroll</p>
          <svg
            className="w-5 h-5 text-gray-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
