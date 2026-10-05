import { createFileRoute } from "@tanstack/react-router";
import { SITE_TITLE } from "#/data/site";
import { HomePage } from "#/components/home/HomePage";

const OG_IMAGE = "https://lead-forge-studio.whop.site/imported/ad17b80aec4b-comp.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    title: SITE_TITLE,
    meta: [
      { title: SITE_TITLE },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:image", content: OG_IMAGE },
    ],
  }),
  component: HomePage,
});
