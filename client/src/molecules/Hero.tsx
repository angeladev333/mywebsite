'use client';

import React, { useState, useRef } from 'react';
import Card from '../components/ui/card';
import ClickIcon from '../components/ui/clickIcon';
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa6';
import { SiDevpost } from 'react-icons/si';
import { MdArrowOutward } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi';
import Image from 'next/image';
import { TypingText } from '../components/ui/shadcn-io/typing-text';
import { motion } from 'framer-motion';
import { LinkPreview } from '../components/ui/link-preview';
import useMouse from '@react-hook/mouse-position';

function HeroPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const mouse = useMouse(containerRef as React.RefObject<HTMLElement>);

  // Calculate distance from mouse to image
  // const getDistanceToImage = () => {
  //   if (!imageRef.current || !containerRef.current || !mouse.x || !mouse.y)
  //     return 1000;

  //   const imageRect = imageRef.current.getBoundingClientRect();
  //   const containerRect = containerRef.current.getBoundingClientRect();

  //   // Convert mouse position to absolute coordinates
  //   const mouseX = mouse.x + containerRect.left;
  //   const mouseY = mouse.y + containerRect.top;

  //   // Calculate distance to image center
  //   const imageCenterX = imageRect.left + imageRect.width / 2;
  //   const imageCenterY = imageRect.top + imageRect.height / 2;

  //   const distance = Math.sqrt(
  //     Math.pow(mouseX - imageCenterX, 2) + Math.pow(mouseY - imageCenterY, 2)
  //   );

  //   return distance;
  // };

  // const distanceToImage = getDistanceToImage();
  // const maxDistance = 200; // Pixels from image center
  // const pixelSize =
  //   distanceToImage < maxDistance
  //     ? Math.min(Math.max((maxDistance - distanceToImage) / 25, 1), 8)
  //     : 1;

  const aboutSectionList = [
    <>
      Developing for{' '}
      <LinkPreview
        url="https://itstechnova.org/"
        className="font-bold hover:text-[#84a59d]"
      >
        TechNova
      </LinkPreview>
      , a Tech+ Hackathon
    </>,
    <>
      BCS + AI + CM{' '}
      <LinkPreview
        url="https://uwaterloo.ca/"
        className="font-bold hover:text-[#84a59d]"
      >
        @University of Waterloo
      </LinkPreview>
    </>,
    <>
      Exchanging in{' '}
      <LinkPreview
        url="https://www.titech.ac.jp/english"
        className="font-bold hover:text-[#84a59d]"
      >
        Tokyo Science University
      </LinkPreview>
      {' & '}
      <LinkPreview
        url="https://www.cityu.edu.hk/"
        className="font-bold hover:text-[#84a59d]"
      >
        Hong Kong
      </LinkPreview>
    </>,
  ];

  const [hovering, setHovering] = useState(false);
  const [hoveringEmoji, setHoveringEmoji] = useState(false);

  return (
    <div className="flex flex-col gap-6 w-full" ref={containerRef}>
      {/* <PixelateSvgFilter
        id="hero-pixelate-filter"
        size={pixelSize}
        crossLayers
      /> */}
      <div className="flex flex-col gap-6 sm:grid sm:grid-cols-5 sm:gap-6 min-h-[200px]">
        <div className="sm:col-span-3">
          <Card
            className="bg-[#f8edeb] flex items-center justify-between h-full relative"
            props={{
              onMouseEnter: () => setHovering(true),
              onMouseLeave: () => setHovering(false),
            }}
          >
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 bg-[#fcd5ce] rounded-full px-4 py-2">
                <span className="text-lg">⭐</span>
                <span className="text-gray-700 font-medium">
                  {hovering ? (
                    <TypingText
                      text={['looking for fall 2026 internship']}
                      duration={100}
                      delay={0}
                      inView={true}
                      loop={true}
                      holdDelay={1000}
                      inViewMargin="0px"
                    />
                  ) : (
                    'SWE intern @bloomberg'
                  )}
                </span>
              </div>

              <div className="flex flex-col gap-1 ml-4">
                <h1 className="text-3xl font-bold text-gray-800">Angela Xu</h1>
                <p className="text-gray-500 flex items-center">
                  <span className="relative flex size-2 mr-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-300 opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-[#f28482]"></span>
                  </span>
                  toronto, canada
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <ClickIcon
                icon={FaLinkedin}
                href="https://linkedin.com/in/angela-xu"
                external={true}
              />
              <ClickIcon
                icon={FaGithubAlt}
                href="https://github.com/angeladev333"
                external={true}
              />
              <ClickIcon
                icon={SiDevpost}
                href="https://devpost.com/angela-xu1709"
                external={true}
              />
            </div>
          </Card>
        </div>

        <div className="sm:col-span-2">
          <div
            ref={imageRef}
            className="overflow-hidden rounded-3xl shadow-lg h-52 sm:h-full relative hover:scale-102 transition-transform duration-300 cursor-pointer"
          >
            <Image
              src="/assets/profile2.jpeg"
              alt="profile"
              fill
              className="object-cover opacity-70 hover:opacity-80 transition-opacity duration-300"
              // style={{ filter: 'url(#hero-pixelate-filter)' }}
            />
          </div>
        </div>
      </div>

      <div className="w-full hidden sm:block">
        <Card
          className="bg-[#f7ede2] min-h-[200px]"
          props={{
            onMouseEnter: () => setHoveringEmoji(true),
            onMouseLeave: () => setHoveringEmoji(false),
          }}
        >
          <div className="flex justify-between items-start ml-4 group">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4 pt-4">
                Constant state of learning and curiosity...
              </h2>
              <ul className="space-y-2 text-gray-700">
                {aboutSectionList.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-xl opacity-80">
              {hoveringEmoji && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  ૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა
                </motion.span>
              )}
            </div>
          </div>
        </Card>
      </div>

      <div className="flex gap-6 items-center">
        <Card
          className="bg-[#fcd5ce] flex-1 rounded-full hover:shadow-xl transition-shadow cursor-pointer"
          props={{
            onClick: () => {
              window.open('/resume/AngelaXu_resume_3.3.pdf', '_blank');
            },
          }}
        >
          <div className="flex items-center justify-between ml-4">
            <span className="text-lg text-gray-800">Resume</span>
            <ClickIcon
              icon={FiDownload}
              href="/resume/AngelaXu_resume_3.3.pdf"
              hoverBgColor="hover:bg-[#f5cac3]"
              hoverTextColor="hover:text-[#f28482]"
              external={true}
            />
          </div>
        </Card>

        <Card
          className="h-full bg-[#d8e2dc] flex-1 rounded-full hover:shadow-xl transition-shadow cursor-pointer"
          props={{
            onClick: () => {
              window.open('https://angela-xu-site-ii.super.site/', '_blank');
            },
          }}
        >
          <div className="flex items-center justify-between ml-4">
            <span className="text-lg text-gray-800">Portfolio</span>
            <ClickIcon
              icon={MdArrowOutward}
              href="https://angela-xu-site-ii.super.site/"
              hoverBgColor="hover:bg-[#c7d2cc]"
              hoverTextColor="hover:text-[#84a59d]"
              external={true}
            />
          </div>
        </Card>

        <Card
          className="hidden sm:flex h-full bg-[#ffd7ba] rounded-full w-16 h-16 items-center justify-center hover:shadow-xl transition-shadow cursor-pointer"
          props={{
            onClick: () => {
              const experienceSection = document.getElementById('experiences');
              if (experienceSection) {
                experienceSection.scrollIntoView({ behavior: 'smooth' });
              }
            },
          }}
        >
          <ClickIcon
            icon={FaAngleDown}
            href="#"
            hoverBgColor="hover:bg-[#f5cac3]"
            hoverTextColor="hover:text-[#f28482]"
          />
        </Card>
      </div>
    </div>
  );
}

export default HeroPage;
