import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { Header } from "#/components/Header";
import { Footer } from "#/components/Footer";
import { FloatingContact } from "#/components/FloatingContact";
import { LOGO_URL, SITE_TITLE } from "#/data/site";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      {
        name: "description",
        content:
          "Lead Forge Studio designs and engineers fast, modern websites and web applications tailored for Small and Medium-sized Businesses in Kenya and beyond.",
      },
      { name: "theme-color", content: "#faf8f5" },
      { property: "og:title", content: SITE_TITLE },
      {
        property: "og:description",
        content:
          "Lead Forge Studio designs and engineers fast, modern websites and web applications tailored for Small and Medium-sized Businesses in Kenya and beyond.",
      },
      { property: "og:image", content: "https://lead-forge-studio.whop.site/imported/ad17b80aec4b-comp.webp" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: LOGO_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-cream font-sans text-navy antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <FloatingContact />
        <Scripts />
      </body>
    </html>
  );
}
