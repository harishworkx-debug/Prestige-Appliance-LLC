import { Link } from 'react-router-dom';
import {
  Phone,
  Clock,
  ShieldCheck,
  Star,
  Wrench,
  MapPin,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  ThumbsUp,
  Languages,
  AlertTriangle,
  Droplets,
  Flame,
  Zap,
  Snowflake,
} from 'lucide-react';
import { Seo, orgJsonLd, localBusinessJsonLd, websiteJsonLd } from '@/components/Seo';
import { CallButton } from '@/components/CallButton';
import { CtaSection } from '@/components/CtaSection';
import { getServiceIcon } from '@/components/iconMap';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { reviews } from '@/data/reviews';

export function HomePage() {
  const heroImage =
    'https://images.pexels.com/photos/4832505/pexels-photo-4832505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

  return (
    <>
      <Seo
        title={`${business.name} | Appliance Repair in ${business.primaryCity}, ${business.state}`}
        description={`Trusted appliance repair in ${business.primaryCity}, FL and surrounding South Florida communities. Prestige Appliance LLC repairs refrigerators, washers, dryers, dishwashers, ovens, and more. Call ${business.phoneDisplay}.`}
        path="/"
        image={heroImage}
        jsonLd={[orgJsonLd, localBusinessJsonLd, websiteJsonLd]}
      />

      {/* Hero */}
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern South Florida kitchen with stainless steel appliances"
            className="w-full h-full object-cover opacity-30"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/60" />
        </div>
        <div className="container-pro relative py-20 md:py-28 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/30 text-teal-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <MapPin className="w-4 h-4" />
              {business.primaryCity}, {business.state} · Locally Based
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
              Appliance Repair in {business.primaryCity}, FL
            </h1>
            <p className="text-lg md:text-xl text-navy-200 leading-relaxed mb-8 max-w-xl animate-fade-in-up">
              {business.name} is a local appliance repair company serving
              South Florida homeowners. When your refrigerator, washer, dryer,
              dishwasher, or oven stops working, we are a phone call away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <CallButton size="lg" label={`Call ${business.phoneDisplay}`} />
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-teal-400 hover:bg-teal-500/10 text-white font-semibold px-6 py-4 text-lg rounded-lg transition-all duration-200"
              >
                Explore Appliance Repair Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-navy-100">
        <div className="container-pro py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 fill-amber-400 text-amber-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-navy-900">
                  5.0 ★ Rating
                </p>
                <p className="text-xs text-navy-500">2 Google Reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                <Wrench className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-900">
                  Full-Service Repair
                </p>
                <p className="text-xs text-navy-500">Major Appliances</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-900">
                  Locally Based
                </p>
                <p className="text-xs text-navy-500">
                  {business.primaryCity}, FL
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                <Languages className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-900">
                  Se Habla Español
                </p>
                <p className="text-xs text-navy-500">Bilingual Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-navy-50">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mt-2 mb-4">
              Appliance Repair Services
            </h2>
            <p className="text-lg text-navy-600">
              We repair the major household appliances South Florida families
              rely on every day. Select any appliance below to review common
              issues and call us directly to schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = getServiceIcon(s.icon);
              return (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden card-hover border border-navy-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                      <div className="absolute bottom-3 left-4 flex items-center gap-2">
                        <div className="w-9 h-9 rounded-lg bg-teal-500 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-white font-display font-semibold text-lg">
                          {s.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-navy-600 leading-relaxed mb-4">
                        {s.description}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
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
        </div>
      </section>

      {/* NEW SECTION 1: Common Warning Signs / Symptom Checker */}
      <section className="section-padding bg-white">
        <div className="container-pro">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Diagnostic Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mt-2 mb-4">
              Warning Signs You Need An Appliance Technician
            </h2>
            <p className="text-lg text-navy-600">
              Catching an appliance problem early prevents catastrophic component burnout, costly water leaks, and spoiled food. If you notice any of these signs, give us a call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Snowflake,
                title: 'Refrigerator Warm or Food Spoiling',
                symptom: 'Soft ice cream in the freezer, rising milk temperatures, or frost buildup on the rear panel.',
                action: 'Commonly caused by a faulty defrost system, failed evaporator motor, or clogged condenser coils.',
                link: '/refrigerator-repair',
                linkText: 'Refrigerator Diagnosis',
              },
              {
                icon: Droplets,
                title: 'Washer Leaking or Not Draining',
                symptom: 'Standing water inside the drum after a cycle, water pooling under the cabinet, or failure to spin.',
                action: 'Usually indicates a blocked drain pump, worn door boot gasket, or broken drive belt coupling.',
                link: '/washer-repair',
                linkText: 'Washer Troubleshooting',
              },
              {
                icon: Flame,
                title: 'Dryer Tumbling with No Heat',
                symptom: 'Clothes remain damp after multiple cycles, excessive cycle time, or a faint burning lint smell.',
                action: 'Often points to a burned-out heating element, blown thermal cutoff fuse, or restricted exhaust airflow.',
                link: '/dryer-repair',
                linkText: 'Dryer Repair Info',
              },
              {
                icon: Zap,
                title: 'Oven Inaccurate Baking Temperatures',
                symptom: 'Baked goods burned on one side and raw on the other, or an oven that takes over 25 minutes to preheat.',
                action: 'Typically caused by a weakened bake element, degraded temperature sensor, or failing igniter.',
                link: '/oven-repair',
                linkText: 'Oven Diagnostics',
              },
              {
                icon: AlertTriangle,
                title: 'Dishwasher Standing Water or Smells',
                symptom: 'Water fails to drain from the sump basin, dishes come out cloudy, or strange grinding noises occur.',
                action: 'Frequently due to a clogged filter macerator, failed drain valve, or worn wash impeller.',
                link: '/dishwasher-repair',
                linkText: 'Dishwasher Solutions',
              },
              {
                icon: Sparkles,
                title: 'Ice Maker Slow or Leaking Water',
                symptom: 'Tiny hollow ice cubes, ice clumping together in the tray, or water dripping down inside the freezer.',
                action: 'Usually caused by low water inlet pressure, a cracked fill tube, or a worn ice module motor.',
                link: '/ice-maker-repair',
                linkText: 'Ice Maker Service',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-navy-50/60 rounded-2xl p-6 border border-navy-100 flex flex-col justify-between card-hover"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-navy-900 text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-navy-700 mb-3 leading-relaxed">
                    <strong className="text-navy-900">Symptoms:</strong> {item.symptom}
                  </p>
                  <p className="text-xs text-navy-600 leading-relaxed">
                    <strong className="text-navy-800">Technician Insight:</strong> {item.action}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-navy-100 flex items-center justify-between">
                  <Link
                    to={item.link}
                    className="text-xs font-semibold text-teal-600 hover:text-teal-700 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={`tel:${business.phoneRaw}`}
                    className="text-xs font-bold text-navy-800 hover:text-teal-600 flex items-center gap-1"
                    aria-label={`Call regarding ${item.title}`}
                  >
                    <Phone className="w-3 h-3 text-teal-500" />
                    Call (954) 234-9371
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: South Florida Climate & Coastal Factors */}
      <section className="section-padding bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-teal-400 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-teal-500 blur-3xl" />
        </div>
        <div className="container-pro relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider">
                South Florida Conditions
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2 mb-6">
                Why Florida Appliances Require Specialized Local Knowledge
              </h2>
              <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-6">
                Operating household appliances in South Florida is different from anywhere else in the country. Our unique climate factors directly impact appliance lifespans, efficiency, and failure rates:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'Persistent Year-Round Humidity',
                    text: 'High moisture levels force refrigerator compressors to work overtime, stress door gaskets, and trigger frequent defrost drain freezes in Broward and Palm Beach homes.',
                  },
                  {
                    title: 'Mineral-Dense South Florida Water',
                    text: 'Hard water scale accumulates inside dishwasher wash arms, washer water valves, and ice maker tubes, requiring thorough descaling and valve replacements.',
                  },
                  {
                    title: 'Coastal Salt Air Corrosion',
                    text: 'In coastal communities like Deerfield Beach, Lighthouse Point, and Pompano Beach, airborne salt accelerates exterior vent wear and electronic oxidation.',
                  },
                  {
                    title: 'Storm Season Power Fluctuations',
                    text: 'Summer thunderstorms and grid spikes frequently trip delicate micro-relays and control boards on modern ranges, ovens, and smart washers.',
                  },
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">
                        {point.title}
                      </h3>
                      <p className="text-navy-300 text-xs leading-relaxed mt-0.5">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy-950/80 rounded-2xl p-8 border border-navy-800 shadow-2xl">
              <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-teal-500/20">
                <MapPin className="w-3.5 h-3.5" />
                Deerfield Beach Base
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">
                Local Technicians Ready Across Northern Broward & South Palm Beach
              </h3>
              <p className="text-navy-300 text-sm leading-relaxed mb-6">
                Because Prestige Appliance LLC is physically based in Deerfield Beach, we understand these local challenges firsthand. We carry the most frequently needed parts for South Florida homes right in our service vans.
              </p>
              <div className="bg-navy-900 rounded-xl p-5 border border-navy-800 mb-6 space-y-2 text-xs text-navy-300">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>No middleman call centers — you speak with us directly</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Prompt arrival windows coordinated over the phone</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Bilingual Spanish and English communication</span>
                </p>
              </div>
              <CallButton size="lg" className="w-full" label={`Call Now: ${business.phoneDisplay}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-white">
        <div className="container-pro">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mt-2 mb-4">
                Why Choose {business.name}?
              </h2>
              <p className="text-lg text-navy-600 mb-8">
                We are a local appliance repair company based in{' '}
                {business.primaryCity}, Florida. We take pride in honest
                diagnostics, quality work, and treating every customer like a
                neighbor.
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: ThumbsUp,
                    title: 'Honest, Straightforward Service',
                    text: 'Our customers consistently describe us as honest and dependable. We diagnose the real problem and explain it in plain language.',
                  },
                  {
                    icon: MapPin,
                    title: 'Locally Based in Deerfield Beach',
                    text: `We are based right here in ${business.primaryCity}, FL — so when you call, you are talking to a local company, not a call center.`,
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Warranties on Repairs',
                    text: 'We stand behind our work. Repairs performed by Prestige Appliance LLC are covered by a warranty.',
                  },
                  {
                    icon: Languages,
                    title: 'Se Habla Español',
                    text: 'We are proud to serve South Florida\'s Spanish-speaking community in both English and Spanish.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-navy-900 text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-navy-600 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7168051/pexels-photo-7168051.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Bright modern South Florida kitchen with stainless steel appliances"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 border border-navy-100 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-teal-500 flex items-center justify-center">
                    <PhoneCall className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-navy-500">Call Today</p>
                    <a
                      href={`tel:${business.phoneRaw}`}
                      className="font-display font-bold text-navy-900 text-lg"
                    >
                      {business.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: In-Home Service Standards */}
      <section className="section-padding bg-navy-50 border-y border-navy-100">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Quality Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mt-2 mb-4">
              Our In-Home Service Standard
            </h2>
            <p className="text-lg text-navy-600">
              When our technician steps into your home, we treat your property with absolute care and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Clear Verbal Estimates',
                text: 'We thoroughly diagnose the unit first and explain the exact cost breakdown before turning any wrench. No surprise invoices.',
                icon: ShieldCheck,
              },
              {
                title: 'Floor & Surface Protection',
                text: 'We take great care around hardwood, tile, and stone countertops, using protective pads when servicing or moving heavy units.',
                icon: Sparkles,
              },
              {
                title: 'Quality Replacement Parts',
                text: 'We source dependable, high-grade replacement components engineered to match your appliance model specifications.',
                icon: Wrench,
              },
              {
                title: 'Complete Post-Repair Testing',
                text: 'We run full diagnostic test cycles (cooling, drainage, heating, or ignition) to ensure everything works properly before we leave.',
                icon: CheckCircle2,
              },
            ].map((std, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm card-hover">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4">
                  <std.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-navy-900 text-lg mb-2">
                  {std.title}
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  {std.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Where We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mt-2 mb-4">
              South Florida Service Areas
            </h2>
            <p className="text-lg text-navy-600">
              Based in {business.primaryCity}, Florida, we serve homeowners in
              10 verified communities across Broward and Palm Beach counties.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/${loc.slug}`}
                className="group bg-navy-50 rounded-xl p-5 text-center border border-navy-100 card-hover"
              >
                <MapPin className="w-7 h-7 text-teal-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="font-display font-semibold text-navy-900 text-sm">
                  {loc.name}
                </p>
                <p className="text-xs text-navy-500 mt-0.5">{loc.county}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 font-semibold text-teal-600 hover:text-teal-700 transition-colors"
            >
              View All Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-navy-50">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mt-2 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-navy-600">
              Getting your appliance repaired is as simple as picking up the
              phone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Call Us',
                text: `Call ${business.phoneDisplay} and tell us what is going on with your appliance.`,
                icon: Phone,
              },
              {
                step: '2',
                title: 'Describe the Problem',
                text: 'Explain the symptoms — strange noises, leaks, no cooling, no heat, and so on.',
                icon: PhoneCall,
              },
              {
                step: '3',
                title: 'Discuss Availability',
                text: 'We talk with you directly about service availability for your area and schedule.',
                icon: Clock,
              },
              {
                step: '4',
                title: 'Confirm Next Steps',
                text: 'We confirm the appointment and next steps with you over the phone. No online booking — just a real conversation.',
                icon: CheckCircle2,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-white rounded-2xl p-6 text-center border border-navy-100 shadow-sm"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-teal-500 text-white font-bold text-sm flex items-center justify-center shadow-lg">
                  {item.step}
                </div>
                <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mx-auto mb-4 mt-2">
                  <item.icon className="w-7 h-7 text-teal-600" />
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

      {/* Reviews */}
      <section className="section-padding bg-white">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
              <span className="flex items-center gap-1 text-amber-500">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </span>
              <span>5.0 / 5.0 Rating · Verified Google Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-3">
              Real Reviews from Real Customers
            </h2>
            <p className="text-lg text-navy-600">
              Verified customer feedback from South Florida homeowners who trusted{' '}
              {business.name} with their appliance repairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map((review, idx) => (
              <div
                key={idx}
                className="bg-navy-50/50 rounded-2xl p-6 border border-navy-100 card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-500"
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                      {review.source}
                    </span>
                  </div>
                  <p className="text-navy-700 text-sm leading-relaxed mb-4">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-navy-100 pt-4 mt-auto">
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">
                      {review.name}
                    </p>
                    <p className="text-xs text-navy-500">{review.date}</p>
                  </div>
                  {review.service && (
                    <span className="text-xs text-teal-600 font-medium text-right max-w-[50%]">
                      {review.service}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={business.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
            >
              <span>View Prestige Appliance LLC on Google Maps</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy-50">
        <div className="container-pro">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Questions & Answers
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mt-2 mb-4">
                Appliance Repair FAQs
              </h2>
              <p className="text-navy-600 text-base">
                Have questions before calling? Here are answers to common questions South Florida homeowners ask us:
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'What areas does Prestige Appliance LLC serve?',
                  a: `We are based in ${business.primaryCity}, FL and serve 10 South Florida communities across Broward and Palm Beach counties, including Deerfield Beach, Boca Raton, Pompano Beach, Coconut Creek, Coral Springs, Margate, Parkland, Lighthouse Point, Delray Beach, and Fort Lauderdale. Call ${business.phoneDisplay} to confirm service for your address.`,
                },
                {
                  q: 'What appliances do you repair?',
                  a: 'We repair refrigerators, freezers, washing machines, dryers, dishwashers, ovens, stoves, ranges, cooktops, and ice makers. Call us to describe your appliance and the issue.',
                },
                {
                  q: 'Do you offer a warranty on repairs?',
                  a: 'Yes. Repairs performed by Prestige Appliance LLC are covered by a warranty. Call us at (954) 234-9371 to discuss the details for your specific repair.',
                },
                {
                  q: 'Do you carry replacement parts in your service vehicles?',
                  a: 'Yes. We stock common replacement components such as thermal fuses, water inlet valves, heating elements, drain pumps, igniters, and fan motors in our service vehicles to complete many repairs on the first visit.',
                },
                {
                  q: 'How does your phone-based scheduling work?',
                  a: `Simply dial ${business.phoneDisplay}. We do not use confusing online booking tools or third-party lead aggregators. You speak directly with our team, describe the appliance problem, and coordinate the earliest arrival window directly.`,
                },
                {
                  q: 'Do you speak Spanish?',
                  a: 'Yes. Se habla español. We are proud to serve South Florida\'s Spanish-speaking community with bilingual support in English and Spanish.',
                },
                {
                  q: 'Should I repair or replace my appliance?',
                  a: 'That depends on the age, overall condition, and cost of the repair. If a repair is cost-effective and restores reliable operation, we perform it. If replacement makes more financial sense, our technician will honestly tell you so you can make an informed decision.',
                },
                {
                  q: 'How can I prevent my refrigerator from breaking down during Florida summer heat?',
                  a: 'Keep the rear and bottom condenser coils clear of pet hair and dust, ensure at least 2 inches of airflow clearance around the cabinet, and inspect door gaskets to prevent humid air leakage into the freezer compartment.',
                },
              ].map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white rounded-xl border border-navy-100 overflow-hidden shadow-sm"
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

      <CtaSection />
    </>
  );
}
