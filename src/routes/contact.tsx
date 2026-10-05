import { createFileRoute } from "@tanstack/react-router";
import { SITE_TITLE } from "#/data/site";
import { ContactHero } from "#/components/contact/ContactHero";
import { ContactForm } from "#/components/contact/ContactForm";
import { ContactInfo } from "#/components/contact/ContactInfo";
import { ContactFaq } from "#/components/contact/ContactFaq";

const OG_IMAGE = "https://lead-forge-studio.whop.site/imported/ad17b80aec4b-comp.webp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:image", content: OG_IMAGE },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <ContactHero />
      <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.7fr)] lg:gap-10">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
      <ContactFaq />
    </main>
  );
}
