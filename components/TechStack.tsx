import { profile } from "@/data/profile";

export function TechStack() {
  return (
    <section className="section" aria-labelledby="stack-title">
      <h2 id="stack-title">Technical capabilities</h2>
      <p className="section-support">Tools I use in production across automation, backend, cloud, and QA.</p>
      <div className="stack-grid">
        {profile.stack.map((group) => (
          <div key={group.group}>
            <h3>{group.group}</h3>
            <ul className="chip-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
