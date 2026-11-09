import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { Seo, orgJsonLd } from '@/components/Seo';
import { Breadcrumbs, breadcrumbJsonLd } from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallButton';
import { business } from '@/data/business';

export function PrivacyPolicyPage() {
  const lastUpdated = 'November 2026';

  return (
    <>
      <Seo
        title={`Privacy Policy | ${business.name}`}
        description={`Privacy Policy for Prestige Appliance LLC. Learn how we handle customer information for appliance repair services across South Florida. Call ${business.phoneDisplay}.`}
        path="/privacy-policy"
        jsonLd={[
          orgJsonLd,
          breadcrumbJsonLd([{ label: 'Privacy Policy', to: '/privacy-policy' }]),
        ]}
      />
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <section className="container-pro py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            Legal & Customer Privacy
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-navy-500 mb-8">
            Last Updated: {lastUpdated} · {business.name}
          </p>

          <div className="prose prose-navy max-w-none space-y-8 text-navy-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-display font-bold text-navy-900 mb-3">
                1. Overview & Commitment to Customer Privacy
              </h2>
              <p>
                {business.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is an appliance repair service based in {business.primaryCity}, Florida, serving homeowners throughout northern Broward and southern Palm Beach counties. We operate strictly as a phone-first service company. Because our website contains no forms, user accounts, or lead-capture databases, your personal information is only collected when you voluntarily call us at{' '}
                <a href={`tel:${business.phoneRaw}`} className="text-teal-600 font-semibold hover:underline">
                  {business.phoneDisplay}
                </a>{' '}
                to request diagnostic or repair service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-navy-900 mb-3">
                2. Information We Receive Over the Phone
              </h2>
              <p>
                When you call us to discuss an appliance issue, you may provide:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Your name and contact phone number.</li>
                <li>Your service address (city, neighborhood, and street address) in South Florida.</li>
                <li>Details regarding the appliance brand, model, and symptoms requiring repair.</li>
                <li>Preferred day and time availability for a technician visit.</li>
              </ul>
              <p className="mt-2">
                We use this information solely to schedule service appointments, route our technicians, and provide repair estimates and warranty follow-up.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-navy-900 mb-3">
                3. No Online Data Selling or Marketing Aggregation
              </h2>
              <p>
                We do not sell, rent, trade, or share your personal details with third-party marketers, telemarketers, or data brokers. Your service information remains strictly between you and {business.name} for the execution of legitimate repair services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-navy-900 mb-3">
                4. Cookies & Website Analytics
              </h2>
              <p>
                Our website is designed for speed, privacy, and simplicity. We do not use third-party advertising trackers or invasive behavioral profiling. Standard web server logs may temporarily record anonymous technical data such as browser type, referring page, and operating system for performance monitoring and security purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-navy-900 mb-3">
                5. Data Security
              </h2>
              <p>
                We take reasonable administrative and technical precautions to safeguard the customer contact details provided over the phone. Only authorized personnel directly involved with customer scheduling and technical service have access to customer records.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-navy-900 mb-3">
                6. Contacting Us
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or your personal information, please call us directly:
              </p>
              <div className="bg-navy-50 rounded-xl p-5 border border-navy-100 mt-4 space-y-2 text-sm">
                <p className="font-semibold text-navy-900">{business.name}</p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  {business.primaryCity}, {business.state} {business.zip}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-600" />
                  <a href={`tel:${business.phoneRaw}`} className="text-teal-600 font-semibold hover:underline">
                    {business.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-navy-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-navy-600">
              Need appliance repair in South Florida? Speak to our team directly.
            </p>
            <CallButton size="md" />
          </div>
        </div>
      </section>
    </>
  );
}
