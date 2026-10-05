import { Link } from "@tanstack/react-router";

const plans = [
  {
    name: "Starter",
    bestFor: "Best for: small businesses just getting started",
    price: "from KSh 25,000",
    priceNote: "/ project",
    features: [
      "Custom responsive design",
      "Up to 5 pages",
      "Contact/WhatsApp integration",
      "Basic SEO setup",
      "1 round of revisions",
      "2-week delivery",
      "Google Analytics setup",
      "Basic performance optimization",
      "Google Search Console setup",
      "Google Company Profile setup",
      "domain registration & hosting setup guidance",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Business",
    bestFor: "Best for: established businesses ready to grow",
    price: "from KSh 50,000",
    priceNote: "/ project",
    features: [
      "Everything in Starter",
      "Up to 10 pages",
      "Advanced SEO foundations",
      "Blog/news section",
      "Performance optimization",
      "2 rounds of revisions",
      "Priority support",
      "Sanity CMS integration for easy content updates",
      "3-5 week delivery",
      "Google Tag Manager setup",
      "Email marketing integration",
    ],
    cta: "Scale Your Business",
    featured: true,
  },
  {
    name: "Custom",
    bestFor: "Best for: custom web apps, portals, dashboards, e-commerce & integrations",
    price: "Let's Talk",
    features: [
      "Custom web application development",
      "Customer portals & dashboards",
      "E-commerce functionality",
      "Third-party API integrations",
      "Dedicated project scoping",
      "Ongoing support options",
    ],
    cta: "Let's Talk",
    featured: false,
  },
] as const;

function CheckMark() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15">
      <svg
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ff7729"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

export function PricingCards() {
  return (
    <section className="px-5 pb-16 sm:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 pt-4 lg:grid-cols-3 lg:gap-6 lg:pt-6">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={
              plan.featured
                ? "relative z-10 flex flex-col rounded-2xl border-2 border-orange bg-white px-6 py-8 shadow-[0_12px_40px_rgba(0,29,71,0.08)] lg:scale-[1.03] lg:px-7 lg:py-9"
                : "relative flex flex-col rounded-2xl border border-navy/5 bg-white px-6 py-8 shadow-[0_8px_30px_rgba(0,29,71,0.05)] lg:px-7"
            }
          >
            {plan.featured ? (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange px-3 py-[5px] text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                MOST POPULAR
              </span>
            ) : null}
            <h2 className="font-display text-[1.65rem] font-bold tracking-tight text-navy">
              {plan.name}
            </h2>
            <p className="mt-1.5 text-sm leading-snug text-muted">{plan.bestFor}</p>
            <p className="mt-6 font-display text-[1.75rem] font-bold leading-[1.15] text-navy lg:whitespace-nowrap lg:text-[1.9rem]">
              {plan.price}
              {"priceNote" in plan && plan.priceNote ? (
                <span className="ml-1 text-[1rem] font-normal text-muted">{plan.priceNote}</span>
              ) : null}
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm leading-snug text-navy">
                  <CheckMark />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <Link
                to="/contact"
                className={
                  plan.featured
                    ? "inline-flex h-12 w-full items-center justify-center rounded-full bg-orange text-sm font-semibold text-white transition hover:bg-[#e56a24]"
                    : "inline-flex h-12 w-full items-center justify-center rounded-full bg-navy text-sm font-semibold text-white transition hover:bg-navy/90"
                }
              >
                {plan.cta}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
