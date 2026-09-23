import { experience } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section className="section">
      <h2>Experience</h2>
      <ol className="timeline">
        {experience.map((item) => (
          <li key={`${item.company}-${item.role}`}>
            <p className="eyebrow">
              {item.period}
              {item.location ? ` · ${item.location}` : ""}
            </p>
            <h3>
              {item.role} — {item.company}
            </h3>
            <ul>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
