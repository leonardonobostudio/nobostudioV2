import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderNavProps {
  onContactClick: () => void;
  isTechMode: boolean;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onContactClick, isTechMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="relative z-50 w-full border-b border-white/5 bg-[#08080a]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="/" 
          className="flex items-center gap-2 text-2xl font-black font-syne tracking-tight text-white group whitespace-nowrap shrink-0"
        >
          <span>NOBO</span>
          <span 
            className="w-2.5 h-2.5 rounded-sm transition-colors duration-300"
            style={{ backgroundColor: isTechMode ? '#00e5ff' : '#ff3811' }}
          />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 hover:text-white transition-colors duration-200 group whitespace-nowrap shrink-0"
            >
              <span>{link.label}</span>
              <span 
                className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: isTechMode ? '#00e5ff' : '#ff3811' }}
              />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onContactClick}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white rounded-full transition-all duration-300 hover:shadow-lg cursor-pointer whitespace-nowrap shrink-0"
            style={{ 
              backgroundColor: isTechMode ? '#00b8d4' : '#ff3811',
              boxShadow: isTechMode ? '0 4px 15px rgba(0,229,255,0.25)' : '0 4px 15px rgba(255,56,17,0.3)'
            }}
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0c0c0f] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-200 hover:text-white transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-white/5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-white rounded-xl bg-[#ff3811] hover:bg-[#e0300d] transition-colors"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
