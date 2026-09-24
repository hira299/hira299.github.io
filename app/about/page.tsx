import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { profile } from "@/data/profile";
import { getLink } from "@/data/social-links";
import { buildMetadata } from "@/lib/metadata";
import { aboutJsonLd } from "@/lib/structured-data";

const description =
  "Hira Ahmed is an AI Engineer in Karachi, Pakistan, building production LLM pipelines, AI agents, and n8n automations, and providing B2B SaaS QA and API testing.";

export const metadata = buildMetadata({
  title: "About",
  description,
  path: "/about/",
});

const cares = [
  {
    title: "Build for failure",
    text: "A system that only works on the happy path is not finished. I care about timeouts, messy data, and the path nobody planned for.",
  },
  {
    title: "Practical AI",
    text: "Models are useful when they sit inside real tools, data, and constraints. I want the workflow to hold up after the demo.",
  },
  {
    title: "Test what you ship",
    text: "I would rather stress a system, break it, and understand the failure than talk about a version that only works once.",
  },
];

const path = [
  {
    title: "QA",
    text: "Started by testing other people's systems and writing down what broke.",
  },
  {
    title: "Backend and automation",
    text: "Moved into building the production pipeline, scrapers, and cloud systems behind a large directory.",
  },
  {
    title: "AI engineering",
    text: "Owned the LLM stages, structured outputs, and the automations that connect models to real data.",
  },
  {
    title: "AI and reliability research",
    text: "That production work led into research on checking AI-generated changes instead of trusting them.",
  },
];

export default function AboutPage() {
  const github = getLink("GitHub");

  return (
    <>
      <section className="page-header">
        <p className="eyebrow">About</p>
        <h1>About Hira</h1>
        <p className="lede">{profile.role}</p>
        <div className="prose">
          <p>I like building things that have to survive the real world.</p>
          <p>
            APIs fail. Data gets messy. LLMs return something unexpected. A workflow can look finished until
            someone tries the one path nobody planned for.
          </p>
          <p>That&apos;s the part I enjoy.</p>
          <p>
            I&apos;m an AI Engineer working across AI automation, LLM systems, backend engineering, and QA. I
            like building the system, testing the uncomfortable edge cases, and finding why something broke
            instead of only patching the symptom.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="care-title">
        <h2 id="care-title">What I care about</h2>
        <ul className="card-grid">
          {cares.map((item) => (
            <li key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="experience" className="section" aria-labelledby="path-title">
        <h2 id="path-title">How I got here</h2>
        <ol className="timeline">
          {path.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p className="support">{item.text}</p>
            </li>
          ))}
        </ol>
        <p className="link-row">
          <Link href="/#experience">View my experience →</Link>
        </p>
      </section>

      <section className="section" aria-labelledby="education-title">
        <h2 id="education-title">Education</h2>
        <p className="support">
          {profile.education.degree}
          <br />
          {profile.education.institution}
        </p>
      </section>

      <section className="section" aria-labelledby="human-title">
        <h2 id="human-title">A few human details</h2>
        <p className="support">
          I notice edge cases. I would rather spend the afternoon on a hard bug than on a demo that only works
          once. If something fails, I want the root cause, not a patch that hides it.
        </p>
      </section>

      <section className="section" aria-labelledby="about-links-title">
        <h2 id="about-links-title">More</h2>
        <ul className="link-list">
          <li>
            <Link href="/#experience">Experience →</Link>
          </li>
          <li>
            <Link href="/research/">Research →</Link>
          </li>
          {github ? (
            <li>
              <a href={github.href} target="_blank" rel="noopener noreferrer">
                GitHub →<span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          ) : null}
          <li>
            <Link href="/contact/">Contact →</Link>
          </li>
        </ul>
      </section>

      <JsonLd data={aboutJsonLd(description)} />
    </>
  );
}
