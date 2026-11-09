const fs = require('fs');
const path = require('path');

// Read services and locations from data files
const servicesFile = fs.readFileSync(path.join(__dirname, '../src/data/services.ts'), 'utf8');
const locationsFile = fs.readFileSync(path.join(__dirname, '../src/data/locations.ts'), 'utf8');
const businessFile = fs.readFileSync(path.join(__dirname, '../src/data/business.ts'), 'utf8');

// Extract slugs
const serviceMatches = [...servicesFile.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
const locationMatches = [...locationsFile.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);

console.log(`Verified ${serviceMatches.length} Services:`, serviceMatches);
console.log(`Verified ${locationMatches.length} Locations:`, locationMatches);

if (serviceMatches.length !== 10) {
  console.error('Expected exactly 10 services!');
  process.exit(1);
}
if (locationMatches.length !== 10) {
  console.error('Expected exactly 10 locations!');
  process.exit(1);
}

// Verify phone number in business.ts
const expectedPhone = '+1 (954) 234-9371';
const expectedRaw = '+19542349371';

if (!businessFile.includes(expectedPhone)) {
  console.error(`Missing expected phone ${expectedPhone} in business.ts`);
  process.exit(1);
}
if (!businessFile.includes(expectedRaw)) {
  console.error(`Missing expected raw phone ${expectedRaw} in business.ts`);
  process.exit(1);
}

// Verify map embed
const expectedEmbed = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458073.64185937616!2d-80.19270055!3d26.238925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7435108fb924cb7%3A0xcf2d6441ee506d55!2sPrestige%20Appliance%20LLC!5e0!3m2!1sen!2sin!4v1794199909556!5m2!1sen!2sin';

if (!businessFile.includes(expectedEmbed)) {
  console.error('Google Maps embed URL is not exact!');
  process.exit(1);
}

// Verify no forbidden URL patterns across src
function checkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      checkDir(full);
    } else if (full.endsWith('.tsx') || full.endsWith('.ts')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('/services/refrigerator-repair') || content.includes('/service-areas/deerfield-beach-fl')) {
        console.error(`Forbidden URL found in ${full}`);
        process.exit(1);
      }
      if (content.match(/<form[\s>]/i) || content.match(/<input[\s>]/i) || content.match(/<textarea[\s>]/i)) {
        console.error(`Forbidden form/input found in ${full}`);
        process.exit(1);
      }
    }
  }
}
checkDir(path.join(__dirname, '../src'));

console.log('ALL INTEGRITY CHECKS PASSED PERFECTLY!');

