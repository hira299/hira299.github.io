import Link from "next/link";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { HireMe } from "@/components/HireMe";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCard } from "@/components/ProjectCard";
import { ProofMetrics } from "@/components/ProofMetrics";
import { Research } from "@/components/Research";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { caseStudies } from "@/data/case-studies";
import { featuredProjects } from "@/data/projects";
import { homeJsonLd } from "@/lib/structured-data";

const workSteps = [
  {
    title: "Build",
    text: "Design the AI system or automation around real data and real failure modes: where state lives, what gets retried, and where failed payloads go.",
  },
  {
    title: "Integrate",
    text: "Connect models, APIs, databases, and business tools, with structured outputs so downstream steps can trust what they receive.",
  },
  {
    title: "Test",
    text: "Test it the way I test client platforms: end-to-end journeys, edge cases, malformed inputs, and forced upstream failures.",
  },
  {
    title: "Verify",
    text: "Check the stored data and the API behavior, not only the screen, and verify fixes with regression checks.",
  },
  {
    title: "Deploy",
    text: "Ship to production with documentation and a Loom walkthrough, so your team knows how it works and what to do when something breaks.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeJsonLd()} />
      <Hero />
      <ProofMetrics />
      <Services />

      <section className="section" aria-labelledby="featured-title">
        <h2 id="featured-title">Featured case studies</h2>
        <p className="section-support">
          How the numbers above were produced: the problem, the architecture, and the result.
        </p>
        <div className="card-grid">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      <TechStack />

      <section className="section" aria-labelledby="how-title">
        <h2 id="how-title">How I work</h2>
        <p className="section-support">
          I build AI systems and I test them. Doing both means reliability is designed in, not bolted on.
        </p>
        <ol className="steps">
          {workSteps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" aria-labelledby="projects-title">
        <h2 id="projects-title">Selected projects</h2>
        <p className="section-support">
          Automation systems with public demos or code. See <Link href="/projects/">all projects</Link>.
        </p>
        <div className="card-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <Research />
      <ExperienceTimeline />
      <HireMe />
    </>
  );
}
