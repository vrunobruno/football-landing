import React, { useCallback, useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedJerseys } from './components/FeaturedJerseys';
import { ProductCard } from './components/ProductCard';
import { TrustBenefits } from './components/TrustBenefits';
import { HowItWorks } from './components/HowItWorks';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { StickyMobileBar } from './components/StickyMobileBar';
import { defaultStoreConfig, productsData } from './data/storeData';
import { Product, StoreConfig } from './types';

export default function App() {
  const [storeConfig] = useState<StoreConfig>(defaultStoreConfig);
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);

  const scrollToCatalog = () => {
    const el = document.getElementById('catalogo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategoryNavigation = useCallback(() => {
    requestAnimationFrame(scrollToCatalog);
  }, []);

  return (
    <div className="min-h-screen pb-20 sm:pb-0 bg-[#F7F6F2] text-[#111111] flex flex-col selection:bg-[#111111] selection:text-white">
      <AnnouncementBar storeConfig={storeConfig} />

      <Header
        storeConfig={storeConfig}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onNavigateToCategory={handleCategoryNavigation}
      />

      <Hero
        storeConfig={storeConfig}
        onExploreClick={scrollToCatalog}
      />

      <FeaturedJerseys
        products={productsData}
        storeConfig={storeConfig}
        onQuickView={(p) => setActiveModalProduct(p)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      <section id="catalogo" className="py-14 sm:py-20 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#E5E3DC]">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#777770] font-semibold block mb-1">
                // CATÁLOGO COMPLETO
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#111111]">
                Todos os Mantos
              </h2>
            </div>
            <p className="text-xs text-[#666660] mt-2 sm:mt-0 font-normal">
              Selecione seu modelo, confirme o tamanho e conclua direto pelo WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productsData.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                storeConfig={storeConfig}
                onQuickView={(p) => setActiveModalProduct(p)}
                onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
              />
            ))}
          </div>
        </div>
      </section>

      <TrustBenefits />
      <HowItWorks />
      <FinalCTA storeConfig={storeConfig} />

      <Footer
        storeConfig={storeConfig}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onNavigateToCategory={handleCategoryNavigation}
      />

      <StickyMobileBar
        storeConfig={storeConfig}
        totalProducts={productsData.length}
      />

      <ProductModal
        product={activeModalProduct}
        storeConfig={storeConfig}
        onClose={() => setActiveModalProduct(null)}
        onOpenSizeGuide={() => {
          setActiveModalProduct(null);
          setIsSizeGuideOpen(true);
        }}
      />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
}
