import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'glass';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  ...props 
}) => {
  // BaseStyles:
  // - hover:scale-105: Aumenta levemente o tamanho
  // - hover:-translate-y-0.5: Sobe levemente para dar sensação de leveza
  // - active:scale-95: Feedback visual de clique
  const baseStyles = "inline-flex items-center justify-center px-10 py-4 rounded-full font-serif font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 text-sm md:text-base mx-auto cursor-pointer";
  
  const variants = {
    // Primary: Gradiente com sombra dourada intensa (Glow) no hover
    primary: "bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 text-white shadow-lg shadow-gold-400/20 hover:shadow-2xl hover:shadow-gold-400/50 border border-transparent",
    
    // Outline: Borda dourada com sombra dourada suave no hover
    outline: "border-2 border-gold-600 text-gold-700 bg-transparent hover:bg-gold-50 hover:shadow-xl hover:shadow-gold-600/20",
    
    // Glass: Efeito vidro com sombra suave
    glass: "bg-white/20 backdrop-blur-md border border-white/40 text-stone-800 hover:bg-white/40 hover:shadow-xl"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props as any}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};