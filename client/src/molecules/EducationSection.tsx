'use client';
import React, { useState } from 'react';
import Card from '../components/ui/card';
import HoverTitle from '../components/ui/hoverTitle';

function EducationSection() {
  const educationList = [
    {
      period: 'April 2025 - August 2025',
      school: 'Science Tokyo (prev. Tokyo Institute of Technology)',
      program: 'Department of Mathematics and Computing ACAP student',
      scholarships: '¥400,000',
      courses:
        'Statistics Analysis Learning, Advanced Machine Learning, Computer Vision, Advanced Topics in AI',
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
    {
      period: 'Graduated on June 2022',
      school: 'Earl Haig Secondary School',
      program: 'Piano Major',
      activities:
        'Infinity Math Club (President), Chess Club (Secretary), Choir',
      awards:
        'Euclid and Fryer School Champion, Math and Chemistry Graduating Awards',
    },
  ];

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="flex flex-col gap-6 py-24"
      id="education"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <HoverTitle
        title="Education"
        emojiIcon="૮₍´˶• . • ⑅ ₎ა"
        isHovering={isHovering}
        setIsHovering={setIsHovering}
      />

      <Card
        className="bg-[#f7ede2] space-y-8"
        // props={{
        //   onMouseEnter: () => setIsHovering(true),
        //   onMouseLeave: () => setIsHovering(false),
        // }}
      >
        {educationList.map((edu, index) => (
          <div key={index} className="ml-4">
            <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {edu.school}
            </h3>
            <p className="text-gray-700 font-medium mb-1">{edu.program}</p>
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
            {edu.activities && (
              <p className="text-gray-700 mb-2">
                Clubs and Societies: {edu.activities}
              </p>
            )}
            {edu.awards && (
              <p className="text-gray-700 mb-2">Awards: {edu.awards}</p>
            )}
            {edu.courses && (
              <p className="text-gray-700">Relevant courses: {edu.courses}</p>
            )}
          </div>
        ))}
      </Card>
    </div>
  );
}

export default EducationSection;
