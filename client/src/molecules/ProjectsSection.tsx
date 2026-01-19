import HoverTitle from '@/components/ui/hoverTitle';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdArrowDropright } from 'react-icons/io';

function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovering, setIsHovering] = useState(true);

  return (
    <div
      className="flex flex-col gap-6 pt-24 px-4"
      id="projects"
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
            title="Projects"
            emojiIcon="☆⌒(ゝ。∂)"
            isHovering={isHovering}
            setIsHovering={setIsHovering}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
