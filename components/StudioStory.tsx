'use client';

import { motion } from 'framer-motion';

export default function StudioStory() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const stats = [
    { number: '6+', label: 'Years of Excellence', desc: 'Since 2018' },
    { number: '50+', label: 'Projects Completed', desc: 'Across All Categories' },
    { number: '100%', label: 'Client Satisfaction', desc: 'Artistic Vision Realized' },
  ];

  return (
    <section className="section-padding bg-accent-charcoal text-cream">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-0.5 bg-accent-gold" />
                <p className="text-sm uppercase tracking-widest font-medium text-accent-gold">
                  About Tam.Renders
                </p>
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Where Vision Becomes <span className="text-accent-gold">Reality</span>
              </h2>
            </div>

            <p className="text-lg leading-relaxed font-light text-cream/90">
              Tam.Renders is an avant-garde interior design studio dedicated to transforming spaces into compelling narratives. Our philosophy merges artistic imagination with functional precision, creating environments that inspire, comfort, and tell unique stories.
            </p>

            <p className="text-lg leading-relaxed font-light text-cream/90">
              Every project is an opportunity to explore boundaries, experiment with materials, and craft spaces that evolve with their inhabitants. We believe great design is both invisible and unforgettable.
            </p>

            <div className="pt-4">
              <p className="text-accent-gold font-display text-2xl md:text-3xl font-bold">
                Since 2018
              </p>
              <p className="text-cream/70 text-sm mt-2">Crafting transformative spaces</p>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="border-l-2 border-accent-gold pl-6 py-2"
              >
                <p className="font-display text-5xl md:text-6xl font-bold text-accent-gold mb-2">
                  {stat.number}
                </p>
                <p className="text-lg font-medium mb-1">{stat.label}</p>
                <p className="text-cream/70 text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Our Expertise - Bottom section */}
        <motion.div
          className="mt-20 md:mt-28 pt-16 border-t border-cream/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3
            variants={itemVariants}
            className="font-display text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Areas of Expertise
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[
              {
                title: 'Residential Design',
                desc: 'Modern homes and luxury apartments crafted to reflect personal lifestyles and aspirations',
              },
              {
                title: 'Commercial Spaces',
                desc: 'Dynamic workplaces and retail environments that enhance user experience and brand identity',
              },
              {
                title: 'Mixed-Use Projects',
                desc: 'Complex, multi-functional spaces balancing residential, commercial, and public areas',
              },
            ].map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-8 border border-cream/20 hover:border-accent-gold transition-colors duration-300"
              >
                <h4 className="font-display text-xl font-bold mb-4 text-accent-gold">
                  {exp.title}
                </h4>
                <p className="text-cream/80 leading-relaxed text-sm">{exp.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
