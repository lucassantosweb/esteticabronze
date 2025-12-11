import React from 'react';
import { Phone } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Agendar no WhatsApp"
    >
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-lg shadow-md text-stone-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
        Agende seu horário
      </span>
      <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform duration-300 animate-pulse">
        {/* WhatsApp Bubble Base */}
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="currentColor" 
          stroke="none"
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white relative z-0"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        
        {/* Phone Icon Overlay - Centered and colored to match background for cutout effect */}
        <Phone 
          size={14} 
          className="absolute z-10 text-[#25D366] fill-current" 
          strokeWidth={0}
        />
      </div>
    </a>
  );
};