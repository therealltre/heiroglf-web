import React from 'react';

const Wallet3D = (props) => (
  <svg
    width={props.size || 120}
    height={props.size || 120}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="walletBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#B1743C" />
        <stop offset="100%" stopColor="#8C5A2B" />
      </linearGradient>
      <linearGradient id="walletFlap" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#C89A6B" />
        <stop offset="100%" stopColor="#B1743C" />
      </linearGradient>
      <linearGradient id="walletCard" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#E5D1B8" />
        <stop offset="100%" stopColor="#B1743C" />
      </linearGradient>
      <filter id="walletShadow" x="0" y="0" width="120" height="120" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#B1743C" floodOpacity="0.18" />
      </filter>
    </defs>
    {/* Wallet body */}
    <rect x="24" y="44" width="72" height="40" rx="12" fill="url(#walletBody)" filter="url(#walletShadow)" />
    {/* Wallet flap */}
    <rect x="24" y="36" width="72" height="18" rx="8" fill="url(#walletFlap)" />
    {/* Card sticking out */}
    <rect x="36" y="28" width="32" height="12" rx="3" fill="url(#walletCard)" />
    {/* Button */}
    <circle cx="88" cy="54" r="4" fill="#8C5A2B" stroke="#E5D1B8" strokeWidth="1.5" />
    {/* Wallet body highlight */}
    <rect x="28" y="48" width="64" height="8" rx="4" fill="#E5D1B8" opacity="0.12" />
  </svg>
);

export default Wallet3D; 