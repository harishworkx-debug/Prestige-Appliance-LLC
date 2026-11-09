import { Link } from 'react-router-dom';
import { Phone, MapPin, Wrench, Clock, ExternalLink } from 'lucide-react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-200 border-t border-navy-900">
      <div className="container-pro py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center shadow">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="block font-display font-bold text-white text-lg">
                  Prestige Appliance
                </span>
                <span className="block text-xs text-teal-400 font-medium tracking-wider uppercase">
                  LLC · South Florida
                </span>
              </div>
            </Link>
            <p className="text-sm text-navy-300 leading-relaxed mb-5">
              A verified local appliance repair company based in {business.primaryCity},
              FL, providing dedicated appliance repair across northern Broward and southern Palm Beach counties.
            </p>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wider text-navy-400 font-semibold">
                Direct Phone Line:
              </p>
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-bold text-lg transition-colors"
                aria-label={`Call Prestige Appliance LLC at ${business.phoneDisplay}`}
              >
                <Phone className="w-5 h-5" />
                {business.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Appliance Repair Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}-deerfield-beach-fl`}
                    className="text-sm text-navy-300 hover:text-teal-400 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/services"
                  className="text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors inline-flex items-center gap-1"
                >
                  All Repair Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas Col */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Verified Service Areas
            </h3>
            <ul className="space-y-2">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link
                    to={`/appliance-repair-${l.slug}`}
                    className="text-sm text-navy-300 hover:text-teal-400 transition-colors flex items-center justify-between"
                  >
                    <span>{l.name}, FL</span>
                    <span className="text-[11px] text-navy-500">{l.county.replace(' County', '')}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/service-areas"
                  className="text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors inline-flex items-center gap-1"
                >
                  All Service Areas Overview →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Info Col */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Company & Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-navy-300 hover:text-teal-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-navy-300 hover:text-teal-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-navy-300 hover:text-teal-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-sm text-navy-300 hover:text-teal-400 transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>

            <div className="mt-6 space-y-2.5 text-xs text-navy-300 border-t border-navy-800/80 pt-4">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>
                  {business.name}
                  <br />
                  {business.primaryCity}, {business.state} {business.zip}
                </span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>Mon–Sat · Sun Closed</span>
              </p>
              <p>
                <a
                  href={business.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 transition-colors"
                >
                  <span>Google Maps Listing</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-900 bg-navy-950/80">
        <div className="container-pro py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-navy-400">
          <p className="text-center sm:text-left">
            © {year} {business.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Phone-Only Service · Call <a href={`tel:${business.phoneRaw}`} className="text-teal-400 hover:underline">{business.phoneDisplay}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
