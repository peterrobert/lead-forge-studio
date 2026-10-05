import { CONTACT } from "#/data/site";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, PinIcon } from "#/components/icons";
import { ClockIcon, MessageOutlineIcon } from "./icons";

const PHONE_CARD_DISPLAY = "+254 790 578 686";

export function ContactInfo() {
  return (
    <div>
      <div className="rounded-3xl bg-navy p-6 text-white sm:p-8">
        <h2 className="font-display text-lg font-semibold tracking-tight">Contact Information</h2>
        <ul className="mt-7 space-y-6">
          <li>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3.5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-orange">
                <MessageOutlineIcon size={16} />
              </span>
              <span>
                <span className="block text-[11px] font-medium tracking-[0.16em] text-white/50 uppercase">
                  WHATSAPP
                </span>
                <span className="mt-0.5 block text-sm font-medium">+{CONTACT.whatsapp}</span>
              </span>
            </a>
          </li>
          <li>
            <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-orange">
                <MailIcon size={16} />
              </span>
              <span>
                <span className="block text-[11px] font-medium tracking-[0.16em] text-white/50 uppercase">
                  EMAIL
                </span>
                <span className="mt-0.5 block text-sm font-medium break-all">{CONTACT.email}</span>
              </span>
            </a>
          </li>
          <li>
            <a href={`tel:${CONTACT.phoneTel}`} className="flex items-start gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-orange">
                <PhoneIcon size={16} />
              </span>
              <span>
                <span className="block text-[11px] font-medium tracking-[0.16em] text-white/50 uppercase">
                  PHONE
                </span>
                <span className="mt-0.5 block text-sm font-medium">{PHONE_CARD_DISPLAY}</span>
              </span>
            </a>
          </li>
          <li className="flex items-start gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-orange">
              <PinIcon size={16} />
            </span>
            <span>
              <span className="block text-[11px] font-medium tracking-[0.16em] text-white/50 uppercase">
                LOCATION
              </span>
              <span className="mt-0.5 block text-sm font-medium">{CONTACT.location}</span>
            </span>
          </li>
        </ul>
        <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-white/70">
          <ClockIcon size={15} className="shrink-0 text-orange" />
          <span>{CONTACT.hours}</span>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3 px-1">
        <span className="text-sm text-navy">Follow us:</span>
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:border-orange hover:text-orange"
        >
          <GithubIcon size={16} />
        </a>
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:border-orange hover:text-orange"
        >
          <LinkedinIcon size={16} />
        </a>
      </div>
    </div>
  );
}
