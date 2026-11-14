import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, Phone, ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, Wrench, ShieldCheck } from 'lucide-react';
import { Seo, orgJsonLd } from '@/components/Seo';
import { Breadcrumbs, breadcrumbJsonLd } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';
import { CallButton } from '@/components/CallButton';
import { business } from '@/data/business';
import { getArticle, articles } from '@/data/articles';
import { NotFoundPage } from './NotFoundPage';

export function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticle(slug) : undefined;

  if (!article) {
    return <NotFoundPage />;
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDescription,
    image: article.image,
    datePublished: article.publishedDate,
    author: {
      '@type': 'Organization',
      name: business.name,
      url: business.website,
    },
    publisher: {
      '@type': 'Organization',
      name: business.name,
      logo: {
        '@type': 'ImageObject',
        url: `${business.website.replace(/\/$/, '')}/icon-192.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${business.website.replace(/\/$/, '')}/blog/${article.slug}`,
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const otherArticles = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={article.seoTitle}
        description={article.metaDescription}
        path={`/blog/${article.slug}`}
        image={article.image}
        type="article"
        jsonLd={[
          orgJsonLd,
          articleJsonLd,
          faqJsonLd,
          breadcrumbJsonLd([
            { label: 'Appliance Guides', to: '/blog' },
            { label: article.title },
          ]),
        ]}
      />

      <Breadcrumbs
        items={[
          { label: 'Appliance Guides', to: '/blog' },
          { label: article.title },
        ]}
      />

      {/* Article Header */}
      <article className="container-pro py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 text-xs text-navy-500 font-medium mb-4">
            <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-md font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-teal-600" />
              {article.readTime}
            </span>
            <span>·</span>
            <span>By {business.name} Repair Team</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-900 leading-[1.15] mb-6">
            {article.title}
          </h1>

          <p className="text-lg md:text-xl text-navy-600 leading-relaxed mb-8 border-l-4 border-teal-500 pl-4 bg-navy-50/50 py-2">
            {article.summary}
          </p>

          <div className="relative rounded-2xl overflow-hidden mb-10 shadow-lg h-72 md:h-96">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Main Content Sections */}
          <div className="space-y-10 text-navy-700 leading-relaxed text-base md:text-lg">
            {article.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-navy-900 mt-6">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-navy-600 leading-relaxed text-base">
                    {para}
                  </p>
                ))}
                {section.checklist && (
                  <div className="bg-navy-50/80 rounded-xl p-5 border border-navy-100 my-4">
                    <h3 className="text-sm font-bold text-navy-900 mb-3 uppercase tracking-wider">
                      Troubleshooting Checklist:
                    </h3>
                    <ul className="space-y-2">
                      {section.checklist.map((item, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-700">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* In-Article Call to Action Box */}
          <div className="my-12 bg-gradient-to-br from-navy-900 to-navy-950 text-white rounded-2xl p-8 border border-navy-800 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">
                  Professional Appliance Assistance
                </span>
                <h3 className="text-2xl font-display font-bold mt-1 mb-2">
                  Troubleshooting Not Solving the Issue?
                </h3>
                <p className="text-navy-200 text-sm max-w-md">
                  Appliance electrical circuits and sealed refrigeration systems require professional tools. Call {business.name} at {business.phoneDisplay} to schedule a same-day or next-day diagnostic visit.
                </p>
              </div>
              <CallButton size="lg" label={`Call Now`} />
            </div>
          </div>

          {/* FAQs */}
          {article.faqs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-navy-100">
              <h2 className="text-2xl font-display font-bold text-navy-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {article.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-navy-50 rounded-xl p-5 border border-navy-100">
                    <h3 className="font-display font-semibold text-navy-900 text-base mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-navy-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Internal Links Navigation */}
          <div className="mt-12 pt-8 border-t border-navy-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-teal-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Guides
            </Link>
            <Link
              to={`/${article.relatedServiceSlug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
            >
              Explore {article.relatedServiceName} Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-navy-50 section-padding">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              More Guides
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mt-1 mb-2">
              Related Appliance Troubleshooting Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherArticles.map((item) => (
              <Link
                key={item.slug}
                to={`/blog/${item.slug}`}
                className="bg-white rounded-xl overflow-hidden border border-navy-100 card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-navy-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold text-navy-900 text-base leading-snug line-clamp-2 mb-2 hover:text-teal-600">
                      {item.title}
                    </h3>
                    <p className="text-xs text-navy-600 line-clamp-2">
                      {item.summary}
                    </p>
                  </div>
                </div>
                <div className="px-4 pb-4 pt-2 text-xs font-semibold text-teal-600 flex items-center justify-between border-t border-navy-50">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

