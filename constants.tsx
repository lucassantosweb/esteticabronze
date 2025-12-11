import React from 'react';
import { ServiceCategory } from './types';

export const IMAGES = {
  // Atualizado para usar a imagem local (salve o anexo como logo.png na pasta public)
  LOGO: "/logo.png", 
  // Placeholder para Foto da Proprietária (Vertical 3:4)
  OWNER: "https://placehold.co/600x800/EEE/b8896b?text=Foto+Proprietaria", 
  // Background texture placeholder
  HERO_BG: "https://placehold.co/1920x1080/e4d3c3/31343C?text=Background+Texture" 
};

export const WHATSAPP_NUMBER = "5581999468700"; 
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Est%C3%A9tica%20Jessica%20Nery.`;
export const MAP_LINK = "https://maps.app.goo.gl/rGsjGKq3tTXy8udC8";

// Cores usadas nos placeholders para diferenciar categorias visualmente
const COLORS = {
  bronze: "c6a084", // Bronze
  hair: "efe6dd",   // Nude claro
  eyes: "d5bba2",   // Nude médio
  nails: "f7f3ef"   // Off white
};

export const SERVICES: ServiceCategory[] = [
  {
    id: 'bronze',
    title: 'Bronzeamento',
    images: [
      `https://placehold.co/600x400/${COLORS.bronze}/white?text=Bronze+Natural`,
      `https://placehold.co/600x400/${COLORS.bronze}/white?text=Marquinha+Perfeita`,
      `https://placehold.co/600x400/${COLORS.bronze}/white?text=Flash+Bronze`
    ],
    items: [
      'Bronze Tradicional',
      'Bronze Ouro (3 ativadores)',
      'Bronze Diamante',
      'Banho de Lua',
      'Camuflagem de Estrias',
      'Personalité'
    ],
    isHighlight: true
  },
  {
    id: 'cabelos',
    title: 'Cabelos',
    images: [
      `https://placehold.co/600x400/${COLORS.hair}/333?text=Tratamento+L'ANZA`,
      `https://placehold.co/600x400/${COLORS.hair}/333?text=Mechas+Loiras`,
      `https://placehold.co/600x400/${COLORS.hair}/333?text=Corte+Terapeutico`
    ],
    items: [
      'Corte Terapêutico',
      'Ultimate Treatment',
      'Mechas Morena Iluminada',
      'Mechas Loiras',
      'Tonalizante'
    ]
  },
  {
    id: 'sobrancelhas',
    title: 'Sobrancelhas e Make',
    images: [
      `https://placehold.co/600x400/${COLORS.eyes}/white?text=Design+Sobrancelhas`,
      `https://placehold.co/600x400/${COLORS.eyes}/white?text=Micropigmentacao`,
      `https://placehold.co/600x400/${COLORS.eyes}/white?text=Makeup+Social`
    ],
    items: [
      'Design com Henna',
      'Spa das Sobrancelhas (Cromoterapia)',
      'Brow Lamination',
      'Make Express e Social'
    ]
  },
  {
    id: 'unhas',
    title: 'Unhas e Spa',
    images: [
      `https://placehold.co/600x400/${COLORS.nails}/333?text=Unhas+em+Gel`,
      `https://placehold.co/600x400/${COLORS.nails}/333?text=Spa+dos+Pes`,
      `https://placehold.co/600x400/${COLORS.nails}/333?text=Nail+Art`
    ],
    items: [
      'Alongamento em Gel',
      'Banho de Gel',
      'Spa dos Pés',
      'Esmaltação em Gel'
    ]
  }
];

export const NAV_LINKS = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Contato', href: '#contact' },
];