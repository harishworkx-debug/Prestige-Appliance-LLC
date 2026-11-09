const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.prestigeappliancellc.com';
const today = new Date().toISOString().split('T')[0];

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
  'parkland-fl',
  'lighthouse-point-fl',
  'delray-beach-fl',
  'fort-lauderdale-fl',
];

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/service-areas', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.4', changefreq: 'yearly' },
  { path: '/terms-and-conditions', priority: '0.4', changefreq: 'yearly' },
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Static pages (7)
for (const p of staticPages) {
  xml += `  <url>
    <loc>${baseUrl}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>
`;
}

// Individual Service Area pages (10)
for (const l of locations) {
  xml += `  <url>
    <loc>${baseUrl}/appliance-repair-${l}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
`;
}

// Mandatory URL Service-Location landing pages (100)
for (const s of services) {
  for (const l of locations) {
    xml += `  <url>
    <loc>${baseUrl}/${s}-${l}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>
`;
  }
}

xml += `</urlset>
`;

const count = (xml.match(/<url>/g) || []).length;
const publicPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(publicPath, xml.trim() + '\n');
console.log(`[Public] Generated sitemap.xml with ${count} URLs at ${publicPath}`);

const distDir = path.join(__dirname, '../dist');
if (fs.existsSync(distDir)) {
  const distPath = path.join(distDir, 'sitemap.xml');
  fs.writeFileSync(distPath, xml.trim() + '\n');
  console.log(`[Dist] Synced sitemap.xml with ${count} URLs at ${distPath}`);
}
