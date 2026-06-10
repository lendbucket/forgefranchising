import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const appDir = join(__dirname, '..', 'src', 'app');

const ESPRESSO = '#281010';
const CREAM = '#FAF6EF';

// Serif capital F as an SVG path, styled to match the Forge wordmark (bold serif with contrast)
function createFaviconSvg(size) {
  const padding = Math.round(size * 0.1);
  const cornerRadius = Math.round(size * 0.18);

  // The F is drawn as a path inside the rounded square
  // Proportions: F occupies roughly 50% width and 65% height of the icon, centered
  const fLeft = Math.round(size * 0.28);
  const fRight = Math.round(size * 0.75);
  const fTop = Math.round(size * 0.17);
  const fBottom = Math.round(size * 0.83);
  const stemWidth = Math.round(size * 0.13);
  const barHeight = Math.round(size * 0.095);
  const midY = Math.round(size * 0.47);
  const midRight = Math.round(size * 0.68);

  // Classic serif F with bracketed serifs
  // Using a simplified but elegant serif F shape
  const serifSize = Math.round(size * 0.035);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${cornerRadius}" ry="${cornerRadius}" fill="${ESPRESSO}"/>
  <g fill="${CREAM}">
    <!-- Stem -->
    <rect x="${fLeft}" y="${fTop}" width="${stemWidth}" height="${fBottom - fTop}" />
    <!-- Top bar -->
    <rect x="${fLeft}" y="${fTop}" width="${fRight - fLeft}" height="${barHeight}" />
    <!-- Middle bar -->
    <rect x="${fLeft}" y="${midY}" width="${midRight - fLeft}" height="${barHeight}" />
    <!-- Top serif (bottom of stem base) -->
    <rect x="${fLeft - serifSize}" y="${fBottom - barHeight}" width="${stemWidth + serifSize * 2}" height="${barHeight}" />
    <!-- Stem top-left serif -->
    <rect x="${fLeft - serifSize}" y="${fTop}" width="${serifSize}" height="${barHeight + serifSize}" />
    <!-- Top bar right serif -->
    <rect x="${fRight - serifSize}" y="${fTop + barHeight}" width="${serifSize}" height="${serifSize}" />
    <!-- Middle bar right serif -->
    <rect x="${midRight - serifSize}" y="${midY + barHeight}" width="${serifSize}" height="${serifSize}" />
  </g>
</svg>`;
}

async function generate() {
  // Generate 512x512 icon.png
  const svg512 = createFaviconSvg(512);
  await sharp(Buffer.from(svg512))
    .png()
    .toFile(join(appDir, 'icon.png'));
  console.log('Created icon.png (512x512)');

  // Generate 180x180 apple-icon.png
  const svg180 = createFaviconSvg(180);
  await sharp(Buffer.from(svg180))
    .png()
    .toFile(join(appDir, 'apple-icon.png'));
  console.log('Created apple-icon.png (180x180)');
}

generate().catch(console.error);
