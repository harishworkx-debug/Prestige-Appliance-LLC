import React from 'react';
import { Phone, MapPin, Clock, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LANDING_DATA } from './landingData';

export const LandingFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Identity Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-base tracking-tight text-white">
                {LANDING_DATA.identityTitle}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Specialized residential appliance diagnostics, maintenance, and component repairs serving homeowners throughout Deerfield Beach, Broward County, and southern Palm Beach County.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-slate-300 font-medium">
                Compliant with Florida electrical & appliance trade safety standards
              </span>
            </div>
          </div>

          {/* Quick Contact & Base */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">
              Diagnostic Base
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span>{LANDING_DATA.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={LANDING_DATA.phoneTel}
                  className="text-white hover:text-amber-400 font-semibold transition-colors"
                >
                  {LANDING_DATA.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span>Mon–Fri 8AM–6PM | Sat 9AM–4PM</span>
              </div>
            </div>
          </div>

          {/* Navigation & Legal Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Our Diagnostics
                </a>
              </li>
              <li>
                <a href="#service-area" className="hover:text-white transition-colors">
                  Service Area
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Schedule Diagnostic
                </a>
              </li>
              <li className="pt-2 border-t border-slate-800 flex items-center gap-3">
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <p>
            &copy; {currentYear} {LANDING_DATA.identityTitle}. All rights reserved.
          </p>
          <p>
            Residential diagnostics, component restoration & maintenance in Florida.
          </p>
        </div>
      </div>
    </footer>
  );
};
