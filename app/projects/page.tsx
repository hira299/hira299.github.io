import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "n8n, Make.com, Langflow, AI agent, cloud, cybersecurity, and research projects by Hira Ahmed, with demos and source code.",
  path: "/projects/",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="page-header">
        <p className="eyebrow">Projects</p>
        <h1>Projects</h1>
        <p className="lede">
          Automation systems, AI agents, cloud tools, and research, most with a recorded demo or public code.
        </p>
      </section>
      <section className="section">
        <div className="card-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
