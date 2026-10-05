import { Link } from "@tanstack/react-router";

export function PortfolioCta() {
  return (
    <section className="bg-navy px-6 py-20 text-center md:py-28">
      <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
        Have a project in mind?
      </h2>
      <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-white/70 md:text-lg">
        Let's discuss how we can help your business grow with a high-performing digital
        presence.
      </p>
      <Link
        to="/contact"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-navy"
      >
        Start Your Project
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      </Link>
    </section>
  );
}
