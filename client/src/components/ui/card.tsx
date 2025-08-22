import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}

function Card({ children, className = '', props }: CardProps) {
  return (
    <div
      className={`shadow-lg rounded-3xl p-4 hover:scale-102 transition-transform duration-300 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
