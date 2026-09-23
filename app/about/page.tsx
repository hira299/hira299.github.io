import Link from "next/link";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { HireMe } from "@/components/HireMe";
import { Research } from "@/components/Research";
import { SocialLinks } from "@/components/SocialLinks";
import { TechStack } from "@/components/TechStack";
import { profile } from "@/data/profile";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Hira Ahmed is an AI Engineer in Karachi, Pakistan, building production LLM pipelines, AI agents, and n8n automations, and providing B2B SaaS QA and API testing.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <section className="page-header">
        <p className="eyebrow">About</p>
        <h1>{profile.name}</h1>
        <p className="lede">{profile.role}</p>
        <div className="prose">
          {profile.longBio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            I&apos;m also the lead author and developer of Sentinel-Mesh, a neuro-symbolic cloud-security
            framework, and the creator of CloudFix-Bench. I review manuscripts for IEEE Access. See{" "}
            <Link href="#research-title">research</Link> below.
          </p>
        </div>
      </section>

      <section className="section split">
        <div>
          <h2>Career focus</h2>
          <p className="support">
            {profile.career.target} roles, including {profile.career.related.join(", ")}: building LLM systems,
            AI agents, and AI pipelines that run in production.
          </p>
        </div>
        <div>
          <h2>Freelance services</h2>
          <p className="support">
            {profile.freelance.services.join(", ")}, through <Link href="/contact/">Upwork, Fiverr, and LinkedIn</Link>.
          </p>
        </div>
        <div>
          <h2>Education</h2>
          <p className="support">
            {profile.education.degree}
            <br />
            {profile.education.institution}
          </p>
        </div>
        <div>
          <h2>Location &amp; availability</h2>
          <p className="support">
            {profile.location}. {profile.workPreference}. {profile.availability}
          </p>
          <p className="support">Languages: {profile.languages.join(", ")}</p>
        </div>
      </section>

      <ExperienceTimeline />
      <TechStack />
      <Research />

      <section className="section">
        <h2>Profiles</h2>
        <SocialLinks />
      </section>

      <HireMe />
    </>
  );
}
