import React, { useEffect, useRef, useState } from 'react';
import { X, MessageCircle, ShieldCheck, Ruler } from 'lucide-react';
import { Product, SizeOption, StoreConfig } from '../types';
import { formatBRL, buildWhatsAppLink, getProductImages } from '../data/storeData';

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
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);
  const [selectedSize, setSelectedSize] = useState<SizeOption | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const defaultSize = product && (product.sizes.includes('G')
    ? 'G'
    : product.sizes.includes('M')
      ? 'M'
      : product.sizes[0]);

  useEffect(() => {
    if (!product) return;

    previouslyFocusedElement.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setSelectedSize(defaultSize);
    setActiveImage(getProductImages(product)[0]);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();

      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      previouslyFocusedElement.current?.focus();
    };
  }, [product]);

  if (!product || !defaultSize) return null;

  const selectedProductSize = selectedSize ?? defaultSize;
  const images = getProductImages(product);
  const displayedImage = activeImage ?? images[0];
  const whatsappUrl = buildWhatsAppLink(storeConfig.whatsappNumber, { name: product.name, price: product.price }, selectedProductSize);
  const formattedMsg = `Olá! Tenho interesse na camisa ${product.name}, tamanho ${selectedProductSize}, por ${formatBRL(product.price)}. Ainda está disponível?`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" onClick={onClose} aria-hidden="true" />

      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="product-modal-title" className="relative w-full max-w-3xl bg-white border border-[#EAE8E2] shadow-2xl overflow-hidden z-10 my-auto">
        <button onClick={onClose} ref={closeButtonRef} className="absolute top-4 right-4 z-20 p-2 bg-white hover:bg-[#F2F0E8] text-[#111111] border border-[#E0DED7] transition-colors cursor-pointer shadow-xs" aria-label="Fechar" id="modal-close-btn">
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 bg-[#F7F6F2] flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#EAE8E2]">
            <div className="relative aspect-square overflow-hidden bg-[#FAF9F5] border border-[#E0DED7] mb-4">
              {product.badge && (
                <div className="absolute top-3 left-3 z-10 bg-[#111111] text-white text-[10px] font-mono font-bold px-2.5 py-0.5 uppercase tracking-wider">{product.badge}</div>
              )}
              <img src={displayedImage} alt={product.name} className="w-full h-full object-cover object-center" />
            </div>

            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((image, index) => (
                  <button key={image} type="button" onClick={() => setActiveImage(image)} aria-label={`Imagem ${index + 1} de ${images.length}`} aria-pressed={displayedImage === image} className={`w-14 h-14 overflow-hidden border cursor-pointer transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] ${displayedImage === image ? 'border-[#111111] ring-1 ring-black' : 'border-[#D5D2C9] opacity-70'}`}>
                    <img src={image} alt={`${product.name}, imagem ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="mt-4 pt-3 border-t border-[#E2DFD7] flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#777770]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#111111]" />
                Qualidade 1:1 Oficial
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#777770] mb-1">
                <span className="text-[#111111] font-bold">{product.team}</span>
                <span>•</span>
                <span>{product.league}</span>
                <span>•</span>
                <span>{product.year}</span>
              </div>

              <h2 id="product-modal-title" className="font-display text-2xl font-bold uppercase tracking-tight text-[#111111] mb-4">{product.name}</h2>

              <div className="p-4 bg-[#FAF9F5] border border-[#EAE8E2] mb-4">
                <span className="text-2xl font-mono font-bold text-[#111111]">{formatBRL(product.price)}</span>
              </div>

              <p className="text-xs text-[#555550] leading-relaxed mb-4">{product.description}</p>

              {product.details && (
                <div className="space-y-1.5 text-[11px] font-mono text-[#555550] mb-4 p-3 bg-[#FAF9F5] border border-[#EAE8E2]">
                  <div className="flex justify-between"><span className="text-[#888880]">Tecido:</span><span className="text-[#111111] font-medium">{product.details.fabric}</span></div>
                  <div className="flex justify-between"><span className="text-[#888880]">Escudo:</span><span className="text-[#111111] font-medium">{product.details.shield}</span></div>
                  <div className="flex justify-between"><span className="text-[#888880]">Padrão:</span><span className="text-[#111111] font-bold">{product.details.origin}</span></div>
                </div>
              )}

              <div className="mb-4">
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#666660] mb-2">
                  <span>Tamanho: <strong className="text-[#111111]">{selectedProductSize}</strong></span>
                  <button onClick={onOpenSizeGuide} className="flex items-center gap-1 text-[#111111] hover:underline cursor-pointer font-bold">
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Tabela de Medidas</span>
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-1.5">
                  {product.sizes.map((size) => {
                    const isSelected = selectedProductSize === size;
                    return (
                      <button key={size} type="button" onClick={() => setSelectedSize(size)} aria-pressed={isSelected} className={`py-2 text-xs font-mono font-bold uppercase transition-colors cursor-pointer border ${isSelected ? 'bg-[#111111] text-white border-[#111111]' : 'bg-[#FAFAF8] text-[#555550] hover:bg-[#EAE8E2] border-[#E2E0D8]'}`}>
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-2.5 bg-[#FAF9F5] border border-[#EAE8E2] mb-4">
                <span className="text-[9px] font-mono text-[#888880] uppercase tracking-wider block mb-1">Mensagem Automática WhatsApp:</span>
                <p className="text-xs text-[#555550] italic font-mono">"{formattedMsg}"</p>
              </div>
            </div>

            <div className="pt-2">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider transition-transform active:scale-[0.98] cursor-pointer shadow-sm" id="modal-whatsapp-cta">
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Comprar pelo WhatsApp • Tam {selectedProductSize}</span>
              </a>
              <span className="block text-center text-[10px] font-mono text-[#888880] uppercase tracking-wider mt-2">Atendimento direto com o vendedor • Sem burocracia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
