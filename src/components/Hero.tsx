import React from 'react';
import { motion } from 'framer-motion';
import { StoreBadge } from './StoreBadge';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-bg-soft to-white">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Content Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white border border-secondary/20 text-secondary text-sm font-semibold tracking-wide uppercase shadow-sm">
            #1 App for Women's Wellness
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-[60px] leading-[1.1] mb-6 text-text-main">
            Understand your body. <br />
            <span className="text-primary">Empower your life.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed">
            Join over 1 million women tracking their cycles, fertility, and overall health with the most intuitive AI-driven insights available today.
          </p>

          <div id="download" className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <StoreBadge store="apple" />
            <StoreBadge store="google" />
          </div>

          <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-text-muted">
            <div className="flex -space-x-2">
               {[1,2,3,4].map((i) => (
                 <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                   <img 
                     src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?auto=format&fit=crop&w=64&h=64`} 
                     alt="User avatar" 
                     className="w-full h-full object-cover"
                   />
                 </div>
               ))}
            </div>
            <p><span className="font-bold text-text-main">1M+</span> active users</p>
          </div>
        </motion.div>

        {/* Visual Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 flex justify-center"
        >
           {/* Abstract Background Blobs */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -z-10" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-2xl -z-10 translate-x-10 -translate-y-10" />

           {/* Phone Mockup */}
           <div className="relative w-[300px] md:w-[350px] h-[600px] md:h-[700px] bg-black rounded-[40px] border-[8px] border-gray-900 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl z-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1550523450-7c60361284d9?auto=format&fit=crop&w=800&q=80"
                alt="App Interface Mockup"
                className="w-full h-full object-cover"
              />
              {/* Floating UI Card Overlay */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-8 left-4 right-4 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-bg-soft flex items-center justify-center">
                    <span className="text-primary font-bold">98%</span>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-semibold uppercase">Daily Insight</p>
                    <p className="text-sm font-medium text-text-main">Energy peak predicted today!</p>
                  </div>
                </div>
              </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};