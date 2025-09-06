'use client';

import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Plus, MoreHorizontal } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const tracks = [
    {
      title: "13 Manye (Apollo Mix)",
      artist: "Dino and Terry, Idd Aziz",
      album: "The beat behind the code · Aleksandar"
    },
    {
      title: "14 Everything I Own",
      artist: "Nico Morano, Mewhy",
      album: "The beat behind the code · Aleksandar"
    }
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-dark-card/50 backdrop-blur-sm rounded-lg p-4 border border-dark-border">
      <div className="flex items-center space-x-4">
        {/* Album Art */}
        <div className="flex space-x-2">
          <div className="w-12 h-12 bg-gray-700 rounded"></div>
          <div className="w-12 h-12 bg-gray-700 rounded"></div>
          <div className="w-12 h-12 bg-gray-700 rounded"></div>
        </div>

        {/* Track Info */}
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium truncate">{tracks[currentTrack].title}</div>
          <div className="text-xs text-muted-text truncate">{tracks[currentTrack].artist}</div>
          <div className="text-xs text-muted-text truncate">{tracks[currentTrack].album}</div>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-dark-border rounded-full transition-colors">
            <SkipBack className="w-4 h-4" />
          </button>
          <button 
            onClick={togglePlay}
            className="p-2 hover:bg-dark-border rounded-full transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button className="p-2 hover:bg-dark-border rounded-full transition-colors">
            <SkipForward className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-dark-border rounded-full transition-colors">
            <Plus className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-dark-border rounded-full transition-colors">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>

        {/* Preview Button */}
        <button className="px-4 py-2 bg-accent-green text-dark-bg rounded-lg text-sm font-medium hover:bg-accent-green/90 transition-colors">
          Preview
        </button>
      </div>
    </div>
  );
}
