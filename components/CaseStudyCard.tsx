import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const lead = study.metrics[0];

  return (
    <article className="card">
      {lead ? (
        <p className="eyebrow">
          {lead.value} · {lead.label}
        </p>
      ) : null}
      <h3>
        <Link href={study.href}>{study.title}</Link>
      </h3>
      <p>{study.summary}</p>
      <p className="tags">{study.stack.slice(0, 5).join(" · ")}</p>
    </article>
  );
}
