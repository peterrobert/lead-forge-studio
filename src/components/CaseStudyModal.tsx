import { PROJECTS } from "#/data/site";
import { CloseIcon } from "./icons";

type Project = (typeof PROJECTS)[number];

export function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/70 p-4" onClick={onClose}>
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted hover:bg-cream hover:text-navy"
          aria-label="Close case study"
        >
          <CloseIcon size={18} />
        </button>
        <p className="text-xs font-semibold uppercase tracking-wider text-orange">{project.category}</p>
        <h3 id="case-study-title" className="mt-2 font-display text-2xl font-bold text-navy">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted">{project.longDescription}</p>
        <img src={project.img} alt={`${project.title} website`} className="mt-5 w-full rounded-xl object-cover" />
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-navy">What was built</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {project.whatWasBuilt.map((item) => (
              <li key={item} className="rounded-full bg-cream px-3 py-1 text-xs text-navy">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-navy">Tech</p>
          <p className="mt-2 text-sm text-muted">{project.tech.join(" · ")}</p>
        </div>
        {project.website ? (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-white hover:bg-navy"
          >
            Visit Website
          </a>
        ) : null}
      </div>
    </div>
  );
}
