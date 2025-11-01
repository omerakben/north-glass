# North Glass LLC — Product Requirements Document (Consolidated)

> **Status:** Final consolidated PRD (single source of truth)
> **Last updated:** 2025-08-14
> **This document consolidates all prior requirements and technical updates and is the single source of truth for North Glass LLC.**

---

## Final Decision: Email & Messaging (Supersedes prior drafts)

- **Email/Calendar policy:** We use **only Google Workspace native flows** — actual Gmail compose links (`mailto:`) and Google Calendar “Create Event” links. **No additional email/calendar API providers** (e.g., SendGrid, Mailgun, Formspree, Web3Forms) are permitted.
- **Lead form delivery (no external APIs):** When a user submits any form (e.g., Request a Quote, Contact), the submission is delivered directly to the company’s Google Workspace mailbox (e.g., `info@northglassnc.com`) **without third‑party APIs**. Implementation options, in order of preference:
  1. **Serverless SMTP to Google Workspace** using `nodemailer` + Google SMTP (OAuth2 or App Password). This is *not* an additional provider and stays within our in‑house stack.
  2. **Fallback:** `mailto:` “Open in Gmail” button that pre-fills subject/body for the user’s client (used only if JavaScript is disabled or SMTP delivery fails).
- **Calendar booking:** If scheduling is offered, use **Google Calendar self-service links** (pre-populated event link or `calendar.google.com/calendar/u/0/r/eventedit` with query params). Do **not** use the Google Calendar API or any scheduling SaaS.
- **Anti-spam & validation:** Client-side validation, hidden honeypot field, time-to-complete checks, and CAPTCHA if abuse appears. Serverless handler must sanitize inputs and prevent header injection.
- **Compliance & deliverability:** Configure SPF, DKIM, DMARC on the domain. Log send outcomes (success/failure) server-side; do not store PII longer than necessary. No marketing automation or CRM sync at this time.
- **Analytic events:** Track `quote_start`, `quote_submit`, `email_send_success`, and `email_send_error` in GA4/Vercel Analytics.
- **Messaging stays in-house:** No third-party ticketing/CRM. Team triages via Gmail labels/filters and optional Google Groups mailbox.

> This section **replaces** any earlier mention of external email APIs/services in previous drafts.

---

## PRD Core Content

## Company Profile Update

### About North Glass

North Glass is a glass and aluminum company based in the Triangle area, proudly serving all of North Carolina.

We specialize in complete shower enclosure systems with tempered glass, offering modern, durable and elegant solutions. With custom-made designs and professional installation, we bring both style and functionality to your bathrooms. In addition, we deliver high-quality and long-lasting services in aluminum applications, glass, windows, doors and mirrors.

We consider it our responsibility to support not only our customers but also our employees, their families and the community as a whole. This principle is one of the core values that makes us stand out in the industry.

In architectural interior design projects, our professional interior architects provide innovative solutions, setting us apart from the competition. We offer free estimates for all projects and enrich the process with detailed designs using AutoCAD architectural programs, ensuring a transparent and professional experience for our clients.

At North Glass, our mission is to combine trust, aesthetics and quality in every project, adding value to your living spaces.

### Contact Information

- Phone: +1 (984) 900-6201
- Facebook: North Glass Raleigh - <https://www.facebook.com/profile.php?id=61580048543297>
- Instagram: @northglassraleigh - <https://www.instagram.com/northglassraleigh>

## Website Product Requirements Document (PRD)

## Executive Summary

