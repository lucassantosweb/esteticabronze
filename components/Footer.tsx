import React from 'react';
import { WHATSAPP_LINK } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-display text-gold-400 mb-6">Estética Bronze Jessica Nery</h2>
        
        <div className="flex justify-center space-x-6 mb-8">
           <a href="https://instagram.com/jessicanery.estetica" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
           <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
        </div>

        <div className="border-t border-stone-800 pt-8 text-sm">
          <p>&copy; 2025 Estética Bronze Jessica Nery. Todos os direitos reservados.</p>
          <p className="mt-2 text-stone-600 text-xs">Desenvolvido com excelência</p>
        </div>
      </div>
    </footer>
  );
};