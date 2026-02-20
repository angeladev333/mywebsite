'use client';
import React, { useState } from 'react';
import HoverTitle from '../components/ui/hoverTitle';
import { IoMdArrowDropright } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { MdWork, MdLocationOn } from 'react-icons/md';
import Image from 'next/image';
import { CarouselCustomNavigation } from './CarouselItem';

function ExperienceSection() {
  const experienceList = [
    {
      company: 'Bloomberg',
      role: 'Software Engineering Intern',
      location: 'New York, NY',
      period: 'Sep 2025 - Dec 2025',
      description:
        'Developing a RAG system to power suggestion-based trade matching, enhancing efficiency for the collateral team.',
      skills: ['Python', 'Scikit-learn', 'Pandas', 'SQL'],
      image: '/assets/Bloomberg-logo.png',
      imageLink: 'https://www.bloomberg.com/',
      images: ['/assets/poster-1.jpg', '/assets/bb-tree.png', '/assets/poster_and_team.jpg',],
    },
    {
      company: 'MedMe Health',
      role: 'Software Engineering Intern',
      location: 'Toronto, ON',
      period: 'May 2024 - Aug 2024, Jan 2025 - Apr 2025',
      description:
        'Built an AI-powered tool that transcribes pharmacy appointments into structured medical forms, cutting documentation time by 80% and saving 400+ hours weekly across 1000+ pharmacies.',
      skills: ['Typescript', 'REST', 'GraphQL', 'AWS', 'Docker'],
      image:
        'https://lh3.googleusercontent.com/p/AF1QipNAi7c2cNx7_UvJcbMkF4dvyQYO02_QI1UOv4x9=s1360-w1360-h1020-rw',
      imageLink: 'https://medmehealth.com',
      images: [
        '/assets/medmeteam.png', '/assets/medmestudents.png',
      ],
    },
    {
      company: 'Blum Learning Company',
      role: 'Junior Software Engineer',
      location: 'Toronto, ON',
      period: 'May 2023 - Aug 2023',
      description:
        'Resolved 1000+ technical debt, 300+ bugs, and 50+ data fixes with SQL queries, resulting in 15% productivity increase.',
      skills: ['Java', 'Springboot', 'SQL', 'Vue'],
      image:
        'https://media.licdn.com/dms/image/v2/C560BAQEp6WTm8_C1LQ/company-logo_200_200/company-logo_200_200/0/1670876631638/iblum_logo?e=2147483647&v=beta&t=PSwFQ4JmfhdoFHa5rB5PZip7jSWsfzLVrOxbZNeJbRs',
      imageLink: 'https://iblum.co/',
      images: [
        '/assets/iblum.png',
      ],
    },
    {
      company: 'Google',
      role: 'CSSI Scholar',
      location: 'Remote',
      period: 'July 2022 - Aug 2022',
      description:
        'Conducted 10+ individual coding projects and delivered a collaborative capstone presentation to Google engineers',
      skills: ['JavaScript', 'HTML/CSS', 'Firebase'],
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png',
      imageLink:
        'https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute',
      images: [
        '/assets/EnergyCapitalist.png',
      ],
    },
  ];

  const extracurricularsList = [
    {
      organization: 'TechNova',
      role: 'Full Stack Developer',
      location: 'Waterloo, ON',
      period: 'Sep 2023 - Present',
      description:
        "Developing platform for Canada's largest tech+ hackathon with 1000+ participants. Built registration system, mentor matching, and real-time event management features.",
      skills: ['React', 'Typescript', 'SQL', 'Supabase'],
      image: '/assets/technova.webp',
      imageLink: 'https://itstechnova.org/',
      images: ['/assets/technova-1.png', '/assets/technova-8.png', '/assets/technova-7.png', '/assets/technova-6.png', '/assets/technova-5.png', '/assets/technova-4.png', '/assets/technova-3.png', '/assets/technova-2.png'],
    },
    {
      organization: 'UW Google Developer Student Club',
      role: 'Graphics and Marketing',
      location: 'Waterloo, ON',
      period: 'Sep 2021 - June 2022',
      description:
        'Designed graphics and marketing materials for Google Developer Student Club at the University of Waterloo.',
      skills: ['Figma', 'React'],
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPnMUCh_U_3Fp0ZzBg-ZCJhhoKaPq8_cC__w&s',
      imageLink: 'https://gdg.community.dev/',
      images: ['/assets/BOTPostRevisedFinal.png', '/assets/hackwithai.png', '/assets/ProjectKickoffFront2.png', '/assets/ProjectionHiring.png', '/assets/BOTPostRevisedLight2.png']
    },
    {
      organization: 'UW Computer Science Club',
      role: 'Photography Team Lead',
      location: 'Waterloo, ON',
      period: 'Sep 2022 - Apr 2023',
      description:
        'Captured and edited photos for various events and organizations at the University of Waterloo.',
      skills: ['Event Photography', 'Adobe Photoshop'],
      image: 'https://csclub.uwaterloo.ca/images/home/codey_sitting.svg',
      imageLink: 'https://csclub.uwaterloo.ca/',
      images: ['/assets/csc-1.jpg', '/assets/csc-2.jpg']
    },
  ];

  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovering, setIsHovering] = useState(true);
  const [activeTab, setActiveTab] = useState<'work' | 'extracurriculars'>(
    'work'
  );

  return (
    <div
      className="flex flex-col gap-6 pt-24 px-4"
      id="experiences"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="flex items-center gap-2 cursor-pointer w-full"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <IoMdArrowDropright className="text-gray-500 text-lg" />
        </motion.div>
        <div className="flex-1">
          <HoverTitle
            title="Experiences"
            emojiIcon="ദ്ദി૮(˵ •̀ ᴗ - ˵ ) ა✧"
            isHovering={isHovering}
            setIsHovering={setIsHovering}
          />
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
              opacity: { duration: 0.2 },
            }}
          >
            <p className="px-6 text-gray-700 text-sm mb-6">
              I've had the pleasure of working 4 internships, 3 companies, 2
              YC-backed startups, and 1 awesome summer camp:
            </p>
            {/* Toggle Selector */}
            <div className="flex justify-center mb-6">
              <div className="relative bg-gray-100 rounded-full p-2 grid grid-cols-2 w-48 sm:w-80">
                {/* Animated Background */}
                <motion.div
                  className="absolute top-1 left-1 bg-[#dbe8ea] rounded-full shadow-md h-10"
                  animate={{
                    x: activeTab === 'work' ? '0%' : 'calc(100% - 2px)',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                  style={{
                    width: 'calc(50% - 4px)',
                  }}
                />

                {/* Work Button */}
                <button
                  onClick={() => setActiveTab('work')}
                  className={`relative z-10 flex items-center justify-center gap-2 h-8 rounded-full transition-colors duration-300 ${activeTab === 'work'
                    ? 'text-gray-800'
                    : 'text-gray-600 hover:text-gray-800'
                    }`}
                >
                  <MdWork className="text-base" />
                  <span className="font-medium text-sm hidden sm:inline">
                    Work
                  </span>
                </button>

                {/* Extracurriculars Button */}
                <button
                  onClick={() => setActiveTab('extracurriculars')}
                  className={`relative z-10 flex items-center justify-center gap-2 h-8 rounded-full transition-colors duration-300 ${activeTab === 'extracurriculars'
                    ? 'text-gray-800'
                    : 'text-gray-600 hover:text-gray-800'
                    }`}
                >
                  <MdLocationOn className="text-base" />
                  <span className="font-medium text-sm hidden sm:inline">
                    Extracurriculars
                  </span>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="py-10">
              <AnimatePresence mode="wait">
                {activeTab === 'work' ? (
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {experienceList.map((item, index) => (
                      <motion.div
                        key={index}
                        className="relative pl-24 pr-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.3,
                          ease: 'easeOut',
                        }}
                      >
                        {/* Timeline Icon - Absolutely positioned */}
                        <div className="absolute left-4 top-0">
                          <div className="w-16 h-16 rounded-full bg-white shadow-lg border-4 border-slate-300 flex items-center justify-center z-10 overflow-hidden">
                            {item.image ? (
                              <a
                                href={item.imageLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-full relative block rounded-full overflow-hidden"
                              >
                                <Image
                                  src={item.image}
                                  alt={`${item.company} logo`}
                                  fill
                                  loading="lazy"
                                  className="object-cover"
                                />
                              </a>
                            ) : (
                              <div className="w-8 h-8 bg-[#84a59d] rounded-full flex items-center justify-center">
                                <MdWork className="text-white text-lg" />
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Timeline Line - Absolutely positioned to connect icons */}
                        {index < experienceList.length - 1 && (
                          <div
                            className="absolute left-12 top-16 w-0.5 bg-[#d1d5db] z-0"
                            style={{ height: 'calc(100% - 32px)' }}
                          ></div>
                        )}

                        {/* Content - Split into text and image */}
                        <div className="flex-1 pb-12 flex gap-6">
                          {/* Text Content - 3/5 width */}
                          <div className="flex-[3]">
                            <div className="flex justify-between items-start mb-2">
                              <p className="text-gray-500 text-sm font-medium bg-[#f3f4f6] px-3 py-1 rounded-full">
                                {item.period}
                              </p>
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-1">
                              {item.company}
                            </h3>

                            <p className="text-gray-700 font-medium mb-3">
                              {item.role} | {item.location}
                            </p>

                            <div className="space-y-2 mb-4">
                              {item.description
                                .split('.')
                                .filter((sentence) => sentence.trim())
                                .map((sentence, sentenceIndex) => (
                                  <div
                                    key={sentenceIndex}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="text-[#84a59d] text-sm mt-1.5">
                                      •
                                    </span>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                      {sentence.trim()}.
                                    </p>
                                  </div>
                                ))}
                            </div>

                            {item.skills && (
                              <div className="flex flex-wrap gap-2">
                                {item.skills.map((skill, skillIndex) => (
                                  <span
                                    key={skillIndex}
                                    className="bg-[#e8e8e4] text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Image Content - 2/5 width */}
                          <div className="flex-[2] min-w-0 hidden sm:flex items-center justify-center">
                            {item.images && item.images.length > 0 ? (
                              <div className="w-full h-60 overflow-hidden rounded-xl">
                                <CarouselCustomNavigation
                                  images={item.images}
                                  altPrefix={item.company}
                                />
                              </div>
                            ) : (
                              <a
                                href={item.imageLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full min-w-0 relative rounded-lg overflow-hidden cursor-pointer shadow-md h-60"
                              >
                                <Image
                                  src={item.image}
                                  alt={`${item.company}`}
                                  fill
                                  loading="lazy"
                                  className="object-cover"
                                />
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {extracurricularsList.map((item, index) => (
                      <motion.div
                        key={index}
                        className="relative pl-24 pr-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.3,
                          ease: 'easeOut',
                        }}
                      >
                        {/* Timeline Icon */}
                        <div className="absolute left-4 top-0">
                          <div className="w-16 h-16 rounded-full bg-white shadow-lg border-4 border-slate-300 flex items-center justify-center z-10 overflow-hidden">
                            {item.image ? (
                              <a
                                href={item.imageLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-full relative block rounded-full overflow-hidden"
                              >
                                <Image
                                  src={item.image}
                                  alt={`${item.organization} logo`}
                                  fill
                                  loading="lazy"
                                  className="object-cover"
                                />
                              </a>
                            ) : (
                              <div className="w-8 h-8 bg-[#84a59d] rounded-full flex items-center justify-center">
                                <MdLocationOn className="text-white text-lg" />
                              </div>
                            )}
                          </div>
                        </div>

                        {index < extracurricularsList.length - 1 && (
                          <div
                            className="absolute left-12 top-16 w-0.5 bg-[#d1d5db] z-0"
                            style={{ height: 'calc(100% - 32px)' }}
                          />
                        )}

                        <div className="flex-1 pb-12 flex gap-6">
                          <div className="flex-[3]">
                            <div className="flex justify-between items-start mb-2">
                              <p className="text-gray-500 text-sm font-medium bg-[#f3f4f6] px-3 py-1 rounded-full">
                                {item.period}
                              </p>
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-1">
                              {item.organization}
                            </h3>

                            <p className="text-gray-700 font-medium mb-3">
                              {item.role} | {item.location}
                            </p>

                            <div className="space-y-2 mb-4">
                              {item.description
                                .split('.')
                                .filter((sentence) => sentence.trim())
                                .map((sentence, sentenceIndex) => (
                                  <div
                                    key={sentenceIndex}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="text-[#84a59d] text-sm mt-1.5">
                                      •
                                    </span>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                      {sentence.trim()}.
                                    </p>
                                  </div>
                                ))}
                            </div>

                            {item.skills && (
                              <div className="flex flex-wrap gap-2">
                                {item.skills.map((skill, skillIndex) => (
                                  <span
                                    key={skillIndex}
                                    className="bg-[#e8e8e4] text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Image Content - 2/5 width */}
                          <div className="flex-[2] min-w-0 hidden sm:flex items-center justify-center">
                            {item.images && item.images.length > 0 ? (
                              <div className="w-full h-60 overflow-hidden rounded-xl">
                                <CarouselCustomNavigation
                                  images={item.images}
                                  altPrefix={item.organization}
                                />
                              </div>
                            ) : item.image ? (
                              <a
                                href={item.imageLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full min-w-0 relative rounded-lg overflow-hidden cursor-pointer shadow-md h-60"
                              >
                                <Image
                                  src={item.image}
                                  alt={`${item.organization}`}
                                  fill
                                  loading="lazy"
                                  className="object-cover"
                                />
                              </a>
                            ) : null}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ExperienceSection;
