"use client";

import { useState } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface GalleryItem {
  id: string;
  type: "single" | "before-after";
  title: string;
  location: string;
  category: "shower" | "window" | "mirror" | "door" | "railing" | "storefront";
  // For single images
  image?: string;
  alt?: string;
  // For before/after
  beforeImage?: string;
  afterImage?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

// Placeholder gallery data - replace with actual images
const galleryItems: GalleryItem[] = [
  {
    id: "1",
    type: "before-after",
    title: "Frameless Shower Transformation",
    location: "Cary, NC",
    category: "shower",
    beforeImage: "/images/gallery/shower-before-1.jpg",
    afterImage: "/images/gallery/shower-after-1.jpg",
    beforeAlt: "Outdated framed shower",
    afterAlt: "Modern frameless glass shower",
  },
  {
    id: "2",
    type: "single",
    title: "Commercial Storefront",
    location: "Raleigh, NC",
    category: "storefront",
    image: "/images/gallery/storefront-1.jpg",
    alt: "Glass storefront installation",
  },
  {
    id: "3",
    type: "single",
    title: "Glass Staircase Railing",
    location: "Durham, NC",
    category: "railing",
    image: "/images/gallery/railing-1.jpg",
    alt: "Modern glass staircase railing",
  },
  {
    id: "4",
    type: "before-after",
    title: "Window Replacement",
    location: "Chapel Hill, NC",
    category: "window",
    beforeImage: "/images/gallery/window-before-1.jpg",
    afterImage: "/images/gallery/window-after-1.jpg",
    beforeAlt: "Foggy dual-pane window",
    afterAlt: "Clear energy-efficient window",
  },
  {
    id: "5",
    type: "single",
    title: "Custom Bathroom Mirror",
    location: "Apex, NC",
    category: "mirror",
    image: "/images/gallery/mirror-1.jpg",
    alt: "Large custom bathroom mirror",
  },
  {
    id: "6",
    type: "single",
    title: "Glass Office Doors",
    location: "Morrisville, NC",
    category: "door",
    image: "/images/gallery/office-door-1.jpg",
    alt: "Modern glass office doors",
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
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Work</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Browse our portfolio of completed glass installations across the Raleigh-Durham Triangle
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? "bg-[#40E0D0] text-[#00353f]"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
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
                <div className="aspect-w-16 aspect-h-12 relative h-64 bg-gray-200">
                  {/* Placeholder for single images */}
                  <div className="flex items-center justify-center h-full">
                    <span className="text-gray-500">
                      {item.title}
                    </span>
                  </div>
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
                  <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
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
                  <div className="aspect-w-16 aspect-h-9 relative h-96 bg-gray-200">
                    <div className="flex items-center justify-center h-full">
                      <span className="text-gray-500">
                        {selectedImage.title} - Full Size
                      </span>
                    </div>
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