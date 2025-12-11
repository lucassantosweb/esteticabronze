import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_LINK, IMAGES } from '../constants';
import logoesteticabronze from './logo-estetica-bronze.png';
export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'glass-card shadow-sm py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Container */}
        <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-3 group">
                <img 
                  src={logoesteticabronze} 
                  alt="Estética Bronze Logo" 
                  className="h-[35px] md:h-[45px] w-auto rounded-full object-cover transition-transform duration-300 group-hover:scale-105 shadow-sm"
                />
                <span className="text-lg sm:text-xl md:text-2xl font-display font-bold text-gold-700 tracking-widest uppercase whitespace-nowrap">
                    Estética <span className="text-stone-800">Bronze</span>
                </span>
            </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-wider text-stone-600 hover:text-gold-600 transition-colors font-sans font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href={WHATSAPP_LINK} 
            className="px-6 py-2 rounded-full border border-gold-400 text-gold-700 hover:bg-gold-400 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-md text-sm font-serif font-semibold inline-block"
          >
            Agendar no WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-stone-800 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-stone-100 shadow-xl py-8 flex flex-col items-center space-y-6 animate-fade-in-down">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-serif text-stone-700 hover:text-gold-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK}
            className="px-8 py-3 bg-gold-400 text-white rounded-full font-serif"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Agendar Agora
          </a>
        </div>
      )}
    </header>
  );
};
