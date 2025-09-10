'use client';

import React, { useState } from 'react';
import Card from '../components/ui/card';
import ClickIcon from '../components/ui/clickIcon';
import {
  FaGithubAlt,
  FaLinkedin,
  FaRegEnvelope,
  // FaChevronDown,
  FaAngleDown,
} from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi';
import Image from 'next/image';
import { TypingText } from '../components/ui/shadcn-io/typing-text';
import { motion } from 'framer-motion';
import { LinkPreview } from '../components/ui/link-preview';

// Helper function to parse text and identify bolded words
const parseBoldText = (text: string) => {
  const parts = [];
  let currentIndex = 0;
  const boldRegex = /\*\*(.*?)\*\*/g;
  let match;

  while ((match = boldRegex.exec(text)) !== null) {
    // Add text before the bold word
    if (match.index > currentIndex) {
      parts.push({
        type: 'text',
        content: text.slice(currentIndex, match.index),
      });
    }

    // Add the bold word
    parts.push({
      type: 'bold',
      content: match[1], // The text inside the **
    });

    currentIndex = match.index + match[0].length;
  }

  // Add remaining text after the last bold word
  if (currentIndex < text.length) {
    parts.push({
      type: 'text',
      content: text.slice(currentIndex),
    });
  }

  return parts;
};

// Component to render text with link previews for bolded words
const TextWithLinkPreview: React.FC<{ text: string }> = ({ text }) => {
  const parts = parseBoldText(text);

  return (
    <>
      {parts.map((part, index) => {
        if (part.type === 'bold') {
          // For now, we'll use a placeholder URL. You can extend this to map specific words to URLs
          const url = getUrlForBoldText(part.content);
          return (
            <LinkPreview
              key={index}
              url={url}
              className="font-bold hover:text-[#84a59d]"
            >
              {part.content}
            </LinkPreview>
          );
        } else {
          return <span key={index}>{part.content}</span>;
        }
      })}
    </>
  );
};

// Helper function to map bolded text to URLs - you can customize this
const getUrlForBoldText = (text: string): string => {
  const urlMap: Record<string, string> = {
    TechNova: 'https://itstechnova.org/',
    'University of Waterloo': 'https://uwaterloo.ca/',
    'Tokyo Science University': 'https://www.titech.ac.jp/english',
    'Hong Kong': 'https://www.cityu.edu.hk/',
    // Bloomberg: 'https://www.bloomberg.com/',
    // Add more mappings as needed
  };

  return (
    urlMap[text] ||
    `https://www.google.com/search?q=${encodeURIComponent(text)}`
  );
};

function HeroPage() {
  const aboutSectionList = [
    'Developing for **TechNova**, a Tech+ Hackathon',
    'Studying in **University of Waterloo**',
    'Exchanging in **Tokyo Science University** & **Hong Kong**',
  ];

  const [hovering, setHovering] = useState(false);
  const [hoveringEmoji, setHoveringEmoji] = useState(false);

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Top Row - Profile and Photo */}
      <div className="flex flex-col gap-6 sm:grid sm:grid-cols-5 sm:gap-6 min-h-[200px]">
        {/* Profile Card */}
        <div className="sm:col-span-3">
          <Card
            className="bg-[#f8edeb] flex items-center justify-between h-full relative"
            props={{
              onMouseEnter: () => setHovering(true),
              onMouseLeave: () => setHovering(false),
            }}
          >
            <div className="flex flex-col gap-4">
              {/* Status Badge */}
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

              {/* Name and Location */}
              <div className="flex flex-col gap-1 ml-4">
                <h1 className="text-3xl font-bold text-gray-800">Angela Xu</h1>
                <p className="text-gray-500 flex items-center">
                  <span>📍</span>
                  {/* TODO: add blinking light */}
                  toronto, canada
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2">
              <ClickIcon
                icon={FaRegEnvelope}
                href="mailto:as2xu@uwaterloo.ca"
                external={true}
              />
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
              {/* TODO: ADD DEVPOST */}
            </div>
          </Card>
        </div>

        {/* Photo Card */}
        <div className="sm:col-span-2">
          <div className="overflow-hidden rounded-3xl shadow-lg h-52 sm:h-full relative hover:scale-102 transition-transform duration-300 cursor-pointer">
            <Image
              src="/assets/image.jpg"
              alt="profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
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
                    <span>
                      <TextWithLinkPreview text={item} />
                    </span>
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

      {/* Action Cards Row */}
      <div className="flex gap-6 items-center">
        {/* Resume Card */}
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

        {/* Design Portfolio Card */}
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

        {/* Scroll Down Button */}
        <Card
          className="hidden sm:flex h-full bg-[#ffd7ba] rounded-full w-16 h-16 items-center justify-center hover:shadow-xl transition-shadow cursor-pointer"
          props={{
            onClick: () => {
              const educationSection = document.getElementById('education');
              if (educationSection) {
                educationSection.scrollIntoView({ behavior: 'smooth' });
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
