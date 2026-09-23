import { FAQ } from "@/components/FAQ";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "FAQ",
  description: "Common questions about hiring Hira Ahmed for AI automation and QA work.",
  path: "/faq/",
});

export default function FaqPage() {
  return (
    <>
      <section className="page-header">
        <p className="eyebrow">Questions</p>
        <h1>FAQ</h1>
        <p className="support">
          Straight answers about scope, remote work, confidentiality, and delivery style.
        </p>
      </section>
      <FAQ />
    </>
  );
}
