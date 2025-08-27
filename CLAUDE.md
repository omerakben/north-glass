# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical: PRD-Driven Development

**ALL decisions must strictly follow the PRD at PRD.md**. The PRD is the single source of truth for this project. If any request conflicts with the PRD, surface the conflict and propose a PRD Change Request (PCR) before proceeding.

## Project Overview

North Glass LLC is a Next.js 15 web application for a glass installation business in the Raleigh-Durham Triangle area. The site's core purpose is **lead generation** – converting visitors into quote requests and contacts through an exceptional user experience showcasing glass services and craftsmanship.

## Development Workflow & Rules

### 1. PRD Supremacy (.cursor/rules/00-prd-guardian.mdc)

- Never invent requirements or make assumptions
- If requirement is missing, propose explicit language to add to PRD
- Every feature must link to exact PRD clause in PR description

### 2. Plan Before Code (.cursor/rules/10-sequential-planning.mdc)

Before writing any feature/bugfix:

1. Create a plan citing PRD sections
2. Define constraints (performance, SEO, accessibility, security)
3. Generate task list in `repo/tasks/<feature-kebab>/{plan.md, checklist.md}`
4. Only then start coding

### 3. Quality Gates (.cursor/rules/20-quality-gates.mdc)

Every feature must pass:

1. Lint and formatting (entire repo)
2. TypeScript check (zero errors)
3. Production build success
4. E2E validation of critical user journeys
5. Security/privacy validation

### 4. MCP Tool Usage (.cursor/rules/30-mcp-usage.mdc)

- Use Context7 MCP for up-to-date library docs
- Use Sequential Thinking MCP for planning
- Use Playwright MCP for E2E validation
- PRD always wins over MCP responses

## Development Commands

```bash
# Development
npm run dev          # Start dev server with Turbopack on localhost:3000

# Build & Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality (Run before ANY commit)
npm run lint         # Run ESLint
npm run typecheck    # TypeScript type checking (tsc --noEmit)
```

## Business Requirements (from PRD)

### Primary Goals & KPIs

- **Lead Generation**: Convert 5-8% mobile, 3-5% desktop visitors
- **Local SEO**: Top 10 rankings for key terms within 60-90 days
- **Performance**: LCP ≤2.5s, CLS ≤0.1, INP ≤200ms
- **Lighthouse**: Performance ≥90, Accessibility ≥95, SEO ≥90

### Target Personas

1. **Homeowner** ("The Renovator"): 30-60 years, seeking bathroom/home upgrades
2. **Interior Designer/Remodeler** ("The Specifier"): Need reliable glass subcontractor
3. **Property Manager/Business Owner** ("The Problem-Solver"): Need commercial glass services
4. **General Contractor**: Need glass subcontracting for projects

### Critical User Journeys (Must E2E Test)

1. Home → Service → Request Quote flow
2. Contact form submission
3. Phone call conversion (mobile)
4. Gallery/portfolio viewing
5. Service discovery via navigation

## Technical Architecture

### Stack

- **Framework**: Next.js 15.4.6 with App Router and Turbopack
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4, global styles in `app/globals.css`
- **Animations**: GSAP for animations, Lenis for smooth scrolling
- **Analytics**: Vercel Analytics + Google Tag Manager (with consent)
- **Email**: Nodemailer with Google Workspace SMTP only (NO third-party APIs)

### Email & Messaging Policy (PRD Final Decision)

**CRITICAL: Only Google Workspace native flows allowed**

- Use `mailto:` links for Gmail compose
- Google Calendar "Create Event" links for scheduling
- Server-side: Nodemailer + Google SMTP (OAuth2 or App Password)
- NO external providers (SendGrid, Mailgun, Formspree, Web3Forms, etc.)
- Implement anti-spam: honeypot fields, sanitization, header injection prevention

### Directory Structure

- `/app` - Next.js App Router pages and API routes
  - `/(site)/_components/` - Shared components (Header, Footer, ConsentBanner, etc.)
  - `/api/` - API routes for contact and quote forms
  - Individual pages as directories or files (about, services, contact, etc.)
- `/tasks/` - Feature planning documents (plan.md, checklist.md)
- Pages use `.tsx` extension with default exports
- API routes use `route.ts` with HTTP method exports (POST, GET)

### Component Architecture

- **Layout**: Root layout in `app/layout.tsx` includes Header, Footer, Analytics, and SEO setup
- **Providers**: `ScrollProvider` in `app/providers.tsx` handles smooth scrolling with Lenis
- **Client Components**: Use `"use client"` directive when needed (forms, interactive components)
- **Server Components**: Default for pages and static content

### Form Handling Requirements

Contact and quote forms must:

1. Sanitize ALL inputs to prevent injection attacks
2. Include honeypot field (`company`) for spam prevention
3. Implement time-to-complete checks
4. Send emails via Nodemailer with Google SMTP only
5. Return JSON responses with `{ ok: boolean }` structure
6. Track analytics events: `quote_start`, `quote_submit`, `email_send_success`, `email_send_error`
7. Never log or store PII longer than necessary

### Environment Variables

