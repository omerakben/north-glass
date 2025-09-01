"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  projectType: string;
  rating: number;
  image: string;
  imageAlt: string;
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
  autoRotate?: boolean;
  rotationInterval?: number; // in milliseconds
  className?: string;
}

// Sample testimonial data based on case studies and North Carolina locations
const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "The transformation is incredible! Our Interior Architect from North Glass understood exactly how to maximize the light flow in our open-concept home. The glass railing looks like it was always part of the original design.",
    name: "Amanda & David Kim",
    location: "Durham, NC",
    projectType: "Staircase Glass Railing",
    rating: 5,
    image: "/images/testimonials/kim-family.jpg",
    imageAlt:
      "Amanda and David Kim, satisfied North Glass customers from Durham",
  },
  {
    id: "2",
    quote:
      "North Glass exceeded our expectations with our master bathroom renovation. The AutoCAD designs helped us visualize everything perfectly, and the installation was flawless. Our bathroom feels like a luxury spa now!",
    name: "Jennifer Martinez",
    location: "Cary, NC",
    projectType: "Frameless Shower Enclosure",
    rating: 5,
    image: "/images/testimonials/jennifer-martinez.jpg",
    imageAlt: "Jennifer Martinez, satisfied North Glass customer from Cary",
  },
  {
    id: "3",
    quote:
      "As a business owner, I needed efficient, professional service for our office renovation. North Glass delivered exactly that - on time, on budget, and the results speak for themselves. Our workspace looks amazing.",
    name: "Michael Chen",
    location: "Raleigh, NC",
    projectType: "Commercial Glass Partitions",
    rating: 5,
    image: "/images/testimonials/michael-chen.jpg",
    imageAlt:
      "Michael Chen, satisfied North Glass commercial customer from Raleigh",
  },
  {
    id: "4",
    quote:
      "The attention to detail and professional design process sets North Glass apart. They didn't just install windows - they provided architectural solutions that enhanced our entire home's aesthetic.",
    name: "Sarah & Tom Wilson",
    location: "Chapel Hill, NC",
    projectType: "Window Replacement",
    rating: 5,
    image: "/images/testimonials/wilson-family.jpg",
    imageAlt:
      "Sarah and Tom Wilson, satisfied North Glass customers from Chapel Hill",
  },
];

export default function TestimonialCarousel({
  testimonials = defaultTestimonials,
  autoRotate = true,
  rotationInterval = 6000, // 6 seconds
  className = "",
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-rotation functionality
  useEffect(() => {
    if (autoRotate && !isPaused && !isFocused && testimonials.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, rotationInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoRotate, isPaused, isFocused, testimonials.length, rotationInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }
      />
    ));
  };

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      ref={carouselRef}
      className={`relative bg-white rounded-lg shadow-lg p-8 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      role="region"
      aria-label="Customer testimonials"
      aria-live="polite"
    >
      {/* Main testimonial content */}
      <div className="max-w-4xl mx-auto">
        {/* Desktop layout: Side-by-side */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-8 md:items-center">
          {/* Customer photo and info */}
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              {!imageErrors[currentTestimonial.name] ? (
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.imageAlt}
                  width={96}
                  height={96}
                  className="rounded-full object-cover border-2 border-blue-200"
                  onError={() => {
                    setImageErrors((prev) => ({
                      ...prev,
                      [currentTestimonial.name]: true,
                    }));
                  }}
                />
              ) : (
                /* Fallback gradient avatar */
                <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center border-2 border-blue-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {currentTestimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-1">
              {currentTestimonial.name}
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              {currentTestimonial.location}
            </p>
            <p className="text-[var(--brand-teal)] text-sm font-medium mb-3">
              {currentTestimonial.projectType}
            </p>
            <div className="flex justify-center gap-1">
              {renderStars(currentTestimonial.rating)}
            </div>
          </div>

          {/* Quote */}
          <div className="col-span-2">
            <div className="relative">
              <div className="text-4xl text-[var(--brand-turquoise)] mb-4 leading-none">
                &ldquo;
              </div>
              <blockquote className="text-lg text-gray-700 leading-relaxed italic mb-4">
                {currentTestimonial.quote}
              </blockquote>
              <div className="text-4xl text-[var(--brand-turquoise)] text-right leading-none">
                &rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout: Stacked */}
        <div className="md:hidden text-center">
          <div className="relative w-20 h-20 mx-auto mb-4">
            {!imageErrors[currentTestimonial.name] ? (
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.imageAlt}
                width={80}
                height={80}
                className="rounded-full object-cover border-2 border-blue-200"
                onError={() => {
                  setImageErrors((prev) => ({
                    ...prev,
                    [currentTestimonial.name]: true,
                  }));
                }}
              />
            ) : (
              /* Fallback gradient avatar */
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center border-2 border-blue-200">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {currentTestimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center gap-1 mb-4">
            {renderStars(currentTestimonial.rating)}
          </div>

          <div className="relative mb-6">
            <div className="text-3xl text-[var(--brand-turquoise)] mb-2 leading-none">
              &ldquo;
            </div>
            <blockquote className="text-base text-gray-700 leading-relaxed italic mb-2">
              {currentTestimonial.quote}
            </blockquote>
            <div className="text-3xl text-[var(--brand-turquoise)] text-right leading-none">
              &rdquo;
            </div>
          </div>

          <h3 className="font-semibold text-lg text-gray-900 mb-1">
            {currentTestimonial.name}
          </h3>
          <p className="text-gray-600 text-sm mb-1">
            {currentTestimonial.location}
          </p>
          <p className="text-[var(--brand-teal)] text-sm font-medium">
            {currentTestimonial.projectType}
          </p>
        </div>
      </div>

      {/* Navigation controls - only show if more than 1 testimonial */}
      {testimonials.length > 1 && (
        <>
          {/* Arrow navigation */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border border-gray-200 hover:border-[var(--brand-teal)] text-gray-600 hover:text-[var(--brand-teal)] p-2 rounded-full shadow-sm transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border border-gray-200 hover:border-[var(--brand-teal)] text-gray-600 hover:text-[var(--brand-teal)] p-2 rounded-full shadow-sm transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[var(--brand-teal)]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Pause/Play control for accessibility */}
          {autoRotate && (
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label={
                isPaused ? "Resume auto-rotation" : "Pause auto-rotation"
              }
            >
              {isPaused ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </button>
          )}
        </>
      )}

      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Testimonial {currentIndex + 1} of {testimonials.length}:
        {currentTestimonial.quote} - {currentTestimonial.name},{" "}
        {currentTestimonial.location}
      </div>
    </div>
  );
}
