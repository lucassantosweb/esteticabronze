import React, { useState, useRef } from 'react';
import { SERVICES } from '../constants';
import { Reveal } from './Reveal';
import { Check } from 'lucide-react';

// Sub-componente do Carrossel para encapsular a lógica de cada card
const ServiceCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      // Calcula o índice baseado na posição do scroll
      const index = Math.round(scrollLeft / offsetWidth);
      setActiveIndex(index);
    }
  };

  const scrollToImage = (index: number) => {
    if (scrollRef.current) {
      const offsetWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * offsetWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <div className="relative w-full h-48 sm:h-56 group">
      {/* Container de Scroll com Snap */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
      >
        {images.map((img, i) => (
          <div key={i} className="flex-shrink-0 w-full h-full snap-center relative">
            <img 
              src={img} 
              alt={`Serviço ${i + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay for Text/Dots readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Indicadores (Dots) Interativos */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2 z-10">
        {images.map((_, i) => (
          <button 
            key={i}
            onClick={(e) => {
              e.preventDefault(); // Previne comportamento padrão se necessário
              e.stopPropagation(); // Previne clique no card pai
              scrollToImage(i);
            }}
            aria-label={`Ver imagem ${i + 1}`}
            className={`transition-all duration-300 rounded-full shadow-sm backdrop-blur-sm cursor-pointer
              ${i === activeIndex 
                ? 'w-6 h-1.5 bg-white' 
                : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80 hover:w-2 hover:h-2'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-nude-100">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <Reveal width="100%">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-gold-600 uppercase tracking-widest text-sm font-bold mb-2">Nossas Especialidades</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800">Menu de Serviços</h2>
            <div className="w-16 h-1 bg-gold-400 mt-6 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 150} width="100%">
              <div 
                className={`h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2 group
                  ${service.isHighlight 
                    ? 'border border-gold-300 ring-4 ring-gold-100/50' 
                    : 'border border-white/50'
                  }
                  /* High-End Glassmorphism Specs */
                  bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                `}
              >
                {/* Highlight Badge */}
                {service.isHighlight && (
                  <div className="absolute top-4 right-4 bg-gold-400 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide z-20 shadow-md border border-white/20 backdrop-blur-md">
                    Destaque
                  </div>
                )}

                {/* Carrossel no Topo */}
                <ServiceCarousel images={service.images} />

                {/* Conteúdo de Texto com Padding Interno */}
                <div className="flex flex-col items-center flex-grow p-8">
                  {/* Centered Title */}
                  <h3 className="text-2xl font-serif font-semibold text-stone-800 mb-6 text-center group-hover:text-gold-700 transition-colors">
                    {service.title}
                  </h3>

                  {/* Left-aligned List in a Centered Block */}
                  <div className="w-full pl-2 mb-6">
                    <ul className="space-y-3">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start text-left">
                           <Check className={`w-4 h-4 mt-1 mr-3 flex-shrink-0 ${service.isHighlight ? 'text-gold-500' : 'text-nude-400'}`} />
                           <span className="text-stone-600 text-sm leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Action */}
                  <div className="mt-auto w-full text-center opacity-70 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <span className="text-xs font-bold text-gold-600 uppercase tracking-wider border-b border-gold-200 pb-1 hover:border-gold-500">
                      Saiba mais
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};