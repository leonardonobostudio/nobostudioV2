import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { VectorSwitch } from './VectorSwitch.tsx';

interface MainHeaderProps {
  onSignUpClick: () => void;
}

export const MainHeader: React.FC<MainHeaderProps> = ({ onSignUpClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Service', href: '#service' },
    { label: 'Projects', href: '#projects' },
    { label: 'GEO & IA', href: '#geo-faq' },
    { label: 'Testimonios', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#14101a] border-b border-[#2d2438]">
      <div className="max-w-[1806px] mx-auto px-4 sm:px-8 lg:px-12 h-[88px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img 
            src="/images/logo.png" 
            alt="Creovibe Logo" 
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[15px] font-medium text-white/90">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`hover:text-[#e3a5c7] transition-colors py-1 ${
                index === 0 ? 'text-[#e3a5c7]' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button: Sign Up + Switch Vectorial */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:flex items-center">
            <VectorSwitch size="sm" showLabel={true} label="VECTOR" />
          </div>

          <button
            type="button"
            onClick={onSignUpClick}
            className="theme-btn-one cursor-pointer"
          >
            <span>Sign Up</span>
            <span className="btn-icon">
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </span>
          </button>

          {/* Mobile menu trigger */}
          <button
            type="button"
            aria-label="Toggle Navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#e3a5c7] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1c1626] border-b border-[#2d2438] px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-white/90 hover:text-[#e3a5c7] transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
