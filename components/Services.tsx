import Link from "next/link";
import { services } from "@/data/services";

export function Services() {
  return (
    <section className="section">
      <h2>Services</h2>
      <p className="section-support">
        Automation and QA work built for production systems, not demos.
      </p>
      <ul className="link-list">
        {services.map((service) => (
          <li key={service.slug}>
            <Link href={service.href}>
              <strong>{service.title}</strong>
              <span>{service.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
