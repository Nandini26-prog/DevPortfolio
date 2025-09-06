'use client';

import { useState } from 'react';

export default function KathakSilhouette() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Kathak Badge */}
      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
        🎭
      </div>
      
      {/* Kathak Silhouette on Hover */}
      {isHovered && (
        <div className="absolute -top-20 -left-8 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-orange-500/30 animate-pulse">
          <div className="text-4xl text-orange-400">💃</div>
        </div>
      )}
      
      {/* Tooltip */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-dark-card text-light-text text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Kathak Dancer
      </div>
    </div>
  );
}
