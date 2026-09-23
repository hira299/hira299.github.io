import { research } from "@/data/research";

export function Research() {
  return (
    <section className="section" aria-labelledby="research-title">
      <h2 id="research-title">Research</h2>
      <p className="section-support">
        Cloud-security research on combining LLMs with formal verification, plus peer-review work for IEEE Access.
      </p>
      <div className="card-grid">
        {research.map((item) => (
          <article key={item.title} className="card">
            <p className="eyebrow">{item.status}</p>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            {item.highlights ? (
              <ul className="bullet-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}
            <p className="link-row">
              {item.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
