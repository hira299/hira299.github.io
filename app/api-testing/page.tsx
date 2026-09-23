import Link from "next/link";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";

const service = services.find((item) => item.slug === "api-testing")!;

export const metadata = buildMetadata({
  title: service.title,
  description: service.summary,
  path: service.href,
});

export default function Page() {
  return (
    <section className="page-header">
      <p className="eyebrow">Service</p>
      <h1>{service.title}</h1>
      <p className="prose">{service.summary}</p>
      <p className="support">
        Detailed service content lives in <code>content/services/api-testing.mdx</code> and
        will be wired to MDX rendering next.
      </p>
      <div className="cta-row">
        <Link href="/contact/" className="button primary">
          Discuss this service
        </Link>
        <Link href="/case-studies/" className="button secondary">
          Related case studies
        </Link>
      </div>
    </section>
  );
}
