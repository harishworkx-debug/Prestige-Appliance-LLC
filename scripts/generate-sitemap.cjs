const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.prestigeappliancellc.com';

const services = [
  'refrigerator-repair',
  'freezer-repair',
  'washer-repair',
  'dryer-repair',
  'dishwasher-repair',
  'oven-repair',
  'stove-repair',
  'range-repair',
  'cooktop-repair',
  'ice-maker-repair',
];

const locations = [
  'deerfield-beach-fl',
  'boca-raton-fl',
  'pompano-beach-fl',
  'coconut-creek-fl',
  'coral-springs-fl',
  'margate-fl',
];

const staticPages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/service-areas', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-and-conditions', priority: '0.3', changefreq: 'yearly' },
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Static pages
for (const p of staticPages) {
  xml += `  <url>
    <loc>${baseUrl}${p.path}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>
`;
}

// Individual Service pages
for (const s of services) {
  xml += `  <url>
    <loc>${baseUrl}/${s}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
`;
}

// Individual Location pages
for (const l of locations) {
  xml += `  <url>
    <loc>${baseUrl}/${l}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
`;
}

// Service-Location landing pages
for (const s of services) {
  for (const l of locations) {
    xml += `  <url>
    <loc>${baseUrl}/${s}-${l}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>
`;
  }
}

xml += `</urlset>
`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), xml.trim() + '\n');
console.log('Generated sitemap.xml with 77 URLs.');
