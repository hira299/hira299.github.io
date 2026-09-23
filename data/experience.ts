export type Engagement = {
  name: string;
  description: string;
  highlights: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  engagements?: Engagement[];
};

export const experience: ExperienceItem[] = [
  {
    company: "TechPotion.ai",
    role: "Quality Assurance Lead",
    period: "Sep 2026 – Present",
    location: "Remote",
    summary: "Leading QA across current production B2B software engagements.",
    highlights: [
      "Executed 20 end-to-end enterprise QA journeys to 100% completion.",
      "Documented 60+ defects with API-level reproduction evidence.",
      "Identified 4 critical P1 security and business-logic issues during backend security testing.",
      "Tested authentication, authorization, multi-tenant isolation, pricing, financial reconciliation, and data integrity.",
    ],
    engagements: [
      {
        name: "PharmaConnect",
        description: "Multi-tenant B2B pharmaceutical distribution and logistics platform.",
        highlights: [
          "Lead QA across 20 end-to-end journeys and 6 user roles.",
          "60+ defects documented with API-level evidence; 4 critical P1 findings.",
        ],
      },
      {
        name: "ToolPotion",
        description: "Production AI tools directory with 28K+ listings.",
        highlights: [
          "Logged 100+ defects across two QA cycles.",
          "Identified 190+ dead or fraudulent listings in one pass using targeted search queries.",
          "Identified security risks among live listings, including phishing, malware, and gambling-redirect listings.",
          "Traced recurring defect clusters to shared root causes to reduce duplicate remediation work.",
        ],
      },
      {
        name: "AI Academy Cloud",
        description: "AI education and certification platform.",
        highlights: [
          "Documented 20+ defects in one cycle.",
          "Identified an XP/progress exploit and multiple progress-tracking issues.",
          "Verified core platform functionality under load.",
        ],
      },
    ],
  },
  {
    company: "TechPotion.ai",
    role: "Backend & Automation Engineer",
    period: "Jan 2025 – Sep 2026",
    location: "Remote · Malaysia-based company",
    summary: "Built and ran the production data, automation, and cloud systems behind a 28,000+ listing AI tools directory.",
    highlights: [
      "Built Python scrapers with BeautifulSoup, Playwright, and Selenium across 10 platforms; 20+ extraction methods with a reported 95% success rate across 28K+ URLs.",
      "Reworked ETL into a fault-tolerant parallel system with 50 concurrent workers, dynamic rate limiting, and circuit breakers, reporting a 5.6x speedup.",
      "Built a 7-stage content pipeline with PostgreSQL status tracking, sequential LLM calls, and JSON-mode schema enforcement.",
      "Reduced monthly AWS infrastructure costs by 34% through query and execution-flow optimization.",
      "Built 12+ Make.com AI automation flows and shipped a multilingual Next.js SSR frontend with FastAPI services.",
    ],
  },
  {
    company: "Sadiq.ai",
    role: "QA Intern",
    period: "Jun 2024 – Aug 2024",
    summary: "Manual and automated QA across web and mobile applications.",
    highlights: [
      "Identified and documented 150+ bugs, working with developers on prioritization.",
      "Worked with Flutter unit, widget, and golden testing; built automated test scripts for core features.",
      "Developed a Python, Streamlit, and Gemini-based chatbot.",
    ],
  },
];
