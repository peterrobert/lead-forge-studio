import { useState } from "react";

const faqs = [
  {
    question: "What's included in the price?",
    answer:
      "Our pricing is transparent. Each package includes custom design, mobile responsiveness, essential SEO, and development. Specifics like page count and revision rounds vary by tier as detailed above. There are no hidden fees for the services listed.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we typically work with a 50% deposit to initiate the project and the remaining 50% upon completion before launch. For larger projects (Custom tier), we can discuss milestone-based payment schedules.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A Starter project usually takes about 2 weeks. Business tier projects typically range from 3-5 weeks depending on complexity. Custom applications vary and we'll provide a detailed timeline during scoping.",
  },
  {
    question: "Do you provide hosting and domain setup?",
    answer:
      "While hosting and domain registration fees are separate (paid to third-party providers), we handle the entire setup process for you. We can recommend reliable, fast hosting partners that work best for Kenyan businesses.",
  },
  {
    question: "What if I need ongoing changes after launch?",
    answer:
      "For minor changes, we include a short post-launch support period. For regular updates, we offer maintenance retainers. All our sites are built on easy-to-use platforms (like CMS) so you can also make basic content updates yourself.",
  },
  {
    question: "Do prices include maintenance?",
    answer:
      "Development prices are for the initial build. Ongoing maintenance (security updates, backups, technical support) is available as an optional monthly subscription to keep your site running smoothly.",
  },
] as const;

export function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-5 pb-16 pt-4 sm:px-8 lg:pb-20">
      <div className="mx-auto max-w-7xl border-t border-navy/10" />
      <h2 className="mt-16 text-center font-display text-[1.85rem] font-bold tracking-tight text-navy sm:mt-20 sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
        {faqs.map((faq, index) => {
          const open = openIndex === index;
          return (
            <div key={faq.question} className="border-b border-navy/10">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span className="text-[15px] font-semibold text-navy sm:text-base">
                  {faq.question}
                </span>
                <svg
                  className={`shrink-0 text-navy transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {open ? (
                <p className="pb-5 pr-8 text-sm leading-relaxed text-muted">{faq.answer}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
