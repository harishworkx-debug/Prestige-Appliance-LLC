const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function run() {
  const svgPath = path.join(__dirname, '../public/favicon.svg');
  const svgBuffer = fs.readFileSync(svgPath);

  const targets = [
    { file: 'favicon-16x16.png', size: 16 },
    { file: 'favicon-32x32.png', size: 32 },
    { file: 'apple-touch-icon.png', size: 180 },
    { file: 'icon-192.png', size: 192 },
    { file: 'icon-512.png', size: 512 },
  ];

  for (const t of targets) {
    const outPath = path.join(__dirname, '../public', t.file);
    await sharp(svgBuffer)
      .resize(t.size, t.size)
      .png()
      .toFile(outPath);
    console.log(`Generated ${t.file}`);
  }

  // Generate favicon.ico from 32x32 PNG
  // A minimal valid ICO containing a 32x32 PNG stream
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // reserved
  icoHeader.writeUInt16LE(1, 2); // image type 1 = icon
  icoHeader.writeUInt16LE(1, 4); // count = 1

  const icoEntry = Buffer.alloc(16);
  icoEntry.writeUInt8(32, 0); // width
  icoEntry.writeUInt8(32, 1); // height
  icoEntry.writeUInt8(0, 2); // color palette
  icoEntry.writeUInt8(0, 3); // reserved
  icoEntry.writeUInt16LE(1, 4); // color planes
  icoEntry.writeUInt16LE(32, 6); // bpp
  icoEntry.writeUInt32LE(png32.length, 8); // size of image data
  icoEntry.writeUInt32LE(22, 12); // offset of image data (6 + 16 = 22)

  const icoBuffer = Buffer.concat([icoHeader, icoEntry, png32]);
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icoBuffer);
  console.log('Generated favicon.ico');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
