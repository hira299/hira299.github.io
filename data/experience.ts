export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "TechPotion.ai",
    role: "Quality Assurance Lead",
    period: "Sep 2026 – Present",
    location: "Remote",
    highlights: [
      "Lead QA across production B2B software engagements.",
      "Executed 20 end-to-end enterprise QA journeys to completion.",
      "Documented 60+ defects with API-level reproduction evidence.",
      "Identified 4 critical P1 security/business-logic issues.",
    ],
  },
  {
    company: "TechPotion.ai",
    role: "Backend & Automation Engineer",
    period: "Jan 2025 – Sep 2026",
    location: "Remote (Malaysia-based)",
    highlights: [
      "Built and maintained a 28,000+ listing AI tools directory.",
      "Delivered a 5.6x processing speedup across the production pipeline.",
      "Reduced monthly AWS infrastructure costs by 34%.",
      "Shipped multilingual Next.js SSR frontend with FastAPI services.",
    ],
  },
  {
    company: "Sadiq.ai",
    role: "QA Intern",
    period: "Jun 2024 – Aug 2024",
    highlights: [
      "Identified and documented 150+ bugs across web and mobile apps.",
      "Built automated test scripts for core features.",
      "Developed a Python, Streamlit, and Gemini-based chatbot.",
    ],
  },
];
