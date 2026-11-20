import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { LANDING_DATA, FaqItem } from './landingData';

export const LandingFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Homeowner Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Practical insights on local appliance diagnostics, repair timing, coastal climate maintenance, and service scheduling in Deerfield Beach.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {LANDING_DATA.faqs.map((faq: FaqItem, idx: number) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg leading-snug">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Help Callout */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h4 className="text-base font-bold text-slate-900">
            Have a Specific Appliance Model or Urgent Issue?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Speak directly with our local diagnostic team to discuss your symptoms and lock in your service window.
          </p>
          <div className="pt-2">
            <a
              href={LANDING_DATA.phoneTel}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call {LANDING_DATA.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