North Glass LLC is a specialized glass and aluminum company in the Raleigh–Durham–Cary “Triangle” region of North Carolina. This PRD outlines the requirements for a static marketing website that will position North Glass as a premium, modern provider of residential and commercial glass and aluminum solutions. The website’s core purpose is lead generation – driving visitors to request a quote, call, or contact the company. To achieve this, the site must deliver an exceptional user experience, showcase North Glass’s services and craftsmanship, and establish credibility through content and design.
Project Scope: The website will be a static Next.js 13 site deployed on Vercel, comprising a polished homepage, service category pages for Residential and Commercial offerings, individual service detail pages, an About page, a Contact page, a “Request a Quote” form page, and a Blog section for content marketing. All content will be statically rendered (with Incremental Static Regeneration for new blog posts or updates), ensuring fast performance and reliability. There is no complex web application functionality – the focus is on informative content, rich visuals (photos of work, etc.), and conversion-oriented elements (forms, CTAs).
Competitive Landscape & Inspiration: Several example websites have been analyzed to inform North Glass’s IA, tone, and features:
Glass Depots (Raleigh, NC): An established local glass company site, it exemplifies a well-structured information architecture with separate pages for each product/service and strong credibility signals (e.g. emphasizing a large showroom and “top choice” status). North Glass should similarly highlight its local expertise and any unique assets (e.g. decades of experience or warranty offers). Glass Depots also uses an effective tagline (“Triangle’s premier custom-fit glass shower doors and enclosures”) to immediately convey specialization.
City Mirror & Glass (Cary, NC): A smaller local competitor site that takes a one-page approach. It aggressively features a hero contact form (“JUST FILL OUT THE FORM… to get started”) at the top, touts “#1 Shower Doors, Mirrors & Windows Specialists” in the Triangle, and repeats CTAs throughout (e.g. “Start Your Project Today” buttons). This underlines the importance of prominent, repeated CTAs and highlighting free estimates and local experience (20+ years). North Glass’s site will similarly offer easy quote request forms and emphasize its “locally trusted” status.
CamGlass (Turkey) was referenced for visual design inspiration, specifically its use of a turquoise and teal color scheme and modern aesthetic. We will incorporate a similar turquoise blue (#40E0D0) and deep teal (#005F73) into North Glass’s branding to convey a sleek, contemporary feel (see Brand & Design Guidelines below). CamGlass also demonstrates how to present technical capabilities in a clean way – relevant for North Glass’s commercial audience.
Gatsby Glass: A high-end national brand that positions itself with a luxury tone. Their site features elegant typography, ample white space, and language like “Experience clarity and sophistication with Gatsby Glass,” appealing to upscale customers. Gatsby Glass showcases an “Inspiration Gallery” and describes a four-step process (“Consultation & Design”, “Selection”, “Fabrication”, “Installation”) to set expectations. North Glass will adopt a similar approach: a Project Process section on the site to educate clients on how projects progress, and a curated photo gallery to inspire confidence. Gatsby’s use of interactive tools (visualizer, etc.) is noted, but North Glass’s initial site will focus on fundamentals (with potential to add such features later). The takeaway is to deliver a premium experience with polished content and imagery, even as a smaller company.
Binswanger Glass: A large national glass company site illustrating broad service breadth and credibility messaging. Binswanger’s nav divides Residential and Commercial offerings with a comprehensive list of services, and its content emphasizes their 150+ years experience, BBB A+ rating, and top industry rankings. While North Glass is a newer company, the site will include trust markers (like years of combined team experience, license and insurance info, warranty promises) to build confidence. Binswanger also highlights case studies and portfolio pieces, which North Glass can emulate on a smaller scale by showing photos of past projects and testimonials. Their use of a “Request a Quote” in the header and multiple places is a pattern we will follow.
Glass Doctor: A franchise known for a strong conversion focus. Their site prominently offers “Request an Estimate” and a phone number at the top of every page, uses phrases like “Call (833) … to schedule repair!”, and provides assurances like upfront pricing and 24/7 service. For North Glass, we will implement an always-visible primary CTA (Request a Quote) in the navigation and a “Call Now” phone link, especially on mobile, to capture impulse contacts. Glass Doctor’s site architecture also separates services into Home, Auto, Business categories with specific pages for each service type. North Glass’s site will not include auto glass, but will clearly segment Residential vs. Commercial services in navigation and content. We will also incorporate FAQ content and answers to common questions (Glass Doctor uses an FAQ and tips knowledge base to handle objections) – North Glass can include a FAQ accordion on service pages to address common concerns (installation time, cost factors, etc.), potentially earning rich snippet results.
In summary, the North Glass website will combine the best practices observed: a clean, modern design aligned with the brand’s turquoise/teal aesthetic, an intuitive navigation organizing similar services (Residential vs Commercial) for easy discovery, conversion-centric elements (sticky CTAs, contact forms, phone links), and rich content (galleries, testimonials, FAQs) to engage users and signal expertise. Success will be measured by achieving high conversion rates (5–8% on mobile, 3–5% desktop) and strong local SEO performance (top 10 rankings for key services within 2–3 months), as detailed next.

## Goals & KPIs

Primary Objectives:
Lead Generation & Conversion: Convert site visitors into leads by driving them to Request a Free Quote or Contact North Glass. The site should make it effortless for users to reach out – via web forms, phone calls, or email. Conversion Rate Targets: ≥5–8% on mobile and ≥3–5% on desktop (percentage of total site visitors who submit a quote request or contact form, or call the provided number). These conversion rates will be key KPIs.
Local SEO Dominance: Achieve prominent visibility in local search results for North Glass’s core services. Within 60–90 days of launch, aim for 3–5 priority keyword queries (e.g. “Raleigh frameless shower doors”, “glass replacement Cary NC”, etc.) to rank in the top 10 of Google results. The site should be structured and coded to qualify for rich search results (FAQ snippets, sitelinks, knowledge panel) and maximize click-through.
Brand Perception & Trust: Establish North Glass as a premium, trustworthy brand in the local market. The website’s look & feel must convey professionalism, modern craftsmanship, and approachability. We will measure this via user feedback and engagement (time on site, pages per visit) and by offline feedback from customers (“Found you on your website and was impressed…”). Additionally, achieving Google Sitelinks for the domain (indicating clear IA) and possibly earning a high average rating (if reviews integrated later) will indicate success in credibility.
Performance & Accessibility: Deliver a technically excellent site that meets or exceeds Core Web Vitals and accessibility standards out-of-the-box. Core Web Vitals Targets at launch: Largest Contentful Paint (LCP) ≤ 2.5s, Cumulative Layout Shift (CLS) ≤ 0.1, Interaction to Next Paint (INP) ≤ 200ms. Lighthouse scores (mobile): Performance ≥ 90, Accessibility ≥ 95, Best Practices & SEO ≥ 90. These are non-negotiable quality bars to ensure fast, smooth, and inclusive user experience. Ongoing site monitoring (using Vercel Analytics and GA4) will track these metrics.
Additional KPIs:
Engagement with Content: Track interactions such as gallery views, clicks on before/after sliders, video plays (if any), and scroll depth on informational pages. While not primary, these indicate interest. High engagement (e.g. a good percentage of users scrolling to “Request a Quote” CTAs or viewing multiple service pages) will signal that content is resonating.
Bounce Rate / Dwell Time: A secondary goal is to keep bounce rates low on key landing pages (especially service pages from search) by providing the info users need. Aim for bounce rate < 50% on service pages and an average session duration > 1.5 minutes, indicating users are exploring rather than leaving immediately.
Indexed Pages & Rich Results: Within the first week of launch, ensure all pages are indexed by Google (via sitemap & Search Console). Within 30 days, the site should show enhanced results: e.g. FAQ rich snippets on pages where Q&A is provided, Breadcrumbs in search results, and brand knowledge graph card (via LocalBusiness schema and Google Business Profile integration). We will measure the presence of these rich results as a success indicator for SEO implementation.
These goals align the team on delivering not just a beautiful site, but one that performs and converts effectively. Next, we identify who our users are and their key use cases, to ensure the site’s content and features meet their needs.

## Competitive Differentiators & Value Propositions

North Glass distinguishes itself from competitors through several key differentiators that should be prominently featured throughout the website:

**Professional Interior Architects**: Unlike typical glass contractors, North Glass employs professional interior architects who provide innovative design solutions for architectural interior design projects. This expertise should be prominently featured as a unique selling proposition.

**AutoCAD Architectural Design Process**: The company uses AutoCAD architectural programs to create detailed designs for all projects, ensuring precision and professional presentation. This technical capability sets them apart from competitors who may rely on basic measurements and sketches.

**Specialization in Complete Shower Enclosure Systems**: North Glass specializes in complete shower enclosure systems with tempered glass, positioning them as shower specialists rather than general glass contractors.

**Glass and Aluminum Expertise**: The dual specialization in both glass and aluminum applications expands their service capability beyond glass-only competitors.

**Statewide Coverage**: Serving all of North Carolina from their Triangle base provides broader market reach than typical local competitors.

**Free Professional Estimates**: All projects include free estimates with detailed AutoCAD designs, adding value to the consultation process.

**Community-Focused Values**: The company's commitment to supporting customers, employees, families, and the community differentiates them on values and local engagement.

These differentiators should be woven throughout the site content, from the homepage value proposition to individual service pages and About page messaging.

## Personas & User Journeys

Target Users: North Glass’s audience spans both residential and commercial clients. We’ve identified a few primary personas:
Homeowner – “The Renovator”: Typically 30–60 years old, a homeowner looking to upgrade their space (e.g., renovate a master bathroom with a frameless shower enclosure, replace old windows for energy efficiency, or add custom mirrors). They value quality craftsmanship and will compare providers. Top needs: see examples of work (before/after, gallery), understand the process and cost range, verify the company is reputable (licensed, insured, good reviews), and easily request an in-home estimate. Use Case: Jane is remodeling her bathroom and wants a frameless glass shower door. She visits the site to see if North Glass does this, views photos of shower installs, reads a testimonial or two, then fills out the “Request a Quote” form to get pricing.
Interior Designer or Remodeler – “The Specifier”: A design professional or contractor seeking a reliable glass subcontractor. They might look for more technical info – e.g., range of services (mirrors, custom cut glass, railings, etc.), turnaround times, and proof of past commercial or high-end projects. Use Case: An interior designer has a project needing a custom mirror wall and glass railing. She visits the site to see North Glass’s capabilities (looks at the Commercial services section and any case studies), then uses the contact form or direct email to discuss details, possibly referencing specific services.
Property Manager / Small Business Owner – “The Problem-Solver”: This persona manages properties or owns a business location. They might need glass repairs or installations (storefront glass replacement, door glass, safety glass, etc.) often urgently or with minimal downtime. They value quick response and professionalism. Use Case: A retail store owner with a cracked front door glass searches for “commercial glass repair Raleigh.” He finds North Glass’s Commercial Storefront service page, sees that North Glass serves businesses, notes the phone number and calls immediately for a quote or emergency service availability.
General Contractor (GC): A GC building a house or commercial space who needs glass subcontracting. They will check the site for breadth of services (e.g., can North Glass handle all the shower enclosures, custom windows, etc. for a project?), possibly look at the About page for years in business or certifications, and then likely call to speak directly or request a formal quote package. Use Case: A GC on a tight timeline quickly finds the “Contact us” page via the header and calls the listed number to inquire about capacity for a new build’s glasswork.
Regardless of persona, common top tasks include: - Browse project photos/Gallery: Users often want to see visual proof of quality. The site should offer easy browsing of image galleries for different services (shower enclosures, storefronts, mirrors, etc.). - Verify credibility: Users will look for signals like years in business, client testimonials, any affiliations (e.g. BBB, local Chamber), and possibly warranty info. These build trust. - Understand services offered: Clear navigation and service pages should inform users exactly what North Glass can do (so they know if their need is covered). Each service page should answer “what does this include, why choose North Glass for it, and how to proceed”. - Get pricing or timeline info: While exact prices aren’t on the site (since projects are custom), users will appreciate guidance on what affects cost or how long typical projects take. FAQs can handle “How much do frameless showers cost?” with an answer guiding them to request a free estimate, and stating factors. - Request a quote / Contact: Ultimately, the main user flow is to convert interested visitors into leads. This should be possible from any point – e.g. a persistent “Request Quote” button, contact forms at sensible spots (perhaps a short form in the footer or a floating “Get Estimate” on mobile). The Contact page will provide direct phone and email info as well for those who prefer that.
User Journey – “Request a Quote” Flow: This is the critical conversion path, detailed here from a UX perspective:
Entry Point: The user can initiate a quote request from multiple entry points:
Clicking the “Request a Quote” button in the site’s header (visible on all pages).
Tapping a prominent CTA section on the homepage (e.g., a banner that says “Get Your Free Estimate”).
Filling a brief quote form widget that might appear at the end of each service page (a teaser prompting them to the full form).
On mobile, possibly a fixed “Call or Text for Quote” bar or a floating button.
Quote Form Page: The user lands on the Request a Quote page (/request-quote). This page will have a concise introduction reinforcing they’re about to get a free, no-obligation estimate from North Glass, and any reassurance (like “we typically respond within 1 business day” or “your information is secure”). The primary element is the Quote Request Form. It may be a single page form or a multi-step form for usability. For example, a multi-step form might first ask for basic contact info (Name, Contact, ZIP), then “What service are you interested in?” with checkboxes or dropdown (Shower, Window, etc.), then details like a text box for project description and optional photo upload, and finally a confirmation step.
Form Completion: The user fills in the required fields (with client-side validation guiding them for any errors or missing info) and submits the form. On submit, the site shows a success state – either:
If using a multi-step modal form, a success message in context (“Thank you! We’ve received your request. Our glass specialist will contact you within 24-48 hours.”).
Or if it’s a separate page, possibly redirect to a “Thank You” page (e.g., /thank-you) with the same confirmation message and maybe additional info (“Meanwhile, feel free to prepare any photos or measurements...”).
Follow-Up: The user receives an email confirmation of their request (the form handler will send an auto-reply from <info@northglassnc.com> summarizing their submission and thanking them). Internally, North Glass’s team also receives an email notification with the lead details immediately. The PRD assumes an email-based lead handling; if a CRM integration (like sending to HubSpot or similar) is needed, that will be handled via form backend but is out of scope for the front-end spec aside from noting the need.
Return Engagement: After requesting a quote, the user might browse more of the site while they wait for a response. The Thank You page could gently prompt them to check out the Gallery or Blog (“While you wait, see our portfolio of recent projects”). This keeps them engaged and builds more brand affinity. However, the main journey for the quote request is complete at the submission.
Throughout this flow, we will implement analytics events to measure where users drop off (e.g., started form but didn’t finish – track a quote_start event when form opens and a quote_submit on completion) and which CTAs are most effective (tracking clicks on “Request a Quote” from various pages).
Additionally, phone call conversion is a parallel flow: A user might directly call the phone number listed (especially mobile users clicking a tel: link). We consider that a conversion as well. The site will have a “Call now” CTA (e.g., top bar on mobile “📞 Call for Free Estimate”) for those who prefer phone. We’ll track phone clicks as an event, and ensure the number is prominent in the Contact page and site footer.
By mapping these journeys, the site’s design will ensure each persona finds a clear path to conversion, whether via form or phone, and gets the information needed along the way to feel confident in North Glass.

## Information Architecture & Sitemap

A clear information architecture will help users (and search engines) navigate the site. North Glass’s site structure is organized by content type and audience (residential vs commercial). Below is the planned IA in a hierarchical “tree” format, followed by a route table with brief descriptions:
Home (/) – Overview of North Glass, service highlights, value proposition, and main CTAs.
Services (/services) – Index page listing all services. Likely sections for Residential Services and Commercial Services with links.
Residential Services (category page section, not a separate URL):
Frameless Glass Shower Doors (/services/frameless-glass-shower-doors) – Service detail page.
Window Replacement (/services/window-replacement) – Service detail page.
Mirrors (/services/mirrors) – Service detail page (for wall mirrors, mirrored walls, etc).
Sliding Glass Patio Doors (/services/sliding-glass-patio-doors) – Service detail page.
Window & Door Screens (/services/window-and-door-screens) – Service detail page (screen repair/replacement).
Glass Table Tops & Shelves (/services/glass-table-tops-and-shelves) – Service detail page (custom cut glass for furniture).
Commercial Services (category section):
Glass Office Doors (/services/glass-office-doors) – Service detail (interior office partitions, conference room glass, etc).
Staircase Glass Railings (/services/staircase-glass-railings) – Service detail (glass balustrades for stairs or balconies).
Commercial Storefronts (/services/commercial-storefronts) – Service detail (storefront glass installation/repair).
About (/about) – Company background, values, team, service area, testimonials and credibility points.
Blog (/blog) – Blog index page with list of articles (for SEO and educational content).
Blog Post (/blog/<slug>) – Individual blog article pages for topics like tips, comparisons, etc.
Contact (/contact) – Contact information page (location, phone, email, hours, short contact form).
Request a Quote (/request-quote) – Dedicated page with the comprehensive quote request form (if not using a modal or multi-step overlay).
(Utility Pages) – Not in main nav but in footer:
Privacy Policy (/privacy) and Terms of Service (/terms) – Legal pages.
404 Page (auto-generated by framework) – User-friendly message if a page isn’t found, with link back to home or services.
For clarity, here is a routes table summarizing each major page and its purpose:

| URL / Route                            | Page Title & Purpose                                                                                                                                                                                       |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| / (Home)                               | Home – Introduce North Glass with value proposition, key services overview, and strong call-to-action for quote. The gateway for new visitors.                                                             |
| /services                              | All Services – Index of all glass services offered, split by Residential and Commercial. Provides quick navigation and SEO for “glass services” keyword.                                                   |
| /services/frameless-glass-shower-doors | Frameless Glass Shower Doors & Enclosures – Detail page describing custom frameless showers, benefits, process, and photos. Primary CTA: Request a Quote.                                                  |
| /services/window-replacement           | Window Replacement – Service page for residential window replacement (and repair if offered), covering energy-efficient options, etc. CTA: Request a Quote.                                                |
| /services/mirrors                      | Mirrors & Mirrored Walls – Service page for custom mirror installation (bathroom mirrors, gym mirrors, decor mirrors). CTA: Request a Quote.                                                               |
| /services/sliding-glass-patio-doors    | Sliding Patio Doors – Service page for installing or replacing sliding glass doors (typically to backyard/patio). CTA: Request a Quote.                                                                    |
| /services/window-and-door-screens      | Window & Door Screens – Service page for screen repair/replacement (bug screens for windows/porches, screen doors). CTA: Request a Quote.                                                                  |
| /services/glass-table-tops-and-shelves | Glass Table Tops & Shelves – Service page for custom-cut glass tabletops, protective glass covers, and glass shelving. CTA: Request a Quote.                                                               |
| /services/glass-office-doors           | Glass Office Doors & Partitions – Commercial service page for interior glass doors, office fronts, conference room enclosures. CTA: Contact/Quote.                                                         |
| /services/staircase-glass-railings     | Staircase Glass Railings – Commercial (and high-end residential) service page on glass railing systems for stairs, balconies. CTA: Request a Quote.                                                        |
| /services/commercial-storefronts       | Commercial Storefronts – Service page for storefront glass installation and door repair for businesses. CTA: Request a Quote. Possibly “Call now” for emergency.                                           |
| /about                                 | About Us – Company info, mission/values, team intro, service area map/list, years of experience, warranties and what sets North Glass apart. Secondary CTA: Contact or Quote.                              |
| /blog                                  | Blog – Listing of informative articles (glass care tips, comparisons, local guides). Helps SEO and educating customers.                                                                                    |
| /blog/<slug>                           | Blog Post – Content page for a specific article. Contains the article content, author info, and calls to action (e.g., “Interested in X service? Contact us.”).                                            |
| /contact                               | Contact – Contact details (phone, email, address if any showroom/office), business hours, and a simple contact form for inquiries. CTA: either submit form or “Call Now”.                                  |
| /request-quote                         | Request a Quote – Dedicated lead form page for users ready to get an estimate. May repeat some trust messaging (e.g., “free and no obligation”). After submission, leads are thanked and told what’s next. |
| Footer only: /privacy, /terms          | Privacy Policy & Terms – Legal documents outlining privacy practices and site terms. Include for compliance (especially if analytics and tracking are used).                                               |
| 404 page                               | 404 Not Found – Auto page shown when a user hits a broken link. Will suggest navigation links back to Home/Services.                                                                                       |

Navigation Structure: The top navigation bar will surface key sections as follows: - Residential (with dropdown menu listing the residential service pages: Frameless Showers, Windows, Mirrors, etc.) - Commercial (dropdown listing the commercial service pages: Office Glass, Railings, Storefronts) - All Services (links to the /services index page – for users who want a single list or to ensure none are missed) - About - Blog - Contact - Request a Quote (this item will be styled as a primary CTA button in the nav, to stand out)
On mobile, the nav will collapse into a hamburger menu that slides out a panel with the above items (including accordions or indents for the Residential/Commercial sub-links). Additionally, a top-bar on mobile may show the phone number or a “Call” icon for quick access.
The footer will contain quick links (duplicate some of the main nav like Services, About, Contact, Blog), the company Name/Address/Phone (NAP) for local SEO, email link, and social media icons (Instagram, Facebook). It will also mention the service area (e.g., “Serving all of North Carolina from our Triangle base”) and link to the privacy/terms. This helps both users and SEO (Google looks for NAP consistency and service area info on the site).
Breadcrumb navigation will be used on sub-pages (like service detail pages and blog posts) for UX and SEO. For example, on the Frameless Shower Doors page, a breadcrumb might display: Home > Services > Frameless Glass Shower Doors. This will also be marked up with structured data (BreadcrumbList) for rich snippets.
Overall, the IA is designed to be shallow (mostly 2 levels deep) and easily crawlable. Every service page links back to the Services index (and/or their category page) and also cross-links to related services (e.g., Shower Doors page might have “Related: Mirrors for your bathroom” link). This internal linking and clear hierarchy will help users discover additional services and signal to search engines how the content is grouped.

## Brand & Design Guidelines

North Glass aims for a brand image that is professional, clean, and modern – instilling confidence while remaining approachable to homeowners and small businesses. The visual design and content tone will reflect this balance:
Style & Tone: Confident and knowledgeable, yet friendly. We avoid overly technical jargon when addressing homeowners (keep it understandable), but we do convey expertise. For example, copy might say “Our experts ensure a flawless installation, every time” – implying skill without sounding arrogant. The tone should be helpful and solution-oriented. Use positive language (e.g., “elevate your space with elegant custom glass” rather than just “we install glass”). Avoid clichés; focus on tangible value (e.g., safety, beauty, energy savings).
Color Palette: The brand colors suggested are inspired by the clarity and sophistication of glass, combined with a touch of warmth for approachability:
Turquoise Blue – #40E0D0. A vibrant, clear blue representing glass and water. To be used for highlights, call-to-action buttons, and possibly header/footer backgrounds or accents.
Deep Teal – #005F73. A dark teal green-blue that complements the turquoise. Good for header text, some background sections or overlay, and hover states. Conveys stability and trust.
Light Grey Glass – #DCE3E6. A very light grey with a hint of blue, reminiscent of frosted glass. Ideal for backgrounds of sections to differentiate from pure white, or for card backgrounds.
Frosted White – #F8FAFB. An off-white that will be the primary page background. Most content sections will sit on this or pure white (#FFFFFF) for a clean look, with shadows/borders as needed.
Charcoal Grey – #333B3E. A near-black grey for main body text, providing strong contrast on light backgrounds. This will be used for most text to ensure readability (per AA contrast).
Warm Copper – #B87333. A metallic copper accent to introduce a subtle warmth. This could be used sparingly (e.g., icon accents, hover underline on links, or one element in the logo if applicable). It should not overpower; it’s to give a hint of luxury (as copper fixtures or accents in homes do).
These colors will be defined as Tailwind CSS tokens (e.g., brand-turquoise, brand-teal, etc.). Usage guidelines: The Turquoise Blue (#40E0D0) will likely be the primary action color (buttons, links, icons) because it’s bright and eye-catching – e.g., a “Request a Quote” button might be turquoise on desktop. The Deep Teal (#005F73) can be used for header backgrounds or callout banners (it’s darker, providing contrast with white text). The overall palette should feel cool and clean, echoing the transparency of glass, with the copper as a minor complementary color to avoid a sterile look.
Typography: A legible, modern sans-serif font will be used – likely Inter, as it’s a highly readable web font with a clean look at small sizes and good weight variety for headings. We will use Next.js’s built-in font optimization (@next/font) to load Inter. Headings will be bold or semi-bold, body text regular weight. Ensure good line-height (1.5+) for body copy to maintain readability. Use all-caps or letterspacing sparingly (maybe for small label text or nav menu items). For any numeric stats or fancy text, we might pair with a second font (optional) – but likely one font is sufficient for simplicity. The focus is readability on all devices.
Imagery: The site will feature high-contrast, high-quality photographs of actual glass installations. We prefer real project photos (when available) over generic stock, to build authenticity. That includes bathrooms with frameless showers, before-and-after comparisons of window replacements, office interiors with glass walls, storefronts of local businesses, etc. Images should be bright, well-lit, and showcase the clarity of the glass (for example, a frameless shower photo where the glass is so clear it’s barely visible except the edges). Where appropriate, include before/after sliders (particularly for transformations like an old window vs new window, or a before vs after of a bathroom remodel). These interactive elements engage users and highlight the value of North Glass’s work.
Iconography: We will use the Lucide icon set (React implementation) for consistent, line-based icons. Icons will complement text for quick visual communication – e.g., a phone icon next to “Call us”, an email icon by the email address, a small icon for each service category (a shower icon, a window icon, etc.), and checkmark or star icons for lists of benefits. Lucide’s style (simple strokes) aligns with the modern clean theme. Icons will use brand colors (e.g., teal or turquoise) or white if on dark backgrounds.
Logo & Branding: (If a North Glass logo is already available, it will be placed top-left of header; if not, a simple text treatment using the brand font and turquoise/copper color should be created as a placeholder). The logo should evoke glass or North Carolina subtly if possible. The site’s favicon will be a simplified version of the logo (or an icon symbol like a pane of glass).
Layout & Spacing: The layout should feel open and airy. Use generous padding and margin so elements aren’t cramped. Sections should have clear separation (e.g., alternate background colors or subtle dividers) to break up content for easy scanning. A typical section might have 60–80px top and bottom padding on desktop (30–40px on mobile). Use CSS grid or flex layouts to create multi-column sections (like text next to an image, or a 3-column list of values). The design should be responsive: on mobile, single column stacking of what might be side-by-side on desktop.
Visual Effects: Use subtle shadows or frosted-glass effect on containers to suggest depth (for example, a navbar with a semi-transparent frosted background when overlaying hero image). Rounding of corners can be minimal (maybe 4px radius) to keep things sleek, except perhaps on buttons which could have slightly more rounded corners for a friendlier feel (e.g., 6–8px). Consistency in UI elements (all buttons same style, all cards similar style) is key to a cohesive brand feel.
In summary, the brand impression should be of a cutting-edge glass provider: think clean lines, transparency, and light. The turquoise and teal evoke water and glass reflections, reinforcing the company’s domain. Content will speak to quality and reliability without unnecessary fluff. By following these guidelines, the site will present North Glass as a trusted, modern craftsman in their field.

## Tech Stack & Non-Functional Requirements

To deliver on performance and maintainability, we will use a modern Jamstack approach centered on Next.js and Vercel:
Framework: Next.js 13 with the App Router (React 18). This allows us to build the site as a mix of Server Components (for initial page loads with SEO-friendly content) and Client Components where needed (for interactive parts like sliders, forms). We’ll primarily use static generation for all pages (since content will not change per request). We will enable Incremental Static Regeneration (ISR) for any pages that might get updated content frequently (likely the blog index and posts, so that adding a new post doesn’t require a full rebuild). This gives the benefits of static (speed, stability) while allowing content updates to go live without manual redeploys.
Deployment & Hosting: Vercel will host the site, giving us global CDN caching for fast loads in the region and easy integration with Next.js features. We’ll set up at least two environments: a staging environment (preview deployments for each PR, plus a main “staging” branch perhaps) and production (the live site at northglassnc.com). Vercel’s automatic previews for pull requests will be used for QA and stakeholder review before merging changes.
Styling: Tailwind CSS v4 (or latest) will be used for rapid UI development and consistency. We will configure Tailwind’s theme with the brand colors (mentioned above) and a type scale and spacing scale that suits our design. Utility classes will be used for most styling, but we will keep an eye on not overusing any one-off classes that conflict. We will document some utility conventions (e.g., using container mx-auto for center alignment, using Tailwind’s breakpoints sm, md, lg for responsive adjustments). The goal is to leverage Tailwind to ensure consistent spacing, font sizing, and colors across components, and to easily enforce responsiveness without writing a lot of custom CSS. Critical CSS (above-the-fold styles) will be automatically handled by Next’s optimizations, but we should be mindful of not including unused styles (we will use PurgeCSS via Tailwind to drop unused classes).
Animations & Scrolling: For interactive and animated effects:
We will use Framer Motion for simple UI transitions and reveal-on-scroll effects (Framer Motion’s variants and hooks integrate well with React and allow spring animations, staggers, etc. easily). For example, we might fade in and slide up elements as they enter the viewport, or animate page transitions (mount/unmount) for a smoother feel.
For more complex scroll-driven animations (parallax effects, pinning elements, synchronized animations), we’ll use GSAP (GreenSock) with its ScrollTrigger plugin. GSAP is powerful but we will use it judiciously to avoid jank. Potential use-cases: a subtle parallax of an image in the hero as user scrolls, animating numbers counting up (for stats) when scrolled into view, or revealing gallery images sequentially.
We will implement smooth scrolling using something like Lenis (a smooth scroll library) to give a refined feel when users click anchor links or scroll, but importantly we will respect prefers-reduced-motion. That is, if a user has reduced motion preference, we either disable smooth scroll (falling back to native jump) or drastically reduce any motion durations. Accessibility is a priority: any motion should be “opt-in” for those without motion sensitivities. We’ll also avoid overly large or continuous animations that could hurt performance.
Assets & Media Optimization: All images will be served through Next.js Image component, which will handle responsive sizing (srcset) and modern formats (WebP/AVIF) automatically. We will ensure to provide multiple breakpoints (e.g., for a hero image, maybe 320px, 640px, 1280px widths etc.) so that mobile users get smaller images. Images will be optimized at build time or on-demand through Vercel’s image optimization. We’ll also use <Image> for SVGs or icons when appropriate (or inline SVG for small ones). Video content is not planned initially; if in future, we’d host any videos on a third-party (YouTube or a lightweight host) to not bloat the site.
Performance Budget: We intend to keep the site very lean. The target is to keep the total JS bundle size small (since mostly a static site). By using Next 13’s Server Components, a lot of UI can be rendered without sending JS to the client. We will code-split by route – e.g., heavy libraries like GSAP will only load on pages that actually use them (maybe home page and not on every page). Likewise, if we include a map embed (like Google Maps on Contact page), we might conditionally load it or use a static image fallback to reduce third-party script load. We will monitor Lighthouse and bundle analyzer during development to ensure no single page is overweight. The LCP target of 2.5s (on mobile 4G) is feasible by optimizing hero images and reducing render-blocking JS/CSS.
Accessibility & SEO built-in: Using Next.js and semantic HTML will help ensure a baseline of accessibility and SEO. We will use proper HTML5 elements (nav, main, footer, section, h1-h2-h3 headings in order, etc.) and Next’s built-in <Head> management for meta tags, canonical links, etc. Aria attributes will be added where needed (e.g., for carousel controls, modals, etc.). This is expanded in the Accessibility section below, but from a tech standpoint, it’s a requirement that all interactive components are accessible (e.g., the mobile menu must trap focus when open, forms must have labels, etc.).
Hosting & Deployment considerations: Each deployment to production via Vercel will run through automated checks (we can use Vercel’s checks or GitHub Actions for linting, testing). Vercel will handle SSL (so the site will be HTTPS by default). We’ll set up a redirect from the bare domain to www or vice versa as needed (likely both work). Also, a robots.txt and sitemap.xml will be provided (Next can auto-generate or we use a plugin) to guide search engines – no unusual crawling constraints, except perhaps disallowing any staging URLs or draft content.
Analytics & Consent: We will integrate Google Analytics 4 (GA4) for tracking (details in Analytics section). GA4 script will be added with Consent Mode so that if a user has not consented to cookies, it will run in an anonymized mode. Depending on legal requirements (not strictly required in US, but good practice), we might implement a cookie consent banner that triggers GA4 full tracking on accept. We will also use Vercel Analytics which is a lightweight, GDPR-compliant analytics that doesn’t use cookies, to gather basic traffic info even if GA is limited – this double-layer ensures we have some data on user visits regardless of consent.
Form Handling: As this is a static site, form submissions will be handled by either a serverless function or an external form service. Options: use Next.js API route (serverless on Vercel) to capture form data and send email via an SMTP or email API (like SendGrid), or integrate a service like Formspree or Web3Forms. The PRD leans toward building a simple serverless function (Node) in Next that will handle the POST from the quote form, send out emails (to <info@northglassnc.com> and an auto-response to the user), and then return a success response. This keeps everything within the site’s stack. We will implement basic spam filtering on this (like checking a hidden honeypot field or requiring a captcha as mentioned below).
Security & Privacy: Ensure no sensitive info is exposed in front-end. We won’t handle payments, so main security concerns are protecting form submissions. We’ll use HTTPS for all resources. If file uploads are allowed in the form, we will restrict types and size (maybe using an upload service or direct S3 upload if needed). Also, the site should be tested for common vulnerabilities (no user login or dynamic content means low risk; still ensure dependencies are up to date and the contact form cannot be used for email injection etc.). Privacy-wise, we will have a privacy policy and not share user data beyond internal use.
Non-functional requirements summary: The site must be reliable (uptime 99%+, which Vercel handles), scalable (can handle traffic spikes – static content on CDN is easily scalable), and maintainable (developer-friendly code structure, documented components). We will maintain a component library within the project so that design elements are reused consistently. Also, the code repository will include a README for how to develop and deploy, so future developers or the team can easily continue the work.
In short, using Next.js and Vercel provides a robust foundation to hit our performance and SEO goals. Tailwind and our chosen libraries (Framer Motion, GSAP) will enable the desired design and interactivity without bloat if used carefully. All these tech choices support the core mission: a fast, beautiful site that converts well and is easy to manage as North Glass grows.

## Page Specifications

This section details requirements for each core page or template on the site. Each page spec includes the page’s purpose, layout sections, key content (with some sample copy points), primary/secondary CTAs, SEO considerations, and any unique functionality or components used on that page. No lorem ipsum is used – instead, we provide real content outlines or examples to guide copywriting.

### Home Page

Purpose: The homepage is the first impression of North Glass. It should immediately communicate what we do and where (e.g., “Residential & Commercial Glass Services in the Raleigh-Durham area”), along with a compelling value proposition that sets North Glass apart (e.g., local expertise, quality guarantee). The home page guides different users to the content they need: homeowners to residential services, business clients to commercial services, etc., while reinforcing trust. It also drives the main conversion via prominent CTAs like “Request a Free Quote”.
Primary CTA: “Request a Quote” (prominently in hero section as a button, and repeated near the bottom as a banner or in the footer).
Secondary CTAs: “Contact Us” (for those who may have a question) and possibly “Call Now: [phone number]”. On mobile, a secondary CTA may be a call button. Another secondary action could be “View Our Services” to push those who want to explore first.
Hero Section: A striking hero with background imagery – possibly a full-width image of a glass installation. For example, a high-quality photo of a modern bathroom with a frameless glass shower (showcasing our specialty) or a montage (semi-transparent) overlay of residential and commercial imagery. Over the image, a headline and subtext: - Headline (H1): Should encapsulate North Glass’s offering and locale. E.g.: “Elevating Spaces with Custom Glass Solutions in the Triangle.” This H1 hits the SEO keywords (glass, custom glass, Triangle) and value (elevating spaces). - Subheading: A one-liner value prop. E.g.: “Frameless Showers, Windows, Mirrors & More – Installed with Precision and Care.” This touches on services and promise of quality. - Credibility badges: Within the hero or right below, we might show small trust indicators – e.g., “25+ years combined experience”, “Fully Licensed & Insured”, “5-Star Rated on Google” (assuming by launch we gather reviews), or logos of associations (like BBB, local builders association if member). Glass Depots, for instance, highlights a showroom; North Glass might highlight “Locally owned and operated”. - Hero CTA Buttons: A prominent turquoise “Request a Free Estimate” button. Next to it, possibly a secondary link styled less prominently: “See Our Services” which scrolls down or navigates to /services.
Key Sections (following the hero):
Services Overview: Introduce the main service categories. For example, two columns – one for Residential, one for Commercial, each with an icon and 2-3 bullet highlights, plus a “Learn More” link:
Residential Glass Services: Brief text: “From stunning shower enclosures to energy-efficient windows, we bring beauty and value to your home.” Bullet examples: “Frameless Shower Doors”, “Window Replacement & Screens”, “Custom Mirrors”. A link or button “Residential Services” leads to /services#residential or similar.
Commercial Glass Solutions: Brief text: “Helping businesses make a clear impression – storefronts, office glass, and more with quick turnaround.” Bullets: “Storefront Glass & Doors”, “Office Partitions & Doors”, “Glass Railings”. Link “Commercial Services” leads to /services#commercial.
Alternatively, we may list 3-4 specific popular services with small images (cards). But since we have distinct audiences, splitting Res vs Comm makes sense.
Why Choose North Glass (Value Proposition): A section to build trust. Possibly stylized as four key points across the page (each with an icon and short text). For example:
“Affordable Luxury” – “Get high-end glass solutions at fair local prices. We believe in transparent pricing – luxury looks without breaking the bank.”
“Expert Craftsmanship” – “Our installers are glass specialists with 15+ years experience. We measure twice and cut once for a perfect fit every time.”
“Responsive & Reliable” – “We show up on time and finish on schedule. From first call to final clean-up, you can count on us for professional service.”
“Guaranteed Quality” – “All projects backed by our North Glass Warranty – ensuring your glass stays beautiful and secure (ask us about our 10-year warranty on hardware, for example).”
These points can reflect what City Mirror & Glass highlights (affordable, latest knowledge, experienced, custom designs), adjusted to North Glass’s voice. This section could be an attractive grid or horizontal row with slight animations (icons appear, text fades in).
Process Overview: A timeline or step-by-step graphic explaining how a typical project works – to set expectations and simplify the customer journey. Perhaps 3 or 4 steps (with small illustrations or icons for each):
Measure & Consultation: “We schedule a free in-home consultation to measure your space and discuss your needs.”
Fabrication: “Our team orders or cuts your glass to exact specifications, using quality materials.”
Installation: “Professional installation on your schedule, with careful attention to detail and safety.”
Follow-Up: “We ensure you’re thrilled with the result. Enjoy your new glass feature backed by our warranty.”
(We can condense to 3 by combining consultation/measure). If doing 4 steps, mimic Gatsby Glass’s concept but in simpler terms. Use Framer Motion to animate each step in view with maybe a connecting line graphic.
Featured Projects / Gallery: Show a taste of real work via a few images. This could be a slider or a grid of 3–6 photos. We might label them (“Modern Shower – Cary, NC”, “Storefront – Raleigh, NC”, etc.). If slider, user can swipe/arrow through. Important: ensure images are optimized and not too large. Possibly implement a horizontal scroll gallery (with inertial scroll) for a modern feel. The heading can be “Our Work in Action” or “Project Gallery.” Include a CTA link like “View Full Gallery” that goes to perhaps the Gallery section on services or simply encourages them to check service pages for more.
Example of a frameless glass shower enclosure – a signature residential project that can be featured on the home page to attract homeowners.
Testimonials: Social proof from past clients. Could show one standout testimonial or a carousel of 2-3 short quotes. E.g., ““North Glass did an amazing job on our shower enclosure – professional, on time, and the result is gorgeous. Highly recommend!” – Jane D., Raleigh”. If available, include rating (5 ★★★★★) and name/location. A “Read more reviews” link could go to Google or an internal testimonials page (or simply the About page where more testimonials might reside).
Service Area + Call-to-Action: A section that both shows the geographic area covered and prompts contact. Perhaps a stylized map of the Triangle area (could be a static image with a highlight circle) or just text listing cities served (Raleigh, Durham, Cary, Chapel Hill, Apex, etc.). Accompanying text: “Proudly serving homeowners and businesses across the Triangle.” This reassures locals that North Glass is their local expert. Next to this or below it, a final CTA: “Ready to add beauty & value with custom glass? Get a free quote today!” with a button. Essentially a closing sales pitch. This section helps local SEO by naming cities.
Footer (global but seen on home too): Contains contact info and quick links as described in IA. On the homepage specifically, above the global footer, we might also surface a mini contact form or at least the phone/email boldly one more time (“Have questions? <strong>Call 919-XXX-XXXX</strong> or <strong>email info@northglassnc.com</strong>”).
SEO & Metadata: The home page needs a strong meta title and description: - Title: “North Glass LLC – Glass Shower Doors, Windows, Mirrors | Raleigh-Durham NC”. (~60 chars, includes brand and keywords + location). - Meta Description: “North Glass offers premium residential & commercial glass services in Raleigh, Durham, Cary and the Triangle. Frameless shower doors, window replacement, custom mirrors & more. Call for a free quote!” (~155 chars, highlighting services and CTA). This should entice click-through from Google by mentioning free quote and key services. - Use an H1 on the page (likely the hero headline as above). We might also have H2 headings for sections like “Residential & Commercial Services”, “Why Choose Us”, “Our Process”, “Gallery”, etc., which will naturally include keywords like “glass services” and support SEO. - Include Schema.org markup: - WebSite and Organization/LocalBusiness JSON-LD (site-wide perhaps in head or via Tag Manager) with North Glass details (see SEO section for specifics). - BreadcrumbList markup (Home as entry, but on Home itself it’s just one item, which is fine). - We can also include FAQPage markup on home if we decide to put a short FAQ accordion on home. Possibly not needed if FAQ are on service pages.
Content/Copy (sample highlights): Below are some sample lines to illustrate tone (these are not final copy but give direction): - Headline: “Clearly Better Glass Solutions for Your Home or Business.” - Subtext: “North Glass brings you the finest in custom glass – from sleek frameless showers to modern storefronts – with craftsmanship you can trust in the Raleigh-Durham area.” - Value point: “Locally Trusted:” “Our team has over 20 years’ experience making homes and businesses shine. We’re the Triangle’s glass experts who get it right the first time.” - CTA text: “Get Your Free Quote and See the North Glass Difference”
We should avoid too lengthy paragraphs on home; use concise blurbs and bullet points as in the plan above to cater to quick scanning.

### All Services Page (/services)

Purpose: The “All Services” page is a central index for everything North Glass offers, which aids both user navigation and SEO (capturing broad queries like “glass services Raleigh”). It should present an authoritative list of services in a structured, user-friendly way. This page ensures no service gets “lost” and lets users see the breadth at a glance.
Layout: Likely a simple page with a header, list of services, and maybe brief descriptions. Key elements: - Introduction: H1 title like “Our Glass Services” or “Residential & Commercial Glass Services”. A short intro paragraph can mention: “North Glass LLC provides end-to-end custom glass solutions for both homes and businesses. Explore our range of services below. Not sure what you need? Contact us for a free consultation and we’ll guide you to the right solution.” This helps users decide and also packs in keywords. - Services List: We will group by category: - Residential Services: A subheader H2 for residential. Underneath, list each as either a linked title + a one-sentence description, or as cards. - Frameless Glass Shower Doors & Enclosures – “Design and installation of custom frameless shower doors that elevate your bathroom’s style.” - Window Replacement – “Energy-efficient window glass replacement for foggy, broken, or outdated windows in your home.” - Mirrors – “Custom-cut mirrors and mirrored walls to brighten and enlarge any space, from bathrooms to home gyms.” - Sliding Patio Doors – “New or replacement sliding glass doors for patios and decks, offering smooth operation and clear views.” - Window & Door Screens – “Screen repair and fabrication for windows, screen doors, and porches – keep the bugs out with perfect fit screens.” - Glass Table Tops & Shelves – “Protective glass tops for furniture and custom glass shelving – cut to size for a flawless finish.” - Commercial Services: H2 for commercial. Then: - Glass Office Doors & Partitions – “Interior glass solutions for offices, including conference room walls, glass office fronts, and doors.” - Staircase Glass Railings – “Sturdy, code-compliant glass railing systems for staircases, balconies, and landings in commercial spaces.” - Commercial Storefronts – “Storefront glass installation and door repair for retail shops, offices, and buildings – make a great first impression.”
These descriptions should remain brief (one line) on the index but enough to clarify. Each title will link to the respective detailed page for more info.
We might visually differentiate residential vs commercial sections. For example, use a light blue background for residential section and light grey for commercial, or some iconography (house icon vs building icon near the headings).
CTA at bottom: After listing all services, include a call-out: “Not seeing a specific glass project? We likely do that too.  to discuss your needs – we love custom jobs!” This catches any niche requests (like say someone needs a glass backsplash or art installation – not listed explicitly, but we can capture via that encouragement). Also include a “Get a Quote” button here as they might have decided on a service and want to proceed.
Navigation Aid: This page itself is accessible via top nav “All Services”. Additionally, from this page’s intro we can encourage: “Choose a category: Residential or Commercial” with anchor links to each section (like a mini TOC at top). E.g., small tabs or just text links “Jump to: Residential Services | Commercial Services”.
SEO Considerations: The H1 “Glass Services in [Area]” could be beneficial. Perhaps title it “Glass Services in Raleigh, Durham, Cary – Our Offerings”. The meta title for this page: “All Glass Services | North Glass – Showers, Windows, Commercial & More”. Meta description can be something like: “Explore all residential and commercial glass services offered by North Glass: shower doors, window replacement, mirrors, storefront glass, office partitions, and more in the Raleigh NC area.”
This page will likely internally link to all service detail pages (improving crawl and link equity distribution). Each link will use descriptive anchor text (as listed). We should also mark up the list with Schema.org ItemList or simply rely on the Service pages to have their own schema (the SEO plan suggests marking each service page with Service schema).
Content: The descriptions above serve as the starter text. They should be written to include both the service and a value proposition. Avoid duplicate content – these lines should be a summary whereas the service pages will have expanded content. We might also list approximate turnaround times or other key selling points if short enough. However, brevity is key here.
Example bullet on page: - Frameless Glass Shower Doors & Enclosures – Sleek, custom-fit frameless showers that enhance your bathroom’s elegance while containing water effectively. (Link to service page)
This gives the user a quick idea and invites clicking for more.

### Service Detail Page – Frameless Glass Shower Doors (/services/frameless-glass-shower-doors)

(Frameless shower enclosures is a flagship residential service, so this page should be particularly robust.)
Purpose: To persuade a homeowner considering a new shower enclosure that North Glass is the best choice. It should educate briefly on options (frameless vs semi-frameless?), show off photos of beautiful installations, address common questions (cost, maintenance, lead time), and drive the user to request a quote for their bathroom. This page also targets the SEO keyword “frameless glass shower doors [location]”.
Hero/Header: Use a hero image specific to this service – e.g., a showcase photo of a recent frameless glass shower install in a luxurious bathroom. A possible H1 title: “Frameless Glass Shower Doors in Raleigh-Durham” (includes location for SEO). Subheading: “Custom shower enclosures that add luxury and light to your bathroom.” CTA in hero: “Get a Free Estimate” button that scrolls to/contact form or opens Quote form.
Sections:
Overview Description: A couple of short paragraphs introducing the service:
Emphasize how frameless showers enhance aesthetic (no bulky frame, modern look), are custom-fit, and increase home value.
Mention North Glass’s expertise: e.g., “North Glass is the Triangle’s premier installer of custom-fit glass shower enclosures, known for meticulous installation and top-quality tempered glass.” (This line echoes Glass Depots phrasing but in our own voice.)
Possibly mention options: “Whether you want a sleek single-panel door or a full enclosure with return panels, we measure and install to your specifications.”
If applicable, mention hardware: “Choose from chrome, brushed nickel or matte black hinges and handles to match your style.” (This shows customization breadth.)
Guarantee: “Our shower glass is 3/8” or 1/2” tempered safety glass, with protective coating available to resist spots.”
Gallery/Examples: A section with 3-4 photos of frameless showers North Glass has installed (or stock if needed early on). Could be a slider or grid. Each image might have a brief caption: “Frameless corner shower in Cary, NC”, “Spa-style enclosure with black hardware”. Consider a before/after slider here if we have an example of an old framed shower vs new frameless – that visual difference can be compelling. If available, include that component (“Slide to see the transformation”). This engages users and keeps them on page.
Benefits/Why Frameless (could be stylized bullets or icons): Highlight why someone would want this and why choose North Glass for it:
“🛁 Elevates Your Bathroom: Frameless glass creates a spacious, modern feel – no visual obstructions, just clear openness.”
“💧 Custom Fit, No Leaks: We measure precisely and use quality seals to ensure water stays where it should despite the lack of frame.”
“🔧 Expert Installation: Our team has installed hundreds of shower enclosures; we handle tricky angles and out-of-plumb walls with expertise.”
“🛡️ Easy Maintenance: Ask about our water-repellant glass coating for easier cleaning – keep your shower sparkling with minimal effort.”
“🏷️ Competitive Pricing: Enjoy the elegance of a frameless shower at a fair price – we provide upfront quotes with no hidden costs.”
Process (specific to shower projects): Could reiterate steps in context of a shower: “From design to install: 1) On-site measurement and consultation, 2) Custom fabrication of glass panels (approx 1-2 weeks), 3) Professional installation in a day, 4) Follow-up to ensure satisfaction.” This sets expectations e.g. timeline.
FAQs: An accordion of 2-3 frequently asked questions about shower doors. For example:
“What’s the difference between frameless and semi-frameless shower doors?” – Answer: Frameless have no metal around the glass edges; semi-frameless might have metal on one edge or sliding door frame. Frameless offers the cleanest look but requires thicker glass.
“How much do frameless shower enclosures cost?” – Answer: Cost varies by size and hardware options; most projects fall in $X–$Y range for a typical bathroom. Emphasize free consultation for exact quote.
“Do frameless doors leak?” – Answer: When properly installed, frameless enclosures are designed with minimal gaps and seals to prevent leaks. We ensure a proper slope on curbs and use seals as needed – so leakage is not an issue in normal use.
Mark these up with FAQ schema potentially. Keep answers concise but reassuring.
Call-to-Action Banner: At bottom: “Ready to transform your bathroom with a custom glass shower?” followed by a Request a Quote button. Also list contact info for those who prefer: e.g. “Or call us at 919-XXX-XXXX to discuss your ideas.”
CTAs on this page: Primary is Request a Quote. Possibly a secondary like “View Gallery” (if we have a separate gallery page) or “See also: Mirrors for your bathroom” to cross-sell mirror service.
SEO: - Meta Title: “Frameless Shower Doors Raleigh NC | Custom Glass Showers – North Glass”. (Include city for local SEO). - Meta Description: “Custom frameless glass shower door installation in Raleigh, Durham, Cary. Modernize your bathroom with clear, elegant glass enclosures. North Glass offers expert installation, quality tempered glass, and free estimates.” (~155 chars) - H1 is the service name + location as given. Use H2s for sections like “Why Choose Frameless”, “Our Shower Projects”, etc. Include synonyms in content (e.g., shower enclosures, glass shower stalls). - Add Service schema:
{
  "@type": "Service",
  "name": "Frameless Glass Shower Door Installation",
  "category": "Residential Glass Service",
  "areaServed": { "@type": "AreaServed", "name": "Raleigh-Durham-Cary, NC" },
  "provider": { "@type": "LocalBusiness", "name": "North Glass LLC", "telephone": "919-XXX-XXXX", "areaServed": "NC Triangle" },
  "url": "<https://northglassnc.com/services/frameless-glass-shower-doors>",
  "image": "<https://northglassnc.com/images/shower-example.jpg>",
  "description": "Custom frameless shower door design and installation for bathrooms in Raleigh, Durham, Cary. Includes measurement, glass fabrication, and expert installation."
}
(Exact schema to refine in development, but this provides search engines data about the service offered.)
Copy Draft Snippet: “Bring Your Dream Shower to Life. Tired of that old metal-framed shower? Upgrade to a sleek frameless glass enclosure that showcases your tile and opens up your space. North Glass specializes in custom frameless shower doors – measured precisely for your bathroom and installed by our seasoned professionals. We handle everything from design to waterproof installation, so you can enjoy a spa-like shower experience at home. Our tempered safety glass and premium hardware ensure lasting quality. Discover how a frameless shower can transform your bathroom’s look and value.”
This text (which can be refined by copywriter) hits the pain point (old framed shower), presents the frameless as solution, and plugs North Glass’s role and quality.
(We will produce similar structure for each service page, focusing on that service’s unique selling points. For brevity, the remaining service pages specs will be slightly summarized but should follow this template.)

