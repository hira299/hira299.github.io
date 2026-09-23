export type Service = {
  slug: string;
  title: string;
  summary: string;
  href: string;
};

export const services: Service[] = [
  {
    slug: "ai-automation",
    title: "AI Automation",
    summary:
      "Production AI workflows with error handling, state tracking, and reliable integrations.",
    href: "/ai-automation/",
  },
  {
    slug: "n8n-automation",
    title: "n8n Automation",
    summary:
      "Event-driven n8n pipelines for email agents, SEO ops, compliance, and business systems.",
    href: "/n8n-automation/",
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    summary:
      "Stateful agents with memory, tool use, and grounded responses for real operational work.",
    href: "/ai-agents/",
  },
  {
    slug: "qa-testing",
    title: "QA Testing",
    summary:
      "End-to-end journey testing, defect documentation, and release readiness for B2B products.",
    href: "/qa-testing/",
  },
  {
    slug: "api-testing",
    title: "API Testing",
    summary:
      "API-level reproduction, auth flows, contract checks, and backend behavior validation.",
    href: "/api-testing/",
  },
  {
    slug: "multitenant-qa",
    title: "Multi-tenant QA",
    summary:
      "Tenant isolation, RBAC, pricing, and business-logic testing for SaaS platforms.",
    href: "/multitenant-qa/",
  },
];
