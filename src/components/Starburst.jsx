import React from 'react';

const Starburst = ({ className = "" }) => (
  <div
    className={`w-6 h-6 bg-[#A32117] ${className}`}
    style={{
      clipPath:
        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    }}
  />
);

export default Starburst;

