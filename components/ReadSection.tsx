'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
}

const articles: Article[] = [
  {
    id: 'monthly-musings',
    title: 'Monthly Musings | December Inspiration and Design Trends',
    category: 'DESIGN',
    date: '24 November 2025',
    image: '/ARTAINDO/3.jfif',
    excerpt: 'A curated collection of design inspiration and seasonal trends.',
  },
  {
    id: 'fresh-take-drapery',
    title: 'A Fresh Take on Drapery and Window Treatments',
    category: 'DESIGN',
    date: '26 February',
    image: '/ARTAINDO/5.jfif',
    excerpt: 'Spring brings new energy to your home through thoughtful window design.',
  },
  {
    id: 'dining-spaces',
    title: 'Designing Dining Spaces That Inspire Connection',
    category: 'LIFESTYLE',
    date: '12 January',
    image: '/ARTAINDO/6.jfif',
    excerpt: 'Creating spaces where meaningful moments happen around the table.',
  },
];

export default function ReadSection() {
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
    <section className="section-padding bg-cream border-t border-beige-200">
      <div className="container-max">
        {/* Header */}
        <motion.div
          className="mb-20 md:mb-32 flex items-end justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          <div className="flex-1">
            <motion.p variants={itemVariants} className="uppercase-label mb-6">
              Read
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="font-display text-5xl md:text-6xl font-bold text-gray-darker"
            >
              The Latest
            </motion.h2>
          </div>
          <motion.div variants={itemVariants} className="hidden md:block">
            <Link href="/read" className="btn-outline">
              VIEW ALL
            </Link>
          </motion.div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {articles.map((article) => (
            <motion.div key={article.id} variants={itemVariants}>
              <Link href={`/read/${article.id}`}>
                <div className="cursor-pointer group">
                  {/* Image */}
                  <div className="relative w-full h-64 md:h-72 overflow-hidden mb-6 bg-beige-200">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      quality={80}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <p className="uppercase-label">{article.category}</p>
                      <p className="text-xs text-gray-neutral">{article.date}</p>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-gray-darker group-hover:text-gray-medium transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-neutral leading-relaxed">{article.excerpt}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:hidden mt-12 text-center"
        >
          <Link href="/read" className="btn-primary text-sm">
            VIEW ALL ARTICLES
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
