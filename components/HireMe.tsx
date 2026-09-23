import Link from "next/link";

export function HireMe() {
  return (
    <section className="section hire">
      <h2>Hire me</h2>
      <p className="section-support">
        Available for remote AI automation, n8n engineering, AI agents, and B2B SaaS QA.
      </p>
      <Link href="/contact/" className="button primary">
        Start a project
      </Link>
    </section>
  );
}
