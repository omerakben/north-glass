"use client";

import Image from "next/image";
import { useState } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";

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
    | "architectural-design";
  // For single images
  image?: string;
  alt?: string;
  // For before/after
  beforeImage?: string;
  afterImage?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

// Gallery data with actual images from public directory
const galleryItems: GalleryItem[] = [
  {
    id: "1",
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
    id: "2",
    type: "single",
    title: "Commercial Storefront",
    location: "Raleigh, NC",
    category: "storefront",
    image: "/images/commercial-storefronts/commercial-front.png",
    alt: "Modern glass and aluminum commercial storefront installation in Raleigh business district",
  },
  {
    id: "3",
    type: "before-after",
    title: "Glass Staircase Railing",
    location: "Durham, NC",
    category: "railing",
    beforeImage: "/images/staircase-glass-railings/before-stairs.png",
    afterImage: "/images/staircase-glass-railings/after-stairs.png",
    beforeAlt:
      "Traditional closed staircase railing before architectural renovation in Durham home",
    afterAlt:
      "Modern tempered glass staircase railing with aluminum framework maximizing light flow in Durham residence",
  },
  {
    id: "4",
    type: "before-after",
    title: "Window Replacement",
    location: "Chapel Hill, NC",
    category: "window",
    beforeImage: "/images/window-replacement/before-windows.png",
    afterImage: "/images/window-replacement/after-window-replacement.png",
    beforeAlt:
      "Old single-pane windows with outdated aluminum frames before replacement in Chapel Hill home",
    afterAlt:
      "Energy-efficient double-pane windows with modern aluminum framing system in Chapel Hill renovation",
  },
  {
    id: "5",
    type: "single",
    title: "Custom Bathroom Mirror",
    location: "Apex, NC",
    category: "mirror",
    image: "/images/mirrors/custom-bathroom-mirror.png",
    alt: "Large custom frameless bathroom mirror with precision-cut edges by interior architects in Apex home",
  },
  {
    id: "6",
    type: "single",
    title: "Luxury Shower Enclosure",
    location: "Morrisville, NC",
    category: "shower",
    image: "/images/frameless-glass-shower-doors/shower-big.png",
    alt: "Premium frameless glass shower enclosure with architectural design elements in luxury Morrisville bathroom",
  },
  {
    id: "7",
    type: "single",
    title: "Custom Aluminum Storefront System",
    location: "Raleigh, NC",
    category: "aluminum-systems",
    image: "/images/commercial-storefronts/commercial-front.png",
    alt: "Custom aluminum and glass commercial storefront system with architectural design integration in Raleigh business",
  },
  {
    id: "8",
    type: "before-after",
    title: "Architectural Glass & Aluminum Renovation",
    location: "Charlotte, NC",
    category: "architectural-design",
    beforeImage: "/images/window-replacement/before-windows.png",
    afterImage: "/images/commercial-storefronts/commercial-front.png",
    beforeAlt:
      "Traditional building facade before comprehensive architectural renovation in Charlotte",
    afterAlt:
      "Modern architectural design featuring integrated glass and aluminum curtain wall system in Charlotte renovation",
  },
  {
    id: "9",
    type: "single",
    title: "Aluminum Window & Door Integration",
    location: "Asheville, NC",
    category: "aluminum-systems",
    image: "/images/glass-office-doors/commercial-front.png",
    alt: "Custom aluminum window and door system with architectural design precision in Asheville commercial project",
  },
  {
    id: "10",
    type: "before-after",
    title: "AutoCAD-Designed Glass & Aluminum Facade",
    location: "Greensboro, NC",
    category: "architectural-design",
    beforeImage: "/images/staircase-glass-railings/before-stairs.png",
    afterImage: "/images/commercial-storefronts/commercial-front.png",
    beforeAlt:
      "Original building exterior design before professional AutoCAD renovation planning in Greensboro",
    afterAlt:
      "Professional AutoCAD-designed glass and aluminum facade transformation with architectural integration in Greensboro",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "shower", label: "Showers" },
  { id: "window", label: "Windows" },
  { id: "mirror", label: "Mirrors" },
  { id: "door", label: "Doors" },
  { id: "railing", label: "Railings" },
  { id: "storefront", label: "Storefronts" },
  { id: "aluminum-systems", label: "Aluminum Systems" },
  { id: "architectural-design", label: "Architectural Design" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text animate-fade-in-up">
          Our Work
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed animate-fade-in-up animate-delay-100">
          Explore our portfolio of completed glass and aluminum installations
          across North Carolina, featuring architectural design solutions and
          custom systems
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up animate-delay-200">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium animate-delay-dynamic ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                  : "glass-effect text-gray-700 hover:text-blue-600 hover-lift"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-effect rounded-xl overflow-hidden hover-lift hover-glow cursor-pointer animate-fade-in-scale animate-delay-dynamic"
              onClick={() => setSelectedImage(item)}
            >
              {item.type === "before-after" ? (
                <div className="aspect-w-16 aspect-h-12 relative h-64">
                  <BeforeAfterSlider
                    beforeImage={item.beforeImage!}
                    afterImage={item.afterImage!}
                    beforeAlt={item.beforeAlt!}
                    afterAlt={item.afterAlt!}
                    className="h-full"
                  />
                </div>
              ) : (
                <div className="relative h-64 bg-gray-200">
                  <Image
                    src={item.image!}
                    alt={item.alt!}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600">{selectedImage.location}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                  aria-label="Close gallery modal"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                {selectedImage.type === "before-after" ? (
                  <div className="aspect-w-16 aspect-h-9 relative h-96">
                    <BeforeAfterSlider
                      beforeImage={selectedImage.beforeImage!}
                      afterImage={selectedImage.afterImage!}
                      beforeAlt={selectedImage.beforeAlt!}
                      afterAlt={selectedImage.afterAlt!}
                      className="h-full"
                    />
                  </div>
                ) : (
                  <div className="relative h-96 bg-gray-200">
                    <Image
                      src={selectedImage.image!}
                      alt={selectedImage.alt!}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 80vw"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
