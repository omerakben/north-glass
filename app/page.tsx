//

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-6 py-20">
        <section className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Clearly Better Glass Solutions for Your Home or Business
          </h1>
          <p className="text-[18px] max-w-2xl text-balance">
            Frameless showers, windows, mirrors, railings, and storefronts in
            the Raleigh–Durham–Cary Triangle.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="/request-quote"
              className="inline-flex items-center h-11 px-5 rounded-md text-white"
              style={{
                backgroundColor: "var(--brand-turquoise)",
                color: "#00353f",
              }}
            >
              Request a Free Quote
            </a>
            <a
              href="/services"
              className="inline-flex items-center h-11 px-5 rounded-md border border-black/10"
            >
              View Services
            </a>
          </div>
        </section>
        {/* TODO: Add Services Overview, Value Props, Process, Gallery per PRD */}
      </main>
    </>
  );
}
