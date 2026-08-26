import React, { useState, useEffect } from 'react';
import { X, MessageCircle, ShieldCheck, Truck, QrCode, Ruler } from 'lucide-react';
import { Product, SizeOption, StoreConfig } from '../types';
import { formatBRL, buildWhatsAppLink } from '../data/storeData';

interface ProductModalProps {
  product: Product | null;
  storeConfig: StoreConfig;
  onClose: () => void;
  onOpenSizeGuide: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  storeConfig,
  onClose,
  onOpenSizeGuide,
}) => {
  if (!product) return null;

  const defaultSize: SizeOption = product.sizes.includes('G')
    ? 'G'
    : product.sizes.includes('M')
    ? 'M'
    : product.sizes[0];

  const [selectedSize, setSelectedSize] = useState<SizeOption>(defaultSize);
  const [activeImage, setActiveImage] = useState<string>(product.image);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const pixPrice = product.price * (1 - storeConfig.pixDiscountPercent / 100);
  const whatsappUrl = buildWhatsAppLink(
    storeConfig.whatsappNumber,
    { name: product.name, price: product.price },
    selectedSize
  );

  const formattedMsg = `Olá! Tenho interesse na camisa ${product.name}, tamanho ${selectedSize}, por ${formatBRL(product.price)}. Ainda está disponível para envio?`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-white border border-[#EAE8E2] shadow-2xl overflow-hidden z-10 my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white hover:bg-[#F2F0E8] text-[#111111] border border-[#E0DED7] transition-colors cursor-pointer shadow-xs"
          aria-label="Fechar"
          id="modal-close-btn"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Image Showcase */}
          <div className="p-6 bg-[#F7F6F2] flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#EAE8E2]">
            <div className="relative aspect-square overflow-hidden bg-[#FAF9F5] border border-[#E0DED7] mb-4">
              {product.badge && (
                <div className="absolute top-3 left-3 z-10 bg-[#111111] text-white text-[10px] font-mono font-bold px-2.5 py-0.5 uppercase tracking-wider">
                  {product.badge}
                </div>
              )}
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Thumbnail switcher if secondary image exists */}
            {product.secondaryImage && (
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveImage(product.image)}
                  className={`w-14 h-14 overflow-hidden border cursor-pointer transition-all ${
                    activeImage === product.image ? 'border-[#111111] ring-1 ring-black' : 'border-[#D5D2C9] opacity-70'
                  }`}
                >
                  <img src={product.image} alt="Vista 1" className="w-full h-full object-cover" />
                </button>
                <button
                  onClick={() => setActiveImage(product.secondaryImage!)}
                  className={`w-14 h-14 overflow-hidden border cursor-pointer transition-all ${
                    activeImage === product.secondaryImage ? 'border-[#111111] ring-1 ring-black' : 'border-[#D5D2C9] opacity-70'
                  }`}
                >
                  <img src={product.secondaryImage} alt="Vista 2" className="w-full h-full object-cover" />
                </button>
              </div>
            )}

            {/* Trust Mini Bullet */}
            <div className="mt-4 pt-3 border-t border-[#E2DFD7] flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#777770]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#111111]" />
                Qualidade 1:1 Oficial
              </span>
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#111111]" />
                Rastreio Incluso
              </span>
            </div>
          </div>

          {/* Right Column: Details & Conversion Action */}
          <div className="p-6 sm:p-8 flex flex-col justify-between bg-white">
            
            <div>
              {/* League & Year */}
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#777770] mb-1">
                <span className="text-[#111111] font-bold">{product.team}</span>
                <span>•</span>
                <span>{product.league}</span>
                <span>•</span>
                <span>{product.year}</span>
              </div>

              {/* Title */}
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-[#111111] mb-4">
                {product.name}
              </h2>

              {/* Price Section */}
              <div className="p-4 bg-[#FAF9F5] border border-[#EAE8E2] mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-mono font-bold text-[#111111]">
                    {formatBRL(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs font-mono text-[#888880] line-through">
                      {formatBRL(product.originalPrice)}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#25D366] font-bold mt-1">
                  <QrCode className="w-3.5 h-3.5" />
                  <span>Pix: {formatBRL(pixPrice)} (5% OFF)</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-[#555550] leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Specs */}
              {product.details && (
                <div className="space-y-1.5 text-[11px] font-mono text-[#555550] mb-4 p-3 bg-[#FAF9F5] border border-[#EAE8E2]">
                  <div className="flex justify-between">
                    <span className="text-[#888880]">Tecido:</span>
                    <span className="text-[#111111] font-medium">{product.details.fabric}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888880]">Escudo:</span>
                    <span className="text-[#111111] font-medium">{product.details.shield}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888880]">Padrão:</span>
                    <span className="text-[#111111] font-bold">{product.details.origin}</span>
                  </div>
                </div>
              )}

              {/* Size Selector */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#666660] mb-2">
                  <span>Tamanho: <strong className="text-[#111111]">{selectedSize}</strong></span>
                  <button
                    onClick={onOpenSizeGuide}
                    className="flex items-center gap-1 text-[#111111] hover:underline cursor-pointer font-bold"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Tabela de Medidas</span>
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-1.5">
                  {product.sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 text-xs font-mono font-bold uppercase transition-colors cursor-pointer border ${
                          isSelected
                            ? 'bg-[#111111] text-white border-[#111111]'
                            : 'bg-[#FAFAF8] text-[#555550] hover:bg-[#EAE8E2] border-[#E2E0D8]'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Preloaded message preview */}
              <div className="p-2.5 bg-[#FAF9F5] border border-[#EAE8E2] mb-4">
                <span className="text-[9px] font-mono text-[#888880] uppercase tracking-wider block mb-1">
                  Mensagem Automática WhatsApp:
                </span>
                <p className="text-xs text-[#555550] italic font-mono">
                  "{formattedMsg}"
                </p>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider transition-transform active:scale-[0.98] cursor-pointer shadow-sm"
                id="modal-whatsapp-cta"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Comprar pelo WhatsApp • Tam {selectedSize}</span>
              </a>
              <span className="block text-center text-[10px] font-mono text-[#888880] uppercase tracking-wider mt-2">
                Atendimento direto com o vendedor • Sem burocracia
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
