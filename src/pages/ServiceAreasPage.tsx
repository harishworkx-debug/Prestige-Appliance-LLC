import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import { Seo, orgJsonLd } from '@/components/Seo';
import { Breadcrumbs, breadcrumbJsonLd } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';
import { CallButton } from '@/components/CallButton';
import { business } from '@/data/business';
import { locations } from '@/data/locations';
import { services } from '@/data/services';

export function ServiceAreasPage() {
  return (
    <>
      <Seo
        title={`Appliance Repair Service Areas in South Florida | ${business.name}`}
        description={`Prestige Appliance LLC serves 10 South Florida communities including ${business.primaryCity}, Boca Raton, Pompano Beach, Coconut Creek, Coral Springs, Margate, Parkland, Lighthouse Point, Delray Beach, and Fort Lauderdale. Call ${business.phoneDisplay}.`}
        path="/service-areas"
        jsonLd={[orgJsonLd, breadcrumbJsonLd([{ label: 'Service Areas', to: '/service-areas' }])]}
      />
      <Breadcrumbs items={[{ label: 'Service Areas' }]} />

      <section className="container-pro py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Where We Work
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-900 mt-2 mb-6">
            South Florida Service Areas
          </h1>
          <p className="text-lg text-navy-600 leading-relaxed">
            {business.name} is based in {business.primaryCity}, Florida. We
            serve homeowners in the surrounding South Florida community. Call{' '}
            <a
              href={`tel:${business.phoneRaw}`}
              className="text-teal-600 font-semibold hover:text-teal-700"
            >
              {business.phoneDisplay}
            </a>{' '}
            to confirm service for your address.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              to={`/${loc.slug}`}
              className="group bg-white rounded-2xl overflow-hidden card-hover border border-navy-100"
            >
              <div className="relative h-40 bg-navy-900 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8574669/pexels-photo-8574669.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt={`${loc.name}, ${loc.county} South Florida coastal area`}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-400" />
                  <div>
                    <h2 className="text-white font-display font-semibold text-lg leading-tight">
                      {loc.name}, FL
                    </h2>
                    <p className="text-navy-200 text-xs">{loc.county}</p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-navy-600 leading-relaxed mb-4 line-clamp-3">
                  {loc.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-teal-600 group-hover:text-teal-700">
                    Appliance Repair in {loc.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-teal-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works Quick */}
      <section className="bg-navy-50 section-padding">
        <div className="container-pro">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-navy-900 mb-4">
              Scheduling Is Simple — Just Call
            </h2>
            <p className="text-navy-600 mb-8">
              We do not use online booking. When you call {business.name}, you
              speak directly with us. We discuss your appliance, your location,
              and the next available appointment.
            </p>
            <CallButton size="lg" />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
