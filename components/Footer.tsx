'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.footer
      className="bg-gray-darker text-cream section-padding"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
    >
      <div className="container-max">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-16 mb-20 pb-20 border-b border-gray-medium">
          {/* Studio Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="font-display text-lg font-semibold mb-6 text-cream uppercase tracking-wide">
              The Studio
            </h3>
            <p className="text-sm leading-relaxed text-beige-100">
              Thoughtful interior design rooted in spatial planning, material authenticity, and the belief that beautiful spaces transform how we live.
            </p>
          </motion.div>

          {/* Explore */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display text-xs font-semibold mb-6 text-cream uppercase tracking-widest">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/projects" className="text-sm text-beige-100 hover:text-cream transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/read" className="text-sm text-beige-100 hover:text-cream transition-colors">
                  Read
                </Link>
              </li>
              <li>
                <Link href="/watch" className="text-sm text-beige-100 hover:text-cream transition-colors">
                  Watch
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm text-beige-100 hover:text-cream transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display text-xs font-semibold mb-6 text-cream uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-beige-100 hover:text-cream transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-beige-100 hover:text-cream transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-beige-100 hover:text-cream transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-beige-100 hover:text-cream transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Follow */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display text-xs font-semibold mb-6 text-cream uppercase tracking-widest">
              Follow
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-beige-100 hover:text-cream transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-beige-100 hover:text-cream transition-colors">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-beige-100 hover:text-cream transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-beige-100 hover:text-cream transition-colors">
                  TikTok
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-8"
          variants={itemVariants}
        >
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-beige-100 font-medium">
              © {currentYear} Studio Interior Design
            </p>
            <p className="text-xs text-beige-100">
              <a href="#" className="hover:text-cream transition-colors">
                Privacy Policy
              </a>
              {' • '}
              <a href="#" className="hover:text-cream transition-colors">
                Terms of Use
              </a>
            </p>
          </div>

          {/* Newsletter Subscribe - Optional */}
          <div className="hidden md:block">
            <p className="text-xs uppercase tracking-widest text-beige-100 font-medium mb-3">
              Join Our Mailing List
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-medium text-cream text-sm placeholder-beige-100 focus:outline-none border border-gray-medium focus:border-cream transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-cream text-gray-dark font-medium text-sm hover:bg-beige-100 transition-colors"
              >
                →
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
