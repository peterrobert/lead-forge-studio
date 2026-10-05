import { Link } from "@tanstack/react-router";

export function PricingCta() {
  return (
    <section className="px-5 pb-20 sm:px-8 lg:pb-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-navy px-6 py-14 text-center shadow-[0_24px_60px_rgba(0,29,71,0.22)] sm:px-12 sm:py-16 lg:rounded-[2.25rem] lg:py-[4.5rem]">
        <h2 className="font-display text-[1.85rem] font-bold leading-tight tracking-tight text-white sm:text-4xl">
          Still not sure which plan fits?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/70 sm:text-base">
          Book a free consultation call and we'll help you figure out the best solution
          for your unique business needs.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,119,41,0.35)] transition hover:bg-[#e56a24]"
        >
          Get a Free Consultation
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
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