### Service Detail Page – Window Replacement (/services/window-replacement)

Purpose: Convince homeowners needing window glass replacement (foggy/broken double-pane glass, or upgrading single-pane to double-pane) that North Glass offers quick, quality window services. Emphasize energy savings, improved clarity, and our efficiency in installation.
Content Highlights: - Hero: Image of a beautiful home window with clear glass looking outside. H1: “Window Glass Replacement in Raleigh & Cary” (for SEO). Subtext: “Crystal clear views and better efficiency – we replace broken or foggy windows fast.” - Overview: Note that we replace residential window panes and patio door glass (if frame is intact) and can upgrade to Low-E insulated glass etc. Mention eliminating condensation in double-pane windows. If we do full window units, mention that too. - Benefits: Bullets like “Improve Energy Efficiency (cut drafts and save on bills)”, “Enhance Curb Appeal (clear glass, no fog or cracks)”, “Fast Turnaround (many standard sizes in stock, quick ordering)”, “Professional Installation (we ensure a snug fit and proper seals)”. - Before/After: If possible, show a before (foggy failed seal window) vs after (clear new IGU pane) using slider. - FAQ examples: - “Can you replace just the glass without replacing the whole window?” – Yes, often we can replace the insulated glass unit within the frame. - “How long does window glass replacement take?” – Small jobs often completed in one visit if glass is available; otherwise 1-2 weeks ordering for custom sizes. - “Do you offer different glass types (Low-E, tempered)?” – Yes, we match or upgrade your glass type as needed (tempered for doors, Low-E for efficiency, etc.). - SEO Meta: Title “Window Replacement & Glass Repair – Raleigh NC | North Glass”, description to mention foggy double-pane repair, broken glass replacement, quick service in area.

### Service Detail Page – Mirrors & Mirrored Walls (/services/mirrors)

Purpose: Appeal to homeowners (or gyms, dance studios) looking for custom mirrors. Emphasize custom sizing, professional mounting, and the aesthetic/spatial benefits.
Highlights: - Hero: Photo of an elegant vanity with a custom-cut mirror, or a living room with a large mirror. H1: “Custom Mirrors & Mirrored Walls in [Triangle Area]”. - Copy: “From bathroom vanity mirrors to floor-to-ceiling mirrored walls, North Glass crafts and installs mirrors that make spaces feel brighter and bigger. We cut mirrors to any size and shape (even cutouts for outlets or lights) and offer various tints or antique finishes if desired.” - Specialties: Gym or dance studio mirrors (large wall spans), mirrored backsplashes or closet doors, decorative mirrors. Mention safety backing for large mirrors (so if broken it holds). - Images: Examples of installed mirrors (maybe a before/after of a small room that got a wall mirror). - FAQ: - “How are mirrors mounted?” – We use sturdy wall fasteners, often a combination of adhesive and decorative clips or a metal frame, depending on size and style. - “Can you cut a mirror to fit my frame/space exactly?” – Absolutely, we custom cut to template or measurements. - CTA: “Reflect your style – request a custom mirror quote.”

### Service Detail Page – Sliding Glass Patio Doors (/services/sliding-glass-patio-doors)

Purpose: Inform about installing new sliding patio doors or replacing glass panels in existing sliders. Key points: smooth operation, security, energy efficiency.
Highlights: - Hero: Image of a living room with patio doors opening to a deck/garden. H1: “Sliding Glass Patio Doors – Installation & Replacement”. - Content: “North Glass supplies and installs top-quality sliding glass doors that bring the outdoors in. Whether you need to replace a fogged patio door glass or want a brand new sliding door unit, we offer options with tempered safety glass and secure locking systems.” - Discuss features: dual-pane low-E glass for efficiency, easy-glide rollers, sturdy frames (if we provide full door/frame vs just glass). - If replacing just glass in an existing frame is offered, clarify that. If not, focus on full door replacements. - Benefits: “Expand your view, improve access to your patio, and increase natural light.” - FAQ: “Do you handle the frame or just the glass?” – If full unit, yes including frame; if just glass, we can often replace panels but if frame is damaged, full unit might be recommended. “Are your doors energy-efficient?” – Yes, we use insulated glass and quality seals. “Can I get blinds between the glass?” – Possibly mention if available (integral blinds). - SEO: meta mention “patio door replacement Raleigh”.

### Service Detail Page – Window & Door Screens (/services/window-and-door-screens)

Purpose: Let customers know we also handle screens (often an upsell with window jobs or a separate niche). Focus on keeping bugs out while letting breeze in, and custom fitting.
Highlights: - Hero: Perhaps image of a porch or window with a fine mesh screen visible. H1: “Window and Door Screen Repair/Replacement”. - Copy: “North Glass doesn’t just do glass – we also build and fix window screens and screen doors. Torn screen? We’ll re-screen it with durable mesh. Need a new custom screen (for an odd-sized window, arch, or porch)? We fabricate to fit.” - Mention types of mesh (standard fiberglass, aluminum, pet-resistant screens, etc.) if relevant. Also mention screen porch panels if that’s something offered. - Benefits: “Enjoy fresh air without the pests”, “Custom-made screens for any frame”, “Quick repairs – drop off your screens or have us measure on-site.” - CTA: maybe “Ask about our screen repair when you replace your windows – it’s the perfect finishing touch.” - SEO: ensure “window screen installation Cary, screen repair Raleigh” keywords naturally in text.

### Service Detail Page – Glass Table Tops & Shelves (/services/glass-table-tops-and-shelves)

Purpose: Highlight custom glass cutting for furniture protection and decor. Audience: interior decorators, homeowners with furniture to protect or display.
Highlights: - Hero: Photo of a nice coffee table with a glass top, or glass shelves displaying items. H1: “Custom Glass Table Tops and Shelves”. - Content: “Protect your furniture or display your collectibles with custom-cut glass. North Glass creates glass table top protectors for wood furniture, glass inserts for cabinet doors, and floating glass shelves that add a modern touch.” - Emphasize precise cutting (we can template the shape of an antique table for example), edge finishes (polished, beveled edges available), and safety glass (tempered for shelves especially). - Mention typical thickness (e.g., 1/4" for small tops, 3/8" for larger tables). - FAQ: “Will a glass top protect from heat?” – It will protect from scratches and spills, but extreme heat can still crack glass, use trivets. “Can you make oval/round glass?” – Yes, any shape via custom cutting. - This page also appeals to small businesses (e.g., restaurants might want glass tops on tables, etc.), so could mention those use-cases.

### Service Detail Page – Glass Office Doors & Partitions (/services/glass-office-doors)

Purpose: Speak to commercial clients (office managers, interior buildout contractors). Sell the idea of modernizing an office with glass walls/doors for light and openness.
Highlights: - Hero: Photo of a modern office interior with glass conference room walls or an office entrance with glass double doors. H1: “Glass Office Doors & Partitions”. - Content: “North Glass helps businesses create open, collaborative spaces with custom glass office fronts, conference room enclosures, and interior glass doors. Impress clients and give your workplace an modern, transparent feel.” - Cover types: frameless glass conference room walls, glass door options (swing doors with floor closers, sliding glass office doors), frosted or etched glass for privacy where needed (we can provide decorative film if not actual etched). - Emphasize we ensure safety (tempered or laminated glass per code). - Case snippet: If possible, mention a local company we did (or hypothetical: “We installed floor-to-ceiling glass walls for a Durham tech startup’s new office – making the space feel twice as big.”). - CTA: likely “Contact us for a free on-site consultation” rather than just quote, since commercial might want a bit more discussion.

### Service Detail Page – Staircase Glass Railings (/services/staircase-glass-railings)

Purpose: Attract both upscale homeowners and commercial property owners (like hotels, offices, retail) who want sleek glass railing systems. Emphasize design and safety.
Highlights: - Hero: Image of a staircase with side-mounted glass panels as railing, or a balcony overlook with glass balustrade. H1: “Staircase Glass Railings & Balustrades”. - Content: “Enjoy unobstructed views and a contemporary look with glass railings. North Glass designs and installs glass railing systems for stairs, balconies, decks, and mezzanines – meeting safety codes while looking stunning.” - Mention we use thick tempered or laminated glass panels, secure mounting (either clamps, posts, or channel systems), and can include handrails as needed. Note compliance with building codes (important for commercial clients; can mention things like we adhere to IRC/IBC load requirements). - Possibly mention both interior (stairs inside an office or home) and exterior (deck railings with glass). - Benefits: No visual barrier, makes spaces feel larger, windbreak for exterior without blocking view, easy to clean, durable. - If we have one, include a project example: e.g., “We recently completed a glass railing install in a Cary residence – replacing wooden spindles with clear glass for a sleek update.” - CTA: “Elevate your property’s design – request a consultation for glass railings.”

### Service Detail Page – Commercial Storefronts (/services/commercial-storefronts)

Purpose: Appeal to retail and commercial building owners or general contractors needing storefront glass systems or replacements. Focus on quick service (for repairs) and quality (for new installations).
Highlights: - Hero: Photo of a retail storefront with large display windows and glass door, possibly a downtown shop or strip-mall store. H1: “Commercial Storefront Glass & Door Services”. - Content: “Make a great first impression with a pristine glass storefront. North Glass provides comprehensive storefront solutions: new storefront installations, replacement of broken storefront glass panels, and door repair (including door closers and hardware).” - Emphasize we know businesses need timely service – “We offer expedited service for emergency board-up and glass replacement to secure your premises” (if true). - Mention types of glass (like tempered safety glass is a must for storefronts, optional laminated for extra security). - We can mention also entrance systems (storefront aluminum framing, if we do that). - Case/Stat: If possible, say “Serviced numerous local businesses from cafes to offices – whether it’s a single door glass swap or an entire facade.” - CTA: “For 24/7 emergency glass repair, call us immediately at ...” (if we offer that) otherwise “Request a quote for your storefront project or repair.” Perhaps have both a “Request Quote” and a “Call Now” if emergency service is a selling point (Glass Doctor style conversion focus for commercial). - SEO: Title “Commercial Storefront Glass – Installation & Repair in Raleigh NC”, description highlight fast repairs and quality installs.
Note: The Commercial pages (Office Doors, Railings, Storefronts) might also be accessed via a general “Commercial Glass Services” page or section, but since each is separate, linking between them and possibly having a “Commercial Services” overview is key. Perhaps on each, have a sidebar or bottom list of other commercial services (so a property manager sees everything we can do for them). For instance, on Storefront page: “Also see: Office Glass Doors, Glass Railings for interiors”.
All service pages will include a consistent Related Services component at the bottom (like “Related Services: [list 2-3, linking to those pages]”) to encourage cross-navigation.

