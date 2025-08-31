#!/usr/bin/env node
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, extname } from 'node:path';
import { execSync } from 'node:child_process';

const dir = 'public/images/all';

function getSipsInfo(file) {
  try {
    const out = execSync(
      `sips -g pixelWidth -g pixelHeight -g format "${file}"`,
      { stdio: ['ignore', 'pipe', 'ignore'] }
    )
      .toString()
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);
    const info = {};
    for (const line of out) {
      const m = line.match(/^(pixelWidth|pixelHeight|format):\s*(.+)$/i);
      if (m) {
        const key = m[1];
        const val = m[2];
        info[key] = key.toLowerCase().includes('pixel') ? Number(val) : String(val).toLowerCase();
      }
    }
    return {
      width: info.pixelWidth || null,
      height: info.pixelHeight || null,
      format: info.format || extname(file).slice(1).toLowerCase(),
    };
  } catch {
    return { width: null, height: null, format: extname(file).slice(1).toLowerCase() };
  }
}

function parseFromName(name) {
  // customer-YYYYMMDD-HHmmss-NNN.ext
  const m = name.match(/^customer-(\d{8})-(\d{6})-(\d{3,})\.[a-z0-9]+$/i);
  if (!m) return null;
  const [_, d, t] = m;
  const date = `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`;
  const time = `${t.slice(0, 2)}:${t.slice(2, 4)}:${t.slice(4, 6)}`;
  return `${date}T${time}`;
}

const files = readdirSync(dir)
  .filter((f) => /^customer-.*\.(jpg|jpeg|png|webp)$/i.test(f))
  .sort();

const items = files.map((name) => {
  const file = join(dir, name);
  const st = statSync(file);
  const createdFromName = parseFromName(name);
  const created = createdFromName || st.birthtime.toISOString();
  const { width, height, format } = getSipsInfo(file);
  return {
    fileName: name,
    relativePath: `${dir}/${name}`,
    format,
    width,
    height,
    created,
    category: "", // fill with a service folder like 'frameless-glass-shower-doors'
    alt: "", // write a short alt text when known
    tags: [],
  };
});

const manifest = {
  generatedAt: new Date().toISOString(),
  root: dir,
  count: items.length,
  items,
  notes:
    "Set 'category' to a folder under public/images (e.g., 'frameless-glass-shower-doors') and provide 'alt'. Then run an organizer script to move files.",
};

const outFile = join(dir, 'manifest.json');
writeFileSync(outFile, JSON.stringify(manifest, null, 2));
console.log(`Wrote ${outFile} with ${items.length} items.`);

