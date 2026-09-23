import { CaseStudyCard } from "@/components/CaseStudyCard";
import { HireMe } from "@/components/HireMe";
import { caseStudies } from "@/data/case-studies";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Case studies on an n8n AI email agent, a 28K+ record pipeline, multi-tenant SaaS QA, AWS cost optimization, and cloud compliance automation.",
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
      <HireMe />
    </>
  );
}
