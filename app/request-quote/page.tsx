import type { Metadata } from "next";
import QuoteForm from "./QuoteForm";

export const metadata: Metadata = {
  title: "Request a Free Quote",
  description:
    "Tell us about your glass project to get a free, no-obligation estimate from North Glass.",
  alternates: { canonical: "/request-quote" },
};

export default function RequestQuotePage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Request a Free Quote</h1>
      <p className="max-w-prose text-[17px]">
        We typically respond within one business day. Prefer to talk? Call
        <a className="underline ml-1" href="tel:919-000-0000">
          919-000-0000
        </a>
        .
      </p>
      <QuoteForm />
    </main>
  );
}
