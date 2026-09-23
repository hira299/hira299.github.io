import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/case-studies";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Case Studies",
  description: "Production automation and QA case studies with measurable outcomes.",
  path: "/case-studies/",
});

export default function CaseStudiesPage() {
  return (
    <section className="page-header">
      <p className="eyebrow">Work</p>
      <h1>Case studies</h1>
      <p className="support">
        Selected engagements across n8n automation, production pipelines, SaaS QA, and cloud systems.
      </p>
      <div className="content-grid" style={{ marginTop: "1.5rem" }}>
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </section>
  );
}
