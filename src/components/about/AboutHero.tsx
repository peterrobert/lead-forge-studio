export function AboutHero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 lg:py-24">
        <span className="inline-flex rounded-full bg-orange/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-orange">
          ABOUT US
        </span>
        <h1 className="mt-6 font-display text-[2.35rem] font-bold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[3.9rem] lg:leading-[1.1]">
          A studio built to help
          <br className="hidden lg:block" /> Kenyan businesses{" "}
          <span className="text-orange">win online</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Lead Forge Studio is dedicated to crafting premium digital experiences that drive real
          growth for small and medium enterprises across Kenya.
        </p>
      </div>
    </section>
  );
}
