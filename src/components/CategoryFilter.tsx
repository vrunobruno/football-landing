import React from 'react';
import { Search, X } from 'lucide-react';
import { ProductCategory } from '../types';

interface CategoryFilterProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalCount,
}) => {
  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'todos', label: 'Todos os Mantos' },
    { id: 'mais-vendidas', label: 'Mais Vendidas' },
    { id: 'brasileirao', label: 'Brasileirão' },
    { id: 'europeias', label: 'Europeias' },
    { id: 'selecoes', label: 'Seleções' },
    { id: 'retro', label: 'Retrô Clássicas' },
  ];

  return (
    <div className="space-y-4 mb-8">
      
      {/* Search Bar + Product Count */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <label htmlFor="product-search-input" className="sr-only">Buscar camisas</label>
          <Search className="w-4 h-4 text-[#888880] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por time (Ex: Grêmio, Flamengo, Real Madrid...)"
            className="w-full bg-white border border-[#DCDAD2] focus:border-[#111111] pl-10 pr-10 py-3 text-xs uppercase font-mono text-[#111111] placeholder-[#888880] focus:outline-none transition-colors"
            id="product-search-input"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888880] hover:text-[#111111] p-1 cursor-pointer"
              aria-label="Limpar busca"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs font-mono uppercase tracking-wider text-[#666660]">
          <span>
            Mostrando <strong className="text-[#111111]">{totalCount}</strong> {totalCount === 1 ? 'manto' : 'mantos'}
          </span>
          {searchQuery && (
            <span className="bg-[#111111] text-white px-2 py-0.5 text-[10px] font-bold">
              Filtrado
            </span>
          )}
        </div>
      </div>

      {/* Horizontal Category Chips */}
      <div className="overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex items-center gap-2 min-w-max">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                aria-pressed={isSelected}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap border ${
                  isSelected
                    ? 'bg-[#111111] text-white border-[#111111]'
                    : 'bg-white text-[#555550] hover:text-[#111111] hover:border-[#111111] border-[#E2E0D8]'
                }`}
                id={`cat-filter-${cat.id}`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
