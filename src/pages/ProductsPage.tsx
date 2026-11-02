import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { PRODUCTS, CATEGORIES_LIST } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { CategoryFilter } from '../components/CategoryFilter';
import { SectionHeading } from '../components/SectionHeading';
import { Product, ProductCategory } from '../types';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as ProductCategory) || 'All';

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'name'>('featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Sync category state with search params if changed externally (e.g. footer clicks)
  useEffect(() => {
    const cat = searchParams.get('category') as ProductCategory;
    if (cat && cat !== selectedCategory) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: ProductCategory) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const categories: ProductCategory[] = [
    'All',
    'Body Care',
    'Face Care',
    'Moisturizers',
    'Cleansers',
    'Oils & Serums',
    'Sun Care',
  ];

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match: checks primary or secondary category
      const matchesCategory =
        selectedCategory === 'All' ||
        product.category === selectedCategory ||
        product.secondaryCategory === selectedCategory;

      // Search match
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.tagline.toLowerCase().includes(q) ||
        product.ingredients.some((ing) => ing.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      // Default: featured first, then standard order
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div id="products-page" className="py-8 sm:py-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <SectionHeading
          label="Our Collection"
          title="Everyday Skincare & Body-Care Products"
          description="Browse our range of body lotions, rich creams, gentle cleansers, botanical oils, and facial serums designed for wholesome daily care."
          align="center"
        />

        {/* Filters & Search Toolbar */}
        <div className="bg-white rounded-xl border border-[#E8E2D8] p-4 sm:p-5 mb-8 shadow-xs space-y-4">
          {/* Category Filter Pills */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
          />

          {/* Search & Sort Row */}
          <div className="pt-3 border-t border-[#F0EBE1] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <input
                id="product-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products or ingredients..."
                className="w-full pl-9 pr-3 py-2 bg-[#FAF8F5] border border-[#E2DDD5] rounded-lg text-[#2C2623] placeholder-[#8A8178] focus:outline-hidden focus:border-[#4A5844] text-xs"
              />
              <Search className="w-3.5 h-3.5 text-[#8A8178] absolute left-3 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8A8178] hover:text-[#2C2623] text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results Count & Sort Dropdown */}
            <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 text-[#635B54]">
              <span>
                Showing <strong className="text-[#2C2623]">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'product' : 'products'}
              </span>

              <div className="flex items-center gap-1.5">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#7A7169]" />
                <label htmlFor="sort-by-select" className="sr-only">
                  Sort products
                </label>
                <select
                  id="sort-by-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#FAF8F5] border border-[#E2DDD5] rounded-md px-2 py-1 text-xs text-[#2C2623] focus:outline-hidden cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Alphabetical</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div id="products-catalog-grid">
          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-xl border border-[#E5DFD5] p-8 max-w-md mx-auto">
              <p className="text-base font-medium text-[#2C2623] mb-1">
                No products match your criteria
              </p>
              <p className="text-xs text-[#635B54] mb-4">
                We couldn't find any products under "{selectedCategory}" matching "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-xs font-medium text-white bg-[#4A5844] hover:bg-[#3D4B37] rounded-lg transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={(p) => setSelectedProduct(p)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Note on Ordering */}
        <div className="mt-14 p-6 bg-[#F3EFEA] rounded-xl border border-[#E0D8CC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#5C534C]">
          <div>
            <p className="font-semibold text-[#2C2623]">
              Looking to order in bulk or have questions about routines?
            </p>
            <p className="text-xs text-[#7A7169] mt-0.5">
              We process individual and bulk orders directly via WhatsApp and direct payment confirmation.
            </p>
          </div>
          <a
            href="https://wa.me/2348098765432"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 text-xs font-semibold text-white bg-[#4A5844] hover:bg-[#3D4B37] rounded-lg transition-colors"
          >
            Chat with Customer Care
          </a>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
