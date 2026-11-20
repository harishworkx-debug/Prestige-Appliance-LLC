import React from 'react';
import { ShieldCheck, Compass, DollarSign, Cpu, CheckCircle2 } from 'lucide-react';
import { LANDING_DATA } from './landingData';

export const LandingWhyUs: React.FC = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-emerald-600" />,
      title: LANDING_DATA.whyChooseUs[0].title,
      desc: LANDING_DATA.whyChooseUs[0].desc,
      bullet: 'Adherence to Florida electrical & appliance mechanical standards',
    },
    {
      icon: <Compass className="w-7 h-7 text-blue-600" />,
      title: LANDING_DATA.whyChooseUs[1].title,
      desc: LANDING_DATA.whyChooseUs[1].desc,
      bullet: 'Targeted defenses against coastal humidity & salt oxidation',
    },
    {
      icon: <DollarSign className="w-7 h-7 text-amber-500" />,
      title: LANDING_DATA.whyChooseUs[2].title,
      desc: LANDING_DATA.whyChooseUs[2].desc,
      bullet: 'Written diagnostic quotes provided before any work starts',
    },
    {
      icon: <Cpu className="w-7 h-7 text-indigo-600" />,
      title: LANDING_DATA.whyChooseUs[3].title,
      desc: LANDING_DATA.whyChooseUs[3].desc,
      bullet: 'Micro-component voltage, resistance, and continuity testing',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Why Deerfield Beach Chooses Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Proven Appliance Diagnostic Standards
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            We hold ourselves to rigorous technical benchmarks so you get genuine answers, durable replacement components, and long-lasting performance.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-start gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{pillar.bullet}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Diagnostic Promise Strip */}
        <div className="mt-12 bg-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold">
              Our 90-Day Parts & Labor Guarantee
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              Every major repair executed with certified OEM components is backed by our standard 90-day guarantee. If the replaced component fails under normal domestic use, we fix it at zero additional cost.
            </p>
          </div>
          <a
            href={LANDING_DATA.phoneTel}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-colors shrink-0"
          >
            <span>Call to Schedule</span>
          </a>
        </div>
      </div>
    </section>
  );
};
