import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Leaf,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Sparkles,
  Droplets,
  Sun,
  Shield,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { PRODUCTS, CATEGORIES_LIST, COMPANY_DETAILS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { SectionHeading } from '../components/SectionHeading';
import { Product } from '../types';
import heroImg from '../assets/images/hero_skincare_collection_1788181897044.jpg';
import aboutCraftImg from '../assets/images/about_skincare_craft_1788182020224.jpg';

export const HomePage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 6);

  const categoryIcons: Record<string, React.ReactNode> = {
    'Body Care': <Layers className="w-5 h-5 text-[#52634F]" />,
    'Face Care': <Sparkles className="w-5 h-5 text-[#52634F]" />,
    'Moisturizers': <Droplets className="w-5 h-5 text-[#52634F]" />,
    'Cleansers': <CheckCircle2 className="w-5 h-5 text-[#52634F]" />,
    'Oils & Serums': <Leaf className="w-5 h-5 text-[#52634F]" />,
    'Sun Care': <Sun className="w-5 h-5 text-[#52634F]" />,
  };

  return (
    <div id="home-page" className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Two-Column Hero Section */}
      <section id="hero-section" className="pt-6 sm:pt-10 lg:pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Hero Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0EBE1] border border-[#E2DDD5] rounded-md text-xs font-semibold uppercase tracking-wider text-[#52634F]">
                <Leaf className="w-3.5 h-3.5" />
                <span>Everyday Skincare & Body Care</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C2623] tracking-tight leading-[1.2]">
                Simple Care for Healthy-Looking Skin
              </h1>

              <p className="text-base sm:text-lg text-[#635B54] max-w-xl leading-relaxed">
                Liora provides honest, dependable skincare and body-care products created for everyday routines. Formulated with gentle plant oils, nourishing butters, and barrier-friendly actives for comfort in every climate.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/products"
                  id="hero-primary-cta"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#4A5844] hover:bg-[#3D4B37] rounded-lg transition-colors cursor-pointer"
                >
                  <span>View Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  id="hero-secondary-cta"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#2C2623] bg-white hover:bg-[#F2ECE3] border border-[#DDD6CB] rounded-lg transition-colors cursor-pointer"
                >
                  <span>Contact Us</span>
                </Link>
              </div>

              {/* Practical Micro Highlights */}
              <div className="pt-6 border-t border-[#EAE4DB] grid grid-cols-3 gap-4 text-xs text-[#6B625A]">
                <div>
                  <span className="font-semibold text-[#2C2623] block text-sm">Gentle Formulas</span>
                  <span>Non-stripping ingredients</span>
                </div>
                <div>
                  <span className="font-semibold text-[#2C2623] block text-sm">Everyday Focus</span>
                  <span>Made for daily living</span>
                </div>
                <div>
                  <span className="font-semibold text-[#2C2623] block text-sm">Direct Support</span>
                  <span>Assistance via WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Product Photography */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#E2DDD5] bg-[#F5F1E9] shadow-xs">
                <img
                  src={heroImg}
                  alt="Curated Liora Skincare and body care collection"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-center aspect-4/3 lg:aspect-square"
                  loading="eager"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#FAF8F5]/90 backdrop-blur-xs px-4 py-2.5 rounded-lg border border-[#E5DFD5] text-xs text-[#524A43] flex items-center justify-between">
                  <span>Everyday essentials for face and body</span>
                  <span className="text-[#52634F] font-semibold">Handcrafted Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Products Section */}
      <section id="featured-products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E8E2D8] gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#52634F] block mb-1">
              Curated Selection
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#2C2623] tracking-tight">
              Featured Products
            </h2>
            <p className="text-sm text-[#635B54] mt-1">
              Our most sought-after everyday essentials for balanced, comfortable skin.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4A5844] hover:text-[#2C2623] transition-colors"
          >
            <span>Browse all products ({PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>
      </section>

      {/* 3. Product Categories Section */}
      <section id="categories-section" className="bg-[#F3EFEA] py-14 border-y border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Care By Routine"
            title="Browse by Category"
            description="Explore our range of everyday products organized for face, body, and daily protection."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES_LIST.map((cat) => (
              <Link
                key={cat.id}
                to={`/products?category=${encodeURIComponent(cat.name)}`}
                id={`category-card-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group bg-white p-5 rounded-xl border border-[#E2DDD5] hover:border-[#4A5844] transition-all duration-200 text-center flex flex-col items-center justify-between"
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center mb-3 group-hover:bg-[#F2ECE3] transition-colors">
                  {categoryIcons[cat.name] || <Layers className="w-5 h-5 text-[#52634F]" />}
                </div>
                <h3 className="text-sm font-semibold text-[#2C2623] group-hover:text-[#4A5844] transition-colors mb-1">
                  {cat.name}
                </h3>
                <span className="text-[11px] text-[#7A7169]">
                  {cat.itemCount} {cat.itemCount === 1 ? 'product' : 'products'}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section id="why-choose-us-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Choose Liora"
          title="Practical Skincare You Can Rely On"
          description="We prioritize simple, effective formulas that nourish skin without exaggerated claims or unnecessary complications."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#E8E2D8] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F5F1E9] flex items-center justify-center text-[#52634F]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-[#2C2623]">Quality Products</h3>
            <p className="text-sm text-[#635B54] leading-relaxed">
              Formulated in small, controlled batches with stable ingredients tested for skin comfort, texture, and lasting freshness.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8E2D8] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F5F1E9] flex items-center justify-center text-[#52634F]">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-[#2C2623]">Everyday Skincare</h3>
            <p className="text-sm text-[#635B54] leading-relaxed">
              No 12-step routines required. Practical, multi-beneficial formulas created to slide effortlessly into your daily life.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8E2D8] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F5F1E9] flex items-center justify-center text-[#52634F]">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-[#2C2623]">Selected Ingredients</h3>
            <p className="text-sm text-[#635B54] leading-relaxed">
              We combine unrefined African butters, cold-pressed plant oils, and proven gentle actives like niacinamide and glycerin.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8E2D8] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F5F1E9] flex items-center justify-center text-[#52634F]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-[#2C2623]">Friendly Service</h3>
            <p className="text-sm text-[#635B54] leading-relaxed">
              Real assistance from people who understand our products. Message us on WhatsApp for tailored routine suggestions.
            </p>
          </div>
        </div>
      </section>

      {/* 5. About Preview Section */}
      <section id="about-preview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#E5DFD5] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#52634F] block">
              About Liora Skincare
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#2C2623] tracking-tight">
              Honest Skincare For Real Everyday Routines
            </h2>
            <p className="text-sm sm:text-base text-[#635B54] leading-relaxed">
              Liora was founded with a straightforward conviction: healthy skin care should be accessible, pleasant to use, and free from misleading marketing. We develop balanced body lotions, nourishing oils, cleansers, and creams designed to keep skin hydrated, soft, and comfortable.
            </p>
            <p className="text-sm text-[#635B54] leading-relaxed">
              Whether you need deep moisture after a long day or a lightweight face wash that won't leave your skin feeling dry, our lineup focuses on practical everyday benefits.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                id="about-preview-learn-more-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#2C2623] bg-[#F2ECE3] hover:bg-[#E5DFD5] border border-[#DDD6CB] rounded-lg transition-colors"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-[#52634F]" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-[#E5DFD5] bg-[#F8F5F0]">
              <img
                src={aboutCraftImg}
                alt="Botanical skincare ingredients and formulation craft"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover object-center aspect-4/3"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call To Action Section */}
      <section id="cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#4A5844] text-white rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-xs">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#D1DACD]">
            Personalized Guidance
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Need help choosing a product?
          </h2>
          <p className="text-sm sm:text-base text-[#E2E8E0] max-w-xl mx-auto leading-relaxed">
            Not sure which body cream or facial cleanser suits your current skin needs? Contact our team on WhatsApp or send a message. We're happy to recommend the right match.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              id="cta-contact-btn"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#2C2623] bg-[#FAF8F5] hover:bg-[#F2ECE3] rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Liora Skincare! I need help choosing the right skincare product for my routine.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#3B4736] hover:bg-[#303B2C] border border-[#5C6E55] rounded-lg transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
