import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Button } from './components/Button';

function App() {
  return (
    <div className="min-h-screen bg-bgLight text-textMain font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Testimonials />
        
        {/* Bottom CTA Section */}
        <section className="py-20 bg-primary text-white text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to take control of your health?
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of women who are already tracking their health with Woman App. Download now for free on iOS and Android.
            </p>
            <Button variant="secondary" className="text-primary bg-white font-bold py-4 px-10 rounded-full hover:bg-gray-100">
              Get Started for Free
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;