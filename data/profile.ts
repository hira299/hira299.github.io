export type Metric = {
  value: string;
  label: string;
  context: string;
};

export const profile = {
  name: "Hira Ahmed",
  role: "AI Automation & QA Engineer",
  positioning: "n8n | AI Agents | API Testing | B2B SaaS QA",
  statement:
    "I build production AI automations and test the systems behind them, from n8n workflows and AI agents to API integrations and multi-tenant SaaS QA.",
  shortBio:
    "AI Automation & QA Engineer specializing in production n8n workflows, AI agents, API integrations, backend systems, and B2B SaaS quality assurance.",
  longBio: [
    "I build automation systems designed to handle real data, failures, state, and integrations, and I test software for authentication, authorization, multi-tenant isolation, business logic, API behavior, and release readiness.",
    "My engineering work spans n8n, Python, PostgreSQL, AWS, LangGraph, FastAPI, and Make.com. I have built and maintained production data and automation pipelines, including a 28,000+ record AI tools directory, fault-tolerant asynchronous ETL, AI enrichment pipelines, and workflow state tracking.",
    "My QA work covers end-to-end journey testing, API-level reproduction, authentication and authorization testing, multi-tenant isolation checks, business-logic and financial reconciliation validation, root-cause analysis, and release verification.",
  ],
  location: "Karachi, Sindh, Pakistan",
  workPreference: "Remote and international projects",
  availability: "Working hours overlap with US Eastern and Pacific business hours.",
  languages: ["English", "Urdu", "Hindi"],
  education: {
    degree: "Bachelor of Computer Science (BCompSc)",
    institution: "Sir Syed University of Engineering and Technology",
  },
  metrics: [
    {
      value: "28,000+",
      label: "Production records",
      context: "AI tools directory built and maintained end-to-end",
    },
    {
      value: "5.6x",
      label: "Pipeline speedup",
      context: "Fault-tolerant parallel ETL across 28K+ URLs",
    },
    {
      value: "34%",
      label: "AWS cost reduction",
      context: "Monthly infrastructure cost, via query and execution-flow optimization",
    },
    {
      value: "20",
      label: "End-to-end QA journeys",
      context: "Enterprise multi-tenant B2B platform",
    },
    {
      value: "60+",
      label: "Enterprise defects",
      context: "Documented with API-level reproduction evidence",
    },
    {
      value: "4",
      label: "Critical P1 findings",
      context: "Security and business-logic issues found during QA",
    },
    {
      value: "150+",
      label: "Bugs identified",
      context: "Web and mobile QA at Sadiq.ai",
    },
  ] satisfies Metric[],
  stack: [
    {
      group: "Automation & AI",
      items: ["n8n", "Make.com", "Langflow", "LangGraph", "RAG", "Groq", "Gemini", "OpenAI", "OpenRouter"],
    },
    {
      group: "Backend & Data",
      items: ["Python", "FastAPI", "PostgreSQL", "Supabase", "JavaScript", "TypeScript", "Next.js"],
    },
    {
      group: "Cloud & Infrastructure",
      items: ["AWS Lambda", "EC2", "RDS", "SQS", "EventBridge", "API Gateway", "S3", "Docker"],
    },
    {
      group: "Scraping & Pipelines",
      items: ["Playwright", "Selenium", "BeautifulSoup", "ETL", "Rate limiting", "Circuit breakers"],
    },
    {
      group: "QA & Testing",
      items: [
        "Exploratory testing",
        "API testing",
        "RBAC testing",
        "Multi-tenant isolation",
        "Business-logic testing",
        "Regression verification",
        "Flutter testing",
      ],
    },
  ],
  knowsAbout: [
    "AI automation",
    "n8n workflow automation",
    "AI agent development",
    "API integration",
    "API testing",
    "B2B SaaS quality assurance",
    "Multi-tenant testing",
    "Role-based access control testing",
    "Business-logic testing",
    "Python",
    "PostgreSQL",
    "Amazon Web Services",
    "LangGraph",
    "FastAPI",
    "Make.com",
    "Docker",
    "Retrieval-augmented generation",
    "Cloud security",
    "Formal verification",
  ],
} as const;
