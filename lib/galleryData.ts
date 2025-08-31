// Enhanced Gallery data with comprehensive image collection
// This file contains all gallery items for the website

interface GalleryItem {
  id: string;
  type: "single" | "before-after";
  title: string;
  location: string;
  category:
    | "shower"
    | "window"
    | "mirror"
    | "door"
    | "railing"
    | "storefront"
    | "aluminum-systems"
    | "architectural-design"
    | "pergola"
    | "screen";
  // For single images
  image?: string;
  alt?: string;
  // For before/after
  beforeImage?: string;
  afterImage?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

// Comprehensive Gallery Items with all available images
export const enhancedGalleryItems: GalleryItem[] = [
  // Frameless Shower Doors
  {
    id: "shower-1",
    type: "before-after",
    title: "Frameless Shower Transformation",
    location: "Cary, NC",
    category: "shower",
    beforeImage: "/images/frameless-glass-shower-doors/before-shower-door.png",
    afterImage: "/images/frameless-glass-shower-doors/after-shower-door.png",
    beforeAlt:
      "Outdated framed shower enclosure before renovation in Cary home",
    afterAlt:
      "Modern frameless glass shower enclosure with premium hardware in Cary bathroom renovation",
  },
  {
    id: "shower-2",
    type: "single",
    title: "Luxury Frameless Shower",
    location: "Raleigh, NC",
    category: "shower",
    image:
      "/images/frameless-glass-shower-doors/frameless-shower-enclosure-luxury.jpg",
    alt: "Luxury frameless glass shower enclosure with premium hardware in Raleigh master bathroom",
  },
  {
    id: "shower-3",
    type: "single",
    title: "Modern Frameless Design",
    location: "Durham, NC",
    category: "shower",
    image: "/images/frameless-glass-shower-doors/frameless-shower.jpg",
    alt: "Modern frameless glass shower door installation with contemporary styling in Durham home",
  },
  {
    id: "shower-4",
    type: "single",
    title: "Large Master Shower",
    location: "Chapel Hill, NC",
    category: "shower",
    image: "/images/frameless-glass-shower-doors/shower-big.png",
    alt: "Large frameless glass shower enclosure in Chapel Hill master bathroom suite",
  },
  {
    id: "shower-5",
    type: "single",
    title: "Custom Frameless Door",
    location: "Cary, NC",
    category: "shower",
    image: "/images/frameless-glass-shower-doors/frameless-shower-door.jpg",
    alt: "Custom frameless glass shower door with modern hardware in Cary bathroom",
  },

  // Mirrors
  {
    id: "mirror-1",
    type: "single",
    title: "Bathroom Mirror Installation",
    location: "Raleigh, NC",
    category: "mirror",
    image: "/images/mirrors/bathroom-mirror-installation-raleigh.jpg",
    alt: "Professional bathroom mirror installation in Raleigh home with modern mounting",
  },
  {
    id: "mirror-2",
    type: "single",
    title: "Commercial Mirror",
    location: "Charlotte, NC",
    category: "mirror",
    image: "/images/mirrors/commercial-mirror.jpg",
    alt: "Large commercial mirror installation for Charlotte business space",
  },
  {
    id: "mirror-3",
    type: "single",
    title: "Custom Mirror Design",
    location: "Durham, NC",
    category: "mirror",
    image: "/images/mirrors/custom-bathroom-mirror-design.jpg",
    alt: "Custom designed bathroom mirror with modern styling in Durham home",
  },
  {
    id: "mirror-4",
    type: "single",
    title: "Large Custom Mirror",
    location: "Chapel Hill, NC",
    category: "mirror",
    image: "/images/mirrors/custom-bathroom-mirror-large.jpg",
    alt: "Large custom bathroom mirror with elegant design in Chapel Hill residence",
  },
  {
    id: "mirror-5",
    type: "single",
    title: "Frameless Modern Mirror",
    location: "Cary, NC",
    category: "mirror",
    image: "/images/mirrors/frameless-bathroom-mirror-modern.jpg",
    alt: "Modern frameless bathroom mirror with contemporary design in Cary home",
  },
  {
    id: "mirror-6",
    type: "single",
    title: "Luxury Vanity Mirror",
    location: "Cary, NC",
    category: "mirror",
    image: "/images/mirrors/luxury-vanity-mirror-cary.jpg",
    alt: "Luxury vanity mirror installation in Cary master bathroom",
  },

  // Pergolas
  {
    id: "pergola-1",
    type: "single",
    title: "Custom Glass Pergola",
    location: "Raleigh, NC",
    category: "pergola",
    image: "/images/pergolas/pergola.jpg",
    alt: "Custom glass and aluminum pergola installation for outdoor living space in Raleigh",
  },
  {
    id: "pergola-2",
    type: "single",
    title: "Commercial Pergola",
    location: "Charlotte, NC",
    category: "pergola",
    image: "/images/pergolas/commercial-pergola.jpg",
    alt: "Commercial glass pergola for business outdoor space in Charlotte",
  },
  {
    id: "pergola-3",
    type: "single",
    title: "Large Commercial Pergola",
    location: "Greensboro, NC",
    category: "pergola",
    image: "/images/pergolas/commercial-pergola-two.jpg",
    alt: "Large commercial pergola with glass panels and aluminum frame in Greensboro",
  },
  {
    id: "pergola-4",
    type: "single",
    title: "Modern Commercial Pergola",
    location: "Asheville, NC",
    category: "pergola",
    image: "/images/pergolas/commercial-pergola2.jpg",
    alt: "Modern commercial pergola design with integrated glass system in Asheville",
  },

  // Glass Office Doors
  {
    id: "door-1",
    type: "single",
    title: "Commercial Door System",
    location: "Raleigh, NC",
    category: "door",
    image: "/images/glass-office-doors/commercial-aluminum-door-system.png",
    alt: "Commercial aluminum and glass door system for office building in Raleigh",
  },
  {
    id: "door-2",
    type: "single",
    title: "Modern Office Door",
    location: "Charlotte, NC",
    category: "door",
    image: "/images/glass-office-doors/commercial-office.jpg",
    alt: "Modern glass office door installation with aluminum framework in Charlotte",
  },
  {
    id: "door-3",
    type: "single",
    title: "Professional Office Door",
    location: "Durham, NC",
    category: "door",
    image: "/images/glass-office-doors/commercial-office2.jpg",
    alt: "Professional glass office door with contemporary design in Durham",
  },
  {
    id: "door-4",
    type: "single",
    title: "Corporate Office Door",
    location: "Greensboro, NC",
    category: "door",
    image: "/images/glass-office-doors/commercial-office3.jpg",
    alt: "Elegant glass office door system for corporate environment in Greensboro",
  },
  {
    id: "door-5",
    type: "single",
    title: "Premium Office Door",
    location: "Asheville, NC",
    category: "door",
    image: "/images/glass-office-doors/commercial-office4.png",
    alt: "Premium glass office door with architectural integration in Asheville",
  },

  // Aluminum Windows
  {
    id: "aluminum-1",
    type: "single",
    title: "Commercial Aluminum Windows",
    location: "Charlotte, NC",
    category: "aluminum-systems",
    image:
      "/images/aluminum-windows/commercial-aluminum-window-installation.jpg",
    alt: "Commercial aluminum window installation for business building in Charlotte",
  },
  {
    id: "aluminum-2",
    type: "single",
    title: "Energy Efficient Windows",
    location: "Raleigh, NC",
    category: "aluminum-systems",
    image: "/images/aluminum-windows/commercial-window.png",
    alt: "Modern commercial aluminum window system with energy efficiency in Raleigh",
  },
  {
    id: "aluminum-3",
    type: "single",
    title: "Residential Window Replacement",
    location: "Durham, NC",
    category: "aluminum-systems",
    image: "/images/aluminum-windows/residential-aluminum-windows-nc.jpg",
    alt: "Residential aluminum window replacement in Durham North Carolina home",
  },

  // Staircase Glass Railings
  {
    id: "railing-1",
    type: "before-after",
    title: "Glass Staircase Railing",
    location: "Durham, NC",
    category: "railing",
    beforeImage: "/images/staircase-glass-railings/before-stairs.png",
    afterImage: "/images/staircase-glass-railings/after-stairs.png",
    beforeAlt:
      "Traditional closed staircase railing before renovation in Durham home",
    afterAlt:
      "Modern tempered glass staircase railing with aluminum framework in Durham residence",
  },
  {
    id: "railing-2",
    type: "single",
    title: "Contemporary Glass Railing",
    location: "Cary, NC",
    category: "railing",
    image: "/images/staircase-glass-railings/staircase-glass.jpg",
    alt: "Contemporary glass staircase railing with aluminum framework in Cary home",
  },

  // Window Replacement
  {
    id: "window-1",
    type: "single",
    title: "Window Replacement Results",
    location: "Chapel Hill, NC",
    category: "window",
    image: "/images/window-replacement/after-window-replacement.png",
    alt: "Modern window replacement results with energy efficient design in Chapel Hill",
  },
  {
    id: "window-2",
    type: "single",
    title: "Window Maintenance",
    location: "Cary, NC",
    category: "window",
    image: "/images/window-replacement/aluminum-maintenance.png",
    alt: "Aluminum window maintenance and upgrade services in Cary",
  },
  {
    id: "window-3",
    type: "single",
    title: "Customer Window Project",
    location: "Raleigh, NC",
    category: "window",
    image: "/images/window-replacement/customer-20250830-150432-195.jpg",
    alt: "Customer window replacement project with improved efficiency in Raleigh",
  },
  {
    id: "window-4",
    type: "single",
    title: "Energy Efficient Windows",
    location: "Durham, NC",
    category: "window",
    image: "/images/window-replacement/energy-efficiency.png",
    alt: "Energy efficient window replacement with thermal performance in Durham",
  },
  {
    id: "window-5",
    type: "single",
    title: "Professional Window Service",
    location: "Charlotte, NC",
    category: "window",
    image: "/images/window-replacement/windows-replacment.png",
    alt: "Professional window replacement service in Charlotte North Carolina",
  },

  // Commercial Storefronts
  {
    id: "storefront-1",
    type: "single",
    title: "Modern Commercial Storefront",
    location: "Raleigh, NC",
    category: "storefront",
    image: "/images/commercial-storefronts/commercial-front.png",
    alt: "Modern commercial storefront with glass and aluminum system in Raleigh business district",
  },

  // Window and Door Screens
  {
    id: "screen-1",
    type: "single",
    title: "Bug Screen Installation",
    location: "North Carolina",
    category: "screen",
    image: "/images/window-and-door-screens/bug-screen-installation-nc.jpg",
    alt: "Professional bug screen installation for windows and doors throughout North Carolina",
  },
];
