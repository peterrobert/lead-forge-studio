import { useState } from "react";
import { PROJECTS } from "#/data/site";
import { CaseStudyModal } from "#/components/CaseStudyModal";
import { ArrowUpRightIcon } from "#/components/icons";

const FILTERS = [
  "All",
  "Business Website",
  "Web Platform",
  "Corporate Website",
  "Engineering Project",
] as const;

type Filter = (typeof FILTERS)[number];
type Project = (typeof PROJECTS)[number];

function projectDomain(website: string) {
  return new URL(website).hostname.replace(/^www\./, "");
}

export function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section className="bg-cream px-4 pb-16 pt-12 md:pb-24 md:pt-16">
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
        {FILTERS.map((item) => {
          const active = item === filter;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(item)}
              className={
                active
                  ? "rounded-full bg-navy px-5 py-2 text-sm font-medium text-white"
                  : "rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-medium text-navy hover:border-navy"
              }
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 md:mt-14 md:grid-cols-2">
        {visible.map((project) => (
          <article
            key={project.id}
            className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="aspect-[16/10] overflow-hidden bg-cream">
              <img
                src={project.img}
                alt={`${project.title} website`}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <span className="inline-flex rounded-full bg-cream px-3 py-1 text-xs font-semibold text-navy">
                {project.category}
              </span>
              <h2 className="mt-3 font-display text-xl font-bold text-navy md:text-2xl">
                {project.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">{project.description}</p>
              {project.website ? (
                <p className="mt-3 text-sm font-medium text-navy/70">
                  {projectDomain(project.website)}
                </p>
              ) : null}
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                {project.website ? (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-orange hover:text-navy"
                  >
                    Visit Website
                    <ArrowUpRightIcon size={14} />
                  </a>
                ) : null}
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="text-sm font-semibold text-navy hover:text-orange"
                >
                  Case Study
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <CaseStudyModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
