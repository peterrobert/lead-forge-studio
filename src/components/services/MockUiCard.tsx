import type { ReactNode } from "react";
import { CheckIcon } from "./icons";

export function MockUiCard({
  title,
  features,
  icon,
  offset = "center",
}: {
  title: string;
  features: readonly string[];
  icon: ReactNode;
  offset?: "start" | "center" | "end";
}) {
  const pos =
    offset === "end"
      ? "left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 lg:left-auto lg:right-[8%] lg:translate-x-0"
      : offset === "start"
        ? "left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 lg:left-[8%] lg:translate-x-0"
        : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2";

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[28px] bg-navy p-6 shadow-xl sm:aspect-[5/4] sm:p-8">
      <div className="flex h-full flex-col gap-3 pt-1 opacity-40" aria-hidden="true">
        <div className="mx-auto h-2 w-[70%] rounded-full bg-white/15" />
        <div className="mx-auto h-2 w-[46%] rounded-full bg-white/10" />
        <div className="mt-4 grid flex-1 grid-cols-2 gap-4 px-2">
          <div className="rounded-2xl border border-white/10 bg-white/5" />
          <div className="rounded-2xl border border-white/10 bg-white/5" />
        </div>
        <div className="grid grid-cols-3 gap-3 px-2">
          <div className="h-12 rounded-xl bg-white/5 sm:h-16" />
          <div className="h-12 rounded-xl bg-white/5 sm:h-16" />
          <div className="h-12 rounded-xl bg-white/5 sm:h-16" />
        </div>
      </div>

      <div
        className={`absolute w-[min(78%,250px)] rounded-2xl bg-white p-5 shadow-[0_18px_40px_rgba(0,0,0,0.22)] sm:w-[300px] sm:p-6 ${pos}`}
      >
        <div className="flex items-start gap-3">
          {icon}
          <div className="min-w-0 pt-0.5">
            <p className="font-display text-[15px] font-bold leading-tight text-navy">{title}</p>
            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
              SERVICE PACKAGE
            </p>
          </div>
        </div>
        <div className="my-3 h-px bg-navy/10" />
        <ul className="space-y-2">
          {features.map((item) => (
            <li key={item} className="flex items-center gap-2 text-[13px] text-navy">
              <CheckIcon size={12} className="shrink-0 text-orange" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
