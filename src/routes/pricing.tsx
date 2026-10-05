import { createFileRoute } from "@tanstack/react-router";
import { PricingCta } from "#/components/pricing/PricingCta";
import { PricingCards } from "#/components/pricing/PricingCards";
import { PricingFaq } from "#/components/pricing/PricingFaq";
import { PricingHero } from "#/components/pricing/PricingHero";
import { SITE_TITLE } from "#/data/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:image", content: "https://lead-forge-studio.whop.site/imported/ad17b80aec4b-comp.webp" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <main className="bg-cream">
      <PricingHero />
      <PricingCards />
      <PricingFaq />
      <PricingCta />
    </main>
  );
}
