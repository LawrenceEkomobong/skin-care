import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-xs border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo & Name */}
          <Link
            to="/"
            id="brand-logo-link"
            className="flex flex-col group cursor-pointer"
          >
            <span className="font-semibold text-xl tracking-wider text-[#2C2623] group-hover:text-[#4A5844] transition-colors">
              LIORA
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#786E66] -mt-1 font-medium">
              Skincare & Body Care
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors py-1 relative cursor-pointer ${
                    active
                      ? 'text-[#2C2623] font-semibold'
                      : 'text-[#685F57] hover:text-[#2C2623]'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4A5844] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary Action */}
          <div className="hidden md:flex items-center">
            <Link
              to="/products"
              id="header-view-products-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-[#4A5844] hover:bg-[#3D4B37] rounded-lg transition-colors cursor-pointer"
            >
              <span>View Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#524A43] hover:text-[#2C2623] hover:bg-[#F0ECE3] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              type="button"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden border-t border-[#E8E2D8] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-3"
        >
          <nav className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'bg-[#EDE7DE] text-[#2C2623] font-semibold'
                      : 'text-[#635B54] hover:bg-[#F2ECE3] hover:text-[#2C2623]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[#E8E2D8]">
            <Link
              to="/products"
              id="mobile-header-view-products-btn"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#4A5844] hover:bg-[#3D4B37] rounded-lg transition-colors text-center"
            >
              <span>View Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
