import React from 'react';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { StoreConfig } from '../types';
import { buildWhatsAppLink } from '../data/storeData';

interface HeroProps { storeConfig: StoreConfig; onExploreClick: () => void; }

export const Hero: React.FC<HeroProps> = ({ storeConfig, onExploreClick }) => {
  const whatsappUrl = buildWhatsAppLink(storeConfig.whatsappNumber);
  const heroPrice = storeConfig.heroProductPrice ?? 149.90;
  return (
    <section className="relative overflow-hidden bg-[#F7F6F2] border-b border-[#EAE8E2] pt-8 sm:pt-14 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DFD7] text-[#111111] text-[11px] font-mono uppercase tracking-widest mb-6"><span className="w-2 h-2 rounded-full bg-[#111111]" /><span>Coleção 2025/2026 • Padrão Tailandesa 1:1</span></div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.9] font-bold uppercase tracking-tight text-[#111111] mb-6">VISTA<br />A CAMISA.</h1>
          <p className="text-[#555550] text-base sm:text-lg max-w-xl font-normal leading-relaxed mb-8">{storeConfig.subtagline}</p>
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10">
            <button onClick={onExploreClick} className="w-full sm:w-auto bg-[#111111] hover:bg-black text-white px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors cursor-pointer text-center flex items-center justify-center gap-2" id="hero-explore-btn"><span>Ver Todos os Mantos</span><ArrowDown className="w-4 h-4" /></button>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white hover:bg-neutral-50 text-[#111111] border border-[#D5D2C9] px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 text-center" id="hero-whatsapp-btn"><MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" /><span>Pedir no WhatsApp</span></a>
          </div>
          <div className="w-full grid grid-cols-3 gap-4 pt-6 border-t border-[#EAE8E2] text-xs font-mono"><div><span className="text-[#888880] text-[10px] uppercase block tracking-wider">Envio</span><span className="text-[#111111] font-semibold uppercase text-[11px] mt-0.5 block">Todo o Brasil</span></div><div><span className="text-[#888880] text-[10px] uppercase block tracking-wider">Pagamento</span><span className="text-[#111111] font-semibold uppercase text-[11px] mt-0.5 block">5% OFF no Pix</span></div><div><span className="text-[#888880] text-[10px] uppercase block tracking-wider">Preço</span><span className="text-[#111111] font-semibold uppercase text-[11px] mt-0.5 block">R$ 149,90</span></div></div>
        </div>
        <div className="lg:col-span-5"><div className="bg-white border border-[#EAE8E2] p-4 sm:p-5 shadow-sm"><div className="relative aspect-[4/5] bg-[#F2F1ED] overflow-hidden group"><img src={storeConfig.heroImage} alt={storeConfig.heroProductName || 'Camisa de futebol'} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" loading="eager" /><div className="absolute top-3 left-3 bg-[#111111] text-white text-[10px] font-mono font-bold px-2.5 py-1 uppercase tracking-wider">Destaque da Semana</div><div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-3 border border-[#EAE8E2] flex items-center justify-between"><div><h3 className="text-xs font-bold uppercase text-[#111111]">{storeConfig.heroProductName || storeConfig.name}</h3><span className="text-[10px] font-mono text-[#666660] uppercase">{storeConfig.heroProductMeta || 'Tam P ao XGG'}</span></div><div className="text-right"><span className="text-sm font-mono font-bold text-[#111111]">R$ {heroPrice.toFixed(2).replace('.', ',')}</span></div></div></div></div></div>
      </div></div>
    </section>
  );
};
