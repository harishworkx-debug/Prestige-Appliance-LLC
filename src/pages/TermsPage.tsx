import { Link } from 'react-router-dom';
import { FileText, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Seo, orgJsonLd } from '@/components/Seo';
import { Breadcrumbs, breadcrumbJsonLd } from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallButton';
import { business } from '@/data/business';

export function TermsPage() {
  const lastUpdated = 'November 2026';

  return (
    <>
      <Seo
        title={`Terms and Conditions | ${business.name}`}
        description={`Terms and Conditions for appliance repair services provided by Prestige Appliance LLC in South Florida. Call ${business.phoneDisplay} to schedule service.`}
        path="/terms-and-conditions"
        jsonLd={[
          orgJsonLd,
          breadcrumbJsonLd([{ label: 'Terms and Conditions', to: '/terms-and-conditions' }]),
        ]}
      />
      <Breadcrumbs items={[{ label: 'Terms and Conditions' }]} />

      <section className="container-pro py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            <FileText className="w-4 h-4" />
            Service Terms & Agreement
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-3">
            Terms and Conditions
          </h1>
          <p className="text-sm text-navy-500 mb-8">
            Last Updated: {lastUpdated} · {business.name}
          </p>

          <div className="prose prose-navy max-w-none space-y-8 text-navy-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-display font-bold text-navy-900 mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing this website or scheduling appliance repair services by phone with {business.name} (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-navy-900 mb-3">
                2. Scheduling & Service Requests
              </h2>
              <p>
                All service requests, inquiries, and appointments are scheduled exclusively via telephone by calling{' '}
                <a href={`tel:${business.phoneRaw}`} className="text-teal-600 font-semibold hover:underline">
                  {business.phoneDisplay}
                </a>. We do not accept online form submissions, automated bookings, or chat-based requests. Appointment times discussed over the phone are arrival windows, and our technicians strive to communicate promptly if traffic or previous emergency repairs affect scheduling.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-navy-900 mb-3">
                3. Diagnostics & Estimate Approval
              </h2>
              <p>
                Our technician will inspect the appliance, identify the root cause of malfunction, and present an honest diagnosis and price estimate before commencing repairs. No repair work is undertaken without the customer’s explicit verbal approval.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-navy-900 mb-3">
                4. Parts & Workmanship Warranty
              </h2>
              <p>
                {business.name} stands behind the quality of its work. Installed replacement parts and labor performed by our technicians are backed by applicable warranties discussed at the time of repair. Warranties do not cover subsequent damage caused by power surges, water supply contamination, customer misuse, or unauthorized third-party tampering.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-navy-900 mb-3">
                5. Customer Responsibilities
              </h2>
              <p>
                The homeowner or authorized adult representative (at least 18 years of age) must be present during the scheduled service appointment. Safe, unobstructed access to the appliance, electrical connections, and water shut-off valves must be provided.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-navy-900 mb-3">
                6. Limitation of Liability
              </h2>
              <p>
                While our technicians exercise the highest standard of care, {business.name} shall not be liable for pre-existing structural defects, aged plumbing valves that fail upon shut-off, concealed floor damage caused by long-term undetected appliance leaks, or indirect incidental damages.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-navy-900 mb-3">
                7. Questions & Contact Information
              </h2>
              <p>
                If you have questions regarding these terms, our warranties, or need to schedule an appliance diagnostic visit, please contact us by phone:
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
              Ready to schedule professional appliance repair? Call us today.
            </p>
            <CallButton size="md" />
          </div>
        </div>
      </section>
    </>
  );
}

