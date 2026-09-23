export type ResearchItem = {
  title: string;
  summary: string;
  href?: string;
  metric?: string;
};

export const research: ResearchItem[] = [
  {
    title: "Sentinel-Mesh",
    summary:
      "Neuro-symbolic cloud-security framework combining LLM-based detection with Z3 SMT formal verification.",
    metric: "83.81% autonomous remediation rate (reported)",
  },
  {
    title: "CloudFix-Bench",
    summary:
      "Benchmark containing 105 AWS Terraform misconfiguration patterns across 60+ service types.",
    metric: "105 misconfiguration patterns",
  },
  {
    title: "Research Square preprint",
    summary: "Lead author/developer research publication.",
    href: "https://www.researchsquare.com/article/rs-10674271/latest",
  },
  {
    title: "Zenodo record",
    summary: "Public research artifact archive.",
    href: "https://doi.org/10.5281/zenodo.20975067",
  },
];
