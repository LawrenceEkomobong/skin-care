import React from 'react';
import { Eye, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  return (
    <div
      id={`product-card-${product.id}`}
      className="group bg-white rounded-xl border border-[#E8E2D8] overflow-hidden flex flex-col transition-all duration-200 hover:border-[#D5CDC1] hover:shadow-sm"
    >
      {/* Image Container */}
      <div
        className="relative aspect-square w-full overflow-hidden bg-[#F5F2EC] cursor-pointer"
        onClick={() => onViewDetails(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-102"
          loading="lazy"
        />
        {/* Category Pill */}
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-[#FAF8F5]/90 backdrop-blur-xs text-[#52634F] text-xs font-medium px-2.5 py-1 rounded-md border border-[#E8E2D8]">
            {product.category}
          </span>
        </div>
        {/* Size Badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-block bg-white/85 text-[#635B54] text-xs px-2 py-0.5 rounded text-neutral-600 font-medium">
            {product.size}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-2">
          <h3
            className="text-base font-semibold text-[#2C2623] group-hover:text-[#4A5844] transition-colors cursor-pointer line-clamp-1"
            onClick={() => onViewDetails(product)}
          >
            {product.name}
          </h3>
          <p className="text-xs text-[#7A7169] mt-0.5 line-clamp-1">
            {product.tagline}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-[#635B54] line-clamp-2 leading-relaxed mb-4 flex-1">
          {product.description}
        </p>

        {/* Footer: Price + Action */}
        <div className="pt-3 border-t border-[#F0EBE1] flex items-center justify-between gap-2 mt-auto">
          <div>
            <span className="text-xs text-[#8A8178] block">Price</span>
            <span className="text-base font-bold text-[#2C2623]">
              {product.formattedPrice}
            </span>
          </div>

          <button
            id={`view-details-btn-${product.id}`}
            onClick={() => onViewDetails(product)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#2C2623] bg-[#FAF8F5] hover:bg-[#F0ECE3] active:bg-[#E8E2D8] border border-[#E0D9CE] rounded-lg transition-colors cursor-pointer"
            type="button"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#635B54]" />
          </button>
        </div>
      </div>
    </div>
  );
};
