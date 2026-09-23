import { email, socialLinks } from "@/data/social-links";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact & Hire",
  description:
    "Hire Hira Ahmed for AI automation, n8n, AI agents, API integration, or B2B SaaS QA through Upwork, Fiverr, LinkedIn, Topmate, or email.",
  path: "/contact/",
});

const channels: { label: string; note: string }[] = [
  { label: "Upwork", note: "Hourly or fixed-price contracts" },
  { label: "Fiverr", note: "Packaged n8n and AI agent builds" },
  { label: "LinkedIn", note: "Professional background and messages" },
  { label: "Topmate", note: "Book a short consultation" },
  { label: "GitHub", note: "Code for public projects" },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-header">
        <p className="eyebrow">Contact</p>
        <h1>Let&apos;s talk about your project</h1>
        <p className="lede">
          For production automation, AI agents, API testing, or multi-tenant SaaS QA, send a short note with
          what you&apos;re building and where it hurts.
        </p>
        <div className="cta-row">
          <a href={`mailto:${email}`} className="button primary">
            Email {email}
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Other ways to hire or reach me</h2>
        <ul className="card-grid">
          {channels.map((channel) => {
            const link = socialLinks.find((item) => item.label === channel.label);
            if (!link) return null;
            return (
              <li key={channel.label} className="card">
                <h3>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {channel.label}
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </h3>
                <p>{channel.note}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
