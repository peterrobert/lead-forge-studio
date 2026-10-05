import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { PROJECTS, TESTIMONIALS } from "#/data/site";
import { CaseStudyModal } from "#/components/CaseStudyModal";
import { ArrowUpRightIcon } from "#/components/icons";
import {
  ArrowRightIcon,
  CodeIcon,
  PaletteIcon,
  QuoteMarkIcon,
  StarIcon,
  WindowIcon,
  ZapIcon,
} from "./icons";

const HERO_IMAGE = "/imported/ad17b80aec4b-comp.webp";
const SHELL = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

const SERVICES = [
  {
    title: "Business Websites",
    description:
      "Professional corporate websites that build trust and convert visitors into customers.",
    Icon: WindowIcon,
  },
  {
    title: "Website Redesigns",
    description:
      "Modernize your existing online presence with a fresh design and improved performance.",
    Icon: PaletteIcon,
  },
  {
    title: "Landing Pages",
    description:
      "High-converting single-page sites designed specifically for your marketing campaigns.",
    Icon: ZapIcon,
  },
  {
    title: "Custom Web Applications",
    description: "Bespoke software solutions tailored to solve your unique business challenges.",
    Icon: CodeIcon,
  },
] as const;

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    description: "We dive deep into your business goals, target audience, and project requirements.",
  },
  {
    num: "02",
    title: "Design",
    description: "Creating intuitive user interfaces and experiences that reflect your brand identity.",
  },
  {
    num: "03",
    title: "Development",
    description: "We bring designs to life with clean, efficient code and modern technologies.",
  },
  {
    num: "04",
    title: "Testing & Launch",
    description: "Rigorous quality checks across devices before we push the site live to the world.",
  },
  {
    num: "05",
    title: "Support & Growth",
    description: "Ongoing maintenance and optimization to ensure your site continues to perform.",
  },
] as const;

const STATS = [
  { value: "5+", label: "Projects Delivered" },
  { value: "5+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client-Focused" },
] as const;

type Project = (typeof PROJECTS)[number];

