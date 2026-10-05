import { createFileRoute } from "@tanstack/react-router";
import { SITE_TITLE } from "#/data/site";
import { PortfolioHero } from "#/components/portfolio/PortfolioHero";
import { ProjectGrid } from "#/components/portfolio/ProjectGrid";
import { PortfolioCta } from "#/components/portfolio/PortfolioCta";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:image", content: "https://lead-forge-studio.whop.site/imported/5853a2971b6a-deport.webp" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <main>
      <PortfolioHero />
      <ProjectGrid />
      <PortfolioCta />
    </main>
  );
}
