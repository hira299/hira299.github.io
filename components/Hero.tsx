import Link from "next/link";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="hero">
      <p className="eyebrow">{profile.role}</p>
      <h1>{profile.name}</h1>
      <p className="lede">{profile.positioning}</p>
      <p className="support">{profile.shortBio}</p>
      <div className="cta-row">
        <Link href="/contact/" className="button primary">
          Hire me
        </Link>
        <Link href="/case-studies/" className="button secondary">
          View case studies
        </Link>
      </div>
    </section>
  );
}
