#!/usr/bin/env node
// Auto-categorize images in public/images/all using CLIP zero-shot classification
import { readFileSync, writeFileSync, existsSync, renameSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { pipeline } from '@xenova/transformers';

const manifestPath = 'public/images/all/manifest.json';
if (!existsSync(manifestPath)) {
  console.error('Manifest not found. Run: npm run images:manifest');
  process.exit(1);
}

const categories = {
  'staircase-glass-railings': {
    label: 'a photo of a modern glass staircase railing',
    alt: 'Modern glass staircase railing with aluminum hardware',
  },
  'frameless-glass-shower-doors': {
    label: 'a photo of a frameless glass shower door in a bathroom',
    alt: 'Frameless glass shower door in modern bathroom',
  },
  'glass-office-doors': {
    label: 'a photo of a glass office door in an office',
    alt: 'Glass office door with aluminum frame',
  },
  'sliding-glass-patio-doors': {
    label: 'a photo of sliding glass patio doors',
    alt: 'Sliding glass patio doors with aluminum track',
  },
  'window-replacement': {
    label: 'a photo of house windows after window replacement',
    alt: 'Replaced energy-efficient house windows',
  },
  'window-and-door-screens': {
    label: 'a photo of window or door mesh bug screen',
    alt: 'Window and door mesh bug screen',
  },
  'commercial-storefronts': {
    label: 'a photo of a commercial storefront with large glass windows',
    alt: 'Commercial storefront glass facade',
  },
  'glass-table-tops-and-shelves': {
    label: 'a photo of a glass table top or a glass shelf',
    alt: 'Glass table top / shelf',
  },
  mirrors: {
    label: 'a photo of a wall mirror in a bathroom',
    alt: 'Custom wall mirror for bathroom',
  },
};

const labels = Object.values(categories).map((c) => c.label);
const labelToKey = Object.fromEntries(
  Object.entries(categories).map(([k, v]) => [v.label, k])
);

const data = JSON.parse(readFileSync(manifestPath, 'utf8'));

const modelId = 'Xenova/clip-vit-base-patch16';
console.log('Loading CLIP model…');
const classifier = await pipeline('zero-shot-image-classification', modelId);
console.log('Model loaded. Classifying uncategorized images…');

let updated = 0;
let decided = 0;
let uncertain = 0;

for (const item of data.items) {
  // Skip already categorized or missing files
  if (item.category && item.category.trim()) continue;
  const path = item.relativePath;
  if (!existsSync(path)) continue;

  try {
    const out = await classifier(path, labels, { hypothesis_template: 'This is {}.' });
    const top = out[0];
    const score = top.score ?? 0;
    const chosenLabel = top.label;
    const key = labelToKey[chosenLabel];

    // Confidence threshold. If low, leave uncategorized for manual review.
    const threshold = 0.28;
    if (score >= threshold && key) {
      item.category = key;
      if (!item.alt || !item.alt.trim()) {
        item.alt = categories[key].alt;
      }
      decided++;
    } else {
      item.tags = item.tags || [];
      item.tags.push('uncertain');
      item.prediction = { label: key || 'unknown', score };
      uncertain++;
    }
    updated++;
    console.log(`${item.fileName} -> ${key || 'unknown'} (${score.toFixed(3)})`);
  } catch (e) {
    console.warn('Error classifying', path, e.message);
  }
}

data.generatedAt = new Date().toISOString();
writeFileSync(manifestPath, JSON.stringify(data, null, 2));
console.log(`\nUpdated manifest. Classified: ${updated}. Assigned: ${decided}. Uncertain: ${uncertain}.`);

// Move confidently assigned images to their folders
let moved = 0;
for (const item of data.items) {
  if (!item.category || !item.category.trim()) continue;
  const src = item.relativePath;
  if (!existsSync(src)) continue; // already moved earlier
  const destDir = join('public/images', item.category.trim());
  const dest = join(destDir, item.fileName);
  try {
    await import('node:fs/promises').then(async ({ mkdir, rename }) => {
      await mkdir(destDir, { recursive: true });
      await rename(src, dest);
    });
    item.relativePath = dest;
    moved++;
  } catch (e) {
    console.warn('Move failed for', src, '->', dest, e.message);
  }
}

writeFileSync(manifestPath, JSON.stringify(data, null, 2));
console.log(`Moved ${moved} image(s).`);

