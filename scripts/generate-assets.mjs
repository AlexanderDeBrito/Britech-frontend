/**
 * Gera os assets estáticos da marca (favicons, og-image, logo) e converte as
 * imagens pesadas para WebP.
 *
 * Roda sob demanda, não no build: os arquivos gerados são versionados para que
 * o deploy não dependa de `sharp` nem das fontes instaladas na máquina.
 *
 *   pnpm add -D sharp && node scripts/generate-assets.mjs
 */
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const publicDir = path.join(process.cwd(), 'client/public');
const imagesDir = path.join(publicDir, 'images');

const BRAND = {
  navy: '#0B1220',
  navyDeep: '#070D18',
  blue: '#0A84FF',
  cyan: '#00D4FF',
  white: '#FFFFFF',
};

const FONT = "'Plus Jakarta Sans', 'DejaVu Sans', sans-serif";

/** Marca "B" do logo — mesmos paths do componente Logo.tsx. */
const logoMark = (bg) => `
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${BRAND.cyan}"/>
      <stop offset="100%" stop-color="${BRAND.blue}"/>
    </linearGradient>
  </defs>
  ${bg ? `<rect width="64" height="64" rx="12" fill="${BRAND.navy}"/>` : ''}
  <path d="M10 6 H34 C44 6 50 12 50 21 C50 26 47 30 43 32 C48 33.5 52 38 52 44 C52 53 45 58 35 58 H10 Z" fill="url(#g)"/>
  <path d="M22 18 L40 18 L22 36 Z" fill="${BRAND.navy}"/>
  <path d="M22 38 L38 38 L22 54 Z" fill="${BRAND.navy}" opacity="0.85"/>`;

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">${logoMark(true)}
</svg>
`;

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512" height="512">${logoMark(true)}
</svg>
`;

const ogImageSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${BRAND.navy}"/>
      <stop offset="100%" stop-color="${BRAND.navyDeep}"/>
    </linearGradient>
    <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${BRAND.cyan}"/>
      <stop offset="100%" stop-color="${BRAND.blue}"/>
    </linearGradient>
    <linearGradient id="text" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${BRAND.white}"/>
      <stop offset="100%" stop-color="${BRAND.cyan}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="${BRAND.blue}" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="${BRAND.blue}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <ellipse cx="990" cy="120" rx="460" ry="360" fill="url(#glow)"/>
  <ellipse cx="120" cy="600" rx="380" ry="300" fill="url(#glow)" opacity="0.6"/>

  <g transform="translate(80 74) scale(1.45)">
    <path d="M10 6 H34 C44 6 50 12 50 21 C50 26 47 30 43 32 C48 33.5 52 38 52 44 C52 53 45 58 35 58 H10 Z" fill="url(#mark)"/>
    <path d="M22 18 L40 18 L22 36 Z" fill="${BRAND.navy}"/>
    <path d="M22 38 L38 38 L22 54 Z" fill="${BRAND.navy}" opacity="0.85"/>
  </g>

  <text x="184" y="150" font-family="${FONT}" font-size="72" font-weight="800" fill="${BRAND.white}" letter-spacing="-2">Britech</text>

  <text x="80" y="300" font-family="${FONT}" font-size="64" font-weight="800" fill="${BRAND.white}" letter-spacing="-1.5">Construímos software</text>
  <text x="80" y="378" font-family="${FONT}" font-size="64" font-weight="800" fill="url(#text)" letter-spacing="-1.5">para a sua empresa e o mercado.</text>

  <text x="80" y="452" font-family="${FONT}" font-size="28" font-weight="500" fill="#A9B4C4">Consultoria para SaaS e B2B · Produtos próprios</text>

  <rect x="80" y="510" width="120" height="5" rx="2.5" fill="url(#mark)"/>
  <text x="80" y="568" font-family="${FONT}" font-size="27" font-weight="700" fill="${BRAND.cyan}">Blumenau (SC) · britechsolucoes.com</text>
</svg>
`;

/** Container ICO com payloads PNG (aceito por todos os navegadores atuais). */
function buildIco(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reservado
  header.writeUInt16LE(1, 2); // tipo: ícone
  header.writeUInt16LE(pngs.length, 4);

  let offset = 6 + pngs.length * 16;
  const entries = [];
  for (const { size, data } of pngs) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt8(0, 2); // cores da paleta
    e.writeUInt8(0, 3); // reservado
    e.writeUInt16LE(1, 4); // planos
    e.writeUInt16LE(32, 6); // bits por pixel
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    entries.push(e);
  }
  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.data)]);
}

const write = async (file, data) => {
  await fs.writeFile(file, data);
  const kb = (Buffer.byteLength(data) / 1024).toFixed(1);
  console.log(`  ${path.relative(process.cwd(), file).padEnd(46)} ${kb.padStart(8)} kB`);
};

async function main() {
  console.log('\nÍcones e imagens da marca');
  await write(path.join(publicDir, 'favicon.svg'), faviconSvg);
  await write(path.join(publicDir, 'logo.svg'), logoSvg);

  const iconSizes = [16, 32, 48, 180, 512];
  const rendered = {};
  for (const size of iconSizes) {
    rendered[size] = await sharp(Buffer.from(faviconSvg)).resize(size, size).png().toBuffer();
  }

  await write(path.join(publicDir, 'favicon-16x16.png'), rendered[16]);
  await write(path.join(publicDir, 'favicon-32x32.png'), rendered[32]);
  await write(path.join(publicDir, 'apple-touch-icon.png'), rendered[180]);
  await write(path.join(publicDir, 'icon-512.png'), rendered[512]);
  await write(path.join(publicDir, 'logo.png'), rendered[512]);
  await write(
    path.join(publicDir, 'favicon.ico'),
    buildIco([16, 32, 48].map((size) => ({ size, data: rendered[size] }))),
  );

  // PNG em cor cheia: o modo paleta (quality) gera artefato de dithering no brilho.
  const og = await sharp(Buffer.from(ogImageSvg)).png({ compressionLevel: 9 }).toBuffer();
  await write(path.join(publicDir, 'og-image.png'), og);

  console.log('\nImagens de conteúdo → WebP');
  const conversions = [
    { src: 'services-pattern.png', out: 'services-pattern.webp', width: 900 },
    { src: 'cta-accent.png', out: 'cta-accent.webp', width: 900 },
    { src: 'team-abstract.png', out: 'team-abstract.webp', width: 1100 },
  ];

  for (const { src, out, width } of conversions) {
    const before = (await fs.stat(path.join(imagesDir, src))).size;
    const buf = await sharp(path.join(imagesDir, src))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78, effort: 6 })
      .toBuffer();
    await fs.writeFile(path.join(imagesDir, out), buf);
    const saved = (100 - (buf.length / before) * 100).toFixed(1);
    console.log(
      `  images/${out.padEnd(38)} ${(buf.length / 1024).toFixed(1).padStart(8)} kB  (-${saved}%)`,
    );
  }

  console.log('');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
