"use client";
import { trackServiceInquiry } from "@/lib/analytics";
import {
  AlertCircle,
  Building,
  Calculator,
  CheckCircle,
  Clock,
  FileImage,
  Shield,
  Upload,
  X,
} from "lucide-react";
import { useState } from "react";

export default function QuoteForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
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
      case "service":
        if (!value) {
          errors.service = "Please select a service";
        } else {
          delete errors.service;
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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter((file) => {
      const isValidType = file.type.startsWith("image/");
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB limit
      return isValidType && isValidSize;
    });
    setUploadedFiles((prev) => [...prev, ...validFiles].slice(0, 5)); // Max 5 files
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Final validation
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;

    const finalErrors: Record<string, string> = {};
    if (!name?.trim()) finalErrors.name = "Name is required";
    if (!email && !phone) finalErrors.email = "Email or phone is required";
    if (!service) finalErrors.service = "Please select a service";

    if (Object.keys(finalErrors).length > 0) {
      setValidationErrors(finalErrors);
      return;
    }

    // Add uploaded files to form data
    uploadedFiles.forEach((file, index) => {
      formData.append(`file-${index}`, file);
    });

    const serviceName = formData.get("service") as string;
    setStatus("submitting");
    try {
      const res = await fetch("/api/quote", { method: "POST", body: formData });
      const json = await res.json();
      if ((json as { ok: boolean }).ok) {
        setStatus("success");
        form.reset();
        setUploadedFiles([]);
        setValidationErrors({});

        // Enhanced analytics tracking
        const w = window as unknown as { gtag?: (...args: unknown[]) => void };
        if (typeof window !== "undefined" && w.gtag) {
          // Original lead tracking
          w.gtag("event", "lead_submit", { form_type: "quote" });

          // Enhanced service-specific tracking
          if (serviceName) {
            trackServiceInquiry(serviceName);
          }
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
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-center gap-2 text-sm text-blue-800">
          <Clock className="h-4 w-4" />
          <span>24-hour response</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-blue-800">
          <Shield className="h-4 w-4" />
          <span>No-obligation quote</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-blue-800">
          <CheckCircle className="h-4 w-4" />
          <span>Free AutoCAD design</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-blue-800">
          <Building className="h-4 w-4" />
          <span>Licensed & insured</span>
        </div>
      </div>

      <form
        onSubmit={onSubmit}
        className="grid gap-6 max-w-xl mx-auto p-6 rounded-xl glass-effect shadow-lg bg-white/90 backdrop-blur-sm"
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
            Service *
          </label>
          <select
            id="service"
            name="service"
            required
            onChange={handleFieldChange}
            className={`h-12 px-4 rounded-lg border transition-all duration-200 bg-white/80 backdrop-blur-sm ${
              validationErrors.service
                ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            }`}
            aria-describedby={
              validationErrors.service ? "service-error" : undefined
            }
          >
            <option value="">Select a service</option>
            <option>Architectural Design Consultation</option>
            <option>Frameless Shower</option>
            <option>Window Replacement</option>
            <option>Mirrors</option>
            <option>Sliding Patio Doors</option>
            <option>Glass Office Doors</option>
            <option>Staircase Glass Railings</option>
            <option>Commercial Storefronts</option>
            <option>Aluminum Systems</option>
            <option>Other</option>
          </select>
          {validationErrors.service && (
            <div
              id="service-error"
              className="flex items-center gap-1 text-sm text-red-600"
              role="alert"
            >
              <AlertCircle className="h-4 w-4" />
              {validationErrors.service}
            </div>
          )}
        </div>

        {/* Lead Qualification Fields */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-3">
            <label
              htmlFor="property-type"
              className="text-sm font-medium text-gray-700"
            >
              Property Type
            </label>
            <select
              id="property-type"
              name="propertyType"
              className="h-12 px-4 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/80 backdrop-blur-sm"
            >
              <option value="">Select property type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="mixed">Mixed Use</option>
            </select>
          </div>
          <div className="grid gap-3">
            <label
              htmlFor="timeline"
              className="text-sm font-medium text-gray-700"
            >
              Project Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              className="h-12 px-4 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/80 backdrop-blur-sm"
            >
              <option value="">Select timeline</option>
              <option value="immediate">ASAP (Emergency)</option>
              <option value="1month">Within 1 Month</option>
              <option value="3months">1-3 Months</option>
              <option value="6months">3-6 Months</option>
              <option value="planning">Planning Phase</option>
            </select>
          </div>
        </div>

        <div className="grid gap-3">
          <label htmlFor="budget" className="text-sm font-medium text-gray-700">
            Estimated Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            className="h-12 px-4 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/80 backdrop-blur-sm"
          >
            <option value="">Select budget range (optional)</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-15k">$5,000 - $15,000</option>
            <option value="15k-35k">$15,000 - $35,000</option>
            <option value="35k-75k">$35,000 - $75,000</option>
            <option value="75k-plus">$75,000+</option>
            <option value="not-sure">Not Sure Yet</option>
          </select>
        </div>

        <div className="grid gap-3">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700"
          >
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/80 backdrop-blur-sm resize-none"
            placeholder="Tell us about your project. For architectural design consultations, include project scope, timeline, and any specific requirements."
          />
        </div>

        {/* File Upload Section */}
        <div className="grid gap-3">
          <label className="text-sm font-medium text-gray-700">
            Project Inspiration Photos (Optional)
          </label>
          <div className="space-y-4">
            <div className="border-2 border-dashed border-blue-300 rounded-lg p-4 md:p-6 text-center hover:border-blue-400 transition-colors touch-manipulation">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
                title="Upload project inspiration photos"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center gap-2 min-h-[44px] justify-center touch-manipulation tap-highlight-transparent"
              >
                <Upload className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />
                <span className="text-sm text-gray-600">
                  <span className="hidden sm:inline">
                    Click to upload photos or drag and drop
                  </span>
                  <span className="sm:hidden">Tap to upload photos</span>
                </span>
                <span className="text-xs text-gray-500">
                  PNG, JPG up to 10MB each (max 5 files)
                </span>
              </label>
            </div>

            {/* Uploaded Files Display */}
            {uploadedFiles.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">
                  Uploaded Files ({uploadedFiles.length}/5):
                </p>
                {uploadedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-3 p-3 bg-blue-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <FileImage className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700 truncate">
                        {file.name}
                      </span>
                      <span className="text-xs text-gray-500 flex-shrink-0">
                        ({(file.size / 1024 / 1024).toFixed(1)}MB)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="p-1 text-red-500 hover:text-red-700 touch-manipulation tap-highlight-transparent"
                      aria-label={`Remove ${file.name}`}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <button
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl touch-manipulation tap-highlight-transparent min-w-[200px] bg-gradient-to-r from-[var(--brand-blue-primary)] to-[var(--brand-blue-secondary)] hover:from-[var(--brand-blue-dark)] hover:to-[var(--brand-blue-primary)]"
          >
            <Calculator size={18} />
            <span className="hidden sm:inline">
              {status === "submitting"
                ? "Processing..."
                : "Get Quote + Free Design"}
            </span>
            <span className="sm:hidden">
              {status === "submitting" ? "Processing..." : "Get Quote"}
            </span>
          </button>
          <a
            href="mailto:info@northglassnc.com?subject=Quote%20Request"
            className="text-blue-600 hover:text-blue-700 underline font-medium touch-manipulation tap-highlight-transparent min-h-[44px] flex items-center"
          >
            <span className="hidden sm:inline">Or email us directly</span>
            <span className="sm:hidden">Email</span>
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
                Thank you! We received your quote request.
              </p>
            </div>
            <p className="text-green-700 text-sm mt-1">
              We&apos;ll respond within 24 hours with your free AutoCAD design
              and detailed estimate.
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
        <h3 className="text-lg font-semibold mb-4">Your Quote Process</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">
              1
            </div>
            <div>
              <p className="font-medium">Quote Review & Response</p>
              <p className="text-gray-600 text-sm">
                We&apos;ll review your request and contact you within 24 hours
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">
              2
            </div>
            <div>
              <p className="font-medium">Site Consultation</p>
              <p className="text-gray-600 text-sm">
                Our Interior Architect will schedule a site visit for precise
                measurements
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">
              3
            </div>
            <div>
              <p className="font-medium">AutoCAD Design & Quote</p>
              <p className="text-gray-600 text-sm">
                Receive your professional design drawings and detailed project
                estimate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
