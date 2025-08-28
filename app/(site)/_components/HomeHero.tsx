"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Award, PenTool, Shield } from "lucide-react";
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
  heading = "Premium Glass & Aluminum Solutions",
  subheading = "Professional glass and aluminum company serving all of North Carolina. Frameless showers, windows, custom mirrors with interior architect design.",
  bullets = [
    {
      title: "AutoCAD Design",
      desc: "Precision planning & measurement",
      icon: <PenTool className="h-4 w-4" />,
    },
    {
      title: "Complete Systems",
      desc: "Glass & aluminum expertise",
      icon: <Shield className="h-4 w-4" />,
    },
    {
      title: "Interior Architect",
      desc: "Professional design guidance",
      icon: <Award className="h-4 w-4" />,
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
      className={cn(
        "relative overflow-hidden py-20 md:py-28 px-6 container mx-auto",
        "gradient-subtle",
        className
      )}
      aria-labelledby="home-hero-heading"
    >
      {/* Modern gradient background with grid pattern */}
      <div className="absolute inset-0 opacity-30 grid-pattern" />

      {/* Professional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-primary/5 via-transparent to-brand-blue-secondary/5" />

      <div className="max-w-5xl relative z-10">
        <Badge
          variant="outline"
          className="mb-6 border-brand-secondary/30 text-brand-primary bg-brand-light/50"
        >
          Professional Glass & Aluminum Company
        </Badge>
        <h1
          id="home-hero-heading"
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6 gradient-text-shadow-dramatic"
        >
          {heading}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-brand-dark">
          {subheading} Complete design-to-installation solutions across
          residential and commercial projects.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {bullets.map((b, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 p-4 rounded-lg glass-effect-premium"
            >
              <div className="flex items-center gap-2 font-medium text-brand-dark">
                <span className="text-brand-primary">{b.icon}</span>
                {b.title}
              </div>
              <p className="text-sm text-brand-gray-medium">{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mb-4">
          <Button asChild size="lg" className="h-12 px-8 text-base btn-primary">
            <Link href={primaryHref}>{primaryText}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 px-8 text-base border-brand-secondary/30 text-brand-primary hover:bg-brand-light/50 hover:border-brand-secondary/50 transition-all duration-300"
          >
            <Link href={secondaryHref}>{secondaryText}</Link>
          </Button>
        </div>
        {optionalLine && (
          <p className="text-sm text-brand-gray-medium italic">
            {optionalLine}
          </p>
        )}
      </div>

      {/* Modern gradient decorative elements with sophisticated colors */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-brand-blue-secondary/20 to-brand-blue-primary/10 rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none select-none absolute bottom-0 right-1/3 w-40 h-40 bg-gradient-to-tl from-brand-blue-light/15 to-brand-blue-secondary/5 rounded-full blur-2xl"
      />
    </section>
  );
}

export default HomeHero;
