import React from 'react';
import { StoreBadge } from './StoreBadge';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="flex flex-col items-start text-left space-y-6 z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-textMain">
              Empowering Your <span className="text-primary">Health Journey</span>
            </h1>
            <p className="text-lg sm:text-xl text-textMuted max-w-lg">
              The comprehensive health companion designed for women. Track your cycle, monitor wellness trends, and connect with a supportive community—all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <StoreBadge store="apple" />
              <StoreBadge store="google" />
            </div>

            <div className="pt-6 flex items-center gap-4 text-sm text-textMuted">
              <div className="flex -space-x-2">
                 {/* Verified user avatars placeholder visualization */}
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                     <img src={`https://images.unsplash.com/photo-${i === 1 ? '1438761681033-6461ffad8d80' : i === 2 ? '1494790108377-be9c29b29330' : i === 3 ? '1534528741775-53994a69daeb' : '1531123897727-8f129e1688ce'}?auto=format&fit=crop&w=100&q=80`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p>Trusted by <span className="font-bold text-textMain">50,000+</span> women</p>
            </div>
          </div>

          {/* Visuals */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2 flex items-center justify-center lg:justify-end">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 max-w-md lg:max-w-full">
              {/* Verified Unsplash ID for Woman using health app/phone */}
              <img 
                src="https://images.unsplash.com/photo-1512102438853-b84a6d730740?auto=format&fit=crop&q=80&w=800" 
                alt="Woman happily checking her health stats on a mobile phone during a workout" 
                className="w-full h-full object-cover block"
                width="800"
                height="1000"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-12 right-12 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
