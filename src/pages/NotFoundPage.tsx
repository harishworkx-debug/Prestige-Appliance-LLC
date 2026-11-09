import { Link } from 'react-router-dom';
import { Home, Phone, Wrench, MapPin, ArrowLeft } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { CallButton } from '@/components/CallButton';
import { business } from '@/data/business';
import { services } from '@/data/services';

export function NotFoundPage() {
  return (
    <>
      <Seo
        title={`Page Not Found | ${business.name}`}
        description={`The page you are looking for could not be found. Call ${business.phoneDisplay} to schedule appliance repair in South Florida.`}
        path="/404"
      />

      <section className="container-pro py-20 lg:py-28 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-teal-50 text-teal-600 mb-6">
            <Wrench className="w-10 h-10" />
          </div>

          <span className="block text-sm font-bold uppercase tracking-wider text-teal-600 mb-2">
            Error 404
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-navy-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-navy-600 leading-relaxed mb-8">
            The page you requested may have moved or no longer exists. If your appliance is broken and you need service in South Florida, you can call us directly right now.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <CallButton size="lg" label={`Call Now: ${business.phoneDisplay}`} />
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-navy-200 hover:border-teal-500 hover:text-teal-600 text-navy-800 font-semibold px-6 py-4 rounded-lg transition-all"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </div>

          <div className="border-t border-navy-100 pt-10 text-left">
            <h2 className="text-lg font-display font-semibold text-navy-900 mb-4 text-center">
              Popular Appliance Repair Services
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {services.slice(0, 6).map((s) => (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className="p-3 bg-navy-50 hover:bg-teal-50 rounded-lg text-sm font-medium text-navy-700 hover:text-teal-700 transition-colors flex items-center justify-between"
                >
                  <span>{s.name}</span>
                  <span className="text-teal-500">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

