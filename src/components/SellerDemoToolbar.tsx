import React, { useState } from 'react';
import { Sliders, RotateCcw, Palette } from 'lucide-react';
import { StoreConfig } from '../types';

interface SellerDemoToolbarProps {
  storeConfig: StoreConfig;
  onUpdateStoreConfig: (newConfig: StoreConfig) => void;
  onReset: () => void;
}

export const SellerDemoToolbar: React.FC<SellerDemoToolbarProps> = ({
  storeConfig,
  onUpdateStoreConfig,
  onReset,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempName, setTempName] = useState(storeConfig.name);
  const [tempPhone, setTempPhone] = useState(storeConfig.whatsappDisplay);
  const [tempInstagram, setTempInstagram] = useState(storeConfig.instagramHandle);

  const presets = [
    {
      name: 'MANTO FC',
      phone: '(51) 99876-5432',
      phoneClean: '5551998765432',
      instagram: '@mantofc.store',
      tagline: 'VISTA A CAMISA.',
      subtagline: 'Camisas de futebol para quem vive o jogo. Mantos 2025/2026, internacionais e clássicos retrô com envio rápido para todo o Brasil.',
    },
    {
      name: 'GOLAÇO KITS',
      phone: '(11) 98765-4321',
      phoneClean: '5511987654321',
      instagram: '@golaco.kits',
      tagline: 'O SEU MANTO SAGRADO.',
      subtagline: 'As camisas mais pesadas do futebol mundial no melhor preço do Brasil. Qualidade Tailandesa 1:1 e entrega garantida.',
    },
    {
      name: 'RETRÔ LEGENDS',
      phone: '(21) 99123-4567',
      phoneClean: '5521991234567',
      instagram: '@retrolegends.br',
      tagline: 'HISTÓRIA EM CADA FIO.',
      subtagline: 'As relíquias mais emblemáticas das Copas do Mundo e campeonatos históricos. Reviva os momentos lendários do futebol.',
    }
  ];

  const handleApplyPreset = (preset: typeof presets[0]) => {
    setTempName(preset.name);
    setTempPhone(preset.phone);
    setTempInstagram(preset.instagram);

    onUpdateStoreConfig({
      ...storeConfig,
      name: preset.name,
      whatsappDisplay: preset.phone,
      whatsappNumber: preset.phoneClean,
      instagramHandle: preset.instagram,
      tagline: preset.tagline,
      subtagline: preset.subtagline,
    });
  };

  const handleSaveCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanDigits = tempPhone.replace(/\D/g, '');
    const cleanNumber = cleanDigits.startsWith('55') ? cleanDigits : `55${cleanDigits}`;

    onUpdateStoreConfig({
      ...storeConfig,
      name: tempName || 'MINHA LOJA',
      whatsappDisplay: tempPhone || '(11) 99999-9999',
      whatsappNumber: cleanNumber || '5511999999999',
      instagramHandle: tempInstagram.startsWith('@') ? tempInstagram : `@${tempInstagram}`,
    });
  };

  return (
    <div className="bg-[#EFECE6] border-b border-[#E0DED7] text-xs font-mono text-[#555550]">
      {/* Top micro banner */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[11px]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#25D366]"></span>
          <span className="font-bold text-[#111111] uppercase tracking-wider">Protótipo Landing Page</span>
          <span className="hidden sm:inline text-[#888880]">• Demonstração para Vendedores</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-[#111111] text-[#111111] hover:text-white font-bold text-[10px] uppercase tracking-wider border border-[#D5D2C9] transition-colors cursor-pointer"
            id="toggle-seller-demo-btn"
          >
            <Sliders className="w-3 h-3" />
            <span>{isOpen ? 'Fechar Painel' : 'Personalizar Loja'}</span>
          </button>
        </div>
      </div>

      {/* Expandable Customizer */}
      {isOpen && (
        <div className="p-4 bg-[#FAF9F5] border-t border-[#E0DED7] animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-[#111111]" />
                  <span>Personalize os dados da loja em tempo real</span>
                </h4>
                <p className="text-[11px] text-[#777770] mt-0.5">
                  Altere nome, WhatsApp e Instagram para testar os links de fechamento direto.
                </p>
              </div>

              {/* Quick Presets */}
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-[#888880] uppercase">Modelos:</span>
                {presets.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => handleApplyPreset(p)}
                    className={`px-2.5 py-1 text-[10px] font-bold uppercase transition-colors cursor-pointer border ${
                      storeConfig.name === p.name
                        ? 'bg-[#111111] text-white border-[#111111]'
                        : 'bg-white text-[#555550] hover:text-[#111111] border-[#D5D2C9]'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSaveCustom} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#666660] mb-1">
                  Nome da Marca
                </label>
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  placeholder="Ex: CAMISA 10 STORE"
                  className="w-full bg-white border border-[#D5D2C9] px-3 py-2 text-xs text-[#111111] uppercase focus:outline-none focus:border-[#111111]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#666660] mb-1">
                  WhatsApp (DDD + Número)
                </label>
                <input
                  type="text"
                  value={tempPhone}
                  onChange={(e) => setTempPhone(e.target.value)}
                  placeholder="Ex: (11) 99999-9999"
                  className="w-full bg-white border border-[#D5D2C9] px-3 py-2 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#666660] mb-1">
                  Instagram (@perfil)
                </label>
                <input
                  type="text"
                  value={tempInstagram}
                  onChange={(e) => setTempInstagram(e.target.value)}
                  placeholder="Ex: @minhaloja.oficial"
                  className="w-full bg-white border border-[#D5D2C9] px-3 py-2 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                />
              </div>

              <div className="flex items-end gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2 px-3 bg-[#111111] hover:bg-black text-white font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Atualizar Loja
                </button>
                <button
                  type="button"
                  onClick={onReset}
                  className="p-2 bg-white text-[#777770] hover:text-[#111111] border border-[#D5D2C9] transition-colors cursor-pointer"
                  title="Restaurar padrão"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};
