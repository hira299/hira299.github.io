import Link from "next/link";
import { HireMe } from "@/components/HireMe";
import { JsonLd } from "@/components/JsonLd";
import { getCaseStudy } from "@/data/case-studies";
import { socialLinks } from "@/data/social-links";
import { buildMetadata } from "@/lib/metadata";
import { researchJsonLd } from "@/lib/structured-data";

const description =
  "Research by Hira Ahmed: Sentinel-Mesh (LLM remediation checked by Z3 SMT formal verification), the CloudFix-Bench benchmark, and IEEE Access peer review.";

export const metadata = buildMetadata({
  title: "Research",
  description,
  path: "/research/",
});

const sentinel = getCaseStudy("sentinel-mesh");
const researchGate = socialLinks.find((link) => link.label === "ResearchGate");

const artifacts = [
  {
    title: "Sentinel-Mesh preprint",
    status: "Research Square · manuscript under review at IEEE Transactions on Cloud Computing",
    links: [
      { label: "Research Square", href: "https://www.researchsquare.com/article/rs-10674271/latest" },
      { label: "DOI", href: "https://doi.org/10.21203/rs.3.rs-10674271/v1" },
    ],
  },
  {
    title: "CloudFix-Bench dataset",
    status: "Open benchmark archived on Zenodo",
    links: [{ label: "Zenodo", href: "https://doi.org/10.5281/zenodo.20975067" }],
  },
  {
    title: "Source code",
    status: "Sentinel-Mesh framework, runners, and benchmark harness",
    links: [{ label: "GitHub", href: "https://github.com/hira299/sentinel-mesh" }],
  },
  {
    title: "Technical article",
    status: "Beyond Heuristics: Formally Verifying AI-Generated Infrastructure with Z3 SMT Solvers",
    links: [
      {
        label: "Medium",
        href: "https://medium.com/@hira229922/beyond-heuristics-formally-verifying-ai-generated-infrastructure-with-z3-smt-solvers-e95fd3a7bf95",
      },
    ],
  },
  {
    title: "IEEE Access peer review",
    status: "5 verified reviews, recorded on Web of Science and ORCID",
    links: [
      { label: "Web of Science", href: "https://www.webofscience.com/wos/author/record/QIV-1552-2026" },
      { label: "ORCID", href: "https://orcid.org/0009-0005-3219-7252" },
    ],
  },
  ...(researchGate
    ? [
        {
          title: "Research profile",
          status: "Publications and research activity",
          links: [{ label: "ResearchGate", href: researchGate.href }],
        },
      ]
    : []),
];

export default function ResearchPage() {
  return (
    <>
      <section className="page-header">
        <p className="eyebrow">Research</p>
        <h1>Research</h1>
        <p className="lede">
          Making AI-generated infrastructure changes verifiable: LLM remediation checked by formal methods, evaluated on
          an open benchmark.
        </p>
      </section>

      <section id="sentinel-mesh" className="section" aria-labelledby="sentinel-title">
        <p className="card-kind">Research Case Study</p>
        <h2 id="sentinel-title">Sentinel-Mesh</h2>
        <p className="section-support">{sentinel.summary}</p>
        <ul className="metrics-grid">
          {sentinel.metrics.map((metric) => (
            <li key={metric.label}>
              <strong>{metric.value}</strong>
              <span className="metric-label">{metric.label}</span>
            </li>
          ))}
        </ul>
        <p className="support">
          Lead author and developer. Research Square preprint; the manuscript is under review.{" "}
          <Link href={sentinel.href}>Read the research case study</Link>, including the architecture, evaluation, and
          limitations.
        </p>
      </section>

      <section id="cloudfix-bench" className="section" aria-labelledby="bench-title">
        <h2 id="bench-title">CloudFix-Bench</h2>
        <p className="section-support">
          A benchmark of 105 AWS Terraform misconfiguration patterns across 8 infrastructure pillars and 60+ AWS service
          types, built to evaluate Sentinel-Mesh against a Checkov baseline, a no-witness ablation, and an external set of
          12 real-world cases. Archived on{" "}
          <a href="https://doi.org/10.5281/zenodo.20975067" target="_blank" rel="noopener noreferrer">
            Zenodo
          </a>{" "}
          for reproducibility.
        </p>
      </section>

      <section id="publications" className="section" aria-labelledby="publications-title">
        <h2 id="publications-title">Publications &amp; artifacts</h2>
        <div className="card-grid">
          {artifacts.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.status}</p>
              <p className="link-row">
                {item.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ))}
              </p>
            </article>
          ))}
        </div>
      </section>

      <JsonLd data={researchJsonLd(description)} />
      <HireMe />
    </>
  );
}
