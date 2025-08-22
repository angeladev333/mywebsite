'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
            <div className="flex items-center gap-4">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Education
              </Link>
              <Link
                href="/about"
                className="hover:text-blue-600 transition-colors"
              >
                Experiences
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-600 transition-colors"
              >
                Projects
              </Link>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
export default Navbar;
