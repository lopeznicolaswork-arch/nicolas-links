import React from 'react';

export const HillsBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute top-0 left-0 right-0 h-[480px] sm:h-[580px] lg:h-[640px] pointer-events-none overflow-hidden -z-10 select-none"
    >
      {/* Exact uploaded reference background image (layered dark dunes & midnight hills) */}
      <img
        src="/background-hills.png"
        alt=""
        className="w-full h-full object-cover object-top opacity-95"
      />

      {/* Seamless smooth bottom fade into solid #0d0f12 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0f12]/30 to-[#0d0f12]"></div>

      {/* Subtle top vignette for depth */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0d0f12]/40 to-transparent"></div>
    </div>
  );
};
