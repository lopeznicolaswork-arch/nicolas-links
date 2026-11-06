import React from 'react';

interface LayeredLandscapeProps {
  isDark: boolean;
}

export const LayeredLandscape: React.FC<LayeredLandscapeProps> = ({ isDark }) => {
  return (
    <div
      aria-hidden="true"
      className="absolute top-0 left-0 right-0 h-[460px] sm:h-[540px] lg:h-[620px] pointer-events-none overflow-hidden -z-10 select-none transition-colors duration-300"
    >
      <svg
        viewBox="0 0 1440 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          {/* Dark Mode Gradients */}
          <linearGradient id="dark-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e344a" />
            <stop offset="45%" stopColor="#152636" />
            <stop offset="100%" stopColor="#0e1822" />
          </linearGradient>

          {/* Light Mode Gradients */}
          <linearGradient id="light-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="40%" stopColor="#e0e7ff" />
            <stop offset="100%" stopColor="#fef3c7" />
          </linearGradient>
        </defs>

        {/* 1. Sky Canvas with marked contrast */}
        <rect
          width="1440"
          height="500"
          fill={isDark ? 'url(#dark-sky)' : 'url(#light-sky)'}
        />

        {/* 2. Distant Hills (Layer 1) */}
        <path
          d="M0,230 C200,160 380,250 560,190 C760,120 980,240 1200,170 C1320,130 1390,180 1440,195 L1440,500 L0,500 Z"
          fill={isDark ? '#172738' : '#c7d2fe'}
          fillOpacity={isDark ? '0.95' : '0.75'}
          className="transition-colors duration-300"
        />

        {/* 3. Middle Dunes / Mountains (Layer 2 - Marked contrast layer) */}
        <path
          d="M0,290 C180,220 340,320 540,260 C780,190 980,310 1220,240 C1340,200 1400,260 1440,270 L1440,500 L0,500 Z"
          fill={isDark ? '#101a26' : '#93c5fd'}
          fillOpacity={isDark ? '0.98' : '0.85'}
          className="transition-colors duration-300"
        />

        {/* 4. Foreground Earth Curve (Layer 3 - Seamless blend into body background) */}
        <path
          d="M0,370 C280,290 620,260 960,300 C1160,320 1340,360 1440,380 L1440,500 L0,500 Z"
          fill={isDark ? '#090d14' : '#f8fafc'}
          className="transition-colors duration-300"
        />
      </svg>

      {/* Smooth bottom fade into body canvas */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent ${
          isDark ? 'to-[#090d14]' : 'to-slate-50'
        }`}
      ></div>
    </div>
  );
};
