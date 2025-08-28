"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Clock, Shield } from "lucide-react";
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
  heading = "Precision Glass for Your Home",
  subheading = "Frameless showers, efficient window replacement & custom mirrors across North Carolina.",
  bullets = [
    {
      title: "Custom Measurement",
      desc: "Exact fit – no gaps",
      icon: <Check className="h-4 w-4" />,
    },
    {
      title: "Clean Installation",
      desc: "Respectful & efficient",
      icon: <Shield className="h-4 w-4" />,
    },
    {
      title: "Warranty Backed",
      desc: "Quality you can trust",
      icon: <Clock className="h-4 w-4" />,
    },
  ],
  primaryHref = "/request-quote",
  primaryText = "Request a Free Quote",
  secondaryHref = "/services",
  secondaryText = "View Residential Services",
  optionalLine = "Optional design & aluminum support when needed",
  className,
}: HomeHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 md:py-28 px-6 container mx-auto",
        className
      )}
      aria-labelledby="home-hero-heading"
    >
      <div className="max-w-5xl">
        <Badge variant="outline" className="mb-6">
          Serving Homeowners Statewide
        </Badge>
        <h1
          id="home-hero-heading"
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          {heading}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-black/80">
          {subheading} Commercial & aluminum capabilities only when your project
          needs them.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {bullets.map((b, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-medium">
                <span className="text-[var(--brand-teal)]">{b.icon}</span>
                {b.title}
              </div>
              <p className="text-sm text-black/70">{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mb-4">
          <Button asChild size="lg" className="h-12 px-8 text-base">
            <Link href={primaryHref}>{primaryText}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 px-8 text-base"
          >
            <Link href={secondaryHref}>{secondaryText}</Link>
          </Button>
        </div>
        {optionalLine && (
          <p className="text-sm text-black/60 italic">{optionalLine}</p>
        )}
      </div>
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -top-10 -right-10 w-72 h-72 bg-[var(--brand-turquoise)]/10 rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none select-none absolute bottom-0 right-1/3 w-40 h-40 bg-[var(--brand-teal)]/5 rounded-full blur-2xl"
      />
    </section>
  );
}

export default HomeHero;
