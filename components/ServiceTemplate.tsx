import Link from "next/link";
import { CaseStudyCard } from "./CaseStudyCard";
import { HireMe } from "./HireMe";
import { caseStudies } from "@/data/case-studies";
import { getService, type ServiceSlug } from "@/data/services";
import { renderMdx } from "@/lib/content";

export async function ServiceTemplate({ slug }: { slug: ServiceSlug }) {
  const service = getService(slug);
  const body = await renderMdx("services", slug);
  const related = caseStudies.filter((study) => service.caseStudies.includes(study.slug));

  return (
    <>
      <section className="page-header">
        <p className="eyebrow">Service</p>
        <h1>{service.title}</h1>
        <p className="lede">{service.summary}</p>
      </section>

      <section className="section split">
        <div>
          <h2>Problems this solves</h2>
          <ul className="bullet-list">
            {service.problems.map((problem) => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Proof</h2>
          <ul className="bullet-list">
            {service.proof.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <article className="section prose">{body}</article>

      <section className="section">
        <h2>Technologies</h2>
        <ul className="chip-list">
          {service.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>

      {related.length > 0 ? (
        <section className="section">
          <h2>Related case studies</h2>
          <div className="card-grid">
            {related.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </section>
      ) : null}

      <p className="support">
        More answers on the <Link href="/faq/">FAQ page</Link>.
      </p>

      <HireMe title={`Discuss a ${service.title.toLowerCase()} project`} />
    </>
  );
}
