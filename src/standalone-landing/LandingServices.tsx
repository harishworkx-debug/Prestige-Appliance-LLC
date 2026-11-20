import React from 'react';
import {
  Refrigerator,
  Flame,
  Sparkles,
  Phone,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Disc3,
  Layers,
  ThermometerSnowflake,
} from 'lucide-react';
import { LANDING_DATA, LandingService } from './landingData';

// Map icon helper
const getServiceIcon = (id: string) => {
  switch (id) {
    case 'refrigerator-repair':
      return <ThermometerSnowflake className="w-6 h-6 text-blue-600" />;
    case 'washer-repair':
      return <Disc3 className="w-6 h-6 text-blue-600" />;
    case 'dryer-repair':
      return <Flame className="w-6 h-6 text-amber-500" />;
    case 'dishwasher-repair':
      return <Layers className="w-6 h-6 text-cyan-600" />;
    case 'oven-stove-repair':
      return <Flame className="w-6 h-6 text-red-500" />;
    case 'ice-maker-repair':
      return <Sparkles className="w-6 h-6 text-sky-500" />;
    default:
      return <Refrigerator className="w-6 h-6 text-blue-600" />;
  }
};

export const LandingServices: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Verified Appliance Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Residential Appliance Repair in Deerfield Beach
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Precision electrical and mechanical troubleshooting for top household appliances. We isolate root causes and install manufacturer-grade OEM components for durable operation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LANDING_DATA.services.map((service: LandingService) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Card Header & Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Common Issues Section */}
                <div className="mb-5 bg-amber-50/70 border border-amber-200/60 rounded-xl p-3.5">
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-wide flex items-center gap-1.5 mb-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    Frequent Symptoms:
                  </span>
                  <ul className="space-y-1.5">
                    {service.commonIssues.map((issue, idx) => (
                      <li key={idx} className="text-xs text-amber-950 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 shrink-0" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefit / Service Highlights */}
                <div className="mb-6 space-y-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    What Our Diagnosis Covers:
                  </span>
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <a
                  href="#contact"
                  className="text-xs font-bold text-slate-700 hover:text-blue-600 flex items-center gap-1 transition-colors"
                >
                  <span>Select Appliance</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={LANDING_DATA.phoneTel}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-black">
              Experiencing an Unexpected Appliance Breakdown?
            </h4>
            <p className="text-blue-100 text-sm max-w-xl">
              Do not risk water damage or food spoilage. Contact our Deerfield Beach diagnostic dispatch for immediate scheduling assistance.
            </p>
          </div>
          <a
            href={LANDING_DATA.phoneTel}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base shadow-lg transition-all shrink-0"
          >
            <Phone className="w-5 h-5 text-slate-950" />
            <span>Call {LANDING_DATA.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
