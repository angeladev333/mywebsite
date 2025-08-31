'use client';
import React, { useState } from 'react';
import Card from '../components/ui/card';
import HoverTitle from '../components/ui/hoverTitle';
import { IoMdArrowDropright } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

function EducationSection() {
  const educationList = [
    {
      period: 'incoming Winter 2026',
      school: 'City University of Hong Kong (CityUHK)',
      program: 'Exchange Student',
    },
    {
      period: 'April 2025 - August 2025',
      school: 'Science Tokyo (prev. Tokyo Institute of Technology)',
      program: 'Exchange Student - Department of Mathematics and Computing',
      scholarships: '¥400,000',
      courses:
        'Statistics Analysis Learning, Advanced Machine Learning, Computer Vision, Software Development Methodologies',
    },
    {
      period: 'September 2022 - April 2027 (expected)',
      school: 'University of Waterloo',
      program: 'Honors Computer Science Co-op',
      scholarships: '$14,000',
      specialization: 'Artificial Intelligence',
      minor: 'Computational Mathematics',
      courses:
        'Applied Cryptography, Operating Systems, Object-Oriented Software Development',
    },
    // {
    //   period: 'Graduated on June 2022',
    //   school: 'Earl Haig Secondary School',
    //   program: 'Piano Major',
    //   activities:
    //     'Infinity Math Club (President), Chess Club (Secretary), Choir',
    //   awards:
    //     'Euclid and Fryer School Champion, Math and Chemistry Graduating Awards',
    // },
  ];

  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovering, setIsHovering] = useState(true);

  return (
    <div
      className="flex flex-col gap-6 py-24 px-4"
      id="education"
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
            title="Education"
            emojiIcon="૮₍´˶• . • ⑅ ₎ა"
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
            <Card className="bg-[#f7ede2] space-y-8 py-10">
              {educationList.map((edu, index) => (
                <motion.div
                  key={index}
                  className="ml-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.3,
                    ease: 'easeOut',
                  }}
                >
                  <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {edu.school}
                  </h3>
                  <p className="text-gray-700 font-medium mb-1">
                    {edu.program}
                  </p>
                  {edu.scholarships && (
                    <p className="text-gray-700 mb-1">
                      Scholarships: {edu.scholarships}
                    </p>
                  )}
                  {edu.specialization && (
                    <p className="text-gray-700 mb-1">
                      Specialization: {edu.specialization}
                    </p>
                  )}
                  {edu.minor && (
                    <p className="text-gray-700 mb-2">Minor: {edu.minor}</p>
                  )}
                  {edu.courses && (
                    <p className="text-gray-700">
                      Relevant courses: {edu.courses}
                    </p>
                  )}
                </motion.div>
              ))}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default EducationSection;
