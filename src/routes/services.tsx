import { Link, createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SITE_TITLE } from "#/data/site";
import { ServiceBlock } from "#/components/services/ServiceBlock";
import {
  ArrowRightIcon,
  BoltIcon,
  CodeIcon,
  GlobeIcon,
  NodesIcon,
  RefreshIcon,
  SearchIcon,
  ShieldIcon,
  TargetIcon,
} from "#/components/services/icons";

const OG_IMAGE = "https://lead-forge-studio.whop.site/imported/ad17b80aec4b-comp.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:image", content: OG_IMAGE },
    ],
  }),
  component: ServicesPage,
});

function IconBadge({
  className,
  children,
  size = "md",
}: {
  className: string;
  children: ReactNode;
  size?: "sm" | "md";
}) {
  const dim = size === "sm" ? "h-10 w-10" : "h-12 w-12";
  return (
    <span className={`inline-flex ${dim} items-center justify-center rounded-2xl ${className}`}>
      {children}
    </span>
  );
}

function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-navy">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,255,255,0.16),transparent_58%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-28 lg:py-32">
          <span className="inline-flex items-center rounded-full border border-orange/45 bg-navy/30 px-4 py-1.5 text-sm font-medium text-orange">
            Our Services
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            What We <span className="text-orange">Build</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Lead Forge Studio designs and engineers digital products tailored to how each business
            actually works. No templates, just high-performance results.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <ServiceBlock
          title="Business Websites"
          description="Professional websites that clearly communicate your business, services, and value."
          features={[
            "Custom design",
            "Responsive development",
            "Business pages",
            "WhatsApp/contact integration",
            "SEO foundations",
          ]}
          icon={
            <IconBadge className="bg-[#e8f0fe] text-[#3b6cff]">
              <GlobeIcon size={22} />
            </IconBadge>
          }
          mockIcon={
            <IconBadge size="sm" className="bg-[#e8f0fe] text-[#3b6cff]">
              <GlobeIcon size={18} />
            </IconBadge>
          }
        />
      </section>

      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <ServiceBlock
          title="Website Redesigns"
          description="Modernize an outdated website with a better visual identity, user experience, and mobile experience."
          features={[
            "UI/UX redesign",
            "Mobile optimization",
            "Performance improvements",
            "Content restructuring",
            "SEO improvements",
          ]}
          reverse
          icon={
            <IconBadge className="bg-[#f3e8ff] text-[#9b6bff]">
              <RefreshIcon size={22} />
            </IconBadge>
          }
          mockIcon={
            <IconBadge size="sm" className="bg-[#f3e8ff] text-[#9b6bff]">
              <RefreshIcon size={18} />
            </IconBadge>
          }
        />
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <ServiceBlock
          title="Landing Pages"
          description="Focused pages designed around one goal, generating enquiries, bookings, registrations, or sales."
          features={[
            "Campaign landing pages",
            "Product pages",
            "Lead-generation pages",
            "Conversion-focused layouts",
          ]}
          icon={
            <IconBadge className="bg-orange/10 text-orange">
              <TargetIcon size={22} />
            </IconBadge>
          }
          mockIcon={
            <IconBadge size="sm" className="bg-orange/10 text-orange">
              <TargetIcon size={18} />
            </IconBadge>
          }
        />
      </section>

      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <ServiceBlock
          title="Custom Web Applications"
          description="Digital platforms built around your business processes instead of forcing your business into a generic template."
          features={[
            "Customer portals",
            "Dashboards",
            "Booking systems",
            "Internal business systems",
            "Workflow applications",
            "API integrations",
          ]}
          reverse
          icon={
            <IconBadge className="bg-[#e6f6ee] text-[#2f9e6b]">
              <CodeIcon size={22} />
            </IconBadge>
          }
          mockIcon={
            <IconBadge size="sm" className="bg-[#e6f6ee] text-[#2f9e6b]">
              <CodeIcon size={18} />
            </IconBadge>
          }
        />
      </section>

      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <div className="flex flex-col items-center gap-8 rounded-3xl bg-white/[0.04] px-6 py-12 text-center sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-16 lg:text-left">
            <div className="lg:max-w-2xl lg:flex-1">
              <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[2rem] lg:leading-snug xl:text-[2.15rem]">
                Not sure which service fits your budget?
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
                We offer flexible pricing packages designed for businesses at different stages of
                growth. View our standard rates or request a custom quote.
              </p>
            </div>
            <Link
              to="/pricing"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy shadow-sm transition-colors hover:bg-cream"
            >
              View Pricing Plans
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Our Technology Philosophy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            We select the right tools for the job, focusing on performance, security, and
            scalability for every project we undertake.
          </p>
          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-10">
            <PhilosophyItem
              icon={<BoltIcon size={22} />}
              title="Performance First"
              body="Lightweight code and optimized assets for lightning speed."
            />
            <PhilosophyItem
              icon={<SearchIcon size={22} />}
              title="SEO Optimized"
              body="Built with search engines in mind from the ground up."
            />
            <PhilosophyItem
              icon={<ShieldIcon size={22} />}
              title="Secure & Reliable"
              body="Modern security standards to protect your business data."
            />
            <PhilosophyItem
              icon={<NodesIcon size={22} />}
              title="Scalable Architecture"
              body="Systems that grow as your business requirements expand."
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <div className="absolute h-[280px] w-[280px] rounded-full border border-navy/10 sm:h-[420px] sm:w-[420px]" />
          <div className="absolute h-[420px] w-[420px] rounded-full border border-navy/10 sm:h-[640px] sm:w-[640px]" />
          <div className="absolute h-[560px] w-[560px] rounded-full border border-navy/5 sm:h-[860px] sm:w-[860px]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl lg:leading-tight">
            Ready to forge your <span className="text-orange">digital presence?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Whether you need a simple landing page or a complex web application, we're ready to help
            you build it.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-orange px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#e56a24]"
            >
              Start a Project
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-navy/15 bg-white px-8 py-3 text-sm font-semibold text-navy transition-colors hover:border-orange hover:text-orange"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function PhilosophyItem({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4f1ec] text-orange shadow-sm">
        {icon}
      </span>
      <h3 className="mt-4 font-display text-sm font-bold text-navy sm:text-base">{title}</h3>
      <p className="mt-2 max-w-[220px] text-xs leading-relaxed text-muted sm:text-sm">{body}</p>
    </div>
  );
}
