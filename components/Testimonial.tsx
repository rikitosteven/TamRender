'use client';

import { motion } from 'framer-motion';

export default function Testimonial() {
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

  return (
    <section className="section-padding bg-cream border-t border-beige-200">
      <div className="container-max">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {/* Section Label */}
          <motion.p
            variants={itemVariants}
            className="uppercase-label mb-8"
          >
            Client Perspective
          </motion.p>

          {/* Quote Icon and Quote */}
          <div className="mb-12">
            <motion.svg
              variants={itemVariants}
              className="w-16 h-16 text-beige-200 mb-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-3 0-7 3.75-7 5c0 4 3-3 3-3s.348 2.5.756 4c1.248 3.264 3.512 6.964 4.244 8.296 0 .164.037.326.037.5z" />
            </motion.svg>

            <motion.blockquote
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl font-bold leading-tight text-gray-darker mb-10"
            >
              &quot;Their attention to detail transformed not just the space, but how we live in it. It&apos;s become a reflection of who we are.&quot;
            </motion.blockquote>
          </div>

          {/* Client Info */}
          <motion.div
            variants={itemVariants}
            className="flex items-end justify-between gap-8 pt-8 border-t border-beige-200"
          >
            <div>
              <p className="font-semibold text-lg text-gray-dark mb-1">
                Sarah Chen
              </p>
              <p className="text-sm text-gray-neutral">
                Founder, Modern Living Co.
              </p>
            </div>

            {/* Visual accent */}
            <div className="hidden md:flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-beige-100"></div>
              <div className="h-8 w-px bg-beige-200"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
