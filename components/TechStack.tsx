import { profile } from "@/data/profile";

export function TechStack() {
  return (
    <section className="section">
      <h2>Tech stack</h2>
      <p className="section-support">
        Tools used across automation, backend, cloud, and QA work.
      </p>
      <ul className="chip-list">
        {profile.themes.map((theme) => (
          <li key={theme}>{theme}</li>
        ))}
      </ul>
    </section>
  );
}
