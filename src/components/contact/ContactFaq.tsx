import { useState } from "react";
import { ChevronDownIcon } from "./icons";

const FAQS = [
  {
    q: "How soon can we start?",
    a: "We typically can begin new projects within 1–2 weeks of initial consultation and contract signing, depending on our current project queue.",
  },
  {
    q: "Do you work with clients outside Nairobi?",
    a: "Absolutely! While we're based in Nairobi, we've successfully collaborated with clients across Kenya and internationally using digital communication and project management tools.",
  },
  {
    q: "What do you need from me to get started?",
    a: "To get the best results, we usually need your brand assets (logo, colors), existing copy/content, high-quality images, and a clear understanding of your business goals.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes, we provide 30 days of post-launch support for every project. We also offer monthly maintenance plans for security updates, hosting, and content changes.",
  },
  {
    q: "How long does a typical website take to build?",
    a: "A standard business website usually takes 3-6 weeks from kickoff to launch. More complex custom web applications may take 8-12 weeks or longer depending on features.",
  },
] as const;

export function ContactFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Common Questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[15px] text-muted">
          Everything you need to know about working with Lead Forge Studio.
        </p>
        <div className="mt-12">
          {FAQS.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className="border-b border-navy/10">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="font-display text-[15px] font-semibold text-navy sm:text-base">
                    {item.q}
                  </span>
                  <ChevronDownIcon
                    size={18}
                    className={`shrink-0 text-navy transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen ? (
                  <p className="pb-6 text-sm leading-relaxed text-muted">{item.a}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
