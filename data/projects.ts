export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  demoUrl?: string;
  category: "n8n" | "make" | "langflow" | "research";
};

export const projects: Project[] = [
  {
    slug: "ai-interview-agent",
    title: "Autonomous AI Interview Agent",
    summary:
      "Stateful recruiter-screening and technical Q&A assistant for email-based workflows.",
    stack: ["n8n", "Gmail API", "Groq", "Google Sheets"],
    demoUrl: "https://www.loom.com/share/9fbd2526672348f2b8c4284933817e39",
    category: "n8n",
  },
  {
    slug: "cloud-compliance-engine",
    title: "Autonomous Cloud Compliance & AI Auditing Engine",
    summary:
      "AI-assisted AWS compliance pipeline with evidence storage and structured risk assessments.",
    stack: ["AWS", "n8n", "Langflow", "Groq", "Supabase", "Docker"],
    demoUrl: "https://www.loom.com/share/ab966bb76ebd4c44bef1ec6b0c906fdc",
    category: "n8n",
  },
  {
    slug: "agency-os",
    title: "Autonomous Agency OS & SEO Intelligence Agent",
    summary:
      "Automation platform for competitor research, SEO briefs, failure handling, and SLA governance.",
    stack: ["n8n", "ClickUp", "Gemini", "PostgreSQL"],
    demoUrl: "https://www.loom.com/share/bec593a6caed4e4eb808a0bafdfa79a7",
    category: "n8n",
  },
  {
    slug: "profitability-guardrail",
    title: "Enterprise Profitability Guardrail",
    summary:
      "Fault-tolerant budget monitor with Postgres state machine and dead-letter queue.",
    stack: ["n8n", "ClickUp", "PostgreSQL"],
    demoUrl: "https://www.loom.com/share/679eb54f26de4ab98d895c8f9c7f493b",
    category: "n8n",
  },
  {
    slug: "seo-content-lifecycle",
    title: "End-to-End SEO Content Lifecycle",
    summary:
      "Five-stage modular writing pipeline from research to WordPress publish.",
    stack: ["Make.com", "WordPress", "Airtable"],
    demoUrl: "https://www.loom.com/share/e808ab92876345e389f0072fb1677136",
    category: "make",
  },
  {
    slug: "agentic-research",
    title: "Autonomous Agentic Research Framework",
    summary:
      "Planner-synthesizer agentic workflow grounded with live web search and citations.",
    stack: ["Langflow", "OpenAI", "Tavily AI"],
    demoUrl: "https://www.loom.com/share/2bc96c7d096e49ecb84f2702f9ccba94",
    category: "langflow",
  },
];
