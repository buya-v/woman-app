import React from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Yoga Instructor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    quote: "Woman App has completely changed how I plan my classes. Understanding my energy levels throughout the month has been a game changer."
  },
  {
    name: "Dr. Emily Chen",
    role: "OBGYN",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150",
    quote: "I recommend this app to my patients for its accuracy and privacy focus. The symptom logging is incredibly detailed."
  },
  {
    name: "Michelle Davis",
    role: "Student",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    quote: "Finally, an app that doesn't feel clinical. The community forums are so supportive and the design is beautiful."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-bgLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">Loved by Thousands</h2>
          <p className="text-textMuted text-lg">See what our community has to say about their journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-textMain">{t.name}</h4>
                  <p className="text-sm text-textMuted">{t.role}</p>
                </div>
              </div>
              <p className="text-textMain italic flex-grow">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};