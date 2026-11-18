import React from 'react';

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Cyan orb - top left */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-cyan-500/15 dark:bg-cyan-500/10 blur-[100px] animate-pulse-glow"
        style={{ animationDuration: '9s' }}
      />
      {/* Violet orb - top right / center */}
      <div 
        className="absolute top-1/4 -right-32 w-96 h-96 sm:w-[550px] sm:h-[550px] rounded-full bg-violet-600/15 dark:bg-violet-600/10 blur-[120px] animate-pulse-glow"
        style={{ animationDuration: '13s', animationDelay: '2s' }}
      />
      {/* Blue / Teal orb - bottom left */}
      <div 
        className="absolute -bottom-40 left-1/4 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/8 blur-[100px] animate-pulse-glow"
        style={{ animationDuration: '11s', animationDelay: '4s' }}
      />
      {/* Tech grid overlay */}
      <div className="grid-overlay" />
    </div>
  );
}
