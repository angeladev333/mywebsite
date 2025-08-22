import React, { useState } from 'react';
import { motion } from 'framer-motion';

function HoverTitle({
  title,
  emojiIcon,
  isHovering,
  setIsHovering,
}: {
  title: string;
  emojiIcon: string;
  isHovering: boolean;
  setIsHovering: (isHovering: boolean) => void;
}) {
  return (
    <div
      //   onMouseEnter={() => setIsHovering(true)}
      //   onMouseLeave={() => setIsHovering(false)}
      className="flex flex-row justify-between items-center"
    >
      <h1 className="text-2xl font-bold ml-4">{title}</h1>
      {isHovering && (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {emojiIcon}
        </motion.h1>
      )}
    </div>
  );
}

export default HoverTitle;
