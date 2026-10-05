const TOOLS = [
  "React",
  "Ruby on Rails",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "Figma",
  "Next.js",
  "Node.js",
  "Shadcn/UI",
  "Vite",
  "Docker",
  "AWS",
  "Vercel",
  "Sanity CMS",
] as const;

export function ToolsBand() {
  return (
    <section className="bg-navy">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:py-16">
        <h2 className="shrink-0 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
          Tools & Technologies
          <br className="hidden lg:block" /> We Use
        </h2>
        <ul className="flex flex-wrap justify-center gap-2.5 lg:justify-start">
          {TOOLS.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
