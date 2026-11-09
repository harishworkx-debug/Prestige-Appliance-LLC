import { Link, useParams } from 'react-router-dom';
import { Phone, CheckCircle2, Wrench, AlertTriangle, ArrowRight, MapPin } from 'lucide-react';
import { Seo, orgJsonLd } from '@/components/Seo';
import { Breadcrumbs, breadcrumbJsonLd } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';
import { CallButton } from '@/components/CallButton';
import { getServiceIcon } from '@/components/iconMap';
import { business } from '@/data/business';
import { getService, services } from '@/data/services';
import { getLocation, locations } from '@/data/locations';
import { NotFoundPage } from './NotFoundPage';

export function ServiceLocationPage() {
  const { slug } = useParams<{ slug: string }>();

  // The URL pattern is {service-slug}-{location-slug}
  // We need to find which service + location combination matches
  let matchedService;
  let matchedLocation;

  for (const s of services) {
    for (const l of locations) {
      const combined = `${s.slug}-${l.slug}`;
      if (combined === slug) {
        matchedService = s;
        matchedLocation = l;
        break;
      }
    }
    if (matchedService) break;
  }

  if (!matchedService || !matchedLocation) {
    return <NotFoundPage />;
  }

  const service = matchedService;
  const location = matchedLocation;
  const Icon = getServiceIcon(service.icon);

  const fullUrl = `/${service.slug}-${location.slug}`;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${location.name}, FL`,
    provider: {
      '@type': 'ApplianceRepair',
      name: business.name,
      telephone: business.phone,
    },
    areaServed: {
      '@type': 'City',
      name: `${location.name}, ${business.state}`,
    },
    description: service.description,
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
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
        title={`${service.name} in ${location.name}, FL | ${business.name}`}
        description={`${service.name} in ${location.name}, FL from ${business.name}. ${service.description} Call ${business.phoneDisplay} to schedule.`}
        path={fullUrl}
        image={service.image}
        type="article"
        jsonLd={[
          orgJsonLd,
          serviceJsonLd,
          faqJsonLd,
          breadcrumbJsonLd([
            { label: 'Appliance Repair Services', to: '/services' },
            { label: `${service.name} in ${location.name}, FL` },
          ]),
        ]}
      />

      <Breadcrumbs
        items={[
          { label: 'Appliance Repair Services', to: '/services' },
          { label: `${service.name} in ${location.name}, FL` },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.alt}
            className="w-full h-full object-cover opacity-25"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/50" />
        </div>
        <div className="container-pro relative py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/30 text-teal-300 px-4 py-1.5 rounded-full text-sm font-medium mb-5">
              <MapPin className="w-4 h-4" />
              {location.name}, {business.state} · {location.county}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-[1.1] mb-5">
              {service.name} in {location.name}, FL
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed mb-8">
              {service.tagline} {business.name} provides {service.shortName.toLowerCase()}{' '}
              service to homes in {location.name} and the surrounding South
              Florida community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CallButton size="lg" label={`Call ${business.phoneDisplay}`} />
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-teal-400 text-white font-semibold px-6 py-4 text-lg rounded-lg transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Schedule {service.shortName}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container-pro py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center">
                <Icon className="w-7 h-7 text-teal-600" />
              </div>
              <h2 className="text-2xl font-display font-bold text-navy-900">
                {service.shortName} in {location.name}
              </h2>
            </div>
            <p className="text-navy-600 leading-relaxed mb-4 text-lg">
              {service.intro}
            </p>
            <p className="text-navy-600 leading-relaxed">
              {location.context} If you are in {location.name} and your{' '}
              {service.shortName.toLowerCase().replace(' repair', '')} needs
              attention, call {business.name} at{' '}
              <a
                href={`tel:${business.phoneRaw}`}
                className="text-teal-600 font-semibold hover:text-teal-700"
              >
                {business.phoneDisplay}
              </a>{' '}
              to schedule a service visit.
            </p>
          </div>

          <aside className="bg-navy-50 rounded-2xl p-6 border border-navy-100 h-fit">
            <h3 className="font-display font-semibold text-navy-900 mb-4">
              Quick Service Call
            </h3>
            <p className="text-sm text-navy-600 mb-4">
              Call now to discuss your {service.shortName.toLowerCase()} with a
              local technician serving {location.name}.
            </p>
            <CallButton size="md" className="w-full" />
            <ul className="mt-5 space-y-2 text-sm text-navy-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                Locally based in {business.primaryCity}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                Warranties on repairs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                Se habla español
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Common Problems */}
      <section className="bg-navy-50 section-padding">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Troubleshooting
            </span>
            <h2 className="text-3xl font-display font-bold text-navy-900 mt-2 mb-4">
              Common {service.shortName} Problems
            </h2>
            <p className="text-navy-600">
              If you recognize any of these issues, call us to schedule a
              diagnostic visit in {location.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.commonProblems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-navy-100 flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-navy-900 text-base mb-1">
                    {item.problem}
                  </h3>
                  <p className="text-sm text-navy-600 leading-relaxed">
                    <span className="font-medium text-navy-700">
                      Possible cause:
                    </span>{' '}
                    {item.cause}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="container-pro section-padding">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Watch For These Signs
            </span>
            <h2 className="text-3xl font-display font-bold text-navy-900 mt-2 mb-6">
              Symptoms That Mean It Is Time to Call
            </h2>
            <ul className="space-y-3">
              {service.symptoms.map((symptom, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy-700">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-navy-900 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-5">
              <Wrench className="w-8 h-8 text-teal-400" />
              <h2 className="text-2xl font-display font-bold">
                Our {service.shortName} Process
              </h2>
            </div>
            <ol className="space-y-4">
              {service.repairProcess.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-teal-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-navy-200 text-sm leading-relaxed">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-6 pt-6 border-t border-navy-700">
              <CallButton size="md" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-navy-50 section-padding">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Also Available
            </span>
            <h2 className="text-3xl font-display font-bold text-navy-900 mt-2 mb-4">
              Related Appliance Repair Services in {location.name}
            </h2>
            <p className="text-navy-600">
              We repair more than just {service.shortName.toLowerCase()}. See
              our other services available in {location.name}, FL.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 8)
              .map((s) => {
                const RIcon = getServiceIcon(s.icon);
                return (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}-${location.slug}`}
                    className="group bg-white rounded-xl p-4 border border-navy-100 card-hover flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <RIcon className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-sm font-semibold text-navy-800 group-hover:text-teal-600 transition-colors">
                      {s.shortName} in {location.name}
                    </span>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* Service Area Links */}
      <section className="container-pro section-padding">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Other Areas
          </span>
          <h2 className="text-3xl font-display font-bold text-navy-900 mt-2 mb-4">
            {service.shortName} in Other South Florida Areas
          </h2>
          <p className="text-navy-600">
            We also provide {service.shortName.toLowerCase()} in these nearby
            communities.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {locations
            .filter((l) => l.slug !== location.slug)
            .map((l) => (
              <Link
                key={l.slug}
                to={`/${service.slug}-${l.slug}`}
                className="inline-flex items-center gap-2 bg-navy-50 hover:bg-teal-50 border border-navy-100 hover:border-teal-200 text-navy-700 hover:text-teal-700 font-medium px-4 py-2.5 rounded-lg transition-all text-sm"
              >
                <MapPin className="w-4 h-4" />
                {service.shortName} in {l.name}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-navy-50 section-padding">
        <div className="container-pro">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Questions
              </span>
              <h2 className="text-3xl font-display font-bold text-navy-900 mt-2 mb-4">
                {service.shortName} FAQs — {location.name}, FL
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white rounded-xl border border-navy-100 overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 font-display font-semibold text-navy-900 list-none">
                    {faq.q}
                    <span className="text-teal-500 group-open:rotate-45 transition-transform text-2xl leading-none">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-navy-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title={`${service.shortName} in ${location.name}? Call Us Today.`}
        subtitle={`Call ${business.name} at ${business.phoneDisplay}. We serve ${location.name} and the surrounding South Florida community.`}
      />
    </>
  );
}
