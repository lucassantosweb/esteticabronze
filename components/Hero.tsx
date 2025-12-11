import React from 'react';
import { Button } from './Button';
import { Reveal } from './Reveal';
import { IMAGES, WHATSAPP_LINK } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-nude-50">
      {/* Background Decorative Blobs com Animação Pulse */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gold-100/40 rounded-full blur-3xl opacity-60 z-0 pointer-events-none animate-pulse duration-[4000ms]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-50 rounded-full blur-3xl opacity-60 z-0 pointer-events-none animate-pulse duration-[6000ms]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Image Content (Order 1 on Mobile, Order 2 on Desktop) */}
          <div className="order-1 lg:order-2 w-full max-w-md lg:max-w-lg flex justify-center">
            <Reveal delay={100} width="100%">
              <div className="relative aspect-[3/4] w-full">
                 {/* Decorative Frame */}
                <div className="absolute inset-0 border-2 border-gold-300 translate-x-4 translate-y-4 rounded-[12px] z-0"></div>
                
                {/* Main Image with Placeholder Class */}
                <img 
                  src={IMAGES.OWNER} 
                  alt="Jessica Nery" 
                  className="img-placeholder relative z-10 w-full h-full bg-stone-200"
                />

                {/* Floater Badge */}
                <div className="absolute bottom-6 -left-2 z-20 glass-card p-4 rounded-xl shadow-lg animate-bounce-slow text-center">
                  <p className="font-serif text-gold-700 text-lg font-bold">L'ANZA</p>
                  <p className="text-xs uppercase tracking-wider text-stone-600">Healing Center</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Text Content (Order 2 on Mobile, Order 1 on Desktop) */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-2xl">
            <Reveal>
              <div className="inline-block px-4 py-1 mb-6 border border-gold-300 rounded-full bg-white/50 backdrop-blur-sm">
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-gold-700 font-bold">
                  Bem-estar & Sofisticação
                </span>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-stone-800 leading-[1.1] mb-6">
                Transformando você na sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-amber-700 italic">melhor versão</span>
              </h1>
            </Reveal>

            <Reveal delay={400}>
              <p className="text-lg text-stone-600 mb-10 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                Especialista em Bronzeamento, Cabelos, Unhas e Estética Avançada em Candeias. O cuidado que você merece com a excelência que buscava.
              </p>
            </Reveal>

            <Reveal delay={600} width="100%">
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                <Button href={WHATSAPP_LINK} className="w-full sm:w-auto">
                  Quero agendar meu horário
                </Button>
                <Button variant="outline" href="#services" className="w-full sm:w-auto">
                  Conhecer Serviços
                </Button>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};