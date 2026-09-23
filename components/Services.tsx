import Link from "next/link";
import { services } from "@/data/services";

export function Services({
  title = "What I build and test",
  intro = "Automation and QA for production systems: the workflows that run your operations, and the checks that keep them trustworthy.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="section" aria-labelledby="services-title">
      <h2 id="services-title">{title}</h2>
      <p className="section-support">{intro}</p>
      <ul className="card-grid">
        {services.map((service) => (
          <li key={service.slug} className="card">
            <h3>
              <Link href={service.href}>{service.title}</Link>
            </h3>
            <p>{service.summary}</p>
            <p className="tags">{service.technologies.slice(0, 5).join(" · ")}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
