import { SocialLinks } from "@/components/SocialLinks";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact Hira Ahmed for AI automation, n8n, AI agents, and B2B SaaS QA.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <section className="page-header">
      <p className="eyebrow">Contact</p>
      <h1>Let&apos;s build something reliable</h1>
      <p className="prose">
        Reach out for production automation, AI agents, API testing, or multi-tenant SaaS QA.
        Prefer LinkedIn, Upwork, Fiverr, or Topmate for project discussions.
      </p>
      <p className="support">Site: {siteConfig.url}</p>
      <SocialLinks />
    </section>
  );
}
