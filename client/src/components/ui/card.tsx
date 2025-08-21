import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}

function Card({ children, className = '', props }: CardProps) {
  return (
    <div
      className={`bg-neutral-200 shadow-lg rounded-3xl p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
