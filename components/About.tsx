import React from 'react';
import { Reveal } from './Reveal';
import { Star } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="max-w-4xl w-full text-center">
          <Reveal width="100%">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-3">Jessica Nery</h2>
              <div className="w-24 h-1 bg-gold-400 mb-8 rounded-full"></div>
            </div>
          </Reveal>

          <Reveal delay={200} width="100%">
             <p className="text-xl md:text-2xl text-stone-600 font-light italic leading-relaxed mb-12 max-w-3xl mx-auto">
              "Acredito que a estética vai além da aparência; é sobre autoconfiança, cuidado e revelar a beleza única que existe em cada mulher."
            </p>
          </Reveal>

          <Reveal delay={300} width="100%">
            <div className="grid md:grid-cols-3 gap-8 mt-4">
              {/* Card 1 */}
              <div className="flex flex-col items-center p-8 bg-nude-50 rounded-2xl border border-nude-200 hover:shadow-lg transition-shadow text-center">
                <div className="mb-4 text-gold-500">
                  <Star fill="currentColor" size={28} />
                </div>
                <h3 className="font-serif font-bold text-lg mb-3 text-stone-800">Excelência</h3>
                <p className="text-stone-600 leading-relaxed">Protocolos exclusivos e produtos de alta performance.</p>
              </div>

              {/* Card 2 (Center Highlight) */}
              <div className="flex flex-col items-center p-8 bg-gold-50/80 rounded-2xl border border-gold-200 hover:shadow-xl transition-shadow scale-105 z-10 text-center">
                <div className="mb-4 text-gold-600">
                   <span className="font-serif text-2xl font-bold">L'ANZA</span>
                </div>
                <h3 className="font-serif font-bold text-lg mb-3 text-stone-800">Healing Center</h3>
                <p className="text-stone-600 leading-relaxed">Tratamentos capilares regenerativos de nível internacional.</p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center p-8 bg-nude-50 rounded-2xl border border-nude-200 hover:shadow-lg transition-shadow text-center">
                 <div className="mb-4 text-gold-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-lg mb-3 text-stone-800">Cuidado</h3>
                <p className="text-stone-600 leading-relaxed">Um ambiente acolhedor pensado no seu bem-estar completo.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
