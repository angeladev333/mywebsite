import React from 'react';
import Card from '../components/ui/card';
import {
  FaGithubAlt,
  FaLinkedin,
  FaRegEnvelope,
  FaDownload,
  FaChevronDown,
} from 'react-icons/fa';
import Image from 'next/image';

function HeroPage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Top Row - Profile and Photo */}
      <div className="grid grid-cols-5 gap-6 min-h-[200px]">
        {/* Profile Card */}
        <div className="col-span-3">
          <Card className="flex items-center justify-between">
            <div className="flex flex-col gap-4">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-green-200 rounded-full px-4 py-2">
                <span className="text-lg">⭐</span>
                <span className="text-gray-700 font-medium">
                  looking for summer 2026 internship
                </span>
              </div>

              {/* Name and Location */}
              <div className="flex flex-col gap-1 ml-4">
                <h1 className="text-3xl font-bold text-gray-800">Angela Xu</h1>
                <p className="text-gray-500 flex items-center">
                  <span>📍</span>
                  toronto, on
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-blue-50 duration-300">
                <FaRegEnvelope className="w-6 h-6 text-gray-700 hover:text-blue-500 transition-colors duration-300" />
              </div>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-blue-50 duration-300">
                <FaLinkedin className="w-6 h-6 text-gray-700 hover:text-blue-500 transition-colors duration-300" />
              </div>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-blue-50 duration-300">
                <FaGithubAlt className="w-6 h-6 text-gray-700 hover:text-blue-500 transition-colors duration-300" />
              </div>
            </div>
          </Card>
        </div>

        {/* Photo Card */}
        <div className="col-span-2">
          <div className="overflow-hidden rounded-3xl shadow-lg h-full relative">
            <Image
              src="/assets/profile.jpg"
              alt="profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full">
        <Card className="min-h-[200px]">
          <div className="flex justify-between items-start ml-4">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Constant state of learning and curiosity...
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>
                    Studying @ University of Waterloo & Tokyo Science (Masters)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>
                    Directed Research about C&O, Game Theory @ UWaterloo
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Developing for TechNova, a Tech+ Hackathon</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Hip Hop dance club @ Tokyo Science</span>
                </li>
              </ul>
            </div>
            <div className="text-4xl opacity-50">◊ ◊ ◊ ◊ ◊</div>
          </div>
        </Card>
      </div>

      {/* Action Cards Row */}
      <div className="flex gap-6 items-center">
        {/* Resume Card */}
        <Card className="flex-1 rounded-full px-6 py-4 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="flex items-center justify-between ml-4">
            <span className="text-lg font-semibold text-gray-800">Resume</span>
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <FaDownload className="text-gray-700" />
            </div>
          </div>
        </Card>

        {/* Design Portfolio Card */}
        <Card className="flex-1 rounded-full px-6 py-4 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="flex items-center justify-between ml-4">
            <span className="text-lg font-semibold text-gray-800">
              Design Portfolio
            </span>
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">↗</span>
            </div>
          </div>
        </Card>

        {/* Scroll Down Button */}
        <Card className="rounded-full p-4 w-16 h-16 flex items-center justify-center hover:shadow-xl transition-shadow cursor-pointer">
          <FaChevronDown className="text-gray-600 text-xl" />
        </Card>
      </div>
    </div>
  );
}

export default HeroPage;
