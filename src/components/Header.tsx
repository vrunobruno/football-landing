import React, { useState, useEffect } from 'react';
import { MessageCircle, Instagram, Menu, X, Ruler } from 'lucide-react';
import { ProductCategory, StoreConfig } from '../types';
import { buildWhatsAppLink } from '../data/storeData';

interface HeaderProps { storeConfig: StoreConfig; onOpenSizeGuide: () => void; onNavigateToCategory: (category: ProductCategory) => void; }

export const Header: React.FC<HeaderProps> = ({ storeConfig, onOpenSizeGuide, onNavigateToCategory }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => { const handleScroll = () => setIsScrolled(window.scrollY > 15); window.addEventListener('scroll', handleScroll, { passive: true }); return () => window.removeEventListener('scroll', handleScroll); }, []);
  const generalWhatsAppUrl = buildWhatsAppLink(storeConfig.whatsappNumber);
  const navLinks = [
    { label: 'Todos os Mantos', category: 'todos' },
  ] as const;
  const handleNavigation = (category: ProductCategory) => { onNavigateToCategory(category); setMobileMenuOpen(false); };
  return (
    <header id="main-header" className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${isScrolled ? 'bg-[#F7F6F2]/95 backdrop-blur-md border-[#E5E3DC] shadow-sm' : 'bg-[#F7F6F2] border-[#EAE8E2]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex items-center justify-between h-16 sm:h-20">
        <a href="#" className="flex items-center gap-2 group" id="brand-logo" aria-label={storeConfig.name}>
          {storeConfig.logoUrl ? <img src={storeConfig.logoUrl} alt={storeConfig.name} className="w-auto h-9 sm:h-11 max-w-[150px] object-contain" /> : <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight uppercase text-[#111111]">{storeConfig.name}</span>}
        </a>
        <nav className="hidden lg:flex items-center gap-7"><button onClick={() => handleNavigation('todos')} className="text-xs uppercase tracking-wider font-semibold text-[#555550] hover:text-[#111111] transition-colors py-1 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]">Todos os Mantos</button><button onClick={onOpenSizeGuide} className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-mono font-medium text-[#666660] hover:text-[#111111] py-1 transition-colors cursor-pointer border-b border-dashed border-[#BBB]" id="header-size-guide-btn"><Ruler className="w-3.5 h-3.5 text-[#111111]" /><span>Guia de Medidas</span></button></nav>
        <div className="flex items-center gap-3 sm:gap-4">
          <a href={storeConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-mono text-[#555550] hover:text-[#111111] px-3 py-2 border border-[#E0DED7] hover:border-[#111111] transition-all bg-white" id="header-instagram-link" title="Siga no Instagram"><Instagram className="w-3.5 h-3.5" /><span>{storeConfig.instagramHandle}</span></a>
          <a href={generalWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20ba59] text-white px-4 sm:px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-transform active:scale-95 cursor-pointer shadow-sm rounded-none" id="header-whatsapp-cta"><MessageCircle className="w-4 h-4 fill-white" /><span className="font-bold">WhatsApp</span></a>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-[#111111] hover:bg-[#EAE8E2] border border-[#E5E3DC] transition-colors" aria-label="Menu" id="mobile-menu-toggle">{mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
        </div>
      </div></div>
      {mobileMenuOpen && <div className="lg:hidden bg-white border-b border-[#E5E3DC] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-150 shadow-lg"><div className="flex flex-col space-y-3"><button onClick={() => handleNavigation('todos')} className="text-xs uppercase tracking-wider font-bold text-[#333330] hover:text-black py-2 border-b border-neutral-100 text-left cursor-pointer">Todos os Mantos</button><button onClick={() => { setMobileMenuOpen(false); onOpenSizeGuide(); }} className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#111111] py-2 text-left font-mono font-bold" id="mobile-size-guide-btn"><Ruler className="w-4 h-4 text-[#111111]" /><span>Ver Tabela de Medidas (P ao XGG)</span></button></div><div className="pt-4 border-t border-neutral-200 flex flex-col gap-2.5"><a href={storeConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 border border-neutral-300 text-xs font-bold uppercase tracking-wider text-[#111111] bg-white hover:bg-neutral-100 transition-colors"><Instagram className="w-4 h-4" /><span>Seguir {storeConfig.instagramHandle}</span></a><a href={generalWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white font-extrabold text-xs uppercase tracking-wider shadow-sm"><MessageCircle className="w-4 h-4 fill-white" /><span>Chamar no WhatsApp ({storeConfig.whatsappDisplay})</span></a></div></div>}
    </header>
  );
};
