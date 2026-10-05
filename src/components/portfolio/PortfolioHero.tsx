export function PortfolioHero() {
  return (
    <section className="bg-cream px-4 pt-16 text-center md:pt-24">
      <span className="inline-block rounded-full border border-orange/50 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange">
        OUR WORK
      </span>
      <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl md:text-6xl">
        Selected <span className="text-orange">Projects</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-muted">
        A showcase of our recent work delivering real results for real businesses through
        modern web technologies and user-centric design.
      </p>
    </section>
  );
}
