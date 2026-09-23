import Link from "next/link";
import { email, getLink } from "@/data/social-links";

export function HireMe({
  title = "Hire me",
  intro = "Available for remote AI automation, n8n, AI agent, API integration, and B2B SaaS QA projects.",
}: {
  title?: string;
  intro?: string;
}) {
  const fiverr = getLink("Fiverr");
  const upwork = getLink("Upwork");

  return (
    <section className="section hire" aria-labelledby="hire-title">
      <h2 id="hire-title">{title}</h2>
      <p className="section-support">{intro}</p>
      <div className="cta-row">
        {upwork ? (
          <a href={upwork.href} className="button primary" target="_blank" rel="noopener noreferrer">
            Hire on Upwork
          </a>
        ) : null}
        {fiverr ? (
          <a href={fiverr.href} className="button secondary" target="_blank" rel="noopener noreferrer">
            Hire on Fiverr
          </a>
        ) : null}
        <a href={`mailto:${email}`} className="button secondary">
          Email me
        </a>
        <Link href="/contact/" className="button ghost">
          All contact options
        </Link>
      </div>
    </section>
  );
}
