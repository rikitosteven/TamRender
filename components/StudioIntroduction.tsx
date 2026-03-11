'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function StudioIntroduction() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="section-padding bg-white border-t border-beige-200">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
          {/* Image - Right side, prominent */}
          <motion.div
            className="lg:col-span-5 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={imageVariants}
          >
            <div className="relative w-full h-96 md:h-[550px] overflow-hidden bg-beige-200">
              <Image
                src="https://picsum.photos/800/900?random=103"
                alt="Studio Space"
                fill
                className="object-cover"
                quality={75}
                sizes="(max-width: 768px) 100vw, 45vw"
                placeholder="empty"
              />
            </div>
          </motion.div>

          {/* Text - Left side, generous space */}
          <motion.div
            className="lg:col-span-7 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
          >
            <motion.p
              variants={itemVariants}
              className="uppercase-label mb-8"
            >
              The Studio
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="font-display text-5xl md:text-6xl font-bold mb-10 text-gray-darker leading-tight"
            >
              Design rooted in listening and craft
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-gray-neutral mb-8"
            >
              We believe that thoughtful interior design should be quiet and confident. It should not compete for attention, but rather create an environment where people feel genuinely at ease.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-gray-neutral mb-12"
            >
              Our work is rooted in spatial understanding, material honesty, and meticulous attention to craft. Each project begins with deep listening—understanding how spaces will be lived in, what activities they should support, and what emotional qualities they should evoke.
            </motion.p>

            {/* Stats - More Editorial Layout */}
            <motion.div
              variants={itemVariants}
              className="mb-12 pb-12 border-b border-beige-200"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
                <div>
                  <p className="font-display text-4xl md:text-5xl font-bold text-gray-darker mb-2">10+</p>
                  <p className="uppercase-label">Years of Practice</p>
                </div>
                <div>
                  <p className="font-display text-4xl md:text-5xl font-bold text-gray-darker mb-2">80+</p>
                  <p className="uppercase-label">Completed Projects</p>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <p className="font-display text-4xl md:text-5xl font-bold text-gray-darker mb-2">15</p>
                  <p className="uppercase-label">Team Members</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <p className="text-sm text-gray-neutral leading-relaxed">
                Based in New York with experience across residential, commercial, and hospitality design. We work with architects, craftspeople, and clients who share our commitment to quality and authenticity.
              </p>
              <Link href="/about" className="btn-primary inline-block text-sm">
                ABOUT US
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
