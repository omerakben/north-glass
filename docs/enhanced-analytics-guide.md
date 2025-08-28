# Enhanced Analytics Documentation

## Overview

The North Glass website includes comprehensive analytics tracking to provide business intelligence on service inquiries, with special focus on differentiating between aluminum and glass service requests.

## Analytics Events Tracked

### Core Conversion Events

- `lead_submit` - Form submission (quote or contact)
- `contact_submit` - Contact form submission
- `service_inquiry` - Service-specific inquiry with material classification

### Material-Specific Events

- `glass_inquiry` - Glass-focused service requests
- `aluminum_inquiry` - Aluminum-focused service requests
- `design_inquiry` - Architectural design consultation requests
- `mixed_inquiry` - Services involving both materials

### Market Segment Events

- `residential_inquiry` - Residential-only services
- `commercial_inquiry` - Commercial-only services
- `mixed_market_inquiry` - Services serving both markets

### Navigation & Engagement

- `call_click` - Phone number clicks
- `cta_click` - Call-to-action button clicks
- `service_page_visit` - Service page navigation

## Service Classification System

### Glass-Focused Services

- Frameless Shower Doors
- Mirrors
- Glass Table Tops & Shelves
- Window Replacement

### Aluminum-Focused Services

- Window & Door Screens
- Aluminum Systems

### Mixed Material Services

- Sliding Patio Doors (aluminum frames + glass)
- Glass Office Doors (aluminum/glass systems)
- Staircase Glass Railings (various mounting systems)
- Commercial Storefronts (aluminum frames + glass)

### Design Services

- Architectural Design Consultation

## Data Structure

Each service inquiry includes these analytics properties:

```typescript
{
  service_name: string,           // "Frameless Shower"
  service_category: string,       // "glass" | "aluminum" | "mixed" | "design"
  primary_material: string,       // "glass" | "aluminum" | "design" | "mixed"
  is_residential: boolean,        // true if serves residential market
  is_commercial: boolean,         // true if serves commercial market
  source_page: string,           // "/services/frameless-glass-shower-doors"
}
```

## Business Intelligence Queries

### Material Preference Analysis

Use Google Analytics 4 custom reports to track:

- Total glass vs aluminum inquiries over time
- Geographic distribution of material preferences
- Seasonal trends in material selection
- Conversion rates by material type

### Market Segment Analysis

- Residential vs commercial inquiry volume
- Service mix by market segment
- Revenue potential by segment
- Geographic concentration by market type

### Service Performance

- Most requested services
- Service page engagement metrics
- Quote-to-close conversion by service
- Cross-service interest patterns

## Google Analytics 4 Setup

### Custom Dimensions

Create these custom dimensions in GA4:

1. `service_category` - Material category classification
2. `primary_material` - Primary material focus
3. `market_segment` - Residential/commercial classification
4. `service_name` - Specific service requested

### Custom Events

The following events are automatically tracked:

- `service_inquiry` - Service request with full classification
- `glass_inquiry` - Glass-specific requests
- `aluminum_inquiry` - Aluminum-specific requests
- `design_inquiry` - Design consultation requests

### Conversion Goals

Set up these conversions in GA4:

1. `lead_submit` - Any form submission
2. `service_inquiry` - Service-specific inquiries
3. `call_click` - Phone number clicks
4. `glass_inquiry` - Glass service requests
5. `aluminum_inquiry` - Aluminum service requests

## Reporting Dashboard Recommendations

### Executive Summary

- Total leads by material type (glass vs aluminum)
- Monthly trend comparison
- Market segment breakdown
- Top performing services

### Sales Intelligence

- Lead quality by service type
- Geographic distribution of inquiries
- Seasonal patterns by material
- Cross-service opportunity identification

### Marketing Optimization

- Service page performance
- CTA effectiveness by material
- Content engagement by service type
- Conversion funnel analysis

## Implementation Status

### ✅ Completed

- Service classification system
- Enhanced quote form tracking
- Material-specific event tracking
- Market segment identification
- Service page navigation tracking
- Enhanced CTA tracking

### 📋 Next Steps (Optional)

- Heat mapping integration for aluminum content interaction
- A/B testing framework for material-specific CTAs
- Advanced conversion attribution modeling
- Customer journey mapping by material preference

## Usage Examples

### Viewing Glass vs Aluminum Trends

```
GA4 → Events → service_inquiry
Filter by: primary_material = "glass" vs "aluminum"
Group by: Month
```

### Service Performance Analysis

```
GA4 → Events → service_inquiry
Dimensions: service_name, service_category
Metrics: Event count, Conversion rate
```

### Market Segment Distribution

```
GA4 → Events → service_inquiry
Filter by: is_residential = true vs is_commercial = true
Dimensions: service_category
```

## Data Privacy & Compliance

- No personally identifiable information (PII) is tracked
- Service preferences are anonymized
- Data collection respects user consent preferences
- GDPR compliant event tracking

## Testing & Validation

### Testing Service Classifications

```javascript
// Browser console test
import { getAnalyticsSummary } from '@/lib/analytics';
console.log(getAnalyticsSummary());
```

### Verifying Event Tracking

1. Submit quote form with different services
2. Check GA4 Real-time Events
3. Verify custom parameters are populated
4. Confirm material classification is correct

## Related Files

- `/lib/analytics.ts` - Service classification system
- `/app/request-quote/QuoteForm.tsx` - Enhanced quote form
- `/app/contact/ContactForm.tsx` - Enhanced contact form
- `/app/(site)/_components/AnalyticsEvents.tsx` - Global event tracking
