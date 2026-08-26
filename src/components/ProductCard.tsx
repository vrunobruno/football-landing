import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, MessageCircle } from 'lucide-react';
import { Product, SizeOption, StoreConfig } from '../types';
import { buildWhatsAppLink, formatBRL, getProductImages } from '../data/storeData';

interface ProductCardProps {
  product: Product;
  storeConfig: StoreConfig;
  onQuickView: (product: Product) => void;
  onOpenSizeGuide: () => void;
}

const SWIPE_THRESHOLD = 32;

export const ProductCard: React.FC<ProductCardProps> = ({ product, storeConfig, onQuickView, onOpenSizeGuide }) => {
  const defaultSize: SizeOption = product.sizes.includes('G') ? 'G' : product.sizes.includes('M') ? 'M' : product.sizes[0];
  const images = getProductImages(product);
  const [selectedSize, setSelectedSize] = useState<SizeOption>(defaultSize);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const pointerStartX = useRef<number | null>(null);
  const didSwipe = useRef(false);
  const whatsappUrl = buildWhatsAppLink(storeConfig.whatsappNumber, { name: product.name, price: product.price }, selectedSize);
  const hasMultipleImages = images.length > 1;

  const setImage = (index: number) => setActiveImageIndex((index + images.length) % images.length);

  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    pointerStartX.current = event.clientX;
    didSwipe.current = false;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (pointerStartX.current === null || !hasMultipleImages) return;
    const distance = event.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(distance) < SWIPE_THRESHOLD) return;
    didSwipe.current = true;
    setImage(activeImageIndex + (distance < 0 ? 1 : -1));
  };

  const handleImageClick = () => {
    if (didSwipe.current) {
      didSwipe.current = false;
      return;
    }
    onQuickView(product);
  };

  return (
    <article className="group relative flex flex-col bg-white border border-[#EAE8E2] hover:border-[#D5D2C9] hover:shadow-md transition-all duration-200 overflow-hidden" id={`product-card-${product.id}`}>
      <div className="relative aspect-[4/4.6] w-full bg-[#F4F3EF] overflow-hidden">
        <button
          type="button"
          onClick={handleImageClick}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => { pointerStartX.current = null; }}
          className="absolute inset-0 w-full h-full cursor-pointer touch-pan-y focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#111111]"
          aria-label={`Ver detalhes de ${product.name}`}
        >
          <img src={images[activeImageIndex]} alt={product.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        </button>

        {product.badge && <div className="absolute top-3 left-3 z-10 pointer-events-none"><span className="bg-[#111111] text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider shadow-sm">{product.badge}</span></div>}

        {hasMultipleImages && <>
          <button type="button" onClick={() => setImage(activeImageIndex - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/90 hover:bg-white text-[#111111] border border-[#E0DED7] opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all cursor-pointer shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]" aria-label="Imagem anterior">
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button type="button" onClick={() => setImage(activeImageIndex + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/90 hover:bg-white text-[#111111] border border-[#E0DED7] opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all cursor-pointer shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]" aria-label="Próxima imagem">
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
            {images.map((_, index) => <button key={index} type="button" onClick={() => setImage(index)} aria-label={`Imagem ${index + 1} de ${images.length}`} aria-current={index === activeImageIndex ? 'true' : undefined} className={`h-1.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] ${index === activeImageIndex ? 'w-4 bg-[#111111]' : 'w-1.5 bg-white/90 hover:bg-white'}`}></button>)}
          </div>
        </>}

        <button type="button" onClick={() => onQuickView(product)} className="absolute top-3 right-3 z-20 p-2 bg-white/90 hover:bg-white text-[#111111] border border-[#E0DED7] opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all cursor-pointer shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]" title="Ver detalhes" aria-label="Ver detalhes" id={`quick-view-btn-${product.id}`}>
          <Eye className="w-3.5 h-3.5" />
        </button>
        <div className="absolute bottom-2.5 right-2.5 bg-white/90 text-[#555550] px-2 py-0.5 text-[10px] font-mono font-semibold pointer-events-none">{product.year}</div>
      </div>

      <div className="flex flex-col flex-1 p-4 sm:p-5 bg-white">
        <div className="text-[10px] font-mono uppercase tracking-wider text-[#888880] mb-1">{product.team} • {product.league}</div>
        <h3 className="mb-2.5"><button type="button" onClick={() => onQuickView(product)} className="text-left text-sm font-bold uppercase tracking-tight text-[#111111] hover:underline cursor-pointer line-clamp-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]" title={product.name}>{product.name}</button></h3>

        <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-[#F0EFEB]">
          <span className="text-base font-mono font-bold text-[#111111]">{formatBRL(product.price)}</span>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#666660] mb-1.5">
            <span>Tamanho: <strong className="text-[#111111]">{selectedSize}</strong></span>
            <button onClick={onOpenSizeGuide} className="text-[#888880] hover:text-[#111111] underline cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]">Tabela</button>
          </div>
          <div className="grid grid-cols-5 gap-1">
            {product.sizes.map((size) => {
              const isSelected = selectedSize === size;
              return <button key={size} type="button" onClick={() => setSelectedSize(size)} aria-pressed={isSelected} className={`py-1.5 text-xs font-mono font-bold transition-colors cursor-pointer border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] ${isSelected ? 'bg-[#111111] text-white border-[#111111]' : 'bg-[#FAFAF8] text-[#555550] hover:bg-[#EAE8E2] border-[#E2E0D8]'}`} id={`size-btn-${product.id}-${size}`}>{size}</button>;
            })}
          </div>
        </div>

        <div className="mt-auto pt-1"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-transform active:scale-[0.98] cursor-pointer shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]" id={`buy-whatsapp-btn-${product.id}`}><MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" /><span>Comprar pelo WhatsApp</span></a></div>
      </div>
    </article>
  );
};
