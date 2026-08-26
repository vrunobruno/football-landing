import React, { useEffect, useState } from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { StoreConfig } from '../types';
import { buildWhatsAppLink } from '../data/storeData';

interface HeaderProps {
  storeConfig: StoreConfig;
  onOpenSizeGuide: () => void;
  onNavigateToCategory: (category: any) => void;
}

export const Header: React.FC<HeaderProps> = ({ storeConfig }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const generalWhatsAppUrl = buildWhatsAppLink(storeConfig.whatsappNumber);

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${isScrolled ? 'bg-[#F7F6F2]/95 backdrop-blur-md border-[#E5E3DC] shadow-sm' : 'bg-[#F7F6F2] border-[#EAE8E2]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2 group" id="brand-logo" aria-label={storeConfig.name}>
            {storeConfig.logoUrl ? (
              <img
                src={storeConfig.logoUrl}
                alt={storeConfig.name}
                className="w-auto h-9 sm:h-11 max-w-[150px] object-contain"
              />
            ) : (
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight uppercase text-[#111111]">
                {storeConfig.name}
              </span>
            )}
          </a>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={storeConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-mono text-[#555550] hover:text-[#111111] px-3 py-2 border border-[#E0DED7] hover:border-[#111111] transition-all bg-white"
              id="header-instagram-link"
              title="Siga no Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>{storeConfig.instagramHandle}</span>
            </a>

            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-4 sm:px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-transform active:scale-95 cursor-pointer shadow-sm rounded-none"
              id="header-whatsapp-cta"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span className="font-bold">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
