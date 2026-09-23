import { profile } from "@/data/profile";

const details = [
  "LangGraph · CRAG · n8n",
  "Models, APIs, pgvector",
  "Journeys · RBAC · edge cases",
  "Stored data · regression",
  "Docs · Loom handover",
];

export function HeroVisual() {
  return (
    <figure className="hero-visual" aria-label="How I deliver: build, integrate, test, verify, deploy">
      <ol className="flow">
        {profile.workflow.map((step, index) => (
          <li key={step} className="flow-node" style={{ "--i": index } as React.CSSProperties}>
            <span className="flow-index">0{index + 1}</span>
            <span className="flow-step">{step}</span>
            <span className="flow-detail">{details[index]}</span>
          </li>
        ))}
      </ol>
      <figcaption>AI engineering and QA in one delivery loop</figcaption>
    </figure>
  );
}
