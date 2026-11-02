import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import aboutCraftImg from '../assets/images/about_skincare_craft_1788182020224.jpg';
import heroImg from '../assets/images/hero_skincare_collection_1788181897044.jpg';

export const AboutPage: React.FC = () => {
  return (
    <div id="about-page" className="py-8 sm:py-14 pb-20 space-y-16 sm:space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <SectionHeading
          label="About Our Brand"
          title="Gentle, Everyday Care for Healthy Skin"
          description="Liora is an independent skincare and body-care brand founded on the belief that everyday self-care should be honest, gentle, and practical."
          align="center"
        />

        {/* 1. Brand Introduction & Story */}
        <div className="bg-white rounded-2xl border border-[#E8E2D8] p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#52634F] block">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#2C2623] tracking-tight">
              Crafted for Real Routines & Real Living
            </h2>
            <p className="text-sm sm:text-base text-[#635B54] leading-relaxed">
              In a marketplace filled with complex multi-step routines, exaggerated overnight transformation promises, and harsh chemical treatments, Liora was established to offer a grounded alternative: straightforward, nourishing formulas that respect the skin barrier.
            </p>
            <p className="text-sm sm:text-base text-[#635B54] leading-relaxed">
              We started by focusing on everyday necessities that people rely on each day: a soothing body lotion that absorbs without greasiness, a rich cocoa butter cream that relieves persistent dryness, and a mild facial cleanser that washes away the day without that uncomfortably tight feeling.
            </p>
            <div className="pt-2">
              <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E2D8] text-xs text-[#524A43] leading-relaxed">
                "Our philosophy is simple: consistent, gentle daily care beats aggressive, short-lived trends every single time."
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-[#E2DDD5] bg-[#F5F2EC]">
              <img
                src={aboutCraftImg}
                alt="Artisan botanical ingredients and formulation workshop"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover object-center aspect-4/3"
              />
            </div>
          </div>
        </div>

        {/* 2. Our Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="bg-white p-7 rounded-xl border border-[#E8E2D8] space-y-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#F5F1E9] flex items-center justify-center text-[#52634F]">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-[#2C2623]">
              Our Mission
            </h3>
            <p className="text-sm text-[#635B54] leading-relaxed">
              To provide wholesome, accessible skincare and body-care products that make daily self-care soothing, simple, and effective for diverse skin types.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl border border-[#E8E2D8] space-y-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#F5F1E9] flex items-center justify-center text-[#52634F]">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-[#2C2623]">
              Commitment to Quality
            </h3>
            <p className="text-sm text-[#635B54] leading-relaxed">
              We select cold-pressed plant oils, unrefined butters, and pure humectants. We formulate without parabens, aggressive sulfates, or synthetic color dyes.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl border border-[#E8E2D8] space-y-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#F5F1E9] flex items-center justify-center text-[#52634F]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-[#2C2623]">
              Realistic Expectations
            </h3>
            <p className="text-sm text-[#635B54] leading-relaxed">
              We never promote unrealistic claims or overnight miracle cures. Skin is a living organ that responds best to regular hydration, gentle cleansing, and sun protection.
            </p>
          </div>
        </div>

        {/* 3. What We Offer */}
        <div className="bg-[#F3EFEA] rounded-2xl border border-[#E5DFD5] p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden border border-[#E5DFD5] bg-white">
                <img
                  src={heroImg}
                  alt="Liora product collection"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-center aspect-square"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#52634F] block">
                Product Range
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#2C2623] tracking-tight">
                What We Offer for Everyday Living
              </h2>
              <div className="space-y-3 text-sm text-[#574E47]">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#52634F] mt-2 shrink-0" />
                  <p>
                    <strong className="text-[#2C2623]">Body Care & Hydration:</strong> Lightweight daily lotions, rich cocoa butter creams, and natural sugar scrubs to keep your body supple and smooth.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#52634F] mt-2 shrink-0" />
                  <p>
                    <strong className="text-[#2C2623]">Gentle Facial Care:</strong> Low-pH foaming face cleansers, non-comedogenic daily moisturizers, and targeted botanical serums.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#52634F] mt-2 shrink-0" />
                  <p>
                    <strong className="text-[#2C2623]">Botanical Oils & Serums:</strong> Nutrient-dense cold-pressed marula, jojoba, and rosehip oils that seal in essential moisture.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#52634F] mt-2 shrink-0" />
                  <p>
                    <strong className="text-[#2C2623]">Everyday Protection:</strong> Sheer mineral sunscreens with broad spectrum SPF 50 that wear cleanly with zero ashy cast.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#4A5844] hover:bg-[#3D4B37] rounded-lg transition-colors"
                >
                  <span>Explore All Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Simple CTA */}
        <div className="text-center bg-white rounded-xl border border-[#E8E2D8] p-8 sm:p-10 max-w-2xl mx-auto space-y-3">
          <h3 className="text-xl font-semibold text-[#2C2623]">
            Have a question about what would suit you?
          </h3>
          <p className="text-sm text-[#635B54]">
            Reach out to our team directly. We are always happy to help you build a simple, realistic routine.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#2C2623] bg-[#F2ECE3] hover:bg-[#E5DFD5] border border-[#DDD6CB] rounded-lg transition-colors"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4 text-[#52634F]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
