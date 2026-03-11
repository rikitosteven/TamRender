'use client';

import { motion } from 'framer-motion';

const servicesDetail = [
  {
    title: 'Residential Interior Design',
    description:
      'From intimate apartments to sprawling country homes, we create residential spaces that serve as true sanctuaries. Our approach balances aesthetics with functionality, ensuring every design choice enhances daily life.',
    points: [
      'Space planning and layout optimization',
      'Material and finish selection',
      'Lighting design and implementation',
      'Furniture curation and sourcing',
      'Color and texture development',
    ],
  },
  {
    title: 'Commercial Interior Design',
    description:
      'We design workplace and hospitality spaces that foster creativity, collaboration, and guest comfort. Our commercial work reflects a deep understanding of how environments influence human behavior and productivity.',
    points: [
      'Office layout and workspace design',
      'Hospitality environments',
      'Restaurant and retail design',
      'Lobby and reception areas',
      'Brand expression through design',
    ],
  },
  {
    title: 'Renovation Design',
    description:
      'Strategic renovations that reimagine existing spaces through contemporary design principles. We respect architectural heritage while introducing modern sensibilities and improved functionality.',
    points: [
      'Structural analysis and planning',
      'Constraint-based design solutions',
      'Material adaptation and innovation',
      'Phased renovation planning',
      'Preservation and modernization',
    ],
  },
  {
    title: 'Furniture & Material Selection',
    description:
      'Our expertise in sourcing extends to finding authentic, high-quality furnishings and materials that align with your project vision. We work with established craftspeople and emerging makers worldwide.',
    points: [
      'Custom furniture commissioning',
      'European and artisanal sourcing',
      'Material specification and testing',
      'Finish and texture options',
      'Long-term durability consultation',
    ],
  },
  {
    title: 'Project Management',
    description:
      'End-to-end coordination ensures seamless project execution from conception to completion. Our project management prioritizes quality control, timeline adherence, and clear communication with all stakeholders.',
    points: [
      'Budget management and oversight',
      'Contractor coordination',
      'Quality assurance and inspections',
      'Timeline and milestone tracking',
      'Vendor relationship management',
    ],
  },
];

export default function ServicesPage() {
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

  return (
    <main className="pt-32 md:pt-40 pb-20 md:pb-32 bg-cream">
      <div className="section-padding">
        <div className="container-max max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-6xl font-bold mb-6">
              Services
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-neutral mb-16 md:mb-24">
              Comprehensive design services spanning residential, commercial, and renovation projects
            </motion.p>
          </motion.div>

          {/* Services */}
          <div className="space-y-24 md:space-y-32">
            {servicesDetail.map((service, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={containerVariants}
              >
                <motion.h2
                  variants={itemVariants}
                  className="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-dark"
                >
                  {service.title}
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-gray-neutral mb-8 leading-relaxed max-w-2xl"
                >
                  {service.description}
                </motion.p>

                <motion.ul
                  className="space-y-3"
                  variants={containerVariants}
                >
                  {service.points.map((point, pointIdx) => (
                    <motion.li
                      key={pointIdx}
                      variants={itemVariants}
                      className="text-gray-dark flex items-start gap-4"
                    >
                      <span className="w-2 h-2 bg-gray-dark mt-3 flex-shrink-0 rounded-full" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {idx < servicesDetail.length - 1 && (
                  <div className="mt-16 md:mt-24 border-b border-gray-light" />
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-24 md:mt-32 pt-16 md:pt-24 border-t border-gray-light text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-dark">
              Ready to Begin?
            </h2>
            <p className="text-lg text-gray-neutral mb-8 max-w-xl mx-auto">
              Let&apos;s discuss how we can transform your space
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
