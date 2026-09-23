import { experience } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section className="section" aria-labelledby="experience-title">
      <h2 id="experience-title">Professional experience</h2>
      <ol className="timeline">
        {experience.map((item) => (
          <li key={`${item.company}-${item.role}`}>
            <p className="eyebrow">
              {item.period}
              {item.location ? ` · ${item.location}` : ""}
            </p>
            <h3>
              {item.role} · {item.company}
            </h3>
            <p className="support">{item.summary}</p>
            <ul className="bullet-list">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            {item.engagements ? (
              <div className="engagements">
                {item.engagements.map((engagement) => (
                  <div key={engagement.name} className="card">
                    <h4>{engagement.name}</h4>
                    <p>{engagement.description}</p>
                    <ul className="bullet-list">
                      {engagement.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
