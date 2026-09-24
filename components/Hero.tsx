import Link from "next/link";
import { HeroVisual } from "./HeroVisual";
import { profile } from "@/data/profile";
import { getLink } from "@/data/social-links";

export function Hero() {
  const github = getLink("GitHub");

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{profile.careerRole}</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="lede">{profile.positioning}</p>
        <p className="support">{profile.statement}</p>
        <p className="support">{profile.identity}</p>
        <div className="cta-row">
          <Link href="/contact/" className="button primary">
            Hire Me
          </Link>
          <Link href="/about/" className="button secondary">
            About Me
          </Link>
          <a href="/Hira_Ahmed_Resume.pdf" className="button secondary" download="Hira_Ahmed_Resume.pdf">
            Download Resume
          </a>
          {github ? (
            <a href={github.href} className="button ghost" target="_blank" rel="noopener noreferrer">
              GitHub<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      </div>
      <HeroVisual />
    </section>
  );
}
