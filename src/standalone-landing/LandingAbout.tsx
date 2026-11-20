import React from 'react';
import { ShieldCheck, Compass, CheckCircle2, Wrench, Zap, Waves } from 'lucide-react';
import { LANDING_DATA } from './landingData';

export const LandingAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual / Experience Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                Local Field Experience
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Rooted in Deerfield Beach Craftsmanship
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Appliance failures in South Florida demand specialized attention. Coastal atmospheric conditions—high humidity, microscopic sea salt mists, and summer thunder power surges—create unique stress points on electronic control modules, condenser coils, and mechanical drive motors.
              </p>

              <div className="pt-4 border-t border-slate-700/80 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Waves className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-slate-200">
                    Corrosion-resistant diagnostic & maintenance techniques
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-slate-200">
                    Surge-tested control board & voltage fluctuation checks
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-slate-200">
                    Compliant with Florida electrical & appliance safety codes
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stat Pill */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
              <div>
                <span className="block text-xs font-medium text-slate-500">Service Coverage</span>
                <span className="text-sm font-bold text-slate-900">Broward & Palm Beach Counties</span>
              </div>
              <div className="text-right">
                <span className="block text-xs font-medium text-slate-500">Service Base</span>
                <span className="text-sm font-bold text-blue-600">534 NW 3rd Terrace, 33441</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
              About Our Approach
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Precise Diagnostics, Honest Advice & Lasting Repairs
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              When a refrigerator warms up, a washing machine refuses to spin, or a dryer stops heating, homeowners need straightforward answers rather than guesswork. Our mission is to restore your household routine quickly, safely, and cost-effectively.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Component-Level Testing</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Instead of recommending premature replacement of entire appliances, we pinpoint the exact failed relay, valve, pump, or capacitor to keep repair costs practical.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Safety & Building Code Compliance</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    High-draw 240V dryer circuits, gas range manifolds, and high-pressure water supply lines require strict adherence to national and Florida state mechanical standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Direct Customer Communication</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    We clearly explain the diagnosis, supply an itemized written estimate before starting work, and guide you on repair versus replacement economics.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA inline */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={LANDING_DATA.phoneTel}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors"
              >
                <Wrench className="w-4 h-4" />
                <span>Schedule a Diagnostic Visit</span>
              </a>

              <a
                href="#service-area"
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              >
                View Service Coverage &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
