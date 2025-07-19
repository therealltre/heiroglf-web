import React from 'react';

const AI3D = (props) => (
  <svg
    width={props.size || 120}
    height={props.size || 120}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <radialGradient id="ai3d_bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#B1743C" />
      </radialGradient>
      <linearGradient id="ai3d_coin" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFF6C3" />
        <stop offset="100%" stopColor="#E2A23C" />
      </linearGradient>
      <linearGradient id="ai3d_circuit" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#B3D0FF" />
        <stop offset="100%" stopColor="#0033AD" />
      </linearGradient>
      <filter id="ai3d_shadow" x="0" y="0" width="120" height="120" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#B1743C" floodOpacity="0.18" />
      </filter>
    </defs>
    {/* Background ellipse for 3D effect */}
    <ellipse cx="60" cy="60" rx="54" ry="54" fill="url(#ai3d_bg)" filter="url(#ai3d_shadow)" />
    {/* Coin */}
    <ellipse cx="60" cy="70" rx="28" ry="28" fill="url(#ai3d_coin)" stroke="#B1743C" strokeWidth="2.5" />
    {/* Circuit/brain pattern */}
    <g>
      <ellipse cx="60" cy="70" rx="18" ry="14" fill="#fff" opacity="0.12" />
      <path d="M60 56 Q66 60 60 64 Q54 68 60 72 Q66 76 60 80" stroke="url(#ai3d_circuit)" strokeWidth="2.5" fill="none" />
      <circle cx="60" cy="56" r="2.5" fill="#B3D0FF" />
      <circle cx="60" cy="64" r="2.5" fill="#0033AD" />
      <circle cx="60" cy="72" r="2.5" fill="#B3D0FF" />
      <circle cx="60" cy="80" r="2.5" fill="#0033AD" />
    </g>
    {/* Chip lines */}
    <g stroke="#0033AD" strokeWidth="1.2">
      <line x1="60" y1="42" x2="60" y2="56" />
      <line x1="60" y1="80" x2="60" y2="98" />
      <line x1="32" y1="70" x2="42" y2="70" />
      <line x1="78" y1="70" x2="88" y2="70" />
    </g>
  </svg>
);

export default AI3D; 