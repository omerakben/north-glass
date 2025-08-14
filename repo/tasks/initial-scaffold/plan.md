# Initial Scaffold Planning (per PRD)

## Problem Statement (PRD references)
- Implement baseline scaffolding and guardrails to deliver the North Glass website as defined in `PRD.md`.
- Key clauses:
  - Email & Messaging policy (lines 9–21)
  - IA & Pages (lines 79–126)
  - Tech Update (lines 924–999)
  - Forms & Spam Protection (lines 354–369, 570–601, 584–586)
  - Analytics & Events (lines 603–616)
  - Accessibility & Performance (lines 621–656, 968–974)

## Constraints
- Performance: LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms (mobile)
- Accessibility: WCAG 2.2 AA; reduced motion; keyboard accessible
- Security/Privacy: No third‑party email APIs; sanitize inputs; GA4 Consent Mode v2
- Tech stack: Next 15, React 19, Tailwind v4; Node 22 LTS

## Step-by-step Plan
1) Environment & Dependencies
   - Add Node 22 LTS engines and `.nvmrc`
   - Install: `motion`, `gsap`, `lenis`, `lucide-react`
   - Prep Playwright/Lighthouse CI for later
2) Brand & Tailwind tokens
   - Switch to Inter; remove Geist
   - Define Tailwind v4 tokens for PRD palette
   - Accessible focus/target sizes
3) Global Layout & Components
   - Sticky `Header` (desktop dropdowns, mobile drawer, CTA)
   - `Footer` with NAP/links/social
   - `Button` variants
4) Routing scaffold
   - Create `/services`, all service details, `/about`, `/blog`, `/blog/[slug]`, `/contact`, `/request-quote`, `/privacy`, `/terms`
   - Page metadata, breadcrumbs structure
5) Forms & Server Handling
   - Quote form (single page first), Contact form
   - Next route handler + Nodemailer (Google SMTP), sanitize inputs
   - Honeypot + optional CAPTCHA via env
   - Auto‑reply + internal notification; mailto fallback
6) Analytics & SEO
   - Vercel Analytics + GA4 with Consent Mode v2 (post‑consent load)
   - Events: `lead_submit`, `contact_submit`, `cta_click`, `call_click`, `quote_start_step`, `quote_complete`, `gallery_interaction`
   - JSON‑LD: LocalBusiness, Service, FAQ, BreadcrumbList
   - `sitemap.xml`, `robots.txt`
7) Motion & Scroll
   - Lenis at app root with reduced‑motion
   - Reusable `FadeIn` (motion); lazy GSAP where needed
8) Quality Gates & CI
   - Playwright smokes for critical journeys
   - Lighthouse CI thresholds (mobile): Perf ≥ 90, A11y ≥ 95, BP ≥ 95, SEO ≥ 95
   - Scripts: lint, typecheck, build, test:e2e, lhci
9) Content placeholders
   - Seed pages with minimal copy aligned to PRD; link to Content Matrix

## Test Strategy
- Lint/Type/Build: `next lint`, `tsc --noEmit`, `next build`
- E2E: home → request‑quote, contact submit; nav desktop/mobile; tel/mailto presence; reduced‑motion behavior
- Accessibility: axe pass; keyboard nav; visible focus
- Performance: Lighthouse mobile key pages
- SEO: Validate JSON‑LD; verify `sitemap`/`robots`
- Security: header injection attempts sanitized; optional rate limit

## Definition of Done
- Baseline tech matches PRD; Node 22 LTS
- Header/Footer/Button implemented accessibly
- All routes scaffolded with metadata
- Quote & Contact forms functional with SMTP, validation, honeypot, CAPTCHA‑ready, mailto fallback
- GA4 Consent Mode v2 + Vercel Analytics; events wired
- JSON‑LD, `sitemap`, `robots` present; breadcrumbs on detail pages
- Lenis + `FadeIn`; reduced‑motion respected
- Quality gates pass: lint/type/build; Playwright smokes; Lighthouse thresholds

## Validation Commands
```sh
nvm use 22 || fnm use 22 || echo "Ensure Node 22 LTS"
npm ci
npm run lint
npx tsc --noEmit
npm run build
# E2E
npx playwright install --with-deps
npx playwright test
# Lighthouse (local quick check)
npx lighthouse http://localhost:3000 --preset=desktop --only-categories=performance,accessibility,seo,best-practices --throttling-method=devtools
```

## Inputs/Blockers
- Phone number and SMS support
- Lead mailbox (e.g., info@northglassnc.com) and Google SMTP method
- Address/hours for schema and Contact page
- Any service exclusions

## Milestones
- 1) Baseline (steps 1–4)
- 2) Forms (step 5)
- 3) Analytics/SEO (step 6)
- 4) Motion (step 7)
- 5) Tests/Gates (step 8)
