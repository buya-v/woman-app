import React from 'react';
import { CalendarHeart, Activity, Users, ShieldCheck } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <CalendarHeart size={32} />,
      title: "Smart Cycle Tracking",
      description: "Log your symptoms and let our AI predict your next period, ovulation window, and PMS days with increasing accuracy over time."
    },
    {
      icon: <Activity size={32} />,
      title: "Health Insights",
      description: "Discover patterns in your mood, energy, and physical symptoms. Get personalized daily tips to optimize your well-being based on your cycle phase."
    },
    {
      icon: <Users size={32} />,
      title: "Anonymous Community",
      description: "Connect with thousands of women in a safe, moderated space. Share experiences, ask questions, and support one another without judgment."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Private & Secure",
      description: "Your health data belongs to you. We use end-to-end encryption and will never sell your personal information to third parties."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-text-main mb-4">Everything you need, all in one place</h2>
          <p className="text-lg text-text-muted">
            Woman App is designed to be your daily companion for reproductive health and holistic wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};