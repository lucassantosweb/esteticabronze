import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Info } from './components/Info';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="font-sans text-stone-700 bg-nude-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Info />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;