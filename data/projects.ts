export type ProjectCategory =
  | "AI Automation"
  | "AI Agents"
  | "n8n"
  | "Make.com"
  | "Cybersecurity"
  | "Cloud"
  | "Backend"
  | "Research";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  categories: ProjectCategory[];
  /** Commercially relevant projects shown on the homepage, in this order. */
  featured?: number;
  demoUrl?: string;
  repoUrl?: string;
  caseStudy?: string;
};

export const projectCategories: ProjectCategory[] = [
  "n8n",
  "AI Automation",
  "AI Agents",
  "Make.com",
  "Cloud",
  "Cybersecurity",
  "Backend",
  "Research",
];

export const projects: Project[] = [
  {
    slug: "agency-os",
    title: "Autonomous Agency OS & SEO Intelligence Agent",
    summary:
      "Automation platform for competitor research, SEO brief generation, scraping-failure handling, QA routing, and SLA governance.",
    highlights: [
      "Scrapes competitor content and runs AI-assisted SEO gap analysis",
      "Creates structured ClickUp tasks with briefs attached",
      "PostgreSQL dead-letter queue for failed scrapes",
    ],
    stack: ["n8n", "ClickUp", "Gemini", "PostgreSQL"],
    categories: ["n8n", "AI Automation"],
    featured: 1,
    demoUrl: "https://www.loom.com/share/bec593a6caed4e4eb808a0bafdfa79a7",
    repoUrl: "https://github.com/hira299/Autonomous-Competitor-Intelligence-SEO-Pipeline",
  },
  {
    slug: "profitability-guardrail",
    title: "Autonomous Profitability Guardrail & State Machine",
    summary:
      "State-aware project-budget monitoring with Healthy → Warning → Critical transitions, DLQ-based error handling, and PostgreSQL audit logging.",
    highlights: [
      "Alerts fire only on state changes",
      "Malformed payloads isolated in a PostgreSQL DLQ",
      "95% reduction in notification noise, as reported in the project profile",
    ],
    stack: ["n8n", "PostgreSQL", "ClickUp", "Slack", "JavaScript", "SQL"],
    categories: ["n8n", "AI Automation", "Backend"],
    featured: 2,
    demoUrl: "https://www.loom.com/share/679eb54f26de4ab98d895c8f9c7f493b",
    repoUrl: "https://github.com/hira299/Financial-Profitability-Guardrail",
  },
  {
    slug: "cloud-cost-sentinel",
    title: "Autonomous Cloud Cost Sentinel",
    summary:
      "AI-assisted FinOps workflow that detects cloud-cost anomalies with a rolling average, diagnoses likely AWS cost drivers, and alerts engineering.",
    highlights: [
      "AWS Cost Explorer integration",
      "Rolling-average anomaly detection",
      "AI diagnosis of likely cost drivers",
    ],
    stack: ["n8n", "AWS Cost Explorer", "Gemini"],
    categories: ["n8n", "Cloud", "AI Automation"],
    featured: 3,
    repoUrl: "https://github.com/hira299/Cloud-Cost-Sentinel",
    caseStudy: "/case-studies/aws-cost-optimization/",
  },
  {
    slug: "ai-email-agent",
    title: "Autonomous AI Interview Agent",
    summary:
      "Stateful recruiter-screening and technical Q&A assistant for email, answering from verified resume and portfolio information.",
    highlights: [
      "Gmail API ingestion with thread-state memory",
      "Groq inference for screening and reply drafting",
      "Answers grounded in verified profile data",
    ],
    stack: ["n8n", "Gmail API", "Groq", "RAG", "Google Sheets"],
    categories: ["n8n", "AI Agents"],
    featured: 4,
    demoUrl: "https://www.loom.com/share/9fbd2526672348f2b8c4284933817e39",
    repoUrl: "https://github.com/hira299/AI-Autonomous-Email-Agent",
    caseStudy: "/case-studies/n8n-email-agent/",
  },
  {
    slug: "cloud-compliance-engine",
    title: "Autonomous Cloud Compliance & AI Auditing Engine",
    summary:
      "AI-assisted AWS audit pipeline that extracts infrastructure metadata, stores evidence, scores risk, and reports compliance gaps with a remediation roadmap.",
    highlights: [
      "Docker sidecar runs read-only AWS CLI audits",
      "Langflow and Groq assessment step",
      "Evidence persisted in Supabase",
    ],
    stack: ["AWS", "Docker", "n8n", "Langflow", "Groq", "Supabase"],
    categories: ["n8n", "Cloud", "Cybersecurity", "AI Agents"],
    featured: 5,
    demoUrl: "https://www.loom.com/share/ab966bb76ebd4c44bef1ec6b0c906fdc",
    repoUrl: "https://github.com/hira299/Cloud-Security-Audit-Compliance-Automation-Platform",
    caseStudy: "/case-studies/cloud-compliance/",
  },
  {
    slug: "langflow-research-engine",
    title: "Langflow Agentic Research & Citation Engine",
    summary:
      "Planner-synthesizer RAG workflow that breaks a research question into searches, retrieves live web sources, and writes a report with citations.",
    highlights: [
      "Planner model decomposes prompts into search queries",
      "Tavily retrieval grounds claims in live sources",
      "Synthesis step produces reports with clickable citations",
    ],
    stack: ["Langflow", "OpenAI", "Tavily AI"],
    categories: ["AI Agents"],
    demoUrl: "https://www.loom.com/share/2bc96c7d096e49ecb84f2702f9ccba94",
  },
  {
    slug: "omnichannel-hub",
    title: "Make.com Omnichannel AI Content & DALL-E 3 Hub",
    summary:
      "Parallel multi-branch automation that prepares platform-specific posts and visuals for X, LinkedIn, Instagram, and Facebook.",
    highlights: [
      "Router-based parallel branches per channel",
      "Per-platform prompt chains for tone and hashtags",
      "DALL-E 3 visuals with metadata logged to Google Sheets",
    ],
    stack: ["Make.com", "OpenAI", "DALL-E 3", "Google Sheets"],
    categories: ["Make.com", "AI Automation"],
    demoUrl: "https://www.loom.com/share/6b8653972e774a50b7a62c0cfb3af454",
  },
  {
    slug: "seo-content-lifecycle",
    title: "End-to-End SEO Content Lifecycle",
    summary:
      "Five-stage modular content pipeline (research, SEO metadata, drafting, QA, publish) with media optimization and WordPress publishing.",
    highlights: [
      "Stage-by-stage modular pipeline",
      "REST API publishing to WordPress",
      "Airtable content tracking",
    ],
    stack: ["Make.com", "WordPress", "Airtable", "OpenAI"],
    categories: ["Make.com", "AI Automation"],
    demoUrl: "https://www.loom.com/share/e808ab92876345e389f0072fb1677136",
  },
  {
    slug: "slack-wordpress-blogger",
    title: "Slack to WordPress AI Blogger",
    summary:
      "A single Slack message triggers web research, a research-grounded draft, archiving to Google Docs, Airtable logging, and WordPress publishing.",
    highlights: [
      "Live web scraping feeds context to the draft",
      "Google Docs archive and Airtable calendar logging",
    ],
    stack: ["Make.com", "Slack", "OpenAI", "WordPress", "Airtable", "Google Docs"],
    categories: ["Make.com", "AI Automation"],
    demoUrl: "https://www.loom.com/share/0ab30c4c687a4b2591a3b8646e6332b0",
  },
  {
    slug: "browser-forensics",
    title: "Browser Forensics & User Activity Reconstruction Console",
    summary:
      "Turns Chrome history exports (JSON/CSV) into structured activity timelines with deterministic threat scoring and AI-assisted forensic hypotheses.",
    highlights: [
      "Session timeline reconstruction",
      "Deterministic threat scoring",
      "Investigator workflow with AI-assisted hypotheses",
    ],
    stack: ["React", "TypeScript", "Express", "Tailwind", "Gemini"],
    categories: ["Cybersecurity", "AI Agents"],
    repoUrl: "https://github.com/hira299/browser-forensics-reconstruction",
  },
  {
    slug: "vektor",
    title: "Vektor: AI-Powered Resume Parsing & ATS Diagnostics",
    summary:
      "Multimodal resume parsing and job-compatibility scoring with keyword alignment, skill-gap analysis, rewrite help, and PDF/Markdown/JSON exports.",
    highlights: [
      "Weighted compatibility scoring",
      "Skill-gap analysis and interview preparation",
      "Exports to PDF, Markdown, and JSON",
    ],
    stack: ["React", "TypeScript", "Express", "Gemini", "Groq"],
    categories: ["AI Agents", "Backend"],
    repoUrl: "https://github.com/hira299/vektor-ats-diagnostics",
  },
  {
    slug: "smart-travel-planner",
    title: "Smart Travel Planner",
    summary:
      "AI itinerary app that plans trips from destination, budget, travel style, and dates, backed by a serverless AWS API.",
    highlights: ["Next.js frontend", "AWS Lambda, API Gateway, and DynamoDB backend"],
    stack: ["Next.js", "TypeScript", "AWS Lambda", "API Gateway", "DynamoDB", "Gemini"],
    categories: ["Cloud", "Backend", "AI Agents"],
    repoUrl: "https://github.com/hira299/smart-travel-planner",
  },
  {
    slug: "sentinel-mesh",
    title: "Sentinel-Mesh",
    summary:
      "Neuro-symbolic framework combining LLM patch generation with Z3 SMT verification for autonomous remediation of cloud misconfigurations.",
    highlights: ["Evaluated on CloudFix-Bench (105 AWS Terraform patterns)", "Research Square preprint"],
    stack: ["Python", "Z3", "Terraform", "LLMs"],
    categories: ["Research", "Cybersecurity", "Cloud"],
    repoUrl: "https://github.com/hira299/sentinel-mesh",
  },
  {
    slug: "thread-sync-visualizer",
    title: "ThreadSync Visualizer",
    summary:
      "Real-time visualization of thread synchronization with semaphores and mutex locks, showing how producer-consumer race conditions are prevented.",
    highlights: ["Live state rendering of concurrent threads"],
    stack: ["TypeScript"],
    categories: ["Backend"],
    repoUrl: "https://github.com/hira299/thread-sync-visualizer",
  },
  {
    slug: "network-traffic-analyzer",
    title: "Network Traffic Analyzer",
    summary:
      "Packet capture and traffic analysis tool that parses raw packets, classifies protocols, and flags anomalous traffic patterns.",
    highlights: ["Protocol classification", "Anomaly flagging"],
    stack: ["Python"],
    categories: ["Cybersecurity"],
    repoUrl: "https://github.com/hira299/network-traffic-analyzer",
  },
  {
    slug: "ai-chatbot-collection",
    title: "AI Chatbot Collection",
    summary: "A set of chatbots built with the Google Gemini API and Streamlit.",
    highlights: ["Gemini API integrations", "Streamlit interfaces"],
    stack: ["Python", "Gemini", "Streamlit"],
    categories: ["AI Agents"],
    repoUrl: "https://github.com/hira299/ai-chatbot-collection",
  },
];

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0));
