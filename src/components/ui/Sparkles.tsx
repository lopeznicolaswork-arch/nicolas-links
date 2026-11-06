import React from 'react';

interface SparkleProps {
  children: React.ReactNode;
  className?: string;
}

export const Sparkles: React.FC<SparkleProps> = ({ children, className = '' }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-1 -right-2 text-amber-400 dark:text-amber-300 animate-pulse text-xs select-none"
      >
        ✦
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-1 -left-2 text-sky-400 dark:text-sky-300 animate-pulse text-[10px] select-none delay-150"
      >
        ✧
      </span>
    </span>
  );
};
