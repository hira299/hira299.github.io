import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <p className="eyebrow">{project.categories.join(" · ")}</p>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <ul className="bullet-list">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <p className="tags">{project.stack.join(" · ")}</p>
      <p className="link-row">
        {project.caseStudy ? (
          <Link href={project.caseStudy}>
            Case study<span className="visually-hidden"> for {project.title}</span>
          </Link>
        ) : null}
        {project.demoUrl ? (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            Demo<span className="visually-hidden"> of {project.title} (opens in a new tab)</span>
          </a>
        ) : null}
        {project.repoUrl ? (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            Code<span className="visually-hidden"> for {project.title} on GitHub (opens in a new tab)</span>
          </a>
        ) : null}
      </p>
    </article>
  );
}
