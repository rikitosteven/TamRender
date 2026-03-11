'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mainLinks = [
    { label: 'WORK', href: '/projects' },
    { label: 'SERVICES', href: '/services' },
    { label: 'ABOUT', href: '/about' },
    { label: 'PROCESS', href: '/process' },
  ];

  const secondaryLinks = [
    { label: 'PORTFOLIO', href: '/projects' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-beige-200"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 py-4 md:py-6">
        <div className="container-max flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-lg sm:text-xl font-bold text-accent-gold hover:text-accent-terracotta transition-colors tracking-tight flex items-center gap-2"
          >
            <span className="text-gray-darker">TAM</span>.RENDERS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12 lg:gap-16">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-gray-darker hover:text-accent-gold transition-colors uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA and Secondary */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-8">
            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-gray-darker hover:text-accent-gold transition-colors uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-3 sm:p-4 -mr-3 sm:-mr-4 min-w-12 h-12 items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <div className={`w-5 h-0.5 bg-gray-dark transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-5 h-0.5 bg-gray-dark transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-gray-dark transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            className="lg:hidden mt-6 sm:mt-8 pb-6 sm:pb-8 border-t border-beige-200 pt-6 sm:pt-8 px-4 sm:px-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-4 sm:gap-6">
              {[...mainLinks, ...secondaryLinks].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="uppercase-label text-xs sm:text-sm hover:text-gray-dark transition-colors py-2 px-3 -mx-3 touch-target"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
