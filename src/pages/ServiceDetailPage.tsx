import { Link, useParams } from 'react-router-dom';
import { Phone, CheckCircle2, Wrench, AlertTriangle, ArrowRight, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { Seo, orgJsonLd } from '@/components/Seo';
import { Breadcrumbs, breadcrumbJsonLd } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';
import { CallButton } from '@/components/CallButton';
import { getServiceIcon } from '@/components/iconMap';
import { business } from '@/data/business';
import { getService, services } from '@/data/services';
import { locations } from '@/data/locations';
import { NotFoundPage } from './NotFoundPage';

export function ServiceDetailPage({ serviceSlug }: { serviceSlug?: string }) {
  const params = useParams<{ slug?: string }>();
  const slug = serviceSlug || params.slug;

  const service = slug ? getService(slug) : undefined;

  if (!service) {
    return <NotFoundPage />;
  }

  const Icon = getServiceIcon(service.icon);
  const fullUrl = `/${service.slug}`;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} - ${business.name}`,
    provider: {
      '@type': 'ApplianceRepair',
      name: business.name,
      telephone: business.phone,
      areaServed: locations.map((loc) => `${loc.name}, ${business.state}`),
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
        title={`${service.name} in ${business.primaryCity}, FL | ${business.name}`}
        description={`Professional ${service.name} in ${business.primaryCity}, FL by ${business.name}. Reliable diagnostics, quality parts, and prompt repairs for Deerfield Beach and South Florida homes. Call ${business.phoneDisplay}.`}
        path={fullUrl}
        image={service.image}
        type="article"
        jsonLd={[
          orgJsonLd,
          serviceJsonLd,
          faqJsonLd,
          breadcrumbJsonLd([
            { label: 'Appliance Repair Services', to: '/services' },
            { label: `${service.name} in ${business.primaryCity}, FL` },
          ]),
        ]}
      />

      <Breadcrumbs
        items={[
          { label: 'Appliance Repair Services', to: '/services' },
          { label: `${service.name} in ${business.primaryCity}, FL` },
        ]}
      />

      {/* Hero Section */}
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
        <div className="container-pro relative py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/30 text-teal-300 px-4 py-1.5 rounded-full text-sm font-medium mb-5">
              <MapPin className="w-4 h-4" />
              Locally Based in {business.primaryCity}, {business.state} · South Florida
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white leading-[1.15] mb-5">
              {service.name} in {business.primaryCity}, FL
            </h1>
            <p className="text-lg md:text-xl text-navy-200 leading-relaxed mb-8 max-w-2xl">
              {service.tagline} Based right here in {business.primaryCity}, FL, {business.name} provides fast, professional {service.shortName.toLowerCase()} throughout {business.primaryCity} and surrounding South Florida communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CallButton size="lg" label={`Call Now: ${business.phoneDisplay}`} />
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-teal-400 text-white font-semibold px-6 py-4 text-lg rounded-lg transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Speak to a Technician
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="container-pro py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-teal-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900">
                  Comprehensive {service.shortName} in {business.primaryCity}, FL
                </h2>
              </div>
              <p className="text-navy-700 leading-relaxed text-lg mb-4">
                {service.intro}
              </p>
              <p className="text-navy-600 leading-relaxed">
                When your {service.shortName.toLowerCase().replace(' repair', '')} breaks down, food can spoil, laundry piles up, or cooking comes to a sudden halt. Based in {business.primaryCity}, FL, {business.name} treats appliance malfunctions with urgency. Our technicians are equipped to test electrical circuits, assess mechanical wear, inspect thermal sensors, and replace worn components promptly.
              </p>
            </div>

            {/* Common Problems */}
            <div className="bg-navy-50 rounded-2xl p-6 sm:p-8 border border-navy-100">
              <h2 className="text-2xl font-display font-bold text-navy-900 mb-2">
                Common {service.shortName} Problems We Solve
              </h2>
              <p className="text-navy-600 mb-6 text-sm">
                If you are experiencing any of these common failures, call {business.phoneDisplay} to discuss the symptoms with our team:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.commonProblems.map((prob, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 border border-navy-100 shadow-sm">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-display font-semibold text-navy-900 text-sm mb-1">
                          {prob.problem}
                        </h3>
                        <p className="text-xs text-navy-600 leading-relaxed">
                          <strong className="text-navy-800">Possible Cause:</strong> {prob.cause}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Symptoms Checklist */}
            <div>
              <h2 className="text-2xl font-display font-bold text-navy-900 mb-4">
                Warning Signs You Need Service
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.symptoms.map((symptom, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-teal-50/50 border border-teal-100/60">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-navy-800 font-medium">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Repair Process */}
            <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-teal-400" />
                Our Step-by-Step {service.shortName} Process
              </h2>
              <div className="space-y-4">
                {service.repairProcess.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-teal-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow">
                      {idx + 1}
                    </span>
                    <p className="text-navy-200 text-sm leading-relaxed pt-1">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-navy-800">
                <CallButton size="md" className="w-full sm:w-auto" />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
              <h3 className="font-display font-bold text-navy-900 text-lg mb-2">
                Need Fast {service.shortName} in {business.primaryCity}?
              </h3>
              <p className="text-sm text-navy-600 mb-5 leading-relaxed">
                Call {business.name} directly. Speak with an experienced local specialist based in {business.primaryCity}, FL serving Deerfield Beach and South Florida.
              </p>
              <CallButton size="md" className="w-full mb-4" />
              <div className="space-y-2.5 pt-4 border-t border-navy-200/60 text-xs text-navy-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>Mon–Sat Service Availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>Warrantied Workmanship & Parts</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span>Locally Based in {business.primaryCity}, FL</span>
                </div>
              </div>
            </div>

            {/* Service Area landing page links */}
            <div className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm">
              <h3 className="font-display font-bold text-navy-900 text-base mb-3">
                {service.shortName} by Location
              </h3>
              <p className="text-xs text-navy-500 mb-4">
                Explore local service pages across our South Florida coverage:
              </p>
              <div className="space-y-1.5">
                {locations.map((loc) => (
                  <Link
                    key={loc.slug}
                    to={`/${service.slug}-${loc.slug}`}
                    className="flex items-center justify-between p-2.5 rounded-lg text-sm text-navy-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-teal-500" />
                      {loc.name}, FL
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-navy-400" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Local Landing Pages Grid */}
      <section className="bg-navy-50 section-padding">
        <div className="container-pro">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Local Service Pages
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mt-1 mb-3">
              {service.name} in Your City
            </h2>
            <p className="text-sm text-navy-600">
              Select your local community below to see dedicated service details and local arrival information:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/${service.slug}-${loc.slug}`}
                className="group bg-white p-5 rounded-xl border border-navy-100 hover:border-teal-300 card-hover flex items-center justify-between"
              >
                <div>
                  <h3 className="font-display font-semibold text-navy-900 group-hover:text-teal-700 transition-colors">
                    {service.shortName} in {loc.name}
                  </h3>
                  <p className="text-xs text-navy-500 mt-0.5">{loc.county}, FL</p>
                </div>
                <ArrowRight className="w-4 h-4 text-teal-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Appliance Services */}
      <section className="container-pro section-padding">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            All Repair Services
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mt-1 mb-3">
            More Appliances We Repair
          </h2>
          <p className="text-sm text-navy-600">
            Prestige Appliance LLC handles all major household appliances across South Florida:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services
            .filter((s) => s.slug !== service.slug)
            .map((s) => {
              const OtherIcon = getServiceIcon(s.icon);
              return (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className="group bg-navy-50 p-4 rounded-xl border border-navy-100 hover:border-teal-300 hover:bg-teal-50/50 transition-all flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-teal-600 shadow-sm flex-shrink-0">
                    <OtherIcon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-navy-800 group-hover:text-teal-700 transition-colors">
                    {s.name}
                  </span>
                </Link>
              );
            })}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-navy-50 section-padding">
        <div className="container-pro">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Common Inquiries
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mt-1 mb-3">
                {service.name} FAQs
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
                  <div className="px-5 pb-5 text-navy-600 text-sm leading-relaxed border-t border-navy-50 pt-3">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title={`Ready for ${service.name} in ${business.primaryCity}, FL?`}
        subtitle={`Speak with ${business.name} at ${business.phoneDisplay}. Locally based in ${business.primaryCity}, we diagnose and fix major appliances across Deerfield Beach, Boca Raton, and South Florida.`}
      />
    </>
  );
}

