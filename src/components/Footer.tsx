import { Link } from "@tanstack/react-router";
import { CONTACT, NAV } from "#/data/site";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, PinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="w-full bg-ink text-[#faf8f5]">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange font-display text-lg font-bold text-white">
              L
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-white">Lead Forge Studio</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            A web design and development studio in Nairobi, Kenya, building modern websites and web apps for small and
            medium businesses.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-orange hover:text-orange"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-orange hover:text-orange"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">NAVIGATE</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-white/80 transition-colors hover:text-orange">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">CONTACT</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <PinIcon size={14} />
              {CONTACT.location}
            </li>
            <li className="flex items-center gap-2">
              <MailIcon size={14} />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-orange">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon size={14} />
              <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-orange">
                {CONTACT.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">READY TO START?</h4>
          <p className="mt-5 text-sm leading-relaxed text-white/70">Let's build something great for your business.</p>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange"
          >
            Get a Quote <ArrowUpRightIcon size={14} />
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Lead Forge Studio. All rights reserved.</p>
          <p>Designed & built in Nairobi, Kenya.</p>
        </div>
      </div>
    </footer>
  );
}
