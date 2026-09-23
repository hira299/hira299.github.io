import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="content-block">
      <p className="eyebrow">{study.metric}</p>
      <h3>
        <Link href={study.href}>{study.title}</Link>
      </h3>
      <p>{study.summary}</p>
      <p className="tags">{study.tags.join(" · ")}</p>
    </article>
  );
}
