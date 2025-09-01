"use client";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Phone,
  Send,
  Shield,
} from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  // Real-time validation
  const validateField = (name: string, value: string) => {
    const errors: Record<string, string> = { ...validationErrors };

    switch (name) {
      case "name":
        if (!value.trim()) {
          errors.name = "Name is required";
        } else if (value.trim().length < 2) {
          errors.name = "Name must be at least 2 characters";
        } else {
          delete errors.name;
        }
        break;
      case "email":
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors.email = "Please enter a valid email address";
        } else {
          delete errors.email;
        }
        break;
      case "phone":
        if (
          value &&
          !/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-\(\)]/g, ""))
        ) {
          errors.phone = "Please enter a valid phone number";
        } else {
          delete errors.phone;
        }
        break;
    }

    setValidationErrors(errors);
  };

  const handleFieldChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Final validation
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    const finalErrors: Record<string, string> = {};
    if (!name?.trim()) finalErrors.name = "Name is required";
    if (!email && !phone) finalErrors.email = "Email or phone is required";

    if (Object.keys(finalErrors).length > 0) {
      setValidationErrors(finalErrors);
      return;
    }

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
        setValidationErrors({});
        const w = window as unknown as { gtag?: (...args: unknown[]) => void };
        if (typeof window !== "undefined" && w.gtag) {
          w.gtag("event", "contact_submit", {
            form_type: "contact",
            source_page: window.location.pathname,
          });
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  return (
    <div className="space-y-6">
      {/* Trust Signals */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-center gap-2 text-sm text-blue-800">
          <Clock className="h-4 w-4" />
          <span>24-hour response</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-blue-800">
          <Shield className="h-4 w-4" />
          <span>Free consultation</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-blue-800">
          <Phone className="h-4 w-4" />
          <span>Licensed & insured</span>
        </div>
      </div>

      <form
        onSubmit={onSubmit}
        className="grid gap-6 max-w-xl glass-effect p-6 rounded-xl shadow-lg bg-white/90 backdrop-blur-sm"
      >
        {/* Honeypot */}
        <input
          type="text"
          name="company"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="grid gap-3">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name *
          </label>
          <input
            id="name"
            name="name"
            required
            onChange={handleFieldChange}
            className={`h-12 px-4 rounded-lg border transition-all duration-200 bg-white/80 backdrop-blur-sm ${
              validationErrors.name
                ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            }`}
            aria-describedby={validationErrors.name ? "name-error" : undefined}
          />
          {validationErrors.name && (
            <div
              id="name-error"
              className="flex items-center gap-1 text-sm text-red-600"
              role="alert"
            >
              <AlertCircle className="h-4 w-4" />
              {validationErrors.name}
            </div>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-3">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleFieldChange}
              className={`h-12 px-4 rounded-lg border transition-all duration-200 bg-white/80 backdrop-blur-sm ${
                validationErrors.email
                  ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              }`}
              aria-describedby={
                validationErrors.email ? "email-error" : undefined
              }
            />
            {validationErrors.email && (
              <div
                id="email-error"
                className="flex items-center gap-1 text-sm text-red-600"
                role="alert"
              >
                <AlertCircle className="h-4 w-4" />
                {validationErrors.email}
              </div>
            )}
          </div>
          <div className="grid gap-3">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              onChange={(e) => {
                const formatted = formatPhoneNumber(e.target.value);
                e.target.value = formatted;
                handleFieldChange(e);
              }}
              className={`h-12 px-4 rounded-lg border transition-all duration-200 bg-white/80 backdrop-blur-sm ${
                validationErrors.phone
                  ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              }`}
              aria-describedby={
                validationErrors.phone ? "phone-error" : undefined
              }
            />
            {validationErrors.phone && (
              <div
                id="phone-error"
                className="flex items-center gap-1 text-sm text-red-600"
                role="alert"
              >
                <AlertCircle className="h-4 w-4" />
                {validationErrors.phone}
              </div>
            )}
          </div>
        </div>

        <div className="grid gap-3">
          <label
            htmlFor="service"
            className="text-sm font-medium text-gray-700"
          >
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            className="h-12 px-4 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/80 backdrop-blur-sm"
          >
            <option value="">Select a service (optional)</option>
            <option value="Architectural Design Consultation">
              Architectural Design Consultation
            </option>
            <option value="Frameless Shower Doors">
              Frameless Shower Doors
            </option>
            <option value="Window Replacement">Window Replacement</option>
            <option value="Custom Mirrors">Custom Mirrors</option>
            <option value="Glass Office Doors">Glass Office Doors</option>
            <option value="Commercial Storefronts">
              Commercial Storefronts
            </option>
            <option value="Glass Railings">Glass Railings</option>
            <option value="Aluminum Systems">Aluminum Systems</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="grid gap-3">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700"
          >
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/80 backdrop-blur-sm resize-none"
            placeholder="Tell us about your project. For architectural design consultations, please include project details and any inspiration photos or requirements."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <button
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg text-white font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-w-[160px] touch-manipulation tap-highlight-transparent bg-[var(--brand-turquoise)] hover:bg-[var(--brand-turquoise)]/90"
          >
            <Send size={16} />
            {status === "submitting" ? "Sending..." : "Get Free Consultation"}
          </button>
          <a
            href="mailto:info@northglassnc.com?subject=Contact"
            className="text-blue-600 hover:text-blue-700 underline font-medium touch-manipulation tap-highlight-transparent min-h-[44px] flex items-center"
          >
            Or email us directly
          </a>
        </div>

        {status === "success" && (
          <div
            className="p-4 rounded-lg bg-green-50 border border-green-200"
            role="alert"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <p className="text-green-800 font-medium">
                Thank you! We received your message.
              </p>
            </div>
            <p className="text-green-700 text-sm mt-1">
              We&apos;ll respond within 24 hours with next steps for your
              project.
            </p>
          </div>
        )}

        {status === "error" && (
          <div
            className="p-4 rounded-lg bg-red-50 border border-red-200"
            role="alert"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <p className="text-red-800 font-medium">
                Sorry, something went wrong. Please try again or call us
                directly.
              </p>
            </div>
          </div>
        )}
      </form>

      {/* What Happens Next */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">What Happens Next?</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">
              1
            </div>
            <div>
              <p className="font-medium">Initial Response</p>
              <p className="text-gray-600 text-sm">
                We&apos;ll contact you within 24 hours to discuss your project
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">
              2
            </div>
            <div>
              <p className="font-medium">Free Consultation</p>
              <p className="text-gray-600 text-sm">
                Our Interior Architect will assess your needs and provide expert
                recommendations
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">
              3
            </div>
            <div>
              <p className="font-medium">Custom Design & Quote</p>
              <p className="text-gray-600 text-sm">
                Receive your AutoCAD design and detailed project estimate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
