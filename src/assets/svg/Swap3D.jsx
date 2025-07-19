import React from 'react';

const Swap3D = (props) => (
  <svg
    width={props.size || 120}
    height={props.size || 120}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <radialGradient id="swap3d_bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#B1743C" />
      </radialGradient>
      <linearGradient id="swap3d_coin1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFF6C3" />
        <stop offset="100%" stopColor="#E2A23C" />
      </linearGradient>
      <linearGradient id="swap3d_coin2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#B3D0FF" />
        <stop offset="100%" stopColor="#0033AD" />
      </linearGradient>
      <filter id="swap3d_shadow" x="0" y="0" width="120" height="120" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#B1743C" floodOpacity="0.18" />
      </filter>
    </defs>
    {/* Background ellipse for 3D effect */}
    <ellipse cx="60" cy="60" rx="54" ry="54" fill="url(#swap3d_bg)" filter="url(#swap3d_shadow)" />
    {/* Coin 1 */}
    <ellipse cx="44" cy="70" rx="18" ry="18" fill="url(#swap3d_coin1)" stroke="#B1743C" strokeWidth="2" />
    {/* Coin 2 */}
    <ellipse cx="76" cy="50" rx="14" ry="14" fill="url(#swap3d_coin2)" stroke="#0033AD" strokeWidth="2" />
    {/* Circular arrows */}
    <path d="M60 80c-10 0-18-8-18-18" stroke="#B1743C" strokeWidth="2.5" fill="none" markerEnd="url(#arrowhead)" />
    <path d="M60 40c10 0 18 8 18 18" stroke="#0033AD" strokeWidth="2.5" fill="none" markerEnd="url(#arrowhead2)" />
    <defs>
      <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L6,3 L0,6 L2,3 Z" fill="#B1743C" />
      </marker>
      <marker id="arrowhead2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L6,3 L0,6 L2,3 Z" fill="#0033AD" />
      </marker>
    </defs>
  </svg>
);

export default Swap3D; 