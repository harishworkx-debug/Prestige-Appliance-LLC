import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Wrench, ChevronDown } from 'lucide-react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { CallButton } from './CallButton';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md'
            : 'bg-white/95 backdrop-blur-sm shadow-sm'
        }`}
      >
        <div className="container-pro">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-lg bg-navy-900 flex items-center justify-center group-hover:bg-navy-800 transition-colors shadow-sm">
                <Wrench className="w-5 h-5 lg:w-6 lg:h-6 text-teal-400" />
              </div>
              <div className="leading-tight">
                <span className="block font-display font-bold text-navy-900 text-base lg:text-lg">
                  Prestige Appliance
                </span>
                <span className="block text-[10px] lg:text-xs text-navy-500 font-medium tracking-wider uppercase">
                  LLC · South Florida
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  loc.pathname === '/' ? 'text-teal-600 font-semibold' : 'text-navy-700 hover:text-teal-600'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  loc.pathname === '/about' ? 'text-teal-600 font-semibold' : 'text-navy-700 hover:text-teal-600'
                }`}
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to="/services"
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                    loc.pathname.startsWith('/services') || services.some(s => loc.pathname === `/${s.slug}`)
                      ? 'text-teal-600 font-semibold'
                      : 'text-navy-700 hover:text-teal-600'
                  }`}
                >
                  Appliance Repair Services
                  <ChevronDown className="w-3.5 h-3.5 text-navy-400" />
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-72 animate-slide-down">
                    <div className="bg-white rounded-xl shadow-2xl border border-navy-100 p-2 grid grid-cols-1 gap-0.5 max-h-[70vh] overflow-y-auto">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/${s.slug}`}
                          className="px-3 py-2 text-sm text-navy-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors flex items-center justify-between"
                        >
                          <span>{s.name}</span>
                          <span className="text-[11px] text-teal-600 font-medium">View</span>
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        className="px-3 py-2 text-sm font-semibold text-teal-600 hover:bg-teal-50 rounded-lg transition-colors border-t border-navy-100 mt-1 pt-2"
                      >
                        All Services Overview →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Service Areas Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <Link
                  to="/service-areas"
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                    loc.pathname.startsWith('/service-areas') || locations.some(l => loc.pathname === `/${l.slug}`)
                      ? 'text-teal-600 font-semibold'
                      : 'text-navy-700 hover:text-teal-600'
                  }`}
                >
                  Service Areas
                  <ChevronDown className="w-3.5 h-3.5 text-navy-400" />
                </Link>
                {areasOpen && (
                  <div className="absolute top-full left-0 pt-2 w-64 animate-slide-down">
                    <div className="bg-white rounded-xl shadow-2xl border border-navy-100 p-2 grid grid-cols-1 gap-0.5">
                      {locations.map((l) => (
                        <Link
                          key={l.slug}
                          to={`/${l.slug}`}
                          className="px-3 py-2 text-sm text-navy-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors flex items-center justify-between"
                        >
                          <span>{l.name}, FL</span>
                          <span className="text-[11px] text-navy-400">{l.county.replace(' County', '')}</span>
                        </Link>
                      ))}
                      <Link
                        to="/service-areas"
                        className="px-3 py-2 text-sm font-semibold text-teal-600 hover:bg-teal-50 rounded-lg transition-colors border-t border-navy-100 mt-1 pt-2"
                      >
                        All Service Areas Overview →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  loc.pathname === '/contact' ? 'text-teal-600 font-semibold' : 'text-navy-700 hover:text-teal-600'
                }`}
              >
                Contact
              </Link>

              {/* Desktop Header Call Now CTA */}
              <CallButton size="sm" className="ml-3" label="Call Now" />
            </nav>

            {/* Mobile Header Buttons */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-teal-500 text-white shadow-md active:bg-teal-600 transition-colors"
                aria-label={`Call ${business.phoneDisplay}`}
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-navy-200 text-navy-700 hover:bg-navy-50"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-navy-800" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-navy-100 bg-white animate-slide-down max-h-[calc(100vh-4rem)] overflow-y-auto pb-20 shadow-xl">
            <nav className="container-pro py-4 flex flex-col gap-1">
              <Link
                to="/"
                className="px-3 py-3 text-base font-medium text-navy-800 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-3 py-3 text-base font-medium text-navy-800 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="px-3 py-3 text-base font-medium text-navy-800 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
              >
                Appliance Repair Services
              </Link>
              <Link
                to="/service-areas"
                className="px-3 py-3 text-base font-medium text-navy-800 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
              >
                Service Areas
              </Link>
              <Link
                to="/contact"
                className="px-3 py-3 text-base font-medium text-navy-800 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
              >
                Contact
              </Link>

              <div className="pt-3 mt-2 border-t border-navy-100">
                <CallButton size="md" className="w-full" label={`Call Now: ${business.phoneDisplay}`} />
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Sticky Mobile Call Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-navy-200/80 shadow-[0_-4px_16px_rgba(0,0,0,0.12)]">
        <a
          href={`tel:${business.phoneRaw}`}
          className="flex items-center justify-center gap-2 w-full py-4 bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-white font-bold text-base transition-colors"
          aria-label={`Call Prestige Appliance LLC at ${business.phoneDisplay}`}
        >
          <Phone className="w-5 h-5 animate-pulse" />
          <span>Call Now: {business.phoneDisplay}</span>
        </a>
      </div>
    </>
  );
}
