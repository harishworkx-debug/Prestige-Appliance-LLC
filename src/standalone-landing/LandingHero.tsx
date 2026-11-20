import React from 'react';
import { Phone, Calendar, ShieldCheck, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { LANDING_DATA } from './landingData';

export const LandingHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background ambient lighting accents */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-amber-500 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>{LANDING_DATA.fullLocation} & Surrounding Communities</span>
            </div>

            {/* Main Primary H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              {LANDING_DATA.niche} in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-amber-300">
                {LANDING_DATA.fullLocation}
              </span>
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Fast, component-level residential appliance diagnostics and certified repairs for refrigerators, washers, dryers, dishwashers, ovens, and ice makers. Built to withstand South Florida coastal conditions with clear upfront pricing.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={LANDING_DATA.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-extrabold text-lg shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 animate-bounce" />
                <span>Call {LANDING_DATA.phone}</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white font-semibold text-base transition-colors"
              >
                <Calendar className="w-5 h-5 text-amber-400" />
                <span>Request Diagnostic</span>
              </a>
            </div>

            {/* Quick Micro-Trust List */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Same/Next-Day Slots</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>OEM Certified Parts</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Highlights */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                  <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
                    Technicians Active Today
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Mon - Sat Service</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-700/50 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">State & Industry Standards</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Strict electrical, mechanical, and safety compliance across all household appliance brands.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-700/50 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Direct Deerfield Beach Hub</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Based at 534 NW 3rd Terrace with rapid dispatch to Boca Raton, Pompano Beach & surrounding areas.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900/60 to-slate-900/80 p-4 rounded-xl border border-blue-500/30 text-center space-y-2">
                  <span className="text-xs uppercase font-semibold text-blue-300 tracking-wider">
                    Immediate Phone Dispatch
                  </span>
                  <a
                    href={LANDING_DATA.phoneTel}
                    className="block text-2xl sm:text-3xl font-black text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    {LANDING_DATA.phone}
                  </a>
                  <p className="text-[11px] text-slate-400">
                    Direct connection to scheduling — speak with an appliance diagnostic specialist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Trust Badges Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4">
          {LANDING_DATA.trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-4 text-center space-y-1 hover:border-blue-500/40 transition-colors"
            >
              <h4 className="font-bold text-white text-sm sm:text-base">{badge.label}</h4>
              <p className="text-xs text-slate-400">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
