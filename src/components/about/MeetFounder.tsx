import { CONTACT } from "#/data/site";
import { GithubIcon, LinkedinIcon } from "#/components/icons";

const FOUNDER_PHOTO = "/imported/f362dd80a167-fond.webp";

export function MeetFounder() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-orange/[0.07]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Meet the Founder
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-12 rounded-full bg-orange" />
        </div>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-8">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[1.4rem]">
              <img
                src={FOUNDER_PHOTO}
                alt="Peter Robert Ndungu, founder of Lead Forge Studio"
                className="aspect-[4/5] w-full object-cover object-top lg:aspect-auto lg:h-full lg:min-h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/10 to-transparent" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-navy shadow-sm">
                <span className="h-2 w-2 rounded-full bg-orange" />
                THE FOUNDER
              </div>
              <div className="absolute bottom-0 left-0 right-[72px] px-5 pb-5">
                <p className="text-[10px] font-medium tracking-[0.22em] text-white/75">
                  LEADFORGE STUDIO
                </p>
                <p className="mt-1 text-sm text-white">Building from Nairobi, Kenya</p>
              </div>
              <div className="absolute bottom-0 right-0 flex h-[72px] w-[72px] items-center justify-center bg-orange font-display text-2xl font-bold text-white">
                02
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:py-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-orange" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-orange">
                FOUNDER & LEAD DEVELOPER
              </span>
            </div>
            <h3 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl">
              Peter Robert
              <br />
              <span className="text-orange">Ndungu</span>
            </h3>
            <p className="mt-6 text-[15px] leading-7 text-muted">
              I build thoughtful digital experiences for businesses that want to look credible, work
              better, and grow online. My approach combines strong engineering with clean, purposeful
              design.
            </p>

            <div className="mt-8 border-t border-navy/10 pt-6">
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
                <div>
                  <p className="font-display text-2xl font-bold text-navy">7+</p>
                  <p className="mt-1 text-[10px] font-medium tracking-[0.16em] text-muted">
                    YEARS BUILDING
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-navy">50+</p>
                  <p className="mt-1 text-[10px] font-medium tracking-[0.16em] text-muted">
                    PROJECTS
                  </p>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <p className="font-display text-2xl font-bold text-navy">Ruby On Rails</p>
                  <p className="mt-1 text-[10px] font-medium tracking-[0.16em] text-muted">
                    CORE STACK
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 border-t border-navy/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-navy">Let's build something meaningful.</p>
                <p className="mt-1 text-sm text-muted">Code, design & digital experiences.</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:border-orange hover:text-orange"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:border-orange hover:text-orange"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
