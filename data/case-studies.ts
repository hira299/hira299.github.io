import type { ServiceSlug } from "./services";

export type CaseStudySlug =
  | "n8n-email-agent"
  | "28k-record-pipeline"
  | "multitenant-saas-qa"
  | "aws-cost-optimization"
  | "cloud-compliance";

export type CaseStudy = {
  slug: CaseStudySlug;
  title: string;
  href: string;
  description: string;
  summary: string;
  client: string;
  role: string;
  stack: string[];
  metrics: { value: string; label: string }[];
  services: ServiceSlug[];
  projects: string[];
  links: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "n8n-email-agent",
    title: "Autonomous AI Email Agent",
    href: "/case-studies/n8n-email-agent/",
    description:
      "A stateful n8n email agent using Gmail API, Groq, and persistent thread memory to screen inquiries, answer from verified information, and draft replies.",
    summary:
      "A stateful n8n agent that reads incoming email, remembers the whole thread, answers from verified information, and drafts replies.",
    client: "Personal production project",
    role: "Designed and built the workflow end-to-end",
    stack: ["n8n", "Gmail API", "Groq", "RAG", "Google Sheets", "Cloudflare Tunnel"],
    metrics: [
      { value: "Multi-turn", label: "Thread memory across replies" },
      { value: "Self-hosted", label: "n8n behind Cloudflare Tunnel" },
    ],
    services: ["n8n-automation", "ai-agents", "api-integrations"],
    projects: ["ai-email-agent"],
    links: [
      { label: "Demo (Loom)", href: "https://www.loom.com/share/9fbd2526672348f2b8c4284933817e39" },
      { label: "Repository", href: "https://github.com/hira299/AI-Autonomous-Email-Agent" },
    ],
  },
  {
    slug: "28k-record-pipeline",
    title: "Production AI Enrichment Pipeline (28K+ Records)",
    href: "/case-studies/28k-record-pipeline/",
    description:
      "A production LLM enrichment pipeline for 28,000+ records: status-gated LLM stages, structured outputs, 9-language translation via OpenRouter and Gemini, fault-tolerant parallel extraction, and a 5.6x speedup.",
    summary:
      "A production AI pipeline that scrapes, enriches, translates, and publishes 28,000+ AI tool listings, with status-gated LLM stages that never skip a failure.",
    client: "TechPotion.ai",
    role: "Backend & Automation Engineer",
    stack: ["Python", "OpenRouter", "Gemini Flash Lite", "PostgreSQL", "Playwright", "Selenium", "BeautifulSoup", "AWS", "Next.js", "FastAPI"],
    metrics: [
      { value: "28,000+", label: "Production records" },
      { value: "4", label: "Sequential LLM stages" },
      { value: "9", label: "Languages translated" },
      { value: "5.6x", label: "Processing speedup" },
      { value: "95%", label: "Reported extraction success rate" },
    ],
    services: ["ai-automation", "api-integrations"],
    projects: [],
    links: [],
  },
  {
    slug: "multitenant-saas-qa",
    title: "Multi-Tenant SaaS QA",
    href: "/case-studies/multitenant-saas-qa/",
    description:
      "Lead QA on PharmaConnect, a multi-tenant B2B pharmaceutical distribution platform: 20 end-to-end journeys, 80+ defects across 15 modules, and 11 P1 findings.",
    summary:
      "Lead QA on a multi-tenant B2B pharmaceutical distribution platform: order-to-cash journeys, API evidence, authorization, audit-log security, and reconciliation.",
    client: "PharmaConnect",
    role: "Lead QA",
    stack: ["Exploratory testing", "API testing", "Browser network inspection", "curl", "RBAC matrix"],
    metrics: [
      { value: "20", label: "End-to-end journeys" },
      { value: "6", label: "User roles tested" },
      { value: "80+", label: "Defects documented" },
      { value: "11", label: "P1 defects" },
    ],
    services: ["qa-testing", "multitenant-qa", "api-testing", "business-logic-testing"],
    projects: [],
    links: [],
  },
  {
    slug: "aws-cost-optimization",
    title: "AWS Cost Optimization",
    href: "/case-studies/aws-cost-optimization/",
    description:
      "Cutting monthly AWS infrastructure cost by 34% for a 28K+ record platform through API Gateway, execution-flow, and PostgreSQL query optimization.",
    summary:
      "Finding where a production AWS setup spent money it didn't need to, and cutting monthly cost by 34%.",
    client: "TechPotion.ai",
    role: "Backend & Automation Engineer",
    stack: ["AWS Lambda", "API Gateway", "EventBridge", "SQS", "RDS PostgreSQL", "EC2", "S3", "IAM", "CodeBuild"],
    metrics: [{ value: "34%", label: "Monthly AWS cost reduction" }],
    services: ["ai-automation"],
    projects: ["cloud-cost-sentinel"],
    links: [],
  },
  {
    slug: "cloud-compliance",
    title: "Cloud Compliance & Evidence-Based AI Auditing Engine",
    href: "/case-studies/cloud-compliance/",
    description:
      "An evidence-based AI auditing engine: a 6-node LangGraph Corrective RAG state machine over live AWS evidence and policy documents, answering 250+ question security reviews (CAIQ, SOC 2, SIG) with required citations.",
    summary:
      "Collecting live AWS evidence, then answering enterprise security questionnaires with a LangGraph Corrective RAG agent that must cite a verified source for every answer.",
    client: "Personal production project",
    role: "Designed and built both versions end-to-end",
    stack: ["LangGraph", "CRAG", "LlamaIndex", "Groq (Llama 3.1 8B)", "Supabase pgvector", "FastEmbed", "PyMuPDF", "FastAPI", "n8n", "PostgreSQL", "Docker", "AWS CLI"],
    metrics: [
      { value: "~90%", label: "Reported cut in questionnaire turnaround" },
      { value: "250+", label: "Questions per enterprise review" },
      { value: "2,000+", label: "Questions processed, no timeout failures (reported)" },
      { value: "0.95", label: "Reported semantic relevance score" },
    ],
    services: ["ai-agents", "ai-automation", "n8n-automation"],
    projects: ["cloud-compliance-engine"],
    links: [
      { label: "Demo of the first version (Loom)", href: "https://www.loom.com/share/ab966bb76ebd4c44bef1ec6b0c906fdc" },
      {
        label: "Repository",
        href: "https://github.com/hira299/Cloud-Security-Audit-Compliance-Automation-Platform",
      },
    ],
  },
];

export function getCaseStudy(slug: CaseStudySlug) {
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) throw new Error(`Unknown case study: ${slug}`);
  return study;
}
