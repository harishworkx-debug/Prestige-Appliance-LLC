import React, { useState } from 'react';
import { Phone, Wrench, Menu, X, ShieldCheck } from 'lucide-react';
import { LANDING_DATA } from './landingData';

export const LandingHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Service Area', href: '#service-area' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Top emergency dispatch bar */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Serving Deerfield Beach & Surrounding Coastal Communities</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-slate-300">Prompt Diagnostics Available</span>
            <a
              href={LANDING_DATA.phoneTel}
              className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{LANDING_DATA.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Text-based identity (Strictly Niche + Location) */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-black text-slate-900 leading-tight tracking-tight">
                {LANDING_DATA.identityTitle}
              </span>
              <span className="block text-xs font-medium text-slate-500">
                Residential Diagnostics & Care
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={LANDING_DATA.phoneTel}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 animate-pulse" />
              <span>Call {LANDING_DATA.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 mt-2">
              <a
                href={LANDING_DATA.phoneTel}
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-center shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call {LANDING_DATA.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
