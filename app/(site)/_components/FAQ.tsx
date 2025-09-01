"use client";
import { CheckCircle, ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

export type FAQItem = { question: string; answer: string };

function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FAQ({
  items,
  headline = "FAQs",
}: {
  items: FAQItem[];
  headline?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="mt-10 max-w-2xl">
      <FAQSchema items={items} />
      <h2 className="text-2xl font-semibold mb-4">{headline}</h2>
      <div className="divide-y divide-black/10 border border-black/10 rounded-md">
        {items.map((item, idx) => (
          <div key={idx}>
            <button
              className="w-full text-left px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-turquoise)] hover:bg-black/5 transition-colors duration-200 flex items-center justify-between group"
              aria-expanded={openIndex === idx ? "true" : "false"}
              aria-controls={`faq-panel-${idx}`}
              onClick={() => setOpenIndex((v) => (v === idx ? null : idx))}
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-[var(--brand-turquoise)] flex-shrink-0" />
                <span className="font-medium">{item.question}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-black/60 transition-transform duration-200 flex-shrink-0 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === idx && (
              <div
                id={`faq-panel-${idx}`}
                className="px-4 pb-4 animate-in slide-in-from-top-2 duration-200"
              >
                <div className="flex items-start gap-3 pt-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-black/80 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
