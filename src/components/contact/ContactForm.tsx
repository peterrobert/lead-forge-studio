import { useState, type FormEvent } from "react";
import { CONTACT } from "#/data/site";
import { ChevronDownIcon, ConversationIcon } from "./icons";

const PROJECT_TYPES = [
  "Business Website",
  "Website Redesign",
  "Landing Page",
  "Custom Web Application",
  "Other",
] as const;

const BUDGET_RANGES = [
  "Under KSh 25,000",
  "KSh 25,000–50,000",
  "KSh 50,000–100,000",
  "KSh 100,000+",
  "Not sure yet",
] as const;

const inputClass =
  "w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm text-navy placeholder:text-muted/80 outline-none transition focus:border-orange/50";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Hi Lead Forge Studio, I'd like to start a conversation about a project.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Project Type: ${projectType}`,
      `Budget Range: ${budget}`,
      "",
      details,
    ].join("\n");
    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-[0_12px_40px_rgba(0,29,71,0.08)] sm:p-8 lg:p-10">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange text-white">
          <ConversationIcon size={20} />
        </div>
        <p className="text-[11px] font-semibold tracking-[0.22em] text-orange">START A CONVERSATION</p>
      </div>
      <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-navy sm:text-[1.85rem]">
        Let's talk about your project
      </h2>
      <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted sm:text-[15px]">
        Tell us what you're building, and we'll continue the conversation with you directly on
        WhatsApp.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 border-t border-navy/10 pt-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-navy">Full Name</span>
            <input
              required
              type="text"
              name="name"
              autoComplete="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-navy">Email</span>
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-navy">Project Type</span>
            <div className="relative">
              <select
                required
                name="projectType"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className={`${inputClass} appearance-none pr-10 ${projectType ? "" : "text-muted/80"}`}
              >
                <option value="" disabled>
                  Select type
                </option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <ChevronDownIcon
                size={16}
                className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-muted"
              />
            </div>
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-navy">Budget Range</span>
            <div className="relative">
              <select
                required
                name="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className={`${inputClass} appearance-none pr-10 ${budget ? "" : "text-muted/80"}`}
              >
                <option value="" disabled>
                  Select budget
                </option>
                {BUDGET_RANGES.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
              <ChevronDownIcon
                size={16}
                className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-muted"
              />
            </div>
          </label>
        </div>

        <label className="mt-5 block">
          <span className="mb-2 block text-sm font-semibold text-navy">Tell us about your project</span>
          <textarea
            required
            name="details"
            rows={5}
            placeholder="Tell us what you need, what you're trying to achieve, or any ideas you already have..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className={`${inputClass} min-h-[8.5rem] resize-y`}
          />
        </label>

        <button
          type="submit"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(37,211,102,0.28)] transition hover:bg-[#1ebe5d]"
        >
          <ConversationIcon size={18} />
          Continue on WhatsApp
        </button>
        <p className="mt-3 flex items-center justify-center gap-2 text-sm text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
          Usually responds within a few hours
        </p>
      </form>
    </div>
  );
}
