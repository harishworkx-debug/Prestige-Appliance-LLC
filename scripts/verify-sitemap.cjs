const fs = require('fs');
const path = require('path');

const publicXml = fs.readFileSync(path.join(__dirname, '../public/sitemap.xml'), 'utf8');
const distXml = fs.readFileSync(path.join(__dirname, '../dist/sitemap.xml'), 'utf8');

function audit(xml, label) {
  console.log(`=== Auditing ${label} ===`);
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  console.log('Total URLs found:', locs.length);

  // Check uniqueness
  const unique = new Set(locs);
  if (unique.size !== locs.length) {
    console.error('Duplicate URLs found! Unique:', unique.size, 'Total:', locs.length);
    process.exit(1);
  } else {
    console.log('All URLs are 100% unique.');
  }

  // Expected counts:
  // 7 static
  const staticExpected = [
    'https://www.prestigeappliancellc.com/',
    'https://www.prestigeappliancellc.com/services',
    'https://www.prestigeappliancellc.com/service-areas',
    'https://www.prestigeappliancellc.com/about',
    'https://www.prestigeappliancellc.com/contact',
    'https://www.prestigeappliancellc.com/privacy-policy',
    'https://www.prestigeappliancellc.com/terms-and-conditions',
  ];
  for (const s of staticExpected) {
    if (!unique.has(s)) {
      console.error('Missing static page:', s);
      process.exit(1);
    }
  }
  console.log('7 static core pages confirmed.');

  // 10 service areas
  const locations = [
    'deerfield-beach-fl', 'boca-raton-fl', 'pompano-beach-fl', 'coconut-creek-fl',
    'coral-springs-fl', 'margate-fl', 'parkland-fl', 'lighthouse-point-fl',
    'delray-beach-fl', 'fort-lauderdale-fl'
  ];
  for (const l of locations) {
    const expected = `https://www.prestigeappliancellc.com/appliance-repair-${l}`;
    if (!unique.has(expected)) {
      console.error('Missing service area page:', expected);
      process.exit(1);
    }
  }
  console.log('10 service area pages confirmed.');

  // 100 service-locations
  const services = [
    'refrigerator-repair', 'freezer-repair', 'washer-repair', 'dryer-repair',
    'dishwasher-repair', 'oven-repair', 'stove-repair', 'range-repair',
    'cooktop-repair', 'ice-maker-repair'
  ];
  for (const s of services) {
    for (const l of locations) {
      const expected = `https://www.prestigeappliancellc.com/${s}-${l}`;
      if (!unique.has(expected)) {
        console.error('Missing service-location page:', expected);
        process.exit(1);
      }
    }
  }
  console.log('100 service-location landing pages confirmed.');

  // Check no redirecting or bare urls
  for (const s of services) {
    const bad = `https://www.prestigeappliancellc.com/${s}`;
    if (unique.has(bad)) {
      console.error('Found redirecting bare service URL in sitemap:', bad);
      process.exit(1);
    }
  }
  for (const l of locations) {
    const bad = `https://www.prestigeappliancellc.com/${l}`;
    if (unique.has(bad)) {
      console.error('Found redirecting bare location URL in sitemap:', bad);
      process.exit(1);
    }
  }
  console.log('Zero redirecting bare URLs confirmed.');
}

audit(publicXml, 'public/sitemap.xml');
audit(distXml, 'dist/sitemap.xml');
console.log('\n>>> ALL 117 SITEMAP URLS ARE 100% VERIFIED & ACCURATE! <<<');

