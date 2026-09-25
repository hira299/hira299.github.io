import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Page not found",
  path: "/404/",
  robots: { index: false, follow: true },
});

export default function NotFound() {
  return (
    <section className="page-header">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="support">
        That route does not exist. Head back home or browse case studies.
      </p>
      <div className="cta-row">
        <Link href="/" className="button primary">
          Home
        </Link>
        <Link href="/case-studies/" className="button secondary">
          Case studies
        </Link>
      </div>
    </section>
  );
}
