import React, { useState } from 'react';
import { MessageCircle, Eye } from 'lucide-react';
import { Product, SizeOption, StoreConfig } from '../types';
import { formatBRL, buildWhatsAppLink } from '../data/storeData';

interface ProductCardProps {
  product: Product;
  storeConfig: StoreConfig;
  onQuickView: (product: Product) => void;
  onOpenSizeGuide: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  storeConfig,
  onQuickView,
  onOpenSizeGuide,
}) => {
  const defaultSize: SizeOption = product.sizes.includes('G')
    ? 'G'
    : product.sizes.includes('M')
    ? 'M'
    : product.sizes[0];

  const [selectedSize, setSelectedSize] = useState<SizeOption>(defaultSize);
  const [isHovered, setIsHovered] = useState(false);

  const pixPrice = product.price * (1 - storeConfig.pixDiscountPercent / 100);
  const whatsappUrl = buildWhatsAppLink(
    storeConfig.whatsappNumber,
    { name: product.name, price: product.price },
    selectedSize
  );

  return (
    <div
      className="group relative flex flex-col bg-white border border-[#EAE8E2] hover:border-[#D5D2C9] hover:shadow-md transition-all duration-200 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id={`product-card-${product.id}`}
    >
      {/* Product Image Stage */}
      <div 
        className="relative aspect-[4/4.6] w-full bg-[#F4F3EF] overflow-hidden cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        {/* Subtle Badge Tag */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-[#111111] text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider shadow-sm">
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick View Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute top-3 right-3 z-10 p-2 bg-white/90 hover:bg-white text-[#111111] border border-[#E0DED7] opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all cursor-pointer shadow-sm"
          title="Ver detalhes"
          aria-label="Ver detalhes"
          id={`quick-view-btn-${product.id}`}
        >
          <Eye className="w-3.5 h-3.5" />
        </button>

        {/* Image */}
        <img
          src={isHovered && product.secondaryImage ? product.secondaryImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Year Label */}
        <div className="absolute bottom-2.5 right-2.5 bg-white/90 text-[#555550] px-2 py-0.5 text-[10px] font-mono font-semibold">
          {product.year}
        </div>
      </div>

      {/* Product Info Body */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 bg-white">
        
        {/* League and Team */}
        <div className="text-[10px] font-mono uppercase tracking-wider text-[#888880] mb-1">
          {product.team} • {product.league}
        </div>

        {/* Product Title */}
        <h3
          onClick={() => onQuickView(product)}
          className="text-sm font-bold uppercase tracking-tight text-[#111111] hover:underline cursor-pointer line-clamp-1 mb-2.5"
          title={product.name}
        >
          {product.name}
        </h3>

        {/* Price & Pix */}
        <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-[#F0EFEB]">
          <div>
            <span className="text-base font-mono font-bold text-[#111111]">
              {formatBRL(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs font-mono text-[#999990] line-through ml-2">
                {formatBRL(product.originalPrice)}
              </span>
            )}
          </div>
          <span className="text-[11px] font-mono text-[#25D366] font-bold">
            Pix: {formatBRL(pixPrice)}
          </span>
        </div>

        {/* Available Sizes Picker */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#666660] mb-1.5">
            <span>Tamanho: <strong className="text-[#111111]">{selectedSize}</strong></span>
            <button
              onClick={onOpenSizeGuide}
              className="text-[#888880] hover:text-[#111111] underline cursor-pointer"
            >
              Tabela
            </button>
          </div>
          
          <div className="grid grid-cols-5 gap-1">
            {product.sizes.map((size) => {
              const isSelected = selectedSize === size;
              return (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-1.5 text-xs font-mono font-bold transition-colors cursor-pointer border ${
                    isSelected
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-[#FAFAF8] text-[#555550] hover:bg-[#EAE8E2] border-[#E2E0D8]'
                  }`}
                  id={`size-btn-${product.id}-${size}`}
                  type="button"
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        {/* WhatsApp Conversion Button */}
        <div className="mt-auto pt-1">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-transform active:scale-[0.98] cursor-pointer shadow-sm"
            id={`buy-whatsapp-btn-${product.id}`}
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
            <span>Comprar pelo WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
