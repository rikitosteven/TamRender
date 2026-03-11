'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  description,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;

    if (newPosition >= 0 && newPosition <= 100) {
      setSliderPosition(newPosition);
    }
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="section-padding bg-cream border-t border-beige-200">
      <div className="container-max">
        <motion.div
          className="mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-0.5 bg-accent-gold" />
            <p className="text-sm md:text-base uppercase tracking-widest font-medium text-accent-gold">
              Transformation Gallery
            </p>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-darker">
            {title}
          </motion.h2>
          {description && (
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-medium max-w-2xl leading-relaxed font-light"
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        {/* Before/After Slider */}
        <motion.div
          className="relative w-full h-96 md:h-[600px] overflow-hidden cursor-col-resize bg-beige-300"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0">
            <Image
              src={afterImage}
              alt="After"
              fill
              className="object-cover"
              quality={75}
              sizes="100vw"
              placeholder="empty"
            />
          </div>

          {/* Before Image (Sliding) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <Image
              src={beforeImage}
              alt="Before"
              fill
              className="object-cover"
              quality={75}
              sizes="100vw"
              placeholder="empty"
            />
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-cream cursor-col-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cream rounded-full p-3 shadow-lg">
              <svg className="w-6 h-6 text-gray-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <svg className="w-6 h-6 text-gray-dark -ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-6 left-6 bg-gray-dark/80 backdrop-blur-sm px-4 py-2 rounded-none">
            <p className="text-xs font-medium text-cream uppercase tracking-widest">Before</p>
          </div>
          <div className="absolute bottom-6 right-6 bg-gray-dark/80 backdrop-blur-sm px-4 py-2 rounded-none">
            <p className="text-xs font-medium text-cream uppercase tracking-widest">After</p>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.p
          className="text-center text-sm text-gray-neutral mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Drag the slider to explore the transformation
        </motion.p>
      </div>
    </section>
  );
}
