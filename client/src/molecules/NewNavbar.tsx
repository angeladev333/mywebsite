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

function NewNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: 'Education',
      link: '#education',
    },
    {
      name: 'Experiences',
      link: '#experiences',
    },
    {
      name: 'Projects',
      link: '#projects',
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
            <NavbarLogo />
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
