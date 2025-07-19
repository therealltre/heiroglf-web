import React from 'react';

const Bitcoin3D = (props) => (
  <svg
    width={props.size || 120}
    height={props.size || 120}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <radialGradient id="btc3d_bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#B1743C" />
      </radialGradient>
      <linearGradient id="btc3d_face" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFF6C3" />
        <stop offset="100%" stopColor="#E2A23C" />
      </linearGradient>
      <filter id="btc3d_shadow" x="0" y="0" width="120" height="120" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#B1743C" floodOpacity="0.25" />
      </filter>
    </defs>
    <ellipse cx="60" cy="60" rx="54" ry="54" fill="url(#btc3d_bg)" filter="url(#btc3d_shadow)" />
    <ellipse cx="60" cy="60" rx="44" ry="44" fill="url(#btc3d_face)" />
    <g>
      <path d="M70 80c8-2 12-8 10-16-2-8-8-10-16-8l-2-8 6-2-2-8-6 2-2-8-8 2 2 8-6 2 2 8 6-2 2 8c-8 2-12 8-10 16 2 8 8 10 16 8l2 8 8-2-2-8 6-2-2-8-6 2-2-8z" fill="#F7931A" stroke="#B1743C" strokeWidth="2" />
      <text x="60" y="70" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#FFF6C3" fontFamily="monospace">₿</text>
    </g>
  </svg>
);

export default Bitcoin3D; 