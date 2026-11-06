import React from 'react';

interface PageBackgroundProps {
  isDark: boolean;
}

export const PageBackground: React.FC<PageBackgroundProps> = ({ isDark }) => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none transition-colors duration-300"
    >
      {/* 1. Full-Page Multi-Toned Vertical Gradient (Never a single flat color) */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-b from-[#182c3f] via-[#0e1925] via-40% via-[#0b131d] via-70% to-[#070b10]'
            : 'bg-gradient-to-b from-[#dbeafe] via-[#f1f5f9] via-35% via-[#f8fafc] via-75% to-[#e2e8f0]'
        }`}
      />

      {/* 2. Layered Landscape Hills at the Top (Hero Zone) */}
      <div className="absolute top-0 left-0 right-0 h-[460px] sm:h-[540px] lg:h-[620px]">
        <svg
          viewBox="0 0 1440 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            {/* Dark Mode Gradients */}
            <linearGradient id="hero-sky-dark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1f374e" />
              <stop offset="50%" stopColor="#162939" />
              <stop offset="100%" stopColor="#0f1c27" />
            </linearGradient>

            {/* Light Mode Gradients */}
            <linearGradient id="hero-sky-light" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="45%" stopColor="#c7d2fe" />
              <stop offset="100%" stopColor="#fed7aa" />
            </linearGradient>

            <linearGradient id="dune-1-dark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1b2f42" />
              <stop offset="100%" stopColor="#132332" />
            </linearGradient>

            <linearGradient id="dune-2-dark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#121e2a" />
              <stop offset="100%" stopColor="#0b141e" />
            </linearGradient>
          </defs>

          {/* Sky layer */}
          <rect
            width="1440"
            height="500"
            fill={isDark ? 'url(#hero-sky-dark)' : 'url(#hero-sky-light)'}
          />

          {/* Distant Hills (Marked Contrast Layer 1) */}
          <path
            d="M0,210 C220,130 400,240 580,170 C780,100 1000,230 1220,150 C1340,110 1400,160 1440,180 L1440,500 L0,500 Z"
            fill={isDark ? 'url(#dune-1-dark)' : '#a5b4fc'}
            fillOpacity={isDark ? '0.98' : '0.85'}
          />

          {/* Middle Dunes (Marked Contrast Layer 2) */}
          <path
            d="M0,270 C190,190 350,310 560,240 C800,160 1000,290 1240,220 C1350,180 1410,240 1440,250 L1440,500 L0,500 Z"
            fill={isDark ? 'url(#dune-2-dark)' : '#60a5fa'}
            fillOpacity={isDark ? '0.95' : '0.80'}
          />

          {/* Foreground Earth Curve (Layer 3) */}
          <path
            d="M0,350 C300,270 640,240 980,280 C1180,300 1350,340 1440,360 L1440,500 L0,500 Z"
            fill={isDark ? '#0c1622' : '#f1f5f9'}
          />
        </svg>

        {/* Smooth transition from hero dunes into mid-page gradient */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent ${
            isDark ? 'to-[#0e1925]' : 'to-[#f1f5f9]'
          }`}
        />
      </div>

      {/* 3. Mid-Page Atmospheric Colored Ambient Bands (Behind Nodux & Podiums) */}
      <div className="absolute top-[680px] left-0 right-0 h-[800px] overflow-hidden">
        {/* Soft Blue/Cobalt Ambient Band (Behind Nodux Ecosystem) */}
        <div
          className={`absolute -top-20 left-1/4 w-[600px] h-[500px] rounded-full blur-[140px] opacity-40 ${
            isDark ? 'bg-blue-600/15' : 'bg-blue-200/50'
          }`}
        />
        {/* Subtle Purple/Indigo Ambient Band (Behind Commercial OS) */}
        <div
          className={`absolute top-60 right-10 w-[550px] h-[450px] rounded-full blur-[140px] opacity-35 ${
            isDark ? 'bg-purple-600/15' : 'bg-indigo-200/50'
          }`}
        />
      </div>

      {/* 4. Lower-Page Warm Amber Presence (Behind Podiums & Hackathons) */}
      <div className="absolute top-[1480px] left-0 right-0 h-[700px] overflow-hidden">
        <div
          className={`absolute top-10 left-10 w-[500px] h-[450px] rounded-full blur-[140px] opacity-25 ${
            isDark ? 'bg-amber-600/15' : 'bg-amber-200/40'
          }`}
        />
        <div
          className={`absolute top-40 right-1/4 w-[600px] h-[500px] rounded-full blur-[150px] opacity-30 ${
            isDark ? 'bg-sky-600/15' : 'bg-sky-200/45'
          }`}
        />
      </div>

      {/* 5. Subtle Topographic Grid Mesh Overlay (Provides tactile grain so no flat void exists) */}
      <div
        className={`absolute inset-0 opacity-[0.035] ${
          isDark
            ? 'bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]'
        } bg-[size:40px_40px]`}
      />
    </div>
  );
};
