import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageSquare, ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { PRODUCTS, COMPANY_DETAILS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { Product } from '../types';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const product = PRODUCTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="py-20 max-w-xl mx-auto text-center px-4">
        <h2 className="text-2xl font-semibold text-[#2C2623] mb-3">
          Product Not Found
        </h2>
        <p className="text-sm text-[#635B54] mb-6">
          The skincare product you are looking for does not exist or has been relocated.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#4A5844] hover:bg-[#3D4B37] rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Products</span>
        </Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.secondaryCategory === product.category)
  ).slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hello Liora Skincare! I would like to order: ${product.name} (${product.formattedPrice} - ${product.size}). Please guide me on payment and delivery.`
  );
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div id="product-detail-page" className="py-8 sm:py-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb / Back Link */}
        <div className="flex items-center gap-2 text-xs text-[#7A7169]">
          <Link to="/products" className="hover:text-[#2C2623] inline-flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Products</span>
          </Link>
          <span>/</span>
          <span className="text-[#52634F] font-medium">{product.category}</span>
          <span>/</span>
          <span className="text-[#2C2623] truncate max-w-xs">{product.name}</span>
        </div>

        {/* Main Product Layout */}
        <div className="bg-white rounded-2xl border border-[#E8E2D8] p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Product Image */}
          <div className="lg:col-span-6 bg-[#F5F2EC] rounded-xl overflow-hidden border border-[#E2DDD5] aspect-square flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Product Main Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#52634F] bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#E8E2D8]">
                  {product.category}
                </span>
                <span className="text-xs text-[#7A7169]">• {product.size}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-semibold text-[#2C2623] leading-snug">
                {product.name}
              </h1>
              <p className="text-sm text-[#7A7169] mt-1 font-medium">
                {product.tagline}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E2D8]">
              <span className="text-xs text-[#8A8178] block">Price (Nigerian Naira)</span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-3xl font-bold text-[#2C2623]">
                  {product.formattedPrice}
                </span>
                <span className="text-xs text-[#7A7169]">
                  per {product.size} unit
                </span>
              </div>
            </div>

            {/* Skin Compatibility */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#7A7169] mb-1">
                Skin Type Recommendation
              </h3>
              <p className="text-sm text-[#473E37]">
                {product.skinType || 'Formulated to suit normal, dry, and combination skin.'}
              </p>
            </div>

            {/* Short Description */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#7A7169] mb-1">
                About this formula
              </h3>
              <p className="text-sm text-[#635B54] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Ordering CTA */}
            <div className="pt-2 border-t border-[#F0EBE1] space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#4A5844] hover:bg-[#3D4B37] rounded-lg transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact Us to Order via WhatsApp</span>
              </a>

              <Link
                to={`/contact?product=${encodeURIComponent(product.name)}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#2C2623] bg-[#F2ECE3] hover:bg-[#E5DFD5] border border-[#DDD6CB] rounded-lg transition-colors"
              >
                <span>Send an Inquiry Form</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-center text-[#8A8178]">
                We respond promptly during business hours. Deliveries sent across Lagos and nationwide.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Tabs / Section Information */}
        <div className="bg-white rounded-2xl border border-[#E8E2D8] p-6 sm:p-10 shadow-xs space-y-8">
          {/* Detailed Overview */}
          <div>
            <h2 className="text-lg font-semibold text-[#2C2623] mb-3">
              Product Overview
            </h2>
            <p className="text-sm sm:text-base text-[#574E47] leading-relaxed max-w-3xl">
              {product.overview}
            </p>
          </div>

          {/* Key Benefits */}
          <div className="pt-6 border-t border-[#F0EBE1]">
            <h2 className="text-lg font-semibold text-[#2C2623] mb-4">
              Benefits & Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
              {product.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-[#574E47]">
                  <Check className="w-4 h-4 text-[#52634F] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients */}
          <div className="pt-6 border-t border-[#F0EBE1]">
            <h2 className="text-lg font-semibold text-[#2C2623] mb-2">
              Full Ingredient List
            </h2>
            <p className="text-xs text-[#7A7169] mb-3">
              Transparent labelling is our priority. Below are all components used in this formula:
            </p>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ing, idx) => (
                <span
                  key={idx}
                  className="bg-[#FAF8F5] text-[#504740] text-xs px-3 py-1.5 rounded-md border border-[#E5DFD5]"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* How to Use */}
          <div className="pt-6 border-t border-[#F0EBE1]">
            <h2 className="text-lg font-semibold text-[#2C2623] mb-2">
              How to Use & Routine Advice
            </h2>
            <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E8E2D8] text-sm text-[#574E47] leading-relaxed max-w-3xl">
              {product.howToUse}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-[#E8E2D8] pb-3">
              <h2 className="text-xl font-semibold text-[#2C2623]">
                Complementary Products in {product.category}
              </h2>
              <Link
                to={`/products?category=${encodeURIComponent(product.category)}`}
                className="text-xs font-medium text-[#52634F] hover:underline"
              >
                View all in {product.category}
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onViewDetails={(item) => setModalProduct(item)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
      />
    </div>
  );
};
