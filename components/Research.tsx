import { research } from "@/data/research";

export function Research() {
  return (
    <section className="section">
      <h2>Research</h2>
      <p className="section-support">
        Cloud security research, benchmarks, and public research artifacts.
      </p>
      <ul className="link-list">
        {research.map((item) => (
          <li key={item.title}>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <strong>{item.title}</strong>
                <span>{item.summary}</span>
              </a>
            ) : (
              <div>
                <strong>{item.title}</strong>
                <span>{item.summary}</span>
                {item.metric ? <em>{item.metric}</em> : null}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