### About Page (/about)

Purpose: Tell North Glass’s story, establish credibility (experience, qualifications), and personalize the brand (maybe introduce the team or founder). Also list practical info like service areas and any affiliations or awards. The About page often helps convert those who are on the fence by building trust.
Main Content & Sections:
Hero/Title: Could use a banner image of the team or a workshop or a nice generic glass image with the company name overlay. Title: “About North Glass” or “Who We Are”. Subheading example: “Proudly serving the Triangle with quality glass craftsmanship and customer-focused service.”
Company Mission/Story: A paragraph or two about how and why the company was founded. If we have a founding year or combined experience: “North Glass LLC was founded in 2025 with a simple mission: bring high-end glass solutions to local homeowners and businesses with a personal touch. Our team carries over 30 years of combined experience in the glass and glazing industry, and we’re passionate about what we do.” Could mention origins: e.g., “Our founder, John Doe, saw a need for a local glass company that could handle jobs big and small – from a single broken window to entire office façades – with the same level of care and quality.”
Values & Differentiators: Possibly a list of core values or principles (could be icon + text format):
Quality First: “We use only top-grade materials and never cut corners. Every installation is handled as if it were in our own home.”
Customer Focus: “Your satisfaction is our priority. We listen to your needs and ensure you’re happy at every step – from initial consult to final cleanup.”
Reliability: “We show up on time and finish on schedule. North Glass is fully licensed and insured, and our work is backed by strong warranties.”
Innovation: “We stay updated on the latest glass technologies (smart glass, energy-efficient coatings) to offer you the best solutions available.”
Team Introduction: If the team is small, we could have short bios or at least introduce key people like the owner or lead installer. For example: “John Doe – Owner & Lead Glazier. John has 15 years experience...” etc. Perhaps include a group photo or individual headshots (with consent). This personalizes the company (important for local business).
Service Area / Showroom: If North Glass has a physical location (shop or showroom) mention it: address, and an invitation: “Visit our showroom to see samples of glass and hardware.” If not, focus on service area: “Based in Raleigh, we proudly serve the entire Triangle area including Raleigh, Durham, Cary, Chapel Hill, Apex, Garner, and surrounding communities.” This can be accompanied by a simple map graphic highlighting those cities.
Stats or Achievements: Could include a small section with numbers like:
“500+ projects completed in the Triangle”
“100% satisfaction guarantee” or “50+ 5-star reviews on Google” (assuming we’ll accumulate reviews; this can be aspirational or updated later)
“10-year warranty on all installations” (if that’s a policy)
“Members of [Glass Association]/BBB A+” etc.
Testimonial or Quote: The About page is a good place to include a particularly glowing testimonial or a business client endorsement to reinforce credibility.
Careers (if relevant): If the company is hiring or expects growth, a note like “Interested in joining our team? Contact us at ...” could be there. Not a priority unless needed.
Call to Action: Even on the About page, encourage action at the end: “Ready to work with a glass company you can trust? [Request a Free Quote] or call us today. We look forward to serving you.”
SEO: - Title tag: “About Us – North Glass | Raleigh-Durham Glass Experts”. - Meta desc: “North Glass LLC is a local, family-owned glass services company serving Raleigh, Durham, Cary, NC. Learn about our team’s 30+ years of experience, our values, and our commitment to quality craftsmanship and customer service.” - Include structured data Organization or LocalBusiness (with sameAs links to social profiles if any). - Content should mention location and services in context to reinforce SEO (as in the examples above, mention local area).
Tone: Warm and personable, yet still professional. Use “we” to speak for the company, and sometimes “you” to connect with the customer (e.g., “so you get exactly what you envisioned”). The About page is an opportunity to build a relationship with the site visitor.

### Blog Index Page (/blog)

Purpose: The blog will be a collection of articles that drive additional traffic (SEO for long-tail queries, e.g., “benefits of low-e glass raleigh”) and demonstrate expertise. It also provides useful info to customers (educational content can build trust). The index page should make it easy to find and browse posts.
Layout: - Header: Title “Blog” or something more descriptive like “Glass Tips & Insights”. Possibly a short intro paragraph: “Welcome to the North Glass blog, where we share expert tips, how-tos, and inspiration for all things glass – from choosing the right shower door to maintaining your windows.” - Posts List: A reverse chronological list of blog posts. Each entry shows: - Post Title (as link to the post) - Date - A featured image thumbnail (if we have one per post) or a placeholder icon - A short excerpt or summary (~1-2 sentences)
We could format these as cards in a grid (2 columns on desktop, 1 on mobile) or a simple vertical list with image on left, text on right. - Possibly Categories or Tags: If we categorize content (e.g., “Residential Tips”, “Commercial Insights”, “How-To Guides”), list those filters on the side or top. But since we may start with ~10-15 planned posts, simple is fine. We can add tag filtering later if needed. - Pagination: If posts exceed, say, 10 per page, include pagination controls or infinite scroll. Initially with few posts, not needed.
CTA on Blog page: At bottom or sidebar, remind reader of services: e.g., a banner “Need help with a glass project? Contact North Glass for a free quote.” This ensures even info-seekers have a path to conversion.
SEO: - Title: “North Glass Blog – Glass Tips, Home Improvement Guides, and Company News”. - Meta Description: “Browse glass and mirror tips, home improvement guides, and the latest news from North Glass. Our experts share insights on shower doors, window replacements, glass care, and more for homeowners and businesses in Raleigh, NC.” - Ensure blog page has a listing that search engines can crawl all posts. - Possibly use BlogPosting or ItemList schema, but that might be overkill; focusing on each post’s SEO is more important.
Content Strategy: (As per the SEO plan, we have ideas like “Frameless vs framed shower doors in Raleigh homes” etc – those would be individual post topics.) The index just aggregates. We might show the 3 most recent posts prominently and older ones in an archive list.

### Blog Post Template (/blog/{slug})

Purpose: Each blog post provides valuable content on a specific topic, helping SEO and educating potential customers. It should also subtly market North Glass’s services in context (without being too salesy).
Layout: - Title & Meta: The blog post title (H1) should be descriptive and include keywords (and maybe locale if relevant). E.g., “Frameless vs. Framed Shower Doors: Which is Best for Your Bathroom?”. - Date and Author: Display date and optionally author name (could be “North Glass Team” or a specific staff if we want to personalize). Possibly an author bio at bottom if desired. - Hero image: A relevant header image (optional but adds visual appeal). Could be same as featured thumbnail. - Content Body: Rich text with headings (H2, H3), images or diagrams, and maybe bullet lists, etc. Ensure to include internal links within content where appropriate (e.g., an article about shower doors should link to our Shower Doors service page or reference “as we offer with our custom installations”). - Callouts: We can highlight key tips or definitions in blockquotes or info boxes for scanning. - Possibly include an FAQ if the post lends itself to Q&A format. - Conclusion CTA: At the end of the article, have a section like: “Need Help with [Topic]? If you’re considering a new shower door, North Glass is here to help.  or call us to discuss your project.” This gently converts a reader to a lead if the content has primed them. - Sidebar: If design allows, a sidebar could show other recent posts or a contact teaser. On mobile this would stack below content.
SEO & Schema: - Use Article or BlogPosting schema JSON-LD including headline, author, datePublished, image, etc. - Meta Title for post (often same as title of article, plus “| North Glass Blog” suffix). - Meta Description: summary of the intro of the post. - Ensure proper use of headings and maybe include Q&A schema if we explicitly have Q&A in content.
Example blog topics (as given in SEO plan): We intend posts like: - “Frameless vs. Framed Shower Doors: Pros and Cons in a Raleigh Home” - “Top 5 Window Replacement Tips for NC Homeowners” - “How to Clean and Maintain Your Glass Shower Enclosure” - “Benefits of Low-E Glass in North Carolina’s Climate” - “Commercial Glass: Enhancing Your Storefront Appeal” - “Mirrors as Design Elements: Ideas for Your Home” - etc.
Each post should be at least ~800+ words (for SEO depth), include images if possible, and be well-structured.

### Contact Page (/contact)

Purpose: Provide all the ways a customer can reach North Glass and allow them to send a quick inquiry. Some people prefer direct communication vs filling the detailed quote form, so this page should be welcoming and straightforward.
Content & Layout: - Header: Title “Contact Us”. Possibly subtext: “We’re here to answer your questions or schedule a free estimate.” - Contact Information: List the key contact details prominently: - Phone: “Phone: "+1 (984) 900-6201"”. This should be a clickable link on mobile that triggers a call. Possibly label “Call or Text” if texting is an option. - Email: “Email: <info@northglassnc.com>”. Clickable mailto link. - Address: If we have an office or showroom location, list it: “1234 Glass St, Raleigh, NC 27601”. Possibly embed a Google Map below or an image of a map. If no public location, we might omit this or just say “Based in Raleigh, NC – serving the Triangle” without a full address. - Hours: If we have official business hours (e.g., Mon-Fri 8am-5pm), list them so people know when they can expect a response or visit. - Service Area: Reiterate service area coverage if not a specific address. Could say “We come to you anywhere in Raleigh, Durham, Cary, and nearby areas.” - Contact Form: A simple form for general inquiries (distinct from the detailed quote form). Fields: - Name, Email, Phone, Message textbox. Possibly a dropdown for “How can we help?” if we want (or subject, like “New Project Inquiry, Question, etc.”). - If needed: a checkbox for mailing list or just a consent “You agree to our privacy policy”. - This form, when submitted, can go to the same backend as quote form, but flagged as general contact. A thank-you message or redirect to a thank-you page. - Map (optional): If a physical location, an embedded Google Map showing the location for credibility. If not, perhaps a static image indicating the region or simply skip map. - Social Media: If North Glass has social profiles (Facebook, Instagram), include icons/links saying “Connect with us on [FB] and [IG]” – often in footer anyway, but contact page is another logical spot. - CTA: Encourage: “Prefer email or phone? Feel free to call during business hours or drop an email anytime. We typically respond within one business day.” - Possibly an FAQ snippet: sometimes contact pages include quick answers like “Q: What areas do you serve? A: [list]” but we might skip if covered elsewhere.
SEO: - Title: “Contact North Glass | Get a Free Glass Service Estimate”. - Meta desc: “Contact North Glass for a free estimate or with any questions. Call 919-XXX-XXXX, email <info@northglassnc.com>, or send us a message. We serve Raleigh, Durham, Cary and the NC Triangle area.” - Include NAP information in schema (LocalBusiness markup) on this page explicitly (address, geo coords if available, etc.), as Google often looks at contact pages for confirming local info. - Also, this page can rank for “North Glass contact” but more importantly provides the info for Google’s knowledge panel (especially if we link it with GMB).

### Request a Quote Page (/request-quote)

Purpose: This is the dedicated page for the primary conversion – requesting a detailed quote/estimate. It should capture all info needed for the North Glass team to follow up effectively, while not overwhelming the user. We already described the multi-step flow; here we'll outline the page itself.
Header/Intro: Title “Request a Free Quote” (H1). A short encouraging blurb: “Ready to start your glass project? Tell us a bit about what you need and we’ll provide a free, no-obligation estimate. North Glass typically responds within one business day.” Perhaps also note: “Prefer to talk now? Call 919-XXX-XXXX.” (So impatient users might call instead.)
Quote Form: Ideally, this could be a multi-step form for user experience: - Step 1: Contact Info – Fields: Name, Email, Phone. (We can mark phone optional but encourage, as it’s useful for quick scheduling. Email required.) - Step 2: Project Details – Fields: - Service Type: a dropdown or checkbox list of categories (matching our services list). E.g., Shower Enclosure, Windows, Mirrors, Storefront, Other (with text box). - Location/Address: (Optional) We might ask for ZIP code at minimum to verify they are in service area. Or full address if applicable (especially if we might go measure). - Description: A large text box “Project Details – please describe what you need” (for them to explain e.g., “I have 2 foggy windows to replace” or “looking to install new shower door”). - Photos: File upload input for images (optional). Allow multiple images (limit maybe 3-5). This is useful if someone can show their existing setup or broken glass. We’ll note allowed types (jpg, png, pdf) and size limit (maybe 10MB each). (Implement via a file upload handling – possibly as base64 in email or a storage link). - Possibly a date picker if they want to request an appointment date, but better to just collect info and we’ll schedule later. - Step 3: Confirmation – If multi-step, final step could just display “Submit” button with a summary of info or just directly on step 2 after filling details, the Submit occurs.
If single-page form (no steps), just arrange fields logically in groups with maybe headings. But multi-step is nicer UX for lengthy forms.
Spam Prevention: Include a hidden honeypot field (like an additional text input hidden via CSS which humans won’t fill, but bots might – we detect and drop those submissions). Possibly integrate hCaptcha or Cloudflare Turnstile widget to filter automated spam, especially if form is publicly accessible (we’ll likely do one of these since they’re user-friendly and free). Mention in PRD: ensure adding one of these if spam becomes an issue.
Upon Submit: The user sees either an inline success message: “Thank you! Your request has been sent. An experienced glass specialist will be in touch within 48 hours to discuss your project.” Or we redirect to a separate Thank You page (/thank-you or show a modal). For simplicity, possibly an inline on the same page without navigation away (just hide form, show message).
We also mention that they’ll get a confirmation email (so they know to check email and that we have their info).
Email Response (not on page but part of UX): The system sends an email to the customer’s provided email. It should thank them and list their submission details briefly, and say we’ll contact them soon. This assures them it went through. (This integration detail can be mentioned in assumptions.)
Design Considerations: The form should be mobile-friendly (use proper input types, e.g. type="tel" for phone, type="email" for email for mobile keyboard optimization). Labels and placeholders should be clear. Possibly use a multi-step progress indicator if steps (like 1 of 2, etc.). Use field validation – e.g., required fields marked, and show friendly error if missing or email invalid. Keep the form visually shorter by maybe two-column layout for name/email on desktop, single column on mobile.
CTAs: The main CTA is the submit button labeled in a friendly way, e.g., “Request Quote” or “Submit Request”. A secondary CTA on this page could be a phone number call link for those who change their mind and want instant contact: maybe a side-box: “Or call us now at 919-XXX-XXXX for immediate assistance.”
SEO: - Title: “Request a Free Quote | North Glass”. (This page isn’t for search ranking, but ensure title exists.) - We might opt to noindex this page if we don’t want random traffic landing here without context, but it’s fine if it indexes – maybe someone searches “North Glass quote” etc. - It doesn’t need heavy content since it’s functional. Just ensure it loads fast and works.
Note: If we anticipate heavy mobile usage, we might consider a simpler form (e.g., Name, phone, service type, that’s it) and then reach out for details, but the above is standard to get enough info.
Privacy Compliance: At bottom of form, include something like “We respect your privacy. Your info will only be used to contact you about your request. [Link to Privacy Policy].” Possibly a required checkbox “I consent to having North Glass collect my details via this form.” (Though under GDPR that’s more needed if sending to external, but safe to include if targeting broad audience.)

With all pages detailed, the next sections will define components, visual/motion design specifics, and other cross-page requirements.

## Component Inventory (Design System)

Below is a list of key UI components/modules that will be used throughout the site, with specifications for their behavior, props (content inputs), responsive considerations, accessibility (a11y) requirements, and any motion/animation notes. By standardizing these components, development will be more efficient and the design will remain consistent.

1. Header & Navigation:

- Description: The site header with company logo, navigation menu (desktop: horizontal links; mobile: hamburger to drawer menu), and the primary CTA button (“Request a Quote”). It’s sticky – remains at top on scroll (perhaps after a certain scroll offset, it can condense in height slightly). - Content/Props: - Logo (image or text). - Nav links structure (as defined in IA: an array of { name, href, submenu? } objects). Submenu for Residential contains links to each service, same for Commercial. - CTA Button label and link (e.g., “Request a Quote” -> /request-quote). - Behavior: - On desktop, submenus appear on hover or focus of parent (Residential/Commercial). Could be a dropdown panel (CSS or minimal JS). - On mobile, clicking hamburger (☰) opens a full-screen or overlay menu. The mobile menu likely uses an animated slide-in from left or right. Within it, the Residential and Commercial can either be accordion toggles to show their links (tapping “Residential” reveals its links indented) or simply listed with slight indentations. The menu also includes the CTA as a prominent item (maybe styled as button or high contrast link). - The sticky header should hide or reduce on scroll down (for more screen estate) and show when scrolling up, if possible (nice-to-have). At minimum, it stays fixed. - Responsive: - Desktop (>= md breakpoint): Show full menu as bar. Possibly center or right align links, with CTA as distinct button on far right. - Mobile (< md): Show only logo + hamburger + maybe CTA (though CTA could be in hamburger to avoid clutter). - Ensure the sticky header doesn’t cover content when in-view (we might add top padding to pages equal to header height). - A11y: - The navigation must be keyboard navigable. For dropdown: parent menu items should be focusable and either clickable or have aria attributes. Consider using role="menubar" and role="menuitem" semantics. - For mobile drawer, trap focus inside the drawer when open (so tab key doesn’t go to page behind). The hamburger button gets aria-controls="mobile-menu" and aria-expanded toggling. - Provide a “Skip to Content” link as the first focusable element in header (as City Mirror site had), so keyboard users can jump past nav easily. - The logo should be an <img alt="North Glass Logo"> or if text, then styled as needed. If using an image, ensure alt text (company name). - Motion: - Hamburger to X icon morph on mobile open/close (optional nice touch). - Mobile menu slide-in (use Framer Motion or CSS transitions, 300ms ease). - Dropdown fade in for desktop submenus (e.g., 150ms ease, slight translate). - If sticky header condenses on scroll, animate height change smoothly. - Reduced motion: if prefers-reduced-motion, we will disable fancy animations (menu just appears/disappears instantly, etc.).

2. Footer:

- Description: Bottom of every page with site info and quick links. - Content: - NAP: Company Name, Address, Phone, Email in text. - Menu links (could repeat main links: Services (maybe linking to /services), About, Blog, Contact, Request Quote, plus Privacy Policy, Terms). - Social media icons/links (if applicable: Instagram, Facebook). - Possibly a short tagline or mission statement in one sentence. - Copyright notice (© 2025 North Glass LLC). - Design: Likely a 2 or 3-column layout on desktop: e.g., Column1: Contact info, Column2: Menu links, Column3: Service Area or Social links. On mobile, stack these sections. - A11y: Ensure link text is descriptive (no “click here”). Icons have aria-label if they’re just icons for social (“Follow us on Facebook” hidden label). - Responsive: On mobile, everything center-aligned or nicely padded. Links easy to tap. - Motion: Typically static, but could fade in on first load. No complex motion needed. Ensure no layout shift when it loads (design with any webfont or image in mind).

3. Button (Primary and Secondary):

- Description: Reusable button component for CTAs like “Request a Quote”, “Learn More”, etc. - Variants: - Primary: For main actions (e.g., Request Quote). Styled with brand turquoise background, white text, perhaps slight shadow. - Secondary: For secondary actions (maybe an outline style: white or transparent background with teal border and teal text). - Possibly a text-link styled button for lesser emphasis (like in hero if two side by side). - Props: label, href (for link buttons) or onClick (for on-page actions), and variant (primary/secondary). - A11y: - Use proper <button> or <a role="button"> depending on context. - Ensure focus styles (Tailwind can be used to show outline or underline on focus). - Button text should be concise but descriptive of action. - Responsive: Buttons should enlarge slightly on mobile (for easy tap – use at least ~44px height). Possibly full-width on small screens in forms. - Motion: - Hover state: maybe a slight raise or shadow intensify, and color darken for feedback. - Focus state: visible outline to meet contrast (outline offset). - Framer Motion could be used for a subtle springy click effect or while hover scaling (but ensure it’s subtle, not distracting).

4. Service Card:

- Description: A card to represent a service on the Services page or any listing. Contains an icon or image, a title, and a short description. - Props: title, description, icon or image, href. - Design: E.g., a box with light background, icon on top, title (as link) and text. Hover effect to elevate or change bg. - Responsive: In a grid on desktop (3 or 2 columns), stack on mobile. Ensure equal height if possible for neat grid (maybe description length fixed). - A11y: Entire card clickable via wrapping in anchor or at least the title link is obvious. Provide alt text for icon if not purely decorative (if decorative, give aria-hidden="true"). - Motion: - On hover (desktop): raise slightly (translateY -5px) and drop shadow. Smooth 0.3s. - On load, could stagger fade-in of multiple cards in the services list. - Reduced motion: no translate, just simple hover color change.

5. Testimonial Card/Carousel:

- Description: Showcases a customer testimonial with maybe a rating. - Props: quote text, author name, maybe location or role if commercial, rating (number or stars). - Design: Could be a card with quotes icon, the quote text in italic or nice font, and author below. If multiple, we use a carousel or slider to show one at a time. - Carousel Behavior: If we have 2-3 testimonials, auto-rotate every 5-6 seconds, with manual controls (prev/next arrows or dots) that are accessible. - A11y: - If carousel auto-rotates, provide pause control or pause on hover/focus, and follow WAI-ARIA carousel best practices (role region with aria-label "Testimonials"). - Screen readers should be able to read each quote smoothly. Possibly use aria-live polite if auto-rotating content, or simply allow user to flip manually. - Motion: - Fade transition for carousel slides. - Perhaps animate in each quote’s appearance (text fade in, then author). - If not carousel, if showing multiple at once in a grid, just simple fade or pop-in on scroll.

