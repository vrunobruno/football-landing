import React, { useState } from 'react';
import { Product, StoreConfig, SizeOption } from '../types';
import { formatBRL, buildWhatsAppLink, getProductImages } from '../data/storeData';
import { MessageCircle, ArrowRight, Eye } from 'lucide-react';

interface FeaturedJerseysProps {
  products: Product[];
  storeConfig: StoreConfig;
  onQuickView: (product: Product) => void;
  onOpenSizeGuide: () => void;
}

export const FeaturedJerseys: React.FC<FeaturedJerseysProps> = ({
  products,
  storeConfig,
  onQuickView,
  onOpenSizeGuide,
}) => {
  // Filter top 3-4 best sellers/featured
  const featuredItems = products.filter((p) => p.isFeatured || p.isBestSeller).slice(0, 4);

  // Local state for selected size per product id
  const [selectedSizes, setSelectedSizes] = useState<Record<string, SizeOption>>({});

  const handleSelectSize = (productId: string, size: SizeOption) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F7F6F2] border-b border-[#EAE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#E5E3DC]">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#777770] font-semibold block mb-1">
              // DROP EM DESTAQUE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#111111]">
              Mais Vendidas da Temporada
            </h2>
          </div>
          <a
            href="#catalogo"
            className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111111] hover:underline cursor-pointer"
          >
            <span>Ver todas as camisas</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4-Column Grid for Fast Product Discovery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredItems.map((product) => {
            const currentSize = selectedSizes[product.id] || (product.sizes.includes('G') ? 'G' : product.sizes[0]);
            const pixPrice = product.price * (1 - storeConfig.pixDiscountPercent / 100);
            const productImages = getProductImages(product);
            const whatsappUrl = buildWhatsAppLink(
              storeConfig.whatsappNumber,
              { name: product.name, price: product.price },
              currentSize
            );

            return (
              <div
                key={product.id}
                className="bg-white border border-[#EAE8E2] flex flex-col justify-between p-4 group transition-shadow hover:shadow-md"
              >
                <div>
                  {/* Image Container with high whitespace */}
                  <button type="button" className="relative w-full aspect-[4/4.5] bg-[#F4F3EF] overflow-hidden mb-4 cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]" onClick={() => onQuickView(product)} aria-label={`Ver detalhes de ${product.name}`}>
                    {product.badge && (
                      <span className="absolute top-2.5 left-2.5 z-10 bg-[#111111] text-white text-[9px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider">
                        {product.badge}
                      </span>
                    )}

                    <img
                      src={productImages[0]}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Quick view hover icon */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white text-[#111111] text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 flex items-center gap-1.5 shadow-sm font-semibold">
                        <Eye className="w-3.5 h-3.5" />
                        Ver Detalhes
                      </span>
                    </div>
                  </button>

                  {/* Team & League */}
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#888880] mb-1">
                    {product.team} • {product.year}
                  </div>

                  {/* Product Title */}
                  <h3 className="mb-2">
                    <button type="button" onClick={() => onQuickView(product)} className="text-left text-sm font-bold text-[#111111] uppercase tracking-tight leading-snug hover:underline cursor-pointer line-clamp-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]">{product.name}</button>
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-base font-mono font-bold text-[#111111]">
                      {formatBRL(product.price)}
                    </span>
                    <span className="text-[10px] font-mono text-[#25D366] font-semibold">
                      {formatBRL(pixPrice)} no Pix
                    </span>
                  </div>

                  {/* Size Selector */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#666660] uppercase mb-1.5">
                      <span>Tamanho: <strong className="text-[#111111]">{currentSize}</strong></span>
                      <button
                        onClick={onOpenSizeGuide}
                        className="text-[10px] text-[#888880] hover:text-[#111111] underline cursor-pointer"
                      >
                        Guia
                      </button>
                    </div>

                    <div className="grid grid-cols-5 gap-1">
                      {product.sizes.map((size) => {
                        const isSelected = currentSize === size;
                        return (
                          <button
                            key={size}
                        onClick={() => handleSelectSize(product.id, size)}
                        aria-pressed={isSelected}
                            className={`py-1 text-[11px] font-mono font-bold transition-colors cursor-pointer border ${
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
                </div>

                {/* WhatsApp Purchase CTA */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-transform active:scale-[0.98] cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Comprar no WhatsApp</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
