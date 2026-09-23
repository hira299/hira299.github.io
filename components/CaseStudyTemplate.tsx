import Link from "next/link";
import { HireMe } from "./HireMe";
import { getCaseStudy, type CaseStudySlug } from "@/data/case-studies";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { renderMdx } from "@/lib/content";

export async function CaseStudyTemplate({ slug }: { slug: CaseStudySlug }) {
  const study = getCaseStudy(slug);
  const body = await renderMdx("case-studies", slug);
  const relatedServices = services.filter((service) => study.services.includes(service.slug));
  const relatedProjects = projects.filter((project) => study.projects.includes(project.slug));

  return (
    <>
      <section className="page-header">
        <p className="eyebrow">
          <Link href="/case-studies/">Case study</Link>
        </p>
        <h1>{study.title}</h1>
        <p className="lede">{study.summary}</p>
        <dl className="facts">
          <div>
            <dt>Client</dt>
            <dd>{study.client}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{study.role}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>{study.stack.join(", ")}</dd>
          </div>
        </dl>
        <ul className="metrics-grid">
          {study.metrics.map((metric) => (
            <li key={metric.label}>
              <strong>{metric.value}</strong>
              <span className="metric-label">{metric.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <article className="section prose">{body}</article>

      <section className="section split">
        <div>
          <h2>Related services</h2>
          <ul className="bullet-list">
            {relatedServices.map((service) => (
              <li key={service.slug}>
                <Link href={service.href}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {relatedProjects.length > 0 ? (
          <div>
            <h2>Related projects</h2>
            <ul className="bullet-list">
              {relatedProjects.map((project) => (
                <li key={project.slug}>
                  {project.repoUrl ? (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <div>
          <h2>Public evidence</h2>
          {study.links.length > 0 ? (
            <ul className="bullet-list">
              {study.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="support">
              Production client work. Internal systems, data, and code are not public.
            </p>
          )}
        </div>
      </section>

      <HireMe title="Need something similar?" />
    </>
  );
}
