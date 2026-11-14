import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Seo, orgJsonLd, localBusinessJsonLd } from '@/components/Seo';
import { Breadcrumbs, breadcrumbJsonLd } from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallButton';
import { business } from '@/data/business';

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Prestige Appliance LLC | Deerfield Beach, FL"
        description="Contact Prestige Appliance LLC for appliance repair, diagnostics and maintenance in Deerfield Beach and surrounding South Florida communities. Call to schedule service."
        path="/contact"
        jsonLd={[orgJsonLd, localBusinessJsonLd, breadcrumbJsonLd([{ label: 'Contact', to: '/contact' }])]}
      />
      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <section className="container-pro py-12 md:py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-900 mt-2 mb-6">
            Contact Prestige Appliance LLC
          </h1>
          <p className="text-lg text-navy-600 leading-relaxed">
            The fastest way to get your appliance repaired is to call us
            directly. Pick up the phone and dial{' '}
            <a
              href={`tel:${business.phoneRaw}`}
              className="text-teal-600 font-semibold hover:text-teal-700"
            >
              {business.phoneDisplay}
            </a>{' '}
            — we will talk through the problem and arrange the next steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-teal-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display font-semibold text-navy-900 text-lg mb-1">
                    Phone
                  </h2>
                  <a
                    href={`tel:${business.phoneRaw}`}
                    className="text-2xl font-display font-bold text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    {business.phoneDisplay}
                  </a>
                  <p className="text-sm text-navy-600 mt-2">
                    Call us directly to schedule a repair or discuss your
                    appliance problem. Se habla español.
                  </p>
                  <div className="mt-4">
                    <CallButton size="md" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-teal-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display font-semibold text-navy-900 text-lg mb-1">
                    Location
                  </h2>
                  <p className="text-navy-700">
                    {business.name}
                    <br />
                    {business.streetAddress}
                    <br />
                    {business.primaryCity}, {business.state} {business.zip}
                  </p>
                  <a
                    href={business.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-teal-600 font-medium hover:text-teal-700 mt-2 transition-colors text-sm"
                  >
                    View Google Maps Listing
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-teal-500 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display font-semibold text-navy-900 text-lg mb-3">
                    Hours of Operation
                  </h2>
                  <ul className="space-y-1.5">
                    {business.hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex justify-between text-sm border-b border-navy-100 last:border-0 pb-1.5 last:pb-0"
                      >
                        <span className="text-navy-700 font-medium">
                          {h.day}
                        </span>
                        <span
                          className={
                            h.hours === 'Closed'
                              ? 'text-navy-400'
                              : 'text-navy-600'
                          }
                        >
                          {h.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl overflow-hidden border border-navy-100 shadow-lg">
              <div className="bg-navy-900 p-4">
                <h2 className="text-white font-display font-semibold flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-400" />
                  {business.name} — Service Area Map
                </h2>
              </div>
              <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <iframe
                  src={business.mapEmbed}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title={`${business.name} service area map`}
                />
              </div>
            </div>

            <div className="mt-6 bg-teal-50 border border-teal-200 rounded-2xl p-6">
              <h2 className="font-display font-semibold text-navy-900 text-lg mb-2">
                How to Reach Us
              </h2>
              <p className="text-sm text-navy-700 leading-relaxed mb-4">
                We do not use online forms or booking tools. The best way to
                reach {business.name} is by phone. Call us, describe the
                problem, and we will discuss service availability for your
                area.
              </p>
              <CallButton size="md" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
