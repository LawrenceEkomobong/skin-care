import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { COMPANY_DETAILS } from '../data/products';
import { ContactFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const requestedProduct = searchParams.get('product');

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    contact: '',
    subject: requestedProduct ? `Order Inquiry: ${requestedProduct}` : '',
    message: requestedProduct
      ? `Hello Liora Skincare, I would like to inquire about ordering ${requestedProduct}. Please let me know available sizes, pricing, and delivery arrangements.`
      : '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (requestedProduct) {
      setFormData((prev) => ({
        ...prev,
        subject: `Order Inquiry: ${requestedProduct}`,
        message: `Hello Liora Skincare, I would like to inquire about ordering ${requestedProduct}. Please let me know available sizes, pricing, and delivery arrangements.`,
      }));
    }
  }, [requestedProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      setErrorMsg('Please provide your name, contact information (email or phone), and a brief message.');
      return;
    }

    setErrorMsg(null);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      contact: '',
      subject: '',
      message: '',
    });
    setIsSubmitted(false);
  };

  const directWhatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    formData.subject
      ? `${formData.subject} - ${formData.message}`
      : 'Hello Liora Skincare! I have an inquiry regarding your products.'
  )}`;

  return (
    <div id="contact-page" className="py-8 sm:py-14 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get In Touch"
          title="Contact & Product Orders"
          description="Have questions about product suitability, ingredients, or nationwide orders? Reach out directly via WhatsApp, phone, or the contact form below."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
          {/* Left Column: Business Info & Direct WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Priority Card */}
            <div className="bg-[#4A5844] text-white p-6 sm:p-7 rounded-xl border border-[#3E4B37] shadow-xs space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-[#3D4B37] rounded-lg">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">Fastest Response: WhatsApp</h3>
                  <span className="text-xs text-[#D5DDD2]">Typically replies within 1–2 hours</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#E2E8E0] leading-relaxed">
                For prompt order placement, stock inquiries, and direct advice on which body lotions or cleansers to choose, chat with us on WhatsApp.
              </p>
              <a
                id="contact-page-whatsapp-btn"
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#2C2623] bg-[#FAF8F5] hover:bg-[#F0ECE3] rounded-lg transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#4A5844]" />
                <span>Chat with us on WhatsApp ({COMPANY_DETAILS.phoneDisplay})</span>
              </a>
            </div>

            {/* Business Details Card */}
            <div className="bg-white rounded-xl border border-[#E8E2D8] p-6 sm:p-7 shadow-xs space-y-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#786E66]">
                Business Details
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center text-[#52634F] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8A8178] block">Studio & Order Pick-up Address</span>
                    <span className="font-medium text-[#2C2623]">{COMPANY_DETAILS.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center text-[#52634F] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8A8178] block">Telephone Support</span>
                    <a
                      href={`tel:${COMPANY_DETAILS.phone}`}
                      className="font-medium text-[#2C2623] hover:text-[#4A5844]"
                    >
                      {COMPANY_DETAILS.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center text-[#52634F] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8A8178] block">General & Order Inquiries</span>
                    <a
                      href={`mailto:${COMPANY_DETAILS.email}`}
                      className="font-medium text-[#2C2623] hover:text-[#4A5844]"
                    >
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#F0EBE1]">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center text-[#52634F] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8A8178] block">Business Hours (WAT)</span>
                    <p className="text-[#2C2623] font-medium">{COMPANY_DETAILS.hours.weekdays}</p>
                    <p className="text-[#635B54] text-xs">{COMPANY_DETAILS.hours.saturday}</p>
                    <p className="text-[#8A8178] text-xs">{COMPANY_DETAILS.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ordering Note */}
            <div className="p-4 bg-[#F2ECE3] rounded-xl border border-[#E0D8CC] text-xs text-[#635B54] leading-relaxed">
              <span className="font-semibold text-[#2C2623] block mb-1">
                Nationwide Delivery in Nigeria
              </span>
              Orders within Lagos typically deliver within 24–48 hours. Inter-state dispatch across Abuja, Port Harcourt, Ibadan, and other states delivers in 3–5 working days via trusted courier partners.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#E8E2D8] p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-semibold text-[#2C2623] mb-1">
              Send an Inquiry Message
            </h3>
            <p className="text-xs sm:text-sm text-[#635B54] mb-6">
              Fill out the form below for product availability, bulk ordering, or personalized advice.
            </p>

            {isSubmitted ? (
              <div
                id="contact-form-success"
                className="py-10 text-center space-y-4 bg-[#F7FAF6] rounded-xl border border-[#D5E5D1] p-6"
              >
                <div className="w-12 h-12 rounded-full bg-[#E5EFE2] text-[#4A5844] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-[#2C2623]">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-sm text-[#574E47] max-w-md mx-auto leading-relaxed">
                  Your message has been received. Our team will review your inquiry and get back to you at{' '}
                  <strong className="text-[#2C2623]">{formData.contact}</strong> within 1 business day.
                </p>
                <div className="pt-2">
                  <button
                    onClick={resetForm}
                    className="px-4 py-2 text-xs font-medium text-[#2C2623] bg-white hover:bg-[#F2ECE3] border border-[#DDD6CB] rounded-lg transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="inquiry-form">
                {errorMsg && (
                  <div className="p-3 bg-[#FCF3F2] border border-[#F0D5D2] rounded-lg flex items-center gap-2 text-xs text-[#9B362F]">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-[#2C2623] mb-1"
                  >
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Amina Bello"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E2DDD5] rounded-lg text-xs sm:text-sm text-[#2C2623] focus:outline-hidden focus:border-[#4A5844]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-detail"
                    className="block text-xs font-medium text-[#2C2623] mb-1"
                  >
                    Email Address or Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-detail"
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="e.g. amina@example.com or 0801 234 5678"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E2DDD5] rounded-lg text-xs sm:text-sm text-[#2C2623] focus:outline-hidden focus:border-[#4A5844]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium text-[#2C2623] mb-1"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Order Inquiry / Routine Advice"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E2DDD5] rounded-lg text-xs sm:text-sm text-[#2C2623] focus:outline-hidden focus:border-[#4A5844]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-[#2C2623] mb-1"
                  >
                    Message / Order Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what products you are interested in, quantity, delivery location, or your skin concern..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E2DDD5] rounded-lg text-xs sm:text-sm text-[#2C2623] focus:outline-hidden focus:border-[#4A5844] resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-[#4A5844] hover:bg-[#3D4B37] rounded-lg transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                  <span className="text-[11px] text-[#8A8178]">
                    We treat your personal details with strict privacy.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