function siteHost(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function HomePage() {
  const [caseStudy, setCaseStudy] = useState<Project | null>(null);
  const featured = PROJECTS.filter((project) => project.featured);

  return (
    <>
      <main>
        <Hero />
        <WhatWeBuild />
        <FeaturedWork projects={featured} onCaseStudy={setCaseStudy} />
        <HowWeWork />
        <Testimonials />
        <CtaBand />
      </main>
      <CaseStudyModal project={caseStudy} onClose={() => setCaseStudy(null)} />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-cream">
      <div className={`${SHELL} py-16 lg:py-24`}>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          <div className="text-center lg:text-left">
            <p className="inline-block max-w-[18.5rem] rounded-full border border-orange/25 bg-orange/5 px-4 py-1.5 text-center text-[13px] leading-5 font-medium text-orange lg:max-w-none">
              Nairobi based Web Design & Development Studio
            </p>
            <h1 className="mt-6 font-display text-[2.35rem] font-bold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[3.5rem]">
              Websites that <span className="text-orange">grow</span> Kenyan businesses
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-7 text-muted lg:mx-0 lg:max-w-lg">
              Fast, conversion-ready sites and web apps for Kenyan SMEs that need more customers,
              not another pretty homepage.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e86a20]"
              >
                Get a Quote
                <ArrowUpRightIcon size={15} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-cream"
              >
                View Our Work
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xl lg:max-w-none">
            <div className="overflow-hidden rounded-md bg-white p-[5px] shadow-[0_12px_40px_rgba(0,29,71,0.12)] ring-1 ring-black/10">
              <img
                src={HERO_IMAGE}
                alt="Designer workspace with two monitors showing website layouts"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-black/[0.04] bg-white px-4 py-10 shadow-[0_8px_30px_rgba(0,29,71,0.05)] sm:px-8 lg:py-12">
          <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-bold text-navy lg:text-[2.5rem]">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeBuild() {
  return (
    <section className="bg-white">
      <div className={`${SHELL} py-24 lg:py-28`}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">What We Build</h2>
            <p className="mt-3 text-[17px] leading-7 text-muted">
              We specialize in creating digital experiences that are fast, accessible, and optimized
              for growth.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-orange transition hover:text-navy"
          >
            Explore All Services
            <ArrowRightIcon size={15} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-black/[0.05] bg-cream p-6 sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white">
                <Icon size={22} />
              </div>
              <h3 className="mt-6 font-display text-[1.05rem] font-bold text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedWork({
  projects,
  onCaseStudy,
}: {
  projects: Project[];
  onCaseStudy: (project: Project) => void;
}) {
  return (
    <section className="bg-cream">
      <div className={`${SHELL} py-24 lg:py-28`}>
        <div className="text-center">
          <p className="inline-flex rounded-full border border-black/5 bg-white px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-orange uppercase">
            OUR WORK
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold text-navy sm:text-4xl">
            Featured Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-7 text-muted">
            A selection of websites and digital experiences we've built to help businesses look
            better, perform better, and grow online.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-xl border border-black/[0.05] bg-white"
            >
              <img
                src={project.img}
                alt={`${project.title} website`}
                className="aspect-[4/3] w-full object-cover object-top"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="inline-flex w-fit rounded-full bg-orange/10 px-3 py-1 text-xs font-medium text-orange">
                  {project.category}
                </p>
                <h3 className="mt-4 font-display text-xl font-bold text-navy">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{project.description}</p>
                <p className="mt-4 text-xs text-muted">{siteHost(project.website)}</p>
                <div className="mt-5 flex flex-wrap gap-3 border-t border-black/[0.06] pt-5">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#e86a20]"
                  >
                    Visit Website
                    <ArrowUpRightIcon size={14} />
                  </a>
                  <button
                    type="button"
                    onClick={() => onCaseStudy(project)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-navy/10 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-cream"
                  >
                    Case Study
                    <ArrowUpRightIcon size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-navy/90"
          >
            Explore All Projects
            <ArrowUpRightIcon size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section className="bg-white">
      <div className={`${SHELL} py-24 lg:py-28`}>
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">How We Work</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-7 text-muted">
            A structured approach to building high-quality digital products that deliver results.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            className="pointer-events-none absolute top-7 left-7 hidden h-px bg-neutral-200 lg:block"
            style={{ right: "calc(20% - 1.75rem)" }}
            aria-hidden="true"
          />
          <ol className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-8">
            {STEPS.map((step) => (
              <li key={step.num} className="relative text-center lg:text-left">
                <div className="relative z-10 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy font-display text-lg font-bold text-white shadow-md lg:mx-0">
                  {step.num}
                </div>
                <h3 className="font-display text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-cream">
      <div className={`${SHELL} py-24 lg:py-28`}>
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">What Clients Say</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-7 text-muted">
            Don't just take our word for it hear from the businesses we've helped grow.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_4px_20px_rgba(0,29,71,0.04)] sm:p-8"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-0.5 text-orange">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <StarIcon key={index} size={16} />
                  ))}
                </div>
                <QuoteMarkIcon className="text-neutral-200" />
              </div>
              <p className="mt-5 text-[15px] leading-7 text-navy/80 italic">"{item.quote}"</p>
              <p className="mt-6 font-display font-bold text-navy">{item.name}</p>
              <p className="mt-0.5 text-sm text-muted">{item.business}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="bg-ink px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-20 lg:pb-16">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-navy px-6 py-16 text-center sm:px-12 lg:py-20">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-[2.6rem]">
          Ready to grow your business online?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-7 text-white/70">
          Let's build a modern, high-performing website that works as hard as you do. Contact us
          today for a free consultation and quote.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e86a20]"
        >
          Get a Quote
          <ArrowUpRightIcon size={15} />
        </Link>
      </div>
    </section>
  );
}
