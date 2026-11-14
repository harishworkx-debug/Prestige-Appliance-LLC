import { Link } from 'react-router-dom';
import { Phone, Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, ArrowRight, Wrench } from 'lucide-react';
import { Seo, orgJsonLd, localBusinessJsonLd } from '@/components/Seo';
import { Breadcrumbs, breadcrumbJsonLd } from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallButton';
import { business } from '@/data/business';
import { services } from '@/data/services';

export function BookOnlinePage() {
  return (
    <>
      <Seo
        title="Schedule Appliance Repair | Prestige Appliance LLC"
        description="Request appliance repair or diagnostics from Prestige Appliance LLC. Contact our Deerfield Beach team to discuss your appliance problem and schedule an appointment."
        path="/book-online"
        jsonLd={[orgJsonLd, localBusinessJsonLd, breadcrumbJsonLd([{ label: 'Schedule Repair', to: '/book-online' }])]}
      />
      <Breadcrumbs items={[{ label: 'Schedule Repair' }]} />

      <section className="container-pro py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/30 text-teal-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4 text-teal-600" />
            Direct Phone Scheduling · South Florida
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-900 mt-2 mb-6">
            Request an Appliance Repair Appointment
          </h1>
          <p className="text-lg text-navy-600 leading-relaxed mb-6">
            To ensure rapid response and accurate scheduling, {business.name} schedules all service appointments directly by phone. You speak directly with our repair coordinator to describe your appliance issue and confirm the next available arrival window.
          </p>
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4">
            <CallButton size="lg" label={`Call Now: ${business.phoneDisplay}`} />
            <a
              href={`tel:${business.phoneRaw}`}
              className="text-navy-700 hover:text-teal-600 font-semibold text-sm flex items-center gap-2"
            >
              <Clock className="w-4 h-4 text-teal-500" />
              Mon–Sat: 8:00 AM – 9:00 PM
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Appointment Information Card */}
          <div className="bg-navy-50/80 rounded-2xl p-8 border border-navy-100">
            <h2 className="text-2xl font-display font-bold text-navy-900 mb-4 flex items-center gap-2.5">
              <Phone className="w-6 h-6 text-teal-600" />
              Information to Have Ready When Calling
            </h2>
            <p className="text-sm text-navy-600 mb-6">
              Having the following details ready when you call <a href={`tel:${business.phoneRaw}`} className="text-teal-600 font-semibold">{business.phoneDisplay}</a> helps our dispatch coordinator assign the right technician and parts:
            </p>

            <ul className="space-y-4">
              {[
                {
                  title: 'Customer Name & Contact Number',
                  desc: 'The best direct telephone number for the homeowner or property manager.',
                },
                {
                  title: 'Service Address in South Florida',
                  desc: `Your street address in Deerfield Beach, Boca Raton, Pompano Beach, or surrounding communities.`,
                },
                {
                  title: 'Appliance Category & Brand',
                  desc: 'Refrigerator, washer, dryer, dishwasher, oven, stove, cooktop, or ice maker (e.g. Whirlpool, GE, Samsung, LG).',
                },
                {
                  title: 'Description of the Malfunction',
                  desc: 'Specific symptoms such as not cooling, leaking water, failure to drain, strange noises, or error codes.',
                },
                {
                  title: 'Preferred Appointment Date & Window',
                  desc: 'Your preferred day of the week and morning or afternoon arrival preference.',
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-navy-100/80 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-900">{item.title}</h3>
                    <p className="text-xs text-navy-600 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-navy-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs text-navy-500 uppercase font-semibold">Immediate Assistance</p>
                <a href={`tel:${business.phoneRaw}`} className="text-xl font-bold text-teal-600 hover:text-teal-700">
                  {business.phoneDisplay}
                </a>
              </div>
              <CallButton size="md" />
            </div>
          </div>

          {/* Why Direct Phone Scheduling Benefits You */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm">
              <h2 className="text-xl font-display font-bold text-navy-900 mb-4">
                Why We Use Direct Phone Scheduling
              </h2>
              <div className="space-y-4 text-sm text-navy-600 leading-relaxed">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900 block mb-0.5">Instant Diagnostic Triage:</strong>
                    Online forms often lose critical nuances. A 2-minute conversation allows our technician to identify likely failing parts and load them into the service van before arriving.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900 block mb-0.5">Accurate Real-Time Arrival Windows:</strong>
                    We check technician route schedules in real time, giving you an accurate arrival window rather than an automated automated estimate that gets rescheduled later.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900 block mb-0.5">Emergency Triage Advice:</strong>
                    If your refrigerator is warming up or a washer is actively leaking, we can guide you over the phone on how to shut off the water valve or preserve perishables while we are on our way.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links to Appliance Services */}
            <div className="bg-navy-50/60 rounded-2xl p-6 border border-navy-100">
              <h3 className="font-display font-bold text-navy-900 text-sm uppercase tracking-wider mb-3">
                Appliance Services Available for Scheduling
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {services.slice(0, 8).map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}-deerfield-beach-fl`}
                    className="p-2.5 bg-white hover:bg-teal-50 rounded-lg text-navy-700 hover:text-teal-700 font-medium transition-colors border border-navy-100/60 flex items-center justify-between"
                  >
                    <span>{s.name}</span>
                    <ArrowRight className="w-3 h-3 text-teal-500" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Availability */}
      <section className="bg-navy-900 text-white py-12">
        <div className="container-pro text-center max-w-2xl mx-auto">
          <MapPin className="w-8 h-8 text-teal-400 mx-auto mb-3" />
          <h2 className="text-2xl font-display font-bold mb-2">
            Serving 10 South Florida Communities
          </h2>
          <p className="text-navy-200 text-sm mb-6">
            Operating from our hub at {business.streetAddress}, {business.primaryCity}, FL 33441, we schedule in-home repairs across northern Broward and southern Palm Beach counties.
          </p>
          <CallButton size="lg" label={`Call (954) 234-9371 to Schedule`} />
        </div>
      </section>
    </>
  );
}

