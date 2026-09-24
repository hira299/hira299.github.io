import { CountUp } from "./CountUp";
import { profile } from "@/data/profile";

export function ProofMetrics() {
  return (
    <section className="section" aria-labelledby="proof-title">
      <h2 id="proof-title">Production proof</h2>
      <p className="section-support">
        Figures from production automation and QA work. Each one is explained in the case studies.
      </p>
      <ul className="metrics-grid metrics-grid--single-row">
        {profile.metrics.map((metric) => (
          <li key={metric.label}>
            <strong>
              <CountUp value={metric.value} />
            </strong>
            <span className="metric-label">{metric.label}</span>
            <span className="metric-context">{metric.context}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
