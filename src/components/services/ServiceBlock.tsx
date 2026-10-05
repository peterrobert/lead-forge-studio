import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRightIcon, CheckIcon } from "./icons";
import { MockUiCard } from "./MockUiCard";

export function ServiceBlock({
  title,
  description,
  features,
  reverse = false,
  icon,
  mockIcon,
}: {
  title: string;
  description: string;
  features: readonly string[];
  reverse?: boolean;
  icon: ReactNode;
  mockIcon: ReactNode;
}) {
  return (
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? "order-1 lg:order-2" : "order-1"}>
        {icon}
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
          {title}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{description}</p>
        <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {features.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-navy sm:text-[15px]">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                <CheckIcon size={12} />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:border-orange hover:text-orange"
        >
          Enquire About This Service
          <ArrowRightIcon size={15} />
        </Link>
      </div>
      <div className={reverse ? "order-2 lg:order-1" : "order-2"}>
        <MockUiCard
          title={title}
          features={features.slice(0, 3)}
          icon={mockIcon}
          offset={reverse ? "start" : "end"}
        />
      </div>
    </div>
  );
}
