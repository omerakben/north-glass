#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync, renameSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

const manifestPath = 'public/images/all/manifest.json';

const data = JSON.parse(readFileSync(manifestPath, 'utf8'));
let moved = 0;
let skipped = 0;

for (const item of data.items) {
  if (!item.category || !item.category.trim()) {
    skipped++;
    continue;
  }
  const destDir = join('public/images', item.category.trim());
  const destPath = join(destDir, item.fileName);
  mkdirSync(destDir, { recursive: true });
  if (existsSync(destPath)) {
    console.warn(`Exists, skipping: ${destPath}`);
    skipped++;
    continue;
  }
  renameSync(item.relativePath, destPath);
  item.relativePath = destPath;
  moved++;
}

data.generatedAt = new Date().toISOString();
writeFileSync(manifestPath, JSON.stringify(data, null, 2));
console.log(`Moved ${moved} images. Skipped ${skipped}. Updated manifest.`);

