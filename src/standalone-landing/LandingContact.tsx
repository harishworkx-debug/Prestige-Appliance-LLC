import React, { useState } from 'react';
import { Phone, MapPin, Clock, ShieldCheck, CheckCircle2, RotateCcw, Wrench } from 'lucide-react';
import { LANDING_DATA } from './landingData';

export const LandingContact: React.FC = () => {
  // Interactive Step-by-Step Dispatch Selector button workflow
  const [selectedAppliance, setSelectedAppliance] = useState<string>('Refrigerator');
  const [selectedUrgency, setSelectedUrgency] = useState<string>('Urgent (Today / Tomorrow)');
  const [inquiryReady, setInquiryReady] = useState<boolean>(false);

  const appliances = [
    'Refrigerator',
    'Washing Machine',
    'Clothes Dryer',
    'Dishwasher',
    'Oven & Stove',
    'Ice Maker',
  ];

  const urgencies = [
    'Urgent (Today / Tomorrow)',
    'Next 2–3 Days',
    'Flexible Maintenance',
  ];

  const handleConfirmChoices = () => {
    setInquiryReady(true);
  };

  const handleReset = () => {
    setInquiryReady(false);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Diagnostic Dispatch
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Schedule Your Appliance Diagnostic Visit
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Reach our Deerfield Beach dispatch desk directly by phone or configure your appliance details below for instant pre-call routing.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Call Card & Physical Base */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Phone Dispatch Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-7 text-white shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                  Direct Phone Dispatch
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Lines Open
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-slate-300">
                  Speak immediately with our local appliance diagnostic specialist:
                </p>
                <a
                  href={LANDING_DATA.phoneTel}
                  className="block text-3xl sm:text-4xl font-black text-white hover:text-amber-300 transition-colors"
                >
                  {LANDING_DATA.phone}
                </a>
                <p className="text-xs text-slate-400">
                  Click on mobile to dial instantly with zero delay.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={LANDING_DATA.phoneTel}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base shadow-lg transition-all"
                >
                  <Phone className="w-5 h-5 text-slate-950" />
                  <span>Call {LANDING_DATA.phone}</span>
                </a>
              </div>
            </div>

            {/* Verified Address & Operating Hours Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Physical Operating Base</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {LANDING_DATA.address}
                  </p>
                  <span className="inline-block mt-1 text-[11px] font-semibold text-blue-600">
                    Northern Broward & Southern Palm Beach Hub
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Operating & Dispatch Hours</h4>
                  <div className="text-xs text-slate-600 mt-1 space-y-0.5">
                    <p><span className="font-semibold text-slate-700">Monday – Friday:</span> 8:00 AM – 6:00 PM</p>
                    <p><span className="font-semibold text-slate-700">Saturday:</span> 9:00 AM – 4:00 PM</p>
                    <p><span className="font-semibold text-slate-700">Sunday:</span> Closed (Emergency Diagnostics Available)</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Compliant with Florida DBPR and county trade standards</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Diagnostic Inquiry Selector */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  Interactive Appointment Inquiry Guide
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Select your appliance and required timing to generate pre-call diagnostic details.
              </p>
            </div>

            {!inquiryReady ? (
              <div className="space-y-6">
                {/* Step 1: Select Appliance */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                    Step 1: Which Appliance Needs Service?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {appliances.map((item) => {
                      const isSelected = selectedAppliance === item;
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setSelectedAppliance(item)}
                          className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all text-center ${
                            isSelected
                              ? 'border-blue-600 bg-blue-50 text-blue-800 shadow-sm'
                              : 'border-slate-200 bg-slate-50/70 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Select Urgency */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                    Step 2: Service Urgency
                  </label>
                  <div className="grid sm:grid-cols-3 gap-2.5">
                    {urgencies.map((urg) => {
                      const isSelected = selectedUrgency === urg;
                      return (
                        <button
                          key={urg}
                          type="button"
                          onClick={() => setSelectedUrgency(urg)}
                          className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all text-center ${
                            isSelected
                              ? 'border-blue-600 bg-blue-50 text-blue-800 shadow-sm'
                              : 'border-slate-200 bg-slate-50/70 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {urg}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Confirm Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleConfirmChoices}
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Generate Diagnostic Pre-Call Summary</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Step 3: Confirmation Summary & Call Action */
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Inquiry Configured for {LANDING_DATA.fullLocation}</span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm bg-white p-4 rounded-xl border border-emerald-100">
                    <div>
                      <span className="text-slate-500 block text-xs">Appliance Unit:</span>
                      <span className="font-bold text-slate-900">{selectedAppliance}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-xs">Requested Urgency:</span>
                      <span className="font-bold text-slate-900">{selectedUrgency}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-xs">Service Dispatch Zone:</span>
                      <span className="font-bold text-slate-900">Deerfield Beach & Coastal Hub</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-xs">Diagnostic Rate:</span>
                      <span className="font-bold text-emerald-700">Clear Upfront Quote</span>
                    </div>
                  </div>

                  <p className="text-xs text-emerald-900 leading-relaxed">
                    Great! Our Deerfield Beach technician team is ready. Tap the call button below to connect with dispatch, state your selections, and lock in your service time.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={LANDING_DATA.phoneTel}
                    className="w-full sm:flex-1 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base shadow-lg text-center flex items-center justify-center gap-2.5 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now ({LANDING_DATA.phone})</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto px-5 py-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Change Choices</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
