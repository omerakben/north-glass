"use client"
import { useState } from "react"

export type FAQItem = { question: string; answer: string }
export default function FAQ({ items, headline = "FAQs" }: { items: FAQItem[]; headline?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <section className="mt-10 max-w-2xl">
      <h2 className="text-2xl font-semibold mb-4">{headline}</h2>
      <div className="divide-y divide-black/10 border border-black/10 rounded-md">
        {items.map((item, idx) => (
          <div key={idx}>
            <button
              className="w-full text-left px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-turquoise)]"
              aria-expanded={openIndex === idx}
              aria-controls={`faq-panel-${idx}`}
              onClick={() => setOpenIndex((v) => (v === idx ? null : idx))}
            >
              <span className="font-medium">{item.question}</span>
            </button>
            {openIndex === idx && (
              <div id={`faq-panel-${idx}`} className="px-4 pb-4 text-black/80">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
