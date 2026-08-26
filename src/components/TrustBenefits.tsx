import React from 'react';
import { Truck, QrCode, ShieldCheck, RefreshCw } from 'lucide-react';

export const TrustBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Truck,
      title: 'Envio para Todo o Brasil',
      description: 'Código de rastreio pelos Correios e transportadoras com seguro.',
    },
    {
      icon: QrCode,
      title: '5% de Desconto no Pix',
      description: 'Confirmação instantânea do pedido e prioridade de despacho.',
    },
    {
      icon: ShieldCheck,
      title: 'Qualidade Padrão 1:1',
      description: 'Tecido tecnológico, escudos bordados em alto relevo e acabamento oficial.',
    },
    {
      icon: RefreshCw,
      title: 'Garantia de Troca 7 Dias',
      description: 'Troca simples e rápida caso o caimento não fique perfeito no seu corpo.',
    },
  ];

  return (
    <section className="bg-white border-y border-[#EAE8E2] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex flex-col p-4 bg-[#FAF9F5] border border-[#EAE8E2]"
              >
                <div className="w-9 h-9 bg-white border border-[#E0DED7] flex items-center justify-center text-[#111111] mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#111111] uppercase tracking-tight mb-1">
                  {benefit.title}
                </h3>
                <p className="text-xs text-[#666660] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
