import React from 'react';

const Chains3D = (props) => (
  <svg
    width={props.size || 120}
    height={props.size || 120}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <radialGradient id="chains3d_bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#B1743C" />
      </radialGradient>
      <linearGradient id="chains3d_ring1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFF6C3" />
        <stop offset="100%" stopColor="#E2A23C" />
      </linearGradient>
      <linearGradient id="chains3d_ring2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#B3D0FF" />
        <stop offset="100%" stopColor="#0033AD" />
      </linearGradient>
      <linearGradient id="chains3d_ring3" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#00ffa3" />
        <stop offset="100%" stopColor="#008a5a" />
      </linearGradient>
      <filter id="chains3d_shadow" x="0" y="0" width="120" height="120" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#B1743C" floodOpacity="0.18" />
      </filter>
    </defs>
    {/* Background ellipse for 3D effect */}
    <ellipse cx="60" cy="60" rx="54" ry="54" fill="url(#chains3d_bg)" filter="url(#chains3d_shadow)" />
    {/* Interlinked rings */}
    <g>
      <ellipse cx="50" cy="70" rx="16" ry="16" fill="none" stroke="url(#chains3d_ring1)" strokeWidth="6" />
      <ellipse cx="70" cy="70" rx="16" ry="16" fill="none" stroke="url(#chains3d_ring2)" strokeWidth="6" />
      <ellipse cx="60" cy="54" rx="16" ry="16" fill="none" stroke="url(#chains3d_ring3)" strokeWidth="6" />
    </g>
    {/* Overlap highlights */}
    <ellipse cx="60" cy="54" rx="8" ry="8" fill="#fff" opacity="0.12" />
  </svg>
);

export default Chains3D; 