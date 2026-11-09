const http = require('http');

const urls = [
  '/',
  '/about',
  '/services',
  '/service-areas',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
  '/refrigerator-repair',
  '/washer-repair',
  // All 10 locations
  '/deerfield-beach-fl',
  '/boca-raton-fl',
  '/pompano-beach-fl',
  '/coconut-creek-fl',
  '/coral-springs-fl',
  '/margate-fl',
  '/parkland-fl',
  '/lighthouse-point-fl',
  '/delray-beach-fl',
  '/fort-lauderdale-fl',
  // Service-Location combinations
  '/refrigerator-repair-deerfield-beach-fl',
  '/washer-repair-parkland-fl',
  '/dryer-repair-lighthouse-point-fl',
  '/dishwasher-repair-delray-beach-fl',
  '/oven-repair-fort-lauderdale-fl',
  '/sitemap.xml',
  '/robots.txt',
  '/favicon.svg',
  '/site.webmanifest',
];

async function checkUrl(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4173${path}`, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        resolve({ path, statusCode: res.statusCode, length: data.length });
      });
    }).on('error', (err) => {
      resolve({ path, error: err.message });
    });
  });
}

async function main() {
  console.log('Testing routes with 10 locations on http://localhost:4173 ...');
  let allOk = true;
  for (const u of urls) {
    const res = await checkUrl(u);
    if (res.statusCode === 200) {
      console.log(`[PASS] ${res.path} -> ${res.statusCode} (${res.length} bytes)`);
    } else {
      console.error(`[FAIL] ${res.path} -> ${res.statusCode || res.error}`);
      allOk = false;
    }
  }

  if (allOk) {
    console.log('ALL ROUTES PASSED 200 OK!');
  } else {
    process.exit(1);
  }
}

main();
