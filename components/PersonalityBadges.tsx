'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PersonalityBadges() {
  const [hovered, setHovered] = useState(false);

  const mainBadge = {
    id: 'hobbies',
    emoji: '⭐',
    label: 'My Hobbies',
    subBadges: [
      { id: 'kathak', label: 'Kathak Dancer', emoji: '💃', color: 'from-orange-500 to-red-600' },
      { id: 'art', label: 'Artist', emoji: '🖌️', color: 'from-pink-500 to-purple-600' },
      { id: 'books', label: 'Bookworm', emoji: '📖', color: 'from-green-500 to-teal-600' },
      { id: 'puzzles', label: 'Puzzle Solver', emoji: '🧩', color: 'from-blue-500 to-indigo-600' },
    ],
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const badgeVariants = {
    initial: { opacity: 0, y: 0, x: 0 },
    animate: (i: number) => {
      const angle = (i / mainBadge.subBadges.length) * 2 * Math.PI;
      const radius = 60; // Distance from center
      const x = radius * Math.sin(angle);
      const y = -radius * Math.cos(angle);
      return {
        opacity: 1,
        x: x,
        y: y,
        transition: { type: 'spring', stiffness: 200, damping: 10 },
      };
    },
  };

  return (
    <div className="flex justify-center items-center h-48">
      <div 
        className="relative group cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Main Badge */}
        <div className={`w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg transition-all duration-300 group-hover:scale-110`}>
          {mainBadge.emoji}
        </div>
        
        {/* Sub-Badges Container (circular array) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={containerVariants}
          initial="initial"
          animate={hovered ? "animate" : "initial"}
        >
          {mainBadge.subBadges.map((subBadge, i) => (
            <motion.div
              key={subBadge.id}
              className={`absolute w-10 h-10 rounded-full flex items-center justify-center text-white text-lg shadow-md transition-all duration-200 ${subBadge.color}`}
              variants={badgeVariants}
              custom={i}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">
                {subBadge.emoji}
              </span>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {subBadge.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}