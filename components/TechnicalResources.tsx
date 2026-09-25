import { technicalResources } from "@/data/technical-resources";

export function TechnicalResources({ placement }: { placement: "home" | "projects" }) {
  const heading = "Open Technical Resources";
  const intro =
    placement === "home"
      ? "Public engineering resources built to document the production patterns and testing methods I use."
      : "Public engineering resources built to make production automation and multi-tenant QA patterns reusable.";
  const cards = (
    <div className="card-grid">
      {technicalResources.map((resource) => (
        <article key={resource.slug} className="card">
          <p className="eyebrow">{placement === "home" ? resource.homeLabel : resource.projectLabel}</p>
          <h3>{resource.title}</h3>
          <p>{placement === "home" ? resource.homeSummary : resource.projectSummary}</p>
          {placement === "projects" ? <p className="tags">{resource.tags.join(" · ")}</p> : null}
          <p className="link-row">
            <a href={resource.repoUrl} target="_blank" rel="noopener noreferrer">
              {placement === "home" ? "View on GitHub →" : "View Repository →"}
              <span className="visually-hidden"> for {resource.title} (opens in a new tab)</span>
            </a>
          </p>
        </article>
      ))}
    </div>
  );

  if (placement === "projects") {
    return (
      <div id="open-technical-resources" className="project-group">
        <h3 className="project-group-title">{heading}</h3>
        <p className="section-support">{intro}</p>
        {cards}
      </div>
    );
  }

  return (
    <section className="section" aria-labelledby="technical-resources-title">
      <h2 id="technical-resources-title">{heading}</h2>
      <p className="section-support">{intro}</p>
      {cards}
    </section>
  );
}
