import React, { useState, useEffect } from 'react';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { StoreConfig } from '../types';
import { buildWhatsAppLink } from '../data/storeData';

interface StickyMobileBarProps {
  storeConfig: StoreConfig;
  totalProducts: number;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ storeConfig, totalProducts }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = buildWhatsAppLink(
    storeConfig.whatsappNumber,
    undefined,
    undefined,
    'Olá! Vim pelo catálogo e gostaria de tirar uma dúvida sobre disponibilidade.'
  );

  if (!isVisible) return null;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#F7F6F2]/95 backdrop-blur-md border-t border-[#E0DED7] shadow-lg">
      <div className="flex items-center gap-2">
        <a
          href="#catalogo"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 bg-white border border-[#D5D2C9] text-[#111111] font-mono font-bold text-[11px] uppercase tracking-wider active:scale-95 transition-all shadow-xs"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-[#111111]" />
          <span>Mantos ({totalProducts})</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.4] flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] text-white font-bold text-[11px] uppercase tracking-wider active:scale-95 transition-all shadow-xs"
          id="mobile-sticky-whatsapp-btn"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>Pedir no WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
