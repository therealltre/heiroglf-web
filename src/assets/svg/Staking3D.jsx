import React from 'react';

const Staking3D = (props) => (
  <svg
    width={props.size || 120}
    height={props.size || 120}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <radialGradient id="staking3d_bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#B1743C" />
      </radialGradient>
      <linearGradient id="staking3d_coin" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFF6C3" />
        <stop offset="100%" stopColor="#E2A23C" />
      </linearGradient>
      <linearGradient id="staking3d_plant" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#00ffa3" />
        <stop offset="100%" stopColor="#008a5a" />
      </linearGradient>
      <filter id="staking3d_shadow" x="0" y="0" width="120" height="120" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#B1743C" floodOpacity="0.18" />
      </filter>
    </defs>
    {/* Background ellipse for 3D effect */}
    <ellipse cx="60" cy="60" rx="54" ry="54" fill="url(#staking3d_bg)" filter="url(#staking3d_shadow)" />
    {/* Coin stack */}
    <ellipse cx="60" cy="80" rx="22" ry="10" fill="url(#staking3d_coin)" stroke="#B1743C" strokeWidth="2" />
    <ellipse cx="60" cy="70" rx="18" ry="8" fill="url(#staking3d_coin)" stroke="#B1743C" strokeWidth="1.5" />
    <ellipse cx="60" cy="62" rx="14" ry="6" fill="url(#staking3d_coin)" stroke="#B1743C" strokeWidth="1" />
    {/* Plant or upward arrow */}
    <g>
      <path d="M60 62 Q62 54 66 50" stroke="url(#staking3d_plant)" strokeWidth="3" fill="none" />
      <ellipse cx="66" cy="50" rx="3" ry="6" fill="url(#staking3d_plant)" />
      <path d="M60 62 Q58 56 54 52" stroke="url(#staking3d_plant)" strokeWidth="2" fill="none" />
      <ellipse cx="54" cy="52" rx="2" ry="4" fill="url(#staking3d_plant)" />
    </g>
    {/* Upward arrow for APY */}
    <g>
      <path d="M60 70 v-12" stroke="#00ffa3" strokeWidth="2.5" />
      <polygon points="60,56 64,62 56,62" fill="#00ffa3" />
    </g>
  </svg>
);

export default Staking3D; 