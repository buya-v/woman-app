import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Community } from './components/Community';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;