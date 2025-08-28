"use client";

import { cn } from "@/lib/utils";
import { CheckCircle, Circle } from "lucide-react";

interface ProcessStep {
  title: string;
  description: string;
  details?: string[];
  completed?: boolean;
}

interface ProcessStepperProps {
  steps: ProcessStep[];
  title?: string;
  className?: string;
}

export default function ProcessStepper({
  steps,
  title = "Our Professional Process",
  className,
}: ProcessStepperProps) {
  return (
    <section className={cn("py-12", className)}>
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-black/10 md:left-8"></div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-4 md:gap-6">
                  {/* Step indicator */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-black/10 bg-white">
                      {step.completed ? (
                        <CheckCircle
                          className="w-6 h-6"
                          style={{ color: "var(--brand-teal)" }}
                        />
                      ) : (
                        <span className="text-lg font-semibold text-black/70">
                          {index + 1}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-white rounded-lg border border-black/10 p-6 shadow-sm">
                      <h3 className="text-lg font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-black/70 mb-4">{step.description}</p>

                      {step.details && step.details.length > 0 && (
                        <ul className="space-y-1">
                          {step.details.map((detail, detailIndex) => (
                            <li
                              key={detailIndex}
                              className="text-sm text-black/60 flex items-start gap-2"
                            >
                              <Circle
                                className="w-2 h-2 mt-2 flex-shrink-0"
                                style={{ color: "var(--brand-turquoise)" }}
                              />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
