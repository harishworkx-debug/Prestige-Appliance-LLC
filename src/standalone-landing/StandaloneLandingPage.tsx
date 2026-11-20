import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { LandingHeader } from './LandingHeader';
import { LandingHero } from './LandingHero';
import { LandingServices } from './LandingServices';
import { LandingAbout } from './LandingAbout';
import { LandingArea } from './LandingArea';
import { LandingWhyUs } from './LandingWhyUs';
import { LandingFaq } from './LandingFaq';
import { LandingContact } from './LandingContact';
import { LandingFooter } from './LandingFooter';
import { LANDING_DATA } from './landingData';

export const StandaloneLandingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Dedicated JSON-LD Schema: strictly LocalBusiness / ApplianceRepair with NO parent company branding
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const canonicalUrl = typeof window !== 'undefined' ? `${window.location.origin}/` : '/';

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${origin}#localbusiness`,
    'name': LANDING_DATA.identityTitle,
    'description': LANDING_DATA.metaDescription,
    'telephone': '+1-954-234-9371',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '534 NW 3rd Terrace',
      'addressLocality': LANDING_DATA.location,
      'addressRegion': LANDING_DATA.state,
      'postalCode': LANDING_DATA.zip,
      'addressCountry': 'US',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 26.3184,
      'longitude': -80.0998,
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '08:00',
        'closes': '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Saturday',
        'opens': '09:00',
        'closes': '16:00',
      },
    ],
    'priceRange': '$$',
    'areaServed': LANDING_DATA.serviceAreas.map((area) => ({
      '@type': 'AdministrativeArea',
      'name': `${area.name}, FL`,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      {/* Isolated SEO Metadata */}
      <Helmet>
        <title>{LANDING_DATA.metaTitle}</title>
        <meta name="description" content={LANDING_DATA.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={LANDING_DATA.metaTitle} />
        <meta property="og:description" content={LANDING_DATA.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      {/* Standalone Landing Components */}
      <LandingHeader />
      <main className="flex-grow">
        <LandingHero />
        <LandingServices />
        <LandingAbout />
        <LandingArea />
        <LandingWhyUs />
        <LandingFaq />
        <LandingContact />
      </main>
      <LandingFooter />
    </div>
  );
};