Required for email functionality:

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` - Google Workspace SMTP only
- `LEADS_TO`, `LEADS_FROM` - Email addresses for lead notifications
- Configure SPF, DKIM, DMARC on domain for deliverability

### SEO & Analytics Requirements

- Structured data (LocalBusiness schema) in root layout
- Google Tag Manager with consent management (deny by default)
- Custom analytics events via `AnalyticsEvents` component
- Meta tags with Open Graph and Twitter cards
- Breadcrumbs for all service pages
- FAQ schema for service pages with Q&A content
- Sitemap.xml and robots.txt properly configured
- All pages must be indexable within 1 week of launch

### Performance Requirements (Non-Negotiable)

- **Core Web Vitals**: LCP ≤2.5s, CLS ≤0.1, INP ≤200ms
- **Lighthouse Mobile**: Performance ≥90, Accessibility ≥95, Best Practices ≥90, SEO ≥90
- **Bounce Rate**: <50% on service pages
- **Session Duration**: >1.5 minutes average

### Key Dependencies

- **motion**: Animation library for UI interactions
- **lucide-react**: Icon library for consistent line-based icons
- **nodemailer**: Email sending for forms (Google SMTP only)
- **gsap**: Advanced animations with ScrollTrigger for parallax effects
- **lenis**: Smooth scrolling with reduced motion support
- Node.js 22.x required (specified in engines)

## Design System & Brand Guidelines

### Color Palette (Must be configured in Tailwind)

- **Turquoise Blue** (#40E0D0): Primary action color for CTAs, links, highlights
- **Deep Teal** (#005F73): Headers, overlays, hover states
- **Light Grey Glass** (#DCE3E6): Section backgrounds, card backgrounds
- **Frosted White** (#F8FAFB): Primary page background
- **Charcoal Grey** (#333B3E): Main body text
- **Warm Copper** (#B87333): Accent color (use sparingly)

### Typography

- **Font**: Inter (via Next.js font optimization)
- **Headings**: Bold/semi-bold weight
- **Body**: Regular weight, line-height 1.5+
- **Hierarchy**: H1 per page, clear H2/H3 structure for SEO

### Component Requirements

All components must include:

- **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation, ARIA labels
- **Responsive**: Mobile-first design with Tailwind breakpoints (sm, md, lg)
- **Motion**: Respect `prefers-reduced-motion`, use Framer Motion for UI transitions
- **Performance**: Lazy load images, code-split heavy libraries (GSAP only where needed)

## Site Architecture & Routes

### Primary Routes

| Route                                    | Purpose                                       | Primary CTA           |
| ---------------------------------------- | --------------------------------------------- | --------------------- |
| `/`                                      | Homepage with value prop & services overview  | Request Quote         |
| `/services`                              | All services index (Residential & Commercial) | Service-specific CTAs |
| `/services/frameless-glass-shower-doors` | Service detail page                           | Request Quote         |
| `/services/window-replacement`           | Service detail page                           | Request Quote         |
| `/services/mirrors`                      | Service detail page                           | Request Quote         |
| `/services/sliding-glass-patio-doors`    | Service detail page                           | Request Quote         |
| `/services/window-and-door-screens`      | Service detail page                           | Request Quote         |
| `/services/glass-table-tops-and-shelves` | Service detail page                           | Request Quote         |
| `/services/glass-office-doors`           | Commercial service                            | Contact/Quote         |
| `/services/staircase-glass-railings`     | Commercial service                            | Contact/Quote         |
| `/services/commercial-storefronts`       | Commercial service                            | Contact/Quote         |
| `/about`                                 | Company info, testimonials, team              | Contact Us            |
| `/blog`                                  | Blog index                                    | Read Articles         |
| `/blog/[slug]`                           | Individual blog posts                         | Related CTAs          |
| `/contact`                               | Contact info & form                           | Submit Form           |
| `/request-quote`                         | Quote request form                            | Submit Quote          |
| `/privacy`                               | Privacy policy                                | N/A                   |
| `/terms`                                 | Terms of service                              | N/A                   |

### SEO Implementation Requirements

- **Structured Data**: LocalBusiness, FAQPage, BreadcrumbList schemas
- **Meta Tags**: Unique title (<60 chars) and description (<155 chars) per page
- **Sitemap**: Auto-generated XML sitemap with all pages
- **Robots.txt**: Allow all main pages, include sitemap URL
- **Local SEO**: Service area mentions (Raleigh, Durham, Cary, etc.)
- **Rich Results**: FAQ snippets, breadcrumbs, knowledge panel

### Animation & Motion Guidelines

- **Scroll Animations**: GSAP ScrollTrigger for parallax, reveal effects
- **UI Transitions**: Framer Motion for page transitions, element reveals
- **Smooth Scroll**: Lenis library with `prefers-reduced-motion` respect
- **Performance**: Animations must not impact Core Web Vitals
- **Accessibility**: All animations must be disable-able

## Testing Requirements

### E2E Test Scenarios (Must Pass)

1. **Quote Flow**: Home → Service → Request Quote → Form submission
2. **Contact Flow**: Any page → Contact → Form submission with validation
3. **Mobile Navigation**: Hamburger menu open/close, submenu navigation
4. **Gallery Interaction**: Image viewing, before/after sliders
5. **FAQ Interaction**: Accordion open/close on service pages
6. **Cross-browser**: Chrome, Firefox, Safari, Edge compatibility
7. **Responsive**: 320px to 1920px viewport testing

### Accessibility Checklist

- ✅ Skip to content link
- ✅ Keyboard navigation for all interactive elements
- ✅ Focus trap in mobile menu
- ✅ ARIA labels for icons and buttons
- ✅ Form labels and error messages
- ✅ Alt text for all images
- ✅ Color contrast AA compliance
- ✅ Screen reader compatibility

## Pre-Commit Checklist

Before ANY commit or PR:

1. ✅ Cite PRD section being addressed
2. ✅ Run `npm run lint` and fix all issues
3. ✅ Run `npm run typecheck` - must pass with zero errors
4. ✅ Run `npm run build` - must complete successfully
5. ✅ Test critical user journeys (especially quote flow)
6. ✅ Verify forms have proper sanitization
7. ✅ Check performance metrics meet requirements
8. ✅ Update task checklist in `/tasks/`
9. ✅ Run accessibility check (WAVE or axe)
10. ✅ Test on mobile viewport
11. ✅ Verify SEO meta tags are present

- to memorize
