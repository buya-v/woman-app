import React from 'react';
import { Apple, Play } from 'lucide-react';

interface StoreBadgeProps {
  store: 'apple' | 'google';
}

export const StoreBadge: React.FC<StoreBadgeProps> = ({ store }) => {
  const isApple = store === 'apple';
  
  return (
    <a 
      href="#"
      aria-label={`Download on the ${isApple ? 'App Store' : 'Google Play Store'}`}
      className="flex items-center gap-3 bg-textMain text-white px-5 py-2.5 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md"
    >
      {isApple ? <Apple className="w-8 h-8" /> : <Play className="w-7 h-7 fill-white" />}
      <div className="flex flex-col items-start leading-none">
        <span className="text-[10px] uppercase tracking-wide">{isApple ? 'Download on the' : 'Get it on'}</span>
        <span className="text-lg font-bold">{isApple ? 'App Store' : 'Google Play'}</span>
      </div>
    </a>
  );
};