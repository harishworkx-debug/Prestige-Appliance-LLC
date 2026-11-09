import { Link, useParams } from 'react-router-dom';
import { MapPin, Phone, CheckCircle2, Wrench, ArrowRight, ShieldCheck, Clock, Star } from 'lucide-react';
import { Seo, orgJsonLd } from '@/components/Seo';
import { Breadcrumbs, breadcrumbJsonLd } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';
import { CallButton } from '@/components/CallButton';
import { getServiceIcon } from '@/components/iconMap';
import { business } from '@/data/business';
import { getLocation, locations } from '@/data/locations';
import { services } from '@/data/services';
import { NotFoundPage } from './NotFoundPage';

export function LocationDetailPage({ locationSlug }: { locationSlug?: string }) {
  const params = useParams<{ slug?: string }>();
  const slug = locationSlug || params.slug;

  const location = slug ? getLocation(slug) : undefined;

  if (!location) {
    return <NotFoundPage />;
  }

  const fullUrl = `/${location.slug}`;

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ApplianceRepair',
    name: `${business.name} - ${location.name}`,
    telephone: business.phone,
    url: `${business.website.replace(/\/$/, '')}${fullUrl}`,
    areaServed: {
      '@type': 'City',
      name: `${location.name}, ${business.state}`,
    },
    openingHoursSpecification: business.hours
      .filter((h) => h.hours !== 'Closed')
      .map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.day,
        description: h.hours,
      })),
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <Seo
        title={`Appliance Repair in ${location.name}, FL | ${business.name}`}
        description={`Fast, reliable appliance repair in ${location.name}, FL by ${business.name}. We repair refrigerators, washers, dryers, ovens, and dishwashers. Call ${business.phoneDisplay}.`}
        path={fullUrl}
        jsonLd={[
          orgJsonLd,
          localBusinessJsonLd,
          faqJsonLd,
          breadcrumbJsonLd([
            { label: 'Service Areas', to: '/service-areas' },
            { label: `${location.name}, FL` },
          ]),
        ]}
      />

      <Breadcrumbs
        items={[
          { label: 'Service Areas', to: '/service-areas' },
          { label: `${location.name}, FL` },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8574669/pexels-photo-8574669.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt={`${location.name}, ${location.county} South Florida community`}
            className="w-full h-full object-cover opacity-25"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/50" />
        </div>
        <div className="container-pro relative py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/30 text-teal-300 px-4 py-1.5 rounded-full text-sm font-medium mb-5">
              <MapPin className="w-4 h-4" />
              Verified Local Service · {location.name}, {location.county}
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white leading-[1.15] mb-5">
              Appliance Repair in {location.name}, FL
            </h1>
            <p className="text-lg md:text-xl text-navy-200 leading-relaxed mb-8 max-w-2xl">
              {location.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CallButton size="lg" label={`Call Now: ${business.phoneDisplay}`} />
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-teal-400 text-white font-semibold px-6 py-4 text-lg rounded-lg transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Schedule in {location.shortName}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Overview */}
      <section className="container-pro py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Local Expertise
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mt-1 mb-4">
                Trusted Appliance Service for {location.name} Homes
              </h2>
              <p className="text-lg text-navy-700 leading-relaxed mb-4">
                {location.context}
              </p>
              <p className="text-navy-600 leading-relaxed">
                When a household appliance breaks down in {location.name}, you need a repair company that arrives quickly with the right tools and diagnostic expertise. {business.name} is proud to serve {location.name} residents with prompt dispatch, courteous technicians, and straightforward communication.
              </p>
            </div>

            <div className="bg-navy-50 rounded-2xl p-6 sm:p-8 border border-navy-100">
              <h3 className="font-display font-bold text-navy-900 text-xl mb-4">
                Why {location.name} Residents Rely on {business.name}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-navy-900 text-sm">
                      Rapid Local Response
                    </h4>
                    <p className="text-xs text-navy-600 mt-1">
                      Operating in nearby {business.primaryCity}, allowing fast travel across {location.name}.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-navy-900 text-sm">
                      Warrantied Repairs
                    </h4>
                    <p className="text-xs text-navy-600 mt-1">
                      Every diagnostic repair is backed by workmanship and parts warranties.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-navy-900 text-sm">
                      Direct Phone Service
                    </h4>
                    <p className="text-xs text-navy-600 mt-1">
                      No automated booking bots or third-party lead brokers. Speak to our team directly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-navy-900 text-sm">
                      Se Habla Español
                    </h4>
                    <p className="text-xs text-navy-600 mt-1">
                      Bilingual assistance for South Florida homeowners in English and Spanish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick CTA Card */}
          <aside className="space-y-6">
            <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl">
              <h3 className="font-display font-bold text-xl mb-2">
                Need Repair in {location.shortName}?
              </h3>
              <p className="text-sm text-navy-200 mb-6 leading-relaxed">
                Call {business.phoneDisplay} to describe your appliance problem and discuss the earliest service window for your address.
              </p>
              <CallButton size="md" className="w-full mb-4" />
              <div className="pt-4 border-t border-navy-800 space-y-2 text-xs text-navy-300">
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-400" />
                  Monday–Saturday: 8am–9pm / 6pm
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  Serving all {location.name} neighborhoods
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm">
              <h4 className="font-display font-bold text-navy-900 text-sm uppercase tracking-wider mb-3">
                Other Verified Locations
              </h4>
              <div className="space-y-1.5">
                {locations
                  .filter((l) => l.slug !== location.slug)
                  .map((l) => (
                    <Link
                      key={l.slug}
                      to={`/${l.slug}`}
                      className="flex items-center justify-between p-2 rounded-lg text-sm text-navy-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      <span>{l.name}, FL</span>
                      <ArrowRight className="w-3.5 h-3.5 text-navy-400" />
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Specific Service Cards for this Location */}
      <section className="bg-navy-50 section-padding">
        <div className="container-pro">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Available in {location.name}
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mt-1 mb-3">
              Appliance Services Available in {location.name}, FL
            </h2>
            <p className="text-sm text-navy-600">
              Each service below links directly to our dedicated {location.name} landing page with detailed symptoms, causes, and diagnostic steps:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = getServiceIcon(s.icon);
              const targetSlug = `${s.slug}-${location.slug}`;
              return (
                <Link
                  key={s.slug}
                  to={`/${targetSlug}`}
                  className="group bg-white rounded-2xl overflow-hidden card-hover border border-navy-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={s.image}
                        alt={`${s.name} in ${location.name}, FL`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/40 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-teal-500 flex items-center justify-center flex-shrink-0 shadow">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-white font-display font-semibold text-base sm:text-lg leading-tight">
                          {s.name} in {location.name}, FL
                        </h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="mb-3">
                        <span className="inline-block text-[11px] font-mono font-medium text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                          /{targetSlug}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <div className="flex items-center justify-between pt-3 border-t border-navy-50">
                      <span className="text-xs sm:text-sm font-semibold text-teal-600 group-hover:text-teal-700">
                        View {s.shortName} in {location.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-teal-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location FAQs */}
      <section className="container-pro section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              {location.name} Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mt-1 mb-3">
              Appliance Repair FAQs — {location.name}, FL
            </h2>
          </div>

          <div className="space-y-4">
            {location.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-navy-50 rounded-xl border border-navy-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 font-display font-semibold text-navy-900 list-none">
                  {faq.q}
                  <span className="text-teal-500 group-open:rotate-45 transition-transform text-2xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-navy-600 text-sm leading-relaxed border-t border-navy-100/60 pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={`Fast Appliance Repair in ${location.name}, FL`}
        subtitle={`Call ${business.name} at ${business.phoneDisplay}. We are ready to schedule a prompt diagnostic visit for your home in ${location.name}.`}
      />
    </>
  );
}

