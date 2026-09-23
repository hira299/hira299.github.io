import { profile } from "@/data/profile";

export function ProofMetrics() {
  return (
    <section className="section">
      <h2>Proof points</h2>
      <p className="section-support">
        Verified, publicly usable metrics from production automation and QA work.
      </p>
      <ul className="metrics-grid">
        {profile.metrics.map((metric) => (
          <li key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
