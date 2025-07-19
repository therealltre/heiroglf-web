import React from 'react';

const Shield3D = (props) => (
  <svg
    width={props.size || 120}
    height={props.size || 120}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <radialGradient id="shield3d_bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#B1743C" />
      </radialGradient>
      <linearGradient id="shield3d_face" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFF6C3" />
        <stop offset="100%" stopColor="#E2A23C" />
      </linearGradient>
      <filter id="shield3d_shadow" x="0" y="0" width="120" height="120" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#B1743C" floodOpacity="0.22" />
      </filter>
    </defs>
    {/* Background ellipse for 3D effect */}
    <ellipse cx="60" cy="60" rx="54" ry="54" fill="url(#shield3d_bg)" filter="url(#shield3d_shadow)" />
    {/* Shield body */}
    <path
      d="M60 32c-12 6-24 8-24 8v18c0 18 16 30 24 32 8-2 24-14 24-32V40s-12-2-24-8z"
      fill="url(#shield3d_face)"
      stroke="#B1743C"
      strokeWidth="2.5"
      />
    {/* Lock icon in the center */}
    <g>
      <rect x="50" y="60" width="20" height="18" rx="5" fill="#FFD700" stroke="#B1743C" strokeWidth="1.5" />
      <rect x="56" y="66" width="8" height="6" rx="2" fill="#FFF6C3" />
      <path d="M54 66v-4a6 6 0 0 1 12 0v4" stroke="#B1743C" strokeWidth="2" fill="none" />
      <circle cx="60" cy="72" r="1.5" fill="#B1743C" />
    </g>
  </svg>
);

export default Shield3D; 