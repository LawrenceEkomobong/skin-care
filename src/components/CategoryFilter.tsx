import React from 'react';
import { ProductCategory } from '../types';

interface CategoryFilterProps {
  categories: ProductCategory[];
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-2">
      {categories.map((cat) => {
        const isActive = selectedCategory === cat;
        return (
          <button
            key={cat}
            id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => onSelectCategory(cat)}
            type="button"
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 cursor-pointer ${
              isActive
                ? 'bg-[#4A5844] text-white border border-[#4A5844] shadow-xs'
                : 'bg-white text-[#554D46] hover:text-[#2C2623] hover:bg-[#F2ECE3] border border-[#E2DDD5]'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};
