import React from 'react';

const Lightning3D = (props) => (
  <svg
    width={props.size || 120}
    height={props.size || 120}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <radialGradient id="lightning3d_bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#B1743C" />
      </radialGradient>
      <linearGradient id="lightning3d_coin" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFF6C3" />
        <stop offset="100%" stopColor="#E2A23C" />
      </linearGradient>
      <linearGradient id="lightning3d_bolt" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fff700" />
        <stop offset="100%" stopColor="#FFD700" />
      </linearGradient>
      <filter id="lightning3d_shadow" x="0" y="0" width="120" height="120" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#B1743C" floodOpacity="0.18" />
      </filter>
    </defs>
    {/* Background ellipse for 3D effect */}
    <ellipse cx="60" cy="60" rx="54" ry="54" fill="url(#lightning3d_bg)" filter="url(#lightning3d_shadow)" />
    {/* Coin */}
    <ellipse cx="60" cy="70" rx="28" ry="28" fill="url(#lightning3d_coin)" stroke="#B1743C" strokeWidth="2.5" />
    {/* Lightning bolt */}
    <path d="M60 52 L68 68 H62 L66 88 L52 64 H58 L54 52 Z" fill="url(#lightning3d_bolt)" stroke="#B1743C" strokeWidth="2" />
  </svg>
);

export default Lightning3D; 