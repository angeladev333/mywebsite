'use client';
import React, { useState } from 'react';
import Card from '../components/ui/card';
import HoverTitle from '../components/ui/hoverTitle';
import { IoMdArrowDropright } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { MdWork, MdLocationOn } from 'react-icons/md';

function ExperienceSection() {
  const experienceList = [
    {
      company: 'MedMe Health',
      role: 'Software Engineering Intern',
      location: 'Toronto, ON',
      period: 'May 2024 - Aug 2024, Jan 2025 - Apr 2025',
      description:
        'Built an AI-powered tool that transcribes pharmacy appointments into structured medical forms, cutting documentation time by 80% and saving 400+ hours weekly across 1000+ pharmacies.',
      skills: ['React', 'Node.js', 'AI/ML', 'Healthcare Tech'],
    },
    {
      company: 'Blum Learning Company',
      role: 'Junior Software Engineer',
      location: 'Toronto, ON',
      period: 'May 2023 - Aug 2023',
      description:
        'Built an AI-powered tool that transcribes pharmacy appointments into structured medical forms, cutting documentation time by 80% and saving 400+ hours weekly across 1000+ pharmacies.',
      skills: ['Python', 'Django', 'PostgreSQL', 'AWS'],
    },
    {
      company: 'Google',
      role: 'CSSI Scholar',
      location: 'Remote',
      period: 'July 2022 - Aug 2022',
      description:
        'Conducted 10+ individual coding projects and delivered a collaborative capstone presentation to Google engineers',
      skills: ['JavaScript', 'HTML/CSS', 'Firebase', 'Git'],
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
      skills: ['React', 'Express.js', 'MongoDB', 'Socket.io'],
    },
    {
      organization: 'UW Women in Computer Science',
      role: 'Big Data Committee Member',
      location: 'Waterloo, ON',
      period: 'Sep 2022 - Apr 2023',
      description:
        'Analyzed university enrollment data and created visualizations to identify trends in CS program demographics and retention rates.',
      skills: ['Python', 'Pandas', 'Matplotlib', 'Data Analysis'],
    },
    {
      organization: 'Infinity Math Club',
      role: 'President',
      location: 'Toronto, ON',
      period: 'Sep 2021 - June 2022',
      description:
        'Led weekly problem-solving sessions for 50+ students, organized math competitions, and mentored junior students in contest mathematics.',
      skills: ['Leadership', 'Public Speaking', 'Mathematics', 'Mentoring'],
    },
  ];

  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovering, setIsHovering] = useState(true);
  const [activeTab, setActiveTab] = useState<'work' | 'extracurriculars'>(
    'work'
  );

  const currentList =
    activeTab === 'work' ? experienceList : extracurricularsList;

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
            title="Experience"
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
            {/* Toggle Selector */}
            <div className="flex justify-center mb-6">
              <div className="relative bg-gray-100 rounded-full px-4 py-1 grid grid-cols-2 w-1/2">
                {/* Animated Background */}
                <motion.div
                  className="absolute top-1 bg-[#f7ede2] rounded-full shadow-md"
                  animate={{
                    x: activeTab === 'work' ? '0%' : '100%',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                  style={{
                    height: 'calc(100% - 8px)',
                    width: '50%',
                  }}
                />

                {/* Work Button */}
                <button
                  onClick={() => setActiveTab('work')}
                  className={`relative z-10 flex items-center justify-center gap-2 py-3 rounded-full transition-colors duration-300 ${
                    activeTab === 'work'
                      ? 'text-gray-800'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <MdWork className="text-lg" />
                  <span className="font-medium">Work</span>
                </button>

                {/* Extracurriculars Button */}
                <button
                  onClick={() => setActiveTab('extracurriculars')}
                  className={`relative z-10 flex items-center justify-center gap-2 py-3 rounded-full transition-colors duration-300 ${
                    activeTab === 'extracurriculars'
                      ? 'text-gray-800'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <MdLocationOn className="text-lg" />
                  <span className="font-medium">Extracurriculars</span>
                </button>
              </div>
            </div>

            {/* Content */}
            <Card className="bg-[#f7ede2] space-y-8 py-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {currentList.map((item, index) => (
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
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-gray-500 text-sm">{item.period}</p>
                        <p className="text-gray-500 text-sm flex items-center gap-1">
                          <MdLocationOn className="text-xs" />
                          {item.location}
                        </p>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {activeTab === 'work'
                          ? (item as (typeof experienceList)[0]).company
                          : (item as (typeof extracurricularsList)[0])
                              .organization}
                      </h3>
                      <p className="text-gray-700 font-medium mb-3">
                        {item.role}
                      </p>
                      <p className="text-gray-700 mb-3">{item.description}</p>
                      {item.skills && (
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ExperienceSection;
