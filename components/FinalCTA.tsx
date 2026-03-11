'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FinalCTA() {
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
    <section className="section-padding bg-gray-darker text-cream border-t border-gray-medium">
      <div className="container-max max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {/* Section Label */}
          <motion.p
            variants={itemVariants}
            className="text-xs uppercase tracking-widest text-beige-100 mb-8 font-medium text-center"
          >
            Ready to Begin?
          </motion.p>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="font-display text-5xl md:text-6xl font-bold mb-8 text-cream leading-tight text-center"
          >
            Let&apos;s Create Something Extraordinary
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-beige-100 mb-12 text-center max-w-2xl mx-auto leading-relaxed"
          >
            Every project begins with a conversation. We&apos;ll listen to your vision, understand your space, and craft an interior that reflects who you are.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <Link href="/contact" className="btn-primary">
              Book a Consultation
            </Link>
          </motion.div>

          {/* Bottom Accent */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-12 border-t border-gray-medium text-center"
          >
            <p className="text-sm text-beige-100">
              Response time: typically within 24 hours
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
