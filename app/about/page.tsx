'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

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
                About Our Studio
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-neutral max-w-3xl leading-relaxed"
              >
                We are a team of interior designers, architects, and craftspeople dedicated to creating thoughtful, beautiful spaces that enhance how people live, work, and gather.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Studio Philosophy */}
      <section className="section-padding bg-white border-t border-beige-200">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Image */}
            <motion.div
              variants={imageVariants}
              className="relative w-full h-96 sm:h-[450px] md:h-[550px] overflow-hidden bg-beige-200"
            >
              <Image
                src="https://picsum.photos/600/700?random=600"
                alt="Studio Space"
                fill
                className="object-cover"
                quality={85}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={containerVariants}
              className="space-y-6 sm:space-y-8"
            >
              <motion.div variants={itemVariants}>
                <p className="uppercase-label mb-4 sm:mb-6">Our Philosophy</p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-darker mb-6 sm:mb-8">
                  Design that Listens
                </h2>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <p className="text-base sm:text-lg leading-relaxed text-gray-neutral">
                  We believe thoughtful interior design should be quiet and confident. It should not compete for attention, but rather create an environment where people feel genuinely at ease.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-gray-neutral">
                  Every project begins with deep listening—understanding how spaces will be lived in, what activities they should support, and what emotional qualities they should evoke. We design for longevity, not trends. Our work is rooted in spatial understanding, material honesty, and meticulous attention to craft.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4 sm:pt-6">
                <Link href="/contact" className="btn-primary inline-block text-sm">
                  START A PROJECT
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-beige-50 border-t border-beige-200">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="mb-16 sm:mb-20 md:mb-32"
          >
            <motion.p variants={itemVariants} className="uppercase-label mb-4 sm:mb-6">
              Our Team
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-darker"
            >
              15 Talented Professionals
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"
          >
            {[
              { name: 'Sarah Mitchell', role: 'Founder & Creative Director', image: 1 },
              { name: 'James Chen', role: 'Senior Interior Designer', image: 2 },
              { name: 'Emma Williams', role: 'Spatial Planner', image: 3 },
              { name: 'Marcus Johnson', role: 'Design Architect', image: 4 },
              { name: 'Lisa Rodriguez', role: 'Material Specialist', image: 5 },
              { name: 'David Thompson', role: 'Project Manager', image: 6 },
            ].map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="space-y-4 sm:space-y-6"
              >
                <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-beige-200">
                  <Image
                    src={`https://picsum.photos/400/500?random=${600 + member.image}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-darker mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-neutral">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-white border-t border-beige-200">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-darker mb-16 sm:mb-20"
            >
              Our Approach
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20"
            >
              {[
                {
                  title: 'Research & Understanding',
                  description:
                    'We begin every project by deeply understanding the space, its history, and how it will be used. We listen to our clients and collaborate with architects and craftspeople.',
                },
                {
                  title: 'Concept Development',
                  description:
                    'From research emerges clarity about material palette, spatial relationships, and design direction. We create concepts rooted in authenticity rather than trends.',
                },
                {
                  title: 'Material Selection',
                  description:
                    'Every material is chosen for both aesthetic and functional qualities. We prioritize quality, durability, and sustainability in sourcing.',
                },
                {
                  title: 'Execution & Refinement',
                  description:
                    'We work closely with builders, craftspeople, and suppliers to ensure every detail is executed with precision and care.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="space-y-4 sm:space-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-dark text-cream flex items-center justify-center font-display text-xl sm:text-2xl font-bold">
                    {index + 1}
                  </div>
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

      {/* Values Section */}
      <section className="section-padding bg-gray-darker text-cream border-t border-gray-medium">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-16 sm:mb-20"
            >
              Core Values
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12"
            >
              {[
                { title: 'Authenticity', description: 'Honest materials and genuine design' },
                { title: 'Craft', description: 'Meticulous attention to every detail' },
                { title: 'Longevity', description: 'Design that endures over time' },
                { title: 'Collaboration', description: 'Working closely with clients and makers' },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  className="space-y-3 sm:space-y-4"
                >
                  <h3 className="font-display text-2xl sm:text-3xl font-bold">{value.title}</h3>
                  <p className="text-sm sm:text-base text-beige-100 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-cream border-t border-beige-200">
        <div className="container-max max-w-3xl text-center">
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
              Let&apos;s Create Something Beautiful
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-neutral mb-12 sm:mb-16 leading-relaxed"
            >
              We&apos;d love to hear about your project and discuss how we can bring your vision to life. Get in touch to schedule a consultation.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/contact" className="btn-primary inline-block text-sm">
                GET IN TOUCH
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
