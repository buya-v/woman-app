import React from 'react';

export const Community: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-bg-soft">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=500" 
                  alt="Community member smiling" 
                  className="rounded-2xl w-full h-48 object-cover mb-8"
                />
                 <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&h=500" 
                  alt="Women talking" 
                  className="rounded-2xl w-full h-64 object-cover mt-4"
                />
             </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl text-text-main mb-6">
              Join a community that understands you
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Sometimes you just need to talk to someone who gets it. Our community forums are categorized by topic—from pregnancy and fertility to menopause and lifestyle.
            </p>
            <ul className="space-y-4 mb-8">
              {['Expert Q&A Sessions', 'Topic-based Groups', 'Daily Wellness Challenges'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-main font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <button className="px-8 py-3 bg-secondary text-white rounded-full font-medium hover:bg-opacity-90 transition-colors shadow-lg">
              Join the Discussion
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};