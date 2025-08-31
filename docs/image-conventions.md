# Image Folder and Naming Conventions

This project stores static assets under `public/images`. Follow these conventions for consistency and SEO:

## Folders

- `public/images/<service-folder>/` for service imagery used on pages:
  - Examples: `frameless-glass-shower-doors`, `glass-office-doors`, `staircase-glass-railings`, `window-replacement`, `window-and-door-screens`, `mirrors`, `sliding-glass-patio-doors`, `commercial-storefronts`, `glass-table-tops-and-shelves`
- `public/images/testimonials/` for client headshots used in testimonial components.
- `public/images/all/` for incoming customer photos prior to categorization (normalized filenames only).

## Filenames

- Use lowercase, kebab-case: `custom-bathroom-mirror.png`, `office-partitions.png`
- Use `before-*.png` / `after-*.png` for transformation pairs.
- Prefer short, descriptive names with keywords relevant to the page.
- For incoming photos where context isn’t known yet, use the normalized pattern:
  - `customer-YYYYMMDD-HHmmss-NNN.jpg|png` (auto-generated)

## Workflow for New Customer Photos

1. Drop files into `public/images/all/` (any extension `.jpg|.png`).
2. Normalize filenames: `npm run images:manifest` (creates/updates `public/images/all/manifest.json`).
3. Open `public/images/all/manifest.json` and fill in for each image:
   - `category`: one of the service folders under `public/images`
   - `alt`: short descriptive alt text
4. Move files into their folders: `npm run images:move`.
5. Optionally rename moved files to a descriptive name once the use is known.

Notes:

- The manifest includes image dimensions (via `sips`) and creation timestamps to help selection.
- The move script will skip files if a target already exists.
- Converting formats (e.g., to `.png` or `.webp`) isn’t performed automatically.

