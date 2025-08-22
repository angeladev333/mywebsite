import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface ClickIconProps {
  icon: IconType;
  href: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  className?: string;
  iconSize?: string;
  external?: boolean;
}

function ClickIcon({
  icon: Icon,
  href,
  hoverBgColor = 'hover:bg-[#e8e8e4]',
  hoverTextColor = 'hover:text-[#84a59d]',
  className = '',
  iconSize = 'w-6 h-6',
  external = false,
}: ClickIconProps) {
  const iconElement = (
    <div
      className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-300 ${hoverBgColor} ${className}`}
    >
      <Icon
        className={`${iconSize} text-gray-700 ${hoverTextColor} transition-colors duration-300`}
      />
    </div>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        {iconElement}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {iconElement}
    </Link>
  );
}

export default ClickIcon;
