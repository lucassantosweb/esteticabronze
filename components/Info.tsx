import React from 'react';
import { MapPin, Clock, Instagram, ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';
import { MAP_LINK } from '../constants';

export const Info: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Info Text */}
          <div className="order-2 md:order-1">
            <Reveal>
              <h2 className="text-3xl font-serif text-stone-800 mb-8">Visite nosso espaço</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-nude-100 flex items-center justify-center text-gold-600 flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 uppercase tracking-wide text-sm mb-1">Horário de Funcionamento</h4>
                    <p className="text-stone-600">Terça a Sábado: 08h às 18h</p>
                  </div>
                </div>

                <a 
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group cursor-pointer hover:bg-nude-50/50 p-2 -ml-2 rounded-xl transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-nude-100 flex items-center justify-center text-gold-600 flex-shrink-0 group-hover:bg-gold-400 group-hover:text-white transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 uppercase tracking-wide text-sm mb-1 flex items-center gap-2">
                      Localização <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-stone-600 group-hover:text-gold-700 transition-colors">Candeias, Jaboatão dos Guararapes - PE</p>
                    <p className="text-stone-500 text-sm mt-1">Próximo à orla (Clique para ver no mapa)</p>
                  </div>
                </a>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-nude-100 flex items-center justify-center text-gold-600 flex-shrink-0">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 uppercase tracking-wide text-sm mb-1">Acompanhe</h4>
                    <a href="https://instagram.com/jessicanery.estetica" className="text-stone-600 hover:text-gold-600 transition-colors">
                      @jessicanery.estetica
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Map Placeholder */}
          <div className="order-1 md:order-2">
            <Reveal delay={200} width="100%">
              <div className="w-full h-[400px] bg-stone-100 rounded-3xl overflow-hidden shadow-inner border border-stone-200 relative group">
                {/* Updated Map Iframe using query to find the specific business location */}
                <iframe 
                  src="https://maps.google.com/maps?q=Est%C3%A9tica%20Jessica%20Nery%20Candeias&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{border:0, filter: 'grayscale(0.2) contrast(0.9)'}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Estética Jessica Nery"
                  className="group-hover:filter-none transition-all duration-500 group-hover:blur-[2px]"
                ></iframe>
                
                <div className="absolute inset-0 pointer-events-none border-[6px] border-white/50 rounded-3xl z-10"></div>
                
                {/* Overlay Button */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/10 backdrop-blur-[1px]">
                  <a 
                    href={MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-stone-800 px-6 py-3 rounded-full font-serif font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <MapPin size={18} className="text-gold-500" />
                    Abrir no Google Maps
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};