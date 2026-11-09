import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
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
        title={`Appliance Repair Services in ${business.primaryCity}, FL | ${business.name}`}
        description={`Prestige Appliance LLC offers refrigerator, freezer, washer, dryer, dishwasher, oven, stove, range, cooktop, and ice maker repair in ${business.primaryCity}, FL and South Florida. Call ${business.phoneDisplay}.`}
        path="/services"
        jsonLd={[orgJsonLd, breadcrumbJsonLd([{ label: 'Appliance Repair Services', to: '/services' }])]}
      />
      <Breadcrumbs items={[{ label: 'Appliance Repair Services' }]} />

      <section className="container-pro py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            What We Repair
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-900 mt-2 mb-6">
            Appliance Repair Services in {business.primaryCity}, FL
          </h1>
          <p className="text-lg text-navy-600 leading-relaxed">
            {business.name} repairs the major household appliances South
            Florida families rely on every day. Browse our services below, then
            call{' '}
            <a
              href={`tel:${business.phoneRaw}`}
              className="text-teal-600 font-semibold hover:text-teal-700"
            >
              {business.phoneDisplay}
            </a>{' '}
            to schedule a repair.
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
