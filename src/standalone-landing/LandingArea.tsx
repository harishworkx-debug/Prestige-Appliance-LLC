import React from 'react';
import { MapPin, Navigation, Phone, CheckCircle2 } from 'lucide-react';
import { LANDING_DATA, NearbyArea } from './landingData';

export const LandingArea: React.FC = () => {
  return (
    <section id="service-area" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Verified Service Territory
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Serving Deerfield Beach & Surrounding Communities
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Our diagnostic fleet operates throughout northern Broward and southern Palm Beach counties, providing prompt residential dispatch directly from our local base.
          </p>
        </div>

        {/* Primary Hub Spotlight Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-12 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Navigation className="w-3.5 h-3.5" />
              Primary Diagnostic Base
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Deerfield Beach, FL 33441
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Centrally dispatched from <span className="font-semibold text-slate-900">{LANDING_DATA.address}</span>. We provide immediate residential appliance service across The Cove, Deer Creek, Century Village, Crystal Lake, and all coastal Deerfield Beach neighborhoods.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Same-Day Diagnostic Availability</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fully Stocked Mobile Service Units</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>North Broward & South Palm Beach Coverage</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct Dispatch & Quick Response</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href={LANDING_DATA.phoneTel}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {LANDING_DATA.phone}</span>
              </a>
            </div>
          </div>

          {/* Clean Google Map Embed centered on Deerfield Beach without business parameters */}
          <div className="lg:col-span-5 h-72 sm:h-80 rounded-xl overflow-hidden border border-slate-200 shadow-inner">
            <iframe
              title="Deerfield Beach Service Area Map"
              src="https://maps.google.com/maps?q=Deerfield+Beach,+FL&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        {/* Nearby Verified Service Communities Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">
              Nearby Genuinely Served Cities & Postal Codes
            </h3>
            <span className="text-xs font-semibold text-slate-500">10 Verified Zones</span>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {LANDING_DATA.serviceAreas.map((area: NearbyArea, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">{area.distance}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{area.name}</h4>
                  <p className="text-xs text-slate-500 mb-2">{area.county}</p>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400">ZIP:</span>
                  <span className="font-mono font-medium text-slate-700">{area.zip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
