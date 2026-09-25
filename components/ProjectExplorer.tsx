"use client";

import { Fragment, useMemo, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { TechnicalResources } from "./TechnicalResources";
import { projectCategories, projectGroups, projects, type ProjectCategory } from "@/data/projects";

export function ProjectExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProjectCategory | "All">("All");

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return projects.filter((project) => {
      if (category !== "All" && !project.categories.includes(category)) return false;
      if (!needle) return true;
      return [project.title, project.summary, ...project.stack, ...project.highlights, ...project.categories]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
  }, [query, category]);

  return (
    <section className="section" aria-labelledby="all-projects-title">
      <h2 id="all-projects-title" className="visually-hidden">
        All projects
      </h2>
      <div className="explorer-controls">
        <label className="search-field">
          <span className="visually-hidden">Search projects</span>
          <input
            type="search"
            placeholder="Search by name, stack, or topic (e.g. LangGraph, AWS)"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div className="filter-chips" role="group" aria-label="Filter by category">
          {(["All", ...projectCategories] as const).map((item) => (
            <button
              key={item}
              type="button"
              className="filter-chip"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <p className="results-count" aria-live="polite">
        {results.length} of {projects.length} projects
      </p>
      {results.length > 0 ? (
        projectGroups.map((group) => {
          const items = results.filter((project) => project.group === group.id);
          return (
            <Fragment key={group.id}>
              {items.length > 0 ? (
                <div id={group.anchor} className="project-group">
                  <h3 className="project-group-title">{group.title}</h3>
                  <p className="section-support">{group.description}</p>
                  <div className="card-grid">
                    {items.map((project) => (
                      <ProjectCard key={project.slug} project={project} anchor />
                    ))}
                  </div>
                </div>
              ) : null}
              {group.id === "ai-build" ? <TechnicalResources placement="projects" /> : null}
            </Fragment>
          );
        })
      ) : (
        <>
          <p className="support">No projects match. Try another term or category.</p>
          <TechnicalResources placement="projects" />
        </>
      )}
    </section>
  );
}
