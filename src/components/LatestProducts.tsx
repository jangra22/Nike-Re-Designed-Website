import React, { useState } from 'react';
import { Heart, Plus, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

interface LatestProductsProps {
  products: Product[];
  favorites: string[];
  onToggleFavorite: (productId: string, productName: string) => void;
  onAddToCart: (product: Product) => void;
  activeCategory: string;
  onCategorySelect: (category: string) => void;
}

const CATEGORY_TAGS = ['All Drops', 'Running', 'Streetwear', 'Football', 'Basketball'];

export const LatestProducts: React.FC<LatestProductsProps> = ({
  products,
  favorites,
  onToggleFavorite,
  onAddToCart,
  activeCategory,
  onCategorySelect
}) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredProducts = products.filter(product => {
    if (activeCategory === 'All Drops' || activeCategory === 'New & Featured' || activeCategory === 'Sale') {
      return true;
    }
    return product.tag.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <section className="bg-[#07111C] py-20 lg:py-28 px-5 lg:px-10 max-w-[1440px] mx-auto text-[#F2F3EE]">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          {/* Eyebrow */}
          <span className="font-body text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.24em] text-[#C8FF3D] block mb-2">
            The latest / 01
          </span>
          {/* Section Heading */}
          <h2 className="font-display font-black text-6xl lg:text-8xl uppercase leading-[0.8] tracking-tight">
            Built to <br /> go there.
          </h2>
        </div>

        {/* Filter Tags & CTA */}
        <div className="flex flex-col gap-4 items-start md:items-end">
          <div className="flex flex-wrap gap-2">
            {CATEGORY_TAGS.map((tag) => {
              const isSelected = activeCategory === tag;
              return (
                <button
                  key={tag}
                  onClick={() => onCategorySelect(tag)}
                  className={`px-3 py-1.5 text-[11px] font-body font-bold uppercase tracking-[0.16em] transition-all duration-200 border ${
                    isSelected
                      ? 'bg-[#C8FF3D] text-[#07111C] border-[#C8FF3D]'
                      : 'bg-transparent text-white/70 border-white/20 hover:border-white/60 hover:text-white'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => onCategorySelect('All Drops')}
            className="hidden md:flex items-center gap-2 text-[12px] font-body font-bold uppercase tracking-[0.16em] text-[#C8FF3D] hover:underline"
          >
            <span>Shop all new</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProducts.map((product) => {
          const isFavorite = favorites.includes(product.id);
          const isHovered = hoveredCard === product.id;

          return (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group flex flex-col justify-between p-6 sm:p-8 min-h-[460px] lg:min-h-[500px] transition-transform duration-300 ease-out hover:-translate-y-2 select-none overflow-hidden"
              style={{
                backgroundColor: product.bgTone,
                color: product.textColor || '#07111C'
              }}
            >
              {/* Background Oversized Nike Texture */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none font-display font-black text-9xl tracking-tighter uppercase text-black"
                aria-hidden="true"
              >
                NIKE
              </div>

              {/* Card Top Row */}
              <div className="relative z-10 flex items-center justify-between w-full">
                {/* Product Label */}
                <span className="bg-[#07111C] text-[#F2F3EE] px-3 py-1 text-[10px] sm:text-[11px] font-body font-bold uppercase tracking-[0.20em]">
                  {product.label}
                </span>

                {/* Favorite Toggle Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(product.id, product.name);
                  }}
                  className={`p-2.5 rounded-full transition-colors duration-200 ${
                    isFavorite
                      ? 'bg-[#07111C] text-[#FF684C]'
                      : 'bg-[#07111C]/20 text-[#07111C] hover:bg-[#07111C] hover:text-[#C8FF3D]'
                  }`}
                  aria-label={`Favorite ${product.name}`}
                >
                  <Heart
                    className={`w-4 h-4 ${isFavorite ? 'fill-[#FF684C]' : ''}`}
                  />
                </button>
              </div>

              {/* Center Product Image */}
              <div className="relative z-10 my-4 flex items-center justify-center h-52 sm:h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card Bottom Row */}
              <div className="relative z-10 pt-4 border-t border-black/10 flex items-end justify-between">
                <div>
                  <span className="font-body text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] opacity-70 block mb-0.5">
                    {product.category}
                  </span>
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl uppercase leading-none tracking-tight">
                    {product.name}
                  </h3>
                  <span className="font-body font-bold text-sm sm:text-base tracking-wide block mt-1">
                    {product.formattedPrice}
                  </span>
                </div>

                {/* Quick Add to Bag Action */}
                <button
                  onClick={() => onAddToCart(product)}
                  className="bg-[#07111C] text-[#F2F3EE] hover:bg-[#1648FF] hover:text-[#C8FF3D] transition-all p-3 flex items-center justify-center group/btn active:scale-90"
                  aria-label={`Add ${product.name} to shopping bag`}
                  title="Add to Bag"
                >
                  <Plus className="w-5 h-5 transition-transform group-hover/btn:rotate-90" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Shop All Link */}
      <div className="mt-8 text-center md:hidden">
        <button
          onClick={() => onCategorySelect('All Drops')}
          className="inline-flex items-center gap-2 text-[12px] font-body font-bold uppercase tracking-[0.16em] text-[#C8FF3D] border border-[#C8FF3D] px-6 py-3 w-full justify-center"
        >
          <span>Shop all new drops</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
