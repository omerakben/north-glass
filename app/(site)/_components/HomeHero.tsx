"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Award, Calculator, PenTool, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface HomeHeroProps {
  heading?: string;
  subheading?: string;
  bullets?: { icon?: React.ReactNode; title: string; desc: string }[];
  primaryHref?: string;
  primaryText?: string;
  secondaryHref?: string;
  secondaryText?: string;
  optionalLine?: string;
  className?: string;
}

export function HomeHero({
  heading = "Glass Solutions & Shower Doors",
  subheading = "Professional glass and aluminum company serving all of North Carolina. Frameless showers, windows, custom mirrors with interior architect design.",
  bullets = [
    {
      title: "Bathroom Renovation",
      desc: "Modern showers, mirrors, windows",
      icon: <PenTool className="h-5 w-5" />,
    },
    {
      title: "Complete Systems",
      desc: "Glass & aluminum expertise",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "Interior Architect",
      desc: "Professional design guidance",
      icon: <Award className="h-5 w-5" />,
    },
  ],
  primaryHref = "/request-quote",
  primaryText = "Get Free Quote + Design",
  secondaryHref = "/services",
  secondaryText = "View All Services",
  optionalLine = "Complete design-to-installation solutions for residential and commercial projects",
  className,
}: HomeHeroProps) {
  return (
    <section
      className={cn("relative overflow-hidden py-20 md:py-28 px-4", className)}
      aria-labelledby="home-hero-heading"
    >
      {/* Custom background with technical blueprint design */}
      <div className="absolute inset-0 -z-10">
        {/* Main background image */}
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/images/background.png"
            alt="Technical blueprint showing glass and aluminum systems"
            fill
            sizes="100vw"
            className="object-cover opacity-100"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <Badge
          variant="outline"
          className="mb-6 border-white/30 text-white bg-white/10 backdrop-blur-sm"
        >
          Professional Glass & Aluminum Company
        </Badge>
        <h1
          id="home-hero-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight"
        >
          {heading}
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl text-white/90">
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-white/90 leading-relaxed">
          {subheading}
        </p>
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {bullets.map((b, i) => (
            <div
              key={i}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 font-semibold text-white mb-2">
                <span className="text-white/90">{b.icon}</span>
                {b.title}
              </div>
              <p className="text-sm text-white/80 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mb-4">
          <Button
            asChild
            size="lg"
            className="h-12 px-8 text-base bg-white text-[var(--brand-teal)] hover:bg-white/90 font-semibold shadow-lg"
          >
            <Link href={primaryHref} className="inline-flex items-center gap-2">
              <Calculator size={20} />
              {primaryText}
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="h-12 px-8 text-base border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm bg-transparent"
          >
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2"
            >
              <ArrowRight size={18} />
              {secondaryText}
            </Link>
          </Button>
        </div>
        {optionalLine && (
          <p className="text-sm text-white/70 italic max-w-xl">
            {optionalLine}
          </p>
        )}
      </div>

      {/* Modern glassmorphism decorative elements */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -top-10 -right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none select-none absolute bottom-0 right-1/3 w-40 h-40 bg-white/5 rounded-full blur-2xl"
      />
    </section>
  );
}

export default HomeHero;
