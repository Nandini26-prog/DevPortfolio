'use client';

import { useState, useEffect } from 'react';
import { Sparkles, X, ArrowRight } from 'lucide-react';

interface RandomSparkPopupProps {
  sparks: string[];
}

export default function RandomSparkPopup({ sparks }: RandomSparkPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSpark, setCurrentSpark] = useState('');

  useEffect(() => {
    // Show popup randomly after 3-8 seconds
    const randomDelay = Math.random() * 5000 + 3000;
    const timer = setTimeout(() => {
      const randomSpark = sparks[Math.floor(Math.random() * sparks.length)];
      setCurrentSpark(randomSpark);
      setIsVisible(true);
    }, randomDelay);

    return () => clearTimeout(timer);
  }, [sparks]);

  const closePopup = () => {
    setIsVisible(false);
  };

  const nextSpark = () => {
    const randomSpark = sparks[Math.floor(Math.random() * sparks.length)];
    setCurrentSpark(randomSpark);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-dark-card border border-purple-500/30 rounded-2xl p-6 max-w-md w-full relative shadow-2xl">
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-muted-text hover:text-light-text transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-light-text">Random Spark </h3>
        </div>
        
        <p className="text-muted-text text-sm leading-relaxed italic mb-6">
          "{currentSpark}"
        </p>
        
        <div className="flex justify-between items-center">
          <button
            onClick={nextSpark}
            className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
          >
            <ArrowRight className="w-4 h-4" />
            <span>Another Spark</span>
          </button>
          
          <button
            onClick={closePopup}
            className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
