import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { profile } from "@/data/profile";
import { buildMetadata } from "@/lib/metadata";
import { aboutJsonLd } from "@/lib/structured-data";

const description =
  "Hira Ahmed is an AI Engineer in Karachi, Pakistan, building production LLM pipelines, AI agents, and n8n automations, and providing B2B SaaS QA and API testing.";

export const metadata = buildMetadata({
  title: "About",
  description,
  path: "/about/",
});

const path = [
  { title: "QA", text: "Looking closely, writing down what broke, and not trusting the happy path." },
  { title: "Backend and automation", text: "Building the production systems behind a large AI tools directory." },
  { title: "AI engineering", text: "An assigned pipeline task that I had to figure out, and then didn't want to put down." },
  { title: "AI and reliability research", text: "The same habit, pointed at a harder question: how do you check what a model proposes?" },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-header">
        <p className="eyebrow">About</p>
        <h1>Hi, I&apos;m Hira</h1>
        <div className="prose">
          <p>I&apos;m probably a little too detail-oriented.</p>
          <p>
            I notice the thing everyone else skipped. Once I notice it, I have a hard time leaving it alone. I
            want to know why it&apos;s there, whether it matters, and what happens if you pull on it.
          </p>
          <p>
            When something doesn&apos;t work, my first instinct usually isn&apos;t to stop. It&apos;s to figure
            out why, find what I&apos;m missing, and look for another way.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="solve-title">
        <h2 id="solve-title">How I Solve Problems</h2>
        <div className="prose">
          <p>
            When a problem is messy, I try not to jump at the first fix. I want to understand what I&apos;m
            actually looking at. Then I write down what I don&apos;t know yet. That list of questions is
            usually more useful than a guess.
          </p>
          <p>
            After that I research: docs, examples, constraints, the almost-right answer hiding in someone
            else&apos;s notes. I try a route. If that route is a dead end, I look for another one instead of
            deciding the tool just can&apos;t do it. I tend to keep going until I understand what actually
            makes sense, not just the first answer that sounded fine.
          </p>
          <p>
            I also know when I&apos;m stuck. If I&apos;ve been staring at the same gap for too long, I ask
            someone. Not as a last-ditch save-me. More like: here&apos;s the exact piece I can&apos;t see.
          </p>
          <p>
            A self-hosted n8n workflow needed AWS CLI, and n8n didn&apos;t have a clean way to do that from
            the canvas. I could have stopped at &quot;the tool doesn&apos;t support it.&quot; Instead I put a
            small HTTP sidecar next to it, so the workflow could ask for that work and keep moving. I
            wasn&apos;t trying to be clever. I just didn&apos;t want the limitation to be the end of the
            sentence.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="detail-title">
        <h2 id="detail-title">A Little Too Detail-Oriented</h2>
        <div className="prose">
          <p>
            My friends would probably call me a nerdy perfectionist, and they wouldn&apos;t be wrong.
            Unfinished work bothers me. Missed details bother me. Something turning out very differently from
            what I expected bothers me more than I like to admit.
          </p>
          <p>
            I want things done properly, not just done. That can make me efficient. It can also make me sit
            too long on a problem that needed a smaller cut.
          </p>
          <p>
            One thing I&apos;ve had to learn is that doing everything myself isn&apos;t always the fastest way
            through. When a problem gets too big or messy, I break it into smaller pieces, figure out exactly
            where I&apos;m stuck, and ask for help. That&apos;s usually when it starts moving again.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="ask-title">
        <h2 id="ask-title">What People Come to Me For</h2>
        <div className="prose">
          <p>I seem to have become the person people ask when they need help figuring something out.</p>
          <p>
            It might be a project that&apos;s stuck, a bug that doesn&apos;t make sense, a technical choice
            they don&apos;t want to guess at, or what to do next in their work. I like sitting with someone
            else&apos;s messy question and helping them find a route they can actually take.
          </p>
        </div>
      </section>

      <section id="how-i-got-here" className="section" aria-labelledby="path-title">
        <h2 id="path-title">How I Got Here</h2>
        <div className="prose">
          <p>I didn&apos;t plan to become an AI engineer.</p>
          <p>
            I started in QA, which trained the habit I still use: look closely, write down what broke, don&apos;t
            trust the screen if the API disagrees. Then I moved into backend and automation, building the
            production systems behind a large AI tools directory.
          </p>
          <p>
            At some point I was assigned a pipeline task that involved AI. I had to figure it out. Once I
            actually built it and started running it, something clicked. I liked this work more than I
            expected. That pipeline still processes 28,000+ records, with status-gated LLM stages that record
            a failure instead of skipping it.
          </p>
          <p>
            That&apos;s what pulled me into AI engineering. The research came later from the same instinct: if
            a model proposes a change, I want a way to check it. Sentinel-Mesh is that question, as a
            preprint.
          </p>
          <p>
            Want to see the work behind that path? See my{" "}
            <Link href="/#experience">Professional Experience →</Link>
          </p>
        </div>
        <ol className="timeline">
          {path.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p className="support">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" aria-labelledby="outside-title">
        <h2 id="outside-title">Outside the Screen</h2>
        <div className="prose">
          <p>
            I love walking alone. Long walks make me feel more like myself than almost anything else. My head
            gets quiet. I come back clearer.
          </p>
          <p>
            I also like picking up a new tool or stack just to see what it can do. Trying things is how I
            learn, at work and outside it. I like new experiences, even small ones.
          </p>
          <p>
            And I enjoy shopping more than I probably need to admit. There&apos;s something oddly satisfying
            about buying something with money I earned myself.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="education-title">
        <h2 id="education-title">{profile.education.degree}</h2>
        <p className="support">{profile.education.institution}</p>
      </section>

      <section className="section" aria-labelledby="about-links-title">
        <h2 id="about-links-title">More About My Work</h2>
        <ul className="link-list">
          <li>
            <Link href="/#experience">Professional Experience →</Link>
          </li>
          <li>
            <Link href="/#services">Services I Offer →</Link>
          </li>
          <li>
            <Link href="/case-studies/">Case Studies →</Link>
          </li>
          <li>
            <Link href="/research/">Research →</Link>
          </li>
          <li>
            <Link href="/contact/">Contact →</Link>
          </li>
        </ul>
      </section>

      <JsonLd data={aboutJsonLd(description)} />
    </>
  );
}