6. Gallery Grid & Carousel:

- Description: A component to display multiple photos. Could be used differently on home vs gallery sections. - Modes: - Grid: static grid of images (with lightbox on click maybe). - Horizontal scroller: a single-row gallery that user can scroll (with inertia, like a filmstrip). - Carousel/Slider: one image at a time, with arrows to navigate. - Props: - Array of images (each with src, alt, maybe caption). - Mode (grid, slider, etc). - Design: - In grid mode, use CSS grid to arrange. Captions could overlay or show on hover. - In slider mode, images can be full width or fixed height. Provide arrows (prev/next). - Horizontal scroll mode: we can allow swipe on mobile, with maybe partial next image peeking on desktop to hint. - A11y: - If images convey info, use alt text describing the project (“Modern frameless shower door installation” etc.). If purely decorative, alt could be empty, but here likely they are informative. - Ensure keyboard accessibility: e.g., arrow keys to navigate carousel if focused. Aria labels for next/prev (“Next image” etc.). - Lightbox: if implemented, must trap focus and have escape to close, etc. - Motion: - For horizontal scroll, possibly use GSAP’s ScrollTrigger for smooth inertial drag (or simpler, CSS scroll-snap). - For slider, a fade or slide animation between images (500ms). - On grid, maybe a staggered fade-in of images when appearing in viewport. - Reduced motion: disable auto-play or excessive movement; require user interaction.

7. Before/After Slider:

- Description: Shows two images (before and after a project) with a draggable or swipable divider to reveal more or less of each. - Props: beforeImage (src, alt), afterImage (src, alt), labels (optional, like “Before”, “After”). - Behavior: Initially show half of each image. User can drag the divider (which is a vertical line with handles) to compare. On mobile, maybe it responds to swipe gestures as well. - A11y: - Should be operable via keyboard (e.g., focus on handle and use arrow keys to move). - Provide text for before/after labels for screen reader (like “Slide to compare before and after”). - The images themselves have meaningful alt (“Bathroom before renovation” / “Bathroom after with new glass shower”). - Motion: - Smooth movement of the slider bar. Possibly animate from center to a bit side and back on load to draw attention (one-time hint). - Reduced motion: skip any jiggle hint, user just interacts manually.

8. Process Stepper:

- Description: Visual sequence of steps (used for “Our Process” on home, or similar timeline). - Props: List of steps, each with icon (optional), title, description. Possibly a short title like "Measure", "Install", and a sentence. - Design: Could be horizontal on desktop (with arrows or connecting line), vertical on mobile. Each step numbered 1,2,3, etc. Icons could be small circles with numbers or illustrative icons (like a ruler for measure, wrench for install, etc., maybe using Lucide icons). - A11y: - If purely visual timeline, ensure the content is in logical order in HTML for screen readers (1-4 in order). - Use list markup <ol> for ordered steps, which inherently gives some info. - Motion: - On scroll into view, animate steps sequentially (fade up one by one, maybe with a slight delay = stagger). - Could also draw a connecting line (using CSS or SVG) from one step to next. - Reduced: no stagger (or all appear at once), any fancy SVG drawing animations are disabled.

9. FAQ Accordion:

- Description: Collapsible list of Q&A items. Used on service pages and possibly a dedicated FAQ section if needed. - Props: List of { question, answer }. - Behavior: Clicking a question expands its answer. Only one open at a time (accordion) or multiple can open (either approach; accordion typically one at a time). - Design: Question displayed with an icon (e.g., + or chevron) indicating collapsed/expand state. Answer revealed below with a slight indent or different background. - A11y: - Use proper semantics: each Q can be a button with aria-expanded and controls an answer <div id=...>. Or use <details><summary> for a simpler built-in way (that’s natively accessible – summary element acts like the trigger). - If using custom, ensure focus moves as expected and users can expand via keyboard (space/enter on the question button). - Provide aria-label on the button that includes the question text or ensure the question text is inside the button for screen readers. - Use heading tags inside if needed for SEO (e.g., each question could be an H3 if semantics allow). - Motion: - Smooth expand/collapse (CSS transition of height or use of Framer Motion for dynamic height). - Arrow icon rotates 90° when open (animated). - Reduced motion: can simply jump open/closed with no animation (or minimal).

10. Lead Form:

- Description: The multi-step or single-step form used on Request Quote page, and a simpler variant on Contact page. - Props: - For multi-step: an array of step objects, each with fields config. - For fields: type (text, email, tel, select, textarea, file), name, label, required, options if select, etc. - Submit handler or action URL. - Validation: Built-in front-end validation messages for required fields, email format, etc. Perhaps show inline errors in a red text below field if invalid on blur or on submit attempt. - Design: Use Tailwind form styles or custom: input boxes with border (light grey), focus state border turquoise, subtle rounded corners. Labels above inputs (for accessibility and clarity) or inside as placeholders (but labels are better). - Multi-step specifics: Indicate progress (e.g., “Step 1 of 2”). Use a “Next” button and then “Submit” on final. Possibly show a progress bar (like 50% then 100%) at top. - A11y: - Ensure each input has a label associated (use <label for=""> or aria-label if not visible label). - For any error, add aria-live="polite" to error messages so screen readers announce them on validation. - Keyboard navigation order should naturally follow field order. Pressing Enter on any field shouldn’t accidentally submit unless it’s the last action (could trap Enter on intermediate steps to go Next). - The form should be usable entirely via keyboard. - File upload: add instructions for screen reader on allowed file types/sizes (maybe in label or help text). - If using select dropdowns, ensure they are standard HTML selects (accessible) or if custom-styled, add appropriate ARIA roles. - Motion: - Multi-step transition: when clicking Next, could slide the next panel in. But ensure that doesn’t confuse; perhaps a simple cross-fade or instant switch with focus shifting to the first field of new step (important). - On success, possibly animate the success message (fade in). - Reduced motion: skip slide animations, just switch steps.

11. Contact Info Card:

- Description: A small component to display contact options (phone, email, etc.), possibly used in footer or contact sections. - Props: Possibly which info to show (some contexts might only show phone, others both phone/email). - Design: Could be inline icons followed by text links. - A11y: - Use proper tel: and mailto: links. Provide visually hidden text in addition to icons if icons are links. - For example, a phone icon link should have aria-label like "Call North Glass at 919-XXX-XXXX". - Motion: Not much, maybe a hover effect on icons (pulse or color change).

12. Map/Service Area Embed:

- Description: Shows a map or image of the areas served. Possibly a static map graphic with a highlight circle over Triangle, or an interactive Google Map if a showroom location. - Props: If Google Map embed, API key or embed URL, coordinates. If static image, just src. - Design: Could be styled with a caption listing service cities. If interactive, ensure it’s responsive (Google Maps iframe usually is). - A11y: - Static image: needs alt text like "Map of Raleigh-Durham service area". - Google Map iframe: should have title attribute "Google Map showing North Glass location" etc. But note: embedded map is not very accessible, so we should also list address in text (which we do). - Motion: None needed for static; if we wanted, could lazy-load the map on scroll into view to save performance.
Other components: - Breadcrumbs: Typically a simple component showing current page hierarchy. We will implement it with structured data. It consists of links separated by chevrons. A11y: nav aria-label="breadcrumb", using an ordered list. - Modal Dialog: Possibly used for image lightboxes or in future (like a “request quote” modal variant). If implemented: - Must trap focus, close on ESC, have overlay click to close, etc. - Use aria-modal true and give a descriptive aria-label or role dialog with label. - Cookie Consent Banner: If required, a small strip at bottom initially asking for analytics consent. Buttons to Accept/Decline. A11y: treat as modal or alert (role="alertdialog").
This inventory covers the primary interactive and content presentation components. Each will be built as a reusable React component, and documented (comments or simple storybook) so that any future expansion of site can use them consistently.

## Animations & Motion Guidelines

Motion should enhance the user experience by drawing attention to important elements and adding a sense of polish, but not at the expense of performance or accessibility. Here we outline the key animations and interactions, along with specifications for their behavior. We also provide a table summarizing timing and easing for consistency.
Principles: Keep animations purposeful and smooth. Use easing functions (like ease-out or ease-in-out) to make movements feel natural. Avoid large or continuous animations that could trigger jank or high CPU usage (especially on mobile). And always respect users who prefer reduced motion by disabling non-essential animations.
Page Transition: When navigating between pages, we can implement a subtle transition using Framer Motion’s layout animations or a wrapper that fades out the old page and in the new. For example, a fade-to-white then fade-in of new content, taking ~200ms each. This can mask any slight layout shifts and make the site feel more app-like. If using Next.js App Router, we might rely on built-in streaming instead, but a manual fade is fine if necessary.
On-Scroll Reveal: Many sections (e.g., the “Why Choose Us” icons, or images in gallery) will animate into view as the user scrolls down. Use the Intersection Observer or Framer Motion viewport trigger to detect when an element is ~10-20% into viewport, then: - Fade it from 0% to 100% opacity. - Optionally move it slightly upward (e.g., 20px up) to position and then to 0 (creates a “slide up” effect). - Stagger elements that are in a group (like the 4 value icons, or gallery images) with a delay of ~100ms between each, so they cascade nicely.
Hero Parallax: On the homepage hero, we might use GSAP ScrollTrigger to create a slight parallax on the background image – as user scrolls, the image could scale up or move a bit slower relative to text. Keep it minimal (maybe image moves at 80% scroll speed). Ensure this doesn’t cause layout reflow (use transform, not background-position if possible). On large screens, it gives a dynamic feel; on mobile or with reduced motion, this can be disabled (just static image).
Hover Effects: Links and buttons will have hover and active animations: - Buttons: slight scale-up (e.g., 1.03) and drop shadow intensify on hover, over 150ms. On mouse out, scale back. Use transform (GPU accelerated). - Text links: maybe underline or border-bottom that animates in from center or left. For example, an underline that grows from 0% width to 100% in 200ms on hover. This provides feedback and is a common modern pattern. - Images in gallery: on hover (desktop), can slightly zoom (scale 1.05) and reveal an overlay icon like “🔍” to indicate click to enlarge. Keep within smooth transitions.
Component-specific Animations: - Mobile Menu Drawer: Slide in from the side (say left to right) covering the screen. Use an ease-out for entry (duration ~300ms), and ease-in for exit (~200ms) to make it snappy when closing. Overlay (the semi-transparent backdrop) fades in simultaneously. - FAQ Accordion: On open, the content expands smoothly (animate height from 0 to auto). Duration ~250ms. Use ease-out (fast at start, slow at end so it gently opens). The arrow icon rotates at same time. - Testimonial Carousel: If auto-rotating, each slide can fade in and up slightly (translateY: 10px to 0). Duration ~500ms, easing ease-in-out. - Before/After Slider Handle: Could have an idle animation if we want: e.g., if user hasn’t interacted for a few seconds after appearing, jiggle the handle or move it slightly to hint it’s draggable. This should happen only once. And not if prefers-reduced-motion is on.
Loading States: If any action takes some time (like form submission might wait on server), we’ll indicate it via: - Buttons might show a loading spinner icon when clicked (disable them to prevent multiple submits). - Lazy-loaded content (like the map) can fade in when loaded.
Reduced Motion Handling: We will use the CSS media query prefers-reduced-motion: reduce to adjust: - Completely turn off non-essential animations: e.g., the hero parallax will not run; elements that would slide will just appear (maybe still fade but without movement). - For essential interactions like accordion opening or menu sliding, we might still animate but faster or simpler, or just instantly show to avoid prolonged motion. - Ensure no auto-play carousel; if we do, we’ll stop auto-rotation when reduced-motion is on, requiring user to manually navigate slides.
Performance & Frequency: - Avoid animating large images or too many elements at once. E.g., we won’t animate every single letter or do heavy continuous animations (like snow falling or such). - Use will-change: transform on elements about to animate to hint to browser (but sparingly to avoid memory bloat). - GSAP’s ScrollTrigger will be used only on a few elements (hero parallax, maybe one small effect) to keep its usage light.
To summarize, here’s a Motion Spec Table for key animations:

| Animation                  | Trigger                  | Duration              | Easing             | Reduced-Motion Behavior                               |
| -------------------------- | ------------------------ | --------------------- | ------------------ | ----------------------------------------------------- |
| Page fade transition       | On page navigation       | 0.2s out, 0.2s in     | ease-in-out        | Disabled (no transition between pages)                |
| Section slide-in (fade up) | Element scroll into view | 0.5s                  | ease-out           | Appears instantly (no slide)                          |
| Stagger in group           | Scroll into view         | 0.1s delay each       | ease-out           | Maybe no delay (all appear at once)                   |
| Hero image parallax        | Scroll (continuous)      | n/a (continuous)      | linear             | Disabled (fixed image, no movement)                   |
| Button hover scale         | Hover/focus              | 0.15s                 | ease-out           | No scale change (just color change focus)             |
| Link underline grow        | Hover/focus              | 0.2s                  | ease-in-out        | No underline animation (or instant show)              |
| Mobile menu slide-in       | Click hamburger          | 0.3s open, 0.2s close | ease-out / ease-in | Appears with no slide (maybe fade)                    |
| FAQ accordion expand       | Click question (toggle)  | 0.25s                 | ease-out           | Instantly show answer (no slide)                      |
| Carousel slide transition  | Timer or nav click       | 0.5s                  | ease-in-out        | Auto-rotation stopped; manual still works (with fade) |
| Before/After hint jiggle   | 3s after in view (once)  | 1s                    | ease-in-out        | Disabled (no hint animation)                          |

Table: Motion specifications for various interactions. (Note: times in seconds; ease-out = decelerate, ease-in = accelerate, ease-in-out = smooth blend.)
By adhering to these specs, the site will have a cohesive, high-quality feel. Importantly, we’ll test animations on mid-range mobile devices to ensure they remain smooth (60fps ideally) and adjust if any cause performance issues (e.g., we might limit the number of simultaneous animations or remove an effect if needed to meet our Performance KPI).

## SEO & Local SEO Plan

