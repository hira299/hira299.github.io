export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  href: string;
  metric?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "n8n-email-agent",
    title: "n8n Email Agent",
    summary:
      "Stateful AI email agent for recruiter screening and technical Q&A with thread memory.",
    tags: ["n8n", "Gmail API", "Groq"],
    href: "/case-studies/n8n-email-agent/",
    metric: "Stateful email workflows",
  },
  {
    slug: "28k-record-pipeline",
    title: "28K Record Pipeline",
    summary:
      "Fault-tolerant ETL and AI enrichment pipeline across 28,000+ production records.",
    tags: ["Python", "PostgreSQL", "AWS"],
    href: "/case-studies/28k-record-pipeline/",
    metric: "5.6x processing speedup",
  },
  {
    slug: "multitenant-saas-qa",
    title: "Multi-tenant SaaS QA",
    summary:
      "Enterprise QA across auth, isolation, pricing, and financial reconciliation for B2B SaaS.",
    tags: ["QA", "API", "Security"],
    href: "/case-studies/multitenant-saas-qa/",
    metric: "20 end-to-end journeys",
  },
  {
    slug: "aws-cost-optimization",
    title: "AWS Cost Optimization",
    summary:
      "Cloud automation and execution-flow optimization that reduced monthly AWS costs.",
    tags: ["AWS", "Lambda", "RDS"],
    href: "/case-studies/aws-cost-optimization/",
    metric: "34% cost reduction",
  },
  {
    slug: "cloud-compliance",
    title: "Cloud Compliance Engine",
    summary:
      "AI-assisted AWS compliance pipeline with evidence storage and structured risk scoring.",
    tags: ["n8n", "AWS", "Langflow"],
    href: "/case-studies/cloud-compliance/",
    metric: "100-point assessments",
  },
];
