import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import { buildMetadata } from "@/lib/metadata";

const study = caseStudies.find((item) => item.slug === "aws-cost-optimization")!;

export const metadata = buildMetadata({
  title: study.title,
  description: study.summary,
  path: study.href,
});

export default function Page() {
  return (
    <section className="page-header">
      <p className="eyebrow">{study.metric}</p>
      <h1>{study.title}</h1>
      <p className="prose">{study.summary}</p>
      <p className="tags">{study.tags.join(" · ")}</p>
      <p className="support">
        Full write-up source: <code>content/case-studies/aws-cost-optimization.mdx</code>
      </p>
      <div className="cta-row">
        <Link href="/case-studies/" className="button secondary">
          All case studies
        </Link>
        <Link href="/contact/" className="button primary">
          Hire for similar work
        </Link>
      </div>
    </section>
  );
}
