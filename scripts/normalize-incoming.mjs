#!/usr/bin/env node
import { readdirSync, statSync, renameSync } from 'node:fs';
import { join, extname } from 'node:path';

const dir = 'public/images/all';

const files = readdirSync(dir).filter((f) => !/^\./.test(f));
let renamed = 0;
let skipped = 0;

for (const name of files) {
  if (/^customer-.*\.(jpg|jpeg|png|webp)$/i.test(name)) {
    skipped++;
    continue;
  }
  const lowerExt = extname(name).slice(1).toLowerCase();
  if (!/(jpg|jpeg|png|webp)$/.test(lowerExt)) {
    skipped++;
    continue;
  }
  const full = join(dir, name);
  const st = statSync(full);
  const d = st.birthtime;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  const ss = String(d.getSeconds()).padStart(2, '0');
  const digits = (name.match(/(\d{3,})/) || [null, '000'])[1];
  const newName = `customer-${y}${m}${day}-${hh}${mm}${ss}-${digits}.${lowerExt}`;
  const dest = join(dir, newName);
  if (dest === full) {
    skipped++;
    continue;
  }
  renameSync(full, dest);
  console.log(`${name} -> ${newName}`);
  renamed++;
}

console.log(`Renamed ${renamed} file(s). Skipped ${skipped}.`);

