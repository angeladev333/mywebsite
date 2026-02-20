'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

interface BoldCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  className?: string;
}

function BoldCard({
  title,
  subtitle,
  description,
  image,
  githubUrl,
  demoUrl,
  className = '',
}: BoldCardProps) {
  return (
    <motion.div
      className={`relative bg-white rounded-3xl border-2 border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Top Section - Image with Diagonal Hover Effect */}
      <div className="relative overflow-hidden">
        <motion.div
          className="relative"
          whileHover={{ x: 8, y: -8 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <div className="aspect-video bg-gray-900 rounded-2xl m-6 mb-4 overflow-hidden shadow-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="px-6 pb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{subtitle}</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
            )}
          </div>

          {demoUrl && (
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try it Out
            </motion.a>
          )}

          <motion.button
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Show More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default BoldCard;
