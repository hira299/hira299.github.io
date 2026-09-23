export type SocialLink = {
  label: string;
  href: string;
  kind: "hire" | "professional" | "research";
};

export const email = "hira229922@gmail.com";

export const socialLinks: SocialLink[] = [
  { label: "Fiverr", href: "https://www.fiverr.com/hira299", kind: "hire" },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~0178616a4e00b82166",
    kind: "hire",
  },
  { label: "Topmate", href: "https://topmate.io/hira_ahmed", kind: "hire" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hira-ahmed-4068402a7",
    kind: "professional",
  },
  { label: "GitHub", href: "https://github.com/hira299", kind: "professional" },
  { label: "ORCID", href: "https://orcid.org/0009-0005-3219-7252", kind: "research" },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Hira-Ahmed-28",
    kind: "research",
  },
  {
    label: "Web of Science",
    href: "https://www.webofscience.com/wos/author/record/QIV-1552-2026",
    kind: "research",
  },
];

export function getLink(label: string) {
  return socialLinks.find((link) => link.label === label);
}
