'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProcessPage() {
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

  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We begin by listening. Understanding your vision, lifestyle, space constraints, and aesthetic preferences. This foundational conversation informs every decision that follows.',
    },
    {
      number: '02',
      title: 'Spatial Planning',
      description: 'We analyze the space and develop layouts that maximize flow and function. We consider natural light, traffic patterns, and how spaces will be lived in daily.',
    },
    {
      number: '03',
      title: 'Concept Development',
      description: 'From our research, we create a comprehensive design direction. We present material mood boards, color palettes, and spatial concepts for your approval.',
    },
    {
      number: '04',
      title: 'Material Selection',
      description: 'We curate and source authentic, high-quality materials and furnishings. Every selection balances aesthetics with durability and sustainability.',
    },
    {
      number: '05',
      title: 'Construction Coordination',
      description: 'We manage the execution phase, coordinating with contractors and craftspeople. Regular site visits ensure quality and adherence to design specifications.',
    },
    {
      number: '06',
      title: 'Final Styling',
      description: 'We curate final furnishings, accessories, and finishing touches. The result is a cohesive, lived-in space that feels both beautiful and authentically yours.',
    },
  ];

  return (
    <main className="bg-cream">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="section-padding">
          <div className="container-max">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1
                variants={itemVariants}
                className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8"
              >
                Our Design Process
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-neutral max-w-3xl leading-relaxed"
              >
                A six-step approach to thoughtful interior design. We believe great design comes from listening, research, and meticulous execution.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white border-t border-beige-200">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="space-y-12 sm:space-y-16 md:space-y-20"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 md:gap-16 items-start"
              >
                {/* Step Number */}
                <div className="md:col-span-3">
                  <div className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-beige-300">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-4 sm:space-y-6">
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-gray-darker">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-neutral leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="pt-8 sm:pt-12 md:pt-16 border-b border-beige-200" />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline/Expectations */}
      <section className="section-padding bg-beige-50 border-t border-beige-200">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-darker mb-12 sm:mb-16"
            >
              What to Expect
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"
            >
              {[
                {
                  title: 'Timeline',
                  description: 'Most projects take 4-12 weeks depending on scope. Full home renovations may take 6-18 months including construction.',
                },
                {
                  title: 'Investment',
                  description: 'Design fees vary based on project scope. We offer consultation, partial, and full service options to fit your budget.',
                },
                {
                  title: 'Communication',
                  description: 'Regular updates and collaboration throughout the project. We keep you informed at every stage of the design and construction process.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  className="p-6 sm:p-8 bg-white border border-beige-200 space-y-4 sm:space-y-6"
                >
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-gray-darker">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-neutral leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Link */}
      <section className="section-padding bg-white border-t border-beige-200">
        <div className="container-max text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-darker mb-6 sm:mb-8"
            >
              Explore Our Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-neutral max-w-2xl mx-auto mb-12 sm:mb-16 leading-relaxed"
            >
              Learn about the specific services we offer and how we can help bring your design vision to life.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/services" className="btn-primary inline-block text-sm">
                VIEW SERVICES
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-darker text-cream border-t border-gray-medium">
        <div className="container-max max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8"
            >
              Let&apos;s Begin
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-beige-100 mb-12 sm:mb-16 leading-relaxed"
            >
              Ready to start your design journey? Schedule a consultation with our team.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/contact" className="btn-primary inline-block text-sm">
                SCHEDULE CONSULTATION
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
