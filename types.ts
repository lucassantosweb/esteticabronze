import React from 'react';

export interface ServiceItem {
  name: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  // icon: React.ReactNode; // Removido em favor das imagens
  images: string[]; // Novo array de imagens para o slider
  items: string[];
  isHighlight?: boolean;
}

export interface NavLink {
  name: string;
  href: string;
}