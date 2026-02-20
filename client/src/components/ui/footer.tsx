'use client';

import React, { useState } from 'react';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from 'framer-motion';
import { FaLinkedin, FaGithubAlt } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';

function ExpandableFooter() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = latest + windowHeight;
    const pageProgress = latest / (documentHeight - windowHeight);

    // Show footer when at bottom, hide when above 50% of page
    if (scrollPosition > documentHeight - 100) {
      setVisible(true);
    } else if (pageProgress < 0.5) {
      setVisible(false);
    }
  });

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-0 z-50 flex justify-center items-center w-full p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex items-center justify-center bg-slate-50/50 shadow-md rounded-full backdrop-blur-sm w-[60px] h-[60px] md:w-auto md:h-auto md:min-w-[800px]"
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 25,
            }}
          >
            {/* Mobile - Only Back to top button (circular) */}
            <div className="flex items-center justify-center md:hidden w-full h-full">
              <motion.button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-center text-gray-600 hover:text-[#84a59d] font-semibold transition-colors w-12 h-12"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">↑</span>
              </motion.button>
            </div>

            {/* Desktop - Full footer content */}
            <div className="hidden md:flex items-center w-full px-16 py-3 gap-2">
              {/* Left section - Made with care */}
              <div className="flex items-center justify-start flex-1">
                <span className="text-gray-700 font-medium text-sm whitespace-nowrap">
                  Made with ♥
                </span>
              </div>

              {/* Center section - CS Webring */}
              <div className="flex items-center justify-center flex-1">
                <div className="flex items-center gap-2">
                  <motion.a
                    href="https://cs.uwatering.com/#angelaxu.design?nav=prev"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ←
                  </motion.a>
                  <motion.a
                    href="https://cs.uwatering.com/#angelaxu.design"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src="https://cs.uwatering.com/icon.black.svg"
                      alt="CS Webring"
                      className="w-6 h-auto opacity-80 hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </motion.a>
                  <motion.a
                    href="https://cs.uwatering.com/#angelaxu.design?nav=next"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    →
                  </motion.a>
                </div>
              </div>

              {/* Right section - Emoji and Back to top */}
              <div className="flex items-center justify-end flex-1">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 text-sm">₍⑅^..^₎♡</span>
                  <motion.button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#84a59d] font-semibold transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-lg font-bold">↑</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ExpandableFooter;
