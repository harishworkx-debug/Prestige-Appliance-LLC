import { useParams } from 'react-router-dom';
import { serviceSlugs } from '@/data/services';
import { locationSlugs } from '@/data/locations';
import { ServiceDetailPage } from './ServiceDetailPage';
import { LocationDetailPage } from './LocationDetailPage';
import { ServiceLocationPage } from './ServiceLocationPage';
import { NotFoundPage } from './NotFoundPage';

export function SlugDispatcher() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <NotFoundPage />;
  }

  // 1. Check if it's an individual service page: /{service-slug}
  if (serviceSlugs.includes(slug)) {
    return <ServiceDetailPage serviceSlug={slug} />;
  }

  // 2. Check if it's an individual location page: /{location-slug}
  if (locationSlugs.includes(slug)) {
    return <LocationDetailPage locationSlug={slug} />;
  }

  // 3. Check if it matches {service-slug}-{location-slug}
  for (const s of serviceSlugs) {
    for (const l of locationSlugs) {
      if (`${s}-${l}` === slug) {
        return <ServiceLocationPage />;
      }
    }
  }

  // 4. Fallback to 404
  return <NotFoundPage />;
}
