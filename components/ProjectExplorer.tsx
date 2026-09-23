"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectCategories, projects, type ProjectCategory } from "@/data/projects";

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
        <div className="card-grid">
          {results.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="support">No projects match. Try another term or category.</p>
      )}
    </section>
  );
}
