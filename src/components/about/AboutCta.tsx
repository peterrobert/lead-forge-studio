import { Link } from "@tanstack/react-router";

export function AboutCta() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl rounded-[1.75rem] bg-navy px-6 py-14 text-center shadow-xl sm:px-12 lg:py-16">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
            Let's build your next project together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
            Ready to take your business to the next level? Get in touch today for a free consultation
            and quote.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-orange px-8 font-semibold text-white transition hover:bg-[#e56a24]"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
