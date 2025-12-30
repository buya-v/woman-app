import React from 'react';
import { cn } from '../lib/utils';

type StoreType = 'apple' | 'google';

interface StoreBadgeProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  store: StoreType;
  className?: string;
}

export const StoreBadge: React.FC<StoreBadgeProps> = ({ store, className, ...props }) => {
  const isApple = store === 'apple';
  
  return (
    <a
      href={isApple ? "https://apps.apple.com" : "https://play.google.com"}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-3 px-4 py-2 bg-text-main text-white rounded-lg transition-transform hover:scale-105 shadow-md hover:shadow-lg w-fit",
        className
      )}
      aria-label={isApple ? "Download on the App Store" : "Get it on Google Play"}
      {...props}
    >
      {isApple ? (
        // Simple SVG for Apple Logo
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" role="img">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.5 1.63-.03 2.8.83 3.75.83.94 0 2.72-1.02 4.57-.87 1.39.06 2.64.66 3.53 1.65-3.41 1.76-3.18 5.76-.08 7zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        // Simple SVG for Google Play Logo
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" role="img">
           <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,10.84L17.38,12.5L15.39,10.5L17.38,8.5L20.3,10.16C21.23,10.7 21.23,12.63 20.3,13.16M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88Z" />
        </svg>
      )}
      
      <div className="flex flex-col items-start leading-none">
        <span className="text-[10px] uppercase opacity-80">
          {isApple ? 'Download on the' : 'GET IT ON'}
        </span>
        <span className="text-lg font-semibold tracking-wide">
          {isApple ? 'App Store' : 'Google Play'}
        </span>
      </div>
    </a>
  );
};