import React from 'react';
import { CalendarHeart, Activity, Users, ShieldCheck, HeartPulse, Bell } from 'lucide-react';

const features = [
  {
    icon: <CalendarHeart className="w-8 h-8 text-primary" />,
    title: "Cycle Tracking",
    description: "Precise prediction algorithms for menstruation and ovulation windows tailored to your unique rhythm."
  },
  {
    icon: <Activity className="w-8 h-8 text-primary" />,
    title: "Health Insights",
    description: "Visualize your health trends with easy-to-read charts covering sleep, mood, and symptom patterns."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Community Support",
    description: "Join safe, moderated forums to discuss women's health topics with peers and experts."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Privacy First",
    description: "Your intimate data is encrypted and stored securely. We never sell your personal health information."
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-primary" />,
    title: "Wellness Plans",
    description: "Curated yoga, meditation, and nutrition plans adapted to your cycle phase."
  },
  {
    icon: <Bell className="w-8 h-8 text-primary" />,
    title: "Smart Reminders",
    description: "Gentle nudges for medication, hydration, and appointments so you never miss a beat."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-textMain">Complete Health Management</h2>
          <p className="text-textMuted text-lg">
            Everything you need to understand your body better, designed with scientific precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 bg-bgLight rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-textMuted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};