"use client";
import { trackServiceInquiry } from "@/lib/analytics";
import { Calculator, FileImage, Upload, X } from "lucide-react";
import { useState } from "react";

export default function QuoteForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

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
    <form
      onSubmit={onSubmit}
      className="mt-8 grid gap-6 max-w-xl p-6 rounded-xl glass-effect shadow-lg"
    >
      <input
        type="text"
        name="company"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      <div className="grid gap-3">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name *
        </label>
        <input
          id="name"
          name="name"
          required
          className="h-12 px-4 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/80 backdrop-blur-sm"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="grid gap-3">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="h-12 px-4 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/80 backdrop-blur-sm"
          />
        </div>
        <div className="grid gap-3">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="h-12 px-4 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/80 backdrop-blur-sm"
          />
        </div>
      </div>
      <div className="grid gap-3">
        <label htmlFor="service" className="text-sm font-medium text-gray-700">
          Service *
        </label>
        <select
          id="service"
          name="service"
          required
          className="h-12 px-4 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/80 backdrop-blur-sm"
        >
          <option value="">Select a service</option>
          <option>Architectural Design Consultation</option>
          <option>Frameless Shower</option>
          <option>Window Replacement</option>
          <option>Mirrors</option>
          <option>Sliding Patio Doors</option>
          <option>Window & Door Screens</option>
          <option>Glass Table Tops & Shelves</option>
          <option>Glass Office Doors</option>
          <option>Staircase Glass Railings</option>
          <option>Commercial Storefronts</option>
          <option>Aluminum Systems</option>
          <option>Other</option>
        </select>
      </div>
      <div className="grid gap-3">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
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
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                >
                  <FileImage className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-gray-700 flex-1">
                    {file.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(1)}MB
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-red-500 hover:text-red-700"
                    title="Remove file"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <button
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 h-12 px-6 rounded-lg text-white font-medium bg-gradient-to-r from-[var(--brand-blue-primary)] to-[var(--brand-blue-secondary)] hover:from-[var(--brand-blue-dark)] hover:to-[var(--brand-blue-primary)] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation tap-highlight-transparent min-h-[44px]"
        >
          <Calculator size={18} />
          <span className="hidden sm:inline">
            {status === "submitting"
              ? "Submitting..."
              : "Request Quote + Design"}
          </span>
          <span className="sm:hidden">
            {status === "submitting" ? "Submitting..." : "Get Quote"}
          </span>
        </button>
        <a
          href="mailto:info@northglassnc.com?subject=Quote%20Request"
          className="text-blue-600 hover:text-blue-700 underline font-medium touch-manipulation tap-highlight-transparent min-h-[44px] flex items-center"
        >
          <span className="hidden sm:inline">Or email us</span>
          <span className="sm:hidden">Email</span>
        </a>
      </div>
      {status === "success" && (
        <div className="p-4 rounded-lg bg-green-50 border border-green-200">
          <p className="text-green-800 font-medium">
            Thank you! We received your request.
          </p>
        </div>
      )}
      {status === "error" && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200">
          <p className="text-red-800 font-medium">
            Sorry, something went wrong. Please try again or email us.
          </p>
        </div>
      )}
    </form>
  );
}
