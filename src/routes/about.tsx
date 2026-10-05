import { createFileRoute } from "@tanstack/react-router";
import { SITE_TITLE } from "#/data/site";
import { AboutCta } from "#/components/about/AboutCta";
import { AboutHero } from "#/components/about/AboutHero";
import { MeetFounder } from "#/components/about/MeetFounder";
import { ToolsBand } from "#/components/about/ToolsBand";
import { WhatWeStandFor } from "#/components/about/WhatWeStandFor";
import { WhyWeExist } from "#/components/about/WhyWeExist";

const OG_IMAGE = "https://lead-forge-studio.whop.site/imported/f362dd80a167-fond.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:image", content: OG_IMAGE },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <AboutHero />
      <WhyWeExist />
      <MeetFounder />
      <WhatWeStandFor />
      <ToolsBand />
      <AboutCta />
    </main>
  );
}
