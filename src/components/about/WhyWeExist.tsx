const OFFICE_PHOTO =
  "/imported/de51bd77cb84-gen_952ec28575_16dd6b8de1720843.webp";

const PILLARS = [
  {
    title: "Craftsmanship",
    body: "Thoughtful design and clean, maintainable code.",
  },
  {
    title: "Partnership",
    body: "We work with businesses, not just project briefs.",
  },
  {
    title: "Growth",
    body: "Digital foundations designed to evolve with you.",
  },
] as const;

export function WhyWeExist() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-orange/[0.06]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-orange/[0.07]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange font-display text-[11px] font-bold text-white">
                01
              </span>
              <span className="text-[11px] font-semibold tracking-[0.22em] text-orange">
                WHY WE EXIST
              </span>
            </div>

            <h2 className="mt-5 font-display text-[2.15rem] font-bold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[3.35rem]">
              Building a better
              <br />
              <span className="text-orange">digital future.</span>
            </h2>

            <p className="mt-8 text-lg font-medium leading-snug text-navy sm:text-xl">
              We believe great digital experiences shouldn't be reserved for companies with massive
              budgets.
            </p>
            <p className="mt-5 text-[15px] leading-7 text-muted">
              Lead Forge Studio was founded with a simple idea: businesses of every size deserve to
              be represented online with the same care, professionalism, and attention to detail.
            </p>
            <p className="mt-5 text-[15px] leading-7 text-muted">
              Too many businesses are forced to choose between expensive agencies and generic
              templates. We exist in that space between the two combining thoughtful design, solid
              engineering, and personal service to create websites and web applications that actually
              work for the business behind them.
            </p>
            <p className="mt-5 text-[15px] leading-7 text-muted">
              Our goal is bigger than launching websites. We want to give ambitious businesses a
              strong digital foundation they can build on as they grow locally, nationally, and
              beyond.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 border-t border-navy/10 pt-8 sm:grid-cols-3 sm:gap-6">
              {PILLARS.map((pillar) => (
                <div key={pillar.title}>
                  <div className="mb-3 h-[3px] w-8 rounded-full bg-orange" />
                  <h3 className="font-display text-base font-bold text-navy">{pillar.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:pt-2">
            <div className="relative mx-auto max-w-md lg:h-full lg:max-w-none">
              <div className="relative mb-2.5 mr-2.5 h-full">
                <div
                  className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[1.6rem] bg-orange"
                  aria-hidden="true"
                />
                <div className="relative h-full overflow-hidden rounded-[1.6rem] shadow-lg">
                  <img
                    src={OFFICE_PHOTO}
                    alt="Lead Forge Studio workspace"
                    className="aspect-[4/3] w-full object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/15 to-transparent" />
                  <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-navy shadow-sm">
                    Nairobi → Worldwide
                  </div>
                  <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
                    <p className="text-[10px] font-medium tracking-[0.22em] text-white/70">
                      LEADFORGE STUDIO
                    </p>
                    <p className="mt-1.5 max-w-[17rem] font-display text-[1.65rem] font-semibold leading-[1.2] text-white">
                      Digital foundations for businesses ready to move forward.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -left-3 -top-1 hidden h-14 w-14 items-center justify-center rounded-2xl bg-navy font-display text-lg font-bold text-white shadow-md lg:flex">
                01
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
