"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      if ((json as { ok: boolean }).ok) {
        setStatus("success");
        form.reset();
        const w = window as unknown as { gtag?: (...args: unknown[]) => void };
        if (typeof window !== "undefined" && w.gtag) {
          w.gtag("event", "contact_submit");
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-xl">
      <input
        type="text"
        name="company"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      <div className="grid gap-2">
        <label htmlFor="name">Name *</label>
        <input
          id="name"
          name="name"
          required
          className="h-11 px-3 rounded-md border border-black/15"
        />
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="h-11 px-3 rounded-md border border-black/15"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="h-11 px-3 rounded-md border border-black/15"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="service">Service Interest</label>
        <select
          id="service"
          name="service"
          className="h-11 px-3 rounded-md border border-black/15"
        >
          <option value="">Select a service (optional)</option>
          <option value="Architectural Design Consultation">Architectural Design Consultation</option>
          <option value="Frameless Shower Doors">Frameless Shower Doors</option>
          <option value="Window Replacement">Window Replacement</option>
          <option value="Custom Mirrors">Custom Mirrors</option>
          <option value="Glass Office Doors">Glass Office Doors</option>
          <option value="Commercial Storefronts">Commercial Storefronts</option>
          <option value="Glass Railings">Glass Railings</option>
          <option value="Aluminum Systems">Aluminum Systems</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label htmlFor="message">How can we help?</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="px-3 py-2 rounded-md border border-black/15"
          placeholder="Tell us about your project. For architectural design consultations, please include project details and any inspiration photos or requirements."
        />
      </div>
      <div className="flex gap-3 items-center">
        <button
          disabled={status === "submitting"}
          className="inline-flex items-center h-11 px-5 rounded-md text-white"
          style={{
            backgroundColor: "var(--brand-turquoise)",
            color: "#00353f",
          }}
        >
          {status === "submitting" ? "Submitting..." : "Send Message"}
        </button>
        <a
          href="mailto:info@northglassnc.com?subject=Contact"
          className="underline"
        >
          Or email us
        </a>
      </div>
      {status === "success" && (
        <p className="text-green-700">
          Thanks! We&apos;ll be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-700">
          Sorry, something went wrong. Please try again or email us.
        </p>
      )}
    </form>
  );
}
