import React, { useEffect } from 'react';
import { X, Ruler, Sparkles } from 'lucide-react';
import { sizeGuideData } from '../data/storeData';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white border border-[#EAE8E2] shadow-2xl p-6 sm:p-8 z-10 my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EAE8E2]">
          <div className="flex items-center gap-3">
            <div className="p-2 border border-[#E0DED7] bg-[#FAF9F5] text-[#111111]">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-[#111111] uppercase tracking-tight">
                Tabela Oficial de Medidas
              </h3>
              <p className="text-xs font-mono uppercase tracking-wider text-[#777770]">
                Padrão brasileiro de camisas de futebol
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-white hover:bg-[#F2F0E8] text-[#111111] border border-[#E0DED7] transition-colors cursor-pointer"
            aria-label="Fechar"
            id="size-guide-close-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Measurement Table */}
        <div className="overflow-x-auto border border-[#EAE8E2] mb-6">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[#FAF9F5] text-[#111111] font-bold border-b border-[#EAE8E2] uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Tamanho</th>
                <th className="py-3 px-4">Largura (Tórax)</th>
                <th className="py-3 px-4">Comprimento</th>
                <th className="py-3 px-4">Altura Aprox.</th>
                <th className="py-3 px-4">Peso Aprox.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE8E2] text-[#555550]">
              {sizeGuideData.map((row) => (
                <tr key={row.size} className="hover:bg-[#FAF9F5] transition-colors">
                  <td className="py-3 px-4 font-bold text-[#111111]">
                    <span className="inline-block px-2.5 py-0.5 bg-[#FAF9F5] text-[#111111] border border-[#DCDAD2]">
                      {row.size}
                    </span>
                  </td>
                  <td className="py-3 px-4">{row.chest}</td>
                  <td className="py-3 px-4">{row.length}</td>
                  <td className="py-3 px-4">{row.height}</td>
                  <td className="py-3 px-4">{row.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tips Callout */}
        <div className="p-4 bg-[#FAF9F5] border border-[#EAE8E2] space-y-2 text-xs text-[#555550]">
          <div className="flex items-center gap-2 font-bold text-[#111111] uppercase font-mono tracking-wider">
            <Sparkles className="w-4 h-4 text-[#111111]" />
            <span>Recomendações de Caimento:</span>
          </div>
          <p className="leading-relaxed">
            • <strong>Versão Torcedor:</strong> Modelagem tradicional e confortável. Escolha o tamanho que você costuma vestir no dia a dia.
          </p>
          <p className="leading-relaxed">
            • <strong>Versão Jogador:</strong> Corte mais atlético e ajustado ao corpo. Se preferir um ajuste mais folgado, recomendamos escolher um tamanho acima.
          </p>
          <p className="leading-relaxed text-[#111111] font-mono text-[11px] font-semibold">
            • Se tiver qualquer dúvida, nosso suporte no WhatsApp pode confirmar as medidas exatas com fita métrica antes do envio!
          </p>
        </div>

        {/* Close Button Bottom */}
        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full py-3.5 bg-[#111111] hover:bg-black text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Voltar para o catálogo
          </button>
        </div>

      </div>
    </div>
  );
};
