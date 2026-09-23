import { CaseStudyCard } from "@/components/CaseStudyCard";
import { HireMe } from "@/components/HireMe";
import { JsonLd } from "@/components/JsonLd";
import { caseStudies } from "@/data/case-studies";
import { buildMetadata } from "@/lib/metadata";
import { collectionJsonLd } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Case studies on an n8n AI email agent, a production AI enrichment pipeline, multi-tenant SaaS QA, AWS cost optimization, and an evidence-based AI auditing engine.",
  path: "/case-studies/",
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="page-header">
        <p className="eyebrow">Case studies</p>
        <h1>Case studies</h1>
        <p className="lede">
          Production automation and QA work, written up as engineering documents: problem, architecture,
          implementation, and results.
        </p>
      </section>
      <section className="section">
        <div className="card-grid">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>
      <JsonLd
        data={collectionJsonLd(
          "/case-studies/",
          "Case Studies",
          "Engineering case studies on AI systems, automation, and QA.",
          caseStudies.map((study) => ({ name: study.title, url: study.href })),
        )}
      />
      <HireMe />
    </>
  );
}
