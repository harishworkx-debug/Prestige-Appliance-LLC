import { useParams, Navigate } from 'react-router-dom';
import { serviceSlugs } from '@/data/services';
import { locationSlugs } from '@/data/locations';
import { LocationDetailPage } from './LocationDetailPage';
import { ServiceLocationPage } from './ServiceLocationPage';
import { NotFoundPage } from './NotFoundPage';

export function SlugDispatcher() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <NotFoundPage />;
  }

  let normalizedSlug = slug.toLowerCase();

  // Normalize common typo: 'repiar' -> 'repair'
  const hadRepiarTypo = normalizedSlug.includes('repiar');
  if (hadRepiarTypo) {
    normalizedSlug = normalizedSlug.replace(/repiar/g, 'repair');
  }

  if (normalizedSlug === 'washing-machine-repair') {
    normalizedSlug = 'washer-repair';
  } else if (normalizedSlug.startsWith('washing-machine-repair-')) {
    normalizedSlug = normalizedSlug.replace('washing-machine-repair-', 'washer-repair-');
  }

  // 1. If visited with 'repiar' typo, redirect to the canonical 'repair' URL
  if (hadRepiarTypo) {
    return <Navigate to={`/${normalizedSlug}`} replace />;
  }

  // 2. If visited without location (e.g. /refrigerator-repair), redirect to main location Deerfield Beach URL
  if (serviceSlugs.includes(normalizedSlug)) {
    return <Navigate to={`/${normalizedSlug}-deerfield-beach-fl`} replace />;
  }

  // 3. Check if it's the Service Area landing page: /appliance-repair-{location-slug}
  for (const l of locationSlugs) {
    if (normalizedSlug === `appliance-repair-${l}`) {
      return <LocationDetailPage locationSlug={l} />;
    }
  }

  // 4. Backward-compatible redirect: if visited as bare /{location-slug} (e.g. /deerfield-beach-fl), redirect to /appliance-repair-{location-slug}
  if (locationSlugs.includes(normalizedSlug)) {
    return <Navigate to={`/appliance-repair-${normalizedSlug}`} replace />;
  }

  // 5. Check if it matches {service-slug}-{location-slug}
  for (const s of serviceSlugs) {
    for (const l of locationSlugs) {
      if (`${s}-${l}` === normalizedSlug) {
        return <ServiceLocationPage />;
      }
    }
  }

  // 6. Fallback to 404
  return <NotFoundPage />;
}

