import React from 'react';
import { Instagram, MessageCircle, ShieldCheck, QrCode, Truck, ArrowUp } from 'lucide-react';
import { StoreConfig } from '../types';
import { buildWhatsAppLink } from '../data/storeData';

interface FooterProps {
  storeConfig: StoreConfig;
  onOpenSizeGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ storeConfig, onOpenSizeGuide }) => {
  const whatsappUrl = buildWhatsAppLink(storeConfig.whatsappNumber);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EFECE6] text-[#666660] border-t border-[#E2DFD7] text-xs pt-12 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <span className="font-display text-2xl font-bold uppercase text-[#111111] tracking-tight block">
              {storeConfig.name}
            </span>
            <p className="text-xs text-[#666660] leading-relaxed">
              Mantos de futebol nacionais, internacionais e clássicos retrô com precisão de acabamento 1:1 para torcedores e colecionadores.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href={storeConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-[#D5D2C9] bg-white hover:border-[#111111] flex items-center justify-center text-[#111111] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-[#D5D2C9] bg-white hover:border-[#25D366] flex items-center justify-center text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-mono font-bold text-[#111111] uppercase tracking-wider text-xs mb-3">
              Catálogo
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#catalogo" className="hover:text-[#111111] transition-colors">
                  Todas as Camisas
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-[#111111] transition-colors">
                  Mais Vendidas
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenSizeGuide}
                  className="hover:text-[#111111] transition-colors text-left cursor-pointer"
                >
                  Tabela Oficial de Medidas
                </button>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#111111] transition-colors">
                  Como Funciona o Pedido
                </a>
              </li>
            </ul>
          </div>

          {/* Shipping and Guarantees */}
          <div>
            <h4 className="font-mono font-bold text-[#111111] uppercase tracking-wider text-xs mb-3">
              Garantias
            </h4>
            <ul className="space-y-2.5 text-xs text-[#555550]">
              <li className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-[#111111] shrink-0" />
                <span>Envio rastreado via Correios / Jadlog</span>
              </li>
              <li className="flex items-center gap-2">
                <QrCode className="w-3.5 h-3.5 text-[#111111] shrink-0" />
                <span>5% de desconto imediato no Pix</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#111111] shrink-0" />
                <span>7 dias de garantia para troca</span>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Contact */}
          <div>
            <h4 className="font-mono font-bold text-[#111111] uppercase tracking-wider text-xs mb-3">
              Atendimento WhatsApp
            </h4>
            <p className="text-xs text-[#666660] mb-3">
              Dúvidas sobre disponibilidade ou medidas:
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 bg-white hover:bg-[#111111] hover:text-white border border-[#D5D2C9] text-[#111111] font-mono font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>{storeConfig.whatsappDisplay}</span>
            </a>
            <span className="block text-[10px] font-mono text-[#888880] mt-2">
              Segunda a Sábado • 09h às 21h
            </span>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#D5D2C9] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#888880]">
          <p>
            © {new Date().getFullYear()} {storeConfig.name}. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-[#111111] transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
