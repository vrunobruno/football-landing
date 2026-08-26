import React from 'react';
import { MessageCircle, ShieldCheck, QrCode, Truck } from 'lucide-react';
import { StoreConfig } from '../types';
import { buildWhatsAppLink } from '../data/storeData';

interface FinalCTAProps {
  storeConfig: StoreConfig;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ storeConfig }) => {
  const whatsappUrl = buildWhatsAppLink(
    storeConfig.whatsappNumber,
    undefined,
    undefined,
    'Olá! Estava navegando no site e gostaria de confirmar a disponibilidade de modelos e prazos de entrega.'
  );

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-[#EAE8E2] text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF9F5] border border-[#E0DED7] text-[#111111] text-[11px] font-mono uppercase tracking-wider mb-6">
          <span className="h-2 w-2 rounded-full bg-[#25D366]"></span>
          <span>Atendimento WhatsApp Disponível</span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#111111] mb-4">
          Pronto para vestir seu manto?
        </h2>

        {/* Supporting text */}
        <p className="text-sm sm:text-base text-[#666660] max-w-lg mx-auto mb-8 leading-relaxed">
          Tire dúvidas sobre tamanhos, personalização de nome e número ou consulte o estoque em tempo real direto com a nossa equipe.
        </p>

        {/* Main CTA */}
        <div className="max-w-sm mx-auto mb-10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-4 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm uppercase tracking-wider transition-transform active:scale-[0.98] cursor-pointer shadow-md"
            id="final-whatsapp-cta"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Falar no WhatsApp Agora</span>
          </a>
        </div>

        {/* Trust summary strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono uppercase tracking-wider text-[#777770] pt-8 border-t border-[#F0EFEB]">
          <div className="flex items-center justify-center gap-1.5">
            <QrCode className="w-4 h-4 text-[#111111]" />
            <span>5% OFF no Pix</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <Truck className="w-4 h-4 text-[#111111]" />
            <span>Envio com Rastreio</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#111111]" />
            <span>7 Dias de Garantia</span>
          </div>
        </div>

      </div>
    </section>
  );
};
