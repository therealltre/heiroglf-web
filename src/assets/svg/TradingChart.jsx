import React from 'react';

const TradingChart = (props) => (
  <svg
    width={props.size || 400}
    height={props.size || 250}
    viewBox="0 0 400 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      {/* Gradients */}
      <linearGradient id="chartBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1A1A1A" />
        <stop offset="100%" stopColor="#0A0A0A" />
      </linearGradient>
      
      <linearGradient id="priceLine" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#B1743C" />
        <stop offset="50%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#B1743C" />
      </linearGradient>
      
      <linearGradient id="volumeBar" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#B1743C" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#B1743C" stopOpacity="0.2" />
      </linearGradient>
      
      <linearGradient id="candlestickGreen" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#00C851" />
        <stop offset="100%" stopColor="#007E33" />
      </linearGradient>
      
      <linearGradient id="candlestickRed" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FF4444" />
        <stop offset="100%" stopColor="#CC0000" />
      </linearGradient>
      
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Background */}
    <rect width="400" height="250" fill="url(#chartBg)" rx="8" ry="8"/>
    
    {/* Grid lines */}
    <g stroke="#333" strokeWidth="0.5" opacity="0.3">
      <line x1="0" y1="50" x2="400" y2="50" />
      <line x1="0" y1="100" x2="400" y2="100" />
      <line x1="0" y1="150" x2="400" y2="150" />
      <line x1="0" y1="200" x2="400" y2="200" />
      <line x1="50" y1="0" x2="50" y2="250" />
      <line x1="100" y1="0" x2="100" y2="250" />
      <line x1="150" y1="0" x2="150" y2="250" />
      <line x1="200" y1="0" x2="200" y2="250" />
      <line x1="250" y1="0" x2="250" y2="250" />
      <line x1="300" y1="0" x2="300" y2="250" />
      <line x1="350" y1="0" x2="350" y2="250" />
    </g>
    
    {/* Volume bars (bottom section) */}
    <g transform="translate(0, 200)">
      <rect x="10" y="0" width="8" height="15" fill="url(#volumeBar)" opacity="0.6" />
      <rect x="25" y="0" width="8" height="25" fill="url(#volumeBar)" opacity="0.8" />
      <rect x="40" y="0" width="8" height="18" fill="url(#volumeBar)" opacity="0.7" />
      <rect x="55" y="0" width="8" height="30" fill="url(#volumeBar)" opacity="0.9" />
      <rect x="70" y="0" width="8" height="22" fill="url(#volumeBar)" opacity="0.7" />
      <rect x="85" y="0" width="8" height="35" fill="url(#volumeBar)" opacity="1" />
      <rect x="100" y="0" width="8" height="28" fill="url(#volumeBar)" opacity="0.8" />
      <rect x="115" y="0" width="8" height="20" fill="url(#volumeBar)" opacity="0.6" />
      <rect x="130" y="0" width="8" height="32" fill="url(#volumeBar)" opacity="0.9" />
      <rect x="145" y="0" width="8" height="26" fill="url(#volumeBar)" opacity="0.8" />
      <rect x="160" y="0" width="8" height="38" fill="url(#volumeBar)" opacity="1" />
      <rect x="175" y="0" width="8" height="24" fill="url(#volumeBar)" opacity="0.7" />
      <rect x="190" y="0" width="8" height="29" fill="url(#volumeBar)" opacity="0.8" />
      <rect x="205" y="0" width="8" height="33" fill="url(#volumeBar)" opacity="0.9" />
      <rect x="220" y="0" width="8" height="27" fill="url(#volumeBar)" opacity="0.8" />
      <rect x="235" y="0" width="8" height="36" fill="url(#volumeBar)" opacity="1" />
      <rect x="250" y="0" width="8" height="31" fill="url(#volumeBar)" opacity="0.9" />
      <rect x="265" y="0" width="8" height="25" fill="url(#volumeBar)" opacity="0.8" />
      <rect x="280" y="0" width="8" height="34" fill="url(#volumeBar)" opacity="0.9" />
      <rect x="295" y="0" width="8" height="28" fill="url(#volumeBar)" opacity="0.8" />
      <rect x="310" y="0" width="8" height="37" fill="url(#volumeBar)" opacity="1" />
      <rect x="325" y="0" width="8" height="30" fill="url(#volumeBar)" opacity="0.9" />
      <rect x="340" y="0" width="8" height="26" fill="url(#volumeBar)" opacity="0.8" />
      <rect x="355" y="0" width="8" height="35" fill="url(#volumeBar)" opacity="1" />
      <rect x="370" y="0" width="8" height="29" fill="url(#volumeBar)" opacity="0.8" />
    </g>
    
    {/* Candlesticks */}
    <g>
      {/* Green candlesticks (bullish) */}
      <rect x="15" y="120" width="6" height="40" fill="url(#candlestickGreen)" />
      <rect x="17" y="110" width="2" height="10" fill="url(#candlestickGreen)" />
      <rect x="17" y="170" width="2" height="10" fill="url(#candlestickGreen)" />
      
      <rect x="35" y="100" width="6" height="50" fill="url(#candlestickGreen)" />
      <rect x="37" y="90" width="2" height="10" fill="url(#candlestickGreen)" />
      <rect x="37" y="160" width="2" height="10" fill="url(#candlestickGreen)" />
      
      <rect x="55" y="80" width="6" height="60" fill="url(#candlestickGreen)" />
      <rect x="57" y="70" width="2" height="10" fill="url(#candlestickGreen)" />
      <rect x="57" y="150" width="2" height="10" fill="url(#candlestickGreen)" />
      
      <rect x="75" y="60" width="6" height="70" fill="url(#candlestickGreen)" />
      <rect x="77" y="50" width="2" height="10" fill="url(#candlestickGreen)" />
      <rect x="77" y="140" width="2" height="10" fill="url(#candlestickGreen)" />
      
      <rect x="95" y="40" width="6" height="80" fill="url(#candlestickGreen)" />
      <rect x="97" y="30" width="2" height="10" fill="url(#candlestickGreen)" />
      <rect x="97" y="130" width="2" height="10" fill="url(#candlestickGreen)" />
      
      <rect x="115" y="20" width="6" height="90" fill="url(#candlestickGreen)" />
      <rect x="117" y="10" width="2" height="10" fill="url(#candlestickGreen)" />
      <rect x="117" y="120" width="2" height="10" fill="url(#candlestickGreen)" />
      
      <rect x="135" y="10" width="6" height="100" fill="url(#candlestickGreen)" />
      <rect x="137" y="0" width="2" height="10" fill="url(#candlestickGreen)" />
      <rect x="137" y="120" width="2" height="10" fill="url(#candlestickGreen)" />
      
      {/* Red candlesticks (bearish) */}
      <rect x="155" y="30" width="6" height="40" fill="url(#candlestickRed)" />
      <rect x="157" y="20" width="2" height="10" fill="url(#candlestickRed)" />
      <rect x="157" y="80" width="2" height="10" fill="url(#candlestickRed)" />
      
      <rect x="175" y="50" width="6" height="30" fill="url(#candlestickRed)" />
      <rect x="177" y="40" width="2" height="10" fill="url(#candlestickRed)" />
      <rect x="177" y="90" width="2" height="10" fill="url(#candlestickRed)" />
      
      <rect x="195" y="70" width="6" height="20" fill="url(#candlestickRed)" />
      <rect x="197" y="60" width="2" height="10" fill="url(#candlestickRed)" />
      <rect x="197" y="100" width="2" height="10" fill="url(#candlestickRed)" />
      
      <rect x="215" y="90" width="6" height="10" fill="url(#candlestickRed)" />
      <rect x="217" y="80" width="2" height="10" fill="url(#candlestickRed)" />
      <rect x="217" y="110" width="2" height="10" fill="url(#candlestickRed)" />
      
      {/* Mixed pattern */}
      <rect x="235" y="60" width="6" height="50" fill="url(#candlestickGreen)" />
      <rect x="237" y="50" width="2" height="10" fill="url(#candlestickGreen)" />
      <rect x="237" y="120" width="2" height="10" fill="url(#candlestickGreen)" />
      
      <rect x="255" y="40" width="6" height="70" fill="url(#candlestickGreen)" />
      <rect x="257" y="30" width="2" height="10" fill="url(#candlestickGreen)" />
      <rect x="257" y="120" width="2" height="10" fill="url(#candlestickGreen)" />
      
      <rect x="275" y="20" width="6" height="90" fill="url(#candlestickGreen)" />
      <rect x="277" y="10" width="2" height="10" fill="url(#candlestickGreen)" />
      <rect x="277" y="120" width="2" height="10" fill="url(#candlestickGreen)" />
      
      <rect x="295" y="10" width="6" height="100" fill="url(#candlestickGreen)" />
      <rect x="297" y="0" width="2" height="10" fill="url(#candlestickGreen)" />
      <rect x="297" y="120" width="2" height="10" fill="url(#candlestickGreen)" />
      
      <rect x="315" y="5" width="6" height="105" fill="url(#candlestickGreen)" />
      <rect x="317" y="0" width="2" height="5" fill="url(#candlestickGreen)" />
      <rect x="317" y="120" width="2" height="10" fill="url(#candlestickGreen)" />
      
      <rect x="335" y="0" width="6" height="110" fill="url(#candlestickGreen)" />
      <rect x="337" y="0" width="2" height="0" fill="url(#candlestickGreen)" />
      <rect x="337" y="120" width="2" height="10" fill="url(#candlestickGreen)" />
      
      <rect x="355" y="0" width="6" height="110" fill="url(#candlestickGreen)" />
      <rect x="357" y="0" width="2" height="0" fill="url(#candlestickGreen)" />
      <rect x="357" y="120" width="2" height="10" fill="url(#candlestickGreen)" />
    </g>
    
    {/* Price line overlay */}
    <path 
      d="M 10 160 Q 30 140, 50 120 Q 70 100, 90 80 Q 110 60, 130 40 Q 150 60, 170 80 Q 190 100, 210 120 Q 230 100, 250 80 Q 270 60, 290 40 Q 310 20, 330 10 Q 350 5, 370 0 Q 390 0, 400 0" 
      stroke="url(#priceLine)" 
      strokeWidth="3" 
      fill="none" 
      filter="url(#glow)"
    />
    
    {/* Price indicators */}
    <circle cx="370" cy="5" r="4" fill="#FFD700" />
    <circle cx="355" cy="10" r="3" fill="#B1743C" />
    <circle cx="335" cy="5" r="3" fill="#B1743C" />
    
    {/* Labels */}
    <text x="10" y="15" fill="#666" fontSize="10" fontFamily="monospace">BTC/USD</text>
    <text x="350" y="15" fill="#00C851" fontSize="10" fontFamily="monospace">+2.4%</text>
    <text x="10" y="240" fill="#666" fontSize="8" fontFamily="monospace">Volume</text>
    <text x="350" y="240" fill="#666" fontSize="8" fontFamily="monospace">$45.2K</text>
    
    {/* Time labels */}
    <text x="10" y="230" fill="#666" fontSize="8" fontFamily="monospace">9:00</text>
    <text x="100" y="230" fill="#666" fontSize="8" fontFamily="monospace">10:00</text>
    <text x="200" y="230" fill="#666" fontSize="8" fontFamily="monospace">11:00</text>
    <text x="300" y="230" fill="#666" fontSize="8" fontFamily="monospace">12:00</text>
    <text x="380" y="230" fill="#666" fontSize="8" fontFamily="monospace">13:00</text>
  </svg>
);

export default TradingChart; 