From day one, the site will be built with strong SEO fundamentals to ensure high visibility in search, especially for local queries. This plan covers technical SEO, on-page optimization, content strategy, and structured data.
Technical SEO: - Semantic HTML & Headings: Use appropriate HTML tags (one H1 per page, clear H2/H3 for sections). Content is structured logically, which helps crawlers understand relevance. For example, service pages have H2s like “Benefits of X”, “Our Process”, “FAQs about X” etc., and we ensure these relate to the main topic. - Meta Tags: Every page will have a unique, descriptive <title> (≤60 characters ideally) and <meta name="description"> (≤155 characters) that incorporate relevant keywords and a call to action where applicable. We’ve drafted many in Page Specs. We’ll refine them to avoid truncation and duplication. Also include <meta name="viewport"> for mobile. - Canonical URLs: Even though likely not much duplicate content, we’ll still include canonical link tags pointing to the primary URL for each page (especially if any query params or filters could generate alternate URLs in the future). - Robots.txt: We will allow all main pages to be crawled. Disallow any admin or irrelevant paths (if any, though likely none for a static site). List the sitemap URL. - XML Sitemap: Auto-generate a sitemap.xml listing all pages (/services and each /services/, /about, /blog and initial posts, etc.) for easy discovery. Submit it to Google Search Console at launch. - Breadcrumbs Markup: Implement <nav aria-label="breadcrumb"> with schema markup (BreadcrumbList) on appropriate pages (like service detail pages, blog posts). This often yields breadcrumb links in Google results, which are good for click-through and indicating site structure. - URL Structure: We’ve chosen clear, keyword-rich URLs (e.g., /services/window-replacement). These are short and use hyphens. They reflect content and include words like “shower-doors”, “storefronts” to directly match query terms. - Site Speed & Core Web Vitals: The tech plan already covers optimizing for CWV. SEO-wise, we know Google uses these metrics as a ranking factor, albeit a minor one. We will monitor LCP, FID (or INP) and CLS using tools (Lighthouse, PageSpeed Insights) and fix any issues (like images without dimensions causing CLS, or slow third-party scripts). Good CWV will also help us in user experience, indirectly improving SEO through lower bounce rates. - HTTPS: The site will be HTTPS which is a baseline ranking factor. Vercel provides SSL by default. - No Broken Links:* We will thoroughly test for broken links. Set up 301 redirects if any URL changes occur (like if we rename a page slug, etc.), so that both users and Google aren’t lost.
Local SEO: - Google Business Profile (GMB): Though outside website scope, we assume North Glass will create a Google Business listing. The site will reinforce that info: exact NAP in the footer matching GMB, mention of service areas, etc. On the Contact page and maybe in the footer, list the physical address (if any) in consistent format. - Service Area Mentions: Throughout the site, especially on service pages and home, weave in local terms. E.g., “We install frameless showers in Raleigh, Cary, Apex...” not in a spammy list way but in sentences or an explicit Service Areas section. For example, City Mirror did similar, listing areas. We can add a blurb like: “North Glass provides window replacement across Wake County – from North Raleigh to Holly Springs.” - Local Landmarks/Content: If available, mention something local in About (e.g., “Raleigh’s trusted glass experts since 2025”) to further geo-contextualize. - Opening Hours Markup: If we have business hours, include that in LocalBusiness JSON-LD (so Google can show “Open now” info). - Local Reviews: We might incorporate a few Google review excerpts or Yelp/Houzz badges if allowed, to show social proof. If we do, we could use AggregateRating schema to provide a star rating in snippet (though Google usually requires certain criteria for showing those in SERPs, but we can implement it if we have data). - Driving Directions / Map: On contact, maybe link to Google Maps directions from the address (for those who search on mobile, this is useful). - Mobile Friendliness: Absolutely critical as most local searches are mobile. Our responsive design and fast load ensure we meet Google’s mobile-friendly test, which is a major factor.
Structured Data Implementation: We will leverage schema.org JSON-LD to mark up content for rich results: - LocalBusiness Schema: On site-wide (either injected via a Layout component or just on homepage and contact page), include something like:
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "North Glass LLC",
  "image": "https://northglassnc.com/static/og-image.jpg",
  "@id": "https://northglassnc.com/#northglass",
  "url": "https://northglassnc.com/",
  "telephone": "919-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 Glass St",
    "addressLocality": "Raleigh",
    "addressRegion": "NC",
    "postalCode": "27601",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 35.779, "longitude": -78.639 },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "17:00" }
  ],
  "email": "mailto:info@northglassnc.com",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 5,
    "reviewCount": 10
  },
  "servesCuisine": "NULL"
}
</script>
(Note: "servesCuisine": "NULL" would be removed; that line came from a restaurant example. Instead, we might include "areaServed": "Raleigh-Durham-Cary NC". Also, aggregateRating we’ll only include once we have actual review data to avoid violating guidelines.)
This LocalBusiness schema informs Google of our basic info. We must ensure the @type is most specific if possible – maybe “GlassService” isn’t a schema type, so LocalBusiness is fine, or as a subtype like HomeAndConstructionBusiness or something if available. Actually, possible types: "HomeAndConstructionBusiness" or "ProfessionalService". We can use "HomeAndConstructionBusiness" with an additional property "serviceType" or just stick to LocalBusiness if not sure.
Service Schema: As noted, each service page can have a Service schema. We provided an example for frameless showers. Others similar: e.g., serviceType “Window Glass Replacement”, provider pointing to North Glass’s LocalBusiness (we can reference the @id of the LocalBusiness schema to link them). This might help those pages appear as rich results when someone searches that service (though Google doesn’t directly show Service schema in SERPs as a card, it still helps disambiguate content).
Product Schema (Optional): If we show specific productized offerings with prices (like a “Glass Protector Coating – $99” as an add-on or “Standard Shower Door package”), we could use Product schema. But currently no fixed pricing is listed, so likely skip Product schema.
FAQPage Schema: For pages with FAQ section (like the shower page and maybe others), wrap those Q&A in FAQPage JSON-LD. For example, on the Shower page:
<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
  {
    "@type": "Question",
    "name": "Do frameless shower doors leak?",
    "acceptedAnswer": {
       "@type": "Answer",
       "text": "No, when properly installed, frameless shower enclosures are watertight. We use seals and precise leveling to ensure water stays in."
    }
  },
  {
    "@type": "Question",
    "name": "What do frameless shower doors cost?",
    "acceptedAnswer": {
       "@type": "Answer",
       "text": "The cost depends on size and design, but ranges from $X to $Y for most projects. Contact us for a free quote to get an exact price."
    }
  }
 ]
}
</script>
We must ensure the Q&A text in schema exactly matches what’s visible on page to abide by Google’s guidelines (no hidden answers different from visible content).
BreadcrumbList Schema: On pages where we present breadcrumbs, we’ll include:
<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [
   { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://northglassnc.com/" },
   { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://northglassnc.com/services" },
   { "@type": "ListItem", "position": 3, "name": "Frameless Glass Shower Doors", "item": "https://northglassnc.com/services/frameless-glass-shower-doors" }
 ]
}
</script>
This helps Google display breadcrumbs in the result instead of full URL.
ImageObject Schema: For key images (like maybe project images or the ones used as OG images), we can mark them up if beneficial. Not crucial, but could do for blog post header images or such:
{
 "@type": "ImageObject",
 "url": "<https://northglassnc.com/images/shower-enclosure.jpg>",
 "width": 1200,
 "height": 800,
 "caption": "Custom frameless glass shower enclosure installed by North Glass in Raleigh NC"
}
This is often included within other schema (like in LocalBusiness we can list images, in Article schema for blog posts we include image property with an array of images).
Article Schema (BlogPosts): Each blog post via Next can output Article markup including headline, author, publish date, etc. We’ll do that to possibly get rich features (like article rich snippet with image). Example:
{
 "@context": "<https://schema.org>",
 "@type": "BlogPosting",
 "headline": "Frameless vs Framed Shower Doors: Which is Right for Your Bathroom?",
 "image": ["https://northglassnc.com/blog/framed-vs-frameless.jpg"],
 "datePublished": "2025-07-20",
 "author": { "@type": "Person", "name": "John Doe" },
 "publisher": { "@type": "Organization", "name": "North Glass", "logo": { "@type": "ImageObject", "url": "<https://northglassnc.com/logo.png>" } },
 "articleBody": "...", (or a short excerpt in articleBody)
}
(note that articleBody can be omitted or truncated, better to let Google read the page itself for content).
On-Page Content Optimization: - Keyword Research & Usage: We will ensure each service page uses the target keyword in the title, in first paragraph, and variations throughout. For example, on the Window page, include terms like “foggy glass replacement”, “insulated glass unit”, etc. Use synonyms to capture variety (e.g., “shower enclosure” vs “shower door”, “glass railing” vs “glass balustrade”). - Internal Linking: The copy will have links between related pages: e.g. blog posts linking to service pages (“As we explained on our Frameless Shower Doors page…”). Service pages might link to each other if logically connected (Mirrors page might say “We often install mirrors as part of bathroom upgrades along with frameless showers” linking to the shower page). Also link to About or Contact where appropriate (“learn more about our team on the About page” etc.). Internal links use descriptive anchor text (good for SEO). - Image Alt Text: Every image will have an alt attribute that describes it with relevant keywords naturally. E.g., alt="Frameless glass shower with chrome fixtures in a Raleigh home". This not only helps accessibility but also image search SEO. - Page Content Depth: We aim for each core service page to have at least 300+ words of text (which we do in our outlines) so Google has enough to index. Blog posts 800+ as mentioned. This should easily exceed the typical content of smaller competitors, giving us an edge.
Sitelinks Eligibility: Google automatically generates sitelinks if the IA is clear. To encourage this:
We maintain a clear nav structure (which we have).
Use distinct page titles (“About North Glass”, “Contact North Glass”, etc.) so Google recognizes them.
Ensure the homepage has links to the key pages in the content as well (like perhaps in a footer quick links or within sections).
Provide a site map page or the sitemap.xml to help crawling (though sitelinks are algorithmic, having good structure is key).
Given we have an “All Services” page, Google might list major services as sitelinks if we gain enough authority. We’ll also ensure important pages (like Request Quote) are linked from home (e.g., in a prominent way) because sometimes Google will give a sitelink “Request a Quote” if it sees it’s a key action page.
Content Strategy (Blog & Beyond): We plan to publish ~2 blog articles per month post-launch, focusing on local and informational keywords. Some initial ideas: - Comparisons/Guides: “Frameless vs. Framed Shower Doors” (with local angle: what do Raleigh homeowners prefer?). “Double Pane vs Triple Pane Windows for NC Climate.” - How-To/Care: “How to Clean Hard Water Spots off Glass Shower Doors” – including mention of our protective coatings service. - Top X Lists: “Top 5 Glass Trends for Modern Offices” (mention glass walls, etc, subtly plugging our commercial services). - Local Intent Topics: “Choosing the Right Glass Company in Raleigh – 7 Questions to Ask” (this indirectly markets our strengths). - Project showcases: “Case Study: Glass Makeover for [Local Business Name]” – if we get permission from a commercial client to write about their project, with photos, that’s great content and local relevance. - Seasonal: “Preparing Your Windows for Hurricane Season in NC” (if applicable).
Each post can link to our services (soft-sell) and will target specific search queries. We’ll do basic keyword research (via Google’s keyword planner or just search suggestions) to align topics with what people search.
Monitoring & Continuous SEO: We will set up Google Search Console to monitor crawl status, index coverage, and any errors. After launch, we’ll monitor what queries we’re appearing for and adjust content as needed (maybe tweak titles or add FAQ if we see queries hitting pages). Also monitor reviews and possibly integrate those on site for fresh content.
In summary, by combining solid technical SEO, focused local optimizations, strategic content, and structured data, we aim for North Glass’s site to quickly gain traction in search rankings, driving organic leads. We will review SEO performance at 30, 60, 90 days post-launch and refine the strategy (like if a particular service isn’t ranking well, maybe add more content or build a blog post targeting that specifically).
(Note: All structured data examples will be validated with Google’s Rich Results Test before launch to ensure no syntax errors and compliance.)

## Forms, Conversion Tracking & Integrations

Converting visitors into leads is the primary goal of this site, so we have carefully planned the forms, CTAs, and integration points to maximize conversion while minimizing friction or spam. Below is how forms and conversion elements will function, and how we’ll integrate them with back-end processes or third-party services:
Primary Calls to Action (CTAs):
Throughout the site, the prominent CTAs will be: - “Request a Quote” / “Get a Free Estimate”: This appears as a button in the header navigation (highlighted), as well as in strategic sections (home hero, end of service pages, etc.). Clicking this on any page leads to the dedicated Request Quote page (or potentially opens a form modal). - “Call Now”: On mobile especially, a sticky or easily tappable CTA to call the business phone. E.g., a fixed bottom bar saying “📞 Call for a Free Estimate” that triggers a tel: link. - “Contact Us”: For general inquiries, the contact page link is available in nav and footer.
These CTAs are designed to capture both types of leads: those ready to fill out details (form) and those who prefer direct immediate contact (phone).
Form Design and Fields:
We have two main forms: 1. Quote Request Form – detailed, primarily on /request-quote page (as described in Page Specs). - Fields: Name (required), Email (required), Phone (required or at least one of email/phone must be provided – but likely we require both so we have multiple contact ways), Address (optional or maybe just ZIP to gauge area), Service Type (dropdown), Project Details (textarea, required), Photo upload (optional), a consent checkbox (“I agree to be contacted…”). - We’ll label fields clearly. For phone, possibly include a pattern or mask for formatting (and to hint we want 10 digits). - If multi-step, step 1: Name/Contact, step 2: details. - We'll include a note near the top: “All fields marked * are required.” and near the file upload: “Max 20MB, allowed types: jpg, png, pdf, docx” (per City Mirror example which allowed those).
Contact Form – simpler, on /contact for general questions.
Fields: Name, Email, Phone, Message (and maybe a subject dropdown if needed).
This is for queries that might not be formal quotes (e.g., “Do you also fix auto glass?” or “I have a question about your warranty”). It will submit to the same system but we might route them differently if needed (like subject line “General Inquiry” vs “Quote Request”).
Form Handling & Integration:

- Submission Method: The forms will submit to a Next.js API Route or a serverless function. This function will: - Validate input server-side (to avoid reliance solely on client validation). - Possibly perform spam checks (like checking for a hidden honeypot field filled or extremely quick form fill indicating a bot, etc.). - If using a CAPTCHA (hCaptcha or Cloudflare Turnstile), verify the token server-side. - Construct an email with the form data. Likely using a service like SendGrid (via API) or a simple SMTP to our info@ address (if we have an email server). The email will be sent to <info@northglassnc.com> (and maybe CC a backup or the owner’s email). - Also send an auto-response to the user’s email (using a template that thanks them, lists the info they submitted, and says we’ll contact them soon). - Potentially store the lead in a simple database or Google Sheet for record (not required at launch, but something to consider – or integrate with a CRM if the business has one like HubSpot, via an API). - Confirmation to User: After submit, the UI will show a success message (“Thank you! Your request has been received.”). We will also mention any next steps (“We will reach out via phone or email within 1 business day.”). The form fields will clear or the user will be taken to a Thank You page. They also get the confirmation email as mentioned. - Preventing Multiple Submits: The submit button will be disabled upon first click, and possibly show a spinner until we get response. This prevents duplicates from impatient clicks. - Error Handling: If the server returns an error (e.g., network issue, or validation fails), show an inline error message. If possible, handle validation errors field-specific (like highlight the field and say “Please enter a valid email”). For general errors (server down etc.), apologize and maybe suggest calling instead (“Oops, something went wrong. Please call us at ... to request your quote.”).
Spam Protection:
- CAPTCHA: We plan to implement either hCaptcha or Cloudflare Turnstile in the form. These are privacy-friendly alternatives to Google reCAPTCHA. They’ll appear as a simple checkbox or be invisible (like Turnstile can operate invisibly). This will drastically cut down bot submissions. - Honeypot: As backup, include a hidden input (e.g., <input type="text" name="company" style="display:none">). Real users won’t fill it (or see it). If a bot fills it, we detect that server-side and silently drop the submission. - Rate limiting: On the serverless function, we can implement a small rate-limit (like max 5 submissions per IP per hour) to mitigate spam bursts. Unlikely needed but good measure. - We will monitor initial weeks after launch – if spam still gets through, we can tighten (like require captcha solving always, etc.).
Telephony Integration (Click-to-Call and Text):
- We’ll use clickable tel: links for the phone number site-wide. So mobile users can just tap and initiate a call. On desktop, clicking might prompt apps like Skype, etc., which is fine. - Possibly mention “Text us” if the phone line can receive SMS. If the business intends to allow texts (some modern small businesses do via cell or a service like Google Voice), we can also use an SMS link (sms: scheme). But we should confirm if they want that. The prompt said “Text Us (if enabled)” as a CTA. So maybe have a “Text Us” link as well. That would open the user’s SMS app pre-filled with our number. - If texting is not enabled, we won’t show that.
Email Links: - The email (<info@northglassnc.com>) will be mailto:. Keep in mind mailto will try to open an email client, which is fine. Provide it mainly for those who copy it or those with configured email apps. - Possibly obfuscate it slightly in code to avoid scrapers (though it will likely be fine, spam might come anyway, but the info address should have a spam filter).
Calendar/Scheduling Integration (Open Item):
If down the line they want to allow scheduling appointments directly, we might integrate a scheduling tool (Calendly or similar). Not in initial scope, but leaving the architecture open for that. For now, requesting a quote does not auto-schedule, it prompts follow-up.
Consent & Compliance:
As noted, include a privacy consent note. If using analytics cookies, a consent banner separate will cover that (discussed in Analytics section). For form, just assure user their info is safe and only used to respond. Possibly include a checkbox “I agree to the Privacy Policy” if we want explicit consent (though for quotes this might not be strictly required if considered normal business correspondence, but safer to include if uncertain about global usage).
Integration with CRM or Database:
At launch, simplest path is email notifications. That might be sufficient if volume is low. But to future-proof: - We could bcc the email to a CRM’s dropbox email (like HubSpot provides an address to auto-create a lead in CRM via email). - Or directly call an API to insert lead. The prompt doesn’t mention a CRM explicitly, so probably the business will just handle via email or manual entry. We’ll note this as an open item: “Does North Glass have a CRM to integrate leads? If not, we recommend setting up a system to track leads (even a Google Sheet) so none slip through.”
Testing Forms:
We will thoroughly test forms with valid data, missing data (to see validation), large files, weird characters (like apostrophes, etc. to avoid breaking email), and ensure everything is robust. Also test that the hCaptcha/Turnstile works in different browsers.
Newsletter/Marketing integration:
If we plan to capture emails for marketing (not mentioned explicitly), we could add a “Join our mailing list for glass care tips” checkbox. But since not requested, likely skip for now to keep form focused. Possibly in blog or footer later if needed.
Other Conversion Elements: - Chat Widget: Not mentioned, but some sites add live chat or a chatbot for conversion. If considered, we could integrate one (like a free tawk.to chat). But those can affect performance and weren't specified, so likely not at launch. - We do have social “Leave us a review” links on City Mirror’s site. We might similarly include “Review us on Google” link after project (maybe not on site but as a separate communication). - Call Tracking: If the business uses a call tracking number for marketing, we might need to incorporate a script that swaps the phone number. But likely they’ll use their main number, which is fine.
In conclusion, the forms and contact points will be set up to maximize lead capture and minimize frustration: - Quick form for serious leads (with spam protection), - Easy phone access for immediate contact, - Reliable notifications to the business, - And analytics tracking each step (next section will detail event tracking for these conversions).
All conversion points (form submissions, phone clicks) will be tracked as goals/events so we can measure that 5-8% conversion goal and optimize if needed (e.g., if many start form but don’t finish, maybe the form is too long – then we’d adjust length or steps).

## Analytics, Events & Reporting

To measure the site’s effectiveness and gather insights for improvements, we will implement robust analytics. We’ll use Google Analytics 4 (GA4) with proper event tracking, complemented by Vercel Analytics for basic traffic without needing cookies. Additionally, any critical conversions will be tracked for advertising or ROI calculation if needed.
Analytics Setup: - Google Analytics 4: We’ll create a GA4 property for North Glass. GA4 is privacy-centric and event-based. We will integrate it via either the official GA4 script (gtag.js) or Google Tag Manager (GTM). Since we also mention Consent Mode, using GTM might be convenient to manage that. - GA4 will track pageviews by default. We’ll configure the site’s <Head> to include GA4’s script with the site ID. - GA4’s baseline also auto-captures some events (scroll, outbound clicks, file downloads, etc.) if enabled. But we’ll manually configure key events. - Consent Mode: If we decide to have a cookie consent banner (especially for European visitors or just as best practice), we’ll implement GA in “consent mode” by default (meaning it won’t drop tracking cookies until consent given; it will still count anonymous hits). We'll likely limit showing the banner only to EU IPs (if using a tool or custom logic), as US doesn’t require it yet for just analytics. But since they explicitly said GA4 + Consent Mode, we will prepare it: - On page load, GA4 initialized with {"analytics_storage": "denied"} by default. - If user clicks “Accept Cookies”, we fire the consent update (gtag('consent', 'update', {'analytics_storage': 'granted'});) which will allow GA to track fully. - Vercel Analytics doesn’t use personal data so it’s fine regardless of consent. - Vercel Analytics: We’ll enable this in the Vercel project. It gives real-time traffic, paths, etc., without any client-side script. It’s lightweight and respects privacy, which complements GA data (especially if some users decline GA). - No other trackers at launch (like no Facebook Pixel mentioned, though if advertising in future, could add). We’ll keep it lean to hit performance goals.
Events to Track: We define the following custom events in GA4 (naming them in lowercase and using GA4’s recommended naming conventions where possible): 1. lead_submit – When a user successfully submits the Request a Quote form. This is our primary conversion event. - Parameters: We can send form_type (e.g., "quote" vs "contact"), perhaps service_interest (if they selected a service type), and maybe source_page (which page they initiated from, though since form is on one page, this could be referer). - We will mark this event as a conversion in GA4 (so we can easily see conv rate). 2. contact_submit – If the Contact form is submitted (different from quote form). Also a conversion (though maybe of lesser value than a quote request, but we’ll track). - Params: reason if we have subject categories, etc. 3. cta_click – Click on any major CTA button that leads toward a conversion but isn’t the final conversion. For example, click on the "Request a Quote" button in the nav, hero, or as a repeated call-to-action (basically any time that button is clicked leading to /request-quote). - Params: cta_location (e.g., "header_nav", "home_hero", "footer_banner", etc.) so we know which placements are getting interaction. - This helps measure interest and if people click but maybe drop off on form page, we can analyze that drop-off. 4. call_click – When someone clicks the phone link (tel:). This indicates an attempt to call. GA can’t confirm if call completed, but the click is a strong signal. - Params: placement (maybe "header", "contact_page", "mobile_sticky", etc.). - We’ll treat this as a conversion event as well, since a call is as good as a form lead. - If possible, we might capture device or GA can tell if it’s mobile vs desktop. 5. text_click – If we implement a "Text Us" link, similarly track that. 6. navigation_click – We can track usage of certain nav elements if desired, but not critical. Possibly track when someone uses the Residential vs Commercial menu (like to see interest). - Could be menu_open events for mobile menu usage or which menu item clicked. 7. gallery_interaction – If a user interacts with the gallery (e.g., clicks to enlarge a photo, or swipes through images). - Params: maybe gallery_name (like "home_gallery" or "shower_page_gallery") and action (view_next, view_prev, etc., or count how many images viewed). - This is a lower priority event, mainly for understanding engagement. 8. quote_start_step – (If multi-step form) We can fire an event when user starts filling out the quote form (like when they reach step 2 or focus on first field). - Or if it’s a one-page, maybe fire when they land on /request-quote page (that we get from GA pageview too) or when they start typing (harder to catch reliably). - Purpose: to measure how many start vs how many finish (so we get a form completion rate). - Alternatively, track a form_progress event with a step param (e.g., step1 completed). 9. quote_complete – This might be same as lead_submit really. If multi-step, lead_submit covers completion. But if we needed, we could separate initiated vs completed. Probably lead_submit suffices for completed, and quote_start for initiated. 10. hero_cta – If we want specifically track the hero section button click separate from other CTA (but we can use cta_click with param as noted). 11. Blog events: If we want, blog_share if someone clicks social share on a post, or link_click if they click an outbound link in blog. GA4 auto collects outbound clicks if enabled, so maybe not needed custom.
We will use GA4’s debug view initially to ensure these events fire correctly. And label key ones (lead_submit, contact_submit, call_click) as Conversions in GA.
Reporting & Analysis: - We’ll set up GA4 dashboards or explorations for: - Conversion count and rate (overall and by device). - Event flows (e.g., how many CTA clicks to form view to submit). - Page metrics (which service pages get traffic and their bounce rates). - Traffic acquisition (organic vs direct vs referral) to measure SEO progress. - We might also use Google Looker Studio (Data Studio) to create a simple marketing dashboard for the client if needed, summarizing KPIs like number of leads per week, etc. - Vercel Analytics gives us real-time and basics like top pages, countries. That’s more for internal dev checking (like to monitor if suddenly some page gets unusual traffic or high latency).
Google Search Console: Not exactly analytics but part of reporting – we’ll set it up to monitor search impressions, queries, CTR, etc. We can combine that data to refine SEO (like if many search our brand name and then go to contact page directly, etc.).
Privacy Considerations & Compliance: - We will update our Privacy Policy to mention data collected: e.g., “We use Google Analytics to collect anonymized usage statistics. We use hCaptcha to prevent spam (which may collect technical info). By submitting a form, you consent to us using your data to respond...” etc. - The Consent banner if implemented will allow opting out of GA. If user opts out, GA events won’t fire (we’ll ensure our event tracking functions check a global “analyticsAllowed” flag or similar). - We might implement a small script so that if user declines, we do not even load GA script. If they accept later, we load it then (GA4 can retroactive count some things in consent mode but best to load after consent if possible). - If we have customers in EU: maybe run geolocation to show cookie banner only there.
Event Implementation Details: We will likely use the GA4 gtag or gtm to push events. If using GTM, we’ll configure triggers for these interactions (like a click on tel: link triggers call_click event). Or if easier, in React we will programmatically call gtag('event', 'event_name', {...params}) on onClick handlers for certain elements (like the form submit handler fires lead_submit).
We’ll double-check that events don’t double count (e.g., if the quote page reload or something triggers again; since likely we keep on same page, fine).
Conversions and Benchmarks: We will monitor conversion rates: - If below targets (5-8% mobile), analyze where drop-off occurs. Perhaps use GA4’s funnel analysis: from view quote page to submit event. Or use Session Replay tools (maybe not at launch, but like Hotjar) to see UX issues. - Also track phone vs form split. If many call, maybe emphasize phone even more, or vice versa.
Periodic Reporting: - Possibly set up a monthly email summary via GA4 or Data Studio to the team: how many leads, top pages, etc. This helps justify ROI of site. - Also watch for any anomalies, e.g., sudden drop in traffic or spike—then investigate (maybe site down or a page got deindexed, etc).
In short, the analytics will provide the data needed to measure success against KPIs: - We’ll know the conversion rates (actual vs target). - We’ll know how people find us (likely mostly Google organic, maybe some direct). - We’ll see which pages are most popular (maybe showers and windows might be top). - Using that, we can refine content (if a blog post draws many visitors but few convert, maybe we add a clearer CTA on it, etc.).
Everything will be implemented in a privacy-conscious way, with consent and no unnecessary tracking scripts.

## Accessibility, Compliance & Legal

From the ground up, the site will follow WCAG 2.2 AA guidelines to ensure it’s accessible to all users, including those with disabilities. We also account for legal compliance (privacy laws, etc.) and include necessary legal content.
Accessibility (WCAG 2.2 AA):
Keyboard Navigation: Every interactive element (links, buttons, form fields, menu items) must be reachable and operable via keyboard alone (typically Tab, Shift+Tab, Enter/Space). We will manually test that one can navigate through the site without a mouse. For example, the mobile menu will trap focus when open (so you can tab through menu links and then loop or close with Esc), and not trap when closed. All carousels, accordions, etc., have keyboard controls (e.g., arrow keys for carousel).
Focus Indicators: Ensure a highly visible focus state on all focusable elements. Tailwind’s default focus outline or a custom style (like a 2px outline in the turquoise color with some offset) will be applied. This is critical for users who tab through links to see where they are. We’ll avoid removing outline without providing an equal alternative.
Color Contrast: Use the brand palette in an accessible way. All text will meet contrast ratio of at least 4.5:1 against its background (for normal text) and 3:1 for large text or UI components. For instance, turquoise (#40E0D0) on white might be too low contrast for body text – we’ll check (quick check: #40E0D0 on white has contrast ~1.93:1, which is too low). So we won’t use that for small text on white. We’ll likely use charcoal (#333B3E) for most text on light backgrounds. White text on deep teal (#005F73) needs to be checked too (white on #005F73 has ~12.3:1, which is good). We’ll run all combinations through contrast checker (during design/coding) to ensure compliance.
Alt Text for Images: All meaningful images will have descriptive alt attributes. For example, hero image might be decorative (with tagline already as text) – if so, we give alt="" and role="presentation" or similar to skip it. But product images and gallery images will have meaningful alt (as previously mentioned in SEO section, also good for accessibility). We’ll avoid images of text; if must have, we’ll repeat that text in alt or page content.
ARIA Landmarks & Labels: Use appropriate landmarks: <header>, <nav>, <main>, <footer>, <section> (with aria-labelledby or an H2 inside for identification). This helps screen reader users navigate by landmarks. For example, skip link goes to #main-content (which is the main content area with tabindex="-1" and maybe role="main"` for older AT support).
Form Labels and Feedback: Every form input has a connected <label> (or an aria-label if label visually hidden). We’ll not rely solely on placeholder text as a label (placeholders disappear on typing and are not always read by screen readers). We’ll also provide descriptive hints or error messages. For instance, if email is invalid, an error text appears like “Please enter a valid email address” and we’d add aria-live="assertive" to a container so it’s read out when appearing. We’ll also ensure required fields are indicated (like adding * to label and maybe aria-required on them).
Component-specific A11y:
Carousel: Provide controls that are accessible (like "Previous slide" and "Next slide" buttons with aria-controls pointing to the slide container). If it auto-rotates, allow pausing (maybe pause on focus or have a pause button).
Accordion: As noted, use proper semantics so that screen readers announce when sections are expanded or collapsed.
Video (if any): Provide controls and captions. Not currently planned but if in future a background video or so, either ensure it’s purely decorative or provide start/pause and no critical info solely in video.
Animations: We will use prefers-reduced-motion media queries. Also ensure nothing flashes or blinks that could cause seizures (we’re not doing any flashing content, but just to state compliance).
Screen Reader Testing: We’ll test key pages with a screen reader (e.g., NVDA or VoiceOver) to ensure the reading order is logical and that all interactive elements are announced properly (like menu toggles announce state, etc.).
Skip Navigation: Provide a “Skip to main content” link as the first element in the DOM (the City site had that). This becomes visible on focus (for keyboard users) and jumps to main content, letting them bypass the header links on each page.
Responsive Text & Target Sizes: Ensure that on mobile:
Text is not too small (we’ll keep base font ~16px which is good for readability, and larger for important text).
Interactive elements are at least 44px by 44px in clickable area (as per WCAG 2.5.5 target size AA). For example, small social icons might need padding to reach that.
Consistent Navigation & UI: Use consistent icons and placements (e.g., if “Request Quote” is a button top right, keep it in similar place on all pages). This is partly a usability best practice that benefits cognitive accessibility.
Testing with Tools: We’ll run Lighthouse Accessibility audit (target 95+). Also possibly use axe DevTools or wave.webaim.org to catch anything automated tests can.
Compliance (General):
Privacy Policy: We will have a Privacy Policy page, which outlines what data we collect (contact info from forms, analytics cookies, etc.), how we use it (to respond to inquiries, improve website), and the user’s rights (like how to contact us to remove their info, etc.). We’ll ensure it covers cookie usage by GA and any third-party (like if we use hCaptcha, mention it briefly). Since not dealing with sensitive info or large user accounts, a basic privacy policy referencing compliance with relevant laws (GDPR, CCPA somewhat) is fine.
Terms of Service: A page for site usage terms. Could be boilerplate stating the content is informational, not liable for errors, etc., and any warranty disclaimers. Also mentions intellectual property (like the website content/images belong to North Glass, etc.). If North Glass provides any warranty on work, that might be spelled out in real life contracts, but not necessarily on site, except in marketing statements.
Cookie Consent: As discussed, possibly a cookie consent banner mainly for GA. If we implement region-specific, fine. The banner would say something like "We use cookies to analyze website traffic. By clicking Accept, you consent... [Accept] [Decline] [Privacy Policy link]". If declined, still allow site usage with GA in consent mode. The banner itself should be accessible (use focus trap or make it appear as first element on page load to screen readers via aria-modal).
Legal Company Info: Ensure the site lists the official business name (North Glass LLC) clearly (already in footer, about). If any licenses or insurance details are legally required to show (some states require showing license number for contractors on website), we should include those if applicable (Open question: license number? Possibly not mandatory in NC, but if they have one it could be on about page).
Third-party Compliance:
hCaptcha has its own privacy terms; using it might require a mention per their policy (we can mention "This site is protected by hCaptcha and its Privacy Policy and Terms apply" possibly near the form or in privacy policy).
Google Maps usage (if any) should be disclosed (Google often requires an embedded map to have Google’s TOS link).
ADA Compliance Statement: Some sites include a brief statement like “We are committed to accessibility. If you have any issues accessing content, call us at ...”. Not strictly required but can be a nice gesture to include on the site (maybe on contact page or footer).
No Discriminatory Content: Ensure images and text are inclusive (which they are, we’re offering services to all homeowners, etc., nothing problematic).
Cookies: If we only use GA cookies, just mention in privacy. If we add any others (like for chat or future), update accordingly.
Form Data Handling: Ensure form submissions are transmitted securely (over HTTPS) – which they are on Vercel with SSL. The data will be emailed; we should ideally use TLS for email (most providers do nowadays). If storing leads, ensure that storage is secure (if a simple DB, keep it locked down).
Verify Content for Accuracy: e.g., if we say "10 year warranty", the company must actually honor that. It's more of a content/corp policy, but important to avoid any deceptive claims (legal). We'll confirm any such claims with the client (open item: finalize warranty terms).
By addressing these points, we mitigate the risk of accessibility-related complaints (e.g., ADA web compliance lawsuits which are not uncommon) and ensure any user – regardless of ability – can get information and convert on the site. This also aligns with our KPI of high Lighthouse a11y score and just doing the right thing for users.
We will include accessibility checks in our testing plan and treat any issues as must-fix before launch.

## Testing, QA & Launch Plan

Before launching, the website will undergo thorough testing to ensure everything works as expected across devices and scenarios. Below is the QA plan, including types of testing, acceptance criteria, and release checklist:
Testing Overview: We’ll perform multiple rounds of testing: - Functional Testing – Verify that all links, forms, interactive components, and navigation work correctly. - Cross-Browser Testing – Ensure the site renders and functions properly on major browsers (Chrome, Firefox, Safari, Edge) and relevant versions. - Responsive Testing – Check layout on common screen sizes: large desktop (≈1920px), tablet (≈768px), mobile (≈375px width) etc., including portrait/landscape orientation. - Performance Testing – Use Lighthouse, PageSpeed, and webpagetest to confirm performance metrics (LCP, etc.) and no obvious slowdowns. - Accessibility Testing – As detailed, using tools and manual methods to ensure WCAG compliance. - SEO Checks – Verify meta tags, structured data (using Google’s Rich Results Test), sitemap functionality, and no robots issues. - Content Verification – Check that all placeholder text has been replaced with real copy (no lorem ipsum remains), all phone/email placeholders replaced with actual info, etc. - Integration Testing – Test that analytics events fire, that form submissions actually send emails and record properly, etc.
Specific Test Cases / Acceptance Criteria:
Each page and component will have acceptance criteria. Some key ones:
Home Page:
Hero section text is correct, and CTA button leads to Request Quote page.
Navigation links scroll or go to correct pages (Residential dropdown links go to correct service pages).
The “Why Choose Us” icons are all visible and have text. No overlapping or cut-off on smaller screens.
Gallery images load quickly and are optimized (no obvious visual degradation, but small file size).
Test testimonial carousel: can click next and see next quote, and it’s readable.
Ensure no CLS: e.g., hero image should have proper dimensions or aspect ratio to avoid jump when loading.
Check that sticky header appears after scrolling and doesn’t jitter.
Service Pages:
Breadcrumb navigation is showing and each link works (e.g., Home > Services > Frameless...).
Content sections (overview, gallery, FAQ) all load. Try opening all FAQ accordion items – content displays properly and can be closed.
The “Request a Quote” CTA at bottom jumps to quote page.
On a service page like “Frameless Shower Doors”, simulate a user reading: scroll down, images appear (no broken images). Check alt text by inspecting or using screen reader.
No horizontal scroll on mobile (meaning nothing is overflowing off the screen).
If before/after slider present: test dragging on desktop (mouse) and mobile (touch). Does it respond? Does it break layout? Also test keyboard (focus and arrows).
Forms (Quote & Contact):
Try submitting the Quote form with valid data: ensure success message shows and an email is received (use a test email address maybe configured to catch output or a dummy endpoint in staging).
Try missing required field: validation should prevent submission and show error highlighting.
Try invalid email format: error shown.
If file upload: try uploading a large file > limit (should reject nicely) and an allowed file. Ensure file actually gets through to email or storage in testing scenario.
Check that the captcha is working: if using hCaptcha, ensure it appears and can be solved. Try not solving and submitting, it should prompt or not allow.
Test the multi-step flow: can you navigate back a step if needed? We might allow or not, but at least no freeze.
Confirm events: using GA4 debug or console log if we have dev hooks: does lead_submit fire on submission? We might temporarily log event data in console for QA.
Navigation & Links:
Test that the top nav dropdowns are clickable on mobile (often mobile issues where tapping parent link might need special handling if it’s also a link).
Logo click goes to Home always.
Footer links (privacy, terms, etc.) go to appropriate pages and those pages have content.
External links (like social media, or “Leave a review” if included) open in new tab (and have rel="noopener").
Cross-Browser Specifics:
Safari (on iPhone and Mac): Check layout. Some flex or grid differences or some JS APIs differences (like certain GSAP features or smooth scroll might behave slightly differently). Ensure no console errors.
IE11 is not target (most likely, since Next.js not supporting IE by default), but Edge (Chromium) should be fine.
Firefox: check form fields styling (sometimes different default styles), and check any scroll-snap or smooth scroll fallback.
Chrome: likely primary dev browser, but double-check mobile Chrome via dev tools and actual device if possible.
Mobile Specific:
Does the mobile menu overlay scroll if content beyond one screen? (We need it to scroll internally if too many links, but not the background.)
Are tap targets adequate? Try tapping the smallest link (maybe social icon or close ‘x’ on menu).
The sticky header on mobile – does it shrink too much or hide? If we have a fixed call bar, does it overlap anything?
iOS Safari testing includes check that input fields don’t zoom in if text size is too small (setting input font-size >=16px prevents auto-zoom).
Check that telephone links actually prompt a call properly on mobile (they should).
Performance:
Run Google Lighthouse (Mobile mode) for key pages (Home, a heavy Service page, etc.). Check Performance score, LCP element and time, CLS (should be ideally 0). If any red scores, find cause (like a large image or script).
Use Chrome DevTools Network Throttling (Slow 4G) to see if anything loads too slowly or if layout appears progressively fine.
Test a cold load vs cached load to ensure caching working (like Next will generate good cache headers by default).
Check that our third-party scripts (e.g., analytics, map) are deferred or not blocking.
For Core Web Vitals: we’ll verify LCP element (maybe hero image or hero text) loads timely. If not, consider inlining critical CSS or preloading that image.
Security:
Check that the site only loads via HTTPS and that no mixed content warnings (all resources should be https).
If possible, run a vulnerability scan (maybe just check that there are no obvious console errors or exposure).
Test form injection: try entering a script tag or SQL-ish text in form fields to ensure our email output escapes it (should be plain text email so okay).
Backup/Recovery:
Pre-launch, we ensure code is in version control (GitHub) and can be redeployed easily. Also note a rollback plan: Vercel allows redeploying an older commit if needed. So if something goes wrong after launch (some bug slipping through), we can quickly revert or hotfix.
User Acceptance Testing:
If possible, have a couple of non-developers (maybe someone from the company or friend) use a staging link to simulate a user: find a service, fill a form, etc., and gather feedback on any confusion or issues. This often catches content clarity issues or small UX flaws.
Launch Checklist:
Content Freeze & Verification: All final copy and images are in place. Double-check contact info (phone/email) is correct. Check that no “TBD” or placeholder remains (the prompt flagged phone as TBD – ensure we have real number).
SEO Checks:
Meta titles and descriptions set for all pages (especially check that none are missing or duplicate).
Sitemap.xml generated and correct.
robots.txt exists and is correct (allow all, disallow none except maybe /api/ routes if any, etc.).
Structured data passes tests on key pages (we’ll copy JSON-LD into Google’s tester to confirm).
Analytics Verification: GA4 code present and receiving data (we can see real-time visit when testing staging if domain is same or at least after deploy, quickly check realtime). Ensure no test data pollutes production GA property (we might use a separate GA property for staging or filter out internal IPs).
Performance Final Check: Ideally run a final Lighthouse on production build preview. If any quick wins (like compress one more image or adjust something) do it.
Accessibility Final Check: Run WAVE or AXE on a couple pages for any errors (e.g., sometimes we might accidentally have duplicate IDs or a missing form label, easy to fix last minute).
Domain Setup: northglassnc.com domain pointed to Vercel. Ensure both www and non-www resolve and one redirects to the other as decided (likely force www or vice versa).
SSL: Verify the site is showing secure lock icon on <https://northglassnc.com>. (Vercel will do auto SSL, just ensure domain config correct).
Backup of Contacts: On launch, we may get immediate contacts. Make sure the <info@northglassnc.com> email is set up and working prior to site going live, otherwise leads could bounce. Test send an email to it.
Monitoring: Plan to closely watch after launch:
Check Search Console for any crawl errors.
Monitor GA real-time or daily for traffic (maybe initial spike from client viewing).
Check the form submissions come through okay (maybe test once in production).
Keep an eye on error logs (Vercel Functions logs) for any runtime issues (like if email API fails, etc).
Fallback Plan: If a severe issue appears post-launch (e.g., forms not working), we can put up a quick notice or revert to a simple contact info page until fixed, but hopefully won't need this. Having a way to quickly reach developer is assumed.
Post-Launch QA (within first week): - See if any user reports issues (maybe the client or initial customers). - Do a final check on different real devices (like an Android phone, an iPad, etc., if not done already). - Ensure that the site is indexed: within a day or two, search for "site:northglassnc.com" on Google to see if pages show up (we can also manually request indexing via Search Console). - If any structured data errors/warnings in Search Console, address them. - Evaluate page speed via Google Search Console's CWV report (though that takes more traffic/time to show data) or use Chrome UX Report if available in future.
Milestones Recap (from Delivery Plan): - We have presumably done IA & wireframes (the outline given), content drafts (we just created a lot of it), design (the brand guide and components), build (development in progress soon), QA (this section), then launch. We'll create a timeline below, but presumably: - By end of Month 1: IA, design system done. - Month 2: Development of pages & components. - Mid-month 2: Begin content integration (from drafts). - End of Month 2: Begin QA on staging. - Early Month 3: Final tweaks, then launch. - Post-launch: measure & adjust SEO content if needed.
(We’ll formalize timeline and responsibilities in Project Plan next, including testing responsibilities.)
In summary, our testing plan is comprehensive. We won’t mark the project as complete until every acceptance criterion is met and the site operates smoothly. This will ensure a high-quality launch that impresses users and meets the defined goals without post-launch fire drills.

## Project Plan, Timeline & Risks

Delivering this website requires coordination of design, content, and development tasks. Below is a proposed timeline with key milestones, as well as potential risks and mitigation strategies.
Project Phases & Milestones:
Planning & Research (Week 0-1): Status: Completed. We gathered requirements (the PRD itself), analyzed competitors, and set goals. Stakeholders sign off on this PRD which is our blueprint.
Information Architecture & Wireframes (Week 1-2):
Deliverables: Sitemap finalization, low-fidelity wireframes for key pages (Home, a Service page, Contact, etc.) to nail down layout and content structure.
We’ll review wireframes with stakeholders for feedback on layout and content priority.
Milestone: Sign-off on wireframes by end of week 2.
Visual Design & Design System (Week 2-4):
Create high-fidelity mockups for homepage and one service page using the established look & feel (colors, typography). Also design the mobile versions.
Simultaneously, prepare the design system components (buttons, forms, etc.) in a style guide document or design tool.
Iterate quickly with feedback on visuals (especially ensure brand palette usage is approved and imagery style is satisfactory).
Milestone: Approved visual design and style guide by end of week 4.
Content Creation (Week 2-5, overlapping with design):
While design is ongoing, the content team (which could be one of us or a copywriter) starts writing page copy based on briefs in this PRD.
The priority is Home, Services pages, About, and Contact copy. Blog ideas are outlined but blog content can be added continuously (maybe not all need to be done by launch, but have at least 2-3 posts ready).
Review content with stakeholders around week 5 for factual accuracy and tone, then refine.
Milestone: Final copy ready for integration by week 5.
Development – Front-end Build (Week 5-8):
Set up project repository with Next.js on Vercel. Implement global components (header, footer, layout).
Code each template: Home, Services index, Service detail (we’ll create a dynamic [slug] page for services with content from maybe markdown or JSON for each?), About, Contact, Blog index, Blog post.
Integrate content: possibly use markdown/mdx files for static content or directly hardcode since static (but likely mdx or JSON for ease of future editing).
Implement interactive components: menu toggles, accordions, sliders, forms with validation.
Implement styling with Tailwind per design.
Implement basic animations (Framer Motion/GSAP where planned).
Throughout, test in-browser and fix any layout issues.
Keep an eye on performance (test Lighthouse after building each major page).
Milestone: Internal alpha version of site by end of week 8 (all pages functional but perhaps without final polish on animations/analytics).
Testing & QA (Week 9-10):
Conduct the testing as described in QA section. Create a bug list for anything found.
Fix bugs iteratively (week 9).
Perhaps do a client/stakeholder review on a live staging URL at start of week 10 – collect their feedback or change requests.
Implement final adjustments (content tweaks, design fine-tunes) in week 10.
Final cross-browser check and Lighthouse audit in week 10.
Milestone: Site ready for launch (all tests passed) by end of week 10.
Launch (Week 11):
Choose a low-traffic time to switch DNS if needed (maybe evening or weekend morning).
Deploy to production on Vercel. Double-check everything after going live (maybe flush DNS cache and test real domain).
Ensure Search Console is updated with the domain and sitemap submitted.
Send out an announcement to client/team that site is live.
Monitor site closely first 48 hours for any unexpected issues (errors in forms, etc.).
Milestone: Official Launch complete.
Post-Launch SEO/Content Sprint (Week 12 onward):
Start writing and publishing those additional blog posts per content strategy (if not all done pre-launch).
Possibly implement any minor enhancements identified (like maybe adding a FAQ page if lots of queries come).
Monitor analytics from the start to gather baseline data.
Risks & Mitigation:
Content Delay: There’s often a risk that content (text or images) isn’t ready in time, which could push the timeline. We mitigated this by starting content writing early (parallel to design). If by week 5 some service pages copy are not final, we may use placeholders but that’s not ideal. We’ll push to get at least something written and then refine later rather than nothing.
Scope Creep: There are many features (e.g., animations, blog, etc.). If we find time is running out, we may have to cut non-critical features. For example, if launch date is fixed but blog posts aren’t ready, we can launch blog section slightly later (since not core to lead gen initially). We’ll prioritize launch-critical items (home, services, contact forms).
Browser-specific issues: Something might not work in Safari or mobile as expected (e.g., iOS handling of 100vh elements). Mitigation: allocate time in QA to specifically catch these and have developer knowledgeable in cross-browser fixes.
Performance regression: Using too heavy scripts could jeopardize our performance KPI. We’ve outlined to load GSAP only where needed, etc. We will keep checking performance after adding each heavy library. If by QA we see performance <90, team will profile and optimize (maybe drop an effect, compress images more, or use next/image properly).
Third-party Dependencies: e.g., if Google Analytics or hCaptcha has downtime or fails to load, site should still function (our code should not hang). We’ll ensure external scripts are loaded async/defer so they don’t block.
SEO Ranking Uncertainty: Even with best efforts, getting top 10 in 60-90 days is partly out of our control (depends on Google). Mitigation: we’ll do everything right, and also consider some local SEO boosters (like getting some local backlinks, ensuring Google Business is linked, possibly asking early happy customers for Google reviews which can help local pack). We set this as an assumption rather than a guarantee.
Client Review Changes: The client might have additional input when seeing the near-final site (like “Actually, I want to emphasize X service more”). If changes are substantial (like redoing a section), that could crunch timeline. We mitigate by involving them at wireframe and after design phase, and maybe a midway dev review, to catch major change requests early.
Domain or Email Setup Issues: Sometimes DNS or setting up the domain on time can be a risk (especially if the domain is new or transfer). We’ll ensure domain is purchased ASAP and point it well before launch day to propagate. Also ensure info@ email is operational (set up MX records if needed). We flagged phone as TBD – we must have that by site launch; if not, we’ll use a temporary number or instruct to remove until available (but that’s not ideal for conversion).
Team Bandwidth: If one person is doing multiple roles (design, dev, content), workload could be heavy. Ensure to allocate tasks realistically or bring help (maybe get a copywriter or use stock content then revise). Buffer time included: we set 10 weeks, if more time needed and not a hard launch date, use an extra week or two rather than launching half-baked.
Compliance Oversights: Overlooking something like accessibility can be risky (legal risk). We mitigate by thorough audit and possibly inviting an accessibility specialist to review critical pages if possible.
Responsibility & Owners:
We’d maintain a RACI chart typically, but simplified: - Overall Project Manager/Lead: (e.g., [Your Name]) – responsible for timeline tracking, QA coordination, content integration. - UX/UI Design: [Designer Name] – accountable for deliver of wireframes, mockups. - Copywriting: [Writer Name or marketing lead] – provides initial content and revisions. - Front-end Dev: [Developer Name] – builds site, implements functionality. - QA testers: could be dev plus another team member for cross-check. - Stakeholder/Client: [Client Contact] – will provide inputs like company info, approve designs, give content feedback (like verifying service descriptions, etc.), and sign off before launch.
We'll have weekly check-ins with the team to update progress and adjust if any task is behind.
Timeline Summary:
Week 1-2: IA & wireframes – Complete by Fri of week 2.
Week 3-4: Visual design & brand assets – Complete by Fri of week 4.
Week 5: Content finalization and dev kickoff (basic scaffolding likely started end of week 4).
Week 6-7: Core development and content insertion. By end of week 7, site should be mostly together content-wise.
Week 8: Feature completion (animations, form integration, schema markup).
Week 9: Internal testing and bug fixes.
Week 10: Client review and final QA. Buffer for any tweaks.
Week 11 (target launch day perhaps mid-week for support availability): Launch.
Week 12: Post-launch monitoring and minor fixes (if any).
This schedule is aggressive but feasible given the site is not extremely large (~15 pages plus 3-4 blog posts initial). If any slip happens, the contingency is to push launch a week or so as needed, assuming no fixed immovable date (if there is, then we adjust scope: maybe reduce animation complexity or number of blog posts included at launch).
Post-Launch Follow-ups (Risks & Mitigation): - If leads are coming in slower than expected via site, we may consider adding more prominent trust signals or adjust content (that's more a marketing iteration than a risk to address now, but just noting we will pay attention to conversion metrics and make iterative improvements). - Ensure someone is assigned to respond quickly to leads coming via the site – a hot lead must get a fast response or the conversion might be lost. That's operational on client side, but we should highlight its importance to them (the site can bring leads, but those leads must be handled well).
By following this plan, we aim to deliver the project on time and within scope, while proactively handling potential issues. Regular communication with the team and client will keep things on track.

## Content Matrix & Ownership

To organize content creation and ensure all pieces are prepared for launch, below is a content matrix listing each page, the content elements needed, who is responsible for providing or creating them, their current status, and any assets (images) required:

| Page / Section                           | Content Owner                         | Status                                      | Assets Needed                                                                                                                                                                                              |
| ---------------------------------------- | ------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Home Page                                | Marketing Lead / Writer               | Draft complete (needs approval)             | - Hero image (high-res image of glass install)<br>- Gallery images (3-4 project photos)<br>- Icons for value props (Lucide icons chosen)<br>- Testimonial quote (need client to verify actual testimonial) |
| Services (All Services index)            | Marketing Lead / Writer               | Draft complete (short descriptions written) | - Possibly icons for each service (if using icons in list) or small thumbnails                                                                                                                             |
| Service: Frameless Shower Doors          | Writer (with input from glass expert) | Draft complete (pending tech review)        | - Before & after images of shower (if available)<br>- 2-3 Finished project photos for gallery<br>- Diagram maybe for hinge vs frameless (optional)                                                         |
| Service: Window Replacement              | Writer / Glass expert                 | Draft v1 (needs review)                     | - Foggy vs clear window photo (before/after)<br>- 2 images of house windows (for gallery)                                                                                                                  |
| Service: Mirrors & Mirrored Walls        | Writer                                | Draft complete                              | - 2 images: vanity mirror, gym mirror wall                                                                                                                                                                 |
| Service: Sliding Patio Doors             | Writer                                | Draft complete                              | - Image of patio door (maybe stock if needed)                                                                                                                                                              |
| Service: Window & Door Screens           | Writer                                | Draft v1 (to revise)                        | - Photo of a window screen (maybe close-up)<br>- Possibly a porch with screens                                                                                                                             |
| Service: Glass Table Tops & Shelves      | Writer                                | Draft complete                              | - Photo of table with glass top<br>- Photo of glass shelf decor                                                                                                                                            |
| Service: Glass Office Doors & Partitions | Writer (with B2B tone)                | Draft complete                              | - Image of office conference room glass wall<br>- Image of glass office door                                                                                                                               |
| Service: Staircase Glass Railings        | Writer                                | Draft complete                              | - Photo of stair with glass railing (need a good example image)                                                                                                                                            |
| Service: Commercial Storefronts          | Writer                                | Draft complete                              | - Photo of a storefront (preferably a local-looking shop)<br>- Before/after if any storefront replacement (optional)                                                                                       |
| About Us                                 | Founder / Marketing team              | Draft v2 (needs founder's story input)      | - Team photo or individual headshots<br>- Logo of any affiliations (e.g., BBB logo for A+ rating, if member of Chamber etc.)<br>- Possibly a map or service area graphic                                   |
| Contact                                  | Marketing team                        | Draft complete                              | - No unique images (maybe a small map embed or icon set for phone/email)                                                                                                                                   |
| Request a Quote                          | Marketing team / Web lead             | Draft complete (intro text written)         | - No images, just form text; ensure any form help text is included                                                                                                                                         |
| Blog Index                               | Content strategist                    | Template ready (listing auto-generated)     | - Thumbnails for each post (we have for initial posts)                                                                                                                                                     |
| Blog Post: Frameless vs Framed Showers   | Writer (Jane Doe)                     | Final draft ready                           | - Image comparing frameless & framed (even a stock image with both types or separate images)<br>- Possibly a small diagram or two if explaining technical differences                                      |
| Blog Post: Window Replacement Tips       | Writer (John Doe)                     | Outline done (full draft by wk 9)           | - Images: old vs new window, maybe an infographic-type image about Low-E (if any; if not, just descriptive text)                                                                                           |
| Blog Post: Glass Maintenance (Example)   | Writer                                | Planned (post-launch)                       | - (To be created post-launch)                                                                                                                                                                              |
| Privacy Policy                           | Legal/PM (using template)             | Draft ready for review                      | - N/A (text only)                                                                                                                                                                                          |
| Terms of Service                         | Legal/PM (template)                   | Draft ready for review                      | - N/A (text only)                                                                                                                                                                                          |

Key: Content Owner – person responsible for writing or sourcing that content. For instance, the writer may produce drafts, but the founder or technical lead should review service details for accuracy. Status – current progress (Draft, Reviewed, Approved, etc.). Assets Needed – list of images, graphics, or media needed and whether we have them or need to source them (stock or client-provided).
Notes on Assets: - We will use a mix of client-provided photos and high-quality stock for any we lack. e.g., if North Glass has a portfolio of past jobs, we want those images (with permission to use). We should request these ASAP (risk: if client delays sending photos). - If custom graphics needed (maybe stylized map for service area), assign a designer to produce that by content deadline. - Ensure image filenames and alt text are SEO-friendly (we will rename files like frameless-shower-after.jpg etc. and write alt accordingly). - All images to be optimized (we will compress via Next/Image but ensure original sizes aren’t huge either to save build time).
Content Workflow: - Drafts will be kept in Google Docs or similar for collaborative editing. Once approved, they’ll be moved into the site (in code or CMS if we had one; here likely directly into JSX/MDX). - For blog posts, possibly prepare them in Markdown or MDX format for easy formatting and then include them.
Open Content Questions: - Phone number: (Open Item) We need the actual number. Placeholder now is “919-XXX-XXXX”. Marked in matrix but obviously must be real before launch. The owner will provide this. - Any testimonials: Do we have permission to use client names? If not, maybe just first name + last initial and city (to maintain authenticity but some anonymity). - Service specifics: e.g., warranty details, licensing – ensure those in content are accurate. The glass expert/founder should confirm things like “10 year warranty on hardware” if that’s a real offering or adjust accordingly. That’s why we assigned content owner to founder for about page and to glass expert for service tech details. - Blog strategy: We listed a couple posts to have by launch. The rest (like 10-15 ideas) will be a backlog to be produced regularly. We can show coming soon or just have fewer posts at launch (which is fine).
Maintaining Content Post-Launch: - We'll likely not have a CMS at initial launch (since it's static). So content updates mean dev involvement (editing code/MD files and redeploying). This is fine short-term, but if marketing wants to add frequent blogs, we might consider at some point integrating a headless CMS or at least using Markdown files that a non-dev could potentially edit in GitHub UI. - For now, the marketing lead will route content changes to dev for implementation. We should note this process for clarity (maybe as assumption: client is okay that for now, updating the site requires contacting our team; if they need autonomy, we plan a Phase 2 to integrate CMS).
Finally, we keep this content matrix updated during the project to track what’s ready and what’s lagging. For example, if by week 5 the Mirrors page is still draft, we highlight that to get it done. No page goes live with lorem ipsum – that’s an absolute.

## Assumptions & Open Questions

During the planning of this project, we’ve made some assumptions and identified areas that need further clarification. It’s important to capture these to avoid surprises. Below is a list of assumptions we are operating under, and open questions to resolve with the stakeholders:
Assumptions:
Business Details Accuracy: We assume the company details given (name North Glass LLC, domain northglassnc.com) are final. We also assume service area is the Triangle (Raleigh, Durham, Cary, etc.) and that the business does not serve beyond that (like not statewide). If they do, we’d adjust content accordingly.
Services Scope: We assume North Glass focuses on the listed services and does not do auto glass or specialty things like decorative stained glass. All content is tailored to those services. If any additional services (e.g., “Emergency Board-up” or “Shower Glass Repair”) should be included, that needs to be clarified.
No E-commerce: The site does not sell products online, it’s purely informational with lead-gen forms. So no shopping cart or payment integration is needed.
Hosting & Maintenance: Hosting on Vercel is acceptable to the client. We assume the client is not tied to some existing hosting that restricts tech choices. Also assume they don’t need an internal CMS right now (content can be updated by developers via code pushes).
Analytics Consent: We assume for the US audience, a simple cookie banner (especially focusing on analytics) is enough and not legally mandated but we’ll implement it out of caution/for EU. We assume client is okay collecting analytics and will have a privacy policy reflecting that.
Timeline Flexibility: We are aiming ~10-11 weeks. We assume there isn’t a hard immovable launch date (like a trade show or ad campaign). If there is (for example, they want site live before a certain date or advertising push), we might need to adjust scope to meet it (noting it here to confirm).
Content Input from Client: We assume the client (North Glass owner/manager) will provide certain content such as:
Company background/story for About (dates, values, any certificates).
Possibly real photos of their work or team. If they don’t have many, we’ll use quality stock but highlight that authenticity is better.
Testimonials: If they have past clients willing to be quoted.
Approval on all final copy (for accuracy in what they offer). We assume timely feedback from them on these to keep schedule.
SEO Strategy Approval: We assume the client wants to invest in SEO (the content strategy suggests yes). They should be aware that creating blog content regularly is part of that plan. We assume they or we will generate those articles over time (if they aren’t committed to that, the blog might become static, affecting the goal of 3-5 queries in top 10).
Warranty & Guarantees: We mentioned “10 year warranty on hardware” from competitor’s info. We assume North Glass is comfortable offering similar warranties (common in industry). If not, we need exact warranty terms from them to avoid misrepresentation.
Social Media & Reviews: We assume North Glass either already has or will have social media presence (Instagram, Facebook). We listed those in footer. If they don’t plan to maintain those, we might remove icons to not send users to empty pages. Also assumed they will gather reviews on Google or similar; if not, we won’t mention “5-star rated” until true.
No Login/Account System: We assume users don’t need to log in for anything. All content is public.
Legal Entity Name on Site: We use “North Glass LLC” on site to match official name, assuming that’s correct for legal (some places require the LLC in some contexts, but often marketing can drop it. We’ll use “North Glass” casually in text and full name in footers).
Browser Support: We assume supporting modern browsers (Chrome, Edge, Firefox, Safari, and iOS/Android webviews). We assume we do not need to support IE11 given modern tech stack.
Email Setup: We assume an email (<info@northglassnc.com>) will be created and can receive mails (via either existing mail provider or we might set up on domain). We will likely use that as sender too for auto replies (via SendGrid or similar), assuming we can authenticate that (we’ll need to add DNS records for SendGrid perhaps).
Consent for Photos: If using any photos of projects that include identifiable property or people, we assume we have permission. For instance, if a photo clearly shows someone’s home interior, we should ensure it’s okay to use (likely fine if the client gave it).
GSAP License: GSAP is free for most usage (GreenSock has some plugins that require license but ScrollTrigger is free). We assume no licensing cost issue for using GSAP/ScrollTrigger.
Hosting Costs: Vercel’s Hobby plan might suffice (if site isn’t heavy traffic or heavy builds). We assume that cost (if any upgrade needed) is acceptable to client (likely minimal).
Content Writing Tone: We assume the somewhat marketing tone we have (professional yet approachable) is what the client wants. If they want a more formal tone or more casual, that’s an open question to confirm preference.
Blog Commitment: We assume at least a few posts at launch to seed content. If client isn’t able to commit to ongoing, we might adjust expectation of “10-15 ideas in 60-90 days” – might be aspirational. So that goal might be dependent on content creation resources.
Open Questions:
Phone Number Confirmation: What is the actual phone number to use on the site? (We need this ASAP to replace placeholders. Also, can this number receive texts? If yes, do we advertise “Text us”?)
Physical Address & Service Area Nuance: Does North Glass have a physical showroom or office clients can visit? If so, address and should we invite visits (like “visit our showroom Mon-Fri...”). If not, we’ll omit address or just city, and present as a mobile service. Also, are there any cities not served within the Triangle or any additional ones (like Garner, Hillsborough)? We listed many, but client should confirm all key towns to mention.
Licenses or Certifications: Is North Glass licensed as a general contractor or have any specific license number for glass/glazing? If yes, should we display license # in footer or about (some states require). Also any industry affiliations (e.g., member of National Glass Association, or local builder associations) – those could be added as logos or mentions for credibility.
Warranty & Insurance Details: What warranties does North Glass offer on its work and products? (We assumed similar to peers, but need confirmation to state accurately.) Are they fully insured and do they want that stated explicitly (“fully licensed and insured”)?
Lead Response Process: Not for site build per se, but we might ask: Who will receive the form submissions and how quickly do they plan to respond? This is to ensure our success metrics (conversions turning to actual sales) have a path. Maybe need to assist in setting up that email on their phone, etc. Also, if they want an SMS notification or something for form (there are ways to send SMS on form receipt).
Google Business Profile: Has the client set this up? If not, we’ll likely strongly encourage it. But if yes, get the shortname or link to encourage reviews. Possibly embed Google reviews on site (not in scope now, but maybe later).
Color & Design Preferences: Based on provided palette, presumably yes. Any logo? Did we get an existing logo or are we essentially designing a logotype? (If they have one, need that asset. If not, we’ll do a simple text stylization for now.)
Images & Portfolio: Does the client have a portfolio of images we can use? If yes, how many and for which services? If limited, which service is priority to show actual work vs using stock?
Blog Strategy Agreement: Are they okay publishing articles that mention local specifics and general tips? (Probably yes, but confirm if any topics off-limits or if they will provide some content themselves.)
Future Functionality: Any known Phase 2 features we should keep in mind? For example, if they eventually want an “online quote generator” or scheduling app or more elaborate gallery, we could at least architect things so adding those is feasible. Asking if they have a roadmap or if this site is considered mostly static for foreseeable future aside from content updates.
Hosting & Domain Access: Who will handle connecting the domain? If we do, we need registrar login or to tell them DNS records to add. Clarify early so launch isn’t held up by DNS confusion.
Email Platform: If using a transactional email service (like SendGrid), is the client okay with that or do they have an IT preference (maybe they have MS Office 365 email and want forms sent there directly)? Probably fine with SendGrid as they won’t notice, but just ensure emails won’t go to spam (we may need to add SPF/DKIM records).
Cookie Consent Scope: Does client have any concern about not showing cookie banner (some U.S. businesses opt not to unless doing retargeting ads). We propose showing one for GA. Confirm if that’s okay or if they’d rather not (we lean towards doing it properly).
Maintenance & Updates: After launch, who will maintain the site? We assume our team for a while. But if client has someone non-technical who might want to update a blog, we might need to provide a quick training or documentation (like “how to add a blog post via markdown and push to GitHub” if they’re up for it, or they send content to us).
Domain Email for Form Auto-Reply: Do they want a branded email address for outbound (e.g., <quotes@northglassnc.com>) or is info@ fine? Also, the wording of auto-reply email: should include any particular message (like “Thank you for contacting North Glass. Your request is important to us... etc.”)? We can draft it, but see if they have preference or existing email style.
Client Staging Review Preference: How does the client want to review the site? We’ll provide a staging link. Some clients like PDF screenshots, but interactive is better. We just confirm who will sign off.
Any content restrictions: For example, are there any types of projects they don’t want to get via the site? (e.g., maybe they don’t want tiny single-pane repairs because not profitable – if so we might avoid highlighting that service or in FAQs set expectations). Or if they don’t do “24/7 emergency” we won’t say that, etc.
Metrics/KPI alignment: Confirm that the conversion rate goals etc. are agreeable. They seem standard, but ensure client understands these are targets. Also clarify that SEO results (top 10 in 90 days) depend on many factors including possibly building some backlinks or citations – which we can assist by listing site in directories, etc., but client may also need to help (like encourage Google reviews which improve local rank).
We will document the answers to these questions and adjust the PRD or implementation accordingly. Keeping track of these open items in project management (perhaps a shared document or task list) will ensure they get resolved in a timely manner, ideally by design or early development phase.
Once assumptions are confirmed or corrected and open questions answered, we will proceed with full confidence that the site meets the client’s needs and expectations.

Why Glass Depots - Glass Depots Raleigh NC

Residential Frameless Glass Shower Doors & Enclosures

Frameless Shower Doors, Window & Glass Repair Services in Cary, NC

Custom Glass Solutions & Glass Installation | Gatsby Glass

Glass Repair & Glass Replacement | Homes and Business| Binswanger Glass

Glass Repair & Glass Replacement | Home, Auto, & Business

Request a Quote - Glass Depots Raleigh NC

---

## Technical Update (integrated)

# North Glass LLC — PRD v1.1 (Tech Stack & NFR Update)

*Last updated: 2025-08-14*

> **Why this update?** Corrects version references to the latest stable ecosystem (Next.js 15+, React 19, Tailwind CSS v4, etc.) and adds a migration checklist. Everything else in the PRD remains valid unless superseded here.

---

## 1) Tech Stack (Revised)

- **Framework:** Next.js **15.x** (App Router, Server Components, Partial/Static pre-rendering as appropriate). Minimum Node.js **18.18+**; recommended **Node.js 22 LTS** in production.
- **React:** **19.x** (stable).
- **Styling:** **Tailwind CSS v4** (new configless engine; use CSS variables for brand tokens).
- **Animations:** **Motion** (formerly Framer Motion) for UI transitions/interactions; **GSAP 3.13+** with **ScrollTrigger** for scroll scenes; **Lenis 1.3+** for smooth, accessible scroll (respect `prefers-reduced-motion`).
- **Icons:** `lucide-react`.
- **Images:** `next/image` with AVIF/WebP, responsive sizes, `sizes/srcset`; strict aspect-ratio to prevent CLS.
- **Accessibility:** WCAG 2.2 AA baseline; ARIA where needed; keyboard-first workflows.
- **Performance:** Route-level code-splitting, `next/script` with `strategy="afterInteractive"`/`lazyOnload` as needed; image budgets; no layout shifts.
- **Hosting/CI:** Vercel (Preview Deploys for PRs; Production + Staging).
- **Analytics/Privacy:** GA4 + **Consent Mode v2** (EEA readiness) and **Vercel Web Analytics**.
- **DX:** TypeScript strict mode; ESLint + Prettier; Playwright for E2E smoke; Lighthouse CI in PRs.

### Recommended `package.json` pins

```jsonc
{
  "engines": { "node": ">=18.18" },
  "dependencies": {
    "next": "^15.4.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "motion": "^12.23.0",
    "gsap": "^3.13.0",
    "lenis": "^1.3.8",
    "lucide-react": "^0.469.0"
  },
  "devDependencies": {
    "typescript": "^5.5.0",
    "@types/node": "^22.0.0",
    "eslint": "^9.0.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "lighthouse": "^12.0.0"
  }
}
```

> Note: Versions reflect stable majors; allow caret updates. Keep Node on **22 LTS** for production stability until Node **24** becomes LTS.

---

## 2) Non-Functional Requirements (Adjusted)

- **Core Web Vitals at launch:** LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms (mobile).
- **Lighthouse:** Perf ≥ 90 (mobile), A11y ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- **Accessibility:** Provide skip links; trap-free dialogs; visible focus; reduced-motion fallbacks (Motion/GSAP disabled or simplified).
- **Privacy:** GA4 **Consent Mode v2** (`ad_user_data`, `ad_personalization`) with region-aware banner; cookieless baseline (Vercel Web Analytics) when declined.

---

## 3) Migration & Implementation Checklist

### Environment & Build

- [ ] Set Node to **22 LTS** in `.nvmrc`/CI and Vercel project settings.
- [ ] Initialize with `create-next-app` (Next 15) + App Router + TypeScript + Tailwind.
- [ ] Configure Tailwind **v4**: define brand tokens (CSS variables) and utility conventions.

### React 19 / Next.js 15 specifics

- [ ] Replace any usage of `useFormState` with **`useActionState`**.
- [ ] Remove deprecated `next/dynamic` `suspense` prop; ensure App Router suspense boundaries are correct.
- [ ] Confirm minimum Node >= **18.18** (CI guard) even if local is Node 22.
- [ ] Prefer Route Handlers for forms (server actions) where appropriate.

### Motion / GSAP / Lenis

- [ ] Install **`motion`** and import from `"motion/react"`; avoid legacy `framer-motion` unless needed for backwards-compat.
- [ ] Scope GSAP + ScrollTrigger to isolated components and lazy-load on routes using them.
- [ ] Initialize **Lenis** once at the app root; integrate `prefers-reduced-motion` and pause on keyboard focus.

### Analytics & Consent

- [ ] Implement **Consent Mode v2** (basic or advanced) before any tagging; send `ad_user_data` & `ad_personalization` where required.
- [ ] Use **Vercel Web Analytics** as a cookieless baseline; load GA4 only after consent.
- [ ] Define event schema: `lead_submit`, `cta_click`, `call_click`, `hero_cta`, `gallery_interaction`, `quote_start_step`, `quote_complete`.

### QA Gates

- [ ] Lighthouse CI on PRs (mobile) must meet targets.
- [ ] Axe-core pass (no critical A11y violations).
- [ ] Visual regression on Home/Service/Quote; no CLS on hero; JSON-LD valid.

---

## 4) Code Starters

**Lenis (app root, simplified):**

```ts
// app/providers.tsx
"use client"
import { useEffect } from "react"
import Lenis from "lenis"

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, syncTouch: true })
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf) }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      lenis.stop()
    } else {
      requestAnimationFrame(raf)
    }
    return () => lenis.destroy()
  }, [])
  return <>{children}</>
}
```

**Motion (simple in-view fade):**

```tsx
import { motion } from "motion/react"

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
```

**GSAP ScrollTrigger (lazy usage in a client component):**

```tsx
"use client"
import { useEffect, useRef } from "react"

export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    ;(async () => {
      const { gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)
      if (!ref.current) return
      gsap.to(ref.current, { yPercent: -25, scrollTrigger: { trigger: ref.current, scrub: true } })
    })()
  }, [])
  return <div ref={ref} className="h-[60vh] bg-[url('/hero.jpg')] bg-cover bg-center" />
}
```

---

## 5) Risks & Decisions

- **Node 24 (Current) vs 22 (LTS):** Use **22 LTS** for launch; revisit once 24 is LTS and fully vetted in CI/CD.
- **Animation density:** Keep scroll effects minimal (conversion-first). Provide robust reduced-motion fallbacks.
- **Consent Mode v2 impact:** Expect lower raw GA4 counts vs. modeled results in EEA; rely on Vercel Analytics for baseline trends.

---

## 6) Open Items

- **Phone number** pending — use placeholder until confirmed.
- Confirm whether SMS/"Text Us" will be enabled (affects CTAs and tracking).

---
