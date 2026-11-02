import React, { useEffect } from 'react';
import { X, Check, MessageSquare, Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { COMPANY_DETAILS } from '../data/products';
import { Link } from 'react-router-dom';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Liora Skincare! I am interested in ordering: ${product.name} (${product.formattedPrice} - ${product.size}). Please let me know how to proceed with payment and delivery.`
  );
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div
      id="product-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1A1614]/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="product-modal-container"
        className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-xl border border-[#E0D8CC] shadow-lg overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE3D8] bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#52634F]">
              {product.category}
            </span>
            <span className="text-neutral-300">•</span>
            <span className="text-xs text-[#7A7169]">{product.size}</span>
          </div>

          <button
            id="close-modal-button"
            onClick={onClose}
            aria-label="Close product details"
            className="p-1.5 text-[#635B54] hover:text-[#2C2623] hover:bg-[#F0ECE3] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image side */}
            <div className="bg-[#F5F1E9] rounded-lg overflow-hidden border border-[#E8E2D8] aspect-square flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Core Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[#2C2623] leading-snug">
                  {product.name}
                </h2>
                <p className="text-sm text-[#7A7169] mt-1 font-medium">
                  {product.tagline}
                </p>

                <div className="mt-4 pb-4 border-b border-[#E8E2D8]">
                  <span className="text-xs text-[#8A8178] block">Price</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-[#2C2623]">
                      {product.formattedPrice}
                    </span>
                    <span className="text-xs text-[#7A7169]">
                      ({product.size})
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7A7169] mb-1">
                    Skin Compatibility
                  </h4>
                  <p className="text-sm text-[#473E37]">
                    {product.skinType || 'Suitable for all skin types'}
                  </p>
                </div>

                <div className="mt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7A7169] mb-1">
                    Product Summary
                  </h4>
                  <p className="text-sm text-[#635B54] leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-[#E8E2D8] space-y-2.5">
                <a
                  id="whatsapp-order-btn"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#4A5844] hover:bg-[#3D4B37] rounded-lg transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order via WhatsApp</span>
                </a>

                <Link
                  id="contact-to-order-btn"
                  to={`/contact?product=${encodeURIComponent(product.name)}`}
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-[#2C2623] bg-[#F0ECE3] hover:bg-[#E5E0D5] border border-[#DDD5C7] rounded-lg transition-colors text-center"
                >
                  <span>Contact Us to Inquire</span>
                  <ArrowRight className="w-4 h-4 text-[#635B54]" />
                </Link>
                <p className="text-[11px] text-center text-[#8A8178]">
                  Direct orders are confirmed via WhatsApp or Email. Nationwide delivery available across Nigeria.
                </p>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="pt-4 border-t border-[#E8E2D8] space-y-6">
            {/* Overview */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2C2623] mb-2">
                Detailed Product Overview
              </h3>
              <p className="text-sm text-[#574E47] leading-relaxed">
                {product.overview}
              </p>
            </div>

            {/* Key Benefits */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2C2623] mb-2.5">
                Key Product Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#574E47]">
                    <Check className="w-4 h-4 text-[#52634F] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2C2623] mb-2">
                Key Ingredients
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {product.ingredients.map((ingredient, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-white text-[#524A43] text-xs px-2.5 py-1 rounded border border-[#E5DFD5]"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-[#8A8178] mt-2">
                *Always perform a small patch test behind the ear or inside wrist 24 hours prior to full initial application.
              </p>
            </div>

            {/* How to use */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2C2623] mb-2">
                Suggested Usage & Routine
              </h3>
              <p className="text-sm text-[#574E47] leading-relaxed bg-[#F3EFEA] p-3.5 rounded-lg border border-[#E5DFD5]">
                {product.howToUse}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
