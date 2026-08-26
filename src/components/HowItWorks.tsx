import React from 'react';
import { Shirt, Ruler, MessageCircle } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Shirt,
      title: 'ESCOLHA SEU MANTO',
      description: 'Navegue pelo catálogo curado e encontre a camisa do seu time do coração ou clube europeu.',
    },
    {
      number: '02',
      icon: Ruler,
      title: 'DEFINA O TAMANHO',
      description: 'Selecione de P ao XGG com a ajuda da nossa tabela dimensional de altura e peso.',
    },
    {
      number: '03',
      icon: MessageCircle,
      title: 'CONFIRME NO WHATSAPP',
      description: 'Ao clicar, a conversa abre no WhatsApp com modelo e tamanho prontos. Pagamento rápido e envio rastreado.',
    },
  ];

  return (
    <section id="como-funciona" className="py-14 sm:py-20 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-xl mb-10 sm:mb-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#777770] font-semibold block mb-1">
            // PEDIDO EM 3 PASSOS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#111111]">
            Como Funciona
          </h2>
          <p className="text-sm text-[#666660] mt-2 font-normal">
            Sem cadastros longos ou formulários complicados. Atendimento humano direto pelo WhatsApp.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex flex-col p-6 sm:p-7 bg-white border border-[#EAE8E2]"
              >
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F0EFEB]">
                  <span className="font-mono text-2xl font-bold text-[#111111]">
                    {step.number}
                  </span>
                  <div className="w-9 h-9 border border-[#E0DED7] bg-[#FAF9F5] flex items-center justify-center text-[#111111]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-sm font-bold text-[#111111] mb-2 uppercase tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs text-[#666660] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
