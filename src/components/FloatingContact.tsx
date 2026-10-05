import { CONTACT } from "#/data/site";
import { ChatIcon, PhoneIcon, WhatsAppIcon } from "./icons";

export function FloatingContact() {
  const message = encodeURIComponent("Hello Leadforge Studio, I'd like to discuss a website project.");
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${message}`;

  return (
    <>
      <div className="fixed bottom-5 left-5 z-50 flex items-center gap-2">
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Leadforge Studio on WhatsApp"
          className="group flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <WhatsAppIcon size={19} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
        <a
          href={`tel:${CONTACT.phoneTel}`}
          aria-label="Call Leadforge Studio"
          className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl"
        >
          <PhoneIcon size={18} />
          <span className="hidden sm:inline">Call us</span>
        </a>
      </div>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open live chat"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#111111] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800 hover:shadow-xl"
      >
        <ChatIcon size={18} />
        <span className="hidden sm:inline">Chat with us</span>
        <span className="relative ml-1 flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
        </span>
      </a>
    </>
  );
}
