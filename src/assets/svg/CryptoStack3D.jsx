import React from 'react';

// Gradients and rim for coins
const defs = (
  <defs>
    <radialGradient id="coinShadow" cx="50%" cy="60%" r="60%">
      <stop offset="0%" stopColor="#000" stopOpacity="0.18" />
      <stop offset="100%" stopColor="#000" stopOpacity="0" />
    </radialGradient>
    <linearGradient id="coinGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ffe7b2" />
      <stop offset="100%" stopColor="#b1743c" />
    </linearGradient>
    <linearGradient id="coinSilver" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#e0e7ef" />
      <stop offset="100%" stopColor="#8a99a8" />
    </linearGradient>
    <linearGradient id="coinBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#b3d0ff" />
      <stop offset="100%" stopColor="#0033ad" />
    </linearGradient>
    <linearGradient id="coinGreen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#baffd0" />
      <stop offset="100%" stopColor="#00ffa3" />
    </linearGradient>
    <linearGradient id="coinBlack" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#444" />
      <stop offset="100%" stopColor="#23292f" />
    </linearGradient>
  </defs>
);

// Coin symbol SVGs
const symbols = {
  BTC: (
    <text x="50" y="60" textAnchor="middle" fontSize="38" fontWeight="bold" fill="#fff" fontFamily="monospace">₿</text>
  ),
  ETH: (
    <g>
      <polygon points="50,32 62,56 50,80 38,56" fill="#fff" opacity="0.9" />
      <polygon points="50,40 58,56 50,72 42,56" fill="#8c8c8c" opacity="0.7" />
    </g>
  ),
  SOL: (
    <g>
      <rect x="38" y="48" width="24" height="5" rx="2.5" fill="#9945ff" />
      <rect x="38" y="58" width="24" height="5" rx="2.5" fill="#19fb9b" />
      <rect x="38" y="68" width="24" height="5" rx="2.5" fill="#a1ffce" />
    </g>
  ),
  ADA: (
    <g>
      <circle cx="50" cy="60" r="8" fill="#fff" />
      <circle cx="50" cy="44" r="2.5" fill="#fff" />
      <circle cx="50" cy="76" r="2.5" fill="#fff" />
      <circle cx="38" cy="60" r="2.5" fill="#fff" />
      <circle cx="62" cy="60" r="2.5" fill="#fff" />
    </g>
  ),
  XRP: (
    <g>
      <path d="M42 52 Q50 60 58 52" stroke="#fff" strokeWidth="3" fill="none" />
      <path d="M42 68 Q50 60 58 68" stroke="#fff" strokeWidth="3" fill="none" />
    </g>
  ),
};

// Coin color mapping
const coinFills = {
  BTC: 'url(#coinGold)',
  ETH: 'url(#coinSilver)',
  SOL: 'url(#coinGreen)',
  ADA: 'url(#coinBlue)',
  XRP: 'url(#coinBlack)',
};

const defaultStack = ['XRP', 'ADA', 'SOL', 'ETH']; // Bottom to top (not including the floating coin)
const floatingCoin = 'BTC';

const CryptoStack3D = ({ size = 160, stack = defaultStack, topCoin = floatingCoin }) => {
  // SVG is 100x100, coins are ellipses for perspective
  // Stack coins
  const stackCoins = stack.map((sym, i) => {
    const y = 80 - i * 10; // stack from bottom up
    const shadowY = y + 7;
    return (
      <g key={sym}>
        {/* Shadow under each coin */}
        <ellipse cx="50" cy={shadowY} rx="22" ry="6" fill="url(#coinShadow)" />
        {/* Coin body */}
        <ellipse
          cx="50"
          cy={y}
          rx="22"
          ry="12"
          fill={coinFills[sym]}
          stroke="#fff"
          strokeWidth="2.5"
        />
        {/* Rim */}
        <ellipse
          cx="50"
          cy={y}
          rx="22"
          ry="12"
          fill="none"
          stroke="#fff"
          strokeWidth="1.5"
          opacity="0.25"
        />
        {/* Symbol */}
        <g transform={`translate(0,${y - 30})`}>
          {symbols[sym]}
        </g>
      </g>
    );
  });

  // Floating coin (top, about to stack)
  const floatY = 35;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      {defs}
      {/* Stack coins */}
      {stackCoins}
      {/* Shadow under floating coin */}
      <ellipse cx="50" cy={floatY + 17} rx="20" ry="7" fill="url(#coinShadow)" />
      {/* Floating coin */}
      <ellipse
        cx="50"
        cy={floatY}
        rx="20"
        ry="11"
        fill={coinFills[topCoin]}
        stroke="#fff"
        strokeWidth="2.5"
      />
      {/* Rim */}
      <ellipse
        cx="50"
        cy={floatY}
        rx="20"
        ry="11"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        opacity="0.25"
      />
      {/* Symbol on floating coin */}
      <g transform={`translate(0,${floatY - 30})`}>
        {symbols[topCoin]}
      </g>
    </svg>
  );
};

export default CryptoStack3D; 