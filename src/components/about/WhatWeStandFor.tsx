import type { ReactNode } from "react";
import { EyeIcon, HammerIcon, ShieldIcon, ZapIcon } from "./icons";

const VALUES: {
  title: string;
  body: string;
  icon: ReactNode;
}[] = [
  {
    title: "Craftsmanship",
    body: "We don't cut corners. Every line of code and pixel is placed with intention and care.",
    icon: <HammerIcon size={20} />,
  },
  {
    title: "Transparency",
    body: "We believe in honest communication, clear pricing, and keeping you in the loop at every stage.",
    icon: <EyeIcon size={20} />,
  },
  {
    title: "Reliability",
    body: "When we commit to a deadline or a feature, we deliver. You can count on us to be there for the long haul.",
    icon: <ShieldIcon size={20} />,
  },
  {
    title: "Results-Driven",
    body: "Beautiful design is nothing without results. We focus on conversion, speed, and business goals.",
    icon: <ZapIcon size={20} />,
  },
];

export function WhatWeStandFor() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            What We Stand For
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] text-muted">
            The core principles that guide every project we take on.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl border border-navy/5 bg-cream px-6 py-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                {value.icon}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-navy">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{value.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
