import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Projects",
  description: "n8n, Make.com, and Langflow automation projects with demos.",
  path: "/projects/",
});

export default function ProjectsPage() {
  return (
    <section className="page-header">
      <p className="eyebrow">Portfolio</p>
      <h1>Projects</h1>
      <p className="support">
        Selected automation systems across n8n, Make.com, and agent frameworks.
      </p>
      <div className="content-grid" style={{ marginTop: "1.5rem" }}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
