'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Video {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  duration: string;
}

const videos: Video[] = [
  {
    id: 'spring-collection',
    title: 'The Spring Collection | Heritage in Bloom',
    category: 'COLLECTION',
    thumbnail: 'https://picsum.photos/600/400?random=303',
    duration: '8:45',
  },
  {
    id: 'design-process',
    title: 'Inside Our Design Process',
    category: 'HOW TO',
    thumbnail: 'https://picsum.photos/600/400?random=304',
    duration: '12:30',
  },
  {
    id: 'home-tour',
    title: 'A Closer Look at the McGee Home',
    category: 'PROJECT TOURS',
    thumbnail: 'https://picsum.photos/600/400?random=305',
    duration: '6:15',
  },
];

export default function WatchSection() {
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
    <section className="section-padding bg-white border-t border-beige-200">
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
              Watch
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="font-display text-5xl md:text-6xl font-bold text-gray-darker"
            >
              Featured Videos
            </motion.h2>
          </div>
          <motion.div variants={itemVariants} className="hidden md:block">
            <Link href="/watch" className="btn-outline">
              VIEW ALL
            </Link>
          </motion.div>
        </motion.div>

        {/* Videos Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {videos.map((video) => (
            <motion.div key={video.id} variants={itemVariants}>
              <Link href={`/watch/${video.id}`}>
                <div className="cursor-pointer group">
                  {/* Video Thumbnail */}
                  <div className="relative w-full h-64 md:h-72 overflow-hidden mb-6 bg-beige-200">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      quality={80}
                    />
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                      <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-0 h-0 border-l-8 border-l-white border-y-4 border-y-transparent ml-1" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded text-xs font-medium">
                      {video.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <p className="uppercase-label">{video.category}</p>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-gray-darker group-hover:text-gray-medium transition-colors">
                      {video.title}
                    </h3>
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
          <Link href="/watch" className="btn-primary text-sm">
            VIEW ALL VIDEOS
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
