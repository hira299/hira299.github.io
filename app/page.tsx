import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { HireMe } from "@/components/HireMe";
import { JsonLd } from "@/components/JsonLd";
import { ProofMetrics } from "@/components/ProofMetrics";
import { Research } from "@/components/Research";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { caseStudies } from "@/data/case-studies";
import { personJsonLd, websiteJsonLd } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={[personJsonLd(), websiteJsonLd()]} />
      <Hero />
      <ProofMetrics />
      <Services />
      <section className="section">
        <h2>Selected case studies</h2>
        <p className="section-support">
          Production automation and QA work with measurable outcomes.
        </p>
        <div className="content-grid">
          {caseStudies.slice(0, 3).map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>
      <TechStack />
      <ExperienceTimeline />
      <Research />
      <FAQ />
      <HireMe />
    </>
  );
}
