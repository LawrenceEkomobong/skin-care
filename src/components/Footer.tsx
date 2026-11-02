import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS, CATEGORIES_LIST } from '../data/products';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#F2ECE3] border-t border-[#E2DDD5] text-[#2C2623]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-semibold text-xl tracking-wider text-[#2C2623]">
                LIORA
              </span>
              <span className="text-[10px] block uppercase tracking-widest text-[#786E66] -mt-1 font-medium">
                Skincare & Body Care
              </span>
            </Link>
            <p className="text-sm text-[#635B54] leading-relaxed">
              Everyday skincare and body-care products crafted for healthy-looking skin. Accessible routines, gentle formulations, and honest ingredients.
            </p>
            <div className="pt-2">
              <span className="text-xs text-[#7A7169] block font-medium">
                Connect With Us
              </span>
              <div className="flex items-center gap-3 mt-2 text-xs text-[#52634F]">
                <a
                  href={COMPANY_DETAILS.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#4A5844] font-medium"
                >
                  Instagram
                </a>
                <span>•</span>
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#4A5844] font-medium"
                >
                  WhatsApp
                </a>
                <span>•</span>
                <a
                  href={COMPANY_DETAILS.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#4A5844] font-medium"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#786E66] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-[#554D46] hover:text-[#2C2623] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-[#554D46] hover:text-[#2C2623] transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#554D46] hover:text-[#2C2623] transition-colors"
                >
                  About Our Brand
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#554D46] hover:text-[#2C2623] transition-colors"
                >
                  Contact & Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#786E66] mb-4">
              Product Categories
            </h4>
            <ul className="space-y-2 text-sm">
              {CATEGORIES_LIST.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${encodeURIComponent(cat.name)}`}
                    className="text-[#554D46] hover:text-[#2C2623] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#786E66] mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#635B54]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#52634F] shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#52634F] shrink-0" />
                <span>{COMPANY_DETAILS.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#52634F] shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#52634F] shrink-0 mt-0.5" />
                <div>
                  <p>{COMPANY_DETAILS.hours.weekdays}</p>
                  <p>{COMPANY_DETAILS.hours.saturday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#E0D9CE] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7169]">
          <p>© {currentYear} {COMPANY_DETAILS.name}. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Everyday skincare & body-care crafted for gentle daily routines.
          </p>
        </div>
      </div>
    </footer>
  );
};
