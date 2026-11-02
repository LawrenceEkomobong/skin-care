import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
  emptyMessage?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onViewDetails,
  emptyMessage = 'No products found in this category.',
}) => {
  if (products.length === 0) {
    return (
      <div className="py-16 text-center bg-white rounded-xl border border-[#E5DFD5] p-8 max-w-md mx-auto">
        <p className="text-base text-[#635B54] mb-2">{emptyMessage}</p>
        <p className="text-xs text-[#8A8178]">
          Try selecting another category or resetting the filter.
        </p>
      </div>
    );
  }

  return (
    <div
      id="product-grid"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};
