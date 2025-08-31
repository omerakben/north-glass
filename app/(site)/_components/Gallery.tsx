"use client";

import { enhancedGalleryItems } from "@/lib/galleryData";
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
  { id: "pergola", label: "Pergolas" },
  { id: "screen", label: "Screens" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === "all"
      ? enhancedGalleryItems
      : enhancedGalleryItems.filter(
          (item) => item.category === selectedCategory
        );

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
              className="bg-white rounded-lg max-w-6xl w-full max-h-[95vh] overflow-auto"
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
                  <div className="relative w-full h-[60vh] min-h-[500px]">
                    <BeforeAfterSlider
                      beforeImage={selectedImage.beforeImage!}
                      afterImage={selectedImage.afterImage!}
                      beforeAlt={selectedImage.beforeAlt!}
                      afterAlt={selectedImage.afterAlt!}
                      className="h-full"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-[60vh] min-h-[500px] bg-gray-200">
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
