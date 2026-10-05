import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { CONTACT, LOGO_URL, NAV } from "#/data/site";
import { CloseIcon, MailIcon, MenuIcon, PhoneIcon } from "./icons";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex shrink-0 justify-center lg:justify-start">
            <Link to="/" aria-label="Lead Forge Studio home">
              <img src={LOGO_URL} alt="Leadforge Studio" className="h-auto w-40" />
            </Link>
          </div>
          <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:items-center lg:justify-end">
            <div className="hidden items-center gap-3 sm:flex">
              <div className="rounded-full border border-red-200 p-2 text-red-600">
                <PhoneIcon size={18} />
              </div>
              <div>
                <a
                  className="cursor-pointer font-semibold text-gray-900 transition-colors hover:text-[#ff7729]"
                  href={`tel:${CONTACT.phoneTel}`}
                >
                  {CONTACT.phoneDisplay}
                </a>
                <p className="text-sm text-gray-500">Any questions? Call us.</p>
              </div>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              <div className="rounded-full border border-red-200 p-2 text-red-600">
                <MailIcon size={18} />
              </div>
              <div>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="cursor-pointer font-semibold uppercase text-blue-700 transition-colors hover:text-[#ff7729]"
                >
                  SEND US EMAIL
                </a>
                <p className="text-sm text-gray-500">Sales Inquiry</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-[#ff7729] px-8 font-semibold text-white transition hover:bg-[#e56a24]"
            >
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-navy/10 bg-[#faf8f5]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-center px-4 py-3">
          <ul className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => {
              const active = pathname === item.to;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`text-sm font-medium transition-colors ${
                      active ? "text-orange" : "text-navy hover:text-orange"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full text-navy md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
        {open ? (
          <div className="border-t border-navy/10 bg-white px-4 py-4 md:hidden">
            <ul className="flex flex-col gap-3">
              {NAV.map((item) => {
                const active = pathname === item.to;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={`block py-1 text-base font-medium ${
                        active ? "text-orange" : "text-navy"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </header>
    </>
  );
}
