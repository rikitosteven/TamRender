'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'residential',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'residential',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

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
              Get in Touch
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-neutral mb-12 md:mb-16 max-w-2xl">
              Let&apos;s discuss your interior design project and how we can bring your vision to life.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="font-display text-2xl font-bold mb-8 text-gray-dark">
                Contact Information
              </motion.h2>

              <div className="space-y-8">
                <motion.div variants={itemVariants}>
                  <p className="text-sm uppercase tracking-widest text-gray-neutral mb-2">Email</p>
                  <a
                    href="mailto:studio@thoughtfulspaces.com"
                    className="text-lg font-medium text-gray-dark hover:text-gray-neutral transition-colors"
                  >
                    studio@thoughtfulspaces.com
                  </a>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <p className="text-sm uppercase tracking-widest text-gray-neutral mb-2">Phone</p>
                  <a
                    href="tel:+15551234567"
                    className="text-lg font-medium text-gray-dark hover:text-gray-neutral transition-colors"
                  >
                    +1 (555) 123 4567
                  </a>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <p className="text-sm uppercase tracking-widest text-gray-neutral mb-2">Address</p>
                  <p className="text-lg text-gray-dark">
                    Studio Headquarters
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <p className="text-sm uppercase tracking-widest text-gray-neutral mb-2">Hours</p>
                  <p className="text-lg text-gray-dark">
                    Monday–Friday: 9am–6pm EST
                    <br />
                    Saturday–Sunday: By appointment
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="pt-8 border-t border-gray-light">
                  <p className="text-sm text-gray-neutral leading-relaxed">
                    We typically respond to inquiries within 24 hours during business days. For urgent matters, please
                    call us directly.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="font-display text-2xl font-bold mb-8 text-gray-dark">
                Send us a Message
              </motion.h2>

              {submitted ? (
                <motion.div
                  className="bg-beige/50 border border-gray-light px-6 py-8 rounded-none"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-dark font-medium mb-2">Thank you for reaching out!</p>
                  <p className="text-gray-neutral">
                    We&apos;ve received your message and will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-dark mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-light bg-white text-gray-dark focus:outline-none focus:border-gray-dark transition-colors rounded-none"
                      placeholder="Your name"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-dark mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-light bg-white text-gray-dark focus:outline-none focus:border-gray-dark transition-colors rounded-none"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-dark mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-light bg-white text-gray-dark focus:outline-none focus:border-gray-dark transition-colors rounded-none"
                      placeholder="+1 (555) 123 4567"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-dark mb-2">Project Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-light bg-white text-gray-dark focus:outline-none focus:border-gray-dark transition-colors rounded-none"
                    >
                      <option value="residential">Residential Interior Design</option>
                      <option value="commercial">Commercial Interior Design</option>
                      <option value="renovation">Renovation Design</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-dark mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-light bg-white text-gray-dark focus:outline-none focus:border-gray-dark transition-colors rounded-none resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full md:w-auto"
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
