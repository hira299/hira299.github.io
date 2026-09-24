import Link from "next/link";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { HireMe } from "@/components/HireMe";
import { JsonLd } from "@/components/JsonLd";
import { caseStudies, type CaseStudyKind } from "@/data/case-studies";
import { buildMetadata } from "@/lib/metadata";
import { collectionJsonLd } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Professional case studies (28K+ record AI pipeline, AWS cost optimization, multi-tenant B2B SaaS QA), AI engineering builds, and Sentinel-Mesh research.",
  path: "/case-studies/",
});

const groups: { kind: CaseStudyKind; id: string; title: string; description: string }[] = [
  {
    kind: "professional",
    id: "professional",
    title: "Professional Case Studies",
    description: "Client and employer work in production: AI pipelines, cloud infrastructure, and enterprise QA.",
  },
  {
    kind: "build",
    id: "ai-builds",
    title: "AI Engineering Builds",
    description: "Independent AI systems, written up with the same problem, architecture, and results structure.",
  },
  {
    kind: "research",
    id: "research",
    title: "Research Case Study",
    description: "Research on making LLM output verifiable, evaluated on an open benchmark.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="page-header">
        <p className="eyebrow">Case studies</p>
        <h1>Case studies</h1>
        <p className="lede">
          Production AI, automation, and QA work, written up as engineering documents: problem, architecture,
          implementation, and results.
        </p>
      </section>
      <section className="section">
        {groups.map((group) => (
          <div key={group.id} id={group.id} className="project-group">
            <h2 className="project-group-title">{group.title}</h2>
            <p className="section-support">{group.description}</p>
            <div className="card-grid">
              {caseStudies
                .filter((study) => study.kind === group.kind)
                .map((study) => (
                  <CaseStudyCard key={study.slug} study={study} />
                ))}
            </div>
            {group.kind === "professional" ? (
              <p className="support">
                ToolPotion production QA and AI education platform QA are summarized under{" "}
                <Link href="/about/#experience">professional experience</Link>.
              </p>
            ) : null}
          </div>
        ))}
      </section>
      <JsonLd
        data={collectionJsonLd(
          "/case-studies/",
          "Case Studies",
          "Engineering case studies on AI systems, automation, QA, and research.",
          caseStudies.map((study) => ({ name: study.title, url: study.href })),
        )}
      />
      <HireMe />
    </>
  );
}
