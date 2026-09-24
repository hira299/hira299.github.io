import Link from "next/link";
import { ServiceResourceLink } from "@/components/ServiceResourceLink";
import { services } from "@/data/services";

export function Services({
  title = "What I build and test",
  intro = "AI systems and automations for production, and the QA that keeps them trustworthy: LLM pipelines, agents, n8n workflows, and testing for B2B SaaS.",
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
            {service.resource ? (
              <p className="link-row">
                <ServiceResourceLink href={service.resource.href} label={service.resource.label} />
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
