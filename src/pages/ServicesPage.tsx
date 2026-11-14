import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Search, Wrench, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Seo, orgJsonLd } from '@/components/Seo';
import { Breadcrumbs, breadcrumbJsonLd } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';
import { CallButton } from '@/components/CallButton';
import { getServiceIcon } from '@/components/iconMap';
import { business } from '@/data/business';
import { services } from '@/data/services';

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Appliance Repair & Maintenance Services | Prestige Appliance"
        description="Explore appliance diagnostics, appliance repair, maintenance and refurbished appliance sales from Prestige Appliance LLC in Deerfield Beach, Florida."
        path="/services"
        jsonLd={[orgJsonLd, breadcrumbJsonLd([{ label: 'Appliance Repair Services', to: '/services' }])]}
      />
      <Breadcrumbs items={[{ label: 'Appliance Repair Services' }]} />

      <section className="container-pro py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Full-Service Appliance Care
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-900 mt-2 mb-6">
            Professional Appliance Repair and Maintenance Services
          </h1>
          <p className="text-lg text-navy-600 leading-relaxed mb-4">
            Prestige Appliance LLC offers appliance-related services designed to help homeowners maintain and restore their household equipment.
          </p>
          <p className="text-base text-navy-600 leading-relaxed">
            Our service process begins with understanding the problem and identifying the appliance components that may need attention. Following the diagnostic process, we explain the available repair options so customers can make informed decisions. Call{' '}
            <a
              href={`tel:${business.phoneRaw}`}
              className="text-teal-600 font-semibold hover:text-teal-700"
            >
              {business.phoneDisplay}
            </a>{' '}
            to discuss your repair needs directly.
          </p>
        </div>

        {/* 3 Core Service Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-navy-50/70 border border-navy-100 rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-600 flex items-center justify-center mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-display font-bold text-navy-900 mb-2">
              Appliance Diagnostics
            </h2>
            <p className="text-sm text-navy-600 leading-relaxed mb-4">
              Pinpoint electrical, electronic, and mechanical failures with advanced diagnostic equipment before replacing parts.
            </p>
            <ul className="space-y-2 text-xs text-navy-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Multimeter voltage & continuity testing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Error code readouts & control board checks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Transparent explanation before any work</span>
              </li>
            </ul>
          </div>

          <div className="bg-navy-50/70 border border-navy-100 rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-600 flex items-center justify-center mb-4">
              <Wrench className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-display font-bold text-navy-900 mb-2">
              Major Appliance Repairs
            </h2>
            <p className="text-sm text-navy-600 leading-relaxed mb-4">
              Professional repairs for refrigerators, washers, dryers, ovens, and dishwashers using factory-approved OEM components.
            </p>
            <ul className="space-y-2 text-xs text-navy-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Compressor, pump & motor replacements</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Heating elements, igniters & thermostat swaps</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Backed by our repair warranty</span>
              </li>
            </ul>
          </div>

          <div className="bg-navy-50/70 border border-navy-100 rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-600 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-display font-bold text-navy-900 mb-2">
              Appliance Maintenance
            </h2>
            <p className="text-sm text-navy-600 leading-relaxed mb-4">
              Keep critical household appliances running efficiently in South Florida's high humidity and warm coastal climate.
            </p>
            <ul className="space-y-2 text-xs text-navy-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Condenser coil cleaning & airflow tune-up</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Washer drain pump & filter descaling</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Dryer vent inspection for fire safety</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-display font-bold text-navy-900 mb-2">
            Browse By Appliance Type
          </h2>
          <p className="text-navy-600 text-sm">
            Select an appliance below to review common signs of malfunction, causes, and local repair details in {business.primaryCity}, FL:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = getServiceIcon(s.icon);
            return (
              <Link
                key={s.slug}
                to={`/${s.slug}-deerfield-beach-fl`}
                className="group bg-white rounded-2xl overflow-hidden card-hover border border-navy-100 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-teal-500 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-white font-display font-semibold text-lg">
                        {s.name}
                      </h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-navy-600 leading-relaxed mb-4">
                      {s.description}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between pt-3 border-t border-navy-50">
                    <span className="text-sm font-semibold text-teal-600 group-hover:text-teal-700">
                      Explore {s.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-teal-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Call Banner */}
      <section className="bg-navy-50">
        <div className="container-pro py-12">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-navy-100 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-display font-bold text-navy-900 mb-2">
                Not Sure What Is Wrong with Your Appliance?
              </h2>
              <p className="text-navy-600">
                Call us and describe the symptoms. We will help you figure it
                out.
              </p>
            </div>
            <CallButton size="lg" />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
