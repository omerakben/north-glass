// Image data management for North Glass website
// This file contains organized image data for all service categories

export interface ImageData {
  src: string;
  alt: string;
  title?: string;
  location?: string;
}

export interface ServiceImages {
  [key: string]: ImageData[];
}

// Frameless Glass Shower Doors Images
export const showerDoorImages: ImageData[] = [
  {
    src: "/images/frameless-glass-shower-doors/before-shower-door.png",
    alt: "Traditional framed shower enclosure before renovation",
    title: "Before: Traditional Shower",
    location: "Cary, NC"
  },
  {
    src: "/images/frameless-glass-shower-doors/after-shower-door1.png", 
    alt: "Modern frameless glass shower enclosure after renovation",
    title: "After: Frameless Glass Shower",
    location: "Cary, NC"
  },
  {
    src: "/images/frameless-glass-shower-doors/frameless-shower-enclosure-luxury.jpg",
    alt: "Luxury frameless glass shower enclosure with premium hardware",
    title: "Luxury Frameless Shower",
    location: "Raleigh, NC"
  },
  {
    src: "/images/frameless-glass-shower-doors/frameless-shower.jpg",
    alt: "Modern frameless glass shower door installation",
    title: "Frameless Shower Door",
    location: "Durham, NC"
  },
  {
    src: "/images/frameless-glass-shower-doors/shower-big.png",
    alt: "Large frameless glass shower enclosure in master bathroom",
    title: "Large Master Shower",
    location: "Chapel Hill, NC"
  }
];// Additional shower door images
export const additionalShowerImages: ImageData[] = [
  {
    src: "/images/frameless-glass-shower-doors/frameless-shower-door2.jpg",
    alt: "Elegant frameless glass shower enclosure in modern bathroom",
    title: "Elegant Shower Enclosure",
    location: "Raleigh, NC"
  },
  {
    src: "/images/frameless-glass-shower-doors/frameless-shower-door3.jpg",
    alt: "Minimalist frameless glass shower design with clean lines",
    title: "Minimalist Shower Design",
    location: "Durham, NC"
  },
  {
    src: "/images/frameless-glass-shower-doors/frameless-shower-door4.jpg",
    alt: "Contemporary frameless glass shower with premium finishes",
    title: "Contemporary Shower",
    location: "Chapel Hill, NC"
  },
  {
    src: "/images/frameless-glass-shower-doors/frameless-shower-door5.jpg",
    alt: "Spacious frameless glass shower in luxury bathroom",
    title: "Luxury Bathroom Shower",
    location: "Cary, NC"
  }
];

// Mirror Images
export const mirrorImages: ImageData[] = [
  {
    src: "/images/mirrors/bathroom-mirror-installation-raleigh.jpg",
    alt: "Professional bathroom mirror installation in Raleigh home",
    title: "Bathroom Mirror Installation",
    location: "Raleigh, NC"
  },
  {
    src: "/images/mirrors/commercial-mirror.jpg",
    alt: "Large commercial mirror installation for business space",
    title: "Commercial Mirror",
    location: "Raleigh, NC"
  },
  {
    src: "/images/mirrors/custom-bathroom-mirror-design.jpg",
    alt: "Custom designed bathroom mirror with modern styling",
    title: "Custom Mirror Design",
    location: "Durham, NC"
  }
];