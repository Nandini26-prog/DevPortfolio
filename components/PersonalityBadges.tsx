'use client';

import { useState } from 'react';

export default function PersonalityBadges() {
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  const badges = [
    {
      id: 'kathak',
      emoji: '🎭',
      label: 'Kathak Dancer',
      hoverEmoji: '💃',
      color: 'from-orange-500 to-red-600',
      description: 'Classical Indian dance'
    },
    {
      id: 'art',
      emoji: '🎨',
      label: 'Artist',
      hoverEmoji: '🖌️',
      color: 'from-pink-500 to-purple-600',
      description: 'Painting & Drawing'
    },
    {
      id: 'books',
      emoji: '📚',
      label: 'Bookworm',
      hoverEmoji: '📖',
      color: 'from-green-500 to-teal-600',
      description: 'Reading & Novels'
    },
    {
      id: 'puzzles',
      emoji: '🧩',
      label: 'Puzzle Solver',
      hoverEmoji: '🤔',
      color: 'from-blue-500 to-indigo-600',
      description: 'Logic & Thinking'
    }
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {badges.map((badge) => (
        <div 
          key={badge.id}
          className="relative group cursor-pointer"
          onMouseEnter={() => setHoveredBadge(badge.id)}
          onMouseLeave={() => setHoveredBadge(null)}
        >
          {/* Badge */}
          <div className={`w-12 h-12 bg-gradient-to-br ${badge.color} rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
            {hoveredBadge === badge.id ? badge.hoverEmoji : badge.emoji}
          </div>
          
          {/* Hover Effect */}
          {hoveredBadge === badge.id && (
            <div className={`absolute -top-20 -left-8 w-24 h-24 bg-gradient-to-br ${badge.color}/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 animate-pulse`}>
              <div className="text-4xl">{badge.hoverEmoji}</div>
            </div>
          )}
          
          {/* Tooltip */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-dark-card text-light-text text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {badge.label}
          </div>
        </div>
      ))}
    </div>
  );
}
