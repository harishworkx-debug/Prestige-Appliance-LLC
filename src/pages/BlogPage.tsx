import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, Phone, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Seo, orgJsonLd } from '@/components/Seo';
import { Breadcrumbs, breadcrumbJsonLd } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';
import { CallButton } from '@/components/CallButton';
import { business } from '@/data/business';
import { articles } from '@/data/articles';

export function BlogPage() {
  return (
    <>
      <Seo
        title={`Appliance Repair Guides & Troubleshooting Tips | ${business.name}`}
        description={`Practical appliance troubleshooting guides and diagnostic tips from Prestige Appliance LLC in ${business.primaryCity}, FL. Learn how to diagnose refrigerator, washer, dryer, and oven problems.`}
        path="/blog"
        jsonLd={[orgJsonLd, breadcrumbJsonLd([{ label: 'Appliance Guides', to: '/blog' }])]}
      />
      <Breadcrumbs items={[{ label: 'Appliance Guides' }]} />

      <section className="container-pro py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/30 text-teal-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4 text-teal-600" />
            Homeowner Knowledge Base · South Florida
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-900 mt-2 mb-6">
            Appliance Repair Guides & Troubleshooting
          </h1>
          <p className="text-lg text-navy-600 leading-relaxed">
            Expert diagnostic guides, troubleshooting checklists, and maintenance advice written by the technicians at {business.name}. Learn what causes common appliance failures and when to call for professional service.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-2xl overflow-hidden border border-navy-100 card-hover flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-teal-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow">
                    {article.category}
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/90 text-xs">
                    <Clock className="w-3.5 h-3.5 text-teal-300" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="font-display font-bold text-navy-900 text-lg leading-snug mb-3 hover:text-teal-600 transition-colors">
                    <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p className="text-sm text-navy-600 leading-relaxed line-clamp-3 mb-4">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-navy-50 flex items-center justify-between">
                <Link
                  to={`/blog/${article.slug}`}
                  className="text-sm font-semibold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to={`/${article.relatedServiceSlug}`}
                  className="text-xs text-navy-500 hover:text-navy-800 transition-colors"
                >
                  {article.relatedServiceName} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Need Urgent Diagnostic Help? */}
      <section className="bg-navy-50 section-padding">
        <div className="container-pro">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-navy-100 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-teal-600 text-xs font-bold uppercase tracking-wider">
                Direct In-Home Service
              </span>
              <h2 className="text-2xl font-display font-bold text-navy-900 mt-1 mb-2">
                Need Help Diagnosing Your Broken Appliance?
              </h2>
              <p className="text-sm text-navy-600">
                Skip the guesswork. Call {business.name} at {business.phoneDisplay} to schedule an in-home diagnostic visit across Deerfield Beach and South Florida.
              </p>
            </div>
            <CallButton size="lg" />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

