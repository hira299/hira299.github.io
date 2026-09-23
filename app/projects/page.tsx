import { JsonLd } from "@/components/JsonLd";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";
import { collectionJsonLd } from "@/lib/structured-data";

const description =
  "AI agents, LLM systems, n8n and Make.com automations, cloud, cybersecurity, and research projects by Hira Ahmed, with demos and source code.";

export const metadata = buildMetadata({
  title: "Projects",
  description,
  path: "/projects/",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="page-header">
        <p className="eyebrow">Projects</p>
        <h1>Projects</h1>
        <p className="lede">
          AI systems, automations, cloud tools, and research, most with a recorded demo or public code.
        </p>
      </section>
      <ProjectExplorer />
      <JsonLd
        data={collectionJsonLd(
          "/projects/",
          "Projects",
          description,
          projects.map((project) => ({
            name: project.title,
            url: project.caseStudy ?? project.repoUrl ?? project.demoUrl ?? "/projects/",
          })),
        )}
      />
    </>
  );
}
