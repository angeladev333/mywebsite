'use client';

import React, { useState } from 'react';
import {
  Navbar as ResizableNavbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar';
import { motion } from 'motion/react';

function NewNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: 'Experiences',
      link: '#experiences',
    },
    {
      name: 'Projects',
      link: '#projects',
    },
    {
      name: 'More',
      link: '#fun-facts',
    },
  ];

  const handleNavItemClick = (sectionId: string) => {
    const section = document.getElementById(sectionId.replace('#', ''));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative w-full">
      <ResizableNavbar className="sticky top-0 z-50">
        {/* Desktop Navigation */}
        <NavBody className="bg-slate-50/50 shadow-md rounded-full px-12 py-2 backdrop-blur-sm">
          <NavbarLogo />
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavItemClick(item.link)}
                className="text-gray-600 hover:text-[#84a59d] font-semibold transition-colors px-4 py-2 relative z-20"
              >
                {item.name}
              </button>
            ))}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="bg-slate-50/50 shadow-md rounded-full px-4 py-2 backdrop-blur-sm">
          <MobileNavHeader>
            {/* CS Webring */}
            <div className="flex items-center gap-2 pl-4">
              <a href="https://cs.uwatering.com/#angelaxu.design?nav=prev">←</a>
              <a
                href="https://cs.uwatering.com/#angelaxu.design"
                target="_blank"
              >
                <img
                  src="https://cs.uwatering.com/icon.black.svg"
                  alt="CS Webring"
                  className="w-6 h-auto"
                />
              </a>
              <a href="https://cs.uwatering.com/#angelaxu.design?nav=next">→</a>
            </div>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <button
                key={`mobile-link-${idx}`}
                onClick={() => handleNavItemClick(item.link)}
                className="relative text-gray-600 hover:text-[#84a59d] font-semibold transition-colors w-full text-left"
              >
                <span className="block">{item.name}</span>
              </button>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </ResizableNavbar>
    </div>
  );
}

export default NewNavbar;
