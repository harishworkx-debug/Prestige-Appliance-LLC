import { Link } from 'react-router-dom';
import { Wrench, MapPin, ShieldCheck, ThumbsUp, Languages, PhoneCall, ArrowRight } from 'lucide-react';
import { Seo, orgJsonLd } from '@/components/Seo';
import { Breadcrumbs, breadcrumbJsonLd } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';
import { CallButton } from '@/components/CallButton';
import { business } from '@/data/business';

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Prestige Appliance LLC | Deerfield Beach Appliance Experts"
        description="Learn about Prestige Appliance LLC, a family-operated appliance service business based in Deerfield Beach, Florida, providing diagnostics, repairs and maintenance."
        path="/about"
        jsonLd={[orgJsonLd, breadcrumbJsonLd([{ label: 'About Us', to: '/about' }])]}
      />
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      <section className="container-pro py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              About Our Company
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-900 mt-2 mb-6">
              About Prestige Appliance LLC
            </h1>
            <p className="text-lg text-navy-600 leading-relaxed mb-4">
              Prestige Appliance LLC is a family-operated appliance service business based in {business.primaryCity}, Florida, located at <strong>{business.streetAddress}, {business.primaryCity}, FL {business.zip}</strong>.
            </p>
            <p className="text-navy-600 leading-relaxed mb-4">
              We understand how important household appliances are to everyday life. From refrigerators and freezers to laundry and kitchen appliances, equipment problems can interrupt normal household routines.
            </p>
            <p className="text-navy-600 leading-relaxed mb-4">
              Our approach focuses on identifying appliance problems, explaining available solutions and helping customers understand the repair process.
            </p>
            <p className="text-navy-600 leading-relaxed mb-8">
              We aim to provide dependable service, clear communication and practical appliance solutions for customers throughout our confirmed South Florida service areas across northern Broward and southern Palm Beach counties. Call us directly at{' '}
              <a
                href={`tel:${business.phoneRaw}`}
                className="text-teal-600 font-semibold hover:text-teal-700"
              >
                {business.phoneDisplay}
              </a>{' '}
              to speak with our team.
            </p>
            <CallButton size="lg" />
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4469164/pexels-photo-4469164.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Professional kitchen with stainless steel appliances in South Florida"
              className="rounded-2xl shadow-2xl w-full h-[420px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-navy-50">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mt-2 mb-4">
              Our Business Values
            </h2>
            <p className="text-lg text-navy-600">
              The principles that guide every service call we make.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ThumbsUp,
                title: 'Honesty First',
                text: 'We diagnose the real problem and tell you straight — whether that means a repair or an honest recommendation that a replacement makes more sense.',
              },
              {
                icon: Wrench,
                title: 'Quality Workmanship',
                text: 'We take pride in precise, careful repair work. Our goal is to fix the problem properly the first time.',
              },
              {
                icon: ShieldCheck,
                title: 'Warranty on Repairs',
                text: 'We stand behind our work. Repairs performed by Prestige Appliance LLC are covered by a warranty.',
              },
              {
                icon: MapPin,
                title: 'Local to South Florida',
                text: `We are physically located at ${business.streetAddress}, ${business.primaryCity}, FL 33441. When you call, you speak directly with a local repair professional serving Broward and Palm Beach counties — not a third-party lead broker or national call center.`,
              },
              {
                icon: Languages,
                title: 'Se Habla Español',
                text: 'We proudly serve South Florida\'s Spanish-speaking community. Our team can assist you in both English and Spanish.',
              },
              {
                icon: PhoneCall,
                title: 'Talk to a Real Person',
                text: 'No online forms, no chat bots, no waiting on hold for a callback. You call, we answer, and we help.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-navy-100 card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-display font-semibold text-navy-900 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-white">
        <div className="container-pro">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/6835154/pexels-photo-6835154.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Bright kitchen with stainless steel appliances"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mt-2 mb-6">
                How We Approach Appliance Repair
              </h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Every appliance repair starts with a phone call. When you call{' '}
                {business.name}, we listen to what is happening with your
                appliance and discuss service availability for your area.
              </p>
              <ul className="space-y-4">
                {[
                  'We listen to your description of the problem over the phone.',
                  'Our technician arrives and performs a thorough inspection of the appliance.',
                  'We explain the diagnosis in plain language — no surprise charges.',
                  'With your approval, we perform the repair using quality replacement parts.',
                  'We test the appliance to confirm it is working properly before we leave.',
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-navy-700 text-sm leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Explore Our Appliance Repair Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Get Your Appliance Fixed?"
        subtitle={`Call ${business.name} at ${business.phoneDisplay}. A local technician is ready to help with your refrigerator, washer, dryer, dishwasher, oven, and more.`}
      />
    </>
  );
}
