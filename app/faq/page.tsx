import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { HireMe } from "@/components/HireMe";
import { getFaqItems } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { faqJsonLd } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "FAQ: n8n, AI Agents & SaaS QA",
  description:
    "Answers about production n8n workflows, AI agents, API integrations, self-hosting, API testing, multi-tenant SaaS QA, and pre-launch testing.",
  path: "/faq/",
});

export default function FaqPage() {
  const items = getFaqItems();
  return (
    <>
      <section className="page-header">
        <p className="eyebrow">FAQ</p>
        <h1>Questions clients ask</h1>
        <p className="lede">What I build, what I test, and how engagements work.</p>
      </section>
      <FAQ items={items} title="Answers" />
      <JsonLd data={faqJsonLd(items)} />
      <HireMe />
    </>
  );
}
