'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from 'framer-motion';

function Navbar() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(true);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 150) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  return (
    // blurry navbar background
    <div className="sticky top-0 z-50 flex justify-center items-center m-22">
      <motion.div
        className="flex items-center justify-between bg-slate-50/50 shadow-md rounded-full px-12 py-2 backdrop-blur-sm"
        animate={{
          width: visible ? '100%' : '100px',
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 25,
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/assets/logo.png" alt="logo" width={60} height={60} />
        </div>

        {/* Navigation Links */}
        <AnimatePresence>
          {visible && (
            <div className="flex items-center gap-6">
              <button
                onClick={() => {
                  const educationSection = document.getElementById('education');
                  if (educationSection) {
                    educationSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-600 hover:text-[#84a59d] font-semibold transition-colors"
              >
                Education
              </button>
              <button
                onClick={() => {
                  const experiencesSection =
                    document.getElementById('experiences');
                  if (experiencesSection) {
                    experiencesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-600 hover:text-[#84a59d] font-semibold transition-colors"
              >
                Experiences
              </button>
              <button
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-600 hover:text-[#84a59d] font-semibold transition-colors"
              >
                Projects
              </button>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
export default Navbar;
