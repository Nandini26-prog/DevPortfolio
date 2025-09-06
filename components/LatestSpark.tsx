'use client';

import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface LatestSparkProps {
  sparks: string[];
}

export default function LatestSpark({ sparks }: LatestSparkProps) {
  const [currentSpark, setCurrentSpark] = useState(0);

  useEffect(() => {
    // Set a random spark on initial load
    setCurrentSpark(Math.floor(Math.random() * sparks.length));
  }, [sparks.length]);

  const nextSpark = () => {
    setCurrentSpark((prev) => (prev + 1) % sparks.length);
  };

  return (
    <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-purple-500/20 card-hover">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg font-semibold text-light-text">Latest Spark</h3>
        </div>
        <button
          onClick={nextSpark}
          className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors group"
          title="Next Spark"
        >
          <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      
      <p className="text-muted-text text-sm leading-relaxed italic">
        "{sparks[currentSpark]}"
      </p>
      
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-purple-400">
          {currentSpark + 1} of {sparks.length}
        </span>
        <div className="flex space-x-1">
          {sparks.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSpark ? 'bg-purple-400' : 'bg-purple-400/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
