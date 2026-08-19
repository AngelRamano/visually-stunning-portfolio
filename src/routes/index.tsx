import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/portfolio/SiteNav";
import {
  Hero,
  About,
  Research,
  Projects,
  Skills,
  Education,
  Experience,
  Contact,
  SiteFooter,
} from "@/components/portfolio/Sections";

const title = "Angel Ramano | Migration, Security & Governance Researcher";
const description =
  "Angel Ramano is a migration and security researcher specialising in migration securitisation, border governance, human rights, and regional mobility in Southern Africa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
