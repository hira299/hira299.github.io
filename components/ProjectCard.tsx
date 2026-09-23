import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="content-block">
      <p className="eyebrow">{project.category}</p>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <p className="tags">{project.stack.join(" · ")}</p>
      {project.demoUrl ? (
        <p>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            Watch demo
          </a>
        </p>
      ) : null}
    </article>
  );
}
